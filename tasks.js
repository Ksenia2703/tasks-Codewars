// 1.
// переместить все 0 в конец массива не изменяя порядок других элементов
// let a = [4, 0, 6, -1, 0, 88, 33, 0, 9];
// let b = [];

// a.forEach ((el, i) => {
// if (el === 0) {
//     a.splice(i, 1);
//     a.push(el);
// } 
// })

// ------------------------------------------------
// 2.
// удалить из строки все маленькие гласные 

// let str = 'дай мне свободу';
// let smallVowels = 'аоэеиыуёюя';
// let arr = str.split('');

// arr.forEach ((el, i) => {
//     if (el === el.toLowerCase() && smallVowels.includes(el)) {
//         arr.splice(i, 1);
//     }
    
// });
// arr = arr.join('');


// ------------------------------------------------
// 3.
// В функцию передаётся целое положительное число. Необходимо сделать так,
// чтобы функция возвращала сумму всех цифр в переданном числе

// let s = 455;
// let summa = 0;
// let array = s.toString().split('');
// for (let i = 0; i < array.length; i++) {
//     summa += +array[i];
// }
// console.log(summa);

// ------------------------------------------------
// 4.
// в функцию передаётся массив, функция должна вернуть 
// сумму всех нечётных чисел больше нуля.

// let m = [5, 0, -5, 20, 88, 17, -32]; // 22
// function dima(m) {
//     let result = 0;
//     m.forEach ((el) => {
//         if (el % 2 !== 0 && el > 0) {
//             result += el;
//         }  
//     })
//     return result;
// } 

// dima(m);

// ------------------------------------------------
// 5.
// дана строка, нужно вернуть её задом наперёд 

// let a = 'дай мне свободу';

// function rev (a) {
//     let reverse = a.split('').reverse().join('');
//     return reverse;
// }

// console.log(rev(a));

// ------------------------------------------------
// 6.
// написать функцию принимающую число и строку 
// на выходе получить эту строку столько раз какое было число 

// let num = 5;
// let str = 'свобода';
// function z(num, str) {
//     let res = str.repeat(num);
//     return res;
// }
// z(num, str);
// console.log(z(num, str));


                         
// let num = 5;
// let str = 'dima';

// function z(num, str) {
//     let res = '';
//     for (let i = 0; i < num; i++) {
//         res = res + str;
//     }

//     // два варианта записи
    
//     let i = 0;
//     while (i < num) {
//         i++;
//         res = res + str;
//     }

//     return res;
// }

// z(num, str);
// console.log(z(num, str));


// ------------------------------------------------
// 7.
// длина строки состоит из нескольких слов 
// на выходе нужно получить аббревиатуру 

// let b = 'дай мне свободу';

// function bak(b) {
//     let k = '';
    
//     for (let i = 0; i < b.length; i++) {
//         if (i === 0 || b[i-1] === ' ') {
//             k += b[i].toUpperCase();
//             k += '.';
//         }
//     }
//     return k.slice(0, -1);
// }

// console.log(bak(b))

// -----------------------------------------
// 8.
// дана строка, на выходе нужно сгруппировать
// по 2 символа и вернуть в виде массива 

// let a = 'бакса' // ['ба', 'кс', 'а_']

// let a = 'бакса';

// function baksa(a) {
//     let arr = [];
//     let element = '';
//     for (let i = 0; i < a.length; i++) {
//         element += a[i];
//         if (element.length === 2) {
//             arr.push(element);
//             element = '';
//         }
//     }
//     if (element !== '') {
//         arr.push(element + '_');
//     }
    
//     return arr;
// }
// console.log(baksa(a))

//----------------------------------------
// 9.
// дана строка в ней надо заменить все буквы 'T' на буквы 'U'

// let str = 'GCAT';

// function foo(str) {
//     str = str.split('');
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === 'T') {
//             str[i] = 'U';
//         } 
//     }
//     return str.join('');
// }

// console.log(foo(str));


//----------------------------------------
// 10.
// заменить в строке все "5" на "S", "0" на "О", "1" на "I"

// let string = "L0ND0N DUBL1N 51NGAP0RE"; 
// function correct(string) {
//     string = string.split('');
//     for (let i = 0; i < string.length; i++) {
//         if (string[i] === '5') {
//             string[i] = 'S';
//         } else if (string[i] === '0') {
//             string[i] = 'O';
//         } else if (string[i] === '1') {
//             string[i] = 'I';
//         }
//     }
//     return string.join('');
// }

// console.log(correct(string))


// -------------------------------------------------
// 11.
// Дан массив и цель, нужно проверить суммируются ли
// какие либо два последовательных числа, если да то удалить второе число

// let x = [1, 2, 3, 4, 5];
// let t = 3;

// function sequence(x, t) {
//     for (let i = 0; i < x.length; i++) {
//         if(x[i] + x[i + 1] === t) {
//             x.splice(i+1, 1);
//             i--;
//         } 
//     }
//     return x;
// }
// console.log(sequence(x, t));

// -------------------------------------------------------------
// 12.
// написать функцию которая считает колличество овец в массиве
// (true) означает наличие 

// let arrayOfSheep = [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true];
  
// function countSheeps(arrayOfSheep) {
//     let sheep = 0;
//     for (let i = 0; i < arrayOfSheep.length; i++) {
//         if (arrayOfSheep[i] === true) {
//             sheep += 1;
//         }
//     }
//     return sheep;
// }

// console.log(countSheeps(arrayOfSheep));


// --------------------------------------------------------------
// 13.
// дана строка, нужно по ней пройтись если встречается 
// символ i то увеличиваем значение на 1 (изначально 0)
// если d уменьшает значение на 1 
// если s то возводим значение в квадрат если о то выводим значение

// /parse("iiisdoso") => [ 8, 64 ]

// let data = "iiisdoso";

// function parse(data){
//     let res = 0;
//     let arr = [];
//     for (let i = 0; i < data.length; i++) { 
//         if (data[i] === 'i') {
//             res++;
//         } else if (data[i] === 'd') {
//             res--;
//         } else if (data[i] === 's') {
//             res = Math.pow(res, 2);
//         } else if (data[i] === 'o') {
//             arr.push(res);
//         }
//     }
//     return arr;
// }

// console.log(parse(data))

// --------------------------------------------------------------------
// 14.
// в функцию передаётся число (колличество дней аренды)
// написать код который выдаст общую сумму за разные дни с учётом скидки 
// от 0 до 3 дней 40$ сутки, от 3 до 7 скидка 20$ и от 7 дней 50$
// let d = 3;
// function rentalCarCost(d) {
//     let price = 40;
//     let result = 0;
//     for (let i = 0; i <= d; i++) {
//         if (d < 3) {
//             result = price * d;
//         } else if (d < 7 && d >= 3) {
//             result = price * d - 20;
//         } else if (d >= 7) {
//             result = price * d - 50;
//         }
//     }
//     return result; 
// }

// rentalCarCost(d);

// второй вариант решения 
// const rentalCarCost = d => d * 40 - ((d > 6) ? 50 : ((d > 2) ? 20 : 0));

// третий вариант решения
// function rentalCarCost(days) {
//     var dayCost = 40;
    
//     var discount = 0;
//     if (days >= 3) discount += 20;
//     if (days >= 7) discount += 30;
    
//     return dayCost * days - discount;
// }

// ----------------------------------------------------------------------------------
// 15.
// нужно проверить предоставленный массив (x) на наличие хороших идей «хорошо» 
// и плохих идей «плохо». Если есть одна или две хорошие идеи, верните «Опубликовать!», 
// если их больше 2, верните «Чую серию!». Если нет хороших идей, как это часто бывает, 
// верните «Fail!».

// let x  = ['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good'];
// let x = ['good', 'bad', 'bad', 'bad', 'bad'];
// let x = ['bad', 'bad', 'bad'];
// function well(x){
//     let count = 0;
//     for (let i = 0; i < x.length; i++) {
//         if (x[i] === 'good') {
//             count += 1;
//         }  
//     }
//     if (count === 1 && count > 0) {
//         return 'Publish!';
//     } else if(count > 2) {
//         return 'I smell a series!';
//     } else {
//         return 'Fail!';
//     }  
// }
// well(x);


// -------------------------------------------------------------------------------------------
// 16.
//  определить, какую фразу девушки сказали бы о цветке с заданным количеством лепестков, 
// где nb_petals > 0

// let nbPetals = 3;
// function howMuchILoveYou(nbPetals) {
//     let remainder = nbPetals % 6;
//     if (remainder === 1) {
//         return 'I love you';
//     } else if (remainder === 2){
//         return 'a little';
//     } else if (remainder === 3){
//         return 'a lot';
//     } else if (remainder === 4){
//         return 'passionately';
//     } else if (remainder === 5){
//         return 'madly';
//     } else {
//         return 'not at all';
//     }
// }

// howMuchILoveYou(nbPetals)

// второй вариант решения 

// function howMuchILoveYou(nbPetals) {
//     let remainder = nbPetals % 6;
//     switch (remainder) {
//     case 1:
//     return 'I love you';
//     break;
//     case 2:
//     return 'a little';
//     break;
//     case 3:
//     return 'a lot';
//     break;
//     case 4:
//     return 'passionately';
//     break;
//     case 5:
//     return 'madly';
//     break;
//     default:
//     return 'not at all';
// }
// }


// ----------------------------------------------------------------
// 17.
// let a = 'бакса';
// for (let i = 0; i < a.length; i++){
//     console.log(a[i]);
// }
// console.log(a.toUpperCase);
// let i = 0;
// while (i < a.length) {
//     i++;
//     console.log(a[i]);
// }


// ---------------------------------------------------------------
// 18.
// нужно вернуть массив положительных чисел которые делятся на 2

// let a = [1, 4, -5, 77, 6, -3, 2];
// function b(a) {
//     let c = [];
//     for (let i = 0; i < a.length; i++) {
//         if (a[i] % 2 === 0 && a[i] > 0) {
//             c.push(a[i]);
//         }
//     }
//     return c;
// }
// let result = b(a);
// console.log(result);


// ---------------------------------------------------------------
// 19.
// Написать функцию которая увеличивает строку чтобы создать новую строку
// если строка уже заканчивается числом то это число должно быть увеличено на 1
// если строка не заканчивается цифрой, то число 1 должно быть добавлено к новой строке 

// let strng = 'foobar001';

// function incrementString (strng) {
//     let res = '';
//     if (isNaN(parseInt(strng[strng.length-1]))) {
//         res = strng + 1;
//     } else {
//         let numb = '';
//         let str = '';
//         let countBeforeConversion = 0;
//         let countAfterConversion = 0;
//         let resultConversion = 0;
//         let zeros = '';
//         for (let i = strng.length - 1; i >= 0; i--){
//             if (!isNaN(parseInt(strng[i]))){
//                 numb += strng[i];
//                 countBeforeConversion += 1;
//             } else {
//                 str += strng[i];
//             }
//         }

//         str = str.split("").reverse().join("");
//         numb = numb.split("").reverse().join("");
//         numb = +numb + 1;
//         countAfterConversion = String(+numb).length;
//         if (countAfterConversion < countBeforeConversion) {
//             resultConversion = countBeforeConversion - countAfterConversion;
//             zeros = '0'.repeat(resultConversion); 
//         }
//         res = str.concat(zeros).concat(numb);
//         str = str.concat(numb);
//     }
//     return res;
// }
// console.log(incrementString(strng));

// ---------------------------------------------------------------------------------
// 20.
// Завершите функцию, которая принимает строковый параметр и переворачивает каждое 
// слово в строке. Все пробелы в строке должны быть сохранены.

// let str = 'The quick brown.';
// function reverseWords(str) {
//     let reverse = [];
//     str = str.split(' ');
//     for (let i = 0; i < str.length; i++) {
//         reverse.push(str[i].split('').reverse().join(''));
//     }
//     return reverse.join(' ');
// }
// console.log(reverseWords(str));


//-----------------------------------------------------------------------------------
// 21.
// Дополнение до единиц двоичного числа — это число, полученное путем замены 
// всех нулей на 1 и всех 1 на 0.

// let n = '1101';
// function onesComplement(n) {
//     str = '';
//     for (let i = 0; i < n.length; i++) {
//         if (n[i] === '1') {
//             str += 0;
//         } else {
//             str += 1;
//         }
//     }
//     return str;
// };
// console.log(onesComplement(n));

// ----------------------------------------------------------------------------------
// 22.
// Завершить функцию, которая принимает последовательность чисел в качестве единственного 
// параметра. Ваша функция должна возвращать сумму четных значений этой последовательности.

// let input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// function sumEvenNumbers(input) {
//     let res = 0;
//     for (let i = 0; i < input.length; i++) {
//         if (input[i] % 2 === 0) {
//             res += input[i];
//         }
//     }
//     return res;
// }
// console.log(sumEvenNumbers(input));

// -----------------------------------------------------------------------------------
// 23.
// вы получаете начальный номер и конечный номер региона и должны вернуть 
// количество всех чисел, кроме номеров с 5 в нем. Начальный и конечный номер включительно!

// let start = 14;
// let end = 15;
// function dontGiveMeFive(start, end) {
//     let list = [];
//     for (let i = start; i <= end; i++) {
//         let str = String(i);
//         1 вариант решения
//         if (str[0] !== String(5) && str[str.length - 1] !== String(5)) {
//             list.push(i);
//         }  

//         2 вариант решения
//         if (!str.includes('5')) {
//             list.push(i);
//         } 
//     }
//   return list.length;
// }
// console.log(dontGiveMeFive(start, end));


// ----------------------------------------------------------------------------
// 24.
// unusualSort(["1","z","a"])  // -> ["a","z","1"]
// unusualSort(["1","Z","a"])  // -> ["Z","a","1"]
// unusualSort([3,2,1"a","z","b"])  // -> ["a","b","z",1,2,3]
// unusualSort([3,"2",1,"a","c","b"])  // -> ["a","b","c",1,"2",3] 
// unusualSort([1, 2, 3, '1', '2', '3']) // -> [1, '1', 2, '2', 3, '3']

// let arrayOfChars = "cba950XYZ".split('');
// let arrayOfChars = [3,"3","2",2,"2","1",1,"a","b","c"];
// function unusualSort(arrayOfChars){
//     let line = [];
//     let num = [];
//     let res = '';
//     for (let i = 0; i < arrayOfChars.length; i++) {
//         if (isNaN(+arrayOfChars[i])) {
//             line.push(arrayOfChars[i]);
//         } else {
//             num.push(arrayOfChars[i]);
//         }
//     }
//     line = line.sort().join('');
//     num = num.sort().join('');
//     res = line + num;
//     return res;
// }
// console.log(unusualSort(arrayOfChars));


// ДОРЕШАТЬ чтобы правильно сортировались [1, 2, 3, '1', '2', '3'] => [1, '1', 2, '2', 3, '3']!!!!!


// -------------------------------------------------------------------------------
// 25.
// Завершите метод, который принимает массив целых чисел и возвращает 
// одно из следующих значений:

// "yes, ascending"- если числа в массиве отсортированы по возрастанию
// "yes, descending"- если числа в массиве отсортированы по убыванию
// "no"- иначе

// let array = [15, 7, 3, -8];
// function isSortedAndHow(array) {
//     let arrCopy = array.slice();
//     let arrSort = arrCopy.sort((a, b) => a - b).join(', ');
//     let arrSortReverse = arrCopy.reverse().join(', ');
//     if (array.join(', ') === arrSort) {
//         return 'yes, ascending';
//     } else if (array.join(', ') === arrSortReverse) {
//         return 'yes, descending';
//     } else {
//         return 'no';
//     }
// }
// console.log(isSortedAndHow(array));



// -----------------------------------------------------------------------------
// 26.
// дан массив целых чисел нечетной длины , в котором все они одинаковы, кроме одного 
// единственного числа. Завершите метод, который принимает такой массив и 
// возвращает это единственное другое число.

// let numbers = [1, 1, 2, 1];
// function stray(numbers) {
//     let first = 0;
//     let second = 0;
//     let uniqueValues = new Set(numbers);
//     uniqueValues = Array.from(uniqueValues);
//     for (let i = 0; i < numbers.length; i++) {
//         if (numbers[i] === uniqueValues[0]){
//             first += 1;
//         } else {
//             second += 1;
//         }
//     }
//     if (first > second) {
//         return uniqueValues[1];
//     } else {
//         return uniqueValues[0];
//     }
// }

// console.log(stray(numbers));

// ------------------------------------------------------------------------------
// 27.
// Вам будет предоставлено два входа: строка слов и буква. Для каждой строки 
// возвращайте буквенный символ после каждого экземпляра буквы (без учета регистра).
// Если после буквы стоит цифра, знаки препинания или подчеркивания, они не должны возвращаться.

// let str = 'Pirates say arrrrrrrrr. r';
// let l = 'r';
// function comes_after(str,l) {
//     let newStr = '';
//     let result = '';
//     let letter = 'abcdefghijklmnopqrstuvwxyz';
//     for (let i = 0; i < str.length; i++) {
//         if ((str[i] === l || str[i] === l.toUpperCase() || str[i] === l.toLowerCase()) && (i + 1) <= (str.length - 1)) {
//             newStr += str[i + 1];
//         }
//     }
//     for (let j = 0; j < newStr.length; j++) {
//         if (letter.includes(newStr[j]) || letter.toUpperCase().includes(newStr[j])) {
//             result += newStr[j];
//         }
//     }
//     return result;
// }

// console.log(comes_after(str,l));

// ----------------------------------------------------------------------------
// 28.
// Завершите решение, чтобы оно отсортировало переданный массив чисел. Если функция 
// передает пустой массив или значение null/nil, она должна вернуть пустой массив.

// let nums = [1,2,3,10,5];
// function solution(nums){  
//     if (nums === null || nums === []) {
//         return [];
//     } else {
//         nums.sort((a, b) => a - b);
//     }
//     return nums;
// }

// console.log(solution(nums));

// ---------------------------------------------------------------------------
// 29.
// Один из советов по созданию удовлетворительного пароля — начать с запоминающейся 
// фразы или предложения и создать пароль, извлекая первую букву каждого слова.
// Еще лучше заменить некоторые из этих букв цифрами (например, букву Oможно заменить цифрой 0):
    // вместо включения iили Iввода числа 1в пароль;
    // вместо включения oили Oввода числа 0в пароль;
    // вместо включения sили Sввода числа 5в пароль.
    

// let phrase = 'Give me liberty or give me death';
// function makePassword(phrase) {
//     phrase = phrase.split(' ')
//     let pass = []; 
//     let finalPassword = [];
//     pass = phrase.map(a => a[0]);
//     for(let i = 0; i < pass.length; i++) {
//         if (pass[i] === 'i' || pass[i] === 'I') {
//             finalPassword.push('1');
//         } else if (pass[i] === 'o' || pass[i] === 'O') {
//             finalPassword.push('0');
//         } else if (pass[i] === 's' || pass[i] === 'S') {
//             finalPassword.push('5');
//         } else {
//             finalPassword.push(pass[i]);
//         }
//     }
//     return finalPassword.join('');
// }

// console.log(makePassword(phrase));

// --------------------------------------------------------------------------
// 30.
// Напишите функцию bmi, которая вычисляет индекс массы тела (bmi = вес / рост 2 ).
// если ИМТ <= 18,5, вернуть "Underweight"
// если ИМТ <= 25,0, вернуть Normal
// если ИМТ <= 30,0 вернуть "Overweight"
// если ИМТ > 30, верните Obese.

// let weight = 90;
// let height = 1.80;
// function bmi(weight, height) {
    // let IMT = 0;
    // IMT = weight/(height * height)
    // if (IMT <= 18.5) {
    //     return 'Underweight';
    // } else if (IMT <= 25.0) {
    //     return 'Normal';
    // } else if (IMT <= 30.0) {
    //     return 'Overweight';
    // } else {
    //     return 'Obese';
    // }

    // или

//     let res = (IMT <= 18.5) ? 'Недостаточный вес' :
//     (IMT <= 25.0) ? 'Нормальный' :
//     (IMT <= 30.0) ? 'Избыточный вес' :
//     'Ожирение' ;
//   return res;
// }

// console.log(bmi(weight, height));

// ----------------------------------------------------------------------------------
// 31.
// Ваша задача — создать простую функцию проверки пароля, которую можно 
// увидеть на многих веб-сайтах. Правила для действительного пароля следующие:
// Должно быть хотя бы 1 число.
// Должна быть как минимум 1 заглавная буква.
// Должна быть хотя бы 1 строчная буква.
// Пароль должен быть не менее 8 символов.
// Вам разрешено использовать любые методы для подтверждения пароля.

// let str = "Abcd1235";
// function password(str) {
//     let lowercaseCharacters = str.toLowerCase();
//     let UppercaseCharacters = str.toUpperCase();
//     if (str === lowercaseCharacters || str === UppercaseCharacters) {
//         return false;
//     }
//     for (let i = 0; i < str.length; i++) {
//         if (str.match(/\d/g) === null || str.length < 8) {
//             return false;
//         } else {
//             return true;
//         }
//     }
// }

// console.log(password(str));

// -----------------------------------------------------------------------------------
// 32.
// Реализуйте функцию makeAcronym, которая возвращает первые буквы каждого 
// слова в переданной строке. Убедитесь, что возвращаемые буквы в верхнем регистре.
// Если переданное значение не является строкой, возвращается «Not a string».
// Если переданное значение представляет собой строку, содержащую символы, отличные 
// от пробелов и букв алфавита, вернуть «Not letters».
// Если строка пуста, просто верните саму строку: "".
// 'Hello codewarrior' -> 'HC'   ||  'a42' -> 'Not letters'     ||     42 -> 'Not a string'
// [2,12] -> 'Not a string'

// let string = '42';
// var makeAcronym = function(string){
//     if (typeof (string) !== 'string') {
//         return 'Not a string';
//     }
//     for (let i = 0; i < string.length; i++) {
//         if (i === 0 || string[i-1] === ' ') {
//             str += string[i].toUpperCase();
//         }
//     }
//     for (let i = 0; i < str.length; i++) {
//         if (string.match(/\d/g) !== null && isNaN(parseInt(str[i]))) {
//             return 'Not letters';
//         } else if (string.match(/\d/g) !== null) {
//             return 'Not letters';
//         } else if (!isNaN(parseInt(str[i]))  && string.match(/\d/g) !== null) {
//             return 'Not a string';
//         }
//     };
//     return str;
// }

// console.log(makeAcronym(string));

// --------------------------------------------------------------------------------
// 33.
// Получив строку, превратите каждый символ в его код символа ASCII и соедините 
// их вместе, чтобы создать число — назовем это число total1:
// Затем замените любое вхождение числа 7на число 1и назовите это число 'total2':
// Затем верните разницу между суммой цифр в total1и total2:

// let x = 'aaaaaddddr';
// function calc(x){
//     let total1 = ''; 
//     let total2 = '';
//     let sum1 = 0;
//     let sum2 = 0;
//     let result = 0;
//     for (let i = 0; i < x.length; i++) {
//         total1 += x[i].charCodeAt();
//     }
//     for (let j = 0; j < total1.length; j++) {
//         if (total1[j] === '7') {
//             total2 += '1'
//         } else {
//             total2 += total1[j];
//         }
//     }
//     for (let l = 0; l < total1.length; l++) {
//         sum1 += +total1[l];
//     }
//     for (let y = 0; y < total2.length; y++) {
//         sum2 += +total2[y];
//     }
//     result = sum1 - sum2;
//     return result;
// }

// console.log(calc(x));

// --------------------------------------------------------------------------------
// 34.
// Учитывая массив целых чисел, удалите наименьшее значение. Не изменяйте исходный 
// массив/список . Если есть несколько элементов с одинаковым значением, 
// удалите элемент с более низким индексом. Если вы получили пустой массив/список, 
// верните пустой массив/список.

// let numbers = [336, 373, 369, 321, 107];

// function removeSmallest(numbers) {
//     let copyNumbers = numbers.slice();
//     if (copyNumbers.length === 0) {
//         return [];
//     }
//     let m = Math.min(...copyNumbers);
//     copyNumbers.splice(copyNumbers.indexOf(m), 1);
//     return copyNumbers;
// }

// console.log(removeSmallest(numbers));

// -------------------------------------------------------------------------------
// 35.
// Напишите функцию, которая удваивает каждое второе целое число в списке.

// let a = [1,2,3,4];
// function doubleEveryOther(a) {
//     let a1 = [];
//     for (let i = 0; i < a.length; i++) {
//         if (i % 2 !== 0) {
//             a1.push(+a[i] * 2);
//         } else {
//             a1.push(a[i]);
//         }
//     }
//      return a1;
// }

// console.log(doubleEveryOther(a));

// ------------------------------------------------------------------------------
// 36.
// cравнить каждую пару целых чисел из двух массивов и вернуть новый массив больших чисел.
// Примечание. Оба массива имеют одинаковые размеры.

// let a = [13, 64, 15, 17, 88];
// let b = [23, 14, 53, 17, 80];
// function getLargerNumbers(a, b) {
//     let result = [];
//     for (let i = 0; i < a.length; i++) {
//             if (a[i] > b[i]) {
//                 result.push(a[i]);
//             } else if (b[i] > a[i]) {
//                 result.push(b[i]);
//             } else {
//                 result.push(b[i]);
//             }
//     }
//     return result;
// }

// console.log(getLargerNumbers(a, b));

// -------------------------------------------------------------------------------
// 37.
// Создайте функцию, которая возвращает сумму двух наименьших положительных чисел 
// для заданного массива минимум из 4 положительных целых чисел. Не будут переданы 
// числа с плавающей запятой или неположительные целые числа.

// let numbers = [5, 8, 12, 19, 22];
// function sumTwoSmallestNumbers(numbers) {  
//     let res = [];
//     let result = 0;
//     res.push(Math.min(...numbers));
//     numbers.splice(numbers.indexOf(+res), 1);
//     res.push(Math.min(...numbers));
//     for (let i = 0; i < res.length; i++) {
//         result += res[i];
//     }
//     return result;
// }

// console.log(sumTwoSmallestNumbers(numbers));

// -------------------------------------------------------------------------------
// 38.
// Вам нужно создать функцию, которая преобразует ввод в этот формат, при этом вывод 
// будет той же строкой, за исключением шаблона прописных и строчных букв.
// ("stop Making spongebob Memes!"), 'StOp mAkInG SpOnGeBoB MeMeS!')

// let sentence = 'stop Making spongebob Memes!';
// function spongeMeme(sentence) {
//     sentence = sentence.toLowerCase();
//     let str = '';
//     for (let i = 0; i < sentence.length; i++) {
//         if (i % 2 !== 0) {
//             str += sentence[i].toUpperCase();
//         } else {
//             str += sentence[i];
//         }
//     }
//      return str;
// }

// console.log(spongeMeme(sentence));

// -------------------------------------------------------------------------------
// 39.
// Для этого ката вам придется забыть, как складывать два числа.
// Проще говоря, наш метод не любит принцип переноса чисел и просто записывает каждое вычисляемое число
// Вы можете предположить, что оба целых числа являются положительными целыми числами.
    // assert.strictEqual(add(16, 18), 214);
    // assert.strictEqual(add(26, 39), 515);
    // assert.strictEqual(add(122, 81), 1103);

// let num1 = 16;
// let num2 = 18;
// function add(num1, num2) {
//     let result = [];
//     num1 = String(num1);
//     num2 = String(num2);
//     let length = 0;
//     let diff = 0;
//     let zeroString = '';
//     if (num1.length > num2.length) {
//         length = num1.length;
//         diff = num1.length - num2.length;
//         zeroString = '0'.repeat(diff);
//         num2 = zeroString + num2;
//     } else {
//         length = num2.length;
//         diff = num2.length - num1.length;
//         zeroString = '0'.repeat(diff);
//         num1 = zeroString + num1;
//     }

//     for (let i = length - 1; i >= 0; i--) {
//         result.push(+num2[i] + +num1[i]);
//     }
//     return +result.reverse().join('');
// }

// console.log(add(num1, num2));

// -----------------------------------------------------------------------------
// 40.
// Напишите функцию, которая удаляет все одиночные числа 9, находящиеся между 7

// let str = '789797';
// function sevenAte9(str) {
//     let result = '';
//     for (let i = 0; i < str.length; i++) {
//         if (!(str[i - 1] === '7' && str[i + 1] === '7' && i > 0 && str[i] === '9')) {
//             result += str[i];
//         }
//     }
//     return result;
// }

// console.log(sevenAte9(str));

// -----------------------------------------------------------------------------
// 41.
// В этом небольшом задании вам дается строка чисел, разделенных пробелами, 
// и вы должны вернуть наибольшее и наименьшее число.
// ("1 2 3 4 5");  // return "5 1"


// let numbers = '8 3 -5 42 -1 0 0 -9 4 7 4 -4';
// function highAndLow(numbers){
    // первое ршение
//     numbers = numbers.split(' ')
//     let maxNum = '';
//     let minNum = '';
//     let result = '';
//     maxNum = Math.max(...numbers);
//     minNum = Math.min(...numbers);
//     result = String(maxNum) + ' ' + String(minNum);
//     return result;

// второе решение 
//     numbers = numbers.split(' ');
//     return Math.max(...numbers) + ' ' + Math.min(...numbers);
// }

// console.log(highAndLow(numbers));

// -----------------------------------------------------------------------------
// 42.
// Банкоматы позволяют использовать 4- или 6-значные PIN-коды, а PIN-коды не 
// могут содержать ничего, кроме ровно 4 или ровно 6 цифр.
// Если функции передана допустимая строка PIN-кода, верните true, иначе верните false.

// let pin = `123
// `;
// function validatePIN (pin) {
//     if(pin.length !== pin.trim().length) {
//         return false;
//     }
//     if (pin.length === 4 || pin.length === 6) {
//         if (pin.includes('.')|| pin.includes('-') || pin.includes('+') || isNaN(+pin)) {
//             return false;
//         } else {
//             return true;
//         }
//     } else {
//         return false;
//     }
// }

// console.log(validatePIN (pin));

// ---------------------------------------------------------------------------------
// 43.
// Напишите функцию, которая находит сумму всех своих аргументов.

// function sum() {
//     let result = 0;
//     for (let i = 0; i < arguments.length; i++) {
//         result += arguments[i];
//     }
//   return result;
// }

// console.log(sum(12, 1, 1, 1, 1));

// ---------------------------------------------------------------------------------
// 44.
// вам будет дана строка, которая может содержать смешанные прописные и строчные 
// буквы, и ваша задача состоит в том, чтобы преобразовать эту строку либо 
// только в строчные, либо только в прописные буквы на основе:
// - внести как можно меньше изменений.
// - если строка содержит одинаковое количество прописных и строчных букв, 
// преобразовать строку в нижний регистр.

// let s = 'COde';
// function solve(s) {
//     let upper = s.match(/[A-Z]/g);
//     let lower = s.match(/[a-z]/g);
//     if ((upper !== null && lower !== null && upper.length > lower.length) || lower === null) {
//         return s.toUpperCase();
//     } else {
//         return s.toLowerCase();
//     }
// }

// console.log(solve(s));

// --------------------------------------------------------------------------------
// 45.
// проверить делится ли без остатка суммацифр числа на 3, если делится 
// то вернуть true если нет то false

// let str = '19254';
// function divisibleByThree(str) {
//     let sum = 0;
//     for (let i = 0; i < str.length; i++) {
//         sum += +str[i];
//     }
//     if (sum % 3 === 0) {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(divisibleByThree(str));

// ----------------------------------------------------------------------------------
// 46.
// вернуть массив состоящий из минимального и максимального значения 
// передаваться будут только положительные числа и числа без плавающей запятой

// let arr = [3464, 21, 5, 7];
// function minMax(arr) {
//     let min = [];
//     let max = [];
//     let result = [];
//     min = Math.min(...arr);
//     result.push(min);
//     max = Math.max(...arr);
//     result.push(max);
//     return result; 
// }

// console.log(minMax(arr));

// ---------------------------------------------------------------------------------
// 47.
// найдите все вхождения n в данном массиве и верните другой массив, содержащий 
// все позиции индекса n в данном массиве.
// Если n нет в данном массиве, вернуть пустой массив [].
// Предположим, что n и все значения в данном массиве всегда будут целыми числами.

// let array = [6, 9, 3, 4, 3, 82, 11];
// let n = 3;
// const findAll = (array, n) => {
//     let ind = [];
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === n) {
//             ind.push(i)
//         }
//     }
//     return ind;
// }

// console.log(findAll(array, n));

// -------------------------------------------------------------------------------
// 48.
// Напишите функцию, которая принимает строку и возвращает массив, содержащий 
// двоичные числа, эквивалентные ASCII-кодам символов строки. Двоичные строки 
// должны состоять из восьми цифр.
// Пример: 'man'должен вернуться[ '01101101', '01100001', '01101110' ]

// let str = 'man';
// function wordToBin(str) {
//     let intermediateResult = [];
//     let res = [];
//     let result = [];
//     for (let i = 0; i < str.length; i++) {
//         intermediateResult.push(str[i].charCodeAt())
//     }
//     for (let j = 0; j < intermediateResult.length; j++) {
//         res.push((intermediateResult[j]).toString(2));
//     }
//     for (let l = 0; l < res. length; l++) {
//         result.push('0' + res[l])
//     }
//   return result;
// }

// console.log(wordToBin(str))

// ------------------------------------------------------------------------------
// 49.
// Напишите функцию, которая принимает последовательность уникальных целых 
// чисел от 0 до 9 (включительно) и возвращает недостающий элемент.

// let superImportantArray = [0,5,1,3,9,7,6,4];
// function getMissingElement(superImportantArray) {
//     let res = (!superImportantArray.includes(0)) ? 0 :
//     (!superImportantArray.includes(1)) ? 1 :
//     (!superImportantArray.includes(2)) ? 2 :
//     (!superImportantArray.includes(3)) ? 3 :
//     (!superImportantArray.includes(4)) ? 4 :
//     (!superImportantArray.includes(5)) ? 5 :
//     (!superImportantArray.includes(6)) ? 6 :
//     (!superImportantArray.includes(7)) ? 7 :
//     (!superImportantArray.includes(8)) ? 8 :
//     9 ;
//     return res
// }

// console.log(getMissingElement(superImportantArray))

// -----------------------------------------------------------------------------
// 50.
// Используйте сверхсекретные символы в superSecretCharsпеременной, чтобы 
// заменить соответствующие символы в вашем совершенно небезопасном пароле 
// и сделать его неподдающимся взлому.
// var superSecretChars = [['a', '@'],['s', '$'],['o', '0'], ['h', '5'], ['x', '*']];
// createSSP("haxorpassword"), "5@*0rp@$$w0rd"

// let password = 'haxorpassword';
// function createSSP(password) {
//     let result = '';
//     for (let i = 0; i < password.length; i++) {
//         if (password[i] === 'a' || password[i] === 'A') {
//             result += '@';
//         } else if (password[i] === 's' || password[i] === 'S') {
//             result += '$';
//         } else if (password[i] === 'o' || password[i] === 'O') {
//             result += '0';
//         } else if (password[i] === 'h'  || password[i] === 'H') {
//             result += '5';
//         }else if (password[i] === 'x' || password[i] === 'X') {
//             result += '*';
//         } else {
//             result += password[i];
//         }
//     }
//     return result;
// }

// console.log(createSSP(password));

// ----------------------------------------------------------------------------
// 51.
// Учитывая исходную строку s, поменяйте регистр минимально возможного 
// количества букв, чтобы вся строка была написана в верхнем или нижнем регистре.

// let s = 'Aba';
// function caseUnification(s) {
//     let upper = s.match(/[A-Z]/g);
//     let lower = s.match(/[a-z]/g);
//     if ((upper !== null && lower !== null && upper.length > lower.length) || lower === null) {
//         return s.toUpperCase();
//     } else {
//         return s.toLowerCase();
//     }
// }

// console.log(caseUnification(s))

// ----------------------------------------------------------------------------
// 52.
// Дан массив с нулевым индексом, arrсостоящий из n целых чисел. Доминатор 
// массива arr — это значение, встречающееся более чем в половине элементов массива arr.
// Например, рассмотрим массив arr, в котором arr = [3,4,3,2,3,1,3,3]
// Доминатор arrравен 3, потому что он встречается в 5 из 8 элементов, arrа 5 
// больше половины 8.
// Напишите функцию dominator(arr), которая по массиву с нулевым индексом, 
// arrсостоящему из n целых чисел, возвращает доминант над arr. Функция должна 
// возвращать -1, если массив не имеет доминатора. Все значения arrбудут >=0.

// let arr2 = [3,4,2,3,1,3,1,1,1];
// function dominator(arr2) {
//     let arr = [];
//     let uniqueValues = new Set(arr2);
//     uniqueValues = Array.from(uniqueValues);//[1,2,3,4]
//     for (let i = 0; i < uniqueValues.length; i++) { 
//         let currentNumber = uniqueValues[i];
//         let count = 0;
//         count = (str.split(currentNumber)).length - 1;
//         arr.push({
//             'number':currentNumber,
//             'count':count
//         });
//     }
//     arr.sort(function(a, b) {
//         return b.count - a.count;
//     });
//     if (arr[0]['count'] > arr2.length/2 && arr[0]['count'] !== arr[1]['count']) {
//         return arr[0]['number'];
//     } 
//     return -1;
// }

// console.log(dominator(arr2));

// -----------------------------------------------------------------------------
// 53.
// Учитывая строку цифр, подтвердите, больше ли сумма всех отдельных четных 
// цифр суммы всех отдельных нечетных цифр. Всегда будет дана строка чисел.
// Если сумма четных чисел больше, чем возврат нечетных чисел:"Even is greater than Odd"
// Если сумма нечетных чисел больше суммы четных чисел, возврат:"Odd is greater than Even"
// Если сумма четных и нечетных чисел одинакова, возврат:"Even and Odd are the same"

// let str = '123';
// function evenOrOdd(str) {
//     let even = 0;
//     let odd = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] % 2 === 0) {
//             even += +str[i];
//         } else {
//             odd += +str[i];
//         }
//     }
//     if (even > odd) {
//         return "Even is greater than Odd";
//     } else if (odd > even) {
//         return "Odd is greater than Even";
//     } else {
//         return "Even and Odd are the same";
//     }
// }

// console.log(evenOrOdd(str));

// ---------------------------------------------------------------------------
// 54.
// Предположим, нам нужны «чистые» строки. Чистота означает, что строка должна 
// содержать только буквы a-zи A-Zпробелы. Мы предполагаем, что нет двойных 
// пробелов или разрывов строк.
// Напишите функцию, которая принимает строку и возвращает строку без лишних символов.

// let s = '.tree1';
// function removeChars(s) {
//     return s.replace(/[^a-zа-яё\s]/gi, '');
// }

// console.log(removeChars(s));

// --------------------------------------------------------------------------
// 55.

//TODO
// let word = 'YAmS';
// function comfortableWord(word) {
//     // if (word.length % 2 !== 0) {
//     //     return false
//     // }
//     word = word.toLowerCase();
//     let left = ['q', 'w', 'e', 'r', 't', 'a', 's', 'd', 'f', 'g', 'z', 'x', 'c', 'v', 'b'];
//     let right = ['y', 'u', 'i', 'o', 'p', 'h', 'j', 'k', 'l', 'n', 'm'];
//     for (let i = 0; i < word.length; i++) {
//         if (i + 1 > word.length && !left.includes(word[i]) && !left.includes(word[i + 1])) {
//             return true;
//         } else if (i + 1 > word.length && !right.includes(word[i]) && !right.includes(word[i + 1])) {
//             return true;
//         } else {
//             return false;
//         }
//     }
// }

// console.log(comfortableWord(word))

// .includes(1)
// ------------------------------------------------------------------------
// 56.
// Учитывая строку, вернуть копию строки с заменой регистра гласных.
// Для этой ката предположим, что гласные находятся в наборе "aeouiAEOUI".
// Пример: Учитывая строку "C is alive!", ваша функция должна возвращать"C Is AlIvE!"
// Приложение: Ваше решение требуется только для работы с набором символов ASCII.
// Пожалуйста, убедитесь, что вы меняете местами только гласные.

// let str = 'gsfnlYPgLwrOBBKAzSagTzW';
// function swapVowelCase(str) {
//     let vowels = 'aeiou';
//     let vowels2 = 'AEIOU';
//     let result = '';
//     for (let i = 0; i < str.length; i++) {
//         if (vowels.includes(str[i])) {
//             result += str[i].toUpperCase();
//         } else if (vowels2.includes(str[i])) {
//             result += str[i].toLowerCase();
//         } else {
//             result += str[i]
//         }
//     }
//     return result;
// }

// console.log(swapVowelCase(str));

// -----------------------------------------------------------------------
// 57.
// Вам будут предоставлены две строки ASCII aи b. Ваша задача — написать 
// функцию, определяющую, какая из этих строк «стоит» больше, и вернуть ее.
// Ценность строки определяется суммой индексов ее кодовых точек ASCII. 
// Так, например, строка HELLOимеет значение 372: H — кодовая точка 72, 
// E — 69, L — 76, а O — 79. Сумма этих значений равна 372.

// let a = 'DCBA';
// let b = 'ABCD';
// function highestValue(a, b) {
//     let resA = 0;
//     let resB = 0;
//     for (let i = 0; i < a.length; i++) {
//         resA += a[i].charCodeAt();
//     }
//     for (let i = 0; i < b.length; i++) {
//         resB += b[i].charCodeAt();
//     }
//     if (resA >= resB) {
//         return a;
//     } else {
//         return b;
//     }
// }

// console.log(highestValue(a, b));

// ----------------------------------------------------------------------
// 58.
//   Функция отладкиgetSumOfDigits , которая принимает положительное целое 
//   число для вычисления суммы его цифр. Предположим, что аргумент 
//   является целым числом.

// let integer = 123;
// function getSumOfDigits(integer) {
//     integer = String(integer);
//     let res = 0;
//     for (let i = 0; i < integer.length; i++) {
//         res += +integer[i];
//     }
//   return res;
// }

// console.log(getSumOfDigits(integer));

// ---------------------------------------------------------------------
// 59.
// Вам предоставляется словарь/хэш/объект, содержащий несколько языков 
// и результаты вашего теста на данных языках. Верните список языков, 
// на которых ваш результат теста не ниже 60, в порядке убывания результатов.
// Примечание: баллы всегда будут уникальными (поэтому не будет повторяющихся значений).

// let results = {
//     "Java": 10, 
//     "Ruby": 80, 
//     "Python": 65
// };
// function myLanguages(results) {
//     let res = [];
//     let sortedKeys = [];

//     for (let j in results) {
//     res.push([j, results[j]]);
//     }

//     res.sort(function(a, b) {
//         return b[1] - a[1];
//     });

//     for (let i = 0; i < res.length; i++) {
//         if (res[i][1] >= 60) {
//             sortedKeys.push(res[i][0]);
//         } 
//     }
//     return sortedKeys;
// }

// console.log(myLanguages(results));

// --------------------------------------------------------------------
// 60.
// Вам будет предоставлена ​​строка с наборами символов (то есть слов), 
// разделенных от одного до трех пробелов (включительно).
// Глядя на первую букву каждого слова (без учета регистра "A"и с "a"
// ней следует обращаться одинаково), вам нужно определить, попадает 
// ли она в положительную/первую половину алфавита ( "a"- "m") или 
// отрицательную/вторую половину ( "n"- "z").
// Возврат True/true, если положительных слов больше (или равно), 
// чем отрицательных, в False/falseпротивном случае.

// let str = "Is  this the  best  Kata?";
// function connotation(str) {
//     let firstHalf = 'abcdefghijklmABCDEFGHIJKLM';
//     let upperFirstHalf = 'ABCDEFGHIJKLM';
//     let countFirstHalf = 0;
//     let countSecondHalf = 0;
//     let firstLetters = '';
//     for (let i = 0; i < str.length; i++) {
//         if (i === 0  || str[i - 1] === ' ') {
//             firstLetters += str[i];
//         }
//     }
//     for (let j = 0; j < firstLetters.length; j++) {
//         if (firstLetters[j] !== ' ' && firstHalf.includes(firstLetters[j])) {
//             countFirstHalf++;
//         } else if (firstLetters[j] !== ' ') {
//             countSecondHalf++
//         }
//     }
//     if (countFirstHalf >= countSecondHalf) {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(connotation(str));

// ---------------------------------------------------------------------
// 61.
// Напишите функцию, которая заменяет 'two', 'too' и 'to' на число «2». 
// Даже если звук встречается в середине слова (как в осьминоге) или 
// не в нижнем регистре, бабушка все равно считает, что его нужно заменить на 2

// let s = 'I love to text';
// function textin(s) {
//     let str = '';
//     str = s.replace(/two/gi, '2');
//     str = str.replace(/too/gi, '2');
//     str = str.replace(/to/gi, '2');
//     return str;
// }

// console.log(textin(s));

// --------------------------------------------------------------------
// 62.
// Ваша задача — создать функцию, которая принимает значение слова и 
// возвращает его с буквой «i» в начале слова. Например, мы получаем 
// слово «Телефон», поэтому мы должны вернуть «iPhone». Но у нас 
// есть несколько правил:
    // Слово не должно начинаться с буквы «Я», например Inspire .
    // Количество гласных не должно быть больше или равно количеству 
    // согласных, например Восток или Мир . («у» считается согласной)
    // Первая буква не должна быть строчной, например, road .
// Если слово не соответствует правилам, возвращаем «Недопустимое слово».

// let word = 'Fridge';
// function i(word) {
//     let letter = 'i';
//     let vowels = 'aeiou';
//     let vowelsBig = 'AEIOU'
//     let consonants = 'bcdfghjklmnpqrstvwxyz';
//     let vowelsInWord = 0;
//     let consonantsInWord = 0;
//     if (word.charAt(0) === 'i' || word.charAt(0) === 'I') {
//         return 'Invalid word';
//     }
//     for (let i = 0; i < word.length; i++)  {
//         if (word.charAt(0) === word.charAt(0).toLowerCase()) {
//             return 'Invalid word';
//         } else if (vowels.includes(word[i]) || vowelsBig.includes(word[i])) {
//             vowelsInWord ++;
//         } else {
//             consonantsInWord ++;
//         }
//     }
//     if (vowelsInWord >= consonantsInWord || word.length === 0) {
//         return 'Invalid word';
//     } else {
//         letter += word;
//     }
//     return letter;
// }
// console.log(i(word));

// ------------------------------------------------------------------
// 63.
// Завершите решение, чтобы оно возвращало отформатированную строку. 
// Возвращаемое значение должно быть равно «Значение равно ЗНАЧЕНИЕ», 
// где значение — это 5-значное дополненное число.
// solution(1204),"Value is 01204"
// solution(109),"Value is 00109"

// let value = 109;
// function solution(value) {
//     let str = 'Value is ';
//     let result = '';
//     let zero = '0'.repeat(5 - String(value).length);
//     result = str + zero + String(value);
//     return result;
// }

// console.log(solution(value));

// ------------------------------------------------------------------
// 64.
// Местный родильный дом интересуется именами!
// У них есть массивы всех имен детей, которые они видят каждый 
// год, но списки ооочень длинные! Они не знают, как подсчитать, 
// сколько раз используется одно имя.
// Учитывая массив имен и определенную строку имени, вернуть 
// количество раз, которое конкретное имя появляется в массиве.

// let anArr = ['Bob','Ted','Amy','Alice','Bob','Ted','Amy','Ted','Amy','Fred'];
// let name = 'Ted';
// function countName(anArr, name) {
//     let countCoincidences = 0;
//     for (let i = 0; i < anArr.length; i++) {
//         if (anArr[i] === name) {
//             countCoincidences += 1;
//         }
//     }
//     return countCoincidences;
// };

// console.log(countName(anArr, name));

// ----------------------------------------------------------------
// 65.
// Вернуть массив из слов длинна которых больше n

// let sentence = 'The quick brown fox jumps over the lazy dog';
// let n = 4;
// function filterLongWords(sentence, n) {
//     let result = [];
//     sentence = sentence.split(' ');
//     for (let i = 0; i < sentence.length; i++) {
//         if (sentence[i].length > 4) {
//             result.push(sentence[i]);
//         }
//     }
//     return result; 
// }

// console.log(filterLongWords(sentence, n));

// ----------------------------------------------------------------
// 66.
// В этом ката вам нужно проверить предоставленный двумерный массив 
// (x) на наличие хороших идей «хорошо» и плохих идей «плохо». Если 
// есть одна или две хорошие идеи, верните «Опубликовать!», если 
// их больше 2, верните «Чую серию!». Если нет хороших идей, как 
// это часто бывает, верните «Fail!».
// Подмассивы могут быть разной длины.
// Решение должно быть нечувствительным к регистру (т. е. 
//     «хорошо», «хорошо» и «хорошо» — все считается хорошей 
//     идеей). Все входные данные не могут быть строками.

// let x = [['bad', 'bAd', 'bad'], ['bad', 'bAd', 'bad'], ['bad', 'bAd', 'bad']];
// function well(x) {
//     let goodIdeas = 0;
//     x = x.flat();
//     for (let i = 0; i < x.length; i++) {
//         if (String(x[i]).toLowerCase() === 'good') {
//             goodIdeas += 1;
//         }
//     }
//     if (goodIdeas > 2) {
//         return 'I smell a series!';
//     } else if (goodIdeas === 1 || goodIdeas === 2) {
//         return 'Publish!';
//     } else {
//         return 'Fail!';
//     }
// }

// console.log(well(x));

// --------------------------------------------------------------
// 67.
// будет предоставлена ​​строка из четырех слов. Ваша задача перевести их на язык Гордона
// слова должны быть прописными, каждое слово должно заканчиваться на «!!!!», любая буква 
// «а» или «А» должна стать «@», любая другая гласная должна стать «*».

// let a = 'are you stu pid';
// function gordon(a) {
//     let vowelLetters = 'aeiou';
//     let result = ''; 
//     for (let i = 0; i < a.length; i++) {
//         if ((a[i].includes('a') && a[i + 1] === ' ') || (a[i].includes('A') && a[i + 1] === ' ')) {
//             result += '@' + '!!!!';
//         } else if (a[i].includes('a') || a[i].includes('A')) {
//             result += '@';
//         } else if (vowelLetters.includes(a[i]) &&  a[i + 1] === ' ') {
//             result += '*' + '!!!!';
//         } else if (vowelLetters.includes(a[i])) {
//             result += '*';
//         } else if (a[i + 1] === ' ') {
//             result += a[i] + '!!!!';
//         }  else {
//             result += a[i];
//         }
//     }
//     result += '!!!!';
//     return result.toUpperCase();
// }
// console.log(gordon(a));

// --------------------------------------------------------------
// 68.
// Учитывая строку, показывающую либо ровную 
// дорогу ("_"), либо неровности ("n"), определите, благополучно 
// ли вы доберетесь до дома. 15 ударов или меньше, ответьте 
// "Woohoo!", более 15 ударов, ответьте "Car Dead".

// let x ='_nnnnnnn_n__n______nn__nn_nnn';
// function bump(x) {
//     let smoothRoad = '_';
//     let bumps = 'n';
//     let smoothRoadCount = 0;
//     let bumpsCount = 0; 
//     for(let i = 0; i < x.length; i++) {
//         if (x[i] === smoothRoad) {
//             smoothRoadCount += 1;
//         } else {
//             bumpsCount +=1;
//         }
//     }
//     if ((smoothRoadCount > bumpsCount && smoothRoadCount <= 15) || bumpsCount <= 15) {
//         return 'Woohoo!';
//     } else {
//         return 'Car Dead';
//     }
// }
// console.log(bump(x));

// --------------------------------------------------------------
// 69.
// Дана последовательность чисел, найти наибольшую сумму пар в последовательности.
// Входная последовательность содержит как минимум два элемента, и каждый 
// элемент является целым числом.
// Например: [99, 2, 2, 23, 19]  --> 122 (= 99 + 23)

// let numbers = [10,14,2,23,19];
// function largestPairSum(numbers) {
//     let result = 0; 
//     numbers = numbers.sort(function(a,b) { return b - a});
//     result = +(numbers[0] +numbers[1]);
//     return result;
// }
// console.log(largestPairSum (numbers));

// --------------------------------------------------------------
// 70.
// предоставлена ​​строка, и ваша задача будет заключаться в том, 
// чтобы вернуть список целых чисел, детализирующий количество 
// прописных букв, строчных букв, цифр и специальных символов
// Например: Solve("*'&ABCDabcde12345") = [4,5,5,3]. 

// function solve(s) {
//     let result = [];
//     let uppercaseLetters = s.match(/[A-Z]/g);
//     let lowercaseLetters = s.match(/[a-z]/g);
//     let numbers = s.match(/[0-9]/g);
//     let uppercaseLettersCount = uppercaseLetters.length;
//     result.push(uppercaseLettersCount);
//     let lowercaseLettersCount = lowercaseLetters.length;
//     result.push(lowercaseLettersCount);
//     let numbersCount = numbers.length;
//     result.push(numbersCount);
//     let specialCharacters = s.length - (uppercaseLettersCount + lowercaseLettersCount + numbersCount);
//     result.push(specialCharacters);
//     return result;
// }
// console.log(solve(s));


// --------------------------------------------------------------
// 71.
// Учитывая массив (x), вам нужно рассчитать оценку Пола Мизери. 
// Значения приносят следующие баллы:
// kata = 5
// Petes kata = 10
// life = 0
// eating = 1

// let x = ['life', 'eating', 'life'];
// function paul(x){
//     let eating = 'eating';
//     let petesKata = 'Petes kata';
//     let kata = 'kata';
//     let sum = 0;
//     for (let i = 0; i < x.length; i++) {
//         if (kata.includes(x[i])) {
//             sum += 5;
//         } else if (petesKata.includes(x[i])) {
//             sum += 10;
//         } else if (eating.includes(x[i])) {
//             sum += 1;
//         }
//     }

//     if (sum < 40) {
//         return 'Super happy!';
//     } else if (sum < 70 && sum >= 40) {
//         return 'Happy!';
//     } else if (sum < 100 && sum >= 70) {
//         return 'Sad!';
//     } else {
//         return 'Miserable!';
//     }
// }
// console.log(paul(x));

// --------------------------------------------------------------














