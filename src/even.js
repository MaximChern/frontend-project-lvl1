import readlineSync from 'readline-sync';

const Even = () => {
  console.log('Wellcom to the Brain Games!');
  const Name = readlineSync.question('May I have your name?');
  console.log(`Hello,${Name}!`);

  console.log('Answer "yes" if the number is even, otherwise answer "no"');

  const randomNum = (min, max) => {
    // случайное число от min до (max+1)
    const rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  };

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
      }
      if (Quest % 2 === 0 && Answer !== 'yes') {
        console.log(`${Answer} is wrong answer ;(. Correct answer was "yes".
        Let's try again, ${Name}!`);
      }
    }
  }
};
export default Even;
