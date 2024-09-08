document.addEventListener("DOMContentLoaded", function () {
  const addSkillBtn = document.getElementById(
    "addSkillBtn"
  ) as HTMLButtonElement | null;
  const removeSkillBtn = document.getElementById(
    "removeSkillBtn"
  ) as HTMLButtonElement | null;
  const additionalSkills = document.getElementById(
    "additionalSkills"
  ) as HTMLDivElement | null;

  if (addSkillBtn && additionalSkills) {
    addSkillBtn.addEventListener("click", () => {
      const newSkillBox = document.createElement("div");
      newSkillBox.classList.add("fieldBox");

      const newSkillLabel = document.createElement("label");
      newSkillLabel.textContent = "Additional Skill";

      const newSkillInput = document.createElement("input") as HTMLInputElement;
      newSkillInput.name = "additionalSkills";
      newSkillInput.placeholder = "Enter additional skill";
      newSkillInput.required = true;

      newSkillBox.appendChild(newSkillLabel);
      newSkillBox.appendChild(newSkillInput);

      additionalSkills.appendChild(newSkillBox);
    });
  }

  if (removeSkillBtn && additionalSkills) {
    removeSkillBtn.addEventListener("click", () => {
      if (additionalSkills.children.length > 1) {
        additionalSkills.removeChild(
          additionalSkills.lastElementChild as HTMLElement
        );
      }
    });
  }

  const generateBtn = document.getElementById(
    "btn"
  ) as HTMLButtonElement | null;
  if (generateBtn) {
    generateBtn.addEventListener("click", () => {
      const personalForm = document.getElementById(
        "personalForm"
      ) as HTMLFormElement | null;
      const professionalForm = document.getElementById(
        "professionalForm"
      ) as HTMLFormElement | null;
      const output = document.getElementById("output") as HTMLElement | null;

      if (!personalForm || !professionalForm || !output) {
        console.error("One or more elements not found.");
        return;
      }

      const personalDataObj: { [key: string]: string } = {};
      const professionalDataObj: { [key: string]: string } = {};
      const skills: string[] = [];

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

      document.querySelectorAll("#additionalSkills input").forEach((input) => {
        if ((input as HTMLInputElement).value) {
          skills.push((input as HTMLInputElement).value);
        }
      });

      if (allFieldsFilled) {
        const container2HTML = `
        <div class="container2">
          <div class="personalSide">
            <div class="profile">
              <img src="./images/dummy-profile.png" alt="Profile Image">
            </div>
            <div class="details">
              <div class="field">
                <label>Name: </label>
                <p class="para">${personalDataObj.fullName || ""}</p>
                <input class="editable" type="text" value="${
                  personalDataObj.fullName || ""
                }" readonly />
                <button class="editBtn">Edit</button>
                <button class="doneBtn">Done</button>
              </div>
              <div class="field">
                <label>Email: </label>
                <p class="para">${personalDataObj.email || ""}</p>
                <input class="editable" type="email" value="${
                  personalDataObj.email || ""
                }" readonly />
                <button class="editBtn">Edit</button>
                <button class="doneBtn">Done</button>
              </div>
              <div class="field">
                <label>Phone: </label>
                <p class="para">${personalDataObj.phone || ""}</p>
                <input class="editable" type="text" value="${
                  personalDataObj.phone || ""
                }" readonly />
                <button class="editBtn">Edit</button>
                <button class="doneBtn">Done</button>
              </div>
              <div class="field">
                <label>Address: </label>
                <p class="para">${personalDataObj.address || ""}</p>
                <input class="editable" type="text" value="${
                  personalDataObj.address || ""
                }" readonly />
                <button class="editBtn">Edit</button>
                <button class="doneBtn">Done</button>
              </div>
            </div>
            <div class="social">
              <div class="field">
                <label>Facebook: </label>
                <p class="para">${personalDataObj.facebook || ""}</p>
                <input class="editable" type="text" value="${
                  personalDataObj.facebook || ""
                }" readonly />
                <button class="editBtn">Edit</button>
                <button class="doneBtn">Done</button>
              </div>
              <div class="field">
                <label>LinkedIn: </label>
                <p class="para">${personalDataObj.linkedin || ""}</p>
                <input class="editable" type="text" value="${
                  personalDataObj.linkedin || ""
                }" readonly />
                <button class="editBtn">Edit</button>
                <button class="doneBtn">Done</button>
              </div>
            </div>
          </div>
          <div class="professionalSide">
            <div class="field">
              <h1>Objective</h1>
              <p class="para">${professionalDataObj.Objective || ""}</p>
              <input class="editable" type="text" value="${
                professionalDataObj.Objective || ""
              }" readonly />
              <button class="editBtn">Edit</button>
              <button class="doneBtn">Done</button>
            </div>
            <div class="field">
              <h1>Current Job</h1>
              <p class="para">${professionalDataObj.currentJob || ""}</p>
              <input class="editable" type="text" value="${
                professionalDataObj.currentJob || ""
              }" readonly />
              <button class="editBtn">Edit</button>
              <button class="doneBtn">Done</button>
            </div>
            <div class="field">
              <h1>Experience</h1>
              <p class="para">${professionalDataObj.experience || ""}</p>
              <input class="editable" type="text" value="${
                professionalDataObj.experience || ""
              }" readonly />
              <button class="editBtn">Edit</button>
              <button class="doneBtn">Done</button>
            </div>
            <div class="field">
              <h1>Skills</h1>
              <p class="para">${skills.join(", ")}</p>
              <input class="editable" type="text" value="${skills.join(
                ", "
              )}" readonly />
              <button class="editBtn">Edit</button>
              <button class="doneBtn">Done</button>
            </div>
            <div class="field">
              <h1>Education</h1>
              <p class="para">${
                professionalDataObj.education || "Not provided"
              }</p>
              <input class="editable" type="text" value="${
                professionalDataObj.education || "Not provided"
              }" readonly />
              <button class="editBtn">Edit</button>
              <button class="doneBtn">Done</button>
            </div>
            <div class="field">
              <h1>Certifications</h1>
              <p class="para">${
                professionalDataObj.certifications || "Not provided"
              }</p>
              <input class="editable" type="text" value="${
                professionalDataObj.certifications || "Not provided"
              }" readonly />
              <button class="editBtn">Edit</button>
              <button class="doneBtn">Done</button>
            </div>
          </div>
        </div>`;

        document.body.innerHTML = container2HTML;
        const downloadBtn = document.createElement("button");
        downloadBtn.textContent = "Download PDF";
        downloadBtn.id = "downloadPdfBtn";
        document.body.appendChild(downloadBtn);

        if (downloadBtn) {
          downloadBtn.addEventListener("click", () => {
            window.print();
            downloadBtn.style.display = "none";
          });
        }
        // Add edit functionality
        document.querySelectorAll(".editBtn").forEach((btn) => {
          btn.addEventListener("click", (e) => {
            const button = e.target as HTMLButtonElement;
            const parentDiv = button.parentElement as HTMLElement;
            const para = parentDiv.querySelector(
              ".para"
            ) as HTMLParagraphElement | null;
            const input = parentDiv.querySelector(
              ".editable"
            ) as HTMLInputElement | null;
            const doneBtn = parentDiv.querySelector(
              ".doneBtn"
            ) as HTMLButtonElement | null;

            if (input && para && doneBtn) {
              para.style.display = "none";
              input.style.display = "block";
              doneBtn.style.display = "block";
              input.readOnly = false;
              input.focus();
            }
          });
        });

        document.querySelectorAll(".doneBtn").forEach((btn) => {
          btn.addEventListener("click", (e) => {
            const button = e.target as HTMLButtonElement;
            const parentDiv = button.parentElement as HTMLElement;
            const para = parentDiv.querySelector(
              ".para"
            ) as HTMLParagraphElement | null;
            const input = parentDiv.querySelector(
              ".editable"
            ) as HTMLInputElement | null;
            const doneBtn = parentDiv.querySelector(
              ".doneBtn"
            ) as HTMLButtonElement | null;

            if (input && para && doneBtn) {
              para.textContent = input.value;
              para.style.display = "block";
              input.style.display = "none";
              doneBtn.style.display = "none";
              input.readOnly = true;
            }
          });
        });
      }
    });
  }
});
