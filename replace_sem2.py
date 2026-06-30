import sys

html_content = """          <!-- PAPER 1 (Academic Writing) -->
          <h4 class="unit-title" style="color: #6366f1;"><i class="fas fa-edit"></i> Academic Writing and Communication Skills</h4>
          <div class="content-box">
            <h5 class="qa-section-title"><i class="fas fa-bolt" style="color: #f59e0b;"></i> Short Questions (2-5 Marks)</h5>

            <details class="qa-accordion">
              <summary><span class="qa-badge">Q1</span> What is a Research Synopsis?</summary>
              <div class="qa-content">
                <p>A research synopsis is a brief summary or blueprint of a proposed research project. It outlines the research problem, objectives, hypothesis, methodology, and significance of the study. It helps supervisors evaluate the feasibility of the research before it begins.</p>
              </div>
            </details>

            <details class="qa-accordion">
              <summary><span class="qa-badge">Q2</span> What does APA stand for and where is it used?</summary>
              <div class="qa-content">
                <p>APA stands for <strong>American Psychological Association</strong>. It is a standard citation style primarily used in the Social Sciences, Education, and Psychology to ensure consistency in formatting, references, and citations within academic papers.</p>
              </div>
            </details>

            <details class="qa-accordion">
              <summary><span class="qa-badge">Q3</span> Explain the 'Author-Date' citation system.</summary>
              <div class="qa-content">
                <p>Used predominantly in the APA style, this system requires the author's last name and the publication year to be placed in parentheses immediately after the cited text (e.g., Smith, 2020). It allows readers to quickly locate the full source in the bibliography.</p>
              </div>
            </details>

            <details class="qa-accordion">
              <summary><span class="qa-badge">Q4</span> What is Plagiarism?</summary>
              <div class="qa-content">
                <p>Plagiarism is the unethical practice of presenting someone else's ideas, words, data, or work as your own without providing proper credit or citation. In academia, it is considered a serious intellectual offense punishable by expulsion or rejection of research.</p>
              </div>
            </details>

            <details class="qa-accordion">
              <summary><span class="qa-badge">Q5</span> What is a Literature Review?</summary>
              <div class="qa-content">
                <p>A comprehensive summary and critical analysis of previously published research on a specific topic. It helps identify gaps in existing knowledge, preventing duplication of work and providing a solid foundation for new research.</p>
              </div>
            </details>

            <h5 class="qa-section-title" style="margin-top: 20px;"><i class="fas fa-pen-nib" style="color: #3b82f6;"></i> Long Questions (15-20 Marks)</h5>

            <details class="qa-accordion">
              <summary><span class="qa-badge">Q1</span> Define Academic Writing and discuss its key characteristics compared to creative writing. <span class="qa-marks">[15 Marks]</span></summary>
              <div class="qa-content">
                <h5>1. Introduction</h5>
                <p>Academic writing is a formal style of writing used in universities and scholarly publications. Unlike other forms of writing, it aims to communicate complex ideas clearly, logically, and objectively to an academic audience.</p>
                <h5>2. Key Characteristics of Academic Writing</h5>
                <ul>
                  <li><strong>Formality:</strong> Avoids colloquialisms, slang, and contractions (e.g., uses "do not" instead of "don't").</li>
                  <li><strong>Objectivity:</strong> Written in the third person; avoids emotional language. It focuses on facts and evidence rather than personal feelings.</li>
                  <li><strong>Structure:</strong> Highly structured with a clear introduction, body paragraphs (with topic sentences), and a conclusion.</li>
                  <li><strong>Evidence-Based:</strong> Claims must be supported by empirical data or citations from credible, peer-reviewed sources.</li>
                  <li><strong>Precision:</strong> Language must be precise and unambiguous.</li>
                </ul>
                <h5>3. Academic vs. Creative Writing</h5>
                <ul>
                  <li><strong>Purpose:</strong> Academic writing informs, analyzes, and persuades based on facts. Creative writing entertains, evokes emotion, and tells stories.</li>
                  <li><strong>Tone:</strong> Academic is objective and formal; Creative is subjective, expressive, and informal.</li>
                  <li><strong>Formatting:</strong> Academic follows strict citation styles (APA, MLA); Creative has no strict rules.</li>
                </ul>
                <h5>4. Conclusion</h5>
                <p>Mastering academic writing is essential for researchers to contribute to the global body of knowledge credibly and professionally.</p>
              </div>
            </details>

            <details class="qa-accordion">
              <summary><span class="qa-badge">Q2</span> Explain the different standard Citation Styles (APA, MLA, Chicago). Why is proper citation essential in research? <span class="qa-marks">[20 Marks]</span></summary>
              <div class="qa-content">
                <h5>1. Introduction</h5>
                <p>A citation is a formal reference to a published or unpublished source. Different academic disciplines use different citation styles based on what information is deemed most important.</p>
                <h5>2. Major Citation Styles</h5>
                <ul>
                  <li><strong>APA (American Psychological Association):</strong> Used in Social Sciences. Uses an "Author-Date" format in-text. It prioritizes the year of publication because current research is vital in sciences. <br><em>Example: (Smith, 2021).</em></li>
                  <li><strong>MLA (Modern Language Association):</strong> Used in Humanities (Literature, Arts). Uses an "Author-Page" format. It prioritizes the author and the specific page where a quote is found. <br><em>Example: (Smith 45).</em></li>
                  <li><strong>Chicago Style:</strong> Used mostly in History. It typically uses Footnotes or Endnotes rather than in-text citations, allowing for extensive historical commentary without cluttering the text.</li>
                </ul>
                <h5>3. Why is Proper Citation Essential?</h5>
                <ul>
                  <li><strong>Avoiding Plagiarism:</strong> Giving credit to original authors prevents intellectual theft.</li>
                  <li><strong>Verifiability:</strong> Allows readers and peer-reviewers to trace the source of facts, ensuring the research's credibility.</li>
                  <li><strong>Acknowledging Prior Work:</strong> Shows that the researcher is aware of existing literature.</li>
                </ul>
                <h5>4. Conclusion</h5>
                <p>Citation is not just a formatting rule; it is the backbone of academic integrity, ensuring that scholarly conversations are transparent and built on verifiable foundations.</p>
              </div>
            </details>

            <div class="info-box" style="border-left-color: #f59e0b;">
              <h4>🎓 UGC NET Expert Tips</h4>
              <p>For Research Aptitude (Paper 1), remember: APA is Author-Date (Social Sciences). MLA is Author-Page (Humanities). Chicago uses Footnotes/Endnotes (History).</p>
            </div>
          </div>

          <!-- PAPER 2 (International Relations) -->
          <h4 class="unit-title" style="color: #6366f1;"><i class="fas fa-handshake"></i> Theories of International Politics</h4>
          <div class="content-box">
            <h5 class="qa-section-title"><i class="fas fa-bolt" style="color: #f59e0b;"></i> Short Questions (2-5 Marks)</h5>

            <details class="qa-accordion">
              <summary><span class="qa-badge">Q1</span> What is 'Classical Realism'?</summary>
              <div class="qa-content">
                <p>Championed by <strong>Hans Morgenthau</strong>, it argues that international politics is driven by the selfish and power-seeking nature of human beings. States, led by humans, naturally seek to maximize their power, leading to inevitable conflict.</p>
              </div>
            </details>

            <details class="qa-accordion">
              <summary><span class="qa-badge">Q2</span> What is 'Neo-Realism'?</summary>
              <div class="qa-content">
                <p>Developed by <strong>Kenneth Waltz</strong> (Structural Realism), it argues that state behavior is determined not by human nature, but by the <strong>anarchic structure</strong> of the international system. Since there is no world government, states must prioritize self-help and survival.</p>
              </div>
            </details>

            <details class="qa-accordion">
              <summary><span class="qa-badge">Q3</span> Define 'Balance of Power'.</summary>
              <div class="qa-content">
                <p>A core concept in Realism where national security is enhanced when military capability is distributed so that no one state is strong enough to dominate all others. If one state grows too powerful, others form alliances to 'balance' it.</p>
              </div>
            </details>

            <details class="qa-accordion">
              <summary><span class="qa-badge">Q4</span> What is 'Collective Security'?</summary>
              <div class="qa-content">
                <p>An arrangement, central to the League of Nations and the UN, where a group of nations agree that a security threat or attack on one is an attack on all. They commit to a collective response to deter aggression (e.g., the Gulf War).</p>
              </div>
            </details>

            <details class="qa-accordion">
              <summary><span class="qa-badge">Q5</span> What is the core argument of Constructivism?</summary>
              <div class="qa-content">
                <p>Alexander Wendt famously said, <strong>"Anarchy is what states make of it."</strong> Constructivism argues that international relations are socially constructed by ideas, norms, identities, and culture, not just by material power or fixed structural anarchy.</p>
              </div>
            </details>

            <h5 class="qa-section-title" style="margin-top: 20px;"><i class="fas fa-pen-nib" style="color: #3b82f6;"></i> Long Questions (15-20 Marks)</h5>

            <details class="qa-accordion">
              <summary><span class="qa-badge">Q1</span> Critically examine Hans Morgenthau’s Six Principles of Political Realism. <span class="qa-marks">[20 Marks]</span></summary>
              <div class="qa-content">
                <h5>1. Introduction</h5>
                <p>Hans Morgenthau laid the foundation for Classical Realism in his 1948 book <em>'Politics Among Nations'</em>. He argued that politics, like society, is governed by objective laws rooted in human nature.</p>
                <h5>2. The Six Principles</h5>
                <ul>
                  <li><strong>Objective Laws of Human Nature:</strong> Politics is governed by laws rooted in the selfish and power-seeking nature of humans.</li>
                  <li><strong>Interest defined as Power:</strong> The main signpost of political action is the concept of national interest defined in terms of power.</li>
                  <li><strong>Dynamic nature of Interest:</strong> The concept of interest remains the same, but the reality of what constitutes power changes depending on the political/cultural environment.</li>
                  <li><strong>Moral Significance of Political Action:</strong> Universal moral principles cannot be applied directly to state actions. The survival of the state is the supreme moral duty.</li>
                  <li><strong>Difference between National and Universal Morals:</strong> The moral aspirations of a particular nation should not be equated with the moral laws of the universe.</li>
                  <li><strong>Autonomy of the Political Sphere:</strong> Political realism maintains the autonomy of the political sphere, distinct from economics or ethics.</li>
                </ul>
                <h5>3. Criticism</h5>
                <p>Feminist scholars like J. Ann Tickner criticize it for being overly masculine and conflict-oriented. Neo-realists criticize it for ignoring the structure of the international system.</p>
                <h5>4. Conclusion</h5>
                <p>Despite criticisms, Morgenthau’s principles remain the starting point for understanding power politics and national security.</p>
              </div>
            </details>

            <details class="qa-accordion">
              <summary><span class="qa-badge">Q2</span> Differentiate between Classical Realism (Morgenthau) and Structural Realism (Waltz). <span class="qa-marks">[15 Marks]</span></summary>
              <div class="qa-content">
                <h5>1. Introduction</h5>
                <p>While both branches of Realism agree that states are the primary actors and that the international system is anarchic, they differ fundamentally on the <em>cause</em> of state behavior.</p>
                <h5>2. Classical Realism (Morgenthau)</h5>
                <ul>
                  <li><strong>Root Cause:</strong> Human Nature. States act aggressively because humans possess an innate lust for power (animus dominandi).</li>
                  <li><strong>Goal:</strong> Maximization of power. Power is an end in itself.</li>
                  <li><strong>Focus:</strong> Flawed human nature and the decisions of state leaders.</li>
                </ul>
                <h5>3. Structural Realism / Neo-Realism (Waltz)</h5>
                <ul>
                  <li><strong>Root Cause:</strong> International Structure. States act aggressively due to the anarchic structure of the global system (lack of a central enforcer).</li>
                  <li><strong>Goal:</strong> Maximization of security (Defensive Realism). Power is just a means to ensure survival.</li>
                  <li><strong>Focus:</strong> The distribution of capabilities (bipolarity vs multipolarity) in the system.</li>
                </ul>
                <h5>4. Conclusion</h5>
                <p>Waltz made realism more scientific by removing the subjective reliance on "human nature," focusing instead on how the system forces states to act defensively, regardless of whether their leaders are good or bad.</p>
              </div>
            </details>

            <details class="qa-accordion">
              <summary><span class="qa-badge">Q3</span> Analyze the relevance of the Non-Aligned Movement (NAM) in the contemporary multi-polar world. <span class="qa-marks">[20 Marks]</span></summary>
              <div class="qa-content">
                <h5>1. Introduction</h5>
                <p>Formed in 1961 (Belgrade Conference), NAM was a movement of developing nations seeking independence from the US and Soviet blocs during the Cold War. With the end of the Cold War in 1991, its relevance has been heavily debated.</p>
                <h5>2. Arguments for the Decline of Relevance</h5>
                <ul>
                  <li><strong>End of Bipolarity:</strong> Since there are no longer two rival superpowers, the primary logic of "non-alignment" seems obsolete.</li>
                  <li><strong>Economic Globalization:</strong> Developing nations are heavily integrated with the West economically, making political non-alignment difficult.</li>
                  <li><strong>Internal Conflicts:</strong> NAM countries often fight among themselves (e.g., Iran-Iraq war), weakening collective solidarity.</li>
                </ul>
                <h5>3. Arguments for Continued Relevance</h5>
                <ul>
                  <li><strong>Voice of the Global South:</strong> With 120 members, it remains the largest grouping outside the UN, acting as a crucial platform for the Third World.</li>
                  <li><strong>New Forms of Imperialism:</strong> It is needed to resist neo-colonialism, unfair WTO trade practices, and Western hegemony.</li>
                  <li><strong>Contemporary Issues:</strong> NAM focuses on new challenges like climate change (CBDR), terrorism, and the demand for UN Security Council reforms.</li>
                  <li><strong>Strategic Autonomy:</strong> Even in a multipolar world, nations need a framework to avoid being dragged into conflicts between new rivalries (e.g., US vs China).</li>
                </ul>
                <h5>4. Conclusion</h5>
                <p>While the original Cold War context is gone, the underlying desire for 'Strategic Autonomy' and a just global order makes NAM (or the idea of non-alignment) highly relevant today.</p>
              </div>
            </details>

            <div class="info-box" style="border-left-color: #f59e0b;">
              <h4>🎓 UGC NET Expert Tips</h4>
              <p>Match the book to the thinker: *Politics Among Nations* (Morgenthau), *Theory of International Politics* (Waltz), *The Tragedy of Great Power Politics* (Mearsheimer - Offensive Realism).</p>
            </div>
          </div>

          <!-- PAPER 3 (Public Administration) -->
          <h4 class="unit-title" style="color: #6366f1;"><i class="fas fa-sitemap"></i> Public Administration</h4>
          <div class="content-box">
            <h5 class="qa-section-title"><i class="fas fa-bolt" style="color: #f59e0b;"></i> Short Questions (2-5 Marks)</h5>

            <details class="qa-accordion">
              <summary><span class="qa-badge">Q1</span> What is the 'Hawthorne Effect'?</summary>
              <div class="qa-content">
                <p>Derived from <strong>Elton Mayo's</strong> experiments at Western Electric (1920s), it states that workers' productivity increases not just due to physical conditions, but because they feel observed, valued, and part of a cohesive social group. It birthed the Human Relations approach.</p>
              </div>
            </details>

            <details class="qa-accordion">
              <summary><span class="qa-badge">Q2</span> Define 'Bounded Rationality'.</summary>
              <div class="qa-content">
                <p><strong>Herbert Simon's</strong> concept that humans are not perfectly rational. In administration, decision-makers lack complete information, time, and cognitive capacity. Therefore, instead of making the "optimal" choice, they choose the first acceptable option—a process called <strong>"satisficing."</strong></p>
              </div>
            </details>

            <details class="qa-accordion">
              <summary><span class="qa-badge">Q3</span> What are the features of Weber's Ideal Bureaucracy?</summary>
              <div class="qa-content">
                <p>Max Weber identified it as a legal-rational organization characterized by: strict hierarchy, specialization of labor, rigid formal rules, impersonality (working without bias), and recruitment based on technical qualifications/merit.</p>
              </div>
            </details>

            <details class="qa-accordion">
              <summary><span class="qa-badge">Q4</span> What is the 'Prismatic-Sala' model?</summary>
              <div class="qa-content">
                <p>Created by <strong>F.W. Riggs</strong> to explain administration in developing (transitional) societies. It features 'Formalism' (gap between law and reality), 'Heterogeneity' (mix of modern and traditional systems), and 'Overlapping' (modern structures heavily influenced by traditional family/caste ties).</p>
              </div>
            </details>

            <details class="qa-accordion">
              <summary><span class="qa-badge">Q5</span> Define 'Zero-Based Budgeting' (ZBB).</summary>
              <div class="qa-content">
                <p>Developed by Peter Pyhrr in 1970, ZBB is a budgeting method where all expenses must be justified for each new period. Unlike traditional budgets that adjust the previous year's budget, ZBB starts from a "zero base," forcing departments to prove why they need money.</p>
              </div>
            </details>

            <h5 class="qa-section-title" style="margin-top: 20px;"><i class="fas fa-pen-nib" style="color: #3b82f6;"></i> Long Questions (15-20 Marks)</h5>

            <details class="qa-accordion">
              <summary><span class="qa-badge">Q1</span> Evaluate Herbert Simon's Decision-Making Approach in Public Administration. <span class="qa-marks">[20 Marks]</span></summary>
              <div class="qa-content">
                <h5>1. Introduction</h5>
                <p>Herbert Simon (Nobel Laureate) revolutionized Public Administration by shifting the focus from "principles of administration" (which he called proverbs) to the process of "decision-making."</p>
                <h5>2. Rejection of 'Economic Man'</h5>
                <p>Classical theorists believed in the 'Economic Man' who is perfectly rational and maximizes utility. Simon argued this is impossible in reality due to limits on human intelligence and available information.</p>
                <h5>3. Bounded Rationality & Satisficing</h5>
                <ul>
                  <li><strong>Bounded Rationality:</strong> The rationality of the 'Administrative Man' is bounded by cognitive, psychological, and environmental limits.</li>
                  <li><strong>Satisficing:</strong> A combination of 'satisfy' and 'suffice'. Administrators look for a solution that is "good enough" rather than spending infinite time finding the absolute "best" solution.</li>
                </ul>
                <h5>4. The Decision-Making Process</h5>
                <p>Simon identified three stages:</p>
                <ul>
                  <li><strong>Intelligence Activity:</strong> Searching the environment for conditions calling for a decision.</li>
                  <li><strong>Design Activity:</strong> Inventing, developing, and analyzing possible courses of action.</li>
                  <li><strong>Choice Activity:</strong> Selecting a specific alternative from those available.</li>
                </ul>
                <h5>5. Conclusion</h5>
                <p>Simon provided a highly realistic, behavioral, and scientific understanding of how administrative organizations actually function, making him a pioneer of modern administrative theory.</p>
              </div>
            </details>

            <details class="qa-accordion">
              <summary><span class="qa-badge">Q2</span> Critically analyze Max Weber’s theory of Bureaucracy. Discuss Robert Merton's critique of it. <span class="qa-marks">[20 Marks]</span></summary>
              <div class="qa-content">
                <h5>1. Introduction</h5>
                <p>Max Weber, a German sociologist, presented the "Ideal Type" of bureaucracy as the most efficient, rational, and superior form of organization based on 'legal-rational' authority.</p>
                <h5>2. Characteristics of Weberian Bureaucracy</h5>
                <ul>
                  <li><strong>Hierarchy:</strong> A clear chain of command (top-down).</li>
                  <li><strong>Specialization:</strong> Clear division of labor based on expertise.</li>
                  <li><strong>Formal Rules:</strong> Operations governed by written documents, ensuring consistency.</li>
                  <li><strong>Impersonality:</strong> Officials act without hatred or passion, treating everyone equally according to the law.</li>
                  <li><strong>Career System:</strong> Employment based on technical qualifications, offering tenure and pension.</li>
                </ul>
                <h5>3. Robert Merton's Critique (Dysfunctions of Bureaucracy)</h5>
                <p>Merton argued that Weber ignored the negative psychological effects of bureaucracy on the officials.</p>
                <ul>
                  <li><strong>Trained Incapacity:</strong> Officials become so rigidly trained to follow rules that they cannot adapt to changing or unique situations.</li>
                  <li><strong>Goal Displacement:</strong> Following the rules becomes an end in itself, rather than a means to achieve the organization's actual goals (classic "Red Tape").</li>
                  <li><strong>Impersonality becomes Arrogance:</strong> The lack of personal touch makes the administration appear aloof and insensitive to citizens.</li>
                </ul>
                <h5>4. Conclusion</h5>
                <p>While Weber provided the blueprint for modern administration, critics like Merton highlight the need for administrative flexibility and human relations to prevent bureaucratic pathologies.</p>
              </div>
            </details>

            <details class="qa-accordion">
              <summary><span class="qa-badge">Q3</span> Examine the concept, evolution, and core principles of New Public Administration (NPA). <span class="qa-marks">[15 Marks]</span></summary>
              <div class="qa-content">
                <h5>1. Introduction</h5>
                <p>Traditional public administration focused on efficiency, economy, and value-neutrality. In the late 1960s, a period of social turmoil in the US, scholars argued that administration must address social inequalities. This led to the New Public Administration (NPA).</p>
                <h5>2. Evolution (Minnowbrook Conference)</h5>
                <p>NPA emerged prominently from the First Minnowbrook Conference (1968), led by Dwight Waldo and George Frederickson, bringing young scholars together to redefine the discipline.</p>
                <h5>3. Core Themes of NPA</h5>
                <ul>
                  <li><strong>Relevance:</strong> Administration must deal with relevant, real-world problems (poverty, racism, inequality).</li>
                  <li><strong>Values:</strong> Rejection of "value-neutrality." Administrators should advocate for the disadvantaged.</li>
                  <li><strong>Social Equity:</strong> The primary goal should not just be efficiency, but ensuring that public services are distributed equitably to reduce social disparities.</li>
                  <li><strong>Change:</strong> Administration should act as an active agent of social change, challenging the status quo.</li>
                  <li><strong>Client-Focus:</strong> Serving the citizens (clients) effectively rather than blindly following bureaucratic rules.</li>
                </ul>
                <h5>4. Conclusion</h5>
                <p>NPA injected a strong moral and ethical dimension into the discipline. It transformed the image of the administrator from a neutral, robotic implementer into a proactive champion of social justice.</p>
              </div>
            </details>

            <div class="info-box" style="border-left-color: #f59e0b;">
              <h4>🎓 UGC NET Expert Tips</h4>
              <p>Keywords mapping: "Satisficing" = Simon. "Prismatic/Sala" = Riggs. "Scientific Management" = Taylor. "Social Equity/Minnowbrook" = NPA (Frederickson).</p>
            </div>
          </div>

          <!-- PAPER 4 (Western Political Thought / Indian Political System) -->
          <h4 class="unit-title" style="color: #6366f1;"><i class="fas fa-balance-scale"></i> Indian Political System & Western Thought</h4>
          <div class="content-box">
            <h5 class="qa-section-title"><i class="fas fa-bolt" style="color: #f59e0b;"></i> Short Questions (2-5 Marks)</h5>

            <details class="qa-accordion">
              <summary><span class="qa-badge">Q1</span> What is the 'Basic Structure Doctrine'?</summary>
              <div class="qa-content">
                <p>Established by the Supreme Court in the landmark <strong>Kesavananda Bharati case (1973)</strong>. It limits Parliament's amending power (Art 368), stating that Parliament cannot alter the fundamental features of the Constitution (like secularism, federalism, judicial review).</p>
              </div>
            </details>

            <details class="qa-accordion">
              <summary><span class="qa-badge">Q2</span> Define 'Judicial Activism'.</summary>
              <div class="qa-content">
                <p>The proactive role played by the judiciary in protecting the rights of citizens and promoting justice in society, often stepping into the domains of the executive or legislature. Public Interest Litigation (PIL) is its primary tool.</p>
              </div>
            </details>

            <details class="qa-accordion">
              <summary><span class="qa-badge">Q3</span> What is Aristotle's classification of the State?</summary>
              <div class="qa-content">
                <p>He classified states based on two criteria: the number of rulers, and their intent (pure vs. corrupt).<br>Rule of 1: Monarchy (Pure) / Tyranny (Corrupt)<br>Rule of Few: Aristocracy / Oligarchy<br>Rule of Many: Polity / Democracy.</p>
              </div>
            </details>

            <details class="qa-accordion">
              <summary><span class="qa-badge">Q4</span> What is J.S. Mill's 'Harm Principle'?</summary>
              <div class="qa-content">
                <p>The principle that power can only be rightfully exercised over any member of a civilized community against his will to prevent harm to others. The individual is sovereign over his own body and mind.</p>
              </div>
            </details>

            <details class="qa-accordion">
              <summary><span class="qa-badge">Q5</span> What is Marx's 'Historical Materialism'?</summary>
              <div class="qa-content">
                <p>The theory that the economic base (forces and relations of production) determines the ideological superstructure (laws, politics, religion). History evolves through class struggles driven by material conditions, leading eventually to Communism.</p>
              </div>
            </details>

            <h5 class="qa-section-title" style="margin-top: 20px;"><i class="fas fa-pen-nib" style="color: #3b82f6;"></i> Long Questions (15-20 Marks)</h5>

            <details class="qa-accordion">
              <summary><span class="qa-badge">Q1</span> "The Indian Constitution is federal in form but unitary in spirit." Discuss. <span class="qa-marks">[20 Marks]</span></summary>
              <div class="qa-content">
                <h5>1. Introduction</h5>
                <p>K.C. Wheare described India as a "quasi-federal" state. While the Indian Constitution establishes a federal structure, it contains strong centralizing tendencies, making it unitary in spirit.</p>
                <h5>2. Federal Features (Form)</h5>
                <ul>
                  <li><strong>Dual Polity:</strong> Existence of Union and State governments.</li>
                  <li><strong>Written & Supreme Constitution:</strong> The supreme law of the land outlining powers.</li>
                  <li><strong>Division of Powers:</strong> Clearly demarcated in the 7th Schedule (Union, State, Concurrent lists).</li>
                  <li><strong>Independent Judiciary:</strong> Supreme Court acts as the arbiter in Centre-State disputes.</li>
                </ul>
                <h5>3. Unitary Features (Spirit)</h5>
                <ul>
                  <li><strong>Strong Centre:</strong> Residuary powers rest with the Centre. The Union List has more and weightier subjects.</li>
                  <li><strong>Emergency Provisions:</strong> During emergencies (Art 352, 356), the federal structure converts entirely into a unitary one without formal amendment.</li>
                  <li><strong>Single Citizenship & Constitution:</strong> Unlike the US, states do not have their own constitutions or citizenship.</li>
                  <li><strong>Appointment of Governors:</strong> The Centre appoints Governors who can reserve state bills for the President's consideration.</li>
                  <li><strong>All-India Services:</strong> IAS, IPS officers are recruited by the Centre but serve in states, allowing central control.</li>
                </ul>
                <h5>4. Conclusion</h5>
                <p>As Dr. B.R. Ambedkar noted, the Indian Constitution is tailored to meet the country's unique needs—it functions federally in normal times and unitarily during crises to protect the nation's integrity.</p>
              </div>
            </details>

            <details class="qa-accordion">
              <summary><span class="qa-badge">Q2</span> Analyze Machiavelli's advice to a ruler as outlined in 'The Prince'. Why is he considered the first modern political thinker? <span class="qa-marks">[20 Marks]</span></summary>
              <div class="qa-content">
                <h5>1. Introduction</h5>
                <p>Niccolò Machiavelli wrote <em>'The Prince' (1513)</em> as a practical guide for a ruler to acquire, maintain, and expand power. It marks a radical departure from medieval idealism.</p>
                <h5>2. Key Advice to the Ruler</h5>
                <ul>
                  <li><strong>Separation of Politics and Morality:</strong> A Prince must not be bound by traditional Christian ethics. "The end justifies the means." If the state is preserved, the means will always be judged honorable.</li>
                  <li><strong>Lion and the Fox:</strong> A ruler must possess the strength of a lion (to frighten wolves) and the cunning of a fox (to recognize traps).</li>
                  <li><strong>Better to be Feared than Loved:</strong> Love is fickle and based on obligation, which men break when it suits them. Fear is maintained by the dread of punishment, which never fails. However, the Prince must avoid being hated (by not confiscating property).</li>
                  <li><strong>Religion as a Tool:</strong> The Prince should appear religious, as religion is a powerful tool to unite the state and control the masses.</li>
                </ul>
                <h5>3. Why the First Modern Thinker?</h5>
                <ul>
                  <li>He rejected medieval theology and the divine right theory.</li>
                  <li>He introduced <strong>Political Realism</strong>, studying politics 'as it is' rather than 'as it ought to be'.</li>
                  <li>He conceptualized the modern secular nation-state and the concept of 'Reason of State' (Raison d'État), prioritizing national security above all else.</li>
                </ul>
                <h5>4. Conclusion</h5>
                <p>Machiavelli's blunt realism shocked his contemporaries, but his pragmatic insights laid the foundation for modern political science and international relations.</p>
              </div>
            </details>

            <details class="qa-accordion">
              <summary><span class="qa-badge">Q3</span> Discuss Karl Marx's theory of Class Struggle and Surplus Value. <span class="qa-marks">[20 Marks]</span></summary>
              <div class="qa-content">
                <h5>1. Introduction</h5>
                <p>Karl Marx’s critique of capitalism is anchored in his understanding of economic exploitation. The theories of Class Struggle and Surplus Value are central to this critique.</p>
                <h5>2. Theory of Class Struggle</h5>
                <ul>
                  <li><em>"The history of all hitherto existing society is the history of class struggles."</em> (Communist Manifesto).</li>
                  <li>Society has always been divided into two antagonistic classes based on their relation to the means of production: the oppressor (owners) and the oppressed (workers).</li>
                  <li>In Capitalism, these classes are the <strong>Bourgeoisie</strong> (capitalists who own the factories) and the <strong>Proletariat</strong> (workers who sell their labor). Their interests are irreconcilably opposed, leading inevitably to revolution.</li>
                </ul>
                <h5>3. Theory of Surplus Value</h5>
                <ul>
                  <li>Rooted in the Labor Theory of Value, which states that the value of a commodity is determined by the socially necessary labor time required to produce it.</li>
                  <li>The worker produces value, but the capitalist pays a wage that is only enough for the worker's survival (subsistence wage).</li>
                  <li>The difference between the value the worker produces and the wage he receives is the <strong>Surplus Value</strong>.</li>
                  <li>This surplus value is pocketed by the capitalist as profit. For Marx, profit is nothing but unpaid labor—it is theft and the mathematical proof of exploitation.</li>
                </ul>
                <h5>4. Conclusion</h5>
                <p>Marx argued that the constant drive for more surplus value leads capitalists to exploit workers further (longer hours, lower wages), which eventually immiserates the working class to the point where they unite, overthrow the bourgeoisie, and establish a socialist state.</p>
              </div>
            </details>

            <div class="info-box" style="border-left-color: #f59e0b;">
              <h4>🎓 UGC NET Expert Tips</h4>
              <p>For Indian Polity, remember Art 32 (5 Writs), Art 143 (Advisory Jurisdiction), Art 356 (President's Rule). For Western Thought, remember Machiavelli separated Politics from Ethics/Religion.</p>
            </div>
          </div>"""

with open('index.html', 'r', encoding='utf-8') as f:
    text = f.read()

start_marker = "<!-- PAPER 1 (Academic Writing) -->"
end_marker = "<!-- SEMESTER 3 -->"

start_idx = text.find(start_marker)
end_idx = text.find(end_marker)

if start_idx != -1 and end_idx != -1:
    new_text = text[:start_idx] + html_content + "\n        </div>\n      </div>\n\n      " + text[end_idx:]
    with open('index.html', 'w', encoding='utf-8') as f:
        f.write(new_text)
    print("Replacement successful.")
else:
    print("Markers not found.", start_idx, end_idx)
