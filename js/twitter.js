// npm install --save neo4j-driver
var neo4j = require('neo4j-driver').v1;
var dotenv = require('dotenv')
dotenv.config()
var [protocol, host, port, user, password] = [process.env.DATABASE_PROTOCOL, process.env.DATABASE_HOST, process.env.DATABASE_PORT, process.env.DATABASE_USER, process.env.DATABASE_PASSWORD]
var driver = neo4j.driver(`${protocol}://${host}:${port}`, neo4j.auth.basic(user, password));



// Most influential followers
var query = "MATCH \
  (follower:User)-[:FOLLOWS]->(u:User:Me) \
  RETURN  \
  follower.screen_name AS user, follower.followers AS followers, follower \
  ORDER BY \
  followers DESC";

var params = {};

let session = driver.session();

session.run(query, params)
  .then(function(result) {
    result.records.forEach(function(record) {
      console.log(record.get('user') + ": " + record.get('followers').toInt());
    })
  })
  .catch(function(error) {
    console.log(error);
  });
