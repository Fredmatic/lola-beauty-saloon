const bookAppointment = document.getElementById("bookAppointment");
const bookingModal = document.getElementById("bookingModal");
const closeModal = document.getElementById("closeModal");
const bookingForm = document.getElementById("bookingForm");
const customerName = document.getElementById("customerName");
const customerPhone = document.getElementById("customerPhone");
const selectedService = document.getElementById("service");
const serviceButtons = document.querySelectorAll(".service-card button");

const confirmation = document.getElementById("bookingConfirmation");


bookAppointment.addEventListener("click", function () {
    bookingModal.style.display = "flex";

});


bookingForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const name = customerName.value.trim();
    const phone = customerPhone.value.trim();
    const service = selectedService.value;

    if (name === "" || phone === "" || service === "") {
        alert("Please fill in all fields");
        return;
    }
    if (!/^\d{10}$/.test(phone)) {
        alert("Enter a valid 10-digit phone number!");
        return;

    }
    bookingModal.style.display = "none";

    confirmation.innerHTML = `
    <h2>Booking Received</h2>
    <p>Thank you, ${name}</p>
    <p>Phone: ${phone}</p>
    <p>Service: ${service}</p>
    <button id="doneBooking">Done</button>
`;

    confirmation.style.display = "block";

    document.getElementById("doneBooking").addEventListener("click", function () {
        confirmation.innerHTML = "";
        confirmation.style.display = "none";
    });

    bookingForm.reset();

});

serviceButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        selectedService.value = button.dataset.service;

        bookingModal.style.display = "flex";
    });
});

closeModal.addEventListener("click", function () {
    bookingModal.style.display = "none";
});