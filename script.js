document.getElementById('ageForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const day = parseInt(document.getElementById('day').value);
    const month = parseInt(document.getElementById('month').value);
    const year = parseInt(document.getElementById('year').value);

    if (isValidDate(day, month, year)) {
        const age = calculateAge(day, month, year);
        document.getElementById('result').innerText = `You are ${age} years old.`;
    } else {
        document.getElementById('result').innerText = 'Please enter a valid date.';
    }
});

function isValidDate(day, month, year) {
    const date = new Date(year, month - 1, day);
    return date && (date.getMonth() + 1) === month && date.getDate() === day && date.getFullYear() === year;
}

function calculateAge(day, month, year) {
    const today = new Date();
    const birthDate = new Date(year, month - 1, day);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}
