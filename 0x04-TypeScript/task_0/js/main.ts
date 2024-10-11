// Create th estudent interface
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

// Create two students
const student_1: Student = {
    firstName: "Tasie",
    lastName: "Ibiam",
    age: 21,
    location: "Lagos"
}
const student_2: Student = {
    firstName: "Edison",
    lastName: "Emeremnu",
    age: 33,
    location: "Abuja"
}

// Create an array of the students
const studentsList = [student_1, student_2];

// Create an array
const table = document.getElementById('studentTable') as HTMLTableElement;

// Append a new row to the table
studentsList.forEach((student) => {
    const row = table.insertRow(0);
    const nameCell = row.insertCell(0);
    const locationCell = row.insertCell(1);

    // Insert values to the newly created rows
    nameCell.innerHTML = student.firstName;
    locationCell.innerHTML = student.location;
})