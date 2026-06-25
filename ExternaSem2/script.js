function calculate() {

    let s1 = Number(document.getElementById("sub1").value);
    let s2 = Number(document.getElementById("sub2").value);
    let s3 = Number(document.getElementById("sub3").value);
    let s4 = Number(document.getElementById("sub4").value);
    let s5 = Number(document.getElementById("sub5").value);

    let total = s1 + s2 + s3 + s4 + s5;
    let average = total / 5;
    let percentage = (total / 500) * 100;

    let grade;

    if (percentage >= 90) {
        grade = "A+";
    } else if (percentage >= 80) {
        grade = "A";
    } else if (percentage >= 70) {
        grade = "B";
    } else if (percentage >= 60) {
        grade = "C";
    } else if (percentage >= 50) {
        grade = "D";
    } else {
        grade = "F";
    }

    document.getElementById("output").innerHTML = `
        <p><strong>Total Marks:</strong> ${total}</p>
        <p><strong>Average:</strong> ${average.toFixed(2)}</p>
        <p><strong>Percentage:</strong> ${percentage.toFixed(2)}%</p>
        <p><strong>Grade:</strong> ${grade}</p>
    `;
}