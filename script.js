

// let button1 = document.getElementById("weer");
// let button2 = document.getElementById("spreuk");
// let button3 = document.getElementById("kerk");
//
// button1.addEventListener("click", function(){
//     document.getElementById("demo1").innerHTML = "<iframe src=\"//gadgets.buienradar.nl/gadget/forecastandstation/6344/\" noresize scrolling=no hspace=0 vspace=0 frameborder=0 marginheight=0 marginwidth=0 width=300 height=190></iframe>";
//     button2.disabled=true;
//     button3.disabled=true;
//
// })
// button2.addEventListener("click", function(){
//     document.getElementById("demo1").innerHTML = "testjuuuh";
//     button1.disabled=true;
//     button3.disabled=true;
// })
// button3.addEventListener("click", function() {
//     document.getElementById("demo1").innerHTML = "De kerk is opgericht in...";
//     button2.disabled = true;
//     button1.disabled = true;
//     button3.disabled = true;
// })



let button1 = document.getElementById("weer");
let button2 = document.getElementById("quote");
let button3 = document.getElementById("kerk");

button1.addEventListener("click", function(){
    document.getElementById("demo1").innerHTML = "<iframe src=\"//gadgets.buienradar.nl/gadget/forecastandstation/6344/\" noresize scrolling=no hspace=0 vspace=0 frameborder=0 marginheight=0 marginwidth=0 width=300 height=190></iframe>";
    button2.disabled=true;
    button3.disabled=true;
    button1.disabled=true;

})

// let quotes = [
//     'Als je denkt dat alles tegenzit, denk dan opnieuw',
//     'Blijf niet hangen in het verleden. Dat is voorbij. Raak niet gestrest van de toekomst. Zo ver is het nog niet. Leef in het heden en geniet.',
//     'Echte vriendschap gaat samen met de vrijheid om te vragen, te zeggen, te doen en te zijn.',
//     'De tijd bepaalt wie je ontmoet in je leven. Je hart bepaalt wie je in je leven wil. En je gedrag bepaalt of diegene in je leven blijft.',
//     'Om nieuwe dingen in je leven toe te laten, zul je soms eerst oude dingen los moeten laten.',
//     'Het leven is te kort om je zorgen te maken. Heb plezier. Heb lief. Heb geen spijt. En laat je door niemand van de wijs brengen.',
//     'Groeien is springen in het onbekende, telkens weer.'
//
// ]
//
// function NewQuote() {
//     button2.addEventListener("click", function(){
//         document.getElementById("demo1").innerHTML = quotes[randomNumber];
//         button1.disabled=true;
//         button3.disabled=true;
//         button2.disabled=true;
//     })}

let quotes2 = [
    'De kerk is gebouwd van 1449-1525.',
    'De kerk is gewijd aan Laurentius van Rome, de beschermheilige van Rotterdam.',
    'De kerk was eerst katholiek, en is sinds 1572 een protestants.',
    'De kerk heeft 5 orgels en 49 klokken (waaronder de grootste kerkorgel van Nederland).',
    'De kerk wordt nu gebruikt voor concerten, toneelvoorstellingen en andere grote bijeenkomsten, ook vinden er ceremonies van het Erasmus Universiteit en politie beëdigingen plaats.',
    'De toren van de kerk is 65 meter hoog.',
    'De kerk is het enige overblijfsel van het middeleeuwse Rotterdamse stadscentrum, maar is wel nog gerenoveerd (1952-1968) na het bombardement van Rotterdam in de Tweede Wereldoorlog.'
]


function NewQuote2() {
    let randomNumber = Math.floor(Math.random() * (quotes2.length));

    button3.addEventListener("click", function() {
        document.getElementById("demo1").innerHTML = quotes2[randomNumber];
        button2.disabled = true;
        button1.disabled = true;
        button3.disabled = true;
    })}



(function(d, s, id) {
    let js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s);
    js.id = id;
    js.src = "//platform.twitter.com/widgets.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, "script", "twitter-wjs"));


//Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

