function invert(obj) {
          // Returns a copy of the object where the keys have become the values and the values the keys.
          // Assume that all of the object's values will be unique and string serializable.
          // http://underscorejs.org/#invert
          let arr={};
          for(var i in obj)
          {
                    arr[obj[i]]=i;
          }
          return arr;
      }
      export{invert};