SELECT DISTINCT teachers.name as name, cohorts.name as cohort, COUNT(assistance_requests.*) as total_assistances
FROM assistance_requests
JOIN students ON students.id = student_id
JOIN teachers ON teachers.id = teacher_id
JOIN cohorts ON cohorts.id = students.cohort_id
WHERE cohorts.name = 'JUL02'
GROUP BY teachers.name, cohorts.name
ORDER BY total_assistances DESC;