document.getElementById("submit").addEventListener("click", calculatePrice);

function calculatePrice() {

    const education = document.getElementById("education").value;
    let edCof = 1;
    if (education === "bachelor") edCof = 1.5;
    else if (education === "college") edCof = 1.2;
    else if (education === "high_school") edCof = 1.05;
    else if (education === "middle_school") edCof = 0.9;

    const networth = document.getElementById("networth").value;
    let nwCof = 1;
    if (networth === "upper_class") nwCof = 2;
    else if (networth === "middle_class") nwCof = 1.5;
    else if (networth === "lower_class") nwCof = 1.2;

    const caste = document.getElementById("caste").value;
    let casteBonus = parseInt(caste);

    const skills = document.getElementById("skills").value;
    let skillsBonus = parseInt(skills);

    const ageRadio = document.querySelector('input[name="age"]:checked');
    let ageCof = 1;
    if (ageRadio) {
        const age = ageRadio.value;
        if (age === "18-23") ageCof = 1.5;
        else if (age === "24-27") ageCof = 1.2;
        else if (age === "28+") ageCof = 0.95;
    }

    const reputationChecks = document.querySelectorAll('input[name="reputation"]:checked');
    let repCof = 1;
    reputationChecks.forEach(check => {
        if (check.value === "parents") repCof *= 0.85;
        if (check.value === "character") repCof *= 0.9;
        if (check.value === "gossips") repCof -= 20;
    });

    let finalPrice = 100 * edCof * nwCof * ageCof * repCof;
    finalPrice += casteBonus + skillsBonus;
    alert("Final Price: $" + finalPrice.toFixed(2));
}
