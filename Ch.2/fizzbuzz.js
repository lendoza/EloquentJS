// For numbers divisible by 3, print 'Fizz'
// For numbers divisible by 5, print 'Buzz'
// For numbers divisible by 3 and 5, print 'FizzBuzz'
// Otherwise, print number

for(var i = 1; i <= 100; i++){
  if(i % 3 === 0){
    console.log('Fizz');
  }
  else if(i % 5 === 0){
    console.log('FizzBuzz');
  }
  else if(i % 15 === 0){
    console.log('FizzBuzz');
  }
  else{
    console.log(i);
  }
}

