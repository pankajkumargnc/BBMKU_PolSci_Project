/**
 * BBMKU M.A. Political Science — Endless Game Data (Matching & MCQ)
 * Dual-language supported.
 */

const MATCH_POOL = [
  { left: '<span class="en">Plato</span><span class="hi">प्लेटो</span>', right: '<span class="en">The Republic</span><span class="hi">द रिपब्लिक</span>' },
  { left: '<span class="en">Machiavelli</span><span class="hi">मैकियावेली</span>', right: '<span class="en">The Prince</span><span class="hi">द प्रिंस</span>' },
  { left: '<span class="en">Hobbes</span><span class="hi">हॉब्स</span>', right: '<span class="en">Leviathan</span><span class="hi">लेवियाथन</span>' },
  { left: '<span class="en">Rousseau</span><span class="hi">रूसो</span>', right: '<span class="en">The Social Contract</span><span class="hi">द सोशल कॉन्ट्रैक्ट</span>' },
  { left: '<span class="en">John Locke</span><span class="hi">जॉन लॉक</span>', right: '<span class="en">Natural Rights</span><span class="hi">प्राकृतिक अधिकार</span>' },
  { left: '<span class="en">David Easton</span><span class="hi">डेविड ईस्टन</span>', right: '<span class="en">Behavioralism</span><span class="hi">व्यवहारवाद</span>' },
  { left: '<span class="en">Kautilya</span><span class="hi">कौटिल्य</span>', right: '<span class="en">Saptanga Theory</span><span class="hi">सप्तांग सिद्धांत</span>' },
  { left: '<span class="en">Hans Morgenthau</span><span class="hi">हंस मोर्गेन्थाऊ</span>', right: '<span class="en">Classical Realism</span><span class="hi">शास्त्रीय यथार्थवाद</span>' },
  { left: '<span class="en">Article 14</span><span class="hi">अनुच्छेद 14</span>', right: '<span class="en">Equality before Law</span><span class="hi">कानून के समक्ष समानता</span>' },
  { left: '<span class="en">Article 21</span><span class="hi">अनुच्छेद 21</span>', right: '<span class="en">Right to Life</span><span class="hi">जीवन का अधिकार</span>' },
  { left: '<span class="en">Article 32</span><span class="hi">अनुच्छेद 32</span>', right: '<span class="en">Constitutional Remedies</span><span class="hi">संवैधानिक उपचार</span>' },
  { left: '<span class="en">Article 40</span><span class="hi">अनुच्छेद 40</span>', right: '<span class="en">Village Panchayats</span><span class="hi">ग्राम पंचायत</span>' },
  { left: '<span class="en">Karl Marx</span><span class="hi">कार्ल मार्क्स</span>', right: '<span class="en">Das Kapital</span><span class="hi">दास कैपिटल</span>' },
  { left: '<span class="en">Aristotle</span><span class="hi">अरस्तू</span>', right: '<span class="en">Politics</span><span class="hi">पॉलिटिक्स</span>' },
  { left: '<span class="en">B.R. Ambedkar</span><span class="hi">बी.आर. अम्बेडकर</span>', right: '<span class="en">Annihilation of Caste</span><span class="hi">जाति का विनाश</span>' },
  { left: '<span class="en">Kenneth Waltz</span><span class="hi">केनेथ वाल्ट्ज़</span>', right: '<span class="en">Neo-Realism</span><span class="hi">नव-यथार्थवाद</span>' },
  { left: '<span class="en">Lucian Pye</span><span class="hi">लूसियन पाई</span>', right: '<span class="en">Political Development</span><span class="hi">राजनीतिक विकास</span>' },
  { left: '<span class="en">Gabriel Almond</span><span class="hi">गेब्रियल आलमंड</span>', right: '<span class="en">Structural Functionalism</span><span class="hi">संरचनात्मक प्रकार्यवाद</span>' },
  { left: '<span class="en">Gramsci</span><span class="hi">ग्राम्शी</span>', right: '<span class="en">Hegemony</span><span class="hi">प्राधान्य (Hegemony)</span>' },
  { left: '<span class="en">Isaiah Berlin</span><span class="hi">यशायाह बर्लिन</span>', right: '<span class="en">Two Concepts of Liberty</span><span class="hi">स्वतंत्रता की दो अवधारणाएँ</span>' }
];

const MCQ_POOL = [
  {
    question: '<span class="en">Who is known as the father of Political Science?</span><span class="hi">राजनीति विज्ञान का जनक किसे कहा जाता है?</span>',
    options: [
      '<span class="en">Plato</span><span class="hi">प्लेटो</span>',
      '<span class="en">Aristotle</span><span class="hi">अरस्तू</span>',
      '<span class="en">Socrates</span><span class="hi">सुकरात</span>',
      '<span class="en">Machiavelli</span><span class="hi">मैकियावेली</span>'
    ],
    correctIndex: 1
  },
  {
    question: '<span class="en">Which article is known as the "Heart and Soul of the Constitution"?</span><span class="hi">किस अनुच्छेद को "संविधान का हृदय और आत्मा" कहा जाता है?</span>',
    options: [
      '<span class="en">Article 14</span><span class="hi">अनुच्छेद 14</span>',
      '<span class="en">Article 19</span><span class="hi">अनुच्छेद 19</span>',
      '<span class="en">Article 21</span><span class="hi">अनुच्छेद 21</span>',
      '<span class="en">Article 32</span><span class="hi">अनुच्छेद 32</span>'
    ],
    correctIndex: 3
  },
  {
    question: '<span class="en">"Man is by nature a political animal." Who said this?</span><span class="hi">"मनुष्य स्वभाव से एक राजनीतिक प्राणी है।" यह किसने कहा?</span>',
    options: [
      '<span class="en">Plato</span><span class="hi">प्लेटो</span>',
      '<span class="en">Karl Marx</span><span class="hi">कार्ल मार्क्स</span>',
      '<span class="en">Aristotle</span><span class="hi">अरस्तू</span>',
      '<span class="en">Hobbes</span><span class="hi">हॉब्स</span>'
    ],
    correctIndex: 2
  },
  {
    question: '<span class="en">Who authored the book "Politics Among Nations"?</span><span class="hi">"पॉलिटिक्स अमंग नेशंस" पुस्तक के लेखक कौन हैं?</span>',
    options: [
      '<span class="en">Kenneth Waltz</span><span class="hi">केनेथ वाल्ट्ज़</span>',
      '<span class="en">Hans Morgenthau</span><span class="hi">हंस मोर्गेन्थाऊ</span>',
      '<span class="en">John Mearsheimer</span><span class="hi">जॉन मीयरशाइमर</span>',
      '<span class="en">Woodrow Wilson</span><span class="hi">वुड्रो विल्सन</span>'
    ],
    correctIndex: 1
  },
  {
    question: '<span class="en">Which of the following is NOT an element of the State?</span><span class="hi">निम्नलिखित में से कौन राज्य का तत्व नहीं है?</span>',
    options: [
      '<span class="en">Population</span><span class="hi">जनसंख्या</span>',
      '<span class="en">Territory</span><span class="hi">क्षेत्र (भूभाग)</span>',
      '<span class="en">Government</span><span class="hi">सरकार</span>',
      '<span class="en">Political Party</span><span class="hi">राजनीतिक दल</span>'
    ],
    correctIndex: 3
  }
];

if (typeof window !== 'undefined') {
  window.MATCH_POOL = MATCH_POOL;
  window.MCQ_POOL = MCQ_POOL;
}
