
const questions = [
  {
    question: "シンデレラが舞踏会へ行くとき、魔法で変身したものは？",
    choices: [
      "魔法のじゅうたん",
      "かぼちゃの馬車",
      "白い船",
      "金色の馬"
    ],
    answer: 1,
    explanation: "フェアリー・ゴッドマザーの魔法で、かぼちゃが美しい馬車に変身しました！"
  },
  {
    question: "『リトル・マーメイド』の主人公アリエルが憧れていた世界は？",
    choices: [
      "空の上の世界",
      "森の世界",
      "人間の世界",
      "氷の世界"
    ],
    answer: 2,
    explanation: "アリエルは人間の世界に強い憧れを持っていました。地上の道具を集めるのも大好き！"
  },
  {
    question: "『トイ・ストーリー』のウッディは何のおもちゃ？",
    choices: [
      "宇宙飛行士",
      "ロボット",
      "カウボーイ",
      "海賊"
    ],
    answer: 2,
    explanation: "ウッディは保安官のカウボーイ人形。仲間思いでアンディのお気に入りです！"
  },
  {
    question: "『アナと雪の女王』で、エルサが持っている魔法の力は？",
    choices: [
      "火を操る力",
      "氷や雪を操る力",
      "動物と話す力",
      "空を飛ぶ力"
    ],
    answer: 1,
    explanation: "エルサは氷や雪を自由に操る力を持っています。美しい氷のお城も作りました！"
  },
  {
    question: "『ライオン・キング』の主人公シンバの父親は誰？",
    choices: [
      "スカー",
      "ティモン",
      "ラフィキ",
      "ムファサ"
    ],
    answer: 3,
    explanation: "ムファサはプライドランドの王であり、シンバの大切な父親です！"
  }
];

// =================================
// ゲームの状態
// =================================

let currentQuestion = 0;
let correctCount = 0;
let answered = false;

// =================================
// HTML要素
// =================================

const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");

const startBtn = document.getElementById("start-btn");
const nextBtn = document.getElementById("next-btn");
const retryBtn = document.getElementById("retry-btn");

const questionNumber = document.getElementById("question-number");
const questionIndex = document.getElementById("question-index");
const questionText = document.getElementById("question-text");

const choicesElement = document.getElementById("choices");
const progressElement = document.getElementById("progress");
const progressPercent = document.getElementById("progress-percent");

const feedback = document.getElementById("feedback");
const feedbackIcon = document.getElementById("feedback-icon");
const feedbackTitle = document.getElementById("feedback-title");
const feedbackExplanation = document.getElementById("feedback-explanation");

// =================================
// 画面切り替え
// =================================

function showScreen(screen) {
  startScreen.hidden = true;
  quizScreen.hidden = true;
  resultScreen.hidden = true;

  screen.hidden = false;

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

// =================================
// ゲーム開始
// =================================

function startQuiz() {
  currentQuestion = 0;
  correctCount = 0;
  answered = false;

  showScreen(quizScreen);
  showQuestion();
}

// =================================
// 問題表示
// =================================

function showQuestion() {
  answered = false;

  const question = questions[currentQuestion];

  const number = String(currentQuestion + 1).padStart(2, "0");

  questionNumber.textContent = number;
  questionIndex.textContent = number;

  questionText.textContent = question.question;

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  progressElement.style.width = `${progress}%`;
  progressPercent.textContent = `${progress}%`;

  choicesElement.innerHTML = "";

  feedback.hidden = true;
  nextBtn.hidden = true;

  question.choices.forEach((choice, index) => {
    const button = document.createElement("button");

    button.className = "choice-btn";

    const numberLabel = document.createElement("span");
    numberLabel.className = "choice-number";
    numberLabel.textContent = `0${index + 1}`;

    const choiceText = document.createElement("span");
    choiceText.textContent = choice;

    button.appendChild(numberLabel);
    button.appendChild(choiceText);

    button.addEventListener("click", () => {
      checkAnswer(index);
    });

    choicesElement.appendChild(button);
  });
}

// =================================
// 回答チェック
// =================================

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

    feedbackIcon.textContent = "✦";
    feedbackTitle.textContent = "正解！✨";

    feedbackTitle.style.color = "#a8efd0";
    feedbackIcon.style.color = "#a8efd0";

  } else {
    buttons[selectedIndex].classList.add("wrong");

    feedbackIcon.textContent = "✧";
    feedbackTitle.textContent = "残念…！";

    feedbackTitle.style.color = "#ffc0c0";
    feedbackIcon.style.color = "#ffc0c0";
  }

  feedbackExplanation.textContent = question.explanation;

  feedback.hidden = false;

  if (currentQuestion === questions.length - 1) {
    nextBtn.querySelector("span:first-child").textContent = "結果を見る";
    nextBtn.querySelector(".btn-arrow").textContent = "✧";
  } else {
    nextBtn.querySelector("span:first-child").textContent = "次の問題へ";
    nextBtn.querySelector(".btn-arrow").textContent = "→";
  }

  nextBtn.hidden = false;

  // 解説が見える位置に移動
  setTimeout(() => {
    nextBtn.scrollIntoView({
      behavior: "smooth",
      block: "nearest"
    });
  }, 100);
}

// =================================
// 次の問題
// =================================

function nextQuestion() {
  if (!answered) return;

  currentQuestion++;

  if (currentQuestion < questions.length) {
    showQuestion();

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  } else {
    showResult();
  }
}

// =================================
// 結果表示
// =================================

function showResult() {
  showScreen(resultScreen);

  document.getElementById("final-score").textContent = correctCount;

  const rankTitle = document.getElementById("rank-title");
  const rankMessage = document.getElementById("rank-message");

  if (correctCount === 5) {
    rankTitle.textContent = "👑 ディズニーマスター";
    rankMessage.textContent =
      "全問正解！素晴らしい！あなたは夢と魔法の世界を知り尽くした真のマスター！";

  } else if (correctCount === 4) {
    rankTitle.textContent = "✨ 魔法のエキスパート";
    rankMessage.textContent =
      "あと一歩でパーフェクト！あなたのディズニー愛は本物です！";

  } else if (correctCount === 3) {
    rankTitle.textContent = "🌟 魔法使いの弟子";
    rankMessage.textContent =
      "すごい！あなたには魔法の才能があります。次はマスターを目指そう！";

  } else if (correctCount === 2) {
    rankTitle.textContent = "🪄 見習い魔法使い";
    rankMessage.textContent =
      "魔法の世界への第一歩！新しい物語との出会いを楽しんでね！";

  } else {
    rankTitle.textContent = "🌙 夢見る冒険者";
    rankMessage.textContent =
      "冒険はまだ始まったばかり！もう一度挑戦して魔法の力を磨こう！";
  }
}

// =================================
// ボタンイベント
// =================================

startBtn.addEventListener("click", startQuiz);

nextBtn.addEventListener("click", nextQuestion);

retryBtn.addEventListener("click", startQuiz);
