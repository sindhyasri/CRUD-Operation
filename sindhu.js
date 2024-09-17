
// Get the form and table body elements
const form = document.getElementById('loginForm');
const tableBody = document.querySelector('#dataTable tbody');

// Handle form submission
form.addEventListener('submit', function (event) {
event.preventDefault();

// Get form data
const name = document.getElementById('name').value;
const email = document.getElementById('email').value;
const mobile = document.getElementById('mobile').value;

// Create a new row in the table
const row = document.createElement('tr');
row.innerHTML = `
<td>${name}</td>
<td>${email}</td>
<td>${mobile}</td>
<td>
    <button onclick="editRow(this)">Edit</button>
    <button onclick="deleteRow(this)">Delete</button>
</td>
`;

// Append the new row to the table body
tableBody.appendChild(row);

// Clear form fields
form.reset();
});

// Function to delete a row
function deleteRow(button) {
const row = button.parentElement.parentElement;
tableBody.removeChild(row);
}

// Function to edit a row
function editRow(button) {
const row = button.parentElement.parentElement;
const cells = row.querySelectorAll('td');

// Fill the form with current row data
document.getElementById('name').value = cells[0].innerText;
document.getElementById('email').value = cells[1].innerText;
document.getElementById('mobile').value = cells[2].innerText;

// Remove the row from the table
tableBody.removeChild(row);
}

