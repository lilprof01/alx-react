import { Seq } from 'immutable';

const printBestStudents = (obj) => {
  const formatName = (name) => name.charAt(0).toUpperCase() + name.slice(1);

  const grades = Seq(obj)
    .filter((student) => student.score >= 70)
    .map((student) => ({
      ...student,
      firstName: formatName(student.firstName),
      lastName: formatName(student.lastName),
    }))
    .toObject();

  console.log(grades);
};

export default printBestStudents;
