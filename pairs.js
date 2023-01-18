function pairs(obj) {
          //_.pairs({one: 1, two: 2, three: 3});
          //=> [["one", 1], ["two", 2], ["three", 3]]

          let arr ={};
         for(var i in obj){
          arr[i]= obj[i];
         }
          return arr;
      }
      
      export{pairs};