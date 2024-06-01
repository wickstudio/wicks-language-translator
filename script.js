const dictionary = {
    "ا": "wik1",
    "ب": "wik2",
    "ت": "wik3",
    "ث": "wik4",
    "ج": "wik5",
    "ح": "wik6",
    "خ": "wik7",
    "د": "wik8",
    "ذ": "wik9",
    "ر": "wik10",
    "ز": "wik11",
    "س": "wik12",
    "ش": "wik13",
    "ص": "wik14",
    "ض": "wik15",
    "ط": "wik16",
    "ظ": "wik17",
    "ع": "wik18",
    "غ": "wik19",
    "ف": "wik20",
    "ق": "wik21",
    "ك": "wik22",
    "ل": "wik23",
    "م": "wik24",
    "ن": "wik25",
    "ه": "wik26",
    "و": "wik27",
    "ي": "wik28",
    "ى": "wik29",
    "ئ": "wik30",
    "ء": "wik31",
    "ؤ": "wik32",
    "آ": "wik33",
    "إ": "wik34",
    "أ": "wik35",
    "١": "wik36",
    "٢": "wik37",
    "٣": "wik38",
    "٤": "wik39",
    "٥": "wik40",
    "٦": "wik41",
    "٧": "wik42",
    "٨": "wik43",
    "٩": "wik44",
    "٠": "wik45",
    "a": "wik46",
    "b": "wik47",
    "c": "wik48",
    "d": "wik49",
    "e": "wik50",
    "f": "wik51",
    "g": "wik52",
    "h": "wik53",
    "i": "wik54",
    "j": "wik55",
    "k": "wik56",
    "l": "wik57",
    "m": "wik58",
    "n": "wik59",
    "o": "wik60",
    "p": "wik61",
    "q": "wik62",
    "r": "wik63",
    "s": "wik64",
    "t": "wik65",
    "u": "wik66",
    "v": "wik67",
    "w": "wik68",
    "x": "wik69",
    "y": "wik70",
    "z": "wik71",
    "A": "wik72",
    "B": "wik73",
    "C": "wik74",
    "D": "wik75",
    "E": "wik76",
    "F": "wik77",
    "G": "wik78",
    "H": "wik79",
    "I": "wik80",
    "J": "wik81",
    "K": "wik82",
    "L": "wik83",
    "M": "wik84",
    "N": "wik85",
    "O": "wik86",
    "P": "wik87",
    "Q": "wik88",
    "R": "wik89",
    "S": "wik90",
    "T": "wik91",
    "U": "wik92",
    "V": "wik93",
    "W": "wik94",
    "X": "wik95",
    "Y": "wik96",
    "Z": "wik97",
    "1": "wik98",
    "2": "wik99",
    "3": "wik100",
    "4": "wik101",
    "5": "wik102",
    "6": "wik103",
    "7": "wik104",
    "8": "wik105",
    "9": "wik106",
    "0": "wik107",
    " ": " "
};

const reverseDictionary = Object.fromEntries(Object.entries(dictionary).map(([key, value]) => [value, key]));

function showToast(message) {
    const toast = document.getElementById("toast");
    toast.textContent = message;
    toast.className = "show";
    setTimeout(() => { toast.className = toast.className.replace("show", ""); }, 3000);
}

function translateToWicks() {
    const arabicText = document.getElementById("arabic-input").value;
    if (!arabicText) {
        showToast("Please enter Arabic text.");
        document.getElementById("arabic-input").classList.add("error");
        return;
    }
    document.getElementById("arabic-input").classList.remove("error");
    let translatedText = '';
    for (let char of arabicText) {
        if (dictionary[char] !== undefined) {
            translatedText += dictionary[char];
        } else {
            translatedText += char;
        }
    }
    document.getElementById("wicks-output").value = translatedText;
    showToast("Translation to Wicks completed.");
}

function translateToArabic() {
    const wicksText = document.getElementById("wicks-input").value;
    if (!wicksText) {
        showToast("Please enter Wicks text.");
        document.getElementById("wicks-input").classList.add("error");
        return;
    }
    document.getElementById("wicks-input").classList.remove("error");
    const regex = /wik\d+|\s+|[^\s]/g;
    let match;
    let translatedText = '';
    while ((match = regex.exec(wicksText)) !== null) {
        if (reverseDictionary[match[0]] !== undefined) {
            translatedText += reverseDictionary[match[0]];
        } else {
            translatedText += match[0];
        }
    }
    document.getElementById("arabic-output").value = translatedText;
    showToast("Translation to Arabic completed.");
}

document.getElementById("translate-to-wicks").addEventListener("click", translateToWicks);
document.getElementById("translate-to-arabic").addEventListener("click", translateToArabic);

document.querySelectorAll('.copy-btn').forEach(button => {
    button.addEventListener('click', () => {
        const targetId = button.getAttribute('data-copy-target');
        const target = document.getElementById(targetId);
        target.select();
        document.execCommand('copy');
        showToast('Copied to clipboard!');
    });
});

const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    themeToggle.innerHTML = document.body.classList.contains('light-theme') 
        ? '<i class="fas fa-adjust"></i> Switch to Dark Theme' 
        : '<i class="fas fa-adjust"></i> Switch to Light Theme';
});
