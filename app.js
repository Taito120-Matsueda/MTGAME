
const questions = [
  {
    question: "シンデレラが舞踏会に行くとき、魔法で変身した乗り物は？",
    choices: [
      "① 魔法の馬車",
      "② かぼちゃの馬車",
      "③ 白い船",
      "④ 空飛ぶじゅうたん"
    ],
    answer: 1,
    explanation: "正解はかぼちゃの馬車！フェアリー・ゴッドマザーの魔法で、かぼちゃが豪華な馬車に変身しました。"
  },
  {
    question: "映画『リトル・マーメイド』の主人公アリエルが住んでいる海は？",
    choices: [
      "① インド洋",
      "② 北極海",
      "③ 大西洋",
      "④ 地中海"
    ],
    answer: 2,
    explanation: "アリエルは海の王トリトンの娘。物語の舞台は大西洋の海の世界として描かれています。"
  },
  {
    question: "『トイ・ストーリー』のウッディの職業・設定は？",
    choices: [
      "① 宇宙飛行士",
      "② カウボーイ",
      "③ 海賊",
      "④ 王子様"
    ],
    answer: 1,
    explanation: "正解はカウボーイ！ウッディはアンディのお気に入りのおもちゃで、保安官の人形です。"
  },
  {
    question: "『アナと雪の女王』で、エルサが持つ魔法の力は？",
    choices: [
      "① 火を操る力",
      "② 動物と話す力",
      "③ 氷や雪を操る力",
      "④ 時間を止める力"
    ],
    answer: 2,
    explanation: "正解は氷や雪を操る力！エルサは美しい氷の城を作ることもできます。"
  },
  {
    question: "『ライオン・キング』の主人公シンバの父親の名前は？",
    choices: [
      "① スカー",
      "② ティモン",
      "③ ラフィキ",
      "④ ムファサ"
    ],
    answer: 3,
    explanation: "正解はムファサ！プライドランドの王であり、シンバに大切なことを教えてくれる父親です。"
  }
];

let currentQuestion = 0;
let correctCount = 0;
let answered = false;

const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");

const startBtn = document.getElementById("start-btn");
const nextBtn = document.getElementById("next-btn");
const retryBtn = document.getElementById("retry-btn");

const questionNumber = document.getElementById("question-number");
const scoreElement = document.getElementById("score");
const questionText = document.getElementById("question-text");
const choicesElement = document.getElementById("choices");
const progressElement = document.getElementById("progress");

const feedback = document.getElementById("feedback");
const feedbackTitle = document.getElementById("feedback-title");
const feedbackExplanation = document.getElementById("feedback-explanation");

function showScreen(screen) {
  startScreen.classList.add("hidden");
  quizScreen.classList.add("hidden");
  resultScreen.classList.add("hidden");

  screen.classList.remove("hidden");
}

function startQuiz() {
  currentQuestion = 0;
  correctCount = 0;
  answered = false;

  scoreElement.textContent = "⭐ 0点";

  showScreen(quizScreen);
  showQuestion();
}

function showQuestion() {
  answered = false;

  const question = questions[currentQuestion];

  questionNumber.textContent =
    `QUESTION ${currentQuestion + 1} / ${questions.length}`;

  questionText.textContent = question.question;

  progressElement.style.width =
    `${((currentQuestion + 1) / questions.length) * 100}%`;

  choicesElement.innerHTML = "";

  feedback.classList.add("hidden");
  nextBtn.classList.add("hidden");

  question.choices.forEach((choice, index) => {
    const button = document.createElement("button");

    button.className = "choice-btn";
    button.textContent = choice;

    button.addEventListener("click", () => {
      checkAnswer(index);
    });

    choicesElement.appendChild(button);
  });
}

function checkAnswer(selectedIndex) {
  if (answered) return;

  answered = true;

  const question = questions[currentQuestion];
  const buttons = choicesElement.querySelectorAll(".choice-btn");

  buttons.forEach((button, index) => {
    button.disabled = true;

    if (index === question.answer) {
      button.classList.add("correct");
    }
  });

  if (selectedIndex === question.answer) {
    correctCount++;

    feedbackTitle.textContent = "正解！✨";
    feedbackTitle.style.color = "#8fffc0";
  } else {
    buttons[selectedIndex].classList.add("wrong");

    feedbackTitle.textContent = "残念…！💦";
    feedbackTitle.style.color = "#ffaaaa";
  }

  scoreElement.textContent = `⭐ ${correctCount}点`;

  feedbackExplanation.textContent = question.explanation;

  feedback.classList.remove("hidden");

  if (currentQuestion === questions.length - 1) {
    nextBtn.textContent = "結果を見る 🏆";
  } else {
    nextBtn.textContent = "次へ進む ➜";
  }

  nextBtn.classList.remove("hidden");
}

function nextQuestion() {
  if (!answered) return;

  currentQuestion++;

  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  showScreen(resultScreen);

  document.getElementById("final-score").textContent = correctCount;

  const rankTitle = document.getElementById("rank-title");
  const rankMessage = document.getElementById("rank-message");

  if (correctCount === 5) {
    rankTitle.textContent = "👑 ディズニーマスター";
    rankMessage.textContent =
      "全問正解！あなたは夢と魔法の世界を知り尽くした真のマスター！";
  } else if (correctCount === 4) {
    rankTitle.textContent = "✨ 魔法のエキスパート";
    rankMessage.textContent =
      "すごい！ディズニーの知識がとっても豊富な魔法使い！";
  } else if (correctCount === 3) {
    rankTitle.textContent = "🌟 魔法使いの弟子";
    rankMessage.textContent =
      "なかなかの実力！もっと映画を見ればマスターに近づけるかも！";
  } else if (correctCount === 2) {
    rankTitle.textContent = "🪄 見習い魔法使い";
    rankMessage.textContent =
      "魔法の世界への第一歩！新しい発見を楽しもう！";
  } else {
    rankTitle.textContent = "🌙 夢見る冒険者";
    rankMessage.textContent =
      "ここから冒険が始まるよ！もう一度挑戦してみよう！";
  }
}

startBtn.addEventListener("click", startQuiz);

nextBtn.addEventListener("click", nextQuestion);

retryBtn.addEventListener("click", startQuiz);
