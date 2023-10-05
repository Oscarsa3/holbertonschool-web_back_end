export default function getStudentsByLocation(students, city) {
  const select = students.filter((std) => {
    if (std.location === city) {
      return std;
    }
    return;
  });
  return select;
}
