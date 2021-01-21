var Quran = {
  qdata: [],
  surahs: [],
  url: "data/quran-uthmani.json",
  audio: "http://cdn.alquran.cloud/media/audio/ayah",
  readerList: [],
  currentReaderIndex: 113,
  __init__: function () {
    getJson(this.url, "quran");
  },
  numberOfSurahs: 114,
};
var Editions = {
  editions: [],
  url: "data/edition.json",
  __init__: function () {
    getJson(this.url, "edition");
  },
};
var Tafseer = {
  tdata: [],
  surahs: [],
  url: "data/ar.muyassa.json",
  __init__: function () {
    getJson(this.url, "tafseer");
  },
};
function Edition(identifier, language, name, englishName, format, type) {
  this.identifier = identifier;
  this.language = language;
  this.name = name;
  this.englishName = englishName;
  this.format = format;
  this.type = type;
}
function Surah(
  number,
  name,
  englishName,
  englishNameTranslation,
  revelationType,
  ayahs
) {
  this.number = number;
  this.name = name;
  this.englishName = englishName;
  this.englishNameTranslation = englishNameTranslation;
  this.revelationType = revelationType;
  this.ayahs = ayahs;
}
function Ayah(
  number,
  text,
  numberInSurah,
  juz,
  manzil,
  page,
  ruku,
  hizbQuarter,
  sajda
) {
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
function getJson(
  url,
  typedata,
  finishedCallback = onSucessConnection,
  asyncCallback = onWaitingrespose,
  onFail = onFailCallback
) {
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
    } else {
      asyncCallback(xhttprequest);
    }
  };
  xhttprequest.send(null);
}
function onSucessConnection(data, datatype) {
  switch (datatype) {
    case "quran":
      Quran.qdata = data.data;
      Quran.surahs = data.data.surahs;
      break;
    case `tafseer`:
      Tafseer.tdata = data.data;
      Tafseer.surahs = data.data.surahs;
      updatePage();
      break;
    case "edition":
      Editions.editions = data.data;
      break;
  }
}
function updateQuran() {
  for (i = 0; i < Quran.qdata.surahs.length; i++) {
    var a = Quran.qdata.surahs[i];
    Quran.surahs.push(
      new Surah(
        a.number,
        a.name,
        a.englishName,
        a.englishNameTranslation,
        a.revelationType,
        a.ayahs
      )
    );
  }
}
function updateEditions() {
  for (i = 0; i < Editions.data.length; i++) {
    a = Editions.data[i];
    Editions.editions.push(
      new Edition(
        a.identifier,
        a.language,
        a.name,
        a.englishName,
        a.format,
        a.type
      )
    );
  }
}
function updateTafseer() {
  for (i = 0; i < Tafseer.tdata.surahs.length; i++) {
    var a = Tafseer.tdata.surahs[i];
    Tafseer.surahs.push(
      new Surah(
        a.number,
        a.name,
        a.englishName,
        a.englishNameTranslation,
        a.revelationType,
        a.ayahs
      )
    );
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
  var ayah = new Ayah(
    a.number,
    a.text,
    a.numberInSurah,
    a.juz,
    a.manzil,
    a.page,
    a.ruku,
    a.hizbQuarter,
    a.sajda
  );
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

function initFullBook(e_bookId, surah_number, identifier = Quran) {
  var e_book = document.getElementById(e_bookId);
  e_book.innerHTML = "";
  var e_pages = cE("div-book-pages");
  var brevayah = getAyahBySurahNumber(surah_number, 0, identifier);
  var surah = getSurahByNumber(surah_number, identifier);
  for (i = 0; i < surah.ayahs.length; i++) {
    var ayah = getAyahBySurahNumber(surah_number, i, identifier);
    if (ayah.page != brevayah.page || i == 0) {
      var e_header = createHeader(surah, ayah);
      e_pages.appendChild(e_header);
    }
    var e_ayah = createAyah(surah, ayah);
    e_pages.appendChild(e_ayah);
    brevayah.page = ayah.page;
  }
  e_book.appendChild(e_pages);
}
//create page header
function createHeader(surah, ayah) {
  var h_e = document.createElement("div"); //main head
  //surah name
  var sn_e = cE("div-surah-number");
  sn_e.innerText = surah.name;
  h_e.appendChild(sn_e); //append to header.
  //other
  var details_e = cE("div-header-details");
  //juz
  var juz_e = cE("div-header-details-surah-juz-number");
  juz_e.innerText = ayah.juz;
  details_e.appendChild(juz_e);
  //hiezb
  var hiezb_e = cE("div-page-header-surahhizbnumber");
  hiezb_e.innerText = ayah.hizbQuarter;
  details_e.appendChild(hiezb_e);
  //number page
  var page_num_e = cE("div-page-header-surahnumber");
  page_num_e.innerText = ayah.page;
  details_e.appendChild(page_num_e);

  h_e.appendChild(details_e); //append to header.
  return h_e;
}
function createAyah(surah, ayah, appendtafseer = false) {
  //section
  var e_section = cE("div-page-section");
  //ayah
  var e_ayah = cE("div-page-section-ayah");
  //text
  var e_ayah_text = cE("div-page-section-ayah-text");
  e_ayah_text.innerText = ayah.text;
  e_ayah.appendChild(e_ayah_text);
  //ayah number
  var e_ayah_numinsurah = cE("div-page-section-ayah-ayahnumberinsurah");
  e_ayah_numinsurah.innerText = ayah.numberInSurah;
  e_ayah.appendChild(e_ayah_numinsurah);

  e_section.appendChild(e_ayah);

  /*        //tafseer
                //text
                //ayah number
    if(appendtafseer){
        getAyahBySurahNumber(surah.number,ayah.number,Tafseer);
    } */
  return e_section;
}

//create element fast with class attribute
function cE(className, tag = "div") {
  var e = document.createElement(tag);
  e.setAttribute("class", className);
  return e;
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
function initContainerQuran(
  numberOfSurah,
  bookId = "book",
  withTafseerInTitle = false,
  withAyahAudio = true,
  identifier = Quran,
  pageId = "p",
  ayahId = "a"
) {
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
    ayah_element.id = `${ayahId}_${ayah.number}`;
    ayah_element.setAttribute("class", ayahClassName);
    ayah_element.value = ayah;
    if (withAyahAudio) {
      ayah_element.addEventListener("click", ayahInteractive);
    }
    ayah_element.innerText = ayah.text;
    ayah_element.tabIndex = 0;
    if (withTafseerInTitle) {
      ayah_element.title = getAyahBySurahNumber(numberOfSurah, i, Tafseer).text;
    }
    //create ayah numberinsurah block
    var numberInSurah_element = document.createElement("span");
    numberInSurah_element.innerText = convertNumEtoA(ayah.numberInSurah);
    numberInSurah_element.setAttribute("class", numAyahInSurahClassName);
    //check if here sagda set color change text with sajda.
    if (ayah.sajda) {
      numberInSurah_element.innerText = `${convertNumEtoA(
        ayah.numberInSurah
      )} سجده`;
    }
    page_element.appendChild(ayah_element);
    page_element.appendChild(numberInSurah_element);
    book_element.appendChild(page_element);
    brevayah = ayah;
  }
}
function convertNumEtoA(e) {
  var a = [
    "\u0660",
    "\u0661",
    "\u0662",
    "\u0663",
    "\u0664",
    "\u0665",
    "\u0666",
    "\u0667",
    "\u0668",
    "\u0669",
  ];
  var arabic = e.toString().replace(/[0-9]/gi, function (i) {
    return a[i];
  });
  return arabic;
}

/* ---------------------------------------Listening Option----------------------*/
function ayahInteractive() {
  playSoundAyah(this);
  //var tafseerAyah=getAyahBySurahNumber(this.value.surah,this.value.numberInSurah,Tafseer);
}
function playSoundAyah(e) {
  var url = `${Quran.audio}/${Quran.readerList[Quran.currentReaderIndex]}/${
    e.value.number
  }`;
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
function onFailCallback() {}
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

  var readersSselectors = document.getElementsByClassName(
    "__audio_reader_selectors"
  );
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
function showSurah(selectorId, showtafseerId) {
  var select = document.getElementById(selectorId);
  var surah_number = select.options[select.selectedIndex].value;
  var w = document.getElementById(showtafseerId).checked;
  initFullBook("book", surah_number);
}
function onShowTafseer() {}
function doani() {
  document.body.className = "body loadani";
}
