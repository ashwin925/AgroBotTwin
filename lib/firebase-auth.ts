type FirebaseAuthResult = {
  localId: string;
  email: string;
  idToken: string;
};

function getFirebaseApiKey() {
  const apiKey = process.env.FIREBASE_API_KEY;
  if (!apiKey) {
    throw new Error("FIREBASE_API_KEY is not configured.");
  }
  return apiKey;
}

function mapFirebaseError(message?: string) {
  switch (message) {
    case "CONFIGURATION_NOT_FOUND":
      return "Firebase Authentication configuration was not found. In Firebase Console, select the project tied to this API key and enable Authentication with the Email/Password provider.";
    case "EMAIL_EXISTS":
      return "This email is already registered. Please sign in instead.";
    case "INVALID_LOGIN_CREDENTIALS":
    case "EMAIL_NOT_FOUND":
    case "INVALID_PASSWORD":
      return "Invalid email or password.";
    default:
      return message || "Firebase authentication failed.";
  }
}

async function firebaseRequest<T>(path: string, payload: Record<string, unknown>) {
  const response = await fetch(
    `https://identitytoolkit.googleapis.com/v1/${path}?key=${getFirebaseApiKey()}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    }
  );

  const data = (await response.json()) as T & {
    error?: {
      message?: string;
    };
  };

  if (!response.ok) {
    throw new Error(mapFirebaseError(data.error?.message));
  }

  return data;
}

export async function registerUser(input: {
  name: string;
  email: string;
  password: string;
}): Promise<FirebaseAuthResult> {
  const created = await firebaseRequest<FirebaseAuthResult>("accounts:signUp", {
    email: input.email,
    password: input.password,
    returnSecureToken: true
  });

  await firebaseRequest("accounts:update", {
    idToken: created.idToken,
    displayName: input.name,
    returnSecureToken: false
  });

  const projectId = process.env.FIREBASE_PROJECT_ID;
  if (projectId) {
    try {
      await fetch(
        `https://firestore.googleapis.com/v1/projects/${projectId}/databases/(default)/documents/users?documentId=${created.localId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${created.idToken}`
          },
          body: JSON.stringify({
            fields: {
              name: { stringValue: input.name },
              email: { stringValue: input.email },
              createdAt: { timestampValue: new Date().toISOString() }
            }
          })
        }
      );
    } catch {
      // Firestore profile creation is optional for the demo.
    }
  }

  return created;
}

export async function loginUser(input: {
  email: string;
  password: string;
}): Promise<FirebaseAuthResult> {
  return firebaseRequest<FirebaseAuthResult>("accounts:signInWithPassword", {
    email: input.email,
    password: input.password,
    returnSecureToken: true
  });
}
