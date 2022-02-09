export class Alumno {
        id: number;
        nombre: string;
        apellido: string;
        email: string;
        edad: number;
        creadoEn: string;//podria ser edad, pero TypeSctipt
        fotoHashCode: null;
        constructor(){
            this.id=0;
            this.nombre="";
            this.apellido="";
            this.email="";
            this.edad=0;
            this.creadoEn="";
        }
}
