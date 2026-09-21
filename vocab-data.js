/**
 * 2026 DIGITAL SAT READING & WRITING - VOCABULARY STUDY FLASHCARD BANK
 * 30 High-Yield Academic & Macroeconomic Terms for International Students (B1/B2 to C1/C2 Transition)
 */

const satVocabDeck = [
  {
    id: 1,
    word: "Nearshoring",
    pos: "noun",
    phonetic: "/ˌnɪərˈʃɔːr.ɪŋ/",
    category: "Macroeconomics & Trade",
    cefr: "B2/C1",
    definition: "The practice of transferring a business operation or manufacturing facility to a nearby country rather than a more distant, cheaper country.",
    satContext: "Prompted manufacturers to prioritize 'nearshoring'—relocating production facilities to geographically proximate partner states.",
    satTrap: "Do not confuse with 'offshoring' (moving to distant countries) or 'reshoring' (bringing production back to the home nation itself).",
    example: "European carmakers expanded nearshoring operations to Eastern Europe and North Africa to shorten shipping turnaround times.",
    synonyms: ["Proximity sourcing", "Regionalized manufacturing", "Relocation"],
    antonyms: ["Offshoring", "Distant outsourcing"]
  },
  {
    id: 2,
    word: "Friendshoring",
    pos: "noun",
    phonetic: "/ˈfrendˌʃɔːr.ɪŋ/",
    category: "Macroeconomics & Trade",
    cefr: "B2/C1",
    definition: "Relocating supply chains and sourcing inputs exclusively from countries that share common geopolitical values and strategic alliances.",
    satContext: "Multinational enterprises adopt 'friendshoring' to insulate critical component manufacturing from geopolitical trade embargoes.",
    satTrap: "Friendshoring is driven by political and diplomatic alignment, not purely lowest labor cost.",
    example: "The treaty encouraged friendshoring of lithium refining among allied nations to ensure battery supply security.",
    synonyms: ["Allied sourcing", "Geopolitical alignment", "Trusted supply chains"],
    antonyms: ["Arbitrary outsourcing", "Unilateral dependency"]
  },
  {
    id: 3,
    word: "Calculus",
    pos: "noun (figurative)",
    phonetic: "/ˈkæl.kjə.ləs/",
    category: "Academic Register",
    cefr: "B2/C1",
    definition: "A deliberate method of calculation, strategic reasoning, or systematic evaluation of competing risks and costs.",
    satContext: "Recent shifts in global supply chain strategies have altered multinational corporate calculus.",
    satTrap: "On the SAT Reading section, 'calculus' rarely refers to mathematics; it almost always means 'strategic decision-making process' or 'risk evaluation.'",
    example: "Rising international sea freight tariffs dramatically changed the calculus of importing pre-assembled electronics.",
    synonyms: ["Strategic reasoning", "Risk assessment", "Decision framework"],
    antonyms: ["Impulsive decision", "Guesswork"]
  },
  {
    id: 4,
    word: "Outlay",
    pos: "noun",
    phonetic: "/ˈaʊt.leɪ/",
    category: "Finance & Economics",
    cefr: "B2",
    definition: "An amount of money spent on something, especially an initial expenditure or capital investment.",
    satContext: "Firms increasingly treat these higher labor outlays as an implicit risk-mitigation premium.",
    satTrap: "An 'outlay' is an expense (money going out), whereas 'revenue' or 'inflow' is money coming in.",
    example: "The port's capital outlay for automated container cranes exceeded fifty million dollars.",
    synonyms: ["Expenditure", "Disbursement", "Capital investment", "Cost"],
    antonyms: ["Revenue", "Income", "Yield"]
  },
  {
    id: 5,
    word: "Latency",
    pos: "noun",
    phonetic: "/ˈleɪ.tən.si/",
    category: "Logistics & Tech",
    cefr: "B2/C1",
    definition: "The delay or period of waiting between the initiation of a request or shipment and its final delivery or execution.",
    satContext: "Accepting moderate cost increases in exchange for reduced transit latency and tariff stability.",
    satTrap: "In logistics, latency means transit time/delay; in science, it can refer to an inactive or dormant state.",
    example: "Air freight significantly reduces logistics latency compared to trans-oceanic maritime transport.",
    synonyms: ["Transit delay", "Lag time", "Turnaround period"],
    antonyms: ["Immediacy", "Promptness", "Instantaneity"]
  },
  {
    id: 6,
    word: "Resilience",
    pos: "noun",
    phonetic: "/rɪˈzɪl.jəns/",
    category: "Macroeconomics & Trade",
    cefr: "B2",
    definition: "The capacity of a system, supply chain, or economy to recover quickly from difficulties, shocks, or disruptions.",
    satContext: "Redefining supply chain efficiency from simple cost minimization to structural resilience.",
    satTrap: "Resilience does not mean 'never experiencing disruption'; it means having the structural buffers to absorb shocks and continue operating.",
    example: "The economy's diversified energy grid demonstrated high resilience during the prolonged regional oil embargo.",
    synonyms: ["Durability", "Robustness", "Adaptability", "Elasticity"],
    antonyms: ["Fragility", "Vulnerability", "Rigidity"]
  },
  {
    id: 7,
    word: "Carbon Leakage",
    pos: "noun phrase",
    phonetic: "/ˈkɑː.bən ˈliː.kɪdʒ/",
    category: "Climate & Ecology",
    cefr: "B2/C1",
    definition: "The situation where businesses relocate production to countries with weaker greenhouse gas regulations to evade domestic carbon taxes.",
    satContext: "In an effort to prevent 'carbon leakage'... several economic blocs introduced border adjustments.",
    satTrap: "Carbon leakage is not physical gas escaping a pipe; it is an economic phenomenon of industrial flight to avoid emissions taxes.",
    example: "Without import tariffs on high-emission steel, domestic carbon caps simply cause carbon leakage to unconstrained foreign producers.",
    synonyms: ["Regulatory arbitrage", "Emissions relocation", "Pollution haven effect"],
    antonyms: ["Harmonized regulation", "Global carbon parity"]
  },
  {
    id: 8,
    word: "Embedded",
    pos: "adjective",
    phonetic: "/ɪmˈbed.ɪd/",
    category: "Academic & Science",
    cefr: "B2",
    definition: "Firmly fixed, integrated, or accounted for as an intrinsic part of the whole lifecycle of an object or system.",
    satContext: "Border tariffs proportional to their embedded greenhouse gas intensity.",
    satTrap: "'Embedded emissions' refers to the cumulative emissions produced during the entire manufacturing process, not just at final point of sale.",
    example: "The embedded carbon in aluminum includes the heavy electricity consumed during the smelting phase.",
    synonyms: ["Intrinsic", "Encapsulated", "Inherent", "Integrated"],
    antonyms: ["Superficial", "Extrinsic", "Detached"]
  },
  {
    id: 9,
    word: "Remittance",
    pos: "noun",
    phonetic: "/rɪˈmɪt.əns/",
    category: "Finance & Economics",
    cefr: "B2",
    definition: "A sum of money sent, especially by a foreign worker back to family or associates in their home country.",
    satContext: "Cross-border remittance flows to lower- and middle-income countries represent a vital source of foreign exchange.",
    satTrap: "Remittances are transfers between private households, not sovereign foreign aid or commercial loans.",
    example: "Worker remittances exceeded foreign direct investment as the primary source of external capital for the island nation.",
    synonyms: ["Cross-border transfer", "Household transfer", "Funds transfer"],
    antonyms: ["Capital flight", "Domestic deposit"]
  },
  {
    id: 10,
    word: "Conduit",
    pos: "noun",
    phonetic: "/ˈkɒn.dʒuː.ɪt/",
    category: "Academic & Finance",
    cefr: "B2/C1",
    definition: "A channel, pathway, or intermediary organization through which funds, goods, or information are transmitted.",
    satContext: "Traditional remittance conduits, however, impose high intermediation fees and substantial conversion spreads.",
    satTrap: "Literally a pipe or tube; on the SAT, it is almost always used metaphorically as a financial or institutional channel.",
    example: "Commercial banks served as the primary conduit for disbursing emergency government small-business loans.",
    synonyms: ["Intermediary channel", "Pipeline", "Transmission route"],
    antonyms: ["Barrier", "Dead end", "Obstacle"]
  },
  {
    id: 11,
    word: "Spread",
    pos: "noun (finance)",
    phonetic: "/spred/",
    category: "Finance & Economics",
    cefr: "B2",
    definition: "The difference or margin between two rates, prices, or currency exchange bids (e.g., buying price vs. selling price).",
    satContext: "Substantial foreign exchange conversion spreads, which widen sharply during currency depreciation.",
    satTrap: "In economics, 'spread' is not spreading a substance; it specifically measures a pricing differential or interest margin.",
    example: "During the currency panic, money changers widened their exchange spread to protect themselves from rapid devaluation.",
    synonyms: ["Margin", "Differential", "Price gap", "Markup"],
    antonyms: ["Parity", "Price convergence"]
  },
  {
    id: 12,
    word: "Illiquid",
    pos: "adjective",
    phonetic: "/ɪˈlɪk.wɪd/",
    category: "Finance & Economics",
    cefr: "B2/C1",
    definition: "Not easily or quickly converted into cash without a substantial discount or loss in value.",
    satContext: "In recipient economies suffering from illiquid domestic foreign-exchange markets.",
    satTrap: "Illiquid does not mean 'having no value'; it means there are few active buyers, so selling takes time or incurs large losses.",
    example: "Real estate and specialized factory machinery are illiquid assets compared to government treasury bills.",
    synonyms: ["Unmarketable", "Hard-to-convert", "Static"],
    antonyms: ["Liquid", "Readily convertible", "Cash-equivalent"]
  },
  {
    id: 13,
    word: "Secondary Market",
    pos: "noun phrase",
    phonetic: "/ˈsek.ən.dri ˈmɑː.kɪt/",
    category: "Finance & Economics",
    cefr: "B2/C1",
    definition: "A financial market where existing financial securities, shares, or debt instruments are bought and sold among investors rather than issued originally by the borrower.",
    satContext: "Cannot be rapidly liquidated on deep global secondary markets during an acute currency panic.",
    satTrap: "In primary markets, governments/companies issue new debt; in secondary markets, investors trade those existing bonds among themselves.",
    example: "A deep secondary market enables investors to sell sovereign bonds in seconds without causing panic price drops.",
    synonyms: ["Resale market", "Trading exchange", "Aftermarket"],
    antonyms: ["Primary market", "Initial issuance"]
  },
  {
    id: 14,
    word: "Comparability of Treatment",
    pos: "noun phrase",
    phonetic: "/kəmˌpær.əˈbɪl.ə.ti/",
    category: "Multilateral Governance",
    cefr: "C1",
    definition: "A principle in sovereign debt restructuring requiring a debtor nation to seek equivalent debt relief concessions from all creditor classes.",
    satContext: "The primary impediment is the 'comparability of treatment' clause: insisting private creditors accept equal haircuts.",
    satTrap: "Requires private and bilateral lenders to take similar percentage losses, preventing one creditor group from receiving full repayment while others forgive debt.",
    example: "Paris Club governments refused to finalize debt relief until commercial bondholders accepted the comparability of treatment rule.",
    synonyms: ["Equitable burden-sharing", "Uniform creditor sacrifice", "Pari passu loss allocation"],
    antonyms: ["Preferential creditor status", "Unilateral bailout"]
  },
  {
    id: 15,
    word: "Curtailment",
    pos: "noun",
    phonetic: "/kɜːˈteɪl.mənt/",
    category: "Climate & Ecology",
    cefr: "B2/C1",
    definition: "The intentional reduction or restriction of power generation output below what could have been produced, usually to prevent electrical grid congestion.",
    satContext: "Higher investment relative to capacity experienced lower rates of renewable generation curtailment.",
    satTrap: "Curtailment in energy means clean power was generated but wasted because transmission wires lacked carrying capacity.",
    example: "Without new subsea transmission cables, the wind farm suffered a 20% curtailment rate during windy winter months.",
    synonyms: ["Generation waste", "Transmission throttling", "Deliberate cutback"],
    antonyms: ["Full grid integration", "Unrestricted dispatch"]
  },
  {
    id: 16,
    word: "Alluvial Silt",
    pos: "noun phrase",
    phonetic: "/əˈluː.vi.əl sɪlt/",
    category: "Climate & Ecology",
    cefr: "B2/C1",
    definition: "Fine, fertile soil and mineral particles deposited by running river water over floodplains and deltas.",
    satContext: "Because nutrient-dense alluvial silt is retained behind upstream dam walls, downstream deltas suffer.",
    satTrap: "Alluvial refers specifically to soil deposited by rivers, which provides natural fertilizer for agricultural river valleys.",
    example: "Annual floods historically deposited fresh alluvial silt, replenishing topsoil nutrients without chemical fertilizers.",
    synonyms: ["River sediment", "Fluvial deposit", "Alluvium"],
    antonyms: ["Eroded bedrock", "Barren clay"]
  },
  {
    id: 17,
    word: "Starvation",
    pos: "noun (figurative)",
    phonetic: "/stɑːˈveɪ.ʃən/",
    category: "Academic Register",
    cefr: "B2",
    definition: "The severe deprivation, deficiency, or total lack of an essential sustaining resource (such as nutrients, sediment, or capital).",
    satContext: "Downstream agricultural delta regions experience severe sediment starvation, accelerating coastal erosion.",
    satTrap: "On the SAT, 'starvation' is frequently used metaphorically (e.g., 'credit starvation', 'sediment starvation', 'oxygen starvation').",
    example: "The tech startup suffered capital starvation when venture funds withdrew during the interest rate hike.",
    synonyms: ["Deprivation", "Acute deficiency", "Severe deficit"],
    antonyms: ["Abundance", "Surplus", "Sufficiency"]
  },
  {
    id: 18,
    word: "Step-Up",
    pos: "noun (finance)",
    phonetic: "/ˈstep.ʌp/",
    category: "Finance & Economics",
    cefr: "B2/C1",
    definition: "A predetermined, contractual increase in an interest rate or coupon payment triggered when specific covenants or targets are violated.",
    satContext: "Face a financial penalty—an upward interest rate coupon step-up—if deforestation exceeds thresholds.",
    satTrap: "A step-up is an automatic penalty interest hike; a 'step-down' or discount is an interest reduction for meeting goals.",
    example: "The sovereign sustainability bond featured a 50-basis-point coupon step-up if renewable targets were missed by 2026.",
    synonyms: ["Rate penalty", "Contractual interest hike", "Coupon adjustment"],
    antonyms: ["Coupon step-down", "Rate discount"]
  },
  {
    id: 19,
    word: "De Minimis",
    pos: "adjective / noun",
    phonetic: "/deɪ ˈmɪn.ɪ.mɪs/",
    category: "Customs & Trade",
    cefr: "C1",
    definition: "Referring to matters so small or trivial that the law does not bother to regulate or tax them (e.g., duty-free thresholds on low-value parcels).",
    satContext: "Heavily facilitated by 'de minimis' customs exemptions—statutory provisions allowing low-value parcels to enter duty-free.",
    satTrap: "Latin phrase meaning 'about minimal things.' In trade, it refers to the dollar amount below which imported parcels pay zero customs duties.",
    example: "Raising the de minimis threshold from $50 to $800 allowed international e-commerce platforms to ship goods without tariffs.",
    synonyms: ["Exemption threshold", "Nominal minimum", "Duty-free allowance"],
    antonyms: ["Comprehensive duty", "Strict tariff barrier"]
  },
  {
    id: 20,
    word: "Arbitrage",
    pos: "noun",
    phonetic: "/ˈɑː.bɪ.trɑːʒ/",
    category: "Finance & Economics",
    cefr: "B2/C1",
    definition: "The simultaneous purchase and sale of an asset or good in different markets to profit from a disparity in prices or regulatory duties.",
    satContext: "Exploiting tariff and regulatory arbitrage to systematically bypass domestic sales taxes.",
    satTrap: "Arbitrage is legal exploitation of price/tax differences across borders, not illegal theft or random trading.",
    example: "Cross-border shoppers engaged in tax arbitrage by purchasing electronics in the duty-free border enclave.",
    synonyms: ["Price-gap exploitation", "Regulatory maneuvering", "Market spread trading"],
    antonyms: ["Market equilibrium", "Uniform pricing"]
  },
  {
    id: 21,
    word: "Dutch Disease",
    pos: "noun phrase",
    phonetic: "/dʌtʃ dɪˈziːz/",
    category: "Macroeconomics & Trade",
    cefr: "C1",
    definition: "The economic phenomenon where a sudden boom in natural resource exports causes the national currency to appreciate, making all other industrial and agricultural exports uncompetitive.",
    satContext: "Massive offshore hydrocarbons frequently trigger an economic syndrome known as 'Dutch Disease.'",
    satTrap: "Named after the 1960s North Sea natural gas discovery in the Netherlands. It describes a macroeconomic paradox where resource wealth hurts manufacturing.",
    example: "The oil-exporting nation suffered from Dutch Disease as its strong currency crushed its domestic automobile export industry.",
    synonyms: ["Resource curse", "Resource de-industrialization", "Petro-currency distortion"],
    antonyms: ["Balanced industrial growth", "Diversified export economy"]
  },
  {
    id: 22,
    word: "Sterilize",
    pos: "verb (economics)",
    phonetic: "/ˈster.ə.laɪz/",
    category: "Finance & Economics",
    cefr: "B2/C1",
    definition: "To conduct central bank monetary operations (such as issuing bonds) to neutralize the domestic inflationary impact of large foreign currency inflows.",
    satContext: "Unless sovereign governments implement wealth funds to sterilize foreign capital inflows.",
    satTrap: "In economics, 'sterilize' does not mean medical disinfection; it means preventing sudden foreign currency influxes from inflating the domestic money supply.",
    example: "The central bank sterilized the billion-dollar mining revenue by absorbing excess currency through sovereign savings bonds.",
    synonyms: ["Neutralize", "Offset monetary expansion", "Counterbalance"],
    antonyms: ["Monetize", "Inflate domestic supply"]
  },
  {
    id: 23,
    word: "Additionality",
    pos: "noun",
    phonetic: "/əˌdɪʃ.əˈnæl.ə.ti/",
    category: "Climate & Ecology",
    cefr: "C1",
    definition: "The property of a carbon reduction or environmental project proving that the positive environmental outcome would not have occurred without the incentive of carbon credit finance.",
    satContext: "Under Article 6.4, carbon credit trading requires stringent verification of 'additionality.'",
    satTrap: "If a forest was already legally protected and never in danger of logging, preserving it lacks additionality.",
    example: "Auditors rejected the offset claim because the wind farm was already profitable and lacked true additionality.",
    synonyms: ["Genuine incremental impact", "Counterfactual necessity", "Causal benefit"],
    antonyms: ["Non-additional baseline", "Spurious credit"]
  },
  {
    id: 24,
    word: "Counterfactual",
    pos: "adjective / noun",
    phonetic: "/ˌkaʊn.təˈfæk.tʃu.əl/",
    category: "Academic Register",
    cefr: "C1",
    definition: "Relating to or expressing what would have happened under different conditions; a hypothetical alternative scenario contrary to past facts.",
    satContext: "Offset credits were generated using inflated counterfactual baselines that exaggerated projected logging.",
    satTrap: "A counterfactual baseline is an unobservable estimate of 'what would have happened without the project.'",
    example: "Economists compared actual hospital admissions to a counterfactual model estimating outcomes without the vaccine mandate.",
    synonyms: ["Hypothetical scenario", "Alternative baseline", "What-if projection"],
    antonyms: ["Observed fact", "Empirical record", "Actual outcome"]
  },
  {
    id: 25,
    word: "Virtual Water",
    pos: "noun phrase",
    phonetic: "/ˈvɜː.tʃu.əl ˈwɔː.tər/",
    category: "Climate & Ecology",
    cefr: "B2/C1",
    definition: "The hidden volume of freshwater consumed, evaporated, or polluted in the step-by-step production of agricultural crops or manufactured goods.",
    satContext: "In arid economies facing aquifer depletion, economists analyze 'virtual water exports.'",
    satTrap: "Virtual water is not software or digital water; it is the real physical water embodied in traded commodities (e.g., 2,800 liters of water embedded in 1 kg of cotton).",
    example: "By importing beef instead of raising cattle locally, the desert country preserved its domestic virtual water reserves.",
    synonyms: ["Embedded water footprint", "Embodied freshwater", "Hidden water cost"],
    antonyms: ["Direct surface runoff", "Desalinated tap water"]
  },
  {
    id: 26,
    word: "Parametric",
    pos: "adjective",
    phonetic: "/ˌpær.əˈmet.rɪk/",
    category: "Finance & Economics",
    cefr: "C1",
    definition: "Referring to contracts or insurance models whose payouts are triggered automatically by predefined index measurements (e.g. satellite rainfall or wind speed) rather than individual loss assessments.",
    satContext: "Insurers have introduced 'parametric insurance'—which automatically triggers payouts based on satellite weather data.",
    satTrap: "Unlike traditional indemnity insurance that requires sending an adjuster to inspect damage, parametric insurance pays immediately once a data threshold is crossed.",
    example: "The parametric flood policy transferred funds to farmers' accounts within 48 hours of river water gauges exceeding 5 meters.",
    synonyms: ["Index-based", "Metric-triggered", "Automated-payout"],
    antonyms: ["Indemnity-based", "Claims-adjusted"]
  },
  {
    id: 27,
    word: "Non-Discretionary",
    pos: "adjective",
    phonetic: "/ˌnɒn.dɪˈskreʃ.ən.ər.i/",
    category: "Academic & Finance",
    cefr: "B2/C1",
    definition: "Compulsory; mandatory by statutory law, formal rule, or fiduciary policy, leaving no freedom or choice for individual judgment.",
    satContext: "Experience an abrupt wave of non-discretionary capital flight that sharply depresses bond prices.",
    satTrap: "'Discretionary' means optional or at personal discretion; 'non-discretionary' means obligatory and legally required.",
    example: "Pension fund regulations made divestment non-discretionary once the sovereign debt rating was downgraded to junk.",
    synonyms: ["Mandatory", "Obligatory", "Statutory", "Compulsory"],
    antonyms: ["Discretionary", "Optional", "Voluntary", "Flexible"]
  },
  {
    id: 28,
    word: "Retaliatory",
    pos: "adjective",
    phonetic: "/rɪˈtæl.jə.tər.i/",
    category: "Macroeconomics & Trade",
    cefr: "B2",
    definition: "Done in order to seek revenge or return harm in response to an initial aggressive action or trade penalty.",
    satContext: "Prompting home nations of affected tech giants to levy retaliatory 25% import tariffs on luxury goods.",
    satTrap: "In international trade disputes, a retaliatory tariff is a counter-tax imposed specifically to punish another country's initial unilateral tax.",
    example: "When the nation restricted agricultural imports, the trading partner responded with retaliatory duties on steel and aircraft.",
    synonyms: ["Counteractive", "Reciprocal", "Punitive", "Vindictive"],
    antonyms: ["Concessional", "Conciliatory", "Cooperative"]
  },
  {
    id: 29,
    word: "Internalize",
    pos: "verb (economics)",
    phonetic: "/ɪnˈtɜː.nəl.aɪz/",
    category: "Climate & Economics",
    cefr: "B2/C1",
    definition: "To incorporate an external cost or benefit (an externality) into the private pricing and financial accounts of the individual or firm responsible for it.",
    satContext: "Multilateral frameworks have successfully forced upwind emitter states to internalize the ecological costs of their emissions.",
    satTrap: "When factories pollute for free, the cost is externalized onto the public. A carbon tax forces the factory to 'internalize' that cost into its own budget.",
    example: "A mandatory landfill tax forced packaging manufacturers to internalize the cost of plastic waste disposal.",
    synonyms: ["Absorb external costs", "Account for externalities", "Incorporate liabilities"],
    antonyms: ["Externalize", "Shift societal burden"]
  },
  {
    id: 30,
    word: "Monopsony",
    pos: "noun",
    phonetic: "/məˈnɒp.sə.ni/",
    category: "Macroeconomics & Trade",
    cefr: "C1",
    definition: "A market situation in which there is only one buyer or a single dominant purchasing entity controlling the demand for a product or factor of production.",
    satContext: "State-owned mineral trading corporations exerted monopsony purchasing power over domestic artisanal miners.",
    satTrap: "Do not confuse with 'monopoly' (one seller controlling supply). A 'monopsony' is one buyer controlling purchase price.",
    example: "Because the government was the sole licensed purchaser of unrefined cocoa beans, it operated as a monopsony.",
    synonyms: ["Single-buyer market", "Buyer dominance", "Purchaser cartel"],
    antonyms: ["Monopoly", "Competitive buyer market"]
  }
];

// Flashcard State
const flashcardState = {
  currentIndex: 0,
  isFlipped: false,
  filterCategory: 'all',
  searchQuery: '',
  masteredCards: new Set(), // Set of card IDs
  reviewCards: new Set()    // Set of card IDs
};

// Filtered deck getter
function getFilteredDeck() {
  return satVocabDeck.filter(card => {
    const matchesCat = flashcardState.filterCategory === 'all' || card.category.toLowerCase().includes(flashcardState.filterCategory.toLowerCase());
    const query = flashcardState.searchQuery.toLowerCase().trim();
    const matchesQuery = !query || 
      card.word.toLowerCase().includes(query) || 
      card.definition.toLowerCase().includes(query) ||
      card.satContext.toLowerCase().includes(query);
    return matchesCat && matchesQuery;
  });
}

// Render Flashcard UI
function renderFlashcardUI() {
  const deck = getFilteredDeck();
  const container = document.getElementById('flashcard-render-container');
  const cardCounter = document.getElementById('fc-card-counter');
  const masteredCountEl = document.getElementById('fc-mastered-count');
  const learningCountEl = document.getElementById('fc-learning-count');
  const fcProgressBar = document.getElementById('fc-progress-bar');
  const prevCardBtn = document.getElementById('fc-prev-btn');
  const nextCardBtn = document.getElementById('fc-next-btn');

  if (!container) return;

  // Update counters
  const totalMastered = flashcardState.masteredCards.size;
  const totalInDeck = satVocabDeck.length;
  if (masteredCountEl) masteredCountEl.textContent = `${totalMastered} Mastered`;
  if (learningCountEl) learningCountEl.textContent = `${totalInDeck - totalMastered} Remaining`;
  if (fcProgressBar) {
    const pct = Math.round((totalMastered / totalInDeck) * 100);
    fcProgressBar.style.width = `${pct}%`;
  }

  if (deck.length === 0) {
    container.innerHTML = `
      <div class="fc-empty-state">
        <p>🔍 No vocabulary terms match your search or category filter.</p>
        <button id="fc-reset-filter-btn" class="btn-sm">Reset Filters</button>
      </div>
    `;
    const resetBtn = document.getElementById('fc-reset-filter-btn');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        flashcardState.filterCategory = 'all';
        flashcardState.searchQuery = '';
        const searchInput = document.getElementById('fc-search-input');
        if (searchInput) searchInput.value = '';
        renderFlashcardUI();
      });
    }
    if (cardCounter) cardCounter.textContent = '0 of 0';
    if (prevCardBtn) prevCardBtn.disabled = true;
    if (nextCardBtn) nextCardBtn.disabled = true;
    return;
  }

  // Ensure index is within bounds
  if (flashcardState.currentIndex >= deck.length) {
    flashcardState.currentIndex = 0;
  }
  if (flashcardState.currentIndex < 0) {
    flashcardState.currentIndex = deck.length - 1;
  }

  const currentCard = deck[flashcardState.currentIndex];
  const isMastered = flashcardState.masteredCards.has(currentCard.id);

  if (cardCounter) {
    cardCounter.textContent = `Card ${flashcardState.currentIndex + 1} of ${deck.length}`;
  }

  if (prevCardBtn) prevCardBtn.disabled = flashcardState.currentIndex === 0;
  if (nextCardBtn) nextCardBtn.disabled = flashcardState.currentIndex === deck.length - 1;

  container.innerHTML = `
    <div class="flashcard-3d-wrapper ${flashcardState.isFlipped ? 'flipped' : ''}" id="main-flashcard">
      
      <!-- FRONT OF CARD -->
      <div class="flashcard-face flashcard-front">
        <div class="fc-top-bar">
          <span class="fc-category-badge">${currentCard.category}</span>
          <span class="fc-cefr-badge">${currentCard.cefr}</span>
          ${isMastered ? '<span class="fc-status-badge mastered">✓ Mastered</span>' : '<span class="fc-status-badge learning">Learning</span>'}
        </div>

        <div class="fc-main-content">
          <div class="fc-word-header">
            <h2 class="fc-word">${currentCard.word}</h2>
            <button class="fc-audio-btn" id="fc-speak-btn" title="Pronounce word" aria-label="Pronounce ${currentCard.word}">🔊</button>
          </div>
          <div class="fc-pos-phonetic">
            <span class="fc-pos"><em>${currentCard.pos}</em></span>
            <span class="fc-phonetic">${currentCard.phonetic}</span>
          </div>

          <div class="fc-sat-context-box">
            <span class="fc-box-label">Context in SAT Passages:</span>
            <p class="fc-context-text">"...${currentCard.satContext}..."</p>
          </div>
        </div>

        <div class="fc-bottom-hint">
          <span>Click card or press <strong>Space</strong> to flip definition ↷</span>
        </div>
      </div>

      <!-- BACK OF CARD -->
      <div class="flashcard-face flashcard-back">
        <div class="fc-top-bar">
          <span class="fc-category-badge">${currentCard.category}</span>
          <span class="fc-word-mini"><strong>${currentCard.word}</strong> (${currentCard.pos})</span>
        </div>

        <div class="fc-back-content">
          <div class="fc-def-block">
            <h3 class="fc-back-heading">Definition</h3>
            <p class="fc-definition">${currentCard.definition}</p>
          </div>

          <div class="fc-trap-block">
            <h3 class="fc-back-heading trap-heading">⚠️ SAT Trap & Nuance</h3>
            <p class="fc-trap-text">${currentCard.satTrap}</p>
          </div>

          <div class="fc-example-block">
            <h3 class="fc-back-heading">Example in Academic Context</h3>
            <p class="fc-example-text">"${currentCard.example}"</p>
          </div>

          <div class="fc-synonyms-row">
            <span class="syn-label">Synonyms:</span>
            <span class="syn-text">${currentCard.synonyms.join(', ')}</span>
          </div>
        </div>

        <div class="fc-bottom-hint">
          <span>Click card or press <strong>Space</strong> to flip back ↶</span>
        </div>
      </div>

    </div>
  `;

  // Attach flip listener
  const cardElement = document.getElementById('main-flashcard');
  if (cardElement) {
    cardElement.addEventListener('click', (e) => {
      // Don't flip if audio button clicked
      if (e.target.closest('#fc-speak-btn')) return;
      toggleCardFlip();
    });
  }

  // Audio speech synthesis
  const speakBtn = document.getElementById('fc-speak-btn');
  if (speakBtn) {
    speakBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      speakWord(currentCard.word);
    });
  }
}

// Speak word using Web Speech API
function speakWord(text) {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = 0.9;
    window.speechSynthesis.speak(utterance);
  }
}

// Flip card
function toggleCardFlip() {
  flashcardState.isFlipped = !flashcardState.isFlipped;
  const card = document.getElementById('main-flashcard');
  if (card) {
    card.classList.toggle('flipped', flashcardState.isFlipped);
  }
}

// Mark current card as Mastered
function markCardMastered() {
  const deck = getFilteredDeck();
  if (deck.length === 0) return;
  const currentCard = deck[flashcardState.currentIndex];
  flashcardState.masteredCards.add(currentCard.id);
  flashcardState.reviewCards.delete(currentCard.id);
  flashcardState.isFlipped = false;
  
  // Advance to next card if available
  if (flashcardState.currentIndex < deck.length - 1) {
    flashcardState.currentIndex++;
  }
  renderFlashcardUI();
}

// Mark current card as Still Learning
function markCardLearning() {
  const deck = getFilteredDeck();
  if (deck.length === 0) return;
  const currentCard = deck[flashcardState.currentIndex];
  flashcardState.masteredCards.delete(currentCard.id);
  flashcardState.reviewCards.add(currentCard.id);
  flashcardState.isFlipped = false;

  // Advance to next card if available
  if (flashcardState.currentIndex < deck.length - 1) {
    flashcardState.currentIndex++;
  }
  renderFlashcardUI();
}

// Shuffle deck
function shuffleVocabDeck() {
  for (let i = satVocabDeck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [satVocabDeck[i], satVocabDeck[j]] = [satVocabDeck[j], satVocabDeck[i]];
  }
  flashcardState.currentIndex = 0;
  flashcardState.isFlipped = false;
  renderFlashcardUI();
}
