// Function to fetch user profile from the server
async function fetchUserProfile() {
  const token = localStorage.getItem('token');
  
  if (!token) {
    window.location.href = 'login.html';  // Redirect if no token
  }

  try {
    const response = await fetch('http://localhost:3000/profile', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });

    if (response.status === 200) {
      const user = await response.json();
      // Populate profile info on the page
      document.getElementById('profileName').textContent = user.name;
      document.getElementById('profileEmail').textContent = user.email;
      document.getElementById('profileCategory').textContent = user.category || "Not Provided";
      document.getElementById('profileLocation').textContent = user.location || "Not Provided";
    } else {
      alert('Error fetching profile data');
    }
  } catch (error) {
    console.error('Error fetching profile:', error);
    alert('Error fetching profile');
  }
}

// Function to fetch applied jobs from the server
async function fetchAppliedJobs() {
  const token = localStorage.getItem('token');
  
  if (!token) {
    window.location.href = 'login.html';  // Redirect if no token
  }

  try {
    const response = await fetch('http://localhost:3000/applied-jobs', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });

    if (response.status === 200) {
      const jobs = await response.json();
      renderAppliedJobs(jobs);
    } else {
      alert('Error fetching applied jobs');
    }
  } catch (error) {
    console.error('Error fetching jobs:', error);
    alert('Error fetching applied jobs');
  }
}

// Function to render the list of applied jobs
function renderAppliedJobs(jobs) {
  const appliedJobsList = document.getElementById('appliedJobsList');
  appliedJobsList.innerHTML = "";  // Clear any existing list

  if (jobs.length === 0) {
    appliedJobsList.innerHTML = "<li>No jobs applied yet.</li>";
  } else {
    jobs.forEach(job => {
      const jobItem = `
        <li>
          <h3>${job.title}</h3>
          <p><strong>Company:</strong> ${job.company}</p>
          <p><strong>Location:</strong> ${job.location}</p>
          <p><strong>Date Applied:</strong> ${new Date(job.dateApplied).toLocaleDateString()}</p>
        </li>
      `;
      appliedJobsList.innerHTML += jobItem;
    });
  }
}

// Event listener for logout button
document.getElementById('logoutBtn').addEventListener('click', function () {
  localStorage.removeItem('token');  // Remove token from localStorage
  window.location.href = 'login.html'; // Redirect to login page
});

// Call these functions when the page loads
window.onload = function () {
  fetchUserProfile();
  fetchAppliedJobs();
};
