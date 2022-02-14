## bootstrap
## configuramos
# instalamos bootstrap, jquery y popper
`````
npm i bootstrap jquery popper.js
`````
https://getbootstrap.com/docs/5.1/components/accordion/

## incluimos un menú de navegación en nuestra página

https://getbootstrap.com/docs/5.1/components/navbar/

copiamos el codigo de la página anterior Y LO PEGAMOS EN app.component.html

## creamos un modulo. layout
# 1. creamos modulo: ng g m layout
# 2. creamos nuevo componente asociandolo al nuevo modulo: ng g c layout/menuSuperior --skipTests=true
# 3. tengo que hacer publico:
exports: [
    MenuSuperiorComponent
  ]

# ahora tengo: menu-superior.component.html
# donde vamos dando forma a nuestro menu superior borrando lo que no necesitamos y quedandonos únicamente
# con dni e Imc

### CREO NUEVO COMPONENTE JUEGO PPT ASOCIADO AL MODULO PRINCIPAL 
EN MENU-SUPERIOR

</li>
          <li class="nav-item">
            <a class="nav-link" routerLinkActive="active" routerLink="/ppt">Piedra Papel o Tijera</a><!--se corresponde con app routing module pongo entre comillas imc-->
</li>
ASOCIO A AAP.ROUTING...

## creamos una clase

`````
ng g class <name>
````
no la usamos queda TODO:

## VAMOS A CREAR UN COMPONENTE PARA REUTILIZARLO EN CUALQUIER PAGINA

ng g c marcador // en el modulo principal

quiero que tenga la tabla y el boton de ponerla a cero

quito la parte de la tabla y el boton de 

<app-marcador></app-marcador>esto lo pongo en el juegoppt para luego introducir el marcador

## EJERCICIO API REST
1) creado el Componente ALumnos
2) Hemos registrado su ruta
3) Lo hemos puesto en el menú superior
4) Importamos el módulo HTTP en el
módulo principal

creo un servicio
# 1.creo una carpeta services 
# 2. ````ng g s services/alumno

