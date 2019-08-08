"use strict";


// № 1
/*
1. Дан массив с числами (Пример: var arr = [2, -5, 1, -2, 0, -3, 2, -14]) - массив может быть и другим.
1) В начале вам нужно убрать из него все отрицательные числа используя filter
2) Извлечь корень из каждого значения этого массива и записать в переменную. Используя map.
3) Вывести массив в консоль*/

let arr = [2, -5, 1, -2, 0, -3, 2, -14];
let positiveArray = arr.filter(Array);
function Array(number){
    return number >= 0;
}
let arr2 = arr.map(function(summ){
  return Math.sqrt( summ );
});
console.log( positiveArray );
console.log( arr2 );





// № 2
/*
2. Дан массив с числами (Пример: var arr = [4, 3, 5, 5, 0, 4, 8, 6]) - массив может быть и другим.
Нужно найти сумму элементов от начала и до нуля. (В примере это первые 4 элемента)
Использовать функция reduce
*/

let array = [ 4, 3, 5, 5, 0, 4, 8, 6 ];
let summ = 0;
array.reduce( function ( a , b ) {
  if ( b === 0 ) {
    summ = a;
    return a;
  }
  return a + b;
})
console.log( summ );

// № 3
/*
3. Напишите функцию summArguments, которая сложит все аргументы переданные в функцию. Например
summArguments(10, 1, 2, 5); // 18
summArguments(10); // 10
*/
function sumArguments() {
  let argument = 0;
  for (let i = 0; i < arguments.length; i++) {
    argument += arguments[i];
  }
  return argument;
}
console.log( sumArguments(10, 1, 2, 5) );


