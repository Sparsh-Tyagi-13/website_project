// Sample job data (replace with dynamic data in a real application)
const jobs = [
  {
    title: "Software Engineer",
    category: "technical",
    location: "New York, USA",
    description: "Develop and maintain software applications.",
    salary: "$80,000 - $100,000",
  },
  {
    title: "Project Manager",
    category: "non-technical",
    location: "London, UK",
    description: "Manage project timelines and resources.",
    salary: "$60,000 - $80,000",
  },
  {
    title: "Nurse",
    category: "medical",
    location: "California, USA",
    description: "Provide healthcare and patient support.",
    salary: "$50,000 - $70,000",
  }
];

// Function to render job listings
function renderJobs(filteredJobs) {
  const jobListContainer = document.querySelector('.job-list');
  jobListContainer.innerHTML = ""; // Clear the job listings first

  filteredJobs.forEach(job => {
    const jobCard = `
      <div class="job-card">
        <h3>${job.title}</h3>
        <p><strong>Category:</strong> ${job.category}</p>
        <p><strong>Location:</strong> ${job.location}</p>
        <p><strong>Salary:</strong> ${job.salary}</p>
        <p>${job.description}</p>
        <button class="apply-btn">Apply</button>
      </div>
    `;
    jobListContainer.innerHTML += jobCard;
  });
}

// Initial render of all jobs
renderJobs(jobs);

// Event listener for filter button
document.getElementById('filterBtn').addEventListener('click', function() {
  const searchInput = document.getElementById('searchInput').value.toLowerCase();
  const selectedCategory = document.getElementById('categoryFilter').value;

  // Filter jobs based on search and category
  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchInput) || job.location.toLowerCase().includes(searchInput);
    const matchesCategory = selectedCategory === "all" || job.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Re-render the filtered jobs
  renderJobs(filteredJobs);
});

// Event listener for applying to jobs
document.querySelectorAll('.apply-btn').forEach(button => {
  button.addEventListener('click', function() {
    alert('You have applied for the job!');
  });
});
