const { Pool } = require('pg');
const args = process.argv.slice(2)

const pool = new Pool({
  user: 'labber',
  password: 'labber',
  host: 'localhost',
  database: 'bootcampx'
});

pool.query(`
SELECT DISTINCT teachers.name as name, cohorts.name as cohort
FROM assistance_requests
JOIN students ON students.id = student_id
JOIN teachers ON teachers.id = teacher_id
JOIN cohorts ON cohorts.id = students.cohort_id
WHERE cohorts.name LIKE '%${args[0]}%';
`)
.then(res => {
  console.log(res.rows);
})
.catch(err => console.error('query error', err.stack));