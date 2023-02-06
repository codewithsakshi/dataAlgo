const preOrderTraversal = (node, array) => {
    if(!node) return array;
    array.push(node.value);
    array = preOrderTraversal(node.left, array);
    array = preOrderTraversal(node.right, array);
    return array;
}

const inOrderTraversal = (node, array) => {
    if(!node) return array;
    array = inOrderTraversal(node.left, array);
    array.push(node.value);
    array = inOrderTraversal(node.right, array);
    return array;
}

const postOrderTraversal = (node, array) => {
    if(!node) return array;
    array = postOrderTraversal(node.left, array);
    array = postOrderTraversal(node.right, array);
    array.push(node.value);
    return array;
}