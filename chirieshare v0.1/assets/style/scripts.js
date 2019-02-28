"use strict";


// Alert user to use chrome or firefox

function checkBrowser() {
    var browser = navigator.userAgent;

    if (!((browser.indexOf("Firefox") > -1) || (browser.indexOf("Chrome") > -1))){
        alert("Acest website functioneaza doar cu versiunile cele mai recente de Firefox sau Chrome!");
        window.open("https://www.mozilla.org/ro/firefox/new/","_self")
    }
}

document.body.onload = checkBrowser;


// Toggle sidenav
try {
    document.getElementsByTagName("aside")[0].style.display = "none";
    //Open menu
    document.querySelector("#open-menu").addEventListener("click", 
    function(event) {
        document.getElementsByTagName("aside")[0].style.display = "block";
        event.preventDefault();
        let overlay = document.getElementsByClassName("overlay")[0];
        overlay.style.display = "block";
        document.body.style.overflow = "hidden";
        document.documentElement.scrollTop = 0;
        
        let aside = document.getElementsByTagName("aside")[0];
        aside.scrollTop = 0;

    }, false);

    //Close menu
    document.querySelector("#close-menu").addEventListener("click", 
    function(event) {
        document.getElementsByTagName("aside")[0].style.display = "none";
        event.preventDefault();
        let overlay = document.getElementsByClassName("overlay")[0];
        overlay.style.display = "none";
        document.body.style.overflow = "auto";

    }, false);

    //Close if clicked on overlay
    document.getElementsByClassName("overlay")[0].addEventListener("click", 
    function(event) {
        document.getElementsByTagName("aside")[0].style.display = "none";
        event.preventDefault();
        let overlay = document.getElementsByClassName("overlay")[0];
        overlay.style.display = "none";
        document.body.style.overflow = "auto";

    }, false);

}

catch (err) {
    console.log("warning: " + err);
}



//Toggle heart/fav
try {

    var favs = document.querySelectorAll(".fav-selected, .fav-unselected");

    for (var i = 0; i < favs.length; i++) {
    
        (function(index){
            favs[i].onclick = function(){
                if (favs[index].className == "fav-selected"){
                    favs[index].className = "fav-unselected";
    
                }else if (favs[index].className == "fav-unselected"){
                    favs[index].className = "fav-selected";
                }
            }    
        })(i);
    
    }
        
} catch (err) {
    console.log("warning: " + err);
}

// Notification handler

function sleep (time) {
    // Sleep time expects milliseconds
    return new Promise((resolve) => setTimeout(resolve, time));
}

function hideNotif () {
    notification.style.display = "none";
}

try {
    var notif_trigger = document.getElementById("trigger");
    var notification = document.getElementById("info");
    
    notif_trigger.addEventListener("click", function(){
        notification.style.display = "block";
        sleep(2500).then(() => {
            hideNotif();
        });
    
    }, false)
}
catch (err) {
    console.log("warning: " + err);
}



// Carousel image handler

try {

    var carousel = document.getElementsByClassName("carousel")[0];
    var prev = document.getElementsByClassName("chevron-left")[0];
    var next = document.getElementsByClassName("chevron-right")[0];

    function carouselImgState(){    
        var images = document.querySelectorAll(".none, .block");
        var img_clases = [];
        for (var i = 0; i < images.length; i++) {
            img_clases.push(images[i].className);
        }
        return {"images":images, "clases": img_clases}
    }


    function imgSlider(fwd=true){
        // Carousel images
        var img_object = carouselImgState();
        console.log(img_object["clases"]);
        for (var i=0; i < img_object["clases"].length; i++) {
            if (img_object["clases"][i] == "block") {
                var array = img_object["images"];
                var len = array.length;
                var current_index = array[i];
                var previous_index = array[(i+len-1)%len];
                var next_index = array[(i+1)%len];
                current_index.className = "none";
                if (fwd){
                    next_index.className = "block";
                }else{
                    previous_index.className = "block";
                };
            }
        }
    }

    function showNext(){imgSlider(true);}
    function showPrevious(){imgSlider(false);}
    
    next.addEventListener("click",  showNext, false);
    prev.addEventListener("click", showPrevious, false);

} catch (err) {
    console.log("warning: " + err);
}


// Create account handler

try {
    var create_account = document.getElementById("create_account");
    create_account.onclick = function (event) {
        event.preventDefault();
        document.getElementById("nume").className = "block";
        document.getElementById("cpass").className = "block";
        document.getElementById("termeniconditii").className = "block";
        document.getElementById("crac").className = "none";
        document.getElementById("tc").className = "section margin-left1";
        document.getElementsByTagName("h5")[0].innerHTML = "Creează-ţi un cont";
        document.documentElement.scrollTop = 0;
    }
} catch (err) {
    console.log("warning: " + err);
}


// Show what profile pic was uploaded

// try {

document.getElementById('pic').onclick = function() {
    var fullpath = document.getElementById("zip_file_import").value;
    var backslash=fullpath.lastIndexOf("\\");
    var filename = fullpath.substr(backslash+1);

    pic.innerHTML = filename; 

    console.log(filename);
};

    
// } catch (err) {
//     console.log("warning: " + err);
// }


