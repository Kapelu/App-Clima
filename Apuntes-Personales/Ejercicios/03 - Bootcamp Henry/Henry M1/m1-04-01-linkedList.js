/* 
* Implementa la clase LinkedList tiene metodos `add`, `remove`, y `search`
*
* add: Agrega un nuevo nodo en el final de la lista
* Ej:      Head --> null
* add(1):  Head --> 1 --> null
* add(2):  Head --> 1 --> 2 --> null
*
* remove:  Elimina el último nodo de la lista y devuelve su valor. (Tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía)
* Ej:         Head --> 1
* remove():   Head --> null y devuelve 1
*
*search: Busca un valor dentro de la lista. Puede recibir un valor o una función. Si no hubiera resultados, devuelve null.
*/

function LinkedList() {
    this.head = null
    this._length = 0
}

function Node(value) {
    this.value = value
    this.next = null
}

LinkedList.prototype.add = function (data) {
    let node = new Node(data)

    if (this.head === null) {
    // cuando la lista esta vacia
    this.head = node
    } else {
    // cuando hay al menos un nodo en la lista
    let current = this.head
    while (current.next) {
        current = current.next
    }
    current.next = node;
    }

    this._length++
    return node
};

LinkedList.prototype.remove = function () {
    let current = this.head
    if (this._length === 0) return null;
    // ALTERNATIVA: consultar si la lista esta vacia
    // if(this.head === null) return null;
    else if (this._length === 1) {
    // ALTERNATIVA:
    // if(this.head.next === null)
    let aux = current.value
    this.head = null
    this._length--
    return aux
    }

    // aca simplemente mira que pasa dos pasos adelante de el
    while (current.next.next) {
        current = current.next
    }

    let aux = current.next.value
    current.next = null;
    this._length--
    return aux
};

LinkedList.prototype.search = function (value) {
    if (this.head === null) return null;
    let current = this.head
    while (current) {
    if (current.value === value) return current.value
    else if (typeof value === 'function') {
        if (value(current.value)) {
        return current.value
        }
    }
    current = current.next
    }
    return null
}
