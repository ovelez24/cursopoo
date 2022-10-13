function videoPlay(id){
    const urlSecreta = "https://platziultrasecretomasquelanasa.com/" + id;
    console.log("Se esta reproduciendo desde la url" + urlSecreta);
}

function videoStop(id){
    const urlSecreta = "https://platziultrasecretomasquelanasa.com/" + id;
    console.log("Pausamos la url" + urlSecreta);
}

class PlatziClass { // el export se coloca para que si se pueda ejecutar la clase desde otro script
    constructor({
     name,
     videoID,
    }) {
        this.name = name;
        this.videID = videoID;
    }

    reproducir(){
        videoPlay(this.videoID);
    }

    pausar(){
        videoStop(this.videoID);
    }
}


class LearningPath {
    constructor({
        name,
        courses = [],
    }){
        this.name = name;
        this.courses = courses;
    }
};

class Student {
    constructor({
        name,
        email,
        username,
        twitter = undefined,
        instagram = undefined,
        facebook = undefined,
        approvedCourses = [],
        learningPaths = [],

    }) {
        this.name = name;
        this.email = email;
        this.username = username;
        this.socialMedia = {
            twitter,
            instagram,
            facebook,
        };
        this.approvedCourses = approvedCourses;
        this.learningPaths = learningPaths;

    };
 

};

class FreeStudent extends Student {
    constructor(props){
        super(props);//con esto se trae toda la informacion de la clase student
    }

    approvedCourse(newCourse){
        if(newCourse.isfree){
            this.approvedCourses.push(newCourse);
        }else{
            console.warn("lo sentimos," + this.name + "solo puedes tomar cursos gratuitos");
        }
    }
}

class BasicStudent extends Student {
    constructor(props){
        super(props);
    }

    approvedCourse(newCourse){
        if(newCourse.lang !== "english"){
            this.approvedCourses.push(newCourse);
        }else{
            console.warn("lo sentimos," + this.name + "no puedes tomar cursos en ingles");
        }
    }
}

class ExpertStudent extends Student { //esta es la herencia asi se escribe para heredar de una clase en este caso student
    constructor(props){
        super(props);
    }

    approvedCourse(newCourse){
        this.approvedCourses.push(newCourse);
    }
}

class Course {
    constructor({
        name,
        classes = [],
        isfree = false,
        lang = "spanish",
    })
    
    {
        this._name = name;
        this.classes = classes;
        this.isfree = isfree;
        this.lang = lang;
    }

    get name(){  //este sirve para traer el nombre cuando es private
        return this._name;
    }d

    set name(nuevoNombrecito){ //aqui se establece el nombre cuando es private
        if(nuevoNombrecito === "curso malito de programacion basica"){ //este ejemplo se coloca para que no ingresen informacion no valida
            console.error("Web....no");
        } else {
            this._name = nuevoNombrecito; 
        }
        
    }
};


const cursoProgBasica = new Course({
    name: "Curso gratis de programacion basica",
    isfree: true,
});

const cursoDefinitivoHTML = new Course({
    name: "Curso definitivo HTML y CSS",
});

const cursoPracticoHTML = new Course({
    name: "Curso practico HTML y CSS",
    lang: "english",
});

const escuelaWeb = new LearningPath({
    name: "Escuela de desarrollo web",
    courses: [cursoProgBasica, cursoDefinitivoHTML,
    cursoPracticoHTML,],
});

const escuelaData = new LearningPath({
    name: "Escuela de Data science",
    courses: ["Curso Databusiness", 
    "Curso Dataviz",],
});

const escuelaVgs = new LearningPath({
    name: "Escuela de Videojuegos",
    courses: [cursoProgBasica, "Curso de Unity", 
    "Curso de Unreal",],
});

const juan = new FreeStudent({
    name: "JuanDC",
    username: "juandc",
    email: "juanito@juanito.com",
    twitter: "fjuandc",
    learningPaths: [
        escuelaWeb,
        escuelaVgs,
    ],
});

const miguelito = new BasicStudent({
    name: "Miguelito",
    username: "miguelitofeliz",
    email: "juanito@juanito.com",
    twitter: "migelito_feliz",
    learningPaths: [
        escuelaWeb,
        escuelaData,
    ],
});


