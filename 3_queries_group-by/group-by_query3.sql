SELECT cohorts.name as cohort_name, COUNT(students.name) as student_count
FROM students
JOIN cohorts ON cohorts.id = cohort_id
GROUP BY cohort_name
HAVING COUNT(students.name) >= 18
ORDER BY cohort_name;