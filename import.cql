CREATE CONSTRAINT ON(u:User)
ASSERT u.id IS unique;
:param keysToKeep => ["name", "username", "bio", "following", "followers"];
CALL apoc.load.json("https://gist.github.com/mneedham/3c6a59fb5e7d87e20a2f5f1ae4fa2920/raw/9d7c57997c09b3a105556adb6c6f1819792a4db4/query.json")
YIELD value
MERGE (u:User {id: value.user.id })
SET u += value.user
FOREACH (following IN value.following |
  MERGE (f1:User {id: following})
  MERGE (u)-[:FOLLOWS]->(f1))
FOREACH (follower IN value.followers |
  MERGE(f2:User {id: follower})
  MERGE (u)<-[:FOLLOWS]-(f2));
