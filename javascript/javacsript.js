const lname = document.getElementById("lname");
const lnameError = document.getElementById("lnameError");

lname.addEventListener("blur", function () {
    if (lname.value.trim() === "") {
        lnameError.textContent = "Last name is required.";
    } else {
        lnameError.textContent = "";
    }
});
document.getElementById("donationForm")
.addEventListener("submit", function(event) {

    event.preventDefault();

    const params = {
        first_name: document.getElementById("fname").value,
        last_name: document.getElementById("lname").value,
        email: document.getElementById("Email").value,
        phone: document.getElementById("number").value,
        amount: document.getElementById("amount").value,
        message: document.getElementById("Words").value
    };

    emailjs.send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        params
    )
    .then(function() {
        alert("Thank you! Your donation form has been sent.");
        document.getElementById("donationForm").reset();
    })
    .catch(function(error) {
        alert("Failed to send form.");
        console.log(error);
    });
});

document.getElementById("donationForm")
.addEventListener("submit", function(event) {

    event.preventDefault();

    let firstName = document.getElementById("fname").value;
    let lastName = document.getElementById("lname").value;
    let email = document.getElementById("Email").value;

    let subject = "New Donation Form";
    let body =
`First Name: ${firstName}
Last Name: ${lastName}
Email: ${email}`;

    window.location.href =
    `mailto:ngo@example.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});
const pages = {
    "home": "index.html",
    "about": "About.html",
    "programs": "Programs.html",
    "contacts": "Contact.html",
    "contact": "Contact.html",
    "donate": "Donate.html",
    "news": "News.html"
};

function searchPage() {
    const input = document
        .getElementById("searchInput")
        .value
        .toLowerCase()
        .trim();

    if (pages[input]) {
        window.location.href = pages[input];
    } else {
        alert("Page not found. Try Home, About, Programs, Contacts, Donate, or News.");
    }
}

document
    .getElementById("searchBtn")
    .addEventListener("click", searchPage);

document
    .getElementById("searchInput")
    .addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            searchPage();
        }
    });

