let express = require('express');
let pool = require('../pool');
let router = express.Router();

const firstPlaceQuery = 
`
SELECT * FROM score ORDER BY score DESC LIMIT 1
`

const getPlayerScoreQuery = 
`
SELECT * FROM score WHERE name = $1
`

const getAllPlayerNamesQuery =
`
SELECT name FROM score
`

const addPlayerScoreQuery =
`
INSERT INTO score(name, score)
VALUES($1, $2)
`

/*
DO NOT CALL THIS Function

Copy paste the reference code instead
*/
function sampleCodes(){
	/*
	This is an example of a callback function.
	
	Executes the SQL query to the database and returns it's results from the database itself.
	*/
	pool.query(firstPlaceQuery, (err, data) => {
		// TODO: console.log(data) to figure how to intepret the data
		// Hint: It's pretty intuitive. Database has tables. Data stored in tables are in forms of records which are ROWS.
	});
	
	/*
	This is another example of executing a SQL query but with parameters.
	*/
	pool.query(getPlayerScoreQuery, ["parameter for the SQL query here"], (err, data) => {
	});
	
	/*
	Another way to render and send data over to view side.
	
	(Extra) In context, we call this the middleware.
	
	res.render('Name of View file to be rendered', 
	{ title: 'Title of the webpage. Equivalent to <title>ABC</title>', key: "value", anotherKey: "Yet another value :3" } 
	);
	*/
}

/* GET home page. */
router.get('/', function(req, res, next) {
	pool.query(firstPlaceQuery, (err, data) => {
		console.log(data);
		res.render('index', { title: 'Express', data: data.rows});
	});
});

/* POST home page. */
router.post('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
