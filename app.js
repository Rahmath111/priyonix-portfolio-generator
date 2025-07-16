document.addEventListener("DOMContentLoaded", () => {
  const data = JSON.parse(localStorage.getItem("portfolioData"));
  if (!data) {
    document.body.innerHTML = "<h2>No portfolio data found. Please fill the form first.</h2>";
    return;
  }

  document.getElementById("profilePhoto").src = data.photoURL;
  document.getElementById("userName").textContent = data.name;
  document.getElementById("userDescription").textContent = data.description;

  document.getElementById("linkedin").href = data.socials.linkedin;
  document.getElementById("github").href = data.socials.github;
  document.getElementById("instagram").href = data.socials.instagram;

  const skillsList = document.getElementById("skillsList");
  skillsList.innerHTML = "";
  data.skills.forEach(skill => {
    const li = document.createElement("li");
    li.textContent = skill;
    skillsList.appendChild(li);
  });

  const projectContainer = document.getElementById("projectsContainer");
  projectContainer.innerHTML = "";
  data.projects.forEach(proj => {
    const div = document.createElement("div");
    div.className = "project-card";
    div.innerHTML = `
      <h3>${proj.name}</h3>
      <p>${proj.desc}</p>
      <p><strong>Tools:</strong> ${proj.tools}</p>
      <p><a href="${proj.link}" target="_blank">🔗 View Project</a></p>
    `;
    projectContainer.appendChild(div);
  });

  document.getElementById("contactName").textContent = data.contact.name;
  document.getElementById("contactPhone").textContent = data.contact.phone;
  document.getElementById("contactEmail").textContent = data.contact.email;
  document.getElementById("contactMessage").textContent = data.contact.message;
});
