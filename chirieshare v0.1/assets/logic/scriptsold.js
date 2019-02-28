
//Toggle sidenav and content
var menu_src =  '<img src="assets/layout/menu.svg">';
var close_src = '<img src="assets/layout/close.svg">';

var menu_btn =  document.getElementById("menu");
menu_btn.innerHTML = menu_src;
menu_btn.addEventListener("click", toggleSidenav);

function toggleSidenav(){

    let sidenav = document.getElementsByClassName("sidenav")[0]     
    sidenav.style.display = "none";  

    let content = document.getElementsByClassName("content")[0]        
    if (content.style.display === "none") {
        content.style.display = "grid";
        sidenav.style.display = "none";
        menu_btn.innerHTML = menu_src;
        } else {
            content.style.display = "none";
            sidenav.style.display = "grid";
            menu_btn.innerHTML = close_src;
        }
} 





































//Gather, validate and send form data show back the results

function gatherSubmitData() {
    //Get innerHTML data from the field elements
    let localitate = document.getElementById("loc").value;
    let zona = document.getElementById("zon").value;
    let pret = document.getElementById("pret").value;
    let caut_camere_libere = document.getElementById("caut").checked;
    let ofer_camere_libere = document.getElementById("ofer").checked;
    let caut_colegi_pentru_share = document.getElementById("cautcolegi").checked;

    let camere_libere = document.getElementById("clibere").value;
    let camere_ocupate = document.getElementById("cocupate").value;

    let masina_de_spalat = document.getElementById("masinadespalat").checked;
    let aragaz = document.getElementById("aragaz").checked;
    let hota = document.getElementById("hota").checked;
    let frigider = document.getElementById("frigider").checked;
    let mobilat_complet = document.getElementById("mobilatcomplet").checked;
    let alte_detalii = document.getElementById("altedetalii").value;
     

    let data = {
        "localitate":localitate,
        "zona":zona,
        "pret":pret,
        "caut_camere_libere":caut_camere_libere,
        "ofer_camere_libere":ofer_camere_libere,
        "caut_colegi_pentru_share":caut_colegi_pentru_share,
        "camere_libere":camere_libere,
        "camere_ocupate":camere_ocupate,
        "masina_de_spalat":masina_de_spalat,
        "aragaz":aragaz,
        "hota":hota,
        "frigider":frigider,
        "mobilat_complet":mobilat_complet,
        "alte_detalii":alte_detalii
    }
    return data
}

//Data Validation functions

function hasLetters(text) {
    //Check if string has letters
    return /[a-z]/.test(text.toLowerCase());
}

function hasNumbers(text) {
    //Check if string has numbers
    return /[0-9]/.test(text.toLowerCase());
}

function hasPunctuation(text){
    //Check if string has punctuation
    let punctuation = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~']

    for (let pct in punctuation){
      if (text.includes(punctuation[pct])){
        return true;
      }
    }
    return false;
}
  
function dtypeLenCheck(value, dtype, len_min, len_max){
    //Check if data type is the one expected and the length is ok
    if (typeof value == typeof dtype && value.length > len_min && value.length < len_max) {
        return true;
    }else {
        return false;
    };
}


function checkData(data){
    //Check if data submited is in the required format
    
    if (!(dtypeLenCheck(data["localitate"], "String", 2, 30))){
        alert("Ops! probabil ai omis ceva..");
        return;
    }

    if (!(dtypeLenCheck(data["zona"], "String", 2, 30))){
        alert("Ops! probabil ai omis ceva..");
        return;
    }

    if (hasPunctuation(data["localitate"])){
        alert("Fara semne de punctuatie!");
        return;
    }

    if (hasPunctuation(data["zona"])){
        alert("Fara semne de punctuatie!");
        return;
    }

    if (hasNumbers(data["localitate"])){
        alert("Fara cifre!");
        return;
    }

    if (hasPunctuation(data["pret"]) || hasLetters(data["pret"])){
        alert("Doar cifre!");
        return;
    }

    if (hasPunctuation(data["camere_libere"]) || hasLetters(data["camere_libere"])){
        alert("Doar cifre!");
        return;
    }

    if (hasPunctuation(data["camere_ocupate"]) || hasLetters(data["camere_ocupate"])){
        alert("Doar cifre!");
        return;
    }

    data["pret"] = parseInt(data["pret"])
    data["camere_libere"] = parseInt(data["camere_libere"])
    data["camere_ocupate"] = parseInt(data["camere_ocupate"])

    return data
}


function submit() {
    let data = gatherSubmitData();
    let data_checked = checkData(data);
    console.log(data_checked);




}

 