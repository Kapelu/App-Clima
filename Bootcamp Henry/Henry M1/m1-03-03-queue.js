/*
* Implementar la clase Queue, sabiendo que es una estructura de tipo FIFO,  * donde el primer elemento que ingresa es el primero que se quita. Definir   * los siguientes métodos:
*  - enqueue: agrega un valor respetando el orden.
*  - dequeue: remueve un valor respetando el orden. Retorna undefined cuando * la queue está vacía.
*  - size: retorna el tamaño (cantidad de elementos) de la queue.
* Pueden utilizar class o función constructora.
*/

function Queue() {
    this.array = [];
}

Queue.prototype.enqueue = function (elemento) {
    this.array.push(elemento);
}

Queue.prototype.dequeue = function () {
    return this.array.shift();
}

Queue.prototype.size = function () {
    return this.array.length;
}
