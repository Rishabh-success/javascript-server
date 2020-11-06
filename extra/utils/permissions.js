import {permissions} from "../constants.js"
const {getUsers}= permissions;
export default function hasPermission(moduleName,role,permissionType)
function hasPermission(moduleName,role,permissionType)
{
const {all}=moduleName;
return all.includes(role) || moduleName[permissionType].includes(role);
}
console.log(permissions.getUsers)
let d = hasPermission(getUsers,"head-trainer","Delete");
console.log(d);
//if i have pass value role:head-trainer and permissiontype:read,write,delete all case value is true
////if i have pass value role:trainee and permissiontype:write O/P false,permissiontype:read O/P true,permissiontype:Delete O/P false,
