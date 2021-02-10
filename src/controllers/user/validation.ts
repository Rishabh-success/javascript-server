const config = {
  get: {
      skip: {
          required: false,
          default: 0,
          number: true,
          in: ['query'],
          errorMessage: 'Skip is invalid'
      },
      limit: {
          required: false,
          default: 10,
          number: true,
          in: ['query'],
          errorMessage: 'Limit is invalid'
      }
  },
  create: {
      id: {
          required: true,
          string: true,
          in: ['body'],
          custom: (Value) => {
              console.log(`Value ${Value}`);
              throw { error: 'Error Occured', message: 'Message' };
          }
      },
      name: {
          required: true,
          regex: '',
          in: ['body'],
          errorMessage: 'Name is required'
<<<<<<< HEAD
      },
      email: {
          required: true,
          regex: /^[A-Za-z0-9._%+-]+@successive.tech$/,
          in: ['body'],
          errorMessage: 'Email is required'
      },
      role: {
          required: true,
          string: true,
          in: ['body'],
          errorMessage: 'Role is required'
      },
      password: {
          required: true,
          string: true,
          in: ['body'],
          errorMessage: 'Password is required'
=======
>>>>>>> 1b9c0b5d9f11a09e0866dd6eaede51de7efbe72b
      }
  },
  Delete: {
      id: {
          required: true,
<<<<<<< HEAD
          string: true,
=======
>>>>>>> 1b9c0b5d9f11a09e0866dd6eaede51de7efbe72b
          errorMessage: 'Id is required',
          in: ['params']
      }
  },
  update: {
      id: {
          required: true,
          string: true,
          in: ['body']
      },
      dataToUpdate: {
          in: ['body'],
          required: true,
          isObject: true,
      }
  },
  login: {
      email: {
          required: true,
          string: true,
          in: ['body']
      },
      password: {
          required: true,
          string: true,
          in: ['body']
      }
  }
};

export default config;
