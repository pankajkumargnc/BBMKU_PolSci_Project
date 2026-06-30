/**
 * BBMKU M.A. Political Science — Flashcard Data
 * ===============================================
 * Concept-Answer pairs for active recall study
 */

const FLASHCARD_DATA = [
  // ── Indian Constitution ──
  { category: "Indian Constitution", front_hi: "भारतीय संविधान कब लागू हुआ?", front_en: "When was the Indian Constitution enforced?", back_hi: "26 जनवरी 1950 (अधिनियमित: 26 नवंबर 1949)", back_en: "26 January 1950 (Enacted: 26 November 1949)" },
  { category: "Indian Constitution", front_hi: "प्रस्तावना में SSDDR का क्रम क्या है?", front_en: "What is the SSDDR order in the Preamble?", back_hi: "Sovereign → Socialist → Secular → Democratic → Republic (समाजवादी और धर्मनिरपेक्ष 42वें संशोधन, 1976 द्वारा जोड़े गए)", back_en: "Sovereign → Socialist → Secular → Democratic → Republic (Socialist & Secular added by 42nd Amendment, 1976)" },
  { category: "Indian Constitution", front_hi: "मूल अधिकार कहाँ से लिए गए?", front_en: "From where were Fundamental Rights taken?", back_hi: "अमेरिकी संविधान (Bill of Rights)", back_en: "American Constitution (Bill of Rights)" },
  { category: "Indian Constitution", front_hi: "DPSP कहाँ से लिए गए?", front_en: "From where were DPSP taken?", back_hi: "आयरिश संविधान", back_en: "Irish Constitution" },
  { category: "Indian Constitution", front_hi: "अनुच्छेद 32 को क्या कहा जाता है?", front_en: "What is Article 32 called?", back_hi: "संविधान का हृदय और आत्मा (डॉ. अम्बेडकर)", back_en: "Heart and Soul of the Constitution (Dr. Ambedkar)" },
  { category: "Indian Constitution", front_hi: "5 रिट (Writs) कौन से हैं?", front_en: "What are the 5 Writs?", back_hi: "बंदी प्रत्यक्षीकरण, परमादेश, प्रतिषेध, उत्प्रेषण, अधिकार पृच्छा", back_en: "Habeas Corpus, Mandamus, Prohibition, Certiorari, Quo-Warranto" },
  { category: "Indian Constitution", front_hi: "7वीं अनुसूची में कितनी सूचियां हैं?", front_en: "How many lists are in the 7th Schedule?", back_hi: "3 सूचियां: संघ (97), राज्य (66), समवर्ती (52)", back_en: "3 Lists: Union (97), State (66), Concurrent (52)" },
  { category: "Indian Constitution", front_hi: "भारतीय संघवाद को 'अर्ध-संघीय' किसने कहा?", front_en: "Who called Indian federalism 'Quasi-federal'?", back_hi: "के.सी. व्हीयर (K.C. Wheare)", back_en: "K.C. Wheare" },

  // ── Indian Political Thinkers ──
  { category: "Indian Thinkers", front_hi: "कौटिल्य का सप्तांग सिद्धांत — 7 अंग?", front_en: "Kautilya's Saptanga Theory — 7 organs?", back_hi: "राजा, अमात्य, जनपद, दुर्ग, कोष, दण्ड, मित्र", back_en: "Swami, Amatya, Janapada, Durg, Kosha, Danda, Mitra" },
  { category: "Indian Thinkers", front_hi: "कौटिल्य की षाड्गुण्य नीति — 6 रणनीतियां?", front_en: "Kautilya's Shadgunya — 6 strategies?", back_hi: "संधि, विग्रह, आसन, यान, संश्रय, द्वैधीभाव", back_en: "Sandhi, Vigraha, Asana, Yana, Samshraya, Dvaidhibhava" },
  { category: "Indian Thinkers", front_hi: "राजा राममोहन राय को क्या कहा जाता है?", front_en: "What is Raja Ram Mohan Roy called?", back_hi: "आधुनिक भारत का जनक / भारतीय पुनर्जागरण का भोर का तारा", back_en: "Father of Modern India / Morning Star of Indian Renaissance" },
  { category: "Indian Thinkers", front_hi: "गाँधीजी के सर्वोदय का स्रोत?", front_en: "Source of Gandhi's Sarvodaya?", back_hi: "जॉन रस्किन की 'अन्टू दिस लास्ट' (Unto This Last)", back_en: "John Ruskin's 'Unto This Last'" },
  { category: "Indian Thinkers", front_hi: "JP नारायण का प्रसिद्ध नारा?", front_en: "JP Narayan's famous slogan?", back_hi: "संपूर्ण क्रांति (Total Revolution) — 1974", back_en: "Total Revolution — 1974" },
  { category: "Indian Thinkers", front_hi: "अम्बेडकर की 'Annihilation of Caste' कब लिखी गई?", front_en: "When was Ambedkar's 'Annihilation of Caste' written?", back_hi: "1936 — जाति व्यवस्था के पूर्ण उन्मूलन का आह्वान", back_en: "1936 — Call for complete destruction of caste system" },
  { category: "Indian Thinkers", front_hi: "लोहिया ने किसकी वकालत की?", front_en: "What did Lohia advocate?", back_hi: "सप्त क्रांति (Seven Revolutions) — गांधीवादी समाजवाद", back_en: "Sapta Kranti (Seven Revolutions) — Gandhian Socialism" },

  // ── Western Political Thought ──
  { category: "Western Thought", front_hi: "प्लेटो — प्रमुख अवधारणाएं?", front_en: "Plato — Key concepts?", back_hi: "दार्शनिक-राजा, नोबल लाई (धातुओं का मिथक), संपत्ति/परिवार का साम्यवाद", back_en: "Philosopher-King, Noble Lie (Myth of Metals), Communism of property/family" },
  { category: "Western Thought", front_hi: "अरस्तू का आदर्श शासन?", front_en: "Aristotle's ideal government?", back_hi: "पॉलिटी (Polity) — कुलीनतंत्र और लोकतंत्र का मिश्रण", back_en: "Polity — mix of oligarchy and democracy" },
  { category: "Western Thought", front_hi: "मैकियावेली — प्रमुख विचार?", front_en: "Machiavelli — Key ideas?", back_hi: "'द प्रिंस' (1513) — साध्य साधनों को उचित ठहराता है — शेर + लोमड़ी", back_en: "'The Prince' (1513) — End justifies means — Lion + Fox" },
  { category: "Western Thought", front_hi: "जे.एस. मिल का हानि सिद्धांत?", front_en: "J.S. Mill's Harm Principle?", back_hi: "व्यक्ति पर शक्ति का प्रयोग केवल दूसरों को नुकसान से बचाने के लिए — 'ऑन लिबर्टी' (1859)", back_en: "Power over individual only to prevent harm to others — 'On Liberty' (1859)" },
  { category: "Western Thought", front_hi: "मार्क्स — ऐतिहासिक भौतिकवाद?", front_en: "Marx — Historical Materialism?", back_hi: "इतिहास = आर्थिक स्थितियों द्वारा निर्धारित। अधिशेष मूल्य = शोषण। लक्ष्य = वर्गविहीन समाज।", back_en: "History = determined by economic conditions. Surplus Value = exploitation. Goal = classless society." },
  { category: "Western Thought", front_hi: "रॉल्स vs नोज़िक — मुख्य अंतर?", front_en: "Rawls vs Nozick — Key difference?", back_hi: "रॉल्स: वितरणात्मक न्याय (अंतर सिद्धांत) | नोज़िक: हकदारी सिद्धांत (न्यूनतम राज्य)", back_en: "Rawls: Distributive justice (Difference Principle) | Nozick: Entitlement Theory (Minimal State)" },

  // ── International Relations ──
  { category: "International Relations", front_hi: "शास्त्रीय यथार्थवाद के जनक?", front_en: "Father of Classical Realism?", back_hi: "हंस मोर्गेन्थाऊ — 'पॉलिटिक्स अमंग नेशंस' (1948)", back_en: "Hans Morgenthau — 'Politics Among Nations' (1948)" },
  { category: "International Relations", front_hi: "नव-यथार्थवाद/संरचनात्मक यथार्थवाद — किसने दिया?", front_en: "Neo-realism/Structural Realism — by whom?", back_hi: "केनेथ वाल्ट्ज़ — 'थ्योरी ऑफ इंटरनेशनल पॉलिटिक्स' (1979)", back_en: "Kenneth Waltz — 'Theory of International Politics' (1979)" },
  { category: "International Relations", front_hi: "NAM — कब और कहाँ शुरू हुआ?", front_en: "NAM — When and where started?", back_hi: "1961 — बेलग्रेड (बांडुंग सम्मेलन 1955 प्रारंभिक कदम था)", back_en: "1961 — Belgrade (Bandung Conference 1955 was preliminary step)" },
  { category: "International Relations", front_hi: "पंचशील (1954) — 5 सिद्धांत?", front_en: "Panchsheel (1954) — 5 principles?", back_hi: "1. क्षेत्रीय अखंडता 2. गैर-आक्रामकता 3. गैर-हस्तक्षेप 4. समानता 5. शांतिपूर्ण सह-अस्तित्व", back_en: "1. Territorial integrity 2. Non-aggression 3. Non-interference 4. Equality 5. Peaceful coexistence" },
  { category: "International Relations", front_hi: "UNSC P5 देश?", front_en: "UNSC P5 countries?", back_hi: "USA, UK, रूस, फ्रांस, चीन (वीटो पावर)", back_en: "USA, UK, Russia, France, China (Veto power)" },

  // ── Public Administration ──
  { category: "Public Admin", front_hi: "लोक प्रशासन के जनक?", front_en: "Father of Public Administration?", back_hi: "वुडरो विल्सन — 'द स्टडी ऑफ एडमिनिस्ट्रेशन' (1887)", back_en: "Woodrow Wilson — 'The Study of Administration' (1887)" },
  { category: "Public Admin", front_hi: "POSDCORB का पूर्ण रूप?", front_en: "Full form of POSDCORB?", back_hi: "Planning, Organizing, Staffing, Directing, Coordinating, Reporting, Budgeting (लूथर गुलिक)", back_en: "Planning, Organizing, Staffing, Directing, Coordinating, Reporting, Budgeting (Luther Gulick)" },
  { category: "Public Admin", front_hi: "हाथॉर्न प्रयोग — किसने, कब?", front_en: "Hawthorne Experiments — who, when?", back_hi: "एल्टन मेयो — 1924-32 — मानवीय संबंध सिद्धांत", back_en: "Elton Mayo — 1924-32 — Human Relations Theory" },
  { category: "Public Admin", front_hi: "परिसीमित तर्कसंगतता — किसने दी?", front_en: "Bounded Rationality — by whom?", back_hi: "हर्बर्ट साइमन — 'प्रशासनिक व्यवहार' (1947) — Satisficing", back_en: "Herbert Simon — 'Administrative Behavior' (1947) — Satisficing" },
  { category: "Public Admin", front_hi: "मैक्स वेबर की आदर्श नौकरशाही — आधार?", front_en: "Max Weber's Ideal Bureaucracy — basis?", back_hi: "विधिक-तर्कसंगत सत्ता (Legal-Rational Authority) — पदानुक्रम, विशेषज्ञता, नियम", back_en: "Legal-Rational Authority — Hierarchy, Specialization, Rules" },

  // ── Political Theory ──
  { category: "Political Theory", front_hi: "व्यवहारवाद vs उत्तर-व्यवहारवाद?", front_en: "Behavioralism vs Post-behavioralism?", back_hi: "व्यवहारवाद: मूल्य-मुक्त, वैज्ञानिक | उत्तर-व्यवहारवाद: प्रासंगिकता और कार्रवाई (दोनों: डेविड ईस्टन)", back_en: "Behavioralism: value-free, scientific | Post-behavioralism: relevance & action (both: David Easton)" },
  { category: "Political Theory", front_hi: "सत्ता के 3 प्रकार (वेबर)?", front_en: "3 types of authority (Weber)?", back_hi: "1. परंपरागत 2. करिश्माई 3. विधिक-तर्कसंगत", back_en: "1. Traditional 2. Charismatic 3. Legal-Rational" },
  { category: "Political Theory", front_hi: "'विचारधारा के अंत' (End of Ideology)?", front_en: "'End of Ideology' thesis?", back_hi: "डैनियल बेल (1960) — राजनीतिक विचारधाराओं का युग समाप्त", back_en: "Daniel Bell (1960) — era of political ideologies has ended" },
  { category: "Political Theory", front_hi: "गहरी पारिस्थितिकी (Deep Ecology)?", front_en: "Deep Ecology?", back_hi: "आर्ने नेस — सभी जीवों का समान आंतरिक मूल्य — मनुष्य प्रकृति से श्रेष्ठ नहीं", back_en: "Arne Naess — all beings have equal intrinsic value — humans not superior to nature" },

  // ── Jharkhand & Regional ──
  { category: "Jharkhand", front_hi: "बिरसा मुंडा का उलगुलान?", front_en: "Birsa Munda's Ulgulan?", back_hi: "1899-1900 — महान मुंडा विद्रोह → CNT Act 1908", back_en: "1899-1900 — Great Munda Rebellion → CNT Act 1908" },
  { category: "Jharkhand", front_hi: "PESA Act — कब और क्या?", front_en: "PESA Act — when and what?", back_hi: "1996 — 5वीं अनुसूची क्षेत्रों में ग्राम सभाओं को प्राकृतिक संसाधनों पर नियंत्रण", back_en: "1996 — Gram Sabha control over natural resources in 5th Schedule areas" },

  // ── Political Sociology ──
  { category: "Political Sociology", front_hi: "राजनीतिक संस्कृति के 3 प्रकार (आमंड और वर्बा)?", front_en: "3 types of Political Culture (Almond & Verba)?", back_hi: "1. संकीर्ण (Parochial) 2. अधीनस्थ (Subject) 3. सहभागी (Participant)", back_en: "1. Parochial 2. Subject 3. Participant" },
  { category: "Political Sociology", front_hi: "अल्पतंत्र का लौह नियम — किसका?", front_en: "Iron Law of Oligarchy — whose?", back_hi: "रॉबर्ट मिशेल्स — कोई भी संगठन अंततः कुलीन वर्ग द्वारा नियंत्रित हो जाता है", back_en: "Robert Michels — any organization eventually becomes controlled by a small elite" },
  { category: "Political Sociology", front_hi: "अभिजात वर्ग का परिसंचरण — किसकी अवधारणा?", front_en: "Circulation of Elites — whose concept?", back_hi: "विल्फ्रेडो पारेतो — शेर (बल) और लोमड़ी (चालाकी) के बीच सत्ता बदलती है", back_en: "Vilfredo Pareto — power shifts between Lions (force) and Foxes (cunning)" },

  // ── Books & Authors Quick Recall ──
  { category: "Books & Authors", front_hi: "'द रिपब्लिक' — लेखक?", front_en: "'The Republic' — author?", back_hi: "प्लेटो", back_en: "Plato" },
  { category: "Books & Authors", front_hi: "'द प्रिंस' (1513) — लेखक?", front_en: "'The Prince' (1513) — author?", back_hi: "मैकियावेली", back_en: "Machiavelli" },
  { category: "Books & Authors", front_hi: "'ऑन लिबर्टी' (1859) — लेखक?", front_en: "'On Liberty' (1859) — author?", back_hi: "जे.एस. मिल", back_en: "J.S. Mill" },
  { category: "Books & Authors", front_hi: "'पॉलिटिक्स अमंग नेशंस' (1948) — लेखक?", front_en: "'Politics Among Nations' (1948) — author?", back_hi: "हंस मोर्गेन्थाऊ", back_en: "Hans Morgenthau" },
  { category: "Books & Authors", front_hi: "'अ थ्योरी ऑफ जस्टिस' (1971) — लेखक?", front_en: "'A Theory of Justice' (1971) — author?", back_hi: "जॉन रॉल्स", back_en: "John Rawls" },
  { category: "Books & Authors", front_hi: "'द सिविक कल्चर' (1963) — लेखक?", front_en: "'The Civic Culture' (1963) — author?", back_hi: "गेब्रियल आमंड और सिडनी वर्बा", back_en: "Gabriel Almond and Sidney Verba" },
  { category: "Books & Authors", front_hi: "'अर्थशास्त्र' — लेखक?", front_en: "'Arthashastra' — author?", back_hi: "कौटिल्य (चाणक्य / विष्णुगुप्त)", back_en: "Kautilya (Chanakya / Vishnugupta)" },
  // ── PHASE 6 INJECTION: UGC NET QUICK REVISION ──
  { category: "Indian Constitution", front_hi: "संविधान की मूल संरचना (Basic Structure) का सिद्धांत?", front_en: "Basic Structure Doctrine of Constitution?", back_hi: "केशवानंद भारती केस (1973)", back_en: "Kesavananda Bharati Case (1973)" },
  { category: "Indian Constitution", front_hi: "अनुच्छेद 32 (संविधान की आत्मा) की 5 रिटें?", front_en: "5 Writs of Article 32 (Soul of Constitution)?", back_hi: "Habeas Corpus, Mandamus, Prohibition, Certiorari, Quo-Warranto", back_en: "Habeas Corpus, Mandamus, Prohibition, Certiorari, Quo-Warranto" },
  { category: "Public Administration", front_hi: "POSDCORB का सिद्धांत किसने दिया?", front_en: "Who gave the POSDCORB theory?", back_hi: "लूथर गुलिक और लिंडाल उर्विक", back_en: "Luther Gulick and Lyndall Urwick" },
  { category: "Public Administration", front_hi: "प्रथम मिन्नोब्रुक सम्मेलन (Minnowbrook I) कब हुआ?", front_en: "When was the first Minnowbrook Conference?", back_hi: "1968 (नव लोक प्रशासन - NPA की शुरुआत)", back_en: "1968 (Birth of New Public Administration - NPA)" },
  { category: "International Relations", front_hi: "गुटनिरपेक्ष आंदोलन (NAM) का पहला शिखर सम्मेलन?", front_en: "First summit of Non-Aligned Movement (NAM)?", back_hi: "1961 - बेलग्रेड", back_en: "1961 - Belgrade" }
];

if (typeof window !== 'undefined') {
  window.FLASHCARD_DATA = FLASHCARD_DATA;
}
