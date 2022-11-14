submit.addEventListener('click', () => {
    let firstname = document.getElementById("firstname").value;
    let lastname  = document.getElementById("lastname").value;
    let email  = document.getElementById("email").value;
    let user = {firstName: firstname, lastName: lastname, eMail: email};
    let lenght = localStorage.length;

    if(firstname === "" || lastname === "" || email === "") {
        alert('All fields need to be filled in!');
    } else {
        let exists = false;
        let count = 0;

        while (exists === false && count !== lenght){
            count++;
            let userx = JSON.parse(localStorage.getItem(count));
            
            if(userx.firstName === firstname && userx.lastName === lastname) {
                exists = true;
            }
        }

        if (exists === true) {
            alert('Such user already exists. Please Log in');
        } else {
            localStorage.setItem(lenght+1, JSON.stringify(user));
            sessionStorage.setItem('activeUser', JSON.stringify(user));
            window.location.href = '../Main_Page/main.html'
        }
    }
});

goback.addEventListener('click', () => {
    window.location.href = '../index.html'
});