/**
 * BBMKU M.A. Political Science — MCQ Question Bank
 * =================================================
 * 150+ Questions organized by Paper for UGC NET Practice
 * Each question: { q_hi, q_en, options_hi, options_en, correct (0-3), explanation_hi, explanation_en, difficulty, paper }
 */

const MCQ_BANK = [

  // ════════════════════════════════════════════════════════════════
  //  PAPER: PSC-F-101 — Elementary Political Science
  // ════════════════════════════════════════════════════════════════

  {
    paper: "PSC-F-101",
    q_hi: "भारतीय संविधान कब लागू हुआ?",
    q_en: "When was the Indian Constitution enforced?",
    options_hi: ["26 नवंबर 1949", "26 जनवरी 1950", "15 अगस्त 1947", "26 जनवरी 1949"],
    options_en: ["26 November 1949", "26 January 1950", "15 August 1947", "26 January 1949"],
    correct: 1,
    explanation_hi: "भारतीय संविधान 26 नवंबर 1949 को अधिनियमित हुआ और 26 जनवरी 1950 को लागू हुआ।",
    explanation_en: "The Indian Constitution was enacted on 26 November 1949 and enforced on 26 January 1950.",
    difficulty: "easy"
  },
  {
    paper: "PSC-F-101",
    q_hi: "'समाजवादी' और 'धर्मनिरपेक्ष' शब्द प्रस्तावना में किस संशोधन द्वारा जोड़े गए?",
    q_en: "By which amendment were 'Socialist' and 'Secular' added to the Preamble?",
    options_hi: ["44वां संशोधन", "42वां संशोधन", "52वां संशोधन", "73वां संशोधन"],
    options_en: ["44th Amendment", "42nd Amendment", "52nd Amendment", "73rd Amendment"],
    correct: 1,
    explanation_hi: "42वें संशोधन अधिनियम, 1976 द्वारा 'समाजवादी' और 'धर्मनिरपेक्ष' शब्द प्रस्तावना में जोड़े गए।",
    explanation_en: "The 42nd Amendment Act, 1976 added 'Socialist' and 'Secular' to the Preamble.",
    difficulty: "easy"
  },
  {
    paper: "PSC-F-101",
    q_hi: "भारतीय संघवाद को 'अर्ध-संघीय' (Quasi-federal) किसने कहा?",
    q_en: "Who called Indian federalism 'Quasi-federal'?",
    options_hi: ["बी.आर. अम्बेडकर", "के.सी. व्हीयर", "ग्रानविल ऑस्टिन", "डी.डी. बासु"],
    options_en: ["B.R. Ambedkar", "K.C. Wheare", "Granville Austin", "D.D. Basu"],
    correct: 1,
    explanation_hi: "के.सी. व्हीयर ने भारतीय संघवाद को 'अर्ध-संघीय' के रूप में वर्णित किया।",
    explanation_en: "K.C. Wheare described Indian federalism as 'Quasi-federal'.",
    difficulty: "easy"
  },
  {
    paper: "PSC-F-101",
    q_hi: "राज्य के चार आवश्यक तत्वों में सबसे महत्वपूर्ण तत्व कौन सा है?",
    q_en: "Which is the most important of the four essential elements of a State?",
    options_hi: ["जनसंख्या", "भूभाग", "सरकार", "संप्रभुता"],
    options_en: ["Population", "Territory", "Government", "Sovereignty"],
    correct: 3,
    explanation_hi: "गार्नर के अनुसार, संप्रभुता राज्य का सबसे महत्वपूर्ण तत्व है। यह राज्य को अन्य संगठनों से अलग करती है।",
    explanation_en: "According to Garner, Sovereignty is the most important element. It distinguishes the state from other organizations.",
    difficulty: "easy"
  },
  {
    paper: "PSC-F-101",
    q_hi: "संप्रभुता शब्द को किसने लोकप्रिय बनाया?",
    q_en: "Who popularized the term 'Sovereignty'?",
    options_hi: ["जॉन ऑस्टिन", "जीन बोडिन", "हॉब्स", "रूसो"],
    options_en: ["John Austin", "Jean Bodin", "Hobbes", "Rousseau"],
    correct: 1,
    explanation_hi: "जीन बोडिन ने 1576 में अपनी पुस्तक 'सिक्स बुक्स ऑफ द रिपब्लिक' में संप्रभुता शब्द को लोकप्रिय बनाया।",
    explanation_en: "Jean Bodin popularized the term in his book 'Six Books of the Republic' (1576).",
    difficulty: "medium"
  },
  {
    paper: "PSC-F-101",
    q_hi: "लोकतंत्र का अभिजात वर्ग सिद्धांत (Elitist Theory) किसने दिया?",
    q_en: "Who gave the Elitist Theory of Democracy?",
    options_hi: ["रॉबर्ट डाहल", "जोसेफ शंपीटर", "रूसो", "जे.एस. मिल"],
    options_en: ["Robert Dahl", "Joseph Schumpeter", "Rousseau", "J.S. Mill"],
    correct: 1,
    explanation_hi: "शंपीटर ने लोकतंत्र को अभिजात वर्गों के बीच प्रतिस्पर्धा के रूप में परिभाषित किया।",
    explanation_en: "Schumpeter defined democracy as competition among elites for the people's vote.",
    difficulty: "medium"
  },
  {
    paper: "PSC-F-101",
    q_hi: "'पॉलीआर्की' (Polyarchy) की अवधारणा किसने दी?",
    q_en: "Who gave the concept of 'Polyarchy'?",
    options_hi: ["शंपीटर", "रूसो", "रॉबर्ट डाहल", "लास्की"],
    options_en: ["Schumpeter", "Rousseau", "Robert Dahl", "Laski"],
    correct: 2,
    explanation_hi: "रॉबर्ट डाहल ने बहुलवादी लोकतंत्र को 'पॉलीआर्की' कहा — जहाँ शक्ति कई समूहों में बंटी होती है।",
    explanation_en: "Robert Dahl called pluralist democracy 'Polyarchy' — where power is dispersed among multiple groups.",
    difficulty: "medium"
  },
  {
    paper: "PSC-F-101",
    q_hi: "मतदान की आयु 21 से घटाकर 18 वर्ष किस संशोधन द्वारा की गई?",
    q_en: "By which amendment was the voting age reduced from 21 to 18 years?",
    options_hi: ["42वां संशोधन", "44वां संशोधन", "61वां संशोधन", "73वां संशोधन"],
    options_en: ["42nd Amendment", "44th Amendment", "61st Amendment", "73rd Amendment"],
    correct: 2,
    explanation_hi: "61वें संशोधन (1989) द्वारा मतदान की आयु 21 से घटाकर 18 वर्ष की गई।",
    explanation_en: "The 61st Amendment (1989) reduced the voting age from 21 to 18 years.",
    difficulty: "easy"
  },
  {
    paper: "PSC-F-101",
    q_hi: "POSDCORB शब्द किसने दिया?",
    q_en: "Who coined the term POSDCORB?",
    options_hi: ["वुडरो विल्सन", "लूथर गुलिक", "हर्बर्ट साइमन", "एल्टन मेयो"],
    options_en: ["Woodrow Wilson", "Luther Gulick", "Herbert Simon", "Elton Mayo"],
    correct: 1,
    explanation_hi: "लूथर गुलिक ने प्रशासन के दायरे को POSDCORB (Planning, Organizing, Staffing, Directing, Coordinating, Reporting, Budgeting) के रूप में परिभाषित किया।",
    explanation_en: "Luther Gulick defined the scope of administration as POSDCORB (Planning, Organizing, Staffing, Directing, Coordinating, Reporting, Budgeting).",
    difficulty: "easy"
  },
  {
    paper: "PSC-F-101",
    q_hi: "'कानून का शासन' (Rule of Law) की अवधारणा किसने दी?",
    q_en: "Who gave the concept of 'Rule of Law'?",
    options_hi: ["मोंटेस्क्यू", "ए.वी. डायसी", "जॉन ऑस्टिन", "हेगेल"],
    options_en: ["Montesquieu", "A.V. Dicey", "John Austin", "Hegel"],
    correct: 1,
    explanation_hi: "ए.वी. डायसी ने 'कानून का शासन' की अवधारणा दी — कानून सर्वोच्च है, कोई भी कानून से ऊपर नहीं है।",
    explanation_en: "A.V. Dicey gave the concept of 'Rule of Law' — law is supreme, no one is above the law.",
    difficulty: "easy"
  },
  {
    paper: "PSC-F-101",
    q_hi: "शक्तियों के पृथक्करण का सिद्धांत किसका है?",
    q_en: "The doctrine of Separation of Powers belongs to whom?",
    options_hi: ["लॉक", "मोंटेस्क्यू", "रूसो", "हॉब्स"],
    options_en: ["Locke", "Montesquieu", "Rousseau", "Hobbes"],
    correct: 1,
    explanation_hi: "मोंटेस्क्यू ने शक्तियों के पृथक्करण का सिद्धांत दिया — विधायिका, कार्यपालिका, न्यायपालिका।",
    explanation_en: "Montesquieu gave the doctrine of Separation of Powers — Legislature, Executive, Judiciary.",
    difficulty: "easy"
  },
  {
    paper: "PSC-F-101",
    q_hi: "राज्य को 'आवश्यक बुराई' (Necessary evil) किसने माना?",
    q_en: "Who considered the State as a 'Necessary evil'?",
    options_hi: ["हेगेल", "उदारवादी विचारक (लॉक, मिल)", "मार्क्स", "गाँधी"],
    options_en: ["Hegel", "Liberal thinkers (Locke, Mill)", "Marx", "Gandhi"],
    correct: 1,
    explanation_hi: "उदारवादी विचारकों ने राज्य को व्यक्तिगत अधिकारों की रक्षा के लिए एक 'आवश्यक बुराई' माना।",
    explanation_en: "Liberal thinkers considered the State as a 'necessary evil' to protect individual rights.",
    difficulty: "medium"
  },

  // ════════════════════════════════════════════════════════════════
  //  PAPER: PSC-C-102 — Indian Political Thought
  // ════════════════════════════════════════════════════════════════

  {
    paper: "PSC-C-102",
    q_hi: "कौटिल्य के सप्तांग सिद्धांत में राज्य के कितने अंग बताए गए हैं?",
    q_en: "How many organs of the state are described in Kautilya's Saptanga Theory?",
    options_hi: ["5", "6", "7", "8"],
    options_en: ["5", "6", "7", "8"],
    correct: 2,
    explanation_hi: "कौटिल्य ने राज्य के 7 अंग बताए: राजा, अमात्य, जनपद, दुर्ग, कोष, दण्ड, मित्र।",
    explanation_en: "Kautilya described 7 organs: Swami (King), Amatya (Minister), Janapada, Durg, Kosha, Danda, Mitra.",
    difficulty: "easy"
  },
  {
    paper: "PSC-C-102",
    q_hi: "'भारत का मैकियावेली' किसे कहा जाता है?",
    q_en: "Who is called the 'Machiavelli of India'?",
    options_hi: ["गाँधी", "नेहरू", "कौटिल्य", "अम्बेडकर"],
    options_en: ["Gandhi", "Nehru", "Kautilya", "Ambedkar"],
    correct: 2,
    explanation_hi: "कौटिल्य (चाणक्य) को राज्यकला में उनकी व्यावहारिक रणनीतियों के कारण 'भारत का मैकियावेली' कहा जाता है।",
    explanation_en: "Kautilya (Chanakya) is called the 'Machiavelli of India' for his pragmatic statecraft strategies.",
    difficulty: "easy"
  },
  {
    paper: "PSC-C-102",
    q_hi: "'सप्त क्रांति' की अवधारणा किसने दी?",
    q_en: "Who gave the concept of 'Sapta Kranti' (Seven Revolutions)?",
    options_hi: ["नेहरू", "गाँधी", "राम मनोहर लोहिया", "जयप्रकाश नारायण"],
    options_en: ["Nehru", "Gandhi", "Ram Manohar Lohia", "Jayaprakash Narayan"],
    correct: 2,
    explanation_hi: "राम मनोहर लोहिया ने सप्त क्रांति (Seven Revolutions) का आह्वान किया — रंगभेद, जातिभेद, लिंगभेद आदि का अंत।",
    explanation_en: "Ram Manohar Lohia called for Sapta Kranti — end of racism, casteism, sexism etc.",
    difficulty: "easy"
  },
  {
    paper: "PSC-C-102",
    q_hi: "'आधुनिक भारत का जनक' किसे माना जाता है?",
    q_en: "Who is considered the 'Father of Modern India'?",
    options_hi: ["महात्मा गाँधी", "राजा राममोहन राय", "नेहरू", "अम्बेडकर"],
    options_en: ["Mahatma Gandhi", "Raja Ram Mohan Roy", "Nehru", "Ambedkar"],
    correct: 1,
    explanation_hi: "राजा राममोहन राय (1772–1833) को 'आधुनिक भारत का जनक' और 'भारतीय पुनर्जागरण का भोर का तारा' कहा जाता है।",
    explanation_en: "Raja Ram Mohan Roy (1772–1833) is called the 'Father of Modern India' and 'Morning Star of Indian Renaissance'.",
    difficulty: "easy"
  },
  {
    paper: "PSC-C-102",
    q_hi: "ब्रह्म समाज की स्थापना कब और किसने की?",
    q_en: "When and by whom was the Brahmo Samaj founded?",
    options_hi: ["1828 — राजा राममोहन राय", "1875 — दयानंद सरस्वती", "1835 — ईश्वरचंद्र विद्यासागर", "1830 — केशव चंद्र सेन"],
    options_en: ["1828 — Raja Ram Mohan Roy", "1875 — Dayanand Saraswati", "1835 — Ishwar Chandra Vidyasagar", "1830 — Keshav Chandra Sen"],
    correct: 0,
    explanation_hi: "राजा राममोहन राय ने 1828 में ब्रह्म समाज की स्थापना की।",
    explanation_en: "Raja Ram Mohan Roy founded the Brahmo Samaj in 1828.",
    difficulty: "easy"
  },
  {
    paper: "PSC-C-102",
    q_hi: "'संपूर्ण क्रांति' (Total Revolution) का नारा किसने दिया?",
    q_en: "Who gave the slogan of 'Total Revolution'?",
    options_hi: ["भगत सिंह", "जयप्रकाश नारायण", "लोहिया", "गाँधी"],
    options_en: ["Bhagat Singh", "Jayaprakash Narayan", "Lohia", "Gandhi"],
    correct: 1,
    explanation_hi: "जयप्रकाश नारायण ('लोक नायक') ने 1974 में 'संपूर्ण क्रांति' का नारा दिया।",
    explanation_en: "Jayaprakash Narayan ('Lok Nayak') raised the slogan of 'Total Revolution' in 1974.",
    difficulty: "easy"
  },
  {
    paper: "PSC-C-102",
    q_hi: "डॉ. अम्बेडकर ने किस अनुच्छेद को 'संविधान का हृदय और आत्मा' कहा?",
    q_en: "Which article did Dr. Ambedkar call the 'Heart and Soul of the Constitution'?",
    options_hi: ["अनुच्छेद 14", "अनुच्छेद 21", "अनुच्छेद 32", "अनुच्छेद 19"],
    options_en: ["Article 14", "Article 21", "Article 32", "Article 19"],
    correct: 2,
    explanation_hi: "डॉ. अम्बेडकर ने अनुच्छेद 32 (संवैधानिक उपचारों का अधिकार) को 'संविधान का हृदय और आत्मा' कहा।",
    explanation_en: "Dr. Ambedkar called Article 32 (Right to Constitutional Remedies) the 'Heart and Soul of the Constitution'.",
    difficulty: "easy"
  },
  {
    paper: "PSC-C-102",
    q_hi: "गाँधीजी का 'सत्याग्रह' का अर्थ क्या है?",
    q_en: "What is the meaning of Gandhi's 'Satyagraha'?",
    options_hi: ["अहिंसक प्रतिरोध", "सत्य का आग्रह", "राजनीतिक क्रांति", "सविनय अवज्ञा"],
    options_en: ["Non-violent resistance", "Insistence on truth", "Political revolution", "Civil disobedience"],
    correct: 1,
    explanation_hi: "सत्याग्रह का शाब्दिक अर्थ 'सत्य का आग्रह' है। यह अहिंसक विरोध का तरीका है।",
    explanation_en: "Satyagraha literally means 'Insistence on truth'. It is a method of non-violent protest.",
    difficulty: "easy"
  },
  {
    paper: "PSC-C-102",
    q_hi: "गाँधीजी के 'सर्वोदय' का विचार किस पुस्तक से प्रेरित था?",
    q_en: "Gandhi's idea of 'Sarvodaya' was inspired by which book?",
    options_hi: ["द रिपब्लिक — प्लेटो", "अन्टू दिस लास्ट — जॉन रस्किन", "दास कैपिटल — मार्क्स", "सोशल कॉन्ट्रैक्ट — रूसो"],
    options_en: ["The Republic — Plato", "Unto This Last — John Ruskin", "Das Capital — Marx", "Social Contract — Rousseau"],
    correct: 1,
    explanation_hi: "गाँधीजी का 'सर्वोदय' (सभी का कल्याण) विचार जॉन रस्किन की पुस्तक 'अन्टू दिस लास्ट' से प्रेरित था।",
    explanation_en: "Gandhi's 'Sarvodaya' (Welfare of all) was inspired by John Ruskin's book 'Unto This Last'.",
    difficulty: "medium"
  },
  {
    paper: "PSC-C-102",
    q_hi: "'सार्वभौमिक मानवतावाद' (Universal Humanism) का समर्थक कौन था?",
    q_en: "Who was the proponent of 'Universal Humanism'?",
    options_hi: ["गाँधी", "नेहरू", "रवींद्रनाथ टैगोर", "अम्बेडकर"],
    options_en: ["Gandhi", "Nehru", "Rabindranath Tagore", "Ambedkar"],
    correct: 2,
    explanation_hi: "रवींद्रनाथ टैगोर 'सार्वभौमिक मानवतावाद' और अंतर्राष्ट्रीयतावाद के प्रबल समर्थक थे।",
    explanation_en: "Rabindranath Tagore was a strong proponent of 'Universal Humanism' and internationalism.",
    difficulty: "easy"
  },
  {
    paper: "PSC-C-102",
    q_hi: "मौलाना आज़ाद द्वारा प्रकाशित पत्र कौन सा था?",
    q_en: "Which journal was published by Maulana Azad?",
    options_hi: ["यंग इंडिया", "अल-हिलाल", "केसरी", "बंगदर्शन"],
    options_en: ["Young India", "Al-Hilal", "Kesari", "Bangadarshan"],
    correct: 1,
    explanation_hi: "मौलाना अबुल कलाम आज़ाद ने 'अल-हिलाल' और 'अल-बलाग' पत्र प्रकाशित किए।",
    explanation_en: "Maulana Abul Kalam Azad published 'Al-Hilal' and 'Al-Balagh' journals.",
    difficulty: "medium"
  },
  {
    paper: "PSC-C-102",
    q_hi: "नेहरू की विदेश नीति का आधार क्या था?",
    q_en: "What was the foundation of Nehru's foreign policy?",
    options_hi: ["सैन्य गठबंधन", "गुटनिरपेक्षता (NAM) और पंचशील", "पूर्ण अलगाववाद", "अमेरिका के साथ गठबंधन"],
    options_en: ["Military alliances", "Non-Alignment (NAM) and Panchsheel", "Complete isolationism", "Alliance with USA"],
    correct: 1,
    explanation_hi: "नेहरू गुटनिरपेक्षता (NAM) और पंचशील (1954) के जनक थे।",
    explanation_en: "Nehru was the architect of Non-Alignment (NAM) and Panchsheel (1954).",
    difficulty: "easy"
  },

  // ════════════════════════════════════════════════════════════════
  //  PAPER: PSC-C-103 — Political Theory
  // ════════════════════════════════════════════════════════════════

  {
    paper: "PSC-C-103",
    q_hi: "व्यवहारवाद (Behavioralism) का सबसे प्रमुख समर्थक कौन था?",
    q_en: "Who was the most prominent advocate of Behavioralism?",
    options_hi: ["जॉन रॉल्स", "डेविड ईस्टन", "कार्ल मार्क्स", "मैक्स वेबर"],
    options_en: ["John Rawls", "David Easton", "Karl Marx", "Max Weber"],
    correct: 1,
    explanation_hi: "डेविड ईस्टन व्यवहारवाद के प्रमुख समर्थक थे और बाद में उन्होंने ही उत्तर-व्यवहारवाद की शुरुआत की।",
    explanation_en: "David Easton was the prominent advocate of Behavioralism and later initiated Post-behavioralism.",
    difficulty: "easy"
  },
  {
    paper: "PSC-C-103",
    q_hi: "जॉन रॉल्स की 'अज्ञानता के पर्दे' (Veil of Ignorance) की अवधारणा किस पुस्तक में है?",
    q_en: "In which book is John Rawls' 'Veil of Ignorance' concept found?",
    options_hi: ["ऑन लिबर्टी", "अ थ्योरी ऑफ जस्टिस (1971)", "द रिपब्लिक", "लेवियाथन"],
    options_en: ["On Liberty", "A Theory of Justice (1971)", "The Republic", "Leviathan"],
    correct: 1,
    explanation_hi: "जॉन रॉल्स ने 'अ थ्योरी ऑफ जस्टिस' (1971) में 'अज्ञानता के पर्दे' की अवधारणा दी।",
    explanation_en: "John Rawls gave the 'Veil of Ignorance' concept in 'A Theory of Justice' (1971).",
    difficulty: "easy"
  },
  {
    paper: "PSC-C-103",
    q_hi: "रॉबर्ट नोज़िक का 'हकदारी सिद्धांत' (Entitlement Theory) किस प्रकार के राज्य का समर्थन करता है?",
    q_en: "Robert Nozick's 'Entitlement Theory' supports what kind of state?",
    options_hi: ["कल्याणकारी राज्य", "साम्यवादी राज्य", "न्यूनतम राज्य (Minimal State)", "अधिनायकवादी राज्य"],
    options_en: ["Welfare State", "Communist State", "Minimal State", "Totalitarian State"],
    correct: 2,
    explanation_hi: "नोज़िक (स्वतंत्रतावादी) ने 'न्यूनतम राज्य' का समर्थन किया — राज्य केवल सुरक्षा और अनुबंध लागू करने तक सीमित।",
    explanation_en: "Nozick (Libertarian) supported the 'Minimal State' — state limited to protection and contract enforcement.",
    difficulty: "medium"
  },
  {
    paper: "PSC-C-103",
    q_hi: "मैक्स वेबर ने सत्ता के कितने प्रकार बताए?",
    q_en: "How many types of authority did Max Weber identify?",
    options_hi: ["2", "3", "4", "5"],
    options_en: ["2", "3", "4", "5"],
    correct: 1,
    explanation_hi: "मैक्स वेबर ने सत्ता के 3 प्रकार बताए: परंपरागत, करिश्माई, और विधिक-तर्कसंगत।",
    explanation_en: "Max Weber identified 3 types: Traditional, Charismatic, and Legal-Rational authority.",
    difficulty: "easy"
  },
  {
    paper: "PSC-C-103",
    q_hi: "'विचारधारा के अंत' (End of Ideology) की थीसिस किसने दी?",
    q_en: "Who gave the 'End of Ideology' thesis?",
    options_hi: ["फ्रांसिस फुकुयामा", "डैनियल बेल", "सैमुअल हंटिंगटन", "कार्ल पॉपर"],
    options_en: ["Francis Fukuyama", "Daniel Bell", "Samuel Huntington", "Karl Popper"],
    correct: 1,
    explanation_hi: "डैनियल बेल ने 1960 में 'End of Ideology' थीसिस दी।",
    explanation_en: "Daniel Bell gave the 'End of Ideology' thesis in 1960.",
    difficulty: "medium"
  },
  {
    paper: "PSC-C-103",
    q_hi: "'गहरी पारिस्थितिकी' (Deep Ecology) शब्द किसने गढ़ा?",
    q_en: "Who coined the term 'Deep Ecology'?",
    options_hi: ["रेचल कार्सन", "आर्ने नेस", "जेम्स लवलॉक", "मरे बुकचिन"],
    options_en: ["Rachel Carson", "Arne Naess", "James Lovelock", "Murray Bookchin"],
    correct: 1,
    explanation_hi: "आर्ने नेस ने 'गहरी पारिस्थितिकी' शब्द गढ़ा — प्रकृति में सभी जीवों का समान आंतरिक मूल्य है।",
    explanation_en: "Arne Naess coined 'Deep Ecology' — all living beings have equal intrinsic value.",
    difficulty: "easy"
  },
  {
    paper: "PSC-C-103",
    q_hi: "रॉल्स के 'अंतर सिद्धांत' (Difference Principle) का क्या अर्थ है?",
    q_en: "What does Rawls' 'Difference Principle' mean?",
    options_hi: ["सभी को समान वेतन मिलना चाहिए", "असमानताएं तभी उचित हैं जब वे सबसे वंचित वर्ग को लाभ पहुंचाएं", "राज्य को सभी संपत्ति का स्वामित्व रखना चाहिए", "प्रत्येक व्यक्ति को अपनी संपत्ति रखने का अधिकार है"],
    options_en: ["Everyone should get equal wages", "Inequalities are justified only if they benefit the least advantaged", "State should own all property", "Everyone has the right to keep their property"],
    correct: 1,
    explanation_hi: "रॉल्स के अंतर सिद्धांत के अनुसार, सामाजिक-आर्थिक असमानताएं केवल तभी उचित हैं जब वे समाज के सबसे वंचित वर्ग को लाभ पहुंचाएं।",
    explanation_en: "Rawls' Difference Principle states that inequalities are justified only if they benefit the least advantaged members of society.",
    difficulty: "medium"
  },

  // ════════════════════════════════════════════════════════════════
  //  PAPER: PSC-C-104 — Indian Govt. & Politics
  // ════════════════════════════════════════════════════════════════

  {
    paper: "PSC-C-104",
    q_hi: "अनुच्छेद 21 किससे संबंधित है?",
    q_en: "Article 21 relates to?",
    options_hi: ["समानता का अधिकार", "जीवन और व्यक्तिगत स्वतंत्रता का अधिकार", "धार्मिक स्वतंत्रता", "शिक्षा का अधिकार"],
    options_en: ["Right to Equality", "Right to Life and Personal Liberty", "Religious Freedom", "Right to Education"],
    correct: 1,
    explanation_hi: "अनुच्छेद 21 जीवन और व्यक्तिगत स्वतंत्रता के अधिकार की गारंटी देता है।",
    explanation_en: "Article 21 guarantees the Right to Life and Personal Liberty.",
    difficulty: "easy"
  },
  {
    paper: "PSC-C-104",
    q_hi: "सरकारिया आयोग (1983) किससे संबंधित है?",
    q_en: "Sarkaria Commission (1983) is related to?",
    options_hi: ["चुनाव सुधार", "केंद्र-राज्य संबंध", "पंचायती राज", "भ्रष्टाचार निवारण"],
    options_en: ["Election reforms", "Centre-State relations", "Panchayati Raj", "Anti-corruption"],
    correct: 1,
    explanation_hi: "सरकारिया आयोग (1983) केंद्र-राज्य संबंधों की समीक्षा के लिए गठित किया गया था।",
    explanation_en: "Sarkaria Commission (1983) was constituted to review Centre-State relations.",
    difficulty: "easy"
  },
  {
    paper: "PSC-C-104",
    q_hi: "जनहित याचिका (PIL) के जनक कौन माने जाते हैं?",
    q_en: "Who is considered the father of PIL in India?",
    options_hi: ["जस्टिस भगवती और कृष्ण अय्यर", "डॉ. अम्बेडकर", "जस्टिस हिदायतुल्लाह", "जस्टिस सुब्बा राव"],
    options_en: ["Justice Bhagwati & Krishna Iyer", "Dr. Ambedkar", "Justice Hidayatullah", "Justice Subba Rao"],
    correct: 0,
    explanation_hi: "जस्टिस पी.एन. भगवती और वी.आर. कृष्ण अय्यर को भारत में PIL के जनक माना जाता है।",
    explanation_en: "Justice P.N. Bhagwati and V.R. Krishna Iyer are considered the fathers of PIL in India.",
    difficulty: "medium"
  },
  {
    paper: "PSC-C-104",
    q_hi: "मिनर्वा मिल्स मामला (1980) किससे संबंधित है?",
    q_en: "Minerva Mills Case (1980) is related to?",
    options_hi: ["आरक्षण", "मूल अधिकार और DPSP के बीच सामंजस्य", "राष्ट्रपति शक्तियां", "संसद की संप्रभुता"],
    options_en: ["Reservation", "Harmony between FR and DPSP", "Presidential powers", "Parliamentary sovereignty"],
    correct: 1,
    explanation_hi: "मिनर्वा मिल्स मामले में सुप्रीम कोर्ट ने कहा कि मूल अधिकार और DPSP के बीच 'सामंजस्य' संविधान का मूल ढांचा है।",
    explanation_en: "In Minerva Mills, the Supreme Court said 'harmony' between FR and DPSP is part of the basic structure.",
    difficulty: "medium"
  },
  {
    paper: "PSC-C-104",
    q_hi: "103वां संविधान संशोधन किससे संबंधित है?",
    q_en: "The 103rd Constitutional Amendment is related to?",
    options_hi: ["GST", "EWS 10% आरक्षण", "OBC आरक्षण", "SC/ST आरक्षण"],
    options_en: ["GST", "10% EWS reservation", "OBC reservation", "SC/ST reservation"],
    correct: 1,
    explanation_hi: "103वां संशोधन EWS (आर्थिक रूप से कमजोर वर्ग) के लिए 10% आरक्षण से संबंधित है।",
    explanation_en: "The 103rd Amendment relates to 10% reservation for EWS (Economically Weaker Sections).",
    difficulty: "easy"
  },
  {
    paper: "PSC-C-104",
    q_hi: "सुप्रीम कोर्ट कितने प्रकार के रिट (Writs) जारी कर सकता है?",
    q_en: "How many types of Writs can the Supreme Court issue?",
    options_hi: ["3", "4", "5", "6"],
    options_en: ["3", "4", "5", "6"],
    correct: 2,
    explanation_hi: "5 रिट: बंदी प्रत्यक्षीकरण, परमादेश, प्रतिषेध, उत्प्रेषण, अधिकार पृच्छा।",
    explanation_en: "5 Writs: Habeas Corpus, Mandamus, Prohibition, Certiorari, Quo-Warranto.",
    difficulty: "easy"
  },

  // ════════════════════════════════════════════════════════════════
  //  PAPER: PSC-C-206 — International Relations
  // ════════════════════════════════════════════════════════════════

  {
    paper: "PSC-C-206",
    q_hi: "'पॉलिटिक्स अमंग नेशंस' (1948) के लेखक कौन हैं?",
    q_en: "Who is the author of 'Politics Among Nations' (1948)?",
    options_hi: ["केनेथ वाल्ट्ज़", "हंस मोर्गेन्थाऊ", "ई.एच. कार", "हेडली बुल"],
    options_en: ["Kenneth Waltz", "Hans Morgenthau", "E.H. Carr", "Hedley Bull"],
    correct: 1,
    explanation_hi: "हंस मोर्गेन्थाऊ (शास्त्रीय यथार्थवाद के जनक) ने 1948 में 'पॉलिटिक्स अमंग नेशंस' लिखी।",
    explanation_en: "Hans Morgenthau (father of Classical Realism) wrote 'Politics Among Nations' in 1948.",
    difficulty: "easy"
  },
  {
    paper: "PSC-C-206",
    q_hi: "नव-यथार्थवाद (Neo-realism) का जनक किसे माना जाता है?",
    q_en: "Who is considered the father of Neo-realism?",
    options_hi: ["हंस मोर्गेन्थाऊ", "केनेथ वाल्ट्ज़", "रॉबर्ट कोहेन", "अलेक्जेंडर वेंट"],
    options_en: ["Hans Morgenthau", "Kenneth Waltz", "Robert Keohane", "Alexander Wendt"],
    correct: 1,
    explanation_hi: "केनेथ वाल्ट्ज़ ने 'थ्योरी ऑफ इंटरनेशनल पॉलिटिक्स' (1979) में नव-यथार्थवाद/संरचनात्मक यथार्थवाद दिया।",
    explanation_en: "Kenneth Waltz gave Neo-realism/Structural Realism in 'Theory of International Politics' (1979).",
    difficulty: "easy"
  },
  {
    paper: "PSC-C-206",
    q_hi: "NAM का पहला शिखर सम्मेलन कहाँ हुआ?",
    q_en: "Where was the first NAM summit held?",
    options_hi: ["बांडुंग", "बेलग्रेड", "काहिरा", "नई दिल्ली"],
    options_en: ["Bandung", "Belgrade", "Cairo", "New Delhi"],
    correct: 1,
    explanation_hi: "NAM का पहला शिखर सम्मेलन 1961 में बेलग्रेड (यूगोस्लाविया) में हुआ।",
    explanation_en: "The first NAM summit was held in Belgrade (Yugoslavia) in 1961.",
    difficulty: "easy"
  },
  {
    paper: "PSC-C-206",
    q_hi: "भारत की 'लुक ईस्ट' नीति किस प्रधानमंत्री के कार्यकाल में शुरू हुई?",
    q_en: "India's 'Look East' policy started during which PM's tenure?",
    options_hi: ["राजीव गाँधी", "पी.वी. नरसिम्हा राव", "अटल बिहारी वाजपेयी", "मनमोहन सिंह"],
    options_en: ["Rajiv Gandhi", "P.V. Narasimha Rao", "Atal Bihari Vajpayee", "Manmohan Singh"],
    correct: 1,
    explanation_hi: "'लुक ईस्ट' नीति 1992 में पी.वी. नरसिम्हा राव के कार्यकाल में शुरू हुई।",
    explanation_en: "'Look East' policy started in 1992 during P.V. Narasimha Rao's tenure.",
    difficulty: "easy"
  },
  {
    paper: "PSC-C-206",
    q_hi: "पंचशील समझौता (1954) किन दो देशों के बीच हुआ?",
    q_en: "The Panchsheel Agreement (1954) was between which two countries?",
    options_hi: ["भारत और पाकिस्तान", "भारत और चीन", "भारत और रूस", "भारत और जापान"],
    options_en: ["India and Pakistan", "India and China", "India and Russia", "India and Japan"],
    correct: 1,
    explanation_hi: "पंचशील समझौता (1954) भारत और चीन के बीच शांतिपूर्ण सह-अस्तित्व के पांच सिद्धांतों पर आधारित था।",
    explanation_en: "Panchsheel Agreement (1954) was between India and China, based on five principles of peaceful coexistence.",
    difficulty: "easy"
  },
  {
    paper: "PSC-C-206",
    q_hi: "UNSC के स्थायी सदस्यों (P5) की संख्या कितनी है?",
    q_en: "How many permanent members (P5) are there in UNSC?",
    options_hi: ["3", "5", "7", "10"],
    options_en: ["3", "5", "7", "10"],
    correct: 1,
    explanation_hi: "UNSC में 5 स्थायी सदस्य (P5) हैं: USA, UK, रूस, फ्रांस, चीन।",
    explanation_en: "UNSC has 5 permanent members (P5): USA, UK, Russia, France, China.",
    difficulty: "easy"
  },
  {
    paper: "PSC-C-206",
    q_hi: "'थ्यूसीडाइड्स ट्रैप' किससे संबंधित है?",
    q_en: "What is the 'Thucydides Trap' related to?",
    options_hi: ["व्यापार युद्ध", "उभरती शक्ति और स्थापित शक्ति के बीच टकराव", "परमाणु निरस्त्रीकरण", "मानवाधिकार"],
    options_en: ["Trade wars", "Conflict between rising and established powers", "Nuclear disarmament", "Human rights"],
    correct: 1,
    explanation_hi: "'थ्यूसीडाइड्स ट्रैप' — जब एक उभरती शक्ति स्थापित शक्ति को चुनौती देती है, तो युद्ध लगभग अपरिहार्य हो जाता है।",
    explanation_en: "'Thucydides Trap' — when a rising power challenges an established power, war becomes nearly inevitable.",
    difficulty: "hard"
  },

  // ════════════════════════════════════════════════════════════════
  //  PAPER: PSC-C-207 — Public Administration
  // ════════════════════════════════════════════════════════════════

  {
    paper: "PSC-C-207",
    q_hi: "लोक प्रशासन को एक अलग विषय के रूप में स्थापित करने वाला निबंध किसने लिखा?",
    q_en: "Who wrote the essay that established Public Administration as a distinct discipline?",
    options_hi: ["लूथर गुलिक", "वुडरो विल्सन", "हर्बर्ट साइमन", "एल्टन मेयो"],
    options_en: ["Luther Gulick", "Woodrow Wilson", "Herbert Simon", "Elton Mayo"],
    correct: 1,
    explanation_hi: "वुडरो विल्सन ने 1887 में 'द स्टडी ऑफ एडमिनिस्ट्रेशन' निबंध लिखा।",
    explanation_en: "Woodrow Wilson wrote 'The Study of Administration' essay in 1887.",
    difficulty: "easy"
  },
  {
    paper: "PSC-C-207",
    q_hi: "'हाथॉर्न प्रयोग' का नेतृत्व किसने किया?",
    q_en: "Who led the 'Hawthorne Experiments'?",
    options_hi: ["फ्रेडरिक टेलर", "एल्टन मेयो", "हर्बर्ट साइमन", "चेस्टर बर्नार्ड"],
    options_en: ["Frederick Taylor", "Elton Mayo", "Herbert Simon", "Chester Barnard"],
    correct: 1,
    explanation_hi: "एल्टन मेयो ने हाथॉर्न प्रयोग (1924–32) का नेतृत्व किया — मानवीय संबंध सिद्धांत।",
    explanation_en: "Elton Mayo led the Hawthorne Experiments (1924–32) — Human Relations Theory.",
    difficulty: "easy"
  },
  {
    paper: "PSC-C-207",
    q_hi: "'परिसीमित तर्कसंगतता' (Bounded Rationality) की अवधारणा किसने दी?",
    q_en: "Who gave the concept of 'Bounded Rationality'?",
    options_hi: ["एल्टन मेयो", "लूथर गुलिक", "हर्बर्ट साइमन", "एफ.डब्ल्यू. रिग्स"],
    options_en: ["Elton Mayo", "Luther Gulick", "Herbert Simon", "F.W. Riggs"],
    correct: 2,
    explanation_hi: "हर्बर्ट साइमन ने 'प्रशासनिक व्यवहार' (1947) में 'परिसीमित तर्कसंगतता' की अवधारणा दी।",
    explanation_en: "Herbert Simon gave the concept of 'Bounded Rationality' in 'Administrative Behavior' (1947).",
    difficulty: "easy"
  },
  {
    paper: "PSC-C-207",
    q_hi: "'प्रिज़्मेटिक-साला मॉडल' किसने दिया?",
    q_en: "Who gave the 'Prismatic-Sala Model'?",
    options_hi: ["हर्बर्ट साइमन", "मैक्स वेबर", "एफ.डब्ल्यू. रिग्स", "एल्टन मेयो"],
    options_en: ["Herbert Simon", "Max Weber", "F.W. Riggs", "Elton Mayo"],
    correct: 2,
    explanation_hi: "एफ.डब्ल्यू. रिग्स ने विकासशील देशों के प्रशासन के लिए 'प्रिज़्मेटिक-साला मॉडल' विकसित किया।",
    explanation_en: "F.W. Riggs developed the 'Prismatic-Sala Model' for administration in developing countries.",
    difficulty: "easy"
  },
  {
    paper: "PSC-C-207",
    q_hi: "शून्य-आधारित बजट (ZBB) का विकास किसने किया?",
    q_en: "Who developed Zero-Based Budgeting (ZBB)?",
    options_hi: ["हर्बर्ट साइमन", "पीटर फ्यर", "लूथर गुलिक", "चार्ल्स लिंडब्लोम"],
    options_en: ["Herbert Simon", "Peter Pyhrr", "Luther Gulick", "Charles Lindblom"],
    correct: 1,
    explanation_hi: "पीटर फ्यर ने 1970 में शून्य-आधारित बजट (ZBB) का विकास किया।",
    explanation_en: "Peter Pyhrr developed Zero-Based Budgeting (ZBB) in 1970.",
    difficulty: "medium"
  },
  {
    paper: "PSC-C-207",
    q_hi: "'आदर्श नौकरशाही' (Ideal-type Bureaucracy) का सिद्धांत किसने दिया?",
    q_en: "Who gave the theory of 'Ideal-type Bureaucracy'?",
    options_hi: ["एल्टन मेयो", "रॉबर्ट मर्टन", "मैक्स वेबर", "हर्बर्ट साइमन"],
    options_en: ["Elton Mayo", "Robert Merton", "Max Weber", "Herbert Simon"],
    correct: 2,
    explanation_hi: "मैक्स वेबर ने आदर्श नौकरशाही का सिद्धांत दिया — विधिक-तर्कसंगत सत्ता पर आधारित।",
    explanation_en: "Max Weber gave the Ideal-type Bureaucracy theory — based on Legal-Rational Authority.",
    difficulty: "easy"
  },

  // ════════════════════════════════════════════════════════════════
  //  PAPER: PSC-C-208 — Western Political Thought
  // ════════════════════════════════════════════════════════════════

  {
    paper: "PSC-C-208",
    q_hi: "प्लेटो की प्रसिद्ध पुस्तक कौन सी है?",
    q_en: "What is Plato's famous book?",
    options_hi: ["पॉलिटिक्स", "द रिपब्लिक", "द प्रिंस", "लेवियाथन"],
    options_en: ["Politics", "The Republic", "The Prince", "Leviathan"],
    correct: 1,
    explanation_hi: "प्लेटो की प्रसिद्ध पुस्तक 'द रिपब्लिक' (The Republic) है।",
    explanation_en: "Plato's famous book is 'The Republic'.",
    difficulty: "easy"
  },
  {
    paper: "PSC-C-208",
    q_hi: "'मनुष्य स्वभाव से एक राजनीतिक प्राणी है' — यह कथन किसका है?",
    q_en: "'Man is by nature a political animal' — whose statement is this?",
    options_hi: ["प्लेटो", "अरस्तू", "मैकियावेली", "रूसो"],
    options_en: ["Plato", "Aristotle", "Machiavelli", "Rousseau"],
    correct: 1,
    explanation_hi: "अरस्तू (राजनीति विज्ञान के जनक) ने कहा 'मनुष्य स्वभाव से एक राजनीतिक प्राणी है'।",
    explanation_en: "Aristotle (Father of Political Science) said 'Man is by nature a political animal'.",
    difficulty: "easy"
  },
  {
    paper: "PSC-C-208",
    q_hi: "'द प्रिंस' (1513) के लेखक कौन हैं?",
    q_en: "Who is the author of 'The Prince' (1513)?",
    options_hi: ["हॉब्स", "लॉक", "मैकियावेली", "रूसो"],
    options_en: ["Hobbes", "Locke", "Machiavelli", "Rousseau"],
    correct: 2,
    explanation_hi: "निकोलो मैकियावेली ने 'द प्रिंस' (1513) लिखा — 'साध्य साधनों को उचित ठहराता है'।",
    explanation_en: "Niccolò Machiavelli wrote 'The Prince' (1513) — 'The end justifies the means'.",
    difficulty: "easy"
  },
  {
    paper: "PSC-C-208",
    q_hi: "जे.एस. मिल का 'हानि सिद्धांत' (Harm Principle) किस पुस्तक में है?",
    q_en: "In which book is J.S. Mill's 'Harm Principle' found?",
    options_hi: ["यूटिलिटेरिएनिज्म", "ऑन लिबर्टी", "कंसिडरेशंस ऑन रिप्रेजेंटेटिव गवर्नमेंट", "द सब्जेक्शन ऑफ वुमन"],
    options_en: ["Utilitarianism", "On Liberty", "Considerations on Representative Government", "The Subjection of Women"],
    correct: 1,
    explanation_hi: "जे.एस. मिल का हानि सिद्धांत उनकी पुस्तक 'ऑन लिबर्टी' (1859) में दिया गया है।",
    explanation_en: "J.S. Mill's Harm Principle is given in his book 'On Liberty' (1859).",
    difficulty: "easy"
  },
  {
    paper: "PSC-C-208",
    q_hi: "कार्ल मार्क्स के 'ऐतिहासिक भौतिकवाद' (Historical Materialism) के अनुसार इतिहास का निर्धारण किससे होता है?",
    q_en: "According to Marx's Historical Materialism, what determines history?",
    options_hi: ["धार्मिक विश्वास", "महान व्यक्ति", "आर्थिक/भौतिक स्थितियां", "भौगोलिक कारक"],
    options_en: ["Religious beliefs", "Great individuals", "Economic/material conditions", "Geographic factors"],
    correct: 2,
    explanation_hi: "मार्क्स के अनुसार, इतिहास का निर्धारण आर्थिक/भौतिक स्थितियों द्वारा होता है (हेगेल के विचारवाद का उलटा)।",
    explanation_en: "According to Marx, history is determined by economic/material conditions (an inversion of Hegel's idealism).",
    difficulty: "medium"
  },
  {
    paper: "PSC-C-208",
    q_hi: "प्लेटो ने किसका समर्थन किया?",
    q_en: "What did Plato advocate?",
    options_hi: ["लोकतंत्र", "दार्शनिक-राजा (Philosopher-King)", "अराजकतावाद", "गणतंत्र"],
    options_en: ["Democracy", "Philosopher-King", "Anarchism", "Republic"],
    correct: 1,
    explanation_hi: "प्लेटो ने 'दार्शनिक-राजा' (Philosopher-King) का समर्थन किया — ज्ञानी लोगों को शासन करना चाहिए।",
    explanation_en: "Plato advocated for the 'Philosopher-King' — wise people should rule.",
    difficulty: "easy"
  },

  // ════════════════════════════════════════════════════════════════
  //  PAPER: PSC-A-309 — Human Rights
  // ════════════════════════════════════════════════════════════════

  {
    paper: "PSC-A-309",
    q_hi: "मानवाधिकारों की सार्वभौम घोषणा (UDHR) कब अपनाई गई?",
    q_en: "When was the UDHR adopted?",
    options_hi: ["10 दिसंबर 1945", "10 दिसंबर 1948", "26 जून 1945", "24 अक्टूबर 1945"],
    options_en: ["10 December 1945", "10 December 1948", "26 June 1945", "24 October 1945"],
    correct: 1,
    explanation_hi: "UDHR 10 दिसंबर 1948 को UNGA द्वारा अपनाई गई। 10 दिसंबर को मानवाधिकार दिवस मनाया जाता है।",
    explanation_en: "UDHR was adopted by UNGA on 10 December 1948. 10 December is observed as Human Rights Day.",
    difficulty: "easy"
  },
  {
    paper: "PSC-A-309",
    q_hi: "मानवाधिकारों की तीन पीढ़ियां किसने प्रतिपादित कीं?",
    q_en: "Who propounded the three generations of Human Rights?",
    options_hi: ["करेल वासक", "ह्यूगो ग्रोटियस", "जॉन रॉल्स", "एमर्सन"],
    options_en: ["Karel Vasak", "Hugo Grotius", "John Rawls", "Emerson"],
    correct: 0,
    explanation_hi: "करेल वासक ने मानवाधिकारों की तीन पीढ़ियां प्रतिपादित कीं — नागरिक/राजनीतिक, आर्थिक/सामाजिक, सामूहिक।",
    explanation_en: "Karel Vasak propounded the three generations — Civil/Political, Economic/Social, Collective rights.",
    difficulty: "medium"
  },
  {
    paper: "PSC-A-309",
    q_hi: "R2P (Responsibility to Protect) सिद्धांत UN द्वारा कब अपनाया गया?",
    q_en: "When was R2P adopted by the UN?",
    options_hi: ["2001", "2003", "2005", "2010"],
    options_en: ["2001", "2003", "2005", "2010"],
    correct: 2,
    explanation_hi: "R2P सिद्धांत 2005 में UN विश्व शिखर सम्मेलन में अपनाया गया।",
    explanation_en: "R2P principle was adopted at the 2005 UN World Summit.",
    difficulty: "medium"
  },

  // ════════════════════════════════════════════════════════════════
  //  PAPER: PSC-C-310 — Jharkhand Politics
  // ════════════════════════════════════════════════════════════════

  {
    paper: "PSC-C-310",
    q_hi: "छोटानागपुर काश्तकारी अधिनियम (CNT Act) कब लागू हुआ?",
    q_en: "When was the CNT Act implemented?",
    options_hi: ["1900", "1908", "1947", "1950"],
    options_en: ["1900", "1908", "1947", "1950"],
    correct: 1,
    explanation_hi: "CNT Act 1908 में बिरसा मुंडा के 'उलगुलान' आंदोलन (1899-1900) के बाद लागू हुआ।",
    explanation_en: "CNT Act was implemented in 1908 after Birsa Munda's 'Ulgulan' movement (1899-1900).",
    difficulty: "easy"
  },
  {
    paper: "PSC-C-310",
    q_hi: "पेसा अधिनियम (PESA Act) किस वर्ष पारित हुआ?",
    q_en: "In which year was the PESA Act passed?",
    options_hi: ["1992", "1993", "1996", "2000"],
    options_en: ["1992", "1993", "1996", "2000"],
    correct: 2,
    explanation_hi: "PESA Act 1996 में पारित हुआ — 5वीं अनुसूची के क्षेत्रों में आदिवासी स्वशासन को मजबूत करता है।",
    explanation_en: "PESA Act was passed in 1996 — strengthens tribal self-governance in 5th Schedule areas.",
    difficulty: "easy"
  },

  // ════════════════════════════════════════════════════════════════
  //  PAPER: PSC-C-311 — Political Sociology
  // ════════════════════════════════════════════════════════════════

  {
    paper: "PSC-C-311",
    q_hi: "'नागरिक संस्कृति' (Civic Culture) का अध्ययन किन दो विचारकों ने किया?",
    q_en: "Which two thinkers studied 'Civic Culture'?",
    options_hi: ["मार्क्स और एंगेल्स", "आमंड और वर्बा", "वेबर और दुर्खीम", "पारेतो और मॉस्का"],
    options_en: ["Marx and Engels", "Almond and Verba", "Weber and Durkheim", "Pareto and Mosca"],
    correct: 1,
    explanation_hi: "गेब्रियल आमंड और सिडनी वर्बा ने 'द सिविक कल्चर' (1963) में राजनीतिक संस्कृति का अध्ययन किया।",
    explanation_en: "Gabriel Almond and Sidney Verba studied political culture in 'The Civic Culture' (1963).",
    difficulty: "easy"
  },
  {
    paper: "PSC-C-311",
    q_hi: "'अल्पतंत्र का लौह नियम' (Iron Law of Oligarchy) किसका सिद्धांत है?",
    q_en: "Whose theory is the 'Iron Law of Oligarchy'?",
    options_hi: ["पारेतो", "रॉबर्ट मिशेल्स", "मॉस्का", "सी. राइट मिल्स"],
    options_en: ["Pareto", "Robert Michels", "Mosca", "C. Wright Mills"],
    correct: 1,
    explanation_hi: "रॉबर्ट मिशेल्स का 'अल्पतंत्र का लौह नियम' — कोई भी संगठन अंततः कुलीन वर्ग द्वारा नियंत्रित हो जाता है।",
    explanation_en: "Robert Michels' 'Iron Law of Oligarchy' — any organization eventually becomes controlled by a small elite.",
    difficulty: "medium"
  },
  {
    paper: "PSC-C-311",
    q_hi: "'अभिजात वर्ग का परिसंचरण' (Circulation of Elites) किसकी अवधारणा है?",
    q_en: "Whose concept is the 'Circulation of Elites'?",
    options_hi: ["रॉबर्ट मिशेल्स", "विल्फ्रेडो पारेतो", "सी. राइट मिल्स", "ग्राम्शी"],
    options_en: ["Robert Michels", "Vilfredo Pareto", "C. Wright Mills", "Gramsci"],
    correct: 1,
    explanation_hi: "विल्फ्रेडो पारेतो ने 'अभिजात वर्ग का परिसंचरण' दिया — सत्ता 'शेरों' और 'लोमड़ियों' के बीच घूमती रहती है।",
    explanation_en: "Vilfredo Pareto gave 'Circulation of Elites' — power circulates between 'Lions' and 'Foxes'.",
    difficulty: "medium"
  },

  // ════════════════════════════════════════════════════════════════
  //  PAPER: International Law & Comparative Govt.
  // ════════════════════════════════════════════════════════════════

  {
    paper: "PSC-E-414A",
    q_hi: "अंतर्राष्ट्रीय कानून का जनक किसे कहा जाता है?",
    q_en: "Who is called the father of International Law?",
    options_hi: ["जेरेमी बेंथम", "ह्यूगो ग्रोटियस", "एमर डी वाटेल", "जॉन ऑस्टिन"],
    options_en: ["Jeremy Bentham", "Hugo Grotius", "Emer de Vattel", "John Austin"],
    correct: 1,
    explanation_hi: "ह्यूगो ग्रोटियस को 'अंतर्राष्ट्रीय कानून का जनक' कहा जाता है।",
    explanation_en: "Hugo Grotius is called the 'Father of International Law'.",
    difficulty: "easy"
  },
  {
    paper: "PSC-E-414A",
    q_hi: "'Pacta Sunt Servanda' का क्या अर्थ है?",
    q_en: "What does 'Pacta Sunt Servanda' mean?",
    options_hi: ["युद्ध का कानून", "संधियों का पालन किया जाना चाहिए", "राजनयिक उन्मुक्ति", "समुद्री सीमा"],
    options_en: ["Law of war", "Agreements must be kept", "Diplomatic immunity", "Maritime boundary"],
    correct: 1,
    explanation_hi: "'Pacta Sunt Servanda' = संधियों/सहमति का पालन किया जाना चाहिए।",
    explanation_en: "'Pacta Sunt Servanda' = Agreements/Treaties must be kept.",
    difficulty: "easy"
  },
  {
    paper: "PSC-E-414A",
    q_hi: "अंतर्राष्ट्रीय न्यायालय (ICJ) का मुख्यालय कहाँ है?",
    q_en: "Where is the ICJ headquartered?",
    options_hi: ["न्यूयॉर्क", "जिनेवा", "हेग", "वियना"],
    options_en: ["New York", "Geneva", "The Hague", "Vienna"],
    correct: 2,
    explanation_hi: "ICJ का मुख्यालय हेग, नीदरलैंड में है।",
    explanation_en: "ICJ is headquartered in The Hague, Netherlands.",
    difficulty: "easy"
  },
  {
    paper: "PSC-415",
    q_hi: "किस देश में 'बहुल कार्यपालिका' (Plural Executive) प्रणाली है?",
    q_en: "Which country has a 'Plural Executive' system?",
    options_hi: ["अमेरिका", "फ्रांस", "स्विट्जरलैंड", "जर्मनी"],
    options_en: ["USA", "France", "Switzerland", "Germany"],
    correct: 2,
    explanation_hi: "स्विट्जरलैंड में 'बहुल कार्यपालिका' (7 सदस्यीय संघीय परिषद) प्रणाली है।",
    explanation_en: "Switzerland has a 'Plural Executive' (7-member Federal Council) system.",
    difficulty: "easy"
  },
  {
    paper: "PSC-415",
    q_hi: "फ्रांस की राजनीतिक प्रणाली को क्या कहा जाता है?",
    q_en: "What is the political system of France called?",
    options_hi: ["अध्यक्षीय", "संसदीय", "अर्ध-अध्यक्षीय", "साम्यवादी"],
    options_en: ["Presidential", "Parliamentary", "Semi-presidential", "Communist"],
    correct: 2,
    explanation_hi: "फ्रांस की राजनीतिक प्रणाली को 'अर्ध-अध्यक्षीय प्रणाली' (Semi-presidential System) कहा जाता है।",
    explanation_en: "France's political system is called the 'Semi-presidential System'.",
    difficulty: "easy"
  },
  {
    paper: "PSC-415",
    q_hi: "भारत में पहला लोकायुक्त किस राज्य में स्थापित किया गया?",
    q_en: "In which state was the first Lokayukta established in India?",
    options_hi: ["केरल", "महाराष्ट्र", "कर्नाटक", "राजस्थान"],
    options_en: ["Kerala", "Maharashtra", "Karnataka", "Rajasthan"],
    correct: 1,
    explanation_hi: "पहला लोकायुक्त 1971 में महाराष्ट्र में स्थापित हुआ।",
    explanation_en: "The first Lokayukta was established in Maharashtra in 1971.",
    difficulty: "easy"
  },
  {
    paper: "PSC-312",
    q_hi: "'ब्रंटलैंड रिपोर्ट' (1987) का शीर्षक क्या था?",
    q_en: "What was the title of the 'Brundtland Report' (1987)?",
    options_hi: ["सतत विकास", "हमारा साझा भविष्य", "पृथ्वी का भविष्य", "जलवायु परिवर्तन"],
    options_en: ["Sustainable Development", "Our Common Future", "Future of Earth", "Climate Change"],
    correct: 1,
    explanation_hi: "ब्रंटलैंड रिपोर्ट (1987) का शीर्षक 'हमारा साझा भविष्य' (Our Common Future) था।",
    explanation_en: "The Brundtland Report (1987) was titled 'Our Common Future'.",
    difficulty: "easy"
  },

  // ════════════════════════════════════════════════════════════════
  //  ADDITIONAL HARD-LEVEL QUESTIONS FOR UGC NET
  // ════════════════════════════════════════════════════════════════

  {
    paper: "UGC-NET",
    q_hi: "'सांझा राष्ट्रवाद' (Muttahida Qaumiyat) का समर्थन किसने किया?",
    q_en: "Who supported 'Composite Nationalism' (Muttahida Qaumiyat)?",
    options_hi: ["जिन्नाह", "मौलाना आज़ाद", "सैयद अहमद खान", "इकबाल"],
    options_en: ["Jinnah", "Maulana Azad", "Syed Ahmad Khan", "Iqbal"],
    correct: 1,
    explanation_hi: "मौलाना आज़ाद ने 'सांझा राष्ट्रवाद' (Muttahida Qaumiyat) का समर्थन किया और द्वि-राष्ट्र सिद्धांत का विरोध किया।",
    explanation_en: "Maulana Azad supported 'Composite Nationalism' and opposed the Two-nation theory.",
    difficulty: "medium"
  },
  {
    paper: "UGC-NET",
    q_hi: "कौटिल्य की 'षाड्गुण्य नीति' में कितनी विदेश नीति रणनीतियां हैं?",
    q_en: "How many foreign policy strategies are in Kautilya's 'Shadgunya Niti'?",
    options_hi: ["4", "5", "6", "7"],
    options_en: ["4", "5", "6", "7"],
    correct: 2,
    explanation_hi: "षाड्गुण्य नीति में 6 रणनीतियां हैं: संधि, विग्रह, आसन, यान, संश्रय, द्वैधीभाव।",
    explanation_en: "Shadgunya has 6 strategies: Sandhi, Vigraha, Asana, Yana, Samshraya, Dvaidhibhava.",
    difficulty: "medium"
  },
  {
    paper: "UGC-NET",
    q_hi: "'राष्ट्रवाद एक खतरनाक बीमारी है' — यह किसने कहा?",
    q_en: "'Nationalism is a dangerous disease' — who said this?",
    options_hi: ["गाँधी", "रवींद्रनाथ टैगोर", "नेहरू", "मार्क्स"],
    options_en: ["Gandhi", "Rabindranath Tagore", "Nehru", "Marx"],
    correct: 1,
    explanation_hi: "रवींद्रनाथ टैगोर ने आक्रामक राष्ट्रवाद को 'खतरनाक बीमारी' माना।",
    explanation_en: "Rabindranath Tagore considered aggressive nationalism a 'dangerous disease'.",
    difficulty: "medium"
  },
  {
    paper: "UGC-NET",
    q_hi: "पूना पैक्ट (1932) किनके बीच हुआ?",
    q_en: "The Poona Pact (1932) was between whom?",
    options_hi: ["गाँधी और नेहरू", "गाँधी और अम्बेडकर", "अम्बेडकर और जिन्नाह", "नेहरू और पटेल"],
    options_en: ["Gandhi and Nehru", "Gandhi and Ambedkar", "Ambedkar and Jinnah", "Nehru and Patel"],
    correct: 1,
    explanation_hi: "पूना पैक्ट (1932) महात्मा गाँधी और डॉ. अम्बेडकर के बीच हुआ — अलग निर्वाचिका की जगह संयुक्त निर्वाचिका स्वीकार की गई।",
    explanation_en: "Poona Pact (1932) was between Gandhi and Ambedkar — joint electorate accepted instead of separate electorates.",
    difficulty: "medium"
  },
  {
    paper: "UGC-NET",
    q_hi: "'Muddling Through' (वृद्धिशील मॉडल) नीति-निर्माण पद्धति किसने दी?",
    q_en: "Who gave the 'Muddling Through' (Incremental Model) of policy-making?",
    options_hi: ["हर्बर्ट साइमन", "चार्ल्स लिंडब्लोम", "पीटर फ्यर", "थॉमस डाय"],
    options_en: ["Herbert Simon", "Charles Lindblom", "Peter Pyhrr", "Thomas Dye"],
    correct: 1,
    explanation_hi: "चार्ल्स लिंडब्लोम ने 'Muddling Through' (वृद्धिशील मॉडल) दिया।",
    explanation_en: "Charles Lindblom gave the 'Muddling Through' (Incremental Model).",
    difficulty: "medium"
  },
  {
    paper: "UGC-NET",
    q_hi: "लोक नीति को 'सरकारें जो करती या न करने का चुनाव करती हैं' किसने परिभाषित किया?",
    q_en: "Who defined public policy as 'whatever governments choose to do or not to do'?",
    options_hi: ["हर्बर्ट साइमन", "चार्ल्स लिंडब्लोम", "थॉमस डाय", "डेविड ईस्टन"],
    options_en: ["Herbert Simon", "Charles Lindblom", "Thomas Dye", "David Easton"],
    correct: 2,
    explanation_hi: "थॉमस डाय ने लोक नीति को 'वह जो सरकारें करने या न करने का चुनाव करती हैं' परिभाषित किया।",
    explanation_en: "Thomas Dye defined public policy as 'whatever governments choose to do or not to do'.",
    difficulty: "medium"
  },
  {
    paper: "UGC-NET",
    q_hi: "नौकरशाही की 'लालफीताशाही' (Red Tape) और 'लक्ष्य विस्थापन' (Goal Displacement) की आलोचना किसने की?",
    q_en: "Who criticized bureaucracy for 'Red Tape' and 'Goal Displacement'?",
    options_hi: ["मैक्स वेबर", "रॉबर्ट मर्टन", "हर्बर्ट साइमन", "एल्टन मेयो"],
    options_en: ["Max Weber", "Robert Merton", "Herbert Simon", "Elton Mayo"],
    correct: 1,
    explanation_hi: "रॉबर्ट मर्टन ने नौकरशाही की 'लाल फीताशाही' और 'लक्ष्य विस्थापन' की आलोचना की।",
    explanation_en: "Robert Merton criticized bureaucracy for 'Red tape' and 'Goal displacement'.",
    difficulty: "medium"
  },
  {
    paper: "UGC-NET",
    q_hi: "अरस्तू का आदर्श शासन रूप कौन सा है?",
    q_en: "What is Aristotle's ideal form of government?",
    options_hi: ["लोकतंत्र", "राजतंत्र", "पॉलिटी (Polity)", "कुलीनतंत्र"],
    options_en: ["Democracy", "Monarchy", "Polity", "Aristocracy"],
    correct: 2,
    explanation_hi: "अरस्तू का आदर्श शासन 'पॉलिटी' है — कुलीनतंत्र और लोकतंत्र का मिश्रित रूप, जहाँ मध्यम वर्ग स्थिरता देता है।",
    explanation_en: "Aristotle's ideal is 'Polity' — a mixed form of oligarchy and democracy, where the middle class provides stability.",
    difficulty: "medium"
  },
  {
    paper: "UGC-NET",
    q_hi: "CBDR सिद्धांत (Common But Differentiated Responsibilities) कब अपनाया गया?",
    q_en: "When was the CBDR principle adopted?",
    options_hi: ["1987 — ब्रंटलैंड", "1992 — रियो", "1997 — क्योटो", "2015 — पेरिस"],
    options_en: ["1987 — Brundtland", "1992 — Rio", "1997 — Kyoto", "2015 — Paris"],
    correct: 1,
    explanation_hi: "CBDR सिद्धांत 1992 में रियो पृथ्वी सम्मेलन में अपनाया गया।",
    explanation_en: "CBDR principle was adopted at the Rio Earth Summit in 1992.",
    difficulty: "medium"
  },
  {
    paper: "UGC-NET",
    q_hi: "'APA उद्धरण शैली' मुख्य रूप से किन विषयों में प्रयोग की जाती है?",
    q_en: "'APA citation style' is mainly used in which disciplines?",
    options_hi: ["विज्ञान", "सामाजिक विज्ञान", "मानविकी", "कानून"],
    options_en: ["Science", "Social Sciences", "Humanities", "Law"],
    correct: 1,
    explanation_hi: "APA (American Psychological Association) उद्धरण शैली मुख्य रूप से सामाजिक विज्ञान में प्रयोग होती है।",
    explanation_en: "APA (American Psychological Association) citation style is mainly used in Social Sciences.",
    difficulty: "easy"
  },
  {
    paper: "UGC-NET",
    q_hi: "मोरिस डुवर्गर ने दलों को किन दो प्रकारों में विभाजित किया?",
    q_en: "Into which two types did Maurice Duverger divide parties?",
    options_hi: ["क्षेत्रीय और राष्ट्रीय", "कैडर दल और जन दल", "एकदलीय और बहुदलीय", "वामपंथी और दक्षिणपंथी"],
    options_en: ["Regional and National", "Cadre Party and Mass Party", "Single-party and Multi-party", "Left-wing and Right-wing"],
    correct: 1,
    explanation_hi: "मोरिस डुवर्गर ने दलों को 'कैडर दल' (Cadre Party) और 'जन दल' (Mass Party) में विभाजित किया।",
    explanation_en: "Maurice Duverger divided parties into 'Cadre Party' and 'Mass Party'.",
    difficulty: "medium"
  },
  {
    paper: "UGC-NET",
    q_hi: "राष्ट्र संघ (League of Nations) किस वर्ष स्थापित हुआ?",
    q_en: "In which year was the League of Nations established?",
    options_hi: ["1918", "1919", "1920", "1945"],
    options_en: ["1918", "1919", "1920", "1945"],
    correct: 2,
    explanation_hi: "राष्ट्र संघ 1920 में प्रथम विश्व युद्ध के बाद स्थापित हुआ (वुडरो विल्सन के 14 सूत्री कार्यक्रम का परिणाम)।",
    explanation_en: "League of Nations was established in 1920 after WWI (result of Woodrow Wilson's 14-point program).",
    difficulty: "easy"
  },
  {
    paper: "UGC-NET",
    q_hi: "भारत-अमेरिका असैन्य परमाणु समझौता (123 Agreement) किस अवधि में हुआ?",
    q_en: "The Indo-US Civil Nuclear Agreement (123 Agreement) was in which period?",
    options_hi: ["2001-2003", "2005-2008", "2010-2012", "2014-2016"],
    options_en: ["2001-2003", "2005-2008", "2010-2012", "2014-2016"],
    correct: 1,
    explanation_hi: "भारत-अमेरिका 123 समझौता 2005-2008 की अवधि में हुआ।",
    explanation_en: "The Indo-US 123 Agreement was during the 2005-2008 period.",
    difficulty: "medium"
  },
  {
    paper: "UGC-NET",
    q_hi: "'लोकतंत्र जनता की, जनता द्वारा, जनता के लिए सरकार है' — यह परिभाषा किसकी है?",
    q_en: "'Democracy is government of the people, by the people, for the people' — whose definition is this?",
    options_hi: ["रूसो", "अब्राहम लिंकन", "जे.एस. मिल", "लॉक"],
    options_en: ["Rousseau", "Abraham Lincoln", "J.S. Mill", "Locke"],
    correct: 1,
    explanation_hi: "अब्राहम लिंकन ने गेटिसबर्ग भाषण (1863) में लोकतंत्र की यह प्रसिद्ध परिभाषा दी।",
    explanation_en: "Abraham Lincoln gave this famous definition in his Gettysburg Address (1863).",
    difficulty: "easy"
  },
  {
    paper: "UGC-NET",
    q_hi: "भारतीय संविधान के मूल अधिकार (Fundamental Rights) कहाँ से लिए गए हैं?",
    q_en: "From where were the Fundamental Rights of the Indian Constitution taken?",
    options_hi: ["ब्रिटिश संविधान", "अमेरिकी संविधान", "आयरिश संविधान", "कनाडाई संविधान"],
    options_en: ["British Constitution", "American Constitution", "Irish Constitution", "Canadian Constitution"],
    correct: 1,
    explanation_hi: "मूल अधिकार अमेरिकी संविधान (Bill of Rights) से प्रेरित हैं।",
    explanation_en: "Fundamental Rights are inspired by the American Constitution (Bill of Rights).",
    difficulty: "easy"
  },
  {
    paper: "UGC-NET",
    q_hi: "DPSP (नीति निर्देशक तत्व) कहाँ से लिए गए हैं?",
    q_en: "From where were DPSP taken?",
    options_hi: ["अमेरिकी संविधान", "ब्रिटिश संविधान", "आयरिश संविधान", "जर्मनी का वाइमर संविधान"],
    options_en: ["American Constitution", "British Constitution", "Irish Constitution", "Germany's Weimar Constitution"],
    correct: 2,
    explanation_hi: "DPSP आयरिश संविधान से लिए गए हैं।",
    explanation_en: "DPSP were taken from the Irish Constitution.",
    difficulty: "easy"
  },
  {
    paper: "UGC-NET",
    q_hi: "आपातकालीन प्रावधान कहाँ से लिए गए हैं?",
    q_en: "Emergency provisions were taken from where?",
    options_hi: ["ऑस्ट्रेलिया", "कनाडा", "जर्मनी का वाइमर संविधान", "दक्षिण अफ्रीका"],
    options_en: ["Australia", "Canada", "Germany's Weimar Constitution", "South Africa"],
    correct: 2,
    explanation_hi: "आपातकालीन प्रावधान जर्मनी के वाइमर संविधान से लिए गए हैं।",
    explanation_en: "Emergency provisions were taken from Germany's Weimar Constitution.",
    difficulty: "medium"
  },
  {
    paper: "UGC-NET",
    q_hi: "NITI Aayog ने किसकी जगह ली?",
    q_en: "NITI Aayog replaced which body?",
    options_hi: ["वित्त आयोग", "योजना आयोग", "चुनाव आयोग", "विधि आयोग"],
    options_en: ["Finance Commission", "Planning Commission", "Election Commission", "Law Commission"],
    correct: 1,
    explanation_hi: "NITI Aayog (2015) ने योजना आयोग (1950) की जगह ली।",
    explanation_en: "NITI Aayog (2015) replaced the Planning Commission (1950).",
    difficulty: "easy"
  },
  {
    paper: "UGC-NET",
    q_hi: "'सामान्य इच्छा' (General Will) की अवधारणा किसने दी?",
    q_en: "Who gave the concept of 'General Will'?",
    options_hi: ["हॉब्स", "लॉक", "रूसो", "मिल"],
    options_en: ["Hobbes", "Locke", "Rousseau", "Mill"],
    correct: 2,
    explanation_hi: "रूसो ने 'सामान्य इच्छा' (General Will) की अवधारणा दी — लोकप्रिय संप्रभुता का आधार।",
    explanation_en: "Rousseau gave the concept of 'General Will' — the foundation of popular sovereignty.",
    difficulty: "easy"
  },
  // ════════════════════════════════════════════════════════════════
  //  PHASE 6 INJECTION: UGC NET JRF SPECIAL QUESTIONS
  // ════════════════════════════════════════════════════════════════
  {
    paper: "UGC-NET",
    q_hi: "डेविड ईस्टन के 'व्यवहारवाद के 8 बौद्धिक आधारशिलाओं' में निम्नलिखित में से कौन सा शामिल नहीं है?",
    q_en: "Which of the following is NOT one of David Easton's 8 intellectual foundation stones of Behavioralism?",
    options_hi: ["नियमितताएं (Regularities)", "सत्यापन (Verification)", "मूल्य-प्रतिबद्धता (Value-commitment)", "परिमाणीकरण (Quantification)"],
    options_en: ["Regularities", "Verification", "Value-commitment", "Quantification"],
    correct: 2,
    explanation_hi: "डेविड ईस्टन ने 'मूल्य-निरपेक्षता' (Value-neutrality) की वकालत की थी, न कि मूल्य-प्रतिबद्धता की। मूल्य-प्रतिबद्धता उत्तर-व्यवहारवाद (Post-Behavioralism) की विशेषता है।",
    explanation_en: "Easton advocated for Value-neutrality in Behavioralism. Value-commitment is a feature of Post-Behavioralism.",
    difficulty: "hard"
  },
  {
    paper: "UGC-NET",
    q_hi: "कौटिल्य के 'सप्तांग सिद्धांत' के अनुसार, 'अमात्य' का क्या अर्थ है?",
    q_en: "According to Kautilya's 'Saptanga Theory', what does 'Amatya' mean?",
    options_hi: ["राजा (The King)", "क्षेत्र (The Territory)", "मंत्री/अधिकारी (The Ministers)", "खजाना (The Treasury)"],
    options_en: ["The King", "The Territory", "The Ministers", "The Treasury"],
    correct: 2,
    explanation_hi: "सप्तांग सिद्धांत में अमात्य का अर्थ मंत्री या उच्च अधिकारी होता है, जो राज्य की 'आँखें' माने जाते हैं।",
    explanation_en: "In the Saptanga theory, Amatya refers to the ministers or high officials, considered the 'eyes' of the state.",
    difficulty: "medium"
  },
  {
    paper: "UGC-NET",
    q_hi: "हंस मोर्गेंथाऊ की पुस्तक 'Politics Among Nations' कब प्रकाशित हुई थी?",
    q_en: "When was Hans Morgenthau's book 'Politics Among Nations' published?",
    options_hi: ["1939", "1948", "1961", "1979"],
    options_en: ["1939", "1948", "1961", "1979"],
    correct: 1,
    explanation_hi: "यह यथार्थवाद (Realism) की सबसे महत्वपूर्ण पुस्तक है, जो 1948 में प्रकाशित हुई थी।",
    explanation_en: "It is the seminal text of Classical Realism, published in 1948.",
    difficulty: "medium"
  },
  {
    paper: "UGC-NET",
    q_hi: "केशवानंद भारती केस (1973) किस सिद्धांत के लिए प्रसिद्ध है?",
    q_en: "What is the Kesavananda Bharati case (1973) famous for?",
    options_hi: ["समान नागरिक संहिता (Uniform Civil Code)", "मूल ढांचा सिद्धांत (Basic Structure Doctrine)", "पीआईएल (PIL)", "राष्ट्रपति शासन (President's Rule)"],
    options_en: ["Uniform Civil Code", "Basic Structure Doctrine", "PIL", "President's Rule"],
    correct: 1,
    explanation_hi: "सुप्रीम कोर्ट ने फैसला दिया कि संसद संविधान में संशोधन कर सकती है लेकिन इसके 'मूल ढांचे' को नष्ट नहीं कर सकती।",
    explanation_en: "The Supreme Court ruled that Parliament can amend the Constitution but cannot destroy its 'Basic Structure'.",
    difficulty: "hard"
  },
  {
    paper: "UGC-NET",
    q_hi: "73वें संविधान संशोधन के तहत महिलाओं के लिए कितना आरक्षण अनिवार्य है?",
    q_en: "What is the mandatory reservation for women under the 73rd Constitutional Amendment?",
    options_hi: ["10%", "25%", "33% (1/3rd)", "50%"],
    options_en: ["10%", "25%", "33% (1/3rd)", "50%"],
    correct: 2,
    explanation_hi: "अनुच्छेद 243D के तहत महिलाओं के लिए कम से कम एक तिहाई (33%) सीटें आरक्षित की गई हैं।",
    explanation_en: "Under Article 243D, not less than one-third (33%) of the total seats are reserved for women.",
    difficulty: "easy"
  }
];

// Export for use
if (typeof window !== 'undefined') {
  window.MCQ_BANK = MCQ_BANK;
}
