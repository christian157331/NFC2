
const contact = {
    firstName: "Christian",
    lastName: "Angeles",
    phone: "+63XXXXXXXXXX",
    email: "YOUR_EMAIL@example.com",
    jobTitle: "Computer Engineer"
};

const phone = contact.phone;
const email = contact.email;

document.getElementById("call-link").href =
    "tel:" + phone;

document.getElementById("sms-link").href =
    "sms:" + phone;

document.getElementById("email-link").href =
    "mailto:" + email;

document.getElementById("save-contact").addEventListener("click", function () {
    const vCard = [
        "BEGIN:VCARD",
        "VERSION:3.0",
        "N:Angeles;Christian;;;",
        "FN:Christian Angeles",
        "TITLE:Computer Engineer",
        `TEL;TYPE=CELL:${phone}`,
        `EMAIL:${email}`,
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
