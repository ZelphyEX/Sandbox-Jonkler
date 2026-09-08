const jokes = [
  "Why don't scientists trust atoms? Because they make up everything.",
  "I told my computer I needed a break, and now it won't stop sending me KitKat ads.",
  "Why did the scarecrow win an award? Because he was outstanding in his field.",
  "I'm reading a book about anti-gravity. It's impossible to put down.",
  "Why don't skeletons fight each other? They don't have the guts.",
  "I used to be a banker, but I lost interest.",
  "Why did the bicycle fall over? Because it was two-tired.",
  "What do you call fake spaghetti? An impasta.",
  "I'm on a seafood diet. I see food and I eat it.",
  "Why can't your nose be 12 inches long? Because then it would be a foot.",
  "I told a chemistry joke, but there was no reaction.",
  "Why did the coffee file a police report? It got mugged.",
  "How does a penguin build its house? Igloos it together.",
  "I only know 25 letters of the alphabet. I don't know y.",
  "Why did the math book look sad? It had too many problems.",
  "What do you call a bear with no teeth? A gummy bear.",
  "I would tell you a joke about pizza, but it's a little cheesy.",
  "Why did the golfer bring two pairs of pants? In case he got a hole in one.",
  "I can win a fight against any skeleton. They don't have the guts",
  "I'm afraid for the calendar. Its days are numbered."
];

const pickupLines = [
  "Are you a magician? Because whenever I look at you, everyone else disappears.",
  "Do you have a map? I keep getting lost in your eyes.",
  "Is your name Google? Because you have everything I've been searching for.",
  "If you were a vegetable, you'd be a cute-cumber.",
  "You look like trash. Let me take you out",
  "Do you believe in love at first sight, or should I walk by again?",
  "I'm thirsty, and you happen to be 70% water.",
  "Are you a parking ticket? Because you've got fine written all over you.",
  "I must be a snowflake, because I've fallen for you.",
  "Milady, even though I wasn't born a steed, I don't mind if milday 'mount' me tonight.",
  "My love for you is like diarrhea, I just can't hold it in",
  "Are you a hotdog? The way you make my weiner feel like home ~",
  "Excuse me, but I think you dropped something: my jaw.",
  "Is your dad a boxer? Because you're a knockout.",
  "Are you a time traveler? Because I can't imagine my future without you.",
  "Do you have a Band-Aid? I just scraped my knee falling for you.",
  "Are you a loan? Because you have my interest.",
  "If you were a fruit, you'd be a fine-apple.",
  "Are you the sun? Because you just brightened my whole day.",
  "Is it hot in here, or is it just you?"
];

const cardEl = document.getElementById('card');
const cardText = document.getElementById('card-text');
const againBtn = document.getElementById('again-btn');
const jokeBtn = document.getElementById('joke-btn');
const pickupBtn = document.getElementById('pickup-btn');
const laughTrack = document.getElementById('laugh-track');

let currentType = null;

function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function showResult(type) {
  currentType = type;
  const list = type === 'joke' ? jokes : pickupLines;
  const text = pickRandom(list);

  cardEl.classList.remove('show');
  cardEl.classList.remove('placeholder');

  setTimeout(() => {
    cardText.textContent = text;
    cardEl.classList.add('show');

    laughTrack.pause();
    laughTrack.currentTime = 0;
    laughTrack.play().catch(() => { });
  }, 150);

  jokeBtn.classList.toggle('active', type === 'joke');
  pickupBtn.classList.toggle('active', type === 'pickup');
  againBtn.classList.add('visible');
}

jokeBtn.addEventListener('click', () => showResult('joke'));
pickupBtn.addEventListener('click', () => showResult('pickup'));
againBtn.addEventListener('click', () => {
  if (currentType) showResult(currentType);
});
