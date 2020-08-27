if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js')
        .then(function (registration) {
            console.log('Registered:', registration);
        })
        .catch(function (error) {
            console.log('Registration failed: ', error);
        });
}

document.getElementById('click-me').addEventListener('click', function () {
    alert("You finally clicked without jQuery");
});

// window.location.href = "www.google.com";