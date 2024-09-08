document.addEventListener("DOMContentLoaded", function () {
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
    if (removeSkillBtn && additionalSkills) {
        removeSkillBtn.addEventListener("click", function () {
            if (additionalSkills.children.length > 1) {
                additionalSkills.removeChild(additionalSkills.lastElementChild);
            }
        });
    }
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
            document.querySelectorAll("#additionalSkills input").forEach(function (input) {
                if (input.value) {
                    skills.push(input.value);
                }
            });
            if (allFieldsFilled) {
                var container2HTML = "\n        <div class=\"container2\">\n          <div class=\"personalSide\">\n            <div class=\"profile\">\n              <img src=\"./images/dummy-profile.png\" alt=\"Profile Image\">\n            </div>\n            <div class=\"details\">\n              <div class=\"field\">\n                <label>Name: </label>\n                <p class=\"para\">".concat(personalDataObj.fullName || "", "</p>\n                <input class=\"editable\" type=\"text\" value=\"").concat(personalDataObj.fullName || "", "\" readonly />\n                <button class=\"editBtn\">Edit</button>\n                <button class=\"doneBtn\">Done</button>\n              </div>\n              <div class=\"field\">\n                <label>Email: </label>\n                <p class=\"para\">").concat(personalDataObj.email || "", "</p>\n                <input class=\"editable\" type=\"email\" value=\"").concat(personalDataObj.email || "", "\" readonly />\n                <button class=\"editBtn\">Edit</button>\n                <button class=\"doneBtn\">Done</button>\n              </div>\n              <div class=\"field\">\n                <label>Phone: </label>\n                <p class=\"para\">").concat(personalDataObj.phone || "", "</p>\n                <input class=\"editable\" type=\"text\" value=\"").concat(personalDataObj.phone || "", "\" readonly />\n                <button class=\"editBtn\">Edit</button>\n                <button class=\"doneBtn\">Done</button>\n              </div>\n              <div class=\"field\">\n                <label>Address: </label>\n                <p class=\"para\">").concat(personalDataObj.address || "", "</p>\n                <input class=\"editable\" type=\"text\" value=\"").concat(personalDataObj.address || "", "\" readonly />\n                <button class=\"editBtn\">Edit</button>\n                <button class=\"doneBtn\">Done</button>\n              </div>\n            </div>\n            <div class=\"social\">\n              <div class=\"field\">\n                <label>Facebook: </label>\n                <p class=\"para\">").concat(personalDataObj.facebook || "", "</p>\n                <input class=\"editable\" type=\"text\" value=\"").concat(personalDataObj.facebook || "", "\" readonly />\n                <button class=\"editBtn\">Edit</button>\n                <button class=\"doneBtn\">Done</button>\n              </div>\n              <div class=\"field\">\n                <label>LinkedIn: </label>\n                <p class=\"para\">").concat(personalDataObj.linkedin || "", "</p>\n                <input class=\"editable\" type=\"text\" value=\"").concat(personalDataObj.linkedin || "", "\" readonly />\n                <button class=\"editBtn\">Edit</button>\n                <button class=\"doneBtn\">Done</button>\n              </div>\n            </div>\n          </div>\n          <div class=\"professionalSide\">\n            <div class=\"field\">\n              <h1>Objective</h1>\n              <p class=\"para\">").concat(professionalDataObj.Objective || "", "</p>\n              <input class=\"editable\" type=\"text\" value=\"").concat(professionalDataObj.Objective || "", "\" readonly />\n              <button class=\"editBtn\">Edit</button>\n              <button class=\"doneBtn\">Done</button>\n            </div>\n            <div class=\"field\">\n              <h1>Current Job</h1>\n              <p class=\"para\">").concat(professionalDataObj.currentJob || "", "</p>\n              <input class=\"editable\" type=\"text\" value=\"").concat(professionalDataObj.currentJob || "", "\" readonly />\n              <button class=\"editBtn\">Edit</button>\n              <button class=\"doneBtn\">Done</button>\n            </div>\n            <div class=\"field\">\n              <h1>Experience</h1>\n              <p class=\"para\">").concat(professionalDataObj.experience || "", "</p>\n              <input class=\"editable\" type=\"text\" value=\"").concat(professionalDataObj.experience || "", "\" readonly />\n              <button class=\"editBtn\">Edit</button>\n              <button class=\"doneBtn\">Done</button>\n            </div>\n            <div class=\"field\">\n              <h1>Skills</h1>\n              <p class=\"para\">").concat(skills.join(", "), "</p>\n              <input class=\"editable\" type=\"text\" value=\"").concat(skills.join(", "), "\" readonly />\n              <button class=\"editBtn\">Edit</button>\n              <button class=\"doneBtn\">Done</button>\n            </div>\n            <div class=\"field\">\n              <h1>Education</h1>\n              <p class=\"para\">").concat(professionalDataObj.education || "Not provided", "</p>\n              <input class=\"editable\" type=\"text\" value=\"").concat(professionalDataObj.education || "Not provided", "\" readonly />\n              <button class=\"editBtn\">Edit</button>\n              <button class=\"doneBtn\">Done</button>\n            </div>\n            <div class=\"field\">\n              <h1>Certifications</h1>\n              <p class=\"para\">").concat(professionalDataObj.certifications || "Not provided", "</p>\n              <input class=\"editable\" type=\"text\" value=\"").concat(professionalDataObj.certifications || "Not provided", "\" readonly />\n              <button class=\"editBtn\">Edit</button>\n              <button class=\"doneBtn\">Done</button>\n            </div>\n          </div>\n        </div>");
                document.body.innerHTML = container2HTML;
                var downloadBtn_1 = document.createElement("button");
                downloadBtn_1.textContent = "Download PDF";
                downloadBtn_1.id = "downloadPdfBtn";
                document.body.appendChild(downloadBtn_1);
                if (downloadBtn_1) {
                    downloadBtn_1.addEventListener("click", function () {
                        window.print();
                        downloadBtn_1.style.display = "none";
                    });
                }
                // Add edit functionality
                document.querySelectorAll(".editBtn").forEach(function (btn) {
                    btn.addEventListener("click", function (e) {
                        var button = e.target;
                        var parentDiv = button.parentElement;
                        var para = parentDiv.querySelector(".para");
                        var input = parentDiv.querySelector(".editable");
                        var doneBtn = parentDiv.querySelector(".doneBtn");
                        if (input && para && doneBtn) {
                            para.style.display = "none";
                            input.style.display = "block";
                            doneBtn.style.display = "block";
                            input.readOnly = false;
                            input.focus();
                        }
                    });
                });
                document.querySelectorAll(".doneBtn").forEach(function (btn) {
                    btn.addEventListener("click", function (e) {
                        var button = e.target;
                        var parentDiv = button.parentElement;
                        var para = parentDiv.querySelector(".para");
                        var input = parentDiv.querySelector(".editable");
                        var doneBtn = parentDiv.querySelector(".doneBtn");
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
