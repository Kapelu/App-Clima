```javascript
const Kapelu = {
    name : 'Daniel Calderon',
     code: ['Javascript', 'HTML', 'CSS', 'NodeJS'],
    tools: ['Visual Studio Code','GitBash', 'GitHub'],
   github: 'https://github.com/Kapelu'
}
```
<h1 align="center">ETIQUETAS</h1>

>***BREAK*** 

La utilizamos para romper el caso o función que se esta ejecutando. En este caso la utilizamos para romper un ciclo. Y funciona de la siguiente manera, cerrando por completo el ciclo for.

```javascript
for(let contador = 0; contador <= 10; contador++){
  console.log(contador)
  if( contador % 2 == 0){
    console.log(contador)
    break                //termina la ejecución del ciclo for por completo 
  }
}
console.log( 'Fin del ciclo for')
```

>***CONTINUE*** 

Básicamente lo que hace es ir a la siguiente iteración.

```javascript
for(let contador = 0; contador <= 10; contador++){
     console.log(contador)
     if( contador % 2 == 0){
         console.log(contador)
         break                //termina la ejecución del ciclo for por completo 
     }
 }
 console.log( 'Fin del ciclo for')
 

for(let contador = 0; contador <= 10; contador++){
    if( contador % 2 !== 0){
        continue              //ir a la siguiente iteracion
    } 
    console.log(contador)
}
```

>***LABEL*** 

Labels o Etiquetas: Aunque este uso no es recomendable es importante conocer la sintaxis, para poder identificarles cuando estemos revisando otro código que no sea nuestro.

```javascript
inicio:

for(let contador = 0; contador <= 10; contador++){
    if( contador % 2 !== 0){
        continue inicio         //ir a la siguiente iteracion que en vez de ser console.log sube a inicio:
    }
    console.log(contador)
}
```
<br/>
<br/>
<br/>
<h1 align="center"></h1>
<h3 align="left">by Kapelu
<h1 align="center"></h1>