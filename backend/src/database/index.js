const mongoose = require('mongoose');

const MONGODB_URL = 'mongodb+srv://user_test:redentor97*@dbgarnet-salwg.gcp.mongodb.net/garnet?retryWrites=true&w=majority'

mongoose.set('useFindAndModify', false);

mongoose.connect(MONGODB_URL, 
{   
    useCreateIndex: true, 
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(db => console.log('DB está conectado ....'))
.catch(err => console.error(err));

mongoose.Promise = global.Promise;

module.exports = mongoose;