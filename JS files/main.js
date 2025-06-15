user =  JSON.parse(sessionStorage.getItem('currentUser')) || null;
const userStatus = document.getElementById('userStatus');

if(user){
    userStatus.innerHTML = `
        <li class="nav-item">
            <a class="nav-link" href="">Welcome, <span>${user.fName}</span></a>
        </li>
        <li class="nav-item">
            <a class="nav-link" onclick="logout()" href="">Log Out</a>
        </li>
    `;
    function logout() {
        sessionStorage.removeItem('currentUser');
        window.location.reload();
    }
}