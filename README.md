###bootstrap
## configuramos
# instalamos bootstrap, jquery y popper
`````
npm i bootstrap jquery popper.js
`````


https://getbootstrap.com/docs/5.1/components/accordion/

# incluimos un menú de navegación en nuestra paágina

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

