
// ========================================
// 難易度別クイズデータ
// answer は 0から始まる番号
// ========================================

const quizData = {

  beginner: {
    name: "初級",
    questions: [
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
        question: "『アナと雪の女王』でエルサが持っている魔法の力は？",
        choices: [
          "火を操る力",
          "空を飛ぶ力",
          "氷や雪を操る力",
          "動物と話す力"
        ],
        answer: 2,
        explanation: "エルサは氷や雪を自由に操る力を持っています。美しい氷のお城も作りました！"
      },
      {
        question: "『トイ・ストーリー』のウッディは何のおもちゃ？",
        choices: [
          "宇宙飛行士",
          "ロボット",
          "海賊",
          "カウボーイ"
        ],
        answer: 3,
        explanation: "ウッディは保安官のカウボーイ人形！仲間思いでアンディのお気に入りです。"
      },
      {
        question: "『ライオン・キング』のシンバの父親は誰？",
        choices: [
          "スカー",
          "ティモン",
          "ラフィキ",
          "ムファサ"
        ],
        answer: 3,
        explanation: "ムファサはプライドランドの王であり、シンバの大切な父親です！"
      },
      {
        question: "『リトル・マーメイド』の主人公の名前は？",
        choices: [
          "ベル",
          "アリエル",
          "ジャスミン",
          "オーロラ"
        ],
        answer: 1,
        explanation: "主人公は人間の世界に憧れる人魚姫、アリエルです！"
      }
    ]
  },

  intermediate: {
    name: "中級",
    questions: [
      {
        question: "『美女と野獣』で、魔法によってティーポットにされた人物は？",
        choices: [
          "コグスワース",
          "ルミエール",
          "ポット夫人",
          "チップ"
        ],
        answer: 2,
        explanation: "ポット夫人は魔法でティーポットに変えられてしまいました。チップのお母さんでもあります！"
      },
      {
        question: "『アラジン』に登場するアラジンの相棒の猿の名前は？",
        choices: [
          "アブー",
          "ラジャー",
          "パスカル",
          "ティモン"
        ],
        answer: 0,
        explanation: "アラジンの相棒はアブー！いたずら好きで宝石が大好きな小さな猿です。"
      },
      {
        question: "『ファインディング・ニモ』でニモのお父さんの名前は？",
        choices: [
          "ギル",
          "ブルース",
          "マーリン",
          "クラッシュ"
        ],
        answer: 2,
        explanation: "マーリンはニモのお父さん。ニモを探すために広い海を冒険します！"
      },
      {
        question: "『塔の上のラプンツェル』でラプンツェルの友達のカメレオンは？",
        choices: [
          "フリン",
          "マキシマス",
          "パスカル",
          "オラフ"
        ],
        answer: 2,
        explanation: "パスカルはラプンツェルの大親友！表情豊かでとてもかわいいカメレオンです。"
      },
      {
        question: "『モアナと伝説の海』で、モアナと旅をする半神半人の英雄は？",
        choices: [
          "ヘラクレス",
          "マウイ",
          "タマトア",
          "トゥイ"
        ],
        answer: 1,
        explanation: "マウイは伝説の半神半人。魔法の釣り針を使ってさまざまな姿に変身できます！"
      }
    ]
  },

  advanced: {
    name: "上級",
    questions: [
      {
        question: "『ピーター・パン』に登場するウェンディたちの家の犬の名前は？",
        choices: [
          "ナナ",
          "レディ",
          "パッチ",
          "プルート"
        ],
        answer: 0,
        explanation: "ナナはウェンディたちの家で子どもたちの世話をするセント・バーナード犬です！"
      },
      {
        question: "『ピノキオ』で、ピノキオの良心役を務めるコオロギの名前は？",
        choices: [
          "ジミニー・クリケット",
          "ティンカー・ベル",
          "クリストファー",
          "セバスチャン"
        ],
        answer: 0,
        explanation: "ジミニー・クリケットはピノキオの良心として、正しい道へ導こうとします！"
      },
      {
        question: "『ふしぎの国のアリス』で、懐中時計を持って急いでいるキャラクターは？",
        choices: [
          "チェシャ猫",
          "白うさぎ",
          "マッドハッター",
          "ドードー"
        ],
        answer: 1,
        explanation: "白うさぎは『遅刻する！』と慌てながら懐中時計を持って走っています！"
      },
      {
        question: "『101匹わんちゃん』で、子犬たちの毛皮を狙う悪役は？",
        choices: [
          "マレフィセント",
          "アースラ",
          "クルエラ・ド・ビル",
          "ハートの女王"
        ],
        answer: 2,
        explanation: "クルエラ・ド・ビルはダルメシアンの毛皮でコートを作ろうと企む悪役です！"
      },
      {
        question: "『おしゃれキャット』で、ダッチェスの子どもたちのうち、ピンクのリボンをつけているのは？",
        choices: [
          "ベルリオーズ",
          "トゥルーズ",
          "マリー",
          "ロクフォール"
        ],
        answer: 2,
        explanation: "マリーはダッチェスの娘で、ピンクのリボンがトレードマークの白い子猫です！"
      }
    ]
  }

};

// ========================================
// ゲームの状態
// ========================================

let selectedLevel = null;
let currentQuestions = [];
let currentQuestion = 0;
let correctCount = 0;
let answered = false;

// ========================================
// HTML要素
// ========================================

const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");

const startBtn = document.getElementById("start-btn");
const nextBtn = document.getElementById("next-btn");
const retryBtn = document.getElementById("retry-btn");
const homeBtn = document.getElementById("home-btn");

const difficultyCards = document.querySelectorAll(".difficulty-card");

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

// ========================================
// 画面切り替え
// ========================================

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

// ========================================
// 難易度選択
// ========================================

difficultyCards.forEach(card => {

  card.addEventListener("click", () => {

    // すべての選択を解除
    difficultyCards.forEach(item => {
      item.classList.remove("selected");
    });

    // 選択したカードを強調
    card.classList.add("selected");

    selectedLevel = card.dataset.level;

    const guide = document.getElementById("level-guide");

    const messages = {
      beginner: "🌱 初級を選択中！楽しく挑戦しよう！",
      intermediate: "⭐ 中級を選択中！実力を試そう！",
      advanced: "👑 上級を選択中！真のマスターを目指そう！"
    };

    guide.textContent = messages[selectedLevel];

    // スタートボタンを有効化
    startBtn.disabled = false;

  });

});

// ========================================
// ゲーム開始
// ========================================

function startQuiz() {

  if (!selectedLevel) return;

  // 選択した難易度の問題を取得
  currentQuestions = quizData[selectedLevel].questions;

  currentQuestion = 0;
  correctCount = 0;
  answered = false;

  document.getElementById("current-level").textContent =
    quizData[selectedLevel].name + "クイズ";

  showScreen(quizScreen);

  showQuestion();

}

// ========================================
// 問題表示
// ========================================

function showQuestion() {

  answered = false;

  const question = currentQuestions[currentQuestion];

  const number = String(currentQuestion + 1).padStart(2, "0");

  questionNumber.textContent = number;
  questionIndex.textContent = number;

  questionText.textContent = question.question;

  const progress =
    ((currentQuestion + 1) / currentQuestions.length) * 100;

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

// ========================================
// 回答チェック
// ========================================

function checkAnswer(selectedIndex) {

  if (answered) return;

  answered = true;

  const question = currentQuestions[currentQuestion];

  const buttons =
    choicesElement.querySelectorAll(".choice-btn");

  // 選択肢をすべてロック
  buttons.forEach((button, index) => {

    button.disabled = true;

    // 正解を表示
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

  // 最後の問題か判定
  if (currentQuestion === currentQuestions.length - 1) {

    nextBtn.querySelector("span:first-child").textContent =
      "結果を見る";

    nextBtn.querySelector(".btn-arrow").textContent = "✧";

  } else {

    nextBtn.querySelector("span:first-child").textContent =
      "次の問題へ";

    nextBtn.querySelector(".btn-arrow").textContent = "→";

  }

  nextBtn.hidden = false;

  setTimeout(() => {

    nextBtn.scrollIntoView({
      behavior: "smooth",
      block: "nearest"
    });

  }, 100);

}

// ========================================
// 次の問題
// ========================================

function nextQuestion() {

  if (!answered) return;

  currentQuestion++;

  if (currentQuestion < currentQuestions.length) {

    showQuestion();

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  } else {

    showResult();

  }

}

// ========================================
// 結果・ランク判定
// ========================================

function showResult() {

  showScreen(resultScreen);

  document.getElementById("final-score").textContent =
    correctCount;

  document.getElementById("result-level").textContent =
    "挑戦した難易度：" + quizData[selectedLevel].name;

  const rankTitle = document.getElementById("rank-title");
  const rankMessage = document.getElementById("rank-message");

  const ranks = {

    beginner: [
      {
        title: "🌙 夢見る冒険者",
        message: "ここから冒険が始まるよ！もっとディズニーの世界を楽しもう！"
      },
      {
        title: "🌱 魔法の見習い",
        message: "いい感じ！少しずつ魔法の知識が増えてきたね！"
      },
      {
        title: "✨ 魔法使いの弟子",
        message: "すごい！ディズニーの世界をかなり知っているね！"
      },
      {
        title: "💎 魔法のエキスパート",
        message: "あと一歩でパーフェクト！素晴らしい知識だよ！"
      },
      {
        title: "👑 ディズニーマスター",
        message: "全問正解！初級を完全制覇！次は中級に挑戦しよう！"
      },
      {
        title: "🏆 伝説の魔法使い",
        message: "パーフェクト！あなたはディズニーの真のマスター！"
      }
    ],

    intermediate: [
      {
        title: "🌙 夢見る冒険者",
        message: "中級はなかなか手強かったね！映画を見直して再挑戦！"
      },
      {
        title: "🌱 魔法の見習い",
        message: "いい調子！もっと作品の細かいところにも注目してみよう！"
      },
      {
        title: "✨ 魔法使いの弟子",
        message: "なかなかの実力！ディズニー愛を感じるよ！"
      },
      {
        title: "💎 魔法のエキスパート",
        message: "すごい！かなり詳しいね！上級も夢じゃない！"
      },
      {
        title: "👑 ディズニーマスター",
        message: "全問正解！中級を完全制覇！素晴らしい！"
      },
      {
        title: "🏆 伝説の魔法使い",
        message: "パーフェクト！あなたはディズニー知識の達人！"
      }
    ],

    advanced: [
      {
        title: "🌙 夢見る冒険者",
        message: "上級は難しかったね！諦めずにもう一度挑戦しよう！"
      },
      {
        title: "🌱 魔法の見習い",
        message: "難問に挑戦した勇気が素晴らしい！さらに知識を深めよう！"
      },
      {
        title: "✨ 魔法使いの弟子",
        message: "かなりの実力！ディズニーマニアに近づいているよ！"
      },
      {
        title: "💎 魔法のエキスパート",
        message: "すごい！上級でもこの正解数は立派！"
      },
      {
        title: "👑 ディズニーマスター",
        message: "全問正解！上級を制覇したあなたは本物のマスター！"
      },
      {
        title: "🏆 伝説の魔法使い",
        message: "パーフェクト！あなたのディズニー知識は伝説級！"
      }
    ]

  };

  const rank = ranks[selectedLevel][correctCount];

  rankTitle.textContent = rank.title;
  rankMessage.textContent = rank.message;

}

// ========================================
// もう一度挑戦
// ========================================

function retryQuiz() {

  // 同じ難易度でもう一度最初から
  startQuiz();

}

// ========================================
// 難易度選択画面に戻る
// ========================================

function returnHome() {

  selectedLevel = null;

  difficultyCards.forEach(card => {
    card.classList.remove("selected");
  });

  document.getElementById("level-guide").textContent =
    "✧ 難易度を選択してください ✧";

  startBtn.disabled = true;

  showScreen(startScreen);

}

// ========================================
// ボタンイベント
// ========================================

startBtn.addEventListener("click", startQuiz);

nextBtn.addEventListener("click", nextQuestion);

retryBtn.addEventListener("click", retryQuiz);

homeBtn.addEventListener("click", returnHome);
