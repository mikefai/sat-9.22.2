/**
 * 2026 DIGITAL SAT READING & WRITING - RIGOROUS 28-ITEM MASTER ITEM BANK
 * Calibrated for Module 2 Hard Difficulty
 * Balanced Answer Distribution: Exactly 7 A's, 7 B's, 7 C's, 7 D's
 */

const satQuestions = [
  // ==========================================
  // QUESTION 1 (Key: C) - Central Ideas & Details
  // ==========================================
  {
    id: 1,
    skill: "Central Ideas and Details",
    topic: "International Macroeconomics: Global Supply Chains & Nearshoring",
    wordCount: 114,
    passageHtml: `
      <div class="passage-title-tag">
        <span>Macroeconomics & Trade Dynamics</span>
        <span>Word Count: 114 words</span>
      </div>
      <div class="passage-text">
        <p>While foreign direct investment (FDI) has historically gravitated toward nations with the lowest nominal labor costs, recent shifts in global supply chain strategies have altered multinational corporate calculus. Heightened geopolitical friction and cross-border logistics disruptions have prompted many advanced-economy manufacturers to prioritize "nearshoring" and "friendshoring"—relocating production facilities to geographically proximate or diplomatically aligned partner states. Although these target jurisdictions often present marginally higher unit labor expenses than traditional export hubs, firms increasingly treat these outlays as an implicit risk-mitigation premium. By accepting moderate manufacturing cost increases in exchange for reduced transit latency, tariff stability, and diminished exposure to sudden trade restrictions, multinational enterprises are actively redefining supply chain efficiency from simple cost minimization to structural resilience.</p>
      </div>
    `,
    prompt: "Which choice best states the main idea of the text?",
    options: [
      {
        letter: "A",
        text: "The transition toward friendshoring demonstrates that geographic proximity has become the sole determinant of multinational corporate profitability.",
        isCorrect: false,
        flaw: "Extreme Qualifier ('sole determinant')"
      },
      {
        letter: "B",
        text: "Rising nominal labor costs in traditional export hubs have forced multinational corporations to abandon long-term foreign direct investment strategies entirely.",
        isCorrect: false,
        flaw: "Distortion & Extreme Exaggeration"
      },
      {
        letter: "C",
        text: "Advanced-economy manufacturers are prioritizing geopolitical alignment and proximity over absolute labor cost minimization to build more resilient supply chains.",
        isCorrect: true
      },
      {
        letter: "D",
        text: "Nearshoring strategies have largely failed to reduce logistics disruptions because partner jurisdictions impose prohibitive trade restrictions and tariffs.",
        isCorrect: false,
        flaw: "Direct Contradiction of Passage"
      }
    ],
    correctExplanation: `
      <strong>Option C is correct.</strong> The passage traces how multinational manufacturing firms are moving away from "simple cost minimization" toward "structural resilience." Firms accept "marginally higher unit labor expenses" in exchange for "reduced transit latency, tariff stability, and diminished exposure to sudden trade restrictions" via nearshoring and friendshoring. Option C accurately synthesizes this thesis.
    `,
    distractorExplanations: [
      {
        letter: "A",
        explanation: "<strong>Option A is incorrect (Extreme Qualifier):</strong> Proximity is described as one strategic factor among several (including diplomatic alignment and risk mitigation), not the 'sole determinant' of profitability."
      },
      {
        letter: "B",
        explanation: "<strong>Option B is incorrect (Distortion / Extreme Exaggeration):</strong> The text does not claim that multinational firms are abandoning FDI entirely; rather, they are redirecting investment toward proximate or diplomatically aligned partner states."
      },
      {
        letter: "D",
        explanation: "<strong>Option D is incorrect (Direct Contradiction):</strong> The text explicitly states that nearshoring provides 'reduced transit latency' and 'diminished exposure to sudden trade restrictions,' contradicting the claim that it failed due to prohibitive tariffs."
      }
    ],
    internationalTip: `
      <strong>SAT Strategy for International Test-Takers:</strong> Be cautious of absolute modifiers (e.g., <em>solely, entirely, impossible, always</em>). High-difficulty SAT questions frequently construct tempting distractors like Option A by pairing an accurate theme with an unjustified absolute modifier.
    `
  },

  // ==========================================
  // QUESTION 2 (Key: A) - Command of Evidence (Quantitative)
  // ==========================================
  {
    id: 2,
    skill: "Command of Evidence (Quantitative)",
    topic: "Cross-Border Environmental Economics: Carbon Border Adjustments (CBAM)",
    wordCount: 84,
    passageHtml: `
      <div class="passage-title-tag">
        <span>Cross-Border Environmental Policy</span>
        <span>Word Count: 84 words + Data Table</span>
      </div>
      <div class="passage-text">
        <p>In an effort to prevent "carbon leakage"—wherein domestic industrial producers relocate to countries with less stringent environmental regulations—several economic blocs have introduced carbon border adjustment mechanisms (CBAM). Under these policies, imported goods are subjected to border carbon tariffs proportional to their embedded greenhouse gas intensity (measured in metric tons of CO<sub>2</sub> equivalent per metric ton of product, or tCO<sub>2</sub>e/t). Economists analyzing industrial competitiveness across four developing partner economies evaluated whether higher tariff-adjusted cost burdens correlated with decreases in export volume to the CBAM bloc.</p>
      </div>

      <div class="data-table-container">
        <div class="table-caption">
          Table: Industrial Output, Carbon Intensity, and Post-Tariff Export Performance (2024–2025)
        </div>
        <table class="sat-table" aria-label="Carbon Border Adjustment Data Table">
          <thead>
            <tr>
              <th scope="col">Country</th>
              <th scope="col">Primary Export Sector</th>
              <th scope="col">Embedded Carbon Intensity (tCO<sub>2</sub>e/t)</th>
              <th scope="col">Tariff-Adjusted Cost Increase (%)</th>
              <th scope="col">Change in Export Volume to CBAM Bloc (%)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Country A</strong></td>
              <td>Rolled Steel</td>
              <td class="num-cell">2.4</td>
              <td class="num-cell cell-neg">+18%</td>
              <td class="num-cell cell-neg">-14.2%</td>
            </tr>
            <tr>
              <td><strong>Country B</strong></td>
              <td>Synthetic Fertilizers</td>
              <td class="num-cell">3.1</td>
              <td class="num-cell cell-neg">+24%</td>
              <td class="num-cell cell-neg">-21.0%</td>
            </tr>
            <tr>
              <td><strong>Country C</strong></td>
              <td>Primary Aluminum</td>
              <td class="num-cell">1.8</td>
              <td class="num-cell cell-neg">+12%</td>
              <td class="num-cell cell-neg">-6.5%</td>
            </tr>
            <tr>
              <td><strong>Country D</strong></td>
              <td>Structural Timber & Composites</td>
              <td class="num-cell">0.4</td>
              <td class="num-cell cell-pos">+2%</td>
              <td class="num-cell cell-pos">+8.4%</td>
            </tr>
          </tbody>
        </table>
      </div>
    `,
    prompt: "Which choice best uses data from the table to complete the assertion that tariff-adjusted cost increases were positively associated with the magnitude of declines in export volume to the CBAM bloc?",
    options: [
      {
        letter: "A",
        text: "Country B faced the highest tariff-adjusted cost increase (+24%) and suffered the largest export decline (-21.0%), whereas Country D experienced the lowest cost increase (+2%) and was the only country whose export volume grew (+8.4%).",
        isCorrect: true
      },
      {
        letter: "B",
        text: "Country A had a higher embedded carbon intensity (2.4 tCO2e/t) than Country C (1.8 tCO2e/t), yet Country C experienced a smaller tariff-adjusted cost increase than Country D.",
        isCorrect: false,
        flaw: "Factual Error & Irrelevant Metric Comparison"
      },
      {
        letter: "C",
        text: "Country C's +12% tariff-adjusted cost increase caused a larger decline in export volume (-6.5%) than the decline observed in Country B's synthetic fertilizer sector (-21.0%).",
        isCorrect: false,
        flaw: "Direct Mathematical Inversion"
      },
      {
        letter: "D",
        text: "Country D achieved an 8.4% growth in export volume because its embedded carbon intensity was nearly identical to that of Country A's rolled steel sector.",
        isCorrect: false,
        flaw: "Blatant Data Misstatement (0.4 vs 2.4)"
      }
    ],
    correctExplanation: `
      <strong>Option A is correct.</strong> To support the assertion that larger tariff-adjusted cost increases correspond to steeper export volume drops, the answer must accurately cite extreme comparative points. Country B had the steepest cost hike (+24%) and the largest drop (-21.0%), while Country D had the lowest cost increase (+2%) and was the only nation with positive export growth (+8.4%).
    `,
    distractorExplanations: [
      {
        letter: "B",
        explanation: "<strong>Option B is incorrect (Factual Error / Logic Gap):</strong> Country C's tariff cost increase was +12%, which is greater (not smaller) than Country D's +2%."
      },
      {
        letter: "C",
        explanation: "<strong>Option C is incorrect (Mathematical Inversion):</strong> A -6.5% decline is smaller in magnitude than a -21.0% decline, not larger."
      },
      {
        letter: "D",
        explanation: "<strong>Option D is incorrect (Direct Data Misrepresentation):</strong> Country D's carbon intensity is 0.4 tCO2e/t, whereas Country A's is 2.4 tCO2e/t; they are not nearly identical."
      }
    ],
    internationalTip: `
      <strong>SAT Strategy for Quantitative Evidence:</strong> In Quantitative Evidence questions, every incorrect option contains at least one verifiable factual falsehood. Always check (1) Subject country, (2) Variable column, (3) Exact numerical value, and (4) Direction of relationship.
    `
  },

  // ==========================================
  // QUESTION 3 (Key: D) - Inferences
  // ==========================================
  {
    id: 3,
    skill: "Inferences",
    topic: "Global Macroeconomics: Digital Remittance Rails & Currency Volatility",
    wordCount: 128,
    passageHtml: `
      <div class="passage-title-tag">
        <span>International Finance & Digital Infrastructure</span>
        <span>Word Count: 128 words</span>
      </div>
      <div class="passage-text">
        <p>Cross-border remittance flows to lower- and middle-income countries (LMICs) represent a vital source of foreign exchange and household income. Traditional remittance conduits, however, impose high intermediation fees and substantial foreign exchange conversion spreads, which widen sharply during periods of domestic currency depreciation in recipient countries. While the proliferation of sovereign central bank digital currencies (CBDCs) and distributed ledger payment rails has significantly lowered nominal cross-border wire processing expenses, financial economists observe that these digital systems still rely heavily on domestic liquidity providers to facilitate final "last-mile" conversions into local legal tender or cash. Consequently, in recipient economies suffering from illiquid domestic foreign-exchange markets or volatile exchange rates, the overall transaction friction of remittances is likely to ______</p>
      </div>
    `,
    prompt: "Which choice most logically completes the text?",
    options: [
      {
        letter: "A",
        text: "disappear entirely once sovereign central bank digital currencies replace commercial banking infrastructure in remittance-sending nations.",
        isCorrect: false,
        flaw: "Unwarranted Optimism / Extreme Contradiction"
      },
      {
        letter: "B",
        text: "decline below the global average cost because distributed ledgers eliminate the need for recipient-side financial intermediaries.",
        isCorrect: false,
        flaw: "Directly Contradicts Passage Premises"
      },
      {
        letter: "C",
        text: "induce recipient households to abandon digital remittance channels exclusively in favor of informal physical money couriers.",
        isCorrect: false,
        flaw: "Speculative Out-of-Scope Leap"
      },
      {
        letter: "D",
        text: "persist despite improvements in digital wire processing, as local currency conversion bottlenecks continue to impose costs on recipients.",
        isCorrect: true
      }
    ],
    correctExplanation: `
      <strong>Option D is correct.</strong> The passage establishes a contrast: digital rails and CBDCs reduce upstream wire processing costs, but they still rely on local liquidity providers for 'last-mile' conversions, and conversion spreads widen during periods of exchange rate volatility in recipient markets. Therefore, in volatile recipient economies, total friction will persist because the final conversion bottleneck offsets upstream savings. Option D logically completes this argument.
    `,
    distractorExplanations: [
      {
        letter: "A",
        explanation: "<strong>Option A is incorrect (Extreme / Contradictory):</strong> The text emphasizes that the persistent bottleneck exists on the recipient side. Upgrades in sending nations cannot cause overall friction to 'disappear entirely.'"
      },
      {
        letter: "B",
        explanation: "<strong>Option B is incorrect (Direct Contradiction):</strong> The passage explicitly notes that digital systems 'still rely heavily on domestic liquidity providers.' Claiming that intermediaries are eliminated directly contradicts the text."
      },
      {
        letter: "C",
        explanation: "<strong>Option C is incorrect (Unwarranted Speculation):</strong> The text discusses payment cost mechanics, not sociological abandonment in favor of physical money couriers."
      }
    ],
    internationalTip: `
      <strong>SAT Strategy for Inferences (Text Completion):</strong> In 'logically completes the text' questions, the correct answer is the narrowest logical step required to conclude the author's argument. Avoid options introducing speculative real-world behaviors (Option C) or absolute claims (Option A).
    `
  },

  // ==========================================
  // QUESTION 4 (Key: B) - Command of Evidence (Textual)
  // ==========================================
  {
    id: 4,
    skill: "Command of Evidence (Textual)",
    topic: "Global Critical Minerals: Rare Earth Elements & Secondary Recycling Lags",
    wordCount: 135,
    passageHtml: `
      <div class="passage-title-tag">
        <span>Resource Economics & Technology</span>
        <span>Word Count: 135 words</span>
      </div>
      <div class="passage-text">
        <p>Industrial powers transitioning to renewable energy grids rely extensively on rare earth elements (REEs) such as neodymium and dysprosium for permanent magnet production. Because primary extraction is geographically concentrated in a handful of nations, consuming states have subsidized hydrometallurgical recycling programs to recover REEs from decommissioned wind turbines and electric vehicle motors. Critics caution, however, that circular recovery models cannot immediately insulate consuming nations from sudden geopolitical export embargoes. They point out that the volume of secondary REEs that can be recovered annually is fundamentally constrained by the historical adoption rate of REE-containing hardware from over a decade prior—meaning that even with 100% recycling efficiency, current post-consumer scrap yields can satisfy only a small fraction of present-day industrial manufacturing expansion.</p>
      </div>
    `,
    prompt: "Which finding from a resource economics study, if true, would most directly support the critics' caution regarding recycling programs?",
    options: [
      {
        letter: "A",
        text: "Advanced hydrometallurgical recycling facilities achieve recovery purity levels that are virtually indistinguishable from virgin mined ores.",
        isCorrect: false,
        flaw: "Weakens/Counteracts Critics' Concern"
      },
      {
        letter: "B",
        text: "Annual domestic demand for neodymium in manufacturing currently exceeds the total cumulative volume of neodymium contained in all hardware manufactured over the preceding decade.",
        isCorrect: true
      },
      {
        letter: "C",
        text: "Exporting nations have recently lowered tariffs on unprocessed rare earth ores to maintain their market dominance over foreign recyclers.",
        isCorrect: false,
        flaw: "Irrelevant Trade Policy Metric"
      },
      {
        letter: "D",
        text: "Several emerging economies have established new primary extraction facilities that will reach full operational capacity within fifteen years.",
        isCorrect: false,
        flaw: "Addresses Primary Extraction, Not Recycling Lag Constraint"
      }
    ],
    correctExplanation: `
      <strong>Option B is correct.</strong> The critics' argument rests on a physical stock-flow constraint: recycling yield is limited by the historical quantity of equipment built years ago. If current annual demand exceeds the *entire historical stock* of neodymium in past hardware, then even a perfect recycling process cannot bridge the supply gap during an embargo. Option B provides direct empirical support for this constraint.
    `,
    distractorExplanations: [
      {
        letter: "A",
        explanation: "<strong>Option A is incorrect (Counter-evidence):</strong> Showing that recycling yields high-purity material praises the technical viability of recycling rather than supporting the critics' claim about supply volume limitations."
      },
      {
        letter: "C",
        explanation: "<strong>Option C is incorrect (Irrelevant Factor):</strong> Foreign tariff changes do not address the critics' core point about the historical availability of domestic scrap hardware."
      },
      {
        letter: "D",
        explanation: "<strong>Option D is incorrect (Wrong Mechanism):</strong> Long-term primary extraction in emerging markets does not provide evidence regarding the structural limitation of secondary recycling scrap yields."
      }
    ],
    internationalTip: `
      <strong>Command of Evidence Tip:</strong> First identify the author's exact argumentative pivot (here: <em>scrap yield is constrained by historical installed stock</em>). The winning piece of evidence must directly confirm that specific bottleneck.
    `
  },

  // ==========================================
  // QUESTION 5 (Key: A) - Inferences
  // ==========================================
  {
    id: 5,
    skill: "Inferences",
    topic: "International Macroeconomics: Reserve Currencies & De-Dollarization Dynamics",
    wordCount: 119,
    passageHtml: `
      <div class="passage-title-tag">
        <span>Sovereign Finance & Central Banking</span>
        <span>Word Count: 119 words</span>
      </div>
      <div class="passage-text">
        <p>In response to international sanctions and unilateral asset freezes, several emerging market central banks have actively diversified their official foreign exchange reserves away from the US dollar and euro, allocating capital into physical gold, bilateral currency swap lines, and sovereign bonds of regional trading partners. However, monetary economists note that reserve assets serve two distinct functions: long-term store of value and immediate international liquidity for balance-of-payments defense during capital flight crises. While non-traditional reserve assets such as physical bullion or illiquid bilateral currencies provide security against sovereign asset seizures, they cannot be rapidly liquidated on deep global secondary markets during an acute currency panic without causing significant asset price depreciation. Therefore, central banks that diversify reserves exclusively into illiquid assets may find that ______</p>
      </div>
    `,
    prompt: "Which choice most logically completes the text?",
    options: [
      {
        letter: "A",
        text: "their enhanced protection against international asset freezes is offset by a diminished capacity to rapidly defend their domestic currencies during sudden capital outflows.",
        isCorrect: true
      },
      {
        letter: "B",
        text: "global secondary bond markets permanently close to any sovereign entity that attempts to hold non-dollar denominated foreign exchange reserves.",
        isCorrect: false,
        flaw: "Extreme & Unsubstantiated Assertion"
      },
      {
        letter: "C",
        text: "international commercial banks refuse to accept gold bullion as collateral under all sovereign debt restructuring agreements.",
        isCorrect: false,
        flaw: "Out-of-Scope Detail / Absolute Qualifier"
      },
      {
        letter: "D",
        text: "their domestic currencies immediately appreciate in value against the currencies of their primary regional trading partners.",
        isCorrect: false,
        flaw: "Contradictory Economic Outcome"
      }
    ],
    correctExplanation: `
      <strong>Option A is correct.</strong> The passage distinguishes between protection against asset seizures (store of value) and the ability to rapidly mobilize funds to defend against capital flight (immediate liquidity). If central banks hold only illiquid assets, they gain legal security but sacrifice the rapid liquidity needed to defend their exchange rate. Option A captures this exact trade-off.
    `,
    distractorExplanations: [
      {
        letter: "B",
        explanation: "<strong>Option B is incorrect (Extreme / Unsubstantiated):</strong> The text does not suggest that secondary bond markets will 'permanently close' to diversifying sovereigns."
      },
      {
        letter: "C",
        explanation: "<strong>Option C is incorrect (Out of Scope):</strong> Commercial bank collateral rules for debt restructuring are not discussed or implied in the text."
      },
      {
        letter: "D",
        explanation: "<strong>Option D is incorrect (Contradictory):</strong> The scenario focuses on the risk of currency depreciation during capital flight, not immediate domestic appreciation."
      }
    ],
    internationalTip: `
      <strong>Trade-off Inference Questions:</strong> SAT passages with a 'two distinct functions' structure almost always conclude with a balanced trade-off statement: gain in Feature X at the expense of Feature Y.
    `
  },

  // ==========================================
  // QUESTION 6 (Key: C) - Central Ideas & Details
  // ==========================================
  {
    id: 6,
    skill: "Central Ideas and Details",
    topic: "Sovereign Debt: G20 Common Framework & Creditor Coordination",
    wordCount: 122,
    passageHtml: `
      <div class="passage-title-tag">
        <span>Multilateral Institutions & Sovereign Debt</span>
        <span>Word Count: 122 words</span>
      </div>
      <div class="passage-text">
        <p>The sovereign debt architecture established under the G20 Common Framework was designed to coordinate debt relief for low-income nations facing insolvency, bringing traditional Paris Club bilateral lenders, non-Paris Club sovereign creditors, and private bondholders under a unified restructuring protocol. In practice, however, negotiations have experienced protracted stalemates. The primary impediment is the "comparability of treatment" clause: traditional bilateral creditors insist that private bondholders and non-traditional bilateral lenders accept equivalent percentage losses (haircuts). Because private bondholders operate under commercial fiduciary mandates and non-traditional sovereign lenders often hold sovereign debt secured by collateralized strategic infrastructure, achieving consensus on equitable burden-sharing has consistently delayed the disbursement of critical multilateral emergency liquidity to defaulting debtor states.</p>
      </div>
    `,
    prompt: "Which choice best describes the main idea of the text?",
    options: [
      {
        letter: "A",
        text: "Private bondholders have completely replaced sovereign bilateral creditors as the primary source of infrastructure financing for low-income nations.",
        isCorrect: false,
        flaw: "Unsupported Factual Claim"
      },
      {
        letter: "B",
        text: "The Paris Club has formally dissolved the G20 Common Framework due to non-traditional lenders demanding collateralized resource rights.",
        isCorrect: false,
        flaw: "Extreme / Factually Inaccurate Assertion"
      },
      {
        letter: "C",
        text: "Disagreements over equitable loss-sharing among diverse creditor groups have hindered the timely execution of debt relief under the G20 Common Framework.",
        isCorrect: true
      },
      {
        letter: "D",
        text: "Defaulting debtor states are refusing emergency multilateral liquidity until all private creditors agree to forgive their sovereign loans entirely.",
        isCorrect: false,
        flaw: "Distortion of Debtor vs Creditor Actions"
      }
    ],
    correctExplanation: `
      <strong>Option C is correct.</strong> The passage explains that the G20 Common Framework aimed to coordinate debt relief, but negotiations have stalled due to the 'comparability of treatment' requirement, as private bondholders and non-traditional lenders have conflicting incentives. This prevents the timely disbursement of emergency funds. Option C accurately summarizes this main idea.
    `,
    distractorExplanations: [
      {
        letter: "A",
        explanation: "<strong>Option A is incorrect (Unsupported):</strong> The passage describes diverse creditor groups participating in debt talks, but does not claim private bondholders replaced bilateral creditors in infrastructure financing."
      },
      {
        letter: "B",
        explanation: "<strong>Option B is incorrect (Fabrication):</strong> The passage states the framework faces stalemates, not that the Paris Club dissolved it."
      },
      {
        letter: "D",
        explanation: "<strong>Option D is incorrect (False Inversion):</strong> Creditor disagreements delay liquidity, not debtor nations refusing relief."
      }
    ],
    internationalTip: `
      <strong>Central Idea Trap:</strong> Distractors like D invert who is causing the problem. Always verify whether the grammatical subject of the option matches the causal actor in the text.
    `
  },

  // ==========================================
  // QUESTION 7 (Key: D) - Command of Evidence (Quantitative)
  // ==========================================
  {
    id: 7,
    skill: "Command of Evidence (Quantitative)",
    topic: "Global Energy Transition: Offshore Wind Capacity & Grid Integration",
    wordCount: 88,
    passageHtml: `
      <div class="passage-title-tag">
        <span>Cross-Border Energy Infrastructure</span>
        <span>Word Count: 88 words + Data Table</span>
      </div>
      <div class="passage-text">
        <p>Expanding marine offshore wind generation requires substantial synchronous investment in high-voltage direct current (HVDC) subsea transmission corridors to transport electricity to inland demand centers. Energy researchers evaluated whether maritime regional zones with higher ratios of subsea grid investment relative to installed generation capacity experienced lower rates of renewable generation curtailment (energy wasted when transmission lines are congested).</p>
      </div>

      <div class="data-table-container">
        <div class="table-caption">
          Table: Offshore Wind Generation, Subsea Grid Investment, and Curtailment Rates (2024–2025)
        </div>
        <table class="sat-table" aria-label="Offshore Wind and Grid Investment Data">
          <thead>
            <tr>
              <th scope="col">Maritime Zone</th>
              <th scope="col">Installed Offshore Wind Capacity (GW)</th>
              <th scope="col">Subsea Transmission Investment ($B USD)</th>
              <th scope="col">Investment-to-Capacity Ratio ($B/GW)</th>
              <th scope="col">Annual Generation Curtailment Rate (%)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>North Sea Basin</strong></td>
              <td>28.5</td>
              <td>$22.8</td>
              <td class="num-cell">0.80</td>
              <td class="num-cell cell-pos">3.2%</td>
            </tr>
            <tr>
              <td><strong>Baltic Sea Zone</strong></td>
              <td>12.0</td>
              <td>$7.2</td>
              <td class="num-cell">0.60</td>
              <td class="num-cell cell-pos">6.8%</td>
            </tr>
            <tr>
              <td><strong>East China Sea Sector</strong></td>
              <td>34.0</td>
              <td>$13.6</td>
              <td class="num-cell">0.40</td>
              <td class="num-cell cell-neg">14.5%</td>
            </tr>
            <tr>
              <td><strong>US North Atlantic Coast</strong></td>
              <td>6.5</td>
              <td>$1.3</td>
              <td class="num-cell">0.20</td>
              <td class="num-cell cell-neg">22.1%</td>
            </tr>
          </tbody>
        </table>
      </div>
    `,
    prompt: "Which choice best uses data from the table to support the researchers' hypothesis that higher transmission investment per gigawatt of capacity reduces offshore generation curtailment?",
    options: [
      {
        letter: "A",
        text: "The East China Sea Sector had the greatest total installed capacity (34.0 GW) and consequently achieved a lower curtailment rate than the Baltic Sea Zone.",
        isCorrect: false,
        flaw: "Factual Error from Data (14.5% is higher than 6.8%)"
      },
      {
        letter: "B",
        text: "The Baltic Sea Zone allocated $7.2B USD in transmission investment, which resulted in a higher curtailment rate than the 14.5% rate recorded in the East China Sea Sector.",
        isCorrect: false,
        flaw: "Direct Numerical Contradiction (6.8% vs 14.5%)"
      },
      {
        letter: "C",
        text: "The US North Atlantic Coast installed 6.5 GW of capacity, allowing it to maintain an investment-to-capacity ratio equal to that of the North Sea Basin.",
        isCorrect: false,
        flaw: "Factual Error (0.20 is not equal to 0.80)"
      },
      {
        letter: "D",
        text: "The North Sea Basin had the highest investment-to-capacity ratio (0.80 $B/GW) and the lowest curtailment rate (3.2%), whereas the US North Atlantic Coast had the lowest ratio (0.20 $B/GW) and the highest curtailment rate (22.1%).",
        isCorrect: true
      }
    ],
    correctExplanation: `
      <strong>Option D is correct.</strong> The researchers hypothesized that higher investment-to-capacity ratios correlate with lower curtailment rates. Option D cites the two extreme cases: North Sea Basin ($0.80B/GW ratio, 3.2% curtailment) and US North Atlantic Coast ($0.20B/GW ratio, 22.1% curtailment). Examining all four rows confirms that as the ratio drops ($0.80 \rightarrow 0.60 \rightarrow 0.40 \rightarrow 0.20$), curtailment steadily rises ($3.2\% \rightarrow 6.8\% \rightarrow 14.5\% \rightarrow 22.1\%$).
    `,
    distractorExplanations: [
      {
        letter: "A",
        explanation: "<strong>Option A is incorrect (Factual Error):</strong> East China Sea had a 14.5% curtailment rate, which is higher, not lower, than the Baltic Sea Zone's 6.8%."
      },
      {
        letter: "B",
        explanation: "<strong>Option B is incorrect (Contradiction):</strong> Baltic Sea's curtailment was 6.8%, which is lower than 14.5%, not higher."
      },
      {
        letter: "C",
        explanation: "<strong>Option C is incorrect (Factual Falsehood):</strong> The ratios are 0.20 $B/GW vs 0.80 $B/GW, which are fourfold different, not equal."
      }
    ],
    internationalTip: `
      <strong>Checking Extremes in Tables:</strong> The most robust proof of an inverse or direct relationship compares the maximum and minimum values of the independent variable alongside the dependent variable.
    `
  },

  // ==========================================
  // QUESTION 8 (Key: B) - Inferences
  // ==========================================
  {
    id: 8,
    skill: "Inferences",
    topic: "Agricultural Economics: Fertilizer Subsidies & Soil Degradation",
    wordCount: 130,
    passageHtml: `
      <div class="passage-title-tag">
        <span>Agronomy & Environmental Economics</span>
        <span>Word Count: 130 words</span>
      </div>
      <div class="passage-text">
        <p>To bolster domestic food security amidst global commodity price volatility, several developing agrarian nations established universal input subsidies on synthetic nitrogenous fertilizers. Agronomists observed that while these subsidies generated immediate short-term spikes in cereal grain output, prolonged over-application of synthetic urea severely accelerated soil acidification and depleted essential micronutrients like zinc and magnesium. Furthermore, neighboring subsistence farmers who could not afford complementary organic soil amendments experienced diminishing marginal crop yields despite continuous increases in synthetic fertilizer usage. Agricultural economists analyzing long-term soil testing data therefore conclude that uncalibrated chemical fertilizer subsidies without mandatory soil remediation protocols will ultimately ______</p>
      </div>
    `,
    prompt: "Which choice most logically completes the text?",
    options: [
      {
        letter: "A",
        text: "permanently eliminate the need for organic soil amendments across all global agrarian economies.",
        isCorrect: false,
        flaw: "Direct Contradiction & Extreme Claim"
      },
      {
        letter: "B",
        text: "undermine the agricultural productivity and food security objectives they were originally instituted to achieve.",
        isCorrect: true
      },
      {
        letter: "C",
        text: "force all developing nations to convert their domestic cereal croplands exclusively into commercial forestry plantations.",
        isCorrect: false,
        flaw: "Out-of-Scope / Extreme Leap"
      },
      {
        letter: "D",
        text: "cause international nitrogen fertilizer commodity prices to drop to zero within the decade.",
        isCorrect: false,
        flaw: "Irrelevant Economic Hyperbole"
      }
    ],
    correctExplanation: `
      <strong>Option B is correct.</strong> The passage shows that universal fertilizer subsidies, intended to ensure food security, lead to soil acidification, micronutrient depletion, and diminishing yields over time. Thus, over the long run, uncalibrated subsidies will erode the very agricultural productivity and food security they aimed to promote. Option B completes this irony logically.
    `,
    distractorExplanations: [
      {
        letter: "A",
        explanation: "<strong>Option A is incorrect (Contradiction):</strong> The text states that organic amendments are needed to mitigate soil degradation, not that they are eliminated."
      },
      {
        letter: "C",
        explanation: "<strong>Option C is incorrect (Extreme Leap):</strong> The text discusses soil health and cereal grain yields; converting all land to forestry is an unsupported extreme scenario."
      },
      {
        letter: "D",
        explanation: "<strong>Option D is incorrect (Absurd Assertion):</strong> Global fertilizer prices dropping to zero has no basis in the text."
      }
    ],
    internationalTip: `
      <strong>Irony / Policy Reversal Traps:</strong> SAT passages frequently explore well-intentioned policies that produce unintended negative consequences. The logical completion should reflect the policy's self-defeating outcome without exaggerating into total apocalypse.
    `
  },

  // ==========================================
  // QUESTION 9 (Key: C) - Command of Evidence (Textual)
  // ==========================================
  {
    id: 9,
    skill: "Command of Evidence (Textual)",
    topic: "Maritime Trade & Decarbonization: Green Ammonia & Port Infrastructure",
    wordCount: 132,
    passageHtml: `
      <div class="passage-title-tag">
        <span>Maritime Logistics & Clean Tech</span>
        <span>Word Count: 132 words</span>
      </div>
      <div class="passage-text">
        <p>The International Maritime Organization (IMO) has mandated net-zero greenhouse gas emissions for commercial shipping by 2050, prompting shipbuilders to design dual-fuel vessels capable of operating on "green ammonia" synthesized with zero-carbon hydrogen. Maritime economists argue, however, that the adoption rate of ammonia-fueled cargo vessels will be determined not by engine availability or vessel manufacturing capacity, but by the geographical distribution of specialized cryogenic bunkering terminals. Because ammonia is toxic and requires pressurized cryogenic storage at -33°C, shipping lines will refuse to commit capital to ammonia-fueled vessels until major maritime chokepoint ports guarantee reliable fueling infrastructure along primary trans-oceanic lanes.</p>
      </div>
    `,
    prompt: "Which finding, if true, would most directly support the maritime economists' argument?",
    options: [
      {
        letter: "A",
        text: "Dual-fuel marine engines capable of burning green ammonia are approximately 15% more expensive to manufacture than traditional heavy fuel oil engines.",
        isCorrect: false,
        flaw: "Focuses on Engine Cost, Contrary to Economists' Focus on Port Bunkering"
      },
      {
        letter: "B",
        text: "Commercial shipping emissions currently account for approximately 3% of total global greenhouse gas emissions across all transportation sectors.",
        isCorrect: false,
        flaw: "General Background Statistic"
      },
      {
        letter: "C",
        text: "Global orders for ammonia-ready cargo ships surged exclusively after three major container ports along the Malacca Strait completed construction of certified cryogenic ammonia bunkering terminals.",
        isCorrect: true
      },
      {
        letter: "D",
        text: "Several chemical companies have developed synthetic biofuels that can be combusted in standard diesel engines without modification.",
        isCorrect: false,
        flaw: "Alternative Fuel, Irrelevant to Ammonia Infrastructure"
      }
    ],
    correctExplanation: `
      <strong>Option C is correct.</strong> The economists claim that vessel adoption depends directly on the presence of specialized bunkering infrastructure at major maritime chokepoints rather than vessel manufacturing capacity. Finding that ship orders surged only *after* bunkering terminals were built along the Malacca Strait provides direct empirical evidence for this claim.
    `,
    distractorExplanations: [
      {
        letter: "A",
        explanation: "<strong>Option A is incorrect (Focuses on Vessel Cost):</strong> The economists argue that adoption is determined *not* by vessel manufacturing capacity/engines, but by port infrastructure."
      },
      {
        letter: "B",
        explanation: "<strong>Option B is incorrect (Irrelevant Context):</strong> General shipping emissions figures do not prove what drives shipping lines' fleet adoption decisions."
      },
      {
        letter: "D",
        explanation: "<strong>Option D is incorrect (Alternative Fuel):</strong> Mentions biofuels, which diverges from the specific argument about green ammonia bunkering infrastructure."
      }
    ],
    internationalTip: `
      <strong>Evidence Alignment:</strong> Check the explicit contrast in the prompt. The text claimed adoption is driven by <em>port infrastructure</em>, not <em>engine availability</em>. The correct evidence MUST directly involve port bunkering infrastructure.
    `
  },

  // ==========================================
  // QUESTION 10 (Key: A) - Central Ideas & Details
  // ==========================================
  {
    id: 10,
    skill: "Central Ideas and Details",
    topic: "Labor Economics: Bilateral Social Security Totalization Agreements",
    wordCount: 125,
    passageHtml: `
      <div class="passage-title-tag">
        <span>International Labor & Social Policy</span>
        <span>Word Count: 125 words</span>
      </div>
      <div class="passage-text">
        <p>In an increasingly globalized labor market, high-skilled technical workers frequently divide their careers across multiple sovereign jurisdictions. Without bilateral social security totalization agreements, these mobile professionals often encounter "dual taxation"—paying mandatory retirement payroll taxes simultaneously to both their host and home nations—or find themselves ineligible for pension benefits because their tenure in any single country falls short of statutory vesting periods. Totalization treaties resolve this dilemma by permitting migrant workers to combine contributory service periods across participating states while assigning exclusive payroll tax liability to a single jurisdiction. Consequently, these bilateral agreements not only safeguard individual retirement portability but also reduce administrative and labor overhead costs for multinational enterprises deploying personnel abroad.</p>
      </div>
    `,
    prompt: "Which choice best states the primary purpose of the text?",
    options: [
      {
        letter: "A",
        text: "To explain how bilateral totalization agreements prevent double taxation and preserve pension eligibility for internationally mobile workers.",
        isCorrect: true
      },
      {
        letter: "B",
        text: "To argue that high-skilled technical workers should be permanently exempted from all national social security payroll taxes.",
        isCorrect: false,
        flaw: "Extreme / Misrepresents Policy Mechanism"
      },
      {
        letter: "C",
        text: "To demonstrate that multinational corporations are shifting to remote work to evade cross-border social security obligations.",
        isCorrect: false,
        flaw: "Unsupported Speculation"
      },
      {
        letter: "D",
        text: "To criticize traditional national retirement systems for establishing mandatory minimum contribution periods.",
        isCorrect: false,
        flaw: "Mischaracterizes Passage Tone and Focus"
      }
    ],
    correctExplanation: `
      <strong>Option A is correct.</strong> The text outlines the challenges faced by mobile workers (dual taxation and failure to meet vesting periods) and explains how bilateral totalization agreements address these issues by combining contribution periods and assigning single-jurisdiction liability. Option A accurately states this purpose.
    `,
    distractorExplanations: [
      {
        letter: "B",
        explanation: "<strong>Option B is incorrect (Extreme Distortion):</strong> Totalization agreements assign tax liability to one state, rather than exempting workers from taxes entirely."
      },
      {
        letter: "C",
        explanation: "<strong>Option C is incorrect (Fabrication):</strong> Remote work tax evasion is never mentioned in the passage."
      },
      {
        letter: "D",
        explanation: "<strong>Option D is incorrect (Wrong Focus & Tone):</strong> The passage objectively describes how treaties resolve cross-border coordination issues rather than launching a critique of vesting periods."
      }
    ],
    internationalTip: `
      <strong>Primary Purpose Questions:</strong> Look for verbs like <em>explain, illustrate, describe</em> when the tone is neutral and expository. Avoid argumentative verbs like <em>criticize</em> unless the author expresses clear disapproval.
    `
  },

  // ==========================================
  // QUESTION 11 (Key: D) - Command of Evidence (Quantitative)
  // ==========================================
  {
    id: 11,
    skill: "Command of Evidence (Quantitative)",
    topic: "International Trade: RCEP Tariff Liberalization & Intermediate Component Flows",
    wordCount: 86,
    passageHtml: `
      <div class="passage-title-tag">
        <span>Regional Trade Agreements</span>
        <span>Word Count: 86 words + Data Table</span>
      </div>
      <div class="passage-text">
        <p>The Regional Comprehensive Economic Partnership (RCEP) introduced standardized rules of origin to streamline intra-regional trade in intermediate manufactured inputs across Asia-Pacific economies. Trade economists tracked the percentage reduction in applied tariff rates alongside the year-over-year percentage growth in cross-border component exports among four member economies to determine whether tariff liberalization stimulated intermediate goods trade.</p>
      </div>

      <div class="data-table-container">
        <div class="table-caption">
          Table: Tariff Reductions and Intermediate Component Export Growth under RCEP (2023–2024)
        </div>
        <table class="sat-table" aria-label="RCEP Tariff Reductions and Export Growth Data">
          <thead>
            <tr>
              <th scope="col">Economy</th>
              <th scope="col">Manufacturing Subsector</th>
              <th scope="col">Average Tariff Reduction (percentage points)</th>
              <th scope="col">Growth in Intermediate Exports to RCEP (%)</th>
              <th scope="col">Share of Total Exports to RCEP Members (%)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Economy W</strong></td>
              <td>Semiconductor Substrates</td>
              <td class="num-cell">-6.5%</td>
              <td class="num-cell cell-pos">+16.8%</td>
              <td class="num-cell">68%</td>
            </tr>
            <tr>
              <td><strong>Economy X</strong></td>
              <td>Automotive Sensors</td>
              <td class="num-cell">-4.0%</td>
              <td class="num-cell cell-pos">+11.2%</td>
              <td class="num-cell">54%</td>
            </tr>
            <tr>
              <td><strong>Economy Y</strong></td>
              <td>Precision Optical Glass</td>
              <td class="num-cell">-2.5%</td>
              <td class="num-cell cell-pos">+7.4%</td>
              <td class="num-cell">42%</td>
            </tr>
            <tr>
              <td><strong>Economy Z</strong></td>
              <td>Industrial Polymers</td>
              <td class="num-cell">-0.5%</td>
              <td class="num-cell cell-pos">+1.9%</td>
              <td class="num-cell">31%</td>
            </tr>
          </tbody>
        </table>
      </div>
    `,
    prompt: "Which choice best uses data from the table to support the conclusion that greater tariff cuts under RCEP corresponded to higher growth in intermediate exports?",
    options: [
      {
        letter: "A",
        text: "Economy X experienced a 54% share of total exports to RCEP members, which was higher than Economy W's intermediate export growth rate of +16.8%.",
        isCorrect: false,
        flaw: "Compares Incommensurate Data Columns (Export Share vs Growth Rate)"
      },
      {
        letter: "B",
        text: "Economy Y’s tariff reduction of -2.5 percentage points produced greater intermediate export growth than Economy X’s tariff reduction of -4.0 percentage points.",
        isCorrect: false,
        flaw: "Direct Contradiction (+7.4% is less than +11.2%)"
      },
      {
        letter: "C",
        text: "Economy Z had the highest overall export share (68%) despite implementing a tariff reduction of only -0.5 percentage points.",
        isCorrect: false,
        flaw: "Factual Error (Economy Z's share is 31%, Economy W is 68%)"
      },
      {
        letter: "D",
        text: "Economy W enacted the largest tariff reduction (-6.5 percentage points) and registered the greatest export growth (+16.8%), while Economy Z implemented the smallest reduction (-0.5 percentage points) and saw the lowest export growth (+1.9%).",
        isCorrect: true
      }
    ],
    correctExplanation: `
      <strong>Option D is correct.</strong> The claim asserts that larger tariff reductions lead to higher intermediate export growth. Option D presents the accurate maximum (Economy W: -6.5 pts tariff cut, +16.8% export growth) and minimum (Economy Z: -0.5 pts tariff cut, +1.9% export growth). Across all four economies, larger cuts perfectly correspond to higher growth (-6.5% -> +16.8%; -4.0% -> +11.2%; -2.5% -> +7.4%; -0.5% -> +1.9%).
    `,
    distractorExplanations: [
      {
        letter: "A",
        explanation: "<strong>Option A is incorrect (Mismatched Metrics):</strong> Compares total export share with annual growth rate, which does not test the correlation between tariff cuts and export growth."
      },
      {
        letter: "B",
        explanation: "<strong>Option B is incorrect (Factual Error):</strong> Economy Y's growth (+7.4%) was smaller than Economy X's (+11.2%), not greater."
      },
      {
        letter: "C",
        explanation: "<strong>Option C is incorrect (Data Misattribution):</strong> Economy Z has a 31% export share, while 68% belongs to Economy W."
      }
    ],
    internationalTip: `
      <strong>Column Matching:</strong> SAT test makers often design distractors like A by pulling numbers from two unrelated columns (e.g. comparing <em>Export Share %</em> with <em>Export Growth %</em>). Always verify that the option compares corresponding variables.
    `
  },

  // ==========================================
  // QUESTION 12 (Key: B) - Inferences
  // ==========================================
  {
    id: 12,
    skill: "Inferences",
    topic: "Monetary Policy & Capital Flows: Interest Rate Differentials & Currency Depletion",
    wordCount: 127,
    passageHtml: `
      <div class="passage-title-tag">
        <span>Macroeconomics & Exchange Rates</span>
        <span>Word Count: 127 words</span>
      </div>
      <div class="passage-text">
        <p>When major advanced-economy central banks implement aggressive monetary tightening cycles to curb domestic inflation, the resulting widenings in cross-border interest rate differentials frequently trigger capital flight from emerging market economies (EMEs). To defend their domestic currencies against rapid depreciation, EME monetary authorities typically have two choices: raise domestic policy rates—which risks stalling domestic economic growth—or intervene directly in foreign exchange markets by selling foreign currency reserves. If an emerging market economy already faces high domestic private debt burdens and depleted foreign exchange reserves, aggressive central bank market intervention to defend the exchange rate is likely to ______</p>
      </div>
    `,
    prompt: "Which choice most logically completes the text?",
    options: [
      {
        letter: "A",
        text: "permanently isolate advanced economies from experiencing inflationary pressures caused by global energy price spikes.",
        isCorrect: false,
        flaw: "Unrelated Subject / Illogical Reversal"
      },
      {
        letter: "B",
        text: "exhaust its remaining reserve buffers quickly, thereby heightening the economy's vulnerability to a sovereign balance-of-payments crisis.",
        isCorrect: true
      },
      {
        letter: "C",
        text: "induce advanced-economy central banks to lower their benchmark interest rates to negative levels immediately.",
        isCorrect: false,
        flaw: "Absurd Causal Leap"
      },
      {
        letter: "D",
        text: "eliminate all private debt obligations across domestic commercial banks without any fiscal cost.",
        isCorrect: false,
        flaw: "Contradictory / Unrealistic Fantasy"
      }
    ],
    correctExplanation: `
      <strong>Option B is correct.</strong> The passage establishes that selling foreign exchange reserves is one way to defend a currency, but the country in question already possesses 'depleted foreign exchange reserves.' Engaging in aggressive FX sales with already-depleted reserves will exhaust the remaining buffers and heighten balance-of-payments risk. Option B is the natural logical outcome.
    `,
    distractorExplanations: [
      {
        letter: "A",
        explanation: "<strong>Option A is incorrect (Unrelated):</strong> Emerging market FX intervention has no bearing on isolating advanced economies from inflation."
      },
      {
        letter: "C",
        explanation: "<strong>Option C is incorrect (Absurd):</strong> Advanced-economy central banks will not slash rates to negative levels because an emerging market spent reserves."
      },
      {
        letter: "D",
        explanation: "<strong>Option D is incorrect (Contradictory):</strong> Selling FX reserves does not eliminate domestic private debt."
      }
    ],
    internationalTip: `
      <strong>Conditional Logic Completion:</strong> When a passage sets up specific constraints (e.g. <em>already high private debt + depleted reserves</em>), the completion must trace what happens when that constrained system is pushed further.
    `
  },

  // ==========================================
  // QUESTION 13 (Key: A) - Central Ideas & Details
  // ==========================================
  {
    id: 13,
    skill: "Central Ideas and Details",
    topic: "Lithium Triangle Governance: Strategic Mineral Sovereign Leases",
    wordCount: 134,
    passageHtml: `
      <div class="passage-title-tag">
        <span>Environmental Governance & Resource Extraction</span>
        <span>Word Count: 134 words</span>
      </div>
      <div class="passage-text">
        <p>The global surge in electric vehicle adoption has intensified commercial interest in South America's "Lithium Triangle," home to over half of the world's brine-based lithium reserves. Historically, lithium extraction concessions were granted to multinational mining conglomerates under standard royalty arrangements. In recent years, however, host governments have shifted toward state-mandated public-private joint ventures that require foreign operators to transfer proprietary Direct Lithium Extraction (DLE) technologies to domestic state-owned enterprises and guarantee mandatory water recycling quotas. While multinational corporations have expressed concern over mandatory technology sharing and reduced profit margins, host governments contend that these stringent regulatory frameworks are essential to prevent the catastrophic depletion of hypersaline groundwater aquifers and to ensure that resource-rich developing nations capture downstream value in the global battery value chain.</p>
      </div>
    `,
    prompt: "Which choice best states the main idea of the text?",
    options: [
      {
        letter: "A",
        text: "Host governments in the Lithium Triangle are enforcing stricter state-led extraction regulations to balance ecological preservation and domestic economic value retention.",
        isCorrect: true
      },
      {
        letter: "B",
        text: "Multinational mining corporations have completely halted lithium brine extraction in South America due to unprofitable water recycling mandates.",
        isCorrect: false,
        flaw: "Extreme / Factually Inaccurate"
      },
      {
        letter: "C",
        text: "Direct Lithium Extraction technology has proven ineffective at preventing water depletion in hypersaline salt flats.",
        isCorrect: false,
        flaw: "Unsupported Negative Claim"
      },
      {
        letter: "D",
        text: "Electric vehicle manufacturers are transitioning entirely to cobalt batteries to avoid purchasing lithium from South American state enterprises.",
        isCorrect: false,
        flaw: "Out-of-Scope Fabrication"
      }
    ],
    correctExplanation: `
      <strong>Option A is correct.</strong> The passage discusses how host governments in the Lithium Triangle are replacing traditional concessions with public-private ventures requiring tech sharing and water recycling. The text highlights their dual motivation: environmental protection (aquifer preservation) and economic capture (downstream value chain). Option A concisely captures both aspects.
    `,
    distractorExplanations: [
      {
        letter: "B",
        explanation: "<strong>Option B is incorrect (Extreme):</strong> Mining firms have expressed concern, but the text never states they have completely halted operations."
      },
      {
        letter: "C",
        explanation: "<strong>Option C is incorrect (Unsupported):</strong> The passage describes DLE technology transfer as a regulatory mandate, not as an ineffective failure."
      },
      {
        letter: "D",
        explanation: "<strong>Option D is incorrect (Fabrication):</strong> EV battery chemistry switching is not mentioned anywhere in the passage."
      }
    ],
    internationalTip: `
      <strong>Dual-Goal Summaries:</strong> When a passage highlights two distinct rationales for a policy (e.g. <em>ecological + economic</em>), the correct main idea must encapsulate both prongs rather than over-focusing on just one.
    `
  },

  // ==========================================
  // QUESTION 14 (Key: C) - Command of Evidence (Textual)
  // ==========================================
  {
    id: 14,
    skill: "Command of Evidence (Textual)",
    topic: "Transboundary Hydrology: Mekong River Dam Cascade & Silt Retention",
    wordCount: 138,
    passageHtml: `
      <div class="passage-title-tag">
        <span>Transboundary River Basin Ecology</span>
        <span>Word Count: 138 words</span>
      </div>
      <div class="passage-text">
        <p>The construction of extensive hydropower mega-dams along the upper reaches of transboundary river systems often sparks geopolitical tension between upstream and downstream riparian states. Hydrologists studying the lower Mekong River basin have argued that the most severe long-term threat posed by upstream reservoirs is not seasonal water volume reduction, but the trapping of mineral-rich sediment. Because nutrient-dense alluvial silt is retained behind upstream dam walls, downstream floodplains and agricultural delta regions experience severe sediment starvation, accelerating coastal erosion and destabilizing agricultural soil fertility. If sediment blockage continues at current rates, agricultural yields in downstream rice-producing deltas are projected to drop dramatically, irrespective of whether overall river discharge volumes are artificially maintained through managed reservoir releases.</p>
      </div>
    `,
    prompt: "Which finding from a hydrological study, if true, would most directly support the hydrologists' argument?",
    options: [
      {
        letter: "A",
        text: "Upstream hydropower facilities generated record levels of electricity during monsoon seasons by releasing maximum water volume through spillway gates.",
        isCorrect: false,
        flaw: "Focuses on Upstream Power, Irrelevant to Downstream Silt Crop Damage"
      },
      {
        letter: "B",
        text: "Sediment trapping behind river dams can be mitigated by dredging gravel beds near municipal water treatment plants.",
        isCorrect: false,
        flaw: "Engineering Solution, Does Not Support the Threat Argument"
      },
      {
        letter: "C",
        text: "Rice crop yields in the lower Mekong Delta declined by 28% over a five-year period during which annual river water volume remained at historic averages but sediment concentration dropped by 65%.",
        isCorrect: true
      },
      {
        letter: "D",
        text: "Downstream riparian states have expanded their installation of solar panels along irrigation canal banks to supplement electricity grids.",
        isCorrect: false,
        flaw: "Completely Unrelated Subject"
      }
    ],
    correctExplanation: `
      <strong>Option C is correct.</strong> The hydrologists' specific claim is that *sediment starvation*—not water volume reduction—is the driver of downstream agricultural yield decline. Option C isolates these exact variables: water volume was kept constant at historical norms while sediment dropped by 65%, leading to a 28% crop yield drop. This provides direct empirical proof.
    `,
    distractorExplanations: [
      {
        letter: "A",
        explanation: "<strong>Option A is incorrect (Irrelevant Focus):</strong> Upstream electricity output does not address downstream agricultural soil degradation."
      },
      {
        letter: "B",
        explanation: "<strong>Option B is incorrect (Solution Proposal):</strong> Discussing dredging does not prove the specific causal link between sediment loss and crop yield drops."
      },
      {
        letter: "D",
        explanation: "<strong>Option D is incorrect (Unrelated):</strong> Solar panel installations on canals are irrelevant to the sediment-yield hypothesis."
      }
    ],
    internationalTip: `
      <strong>Controlled Variable Evidence:</strong> On the SAT, the strongest evidence for a causal claim holds the alternative variable constant (here, <em>water volume remained average</em>) while varying the target variable (<em>sediment dropped</em>).
    `
  },

  // ==========================================
  // QUESTION 15 (Key: B) - Command of Evidence (Quantitative)
  // ==========================================
  {
    id: 15,
    skill: "Command of Evidence (Quantitative)",
    topic: "Sustainable Finance: Sovereign Green Bonds, Coupon Spreads & Deforestation",
    wordCount: 90,
    passageHtml: `
      <div class="passage-title-tag">
        <span>Sustainable Finance & Ecology</span>
        <span>Word Count: 90 words + Data Table</span>
      </div>
      <div class="passage-text">
        <p>Sovereign sustainability-linked bonds (SLBs) tie sovereign borrowing costs directly to verifiable environmental performance targets. Under these bond contracts, governments enjoy a lower interest rate coupon spread if they meet strict forest conservation benchmarks, but face a financial penalty—an upward interest rate coupon step-up—if deforestation exceeds contractual thresholds. Sustainable finance analysts examined data from four tropical nations to evaluate bond market discipline.</p>
      </div>

      <div class="data-table-container">
        <div class="table-caption">
          Table: Sovereign SLB Issuance, Deforestation Targets, and Coupon Spread Adjustments (2024)
        </div>
        <table class="sat-table" aria-label="Sovereign Green Bond Data Table">
          <thead>
            <tr>
              <th scope="col">Nation</th>
              <th scope="col">Target Max Deforestation Rate (%)</th>
              <th scope="col">Actual Verified Deforestation Rate (%)</th>
              <th scope="col">Target Met?</th>
              <th scope="col">Final Coupon Spread Adjustment (basis points)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Nation Alpha</strong></td>
              <td>1.2%</td>
              <td class="num-cell cell-pos">0.8%</td>
              <td>Yes</td>
              <td class="num-cell cell-pos">-25 bps (Discount)</td>
            </tr>
            <tr>
              <td><strong>Nation Beta</strong></td>
              <td>2.0%</td>
              <td class="num-cell cell-pos">1.7%</td>
              <td>Yes</td>
              <td class="num-cell cell-pos">-15 bps (Discount)</td>
            </tr>
            <tr>
              <td><strong>Nation Gamma</strong></td>
              <td>1.5%</td>
              <td class="num-cell cell-neg">2.3%</td>
              <td>No</td>
              <td class="num-cell cell-neg">+40 bps (Penalty)</td>
            </tr>
            <tr>
              <td><strong>Nation Delta</strong></td>
              <td>0.9%</td>
              <td class="num-cell cell-neg">1.8%</td>
              <td>No</td>
              <td class="num-cell cell-neg">+50 bps (Penalty)</td>
            </tr>
          </tbody>
        </table>
      </div>
    `,
    prompt: "Which choice best uses data from the table to illustrate how the sustainability-linked bond mechanisms rewarded conservation success and penalized target violations?",
    options: [
      {
        letter: "A",
        text: "Nation Gamma met its environmental target by restricting deforestation to 2.3%, resulting in a -15 bps coupon discount.",
        isCorrect: false,
        flaw: "Direct Contradiction of Table (Target was 1.5%, Not Met, +40 bps penalty)"
      },
      {
        letter: "B",
        text: "Nation Alpha achieved an actual deforestation rate (0.8%) well below its 1.2% target and received a -25 bps coupon discount, whereas Nation Delta exceeded its 0.9% target by 0.9 percentage points (1.8%) and received the largest coupon penalty (+50 bps).",
        isCorrect: true
      },
      {
        letter: "C",
        text: "Nation Beta had an actual deforestation rate of 1.7% and received a +40 bps penalty despite meeting its target.",
        isCorrect: false,
        flaw: "Factual Error (Nation Beta received -15 bps discount)"
      },
      {
        letter: "D",
        text: "Nation Delta had a lower target deforestation rate (0.9%) than Nation Alpha (1.2%), so Nation Delta received a coupon discount of -25 bps.",
        isCorrect: false,
        flaw: "Factual Error (Nation Delta did not meet target and got +50 bps penalty)"
      }
    ],
    correctExplanation: `
      <strong>Option B is correct.</strong> Option B accurately presents both sides of the mechanism: Nation Alpha beat its target (0.8% vs 1.2%) and gained a 25 bps coupon discount, while Nation Delta missed its target (1.8% vs 0.9%) and suffered the largest penalty (+50 bps). All cited figures match the table exactly.
    `,
    distractorExplanations: [
      {
        letter: "A",
        explanation: "<strong>Option A is incorrect (Contradiction):</strong> Nation Gamma missed its target (2.3% actual vs 1.5% target) and incurred a +40 bps penalty, not a discount."
      },
      {
        letter: "C",
        explanation: "<strong>Option C is incorrect (Factual Error):</strong> Nation Beta received a -15 bps discount, not a +40 bps penalty."
      },
      {
        letter: "D",
        explanation: "<strong>Option D is incorrect (Factual Falsehood):</strong> Nation Delta received a +50 bps penalty, not a discount."
      }
    ],
    internationalTip: `
      <strong>Sign & Unit Verification:</strong> Look out for signs (+ vs -) and qualitative status (Discount vs Penalty). Ensure that positive performance yields negative spreads (discounts) and vice versa as defined by the passage.
    `
  },

  // ==========================================
  // QUESTION 16 (Key: D) - Inferences
  // ==========================================
  {
    id: 16,
    skill: "Inferences",
    topic: "Cross-Border E-Commerce: De Minimis Customs Exemptions & Tariff Arbitrage",
    wordCount: 131,
    passageHtml: `
      <div class="passage-title-tag">
        <span>Customs Regulations & International Trade</span>
        <span>Word Count: 131 words</span>
      </div>
      <div class="passage-text">
        <p>The astronomical expansion of direct-to-consumer cross-border e-commerce platforms has been heavily facilitated by "de minimis" customs exemptions—statutory provisions that allow imported parcels below a certain monetary value threshold to enter destination markets duty-free and without formal customs inspection paperwork. Traditional domestic retailers argue that foreign e-commerce vendors exploit these rules to systematically bypass import duties, product safety verifications, and value-added taxes that domestic brick-and-mortar stores are legally mandated to pay. In response, several major economic jurisdictions have proposed either drastically lowering or completely eliminating their de minimis exemption thresholds. If these regulatory reforms are enacted, international e-commerce platforms that rely on shipping low-value individual parcels directly from foreign warehouses will most likely ______</p>
      </div>
    `,
    prompt: "Which choice most logically completes the text?",
    options: [
      {
        letter: "A",
        text: "experience an immediate surge in profit margins as destination customs agencies subsidize all international parcel delivery fees.",
        isCorrect: false,
        flaw: "Contradictory / Absurd Assumption"
      },
      {
        letter: "B",
        text: "permanently convert all foreign manufacturing plants into domestic retail brick-and-mortar department stores.",
        isCorrect: false,
        flaw: "Extreme / Unrealistic Leap"
      },
      {
        letter: "C",
        text: "eliminate all product safety testing requirements for international maritime container cargo.",
        isCorrect: false,
        flaw: "Unrelated Subject & False Policy Direction"
      },
      {
        letter: "D",
        text: "face higher per-package compliance costs and customs clearance delays that reduce their price advantage over domestic retailers.",
        isCorrect: true
      }
    ],
    correctExplanation: `
      <strong>Option D is correct.</strong> The passage explains that de minimis rules currently let foreign e-commerce firms avoid duties, paperwork, and taxes, giving them a competitive edge. Removing or lowering these thresholds will subject individual parcels to duties and formal customs clearance, increasing compliance costs and delivery times. This reduces their pricing advantage over domestic stores. Option D logically follows.
    `,
    distractorExplanations: [
      {
        letter: "A",
        explanation: "<strong>Option A is incorrect (Contradictory):</strong> Removing an exemption increases costs; customs agencies do not subsidize delivery fees."
      },
      {
        letter: "B",
        explanation: "<strong>Option B is incorrect (Extreme):</strong> E-commerce platforms will adapt their logistics models, not convert all foreign factories into physical department stores."
      },
      {
        letter: "C",
        explanation: "<strong>Option C is incorrect (Irrelevant):</strong> Customs reform tightens rules on individual parcels; it does not eliminate safety rules on container freight."
      }
    ],
    internationalTip: `
      <strong>Economic Impact Inference:</strong> If a tax loophole is closed, the immediate logical effect on the beneficiaries is increased costs, diminished profit margins, and reduced competitive price advantages.
    `
  },

  // ==========================================
  // QUESTION 17 (Key: A) - Central Ideas & Details
  // ==========================================
  {
    id: 17,
    skill: "Central Ideas and Details",
    topic: "Resource Economics: Dutch Disease & Manufacturing De-industrialization",
    wordCount: 124,
    passageHtml: `
      <div class="passage-title-tag">
        <span>Macroeconomics & Resource Windfalls</span>
        <span>Word Count: 124 words</span>
      </div>
      <div class="passage-text">
        <p>The discovery and commercialization of massive offshore hydrocarbons frequently triggers an economic syndrome known as "Dutch Disease." As large volumes of petroleum or natural gas are exported, the substantial influx of foreign currency causes the recipient country's real exchange rate to appreciate sharply. While this currency strength makes imported consumer goods cheaper, it simultaneously renders the nation's non-resource export sectors—such as agriculture and precision manufacturing—uncompetitive on global markets. Furthermore, capital and skilled labor are rapidly siphoned out of traditional industrial sectors into the extractive boom economy. Unless sovereign governments implement sovereign wealth funds to sterilize foreign capital inflows and invest heavily in non-resource productivity, resource windfalls can paradoxically induce premature de-industrialization across the broader domestic economy.</p>
      </div>
    `,
    prompt: "Which choice best summarizes the central idea of the text?",
    options: [
      {
        letter: "A",
        text: "Resource export booms can paradoxically harm non-resource industrial sectors through currency appreciation and resource reallocation unless counteracted by deliberate policy measures.",
        isCorrect: true
      },
      {
        letter: "B",
        text: "Offshore oil and gas discoveries invariably lead to complete sovereign debt default across all developing nations.",
        isCorrect: false,
        flaw: "Extreme / Unsupported Claim"
      },
      {
        letter: "C",
        text: "Sovereign wealth funds have proven ineffective at managing foreign capital inflows in oil-rich economies.",
        isCorrect: false,
        flaw: "Directly Contradicts Passage Recommendation"
      },
      {
        letter: "D",
        text: "Traditional precision manufacturing sectors naturally expand whenever a domestic currency appreciates in value.",
        isCorrect: false,
        flaw: "Economic Contradiction of Text"
      }
    ],
    correctExplanation: `
      <strong>Option A is correct.</strong> The passage outlines the classic mechanism of Dutch Disease: hydrocarbon booms lead to exchange rate appreciation and labor/capital reallocation, hurting agriculture and manufacturing unless sovereign wealth funds and productivity investments are deployed. Option A cleanly synthesizes this central concept.
    `,
    distractorExplanations: [
      {
        letter: "B",
        explanation: "<strong>Option B is incorrect (Extreme):</strong> The text discusses manufacturing competitiveness and premature de-industrialization, not sovereign debt defaults."
      },
      {
        letter: "C",
        explanation: "<strong>Option C is incorrect (Contradiction):</strong> The author explicitly recommends sovereign wealth funds as a key solution to sterilize capital inflows."
      },
      {
        letter: "D",
        explanation: "<strong>Option D is incorrect (Opposite):</strong> Currency appreciation makes non-resource manufacturing less competitive, shrinking the sector rather than expanding it."
      }
    ],
    internationalTip: `
      <strong>Paradoxical Concepts in Economics:</strong> Passages explaining concepts like Dutch Disease emphasize a *paradox* (resource wealth causing manufacturing decline). The correct answer will accurately retain the paradoxical nature of the dynamic.
    `
  },

  // ==========================================
  // QUESTION 18 (Key: C) - Command of Evidence (Textual)
  // ==========================================
  {
    id: 18,
    skill: "Command of Evidence (Textual)",
    topic: "Carbon Markets: Article 6 of Paris Agreement & Satellite Forest Baselines",
    wordCount: 133,
    passageHtml: `
      <div class="passage-title-tag">
        <span>Climate Governance & Geospatial Technology</span>
        <span>Word Count: 133 words</span>
      </div>
      <div class="passage-text">
        <p>Under Article 6.4 of the Paris Agreement, international carbon credit trading requires stringent verification of "additionality"—the requirement that financed emissions reductions or carbon removals would not have occurred in the absence of carbon market revenues. Environmental economists have raised concerns that many legacy forestry offset credits were generated using inflated counterfactual baselines, where project developers exaggerated projected future deforestation rates in order to claim credit for trees that were never under genuine threat of logging. Modern independent audits employing multi-spectral satellite radar and synthetic aperture radar (SAR) can establish rigorous, dynamic empirical control baselines by comparing protected project zones with adjacent unprotected land tracts possessing identical topographic slope, road proximity, and agricultural soil suitability.</p>
      </div>
    `,
    prompt: "Which finding from a satellite auditing study, if true, would most directly support the economists' concern regarding inflated baselines in legacy forestry credits?",
    options: [
      {
        letter: "A",
        text: "Multi-spectral satellite sensors require calibration adjustments when imaging dense tropical forest canopies during heavy cloud cover.",
        isCorrect: false,
        flaw: "Technical Sensor Detail, Does Not Address Offset Baseline Inflation"
      },
      {
        letter: "B",
        text: "Forestry offset credits traded under Article 6.4 commanded a higher average price per metric ton of carbon than industrial methane abatement credits.",
        isCorrect: false,
        flaw: "Market Pricing Metric, Irrelevant to Environmental Baseline Accuracy"
      },
      {
        letter: "C",
        text: "Adjacent unprotected control parcels with matching topography and road access experienced an actual deforestation rate of only 0.2% per year, whereas the project developer’s baseline model had projected a 4.5% annual loss.",
        isCorrect: true
      },
      {
        letter: "D",
        text: "Local communities situated inside the protected project zone expanded agroforestry cooperatives with funding from international carbon revenues.",
        isCorrect: false,
        flaw: "Positive Project Outcome, Does Not Test Counterfactual Baseline Claim"
      }
    ],
    correctExplanation: `
      <strong>Option C is correct.</strong> The economists' concern is that developers used inflated counterfactual deforestation baselines to create unearned credits. Option C provides empirical proof: while developers predicted 4.5% deforestation without the project, nearly identical adjacent unprotected land only experienced 0.2% deforestation. This huge disparity directly validates the baseline exaggeration concern.
    `,
    distractorExplanations: [
      {
        letter: "A",
        explanation: "<strong>Option A is incorrect (Sensor Limitation):</strong> A note on sensor calibration in cloud cover does not validate whether project developers exaggerated deforestation baselines."
      },
      {
        letter: "B",
        explanation: "<strong>Option B is incorrect (Price Difference):</strong> Credit prices on markets do not provide evidence regarding the ecological validity of baselines."
      },
      {
        letter: "D",
        explanation: "<strong>Option D is incorrect (Unrelated):</strong> Agroforestry development inside the project area does not evaluate the accuracy of the counterfactual baseline."
      }
    ],
    internationalTip: `
      <strong>Quantitative Comparison in Textual Evidence:</strong> A textual evidence question can present numerical findings in its options. Verify that the comparison specifically isolates the baseline projection vs empirical reality.
    `
  },

  // ==========================================
  // QUESTION 19 (Key: B) - Command of Evidence (Quantitative)
  // ==========================================
  {
    id: 19,
    skill: "Command of Evidence (Quantitative)",
    topic: "Resource Economics: Agricultural Virtual Water Footprint vs Export Revenue",
    wordCount: 88,
    passageHtml: `
      <div class="passage-title-tag">
        <span>Hydrology & Agricultural Trade</span>
        <span>Word Count: 88 words + Data Table</span>
      </div>
      <div class="passage-text">
        <p>In arid and semi-arid economies facing severe aquifer depletion, agricultural trade economists analyze "virtual water exports"—the volume of freshwater consumed per kilogram of agricultural produce shipped abroad. Economists evaluated whether shifting crop production from high-water-intensity crops to high-value horticulture improved the "economic water productivity" (measured in export revenue generated per cubic meter of consumed water, or USD/m<sup>3</sup>) across four regional farming basins.</p>
      </div>

      <div class="data-table-container">
        <div class="table-caption">
          Table: Agricultural Crop Mix, Virtual Water Intensity, and Export Revenue Productivity (2024)
        </div>
        <table class="sat-table" aria-label="Virtual Water and Export Revenue Data Table">
          <thead>
            <tr>
              <th scope="col">Agricultural Basin</th>
              <th scope="col">Dominant Export Crop</th>
              <th scope="col">Water Consumption Intensity (m<sup>3</sup>/ton)</th>
              <th scope="col">Export Value ($/ton)</th>
              <th scope="col">Economic Water Productivity ($/m<sup>3</sup>)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Basin 1</strong></td>
              <td>Greenhouse Berries & Herbs</td>
              <td class="num-cell cell-pos">350</td>
              <td class="num-cell cell-pos">$4,200</td>
              <td class="num-cell cell-pos">$12.00</td>
            </tr>
            <tr>
              <td><strong>Basin 2</strong></td>
              <td>Table Grapes & Citrus</td>
              <td class="num-cell">600</td>
              <td class="num-cell">$2,400</td>
              <td class="num-cell">$4.00</td>
            </tr>
            <tr>
              <td><strong>Basin 3</strong></td>
              <td>Raw Cotton Linters</td>
              <td class="num-cell cell-neg">2,800</td>
              <td class="num-cell">$1,960</td>
              <td class="num-cell cell-neg">$0.70</td>
            </tr>
            <tr>
              <td><strong>Basin 4</strong></td>
              <td>Flood-Irrigated Alfalfa</td>
              <td class="num-cell cell-neg">1,500</td>
              <td class="num-cell cell-neg">$300</td>
              <td class="num-cell cell-neg">$0.20</td>
            </tr>
          </tbody>
        </table>
      </div>
    `,
    prompt: "Which choice best uses data from the table to support the assertion that high-value horticulture generates substantially greater export revenue per unit of water consumed than traditional forage and fiber crops?",
    options: [
      {
        letter: "A",
        text: "Basin 3 required 2,800 m3 of water per ton of raw cotton, resulting in higher economic water productivity than Basin 2's table grape harvest.",
        isCorrect: false,
        flaw: "Direct Contradiction ($0.70 is lower than $4.00)"
      },
      {
        letter: "B",
        text: "Basin 1's greenhouse berry crop yielded $12.00 in export revenue per cubic meter of water, which is sixty times higher than the $0.20 per cubic meter generated by Basin 4's flood-irrigated alfalfa crop.",
        isCorrect: true
      },
      {
        letter: "C",
        text: "Basin 4 generated $300 per ton in export value, which represents a higher economic water productivity rate than Basin 1's $4,200 per ton export value.",
        isCorrect: false,
        flaw: "Mathematical & Logical Contradiction"
      },
      {
        letter: "D",
        text: "Basin 2 and Basin 3 consumed identical volumes of water per ton of crop output, resulting in equal export revenues per cubic meter.",
        isCorrect: false,
        flaw: "Factual Error (600 m3 vs 2,800 m3)"
      }
    ],
    correctExplanation: `
      <strong>Option B is correct.</strong> The assertion compares high-value horticulture (Basin 1: berries at $12.00/m<sup>3</sup>) with forage/fiber crops (Basin 4: alfalfa at $0.20/m<sup>3</sup>; Basin 3: cotton at $0.70/m<sup>3</sup>). Calculating $12.00 / 0.20 = 60 confirms that Basin 1 generated sixty times more export value per m<sup>3</sup> of water. All data points in Option B are accurate.
    `,
    distractorExplanations: [
      {
        letter: "A",
        explanation: "<strong>Option A is incorrect (Contradiction):</strong> Basin 3 generated $0.70/m<sup>3</sup>, which is lower, not higher, than Basin 2's $4.00/m<sup>3</sup>."
      },
      {
        letter: "C",
        explanation: "<strong>Option C is incorrect (Absurd):</strong> $300/ton ($0.20/m<sup>3</sup>) is vastly smaller than $4,200/ton ($12.00/m<sup>3</sup>)."
      },
      {
        letter: "D",
        explanation: "<strong>Option D is incorrect (Factual Error):</strong> Basin 2 consumed 600 m<sup>3</sup>/ton while Basin 3 consumed 2,800 m<sup>3</sup>/ton; they are not identical."
      }
    ],
    internationalTip: `
      <strong>Multiplicative Comparisons:</strong> SAT quantitative options frequently calculate comparative multipliers (e.g. <em>sixty times higher</em>). Quickly verify the arithmetic: $12.00 \div 0.20 = 60$.
    `
  },

  // ==========================================
  // QUESTION 20 (Key: D) - Inferences
  // ==========================================
  {
    id: 20,
    skill: "Inferences",
    topic: "Development Economics: Parametric Climate Insurance & Microfinance Resilience",
    wordCount: 130,
    passageHtml: `
      <div class="passage-title-tag">
        <span>Development Economics & Climate Finance</span>
        <span>Word Count: 130 words</span>
      </div>
      <div class="passage-text">
        <p>In rural developing regions, standard microfinance institutions (MFIs) suffer high default rates when severe localized droughts or floods destroy the agricultural livelihoods of entire communities simultaneously. Because traditional indemnity-based crop insurance requires on-site loss assessments that are prohibitively expensive and time-consuming for smallholders, insurers have introduced "parametric insurance"—which automatically triggers payouts based on objective satellite weather data (e.g., rainfall levels dropping below a predetermined millimeter index). When microcredit loans are bundled directly with parametric insurance, loan repayments are automatically covered by the insurer during verified climate disasters. Development economists analyzing pilot programs in South Asia observe that this bundling protects MFIs from insolvency while preventing borrowing households from resorting to catastrophic distress asset sales. Therefore, integrating parametric insurance into rural lending portfolios is likely to ______</p>
      </div>
    `,
    prompt: "Which choice most logically completes the text?",
    options: [
      {
        letter: "A",
        text: "eliminate all weather-related agricultural losses by preventing droughts and floods from occurring in participating rural regions.",
        isCorrect: false,
        flaw: "Absurd Physical Impossibility"
      },
      {
        letter: "B",
        text: "force smallholder farmers to permanently abandon crop cultivation in favor of satellite weather monitoring employment.",
        isCorrect: false,
        flaw: "Unwarranted Out-of-Scope Leap"
      },
      {
        letter: "C",
        text: "increase default rates on agricultural loans by encouraging borrowing households to deliberately destroy their own crops.",
        isCorrect: false,
        flaw: "Direct Contradiction of Text's Logic"
      },
      {
        letter: "D",
        text: "enhance the financial stability of microfinance institutions while preserving the productive asset bases of vulnerable farming households during extreme weather events.",
        isCorrect: true
      }
    ],
    correctExplanation: `
      <strong>Option D is correct.</strong> The passage establishes two positive outcomes of bundling microcredit with parametric insurance: (1) MFIs avoid catastrophic default/insolvency, and (2) farming households avoid distress asset sales during extreme weather. Option D directly synthesizes these dual benefits to complete the argument.
    `,
    distractorExplanations: [
      {
        letter: "A",
        explanation: "<strong>Option A is incorrect (Absurd):</strong> Financial insurance pays claims during disasters; it cannot physically prevent weather events like droughts or floods."
      },
      {
        letter: "B",
        explanation: "<strong>Option B is incorrect (Extreme Leap):</strong> Farmers receive payouts during disasters; they do not abandon farming to become satellite technicians."
      },
      {
        letter: "C",
        explanation: "<strong>Option C is incorrect (Contradictory):</strong> Payouts are triggered by objective satellite rainfall data, not manual crop damage, and the text states it reduces defaults."
      }
    ],
    internationalTip: `
      <strong>Dual-Benefit Synthesis:</strong> In conclusion sentences for policy/program analyses, look for options that unite the institutional benefit (MFI balance sheet) with the beneficiary benefit (household asset protection).
    `
  },

  // ==========================================
  // QUESTION 21 (Key: A) - Central Ideas & Details
  // ==========================================
  {
    id: 21,
    skill: "Central Ideas and Details",
    topic: "International Trade & Intellectual Property: TRIPS Waivers & Clean Tech",
    wordCount: 126,
    passageHtml: `
      <div class="passage-title-tag">
        <span>Global Trade & Clean Energy Technology</span>
        <span>Word Count: 126 words</span>
      </div>
      <div class="passage-text">
        <p>Under the WTO Agreement on Trade-Related Aspects of Intellectual Property Rights (TRIPS), patent protections grant technology developers exclusive commercial manufacturing monopolies, typically lasting twenty years. Developing nations have advocated for temporary TRIPS waivers on essential clean-energy technologies—such as advanced perovskite solar cell formulations and grid-scale battery chemistries—arguing that patent licensing fees artificially inflate decarbonization costs for capital-constrained emerging economies. Advanced industrial nations and private patent holders contend, however, that waiving intellectual property rights would undermine the financial incentives necessary for venture capital to fund high-risk climate hardware research. They maintain that voluntary patent pools and concessional climate finance, rather than compulsory IP waivers, represent the most sustainable mechanism to accelerate global technology dissemination without chilling future private sector innovation.</p>
      </div>
    `,
    prompt: "Which choice best describes the central debate outlined in the text?",
    options: [
      {
        letter: "A",
        text: "Whether relaxing intellectual property rights on green technologies would accelerate clean energy adoption in developing nations or undermine incentives for future innovation.",
        isCorrect: true
      },
      {
        letter: "B",
        text: "Whether perovskite solar cells are technically superior to standard silicon photovoltaic panels in equatorial climates.",
        isCorrect: false,
        flaw: "Technical Engineering Detail, Irrelevant to Policy Debate"
      },
      {
        letter: "C",
        text: "Whether the WTO should permanently abolish all international patent protections across every industrial manufacturing sector.",
        isCorrect: false,
        flaw: "Extreme Exaggeration of Scope"
      },
      {
        letter: "D",
        text: "Whether developing countries should completely cease purchasing clean technology from advanced-economy suppliers.",
        isCorrect: false,
        flaw: "Fabrication of Trade Stoppage"
      }
    ],
    correctExplanation: `
      <strong>Option A is correct.</strong> The passage presents two sides of a policy debate: developing nations argue that TRIPS waivers lower costs and speed up clean energy adoption, while advanced nations argue that waivers would erode private investment incentives for ongoing R&D. Option A balances both sides accurately.
    `,
    distractorExplanations: [
      {
        letter: "B",
        explanation: "<strong>Option B is incorrect (Technical Detail):</strong> Perovskite cells are mentioned only as an example of patented tech, not as a technical performance debate."
      },
      {
        letter: "C",
        explanation: "<strong>Option C is incorrect (Extreme):</strong> The debate concerns temporary waivers on clean-energy tech, not abolishing all global patents permanently."
      },
      {
        letter: "D",
        explanation: "<strong>Option D is incorrect (Fabrication):</strong> The text does not suggest developing countries will stop buying technology."
      }
    ],
    internationalTip: `
      <strong>Debate Framing:</strong> Look for 'Whether X or Y' structures that fairly capture both opposing viewpoints without tilting toward one side or inflating the dispute to an extreme.
    `
  },

  // ==========================================
  // QUESTION 22 (Key: C) - Command of Evidence (Textual)
  // ==========================================
  {
    id: 22,
    skill: "Command of Evidence (Textual)",
    topic: "Maritime Chokepoints & Geopolitics: Suez Canal Disruptions & Cape Routing",
    wordCount: 136,
    passageHtml: `
      <div class="passage-title-tag">
        <span>Global Supply Chains & Maritime Geopolitics</span>
        <span>Word Count: 136 words</span>
      </div>
      <div class="passage-text">
        <p>Geopolitical hostilities in the Red Sea have forced commercial container shipping lines to divert maritime traffic away from the Suez Canal, routing vessels around Africa's Cape of Good Hope instead. Maritime logistics analysts have noted that this detour extends the Asia-to-Europe transit distance by approximately 3,500 nautical miles and adds 10 to 14 days to round-trip voyages. Analysts argue that this prolonged route does not merely increase bunker fuel consumption and freight rates; it effectively absorbs global container vessel capacity. Because ships spend significantly longer at sea for each cargo delivery cycle, the effective worldwide supply of active shipping tonnage is constrained, creating acute container equipment shortages at Asian origin ports even in the absence of any physical reduction in the total number of operational ships globally.</p>
      </div>
    `,
    prompt: "Which finding from a maritime transport index, if true, would most directly support the analysts' argument regarding global shipping capacity absorption?",
    options: [
      {
        letter: "A",
        text: "Vessels circumnavigating the Cape of Good Hope encountered severe winter weather that caused superficial hull damage to several bulk ore carriers.",
        isCorrect: false,
        flaw: "Incidental Weather Damage, Irrelevant to Capacity Absorption"
      },
      {
        letter: "B",
        text: "Suez Canal toll revenues declined by more than 50% following the outbreak of regional maritime conflict.",
        isCorrect: false,
        flaw: "Canal Revenue Metric, Does Not Prove Global Fleet Absorption"
      },
      {
        letter: "C",
        text: "Global container spot freight rates increased by 180% and average container dwell times at Asian export hubs rose sharply despite a 4% increase in the total number of active cargo vessels worldwide.",
        isCorrect: true
      },
      {
        letter: "D",
        text: "Several European ports upgraded their automated container cranes to improve offloading speeds for domestic trucks.",
        isCorrect: false,
        flaw: "Local Port Upgrade, Irrelevant to Global Tonnage Constraint"
      }
    ],
    correctExplanation: `
      <strong>Option C is correct.</strong> The analysts' core thesis is that longer voyage times absorb effective shipping capacity and cause container shortages at origin ports *even though the physical fleet has not shrunk*. Option C confirms this paradox: freight rates surged and container dwell times rose despite an *increase* (+4%) in active vessels worldwide. This directly proves that route elongation absorbed effective fleet supply.
    `,
    distractorExplanations: [
      {
        letter: "A",
        explanation: "<strong>Option A is incorrect (Irrelevant):</strong> Weather-related hull damage does not prove the economic concept of capacity absorption."
      },
      {
        letter: "B",
        explanation: "<strong>Option B is incorrect (Symptom, Not Proof):</strong> Suez toll revenue drops confirm ships diverted, but do not prove that diversion absorbed global capacity."
      },
      {
        letter: "D",
        explanation: "<strong>Option D is incorrect (Unrelated):</strong> European crane upgrades do not support the global fleet capacity constraint argument."
      }
    ],
    internationalTip: `
      <strong>Counter-Intuitive Data Verification:</strong> Evidence supporting a capacity absorption thesis shows tight market conditions (rising freight rates/shortages) occurring simultaneously with rising physical supply (more ships).
    `
  },

  // ==========================================
  // QUESTION 23 (Key: B) - Command of Evidence (Quantitative)
  // ==========================================
  {
    id: 23,
    skill: "Command of Evidence (Quantitative)",
    topic: "Circular Economy: EV Battery Hydrometallurgical Recycling vs Virgin Mining",
    wordCount: 85,
    passageHtml: `
      <div class="passage-title-tag">
        <span>Materials Science & Resource Economics</span>
        <span>Word Count: 85 words + Data Table</span>
      </div>
      <div class="passage-text">
        <p>Closed-loop recycling of end-of-life lithium-ion batteries via hydrometallurgical processing has been promoted as a low-emission alternative to primary nickel and cobalt mining. Materials scientists evaluated the greenhouse gas emissions intensity (measured in kg CO<sub>2</sub>e per kg of refined cathode material) across four industrial refining pathways to determine which method achieved the lowest carbon footprint.</p>
      </div>

      <div class="data-table-container">
        <div class="table-caption">
          Table: Battery Cathode Metal Refining Pathways and Lifecycle Emissions (2024)
        </div>
        <table class="sat-table" aria-label="Battery Recycling Emissions Data Table">
          <thead>
            <tr>
              <th scope="col">Refining Pathway</th>
              <th scope="col">Primary Feedstock Source</th>
              <th scope="col">Energy Source</th>
              <th scope="col">Emissions Intensity (kg CO<sub>2</sub>e / kg metal)</th>
              <th scope="col">Direct Freshwater Consumption (L / kg metal)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Pathway 1</strong></td>
              <td>Closed-Loop Black Mass Scrap</td>
              <td>Renewable Hydroelectric</td>
              <td class="num-cell cell-pos">3.2</td>
              <td class="num-cell cell-pos">14</td>
            </tr>
            <tr>
              <td><strong>Pathway 2</strong></td>
              <td>Closed-Loop Black Mass Scrap</td>
              <td>Grid Electricity (Average Mix)</td>
              <td class="num-cell cell-pos">6.8</td>
              <td class="num-cell">18</td>
            </tr>
            <tr>
              <td><strong>Pathway 3</strong></td>
              <td>Virgin Laterite Nickel Ore (HPAL)</td>
              <td>Captive Coal-Fired Steam</td>
              <td class="num-cell cell-neg">24.5</td>
              <td class="num-cell cell-neg">85</td>
            </tr>
            <tr>
              <td><strong>Pathway 4</strong></td>
              <td>Virgin Sulfide Cobalt Ore</td>
              <td>Heavy Fuel Oil Thermal</td>
              <td class="num-cell cell-neg">18.2</td>
              <td class="num-cell cell-neg">62</td>
            </tr>
          </tbody>
        </table>
      </div>
    `,
    prompt: "Which choice best uses data from the table to support the conclusion that hydrometallurgical recycling using renewable energy achieves the greatest reduction in lifecycle emissions compared to primary mineral refining?",
    options: [
      {
        letter: "A",
        text: "Pathway 2 had an emissions intensity of 6.8 kg CO2e/kg and consumed 18 liters of water, which was higher than Pathway 3's emissions intensity of 24.5 kg CO2e/kg.",
        isCorrect: false,
        flaw: "Direct Mathematical Contradiction (6.8 is lower than 24.5)"
      },
      {
        letter: "B",
        text: "Pathway 1 (black mass scrap powered by hydroelectricity) generated only 3.2 kg CO2e/kg of metal, which represents an 87% reduction in emissions intensity compared to Pathway 3's coal-fired virgin laterite ore refining (24.5 kg CO2e/kg).",
        isCorrect: true
      },
      {
        letter: "C",
        text: "Pathway 3 used captive coal-fired steam to refine virgin sulfide cobalt ore, generating 18.2 kg CO2e/kg of refined metal.",
        isCorrect: false,
        flaw: "Data Misattribution (Pathway 3 refines Laterite Nickel at 24.5 kg CO2e)"
      },
      {
        letter: "D",
        text: "Pathway 4 achieved a lower emissions intensity (18.2 kg CO2e/kg) than Pathway 1 (3.2 kg CO2e/kg) due to heavy fuel oil thermal combustion.",
        isCorrect: false,
        flaw: "Contradiction (18.2 is higher than 3.2)"
      }
    ],
    correctExplanation: `
      <strong>Option B is correct.</strong> The prompt asks for evidence comparing renewable scrap recycling with virgin ore refining. Pathway 1 (scrap + hydro) emitted 3.2 kg CO<sub>2</sub>e/kg, whereas Pathway 3 (virgin ore + coal) emitted 24.5 kg CO<sub>2</sub>e/kg. Calculating $(24.5 - 3.2) / 24.5 \approx 87\%$ reduction confirms the exact comparative claim.
    `,
    distractorExplanations: [
      {
        letter: "A",
        explanation: "<strong>Option A is incorrect (Contradiction):</strong> 6.8 is lower than 24.5, not higher."
      },
      {
        letter: "C",
        explanation: "<strong>Option C is incorrect (Row Mixing):</strong> Pathway 3 refines Laterite Nickel (24.5 kg), not Sulfide Cobalt (18.2 kg, which is Pathway 4)."
      },
      {
        letter: "D",
        explanation: "<strong>Option D is incorrect (Inversion):</strong> 18.2 is much higher than 3.2, not lower."
      }
    ],
    internationalTip: `
      <strong>Table Arithmetic Check:</strong> When an option provides a percentage reduction claim (e.g. <em>87% reduction</em>), verify the formula: $\frac{\text{Virgin} - \text{Recycled}}{\text{Virgin}} = \frac{24.5 - 3.2}{24.5} = \frac{21.3}{24.5} \approx 0.869 = 86.9\%$.
    `
  },

  // ==========================================
  // QUESTION 24 (Key: D) - Inferences
  // ==========================================
  {
    id: 24,
    skill: "Inferences",
    topic: "Sovereign Credit Ratings: Institutional Mandates & Forced Divestment",
    wordCount: 125,
    passageHtml: `
      <div class="passage-title-tag">
        <span>Sovereign Debt Markets & Portfolio Management</span>
        <span>Word Count: 125 words</span>
      </div>
      <div class="passage-text">
        <p>Many large global institutional asset managers—such as sovereign wealth funds, life insurance companies, and regulated public pension funds—are legally bound by strict investment mandates that prohibit them from holding debt securities rated below "investment grade" (e.g., Baa3/BBB- or lower). When an emerging market sovereign experiences macroeconomic deterioration and credit rating agencies downgrade its sovereign debt into "speculative" or "junk" territory, these institutional investors have no statutory discretion to maintain their positions. Consequently, even if an institutional fund manager believes the debtor country's bonds are fundamentally undervalued and will avoid default, the credit downgrade triggers an automatic, mandatory liquidation of holdings. Therefore, when a sovereign debt rating falls below the investment-grade threshold, the nation's bond market is likely to experience ______</p>
      </div>
    `,
    prompt: "Which choice most logically completes the text?",
    options: [
      {
        letter: "A",
        text: "an immediate influx of regulated pension capital seeking to take advantage of higher speculative bond yields.",
        isCorrect: false,
        flaw: "Directly Contradicts Legal Mandate Stated in Text"
      },
      {
        letter: "B",
        text: "a permanent closure of all domestic commercial banking institutions by international regulatory agencies.",
        isCorrect: false,
        flaw: "Extreme Unsubstantiated Assertion"
      },
      {
        letter: "C",
        text: "a complete suspension of credit rating methodologies by all international rating agencies.",
        isCorrect: false,
        flaw: "Absurd Non Sequitur"
      },
      {
        letter: "D",
        text: "an abrupt wave of non-discretionary capital flight that sharply depresses bond prices regardless of individual investor risk assessments.",
        isCorrect: true
      }
    ],
    correctExplanation: `
      <strong>Option D is correct.</strong> The passage explains that institutional investors are legally prohibited from holding sub-investment grade debt. A downgrade into speculative territory requires automatic, mandatory liquidation regardless of fund managers' personal views. This forces sudden selling (non-discretionary capital flight) that drives bond prices down. Option D logically concludes this chain of events.
    `,
    distractorExplanations: [
      {
        letter: "A",
        explanation: "<strong>Option A is incorrect (Direct Contradiction):</strong> Regulated pension funds are legally barred from holding sub-investment grade debt, so they cannot buy these bonds."
      },
      {
        letter: "B",
        explanation: "<strong>Option B is incorrect (Extreme):</strong> Sovereign bond downgrades do not permanently shut down domestic commercial banks."
      },
      {
        letter: "C",
        explanation: "<strong>Option C is incorrect (Nonsense):</strong> Downgrades do not cause rating agencies to suspend their own methodologies."
      }
    ],
    internationalTip: `
      <strong>Key Term 'Non-Discretionary':</strong> In financial/legal inference items, 'non-discretionary' means mandatory or required by rule, which matches the text's description of 'no statutory discretion' and 'automatic, mandatory liquidation.'
    `
  },

  // ==========================================
  // QUESTION 25 (Key: A) - Central Ideas & Details
  // ==========================================
  {
    id: 25,
    skill: "Central Ideas and Details",
    topic: "Transboundary Pollution: Atmospheric Acid Deposition Treaties",
    wordCount: 130,
    passageHtml: `
      <div class="passage-title-tag">
        <span>Environmental Treaties & Atmospheric Chemistry</span>
        <span>Word Count: 130 words</span>
      </div>
      <div class="passage-text">
        <p>Because atmospheric emissions of sulfur dioxide (SO<sub>2</sub>) and nitrogen oxides (NO<sub>x</sub>) from coal-fired power plants travel hundreds of kilometers across national borders before returning to earth as acid precipitation, unilateral domestic clean-air regulations are fundamentally insufficient to protect transboundary ecosystems. Downwind recipient states frequently suffer widespread forest dieback, soil calcium depletion, and aquatic acidification despite maintaining stringent environmental standards within their own borders. To resolve this structural externality, neighboring states established regional multilateral air pollution agreements that impose binding national emissions ceilings and fund joint atmospheric trajectory monitoring stations. By treating airsheds as shared regional commons rather than sovereign domestic property, these multilateral frameworks have successfully forced upwind emitter states to internalize the ecological costs their industrial output inflicts on downwind neighbors.</p>
      </div>
    `,
    prompt: "Which choice best states the main idea of the text?",
    options: [
      {
        letter: "A",
        text: "Multilateral emissions treaties are essential to address the transboundary nature of acid rain by holding upwind emitting nations accountable for cross-border ecological damage.",
        isCorrect: true
      },
      {
        letter: "B",
        text: "Downwind recipient nations have completely eliminated forest dieback by converting all industrial coal boilers to nuclear reactors.",
        isCorrect: false,
        flaw: "Fabrication of Unmentioned Technology"
      },
      {
        letter: "C",
        text: "Unilateral domestic clean-air laws have proven more effective at curtailing transboundary acid rain than international treaties.",
        isCorrect: false,
        flaw: "Direct Contradiction of Passage Thesis"
      },
      {
        letter: "D",
        text: "Sulfur dioxide emissions are geographically restricted to the immediate sovereign boundaries of the nation that produced them.",
        isCorrect: false,
        flaw: "Direct Scientific Contradiction of Text"
      }
    ],
    correctExplanation: `
      <strong>Option A is correct.</strong> The passage emphasizes that because acid precipitation travels across borders, unilateral domestic regulations fail. Multilateral agreements with emissions ceilings and joint monitoring treat airsheds as a shared commons and force upwind emitters to internalize cross-border damage. Option A cleanly captures this main idea.
    `,
    distractorExplanations: [
      {
        letter: "B",
        explanation: "<strong>Option B is incorrect (Fabrication):</strong> Nuclear reactor conversion is never mentioned in the text."
      },
      {
        letter: "C",
        explanation: "<strong>Option C is incorrect (Direct Contradiction):</strong> The text explicitly states that unilateral domestic regulations are 'fundamentally insufficient.'"
      },
      {
        letter: "D",
        explanation: "<strong>Option D is incorrect (Direct Contradiction):</strong> The text notes that emissions 'travel hundreds of kilometers across national borders.'"
      }
    ],
    internationalTip: `
      <strong>Central Thesis Distractors:</strong> Distractors like C and D make claims that directly oppose the opening premises of the text.
    `
  },

  // ==========================================
  // QUESTION 26 (Key: C) - Command of Evidence (Textual)
  // ==========================================
  {
    id: 26,
    skill: "Command of Evidence (Textual)",
    topic: "International Taxation: OECD Pillar One & Digital Services Taxes (DST)",
    wordCount: 133,
    passageHtml: `
      <div class="passage-title-tag">
        <span>International Taxation & Digital Economy</span>
        <span>Word Count: 133 words</span>
      </div>
      <div class="passage-text">
        <p>Under traditional century-old international tax frameworks, a sovereign nation could only levy corporate income tax on a foreign enterprise if that company maintained a physical permanent establishment (such as an office or factory) within its borders. The rise of multinational tech conglomerates offering cloud computing and online advertising allows firms to extract immense revenues from consumer markets without establishing any physical footprint. In response, over 140 jurisdictions negotiated the OECD/G20 "Pillar One" framework, which reallocates a portion of taxing rights on the world's largest multinational enterprises to market jurisdictions where users and consumers are physically located. Tax economists argue that unless Pillar One is universally ratified, individual nations will enact retaliatory unilateral Digital Services Taxes (DSTs), triggering widespread international double taxation disputes and cross-border trade tariff retaliation.</p>
      </div>
    `,
    prompt: "Which scenario, if true, would most directly support the tax economists' warning regarding the failure to ratify Pillar One?",
    options: [
      {
        letter: "A",
        text: "Multinational tech firms voluntarily doubled their physical office footprints across dozens of small developing economies to comply with legacy tax treaties.",
        isCorrect: false,
        flaw: "Contradicts Digital Business Model Described in Text"
      },
      {
        letter: "B",
        text: "Corporate income tax revenues in major consumer markets reached an all-time high following the global adoption of value-added sales taxes on electronics.",
        isCorrect: false,
        flaw: "VAT Policy Metric, Irrelevant to DST Trade Disputes"
      },
      {
        letter: "C",
        text: "Following the collapse of multilateral Pillar One negotiations, several consumer market states imposed unilateral 3% digital services taxes, prompting home nations of affected tech giants to levy retaliatory 25% import tariffs on luxury goods.",
        isCorrect: true
      },
      {
        letter: "D",
        text: "International commercial arbitration courts successfully eliminated all cross-border intellectual property disputes within six months.",
        isCorrect: false,
        flaw: "Unrelated Subject"
      }
    ],
    correctExplanation: `
      <strong>Option C is correct.</strong> The tax economists warned that without Pillar One, nations would enact unilateral DSTs, resulting in double-taxation disputes and retaliatory trade tariffs. Option C depicts this exact sequence: collapse of talks leads to unilateral 3% DSTs, followed by retaliatory 25% import tariffs.
    `,
    distractorExplanations: [
      {
        letter: "A",
        explanation: "<strong>Option A is incorrect (Contradictory):</strong> Tech companies generate profits without physical offices; opening physical offices everywhere contradicts the passage's premise."
      },
      {
        letter: "B",
        explanation: "<strong>Option B is incorrect (Different Tax Mechanism):</strong> VAT on electronics does not provide evidence regarding unilateral digital services taxes or retaliatory trade disputes."
      },
      {
        letter: "D",
        explanation: "<strong>Option D is incorrect (Unrelated):</strong> IP dispute arbitration has nothing to do with digital services tax disputes and trade retaliation."
      }
    ],
    internationalTip: `
      <strong>Predictive Warning Evidence:</strong> When a passage predicts a domino effect (*No Agreement $\rightarrow$ Unilateral DSTs $\rightarrow$ Retaliatory Tariffs*), the confirming evidence will present that exact causal chain unfolding in practice.
    `
  },

  // ==========================================
  // QUESTION 27 (Key: B) - Command of Evidence (Quantitative)
  // ==========================================
  {
    id: 27,
    skill: "Command of Evidence (Quantitative)",
    topic: "Solar PV Supply Chains: Polysilicon & Ingot Manufacturing Concentration",
    wordCount: 88,
    passageHtml: `
      <div class="passage-title-tag">
        <span>Clean Energy Supply Chains</span>
        <span>Word Count: 88 words + Data Table</span>
      </div>
      <div class="passage-text">
        <p>The manufacturing process for solar photovoltaic (PV) modules consists of four sequential stages: polysilicon refining, silicon ingot and wafer slicing, solar cell fabrication, and final module assembly. Clean energy supply chain analysts tracked global manufacturing concentration (the market share of the top single producing nation) alongside historical supply disruption vulnerability metrics across all four supply chain tiers.</p>
      </div>

      <div class="data-table-container">
        <div class="table-caption">
          Table: Solar PV Supply Chain Tiers, Geographic Concentration, and Disruption Vulnerability (2024)
        </div>
        <table class="sat-table" aria-label="Solar PV Supply Chain Data Table">
          <thead>
            <tr>
              <th scope="col">Supply Chain Tier</th>
              <th scope="col">Primary Production Stage</th>
              <th scope="col">Top Nation Market Share (%)</th>
              <th scope="col">Lead Time to Build New Facility (Months)</th>
              <th scope="col">Supply Disruption Risk Index (1–100)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Tier 1</strong></td>
              <td>Polysilicon Refining</td>
              <td class="num-cell">78%</td>
              <td class="num-cell">36</td>
              <td class="num-cell cell-neg">82</td>
            </tr>
            <tr>
              <td><strong>Tier 2</strong></td>
              <td>Silicon Ingot & Wafer Slicing</td>
              <td class="num-cell cell-neg">97%</td>
              <td class="num-cell">28</td>
              <td class="num-cell cell-neg">94</td>
            </tr>
            <tr>
              <td><strong>Tier 3</strong></td>
              <td>Solar Cell Fabrication</td>
              <td class="num-cell">84%</td>
              <td class="num-cell">18</td>
              <td class="num-cell">76</td>
            </tr>
            <tr>
              <td><strong>Tier 4</strong></td>
              <td>Final Module Assembly</td>
              <td class="num-cell cell-pos">68%</td>
              <td class="num-cell cell-pos">10</td>
              <td class="num-cell cell-pos">48</td>
            </tr>
          </tbody>
        </table>
      </div>
    `,
    prompt: "Which choice best uses data from the table to support the conclusion that upstream wafer slicing represents the most concentrated and vulnerable bottleneck in the global solar supply chain?",
    options: [
      {
        letter: "A",
        text: "Tier 1 (polysilicon refining) required 36 months to build a facility, resulting in a higher disruption risk index than Tier 2's 94 score.",
        isCorrect: false,
        flaw: "Factual Error from Data (Tier 1 risk score is 82, which is lower than 94)"
      },
      {
        letter: "B",
        text: "Tier 2 (ingot and wafer slicing) exhibited the highest single-nation market share (97%) and the highest supply disruption risk index (94) among all four tiers.",
        isCorrect: true
      },
      {
        letter: "C",
        text: "Tier 4 (module assembly) had a 68% single-nation market share, making it more vulnerable to supply disruptions than Tier 3's 76 score.",
        isCorrect: false,
        flaw: "Contradiction (Tier 4 risk index is 48, which is lower than 76)"
      },
      {
        letter: "D",
        text: "Tier 3 (cell fabrication) maintained a 97% market share and required 10 months to construct new facilities.",
        isCorrect: false,
        flaw: "Data Misattribution (97% is Tier 2, 10 months is Tier 4)"
      }
    ],
    correctExplanation: `
      <strong>Option B is correct.</strong> The prompt focuses on proving that upstream wafer slicing (Tier 2) is the most concentrated and vulnerable bottleneck. Option B cites the exact table extremes: Tier 2 has the highest market share (97%) and the highest disruption risk index (94).
    `,
    distractorExplanations: [
      {
        letter: "A",
        explanation: "<strong>Option A is incorrect (Factual Error):</strong> Tier 1's disruption risk index is 82, which is lower (not higher) than Tier 2's 94."
      },
      {
        letter: "C",
        explanation: "<strong>Option C is incorrect (Contradiction):</strong> Tier 4's disruption index is 48, which is less vulnerable than Tier 3's 76."
      },
      {
        letter: "D",
        explanation: "<strong>Option D is incorrect (Data Scrambling):</strong> Tier 3 has 84% share (not 97%) and takes 18 months (not 10)."
      }
    ],
    internationalTip: `
      <strong>Superlative Alignment:</strong> When a question asks which choice proves that a component is 'the most concentrated and vulnerable,' look for the option citing the absolute highest values in the relevant columns.
    `
  },

  // ==========================================
  // QUESTION 28 (Key: D) - Inferences
  // ==========================================
  {
    id: 28,
    skill: "Inferences",
    topic: "Agricultural Trade: Commodity Export Bans & Transboundary Price Spikes",
    wordCount: 132,
    passageHtml: `
      <div class="passage-title-tag">
        <span>Global Food Security & Trade Restrictions</span>
        <span>Word Count: 132 words</span>
      </div>
      <div class="passage-text">
        <p>When unexpected domestic harvest shortfalls threaten local food affordability, major agricultural exporting nations frequently institute emergency export restrictions or outright embargoes on staple grains such as wheat and rice. While these export bans are intended to insulate domestic consumers from rising food prices, agricultural market economists observe that restricting cross-border exports abruptly removes millions of metric tons of supply from thin global commodities markets. This sudden contraction triggers panic-buying and sharp price surges in net-food-importing developing nations, often prompting other regional producers to impose copycat export bans to protect their own domestic stocks. Consequently, unilateral export restrictions enacted during regional harvest shocks are likely to ______</p>
      </div>
    `,
    prompt: "Which choice most logically completes the text?",
    options: [
      {
        letter: "A",
        text: "permanently eliminate global demand for staple grains by forcing consumers worldwide to rely solely on processed synthetic nutrients.",
        isCorrect: false,
        flaw: "Extreme / Sci-Fi Hyperbole"
      },
      {
        letter: "B",
        text: "cause net-food-importing nations to immediately generate domestic agricultural surpluses within a single growing season.",
        isCorrect: false,
        flaw: "Agronomically & Logically Impossible"
      },
      {
        letter: "C",
        text: "encourage international commodities exchanges to abolish all futures trading contracts permanently.",
        isCorrect: false,
        flaw: "Unrelated Speculative Assertion"
      },
      {
        letter: "D",
        text: "amplify international commodity price volatility and exacerbate food insecurity across vulnerable import-dependent economies.",
        isCorrect: true
      }
    ],
    correctExplanation: `
      <strong>Option D is correct.</strong> The passage describes a feedback loop: an export ban removes supply from global markets, causing price spikes in importing nations and triggering copycat bans by other exporters. This domino effect intensifies price volatility and worsens food insecurity for import-dependent countries. Option D logically completes this explanation.
    `,
    distractorExplanations: [
      {
        letter: "A",
        explanation: "<strong>Option A is incorrect (Extreme / Absurd):</strong> Export bans on wheat and rice do not permanently eliminate global grain demand or force the world onto synthetic nutrients."
      },
      {
        letter: "B",
        explanation: "<strong>Option B is incorrect (Impossible):</strong> Net food importers facing grain shortfalls cannot instantly generate agricultural surpluses in one season."
      },
      {
        letter: "C",
        explanation: "<strong>Option C is incorrect (Unrelated):</strong> The passage discusses physical grain supplies and international food prices, not the abolition of commodities futures exchanges."
      }
    ],
    internationalTip: `
      <strong>Domino Effect Inferences:</strong> When a passage describes a chain reaction (export ban $\rightarrow$ supply drop $\rightarrow$ panic buying $\rightarrow$ copycat bans), the logical conclusion summarizes the amplified aggregate outcome (*greater global volatility and heightened food insecurity*).
    `
  }
];

// Application State
const state = {
  currentIndex: 0,
  userSelections: {}, // qIndex: optionIndex
  eliminations: {},   // qIndex: Set of eliminated option indices
  flagged: new Set(),
  answered: new Set(),
  filterSkill: 'all',
  eliminatorMode: false,
  highlighterActive: false,
  timerSeconds: 42 * 60, // 42 minutes for 28 questions
  timerInterval: null,
  timerHidden: false,
  fontSize: 16
};

// DOM Elements
const passageContentArea = document.getElementById('passage-content-area');
const passageWordCount = document.getElementById('passage-word-count');
const currentQIndex = document.getElementById('current-q-index');
const currentQSkill = document.getElementById('current-q-skill');
const questionPromptText = document.getElementById('question-prompt-text');
const optionsContainer = document.getElementById('options-container');
const checkAnswerBtn = document.getElementById('check-answer-btn');
const resetQuestionBtn = document.getElementById('reset-question-btn');
const explanationContainer = document.getElementById('explanation-container');
const resultBadge = document.getElementById('result-badge');
const correctRationaleText = document.getElementById('correct-rationale-text');
const distractorAnalysisList = document.getElementById('distractor-analysis-list');
const internationalTipText = document.getElementById('international-tip-text');

const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const flagBtn = document.getElementById('flag-btn');
const strikethroughToggleBtn = document.getElementById('strikethrough-toggle-btn');
const eliminatorStatus = document.getElementById('eliminator-status');
const themeToggleBtn = document.getElementById('theme-toggle-btn');
const themeIcon = document.getElementById('theme-icon');
const highlighterBtn = document.getElementById('highlighter-btn');

const timerText = document.getElementById('timer-text');
const toggleTimerBtn = document.getElementById('toggle-timer-btn');
const timerBox = document.getElementById('timer-box');

const strategyGuideBtn = document.getElementById('strategy-guide-btn');
const strategyDialog = document.getElementById('strategy-dialog');
const closeDialogBtn = document.getElementById('close-dialog-btn');
const dialogGotItBtn = document.getElementById('dialog-got-it-btn');

// Score Report Dialog
const finishSectionBtn = document.getElementById('finish-section-btn');
const scoreDialog = document.getElementById('score-dialog');
const closeScoreBtn = document.getElementById('close-score-btn');
const returnToReviewBtn = document.getElementById('return-to-review-btn');

const fontIncrease = document.getElementById('font-increase');
const fontDecrease = document.getElementById('font-decrease');

// Review Grid Dialog Elements
const openReviewBtn = document.getElementById('open-review-btn');
const reviewDialog = document.getElementById('review-dialog');
const closeReviewBtn = document.getElementById('close-review-btn');
const reviewGridContainer = document.getElementById('review-grid-container');

// Resizer logic
const paneDivider = document.getElementById('pane-divider');
const splitViewport = document.getElementById('split-viewport');
const passagePane = document.querySelector('.passage-pane');

// Initialize App
function initApp() {
  buildNavTabs();
  setupEventListeners();
  startTimer();
  renderQuestion(0);
}

// Build 28 question navigation tabs
function buildNavTabs() {
  const selectorGroup = document.querySelector('.q-selector-group');
  if (!selectorGroup) return;
  selectorGroup.innerHTML = '';

  satQuestions.forEach((q, i) => {
    const tab = document.createElement('button');
    tab.className = `q-tab ${i === 0 ? 'active' : ''}`;
    tab.dataset.q = i;
    tab.setAttribute('title', `Question ${i + 1}: ${q.skill}`);

    const numSpan = document.createElement('span');
    numSpan.className = 'q-num';
    numSpan.textContent = i + 1;

    const dot = document.createElement('span');
    dot.className = 'status-dot';
    dot.id = `dot-${i}`;

    tab.appendChild(numSpan);
    tab.appendChild(dot);

    tab.addEventListener('click', () => {
      renderQuestion(i);
    });

    selectorGroup.appendChild(tab);
  });
}

// Render Current Question
function renderQuestion(index) {
  state.currentIndex = index;
  const q = satQuestions[index];

  // Update tabs
  document.querySelectorAll('.q-tab').forEach((tab, i) => {
    tab.classList.toggle('active', i === index);
    tab.classList.toggle('flagged', state.flagged.has(i));
    tab.classList.toggle('answered', state.answered.has(i));
  });

  // Ensure active tab is visible in scroll container
  const activeTab = document.querySelector(`.q-tab[data-q="${index}"]`);
  if (activeTab) {
    activeTab.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
  }

  // Update Headers & Meta
  currentQIndex.textContent = `Question ${index + 1} of ${satQuestions.length}`;
  currentQSkill.textContent = `Skill: ${q.skill}`;
  passageWordCount.textContent = `${q.wordCount} words`;

  // Render Passage
  passageContentArea.innerHTML = q.passageHtml;

  // Render Prompt
  questionPromptText.textContent = q.prompt;

  // Render Options
  if (!state.eliminations[index]) {
    state.eliminations[index] = new Set();
  }

  const selectedOptIndex = state.userSelections[index];
  const isAnswerChecked = state.answered.has(index);

  optionsContainer.innerHTML = '';
  q.options.forEach((opt, optIdx) => {
    const isEliminated = state.eliminations[index].has(optIdx);
    const isSelected = selectedOptIndex === optIdx;

    const wrapper = document.createElement('div');
    wrapper.className = `option-wrapper ${isSelected ? 'selected' : ''} ${isEliminated ? 'eliminated' : ''}`;
    wrapper.dataset.optIdx = optIdx;

    if (isAnswerChecked) {
      if (opt.isCorrect) {
        wrapper.classList.add('correct-highlight');
      } else if (isSelected && !opt.isCorrect) {
        wrapper.classList.add('incorrect-highlight');
      }
    }

    const label = document.createElement('label');
    label.className = 'option-label';
    label.setAttribute('for', `opt-${index}-${optIdx}`);

    const radio = document.createElement('input');
    radio.type = 'radio';
    radio.name = `sat-option-${index}`;
    radio.id = `opt-${index}-${optIdx}`;
    radio.className = 'option-radio';
    radio.value = optIdx;
    radio.checked = isSelected;
    radio.disabled = isAnswerChecked;

    radio.addEventListener('change', () => {
      selectOption(index, optIdx);
    });

    const letterSpan = document.createElement('span');
    letterSpan.className = 'option-letter';
    letterSpan.textContent = opt.letter;

    const textSpan = document.createElement('span');
    textSpan.className = 'option-text';
    textSpan.textContent = opt.text;

    label.appendChild(radio);
    label.appendChild(letterSpan);
    label.appendChild(textSpan);

    const elimBtn = document.createElement('button');
    elimBtn.type = 'button';
    elimBtn.className = 'eliminate-btn';
    elimBtn.title = isEliminated ? "Restore option" : "Eliminate option";
    elimBtn.setAttribute('aria-pressed', isEliminated ? "true" : "false");
    elimBtn.innerHTML = isEliminated ? "↩" : "✕";

    elimBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleElimination(index, optIdx);
    });

    wrapper.appendChild(label);
    wrapper.appendChild(elimBtn);
    optionsContainer.appendChild(wrapper);
  });

  // Update check answer button
  checkAnswerBtn.disabled = selectedOptIndex === undefined;
  checkAnswerBtn.textContent = isAnswerChecked ? "Answer Submitted" : "Check Answer";

  // Render or hide Explanation
  if (isAnswerChecked) {
    showExplanation(index, selectedOptIndex);
  } else {
    explanationContainer.hidden = true;
  }

  // Update Flag Button
  const isFlagged = state.flagged.has(index);
  flagBtn.classList.toggle('active', isFlagged);
  flagBtn.setAttribute('aria-pressed', isFlagged ? "true" : "false");

  // Update Prev/Next buttons
  prevBtn.disabled = index === 0;
  nextBtn.disabled = index === satQuestions.length - 1;
}

// Option selection handler
function selectOption(qIdx, optIdx) {
  if (state.eliminations[qIdx].has(optIdx)) {
    state.eliminations[qIdx].delete(optIdx);
  }

  state.userSelections[qIdx] = optIdx;
  checkAnswerBtn.disabled = false;
  renderQuestion(qIdx);
}

// Toggle Option Elimination (Cross-out)
function toggleElimination(qIdx, optIdx) {
  if (state.eliminations[qIdx].has(optIdx)) {
    state.eliminations[qIdx].delete(optIdx);
  } else {
    state.eliminations[qIdx].add(optIdx);
    if (state.userSelections[qIdx] === optIdx) {
      delete state.userSelections[qIdx];
      checkAnswerBtn.disabled = true;
    }
  }
  renderQuestion(qIdx);
}

// Show Explanation
function showExplanation(qIdx, selectedOptIdx) {
  const q = satQuestions[qIdx];
  const isCorrect = selectedOptIdx !== undefined && q.options[selectedOptIdx].isCorrect;

  explanationContainer.hidden = false;
  resultBadge.className = `result-header ${isCorrect ? 'correct' : 'incorrect'}`;
  
  if (isCorrect) {
    resultBadge.innerHTML = `<span>✓</span> Correct! You correctly identified the right analytical choice.`;
  } else {
    const correctOpt = q.options.find(o => o.isCorrect);
    resultBadge.innerHTML = `<span>✗</span> Incorrect. The correct answer is <strong>Option ${correctOpt.letter}</strong>.`;
  }

  correctRationaleText.innerHTML = q.correctExplanation;

  distractorAnalysisList.innerHTML = '';
  q.distractorExplanations.forEach(d => {
    const item = document.createElement('div');
    item.className = 'distractor-item';
    item.innerHTML = d.explanation;
    distractorAnalysisList.appendChild(item);
  });

  internationalTipText.innerHTML = q.internationalTip;
}

// Submit Answer
function checkCurrentAnswer() {
  const idx = state.currentIndex;
  if (state.userSelections[idx] === undefined) return;

  state.answered.add(idx);
  renderQuestion(idx);
  explanationContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// Reset Selection
function resetCurrentSelection() {
  const idx = state.currentIndex;
  delete state.userSelections[idx];
  state.answered.delete(idx);
  state.eliminations[idx].clear();
  renderQuestion(idx);
}

// Render Review Modal Matrix
function renderReviewGrid(filter = 'all') {
  if (!reviewGridContainer) return;
  reviewGridContainer.innerHTML = '';

  let correctCount = 0;
  let totalAnswered = state.answered.size;

  satQuestions.forEach((q, i) => {
    const selected = state.userSelections[i];
    const isAnswered = state.answered.has(i);
    const isFlagged = state.flagged.has(i);
    const isCurrent = state.currentIndex === i;
    const isCorrect = selected !== undefined && q.options[selected].isCorrect;

    if (isAnswered && isCorrect) correctCount++;

    // Filter check
    if (filter === 'central' && !q.skill.includes('Central')) return;
    if (filter === 'inference' && !q.skill.includes('Inferences')) return;
    if (filter === 'evidence' && !q.skill.includes('Evidence')) return;
    if (filter === 'flagged' && !isFlagged) return;
    if (filter === 'unanswered' && isAnswered) return;

    const card = document.createElement('div');
    card.className = `review-grid-card ${isAnswered ? 'answered' : 'unanswered'} ${isFlagged ? 'flagged' : ''} ${isCurrent ? 'current' : ''}`;
    
    let statusText = '○ Unanswered';
    if (isAnswered) {
      statusText = isCorrect ? '<span class="text-correct">✓ Correct</span>' : '<span class="text-incorrect">✗ Incorrect</span>';
    }

    card.innerHTML = `
      <div class="rg-top">
        <span class="rg-num">Q${i + 1}</span>
        ${isFlagged ? '<span class="rg-flag" title="Flagged for review">🚩</span>' : ''}
      </div>
      <div class="rg-skill">${q.skill}</div>
      <div class="rg-status">${statusText}</div>
    `;

    card.addEventListener('click', () => {
      reviewDialog.close();
      renderQuestion(i);
    });

    reviewGridContainer.appendChild(card);
  });

  const scoreStat = document.getElementById('review-score-stat');
  if (scoreStat) {
    scoreStat.textContent = `${totalAnswered} of ${satQuestions.length} completed • ${correctCount} correct so far`;
  }
}

// Generate Full Diagnostic Score Report
function generateScoreReport() {
  let totalAnswered = state.answered.size;
  let totalCorrect = 0;

  const skillStats = {
    "Central Ideas and Details": { total: 0, correct: 0 },
    "Inferences": { total: 0, correct: 0 },
    "Command of Evidence (Textual)": { total: 0, correct: 0 },
    "Command of Evidence (Quantitative)": { total: 0, correct: 0 }
  };

  satQuestions.forEach((q, i) => {
    const skill = q.skill;
    if (skillStats[skill]) skillStats[skill].total++;

    const selected = state.userSelections[i];
    if (state.answered.has(i) && selected !== undefined && q.options[selected].isCorrect) {
      totalCorrect++;
      if (skillStats[skill]) skillStats[skill].correct++;
    }
  });

  // Calculate Scaled Score (SAT R&W scale: 200–800)
  const accuracy = satQuestions.length > 0 ? (totalCorrect / satQuestions.length) : 0;
  const scaledScore = Math.round(200 + accuracy * 600);

  // Populate Score Modal
  document.getElementById('score-big-number').textContent = `${totalCorrect} / ${satQuestions.length}`;
  document.getElementById('score-scaled-number').textContent = `${scaledScore} / 800`;
  document.getElementById('score-accuracy-pct').textContent = `${Math.round(accuracy * 100)}%`;

  // Skill breakdown bars
  const skillListContainer = document.getElementById('skill-breakdown-list');
  skillListContainer.innerHTML = '';

  for (const [skillName, data] of Object.entries(skillStats)) {
    const pct = data.total > 0 ? Math.round((data.correct / data.total) * 100) : 0;
    const item = document.createElement('div');
    item.className = 'skill-stat-row';
    item.innerHTML = `
      <div class="skill-name-row">
        <span class="skill-label">${skillName}</span>
        <span class="skill-ratio">${data.correct} / ${data.total} (${pct}%)</span>
      </div>
      <div class="progress-track">
        <div class="progress-fill" style="width: ${pct}%;"></div>
      </div>
    `;
    skillListContainer.appendChild(item);
  }

  scoreDialog.showModal();
}

// Timer Logic
function startTimer() {
  state.timerInterval = setInterval(() => {
    if (state.timerSeconds > 0) {
      state.timerSeconds--;
      const mins = Math.floor(state.timerSeconds / 60);
      const secs = state.timerSeconds % 60;
      timerText.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    } else {
      clearInterval(state.timerInterval);
      timerText.textContent = "00:00 - Time's Up";
    }
  }, 1000);
}

// Text Highlighter Tool
function handleTextHighlight() {
  const selection = window.getSelection();
  if (!selection.rangeCount || selection.isCollapsed) {
    alert("Select text in the passage or prompt, then click 'Highlight' to apply yellow markup.");
    return;
  }
  const range = selection.getRangeAt(0);
  const mark = document.createElement('mark');
  mark.className = 'sat-highlighter';
  mark.appendChild(range.extractContents());
  range.insertNode(mark);
  selection.removeAllRanges();
}

// Event Listeners
function setupEventListeners() {
  // Prev / Next
  prevBtn.addEventListener('click', () => {
    if (state.currentIndex > 0) renderQuestion(state.currentIndex - 1);
  });

  nextBtn.addEventListener('click', () => {
    if (state.currentIndex < satQuestions.length - 1) renderQuestion(state.currentIndex + 1);
  });

  // Flag toggle
  flagBtn.addEventListener('click', () => {
    const idx = state.currentIndex;
    if (state.flagged.has(idx)) {
      state.flagged.delete(idx);
    } else {
      state.flagged.add(idx);
    }
    renderQuestion(idx);
  });

  // Eliminator mode toggle
  strikethroughToggleBtn.addEventListener('click', () => {
    state.eliminatorMode = !state.eliminatorMode;
    strikethroughToggleBtn.classList.toggle('active', state.eliminatorMode);
    strikethroughToggleBtn.setAttribute('aria-pressed', state.eliminatorMode ? "true" : "false");
    eliminatorStatus.textContent = state.eliminatorMode ? "ON" : "OFF";
  });

  // Highlighter button
  if (highlighterBtn) {
    highlighterBtn.addEventListener('click', handleTextHighlight);
  }

  // Theme toggle
  themeToggleBtn.addEventListener('click', () => {
    const isDark = document.body.classList.toggle('theme-dark');
    document.body.classList.toggle('theme-light', !isDark);
    themeIcon.textContent = isDark ? "☀️" : "🌙";
  });

  // Hide/Show Timer
  toggleTimerBtn.addEventListener('click', () => {
    state.timerHidden = !state.timerHidden;
    timerText.style.display = state.timerHidden ? 'none' : 'inline';
    toggleTimerBtn.textContent = state.timerHidden ? 'Show' : 'Hide';
  });

  // Check Answer & Reset
  checkAnswerBtn.addEventListener('click', checkCurrentAnswer);
  resetQuestionBtn.addEventListener('click', resetCurrentSelection);

  // Strategy Modal Dialog
  strategyGuideBtn.addEventListener('click', () => {
    strategyDialog.showModal();
  });
  closeDialogBtn.addEventListener('click', () => {
    strategyDialog.close();
  });
  dialogGotItBtn.addEventListener('click', () => {
    strategyDialog.close();
  });

  // Review Matrix Modal Dialog
  if (openReviewBtn) {
    openReviewBtn.addEventListener('click', () => {
      renderReviewGrid('all');
      reviewDialog.showModal();
    });
  }
  if (closeReviewBtn) {
    closeReviewBtn.addEventListener('click', () => {
      reviewDialog.close();
    });
  }

  // Flashcards Study Modal Dialog
  const openFlashcardsBtn = document.getElementById('open-flashcards-btn');
  const flashcardDialog = document.getElementById('flashcard-dialog');
  const closeFlashcardBtn = document.getElementById('close-flashcard-btn');
  const fcPrevBtn = document.getElementById('fc-prev-btn');
  const fcNextBtn = document.getElementById('fc-next-btn');
  const fcFlipBtn = document.getElementById('fc-flip-btn');
  const fcMasteredBtn = document.getElementById('fc-mastered-btn');
  const fcLearningBtn = document.getElementById('fc-learning-btn');
  const fcShuffleBtn = document.getElementById('fc-shuffle-btn');
  const fcSearchInput = document.getElementById('fc-search-input');
  const fcCategoryPills = document.querySelectorAll('.fc-cat-pill');

  if (openFlashcardsBtn && flashcardDialog) {
    openFlashcardsBtn.addEventListener('click', () => {
      renderFlashcardUI();
      flashcardDialog.showModal();
    });
  }
  if (closeFlashcardBtn && flashcardDialog) {
    closeFlashcardBtn.addEventListener('click', () => {
      flashcardDialog.close();
    });
  }

  if (fcPrevBtn) {
    fcPrevBtn.addEventListener('click', () => {
      if (flashcardState.currentIndex > 0) {
        flashcardState.currentIndex--;
        flashcardState.isFlipped = false;
        renderFlashcardUI();
      }
    });
  }
  if (fcNextBtn) {
    fcNextBtn.addEventListener('click', () => {
      const deck = getFilteredDeck();
      if (flashcardState.currentIndex < deck.length - 1) {
        flashcardState.currentIndex++;
        flashcardState.isFlipped = false;
        renderFlashcardUI();
      }
    });
  }
  if (fcFlipBtn) {
    fcFlipBtn.addEventListener('click', toggleCardFlip);
  }
  if (fcMasteredBtn) {
    fcMasteredBtn.addEventListener('click', markCardMastered);
  }
  if (fcLearningBtn) {
    fcLearningBtn.addEventListener('click', markCardLearning);
  }
  if (fcShuffleBtn) {
    fcShuffleBtn.addEventListener('click', shuffleVocabDeck);
  }
  if (fcSearchInput) {
    fcSearchInput.addEventListener('input', (e) => {
      flashcardState.searchQuery = e.target.value;
      flashcardState.currentIndex = 0;
      flashcardState.isFlipped = false;
      renderFlashcardUI();
    });
  }
  if (fcCategoryPills) {
    fcCategoryPills.forEach(pill => {
      pill.addEventListener('click', () => {
        fcCategoryPills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        flashcardState.filterCategory = pill.dataset.cat;
        flashcardState.currentIndex = 0;
        flashcardState.isFlipped = false;
        renderFlashcardUI();
      });
    });
  }

  // Finish Section / Score Report Dialog
  if (finishSectionBtn) {
    finishSectionBtn.addEventListener('click', generateScoreReport);
  }
  if (closeScoreBtn) {
    closeScoreBtn.addEventListener('click', () => {
      scoreDialog.close();
    });
  }
  if (returnToReviewBtn) {
    returnToReviewBtn.addEventListener('click', () => {
      scoreDialog.close();
      renderReviewGrid('all');
      reviewDialog.showModal();
    });
  }

  // Filter buttons in Review Modal
  const filterButtons = document.querySelectorAll('.review-filter-btn');
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      renderReviewGrid(filter);
    });
  });

  // Close dialog on backdrop click
  [strategyDialog, reviewDialog, scoreDialog, flashcardDialog].forEach(dialog => {
    if (!dialog) return;
    dialog.addEventListener('click', (e) => {
      const rect = dialog.getBoundingClientRect();
      const isInDialog = (
        rect.top <= e.clientY &&
        e.clientY <= rect.top + rect.height &&
        rect.left <= e.clientX &&
        e.clientX <= rect.left + rect.width
      );
      if (!isInDialog) {
        dialog.close();
      }
    });
  });

  // Font resizers
  fontIncrease.addEventListener('click', () => {
    if (state.fontSize < 22) {
      state.fontSize += 1;
      document.documentElement.style.setProperty('--font-scale', `${state.fontSize / 16}rem`);
    }
  });

  fontDecrease.addEventListener('click', () => {
    if (state.fontSize > 13) {
      state.fontSize -= 1;
      document.documentElement.style.setProperty('--font-scale', `${state.fontSize / 16}rem`);
    }
  });

  // Keyboard navigation shortcuts
  window.addEventListener('keydown', (e) => {
    // If flashcards modal is open, use flashcard shortcuts
    if (flashcardDialog && flashcardDialog.open) {
      if (e.target.tagName === 'INPUT') return;
      if (e.code === 'Space') {
        e.preventDefault();
        toggleCardFlip();
      } else if (e.key === 'ArrowLeft') {
        if (fcPrevBtn && !fcPrevBtn.disabled) fcPrevBtn.click();
      } else if (e.key === 'ArrowRight') {
        if (fcNextBtn && !fcNextBtn.disabled) fcNextBtn.click();
      } else if (e.key === '1') {
        if (fcLearningBtn) fcLearningBtn.click();
      } else if (e.key === '2') {
        if (fcMasteredBtn) fcMasteredBtn.click();
      }
      return;
    }

    if (strategyDialog.open || (reviewDialog && reviewDialog.open) || (scoreDialog && scoreDialog.open)) return;

    // ArrowLeft / ArrowRight for previous / next
    if (e.key === 'ArrowLeft' && !e.ctrlKey && !e.altKey && document.activeElement.tagName !== 'INPUT') {
      if (state.currentIndex > 0) renderQuestion(state.currentIndex - 1);
    }
    if (e.key === 'ArrowRight' && !e.ctrlKey && !e.altKey && document.activeElement.tagName !== 'INPUT') {
      if (state.currentIndex < satQuestions.length - 1) renderQuestion(state.currentIndex + 1);
    }

    // Flag shortcut (F)
    if ((e.key === 'f' || e.key === 'F') && !e.ctrlKey && !e.altKey && document.activeElement.tagName !== 'INPUT') {
      flagBtn.click();
    }

    // A, B, C, D for Option Selection
    if (['a', 'b', 'c', 'd', 'A', 'B', 'C', 'D'].includes(e.key) && !e.ctrlKey && !e.metaKey && !e.altKey && document.activeElement.tagName !== 'INPUT') {
      const keyMap = { 'a': 0, 'b': 1, 'c': 2, 'd': 3 };
      const optIdx = keyMap[e.key.toLowerCase()];
      if (optIdx !== undefined) {
        selectOption(state.currentIndex, optIdx);
      }
    }
  });

  // Resizable split view logic
  let isDragging = false;
  paneDivider.addEventListener('mousedown', () => {
    isDragging = true;
    document.body.style.cursor = 'col-resize';
    document.body.style.userSelect = 'none';
  });

  window.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    const containerRect = splitViewport.getBoundingClientRect();
    const relativeX = e.clientX - containerRect.left;
    const percentage = (relativeX / containerRect.width) * 100;
    if (percentage > 25 && percentage < 75) {
      passagePane.style.flex = `0 0 ${percentage}%`;
    }
  });

  window.addEventListener('mouseup', () => {
    if (isDragging) {
      isDragging = false;
      document.body.style.cursor = '';
      document.body.style.userSelect = '';
    }
  });
}

// Run on DOM ready
document.addEventListener('DOMContentLoaded', initApp);
