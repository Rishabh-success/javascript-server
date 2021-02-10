import * as mongoose from 'mongoose';
import seedData from './seedData';

class Database {
    static open(mongo_url) {
        return new Promise((resolve, reject) => {
<<<<<<< HEAD
            mongoose.connect(mongo_url, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
=======
            mongoose.connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
>>>>>>> 1b9c0b5d9f11a09e0866dd6eaede51de7efbe72b
                if (err) {
                    console.log(err);
                    reject(err);
                    return;
                }
                console.log("database Connected");
                seedData();
                resolve(undefined);
            });
        });
    }
    static disconnect() {
        mongoose.disconnect(err => {
            if (err) {
                console.log(err);
            }
        console.log('Database Disconnected!');
    });
    }
}
export default Database;
