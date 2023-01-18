import {defaults} from '../defaults.js'
import { testObject,defaultProps } from './testObject.js'
let res=[];
res=defaults(testObject,defaultProps);
console.log(res);