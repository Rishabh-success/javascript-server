import {permissions} from "../constants.js"
export default function hasPermission(moduleName,role,permissionType)
{
return all.includes(role) || moduleName[permissionType].includes(role);
}
console.log(permissions.getUsers)
let output = hasPermission('getUsers','head-trainer','Delete');
console.log(output);

