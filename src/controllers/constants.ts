import { IUsers, IPermissions } from './interface';

const permissions: IPermissions = {
  'getUsers': {
    all: ['head-trainer'],
    read: ['trainee', 'trainer'],
    write: ['trainer'],
    Delete: []
  },
  'getDetails': {
    all: ['head-trainer'],
    read: ['trainee', 'trainer'],
    write: ['trainer'],
    Delete: []
  }
}

const users: IUsers[] =
  [
    {
      traineeEmail: 'trainee1@successive.tech',
      reviewerEmail: 'reviewer1@successive.tech',
    },

    {
      traineeEmail: 'traineee2@successive.tech',
      reviewerEmail: 'reviewer.der@successive.tech',
    }
  ]
<<<<<<< HEAD


export { permissions, users}
=======
let { getUsers, getDetails } = permissions;
export { getUsers, getDetails, users }
>>>>>>> 1b9c0b5d9f11a09e0866dd6eaede51de7efbe72b
