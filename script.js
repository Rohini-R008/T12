function calculateCI() {

    // Get values from input fields
    let P = document.getElementById("principal").value;
    let r = document.getElementById("rate").value;
    let n = document.getElementById("frequency").value;
    let t = document.getElementById("time").value;

    // Convert to numbers
    P = parseFloat(P);
    r = parseFloat(r);
    n = parseFloat(n);
    t = parseFloat(t);

    // Validation
    if (isNaN(P) || isNaN(r) || isNaN(n) || isNaN(t)) {
        document.getElementById("result").innerText = "Please enter all values correctly";
        return;
    }

    // Convert rate to decimal
    r = r / 100;

    // Apply formula
    let A = P * Math.pow((1 + r / n), (n * t));
    let CI = A - P;

    // Display result
    document.getElementById("result").innerText =
        "Compound Interest = " + CI.toFixed(2);
}