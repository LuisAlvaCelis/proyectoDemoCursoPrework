function secondLargetNumber(numbers){
    let first = numbers[0]
    let second = 0;
    for(let i=0; i < numbers.length; i++) {
      second=first;
      first=numbers[i];
    }
    if(numbers[i]>second && numbers[i]<first){
      second=numbers[i];
    }
    return second;
  }
  console.log("Tu puta madre yimbo")
  let nums=[8,4,10,9,11];
  console.log(secondLargetNumber(nums))

  