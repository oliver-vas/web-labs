

const Lista_na_zborovi = [  "plant",
                            "stone",
                            "house",
                            "grape",
                            "flame",
                            "truck",
                            "scrub",
                            "groom",
                            "staff",
                            "cough"
                            
]

// const Lista_na_zborovi = [  "мозок",
//                             "паста",
//                             "врата",
//                             "пчела",
//                             "галеб",
//                             "танец",
//                             "осило",
//                             "палец",
//                             "сплет",
//                             "памук"
    
// ]

const Zbor_od_lista = new Array(5);
const Zbor_od_korisnik = new Array(5);
const Prikazhani_bukvi = new Array(5);
const Obid = new Array(1);

// document.addEventListener("load", start_wordle());

function start_wordle(Lista_na_zborovi, Zbor_od_lista, Prikazhani_bukvi, Obid) {

    Obid[0] = 1;

    for (var i = 0; i < 5; i++) {
        Prikazhani_bukvi[i] = 0;
    }

    //generiraj random broj od 0 do 9 za da izberesh zbor
    var Random_zbor = Math.floor(Math.random() * 10);

    //generiraj random broj od 0 d0 4 za da izberesh dve bukvi koi ke gi pokazhesh
    var Bukva_1 = Math.floor(Math.random() * 5);
    var Bukva_2 = 0;

    do {
        Bukva_2 = Math.floor(Math.random() * 5);
    } while (Bukva_1 == Bukva_2);

    //izberi zbor za igra
    Zbor_od_lista = Lista_na_zborovi[Random_zbor].split("");

    show_letter(Prikazhani_bukvi, Bukva_1);
    show_letter(Prikazhani_bukvi, Bukva_2);

    //generiraj html / forma / prikaz
    start_game();

    show_word(Zbor_od_lista, Prikazhani_bukvi, Obid);

    document.getElementById("tests").innerHTML = Zbor_od_lista;

    return;

}



function show_letter(Prikazhani_bukvi, i) {

    Prikazhani_bukvi[i] = 1;

    return;

}

function show_word(Zbor_od_lista, Prikazhani_bukvi, Obid) {

    for (var i = 0; i < 5; i++)
    {

        momentalno_mesto = "mesto_" + i.toString();
        var Bukva = document.getElementById(momentalno_mesto);

        if (Prikazhani_bukvi[i] == 0) {

            Bukva.value = "";
            // Bukva.required = true;
            // Bukva.disabled = false;
            continue;

        }

        Bukva.value = Zbor_od_lista[i];
        Bukva.required = false;
        Bukva.disabled = true;

    }

    document.getElementById("obidi").innerHTML = 'Обид ' + Obid[0] + ' од 5.';

    set_autofocus();

    return;

}

function start_game() {

    document.getElementById("igra").innerHTML =

            '<input id="mesto_0" type="text" class="form-control mb-2 mr-sm-2" maxlength="1" size="2" name="mesto_0" value="" pattern="[A-Za-z]" placeholder="" onkeyup="update_mesto_0(Zbor_od_korisnik)" required>' +
            '<input id="mesto_1" type="text" class="form-control mb-2 mr-sm-2" maxlength="1" size="2" name="mesto_1" value="" pattern="[A-Za-z]" placeholder="" onkeyup="update_mesto_1(Zbor_od_korisnik)" required>' +
            '<input id="mesto_2" type="text" class="form-control mb-2 mr-sm-2" maxlength="1" size="2" name="mesto_2" value="" pattern="[A-Za-z]" placeholder="" onkeyup="update_mesto_2(Zbor_od_korisnik)" required>' +
            '<input id="mesto_3" type="text" class="form-control mb-2 mr-sm-2" maxlength="1" size="2" name="mesto_3" value="" pattern="[A-Za-z]" placeholder="" onkeyup="update_mesto_3(Zbor_od_korisnik)" required>' +
            '<input id="mesto_4" type="text" class="form-control mb-2 mr-sm-2" maxlength="1" size="2" name="mesto_4" value="" pattern="[A-Za-z]" placeholder="" onkeyup="update_mesto_4(Zbor_od_korisnik)" required>' +

            '<br><br>' +

            '<input id="submit_values" type="button" onclick="play_game(Zbor_od_lista, Zbor_od_korisnik, Prikazhani_bukvi, Obid)" value="Погоди">';

    return;

}

// function set_buttons() {

//     document.getElementById("kopche").innerHTML = '<input id="Pogodi" type="button" onclick="play_game(Zbor_od_lista, Zbor_od_korisnik, Prikazhani_bukvi, Obid)" value="Погоди"><br>' +
                                        
//     '<input id="Nov zbor" type="button" onclick="start_wordle(Lista_na_zborovi, Zbor_od_lista, Prikazhani_bukvi, Obid)" value="Нов збор">';

//     return;

// }

function set_autofocus() {

    for (var i = 0; i < 5; i++) {

        momentalno_mesto = "mesto_" + i.toString();
        var Bukva = document.getElementById(momentalno_mesto);

        if (Bukva.autofocus == true) {
            Bukva.autofocus = false;
        }

        if (Bukva.value != "") {
            continue;
        }

        Bukva.focus();
        break;

    }

    return;
    
}

function update_mesto_0(Zbor_od_korisnik) {

    Zbor_od_korisnik[0] = document.getElementById("mesto_0").value;

    set_autofocus();
}

function update_mesto_1(Zbor_od_korisnik) {

    Zbor_od_korisnik[1] = document.getElementById("mesto_1").value;

    set_autofocus();
}

function update_mesto_2(Zbor_od_korisnik) {

    Zbor_od_korisnik[2] = document.getElementById("mesto_2").value;

    set_autofocus();
}

function update_mesto_3(Zbor_od_korisnik) {

    Zbor_od_korisnik[3] = document.getElementById("mesto_3").value;

    set_autofocus();
}

function update_mesto_4(Zbor_od_korisnik) {

    Zbor_od_korisnik[4] = document.getElementById("mesto_4").value;

    set_autofocus();

    document.getElementById("tests").innerHTML = Zbor_od_korisnik;
}

function play_game(Zbor_od_lista, Zbor_od_korisnik, Prikazhani_bukvi, Obid) {

    var counter = 0;

    document.getElementById("tests").innerHTML = Zbor_od_lista;

    for (var i = 0; i < 5; i++) {

        if (Prikazhani_bukvi[i] == 1) {
            counter++;
            continue;
        }

        else {

            if (Zbor_od_lista[i] == Zbor_od_korisnik[i]) {
                Prikazhani_bukvi[i] = 1;
                counter++;
                continue;
            }
            
            else {
                continue;
            }
        }
    }

    if (counter == 5) {
        alert("Success!");
        return;
    }

    Obid[0] = Obid[0] + 1;

    if (Obid[0] > 5) {
        alert("Unsuccessful, try again.")
        return;
    }

    document.getElementById("obidi").innerHTML = 'Обид ' + Obid[0] + ' од 5.';

    show_word(Zbor_od_lista, Prikazhani_bukvi, Obid);
    
    return;

}
