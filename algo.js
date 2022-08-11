function nidham() {

  let arr = [12,10,6,123,76,1,80]
  
   for (let i = 0; i < arr.length; i++) {
 
     
     for (let y = 0; y < arr.length - i - 1; y++) {

       
 
       if (arr[y + 1] < arr[y]) {
 
         
         [arr[y + 1], arr[y]] = [arr[y], arr[y + 1]]
     
       }
     }
   };
   return arr;
 };
 
 console.log(nidham())