 function task1() {

     let number = prompt("task 1 enter a number: ");

     let html = '';
     if (isNaN(parseFloat(number)) || !isFinite(number)) {
         return alert("Числа не введены");
     } else {

         let num1;
         let num2;
         let flag = true;

         while (!isNaN(parseFloat(number)) && isFinite(number)) {
             html += number + ' ';
             num2 = num1;
             num1 = number;
             number = prompt('Введите число: ');
             if( num2 == undefined || +num2 > +num1) continue;
             flag = false;
             break;
         }

         if (flag && num2 != undefined){
             return alert("Убывающая последовательность");
         }
         else if(num2 == undefined){
             return alert("Последовательность состоит из одного числа");
         }
         else{
             return alert("Не является убывающей последовательностью");
         }
     }
 }

 function task2() {

    let n = prompt('Введите n: ');
    if (n>2 || n<15){
        let html = '';
        for (let i = 1; i <= n; i++){
        document.write(`<hr width="${100/i}%">`);
        }
        if( n % 2 == 0) {
            html = forEven(n);
        } else html = forOdd(n);

        function forOdd(n) {
            let left = Math.trunc(n / 2);
            let right = Math.trunc(n / 2);

            let html = '<div><table>';
            for (let i = 0; i < Math.trunc(n / 2) + 1; i++) {
                let num = 1;                    // Число, которое будет в ячейках

                html += '<tr>';
                for (let j = 0; j < Math.trunc(n / 2); j++) {
                    if (j >= left && j <= right) {
                        html += `<td class="grey">${num}</td>`;
                        num = num + 1;
                    } else {
                        html += `<td>${0}</td>`;
                    }
                }

                for (let j = Math.trunc(n / 2); j < n; j++) {
                    if (j >= left && j <= right) {
                        html += `<td class="grey">${num}</td>`;
                        num = num - 1;
                    } else {
                        html += `<td>${0}</td>`;
                    }

                }
                html += '</tr>';

                left = left - 1;
                right = right + 1;
            }
            html += '</table></div>';
            document.write(html);
        }

        function forEven(n) {
            let left = Math.trunc(n / 2) - 1;
            let right = Math.trunc(n / 2);

            let html = '<div><table>';
            for (let i = 0; i < Math.trunc(n / 2) + 1; i++) {
                let num = 1;  // Число, которое будет в ячейках

                html += '<tr>';
                for (let j = 0; j < Math.trunc(n / 2); j++) {
                    if (j >= left && j <= right) {
                        html += `<td class="grey">${num}</td>`;
                        num = num + 1;
                    } else {
                        html += `<td>${0}</td>`;
                    }
                }

                for (let j = Math.trunc(n / 2); j < n; j++) {
                    if (j >= left && j <= right) {
                        html += `<td class="grey">${num - 1}</td>`;
                        num = num - 1;
                    } else {
                        html += `<td>${0}</td>`;
                    }
                }
                html += '</tr>';

                left = left - 1;
                right = right + 1;
            }
            html += '</table></div>';
           document.write(html);
        }
        for (let i = n; i > 0; i--){
            document.write(`<hr width="${100/i}%">`);
        }

    }
    else {alert('Неверные данные')}
 }

 function task3(text){

     text = text.toLowerCase();
      let count_a = 0;
      let count_b = 0;
      let temp = 0;
      let str_length = text.length;
      let i = 0;

      while (i < str_length) {
          while (i < str_length && text[i] !== ' ') {
              if (text[i] === 'a')
                  count_a += 1;
              if (text[i] === 'b')
                  count_b += 1;
              i++;
          }
          if (count_b === 2 && count_a === 1) {
              temp++;
          }
          i++;
          count_a = 0;
          count_b = 0;
      }
    console.log(temp);
}

function main(){

//    task1();
//    task2();
    task3('12bAba b  bba aa a kbab oao 5a class blackboard bbabbaabba');
    let smile;
}
main();
