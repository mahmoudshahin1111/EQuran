
function initFullBook(e_bookId, surah_number,show_tafseer=false, identifier = Quran) {
    var e_book = document.getElementById(e_bookId);
    e_book.innerHTML = "";
    var page_tracker=0;
    
    var surah = getSurah(surah_number, identifier);
    var sl=surah.ayahs.length;
    for (i = 0; i < sl; i++) {
        var ayah = getAyah(surah_number, i, identifier);
        if (ayah.page != page_tracker || i == 0) {
            var e_page = cE('book-page');
            var e_header = createHeader(surah, ayah);
            e_page.appendChild(e_header);
            e_book.appendChild(e_page);
        }
        var e_ayah = createAyah(surah, ayah,show_tafseer,i);
        e_page.appendChild(e_ayah);
        page_tracker = ayah.page;
    }

}
//create page header
function createHeader(surah, ayah) {
    var e_page_header = cE('book-page-header'); //main head

    var e_surah_name = cE('book-page-header-surah-number');
    e_surah_name.innerText = surah.name;
    e_page_header.appendChild(e_surah_name); //append to header.

    var details_e = cE('book-page-header-details');

    var juz_e = cE('header-details-surah-juz-number');
    juz_e.innerText = `جزء ${convertNumEtoA(ayah.juz)}`;
    details_e.appendChild(juz_e);

    var page_num_e = cE('page-header-surahnumber');
    page_num_e.innerText = `الصفحه ${convertNumEtoA(ayah.page)}`;
    details_e.appendChild(page_num_e);

    var hiezb_e = cE('page-header-surahhizbnumber');
    hiezb_e.innerText = `حزب ${convertNumEtoA(ayah.hizbQuarter)}`;
    details_e.appendChild(hiezb_e);

    

    e_page_header.appendChild(details_e);//append to header.
    return e_page_header;
}
function createAyah(surah, ayah, appendtafseer = false, i) {
    //section
    var e_section = cE('book-page-section');
    //ayah
    var e_ayah = cE('book-page-section-ayah');
    //text
    var e_ayah_text = cE('book-page-section-ayah-text');
    e_ayah_text.innerText = ayah.text;
    e_ayah_text.tabIndex = 0;
    e_ayah_text.value = ayah;
    e_ayah_text.addEventListener('click', ayahInteractive);
    e_ayah.appendChild(e_ayah_text);
    //ayah number
    var e_ayah_numinsurah = cE('book-page-section-ayah-ayahnumberinsurah');
    e_ayah_numinsurah.innerText = convertNumEtoA(ayah.numberInSurah);
    e_ayah.appendChild(e_ayah_numinsurah);

    e_section.appendChild(e_ayah);

    if(appendtafseer){
        var ayah_tafser=getAyah(surah.number-1,i,Tafseer);
        var e_ayah_tafseer=cE('book-page-section-tafseer');
        e_ayah_tafseer.innerText=ayah_tafser.text;
        e_section.appendChild(e_ayah_tafseer);
    } 
    return e_section;
}
//create element fast with class attribute
function cE(className, tag = 'div') {
    var e = document.createElement(tag);
    e.setAttribute('class', className);
    return e;
}

function convertNumEtoA(e) {
    var a = ['\u0660', '\u0661', '\u0662', '\u0663', '\u0664', '\u0665', '\u0666', '\u0667', '\u0668', '\u0669'];
    var arabic = e.toString().replace(/[0-9]/gi, function (i) {
        return a[i];
    });
    return arabic;
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

function ayahInteractive() {
    playSoundAyah(this);
}


/* ---------------------------------------Listening Option----------------------*/


function showSurah(selectorId, showtafseerId) {
    var select = document.getElementById(selectorId);
    var surah_number = select.options[select.selectedIndex].value;
    var showTafser = document.getElementById(showtafseerId).checked;
    var e_fullbook=document.getElementById('fullbook');
    e_fullbook.setAttribute('class','bookani');
    e_fullbook.style.visibility='visible';
    initFullBook('fullbook', surah_number,showTafser);
    
   
}
document.body.onload=function(){

    document.body.className = "body loadani";
};
