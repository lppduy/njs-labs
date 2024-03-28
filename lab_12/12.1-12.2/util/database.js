const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const MONGO_URI = 'mongodb+srv://lppduy:1234@cluster0.eefxpn0.mongodb.net/shop?retryWrites=true&w=majority&appName=Cluster0'

let _db;

const mongoConnect = callback => {
  MongoClient.connect(
    MONGO_URI
  )
    .then(client => {
      console.log('Connected!');
      _db = client.db();
      callback();
    })
    .catch(err => {
      console.log(err);
      throw err;
    });
};

const getDb = () => {
  if (_db) {
    return _db;
  }
  throw 'No database found!';
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
