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
  "Are your parents bakeries? Because they gave you such a caked up ass",
  "Do you have a Band-Aid? I just scraped my knee falling for you.",
  "Are you a loan? Because you have my interest.",
  "If you were a fruit, you'd be a fine-apple.",
  "Are you the sun? Because you just brightened my whole day.",
  "Is it hot in here, or is it just you?"
];

const poems = [
  "Roses are red,\nViolets are blue,\nI forgot the rest,\nso here's a haiku.",
  "I asked the WiFi,\n'Do you love me?'\nIt said 'Connecting...'\nforever.",
  "My diet started Monday,\nStrong and full of hope,\nBy Tuesday lunch\nI'd eaten all the cake and soap... just kidding, the cake.",
  "Twinkle twinkle little bug,\nWhy'd you land in my coffee mug,\nUp above the world so high,\nNow you're floating, so am I.",
  "There once was a man from the gym,\nWho skipped every leg day on a whim,\nHis arms grew so grand,\nHe could barely stand,\nA T-Rex had more balance than him.",
  "Roses are red,\nCacti have spikes,\nI texted you first\nfour times tonight.",
  "I like my coffee like I like my mornings,\nDark, bitter, and full of quiet warnings.",
  "Sugar is sweet,\nAnd so are you,\nBut my Wi-Fi's slow\nand that's a bigger issue.",
  "An ode to my alarm clock:\nI hate you every morning,\nYet somehow every night,\nI set you without warning,\nTo ruin my own life.",
  "Once upon a Monday,\nI swore I'd get things done,\nThen my bed said 'stay a while',\nand honestly, it won.",
  "Roses are red,\nMy socks don't match,\nNeither does my life,\nbut hey, nice catch.",
  "I wrote you a poem,\nIt took me all week,\nThen autocorrect changed it\nto something quite bleak.",
  "The moon is round,\nThe stars are bright,\nMy pizza's here,\nGoodnight, goodnight.",
  "A limerick for my inbox:\nThere once was an inbox so vast,\nWith emails piled up from the past,\nI opened it wide,\nThen ran off and hid,\nThat unread count's built to last.",
  "Roses are red,\nThe sky is grey,\nI clicked 'reply all'\nby mistake today.",
  "My cat sat on my keyboard,\nAnd sent an email too,\nIt read 'zzzzzzzzzzzzz'\nMy boss replied 'Same, honestly, mood.'",
  "Ode to Mondays:\nYou creep in slow,\nlike a villain in a play,\nI'd block you if I could,\nbut here you are, Monday.",
  "Roses are red,\nMy plants are dead,\nI overwatered\nthen underfed.",
  "Little snowflake falling down,\nLanding softly on the ground,\nThen it melts before it's cute,\nJust like my New Year's resolute.",
  "I made you a sandwich,\nOut of love and cheese,\nThen ate it myself\nwhile you weren't looking, please forgive me."
];

const cardEl = document.getElementById('card');
const cardText = document.getElementById('card-text');
const againBtn = document.getElementById('again-btn');
const jokeBtn = document.getElementById('joke-btn');
const pickupBtn = document.getElementById('pickup-btn');
const poetryBtn = document.getElementById('poetry-btn');
const laughTrack = document.getElementById('laugh-track');

const lists = { joke: jokes, pickup: pickupLines, poetry: poems };
const buttons = { joke: jokeBtn, pickup: pickupBtn, poetry: poetryBtn };

let currentType = null;

function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function showResult(type) {
  currentType = type;
  const text = pickRandom(lists[type]);

  cardEl.classList.remove('show');
  cardEl.classList.remove('placeholder');

  setTimeout(() => {
    cardText.textContent = text;
    cardEl.classList.add('show');

    laughTrack.pause();
    laughTrack.currentTime = 0;
    laughTrack.play().catch(() => { });
  }, 150);

  Object.entries(buttons).forEach(([key, btn]) => {
    btn.classList.toggle('active', key === type);
  });
  againBtn.classList.add('visible');
}

Object.entries(buttons).forEach(([type, btn]) => {
  btn.addEventListener('click', () => showResult(type));
});
againBtn.addEventListener('click', () => {
  if (currentType) showResult(currentType);
});
