# ClassWork_1

На практичному занятті ми почали вивчати алгоритми і розробляли три програми про які зараз розкажу:

## ___Search for the smallest number___
Ця програма створює масив чисел:

```JavaScript
let arr = Array.from(Array(50))
arr = arr.map((i) => Math.round(Math.random()*100))
```

А потім за допомогою алгоритма бульбашки порівнює числа між собою і знаходить найменше:

```JavaScript
let min = arr[0]
for(let i = 0; i <= arr.length; i++){
    if(arr[i] < min){
        min = arr[i]
    }
}
```

__РЕЗУЛЬТАТ:__

![](https://github.com/Eduard-Babchuk/ClassWork_1/blob/main/Photo/1.png)

## ___Binary Search Algorithm___
Основна мета бінарного пошуку - знайти заданий елемент в відсортованому масиві шляхом поділу масиву навпіл і порівняння шуканого елемента з елементом у середині масиву. Далі алгоритм визначає, в якому напрямку рухатися - в лівий або правий півмасив, і повторює процес для відповідної частини масиву. Цей процес триває доти, доки знайдений елемент або поки інтервал пошуку не стає порожнім.

```JavaScript
let i = 0
let j = arr.length - 1

for(let y = arr[0]; y < arr.length; y++){
    let half_index_arr = Math.floor((i + j)/2)
    if (half_index_arr === found_num){
        console.log(half_index_arr)
        return
    }
    else if (half_index_arr > found_num){
        j = half_index_arr-1
    }
    else{
        i = half_index_arr+1
    }
}
```

__РЕЗУЛЬТАТ:__

![](https://github.com/Eduard-Babchuk/ClassWork_1/blob/main/Photo/2.png)

## ___Bubble Sort of Names___
Для цієї програми для початку потрібно інсталювати бібліотеку __faker__, для цього в термінал вводимо:

![](https://github.com/Eduard-Babchuk/ClassWork_1/blob/main/Photo/4.png)

Далі створюємо масив імен:

```JavaScript
const { faker } = require('@faker-js/faker')

let arr = Array.from(Array(10))
arr = arr.map((i) => faker.person.firstName())
```

А потім за допомогою алгоритму _"Бульбашки"_ сортуємо імена за алфавітом:

```JavaScript
for(let i = 0, temp; i < arr.length-1; i++){
    for(let k = 0; k < arr.length-1; k++){
        if(arr[k] > arr[k+1]){
            temp = arr[k]
            arr[k] = arr[k+1]
            arr[k+1] = temp
        }
    }
}
```

__РЕЗУЛЬТАТ:__

![](https://github.com/Eduard-Babchuk/ClassWork_1/blob/main/Photo/3.png)


Код виглядає так "Звічайно", тому що у JavaScrit порівняння рядків відбувається за лексикографічним порядком (алфавітним порядком).

_P.S. Дякую за підказку:_

```JavaScript
console.log("aaaa" < "b")
```

_Дякую! Щиро ваш, Бабчук Едуард (ІПЗс-23-1)_
