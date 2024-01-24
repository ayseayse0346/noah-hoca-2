/*-------------SWITCH-CASE--------- */

// syntax ta case ve break kullanılır.else yerine default .neden bu case ler durumlar fazlaysa bunu kullanmak dah amantıklı.burada eşitlik durumu söz konusu. şartın caselere eşit olması gerekir.

const sayı1 = +(prompt("1.sayıyı giriniz:"))
const işlem = prompt("işlemi giriniz:+,-,*,/")
const sayı2 = +(prompt("2.sayıyı giriniz:"))


let yekun = 0
switch(işlem){
case "+":
    yekun = sayı1+sayı2
break
case "-":
    yekun = sayı1-sayı2
break
case "*":
    yekun = sayı1*sayı2
break
case "/":
    yekun = sayı1/sayı2
break
default:
    alert("yanlış işlem")
    break
}
console.log(`${sayı1} ${işlem} ${sayı2} = ${yekun}`);

// null,undifened," " false, nan, falsy 5lidir yani false değr dödürür..boolen olarak sıfır yine falsedır.

