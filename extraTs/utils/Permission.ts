import { permissions } from '../constants';
export default function hasPermission( moduleName: string , role: string , permissionType: string) : void
{
    if(!moduleName.hasOwnProperty(permissionType)){
        console.log("false");
    }
    else if(moduleName[permissionType].includes(role)|| (role=='head-trainer')){
        console.log("true");
    }
    else{
        console.log("false");
    }
}