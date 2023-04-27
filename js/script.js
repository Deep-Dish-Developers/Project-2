function confirmSubmit() {
  var confirmMsg = confirm("Are you sure you want to submit this form?");
  if (confirmMsg == true) {
    return true;
  } else {
    return false;
  }
}

const contactForm = document.getElementById('contact');
const contactButton = document.getElementById('contact-button');

contactButton.addEventListener('click', function () {
  contactForm.classList.toggle('hidden');
});

function dropDownMenu() {
  console.log("Button Clicked!");
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}


function showSection(sectionNumber) {
  var sections = document.querySelectorAll('div[id^="section"]');
  for (var i = 0; i < sections.length; i++) {
    if (sections[i].id === "section" + sectionNumber) {
      sections[i].style.display = "block";
    } else {
      sections[i].style.display = "none";
    }
  }
}