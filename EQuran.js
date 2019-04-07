
//data sample
/*
"surahs":[{"number":1,"name":"\u0633\u0648\u0631\u0629 \u0627\u0644\u0641\u0627\u062a\u062d\u0629","englishName":"Al-Faatiha","englishNameTranslation":"The Opening","revelationType":"Meccan","ayahs":[{"number":1,"audio":"http:\/\/cdn.alquran.cloud\/media\/audio\/ayah\/ar.alafasy\/1","text":"\ufeff\u0628\u0650\u0633\u0652\u0645\u0650 \u0627\u0644\u0644\u0651\u064e\u0647\u0650 \u0627\u0644\u0631\u0651\u064e\u062d\u0652\u0645\u064e\u0670\u0646\u0650 \u0627\u0644\u0631\u0651\u064e\u062d\u0650\u064a\u0645\u0650",
"numberInSurah":1,"juz":1,"manzil":1,"page":1,"ruku":1,"hizbQuarter":1,"sajda":false}
*/

//data edition
/*
{
    "identifier":"ar.muyassar",
"language":"ar",
"name":"\u062a\u0641\u0633\u064a\u0631 \u0627\u0644\u0645\u06cc\u0633\u0631",
"englishName":"King Fahad Quran Complex",
"format":"text",
"type":"tafsir"}
*/

/* ------------------------------- Intilizing Script*//*Initlizing Script -----------------------------*/

var Quran = {
    qdata: [],
    surahs: [],
    url: "/data/quran-uthmani.json",
    audio: "http://cdn.alquran.cloud/media/audio/ayah",
    readerList: [],
    currentReaderIndex: 113,
    __init__: function () { getJson(this.url, 'quran'); },
    numberOfSurahs: 114
};
var Editions = {
    editions: [],
    url: "/data/edition.json",
    __init__: function () { getJson(this.url, 'edition'); }
};
var Tafseer = {
    tdata: [],
    surahs: [],
    url: "/data/ar.muyassa.json",
    __init__: function () { getJson(this.url, 'tafseer'); }
}
function Edition(identifier, language, name, englishName, format, type) {
    this.identifier = identifier;
    this.language = language;
    this.name = name;
    this.englishName = englishName;
    this.format = format;
    this.type = type;
}
function Surah(number, name, englishName, englishNameTranslation, revelationType, ayahs) {
    this.number = number;
    this.name = name;
    this.englishName = englishName;
    this.englishNameTranslation = englishNameTranslation;
    this.revelationType = revelationType;
    this.ayahs = ayahs;
}
function Ayah(number, text, numberInSurah, juz, manzil, page, ruku, hizbQuarter, sajda) {
    this.number = number;
    this.text = text;
    this.numberInSurah = numberInSurah;
    this.juz = juz;
    this.manzil = manzil;
    this.page = page;
    this.ruku = ruku;
    this.hizbQuarter = hizbQuarter;
    this.sajda = sajda;
}
/**
 * connect to local json using javascript ajax
 * @param {*} url url to send request.
 * @param {*} finishedCallback after connection sucess callBack.
 * @param {*} asyncCallback on opening page callBack.
 * @param {*} onFail on connection faild callBack
 */
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
function updateQuran() {

    for (i = 0; i < Quran.qdata.surahs.length; i++) {
        var a = Quran.qdata.surahs[i];
        Quran.surahs.push(new Surah(a.number, a.name, a.englishName, a.englishNameTranslation, a.revelationType, a.ayahs));
    }
}
function updateEditions() {
    for (i = 0; i < Editions.data.length; i++) {
        a = Editions.data[i];
        Editions.editions.push(new Edition(a.identifier, a.language, a.name, a.englishName, a.format, a.type));
    }
}
function updateTafseer() {
    for (i = 0; i < Tafseer.tdata.surahs.length; i++) {
        var a = Tafseer.tdata.surahs[i];
        Tafseer.surahs.push(new Surah(a.number, a.name, a.englishName, a.englishNameTranslation, a.revelationType, a.ayahs));
    }
}
/* -------------------------------------------------------- Search ------------------------------------------------ */
/*Get Surah , Ayah By Number*/
function getSurahByNumber(n, identifier) {
    return identifier.surahs[n];
}
function getAyahsBySurahNumber(n, identifier) {
    return identifier.surahs[n].ayahs;
}
function getAyahBySurahNumber(numofsurah, numofayah, identifier) {
    var a = identifier.surahs[numofsurah].ayahs[numofayah];
    var ayah = new Ayah(a.number, a.text, a.numberInSurah, a.juz, a.manzil, a.page, a.ruku, a.hizbQuarter, a.sajda);
    return ayah;
}
/* -------------------------------------------------------------------------------------------------------------------*/
/* ---------------------------------------------Get surah and ayah spicialized like sjda or juz-----------------------*/
function getLengthOfAyahsBySurah(numberOfSurah) {
    var ayahs = getAyahsBySurahNumber(numberOfSurah);
    var length = ayahs.length;
    return length;
}

/* -------------------------------------------------------------------------------------------------------------*/
/* --------------------------------Initlizing quran block for reading-------------------------------------------------*/

function initFullBook(e_bookId,surah_number){
    let book=document.getElementById(e_bookId);

    //load surah and get ayahs
    let surah =getSurahByNumber(surah_number);
    for(i=0;i<surah.ayahs.length;i++){
        let ayah=getAyahBySurahNumber();
    //header
        let header_e=createheader(surah,ayah);
        
    //page
        let page_e=createPage(surah,ayah);
        
    }
    
    
}
function createheader(surah,ayah){
    let h_e=document.createElement("div"); //main head
    //surah name
    let sn_e=document.createElement('div');
    sn_e.setAttribute('id',`#div-surah-number-${surah.number}`);
    sn_e.innerText=surah.number;
    h_e.appendChild(sn_e);
    //other
    let details_e=document.createElement("div");
            //juz
    let juz_e=document.createElement('div');
    juz_e.setAttribute('id',`#div-ayah-juz-number-${surah.number}`);
    sn_e.innerText=ayah.juz;
            //hiezb

            //number page
}
function createPage(surah,ayah){
    //section
            //ayah
                //text
                //ayah number
            //tafseer
                //text
                //ayah number
}














/**
 * Update quran content with spacific surah
 * @param {*} numberOfSurah surah's number from 1 to 114
 * @param {*} numberOfAyah set -1 to get  surah
 * @param {*} book_elementId 
 * @param {*} ayahTag 
 * @param {*} numberInSurah 
 * @param {*} ayahId id will be like that (id)_(ayah number) ->"a_1" that's mean ayah number 1
 */
function initContainerQuran(numberOfSurah, bookId = "book",withTafseerInTitle=false,withAyahAudio=true, identifier = Quran, pageId = "p", ayahId = "a") {
    //default values.
    var ayahClassName = "ayah";
    var pageClassName = "page";
    var headerPageClassName = "pageheader";
    var surahNameClassName = "surahname";
    var numAyahInSurahClassName = "numberayahinsurah";


    //check if surah between 1 and 114
    if (numberOfSurah < 0 || numberOfSurah > 114) {
        console.log("range must be in 1 - 114");
        return -1;
    }
    //get book and get surah and ayahs details.
    var book_element = document.getElementById(bookId);
    book_element.innerHTML = "";
    var surah = getSurahByNumber(numberOfSurah, identifier);
    var ayahs = getAyahsBySurahNumber(numberOfSurah, identifier);

    //prepare surah name on top
    var surah_name_element = document.createElement("p");
    surah_name_element.setAttribute("class", surahNameClassName);
    surah_name_element.innerText = surah.name;
    book_element.appendChild(surah_name_element);
    //if he want spacific ayah.
    var brevayah = getAyahBySurahNumber(numberOfSurah, 0, identifier);
    for (i = 0; i < ayahs.length; i++) {
        var ayah = getAyahBySurahNumber(numberOfSurah, i, identifier);
        //check if we in the same page to append ayahs otherwise append in new page.
        if (brevayah.page != ayah.page || i == 0) {
            //create new page and set header(page number hizb juza).
            var pageNumberE = document.createElement("div");
            pageNumberE.innerText = `رقم الصفحه : ${ayah.page}`;

            var jza_element = document.createElement("div");
            jza_element.innerText = `جزء  : ${ayah.juz}`;

            var hizb_element = document.createElement("div");
            hizb_element.innerText = `حزب  :${ayah.hizbQuarter}`;

            var pageHeaderE = document.createElement("div");
            pageHeaderE.setAttribute("class", headerPageClassName);
            pageHeaderE.appendChild(jza_element);
            pageHeaderE.appendChild(pageNumberE);
            pageHeaderE.appendChild(hizb_element);

            var page_element = document.createElement("div");
            page_element.setAttribute("class", pageClassName);
            page_element.appendChild(pageHeaderE);
        }
        //create ayah block
        var ayah_element = document.createElement("div");
        ayah_element.id = `${ayahId}_${ayah.number}`
        ayah_element.setAttribute("class", ayahClassName);
        ayah_element.value = ayah;
        if(withAyahAudio){
            ayah_element.addEventListener("click", ayahInteractive);
        }
        ayah_element.innerText = ayah.text;
        ayah_element.tabIndex = 0;
        if(withTafseerInTitle){
            ayah_element.title= getAyahBySurahNumber(numberOfSurah,i,Tafseer).text;
        }
        //create ayah numberinsurah block
        var numberInSurah_element = document.createElement("span");
        numberInSurah_element.innerText = convertNumEtoA(ayah.numberInSurah);
        numberInSurah_element.setAttribute("class", numAyahInSurahClassName);
        //check if here sagda set color change text with sajda.
        if (ayah.sajda) {
            numberInSurah_element.innerText = `${convertNumEtoA(ayah.numberInSurah)} سجده`;
        }
        page_element.appendChild(ayah_element);
        page_element.appendChild(numberInSurah_element);
        book_element.appendChild(page_element);
        brevayah = ayah;
    }
}
function convertNumEtoA(e) {
    var a = ['\u0660', '\u0661', '\u0662', '\u0663', '\u0664', '\u0665', '\u0666', '\u0667', '\u0668', '\u0669'];
    var arabic = e.toString().replace(/[0-9]/gi, function (i) {
        return a[i];
    });
    return arabic;
}

/* ---------------------------------------Listening Option----------------------*/
function ayahInteractive(){
    playSoundAyah(this);
    //var tafseerAyah=getAyahBySurahNumber(this.value.surah,this.value.numberInSurah,Tafseer);
}
function playSoundAyah(e) {
    var url = `${Quran.audio}/${Quran.readerList[Quran.currentReaderIndex]}/${e.value.number}`;
    //audio element create
    var sounds = document.getElementsByTagName("audio");
    for (i = 0; i < sounds.length; i++) {
        sounds[i].pause();
    }
    var audio_element = document.createElement("audio");
    audio_element.autoplay = true;
    audio_element.src = url;
    audio_element.type = "audio/mp3";
    var soundblock = e.parentElement;
    soundblock.appendChild(audio_element);
}
/* -------------------------------------------------Events----------------------------------------- */
// while connectiong readystate between 1 and 3 callback

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

/* ----------------------------------------------------Calls-------------------------------------------------------*/
Quran.__init__();
Editions.__init__();
Tafseer.__init__();

function updatePage() {
    //update surah selects.
    var surahsSelectors = document.getElementsByClassName("_surahs_selectors");
    for (i = 0; i < surahsSelectors.length; i++) {
        var slength = Quran.surahs.length;
        for (x = 0; x < slength; x++) {
            var surah = Quran.surahs[x];
            var option = document.createElement("option");
            option.value = surah.number - 1;
            option.innerText = surah.name;
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
function showSurah(selectorId,showtafseerId) {
    var select = document.getElementById(selectorId);
    var surah_number = select.options[select.selectedIndex].value;
    let w = document.getElementById(showtafseerId).checked;
    //document.getElementById("book").className="book bookani";
    
    if(w){
        var tbook=document.createElement("div");
        tbook.id="tbook";
        initContainerQuran(surah_number,"tbook",false,false,Tafseer);
    }
    else{
        document.getElementById("fullbook").removeChild(document.getElementById("tbook"));
        var book = document.getElementById("book");
        book.style.cssFloat='none';
        book.style.textAlign='center';
    }
    initContainerQuran(surah_number, "book",true,true, Quran);
    
}
function onShowTafseer()
{
   
}
function doani(){
    document.body.className="body loadani";
}
