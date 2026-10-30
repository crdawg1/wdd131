const form = document.querySelector("#ticketForm");
const firstNameInput = document.querySelector("#firstName");
const lastNameInput = document.querySelector("#lastName");
const emailInput = document.querySelector("#email");
const typeSelect = document.querySelector("#attendeeType");
const dateInput = document.querySelector("#eventDate");
const extraField = document.querySelector("#extraField");
const extraLabel = document.querySelector("#extraLabel");
const extraInput = document.querySelector("#extraInput");
const errorsBox = document.querySelector("#errors");
const ticketBox = document.querySelector("#ticket");
 
const EVENT_CODE = "EVENT131";
 
// Today as YYYY-MM-DD in local time (toISOString would use UTC)
function todayString() {
  const now = new Date();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${now.getFullYear()}-${month}-${day}`;
}
 
// Show or hide the Student I# / Access Code field
function handleTypeChange() {
  const type = typeSelect.value;
  extraInput.value = "";
 
  if (type === "student") {
    extraLabel.textContent = "Student I#";
    extraInput.inputMode = "numeric";
    extraInput.maxLength = 9;
    extraField.classList.remove("hidden");
  } else if (type === "guest") {
    extraLabel.textContent = "Access Code";
    extraInput.inputMode = "text";
    extraInput.removeAttribute("maxlength");
    extraField.classList.remove("hidden");
  } else {
    extraField.classList.add("hidden");
  }
}
 
function validate() {
  const errors = [];
 
  if (firstNameInput.value.trim() === "") {
    errors.push("Enter your first name.");
  }
 
  if (lastNameInput.value.trim() === "") {
    errors.push("Enter your last name.");
  }
 
  if (!/^\S+@\S+\.\S+$/.test(emailInput.value.trim())) {
    errors.push("Enter a valid email address.");
  }
 
  const type = typeSelect.value;
  const extra = extraInput.value.trim();
 
  if (type === "") {
    errors.push("Choose whether you are a student or a guest.");
  } else if (type === "student") {
    if (!/^\d{9}$/.test(extra)) {
      errors.push("Student I# must be exactly 9 digits.");
    }
  } else if (type === "guest") {
    if (extra !== EVENT_CODE) {
      errors.push("Access Code is not valid.");
    }
  }
 
  if (dateInput.value === "") {
    errors.push("Choose an event date.");
  } else if (dateInput.value <= todayString()) {
    errors.push("The event date must be after today.");
  }
 
  return errors;
}
 
function showErrors(errors) {
  ticketBox.classList.add("hidden");
  errorsBox.innerHTML = "";
  errors.forEach(message => {
    const p = document.createElement("p");
    p.textContent = message;
    errorsBox.appendChild(p);
  });
}
 
function addRow(list, term, value) {
  const dt = document.createElement("dt");
  dt.textContent = term;
  const dd = document.createElement("dd");
  dd.textContent = value;
  list.append(dt, dd);
}
 
function showTicket() {
  errorsBox.innerHTML = "";
 
  const [year, month, day] = dateInput.value.split("-").map(Number);
  const prettyDate = new Date(year, month - 1, day).toLocaleDateString(undefined, {
    weekday: "long", year: "numeric", month: "long", day: "numeric"
  });
 
  const type = typeSelect.value;
  const heading = document.createElement("h2");
  heading.textContent = "Your Ticket";
 
  const list = document.createElement("dl");
  addRow(list, "Name", `${firstNameInput.value.trim()} ${lastNameInput.value.trim()}`);
  addRow(list, "Email", emailInput.value.trim());
  addRow(list, "Date", prettyDate);
  addRow(list, "Type", type === "student" ? "Student" : "Guest");
  if (type === "student") {
    addRow(list, "Student I#", extraInput.value.trim());
  }
 
  ticketBox.replaceChildren(heading, list);
  ticketBox.classList.remove("hidden");
}
 
function handleSubmit(event) {
  event.preventDefault();
  const errors = validate();
  if (errors.length > 0) {
    showErrors(errors);
  } else {
    showTicket();
  }
}
 
dateInput.min = todayString();
typeSelect.addEventListener("change", handleTypeChange);
form.addEventListener("submit", handleSubmit);