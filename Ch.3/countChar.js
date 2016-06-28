var function countChar(string, ch){
  counted = 0;
  for (var i = 0; i < string.length; i++){
    if(string.charAt(i) == ch){
      counted++;
    }
  }
  return counted;
}
    
var function countBs(string){
  return countChar(string, 'B');
}

console.log(countBs('BRUH'));