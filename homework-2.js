// 1. Получить суму и количество четных в диапазоне от 0 до 100

function getSumOfRange(min, max) {
    let sum = 0
    let count = 0

    for (let i = min; i <= max; i++) {
        if (i % 2 === 0) {
            sum += i
            count++
        }
    }

    return sum, count
}

getSumOfRange(0, 100)

// 2. Проверить простое ли число

function isPrime(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false
    }
    return true
}

isPrime(5)

// 3. Получить корень числа методом подбора

function getRoot(num) {
    for (let i = 0; i <= num; i++) {
        if (i * i === num) return i
    }
}

getRoot(25)

// 4. Получить корень числа используя бинарный поиск

function getRootOfBinarySearch(num) {
    let floor = 1
    let ceil = num
    let result

    if (floor === ceil) return num

    while(!result) {
        const middle = Math.floor((ceil - floor) / 2 + floor)
        if (middle * middle > num) return ceil = middle
        else if (middle * middle < num) return floor = middle
        else return result = middle
    }
}

getRootOfBinarySearch(25)

// 5. Получить факториал числа

function getFactorial(num) {
    let factorial = 1

    for (let i = 1; i <= num; i++)
        factorial *= i

    return factorial
}

getFactorial(5)

// 6. Получить суму цифр в числе

function getSum(num) {
    let sum = 0
    let arr = num.toString().split('')

    arr.forEach(el => sum += Number(el))

    return sum
}

getSum(1234)

// 7. Развернуть число

function reverseNumber(num) {
    return Number(num.toString().split('').reverse().join(''))
}

reverseNumber(987654321)