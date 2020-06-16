import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost/api_liber', { useMongoClient: true });
mongoose.Promise = global.Promise;

export default mongoose;
