document.addEventListener("DOMContentLoaded", function () {
  // Handling skill addition
  const addSkillBtn = document.getElementById("addSkillBtn");
  const removeSkillBtn = document.getElementById("removeSkillBtn");
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
  if (removeSkillBtn && additionalSkills) {
    removeSkillBtn.addEventListener("click", () => {
      if (additionalSkills.children.length > 0) {
        additionalSkills.removeChild(additionalSkills.lastElementChild as Node);
      }
    });
  }

  // Generating output
  const generateBtn = document.getElementById("btn");
  if (generateBtn) {
    generateBtn.addEventListener("click", () => {
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
      const skills: string[] = [];

      const personalData = new FormData(personalForm);
      const professionalData = new FormData(professionalForm);

      // Check if all required fields are filled
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

      // Handle skills separately
      document
        .querySelectorAll("#additionalSkills input")
        .forEach((input: any) => {
          if (input.value) {
            skills.push(input.value as string);
          }
        });

      console.log("Personal Data:", personalDataObj);
      console.log("Professional Data:", professionalDataObj);

      if (allFieldsFilled) {
        document.body.innerHTML = `
          <div class="container2">
            <div class="personalSide">
              <div class="profile">
                <img src="./images/dummy-profile.png" alt="Profile Image">  
              </div>
              <div class="details">
                <p class="name">Name: ${personalDataObj.fullName || ""}</p>
                <p class="email">Email: ${personalDataObj.email || ""}</p>
                <p class="phone">Phone: ${personalDataObj.phone || ""}</p>
                <p class="address">Address: ${personalDataObj.address || ""}</p>
              </div>
              <div class="social">
                <a class="facebook" href="${
                  personalDataObj.facebook || "#"
                }">Facebook: ${personalDataObj.facebook || ""}</a>
                <a class="linkedin" href="${
                  personalDataObj.linkedin || "#"
                }">LinkedIn: ${personalDataObj.linkedin || ""}</a>
              </div>
            </div>

            <div class="professionalSide">
              <div>
                <h1>Objective</h1>
                <p>${professionalDataObj.Objective || ""}</p>
              </div>
              <div>
                <h1>Current Job</h1>
                <p>${professionalDataObj.currentJob || ""} at ${
          professionalDataObj.company || ""
        }</p>
              </div>
              <div>
                <h1>Experience</h1>
                <p>${professionalDataObj.experience || ""} years</p>
              </div>
              <div>
                <h1>Skills</h1>
                <p>${skills.join(", ")}</p>
              </div>
              <div>
                <h1>Education</h1>
                <p>${professionalDataObj.education || "Not provided"}</p>
              </div>
              <div>
                <h1>Certifications</h1>
                <p>${professionalDataObj.certifications || "Not provided"}</p>
              </div>
            </div>
          </div>`;
      } else {
        output.innerHTML = `<p class="warning">Please fill out all fields.</p>`;
      }
    });
  }
});
