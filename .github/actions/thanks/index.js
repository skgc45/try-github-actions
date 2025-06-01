const messages = [
  "開発お疲れ様。今日もありがとう!",
  "あなたの積み重ね、ちゃんと伝わってるよ!",
  "レビューも開発も、心が元気なときがいちばん。",
];

const message = messages[Math.floor(Math.random() * messages.length)];
console.log(message);