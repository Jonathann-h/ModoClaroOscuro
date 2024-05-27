//Espera a que todo el contenido del DOM esté completamente cargado.
document.addEventListener('DOMContentLoaded', function () {
    const modeToggle = document.getElementById('modeToggle');
    // Se obtiene una referencia al elemento <body>
    const body = document.body;

    // Se verifica si el modo oscuro está almacenado en el localStorage
    // Y si la clave 'mode' en localStorage es igual a 'dark'
    if (localStorage.getItem('mode') === 'dark') {
        //Se añade la clase dark-mode al <body> para aplicar los estilos del modo oscuro.
        body.classList.add('dark-mode');
        //Se marca el checkbox como seleccionado para indicar que el modo oscuro se activó.
        modeToggle.checked = true;
    } else {
        // Si no está en modo oscuro, por defecto añade la clase 'light-mode' al <body>
        body.classList.add('light-mode');
    }

    //Se añade un evento 'change' al checkbox para detectar cuando cambia su estado.
    modeToggle.addEventListener('change', function () {
        //Si el checkbox esta seleccionado (checked)
        if (modeToggle.checked) {
            //Se reemplaza la clase 'light-mode' por 'dark-mode'    
            body.classList.replace('light-mode', 'dark-mode');
            //Se almacena la eleccion del usuario en el localstorage como 'dark'
            localStorage.setItem('mode', 'dark');
        } else {
            //Se reemplaza la clase 'dark-mode' por 'light-mode'
            body.classList.replace('dark-mode', 'light-mode');
            //Se almacena la eleccion del usuario en el localstorage como 'light'
            localStorage.setItem('mode', 'light');
        }
    });
});
