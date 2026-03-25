export const soilTypes = [
  "Alluvial Soil",
  "Black Cotton Soil",
  "Red Soil",
  "Laterite Soil",
  "Sandy Soil",
  "Loamy Soil",
  "Clay Soil",
  "Mountain Soil"
];

export const climateTypes = [
  "Tropical Wet",
  "Tropical Dry",
  "Subtropical Humid",
  "Temperate",
  "Semi-Arid",
  "Arid Desert",
  "Coastal Humid",
  "Highland Cool"
];

export const languages = [
  { code: "en", label: "English" },
  { code: "ta", label: "Tamil" },
  { code: "hi", label: "Hindi" },
  { code: "gu", label: "Gujarati" }
] as const;

export type LanguageCode = (typeof languages)[number]["code"];

export type TranslationDictionary = {
  appTitle: string;
  language: string;
  exportHistory: string;
  clearHistory: string;
  marketLink: string;
  selectSoilType: string;
  selectClimateType: string;
  askPlaceholder: string;
  getAdvice: string;
  tip: string;
  chatTitle: string;
  quickPrompts: string;
  cropHealth: string;
  farmChecklist: string;
  trendWatch: string;
  recentReplies: string;
  loginTitle: string;
  loginSubtitle: string;
  email: string;
  password: string;
  signIn: string;
  loginHint: string;
  onlineMarketTitle: string;
  onlineMarketSubtitle: string;
  back: string;
  searchCrop: string;
  search: string;
  dataNote: string;
  smartInsights: string;
  weatherBadge: string;
  copyReply: string;
  speakReply: string;
  logout: string;
};

export const dictionaries: Record<LanguageCode, TranslationDictionary> = {
  en: {
    appTitle: "AgroAI Assistant",
    language: "Language",
    exportHistory: "Export History",
    clearHistory: "Clear History",
    marketLink: "Online Market Linkage",
    selectSoilType: "Select Soil Type",
    selectClimateType: "Select Climate Zone",
    askPlaceholder: "Ask your agricultural question here...",
    getAdvice: "Get Advice",
    tip: "Tip: Keep asking follow-ups - the chat will remain continuous.",
    chatTitle: "Agro Advisory Chat",
    quickPrompts: "Quick Prompts",
    cropHealth: "Crop Health Signals",
    farmChecklist: "Farm Checklist",
    trendWatch: "Market Trend Watch",
    recentReplies: "Recent Replies",
    loginTitle: "Welcome Back",
    loginSubtitle: "Sign in to access your farm intelligence workspace.",
    email: "Email",
    password: "Password",
    signIn: "Sign In",
    loginHint: "Use the secure credentials configured in your environment.",
    onlineMarketTitle: "Online Market",
    onlineMarketSubtitle: "Search product MSP / Tamil Nadu mandi price info",
    back: "Back",
    searchCrop: "Search crop name",
    search: "Search",
    dataNote: "Prices are fetched from public datasets and may be partial.",
    smartInsights: "Smart Insights",
    weatherBadge: "Field Conditions",
    copyReply: "Copy Reply",
    speakReply: "Speak Reply",
    logout: "Logout"
  },
  ta: {
    appTitle: "AgroAI உதவியாளர்",
    language: "மொழி",
    exportHistory: "வரலாறு ஏற்றுமதி",
    clearHistory: "வரலாறு நீக்கு",
    marketLink: "ஆன்லைன் சந்தை இணைப்பு",
    selectSoilType: "மண் வகையை தேர்வு செய்க",
    selectClimateType: "காலநிலை பகுதியை தேர்வு செய்க",
    askPlaceholder: "உங்கள் வேளாண்மை கேள்வியை இங்கே கேளுங்கள்...",
    getAdvice: "ஆலோசனை பெறுக",
    tip: "குறிப்பு: தொடர்ந்து கேள்விகள் கேளுங்கள் - உரையாடல் தொடரும்.",
    chatTitle: "வேளாண்மை ஆலோசனை உரையாடல்",
    quickPrompts: "விரைவு கேள்விகள்",
    cropHealth: "பயிர் நிலை குறிப்புகள்",
    farmChecklist: "பண்ணை சரிபார்ப்பு பட்டியல்",
    trendWatch: "சந்தை போக்கு கண்காணிப்பு",
    recentReplies: "சமீபத்திய பதில்கள்",
    loginTitle: "மீண்டும் வரவேற்கிறோம்",
    loginSubtitle: "உங்கள் பண்ணை நுண்ணறிவு பணிமனைக்குள் நுழைய உள்நுழைக.",
    email: "மின்னஞ்சல்",
    password: "கடவுச்சொல்",
    signIn: "உள்நுழைக",
    loginHint: "உங்கள் சூழலில் அமைக்கப்பட்ட பாதுகாப்பான நுழைவு விவரங்களை பயன்படுத்தவும்.",
    onlineMarketTitle: "ஆன்லைன் சந்தை",
    onlineMarketSubtitle: "பொருள் MSP / தமிழ்நாடு சந்தை விலை தகவலை தேடுங்கள்",
    back: "பின்",
    searchCrop: "பயிர் பெயரை தேடுங்கள்",
    search: "தேடு",
    dataNote: "விலைகள் பொது தரவுகளில் இருந்து பெறப்படுகின்றன; சில நேரங்களில் முழுமையற்றதாக இருக்கலாம்.",
    smartInsights: "சிறப்பு அறிவுறுத்தல்கள்",
    weatherBadge: "வயல் நிலை",
    copyReply: "பதில் நகலெடு",
    speakReply: "பதிலை ஓதி கேட்க",
    logout: "வெளியேறு"
  },
  hi: {
    appTitle: "AgroAI सहायक",
    language: "भाषा",
    exportHistory: "इतिहास निर्यात करें",
    clearHistory: "इतिहास साफ करें",
    marketLink: "ऑनलाइन मार्केट लिंक",
    selectSoilType: "मिट्टी का प्रकार चुनें",
    selectClimateType: "जलवायु क्षेत्र चुनें",
    askPlaceholder: "अपना कृषि प्रश्न यहां पूछें...",
    getAdvice: "सलाह प्राप्त करें",
    tip: "सुझाव: आगे भी प्रश्न पूछते रहें - चैट जारी रहेगी।",
    chatTitle: "कृषि सलाह चैट",
    quickPrompts: "त्वरित प्रश्न",
    cropHealth: "फसल स्वास्थ्य संकेत",
    farmChecklist: "फार्म चेकलिस्ट",
    trendWatch: "बाजार रुझान निगरानी",
    recentReplies: "हाल के उत्तर",
    loginTitle: "फिर से स्वागत है",
    loginSubtitle: "अपने फार्म इंटेलिजेंस वर्कस्पेस तक पहुंचने के लिए साइन इन करें।",
    email: "ईमेल",
    password: "पासवर्ड",
    signIn: "साइन इन",
    loginHint: "अपने वातावरण में सेट किए गए सुरक्षित क्रेडेंशियल का उपयोग करें।",
    onlineMarketTitle: "ऑनलाइन मार्केट",
    onlineMarketSubtitle: "उत्पाद MSP / तमिलनाडु मंडी मूल्य जानकारी खोजें",
    back: "वापस",
    searchCrop: "फसल का नाम खोजें",
    search: "खोजें",
    dataNote: "कीमतें सार्वजनिक डेटा स्रोतों से ली जाती हैं और आंशिक हो सकती हैं।",
    smartInsights: "स्मार्ट इनसाइट्स",
    weatherBadge: "फील्ड कंडीशन",
    copyReply: "उत्तर कॉपी करें",
    speakReply: "उत्तर सुनें",
    logout: "लॉग आउट"
  },
  gu: {
    appTitle: "AgroAI સહાયક",
    language: "ભાષા",
    exportHistory: "ઇતિહાસ નિકાસ કરો",
    clearHistory: "ઇતિહાસ સાફ કરો",
    marketLink: "ઓનલાઇન માર્કેટ લિંકેજ",
    selectSoilType: "માટીનો પ્રકાર પસંદ કરો",
    selectClimateType: "હવામાન વિસ્તાર પસંદ કરો",
    askPlaceholder: "તમારો કૃષિ પ્રશ્ન અહીં પૂછો...",
    getAdvice: "સલાહ મેળવો",
    tip: "ટિપ: આગળના પ્રશ્નો પૂછતા રહો - ચેટ સતત રહેશે.",
    chatTitle: "કૃષિ સલાહ ચેટ",
    quickPrompts: "ઝડપી પ્રોમ્પ્ટ્સ",
    cropHealth: "પાક આરોગ્ય સંકેતો",
    farmChecklist: "ફાર્મ ચેકલિસ્ટ",
    trendWatch: "બજાર પ્રવૃત્તિ નજર",
    recentReplies: "તાજેતરના જવાબો",
    loginTitle: "ફરી આવકાર",
    loginSubtitle: "તમારા ફાર્મ ઇન્ટેલિજન્સ વર્કસ્પેસમાં પ્રવેશ માટે સાઇન ઇન કરો.",
    email: "ઈમેલ",
    password: "પાસવર્ડ",
    signIn: "સાઇન ઇન",
    loginHint: "તમારા પર્યાવરણમાં ગોઠવાયેલા સુરક્ષિત લૉગિન ક્રેડેન્શિયલ્સનો ઉપયોગ કરો.",
    onlineMarketTitle: "ઓનલાઇન માર્કેટ",
    onlineMarketSubtitle: "ઉત્પાદન MSP / તમિલનાડુ મંડી ભાવ માહિતી શોધો",
    back: "પાછા",
    searchCrop: "પાકનું નામ શોધો",
    search: "શોધો",
    dataNote: "ભાવ જાહેર ડેટાસેટમાંથી લેવામાં આવે છે અને આંશિક હોઈ શકે છે.",
    smartInsights: "સ્માર્ટ ઇનસાઇટ્સ",
    weatherBadge: "ક્ષેત્ર સ્થિતિ",
    copyReply: "જવાબ નકલ કરો",
    speakReply: "જવાબ સાંભળો",
    logout: "લોગઆઉટ"
  }
};

export const quickPrompts = [
  "Best crop recommendation for winter in black soil?",
  "How can I reduce pest attacks in chilli cultivation?",
  "Suggest irrigation timing for a semi-arid climate.",
  "What nutrients are usually low in sandy soils?"
];

export const advisoryChecklist = [
  "Check soil moisture before irrigation.",
  "Inspect leaves for fungal spotting.",
  "Review market price swings before harvest.",
  "Keep a pest log for the next 7 days."
];

export const marketFallback: Record<
  string,
  {
    crop: string;
    msp: string;
    price: string;
    shortDescription: string;
    healthBenefits: string;
    calories: string;
    arrivals: string;
    quality: string;
    trend: string;
  }
> = {
  wheat: {
    crop: "Wheat",
    msp: "Rs. 2425/quintal",
    price: "Rs. 24.25/kg",
    shortDescription: "Staple cereal grain widely used in flour, breads, and rotis.",
    healthBenefits: "Rich in fiber and plant protein; supports digestion and energy.",
    calories: "3.4 kcal/g",
    arrivals: "Steady arrivals in regulated markets",
    quality: "Fair to good quality lots reported",
    trend: "Stable to mildly firm"
  },
  rice: {
    crop: "Rice",
    msp: "Rs. 2300/quintal",
    price: "Rs. 25.80/kg",
    shortDescription: "Primary staple grain with broad consumer demand across India.",
    healthBenefits: "Good carbohydrate source with easy digestibility.",
    calories: "3.6 kcal/g",
    arrivals: "Moderate arrivals",
    quality: "Premium demand for clean, uniform grain",
    trend: "Firm seasonal demand"
  },
  tomato: {
    crop: "Tomato",
    msp: "Not applicable",
    price: "Rs. 18.00/kg",
    shortDescription: "Popular vegetable crop used fresh and in processed foods.",
    healthBenefits: "Contains lycopene, vitamin C, and antioxidants.",
    calories: "0.18 kcal/g",
    arrivals: "Volatile arrivals after rainfall",
    quality: "Price improves with shelf-stable sorted lots",
    trend: "Highly volatile"
  }
};
