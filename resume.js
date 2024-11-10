"use strict";
//^ 2nd code 
var _a, _b;
(_a = document.getElementById("downloadResumeBtn")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
    const resumeData = JSON.parse(localStorage.getItem("resumeData") || "{}");
    // Create a new jsPDF instance
    const doc = new jsPDF();
    // Add the resume content to the PDF
    doc.setFont("helvetica", "normal");
    doc.text(`Name: ${resumeData.name}`, 10, 10);
    doc.text(`Title: ${resumeData.title}`, 10, 20);
    doc.text(`Email: ${resumeData.email}`, 10, 30);
    doc.text(`Phone: ${resumeData.phone}`, 10, 40);
    doc.text(`Location: ${resumeData.location}`, 10, 50);
    doc.text(`Education: ${resumeData.education}`, 10, 60);
    doc.text(`Experience: ${resumeData.experience}`, 10, 70);
    // Adding skills to the PDF
    const skillsText = resumeData.skills.join(", ");
    doc.text(`Skills: ${skillsText}`, 10, 80);
    // Add Links
    const linksText = resumeData.links.join(", ");
    doc.text(`Links: ${linksText}`, 10, 90);
    // If image exists, embed it into the PDF (optional)
    if (resumeData.image) {
        const imageData = resumeData.image;
        doc.addImage(imageData, "JPEG", 10, 100, 30, 30); // Adds image at specified coordinates and size
    }
    // Save the PDF as a file
    doc.save(`${resumeData.name}_resume.pdf`);
});
window.addEventListener("DOMContentLoaded", () => {
    const resumeData = JSON.parse(localStorage.getItem("resumeData") || "{}");
    if (resumeData) {
        document.getElementById("resumeName").innerText = resumeData.name || "Your Name";
        document.getElementById("resumeTitle").innerText = resumeData.title || "Your Job Title";
        document.getElementById("resumeEmail").innerText = resumeData.email || "Your Email";
        document.getElementById("resumePhone").innerText = resumeData.phone || "Your Phone";
        document.getElementById("resumeLocation").innerText = resumeData.location || "Your Location";
        document.getElementById("resumeEducation").innerText = resumeData.education || "Your Education";
        document.getElementById("resumeExperience").innerText = resumeData.experience || "Your Experience";
        const skillsList = document.getElementById("resumeSkills");
        skillsList.innerHTML = resumeData.skills.map((skill) => `<li>${skill}</li>`).join('');
        const linksContainer = document.getElementById("resumeLinks");
        linksContainer.innerHTML = resumeData.links.map((link) => `<a href="${link}" target="_blank">${link}</a>`).join('');
        const imageElement = document.getElementById("resumeImage");
        if (resumeData.image) {
            imageElement.src = resumeData.image;
        }
    }
    // Add toggle functionality
    const toggleSkillsBtn = document.getElementById("toggleSkillsBtn");
    const skillsSection = document.getElementById("resumeSkills");
    let skillsVisible = true;
    toggleSkillsBtn.addEventListener("click", () => {
        if (skillsVisible) {
            skillsSection.style.display = "none";
            toggleSkillsBtn.innerText = "Show Skills";
        }
        else {
            skillsSection.style.display = "block";
            toggleSkillsBtn.innerText = "Hide Skills";
        }
        skillsVisible = !skillsVisible;
    });
});
window.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const resumeId = urlParams.get('id');
    if (resumeId) {
        const resumeData = JSON.parse(localStorage.getItem(resumeId) || "{}");
        if (resumeData) {
            document.getElementById("resumeName").innerText = resumeData.name || "Your Name";
            document.getElementById("resumeTitle").innerText = resumeData.title || "Your Job Title";
            document.getElementById("resumeEmail").innerText = resumeData.email || "Your Email";
            document.getElementById("resumePhone").innerText = resumeData.phone || "Your Phone";
            document.getElementById("resumeLocation").innerText = resumeData.location || "Your Location";
            document.getElementById("resumeEducation").innerText = resumeData.education || "Your Education";
            document.getElementById("resumeExperience").innerText = resumeData.experience || "Your Experience";
            const skillsList = document.getElementById("resumeSkills");
            skillsList.innerHTML = resumeData.skills.map((skill) => `<li>${skill}</li>`).join('');
            const linksContainer = document.getElementById("resumeLinks");
            linksContainer.innerHTML = resumeData.links.map((link) => `<a href="${link}" target="_blank">${link}</a>`).join('');
            const imageElement = document.getElementById("resumeImage");
            if (resumeData.image) {
                imageElement.src = resumeData.image;
            }
        }
    }
});
window.addEventListener("DOMContentLoaded", () => {
    const editBtn = document.getElementById("editResumeBtn");
    const editModal = document.getElementById("editModal");
    const closeBtn = document.querySelector(".close");
    const saveBtn = document.getElementById("saveResumeBtn");
    const resumeData = JSON.parse(localStorage.getItem("resumeData") || "{}");
    editBtn.onclick = () => {
        document.getElementById("editName").value = resumeData.name || "";
        document.getElementById("editTitle").value = resumeData.title || "";
        document.getElementById("editEmail").value = resumeData.email || "";
        document.getElementById("editPhone").value = resumeData.phone || "";
        document.getElementById("editLocation").value = resumeData.location || "";
        document.getElementById("editEducation").value = resumeData.education || "";
        document.getElementById("editExperience").value = resumeData.experience || "";
        document.getElementById("editSkills").value = (resumeData.skills || []).join(", ");
        document.getElementById("editLinks").value = (resumeData.links || []).join(", ");
        editModal.style.display = "flex";
    };
    closeBtn.onclick = () => {
        editModal.style.display = "none";
    };
    saveBtn.onclick = () => {
        resumeData.name = document.getElementById("editName").value;
        resumeData.title = document.getElementById("editTitle").value;
        resumeData.email = document.getElementById("editEmail").value;
        resumeData.phone = document.getElementById("editPhone").value;
        resumeData.location = document.getElementById("editLocation").value;
        resumeData.education = document.getElementById("editEducation").value;
        resumeData.experience = document.getElementById("editExperience").value;
        resumeData.skills = document.getElementById("editSkills").value.split(",").map(skill => skill.trim());
        resumeData.links = document.getElementById("editLinks").value.split(",").map(link => link.trim());
        localStorage.setItem("resumeData", JSON.stringify(resumeData));
        updateResumeDisplay();
        editModal.style.display = "none";
    };
    function updateResumeDisplay() {
        // Refresh resume display
    }
    window.onclick = (event) => {
        if (event.target === editModal) {
            editModal.style.display = "none";
        }
    };
});
(_b = document.getElementById("downloadResumeBtn")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", () => {
    const resumeContent = document.getElementById("resumeContent");
    // Ensure the content is visible and properly styled
    resumeContent.style.opacity = '1'; // Set full opacity for visibility
    resumeContent.style.visibility = 'visible'; // Make sure it's visible
    resumeContent.style.color = '#fff'; // Set text color to white (for dark background)
    resumeContent.style.backgroundColor = '#000'; // Set background to black
    resumeContent.style.fontWeight = 'bold'; // Make text bold
    resumeContent.style.fontSize = '16px'; // Optional: increase font size for readability
    resumeContent.style.padding = '20px'; // Add padding for better spacing (optional)
    resumeContent.style.boxShadow = 'none'; // Remove any unwanted shadows
    resumeContent.style.border = 'none'; // Remove borders if any
    // Debugging visibility: log styles to see what is applied
    console.log("resumeContent styles:", resumeContent.style);
    // Check if content is really in the DOM
    if (resumeContent) {
        console.log("Content found!", resumeContent.innerHTML);
    }
    else {
        console.log("Content not found.");
    }
    // Set the options for html2pdf
    const options = {
        filename: 'resume.pdf',
        jsPDF: {
            unit: 'mm',
            format: 'a4',
            orientation: 'portrait',
            margins: { top: 10, bottom: 10, left: 10, right: 10 }
        },
        pagebreak: { mode: 'avoid' },
        elementHandlers: {
            '#resumeContent': function (element, renderer) {
                // Force the content to have full opacity
                element.style.opacity = '1';
                element.style.color = '#fff'; // white text
                element.style.backgroundColor = '#000'; // black background
                element.style.fontWeight = 'bold'; // bold text
                return true; // Ensure rendering
            }
        },
        html2canvas: {
            scale: 5,
            logging: true,
            useCORS: true,
            backgroundColor: '#000000' // Ensure the background is black
        }
    };
    // Generate the PDF
    html2pdf().from(resumeContent).set(options).save();
});
