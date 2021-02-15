import UserRepository from '../repositories/user/UserRepository';

const userRepository: UserRepository = new UserRepository();
export default () => {
    userRepository.count()
        .then(res => {
            if (res === 0) {
                console.log('Data seeding in progress');
                userRepository.create({
                    name: 'head-trainer',
                    email: 'headtrainer@successive.tech',
                    role: 'head-trainer',
                    password: 'Training@123'
                }, 'admin');
                userRepository.create({
                    name: 'trainer',
                    email: 'trainer@successive.tech',
                    role: 'trainer',
                    password: 'Training@123'
                },'admin');
            }
        })
        .catch(err => console.log(err));
};
