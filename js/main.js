var weScrolled; /*definicja wydarzenia - przewijania*/
var LastScrolled = 0; /* ostatnia pozycja po przescrollowaniu wzgledem gory okna (gora okna = 0 na osi Y) */
var delta = 10; /* roznica miedzy gora okna a LastScrolled */
var wysokoscNavbaru = $("#naglowekRuchomy").outerHeight(); /*  $() parsuje obiekt do JQuery, pozwalajac wywolac metode z tej biblioteki */

$(window).scroll(function(event){  /*window = obszar widoczny ograniczony wielkoscia ekranu, wyrazany w pikselach */
  weScrolled = true;
});

setInterval(function() {
    if(weScrolled){
      weDidScroll(); /*nowa metoda jest konieczna, bo jesli weScrolled=false, to nic dalej sie nie wykona, a powinno */
      weScrolled = false;
    }
}, 300);

function weDidScroll()
