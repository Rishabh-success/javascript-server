"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
export default class database {
    static open(mongoURL) {
        return new Promise((resolve, reject) => {
            console.log('Inside open method');
            mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
                if (err) {
                    console.log(err);
                    reject(err);
                    return;
                }
                
                resolve(null);
            });
        });
    }
    static disconnect() {
        console.log('Inside Disconnect method');
        mongoose.disconnect();
    }
}
exports.default = database;