// 1.
// переместить все 0 в конец массива не изменяя порядок других элементов
// let a =[4, 0, 6, -1, 0, 88, 33, 0, 9];
// let b = [];

// a.forEach((el, i) => {
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

// arr.forEach((el, i) => {
//     if (el === el.toLowerCase() && smallVowels.includes(el)) {
//         arr.splice(i, 1);
//     }
    
// });
// arr = arr.join('');
// console.log(arr);

// ------------------------------------------------
// 3.
// В функцию передаётся целое положительное число. Необходимо сделать так,
// чтобы функция возвращала сумму всех цифр в переданном числе

// let s = 455;
// let summa = 0;
// let array = s.toString().split('');
// console.log(array);
// for (let i = 0; i < array.length; i++) {
//     summa += +array[i];
// }
// console.log(summa);


// ------------------------------------------------
// 4.
// в функцию передаётся массив, функция должна вернуть 
// сумму всех нечётных чисел больше нуля.

// let m = [5, 0, -5, 20, 88, 17, -32] // 22

// function dima(m) {
//     let result = 0;
    
//     m.forEach((el) => {
//         if (el % 2 !== 0 && el > 0) {
//             result += el
//         }  
//     })
//     console.log(result)
// } 

// dima(m);

// ------------------------------------------------
// 5.
// дана строка, нужно вернуть её задом наперёд 

// let a = 'дай мне свободу';

// function rev(a) {
//     let reverse = a.split('').reverse().join('');
//     return reverse
// }
// rev(a);

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

// baksa(b)
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
//         // console.log(element)
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
//             str[i] = 'U'
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
//             string[i] = 'S'
//         } else if (string[i] === '0') {
//             string[i] = 'O'
//         } else if (string[i] === '1') {
//             string[i] = 'I'
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
// console.log(sequence(x, t))


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
//     let sheep = 0
//     for (let i = 0; i < arrayOfSheep.length; i++) {
//         if (arrayOfSheep[i] === true) {
//             sheep += 1
//         }
//     }
//     return sheep;
// }

// console.log(countSheeps(arrayOfSheep))


// --------------------------------------------------------------
// 13.
// дана строка, нужно по ней пройтись если встречается 
// символ i то увеличиваем значение на 1 (изначально 0)
// если d уменьшает значение на 1 
// если s то возводим значение в квадрат если о то выводим значение

// /parse("iiisdoso") => [ 8, 64 ]

// let data = "iiisdoso"

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
//             //res = res*res;
//         } else if (data[i] === 'o') {
//             arr.push(res)
//         }
//     }
//     return arr;
// }

// parse(data)
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
//     for(let i = 0; i <= d; i++) {
//         if(d < 3) {
//             result = price * d;
//             // console.log(result);
//         } else if(d < 7 && d >= 3) {
//             result = price * d - 20;
//             // console.log(result);
//         } else if (d >= 7) {
//             result = price * d - 50;
//             // console.log(result);
//         }
//         console.log(result);
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
//     if(days >= 3) discount += 20;
//     if(days >= 7) discount += 30;
    
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
//     for(let i = 0; i < x.length; i++) {
//         if (x[i] === 'good') {
//             count += 1
//         }  
//     }
//     console.log(count)
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
//     console.log(remainder)
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
// for(let i = 0; i < a.length; i++){
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
//     for(let i = 0; i < a.length; i++) {
//         if(a[i] % 2 === 0 && a[i] > 0) {
//             c.push(a[i]);
//         }
//     }
//     return c
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
//     if(isNaN(parseInt(strng[strng.length-1]))) {
//         res = strng + 1;
//     } else {
//         let numb = '';
//         let str = '';
//         let countBeforeConversion = 0;
//         let countAfterConversion = 0;
//         let resultConversion = 0;
//         let zeros = '';
//         for(let i = strng.length - 1; i >= 0; i--){
//             if(!isNaN(parseInt(strng[i]))){
//                 numb += strng[i];
//                 countBeforeConversion += 1;
//                 console.log(numb);
//                 console.log(countBeforeConversion);
//             } else {
//                 str += strng[i];
//             }
//         }

//         str = str.split("").reverse().join("");
//         numb = numb.split("").reverse().join("");
//         numb = +numb + 1;

//         countAfterConversion = String(+numb).length;
//         console.log('countAfterConversion = ', countAfterConversion);

//         if (countAfterConversion < countBeforeConversion) {
//             resultConversion = countBeforeConversion - countAfterConversion;
//             console.log(resultConversion)
//             zeros = '0'.repeat(resultConversion); 
//             console.log('zeros = ', zeros);
//         }

//         res = str.concat(zeros).concat(numb);
//         str = str.concat(numb);
//         console.log(numb);
//         console.log(str);
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
//     str = str.split(' ')
//     for(let i = 0; i < str.length; i++) {
//         reverse.push(str[i].split('').reverse().join(''));
//     }
//     return reverse.join(' ');
// }
// console.log(reverseWords(str))


//-----------------------------------------------------------------------------------
// 21.
// Дополнение до единиц двоичного числа — это число, полученное путем замены 
// всех нулей на 1 и всех 1 на 0.

// let n = '1101';
// function onesComplement(n) {
//     str = '';
//     for(let i = 0; i < n.length; i++) {
//         if(n[i] === '1') {
//             str += 0
//         } else {
//             str += 1
//         }
//     }
//     return str
// };
// console.log(onesComplement(n))

// ----------------------------------------------------------------------------------
// 22.
// Завершить функцию, которая принимает последовательность чисел в качестве единственного 
// параметра. Ваша функция должна возвращать сумму четных значений этой последовательности.

// let input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// function sumEvenNumbers(input) {
//     let res = 0;
//     for(let i = 0; i < input.length; i++) {
//         if(input[i] % 2 === 0) {
//             res += input[i]
//         }
//     }
//     return res
// }
// console.log(sumEvenNumbers(input))

// -----------------------------------------------------------------------------------
// 23.
// вы получаете начальный номер и конечный номер региона и должны вернуть 
// количество всех чисел, кроме номеров с 5 в нем. Начальный и конечный номер включительно!

// let start = 14;
// let end = 15;
// function dontGiveMeFive(start, end) {
//     let list = [];
//     for(let i = start; i <= end; i++) {
//         let str = String(i);
//         1 вариант решения
//         if(str[0] !== String(5) && str[str.length - 1] !== String(5)) {
//             list.push(i)
//         }  

//         2 вариант решения
//         if(!str.includes('5')) {
//             list.push(i)
//         } 
//     }
//   return list.length;
// }
// console.log(dontGiveMeFive(start, end))


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
//     for(let i = 0; i < arrayOfChars.length; i++) {
//         if(isNaN(+arrayOfChars[i])) {
//             line.push(arrayOfChars[i]);
//         } else {
//             num.push(arrayOfChars[i]);
//         }
//     }
//     line = line.sort().join('');
//     num = num.sort().join('');
//     res = line + num;
//     return res
// }
// console.log(unusualSort(arrayOfChars))


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
//     if(array.join(', ') === arrSort) {
//         return 'yes, ascending'
//     } else if (array.join(', ') === arrSortReverse) {
//         return 'yes, descending'
//     } else {
//         return 'no'
//     }
// }
// console.log(isSortedAndHow(array))



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
//     for(let i = 0; i < numbers.length; i++) {
//         if(numbers[i] === uniqueValues[0]){
//             first += 1;
//         } else {
//             second += 1;
//         }
//     }
//     if(first > second) {
//         return uniqueValues[1]
//     } else {
//         return uniqueValues[0]
//     }

// }

// console.log(stray(numbers))

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
//     for(let i = 0; i < str.length; i++) {
//         if((str[i] === l || str[i] === l.toUpperCase() || str[i] === l.toLowerCase()) && (i + 1) <= (str.length - 1)) {
//             newStr += str[i + 1];
//         }
//     }
//     for(let j = 0; j < newStr.length; j++) {
//         if(letter.includes(newStr[j]) || letter.toUpperCase().includes(newStr[j])) {
//             result += newStr[j];
//         }
//     }
//     return result
// }

// console.log(comes_after(str,l))


// ----------------------------------------------------------------------------
// 28.
// Завершите решение, чтобы оно отсортировало переданный массив чисел. Если функция 
// передает пустой массив или значение null/nil, она должна вернуть пустой массив.

// let nums = [1,2,3,10,5];
// function solution(nums){
    
//     if(nums === null || nums === []) {
//         return []
//     } else {
//         nums.sort((a, b) => a - b)
//     }
//     return nums;
// }

// console.log(solution(nums))


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
//         if(pass[i] === 'i' || pass[i] === 'I') {
//             finalPassword.push('1')
//         } else if(pass[i] === 'o' || pass[i] === 'O') {
//             finalPassword.push('0')
//         } else if(pass[i] === 's' || pass[i] === 'S') {
//             finalPassword.push('5')
//         } else {
//             finalPassword.push(pass[i])
//         }
//     }
//     console.log(finalPassword)
//     return finalPassword.join('')
// }

// console.log(makePassword(phrase))

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
    // console.log(IMT)
    // if(IMT <= 18.5) {
    //     return 'Underweight';
    // } else if(IMT <= 25.0) {
    //     return 'Normal'
    // } else if(IMT <= 30.0) {
    //     return 'Overweight'
    // } else {
    //     return 'Obese'
    // }

    // или

//     let res = (IMT <= 18.5) ? 'Недостаточный вес' :
//     (IMT <= 25.0) ? 'Нормальный' :
//     (IMT <= 30.0) ? 'Избыточный вес' :
//     'Ожирение' ;
//   return res
// }

// console.log(bmi(weight, height))

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
//         return false
//     }
//     for (let i = 0; i < str.length; i++) {
//         if (str.match(/\d/g) === null || str.length < 8) {
//             return false
//         } else {
//             return true
//         }
//     }
// }

// console.log(password(str))

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
//         return 'Not a string'
//     }
//     for(let i = 0; i < string.length; i++) {
//         if (i === 0 || string[i-1] === ' ') {
//             str += string[i].toUpperCase();
//         }
//     }
//     for(let i = 0; i < str.length; i++) {
//         if (string.match(/\d/g) !== null && isNaN(parseInt(str[i]))) {
//             return 'Not letters'
//         } else if (string.match(/\d/g) !== null) {
//             return 'Not letters'
//         } else if (!isNaN(parseInt(str[i]))  && string.match(/\d/g) !== null) {
//             return 'Not a string'
//         }
//     };
//     return str
// }

// console.log(makeAcronym(string))

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
//     for(let l = 0; l < total1.length; l++) {
//         sum1 += +total1[l]
//     }
//     for(let y = 0; y < total2.length; y++) {
//         sum2 += +total2[y]
//     }
//     result = sum1 - sum2
//     return result
// }

// console.log(calc(x))

// --------------------------------------------------------------------------------
























