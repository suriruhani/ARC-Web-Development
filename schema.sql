CREATE EXTENSION "pgcrypto";
CREATE EXTENSION "btree_gist";

DROP TABLE IF EXISTS score;

CREATE TABLE score (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name varchar(100) NOT NULL UNIQUE,
  score int NOT NULL
);

INSERT INTO score(name, score) VALUES
('Clyde', 75),('Tom', 50),('Billy', 25),('Brian', 90),('Sally', 100);


