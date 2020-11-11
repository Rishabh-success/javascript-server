type access={
    all:String[];
    write:String[];
    read:String[];
    Delete:String[];
    

};
export interface IPermissions{
    getUsers:access;
}