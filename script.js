function calculateCI() {

    // Predefined values
    let P = 10000;   // Principal
    let r = 5;       // Rate (%)
    let n = 1;       // Times compounded per year
    let t = 3;       // Time (years)

    // Convert rate to decimal
    r = r / 100;

    // Formula: A = P(1 + r/n)^(nt)
    let A = P * Math.pow((1 + r / n), (n * t));

    // Compound Interest
    let CI = A - P;

    console.log("The compound interest after " + t + " years is: " + CI.toFixed(2));
}