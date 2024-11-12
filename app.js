const timeEl = document.querySelector(".time")

function getTime(){
    let date = new Date()

    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    
    let timeView =`${hour}:${minute}:${second}`
    
    timeEl.innerHTML = timeView

}
getTime()

setInterval(()=>{
    console.log("Rostan");
    getTime()

    
}, 1000)




            
const dayEl = document.querySelector(".day");

function getDay() {
    let date = new Date();

    let day = date.getDay();
    let Week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let dayView = Week[day];

    console.log(dayView);

    dayEl.innerHTML = dayView;
}

getDay();






const dateEl = document.querySelector(".date");

function getDate() {
    let date = new Date();

    let months = ["January", "February", "March", "April", "May", "June", 
                  "July", "August", "September", "October", "November", "December"];
    
    let day = date.getDate(); 
    let month = months[date.getMonth()]; 
    let year = date.getFullYear(); 

    let dateView = `${day}-${month} ${year}`;

    console.log(dateView); 

    dateEl.innerHTML = dateView; 
}

getDate();

