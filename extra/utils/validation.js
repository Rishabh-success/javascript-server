const users = [
    {
        traineeEmail: 'trainee1@successive.tech',
        reviewerEmail: 'reviewer1@successive.tech',
        },
        {
        traineeEmail: 'trainee2successive.tech',
        reviewerEmail: 'reviewer2@succesive.tech',
        }   
];

function validateEmail(email) {
    const pattern = /^([a-zA-Z0-9\.-]+)@(successive).(tech)$/;
    return (pattern.test(email));
}
function validateUsers(userData) {
    let valid = 0;
    let invalid= 0;
    userData.forEach(userData => {
        const { traineeEmail, reviewerEmail } = userData;
        if (validateEmail(traineeEmail) && validateEmail(reviewerEmail)) {
           valid+=1;
        } else {
            invalid+=1;
        }
    });
    console.log(users);
    console.log("Number of valid user",valid);
    console.log("Number of Invalid user", invalid);
}
validateUsers(users);
