<<<<<<< HEAD
import {permissions} from "../constants"
const {getUsers}= permissions;
export default function hasPermission(moduleName,role,permissionType)
function hasPermission(moduleName,role,permissionType)
{
console.log(permissions[moduleName][permissionType].includes(role)); //using bracket operator
const {all}=moduleName;
return all.includes(role) || moduleName[permissionType].includes(role);
}
console.log(permissions.getUsers)
//if i have pass value role:head-trainer and permissiontype:read,write,delete all case value is true
////if i have pass value role:trainee and permissiontype:write O/P false,permissiontype:read O/P true,permissiontype:Delete O/P false,
=======
import {permissions} from '../constants';
export default function hasPermission(moduleName, role, permissionType) {
    
    return (permissions[moduleName][permissionType].includes(role))
}
>>>>>>> e0dc1d19484faea198132abd201789ec138bc6cb

const result1=hasPermission('getUsers', "trainer", "read");
console.log(result1);
const result2 =hasPermission('getUsers', "trainee", "write");
console.log(result2);