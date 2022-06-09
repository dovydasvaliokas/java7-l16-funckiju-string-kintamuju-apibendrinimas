window.onload = function() {
    let tekstas = "Čia yra kažkoks tekstas";
    
    // pirmsa pavyzdys - padariau funkciją, kuri grąžina teksto ilgį
    // P.S. TOKIOS FUNKCIJOS KURTI NEBŪTINA - VISUR KUR REIKIA, GALITE NAUDOTI tekstas.length SAVYBĘ

    let tekstoIlgis = grazinaTekstoIlgi(tekstas);
    console.log(tekstoIlgis);

    // Antras pavyzdys kaip su funkcija surandame trijų žodžių bendrą ilgį (jų visų bendrą raidžių kiekį)
    let zodis1 = "kelmas";
    let zodis2 = "medis";
    let zodis3 = "tvora";

    let zodziuIlgis = trijuZodziuBendrasIlgis(zodis1, zodis2, zodis3);

    // Išvedu kartu ir žodžius (paaiškinančius kas čia išvedama) bei rezultatą, kurį reikėjo išvesti
    console.log("Trijų žodžių ilgių suma: " + zodziuIlgis);

    // Funkciją panaudoju dar kartą su kitokiomis reikšmėmis
    let trijuZodziuIlgis = trijuZodziuBendrasIlgis("antanas", "petras", "jonas");
    console.log("Trijų vardų ilgis yra: " + trijuZodziuIlgis);



    // Funkciją panaudoju dar kartą, bet jos net nesaugau į kintamąjį, o ją išsyk išvedu ir į jos argumentus paduodu tiek paprastas reiškems, tiek kintamuosius
    console.log("Trijų žodžių bendras ilgis yra: " + trijuZodziuBendrasIlgis(zodis1, "betonas", zodis2 + "uraganas")); 
}


function grazinaTekstoIlgi(text) {
    return text.length;
}


function trijuZodziuBendrasIlgis(text1, text2, text3) {
    let text1Ilgis = text1.length;
    let text2Ilgis = text2.length;

    // Tačiau galima ir nesikurti tokių kintamųjų. Trečio žodžio ilgiui, papildomo kintamojo nesikursiu, bet iš karto naudosiu "length" komandą, kai man jo reikės
    let ilgiuSuma = text1Ilgis + text2Ilgis + text3.length;

    return ilgiuSuma;
}

