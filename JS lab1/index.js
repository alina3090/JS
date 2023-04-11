
 function task1(number) {

     let html = '';
     if (isNaN(parseFloat(number)) || !isFinite(number)) {
         return alert("Числа не введены");
     } else {

         while (!isNaN(parseFloat(number)) && isFinite(number)) {
             html += number + ' ';
             number = prompt('Введите число: ');
         }

         let i = 0;
         let n = html.indexOf(' ');
         let num1;
         let num2;
         let flag = true;
         while (!isNaN(parseFloat(number)) && isFinite(number)) {
             num2 = num1;
             i = n;
             n = html.indexOf(' ', i);
             num1 = parseFloat(html.substring(i,n));
             i = n;
             n = html.indexOf(' ', i);
             if (num2 > num1) continue;
             flag = false;
             break;
         }

     }
 }

 function main(){

     let number = prompt("task 1 enter a number: ");
     task1(number);

    // let n = prompt('task 2 enter n:','end');

 }
 main();


 /*function check(i) {

     if(isNaN(parseFloat(i)) || !isFinite()) {
         document.write(`Неверно введено число: ${i}`);
         return false;
     } else
         return true;
 }
function  task2(n) {
    /*Для введенного пользователем n (2 < n < 15) сформировать
    страницу, на которую сначала выводится n горизонтальных
    линий (шириной от 100% до 𝟏𝟎𝟎/𝒏 %), затем таблица, а затем n
    горизонтальных линий (шириной от 𝟏𝟎𝟎/𝒏 % до 100%).
    Структура таблицы:
    0 0 0 0 0 0 1 0 0 0 0 0 0
    0 0 0 0 0 1 2 1 0 0 0 0 0
    0 0 0 0 1 2 3 2 1 0 0 0 0
    0 0 0 1 2 3 4 3 2 1 0 0 0
    0 0 1 2 3 4 5 4 3 2 1 0 0
    0 1 2 3 4 5 6 5 4 3 2 1 0
    1 2 3 4 5 6 7 6 5 4 3 2 1

   if (check(n) || Number(n)%1!==0 || n <= 2 || n >= 15) {
         alert(`data entered incorrectly`)
   }
   else {                                     //сам алгоритм


           for(let i = 0; i < n; i++) {
               alert(`<hr width = "${100 / i}%"`);
           }
           //-----------------------------------------------------
           document.write('<table>');

           for(let i = 0; i < 7; i++){
               document.write('<tr>');
               for(let j = 0; j < 13; j++){
                   if( j >= i || j <= (n - 1) - i){
                       document.write(`<td class = "0"></td>`);
                   }
                   else{

                   }
               }
           }

           //------------------------------------------------------
           for(let i = n-1; i == 0; i--) {
               alert(`<hr width = "${100 / i}%"`);
           }
   }
}*/