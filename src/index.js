import readlineSync from 'readline-sync';

// генератор случайных чисел заданного диапазона

const randomNum = (min, max) => {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

// генератор случайного элемента массива

const Operator = (arr) => {
  const rand = Math.floor(Math.random() * arr.length);
  return arr[rand];
};

// приветствие и знакомство. Далее оно встроено в каждую игру, поэтому не экспортируется

const Intro = () => {
  console.log('Wellcom to the Brain Games!');
  const Name = readlineSync.question('May I have your name?');
  console.log(`Hello,${Name}!`);
  return Name;
};

// игра "чет или нечет"

export const Even = () => {
  const Name = Intro();
  console.log('Answer "yes" if the number is even, otherwise answer "no"');

  let count = '';
  while (true) {
    if (count.substr(0, 3) === 'aaa') {
      console.log(
        ' You are a winner!!! Congratulations!!!\n           THE END!!!'
      );
      break;
    }
    const Quest = randomNum(1, 999);
    console.log(`Question:${Quest}`);
    const Answer = readlineSync.question('Your answer?');
    if ((Quest % 2 === 0 && Answer === 'yes') || (Quest % 2 !== 0 && Answer === 'no')) {
      console.log('Correct!!!');
      count = `a${count}`;
    } else {
      count = `b${count}`;
      if (Quest % 2 !== 0 && Answer !== 'no') {
        console.log(`${Answer} is wrong answer ;(. Correct answer was "no".
        Let's try again, ${Name}!`);
        break;
      }
      if (Quest % 2 === 0 && Answer !== 'yes') {
        console.log(`${Answer} is wrong answer ;(. Correct answer was "yes".
        Let's try again, ${Name}!`);
        break;
      }
    }
  }
};

// игра "калькулятор"

export const Calc = () => {
  const Name = Intro();
  console.log('What is the result of the expression?');
  const arr = ['+', '-', '*'];
  let count = '';
  while (true) {
    if (count.substr(0, 3) === 'aaa') {
      console.log(
        ' You are a winner!!! Congratulations!!!\n           THE END!!!'
      );
      break;
    }
    const Num1 = randomNum(1, 10);
    const Num2 = randomNum(1, 10);
    const Oper = Operator(arr);
    let result;

    switch (Oper) {
      case '+':
        result = Num1 + Num2;
        break;
      case '-':
        result = Num1 - Num2;
        break;

      case '*':
        result = Num1 * Num2;
        break;
      default:
          // nothing;
    }

    console.log(`Question:${Num1} ${Oper} ${Num2}`);

    const Answer = readlineSync.question('Your answer?');
    if (Number(Answer) === result) {
      console.log('Correct!!!');
      count = `a${count}`;
    } else {
      count = `b${count}`;
      console.log(`${Answer} is wrong answer ;(. Correct answer was ${result}
      Let's try again, ${Name}!`);
      break;
    }
  }
};

// игра "Наибольший общий делитель (НОД)"

export const Nodnum = () => {
  const Name = Intro();
  console.log('Find the greatest common divisor of given numbers.');
  let count = '';
  while (true) {
    if (count.substr(0, 3) === 'aaa') {
      console.log(
        ' You are a winner!!! Congratulations!!!\n           THE END!!!'
      );
      break;
    }
    const Num1 = randomNum(1, 100);
    const Num2 = randomNum(1, 100);

    console.log(`Question:${Num1} and ${Num2}`);

    // Nodfunc функция вычисления НОД

    const Nodfunc = (x, y) => {
      if (y > x) return Nodfunc(y, x);
      if (!y) return x;
      return Nodfunc(y, x % y);
    };

    const result = Nodfunc(Num1, Num2);
    const Answer = readlineSync.question('Your answer?');
    if (Number(Answer) === result) {
      console.log('Correct!!!');
      count = `a${count}`;
    } else {
      count = `b${count}`;
      console.log(`${Answer} is wrong answer ;(. Correct answer was ${result}
      Let's try again, ${Name}!`);
      break;
    }
  }
};

// игра "Потерянный элемент"

export const findElement = () => {
  const Name = Intro();
  console.log('Find What number is missing in the progression?.');
  let count = '';
  while (true) {
    if (count.substr(0, 3) === 'aaa') {
      console.log(
        ' You are a winner!!! Congratulations!!!\n           THE END!!!'
      );
      break;
    }
    const Num1 = randomNum(1, 10);
    const Num2 = randomNum(1, 5);
    // формируем прогрессию. Первый элемент Num1 выбирается случайным образом,
    // остальные 9 путом прибалвения случайного числа Num2 к предыдущему элементу*/
    let X = Num1 + Num2;
    let Progression = String(Num1);
    for (let i = 0; i < 9; i += 1) {
      Progression = `${Progression} ${X}`;
      X += Num2;
    }
    // формируем массив-близнец прогрессии, что бы выбрать рандомно пропавший элемент
    let Y = Num1 + Num2;
    const arr = [Num1];
    for (let i = 0; i < 9; i += 1) {
      arr.push(Y);
      Y += Num2;
    }
    const faiElem = Operator(arr); // это пропавший элемент
    const Question = Progression.replace(String(faiElem), '..'); // заменяем пропаший элемент на точки
    console.log(`Question: ${Question}`);
    const Answer = readlineSync.question('Your answer?');
    if (Number(Answer) === faiElem) {
      console.log('Correct!!!');
      count = `a${count}`;
    } else {
      count = `b${count}`;
      console.log(`${Answer} is wrong answer ;(. Correct answer was ${faiElem}
      Let's try again, ${Name}!`);
      break;
    }
  }
};

// Игра "Простое число"

export const Prime = () => {
  const Name = Intro();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  // сщздаем функцию, проверяющую число на простоту. Выдает ответ 'yes' или 'no' в виде строки.
  const isPrime = (num) => {
    let result;
    if (num < 2) {
      result = 'no';
    } else {
      if (num === 2) {
        result = 'yes';
      };
    };

    for (let i = 2; i < num; i += 1) {
      if (num % i === 0) {
        result = 'no';
        break; // выйдем из цикла
      }
      result = 'yes';
    }
    return result;
  }; // закрытие функции isPrime
  // ниже пошел цикл игры
  let count = '';
  while (true) { // проверка трех правильных ответов
    if (count.substr(0, 3) === 'aaa') {
      console.log(' You are a winner!!! Congratulations!!!\n           THE END!!!');
      break;
    }
    const num = randomNum(1, 100);

    console.log(`Question: ${num}?`);
    const Answer = readlineSync.question('Your answer?');
    if (Answer === isPrime(num)) {
      console.log('Correct!!!');
      count = `a${count}`;
    } else {
      if (isPrime(num) === 'no' && Answer !== 'no') {
        console.log(`${Answer} is wrong answer ;(. Correct answer was "no".
        Let's try again, ${Name}!`);
        break;
      }
      if (isPrime(num) === 'yes' && Answer !== 'yes') {
        console.log(`${Answer} is wrong answer ;(. Correct answer was "yes".
          Let's try again, ${Name}!`);
        break;
      }
    };
  };
};
