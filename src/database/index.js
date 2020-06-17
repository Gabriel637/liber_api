const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/api_liber", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

module.exports = mongoose;
