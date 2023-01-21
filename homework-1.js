// 1. Функция, которая возвращает a + b, если a четное и a * b если а не четное

function calcSum(a, b) {
  if (a % 2 === 0)
    return a + b
  return  a * b
}

calcSum(2, 5)

// 2. Даются координаты х и у. Вывести четверть в которой находится точка по координатам

function getQuarter(x, y) {
  if (x > 0 && y > 0)
    return 'Quadrant 1'
  else if (x < 0 && y > 0)
    return 'Quadrant 2'
  else if (x < 0 && y < 0)
    return 'Quadrant 3'
  else if (x > 0 && y < 0)
    return 'Quadrant 4'
}

findQuarter(1, -2)

// 3. Функция, которая суммирует только аргументы, которые больше нуля ( 3 аргумента a, b, c )

function getSum(...args) {
  let sum = 0

  for (const arg of args) {
    if (arg > 0) {
      sum += arg
    }
  }

  return sum
}

getSum(-1, 2, 3)

// 4. Дается 3 числа a, b, c. Если их сума больше, чем результат умножения, вывести суму + 3, иначе результат умножения + 3.

function sum(a, b, c) {
  let sum = a + b + c
  let multiply = a * b * c

  if (sum > multiply)
    return sum + 3
  else {
    return multiply + 3
  }
}

sum(1,10,3)

// 5. Определить оценку студента в зависимости от среднего бала. F ( 0 - 19 ), E ( 19 - 39 ), D ( 39 - 59 ),
// C ( 59 - 74 ), B ( 74 - 89 ), A ( 89 - 100 )

function getGrade(grade) {
  if (grade >= 0 && grade < 19)
    return 'F'
  else if (grade >= 19 && grade < 39)
    return 'E'
  else if (grade >= 39 && grade < 59)
    return 'D'
  else if (grade >= 59 && grade < 74)
    return 'C'
  else if (grade >= 74 && grade < 89)
    return 'B'
  else if (grade >= 89 && grade <= 100)
    return 'A'
  else
    return 'You are expelled'
}

checkGrade(19)