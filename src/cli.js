import readlineSync from 'readline-sync';

const zaprosName = () => {
  const Name = readlineSync.question('May I have your name?');
  console.log(`Hello,${Name}!`);
};
export default zaprosName();
