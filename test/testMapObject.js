import {mapObject} from '../mapObject.js'
import { testObject } from './testObject.js'
let res=[];
res=mapObject(testObject,cb);
console.log(res);
function cb(x)
 {
        return x = x + "z";
 }