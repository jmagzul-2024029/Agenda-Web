// ===== LOGIN =====
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Guardar datos
        sessionStorage.setItem('username', document.getElementById('username').value);
        sessionStorage.setItem('email', document.getElementById('email').value);
        sessionStorage.setItem('phone', document.getElementById('phone').value);
        sessionStorage.setItem('address', document.getElementById('address').value);
        sessionStorage.setItem('registrationDate', new Date().toLocaleDateString('es-GT'));

        // Redirigir a CONTACTOS
        window.location.href = 'index/contactos.html';
    });
}

// ===== PERFIL =====
if (document.getElementById('avatarInitials')) {
    // Obtener datos guardados
    const username = sessionStorage.getItem('username');
    const email = sessionStorage.getItem('email');
    const phone = sessionStorage.getItem('phone');
    const address = sessionStorage.getItem('address');
    const registrationDate = sessionStorage.getItem('registrationDate');

    // Si no hay datos, volver al login
    if (!username) {
        window.location.href = '../index.html';
    } else {
        // Mostrar iniciales
        document.getElementById('avatarInitials').textContent = username.substring(0, 2).toUpperCase();

        // Mostrar todos los datos
        document.getElementById('profileName').textContent = username;
        document.getElementById('profileEmail').textContent = email;
        document.getElementById('profileUsername').textContent = username;
        document.getElementById('profilePhone').textContent = phone;
        document.getElementById('profileAddress').textContent = address;
        document.getElementById('profileDate').textContent = registrationDate;

        // Cerrar sesión
        document.querySelector('.btn.logout').onclick = function () {
            sessionStorage.clear();
            window.location.href = '../index.html';
        };
    }
}