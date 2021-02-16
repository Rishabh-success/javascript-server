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
    traineeEmail: '@rishabh1.singh@successive.tech',
    reviewerEmail: '@chiragsuccesive.tech'
  }
];
export const payLoad = {
  'iss': 'Successive Technologies',
  'aud': 'www.successive.in',
  'sub': 'Learn and Implement',
  'email': ''
};
export const seedData1 = {
  name: 'head-trainer',
  email: 'headtrainer@successive.tech',
  role: 'head-trainer',
  password: 'Training@123'
};

export const seedData2 = {
  name: 'trainer',
  email: 'trainer@successive.tech',
  role: 'trainer',
  password: 'Training@123'
};
