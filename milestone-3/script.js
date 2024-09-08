document.addEventListener("DOMContentLoaded", function () {
    // Handling skill addition
    var addSkillBtn = document.getElementById("addSkillBtn");
    var removeSkillBtn = document.getElementById("removeSkillBtn");
    var additionalSkills = document.getElementById("additionalSkills");
    if (addSkillBtn && additionalSkills) {
        addSkillBtn.addEventListener("click", function () {
            var newSkillBox = document.createElement("div");
            newSkillBox.classList.add("fieldBox");
            var newSkillLabel = document.createElement("label");
            newSkillLabel.textContent = "Additional Skill";
            var newSkillInput = document.createElement("input");
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
        removeSkillBtn.addEventListener("click", function () {
            if (additionalSkills.children.length > 0) {
                additionalSkills.removeChild(additionalSkills.lastElementChild);
            }
        });
    }
    // Generating output
    var generateBtn = document.getElementById("btn");
    if (generateBtn) {
        generateBtn.addEventListener("click", function () {
            var personalForm = document.getElementById("personalForm");
            var professionalForm = document.getElementById("professionalForm");
            var output = document.getElementById("output");
            if (!personalForm || !professionalForm || !output) {
                console.error("One or more elements not found.");
                return;
            }
            var personalDataObj = {};
            var professionalDataObj = {};
            var skills = [];
            var personalData = new FormData(personalForm);
            var professionalData = new FormData(professionalForm);
            // Check if all required fields are filled
            var allFieldsFilled = true;
            personalData.forEach(function (value, key) {
                if (!value) {
                    allFieldsFilled = false;
                    alert("Please fill out the ".concat(key, " field."));
                }
                personalDataObj[key] = value;
            });
            professionalData.forEach(function (value, key) {
                if (!value) {
                    allFieldsFilled = false;
                    alert("Please fill out the ".concat(key, " field."));
                }
                professionalDataObj[key] = value;
            });
            // Handle skills separately
            document
                .querySelectorAll("#additionalSkills input")
                .forEach(function (input) {
                if (input.value) {
                    skills.push(input.value);
                }
            });
            console.log("Personal Data:", personalDataObj);
            console.log("Professional Data:", professionalDataObj);
            if (allFieldsFilled) {
                document.body.innerHTML = "\n          <div class=\"container2\">\n            <div class=\"personalSide\">\n              <div class=\"profile\">\n                <img src=\"./images/dummy-profile.png\" alt=\"Profile Image\">  \n              </div>\n              <div class=\"details\">\n                <p class=\"name\">Name: ".concat(personalDataObj.fullName || "", "</p>\n                <p class=\"email\">Email: ").concat(personalDataObj.email || "", "</p>\n                <p class=\"phone\">Phone: ").concat(personalDataObj.phone || "", "</p>\n                <p class=\"address\">Address: ").concat(personalDataObj.address || "", "</p>\n              </div>\n              <div class=\"social\">\n                <a class=\"facebook\" href=\"").concat(personalDataObj.facebook || "#", "\">Facebook: ").concat(personalDataObj.facebook || "", "</a>\n                <a class=\"linkedin\" href=\"").concat(personalDataObj.linkedin || "#", "\">LinkedIn: ").concat(personalDataObj.linkedin || "", "</a>\n              </div>\n            </div>\n\n            <div class=\"professionalSide\">\n              <div>\n                <h1>Objective</h1>\n                <p>").concat(professionalDataObj.Objective || "", "</p>\n              </div>\n              <div>\n                <h1>Current Job</h1>\n                <p>").concat(professionalDataObj.currentJob || "", " at ").concat(professionalDataObj.company || "", "</p>\n              </div>\n              <div>\n                <h1>Experience</h1>\n                <p>").concat(professionalDataObj.experience || "", " years</p>\n              </div>\n              <div>\n                <h1>Skills</h1>\n                <p>").concat(skills.join(", "), "</p>\n              </div>\n              <div>\n                <h1>Education</h1>\n                <p>").concat(professionalDataObj.education || "Not provided", "</p>\n              </div>\n              <div>\n                <h1>Certifications</h1>\n                <p>").concat(professionalDataObj.certifications || "Not provided", "</p>\n              </div>\n            </div>\n          </div>");
            }
            else {
                output.innerHTML = "<p class=\"warning\">Please fill out all fields.</p>";
            }
        });
    }
});
