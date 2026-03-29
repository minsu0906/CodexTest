const words = [
  { word: "가람", meaning: "강을 뜻하는 순우리말." },
  { word: "나래", meaning: "날개를 뜻하는 순우리말." },
  { word: "다솜", meaning: "사랑을 뜻하는 순우리말." },
  { word: "라온", meaning: "즐거운, 기쁜이라는 뜻을 지닌 말." },
  { word: "마루", meaning: "하늘 또는 꼭대기를 뜻하는 말." },
  { word: "보람", meaning: "어떤 일을 한 뒤에 느끼는 기쁨이나 값어치." },
  { word: "새나", meaning: "새가 나는 것처럼 가볍고 산뜻한 느낌을 담은 말." },
  { word: "아라", meaning: "바다를 뜻하는 순우리말." },
  { word: "온새미로", meaning: "가르거나 쪼개지 않고 생긴 그대로, 자연 그대로." },
  { word: "윤슬", meaning: "햇빛이나 달빛에 비치어 반짝이는 잔물결." },
  { word: "하람", meaning: "하늘이 내린 소중한 사람이라는 뜻으로 쓰이는 이름." },
  { word: "해솔", meaning: "해와 소나무를 아울러 이르는 말로 밝고 푸른 느낌을 담은 이름." }
];

const wordElement = document.querySelector("#word");
const meaningElement = document.querySelector("#meaning");
const button = document.querySelector("#random-button");
const card = document.querySelector(".card");

let currentIndex = 0;

function showRandomWord() {
  let nextIndex = currentIndex;

  while (words.length > 1 && nextIndex === currentIndex) {
    nextIndex = Math.floor(Math.random() * words.length);
  }

  currentIndex = nextIndex;
  const nextWord = words[currentIndex];

  wordElement.textContent = nextWord.word;
  meaningElement.textContent = nextWord.meaning;

  card.classList.remove("flash");
  void card.offsetWidth;
  card.classList.add("flash");
}

button.addEventListener("click", showRandomWord);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js").catch(() => {
      // Ignore registration failures so the app still works as a normal web page.
    });
  });
}
