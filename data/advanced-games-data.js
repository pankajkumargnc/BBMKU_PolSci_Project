/**
 * Advanced Game Data (Chronology & Debate)
 */

const CHRONOLOGY_DATA = [
  { id: 1, text: '<span class="en">The Prince (Machiavelli)</span><span class="hi">द प्रिंस (मैकियावेली)</span>', year: 1532 },
  { id: 2, text: '<span class="en">Leviathan (Hobbes)</span><span class="hi">लेवियाथन (हॉब्स)</span>', year: 1651 },
  { id: 3, text: '<span class="en">Two Treatises of Government (Locke)</span><span class="hi">सरकार पर दो ग्रंथ (लॉक)</span>', year: 1689 },
  { id: 4, text: '<span class="en">The Social Contract (Rousseau)</span><span class="hi">द सोशल कॉन्ट्रैक्ट (रूसो)</span>', year: 1762 }
];

const DEBATE_DATA = {
  topic: '<span class="en">Rousseau\'s Concept of General Will</span><span class="hi">रूसो का \'सामान्य इच्छा\' का सिद्धांत</span>',
  statements: [
    { id: 's1', text: '<span class="en">It aims at the common good of all citizens.</span><span class="hi">यह सभी नागरिकों की भलाई के लिए है।</span>', type: 'pro' },
    { id: 's2', text: '<span class="en">It can lead to totalitarianism if misinterpreted.</span><span class="hi">गलत व्याख्या होने पर यह अधिनायकवाद (Totalitarianism) को जन्म दे सकता है।</span>', type: 'con' },
    { id: 's3', text: '<span class="en">It represents the true liberty of individuals.</span><span class="hi">यह व्यक्तियों की सच्ची स्वतंत्रता का प्रतिनिधित्व करता है।</span>', type: 'pro' },
    { id: 's4', text: '<span class="en">It ignores minority rights.</span><span class="hi">यह अल्पसंख्यक अधिकारों की उपेक्षा करता है।</span>', type: 'con' }
  ]
};

if (typeof window !== 'undefined') {
  window.CHRONOLOGY_DATA = CHRONOLOGY_DATA;
  window.DEBATE_DATA = DEBATE_DATA;
}
