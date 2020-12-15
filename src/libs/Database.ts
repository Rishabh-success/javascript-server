import * as mongoose from 'mongoose';
import seedData from './seedData';

class Database {
    static open(MONGO_URL) {
        return new Promise((resolve, reject) => {
            console.log('Inside open Method');
            mongoose.connect('mongodb://localhost:27017/express-training', { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
                if (err) {
                    console.log(err);
                    reject(err);
                    return;
                }
                seedData();
                resolve(null);
            });
        });
    }
    static disconnect() {
        mongoose.disconnect();
    }
}
export default Database;
