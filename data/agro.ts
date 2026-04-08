export const soilTypes = [
  { id: "alluvial", labelKey: "soilAlluvial" },
  { id: "blackCotton", labelKey: "soilBlackCotton" },
  { id: "red", labelKey: "soilRed" },
  { id: "laterite", labelKey: "soilLaterite" },
  { id: "sandy", labelKey: "soilSandy" },
  { id: "loamy", labelKey: "soilLoamy" },
  { id: "clay", labelKey: "soilClay" },
  { id: "mountain", labelKey: "soilMountain" }
];

export const climateTypes = [
  { id: "tropicalWet", labelKey: "climateTropicalWet" },
  { id: "tropicalDry", labelKey: "climateTropicalDry" },
  { id: "subtropicalHumid", labelKey: "climateSubtropicalHumid" },
  { id: "temperate", labelKey: "climateTemperate" },
  { id: "semiArid", labelKey: "climateSemiArid" },
  { id: "aridDesert", labelKey: "climateAridDesert" },
  { id: "coastalHumid", labelKey: "climateCoastalHumid" },
  { id: "highlandCool", labelKey: "climateHighlandCool" }
];

export const languages = [
  { code: "en", label: "English" },
  { code: "ta", label: "Tamil" },
  { code: "hi", label: "Hindi" },
  { code: "bn", label: "Bengali" },
  { code: "mr", label: "Marathi" },
  { code: "te", label: "Telugu" },
  { code: "gu", label: "Gujarati" },
  { code: "ur", label: "Urdu" },
  { code: "kn", label: "Kannada" },
  { code: "or", label: "Odia" }
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
  smartInsights: string;
  weatherBadge: string;
  copyReply: string;
  speakReply: string;
  logout: string;
  checklist: string;
  questionsAsked: string;
  dailyNews: string;
  stockPrices: string;
  refresh: string;
  addTask: string;
  addNote: string;
  delete: string;
  completed: string;
  welcomeMessage: string;
  soilAlluvial: string;
  soilBlackCotton: string;
  soilRed: string;
  soilLaterite: string;
  soilSandy: string;
  soilLoamy: string;
  soilClay: string;
  soilMountain: string;
  climateTropicalWet: string;
  climateTropicalDry: string;
  climateSubtropicalHumid: string;
  climateTemperate: string;
  climateSemiArid: string;
  climateAridDesert: string;
  climateCoastalHumid: string;
  climateHighlandCool: string;
  stockFertilizers: string;
  stockSeeds: string;
  stockMachinery: string;
  stockFoodProcessing: string;
  stockPlantations: string;
  stockEdibleOils: string;
  newChat: string;
  chatHistory: string;
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
    smartInsights: "Smart Insights",
    weatherBadge: "Field Conditions",
    copyReply: "Copy Reply",
    speakReply: "Speak Reply",
    logout: "Logout",
    checklist: "Checklist",
    questionsAsked: "Questions Asked",
    dailyNews: "Daily News",
    stockPrices: "Stock Prices",
    refresh: "Refresh",
    addTask: "Add Task",
    addNote: "Add Note",
    delete: "Delete",
    completed: "Completed",
    soilAlluvial: "Alluvial Soil",
    soilBlackCotton: "Black Cotton Soil",
    soilRed: "Red Soil",
    soilLaterite: "Laterite Soil",
    soilSandy: "Sandy Soil",
    soilLoamy: "Loamy Soil",
    soilClay: "Clay Soil",
    soilMountain: "Mountain Soil",
    climateTropicalWet: "Tropical Wet",
    climateTropicalDry: "Tropical Dry",
    climateSubtropicalHumid: "Subtropical Humid",
    climateTemperate: "Temperate",
    climateSemiArid: "Semi-Arid",
    climateAridDesert: "Arid Desert",
    climateCoastalHumid: "Coastal Humid",
    climateHighlandCool: "Highland Cool",
    welcomeMessage: "Hello! I am AgroAI, your expert agricultural assistant.\n\nHow can I help you today? Please feel free to ask me anything about crop selection, soil management, pest control, yield optimization, or any other farming-related topic.",
    stockFertilizers: "Fertilisers and Agrochemicals",
    stockSeeds: "Seeds",
    stockMachinery: "Agricultural Machinery",
    stockFoodProcessing: "Food Processing",
    stockPlantations: "Plantations",
    stockEdibleOils: "Edible Oils",
    newChat: "New Chat",
    chatHistory: "Chat History"
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
    smartInsights: "சிறப்பு அறிவுறுத்தல்கள்",
    weatherBadge: "வயல் நிலை",
    copyReply: "பதில் நகலெடு",
    speakReply: "பதிலை ஓதி கேட்க",
    logout: "வெளியேறு",
    checklist: "சரிபார்ப்பு பட்டியல்",
    questionsAsked: "Questions Asked",
    dailyNews: "தினசரி செய்திகள்",
    stockPrices: "பங்கு விலைகள்",
    refresh: "Refresh",
    addTask: "Add Task",
    addNote: "Add Note",
    delete: "நீக்கு",
    completed: "முடிக்கப்பட்டது",
    welcomeMessage: "வணக்கம்! நான் AgroAI, உங்கள் நிபுணர் வேளாண்மை உதவியாளர்.\n\nஇன்று உங்களுக்கு எப்படி உதவ முடியும்? பயிர் தேர்வு, மண் மேலாண்மை, பூச்சி கட்டுப்பாடு, விளைச்சல் மேம்பாடு அல்லது வேளாண்மை தொடர்பான வேறு எந்த தலைப்பிலும் என்னை கேளுங்கள்.",
    soilAlluvial: "அல்லுவியல் மண்",
    soilBlackCotton: "கருப்பு பருத்தி மண்",
    soilRed: "சிவப்பு மண்",
    soilLaterite: "லேட்டரைட் மண்",
    soilSandy: "மணல் மண்",
    soilLoamy: "லோமி மண்",
    soilClay: "கிளே மண்",
    soilMountain: "மலை மண்",
    climateTropicalWet: "வெப்பமண்டல ஈரமான",
    climateTropicalDry: "வெப்பமண்டல வறண்ட",
    climateSubtropicalHumid: "உபவெப்பமண்டல ஈரமான",
    climateTemperate: "மிதவை",
    climateSemiArid: "அரை வறண்ட",
    climateAridDesert: "வறண்ட பாலைவன",
    climateCoastalHumid: "கடற்கரை ஈரமான",
    climateHighlandCool: "உயர்நில குளிர்ந்த",
    stockFertilizers: "உரங்கள் மற்றும் வேளாண் ரசாயனங்கள்",
    stockSeeds: "விதைகள்",
    stockMachinery: "வேளாண் இயந்திரங்கள்",
    stockFoodProcessing: "உணவு செயலாக்கம்",
    stockPlantations: "தோட்டங்கள்",
    stockEdibleOils: "உண்ணக்கூடிய எண்ணெய்கள்",
    newChat: "புதிய உரையாடல்",
    chatHistory: "உரையாடல் வரலாறு"
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
    smartInsights: "स्मार्ट इनसाइट्स",
    weatherBadge: "फील्ड कंडीशन",
    copyReply: "उत्तर कॉपी करें",
    speakReply: "उत्तर सुनें",
    logout: "लॉग आउट",
    checklist: "Checklist",
    questionsAsked: "Questions Asked",
    dailyNews: "Daily News",
    stockPrices: "Stock Prices",
    refresh: "Refresh",
    addTask: "Add Task",
    addNote: "Add Note",
    delete: "Delete",
    completed: "Completed",
    welcomeMessage: "Hello! I am AgroAI, your expert agricultural assistant.\n\nHow can I help you today? Please feel free to ask me anything about crop selection, soil management, pest control, yield optimization, or any other farming-related topic.",
    soilAlluvial: "अलुवियल मिट्टी",
    soilBlackCotton: "काली रत्ती मिट्टी",
    soilRed: "लाल मिट्टी",
    soilLaterite: "लेटेराइट मिट्टी",
    soilSandy: "रेतीली मिट्टी",
    soilLoamy: "लोमी मिट्टी",
    soilClay: "चिकनी मिट्टी",
    soilMountain: "पर्वतीय मिट्टी",
    climateTropicalWet: "उष्णकटिबंधीय आर्द्र",
    climateTropicalDry: "उष्णकटिबंधीय शुष्क",
    climateSubtropicalHumid: "उप-उष्णकटिबंधीय आर्द्र",
    climateTemperate: "समशीतोष्ण",
    climateSemiArid: "अर्ध-शुष्क",
    climateAridDesert: "शुष्क रेगिस्तान",
    climateCoastalHumid: "तटीय आर्द्र",
    climateHighlandCool: "पहाड़ी ठंडा",
    stockFertilizers: "उर्वरक और कृषि रसायन",
    stockSeeds: "बीज",
    stockMachinery: "कृषि मशीनरी",
    stockFoodProcessing: "खाद्य प्रसंस्करण",
    stockPlantations: "बागान",
    stockEdibleOils: "खाद्य तेल",
    newChat: "नई चैट",
    chatHistory: "चैट इतिहास"
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
    smartInsights: "સ્માર્ટ ઇનસાઇટ્સ",
    weatherBadge: "ક્ષેત્ર સ્થિતિ",
    copyReply: "જવાબ નકલ કરો",
    speakReply: "જવાબ સાંભળો",
    logout: "લોગઆઉટ",
    checklist: "તપશીલી યાદી",
    questionsAsked: "પૂછાયેલા પ્રશ્નો",
    dailyNews: "દૈનિક સમાચાર",
    stockPrices: "સ્ટોક ભાવો",
    refresh: "રીફ્રેશ",
    addTask: "કાર્ય ઉમેરો",
    addNote: "નોટ ઉમેરો",
    delete: "રક્ષણ કરો",
    completed: "પૂર્ણ",
    soilAlluvial: "જલોઢ માટી",
    soilBlackCotton: "કાળું કપાસ માટી",
    soilRed: "લાલ માટી",
    soilLaterite: "લેટેરાઈટ માટી",
    soilSandy: "રેતાળ માટી",
    soilLoamy: "દોમટ માટી",
    soilClay: "માટલી માટી",
    soilMountain: "પર્વત માટી",
    climateTropicalWet: "ઉષ્ણકટિબંધી ભીનું",
    climateTropicalDry: "ઉષ્ણકટિબંધી શુષ્ક",
    climateSubtropicalHumid: "ઉપ-ઉષ્ણકટિબંધી ભીનું",
    climateTemperate: "સમશીતોષ્ણ",
    climateSemiArid: "અર્ધ-શુષ્ક",
    climateAridDesert: "શુષ્ક રણ",
    climateCoastalHumid: "દરિયાકાંઠે ભીનું",
    climateHighlandCool: "ઉચ્ચભૂમિ ઠંડુ",
    welcomeMessage: "હેલો! હું AgroAI છું, તમારો નિષ્ણાત કૃષિ સહાયક.\n\nআજે હું તમને કેવી રીતે મદદ કરી શકું? પાક પસંદગી, માટી વ્યવસ્થાપન, જીવાત નિયંત્રણ, ઉત્પાદન ઑપ્ટિમાઇઝેશન અથવા કૃષિ સંબંધિત કોઈપણ અન્ય વિષયમાં મને પૂછો.",
    stockFertilizers: "ખાતર અને કૃષિ રસાયણો",
    stockSeeds: "બીજ",
    stockMachinery: "કૃષિ મશીનરી",
    stockFoodProcessing: "ખાદ્ય પ્રક્રિયા",
    stockPlantations: "બાગાયત",
    stockEdibleOils: "ખાદ્ય તેલ",
    newChat: "નવી ચેટ",
    chatHistory: "ચેટ ઇતિહાસ"
  },
  bn: {
    appTitle: "AgroAI সহায়ক",
    language: "ভাষা",
    exportHistory: "ইতিহাস রপ্তানি করুন",
    clearHistory: "ইতিহাস সাফ করুন",
    marketLink: "অনলাইন মার্কেট লিঙ্ক",
    selectSoilType: "মাটির ধরন নির্বাচন করুন",
    selectClimateType: "জলবায়ু অঞ্চল নির্বাচন করুন",
    askPlaceholder: "আপনার কৃষি প্রশ্ন এখানে জিজ্ঞাসা করুন...",
    getAdvice: "পরামর্শ পান",
    tip: "পরামর্শ: অনুসরণ করে জিজ্ঞাসা করুন - চ্যাট চলতে থাকবে।",
    chatTitle: "কৃষি পরামর্শ চ্যাট",
    quickPrompts: "দ্রুত প্রম্পট",
    cropHealth: "ফসল স্বাস্থ্য সংকেত",
    farmChecklist: "ফার্ম চেকলিস্ট",
    trendWatch: "বাজার প্রবণতা নজর",
    recentReplies: "সাম্প্রতিক উত্তর",
    loginTitle: "আবার স্বাগতম",
    loginSubtitle: "আপনার ফার্ম ইন্টেলিজেন্স ওয়ার্কস্পেস অ্যাক্সেস করতে সাইন ইন করুন।",
    email: "ইমেল",
    password: "পাসওয়ার্ড",
    signIn: "সাইন ইন",
    loginHint: "আপনার পরিবেশে সেট করা সুরক্ষিত ক্রেডেনশিয়াল ব্যবহার করুন।",
    onlineMarketTitle: "অনলাইন মার্কেট",
    onlineMarketSubtitle: "পণ্য MSP / তামিলনাডু মণ্ডি মূল্য তথ্য অনুসন্ধান করুন",
    back: "পিছনে",
    searchCrop: "ফসলের নাম অনুসন্ধান করুন",
    search: "অনুসন্ধান",
    smartInsights: "স্মার্ট ইনসাইটস",
    weatherBadge: "ফিল্ড কন্ডিশন",
    copyReply: "উত্তর কপি করুন",
    speakReply: "উত্তর শুনুন",
    logout: "লগ আউট",
    checklist: "চেকলিস্ট",
    questionsAsked: "প্রশ্ন জিজ্ঞাসা করা",
    dailyNews: "দৈনিক সংবাদ",
    stockPrices: "স্টক মূল্য",
    refresh: "রিফ্রেশ",
    addTask: "কাজ যোগ করুন",
    addNote: "নোট যোগ করুন",
    delete: "মুছুন",
    completed: "সম্পন্ন",
    soilAlluvial: "পলিমাটি",
    soilBlackCotton: "কালো তুলামাটি",
    soilRed: "লাল মাটি",
    soilLaterite: "ল্যাটেরাইট মাটি",
    soilSandy: "বালুকাময় মাটি",
    soilLoamy: "দোআঁশ মাটি",
    soilClay: "কাদামাটি",
    soilMountain: "পাহাড়ি মাটি",
    climateTropicalWet: "ক্রান্তীয় আর্দ্র",
    climateTropicalDry: "ক্রান্তীয় শুষ্ক",
    climateSubtropicalHumid: "উপক্রান্তীয় আর্দ্র",
    climateTemperate: "নাতিশীতোষ্ণ",
    climateSemiArid: "অর্ধ-শুষ্ক",
    climateAridDesert: "শুষ্ক মরুভূমি",
    climateCoastalHumid: "উপকূলীয় আর্দ্র",
    climateHighlandCool: "উচ্চভূমি শীতল",
    welcomeMessage: "হ্যালো! আমি AgroAI, আপনার বিশেষজ্ঞ কৃষি সহায়ক।\n\nআজ আমি আপনাকে কীভাবে সাহায্য করতে পারি? ফসল নির্বাচন, মাটি ব্যবস্থাপনা, কীটপতঙ্গ নিয়ন্ত্রণ, ফলন অপটিমাইজেশন বা কৃষি সম্পর্কিত অন্য কোনো বিষয়ে আমাকে প্রশ্ন করুন।",
    stockFertilizers: "সার এবং কৃষি রাসায়নিক",
    stockSeeds: "বীজ",
    stockMachinery: "কৃষি যন্ত্রপাতি",
    stockFoodProcessing: "খাদ্য প্রক্রিয়াকরণ",
    stockPlantations: "বাগান",
    stockEdibleOils: "খাদ্য তেল",
    newChat: "নতুন চ্যাট",
    chatHistory: "চ্যাট ইতিহাস"
  },
  mr: {
    appTitle: "AgroAI सहाय्यक",
    language: "भाषा",
    exportHistory: "इतिहास निर्यात करा",
    clearHistory: "इतिहास साफ करा",
    marketLink: "ऑनलाइन मार्केट लिंक",
    selectSoilType: "मातीचा प्रकार निवडा",
    selectClimateType: "हवामान क्षेत्र निवडा",
    askPlaceholder: "तुमचा कृषी प्रश्न येथे विचारा...",
    getAdvice: "सल्ला मिळवा",
    tip: "टीप: पुढे प्रश्न विचारत रहा - चॅट सुरू राहील.",
    chatTitle: "कृषी सल्ला चॅट",
    quickPrompts: "द्रुत प्रॉम्प्ट",
    cropHealth: "पिक आरोग्य संकेत",
    farmChecklist: "फार्म चेकलिस्ट",
    trendWatch: "बाजार ट्रेंड वॉच",
    recentReplies: "अलीकडील उत्तर",
    loginTitle: "परत स्वागत",
    loginSubtitle: "तुमच्या फार्म इंटेलिजन्स वर्कस्पेसमध्ये प्रवेश करण्यासाठी साइन इन करा.",
    email: "ईमेल",
    password: "पासवर्ड",
    signIn: "साइन इन",
    loginHint: "तुमच्या पर्यावरणात सेट केलेले सुरक्षित क्रेडेन्शियल वापरा.",
    onlineMarketTitle: "ऑनलाइन मार्केट",
    onlineMarketSubtitle: "उत्पादन MSP / तामिळनाडू मंडी किंमत माहिती शोधा",
    back: "मागे",
    searchCrop: "पिकाचे नाव शोधा",
    search: "शोधा",
    smartInsights: "स्मार्ट इनसाइट्स",
    weatherBadge: "फील्ड कंडिशन",
    copyReply: "उत्तर कॉपी करा",
    speakReply: "उत्तर ऐका",
    logout: "लॉग आउट",
    checklist: "चेकलिस्ट",
    questionsAsked: "पूछे गए प्रश्न",
    dailyNews: "दैनिक समाचार",
    stockPrices: "स्टॉक मूल्य",
    refresh: "रीफ्रेश",
    addTask: "कार्य जोडा",
    addNote: "टिप्पणी जोडा",
    delete: "हटवा",
    completed: "पूर्ण",
    soilAlluvial: "जलोढ मातीलोम",
    soilBlackCotton: "काळी कपास मातीलोम",
    soilRed: "लाल मातीलोम",
    soilLaterite: "लॅटेराइट मातीलोम",
    soilSandy: "वाळूकळ मातीलोम",
    soilLoamy: "दोमट मातीलोम",
    soilClay: "चिकणमातीलोम",
    soilMountain: "पर्वत मातीलोम",
    climateTropicalWet: "उष्ण कटिबधीय आर्द्र",
    climateTropicalDry: "उष्ण कटिबधीय कोरडे",
    climateSubtropicalHumid: "उप-उष्ण कटिबधीय आर्द्र",
    climateTemperate: "समशीतोष्ण",
    climateSemiArid: "अर्ध-कोरडे",
    climateAridDesert: "कोरडे रेगिस्तान",
    climateCoastalHumid: "किनारी आर्द्र",
    climateHighlandCool: "उच्च भूमी थंड",
    stockFertilizers: "उर्वरक आणि कृषी रसायने",
    stockSeeds: "बीजे",
    stockMachinery: "कृषी यंत्रसामग्री",
    stockFoodProcessing: "अन्न प्रक्रिया",
    stockPlantations: "वनवाटिका",
    stockEdibleOils: "खाद्य तेल",
    newChat: "नवीन चॅट",
    chatHistory: "चॅट इतिहास",
    welcomeMessage: "नमस्कार! मी AgroAI आहे, तुम्हाला कृषी सहाय्यक.\n\nमी आज तुम्हाला कसे मदत करू शकतो? पिक निवड, मातीचे व्यवस्थापन, कीटक नियंत्रण, उत्पादन अनुकूलन किंवा कृषी संबंधित कोणत्याही विषयावर मला विचारुन घ्या."
  },
  te: {
    appTitle: "AgroAI సహాయకుడు",
    language: "భాష",
    exportHistory: "చరిత్ర ఎగుమతి చేయండి",
    clearHistory: "చరిత్ర తొలగించండి",
    marketLink: "ఆన్‌లైన్ మార్కెట్ లింక్",
    selectSoilType: "మట్టి రకాన్ని ఎంచుకోండి",
    selectClimateType: "వాతావరణ ప్రాంతాన్ని ఎంచుకోండి",
    askPlaceholder: "మీ వ్యవసాయ ప్రశ్నను ఇక్కడ అడగండి...",
    getAdvice: "సలహా పొందండి",
    tip: "సూచన: అనుసరించి అడగండి - చాట్ కొనసాగుతుంది.",
    chatTitle: "వ్యవసాయ సలహా చాట్",
    quickPrompts: "త్వరిత ప్రాంప్ట్‌లు",
    cropHealth: "పంట ఆరోగ్య సంకేతాలు",
    farmChecklist: "ఫార్మ్ చెక్‌లిస్ట్",
    trendWatch: "మార్కెట్ ట్రెండ్ వాచ్",
    recentReplies: "ఇటీవలి సమాధానాలు",
    loginTitle: "మళ్లీ స్వాగతం",
    loginSubtitle: "మీ ఫార్మ్ ఇంటెలిజెన్స్ వర్క్‌స్పేస్‌కు యాక్సెస్ చేయడానికి సైన్ ఇన్ చేయండి.",
    email: "ఇమెయిల్",
    password: "పాస్‌వర్డ్",
    signIn: "సైన్ ఇన్",
    loginHint: "మీ పరిసరాలలో సెట్ చేయబడిన సురక్షిత క్రెడెన్షియల్స్‌ను ఉపయోగించండి.",
    onlineMarketTitle: "ఆన్‌లైన్ మార్కెట్",
    onlineMarketSubtitle: "ఉత్పత్తి MSP / తమిళనాడు మండి ధర సమాచారం వెతకండి",
    back: "వెనుకకు",
    searchCrop: "పంట పేరు వెతకండి",
    search: "వెతకండి",
    smartInsights: "స్మార్ట్ ఇన్‌సైట్స్",
    weatherBadge: "ఫీల్డ్ కండిషన్",
    copyReply: "సమాధానం కాపీ చేయండి",
    speakReply: "సమాధానం వినండి",
    logout: "లాగ్ అవుట్",
    checklist: "చెక్‌లిస్ట్",
    questionsAsked: "అడిగిన ప్రశ్నలు",
    dailyNews: "దైనిక వార్తలు",
    stockPrices: "స్టాక్ ధరలు",
    refresh: "Refresh",
    addTask: "Add Task",
    addNote: "Add Note",
    delete: "Delete",
    completed: "Completed",
    soilAlluvial: "અલ્લૂવિયલ માટી",
    soilBlackCotton: "કાળા કોટન માટી",
    soilRed: "લાલ માટી",
    soilLaterite: "લેટેરાઇટ માટી",
    soilSandy: "કણકણિયા માટી",
    soilLoamy: "રાધ્ધુ માટી",
    soilClay: "માટલી માટી",
    soilMountain: "પર્વતીય માટી",
    climateTropicalWet: "ઊષ્ણકટિબધી ભીંજ",
    climateTropicalDry: "ઊષ્ણકટિબધી સૂકી",
    climateSubtropicalHumid: "ઉપ-ઊષ્ણકટિબધી ભીંજ",
    climateTemperate: "મધ્યમ",
    climateSemiArid: "અર્ધ-શુષ્ક",
    climateAridDesert: "શુષ્ક રણ",
    climateCoastalHumid: "સારીખ ચરમાતી ભીંજ",
    climateHighlandCool: "ઉચ્ચપ્રદેશ ઠંડક",
    stockFertilizers: "ખાદ અને કૃષિ રાસાયણ",
    stockSeeds: "વીઓ",
    stockMachinery: "કૃષિ મશીનરી",
    stockFoodProcessing: "ખોરાક પ્રોસેસિંગ",
    stockPlantations: "પ્લાન્ટેશનો",
    stockEdibleOils: "ખાદ્ય તેલ",
    newChat: "નવੀਂ ચેટ",
    chatHistory: "ચેટ ઇતિહાસ",
    welcomeMessage: "હેલો! હું AgroAI છું, તમારો નિષ્ણાત કૃષિ સહાયક.\n\nઆજે હું તમને કેવી રીતે મદદ કરી શકું? કૃષિ પસંદગી, માટી મેનેજમેન્ટ, જીવાત નિયંત્રણ, ઉત્પાદન વધારવા અથવા કૃષિ સંબંધિત અન્ય કોઈપણ વિષય વિશે મને પૂછો."
  },
  ur: {
    appTitle: "AgroAI مددگار",
    language: "زبان",
    exportHistory: "تاریخ برآمد کریں",
    clearHistory: "تاریخ صاف کریں",
    marketLink: "آن لائن مارکیٹ لنک",
    selectSoilType: "مٹی کی قسم منتخب کریں",
    selectClimateType: "موسمی علاقہ منتخب کریں",
    askPlaceholder: "اپنا زرعی سوال یہاں پوچھیں...",
    getAdvice: "مشورہ حاصل کریں",
    tip: "ٹپ: آگے پوچھتے رہیں - چیٹ جاری رہے گی۔",
    chatTitle: "زرعی مشورہ چیٹ",
    quickPrompts: "تیزی سے پرامپٹ",
    cropHealth: "فصل کی صحت کے اشارے",
    farmChecklist: "فارم چیک لسٹ",
    trendWatch: "مارکیٹ رجحان واچ",
    recentReplies: "حالیہ جوابات",
    loginTitle: "دوبارہ خوش آمدید",
    loginSubtitle: "اپنے فارم انٹیلیجنس ورک اسپیس تک رسائی کے لیے سائن ان کریں۔",
    email: "ای میل",
    password: "پاس ورڈ",
    signIn: "سائن ان",
    loginHint: "اپنے ماحول میں سیٹ کیے گئے محفوظ اسناد استعمال کریں۔",
    onlineMarketTitle: "آن لائن مارکیٹ",
    onlineMarketSubtitle: "پروڈکٹ MSP / تمل ناڈو منڈی قیمت معلومات تلاش کریں",
    back: "پیچھے",
    searchCrop: "فصل کا نام تلاش کریں",
    search: "تلاش کریں",
    smartInsights: "سمارٹ انسائٹس",
    weatherBadge: "فیلڈ کنڈیشن",
    copyReply: "جواب کاپی کریں",
    speakReply: "جواب سنو",
    logout: "لاگ آؤٹ",
    checklist: "چیک لسٹ",
    questionsAsked: "پوچھے گئے سوالات",
    dailyNews: "روزانہ کی خبریں",
    stockPrices: "اسٹاک کی قیمتیں",
    refresh: "تازہ کریں",
    addTask: "کام شامل کریں",
    addNote: "نوٹ شامل کریں",
    delete: "حذف کریں",
    completed: "مکمل",
    soilAlluvial: "پلاویہ مٹی",
    soilBlackCotton: "سیاہ رائی مٹی",
    soilRed: "سرخ مٹی",
    soilLaterite: "لیٹائٹ مٹی",
    soilSandy: "ریتیلی مٹی",
    soilLoamy: "دومٹی مٹی",
    soilClay: "چکنی مٹی",
    soilMountain: "پہاڑی مٹی",
    climateTropicalWet: "گرم مرطوب",
    climateTropicalDry: "گرم خشک",
    climateSubtropicalHumid: "نیم گرم مرطوب",
    climateTemperate: "اعتدال پسند",
    climateSemiArid: "نیم خشک",
    climateAridDesert: "خشک صحرا",
    climateCoastalHumid: "ساحلی مرطوب",
    climateHighlandCool: "پہاڑی ٹھنڈا",
    stockFertilizers: "کھاد اور کیمیائی کھاد",
    stockSeeds: "بیج",
    stockMachinery: "زرعی مشینری",
    stockFoodProcessing: "کھانی کی پروسیسنگ",
    stockPlantations: "بागات",
    stockEdibleOils: "خوردنی تیلیں",
    newChat: "نیا چیٹ",
    chatHistory: "چیٹ کی تاریخ",
    welcomeMessage: "السلام علیکم! میں AgroAI ہوں، آپ کی ماہر زرعی معاون۔\n\nمیں آج آپ کی کیسے مدد کر سکتا ہوں؟ فصل کے انتخاب، مٹی کے انتظام، کীڑوں کے کنٹرول، پیداوار کی بہتری یا کسی بھی زرعی موضوع پر مجھ سے سوال پوچھیں۔"
  },
  kn: {
    appTitle: "AgroAI ಸಹಾಯಕ",
    language: "ಭಾಷೆ",
    exportHistory: "ಇತಿಹಾಸ ರಫ್ತು ಮಾಡಿ",
    clearHistory: "ಇತಿಹಾಸ ತೆರವುಗೊಳಿಸಿ",
    marketLink: "ಆನ್‌ಲೈನ್ ಮಾರುಕಟ್ಟೆ ಲಿಂಕ್",
    selectSoilType: "ಮಣ್ಣಿನ ಪ್ರಕಾರವನ್ನು ಆಯ್ಕೆ ಮಾಡಿ",
    selectClimateType: "ಜಲವಾಯು ಪ್ರದೇಶವನ್ನು ಆಯ್ಕೆ ಮಾಡಿ",
    askPlaceholder: "ನಿಮ್ಮ ಕೃಷಿ ಪ್ರಶ್ನೆಯನ್ನು ಇಲ್ಲಿ ಕೇಳಿ...",
    getAdvice: "ಸಲಹೆ ಪಡೆಯಿರಿ",
    tip: "ಸಲಹೆ: ಮುಂದುವರಿಸಿ ಕೇಳಿ - ಚಾಟ್ ಮುಂದುವರಿಯುತ್ತದೆ.",
    chatTitle: "ಕೃಷಿ ಸಲಹೆ ಚಾಟ್",
    quickPrompts: "ತ್ವರಿತ ಪ್ರಾಂಪ್ಟ್‌ಗಳು",
    cropHealth: "ಬೆಳೆ ಆರೋಗ್ಯ ಸಂಕೇತಗಳು",
    farmChecklist: "ಫಾರ್ಮ್ ಚೆಕ್‌ಲಿಸ್ಟ್",
    trendWatch: "ಮಾರುಕಟ್ಟೆ ಟ್ರೆಂಡ್ ವಾಚ್",
    recentReplies: "ಇತ್ತೀಚಿನ ಉತ್ತರಗಳು",
    loginTitle: "ಮತ್ತೆ ಸ್ವಾಗತ",
    loginSubtitle: "ನಿಮ್ಮ ಫಾರ್ಮ್ ಇಂಟೆಲಿಜೆನ್ಸ್ ವರ್ಕ್‌ಸ್ಪೇಸ್‌ಗೆ ಪ್ರವೇಶಿಸಲು ಸೈನ್ ಇನ್ ಮಾಡಿ.",
    email: "ಇಮೇಲ್",
    password: "ಪಾಸ್‌ವರ್ಡ್",
    signIn: "ಸೈನ್ ಇನ್",
    loginHint: "ನಿಮ್ಮ ಪರಿಸರದಲ್ಲಿ ಹೊಂದಿಸಿದ ಸುರಕ್ಷಿತ ರುಜುವಾತುಗಳನ್ನು ಬಳಸಿ.",
    onlineMarketTitle: "ಆನ್‌ಲೈನ್ ಮಾರುಕಟ್ಟೆ",
    onlineMarketSubtitle: "ಉತ್ಪನ್ನ MSP / ತಮಿಳುನಾಡು ಮಂಡಿ ಬೆಲೆ ಮಾಹಿತಿ ಹುಡುಕಿ",
    back: "ಹಿಂತಿರುಗಿ",
    searchCrop: "ಬೆಳೆಯ ಹೆಸರನ್ನು ಹುಡುಕಿ",
    search: "ಹುಡುಕಿ",
    smartInsights: "ಸ್ಮಾರ್ಟ್ ಇನ್‌ಸೈಟ್‌ಗಳು",
    weatherBadge: "ಫೀಲ್ಡ್ ಕಂಡಿಶನ್",
    copyReply: "ಉತ್ತರ ನಕಲಿಸಿ",
    speakReply: "ಉತ್ತರ ಕೇಳಿ",
    logout: "ಲಾಗ್ ಔಟ್",
    checklist: "ಚೆಕ್‌ಲಿಸ್ಟ್",
    questionsAsked: "ಕೇಳಿದ ಪ್ರಶ್ನೆಗಳು",
    dailyNews: "ದೈನಿಕ ಸುದ್ದಿ",
    stockPrices: "ಸ್ಟಾಕ್ ಬೆಲೆಗಳು",
    refresh: "ರಿಫ್ರೆಶ್",
    addTask: "ಕಾರ್ಯವನ್ನು ಸೇರಿಸಿ",
    addNote: "ಟಿಪ್ಪಣಿ ಸೇರಿಸಿ",
    delete: "ಅಳಿಸಿ",
    completed: "ಪೂರ್ಣ",
    soilAlluvial: "ಪಳ್ಳಾ ಮಣ್ಣು",
    soilBlackCotton: "ಕಪ್ಪು ಪಟ್ಟಿ ಮಣ್ಣು",
    soilRed: "ಕೆಂಪು ಮಣ್ಣು",
    soilLaterite: "ಲ್ಯಾಟೆರೈಟ್ ಮಣ್ಣು",
    soilSandy: "ಮರಳು ಮಣ್ಣು",
    soilLoamy: "ದೋ-ಮಾಟಿ ಮಣ್ಣು",
    soilClay: "ಸಿಮೆಂಟು ಮಣ್ಣು",
    soilMountain: "ಪರ್ವತ ಮಣ್ಣು",
    climateTropicalWet: "ಉಷ್ಣ ಸಿದ್ಧ",
    climateTropicalDry: "ಉಷ್ಣ ಶುಷ್ಕ",
    climateSubtropicalHumid: "ಉಪ-ಉಷ್ಣ ಸಿದ್ಧ",
    climateTemperate: "ನಿಯಮ ತಾಪಮಾನ",
    climateSemiArid: "ಅರ್ಧ-ಶುಷ್ಕ",
    climateAridDesert: "ಶುಷ್ಕ ಮರುಭೂಮಿ",
    climateCoastalHumid: "ತೀರ ಸಿದ್ಧ",
    climateHighlandCool: "ಎತ್ತರದ ತಂಪು",
    stockFertilizers: "ಸಾರ ಮತ್ತು ಕೃಷಿ ರಸಾಯನಗಳು",
    stockSeeds: "ಬೀಜಗಳು",
    stockMachinery: "ಕೃಷಿ ಯಂತ್ರೋಪಕರಣಗಳು",
    stockFoodProcessing: "ಆಹಾರ ಪ್ರಕ್ರಿಯೆ",
    stockPlantations: "ತೋಪುಗಳು",
    stockEdibleOils: "ಊಟದ ಎಣ್ಣೆಗಳು",
    newChat: "ಹೊಸ ಚಾಟ್",
    chatHistory: "ಚಾಟ್ ಇತಿಹಾಸ",
    welcomeMessage: "ಹಲೋ! ನಾನು AgroAI, ನಿಮ್ಮ ತನಿಖೆ ಕೃಷಿ ಸಹಾಯಕ.\n\nನಾನು ಇಂದು ನಿಮಗೆ ಹೇಗೆ ಸಹಾಯ ಮಾಡಬಹುದು? ಪಟ್ಟಿ ನಿರ್ವಹಣೆ, ಮಣ್ಣು ನಿರ್ವಹಣೆ, ಕೀಟ ನಿಯಂತ್ರಣ, ಮೆಚ್ಚಿನ ಸುಧಾರಣೆ ಅಥವಾ ಕೃಷಿ ಸಂಬಂಧಿತ ಯಾವುದೇ ವಿಷಯ ಬಗ್ಗೆ ನನ್ನನ್ನು ಕೇಳಿ."
  },
  or: {
    appTitle: "AgroAI ସହାୟକ",
    language: "ଭାଷା",
    exportHistory: "ଇତିହାସ ରପ୍ତାନି କରନ୍ତୁ",
    clearHistory: "ଇତିହାସ ସଫା କରନ୍ତୁ",
    marketLink: "ଅନଲାଇନ୍ ମାର୍କେଟ୍ ଲିଂକ୍",
    selectSoilType: "ମାଟି ପ୍ରକାର ଚୟନ କରନ୍ତୁ",
    selectClimateType: "ଜଳବାୟୁ ଅଞ୍ଚଳ ଚୟନ କରନ୍ତୁ",
    askPlaceholder: "ଆପଣଙ୍କ କୃଷି ପ୍ରଶ୍ନ ଏଠାରେ ପଚାରନ୍ତୁ...",
    getAdvice: "ପରାମର୍ଶ ପାଆନ୍ତୁ",
    tip: "ଟିପ୍: ଆଗକୁ ପଚାରି ଚାଲିବା - ଚାଟ୍ ଜାରି ରହିବ।",
    chatTitle: "କୃଷି ପରାମର୍ଶ ଚାଟ୍",
    quickPrompts: "ତ୍ୱରିତ ପ୍ରମ୍ପ୍ଟ୍",
    cropHealth: "ଫସଲ ସ୍ୱାସ୍ଥ୍ୟ ସଂକେତ",
    farmChecklist: "ଫାର୍ମ୍ ଚେକ୍‌ଲିସ୍ଟ୍",
    trendWatch: "ମାର୍କେଟ୍ ଟ୍ରେଣ୍ଡ୍ ୱାଚ୍",
    recentReplies: "ସାମ୍ପ୍ରତିକ ଉତ୍ତର",
    loginTitle: "ପୁଣି ସ୍ୱାଗତ",
    loginSubtitle: "ଆପଣଙ୍କ ଫାର୍ମ୍ ଇଣ୍ଟେଲିଜେନ୍ସ୍ ୱର୍କସ୍ପେସ୍‌କୁ ଆକ୍ସେସ୍ କରିବାକୁ ସାଇନ୍ ଇନ୍ କରନ୍ତୁ।",
    email: "ଇମେଲ୍",
    password: "ପାସ୍‌ୱର୍ଡ୍",
    signIn: "ସାଇନ୍ ଇନ୍",
    loginHint: "ଆପଣଙ୍କ ପରିସରରେ ସେଟ୍ କରାଯାଇଥିବା ସୁରକ୍ଷିତ କ୍ରେଡେନ୍ଶିଯଲ୍ ବ୍ୟବହାର କରନ୍ତୁ।",
    onlineMarketTitle: "ଅନଲାଇନ୍ ମାର୍କେଟ୍",
    onlineMarketSubtitle: "ଉତ୍ପାଦ MSP / ତାମିଲନାଡୁ ମଣ୍ଡି ମୂଲ୍ୟ ସୂଚନା ଖୋଜନ୍ତୁ",
    back: "ପଛକୁ",
    searchCrop: "ଫସଲ ନାମ ଖୋଜନ୍ତୁ",
    search: "ଖୋଜନ୍ତୁ",
    smartInsights: "ସ୍ମାର୍ଟ୍ ଇନ୍‌ସାଇଟ୍‌ସ୍",
    weatherBadge: "ଫିଲ୍ଡ୍ କଣ୍ଡିଶନ୍",
    copyReply: "ଉତ୍ତର କପି କରନ୍ତୁ",
    speakReply: "ଉତ୍ତର ଶୁଣନ୍ତୁ",
    logout: "ଲଗ୍ ଆଉଟ୍",
    checklist: "ଚେକ୍‌ଲିସ୍ଟ",
    questionsAsked: "ପଚାରା ପ୍ରଶ୍ନ",
    dailyNews: "ଦୈନିକ ସମାଚାର",
    stockPrices: "ଷ୍ଟକ୍ ମୂଲ୍ୟ",
    refresh: "ଲୋଡ୍ କରନ୍ତୁ",
    addTask: "କାର୍ଯ୍ୟ ଯୋଗ କରନ୍ତୁ",
    addNote: "ନୋଟ୍ ଯୋଗ କରନ୍ତୁ",
    delete: "ଲୋପ କରନ୍ତୁ",
    completed: "ସମାପ୍ତ",
    soilAlluvial: "ଜଲୋଢମାଟି",
    soilBlackCotton: "କଳା ତୁଳାମାଟି",
    soilRed: "ଲାଲ ମାଟି",
    soilLaterite: "ଲେଟେରାଇଟ୍ ମାଟି",
    soilSandy: "ବାଲୁକାଶମ ମାଟି",
    soilLoamy: "ଦୋପାଗି ମାଟି",
    soilClay: "କାଦାମାଟି",
    soilMountain: "ପର୍ବତୀୟ ମାଟି",
    climateTropicalWet: "ଉଷ୍ଣଯାତୀୟ ଆର୍ଦ୍ର",
    climateTropicalDry: "ଉଷ୍ଣତାତୀୟ ଶୁଷ୍କ",
    climateSubtropicalHumid: "ଅନୁ-ଉଷ୍ଣତାତୀୟ ଆର୍ଦ୍ର",
    climateTemperate: "ସାମାନ୍ୟ",
    climateSemiArid: "ଅର୍ଦ୍ଧ-ଶୁଷ୍କ",
    climateAridDesert: "ଶୁଷ୍କ ମରୁଭୂମି",
    climateCoastalHumid: "ତଟୀୟ ଆର୍ଦ୍ର",
    climateHighlandCool: "ଉଚ୍ଚଭୂମି ଶୀତଳ",
    stockFertilizers: "ସାର ଏବଂ କୃଷି ରାସାୟଣ",
    stockSeeds: "ବୀଜ",
    stockMachinery: "କୃଷି ଯନ୍ତ୍ରପାତି",
    stockFoodProcessing: "ଖାଦ୍ୟ ପ୍ରକ୍ରିୟା",
    stockPlantations: "ଚାଷବାଡ଼ି",
    stockEdibleOils: "ଖାଦ୍ୟ ତେଲ",
    newChat: "ନୂତନ ଚାଟ୍",
    chatHistory: "ଚାଟ୍ ଇତିହାସ",
    welcomeMessage: "ନମସ୍ଥେ! ମୁଁ AgroAI, ଆପଣଙ୍କ ବିଶେଷଜ୍ଞ କୃଷି ସହାୟକ।\n\nଆଜ ମୁଁ ଆପଣକୁ କିପରି ସାହାଯ୍ୟ କରିପାରି? ଫସଲ ଚୟନ, ମାଟି ବ୍ୟବସ୍ଥାପନା, କୀଟନାଶକ ନିୟନ୍ତ୍ରଣ, ଫଳନ ଅପଟିମାଇଜେସନ ବା ଅନ୍ୟାନ୍ୟ କୃଷି ସଂବନ୍ଧୀୟ ବିଷୟରେ ମୋତେ ପଚାରନ୍ତୁ।"
  }
};

export const quickPromptsByLanguage: Record<LanguageCode, string[][]> = {
  en: [
    [
      "Best crop recommendation for winter in black soil?",
      "How can I reduce pest attacks in chilli cultivation?",
      "Suggest irrigation timing for a semi-arid climate.",
      "What nutrients are usually low in sandy soils?"
    ],
    [
      "How to improve soil fertility naturally?",
      "Best practices for organic farming?",
      "What are the signs of nutrient deficiency in plants?",
      "How to protect crops from extreme weather?"
    ],
    [
      "Recommended fertilizers for paddy cultivation?",
      "How to manage weed control effectively?",
      "What are the benefits of crop rotation?",
      "How to identify and treat fungal diseases?"
    ],
    [
      "Best irrigation methods for water conservation?",
      "How to increase yield in maize farming?",
      "What are the common pests in vegetable farming?",
      "How to prepare soil for planting?"
    ],
    [
      "Sustainable farming techniques for small farms?",
      "How to store grains to prevent spoilage?",
      "What are the market trends for organic produce?",
      "How to implement integrated pest management?"
    ]
  ],
  ta: [
    [
      "கருப்பு மண்ணில் குளிர்காலத்திற்கு சிறந்த பயிர் யார்?",
      "மிளகாய் பயிரில் பூச்சி தாக்கங்களை எப்படி குறைப்பது?",
      "அரை வறண்ட காலநிலைக்கான நீர்வழம் நேரத்தை பரிந்துரை செய்க.",
      "மணல் மண்ணில் பொதுவாக எந்த ஊட்டச்சத்துக்கள் குறைவாக இருக்கும்?"
    ],
    [
      "மணலின் சாந்தியை இயல்பாக எப்படி மேம்படுத்துவது?",
      "ஆர்கானிக் வேளாண்மைக்கு சிறந்த நடைமுறைகள்?",
      "தாவரங்களில் ஊட்டச்சத்து குறைவு அறிகுறிகள் என்ன?",
      "அதிக வானிலை மாற்றத்தால் பயிர்களை எப்படி பாதுகாக்கலாம்?"
    ],
    [
      "நெல் பயிர்க்கான பரிந்துரைக்கப்பட்ட உரங்கள் எவை?",
      "புல் கட்டுப்பாட்டை எவ்வாறு திறம்பட நிர்வகிப்பது?",
      "பயிர் சுற்றுமுறை பயன்கள் என்ன?",
      "பூஞ்சை நோய்களை எவ்வாறு கண்டறிந்து சிகிச்சை செய்ய வேண்டும்?"
    ],
    [
      "நீர் சேமிப்பிற்கான சிறந்த நீர்சேமிப்பு முறைகள் என்ன?",
      "மக்காச்சோளம் பயிரில் விளைச்சலை எப்படி அதிகரிப்பது?",
      "காய்கறி வேளாண்மையில் பொதுவான பூச்சிகள் யாவை?",
      "நடுவிடை நடுவர்த்தனைதிற்கான மண்ணை எப்படி தயார் செய்வது?"
    ],
    [
      "சிறிய பண்ணைகளுக்கு پایொருந்தக்கூடிய வேளாண்மைத்தொழில்நுட்பங்கள்?",
      "ஆபத்தைத் தவிர்க்க மக்காச்சோளம் எவ்வாறு சேமிப்பது?",
      "ஆர்கானிக் உற்பத்திக்கான சந்தை போக்குகள் என்ன?",
      "இணைக்கப்பட்ட பூச்சி மேலாண்மையை எவ்வாறு செயல்படுத்துவது?"
    ]
  ],
  hi: [
    [
      "काले मिट्टी में सर्दियों के लिए सर्वोत्तम फसल कौन सी है?",
      "मिर्च की खेती में कीट हमलों को कैसे कम कर सकता हूँ?",
      "अर्ध-शुष्क जलवायु के लिए सिंचाई समय सुझाएँ।",
      "रेतीली मिट्टी में आमतौर पर कौन से पोषक तत्व कम होते हैं?"
    ],
    [
      "मिट्टी की उर्वरता को प्राकृतिक रूप से कैसे सुधारें?",
      "जैविक खेती के लिए सर्वोत्तम अभ्यास?",
      "पौधों में पोषक तत्व की कमी के संकेत क्या हैं?",
      "कड़ी जलवायु स्थितियों से फसलों की रक्षा कैसे करें?"
    ],
    [
      "धान की खेती के लिए अनुशंसित उर्वरक कौन से हैं?",
      "घास नियंत्रण को प्रभावी ढंग से कैसे प्रबंधित करें?",
      "फसल चक्र के लाभ क्या हैं?",
      "फफूंद रोग की पहचान और उपचार कैसे करें?"
    ],
    [
      "जल संरक्षण के लिए सर्वोत्तम सिंचाई विधियाँ?",
      "मक्का की खेती में पैदावार कैसे बढ़ाएं?",
      "सब्जी खेती में सामान्य कीट कौन से हैं?",
      "रोपण के लिए मिट्टी को कैसे तैयार करें?"
    ],
    [
      "छोटी फार्मों के लिए टिकाऊ खेती तकनीक?",
      "अक्षय खराबी से बचाने के लिए अनाज कैसे स्टोर करें?",
      "जैविक उत्पाद के लिए बाजार प्रवृत्तियाँ क्या हैं?",
      "एकीकृत कीट प्रबंधन को कैसे लागू करें?"
    ]
  ],
  // fallback to English for other languages so the structure is complete
  bn: [
    [
      "কালো মাটিতে শীতের জন্য সেরা ফসল সুপারিশ কী?",
      "মরিচ চাষে কীট আক্রমণ কীভাবে কমাতে পারি?",
      "অর্ধ-শুষ্ক জলবায়ুর জন্য সেচের সময় সাজেস্ট করুন।",
      "বালুকাময় মাটিতে সাধারণত কোন পুষ্টি উপাদান কম থাকে?"
    ],
    [
      "মাটির উর্বরতা প্রাকৃতিকভাবে কীভাবে উন্নত করবেন?",
      "জৈব চাষের জন্য সেরা অনুশীলন?",
      "গাছপালায় পুষ্টি ঘাটতির লক্ষণগুলি কী?",
      "চরম আবহাওয়া থেকে ফসল রক্ষা কীভাবে করবেন?"
    ],
    [
      "ধান চাষের জন্য প্রস্তাবিত সার কী?",
      "আগাছা নিয়ন্ত্রণ কীভাবে কার্যকরভাবে পরিচালনা করবেন?",
      "ফসল ঘূর্ণনের সুবিধাগুলি কী?",
      "ছত্রাক রোগ কীভাবে চিহ্নিত এবং চিকিত্সা করবেন?"
    ],
    [
      "জল সংরক্ষণের জন্য সেরা সেচ পদ্ধতি?",
      "ভুট্টা চাষে ফলন কীভাবে বাড়াবেন?",
      "সবজি চাষে সাধারণ কীট কী?",
      "রোপণের জন্য মাটি কীভাবে প্রস্তুত করবেন?"
    ],
    [
      "ছোট খামারের জন্য টেকসই চাষ কৌশল?",
      "নষ্ট হওয়া থেকে রক্ষা করার জন্য শস্য কীভাবে সংরক্ষণ করবেন?",
      "জৈব পণ্যের জন্য বাজার প্রবণতা কী?",
      "সমন্বিত কীট ব্যবস্থাপনা কীভাবে বাস্তবায়ন করবেন?"
    ]
  ],
  mr: [
    [
      "काळ्या मातीत हिवाळ्यासाठी सर्वोत्तम पिक शिफारस कोणती?",
      "मिरची पिकामध्ये कीट हल्ले कसे कमी करू शकतो?",
      "अर्ध-कोरड्या हवामानासाठी पाणी देण्याची वेळ सुचवा।",
      "वाळूच्या मातीत सामान्यतः कोणती पोषक घटक कमी असतात?"
    ],
    [
      "मातीची सुपीकता नैसर्गिकरित्या कशी सुधारावी?",
      "जैविक शेतीसाठी सर्वोत्तम पद्धती?",
      "झाडांमध्ये पोषक घटकांच्या कमतरतेची लक्षणे कोणती?",
      "अत्यंत हवामानापासून पिके कशी संरक्षित करावी?"
    ],
    [
      "तांदूळ पिकासाठी शिफारस केलेली खतं कोणती?",
      "तण नियंत्रण प्रभावीपणे कसे व्यवस्थापित करावे?",
      "पिक परिवर्तनाचे फायदे कोणते?",
      "बुरशी रोग कसे ओळखावे आणि उपचार करावे?"
    ],
    [
      "पाणी संवर्धनासाठी सर्वोत्तम पाणी देण्याच्या पद्धती?",
      "मका पिकामध्ये उत्पादन कसे वाढवावे?",
      "भाजी पिकामध्ये सामान्य कीट कोणते?",
      "लावणी करण्यासाठी माती कशी तयार करावी?"
    ],
    [
      "लहान शेतांसाठी शाश्वत शेती तंत्र?",
      "धान्य खराब होण्यापासून रोखण्यासाठी कसे साठवावे?",
      "जैविक उत्पादनासाठी बाजार प्रवृत्ती कोणत्या?",
      "एकीकृत कीट व्यवस्थापन कसे अंमलात आणावे?"
    ]
  ],
  te: [
    [
      "నల్ల మట్టిలో శీతకాలానికి ఉత్తమ పంట సిఫార్సు ఏమిటి?",
      "మిర్చి పంటలో కీటక దాడులను ఎలా తగ్గించగలను?",
      "అర్ధ-ఎండ జలవాయువుకు నీటిపారుదల సమయాన్ని సూచించండి।",
      "ఇసుక మట్టిలో సాధారణంగా ఏ పోషకాలు తక్కువగా ఉంటాయి?"
    ],
    [
      "మట్టి సారవంతతను సహజంగా ఎలా మెరుగుపరచాలి?",
      "సేంద్రియ వ్యవసాయం కోసం ఉత్తమ పద్ధతులు?",
      "మొక్కలలో పోషక కొరత లక్షణాలు ఏమిటి?",
      "అత్యధిక వాతావరణం నుండి పంటలను ఎలా రక్షించాలి?"
    ],
    [
      "వరిగా పంట కోసం సిఫార్సు చేయబడిన ఎరువులు ఏమిటి?",
      "పుల్లు నియంత్రణను ప్రభావవంతంగా ఎలా నిర్వహించాలి?",
      "పంట చక్రం ప్రయోజనాలు ఏమిటి?",
      "శుష్క రోగాలను ఎలా గుర్తించి చికిత్స చేయాలి?"
    ],
    [
      "నీటి సంరక్షణ కోసం ఉత్తమ నీటిపారుదల పద్ధతులు?",
      "మొక్కచింద పంటలో దిగుబడిని ఎలా పెంచాలి?",
      "కూరగాయ పంటలలో సాధారణ కీటకాలు ఏమిటి?",
      "నాటడానికి మట్టిని ఎలా సిద్ధం చేయాలి?"
    ],
    [
      "చిన్న పంటల కోసం స్థిరమైన వ్యవసాయ పద్ధతులు?",
      "ధాన్యాలను చెడిపోకుండా ఎలా నిల్వ చేయాలి?",
      "సేంద్రియ ఉత్పత్తి కోసం మార్కెట్ ట్రెండ్‌లు ఏమిటి?",
      "సమగ్ర కీటక నిర్వహణను ఎలా అమలు చేయాలి?"
    ]
  ],
  gu: [
    [
      "કાળી માટીમાં શિયાળાની શ્રેષ્ઠ પાક ભલામણ શું છે?",
      "મરચા ખેતીમાં જંતુના હુમલાને કેવી રીતે ઘટાડી શકું?",
      "અર્ધ-શુષ્ક જમીન માટે સિંચાઈ સમય સૂચવો.",
      "રેતાળ માટીમાં સામાન્ય રીતે કયા પોષક તત્વો ઓછા હોય છે?"
    ],
    [
      "માટીની ફળદ્રુપતાને કુદરતી રીતે કેવી રીતે સુધારવી?",
      "સંસ્કૃતિક ખેતી માટે શ્રેષ્ઠ પ્રયાસો?",
      "છોડમાં પોષક તત્વોની ઉણપના ચિહ્નો શું છે?",
      "અત્યંત હવામાનથી પાકને કેવી રીતે બચાવવો?"
    ],
    [
      "ધાન ખેતી માટે ભલામણ કરેલ ખાતર શું છે?",
      "ઘાસનું નિયંત્રણ અસરકારક રીતે કેવી રીતે કરવું?",
      "પાક ફેરબદલીના ફાયદા શું છે?",
      "ફંગલ રોગોને કેવી રીતે ઓળખવા અને સારવાર કરવી?"
    ],
    [
      "પાણી સંરક્ષણ માટે શ્રેષ્ઠ સિંચાઈ પદ્ધતિઓ?",
      "મકાઈ ખેતીમાં ઉત્પાદન કેવી રીતે વધારવું?",
      "શાકભાજી ખેતીમાં સામાન્ય જંતુઓ શું છે?",
      "વાવણી માટે માટીને કેવી રીતે તૈયાર કરવી?"
    ],
    [
      "નાના ખેતરો માટે ટકાઉ ખેતી તકનીકો?",
      "અનાજને બગાડ ન થાય તે માટે કેવી રીતે સંગ્રહ કરવો?",
      "સંસ્કૃતિક ઉત્પાદન માટે માર્કેટ ટ્રેન્ડ્સ શું છે?",
      "સંકલિત જંતુ નિયંત્રણને કેવી રીતે અમલમાં મૂકવું?"
    ]
  ],
  ur: [
    [
      "سیاہ مٹی میں سردیوں کے لیے بہترین فصل کی سفارش کیا ہے؟",
      "مرچ کی کاشت میں کیڑوں کے حملوں کو کیسے کم کر سکتا ہوں؟",
      "نیم خشک آب و ہوا کے لیے آبیاری کا وقت تجویز کریں۔",
      "ریتلی مٹیوں میں عام طور پر کون سے غذائی اجزاء کم ہوتے ہیں؟"
    ],
    [
      "مٹی کی زرخیزی کو قدرتی طور پر کیسے بہتر بنایا جا سکتا ہے؟",
      "نامیاتی کاشتکاری کے لیے بہترین طریقے؟",
      "پودوں میں غذائی کمی کے نشانات کیا ہیں؟",
      "پیداوار کو انتہائی موسم سے کیسے بچایا جا سکتا ہے؟"
    ],
    [
      "چاول کی کاشت کے لیے تجویز کردہ کھاد کیا ہے؟",
      "گھاس کے کنٹرول کو مؤثر طریقے سے کیسے سنبھالا جا سکتا ہے؟",
      "فصل کی گردش کے فوائد کیا ہیں؟",
      "فنگل بیماریوں کی نشاندہی اور علاج کیسے کیا جا سکتا ہے؟"
    ],
    [
      "پانی کی حفاظت کے لیے بہترین آبیاری کے طریقے؟",
      "مکئی کی کاشت میں پیداوار کیسے بڑھائی جا سکتی ہے؟",
      "سبزیوں کی کاشت میں عام کیڑے کیا ہیں؟",
      "بوائی کے لیے مٹی کیسے تیار کی جا سکتی ہے؟"
    ],
    [
      "چھوٹے فارموں کے لیے پائیدار کاشتکاری کی تکنیکیں؟",
      "اناج کو خراب ہونے سے کیسے محفوظ رکھا جا سکتا ہے؟",
      "نامیاتی پیداوار کے لیے مارکیٹ کے رجحانات کیا ہیں؟",
      "انٹیگریٹڈ کیڑے مینجمنٹ کیسے لاگو کیا جا سکتا ہے؟"
    ]
  ],
  kn: [
    [
      "ಕಪ್ಪು ಮಣ್ಣಿನಲ್ಲಿ ಹಿಂದಿನ ಕಾಲಕ್ಕೆ ಉತ್ತಮ ಬೆಳೆ ಸಲಹೆ ಏನು?",
      "ಮೆಣಸಿನ ಬೆಳೆಯಲ್ಲಿ ಕೀಟ ದಾಳಿಗಳನ್ನು ಹೇಗೆ ಕಡಿಮೆ ಮಾಡಬಹುದು?",
      "ಅರ್ಧ-ಒಣ ಮೌಸಮಕ್ಕೆ ನೀರಾವರಿ ಸಮಯವನ್ನು ಸೂಚಿಸಿ.",
      "ಮರಳು ಮಣ್ಣಿನಲ್ಲಿ ಸಾಮಾನ್ಯವಾಗಿ ಯಾವ ಪೋಷಕಾಂಗಗಳು ಕಡಿಮೆ ಇರುತ್ತವೆ?"
    ],
    [
      "ಮಣ್ಣಿನ ಸಾರವತ್ತನವನ್ನು ಸ್ವಾಭಾವಿಕವಾಗಿ ಹೇಗೆ ಸುಧಾರಿಸಬಹುದು?",
      "ಸಾಂಸ್ಕೃತಿಕ ಕೃಷಿಗೆ ಉತ್ತಮ ಅಭ್ಯಾಸಗಳು?",
      "ಸಸ್ಯಗಳಲ್ಲಿ ಪೋಷಕ ಕೊರತೆಯ ಲಕ್ಷಣಗಳು ಏನು?",
      "ಅತ್ಯಂತ ಹವಾಮಾನದಿಂದ ಬೆಳೆಗಳನ್ನು ಹೇಗೆ ರಕ್ಷಿಸಬಹುದು?"
    ],
    [
      "ಅಕ್ಕಿ ಬೆಳೆಗೆ ಶಿಫಾರಸು ಮಾಡಿದ ಗೊಬ್ಬರಗಳು ಏನು?",
      "ಹುಲ್ಲು ನಿಯಂತ್ರಣವನ್ನು ಪರಿಣಾಮಕಾರಿಯಾಗಿ ಹೇಗೆ ನಿರ್ವಹಿಸಬಹುದು?",
      "ಬೆಳೆ ಚಕ್ರದ ಪ್ರಯೋಜನಗಳು ಏನು?",
      "ಫಂಗಲ್ ರೋಗಗಳನ್ನು ಹೇಗೆ ಗುರುತಿಸಿ ಚಿಕಿತ್ಸೆ ಮಾಡಬಹುದು?"
    ],
    [
      "ನೀರಿನ ಸಂರಕ್ಷಣೆಗೆ ಉತ್ತಮ ನೀರಾವರಿ ವಿಧಾನಗಳು?",
      "ಮೆಕ್ಕೆಜೋಳ ಬೆಳೆಯಲ್ಲಿ ಉತ್ಪಾದನೆಯನ್ನು ಹೇಗೆ ಹೆಚ್ಚಿಸಬಹುದು?",
      "ತರಕಾರಿ ಬೆಳೆಯಲ್ಲಿ ಸಾಮಾನ್ಯ ಕೀಟಗಳು ಏನು?",
      "ಬಿತ್ತನೆಗೆ ಮಣ್ಣನ್ನು ಹೇಗೆ ಸಿದ್ಧಪಡಿಸಬಹುದು?"
    ],
    [
      "ಚಿಕ್ಕ ಕೃಷಿ ಫಾರ್ಮ್‌ಗಳಿಗೆ ಸ್ಥಿರ ಕೃಷಿ ತಂತ್ರಗಳು?",
      "ಧಾನ್ಯಗಳನ್ನು ಹಾಳಾಗದಂತೆ ಹೇಗೆ ಸಂಗ್ರಹಿಸಬಹುದು?",
      "ಸಾಂಸ್ಕೃತಿಕ ಉತ್ಪನ್ನಗಳಿಗೆ ಮಾರುಕಟ್ಟೆ ಪ್ರವೃತ್ತಿಗಳು ಏನು?",
      "ಸಮಗ್ರ ಕೀಟ ನಿರ್ವಹಣೆಯನ್ನು ಹೇಗೆ ಅನುಷ್ಠಾನ ಮಾಡಬಹುದು?"
    ]
  ],
  or: [
    [
      "କଳା ମାଟିରେ ଶୀତକାଳ ପାଇଁ ସର୍ବୋତ୍ତମ ଫସଲ ସୁପାରିଶ କ’ଣ?",
      "ମରିଚ ଚାଷରେ କୀଟ ଆକ୍ରମଣକୁ କିପରି କମ୍ କରିପାରିବି?",
      "ଅର୍ଦ୍ଧ-ଶୁଷ୍କ ଜଳବାୟୁ ପାଇଁ ସିଞ୍ଚନ ସମୟ ସୁପାରିଶ କରନ୍ତୁ।",
      "ବାଲୁକା ମାଟିରେ ସାଧାରଣତଃ କେଉଁ ପୋଷଣକାରୀ ତତ୍ତ୍ତ୍ଵ କମ୍ ରହେ?"
    ],
    [
      "ମାଟିର ଉର୍ବରତାକୁ ପ୍ରାକୃତିକ ଭାବରେ କିପରି ଉନ୍ନତ କରିବା?",
      "ଜୈବିକ ଚାଷ ପାଇଁ ସର୍ବୋତ୍ତମ ଅଭ୍ୟାସ?",
      "ଉଦ୍ଭିଦରେ ପୋଷଣକାରୀ ଅଭାବର ଲକ୍ଷଣ କ’ଣ?",
      "ଅତ୍ୟଧିକ ପାଣିପାଗ ରୁ ଫସଲକୁ କିପରି ରକ୍ଷା କରିବା?"
    ],
    [
      "ଧାନ ଚାଷ ପାଇଁ ସୁପାରିଶ କରାଯାଇଥିବା ସାର କ’ଣ?",
      "ଘାସ ନିୟନ୍ତ୍ରଣକୁ ପ୍ରଭାବଶାଳୀ ଭାବରେ କିପରି ପରିଚାଳନା କରିବା?",
      "ଫସଲ ଆବର୍ତ୍ତନର ଲାଭ କ’ଣ?",
      "ଫଙ୍ଗସ୍ ରୋଗକୁ କିପରି ଚିହ୍ନଟ ଏବଂ ଚିକିତ୍ସା କରିବା?"
    ],
    [
      "ପାଣି ସଂରକ୍ଷଣ ପାଇଁ ସର୍ବୋତ୍ତମ ସିଞ୍ଚନ ପଦ୍ଧତି?",
      "ମକା ଚାଷରେ ଉତ୍ପାଦନକୁ କିପରି ବଢାଇବା?",
      "ଶାକସବ୍ଜି ଚାଷରେ ସାଧାରଣ କୀଟ କ’ଣ?",
      "ବୁଣିବା ପାଇଁ ମାଟିକୁ କିପରି ପ୍ରସ୍ତୁତ କରିବା?"
    ],
    [
      "ଛୋଟ ଫାର୍ମ ପାଇଁ ଟିକସୀ ଚାଷ କୌଶଳ?",
      "ଧାନ୍ୟକୁ ନଷ୍ଟ ହେବାରୁ କିପରି ସଂରକ୍ଷଣ କରିବା?",
      "ଜୈବିକ ଉତ୍ପାଦନ ପାଇଁ ବଜାର ଟ୍ରେଣ୍ଡ କ’ଣ?",
      "ସମନ୍ଵିତ କୀଟ ପରିଚାଳନାକୁ କିପରି ଅମଲ କରିବା?"
    ]
  ]
};

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
    price: "Rs. 24.90/kg",
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
    price: "Rs. 26.40/kg",
    shortDescription: "Primary staple grain with broad consumer demand across India.",
    healthBenefits: "Good carbohydrate source with easy digestibility.",
    calories: "3.6 kcal/g",
    arrivals: "Moderate to steady arrivals",
    quality: "Premium demand for clean, uniform grain",
    trend: "Firm seasonal demand"
  },
  tomato: {
    crop: "Tomato",
    msp: "Not applicable",
    price: "Rs. 22.00/kg",
    shortDescription: "Popular vegetable crop used fresh and in processed foods.",
    healthBenefits: "Contains lycopene, vitamin C, and antioxidants.",
    calories: "0.18 kcal/g",
    arrivals: "Volatile arrivals after rainfall",
    quality: "Price improves with shelf-stable sorted lots",
    trend: "Highly volatile"
  },
  maize: {
    crop: "Maize",
    msp: "Rs. 2225/quintal",
    price: "Rs. 23.50/kg",
    shortDescription: "Versatile grain used for food, feed, and industrial purposes.",
    healthBenefits: "Rich in carbohydrates and provides essential vitamins.",
    calories: "3.6 kcal/g",
    arrivals: "Good arrivals in major producing states",
    quality: "Demand for high-moisture, pest-free lots",
    trend: "Stable with seasonal demand"
  },
  pulses: {
    crop: "Pulses",
    msp: "Rs. 7000/quintal (Tur)",
    price: "Rs. 85.00/kg",
    shortDescription: "Protein-rich legumes essential for balanced diet.",
    healthBenefits: "High protein content, fiber, and minerals.",
    calories: "3.4 kcal/g",
    arrivals: "Moderate arrivals across markets",
    quality: "Premium for clean, uniform varieties",
    trend: "Firm due to protein demand"
  },
  sugarcane: {
    crop: "Sugarcane",
    msp: "Rs. 315/quintal",
    price: "Rs. 3.15/kg",
    shortDescription: "Tropical grass used primarily for sugar production.",
    healthBenefits: "Natural sweetener with some mineral content.",
    calories: "3.8 kcal/g",
    arrivals: "Seasonal arrivals in sugar mills",
    quality: "Based on sucrose content and purity",
    trend: "Linked to sugar prices"
  },
  cotton: {
    crop: "Cotton",
    msp: "Rs. 6710/quintal",
    price: "Rs. 67.10/kg",
    shortDescription: "Fiber crop used in textile industry.",
    healthBenefits: "Not typically consumed; used in clothing.",
    calories: "Not applicable",
    arrivals: "Major arrivals in cotton markets",
    quality: "Premium for long-staple, high-grade fiber",
    trend: "Influenced by textile demand"
  },
  groundnut: {
    crop: "Groundnut",
    msp: "Rs. 6897/quintal",
    price: "Rs. 71.20/kg",
    shortDescription: "Oilseed crop with edible nuts and oil.",
    healthBenefits: "Rich in healthy fats, protein, and vitamins.",
    calories: "5.6 kcal/g",
    arrivals: "Good arrivals in oilseed markets",
    quality: "Demand for bold, clean nuts",
    trend: "Stable with oil demand"
  },
  soybean: {
    crop: "Soybean",
    msp: "Rs. 4600/quintal",
    price: "Rs. 48.40/kg",
    shortDescription: "High-protein oilseed used for food and feed.",
    healthBenefits: "Complete protein source with essential amino acids.",
    calories: "4.5 kcal/g",
    arrivals: "Strong arrivals in soybean belt",
    quality: "Premium for high-protein varieties",
    trend: "Firm due to feed demand"
  },
  mustard: {
    crop: "Mustard",
    msp: "Rs. 5650/quintal",
    price: "Rs. 56.50/kg",
    shortDescription: "Oilseed crop used for oil and condiments.",
    healthBenefits: "Contains healthy fats and antioxidants.",
    calories: "4.7 kcal/g",
    arrivals: "Seasonal arrivals in mustard-growing areas",
    quality: "Demand for clean, uniform seeds",
    trend: "Stable with spice demand"
  },
  jowar: {
    crop: "Jowar",
    msp: "Rs. 3180/quintal",
    price: "Rs. 31.80/kg",
    shortDescription: "Drought-resistant millet used for food and feed.",
    healthBenefits: "Rich in fiber, iron, and antioxidants.",
    calories: "3.4 kcal/g",
    arrivals: "Moderate arrivals in millet markets",
    quality: "Premium for clean, pest-free grain",
    trend: "Growing demand for health foods"
  }
};
