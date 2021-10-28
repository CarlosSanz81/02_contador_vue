if ("serviceWorker" in navigator) {
    navigator.serviceWorker
        .register("./sw.js")
        .then((reg) => console.log("Registro Existoso"))
        .catch((err) => console.log(err));
}

