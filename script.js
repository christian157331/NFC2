
const contact = {
    firstName: "Christian",
    lastName: "Angeles",
    phone: "09954024903",
    email: "jaychristian157@gmail.com",
    jobTitle: "Computer Engineer"
};

// Use an international phone number format for compatibility
const phoneInternational = "+639954024903";

// Call button
document.getElementById("call-link").href =
    "tel:" + phoneInternational;

// SMS button
document.getElementById("sms-link").href =
    "sms:" + phoneInternational;

// Email button
document.getElementById("email-link").href =
    "mailto:" + contact.email +
    "?subject=" + encodeURIComponent("Hello Christian");

// Save Contact button
document.getElementById("save-contact").addEventListener("click", function () {
    const vCard = [
        "BEGIN:VCARD",
        "VERSION:3.0",
        "N:Angeles;Christian;;;",
        "FN:Christian Angeles",
        "TITLE:Computer Engineer",
        "TEL;TYPE=CELL:+639954024903",
        "EMAIL:jaychristian157@gmail.com",
        "END:VCARD",
        ""
    ].join("\r\n");

    const file = new Blob(
        [vCard],
        { type: "text/vcard;charset=utf-8" }
    );

    const url = URL.createObjectURL(file);
    const link = document.createElement("a");

    link.href = url;
    link.download = "Christian_Angeles.vcf";
    document.body.appendChild(link);
    link.click();
    link.remove();

    setTimeout(function () {
        URL.revokeObjectURL(url);
    }, 60000);
});
