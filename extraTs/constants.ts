export const users : IUsers[] = [
    {
        traineeEmail : 'rishabh@gmail.com',
        reviewerEmail : 'chirag@gmail.com'
    },
    {
        traineeEmail : 'rishabh@successive.tech',
        reviewerEmail : 'chrig@successive.tech'
    }
]

export let permissions: IPermissions = {
    'getUsers': {
    all: ['head-trainer'],
    read : ['trainee', 'trainer'],
    write : ['trainer'],
    Delete: [],
    },
    'getUser': {
        all: ['head-trainer'],
        read : ['trainee', 'trainer'],
        write : ['trainer'],
        Delete: []
    }
};