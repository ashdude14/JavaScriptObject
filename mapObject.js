function mapObject(obj, cb) {
          let arr = [];
          for(var i in obj)
          {
              var x=cb(obj[i]);
              arr.push(x);
             // console.log(obj[i]);
          }
          return arr;
      }
 
 export{mapObject}