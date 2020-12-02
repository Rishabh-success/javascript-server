import { IPermissions, IUsers } from './Interfaces';

export const key = 'qwertyuiopasdfghjklzxcvbnm123456';
export const Permission: IPermissions = {
    'getUsers': {
        all: ['head-trainer'],
        read: ['trainee', 'trainer'],
        write: ['trainer'],
        Delete: [],
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