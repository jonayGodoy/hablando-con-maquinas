---
title: Kata Gilded Rose Switch
date: "2017-05-30T02:40:32.169Z"
path: "/kata-gilded-rose-switch/"
image_article: "PENDIENTE"
---

Últimamente me encontrado con muchos programadores que no ven el switch como un mal olor.
Es más hace alrededor de un año yo tampoco lo sabia. Por lo que me he propuesto crear un kata
para que los programadores que se encuentre en este punto en su camino del aprendizaje
le sea más fácil  avanzar.

Emplee la Kata de Gilded como base para mi kata. Una
kata cuyo fin principal es ayudar trabajar con código heredado partiendo arnes de seguridad de test creado previamente.
He conservado el problema que empleaba esta kata pero he cambiado las restricciones
y el formato para que sirvan a este propósito.

Si no podeís esperar y quereis ir ya a la kata aqui tenéis el [enlace](https://github.com/jonayGodoy/Kata-Gilded-Rose-Switch).

Lo que aun estaís leyendo esto, a continuación voy a desarrollar un poco de porque el switch es
considerado un mal olor asi como de que consta la kata.

En la practica el switch no es necesario en el 90% de los proyectos.
Porque para cada una de las funcionalidades que aporta suele existir una alternativa que
una vez se interiorizan simplica el codigo aunque para la gente que esta empezando con el
polimorfismo le puede costar un poco más verlo.


Para empezar, voy a explicar como refactorizar el tipico ejemplo que nos muestra cuando vemos
un switch por primera vez. Es un caso muy basico, pero tambien se puede extrapolar a los maps
o arrays asociativos.

### Switch

```
int n = 1;
String message  = "";

switch (n) {
 case 1: message = "I am not an array ";
 break;
 case 2: message = "But I behave as one";
 break;
 case 3: message = "I do not know what to do with my life";
 break;
}
System.out.print(message);
```

### Array
```
int n = 1;
String message = "";

String [] vector = {"I am an array", "And I behave as one ", "everything makes sense"};
message = vector[n];
System.out.print(message);
```

> Aqui podeís empezar a ver el concepto del problema de los switch.
Con ellos lo que hacemos controlar los estados. Es decir, en el switch comprobamos si n es 1
y en consecuencia retornamos un valor en cambio cuando usamos una array no que gestionar los estados
porque es n es 1 y el sistema en esta caso el array no se necesita que estemos preguntando que es
y que deja de ser.

Vale, recordad este concepto.



Ahora el problema que da origen a esta kata. Cuando en cada cases tenemos métodos o estructuras distintas.

Lo que más duele del switch y asi aprovecho para meter un nuevo concepto es que rompe
de una manera bastante bestia el segundo principio de SOLID el open/close

> **Open-Closed Principle / Principio Abierto-Cerrado**
> **Vuestro codigo debe permitir extensiones pero no modificaciones.**


No quiero meterme mucho en el tema de SOLID porque es largo de explicar.
Simplemente aclarar, que para añadir una nueva funcionalidad a nuestra aplicación
que tenga relacion con lo que estaís comparando en el switch a la fuerza hay volver
a modificar el codigo escrito con anterioridad.


Como tantas cosas en la programación esto se ve mucho ver programando que intentado explicarlo con
palabras asi que empiezo a explicar la kata(ejercicio de programación).

> [https://github.com/jonayGodoy/Kata-Gilded-Rose-Switch](https://github.com/jonayGodoy/Kata-Gilded-Rose-Switch)

Cuando entraís a la kata tanto si es la versión en Java o en Javascript teneís un codigo
que ya funciona y unas carpetas de test.Tambien teneís la solucion en la carpeta "solution" por
si tenéis problemas.Cualquier duda podeís comentarla.


## Para instalar
- la versión de java las librerias de test teneís el pom.xml para instalar las dependencias de java o
podeís descargaros las librerias
    - [Junit](https://mvnrepository.com/artifact/junit/junit/4.10)
    - [Hamcrest Core](https://mvnrepository.com/artifact/org.hamcrest/hamcrest-core/1.3)

- Para la version de javascript bastara con hacer

	``` npm install```

- y para correr los test en consola

	``` npm run test```

Recomiendo, la version de java si teneís problemas con el Polimorfismo.
La herencia en javascript tiene distintos estilo y todos pueden muy buenos por lo que
preferiria que aunque no fuera java usaraís un lenguaje de lado sevidor(node no cuenta).
Pero si por vuestro contexto preferis hacerlo en javascript de acuerdo pero sé consientes
de que tiene un dificultad añadida.

## Test

La kata está enfocada para hacerse con los test
que os darán feedback inmediato cuando rompais un funcionalidad del codigo.También
podeís construir vuestro propio arnes de seguridad antes para practicar los test o simplemente
pasar de los test y imprimir los resultados por consola como esteís más comodos.


## El problema principal eliminar el switch


Basicamente teneis un item y depenpendiendo de como se llame(o que tipo de item sea)
ejecutara un codigo o otro. Teneís la [explicacion de que hace cada Item en github](https://github.com/jonayGodoy/Kata-Gilded-Rose-Switch#gilded-rose-switch-1)
La idea principal es refactorizar este switch con polimorfismo. Teneís libertad para
crear la clases que creaís necesarias. Una vez logrado esto tendreís que añadir una nueva
funcionalidad alterando nada o practicamente nada la clase GildedRoseSwitch.

```Java
package issue;

class GildedRoseSwitch {
    private Item[] items;

     GildedRoseSwitch(Item[] items) {
        this.items = items;
    }

     void updateQuality() {
        for (Item item : items) {
         switch (item.getName()){
             case "Aged Brie":
                if(item.getSellIn() >= 0){
                    if(item.getQuality() < 50) {item.setQuality(item.getQuality() + 1);}
                }else{
                    updateItemGenericQuality(item);
                }
                 break;
             case "Sulfuras, Hand of Ragnaros":
                 if(item.getQuality() != 80){
                     item.setQuality(80);
                 }
                 item.setSellIn(item.getSellIn()-1);
                 break;
             case "Backstage passes to a TAFKAL80ETC concert":
                 item.setSellIn(item.getSellIn()-1);

                 if(item.getSellIn() <= 0){
                     item.setQuality(0);
                 }else {
                     if (item.getSellIn() <= 5) {
                         if (item.getQuality() < 50) {
                             item.setQuality(item.getQuality() + 3);
                         }
                     } else if (item.getSellIn() <= 10) {
                         if (item.getQuality() < 50) {
                             item.setQuality(item.getQuality() + 2);
                         }
                     }
                 }
                 break;
             default:
                 item.setSellIn(item.getSellIn()-1);
                 updateItemGenericQuality(item);
                 break;
         }
        }
    }

    private void updateItemGenericQuality(Item item) {
        if(item.getQuality() > 0){
            if(item.getSellIn() <= 0){
                item.setQuality(item.getQuality()-2);
                }else{item.setQuality(item.getQuality()-1);}
        }
    }
}
```

Spolier no quereís ver la solución pero estaís muy pero que muy perdidos.Aqui tenés un buenas pista.

    Estaís seguros que quereís verlo, luego noy vuelta atras
    ¿Por que no lo intentaís un poco más?

        - El primer paso olvidaos que teneís diferentes items.Empezar a picar como si solo tuvierais uno.
        - Borrar el switch ya que no teneis varios items ya no lo necesitaís.
        - A continuación crear un metodo updateItem en el item.
        - Tiene sentido es mejor que el item tenga la resposabilidad de como se actualiza.
        - Ahora gilde rose simplemente recorrerá los items y los mandará a actualizar.
        - Por ultimo crear una clase una clase que herede de item. Pero ahora Como por ejemplo AgeBrie.
        - ¿Que pasará ahora si sobreescribes el metodo updateItem con el comportamiento de Age Bried y despues lo metes en la lista de items?


Espero que la kata os ayude a avanzar un poco más en vuestro camino del aprendizaje y
me encanta recibir feeback por lo que si tenéis creis que pueda mejorar o cambiar algo estoy deseando escucharlo.