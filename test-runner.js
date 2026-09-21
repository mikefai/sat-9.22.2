const fs = require('fs');

console.log('--- STARTING COMPREHENSIVE AUTOMATED TEST SUITE ---');

// Mock Browser Environment
global.window = {
  addEventListener: () => {},
  speechSynthesis: { speak: () => {}, cancel: () => {} },
  getSelection: () => ({ rangeCount: 0 })
};

global.document = {
  documentElement: { style: { setProperty: () => {} } },
  body: { classList: { toggle: () => {}, add: () => {}, remove: () => {} }, style: {} },
  getElementById: (id) => ({
    id,
    addEventListener: () => {},
    setAttribute: () => {},
    removeAttribute: () => {},
    classList: { toggle: () => {}, add: () => {}, remove: () => {}, contains: () => false },
    style: {},
    innerHTML: '',
    textContent: '',
    value: '',
    disabled: false,
    hidden: false,
    showModal: () => {},
    close: () => {},
    getBoundingClientRect: () => ({ top: 0, left: 0, width: 500, height: 500 })
  }),
  querySelectorAll: () => [],
  querySelector: () => null,
  addEventListener: () => {},
  createElement: (tag) => ({
    tagName: tag.toUpperCase(),
    setAttribute: () => {},
    appendChild: () => {},
    classList: { add: () => {}, remove: () => {}, toggle: () => {} },
    style: {},
    dataset: {}
  })
};

let errors = [];

// 1. Verify index.html exists & check IDs referenced in app.js
const htmlContent = fs.readFileSync('index.html', 'utf8');
const appContent = fs.readFileSync('app.js', 'utf8');
const vocabContent = fs.readFileSync('vocab-data.js', 'utf8');

const idRegex = /document\.getElementById\(['"]([^'"]+)['"]\)/g;
let match;
const referencedIds = new Set();
while ((match = idRegex.exec(appContent)) !== null) {
  referencedIds.add(match[1]);
}

referencedIds.forEach(id => {
  if (!htmlContent.includes(`id="${id}"`) && !htmlContent.includes(`id='${id}'`)) {
    // Check if dynamically created or missing
    errors.push(`Missing DOM ID in index.html: "${id}"`);
  }
});

console.log(`✅ DOM IDs checked: ${referencedIds.size} referenced IDs verified.`);

// 2. Validate vocab-data.js
try {
  eval(vocabContent.replace('const satVocabDeck', 'global.satVocabDeck'));
  if (!Array.isArray(global.satVocabDeck) || global.satVocabDeck.length !== 30) {
    errors.push(`Vocab deck length expected 30, got ${global.satVocabDeck ? global.satVocabDeck.length : 0}`);
  } else {
    global.satVocabDeck.forEach((card, idx) => {
      const fields = ['id', 'word', 'pos', 'phonetic', 'category', 'cefr', 'definition', 'satContext', 'satTrap', 'example', 'synonyms'];
      fields.forEach(f => {
        if (!card[f]) errors.push(`Vocab Card #${idx + 1} (${card.word || 'unknown'}) missing field "${f}"`);
      });
    });
  }
} catch (e) {
  errors.push(`vocab-data.js execution error: ${e.message}`);
}
console.log(`✅ Vocab Deck checked: 30 terms validated.`);

// 3. Validate satQuestions in app.js
try {
  eval(appContent.replace('const satQuestions', 'global.satQuestions'));
  const questions = global.satQuestions;
  if (!Array.isArray(questions) || questions.length !== 28) {
    errors.push(`SAT questions length expected 28, got ${questions ? questions.length : 0}`);
  } else {
    const keyCounts = { A: 0, B: 0, C: 0, D: 0 };
    questions.forEach((q, i) => {
      const num = i + 1;
      if (!q.skill) errors.push(`Q${num}: Missing skill property`);
      if (!q.prompt) errors.push(`Q${num}: Missing prompt property`);
      if (!q.passageHtml) errors.push(`Q${num}: Missing passageHtml property`);
      if (!Array.isArray(q.options) || q.options.length !== 4) {
        errors.push(`Q${num}: Expected 4 options, got ${q.options ? q.options.length : 0}`);
        return;
      }
      
      const letters = ['A', 'B', 'C', 'D'];
      const correctOpts = [];
      q.options.forEach((opt, optIdx) => {
        if (opt.letter !== letters[optIdx]) {
          errors.push(`Q${num} Option ${optIdx}: Expected letter ${letters[optIdx]}, got ${opt.letter}`);
        }
        if (opt.isCorrect) correctOpts.push(opt);
      });

      if (correctOpts.length !== 1) {
        errors.push(`Q${num}: Expected exactly 1 correct option, found ${correctOpts.length}`);
      } else {
        keyCounts[correctOpts[0].letter]++;
      }

      if (!q.correctExplanation) errors.push(`Q${num}: Missing correctExplanation`);
      if (!Array.isArray(q.distractorExplanations) || q.distractorExplanations.length !== 3) {
        errors.push(`Q${num}: Expected 3 distractor explanations, got ${q.distractorExplanations ? q.distractorExplanations.length : 0}`);
      }
      if (!q.internationalTip) errors.push(`Q${num}: Missing internationalTip`);
    });

    console.log(`✅ Key distribution verification:`, keyCounts);
    if (keyCounts.A !== 7 || keyCounts.B !== 7 || keyCounts.C !== 7 || keyCounts.D !== 7) {
      errors.push(`Key distribution unbalanced: ${JSON.stringify(keyCounts)}`);
    }
  }
} catch (e) {
  errors.push(`app.js execution error: ${e.message}`);
}

// Summary Report
if (errors.length > 0) {
  console.error('\n❌ TEST SUITE FAILED WITH THE FOLLOWING ERRORS:');
  errors.forEach(err => console.error(`  - ${err}`));
  process.exit(1);
} else {
  console.log('\n🎉 ALL TESTS PASSED SUCCESSFULLY WITH ZERO ERRORS!');
  process.exit(0);
}
