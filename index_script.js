login.addEventListener('click', () => {
    let firstname = document.getElementById("firstname").value;
    let lastname  = document.getElementById("lastname").value;
    let lenght = localStorage.length;

    if(firstname === "" || lastname === "") {
        alert('Both first and last name need to be filled in!');
    } else {
        let exists = false;
        let count = 0;
        
        while (exists === false && count !== lenght){
            count++;
            let userx = JSON.parse(localStorage.getItem(count));
            
            if(userx.firstName === firstname && userx.lastName === lastname) {
                exists = true;
                sessionStorage.setItem('activeUser', JSON.stringify(userx));
                sessionStorage.setItem('activeUserID', lenght+1);
            }
        }

        if (exists === true) {
            window.location.href = 'Main_Page/main.html'
        } else {
            alert('No user found. Please register a new user.');
        }
    }
});

regis.addEventListener('click', () => {
    window.location.href = 'Reg_Page/reg.html'
});