import sys

html_content = """          <!-- PAPER 1 (Human Rights) -->
          <h4 class="unit-title" style="color: #6366f1;"><i class="fas fa-hands-helping"></i> Human Rights</h4>
          <div class="content-box">
            <h5 class="qa-section-title"><i class="fas fa-bolt" style="color: #f59e0b;"></i> Short Questions (2-5 Marks)</h5>

            <details class="qa-accordion">
              <summary><span class="qa-badge">Q1</span> What are the three generations of human rights?</summary>
              <div class="qa-content">
                <p>Proposed by Karel Vasak, they are: <strong>First Gen:</strong> Civil and Political rights (Liberty); <strong>Second Gen:</strong> Economic, Social, and Cultural rights (Equality); and <strong>Third Gen:</strong> Collective or Solidarity rights like the right to a clean environment (Fraternity).</p>
              </div>
            </details>

            <details class="qa-accordion">
              <summary><span class="qa-badge">Q2</span> What is the UDHR?</summary>
              <div class="qa-content">
                <p>The <strong>Universal Declaration of Human Rights (UDHR)</strong> is a milestone document adopted by the UN General Assembly on December 10, 1948. It consists of 30 articles affirming individual rights, which, although not legally binding, forms the foundation of international human rights law.</p>
              </div>
            </details>

            <details class="qa-accordion">
              <summary><span class="qa-badge">Q3</span> Difference between ICCPR and ICESCR?</summary>
              <div class="qa-content">
                <p><strong>ICCPR</strong> (Civil/Political) deals with negative rights where the state must refrain from interfering (e.g., freedom of speech). <strong>ICESCR</strong> (Economic/Social/Cultural) deals with positive rights where the state must take active steps to provide (e.g., right to education, health).</p>
              </div>
            </details>

            <details class="qa-accordion">
              <summary><span class="qa-badge">Q4</span> What is the NHRC?</summary>
              <div class="qa-content">
                <p>The <strong>National Human Rights Commission (NHRC)</strong> of India is a statutory body established on 12 October 1993. It acts as the watchdog of human rights in the country, investigating violations and recommending corrective actions to the government.</p>
              </div>
            </details>

            <details class="qa-accordion">
              <summary><span class="qa-badge">Q5</span> Define 'inalienable rights'.</summary>
              <div class="qa-content">
                <p>Inalienable rights are inherent to all human beings by virtue of them being human. They cannot be granted by a state, nor can they be taken away, surrendered, or transferred (e.g., right to life, freedom from torture).</p>
              </div>
            </details>

            <h5 class="qa-section-title" style="margin-top: 20px;"><i class="fas fa-pen-nib" style="color: #3b82f6;"></i> Long Questions (15-20 Marks)</h5>

            <details class="qa-accordion">
              <summary><span class="qa-badge">Q1</span> Discuss the historical evolution of Human Rights with reference to the three generations proposed by Karel Vasak. <span class="qa-marks">[20 Marks]</span></summary>
              <div class="qa-content">
                <h5>1. Introduction</h5>
                <p>The concept of human rights has evolved over centuries from the Magna Carta (1215) to the UN Charter. Czech jurist Karel Vasak (1979) classified this evolution into three generations, corresponding to the French Revolution's motto: <em>Liberté, Égalité, Fraternité</em>.</p>
                <h5>2. First Generation (Liberty)</h5>
                <ul>
                  <li><strong>Nature:</strong> Civil and political rights. They are "negative rights" as they require the state to <em>not</em> interfere in individual lives.</li>
                  <li><strong>Examples:</strong> Freedom of speech, religion, right to life, right to a fair trial.</li>
                  <li><strong>Focus:</strong> Protecting the individual from state tyranny (Lockean liberalism).</li>
                </ul>
                <h5>3. Second Generation (Equality)</h5>
                <ul>
                  <li><strong>Nature:</strong> Economic, social, and cultural rights. They are "positive rights" requiring state intervention and resources.</li>
                  <li><strong>Examples:</strong> Right to education, healthcare, housing, and a minimum wage.</li>
                  <li><strong>Focus:</strong> Ensuring a dignified standard of living (Socialist/Welfare State ideals).</li>
                </ul>
                <h5>4. Third Generation (Fraternity/Solidarity)</h5>
                <ul>
                  <li><strong>Nature:</strong> Collective rights belonging to groups or peoples rather than individuals.</li>
                  <li><strong>Examples:</strong> Right to a clean environment, right to self-determination, right to economic development.</li>
                  <li><strong>Focus:</strong> Global cooperation and addressing modern challenges like climate change.</li>
                </ul>
                <h5>5. Conclusion</h5>
                <p>These generations are not mutually exclusive but interdependent. A person cannot exercise their first-generation political rights if they are starving (a denial of second-generation rights).</p>
              </div>
            </details>

            <details class="qa-accordion">
              <summary><span class="qa-badge">Q2</span> Critically examine the Universal Declaration of Human Rights (UDHR) 1948 and its impact on global politics. <span class="qa-marks">[20 Marks]</span></summary>
              <div class="qa-content">
                <h5>1. Introduction</h5>
                <p>Adopted on December 10, 1948, the UDHR was a direct response to the atrocities of WWII and the Holocaust. Drafted by a committee chaired by Eleanor Roosevelt, it represents the first global expression of inherent human rights.</p>
                <h5>2. Key Features</h5>
                <ul>
                  <li><strong>Universality:</strong> Applies to all individuals regardless of race, religion, or nationality.</li>
                  <li><strong>Comprehensiveness:</strong> Its 30 articles cover both civil/political rights (Articles 3-21) and economic/social rights (Articles 22-27).</li>
                  <li><strong>Non-Binding:</strong> It is a declaration, not a treaty, meaning it lacks formal legal binding force.</li>
                </ul>
                <h5>3. Impact on Global Politics</h5>
                <ul>
                  <li><strong>Foundation of International Law:</strong> It birthed the International Bill of Human Rights (UDHR + ICCPR + ICESCR).</li>
                  <li><strong>Inspiration for Constitutions:</strong> Greatly influenced post-colonial constitutions, including India’s Fundamental Rights (Part III) and DPSP (Part IV).</li>
                  <li><strong>Standard of Accountability:</strong> It provides a moral yardstick against which the actions of states are judged globally (e.g., Amnesty International reports).</li>
                </ul>
                <h5>4. Criticisms</h5>
                <ul>
                  <li><strong>Western Bias:</strong> Critics argue it promotes Western individualism, ignoring communitarian values of the Global South.</li>
                  <li><strong>Lack of Enforcement mechanism:</strong> Without an international police force, states often violate UDHR with impunity (e.g., dictatorial regimes).</li>
                </ul>
                <h5>5. Conclusion</h5>
                <p>Despite being non-binding and facing implementation challenges, the UDHR remains the Magna Carta of all humanity, shifting international law's focus from states to individuals.</p>
              </div>
            </details>

            <div class="info-box" style="border-left-color: #f59e0b;">
              <h4>🎓 UGC NET Expert Tips</h4>
              <p>Dates matter: Human Rights Day is Dec 10. NHRC established in 1993. Know that 1st generation rights correlate to "Liberty", 2nd to "Equality", and 3rd to "Fraternity".</p>
            </div>
          </div>

          <!-- PAPER 2 (Jharkhand Politics) -->
          <h4 class="unit-title" style="color: #6366f1;"><i class="fas fa-tree"></i> Jharkhand Politics</h4>
          <div class="content-box">
            <h5 class="qa-section-title"><i class="fas fa-bolt" style="color: #f59e0b;"></i> Short Questions (2-5 Marks)</h5>

            <details class="qa-accordion">
              <summary><span class="qa-badge">Q1</span> What was the Birsa Munda 'Ulgulan'?</summary>
              <div class="qa-content">
                <p>The "Ulgulan" or Great Tumult (1899-1900) was a tribal uprising led by Birsa Munda against the British colonial authorities and the 'dikus' (outsider landlords/moneylenders) who were seizing tribal lands and destroying their traditional agrarian system (Khuntkatti).</p>
              </div>
            </details>

            <details class="qa-accordion">
              <summary><span class="qa-badge">Q2</span> What is the CNT Act 1908?</summary>
              <div class="qa-content">
                <p>The <strong>Chota Nagpur Tenancy (CNT) Act</strong> was enacted post-Birsa Munda rebellion. It strictly prohibits the transfer of tribal land to non-tribals, acting as a crucial protective shield for the tribal identity and agrarian livelihood in Jharkhand.</p>
              </div>
            </details>

            <details class="qa-accordion">
              <summary><span class="qa-badge">Q3</span> Define the 'Resource Curse' in Jharkhand.</summary>
              <div class="qa-content">
                <p>The paradox where a region with immense natural resources (coal, iron, uranium in Jharkhand) experiences stagnant economic growth, extreme poverty, and poor social indicators, largely due to exploitation, displacement, and corruption.</p>
              </div>
            </details>

            <details class="qa-accordion">
              <summary><span class="qa-badge">Q4</span> What is the PESA Act 1996?</summary>
              <div class="qa-content">
                <p>The <strong>Panchayats (Extension to Scheduled Areas) Act</strong> empowers tribal communities through self-governance. It grants the Gram Sabha sweeping powers over local resources, minor forest produce, and land acquisition, respecting their customary laws.</p>
              </div>
            </details>

            <details class="qa-accordion">
              <summary><span class="qa-badge">Q5</span> Name the first Chief Minister of Jharkhand.</summary>
              <div class="qa-content">
                <p><strong>Babulal Marandi</strong> (from the BJP). He took the oath of office on November 15, 2000, the day Jharkhand was carved out of Bihar.</p>
              </div>
            </details>

            <h5 class="qa-section-title" style="margin-top: 20px;"><i class="fas fa-pen-nib" style="color: #3b82f6;"></i> Long Questions (15-20 Marks)</h5>

            <details class="qa-accordion">
              <summary><span class="qa-badge">Q1</span> Trace the historical background and the socio-political movement for the creation of a separate Jharkhand state. <span class="qa-marks">[20 Marks]</span></summary>
              <div class="qa-content">
                <h5>1. Introduction</h5>
                <p>Jharkhand (the land of forests) was formed on Nov 15, 2000. The struggle for a separate state was one of the longest in India, rooted in ethnic identity and economic exploitation.</p>
                <h5>2. Early Phase (Pre-Independence)</h5>
                <ul>
                  <li><strong>Tribal Rebellions:</strong> Santhal Hul (1855), Birsa Munda Ulgulan (1899) were early assertions against 'diku' (outsider) exploitation.</li>
                  <li><strong>Chota Nagpur Unnati Samaj (1915):</strong> First socio-political organization demanding tribal upliftment.</li>
                  <li><strong>Adivasi Mahasabha (1938):</strong> Led by Jaipal Singh Munda, it formally demanded a separate state for tribals before the Simon Commission.</li>
                </ul>
                <h5>3. Post-Independence Phase</h5>
                <ul>
                  <li><strong>Jharkhand Party (1950):</strong> Jaipal Singh Munda led the political demand. However, the States Reorganisation Commission (1956) rejected the demand citing lack of a common language.</li>
                  <li><strong>Formation of JMM (1973):</strong> The movement shifted from a purely tribal issue to a regional socio-economic issue. Shibu Soren (JMM) aligned with A.K. Roy (Marxist) and Binod Bihari Mahato, bringing tribals and local non-tribals (Sadan) together against economic exploitation.</li>
                </ul>
                <h5>4. Final Phase</h5>
                <ul>
                  <li>The prolonged struggle, bandhs, and negotiations led to the formation of the Jharkhand Area Autonomous Council (JAAC) in 1995.</li>
                  <li>Finally, the Bihar Reorganisation Bill was passed, and Jharkhand became the 28th state of India in 2000.</li>
                </ul>
                <h5>5. Conclusion</h5>
                <p>The Jharkhand movement was unique as it transitioned from an ethnic tribal identity movement into a broader regional movement against internal colonialism and economic marginalization.</p>
              </div>
            </details>

            <details class="qa-accordion">
              <summary><span class="qa-badge">Q2</span> Analyze the socio-economic impact of industrialization and the consequent rise of Left-Wing Extremism (Naxalism) in Jharkhand. <span class="qa-marks">[20 Marks]</span></summary>
              <div class="qa-content">
                <h5>1. Introduction</h5>
                <p>Jharkhand accounts for 40% of India's mineral wealth. However, the model of industrialization (mines, dams, factories) pursued post-independence has had severe adverse impacts on the indigenous population.</p>
                <h5>2. Socio-Economic Impact of Industrialization</h5>
                <ul>
                  <li><strong>Massive Displacement:</strong> Projects like the DVC, HEC Ranchi, and coal mines displaced lakhs of tribals without adequate rehabilitation or compensation.</li>
                  <li><strong>Loss of Livelihood:</strong> Tribals lost their land and forests (Jal, Jungle, Zameen), turning independent farmers into daily wage laborers or destitutes.</li>
                  <li><strong>Demographic Shift:</strong> Massive influx of outsiders (dikus) for industrial jobs reduced tribals to a minority in many districts, diluting their political power and culture.</li>
                  <li><strong>Environmental Degradation:</strong> Unregulated mining caused severe water and soil pollution, destroying the agricultural ecosystem.</li>
                </ul>
                <h5>3. Rise of Left-Wing Extremism (Naxalism)</h5>
                <ul>
                  <li><strong>Root Cause:</strong> Naxalism in Jharkhand is not merely a law-and-order problem; it is a socio-economic issue rooted in land alienation, exploitation, and the state's failure to provide justice.</li>
                  <li><strong>The Vacuum:</strong> The Maoists filled the governance vacuum in remote areas, holding "Kangaroo courts" to provide speedy justice and fighting against exploitative contractors and forest officials.</li>
                  <li><strong>Recruitment:</strong> The alienated and displaced youth, seeing no future and angry at the state's apathy, easily fell prey to extremist ideologies.</li>
                </ul>
                <h5>4. Conclusion</h5>
                <p>To solve extremism, the state must implement the PESA Act in letter and spirit, ensure equitable distribution of mining royalties (e.g., DMF funds), and focus on human development rather than just corporate-led growth.</p>
              </div>
            </details>

            <div class="info-box" style="border-left-color: #f59e0b;">
              <h4>🎓 UGC NET Expert Tips</h4>
              <p>For State Politics, know the timeline: Adivasi Mahasabha (1938) -> Jharkhand Party under Jaipal Singh Munda (1950) -> JMM (1973). Jharkhand was formed via Bihar Reorganisation Act 2000.</p>
            </div>
          </div>

          <!-- PAPER 3 (Political Sociology) -->
          <h4 class="unit-title" style="color: #6366f1;"><i class="fas fa-users"></i> Political Sociology</h4>
          <div class="content-box">
            <h5 class="qa-section-title"><i class="fas fa-bolt" style="color: #f59e0b;"></i> Short Questions (2-5 Marks)</h5>

            <details class="qa-accordion">
              <summary><span class="qa-badge">Q1</span> Define Political Socialization.</summary>
              <div class="qa-content">
                <p>It is the lifelong process through which individuals learn, accept, and internalize the political culture, values, and norms of their society. Agencies include family, school, peer groups, and mass media.</p>
              </div>
            </details>

            <details class="qa-accordion">
              <summary><span class="qa-badge">Q2</span> What are the types of Political Culture?</summary>
              <div class="qa-content">
                <p>Gabriel Almond and Sidney Verba identified three types: <strong>Parochial</strong> (citizens have no awareness of the political system), <strong>Subject</strong> (aware of the system but passive/obedient), and <strong>Participant</strong> (aware and actively involved in the political process).</p>
              </div>
            </details>

            <details class="qa-accordion">
              <summary><span class="qa-badge">Q3</span> What is the 'Iron Law of Oligarchy'?</summary>
              <div class="qa-content">
                <p>A theory developed by <strong>Robert Michels</strong> stating that all complex organizations, regardless of how democratic they start out, eventually evolve into oligarchies (rule by a few elites) due to the necessity of bureaucratic specialization and leadership.</p>
              </div>
            </details>

            <details class="qa-accordion">
              <summary><span class="qa-badge">Q4</span> Define 'Circulation of Elites'.</summary>
              <div class="qa-content">
                <p>Coined by <strong>Vilfredo Pareto</strong>, it describes how power shifts back and forth between two types of elites: 'Lions' (who rule by force/stability) and 'Foxes' (who rule by cunning/innovation). As one group decays, the other replaces it.</p>
              </div>
            </details>

            <details class="qa-accordion">
              <summary><span class="qa-badge">Q5</span> What is the role of family in political socialization?</summary>
              <div class="qa-content">
                <p>The family is the most fundamental and primary agency. It shapes a child's earliest attitudes towards authority, obedience, and social issues, largely determining their future political party affiliations and ideological leanings.</p>
              </div>
            </details>

            <h5 class="qa-section-title" style="margin-top: 20px;"><i class="fas fa-pen-nib" style="color: #3b82f6;"></i> Long Questions (15-20 Marks)</h5>

            <details class="qa-accordion">
              <summary><span class="qa-badge">Q1</span> Define Political Culture and critically examine its classification by Gabriel Almond and Sidney Verba. <span class="qa-marks">[20 Marks]</span></summary>
              <div class="qa-content">
                <h5>1. Introduction</h5>
                <p>Political Culture refers to the set of attitudes, beliefs, and sentiments that give order and meaning to a political process. Almond and Verba, in their seminal book <em>'The Civic Culture' (1963)</em>, studied five nations to classify political culture.</p>
                <h5>2. Classification of Political Culture</h5>
                <ul>
                  <li><strong>Parochial Political Culture:</strong> Citizens have no awareness of the national political system. Their loyalty is to the local tribe, village, or religious leader (e.g., traditional societies).</li>
                  <li><strong>Subject Political Culture:</strong> Citizens are aware of the political system and its outputs (laws, taxes), but they view themselves as subjects who must obey, not as active participants who can change the system (e.g., authoritarian regimes).</li>
                  <li><strong>Participant Political Culture:</strong> Citizens are highly aware of the system, both inputs (demands) and outputs, and actively participate in politics through voting, protesting, and interest groups (e.g., modern democracies).</li>
                </ul>
                <h5>3. The 'Civic Culture'</h5>
                <p>Almond and Verba argued that the ideal culture for a stable democracy is the <strong>Civic Culture</strong>—a balanced mix of Subject and Participant cultures. Too much participation causes system overload and instability; some subject passivity is needed for government to function smoothly.</p>
                <h5>4. Conclusion</h5>
                <p>While criticized for Western bias (ethnocentrism), their classification remains a foundational concept for understanding why democracy succeeds in some nations and fails in others.</p>
              </div>
            </details>

            <details class="qa-accordion">
              <summary><span class="qa-badge">Q2</span> Critically examine the Elite Theory of Democracy with special reference to the contributions of Pareto, Mosca, and Michels. <span class="qa-marks">[20 Marks]</span></summary>
              <div class="qa-content">
                <h5>1. Introduction</h5>
                <p>The Elite Theory posits that in any society, true democracy (rule by the people) is an illusion. Power is always concentrated in the hands of a small, organized minority (the elite) over an unorganized majority (the masses).</p>
                <h5>2. Vilfredo Pareto (Circulation of Elites)</h5>
                <p>In <em>'The Mind and Society'</em>, Pareto argued that people are unequal physically and intellectually. The elite are those with the highest abilities. He categorized them into 'Lions' (using force, e.g., military dictators) and 'Foxes' (using cunning, e.g., politicians). History is a "graveyard of aristocracies" as these two types constantly replace each other (Circulation of Elites).</p>
                <h5>3. Gaetano Mosca (The Ruling Class)</h5>
                <p>In <em>'The Ruling Class'</em>, Mosca argued that in all societies, two classes appear: a class that rules and a class that is ruled. The ruling class is always a minority, but it dominates because it is highly organized, whereas the majority is unorganized. They justify their rule through a "political formula" (myth/ideology).</p>
                <h5>4. Robert Michels (Iron Law of Oligarchy)</h5>
                <p>In <em>'Political Parties'</em>, Michels studied socialist parties and found that even organizations committed to democracy inevitably turn into oligarchies. Why? Because complex organizations require expert leadership and bureaucracy. Over time, these leaders consolidate power, and the masses become apathetic.</p>
                <h5>5. Conclusion</h5>
                <p>The Elite theory fundamentally challenges both Marxist class theory (by stating elite rule is inevitable, even in communism) and Classical Democracy (by stating the masses never truly rule). It provides a cynical but highly realistic view of power dynamics.</p>
              </div>
            </details>

            <div class="info-box" style="border-left-color: #f59e0b;">
              <h4>🎓 UGC NET Expert Tips</h4>
              <p>Key mapping: *The Civic Culture* (Almond & Verba). *The Ruling Class* (Mosca). *The Mind and Society* (Pareto). Elite theory fundamentally rejects Marxist class struggle.</p>
            </div>
          </div>

          <!-- PAPER 4 (Contemporary Political Issues) -->
          <h4 class="unit-title" style="color: #6366f1;"><i class="fas fa-newspaper"></i> Contemporary Political Issues</h4>
          <div class="content-box">
            <h5 class="qa-section-title"><i class="fas fa-bolt" style="color: #f59e0b;"></i> Short Questions (2-5 Marks)</h5>

            <details class="qa-accordion">
              <summary><span class="qa-badge">Q1</span> What is the 'North-South Divide'?</summary>
              <div class="qa-content">
                <p>A socio-economic and political division representing the stark disparities in wealth, technology, and power between the wealthy, industrialized developed nations (the Global North) and the poorer, developing nations (the Global South).</p>
              </div>
            </details>

            <details class="qa-accordion">
              <summary><span class="qa-badge">Q2</span> Define Sustainable Development.</summary>
              <div class="qa-content">
                <p>As defined by the <strong>Brundtland Report (1987)</strong>, it is "development that meets the needs of the present without compromising the ability of future generations to meet their own needs." It balances economic growth, environmental protection, and social equity.</p>
              </div>
            </details>

            <details class="qa-accordion">
              <summary><span class="qa-badge">Q3</span> What does CBDR stand for?</summary>
              <div class="qa-content">
                <p><strong>Common But Differentiated Responsibilities</strong>. A principle in international environmental law acknowledging that while all nations have a shared obligation to protect the environment, developed nations bear greater responsibility due to their historical carbon emissions and greater financial capacity.</p>
              </div>
            </details>

            <details class="qa-accordion">
              <summary><span class="qa-badge">Q4</span> What is NIEO?</summary>
              <div class="qa-content">
                <p>The <strong>New International Economic Order (1974)</strong> was a set of proposals championed by the Non-Aligned Movement (NAM) demanding the restructuring of the global economic system to end unequal terms of trade and neo-colonialism against developing countries.</p>
              </div>
            </details>

            <details class="qa-accordion">
              <summary><span class="qa-badge">Q5</span> Define Globalization.</summary>
              <div class="qa-content">
                <p>The rapid integration and interconnectedness of global economies, cultures, and populations through cross-border trade in goods and services, technology, and flows of investment, people, and information.</p>
              </div>
            </details>

            <h5 class="qa-section-title" style="margin-top: 20px;"><i class="fas fa-pen-nib" style="color: #3b82f6;"></i> Long Questions (15-20 Marks)</h5>

            <details class="qa-accordion">
              <summary><span class="qa-badge">Q1</span> Analyze the demand for a New International Economic Order (NIEO) by developing countries. How relevant is it today? <span class="qa-marks">[20 Marks]</span></summary>
              <div class="qa-content">
                <h5>1. Introduction</h5>
                <p>In the 1970s, newly independent nations realized that political independence was meaningless without economic independence. They found the Bretton Woods institutions (IMF, World Bank) heavily biased toward the Global North. Thus, in 1974, the UN General Assembly adopted a declaration for a NIEO.</p>
                <h5>2. Core Demands of NIEO</h5>
                <ul>
                  <li><strong>Sovereignty over Natural Resources:</strong> The right of developing countries to nationalize foreign properties and control their own resources.</li>
                  <li><strong>Fair Trade Terms:</strong> Stopping the unequal exchange where developing nations exported cheap raw materials and imported expensive manufactured goods.</li>
                  <li><strong>Technology Transfer:</strong> Demanding unrestricted and cheaper access to Western technology.</li>
                  <li><strong>Reforming Global Institutions:</strong> More voting power for the Global South in the IMF and World Bank.</li>
                </ul>
                <h5>3. Decline of NIEO</h5>
                <p>The movement faded in the 1980s due to the debt crisis in developing nations, the rise of neoliberalism (Reagan/Thatcher), and the reluctance of developed nations to make concessions.</p>
                <h5>4. Relevance Today</h5>
                <p>The spirit of NIEO is highly relevant today. Forums like BRICS, the push for a multipolar currency, and demands for reform in the WTO (vaccine patents, agricultural subsidies) reflect the continuing struggle of the Global South for a fairer economic order.</p>
              </div>
            </details>

            <details class="qa-accordion">
              <summary><span class="qa-badge">Q2</span> Discuss the concept of Sustainable Development. Critically evaluate the global efforts (like the Rio Summit and CBDR principle) to address climate change. <span class="qa-marks">[20 Marks]</span></summary>
              <div class="qa-content">
                <h5>1. Introduction</h5>
                <p>The reckless industrialization of the 20th century led to severe ecological crises. The concept of Sustainable Development emerged to reconcile economic growth with environmental preservation.</p>
                <h5>2. The Rio Earth Summit (1992)</h5>
                <p>The UN Conference on Environment and Development (UNCED) in Rio de Janeiro was a landmark event. It resulted in:</p>
                <ul>
                  <li><strong>Agenda 21:</strong> A comprehensive blueprint for global action on sustainable development.</li>
                  <li><strong>UNFCCC:</strong> The treaty established to stabilize greenhouse gas concentrations.</li>
                </ul>
                <h5>3. The CBDR Principle</h5>
                <p>At Rio, developing countries successfully pushed for the <strong>Common But Differentiated Responsibilities</strong> principle. It acknowledged that:</p>
                <ul>
                  <li>The Global North caused the vast majority of historical emissions during their industrialization.</li>
                  <li>Therefore, the North must take the lead in cutting emissions and provide climate finance and technology to the Global South.</li>
                  <li>The Global South has a right to prioritize poverty eradication and economic development.</li>
                </ul>
                <h5>4. Critical Evaluation of Global Efforts</h5>
                <ul>
                  <li><strong>Kyoto Protocol (1997):</strong> Imposed binding targets only on developed nations, but failed as the US withdrew and others missed targets.</li>
                  <li><strong>Paris Agreement (2015):</strong> A shift from top-down targets to bottom-up "Nationally Determined Contributions" (NDCs). It brought all nations on board, but critics argue the pledges are insufficient to limit warming to 1.5°C. Furthermore, climate finance promises ($100B/year) from the North remain unfulfilled.</li>
                </ul>
                <h5>5. Conclusion</h5>
                <p>While global awareness has peaked, actual implementation is hindered by national interests and the reluctance of developed nations to bear the financial burden of the crisis they primarily created.</p>
              </div>
            </details>

            <div class="info-box" style="border-left-color: #f59e0b;">
              <h4>🎓 UGC NET Expert Tips</h4>
              <p>Remember the Brandt Line (North-South divide). Brundtland Commission's report was titled "Our Common Future" (1987). NIEO was heavily championed by the Non-Aligned Movement (NAM).</p>
            </div>
          </div>"""

with open('index.html', 'r', encoding='utf-8') as f:
    text = f.read()

start_marker = "<!-- PAPER 1 (Human Rights) -->"
end_marker = "<!-- SEMESTER 4 -->"

start_idx = text.find(start_marker)
end_idx = text.find(end_marker)

if start_idx != -1 and end_idx != -1:
    new_text = text[:start_idx] + html_content + "\n        </div>\n      </div>\n\n      " + text[end_idx:]
    with open('index.html', 'w', encoding='utf-8') as f:
        f.write(new_text)
    print("Replacement successful.")
else:
    print("Markers not found.", start_idx, end_idx)
