var students = {
    1001: { reg: 1001, pswd: "0", name: "sahal", class: 0, MobileNo: 9876543210 },
    1002: { reg: 1002, pswd: "0", name: "abdul bari", class: 0, MobileNo: 9876543210 },
    1003: { reg: 1003, pswd: "0", name: "sidan", class: 0, MobileNo: 9876543210 },
    1004: { reg: 1004, pswd: "0", name: "nasru", class: 0, MobileNo: 9876543210 },
    1005: { reg: 1005, pswd: "0", name: "munshar", class: 0, MobileNo: 9876543210 },
    1006: { reg: 1006, pswd: "0", name: "hibathulla", class: 0, MobileNo: 9876543210 },
}

function login() {
    let regNo = regno.value
    let pswd = password.value
    if (regNo in students) {
        if (students[regNo].pswd == pswd) {
            // alert("successfulyy login")
            window.open("dashboard.html")
            localStorage.setItem("regNo",JSON.stringify(students[regNo].reg))
            localStorage.setItem("fname",JSON.stringify(students[regNo].name))
        } else {
            alert("invalid password")
        }
    } else {
        alert("invalid register number")
    }
}






