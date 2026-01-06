// ------- helpers -------
function getUsers() {
    const raw = localStorage.getItem("bravoUsers");
    return raw ? JSON.parse(raw) : [];
}

function saveUsers(users) {
    localStorage.setItem("bravoUsers", JSON.stringify(users));
}
function setCurrentUser(user) {
    localStorage.setItem("currentBravoUser", JSON.stringify(user));
}
document.addEventListener("DOMContentLoaded", () => {
    const registerForm = document.getElementById("registerForm");
    const loginForm = document.getElementById("loginForm");

    // --------- REGISTER ---------
    if (registerForm) {
        const regName = document.getElementById("regName");
        const regEmail = document.getElementById("regEmail");
        const regPassword = document.getElementById("regPassword");
        const regConfirmPassword = document.getElementById("regConfirmPassword");
        const registerMessage = document.getElementById("registerMessage");
        const emailPattern = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,3}$/;
        const emailError = document.getElementById("emailError");

        registerForm.addEventListener("submit", (e) => {
            e.preventDefault();
            registerMessage.textContent = "";

            const name = regName.value.trim();
            const email = regEmail.value.trim().toLowerCase();
            const password = regPassword.value;
            const ConfirmPassword = regConfirmPassword.value;

            if (!emailPattern.test(email)) {
                regEmail.classList.add("error");
                emailError.textContent = "Please enter a valid email address."
                return;

            }
            else {
                regEmail.classList.remove("error");
                emailError.textContent = "";
            }

            if (password != ConfirmPassword) {
                registerMessage.textContent = " Error : Password do not match.";
                registerMessage.style.color = "red";
                registerMessage.style.fontSize = "1.1rem";
                return;
            }

            const users = getUsers();
            const existing = users.find((u) => u.email === email);

            if (existing) {
                registerMessage.textContent = "Error : An account with this email already exists.";
                registerMessage.style.color = "red";
                return;
            }

            const newUser = { name, email, password };
            users.push(newUser);
            saveUsers(users);

            registerMessage.textContent = "Account created! Redirecting to login...";
            registerMessage.style.color = "green";

            setTimeout(() => {
                window.location.href = "login.html";
            }, 2000);
        });
    }

    // --------------- LOGIN ---------------------
    const loginEmail = document.getElementById("loginEmail");
    const loginPassword = document.getElementById("loginPassword");
    const loginEmailError = document.getElementById("emailError");
    const loginPasswordError = document.getElementById("loginPasswordError");
    const loginMessage = document.getElementById("loginMessage");
    const emailPattern = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,3}$/;

    // ------------- LOGIN: EMAIL VALIDATION --------------
    function validateLoginEmail() {
        const email = loginEmail.value.trim();

        if (!emailPattern.test(email)) {
            loginEmail.classList.add("error");
            loginEmailError.textContent = "Please enter a valid email address.";
            return false;
        }
        loginEmail.classList.remove("error");
        loginEmailError.textContent = "";
        return true;
    }

    // -------------- LOGIN: PASSWORD VALIDATION -----------------
    function validateLoginPassword() {
        const password = loginPassword.value;

        // For login we usually only check non-empty (and maybe length)
        if (password.length < 8) {
            loginPassword.classList.add("error");
            loginPasswordError.textContent = "Password must be at least 8 characters."
            return false;
        }
        loginPassword.classList.remove("error");
        loginPasswordError.textContent = "";
        return true;
    }

    if (loginForm) {

        loginForm.addEventListener("submit", (e) => {
            e.preventDefault();
            // validate email and password
            const isEmailValid = validateLoginEmail();
            if (!isEmailValid) return;

            const isPasswordValid = validateLoginPassword();
            if (!isPasswordValid) return;

            /*
            e.preventDefault();
            loginMessage.textContent = "";
            */

            const email = loginEmail.value.trim().toLowerCase();
            const password = loginPassword.value;

            const users = getUsers();
            const user = users.find((u) => u.email === email && u.password === password);
            if (!user) {
                loginMessage.textContent = "Error : Invalid email or password.";
                loginMessage.style.color = "red";
                loginMessage.style.fontSize = "1.2rem";
                return;
            }
            // Success
            setCurrentUser(user);
            loginMessage.textContent = "Login successful! Redirecting to home page";
            loginMessage.style.color = "green";
            loginMessage.style.fontSize = "1.1rem";

            // redirect to home 
            setTimeout(() => {
                window.location.href = "index.html";
            }, 2000);

        });
    }
});

// Show/Hide Password
document.querySelectorAll(".toggle-password").forEach(icon => {
    icon.addEventListener("click", () => {
        const targetId = icon.getAttribute("data-target");
        const input = document.getElementById(targetId);

        if (input.type === "password") {
            input.type = "text";
            icon.textContent = "🙈";
        }
        else {
            input.type = "password";
            icon.textContent = "👁️";
        }
    });
});
