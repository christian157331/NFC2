
const contact = {
    firstName: "Christian",
    lastName: "Angeles",
    phone: "09954024903",
    email: "jaychristian157@gmail.com",
    jobTitle: "Computer Engineer"
};

// Set up the phone, message, and email buttons
document.getElementById("call-link").href =
    "tel:" + contact.phone;

document.getElementById("sms-link").href =
    "sms:" + contact.phone;

document.getElementById("email-link").href =
    "mailto:" + contact.email +
    "?subject=" + encodeURIComponent("Hello Christian");

// Download contact information as a VCF file
document.getElementById("save-contact").addEventListener("click", function () {
    const vCard = [
        "BEGIN:VCARD",
        "VERSION:3.0",
        "N:Angeles;Christian;;;",
        "FN:Christian Angeles",
        "TITLE:Computer Engineer",
        "TEL;TYPE=CELL:09954024903",
        "EMAIL:jaychristian157@gmail.com",
        "END:VCARD"
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
    }, 10000);
});
