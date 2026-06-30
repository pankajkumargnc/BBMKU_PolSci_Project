/**
 * Mock Test Data for UGC NET (Dual-Language)
 */

const MOCK_QUESTIONS = [
  {
    id: 1,
    question: '<span class="en">Who among the following coined the term "Soft Power"?</span><span class="hi">निम्नलिखित में से किसने "सॉफ्ट पावर" शब्द गढ़ा?</span>',
    options: [
      '<span class="en">Joseph Nye</span><span class="hi">जोसेफ नाई</span>',
      '<span class="en">Hans Morgenthau</span><span class="hi">हंस मोर्गेन्थाऊ</span>',
      '<span class="en">Kenneth Waltz</span><span class="hi">केनेथ वाल्ट्ज़</span>',
      '<span class="en">Robert Keohane</span><span class="hi">रॉबर्ट केओहेन</span>'
    ],
    answer: 0
  },
  {
    id: 2,
    question: '<span class="en">Which article of the Indian Constitution deals with the Election Commission?</span><span class="hi">भारतीय संविधान का कौन सा अनुच्छेद चुनाव आयोग से संबंधित है?</span>',
    options: [
      '<span class="en">Article 280</span><span class="hi">अनुच्छेद 280</span>',
      '<span class="en">Article 315</span><span class="hi">अनुच्छेद 315</span>',
      '<span class="en">Article 324</span><span class="hi">अनुच्छेद 324</span>',
      '<span class="en">Article 352</span><span class="hi">अनुच्छेद 352</span>'
    ],
    answer: 2
  },
  {
    id: 3,
    question: '<span class="en">"Over himself, over his own body and mind, the individual is sovereign." This statement belongs to:</span><span class="hi">"अपने ऊपर, अपने शरीर और दिमाग पर, व्यक्ति संप्रभु है।" यह कथन किसका है?</span>',
    options: [
      '<span class="en">John Rawls</span><span class="hi">जॉन रॉल्स</span>',
      '<span class="en">J.S. Mill</span><span class="hi">जे.एस. मिल</span>',
      '<span class="en">Karl Marx</span><span class="hi">कार्ल मार्क्स</span>',
      '<span class="en">Jeremy Bentham</span><span class="hi">जेरेमी बेंथम</span>'
    ],
    answer: 1
  },
  {
    id: 4,
    question: '<span class="en">Who gave the concept of "Circulation of Elites"?</span><span class="hi">"अभिजात वर्ग का परिसंचरण" (Circulation of Elites) की अवधारणा किसने दी?</span>',
    options: [
      '<span class="en">Vilfredo Pareto</span><span class="hi">विल्फ्रेडो पारेतो</span>',
      '<span class="en">Gaetano Mosca</span><span class="hi">गेतानो मोस्का</span>',
      '<span class="en">Robert Michels</span><span class="hi">रॉबर्ट मिशेल्स</span>',
      '<span class="en">C. Wright Mills</span><span class="hi">सी. राइट मिल्स</span>'
    ],
    answer: 0
  },
  {
    id: 5,
    question: '<span class="en">Which of the following books is NOT written by B.R. Ambedkar?</span><span class="hi">निम्नलिखित में से कौन सी पुस्तक बी.आर. अम्बेडकर द्वारा नहीं लिखी गई है?</span>',
    options: [
      '<span class="en">Annihilation of Caste</span><span class="hi">जाति का विनाश</span>',
      '<span class="en">The Problem of the Rupee</span><span class="hi">रुपये की समस्या</span>',
      '<span class="en">Who Were the Shudras?</span><span class="hi">शूद्र कौन थे?</span>',
      '<span class="en">Discovery of India</span><span class="hi">भारत की खोज</span>'
    ],
    answer: 3
  }
];

if (typeof window !== 'undefined') {
  window.MOCK_QUESTIONS = MOCK_QUESTIONS;
}
