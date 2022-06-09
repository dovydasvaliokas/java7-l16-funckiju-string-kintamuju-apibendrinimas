window.onload = function() {
    // su pirma funkcija pvz.
    let sk = 5;
    let kitasSk;
    sk = sumazintiPerPuseSkaiciu(sk);
    console.log(sk);
    kitasSk = sumazintiPerPuseSkaiciu(100);
    console.log(kitasSk);

    sk = sumazintiPerPuseSkaiciu(sk);
    console.log(sk);

    console.log("---------------------------------");
    
    // su antra funkcija pvz.
    let sk3 = sumazintiSkaiciuPerKazkiekKartu(10, 5);
    console.log(sk3);

    sk3 = sumazintiSkaiciuPerKazkiekKartu(sk, sk);
    console.log(sk3);
}


// PAPILDOMOS FUNKCIJOS 
function sumazintiPerPuseSkaiciu(skaicius) {
    return skaicius / 2;
} 


function sumazintiSkaiciuPerKazkiekKartu(skaicius, kiekKartuMazinti) {
    return skaicius / kiekKartuMazinti;
}