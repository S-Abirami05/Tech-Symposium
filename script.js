function showFee() {
    let event = document.getElementById("event").value;
    let feeText = document.getElementById("fee");

    let fees = {
        "Paper Presentation": "💰 Fee: ₹200",
        "Project Expo": "💰 Fee: ₹300",
        "Technical Quiz": "💰 Fee: ₹150",
        "Workshop": "💰 Fee: ₹500"
    };

    feeText.innerText = fees[event] || "";
}

function paymentOption() {
    let mode = document.getElementById("paymentMode").value;
    let methods = document.getElementById("paymentMethods");

    if (mode === "online") {
        methods.classList.remove("hidden");
    } else {
        methods.classList.add("hidden");
    }
}

document.getElementById("registrationForm").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("✅ Registration Successful! See you at the Symposium 🎉");
    this.reset();
    document.getElementById("paymentMethods").classList.add("hidden");
    document.getElementById("fee").innerText = "";
});
