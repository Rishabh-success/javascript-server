import { creatediamond , createequilatral } from './pattern'
import {hasPermission,validateUsers} from './utils'
import { users }  from './constants';

creatediamond(5)
createequilatral(6)

console.log(hasPermission('getUsers','head-trainer','all'));
console.log(hasPermission('getUser','head-trainer','Delete'));
console.log(hasPermission('getUser','trainer','all'));
console.log(hasPermission('getUsers','trainee','write'));
console.log(hasPermission('getUser','trainee','read'));

validateUsers(users);