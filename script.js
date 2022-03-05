function clock() {
    const dateObj = new Date();

    const months = ["January", "Februrary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let box = document.querySelector(".box");

    let hour = dateObj.getHours();
    let minute = dateObj.getMinutes();
    let second = dateObj.getSeconds();

    if(hour > 12) hour -= 12;
    
    if(hour < 10) hour = "0" + hour;

    if(minute < 10) minute = "0" + minute;

    if(second < 10) second = "0" + second;

    let time = `${hour}:${minute}:${second}`;

    let date = dateObj.getDate();
    let day = dateObj.getDay();
    let month = dateObj.getMonth();
    month = months[month];
    day = days[day];
    let year = dateObj.getFullYear();

    let showDate = `<span>${month}, ${date}, ${year}, ${day}</span>`;

    box.innerHTML = `${time} <br> ${showDate}`;
}

console.log(setInterval(clock,1000));





