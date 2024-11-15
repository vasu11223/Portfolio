const btnEl = document.getElementById("btn");
const dobEl = document.getElementById("dob");
const resEl = document.getElementById("result");

function calculateAge() {
    const bdayValue = dobEl.value;
    if (bdayValue === "") {
        alert("Pls enter your birthday!");
    } else {
        const age = getAge(bdayValue);
        resEl.innerText = `Your age is ${age} ${age > 1 ? "years" : "year"} old`;
    }
}

function getAge(bdayValue){
    const currentDate = new Date();
    const bdayDate = new Date(bdayValue);
    const yearDiff = currentDate.getFullYear() - bdayDate.getFullYear();
    const monthDiff = currentDate.getMonth() - bdayDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && currentDate.getDate() < bdayDate.getDate())) {
        yearDiff--;
    }
    return yearDiff;
}

btnEl.addEventListener("click", calculateAge);