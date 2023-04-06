const { Pool } = require('pg');
const args = process.argv.slice(2)

const pool = new Pool({
  user: 'labber',
  password: 'labber',
  host: 'localhost',
  database: 'bootcampx'
});

pool.query(`
SELECT students.id as id, students.name as name, cohorts.name
FROM students
JOIN cohorts ON cohorts.id = cohort_id
WHERE cohorts.name LIKE '%${args[0]}%'
LIMIT ${args[1] || 5};
`)
.then(res => {
  console.log(res.rows);
})
.catch(err => console.error('query error', err.stack));