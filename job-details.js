// Sample data (in a real-world scenario, you would fetch this data from an API or backend)
const jobListings = [
  {
    title: "Software Engineer",
    company: "Tech Corp",
    location: "New York, USA",
    category: "Technical",
    description: "We are looking for a skilled Software Engineer to help build and maintain our web applications."
  },
  {
    title: "Project Manager",
    company: "Business Inc.",
    location: "London, UK",
    category: "Non-Technical",
    description: "Manage project timelines and deliverables."
  },
  {
    title: "Data Analyst",
    company: "Data Solutions",
    location: "Remote",
    category: "Technical",
    description: "Analyze and interpret complex data sets."
  }
];

// Get the job ID from the URL (e.g., job-details.html?jobId=1)
const urlParams = new URLSearchParams(window.location.search);
const jobId = urlParams.get('jobId');

// Function to display job details
function displayJobDetails() {
  const job = jobListings[jobId];

  document.getElementById('jobTitle').textContent = job.title;
  document.getElementById('company').textContent = job.company;
  document.getElementById('location').textContent = job.location;
  document.getElementById('category').textContent = job.category;
  document.getElementById('jobDescription').textContent = job.description;
}

// Apply for the job (This could be extended with more functionality, e.g., saving data to a backend)
document.getElementById('applyBtn').addEventListener('click', function() {
  alert(`You have applied for the job: ${jobListings[jobId].title}`);
});

// Render job details when the page loads
displayJobDetails();

// Event listener for logout button
document.getElementById('logoutBtn').addEventListener('click', function() {
  if (confirm('Are you sure you want to log out?')) {
    localStorage.removeItem('userLoggedIn');
    window.location.href = 'index.html'; // Redirect to login page
  }
});
