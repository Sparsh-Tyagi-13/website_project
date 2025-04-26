document.getElementById('profileForm').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent form from submitting normally

  // Get the form data
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const resume = document.getElementById('resume').files[0]; // File input
  const category = document.getElementById('category').value;
  const workingHours = document.getElementById('workingHours').value;
  const workType = document.getElementById('workType').value;
  const salary = document.getElementById('salary').value;
  const location = document.getElementById('location').value;

  // Basic validation
  if (!name || !email || !resume || !category || !workingHours || !workType || !salary || !location) {
    alert('Please fill in all fields!');
    return;
  }

  // Simulate profile submission (this would be saved in the backend in a real application)
  alert('Profile submitted successfully!');

  // Log the data (You can use localStorage or send this to a backend in real applications)
  console.log({
    name,
    email,
    resume: resume.name, // Log the name of the uploaded file (resume)
    category,
    workingHours,
    workType,
    salary,
    location
  });

  // Optionally, save the form data to localStorage for later (if needed)
  localStorage.setItem('userName', name);
  localStorage.setItem('userEmail', email);
  localStorage.setItem('userCategory', category);
  localStorage.setItem('userWorkingHours', workingHours);
  localStorage.setItem('userWorkType', workType);
  localStorage.setItem('userSalary', salary);
  localStorage.setItem('userLocation', location);
  
  // If you need to handle the file (e.g., upload it to the server later):
  if (resume) {
    localStorage.setItem('userResume', resume.name); // Save the file name to localStorage temporarily
  }

  // Optionally redirect to a jobs page after profile submission
  window.location.href = 'jobs.html'; // Assuming you have a jobs.html page
});
