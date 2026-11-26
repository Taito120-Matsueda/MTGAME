// 画面切り替え用関数
function showScreen(screenId) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(screenId).classList.add('active');
}

// サンプルデータ（ここをChatGPTに書き換えさせる）
const questions = [
  { text: "サンプル質問1：休日の過ごし方は？", choices: ["外でアクティブに", "家でまったり"] },
  { text: "サンプル質問2：直感と論理どっち派？", choices: ["完全に直感", "データと論理"] }
];

let currentStep = 0;
let answers = [];

document.getElementById('btn-start').addEventListener('click', () => {
  currentStep = 0;
  answers = [];
  renderStep();
  showScreen('screen-main');
});

document.getElementById('btn-retry').addEventListener('click', () => {
  showScreen('screen-start');
});

function renderStep() {
  const q = questions[currentStep];
  document.getElementById('question-text').textContent = q.text;
  document.getElementById('progress-fill').style.width = `${((currentStep + 1) / questions.length) * 100}%`;

  const container = document.getElementById('choices-container');
  container.innerHTML = '';

  q.choices.forEach((choice, index) => {
    const btn = document.createElement('button');
    btn.className = 'choice-btn';
    btn.textContent = choice;
    btn.onclick = () => handleSelect(index);
    container.appendChild(btn);
  });
}

function handleSelect(choiceIndex) {
  answers.push(choiceIndex);
  currentStep++;
  if (currentStep < questions.length) {
    renderStep();
  } else {
    showResult();
  }
}

function showResult() {
  document.getElementById('result-title').textContent = "診断完了！";
  document.getElementById('result-desc').textContent = `あなたの選択パターンは [${answers.join(' → ')}] です。`;
  showScreen('screen-result');
}
