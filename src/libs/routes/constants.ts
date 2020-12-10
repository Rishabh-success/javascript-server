import { IPermissions, IUsers } from './Interfaces';

export const key = 'qwertyuiopasdfghjklzxcvbnm123456';
export const Permission: IPermissions = {
    'getUsers': {
        all: ['head-trainer'],
        read: ['trainee', 'trainer', 'head-trainer'],
        write: ['trainer', 'head-trainer'],
        Delete: ['head-trainer'],
    },
};

export const user: IUsers[] = [
    {
        traineeEmail: 'rishabh1.singh@successive.tech',
        reviewerEmail: 'chirag.arora@successive.tech'
    },
    {
        traineeEmail: '@rishabhsuccesive.tech',
        reviewerEmail: '@chiragsuccesive.tech'
    }
];