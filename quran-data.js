var SurahNames= [
	// [start, ayas, order, rukus, name, tname, ename, type]
	[0, 7, 5, 1, 'الفاتحة', "Al-Faatiha", 'The Opening', 'Meccan'],
	[7, 286, 87, 40, 'البقرة', "Al-Baqara", 'The Cow', 'Medinan'],
	[293, 200, 89, 20, 'آل عمران', "Aal-Imran", 'The Family of Imraan', 'Medinan'],
	[493, 176, 92, 24, 'النساء', "An-Nisaa", 'The Women', 'Medinan'],
	[669, 120, 112, 16, 'المائدة', "Al-Maaida", 'The Table', 'Medinan'],
	[789, 165, 55, 20, 'الأنعام', "Al-An'aam", 'The Cattle', 'Meccan'],
	[954, 206, 39, 24, 'الأعراف', "Al-A'raaf", 'The Heights', 'Meccan'],
	[1160, 75, 88, 10, 'الأنفال', "Al-Anfaal", 'The Spoils of War', 'Medinan'],
	[1235, 129, 113, 16, 'التوبة', "At-Tawba", 'The Repentance', 'Medinan'],
	[1364, 109, 51, 11, 'يونس', "Yunus", 'Jonas', 'Meccan'],
	[1473, 123, 52, 10, 'هود', "Hud", 'Hud', 'Meccan'],
	[1596, 111, 53, 12, 'يوسف', "Yusuf", 'Joseph', 'Meccan'],
	[1707, 43, 96, 6, 'الرعد', "Ar-Ra'd", 'The Thunder', 'Medinan'],
	[1750, 52, 72, 7, 'ابراهيم', "Ibrahim", 'Abraham', 'Meccan'],
	[1802, 99, 54, 6, 'الحجر', "Al-Hijr", 'The Rock', 'Meccan'],
	[1901, 128, 70, 16, 'النحل', "An-Nahl", 'The Bee', 'Meccan'],
	[2029, 111, 50, 12, 'الإسراء', "Al-Israa", 'The Night Journey', 'Meccan'],
	[2140, 110, 69, 12, 'الكهف', "Al-Kahf", 'The Cave', 'Meccan'],
	[2250, 98, 44, 6, 'مريم', "Maryam", 'Mary', 'Meccan'],
	[2348, 135, 45, 8, 'طه', "Taa-Haa", 'Taa-Haa', 'Meccan'],
	[2483, 112, 73, 7, 'الأنبياء', "Al-Anbiyaa", 'The Prophets', 'Meccan'],
	[2595, 78, 103, 10, 'الحج', "Al-Hajj", 'The Pilgrimage', 'Medinan'],
	[2673, 118, 74, 6, 'المؤمنون', "Al-Muminoon", 'The Believers', 'Meccan'],
	[2791, 64, 102, 9, 'النور', "An-Noor", 'The Light', 'Medinan'],
	[2855, 77, 42, 6, 'الفرقان', "Al-Furqaan", 'The Criterion', 'Meccan'],
	[2932, 227, 47, 11, 'الشعراء', "Ash-Shu'araa", 'The Poets', 'Meccan'],
	[3159, 93, 48, 7, 'النمل', "An-Naml", 'The Ant', 'Meccan'],
	[3252, 88, 49, 8, 'القصص', "Al-Qasas", 'The Stories', 'Meccan'],
	[3340, 69, 85, 7, 'العنكبوت', "Al-Ankaboot", 'The Spider', 'Meccan'],
	[3409, 60, 84, 6, 'الروم', "Ar-Room", 'The Romans', 'Meccan'],
	[3469, 34, 57, 3, 'لقمان', "Luqman", 'Luqman', 'Meccan'],
	[3503, 30, 75, 3, 'السجدة', "As-Sajda", 'The Prostration', 'Meccan'],
	[3533, 73, 90, 9, 'الأحزاب', "Al-Ahzaab", 'The Clans', 'Medinan'],
	[3606, 54, 58, 6, 'سبإ', "Saba", 'Sheba', 'Meccan'],
	[3660, 45, 43, 5, 'فاطر', "Faatir", 'The Originator', 'Meccan'],
	[3705, 83, 41, 5, 'يس', "Yaseen", 'Yaseen', 'Meccan'],
	[3788, 182, 56, 5, 'الصافات', "As-Saaffaat", 'Those drawn up in Ranks', 'Meccan'],
	[3970, 88, 38, 5, 'ص', "Saad", 'The letter Saad', 'Meccan'],
	[4058, 75, 59, 8, 'الزمر', "Az-Zumar", 'The Groups', 'Meccan'],
	[4133, 85, 60, 9, 'غافر', "Ghafir", 'The Forgiver', 'Meccan'],
	[4218, 54, 61, 6, 'فصلت', "Fussilat", 'Explained in detail', 'Meccan'],
	[4272, 53, 62, 5, 'الشورى', "Ash-Shura", 'Consultation', 'Meccan'],
	[4325, 89, 63, 7, 'الزخرف', "Az-Zukhruf", 'Ornaments of gold', 'Meccan'],
	[4414, 59, 64, 3, 'الدخان', "Ad-Dukhaan", 'The Smoke', 'Meccan'],
	[4473, 37, 65, 4, 'الجاثية', "Al-Jaathiya", 'Crouching', 'Meccan'],
	[4510, 35, 66, 4, 'الأحقاف', "Al-Ahqaf", 'The Dunes', 'Meccan'],
	[4545, 38, 95, 4, 'محمد', "Muhammad", 'Muhammad', 'Medinan'],
	[4583, 29, 111, 4, 'الفتح', "Al-Fath", 'The Victory', 'Medinan'],
	[4612, 18, 106, 2, 'الحجرات', "Al-Hujuraat", 'The Inner Apartments', 'Medinan'],
	[4630, 45, 34, 3, 'ق', "Qaaf", 'The letter Qaaf', 'Meccan'],
	[4675, 60, 67, 3, 'الذاريات', "Adh-Dhaariyat", 'The Winnowing Winds', 'Meccan'],
	[4735, 49, 76, 2, 'الطور', "At-Tur", 'The Mount', 'Meccan'],
	[4784, 62, 23, 3, 'النجم', "An-Najm", 'The Star', 'Meccan'],
	[4846, 55, 37, 3, 'القمر', "Al-Qamar", 'The Moon', 'Meccan'],
	[4901, 78, 97, 3, 'الرحمن', "Ar-Rahmaan", 'The Beneficent', 'Medinan'],
	[4979, 96, 46, 3, 'الواقعة', "Al-Waaqia", 'The Inevitable', 'Meccan'],
	[5075, 29, 94, 4, 'الحديد', "Al-Hadid", 'The Iron', 'Medinan'],
	[5104, 22, 105, 3, 'المجادلة', "Al-Mujaadila", 'The Pleading Woman', 'Medinan'],
	[5126, 24, 101, 3, 'الحشر', "Al-Hashr", 'The Exile', 'Medinan'],
	[5150, 13, 91, 2, 'الممتحنة', "Al-Mumtahana", 'She that is to be examined', 'Medinan'],
	[5163, 14, 109, 2, 'الصف', "As-Saff", 'The Ranks', 'Medinan'],
	[5177, 11, 110, 2, 'الجمعة', "Al-Jumu'a", 'Friday', 'Medinan'],
	[5188, 11, 104, 2, 'المنافقون', "Al-Munaafiqoon", 'The Hypocrites', 'Medinan'],
	[5199, 18, 108, 2, 'التغابن', "At-Taghaabun", 'Mutual Disillusion', 'Medinan'],
	[5217, 12, 99, 2, 'الطلاق', "At-Talaaq", 'Divorce', 'Medinan'],
	[5229, 12, 107, 2, 'التحريم', "At-Tahrim", 'The Prohibition', 'Medinan'],
	[5241, 30, 77, 2, 'الملك', "Al-Mulk", 'The Sovereignty', 'Meccan'],
	[5271, 52, 2, 2, 'القلم', "Al-Qalam", 'The Pen', 'Meccan'],
	[5323, 52, 78, 2, 'الحاقة', "Al-Haaqqa", 'The Reality', 'Meccan'],
	[5375, 44, 79, 2, 'المعارج', "Al-Ma'aarij", 'The Ascending Stairways', 'Meccan'],
	[5419, 28, 71, 2, 'نوح', "Nooh", 'Noah', 'Meccan'],
	[5447, 28, 40, 2, 'الجن', "Al-Jinn", 'The Jinn', 'Meccan'],
	[5475, 20, 3, 2, 'المزمل', "Al-Muzzammil", 'The Enshrouded One', 'Meccan'],
	[5495, 56, 4, 2, 'المدثر', "Al-Muddaththir", 'The Cloaked One', 'Meccan'],
	[5551, 40, 31, 2, 'القيامة', "Al-Qiyaama", 'The Resurrection', 'Meccan'],
	[5591, 31, 98, 2, 'الانسان', "Al-Insaan", 'Man', 'Medinan'],
	[5622, 50, 33, 2, 'المرسلات', "Al-Mursalaat", 'The Emissaries', 'Meccan'],
	[5672, 40, 80, 2, 'النبإ', "An-Naba", 'The Announcement', 'Meccan'],
	[5712, 46, 81, 2, 'النازعات', "An-Naazi'aat", 'Those who drag forth', 'Meccan'],
	[5758, 42, 24, 1, 'عبس', "Abasa", 'He frowned', 'Meccan'],
	[5800, 29, 7, 1, 'التكوير', "At-Takwir", 'The Overthrowing', 'Meccan'],
	[5829, 19, 82, 1, 'الإنفطار', "Al-Infitaar", 'The Cleaving', 'Meccan'],
	[5848, 36, 86, 1, 'المطففين', "Al-Mutaffifin", 'Defrauding', 'Meccan'],
	[5884, 25, 83, 1, 'الإنشقاق', "Al-Inshiqaaq", 'The Splitting Open', 'Meccan'],
	[5909, 22, 27, 1, 'البروج', "Al-Burooj", 'The Constellations', 'Meccan'],
	[5931, 17, 36, 1, 'الطارق', "At-Taariq", 'The Morning Star', 'Meccan'],
	[5948, 19, 8, 1, 'الأعلى', "Al-A'laa", 'The Most High', 'Meccan'],
	[5967, 26, 68, 1, 'الغاشية', "Al-Ghaashiya", 'The Overwhelming', 'Meccan'],
	[5993, 30, 10, 1, 'الفجر', "Al-Fajr", 'The Dawn', 'Meccan'],
	[6023, 20, 35, 1, 'البلد', "Al-Balad", 'The City', 'Meccan'],
	[6043, 15, 26, 1, 'الشمس', "Ash-Shams", 'The Sun', 'Meccan'],
	[6058, 21, 9, 1, 'الليل', "Al-Lail", 'The Night', 'Meccan'],
	[6079, 11, 11, 1, 'الضحى', "Ad-Dhuhaa", 'The Morning Hours', 'Meccan'],
	[6090, 8, 12, 1, 'الشرح', "Ash-Sharh", 'The Consolation', 'Meccan'],
	[6098, 8, 28, 1, 'التين', "At-Tin", 'The Fig', 'Meccan'],
	[6106, 19, 1, 1, 'العلق', "Al-Alaq", 'The Clot', 'Meccan'],
	[6125, 5, 25, 1, 'القدر', "Al-Qadr", 'The Power, Fate', 'Meccan'],
	[6130, 8, 100, 1, 'البينة', "Al-Bayyina", 'The Evidence', 'Medinan'],
	[6138, 8, 93, 1, 'الزلزلة', "Az-Zalzala", 'The Earthquake', 'Medinan'],
	[6146, 11, 14, 1, 'العاديات', "Al-Aadiyaat", 'The Chargers', 'Meccan'],
	[6157, 11, 30, 1, 'القارعة', "Al-Qaari'a", 'The Calamity', 'Meccan'],
	[6168, 8, 16, 1, 'التكاثر', "At-Takaathur", 'Competition', 'Meccan'],
	[6176, 3, 13, 1, 'العصر', "Al-Asr", 'The Declining Day, Epoch', 'Meccan'],
	[6179, 9, 32, 1, 'الهمزة', "Al-Humaza", 'The Traducer', 'Meccan'],
	[6188, 5, 19, 1, 'الفيل', "Al-Fil", 'The Elephant', 'Meccan'],
	[6193, 4, 29, 1, 'قريش', "Quraish", 'Quraysh', 'Meccan'],
	[6197, 7, 17, 1, 'الماعون', "Al-Maa'un", 'Almsgiving', 'Meccan'],
	[6204, 3, 15, 1, 'الكوثر', "Al-Kawthar", 'Abundance', 'Meccan'],
	[6207, 6, 18, 1, 'الكافرون', "Al-Kaafiroon", 'The Disbelievers', 'Meccan'],
	[6213, 3, 114, 1, 'النصر', "An-Nasr", 'Divine Support', 'Medinan'],
	[6216, 5, 6, 1, 'المسد', "Al-Masad", 'The Palm Fibre', 'Meccan'],
	[6221, 4, 22, 1, 'الإخلاص', "Al-Ikhlaas", 'Sincerity', 'Meccan'],
	[6225, 5, 20, 1, 'الفلق', "Al-Falaq", 'The Dawn', 'Meccan'],
	[6230, 6, 21, 1, 'الناس', "An-Naas", 'Mankind', 'Meccan'],
];
var Quran = {
    qdata: [],
    surahs: [],
    url: "data/quran-uthmani.json",
    audio: "http://cdn.alquran.cloud/media/audio/ayah",
    readerList: [],
    currentReaderIndex: 113,
    __init__: function () { getJson(this.url, 'quran'); },
    numberOfSurahs: 114
};
var Editions = {
    editions: [],
    url: "data/edition.json",
    __init__: function () { getJson(this.url, 'edition'); }
};
var Tafseer = {
    tdata: [],
    surahs: [],
    url: "data/ar.muyassa.json",
    __init__: function () { getJson(this.url, 'tafseer'); }
}
function getJson(url, typedata, finishedCallback = onSucessConnection, asyncCallback = onWaitingrespose, onFail = onFailCallback) {
    var xhttprequest = new XMLHttpRequest();
    xhttprequest.open("GET", url);
    xhttprequest.onreadystatechange = function () {
        if (xhttprequest.readyState == 4) {
            switch (xhttprequest.status) {
                case 200:
                    finishedCallback(JSON.parse(xhttprequest.responseText), typedata);
                    break;
                case 404:
                    onFail();
                    break;
            }
        }
        else {
            asyncCallback(xhttprequest);
        }
    }
    xhttprequest.send(null);
}
function onSucessConnection(data, datatype) {
    switch (datatype) {
        case 'quran':
            Quran.qdata = data.data;
            Quran.surahs = data.data.surahs;
            break;
        case `tafseer`:
            Tafseer.tdata = data.data;
            Tafseer.surahs = data.data.surahs;
            updatePage();
            break;
        case 'edition':
            Editions.editions = data.data;
            break;
    }

}
function onWaitingrespose(xhttprequest) {
    console.log("I Loading ...." + xhttprequest.readyState);
    
}
// if connection faild 404
function onFailCallback() {

}
function onChangeReader(callerId) {
    var e = document.getElementById(callerId);
    var reader_index = e.options[e.selectedIndex].value;
    Quran.currentReaderIndex = reader_index;
}

Editions.__init__();
Quran.__init__();
Tafseer.__init__();


/* ------------------------------------------Data helping---------------*/
function getSurah(n, identifier) {
    return identifier.surahs[n];
}
function getAyahs(n, identifier) {
    return identifier.surahs[n].ayahs;
}
function getAyah(numofsurah,AyahIndex, identifier) {
    var ayah = identifier.surahs[numofsurah].ayahs[AyahIndex];
    return ayah;
}

function updatePage() {
    //update surah selects.
    var surahsSelectors = document.getElementsByClassName("fullbook-select-surah");
    for (i = 0; i < surahsSelectors.length; i++) {
        var slength = SurahNames.length;
        for (x = 0; x < slength; x++) {
            var surah = SurahNames[x][4];
            var option = document.createElement("option");
            option.value = x;
            option.innerText = surah;
            surahsSelectors[i].appendChild(option);
        }
    }
    //update readers selects.

    var readersSselectors = document.getElementsByClassName("__audio_reader_selectors");
    for (i = 0; i < readersSselectors.length; i++) {
        var rLength = Editions.editions.length;
        for (e = 0; e < rLength; e++) {
            if (Editions.editions[e].type == "versebyverse") {
                editionTemp = Editions.editions[e];
                Quran.readerList[e] = editionTemp.identifier;
                var noption = document.createElement("option");
                noption.value = e;
                noption.innerText = editionTemp.name;
                readersSselectors[i].appendChild(noption);
            }
        }
    }
}