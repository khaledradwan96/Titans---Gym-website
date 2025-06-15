//  ============ sign up ============
const registerForm = document.getElementById('registerForm');
registerForm?.addEventListener('submit', (e) => {
    e.preventDefault();

    const userName = document.getElementById('userName').value;
    const fName = userName.split(' ')[0];
    const registerEmail = document.getElementById('registerEmail').value;
    const password = document.getElementById('password').value;
    const rePassword = document.getElementById('rePassword').value;

    const userData = {
        userName,
        fName,
        registerEmail,
        password
    };
    
    let users = JSON.parse(localStorage.getItem('users')) || [];

    // ===== Validation =====
    // Check password
    if (password !== rePassword) {
        popupWindow("Passwords do not match")
        return;
    }
    
    const foundEmail = users.find( user => user.registerEmail === registerEmail);
    if(foundEmail){ // Check used email
        popupWindow("email is already used")
    }else{ // save data
        users.push(userData);
        localStorage.setItem('users', JSON.stringify(users)); 
        popupWindow(`
                <h4>Welcome, <span class="text-warning">${fName}</span> !</h4>
                <p>Your account has been created successfully.</p>
                <a href="login.html" class="btn btn-primary">Login Now</a>
        `)
        setTimeout(() => {
            window.location.href = 'login.html';
        }, 1000);
    }
});


