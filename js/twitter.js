// npm install --save neo4j-driver
var neo4j = require('neo4j-driver').v1;
var driver = neo4j.driver('bolt://34.203.33.130:36490', neo4j.auth.basic('neo4j', 'example-sheets-spool'));


// Most influential followers
var query = "MATCH \
  (follower:User)-[:FOLLOWS]->(u:User:Me) \
  RETURN  \
  follower.screen_name AS user, follower.followers AS followers \
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
