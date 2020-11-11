import {IPermissions} from './Interfaces'
export const permissions =
 {
 'getUsers': {
 all: ['head-trainer'],
 read : ['trainee', 'trainer'],
 write : ['trainer'],
 Delete: [],
 }
 }
let  {getUsers}=permissions;
export{getUsers}