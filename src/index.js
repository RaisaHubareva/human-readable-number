module.exports = function toReadable (number) {
 
   let ones = ['','one','two','three','four','five','six','seven','eight','nine'];
   let tens = ['','','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
   let teens = ['ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];

   let numStr = String(number);
   let sum;

   if (numStr.length === 1) {
     if(numStr == 0){
       sum = 'zero';
       }else{
         sum =`${ones[numStr]}`;
     }
   } else if (numStr.length===2){
      if(numStr[0]==1){
        sum = `${teens[numStr[1]]}`;
      } else if (numStr[1]==0) {
        sum = `${tens[numStr[0]]}`;

      }else{
        sum = `${tens[numStr[0]]} ${ones[numStr[1]]}`;
      }

   } else if(numStr.length===3){
       if ([numStr[1]] == 1 ) {
          sum = `${ones[numStr[0]]} hundred ${teens[numStr[2]]}`;
       } else if ([numStr[1]] == 0 && [numStr[2]] == 0){
          sum = `${ones[numStr[0]]} hundred`;

        }else if ([numStr[1]] == 0){
          sum = `${ones[numStr[0]]} hundred ${ones[numStr[2]]}`;

        }else if ([numStr[2]] == 0){
          sum = `${ones[numStr[0]]} hundred ${tens[numStr[1]]}`;

        }else {
          sum =`${ones[numStr[0]]} hundred ${tens[numStr[1]]} ${ones[numStr[2]]}`;
        }

  } else {
    return"can't recognize the number";

  }
  return sum;

}; 
