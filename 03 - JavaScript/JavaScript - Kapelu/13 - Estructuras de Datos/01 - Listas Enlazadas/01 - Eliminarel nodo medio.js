const deleteMiddle = function(head) {
    // devuelve null si solo hay un nodo
    if (head.next == null)
        return null;
    
    let count = 0;
    let p1 = head, p2 = head;
    
    // cuenta el número de nodos en la lista enlazada usando 'p1'.
    while (p1 != null) {
        count++;
        p1 = p1.next;
    }
    
    // Obtenga el índice del nodo que se va a eliminar.
    let middleIndex = Math.floor(count / 2);
    
    // Segundo pase, deje que 'p2' se mueva hacia el predecesor del nodo medio.
    for (let i = 0; i < middleIndex - 1; ++i)
        p2 = p2.next;
    
    // Elimine el nodo medio y devuelva 'cabeza'.
    p2.next = p2.next.next;
    return head;
};
