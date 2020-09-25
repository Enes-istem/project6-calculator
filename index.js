let buton = document.getElementsByClassName("btn");
let ekran = document.getElementById("islem");
let hesapla = document.getElementById("hesapla");
let temizle = document.getElementById("temizle2");
let clean = document.getElementById("temizle");







for (i=0; i<18; i++) {
    if (i!=0 && i!=1 && i!=17) {
    buton[i].addEventListener("click", yazdir);
    }
}
function yazdir() {
    ekran.textContent = ekran.textContent + this.textContent;
}

hesapla.addEventListener("click", hesap);

function hesap() {
    ekran.textContent = eval(ekran.textContent);
}
temizle.addEventListener("click", temiz);
function temiz() {
    ekran.textContent = "";
}

clean.addEventListener("click", cleansAC);

var x = 0;
var y;

function cleansAC() {
    x++
    y = ekran.textContent;
    ekran.textContent = ekran.textContent.slice(0,(y.length)-1);
}


