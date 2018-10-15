// function replaceElements(elem, newElem, arr) {

//     var listItems = document.querySelectorAll(elem + ' *');

//     var elem = document.querySelector(elem);

//     var newElem = document.createElement(newElem);

//     for(var i = 0; i < arr.length; i++) {
//        newElem.setAttribute(arr[i].key, arr[i].value);
//     }

//     for(var j = 0; j < listItems.length; j++) {
//         newElem.appendChild(listItems[j]);
//     }

//     var parent = elem.parentNode;

//     parent.replaceChild(newElem, elem);

//     console.log(listItems);
// }

replaceElements('ul.background', 'ol',[{ key: 'type', value: 'a' }, 
{ key: 'style', value: 'border: 1px dashed red; padding: 15px 35px;' }]);

replaceElements('span', 'i', [ { key: 'style', value: 'text-align: center; display: block;' } ]);




function replaceElements(cssSelector, tagName, attrs){

	var targetElements = document.querySelectorAll(cssSelector);

	for (var i = 0; i < targetElements.length; i++) {
		var current = targetElements[i];
		var newElement = document.createElement(tagName);

		for (var j = 0; j < current.childNodes.length; j++) {
			newElement.appendChild(current.childNodes[j].cloneNode(true));
		}

		for (var j = 0; j < current.attributes.length; j++) {
			newElement.setAttribute(current.attributes[i].nodeName, 
				current.attributes[i].nodeValue);
		}

		for (var j = 0; j < attrs.length; j++) {
			newElement.setAttribute(attrs[j].key, 
				attrs[j].value);
		}

		current.parentElement.replaceChild(newElement, current);
	}
}

// кастинговий event
// var clickEvent = new Event('click');
// ul.dispatchEvent(clickEvent);