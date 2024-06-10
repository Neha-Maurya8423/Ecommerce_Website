function generatePassword() {
    var length = 12; // default password length
    var charset = "";
    var password = "";

    var selectedOption = document.getElementById("select").value;
    if (selectedOption === "alpha") {
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    } else if (selectedOption === "numeric") {
        charset = "0123456789";
    } else {
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    }

    for (var i = 0; i < length; i++) {
        var randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }

    document.getElementById("passwordOutput").value = password;
}
let select = document.getElementById("select")
select.addEventListener('click', function () {
    button.innerText = "Copy";
    button.disabled = false;
    button.style.cursor = "pointer";
}

)
let button = document.getElementById("button")
function copyPassword() {
    var copyText = document.getElementById("passwordOutput");
    copyText.select();
    window.navigator.clipboard.writeText(copyText.value);
    copyText.setSelectionRange(0, 99999); /*For mobile devices*/

    alert("Copied the password: " + copyText.value);
    var button = document.getElementById("button");
    button.innerText = "Copied";
    button.disabled = true;
    button.style.cursor = "not-allowed";


}
