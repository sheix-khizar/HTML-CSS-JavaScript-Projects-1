document.getElementById('ageForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const dobInput = document.getElementById('dob').value;
    if (!dobInput) {
        alert('Please select your date of birth.');
        return;
    }

    const dob = new Date(dobInput);
    const today = new Date();
    let age = today.getFullYear() - dob.getFullYear();
    const monthDiff = today.getMonth() - dob.getMonth();

    // If the birthday hasn't occurred yet this year, subtract one from age
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
        age--;
    }

    document.getElementById('age').textContent = age;
});
