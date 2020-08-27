if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js')
        .then(function (registration) {
            console.log('Registered:', registration);
        })
        .catch(function (error) {
            console.log('Registration failed: ', error);
        });
}

document.getElementsByClassName('click-me').onclick = function() {
    alert('hello');
};

// window.location.href = "www.google.com";