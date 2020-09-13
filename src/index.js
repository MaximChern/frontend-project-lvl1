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
      console.log(' You are a winner!!! Congratulations!!!\n           THE END!!!');
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
