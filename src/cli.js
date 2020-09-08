import readlineSync from 'readline-sync';

const zaprosName = () => {
  console.log('Wellcom to the Brain Games!');
  const Name = readlineSync.question('May I have your name?');
  console.log(`Hello,${Name}!`);
};
export default zaprosName();
