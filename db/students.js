var students = {
    1001: { reg: 1001, pswd: "", name: "sahal", class: 9, MobileNo: 9876543210 },
    1002: { reg: 1002, pswd: "0", name: "abdul bari", class: 8, MobileNo: 9876543210 },
    1003: { reg: 1003, pswd: "0", name: "sidan", class: 7, MobileNo: 9876543210 },
    1004: { reg: 1004, pswd: "0", name: "nasru", class: 9, MobileNo: 9876543210 },
    1005: { reg: 1005, pswd: "0", name: "munshar", class: 9, MobileNo: 9876543210 },
    1006: { reg: 1006, pswd: "0", name: "hibathulla", class: 7, MobileNo: 9876543210 },
}

var tTable = {
    9: { sat1: "english", sat2: "maths", sat3: "phy", sat4: "che", sat5: "bio", sun1: "geography", sun2: "history", sun3: "hindi", sun4: "maths", sun5: "english" },
    8: { sat1: "maths", sat2: "physics", sat3: "english", sat4: "che", sat5: "history", sun1: "biology", sun2: "history", sun3: "chemistry", sun4: "maths", sun5: "english" },
    7: { sat1: "physics", sat2: "maths", sat3: "hindi", sat4: "che", sat5: "bio", sun1: "geography", sun2: "history", sun3: "hindi", sun4: "maths", sun5: "english" },
}



var attendence={
    1:[1001,1002,1003],
    2:[1002,1004,1005],
    3:[1003,1001]
}



function login() {
    let regNo = regno.value
    let pswd = password.value
    if (regNo in students) {
        if (students[regNo].pswd == pswd) {
            // alert("successfulyy login")
            window.open("dashboard.html")
            localStorage.setItem("regNo", JSON.stringify(students[regNo].reg))
            localStorage.setItem("fname", JSON.stringify(students[regNo].name))
        } else {
            alert("invalid password")
        }
    } else {
        alert("invalid register number")
    }
}

function timetable() {
    let regno = JSON.parse(localStorage.getItem("regNo"))
        if (students[regno].class == 9) 
        {
            var cclass=9
            document.getElementById("ttid").innerHTML="<thead><tr><th><h2 style='margin-top:30px;font-weight:bold'>Saturday :</h2></th></tr>   <tr><th>9am - 10am</th><td>"+tTable[cclass].sat1+
            "</td></tr>  <tr><th>10am - 11am</th><td>"+tTable[cclass].sat2+"</td></tr>  <tr><th>11:30am - 12:30pm</th><td>"+tTable[cclass].sat3+
            "</td></tr> <tr><th>1:30pm - 2:30pm</th><td>"+tTable[cclass].sat4+"</td></tr>  <tr><th>2:30am - 3:30pm</th><td>"+tTable[cclass].sat5+
            "</td></tr><tr><th><h2 style='margin-top:30px;font-weight:bold'>Sunday :</h2></th></tr>   <tr><th>9am - 10am</th><td>"+tTable[cclass].sun1+
            "</td></tr>  <tr><th>10am - 11am</th><td>"+tTable[cclass].sun2+"</td></tr>  <tr><th>11:30am - 12:30pm</th><td>"+tTable[cclass].sun3+
            "</td></tr> <tr><th>1:30pm - 2:30pm</th><td>"+tTable[cclass].sun4+"</td></tr>  <tr><th>2:30am - 3:30pm</th><td>"+tTable[cclass].sun5+"</td></tr> </thead>"
        } 
        else if (students[regno].class == 8) 
        {
            var cclass=8
            document.getElementById("ttid").innerHTML="<thead><tr><th><h2 style='margin-top:30px;font-weight:bold'>Saturday :</h2></th></tr>   <tr><th>9am - 10am</th><td>"+tTable[cclass].sat1+
            "</td></tr>  <tr><th>10am - 11am</th><td>"+tTable[cclass].sat2+"</td></tr>  <tr><th>11:30am - 12:30pm</th><td>"+tTable[cclass].sat3+
            "</td></tr> <tr><th>1:30pm - 2:30pm</th><td>"+tTable[cclass].sat4+"</td></tr>  <tr><th>2:30am - 3:30pm</th><td>"+tTable[cclass].sat5+
            "</td></tr><tr><th><h2 style='margin-top:30px;font-weight:bold'>Sunday :</h2></th></tr>   <tr><th>9am - 10am</th><td>"+tTable[cclass].sun1+
            "</td></tr>  <tr><th>10am - 11am</th><td>"+tTable[cclass].sun2+"</td></tr>  <tr><th>11:30am - 12:30pm</th><td>"+tTable[cclass].sun3+
            "</td></tr> <tr><th>1:30pm - 2:30pm</th><td>"+tTable[cclass].sun4+"</td></tr>  <tr><th>2:30am - 3:30pm</th><td>"+tTable[cclass].sun5+"</td></tr> </thead>"
        } else {
            var cclass=7
            document.getElementById("ttid").innerHTML="<thead><tr><th><h2 style='margin-top:30px;font-weight:bold'>Saturday :</h2></th></tr>   <tr><th>9am - 10am</th><td>"+tTable[cclass].sat1+
            "</td></tr>  <tr><th>10am - 11am</th><td>"+tTable[cclass].sat2+"</td></tr>  <tr><th>11:30am - 12:30pm</th><td>"+tTable[cclass].sat3+
            "</td></tr> <tr><th>1:30pm - 2:30pm</th><td>"+tTable[cclass].sat4+"</td></tr>  <tr><th>2:30am - 3:30pm</th><td>"+tTable[cclass].sat5+
            "</td></tr><tr><th><h2 style='margin-top:30px;font-weight:bold'>Sunday :</h2></th></tr>   <tr><th>9am - 10am</th><td>"+tTable[cclass].sun1+
            "</td></tr>  <tr><th>10am - 11am</th><td>"+tTable[cclass].sun2+"</td></tr>  <tr><th>11:30am - 12:30pm</th><td>"+tTable[cclass].sun3+
            "</td></tr> <tr><th>1:30pm - 2:30pm</th><td>"+tTable[cclass].sun4+"</td></tr>  <tr><th>2:30am - 3:30pm</th><td>"+tTable[cclass].sun5+"</td></tr> </thead>"
        }
    
}

function atnc(){
    let regno = JSON.parse(localStorage.getItem("regNo"))
    let days =Object.keys(attendence).length
    let stdprsnt=0
    for(let i=1;i<=days;i++){
        if(i in attendence){
            let prsnt=attendence[i].length
            for(let j=0;j<prsnt;j++){
                if(regno==attendence[i][j]){
                    stdprsnt++
                }
            }
    }
    }
    document.getElementById("atncid").innerHTML="<span>Total Working Days: "+days+"</Span><br><span>Presented: "+stdprsnt+"</Span>"
}



