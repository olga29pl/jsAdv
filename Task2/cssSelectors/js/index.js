 function getAllDescendants(el) {
 var allDescendantsNodes = [];

function getDescendants(el) {
     allDescendantsNodes.push(el);

    for(var i = 0; i < el.childNodes.length; i++) {
    var current = el.childNodes[i];
        if(current.nodeType === Node.ELEMENT_NODE && current.childNodes.length) {
            getDescendants(current);
        } else {
            allDescendantsNodes.push(current);
        }
}
}
getDescendants(el);
allDescendantsNodes.shift(1);
return allDescendantsNodes;
}



