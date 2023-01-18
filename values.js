function values(obj) {
          let arr =[];
          for(var i in obj)
          arr.push(obj[i]);
          return arr;
      }
      
      export{values};