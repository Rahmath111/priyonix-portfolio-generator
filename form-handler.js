// form-handler.js

// Listen for form submit
window.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("portfolioForm");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const photo = form.photo.files[0];
    const name = form.name.value.trim();
    const description = form.description.value.trim();

    const socials = {
      linkedin: form.linkedin.value.trim(),
      github: form.github.value.trim(),
      instagram: form.instagram.value.trim(),
    };

    const skills = form.skills.value
      .split(",")
      .map((skill) => skill.trim())
      .filter(Boolean);

    const projects = [];
    for (let i = 1; i <= 3; i++) {
      const pname = form[`projectName${i}`].value.trim();
      const pdesc = form[`projectDesc${i}`].value.trim();
      const ptools = form[`projectTools${i}`].value.trim();
      const plink = form[`projectLink${i}`].value.trim();
      if (pname || pdesc || ptools || plink) {
        projects.push({ name: pname, desc: pdesc, tools: ptools, link: plink });
      }
    }

    const contact = {
      name: form.contactName.value.trim(),
      phone: form.contactPhone.value.trim(),
      email: form.contactEmail.value.trim(),
      message: form.contactMessage.value.trim(),
    };

    // Convert image to Base64 if uploaded
    let photoURL = "https://cdn-icons-png.flaticon.com/512/149/149071.png";
    if (photo) {
      const reader = new FileReader();
      reader.onload = function () {
        photoURL = reader.result;
        saveAndRedirect();
      };
      reader.readAsDataURL(photo);
    } else {
      saveAndRedirect();
    }

    function saveAndRedirect() {
      const portfolioData = {
        name,
        description,
        socials,
        skills,
        projects,
        contact,
        photoURL,
      };

      localStorage.setItem("portfolioData", JSON.stringify(portfolioData));
      window.location.href = "index.html";
    }
  });
});
