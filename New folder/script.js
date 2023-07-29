document.addEventListener("DOMContentLoaded", () => {
  // Get the buttons and sections
  const homeButton = document.querySelector('a[href="#home"]');
  const aboutButton = document.querySelector('a[href="#about"]');
  const projectsButton = document.querySelector('a[href="#projects"]');
  const contactButton = document.querySelector('a[href="#contact"]');
  const homeSection = document.getElementById("home");
  const aboutSection = document.getElementById("about");
  const projectsSection = document.getElementById("projects");
  const contactSection = document.getElementById("contact");

  // Get the search form and question list
  const searchForm = document.getElementById("search-form");
  const questionList = document.getElementById("question-list");

  // Add click event listeners to the buttons
  homeButton.addEventListener("click", () => {
    showSection("home");
  });

  aboutButton.addEventListener("click", () => {
    showSection("about");
  });

  projectsButton.addEventListener("click", () => {
    showSection("projects");
  });

  contactButton.addEventListener("click", () => {
    showSection("contact");
  });

  // Add submit event listener to the search form
  searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const questionInput = searchForm.querySelector("input[name='question']");
    const question = questionInput.value;

    // Send the question to the server using AJAX or fetch API
    // Handle the response and update the question list

    // For now, we'll simply add the question to the list
    const questionElement = document.createElement("p");
    questionElement.textContent = question;
    questionList.appendChild(questionElement);

    // Clear the input field
    questionInput.value = "";
  });

  // Fetch the questions and update the question list
  getQuestions();
});

function showSection(sectionId) {
  const sections = document.querySelectorAll("section");
  sections.forEach((section) => {
    if (section.id === sectionId) {
      section.style.display = "block";
    } else {
      section.style.display = "none";
    }
  });
}

function getQuestions() {
  // Clear the existing question list
  questionList.innerHTML = "";

  // Fetch the questions from the server
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "get_questions.php", true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
      const questions = JSON.parse(xhr.responseText);
      questions.forEach((question) => {
        const questionElement = document.createElement("p");
        questionElement.textContent = question;
        questionList.appendChild(questionElement);
      });
    }
  };
  xhr.send();
}
