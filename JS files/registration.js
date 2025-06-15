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

// ============ login ============
const loginForm = document.getElementById('loginForm');
loginForm?.addEventListener('submit', (e) => {
    e.preventDefault();

    const loginEmail = document.getElementById('loginEmail').value;
    const password = document.getElementById('password').value;
    const errorMsg = document.getElementById('errorMsg');

    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Check data
    const foundUser = users.find( user => user.registerEmail === loginEmail);

    if (!foundUser) {
        errorMsg.textContent = 'User not found';
    } else if (foundUser.password !== password) {
        errorMsg.textContent = 'Incorrect Password';
    } else {
        errorMsg.textContent = '';
        popupWindow( `
            <h4>Welcome back, <span class="text-warning">${foundUser.userName}</span>  !</h4>
            <a href="../index.html" class="btn btn-primary">Go Home</a>
        `);
        sessionStorage.setItem('currentUser', JSON.stringify(foundUser));
        setTimeout(() => {
            window.location.href = '../index.html';
        }, 1000);
    }
});
