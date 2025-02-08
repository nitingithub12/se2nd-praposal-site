const scriptURL = "https://script.google.com/macros/s/AKfycbzVLYI6SsjJO_-9b_MGKFk0CBHamW6s5R3dcYz-C0jlMaiiE5nZuAMUmtE0nuvINgQYxw/exec";

// Select Elements
const parentElement = document.getElementById("parentElement");
const showMessage = document.getElementById("showMessage");
const changeColor = document.body.style;

// Function for "Yes" Button (Proposal Accepted)
function propose() {
    parentElement.style.display = "none";
    showMessage.style.display = "block";
    changeColor.background = "linear-gradient(116.82deg, #ff94e7 0%, #27cbff 100%)";

    // Send Data to Google Apps Script
    fetch(scriptURL, {
        method: "POST",
        body: JSON.stringify({ name: "Crush ❤️", response: "Yes" }),
        headers: { "Content-Type": "application/json" },
    })
    .then(response => response.text())
    .then(data => console.log("Success:", data))
    .catch(error => console.error("Error:", error));
}

// Function for "No" Button (Proposal Rejected)
function propose1() {
    alert("Are you sure? 😢");
}
