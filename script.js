// Get form elements
const studentForm = document.getElementById('student-form');
const nameInput = document.getElementById('name-input');
const ageInput = document.getElementById('age-input');
const classSelect = document.getElementById('class-select');

// Get filter elements
const filterNameInput = document.getElementById('filter-name-input');
const filterAgeInput = document.getElementById('filter-age-input');
const filterClassSelect = document.getElementById('filter-class-select');

// Get student list element
const studentList = document.querySelector('.student-list');

// Student data
const students = [];

// Function to add a student to the list
const addStudent = (name, age, studentClass) => {
  const student = { name, age, studentClass };
  students.push(student);
  updateStudentList();
};

// Function to update the student list
const updateStudentList = () => {
  // Clear the student list
  studentList.innerHTML = '';

  // Get filter values
  const filterName = filterNameInput.value.toLowerCase();
  const filterAge = parseInt(filterAgeInput.value);
  const filterClass = filterClassSelect.value;

  // Filter and render students
  students.forEach((student) => {
    const { name, age, studentClass } = student;
    if (
      name.toLowerCase().includes(filterName) &&
      (isNaN(filterAge) || age === filterAge) &&
      (filterClass === '' || studentClass === filterClass)
    ) {
      const listItem = document.createElement('li');
      listItem.textContent = `${name}, Age: ${age}, Class: ${studentClass}`;
      studentList.appendChild(listItem);
    }
  });
};

// Event listener for form submission
studentForm.addEventListener('submit', (event) => {
  event.preventDefault();

  // Get form input values
  const name = nameInput.value;
  const age = parseInt(ageInput.value);
  const studentClass = classSelect.value;

  // Add student to the list
  addStudent(name, age, studentClass);

  // Reset form
  nameInput.value = '';
  ageInput.value = '';
  classSelect.value = '';
});

// Event listeners for filter inputs
filterNameInput.addEventListener('input', updateStudentList);
filterAgeInput.addEventListener('input', updateStudentList);
filterClassSelect.addEventListener('change', updateStudentList);
