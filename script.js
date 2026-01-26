/* Game Constants & Variables */
const WORD_DATA = {
    easy: [
        { ja: "達丸誕生日おめでとう", kana: "たつまるたんじょうびおめでとう" },
        { ja: "タコス", kana: "たこす" },
        { ja: "ブリトー", kana: "ぶりとー" },
        { ja: "コロナ", kana: "ころな" },
        { ja: "テキーラ", kana: "てきーら" },
        { ja: "コスタ", kana: "こすた" },
        { ja: "京都", kana: "きょうと" },
        { ja: "サルサ", kana: "さるさ" },
        { ja: "アミーゴ", kana: "あみーご" },
        { ja: "ライム", kana: "らいむ" },
        { ja: "チップス", kana: "ちっぷす" },
        { ja: "一乗寺", kana: "いちじょうじ" },
        { ja: "松ヶ崎", kana: "まつがさき" },
        { ja: "工繊", kana: "こうせん" },
        { ja: "ラーメン", kana: "らーめん" },
        { ja: "左京区", kana: "さきょうく" },
        { ja: "高野", kana: "たかの" },
        { ja: "ハラミ", kana: "はらみ" },
        { ja: "パクチー", kana: "ぱくちー" },
        { ja: "モヒート", kana: "もひーと" },
        { ja: "カクタス", kana: "かくたす" },
        { ja: "パロマ", kana: "ぱろま" },
        { ja: "バル", kana: "ばる" },
        { ja: "タパス", kana: "たぱす" },
        { ja: "ランチ", kana: "らんち" },
        { ja: "烏丸", kana: "からすま" },
        // New Additions (Kyoto Difficult Easy)
        { ja: "壬生", kana: "みぶ" },
        { ja: "先斗町", kana: "ぽんとちょう" },
        { ja: "太秦", kana: "うずまさ" },
        { ja: "化野", kana: "あだしの" }
    ],
    medium: [
        { ja: "達丸誕生日おめでとう", kana: "たつまるたんじょうびおめでとう" },
        { ja: "海老のセビーチェ", kana: "えびのせびーちぇ" },
        { ja: "自家製チョリソー", kana: "じかせいちょりそー" },
        { ja: "ケサディーヤ", kana: "けさでぃーや" },
        { ja: "マスカラスソース", kana: "ますからすそーす" },
        { ja: "ワカモレ", kana: "わかもれ" },
        { ja: "ナチョス", kana: "なちょす" },
        { ja: "ハラペーニョ", kana: "はらぺーにょ" },
        { ja: "京都工芸繊維大学", kana: "きょうとこうげいせんいだいがく" },
        { ja: "一乗寺ラーメン", kana: "いちじょうじらーめん" },
        { ja: "叡山電鉄", kana: "えいざんでんてつ" },
        { ja: "松ヶ崎橋", kana: "まつがさきばし" },
        { ja: "高野川", kana: "たかのがわ" },
        { ja: "メキシコ料理", kana: "めきしこりょうり" },
        { ja: "奈須葵心", kana: "なすきしん" },
        { ja: "山崎太輝", kana: "やまさきだいき" },
        { ja: "早見達丸", kana: "はやみたつまる" },
        { ja: "烏丸御池", kana: "からすまおいけ" },
        { ja: "御倉町", kana: "みくらちょう" },
        { ja: "牛ハラミのグリル", kana: "うしはらみのぐりる" },
        { ja: "アヒージョ", kana: "あひーじょ" },
        { ja: "メキシカンサワー", kana: "めきしかんさわー" },
        { ja: "ワインカクテル", kana: "わいんかくてる" },
        { ja: "ゴキゲン酒場", kana: "ごきげんさかば" },
        { ja: "揚げ物フリートス", kana: "あげものふりーとす" },
        // New Additions (Kyoto Difficult Medium)
        { ja: "帷子ノ辻", kana: "かたびらのつじ" },
        { ja: "御陵", kana: "みささぎ" },
        { ja: "雲母坂", kana: "きららざか" },
        { ja: "悪王子町", kana: "あくおうじちょう" },
        { ja: "不明門通", kana: "あけずどおり" }
    ],
    hard: [
        { ja: "達丸誕生日おめでとう", kana: "たつまるたんじょうびおめでとう" },
        { ja: "奈須葵心は京都で就職", kana: "なすきしんはきょうとでしゅうしょく" },
        { ja: "鴨川沿いのメキシカン", kana: "かもがわぞいのめきしかん" },
        { ja: "木屋町のバニーガールで散財だ", kana: "きやまちのばにーがーるでさんざいだ" },
        { ja: "テキーラマエストロのいるお店", kana: "てきーらまえすとろのいるおみせ" },
        { ja: "真っ黒な激辛マスカラスブラック", kana: "まっくろなげきからますからすぶらっく" },
        { ja: "ハラペーニョの肉詰め", kana: "はらぺーにょのにくづめ" },
        { ja: "太輝は食ったとき腹出すぎ", kana: "だいきはくったときはらですぎ" },
        { ja: "達丸は早くキッチン広いとこ引っ越せ", kana: "たつまるははやくきっちんひろいとこひっこせ" },
        { ja: "死者の祭り", kana: "ししゃのまつり" },
        { ja: "工繊生御用達のメキシカン", kana: "こうせんせいごようたしのめきしかん" },
        { ja: "一乗寺のラーメン激戦区", kana: "いちじょうじのらーめんげきせんく" },
        { ja: "松ヶ崎から歩いてすぐのコスタ", kana: "まつがさきからあるいてすぐのこすた" },
        { ja: "五山の送り火妙法", kana: "ござんのおくりびみょうほう" },
        { ja: "左京区の隠れ家的名店", kana: "さきょうくのかくれがてきめいてん" },
        { ja: "俺にもポルケッタ食わせろよ", kana: "おれにもぽるけったくわせろよ" },
        { ja: "マスカラスなゴキゲン酒場", kana: "ますからすなごきげんさかば" },
        { ja: "赤マスカラス青マスカラス黄マスカラス", kana: "あかますからすあおますからすきますからす" },
        { ja: "追いマスカラスソース", kana: "おいますからすそーす" },
        { ja: "辛さの向こう側へ行こう", kana: "からさのむこうがわへいこう" },
        { ja: "旨辛ホットソースマスカラス", kana: "うまからほっとそーすますからす" },
        { ja: "店主が生み出した奇跡の味", kana: "てんしゅがうみだしたきせきのあじ" },
        { ja: "地下鉄烏丸御池徒歩2分", kana: "ちかてつからすまおいけとほにふん" },
        // New Additions (Kyoto Difficult Hard)
        { ja: "勘解由小路町", kana: "かげゆこうじちょう" },
        { ja: "御室双岡町", kana: "おむろならびがおかちょう" },
        { ja: "西院春日町", kana: "さいいんかすがちょう" },
        { ja: "上終町", kana: "かみはてちょう" }
    ]
};

const GAME_SETTINGS = {
    easy: { time: 60, scorePerChar: 10 },
    medium: { time: 90, scorePerChar: 20 },
    hard: { time: 120, scorePerChar: 50 },
};

// Expanded Romaji Table
const ROMAJI_TABLE = {
    'あ': ['a'], 'い': ['i', 'yi'], 'う': ['u', 'wu', 'whu'], 'え': ['e'], 'お': ['o'],
    'か': ['ka', 'ca'], 'き': ['ki'], 'く': ['ku', 'cu', 'qu'], 'け': ['ke'], 'こ': ['ko', 'co'],
    'さ': ['sa'], 'し': ['shi', 'si', 'ci'], 'す': ['su'], 'せ': ['se', 'ce'], 'そ': ['so'],
    'た': ['ta'], 'ち': ['chi', 'ti'], 'つ': ['tsu', 'tu'], 'て': ['te'], 'と': ['to'],
    'な': ['na'], 'に': ['ni'], 'ぬ': ['nu'], 'ね': ['ne'], 'の': ['no'],
    'は': ['ha'], 'ひ': ['hi'], 'ふ': ['fu', 'hu'], 'へ': ['he'], 'ほ': ['ho'],
    'ま': ['ma'], 'み': ['mi'], 'む': ['mu'], 'め': ['me'], 'も': ['mo'],
    'や': ['ya'], 'ゆ': ['yu'], 'よ': ['yo'],
    'ら': ['ra'], 'り': ['ri'], 'る': ['ru'], 'れ': ['re'], 'ろ': ['ro'],
    'わ': ['wa'], 'を': ['wo'], 'ん': ['n', 'nn', "n'"],
    'が': ['ga'], 'ぎ': ['gi'], 'ぐ': ['gu'], 'げ': ['ge'], 'ご': ['go'],
    'ざ': ['za'], 'じ': ['ji', 'zi'], 'ず': ['zu'], 'ぜ': ['ze'], 'ぞ': ['zo'],
    'だ': ['da'], 'ぢ': ['ji', 'di'], 'づ': ['zu', 'du'], 'で': ['de'], 'ど': ['do'],
    'ば': ['ba'], 'び': ['bi'], 'ぶ': ['bu'], 'べ': ['be'], 'ぼ': ['bo'],
    'ぱ': ['pa'], 'ぴ': ['pi'], 'ぷ': ['pu'], 'ぺ': ['pe'], 'ぽ': ['po'],
    'きゃ': ['kya'], 'きゅ': ['kyu'], 'きょ': ['kyo'],
    'しゃ': ['sha', 'sya'], 'しゅ': ['shu', 'syu'], 'しょ': ['sho', 'syo'],
    'ちゃ': ['cha', 'tya'], 'ちゅ': ['chu', 'tyu'], 'ちょ': ['cho', 'tyo'],
    'にゃ': ['nya'], 'にゅ': ['nyu'], 'にょ': ['nyo'],
    'ひゃ': ['hya'], 'ひゅ': ['hyu'], 'ひょ': ['hyo'],
    'みゃ': ['mya'], 'みゅ': ['myu'], 'みょ': ['myo'],
    'りゃ': ['rya'], 'りゅ': ['ryu'], 'りょ': ['ryo'],
    'ぎゃ': ['gya'], 'ぎゅ': ['gyu'], 'ぎょ': ['gyo'],
    'じゃ': ['ja', 'jya', 'zya'], 'じゅ': ['ju', 'jyu', 'zyu'], 'じょ': ['jo', 'jyo', 'zyo'],
    'びゃ': ['bya'], 'びゅ': ['byu'], 'びょ': ['byo'],
    'ぴゃ': ['pya'], 'ぴゅ': ['pyu'], 'ぴょ': ['pyo'],
    'ふぁ': ['fa'], 'ふぃ': ['fi'], 'ふぇ': ['fe'], 'ふぉ': ['fo'],
    'うぃ': ['wi', 'whi'], 'うぇ': ['we', 'whe'], 'うぉ': ['who'],
    'ゔ': ['vu'], 'ゔぁ': ['va'], 'ゔぃ': ['vi'], 'ゔぇ': ['ve'], 'ゔぉ': ['vo'],
    'ー': ['-'],
    'っ': ['xtu', 'ltu'], // Special handling adds double consonant checking

    // Small Kana
    'ぁ': ['la', 'xa'], 'ぃ': ['li', 'xi', 'nyi'], 'ぅ': ['lu', 'xu'], 'ぇ': ['le', 'xe'], 'ぉ': ['lo', 'xo'],
    'ゃ': ['lya', 'xya'], 'ゅ': ['lyu', 'xyu'], 'ょ': ['lyo', 'xyo'],
    'ゎ': ['lwa', 'xwa'], 'ヵ': ['lka', 'xka'], 'ヶ': ['lke', 'xke'],

    // Extended Digraphs
    'いぇ': ['ye'],
    'てぃ': ['thi'], 'てぇ': ['the'], 'てゃ': ['tha'], 'てゅ': ['thu'], 'てョ': ['tho'],
    'でぃ': ['dhi'], 'でぇ': ['dhe'], 'でゃ': ['dha'], 'でゅ': ['dhu'], 'でょ': ['dho'],
    'とぅ': ['twu'], 'どぅ': ['dwu'],
    'ちぇ': ['che'], 'しぇ': ['she'], 'じぇ': ['je'],
    'くぁ': ['qa'], 'くぃ': ['qi'], 'くぇ': ['qe'], 'くぉ': ['qo'],
    'ぐぁ': ['gwa'], 'ぐぃ': ['gwi'], 'ぐぇ': ['gwe'], 'ぐぉ': ['gwo'],
    'つぁ': ['tsa'], 'つぃ': ['tsi'], 'つぇ': ['tse'], 'つぉ': ['tso']
};

let currentState = {
    isPlaying: false,
    level: 'easy',
    score: 0,
    combo: 0,
    maxCombo: 0,
    timeLeft: 0,
    totalTime: 0,

    // Typing State
    jaWord: "",
    kanaTokens: [], // Array of { kana, romaji: [], done: bool, usedRomaji: string }
    currentTokenIndex: 0,
    inputBuffer: '',

    typedKeys: 0,
    correctKeys: 0,

    lastWordIndex: -1, // Track previous word to prevent duplicates
    pendingN: false // Allow "nn" input even if "n" finished the token
};

/* ... (omitted middle parts) ... */

function handleTyping(e) {
    if (e.key === 'Escape') {
        endGame();
        return;
    }
    if (e.key === 'Shift' || e.key === 'Control' || e.key === 'Alt') return;

    // Ignore non-character keys (but allow mobile mock events which might not strictly match)
    if (!/^[a-z\-]$/i.test(e.key)) return;

    const key = e.key.toLowerCase();
    // 0. Check Pending N (Absorption of optional 'n')
    // ... (rest of handleTyping) ...
}


function handleMobileInput(e) {
    if (!currentState.isPlaying) return;

    // Ignore if a physical keyboard event happened recently (< 100ms)
    if (Date.now() - currentState.lastKeyboardEventTime < 100) {
        mobileInput.value = '';
        return;
    }

    const val = mobileInput.value;
    /* ... rest ... */
}

/* Bonus Feature */
function showBonus() {
    currentState.bonusShown = true;
    currentState.isPlaying = false; // Pause game logic
    clearInterval(timerInterval); // Pause timer
    stopBGM();
    playSound('success');
    bonusOverlay.classList.remove('hidden');
}

window.closeBonus = function () {
    bonusOverlay.classList.add('hidden');
    currentState.isPlaying = true; // Resume
    startTimer(); // Resume timer
    startBGM(); // Resume music
};

let timerInterval;
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

/* Audio System */
let bgmNodes = []; // To store oscillator nodes for BGM to stop them later
let nextNoteTime = 0;
let bgmInterval;
const TEMPO = 100;

function playSound(type) {
    if (audioCtx.state === 'suspended') audioCtx.resume();

    // Master Gain for SE
    const masterGain = audioCtx.createGain();
    masterGain.gain.value = 0.4;
    masterGain.connect(audioCtx.destination);

    if (type === 'type') {
        const osc = audioCtx.createOscillator();
        osc.connect(masterGain);
        osc.type = 'sine';
        osc.frequency.setValueAtTime(800, audioCtx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(1200, audioCtx.currentTime + 0.05);
        masterGain.gain.setValueAtTime(0.2, audioCtx.currentTime);
        masterGain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.05);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.05);
    } else if (type === 'miss') {
        const osc = audioCtx.createOscillator();
        osc.connect(masterGain);
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(150, audioCtx.currentTime);
        osc.frequency.linearRampToValueAtTime(100, audioCtx.currentTime + 0.2);
        masterGain.gain.setValueAtTime(0.4, audioCtx.currentTime);
        masterGain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.2);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.2);
    } else if (type === 'success') {
        // Nice Chord Arpeggio (C Major add 9)
        const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
        notes.forEach((freq, i) => {
            const osc = audioCtx.createOscillator();
            const gn = audioCtx.createGain();
            osc.connect(gn);
            gn.connect(masterGain);

            osc.type = 'sine';
            osc.frequency.value = freq;

            const start = audioCtx.currentTime + (i * 0.03);
            gn.gain.setValueAtTime(0, start);
            gn.gain.linearRampToValueAtTime(0.1, start + 0.02);
            gn.gain.exponentialRampToValueAtTime(0.001, start + 0.4);

            osc.start(start);
            osc.stop(start + 0.4);
        });
    } else if (type === 'finish') {
        const osc = audioCtx.createOscillator();
        osc.connect(masterGain);
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(440, audioCtx.currentTime);
        osc.frequency.setValueAtTime(554, audioCtx.currentTime + 0.1);
        osc.frequency.setValueAtTime(659, audioCtx.currentTime + 0.2);
        masterGain.gain.setValueAtTime(0.5, audioCtx.currentTime);
        masterGain.gain.linearRampToValueAtTime(0, audioCtx.currentTime + 1.0);
        osc.start();
        osc.stop(audioCtx.currentTime + 1.0);
    }
}

function startBGM() {
    if (audioCtx.state === 'suspended') audioCtx.resume();
    stopBGM(); // Reset if running

    // Simple Latin/Marimba-ish loop
    // Chords: Fmaj7 -> G7 -> Em7 -> Am7
    const chords = [
        [349.23, 440.00, 523.25, 659.25], // F
        [392.00, 493.88, 587.33, 698.46], // G
        [329.63, 392.00, 493.88, 587.33], // Em
        [440.00, 523.25, 659.25, 783.99]  // Am
    ];

    let beat = 0;

    bgmInterval = setInterval(() => {
        // Play on every beat
        const chordIdx = Math.floor(beat / 4) % 4;
        const noteIdx = beat % 4; // Arpeggiate

        // Bass Note on beat 0
        if (noteIdx === 0) {
            playTone(chords[chordIdx][0] / 2, 0.4, 'triangle', 0.1);
        }

        // Light syncopated top notes
        if (noteIdx === 1 || noteIdx === 3) {
            const freq = chords[chordIdx][Math.floor(Math.random() * 3) + 1];
            playTone(freq, 0.1, 'sine', 0.05);
        }

        beat++;
    }, (60 / TEMPO) * 1000 / 2); // 8th notes
}

function playTone(freq, duration, type, vol) {
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain);
    gain.connect(audioCtx.destination);

    osc.type = type;
    osc.frequency.value = freq;

    const now = audioCtx.currentTime;
    gain.gain.setValueAtTime(vol * 0.3, now); // Keep BGM quiet (0.3 factor)
    gain.gain.exponentialRampToValueAtTime(0.001, now + duration);

    osc.start(now);
    osc.stop(now + duration);

    bgmNodes.push(osc);
    // Cleanup old nodes array occasionally
    if (bgmNodes.length > 50) bgmNodes = bgmNodes.slice(25);
}

function stopBGM() {
    clearInterval(bgmInterval);
    bgmNodes.forEach(node => {
        try { node.stop(); } catch (e) { }
    });
    bgmNodes = [];
}

/* DOM Elements */
const timeBarEl = document.getElementById('time-bar');
const scoreEl = document.getElementById('score');
const comboEl = document.getElementById('combo');

const startScreen = document.getElementById('start-screen');
const playScreen = document.getElementById('play-screen');
const resultScreen = document.getElementById('result-screen');

const japaneseTextEl = document.getElementById('japanese-text');
const kanaTextEl = document.getElementById('kana-text');
const romajiTextEl = document.getElementById('romaji-text'); // Kept this as it's used in renderWord
const typedPartEl = document.getElementById('typed-part');
const untypedPartEl = document.getElementById('untyped-part');

const finalScoreEl = document.getElementById('final-score-val');
const accuracyEl = document.getElementById('accuracy-val');
const typedCountEl = document.getElementById('typed-count-val');
const rankTitleEl = document.getElementById('rank-title');
const typingArea = document.getElementById('typing-area');
const correctEffectEl = document.getElementById('correct-effect'); // Renamed back to original
const feedbackMessage = document.getElementById('feedback-message');



const bonusOverlay = document.getElementById('bonus-overlay');

/* Initialization */
function startGame(level) {
    currentState.level = level;
    currentState.score = 0;
    currentState.combo = 0;
    currentState.bonusShown = false; // Reset bonus flag

    const settings = GAME_SETTINGS[level];
    currentState.totalTime = settings.time;
    currentState.timeLeft = settings.time;
    currentState.isPlaying = true; // Added this line based on the provided snippet

    startScreen.classList.remove('active');
    resultScreen.classList.remove('active');
    playScreen.classList.add('active');

    updateScoreUI();
    updateScoreUI();
    nextWord();
    startBGM(); // Start Music
    startTimer();

    document.removeEventListener('keydown', handleTyping); // Remove existing listener to prevent duplicates
    document.addEventListener('keydown', handleTyping);
}

function startTimer() {
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        currentState.timeLeft -= 0.1;
        updateTimerUI();
        if (currentState.timeLeft <= 0) endGame();
    }, 100);
}

function updateTimerUI() {
    const percentage = (currentState.timeLeft / currentState.totalTime) * 100;
    timeBarEl.style.width = `${percentage}%`;
}

function endGame() {
    clearInterval(timerInterval);
    stopBGM(); // Stop Music
    document.removeEventListener('keydown', handleTyping);

    currentState.isPlaying = false;
    playSound('finish');

    playScreen.classList.remove('active');
    resultScreen.classList.add('active');

    const accuracy = currentState.typedKeys > 0
        ? Math.floor((currentState.correctKeys / currentState.typedKeys) * 100)
        : 0;

    document.getElementById('final-score-val').textContent = currentState.score;
    document.getElementById('accuracy-val').textContent = accuracy;
    document.getElementById('typed-count-val').textContent = currentState.typedKeys;

    let rank = "見習いアミーゴ";
    if (currentState.score > 3000) rank = "COSTA常連客";
    if (currentState.score > 6000) rank = "テキーラマエストロ";
    if (currentState.score > 10000) rank = "伝説のマスカラサー";
    document.getElementById('rank-title').textContent = rank;
}

function returnToTitle() {
    resultScreen.classList.remove('active');
    startScreen.classList.add('active');
}

/* Typing Engine Core */

function nextWord() {
    const list = WORD_DATA[currentState.level];
    let newIndex;

    // Attempt to find a new word that isn't the same as the last one
    // Guard against infinite loop if list has 0 or 1 item
    if (list.length > 1) {
        do {
            newIndex = Math.floor(Math.random() * list.length);
        } while (newIndex === currentState.lastWordIndex);
    } else {
        newIndex = 0;
    }

    currentState.lastWordIndex = newIndex;
    const word = list[newIndex];

    currentState.jaWord = word.ja;
    currentState.kanaTokens = tokenizeKana(word.kana);
    currentState.currentTokenIndex = 0;
    currentState.inputBuffer = "";
    currentState.pendingN = false; // Reset

    renderWord();
}

function showCorrectEffect() {
    correctEffectEl.classList.remove('animate');
    void correctEffectEl.offsetWidth; // Trigger reflow
    correctEffectEl.classList.add('animate');
}

function tokenizeKana(kanaStr) {
    let tokens = [];
    let i = 0;
    while (i < kanaStr.length) {
        let part = kanaStr.substr(i, 2);
        if (ROMAJI_TABLE[part]) {
            tokens.push({ kana: part, romaji: ROMAJI_TABLE[part], done: false, usedRomaji: null });
            i += 2;
            continue;
        }
        part = kanaStr.substr(i, 1);
        if (ROMAJI_TABLE[part]) {
            tokens.push({ kana: part, romaji: ROMAJI_TABLE[part], done: false, usedRomaji: null });
            i += 1;
            continue;
        }
        tokens.push({ kana: part, romaji: [part], done: false, usedRomaji: null });
        i += 1;
    }
    return tokens;
}

function renderWord() {
    japaneseTextEl.textContent = currentState.jaWord;

    // Kana Display
    let kanaHtml = "";
    currentState.kanaTokens.forEach((token) => {
        const color = token.done ? "var(--accent-green)" : "#BDC3C7";
        kanaHtml += `<span style="color:${color}">${token.kana}</span>`;
    });
    kanaTextEl.innerHTML = kanaHtml;

    // Romaji Display
    let romajiHtml = "";

    // Past tokens (use what was actually typed)
    for (let j = 0; j < currentState.currentTokenIndex; j++) {
        let r = currentState.kanaTokens[j].usedRomaji || currentState.kanaTokens[j].romaji[0];
        romajiHtml += `<span style="color:var(--accent-green)">${r}</span>`;
    }

    // Current token
    if (currentState.currentTokenIndex < currentState.kanaTokens.length) {
        const cur = currentState.kanaTokens[currentState.currentTokenIndex];

        let displayStr = cur.romaji[0];

        // Sokuon Lookahead for 'っ'
        if (cur.kana === 'っ' && currentState.currentTokenIndex + 1 < currentState.kanaTokens.length) {
            const nextToken = currentState.kanaTokens[currentState.currentTokenIndex + 1];
            const nextChar = nextToken.romaji[0].charAt(0);
            if (/[a-z]/.test(nextChar) && !['a', 'i', 'u', 'e', 'o', 'n'].includes(nextChar)) {
                displayStr = nextChar;
            }
        }

        // Override if buffer forces a specific path (e.g. user typed 'x')
        if (currentState.inputBuffer.length > 0) {
            const bestMatch = cur.romaji.find(r => r.startsWith(currentState.inputBuffer));
            if (bestMatch) displayStr = bestMatch;
        }

        const typedLen = currentState.inputBuffer.length;
        // Safety check if typed exceeds display (shouldn't happen with correct logic)
        const remaining = typedLen < displayStr.length ? displayStr.substring(typedLen) : "";

        romajiHtml += `<span style="color:var(--accent-green)">${currentState.inputBuffer}</span>`;
        romajiHtml += `<span style="color:#7F8C8D">${remaining}</span>`;
    }

    // Future tokens
    for (let j = currentState.currentTokenIndex + 1; j < currentState.kanaTokens.length; j++) {
        const tok = currentState.kanaTokens[j];
        let displayFuture = tok.romaji[0];

        // Sokuon Lookahead for Future
        if (tok.kana === 'っ' && j + 1 < currentState.kanaTokens.length) {
            const nextToken = currentState.kanaTokens[j + 1];
            const nextChar = nextToken.romaji[0].charAt(0);
            if (/[a-z]/.test(nextChar) && !['a', 'i', 'u', 'e', 'o', 'n'].includes(nextChar)) {
                displayFuture = nextChar;
            }
        }

        romajiHtml += `<span style="color:#7F8C8D">${displayFuture}</span>`;
    }

    romajiTextEl.innerHTML = romajiHtml;
}

function handleTyping(e) {
    if (e.key === 'Escape') {
        endGame();
        return;
    }
    if (e.key === 'Shift' || e.key === 'Control' || e.key === 'Alt') return;
    if (!/^[a-z\-]$/i.test(e.key)) return;

    const key = e.key.toLowerCase();

    // 0. Check Pending N (Absorption of optional 'n')
    if (currentState.pendingN) {
        if (key === 'n') {
            // Absorb extra 'n' for 'ん'
            currentState.pendingN = false;
            currentState.typedKeys++;
            currentState.correctKeys++;
            playSound('type');
            // Update visual history to show 'nn'
            if (currentState.currentTokenIndex > 0) {
                currentState.kanaTokens[currentState.currentTokenIndex - 1].usedRomaji = 'nn';
                renderWord();
            }
            return;
        }
        // If not 'n', clear pending and process normally (e.g. 't' in 'kanta')
        currentState.pendingN = false;
    }

    currentState.typedKeys++;

    if (currentState.currentTokenIndex >= currentState.kanaTokens.length) return;

    const currentToken = currentState.kanaTokens[currentState.currentTokenIndex];
    const newInput = currentState.inputBuffer + key;

    // 1. Check Standard Match
    const matchOption = currentToken.romaji.find(r => r.startsWith(newInput));
    const isValidStart = !!matchOption;

    // 2. Check Sokuon (Small Tsu) Special Match
    let isSokuonMatch = false;
    if (currentToken.kana === 'っ' && currentState.currentTokenIndex + 1 < currentState.kanaTokens.length) {
        const nextToken = currentState.kanaTokens[currentState.currentTokenIndex + 1];
        const nextStarts = nextToken.romaji.some(r => r.startsWith(key));
        if (nextStarts && !['n', 'a', 'i', 'u', 'e', 'o'].includes(key)) {
            isSokuonMatch = true;
        }
    }

    if (isValidStart) {
        playSound('type');
        currentState.correctKeys++;
        currentState.inputBuffer = newInput;

        // Check Completion
        let exactMatch = currentToken.romaji.find(r => r === currentState.inputBuffer);

        // 3. Ambiguity Check for 'n'
        // If 'n' is matched, but next char starts with vowel/n/y, enforce 'nn' (don't complete on 'n')
        if (exactMatch === 'n' && currentToken.kana === 'ん') {
            if (currentState.currentTokenIndex + 1 < currentState.kanaTokens.length) {
                const nextTok = currentState.kanaTokens[currentState.currentTokenIndex + 1];
                // Check if any romaji of next token starts with n, a, i, u, e, o, y
                // Simplified: check first char of first option (usually sufficient) or iterate
                const conflict = nextTok.romaji.some(r => /^[nNaiueoy]/.test(r));
                if (conflict) {
                    exactMatch = null; // Force user to type more
                }
            }
        }

        if (exactMatch) {
            currentToken.done = true;
            currentToken.usedRomaji = exactMatch;

            // Activate PendingN if we finished with single 'n'
            if (currentToken.kana === 'ん' && exactMatch === 'n') {
                currentState.pendingN = true;
            }

            currentState.currentTokenIndex++;
            currentState.inputBuffer = "";
            currentState.combo++;
        }

    } else if (isSokuonMatch && currentState.inputBuffer === "") {
        playSound('type');
        currentState.correctKeys++;
        currentToken.done = true;
        currentToken.usedRomaji = key;
        currentState.currentTokenIndex++;
        currentState.inputBuffer = "";
        currentState.combo++;

    } else {
        playSound('miss');
        currentState.combo = 0;
        typingArea.classList.remove('shake');
        void typingArea.offsetWidth;
        typingArea.classList.add('shake');
    }

    updateScoreUI();
    renderWord();

    if (currentState.currentTokenIndex >= currentState.kanaTokens.length) {
        addScore();
        showCorrectEffect();
        playSound('success');
        nextWord();
    }
}

function addScore() {
    const charScore = GAME_SETTINGS[currentState.level].scorePerChar;
    // Simple calc
    const wordScore = currentState.jaWord.length * charScore;
    // Combo multiplier
    const multiplier = 1 + (Math.floor(currentState.combo / 10) * 0.1);

    currentState.score += Math.floor(wordScore * multiplier);
    updateScoreUI();

    // Check for Birthday Bonus
    if (currentState.score >= 10000 && !currentState.bonusShown) {
        showBonus();
    }
}

function updateScoreUI() {
    scoreEl.textContent = currentState.score;
    comboEl.textContent = currentState.combo;
}

function showCorrectEffect() {
    correctEffectEl.classList.remove('animate');
    void correctEffectEl.offsetWidth; // trigger reflow
    correctEffectEl.classList.add('animate');
}

/* Bonus Feature */
function showBonus() {
    currentState.bonusShown = true;
    currentState.isPlaying = false; // Pause game logic
    clearInterval(timerInterval); // Pause timer
    stopBGM(); // Optional: pause BGM or let it play? Let's stop to emphasize.
    playSound('success'); // Play chime
    bonusOverlay.classList.remove('hidden');
}

window.closeBonus = function () { // Global for onclick
    bonusOverlay.classList.add('hidden');
    currentState.isPlaying = true; // Resume
    startTimer(); // Resume timer
    startBGM(); // Resume music
};
