function mainLoad(){
    let user = JSON.parse(sessionStorage.getItem('activeUser'));
    let username = user.firstName + " " + user.lastName;
    document.getElementById("hh").innerHTML = "Task List of " + username;

    TaskList();
}

addnew.addEventListener('click', () => {
    ChangeVis();
});

logout.addEventListener('click', () => {
    window.location.href = '../index.html'
});

submit.addEventListener('click', () => {
    let tasktype = document.getElementById("ttype").value;
    let taskcont = document.getElementById("tcontent").value;
    let taskdate = document.getElementById("tdate").value;
    let task = [tasktype, taskcont, taskdate];
    let userno = JSON.parse(sessionStorage.getItem('activeUserID'));
    let user = JSON.parse(sessionStorage.getItem('activeUser'));

    let newtasks = [];
    newtasks = user.tasks;
    newtasks.push(task);

    let updatedUser = {
        firstName: user.firstName, 
        lastName: user.lastName, 
        eMail: user.eMail, 
        tasks: newtasks
    };

    localStorage.setItem(userno, JSON.stringify(updatedUser));
    sessionStorage.setItem('activeUser', JSON.stringify(updatedUser));

    document.getElementById("ttype").value = "";
    document.getElementById("tcontent").value = "";
    taskdate = document.getElementById("tdate").value = "";
    GoBack();
});

goback.addEventListener('click', () => {
    GoBack();
});

function GoBack() {
    TaskList();
    ChangeVis();
}

function ChangeVis() {
    let isDefaultVis = document.getElementById("inputinfo").style.display === "none";

    if (isDefaultVis === true) {
        document.getElementById("alltasks").style.display  = "none";
        document.getElementById("default").style.display   = "none";
        document.getElementById("btninfo").style.display   = "block";
        document.getElementById("inputinfo").style.display = "block";
    } else {
        document.getElementById("alltasks").style.display  = "block";
        document.getElementById("default").style.display   = "block";
        document.getElementById("btninfo").style.display   = "none";
        document.getElementById("inputinfo").style.display = "none";
    }
}

function TaskList() {
    let activeuser = JSON.parse(sessionStorage.getItem('activeUser'));
    let allUserTasks = [];
    allUserTasks = activeuser.tasks;

    const allTaskItems = document.getElementById("alltasks");
    allTaskItems.innerHTML = "";
    taskcount=0;

    allUserTasks.forEach(task => {
        const taskitem0 = document.createElement("p");
        const taskitem1 = document.createElement("span");
        const taskitem2 = document.createElement("span");
        const taskitem3 = document.createElement("span");
        const taskitem4 = document.createElement("button");

        taskitem1.className = "lspan";
        taskitem2.className = "mspan";
        taskitem3.className = "rspan";

        taskitem4.className = "delete";
        taskitem4.type = "button";
        let attributeName = "DeleteItem(" + taskcount + ")";
        taskitem4.setAttribute("onclick", attributeName);

        const itempart1 = document.createTextNode(task[0]);
        const itempart2 = document.createTextNode(task[1]);
        const itempart3 = document.createTextNode(task[2]);
        const itempart4 = document.createTextNode("X");

        taskitem1.appendChild(itempart1);
        taskitem2.appendChild(itempart2);
        taskitem3.appendChild(itempart3);
        taskitem4.appendChild(itempart4);

        taskitem0.appendChild(taskitem1);
        taskitem0.appendChild(taskitem2);
        taskitem0.appendChild(taskitem3);
        taskitem0.appendChild(taskitem4);

        allTaskItems.appendChild(taskitem0);

        taskcount++;
    });
}

function DeleteItem(itemno) {
    let activeuser = JSON.parse(sessionStorage.getItem('activeUser'));
    let userno = JSON.parse(sessionStorage.getItem('activeUserID'));
    let allUserTasks = [];
    let allUserTasksNew = [];
    allUserTasks = activeuser.tasks;
    taskcount=0;

    allUserTasks.forEach(task => {
        if (taskcount !== itemno) {
            allUserTasksNew.push(task);
        }
        taskcount++;
    });

    let updatedUser = {
        firstName: activeuser.firstName, 
        lastName: activeuser.lastName, 
        eMail: activeuser.eMail, 
        tasks: allUserTasksNew
    };

    localStorage.setItem(userno, JSON.stringify(updatedUser));
    sessionStorage.setItem('activeUser', JSON.stringify(updatedUser));
    
    TaskList();
}