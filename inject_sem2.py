import sys

sem2_html = """      <!-- SEMESTER 2 -->
      <div id="sem2" class="tab-pane">
        <h2 class="semester-title"><span class="hi">सेमेस्टर II — कोर पाठ्यक्रम</span><span class="en">Semester II — Core Courses</span></h2>

        <!-- Paper 205 -->
        <div class="paper-section">
          <h3 class="paper-title"><span class="hi">PSC-S-205: शैक्षणिक लेखन एवं संचार कौशल</span><span class="en">PSC-S-205: Academic Writing and Communication Skills</span></h3>
          <h4 class="unit-title"><span class="hi">इकाई 1, 2 एवं 6: शैक्षणिक लेखन और संदर्भ शैलियाँ</span><span class="en">Unit 1, 2 & 6: Academic Writing and Citation Styles</span></h4>
          <p><strong><span class="hi">शैक्षणिक लेखन:</span><span class="en">Academic Writing:</span></strong> <span class="hi">विश्वविद्यालयों और विद्वत्तापूर्ण प्रकाशनों में प्रयुक्त लेखन की एक औपचारिक शैली। इसकी विशेषताएँ हैं: स्पष्ट तर्क, साक्ष्य-आधारित दावे, औपचारिक स्वर, सटीक भाषा और उचित उद्धरण (Citation)।</span><span class="en">A formal style of writing used in universities and scholarly publications. Its features include: clear arguments, evidence-based claims, formal tone, precise language, and proper citation.</span></p>
          <ul>
            <li><strong><span class="hi">सिनॉप्सिस (Synopsis):</span><span class="en">Synopsis:</span></strong> <span class="hi">शोध कार्य का खाका। मुख्य तत्व: शीर्षक, समस्या का विवरण, उद्देश्य, परिकल्पना, साहित्य समीक्षा, शोध पद्धति (Methodology)।</span><span class="en">A blueprint of the research work. Key elements: Title, Statement of the Problem, Objectives, Hypothesis, Literature Review, Methodology.</span></li>
          </ul>
          <table>
            <thead>
              <tr>
                <th><span class="hi">प्रमुख उद्धरण (Citation) शैलियाँ</span><span class="en">Major Citation Styles</span></th>
                <th><span class="hi">विवरण</span><span class="en">Description</span></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong><span class="hi">APA (अमेरिकन साइकोलॉजिकल एसोसिएशन)</span><span class="en">APA (American Psychological Association)</span></strong></td>
                <td><span class="hi">लेखक-दिनांक प्रणाली। मुख्य रूप से <strong>सामाजिक विज्ञान (Social Sciences)</strong> में प्रयुक्त। उदा: Rawls, J. (1971). A Theory of Justice.</span><span class="en">Author-Date system. Mainly used in <strong>Social Sciences</strong>. e.g.: Rawls, J. (1971). A Theory of Justice.</span></td>
              </tr>
              <tr>
                <td><strong><span class="hi">MLA (मॉडर्न लैंग्वेज एसोसिएशन)</span><span class="en">MLA (Modern Language Association)</span></strong></td>
                <td><span class="hi">लेखक-पृष्ठ प्रणाली। मुख्य रूप से <strong>मानविकी (Humanities)</strong> में प्रयुक्त।</span><span class="en">Author-Page system. Mainly used in <strong>Humanities</strong>.</span></td>
              </tr>
              <tr>
                <td><strong><span class="hi">Chicago / Turabian</span><span class="en">Chicago / Turabian</span></strong></td>
                <td><span class="hi">इतिहास और राजनीति विज्ञान में प्रयुक्त फुटनोट/ग्रंथसूची प्रणाली।</span><span class="en">Footnote/Bibliography system used in History and Political Science.</span></td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Paper 206 -->
        <div class="paper-section">
          <h3 class="paper-title"><span class="hi">PSC-C-206: अंतर्राष्ट्रीय राजनीति के सिद्धांत</span><span class="en">PSC-C-206: Theories of International Politics</span></h3>
          <h4 class="unit-title"><span class="hi">इकाई 2: उपागम — यथार्थवाद (Realism)</span><span class="en">Unit 2: Approaches — Realism</span></h4>
          <p><span class="hi">अंतर्राष्ट्रीय संबंधों में प्रमुख प्रतिमान (Paradigm)। प्रमुख मान्यताएँ: राज्य प्राथमिक कर्ता हैं, अंतर्राष्ट्रीय व्यवस्था अराजक है (कोई विश्व सरकार नहीं), राज्य तर्कसंगत रूप से राष्ट्रीय हित (शक्ति) की पूर्ति करते हैं, और नैतिकता का कोई विशेष स्थान नहीं है।</span><span class="en">The dominant paradigm in International Relations. Key assumptions: States are the primary actors, the international system is anarchic (no world government), states rationally pursue national interest (power), and morality has no significant place.</span></p>
          <ul>
            <li><strong><span class="hi">हंस मोर्गेन्थाऊ (शास्त्रीय यथार्थवाद):</span><span class="en">Hans Morgenthau (Classical Realism):</span></strong> <span class="hi">आधुनिक यथार्थवाद के जनक। पुस्तक: <em>'पॉलिटिक्स अमंग नेशंस' (1948)</em>। 'शक्ति के रूप में परिभाषित राष्ट्रीय हित' इनकी मुख्य अवधारणा है।</span><span class="en">Father of modern realism. Book: <em>'Politics Among Nations' (1948)</em>. 'National interest defined in terms of power' is his core concept.</span></li>
            <li><strong><span class="hi">थ्यूसीडाइड्स:</span><span class="en">Thucydides:</span></strong> <span class="hi">प्राचीन ग्रीक इतिहासकार (पेलोपोनेसियन युद्ध)। मेलियन संवाद (Melian Dialogue): "शक्तिशाली वही करते हैं जो वे कर सकते हैं और कमज़ोर वही सहते हैं जो उन्हें सहना पड़ता है।"</span><span class="en">Ancient Greek historian (Peloponnesian War). Melian Dialogue: "The strong do what they can and the weak suffer what they must."</span></li>
            <li><strong><span class="hi">नव-यथार्थवाद / संरचनात्मक यथार्थवाद (केनेथ वाल्ट्ज़):</span><span class="en">Neo-Realism / Structural Realism (Kenneth Waltz):</span></strong> <span class="hi">पुस्तक: <em>'थ्योरी ऑफ इंटरनेशनल पॉलिटिक्स' (1979)</em>। इन्होंने राज्यों के इरादों के बजाय अंतर्राष्ट्रीय व्यवस्था की 'अराजक संरचना' पर ध्यान केंद्रित किया।</span><span class="en">Book: <em>'Theory of International Politics' (1979)</em>. Focused on the 'anarchic structure' of the international system rather than the intentions of states.</span></li>
          </ul>
          <h4 class="unit-title"><span class="hi">इकाई 5 से 9: शक्ति संतुलन, सामूहिक सुरक्षा एवं गुटनिरपेक्षता</span><span class="en">Unit 5 to 9: Balance of Power, Collective Security & NAM</span></h4>
          <ul>
            <li><strong><span class="hi">शक्ति संतुलन (Balance of Power):</span><span class="en">Balance of Power:</span></strong> <span class="hi">ऐसी स्थिति जहाँ कोई भी एक राज्य अत्यधिक हावी नहीं हो पाता। राज्य अपनी सुरक्षा और स्वतंत्रता को बनाए रखने के लिए गठबंधन (Alliances) बनाते हैं।</span><span class="en">A situation where no single state becomes overly dominant. States form alliances to maintain their security and independence.</span></li>
            <li><strong><span class="hi">सामूहिक सुरक्षा (Collective Security):</span><span class="en">Collective Security:</span></strong> <span class="hi">यह सिद्धांत कि "एक पर हमला सभी पर हमला है" (One for all, all for one)। यह राष्ट्र संघ (League of Nations) और संयुक्त राष्ट्र चार्टर (अध्याय VII) का आधार है।</span><span class="en">The principle that "an attack on one is an attack on all" (One for all, all for one). This is the basis of the League of Nations and the UN Charter (Chapter VII).</span></li>
            <li><strong><span class="hi">गुटनिरपेक्षता (NAM):</span><span class="en">Non-Aligned Movement (NAM):</span></strong> <span class="hi">शीत युद्ध के दौरान किसी भी सैन्य गठबंधन (NATO या वारसा पैक्ट) में शामिल न होने की विदेश नीति। बांडुंग सम्मेलन (1955) इसके लिए प्रारंभिक कदम था; इसे औपचारिक रूप से बेलग्रेड (1961) में शुरू किया गया था।</span><span class="en">The foreign policy of not joining any military alliance (NATO or Warsaw Pact) during the Cold War. The Bandung Conference (1955) was the preliminary step; it was formally launched in Belgrade (1961).</span></li>
          </ul>
        </div>

        <!-- Paper 207 -->
        <div class="paper-section">
          <h3 class="paper-title"><span class="hi">PSC-C-207: लोक प्रशासन</span><span class="en">PSC-C-207: Public Administration</span></h3>
          <h4 class="unit-title"><span class="hi">इकाई 2: लोक प्रशासन के प्रमुख सिद्धांत</span><span class="en">Unit 2: Major Theories of Public Administration</span></h4>
          <ul>
            <li><strong><span class="hi">मानवीय संबंध सिद्धांत — एल्टन मेयो:</span><span class="en">Human Relations Theory — Elton Mayo:</span></strong> <span class="hi"><strong>हाथॉर्न प्रयोग (1924–32)</strong> ने साबित किया कि कार्यस्थल पर उत्पादकता केवल भौतिक परिस्थितियों (रोशनी/पैसे) पर नहीं, बल्कि सामाजिक कारकों, कार्यकर्ता के मनोबल और अनौपचारिक समूहों (Informal groups) पर निर्भर करती है।</span><span class="en">The <strong>Hawthorne Experiments (1924–32)</strong> proved that workplace productivity depends not only on physical conditions (lighting/money) but on social factors, worker morale, and informal groups.</span></li>
            <li><strong><span class="hi">निर्णय-निर्माण सिद्धांत — हर्बर्ट साइमन:</span><span class="en">Decision-Making Theory — Herbert Simon:</span></strong> <span class="hi">'प्रशासनिक व्यवहार' (1947)। प्रमुख अवधारणा: <strong>परिसीमित तर्कसंगतता (Bounded Rationality)</strong>। साइमन के अनुसार निर्णय निर्माता असीमित जानकारी नहीं रखते, इसलिए वे 'इष्टतम' (Optimize) करने के बजाय 'संतोषजनक' (Satisficing) विकल्प चुनते हैं।</span><span class="en">'Administrative Behavior' (1947). Core concept: <strong>Bounded Rationality</strong>. Simon argued that decision-makers lack unlimited information, so they choose a 'satisficing' option instead of an 'optimizing' one.</span></li>
            <li><strong><span class="hi">पारिस्थितिक सिद्धांत — एफ. डब्ल्यू. रिग्स:</span><span class="en">Ecological Theory — F. W. Riggs:</span></strong> <span class="hi">विकासशील देशों के प्रशासन को समझाने के लिए <strong>प्रिज़्मेटिक-साला मॉडल (Prismatic-Sala Model)</strong> विकसित किया। (फ्यूज्ड → प्रिज़्मेटिक → डिफ्रैक्टेड)।</span><span class="en">Developed the <strong>Prismatic-Sala Model</strong> to explain administration in developing countries. (Fused → Prismatic → Diffracted).</span></li>
          </ul>
        </div>

        <!-- Paper 208 -->
        <div class="paper-section">
          <h3 class="paper-title"><span class="hi">PSC-C-208: पाश्चात्य राजनीतिक विचार</span><span class="en">PSC-C-208: Western Political Thought</span></h3>
          <h4 class="unit-title"><span class="hi">इकाई 1 एवं 2: प्लेटो और अरस्तू</span><span class="en">Unit 1 & 2: Plato and Aristotle</span></h4>
          <ul>
            <li><strong><span class="hi">प्लेटो (Plato):</span><span class="en">Plato:</span></strong> <span class="hi">द रिपब्लिक (The Republic) के लेखक। <strong>दार्शनिक-राजा (Philosopher-King)</strong> की वकालत। उन्होंने संरक्षकों (Guardians) को भ्रष्टाचार से मुक्त रखने के लिए <strong>'पत्नियों और संपत्ति का साम्यवाद' (Abolition of property/family)</strong> का सुझाव दिया। उनका 'नोबल लाई' (Noble Lie) सामाजिक स्थिरता के लिए था।</span><span class="en">Author of The Republic. Advocated for the <strong>Philosopher-King</strong>. He suggested the <strong>'Communism of wives and property' (Abolition of property/family)</strong> for the guardians to keep them free from corruption. His 'Noble Lie' (Myth of Metals) was for social stability.</span></li>
            <li><strong><span class="hi">अरस्तू (Aristotle):</span><span class="en">Aristotle:</span></strong> <span class="hi">राजनीति विज्ञान के जनक। उनका प्रसिद्ध कथन है "मनुष्य स्वभाव से एक राजनीतिक प्राणी है।" उनका आदर्श राज्य <strong>पॉलिटी (Polity)</strong> है, जो कुलीनतंत्र और लोकतंत्र का मिश्रण है, जहाँ मध्यम वर्ग स्थिरता प्रदान करता है।</span><span class="en">Father of Political Science. His famous statement is "Man is by nature a political animal." His ideal state is <strong>Polity</strong>, a mixed form of oligarchy and democracy, where the middle class provides stability.</span></li>
          </ul>
          <h4 class="unit-title"><span class="hi">इकाई 4: मैकियावेली - आधुनिक विचारक</span><span class="en">Unit 4: Machiavelli - Modern Thinker</span></h4>
          <p><span class="hi">निकोलो मैकियावेली की प्रसिद्ध पुस्तक <strong>'द प्रिंस' (1513)</strong> है। उन्होंने राजनीति को नैतिकता और धर्म से अलग किया (राजनीतिक यथार्थवाद)। 'प्रिंस' को शेर (बल) और लोमड़ी (चालाकी) दोनों होना चाहिए। उनका मानना था कि <strong>"उद्देश्य साधनों को उचित ठहराता है" (The end justifies the means)</strong>।</span><span class="en">Niccolò Machiavelli's famous book is <strong>'The Prince' (1513)</strong>. He separated politics from morality and religion (Political Realism). A 'Prince' must be both a lion (force) and a fox (cunning). He believed that <strong>"The end justifies the means"</strong>.</span></p>
          <h4 class="unit-title"><span class="hi">इकाई 6 और 10: जे.एस. मिल और कार्ल मार्क्स</span><span class="en">Unit 6 and 10: J.S. Mill and Karl Marx</span></h4>
          <ul>
            <li><strong><span class="hi">जे. एस. मिल (J. S. Mill - स्वतंत्रता):</span><span class="en">J. S. Mill (Liberty):</span></strong> <span class="hi">उनकी पुस्तक <em>'ऑन लिबर्टी' (1859)</em> में <strong>हानि सिद्धांत (Harm Principle)</strong> दिया गया है: "किसी सभ्य समुदाय के किसी सदस्य पर उसकी इच्छा के विरुद्ध शक्ति का प्रयोग करने का एकमात्र उद्देश्य दूसरों को नुकसान से बचाना है।"</span><span class="en">His book <em>'On Liberty' (1859)</em> introduces the <strong>Harm Principle</strong>: "The only purpose for which power can be rightfully exercised over any member of a civilized community, against his will, is to prevent harm to others."</span></li>
            <li><strong><span class="hi">कार्ल मार्क्स (Karl Marx):</span><span class="en">Karl Marx:</span></strong> <span class="hi"><strong>ऐतिहासिक भौतिकवाद (Historical Materialism):</strong> इतिहास का निर्धारण आर्थिक/भौतिक स्थितियों द्वारा होता है। <strong>अतिरिक्त मूल्य (Surplus Value):</strong> मज़दूर जितना मूल्य पैदा करते हैं, उन्हें भुगतान उससे बहुत कम मिलता है; यही चोरी हुआ मुनाफा शोषण का स्रोत है। उन्होंने एक 'वर्गविहीन और राज्यविहीन' (Classless and stateless) साम्यवादी समाज की वकालत की।</span><span class="en"><strong>Historical Materialism:</strong> History is determined by economic/material conditions. <strong>Surplus Value:</strong> Workers create more value than they are paid; this stolen profit is the source of exploitation. He advocated for a 'classless and stateless' communist society.</span></li>
          </ul>
        </div>
"""

with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# I need to insert sem2_html just before `<!-- PHASE 12: SEMESTER 2 MASTER Q&A & TIPS -->`
# and also close sem1!
# Wait, currently in index.html, sem1 ends with:
#   </div>
# </div>
# <!-- PHASE 12: SEMESTER 2 MASTER Q&A & TIPS -->
# <div class="paper-section" id="sem2-qa">

# Let's fix the structure properly.
# `sem1-qa` div is currently closed. Then `sem1` tab-pane is NOT closed.
# The `<!-- PHASE 12...` is currently inside `sem1`.
# We need to insert `</div>` to close `sem1`, then our `sem2_html`!
# Let's find `<!-- PHASE 12: SEMESTER 2 MASTER Q&A & TIPS -->`
idx = html.find("<!-- PHASE 12: SEMESTER 2 MASTER Q&A & TIPS -->")
if idx != -1:
    new_html = html[:idx] + "      </div>\n\n" + sem2_html + "\n\n        " + html[idx:]
    with open('index.html', 'w', encoding='utf-8') as f:
        f.write(new_html)
    print("Injected Sem 2 successfully!")
else:
    print("Could not find PHASE 12 marker.")
