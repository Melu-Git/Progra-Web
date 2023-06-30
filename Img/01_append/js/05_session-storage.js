// Permite guardar un dato en session storage
sessionStorage.setItem("cantidad", "5");
sessionStorage.setItem("universidad", "UNLAM");

// trae datos de session storage
let data = sessionStorage.getItem("cantidad");

// borra un dato de sessionStorage
sessionStorage.removeItem("cantidad");

// borra todos los datos almacenados en session storage
sessionStorage.clear();