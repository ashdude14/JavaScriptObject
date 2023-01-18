function keys(obj) {
          let arr =[];
          for(var i in obj)
          arr.push(i);
          return arr;
      }

      export{keys};