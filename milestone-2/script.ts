document.addEventListener("DOMContentLoaded", function () {
  // Handling skill addition
  const addSkillBtn = document.getElementById("addSkillBtn");
  const additionalSkills = document.getElementById("additionalSkills");

  if (addSkillBtn && additionalSkills) {
    addSkillBtn.addEventListener("click", () => {
      const newSkillBox = document.createElement("div");
      newSkillBox.classList.add("fieldBox");

      const newSkillLabel = document.createElement("label");
      newSkillLabel.textContent = "Additional Skill";

      const newSkillInput = document.createElement("input");
      newSkillInput.name = "additionalSkills";
      newSkillInput.placeholder = "Enter additional skill";
      newSkillInput.required = true;

      newSkillBox.appendChild(newSkillLabel);
      newSkillBox.appendChild(newSkillInput);

      additionalSkills.appendChild(newSkillBox);
    });
  }

  // Handling skill removal
  const removeSkillBtn = document.getElementById("removeSkillBtn");
  if (removeSkillBtn && additionalSkills) {
    removeSkillBtn.addEventListener("click", () => {
      if (additionalSkills.children.length > 0) {
        additionalSkills.removeChild(additionalSkills.lastElementChild as Node);
      }
    });
  }

  // Generating output
  const generateBtn = document.getElementById("btn");
  generateBtn?.addEventListener("click", () => {
    const personalForm = document.getElementById(
      "personalForm"
    ) as HTMLFormElement | null;
    const professionalForm = document.getElementById(
      "professionalForm"
    ) as HTMLFormElement | null;
    const output = document.getElementById("output");

    if (!personalForm || !professionalForm || !output) {
      console.error("One or more elements not found.");
      return;
    }

    const personalDataObj: { [key: string]: string } = {};
    const professionalDataObj: { [key: string]: string } = {};

    const personalData = new FormData(personalForm);
    const professionalData = new FormData(professionalForm);

    let allFieldsFilled = true;

    personalData.forEach((value, key) => {
      if (!value) {
        allFieldsFilled = false;
        alert(`Please fill out the ${key} field.`);
      }
      personalDataObj[key] = value as string;
    });

    professionalData.forEach((value, key) => {
      if (!value) {
        allFieldsFilled = false;
        alert(`Please fill out the ${key} field.`);
      }
      professionalDataObj[key] = value as string;
    });

    if (allFieldsFilled) {
      document.body.innerHTML = `
        <div class="container2">
          <div class="personalSide">
            <div class="profile">
              <img src="./images/dummy-profile.png" alt="Profile Image">  
            </div>
            <div class="details">
              <p class="name">Name: ${personalDataObj.fullname || ""}</p>
              <p class="email">Email: ${personalDataObj.email || ""}</p>
              <p class="phone">Phone: ${personalDataObj.phone || ""}</p>
              <p class="address">Address: ${personalDataObj.address || ""}</p>
            </div>
            <div class="social">
              <a class="facebook" href="#">Facebook: ${
                personalDataObj.facebook || ""
              }</a>
              <a class="linkedin" href="#">LinkedIn: ${
                personalDataObj.linkedin || ""
              }</a>
            </div>
          </div>

          <div class="professionalSide">
            <div>
              <h1>Objective</h1>
              <p>${professionalDataObj.Objective || ""}</p>
            </div>
            <div>
              <h1>Current Job</h1>
              <p>${professionalDataObj.currentJob || ""}</p>
            </div>
            <div>
              <h1>Company Name</h1>
              <p>${professionalDataObj.company || ""}</p>
            </div>
            <div>
              <h1>Years of Experience</h1>
              <p>${professionalDataObj.experience || ""}</p>
            </div>
            <div>
              <h1>Skills</h1>
              <p>${professionalDataObj.additionalSkills || ""}</p>
            </div>
            <div>
              <h1>Education</h1>
              <p>${professionalDataObj.education || ""}</p>
            </div>
            <div>
              <h1>Certifications</h1>
              <p>${professionalDataObj.certifications || ""}</p>
            </div>
          </div>
        </div>`;
    }
  });
});
