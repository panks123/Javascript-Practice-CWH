// Alarm app
console.log("excercise6")

showAlarms()

let monday = document.getElementById('monday')
let tuesday = document.getElementById('tuesday')
let wednesday = document.getElementById('wednesday')
let thursday = document.getElementById('thursday')
let friday = document.getElementById('friday')
let saturday = document.getElementById('saturday')
let sunday = document.getElementById('sunday')

let everyday = document.getElementById('everyday')

everyday.addEventListener('change', () => {

    if (everyday.checked) {
        // On checking the everyday checkbox all days checkboxes will be checked
        monday.checked = tuesday.checked = wednesday.checked = thursday.checked = friday.checked = saturday.checked = sunday.checked = true
    }
    else {
        // On unchecking the everyday checkbox all days checkboxes will be unchecked
        monday.checked = tuesday.checked = wednesday.checked = thursday.checked = friday.checked = saturday.checked = sunday.checked = false
    }
})

today = document.getElementById('today')
setInterval(() => {

    let toDate = new Date()

    const formattedDate = toDate.toLocaleString("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric",
        hour: "numeric",
        minute: "2-digit",
        second: "2-digit"
    });
    today.innerText = "Today : " + formattedDate
}, 1000)


document.getElementById("setAlarm").addEventListener('click', (e) => {

    time = document.getElementById('time')
    // console.log("Alarm was set for time :" + time.value + " for days :")

    if (time.value == '' || ((!monday.checked && !tuesday.checked && !wednesday.checked && !thursday.checked && !friday.checked && !saturday.checked && !sunday.checked))) {
        alert("Please fill time and day")
    }
    else {
        days = [0, 0, 0, 0, 0, 0, 0]
        alert("Alarm was successfully set")
        if (sunday.checked) {
            console.log('Sunday')
            days[0] = 1;
        }
        if (monday.checked) {
            console.log('Monday')
            days[1] = 1;
        }
        if (tuesday.checked) {
            console.log('Tuesday')
            days[2] = 1;
        }
        if (wednesday.checked) {
            console.log('Wednesday')
            days[3] = 1;
        }
        if (thursday.checked) {
            console.log('Thursday')
            days[4] = 1;
        }
        if (friday.checked) {
            console.log('Friday')
            days[5] = 1;
        }
        if (saturday.checked) {
            console.log('Saturday')
            days[6] = 1;
        }

        let alarm = {
            time: time.value,
            weekdays: days
        }
        console.log("Alarm set for: ")
        console.log(alarm)

        let alarms = localStorage.getItem('alarms');
        let alarmsObj;
        if (alarms == null) {
            alarmsObj = []
        }
        else {
            alarmsObj = JSON.parse(alarms)
        }
        alarmsObj.push(alarm)
        localStorage.setItem('alarms', JSON.stringify(alarmsObj));
        time.value = ''
        monday.checked = tuesday.checked = wednesday.checked = thursday.checked = friday.checked = saturday.checked = sunday.checked = false

        showAlarms()
    }
    e.preventDefault()
})


function showAlarms() {
    console.log("Alarms...")

    let alarms = localStorage.getItem('alarms');
    if (alarms == null) {
        alarmsObj = []
    }
    else {
        alarmsObj = JSON.parse(alarms)
    }

    let html = "";
    alarmsObj.forEach(function (element, index) {
        console.log("--------------------------")
        console.log(element)
        let time = element.time
        let weekdays=element.weekdays
        console.log(`Time: ${element.time} | ${element.weekdays}`)
        let daysHtml=''
        const days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
        weekdays.forEach((element,index)=>{
            if(element==1)
            {
                daysHtml+=`<span class="mx-4">${days[index]}</span>`
            }
            
        })
        console.log("--------------------------")
        
        html += `<div class="noteCard my-2 mx-2" style="border:2px solid #0352fc; background-color:azure;">
                    <div class="card-body">
                        <h5 class="card-title">${time}</h5>
                        <p class='card-text'>${daysHtml}</p>
                        <button id='${index}' onclick='deleteAlarm(this.id)' class="btn btn-primary">Delete alarm</button>
                    </div>
                 </div>`;
    });

    let alarmElement=document.getElementById('alarms')
    if (alarmsObj.length != 0) {
        alarmElement.innerHTML = html;
    }
    else {
        alarmElement.innerHTML = `<b>Nothing to show... Use 'Add note' button above to add a note</b>`
    }
}

function deleteAlarm(index) {
 
    let alarms = localStorage.getItem('alarms');
    if (alarms == null) {
        notesObj = [];
    }
    else {
        alarmsObj = JSON.parse(alarms);
    }
    alarmsObj.splice(index, 1); // delete one item from alarmsObj at given index
    localStorage.setItem('alarms', JSON.stringify(alarmsObj))

    // After deleting, display all the available alarms
    showAlarms();
}


