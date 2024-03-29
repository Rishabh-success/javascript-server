import * as mongoose from 'mongoose';

export default interface IVersionableDocument extends mongoose.Document {
    deletedAt: Date;
    originalId: string;
    createdAt: Date;
    updatedBy: string;
    createdBy: string;
    deletedBy: string;
}
