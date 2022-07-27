const natalia = {
    name: "Natalia",
    age: 20,
    cursosAprobados: [
        "Curso definitivo de HTML Y CSS",
        "Curso practico de HTML Y CSS",
    ],

    aprobarCurso(nuevoCursito){
        this.cursosAprobados.push(nuevoCursito);
    }
};

function Student(name, age, cursosAprobados){
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;
};

Student.prototype.aprobarCurso= function(nuevoCursito){
    this.cursosAprobados.push(nuevoCursito);
};

const juanita = new Student(
    "Juanita Alejandra",
    15,
    "Curso de introduccion a la produccion de videjuegos",
    "Curso de creacion de personajes",
);