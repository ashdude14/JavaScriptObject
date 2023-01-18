
function defaults(obj, defaultProps) {
     //_.defaults(obj,defaultProps);
          for(var i in defaultProps)
          {
              if(obj.hasOwnProperty(i)===false)
              {
                //console.log(i);
                  obj[i]=defaultProps[i];      
              }

          }
          return obj;
      }
      export {defaults};
    
