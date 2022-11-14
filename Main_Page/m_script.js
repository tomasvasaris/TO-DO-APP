function mainLoad(){
    let activeUser = JSON.parse(sessionStorage.getItem('activeUser'));
    let username = activeUser.firstName + " " + activeUser.lastName;
    document.getElementById("hh").innerHTML = "Task List of " + username;
}

addnew.addEventListener('click', () => {
    changeVis();
});

logout.addEventListener('click', () => {
    window.location.href = '../index.html'
});

submit.addEventListener('click', () => {
    let tasktype = document.getElementById("ttype").value;
    let taskcontent = document.getElementById("tcontent").value;
    let taskdate = document.getElementById("tdate").value;

    let user = JSON.parse(localStorage.getItem("activeUser"));
    let task = {taskType: tasktype, taskContent: taskcontent, taskDate: taskdate};
    
    if(Object.keys(user).length === 3){
        const newArr = [task];
        user = {firstName: user.firstName, lastName: user.lastName, eMail: user.eMail, tasks: newArr}
    } else {
        user.tasks.push(task);
    }

    let userno = 0;
    let count = 0;
    let lenght = localStorage.length;
    
    while (userno === 0 && count !== lenght){
        count++;
        let userx = JSON.parse(localStorage.getItem(count));
        
        if(userx.firstName === firstname && userx.lastName === lastname) {
            userno = count;
        }
    }

    localStorage.setItem(userno, JSON.stringify(user));
    sessionStorage.setItem('activeUser', JSON.stringify(user));

    goBack();
});

goback.addEventListener('click', () => {
    goBack();
});

function goBack() {
    document.getElementById("type").innerHTML = "";
    document.getElementById("content").innerHTML = "";
    document.getElementById("date").innerHTML = "";
    changeVis();
}

function changeVis() {
    let isDefaultVis = document.getElementById("inputinfo").style.display === "none";

    if (isDefaultVis === true) {
        document.getElementById("default").style.display = "none";
        document.getElementById("btninfo").style.display = "block";
        document.getElementById("inputinfo").style.display = "block";
    } else {
        document.getElementById("default").style.display = "block";
        document.getElementById("btninfo").style.display = "none";
        document.getElementById("inputinfo").style.display = "none";
    }
}