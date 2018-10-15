   (function(){
    var count = 0;
       var ul = document.getElementById("id1");
   
       if(ul) {
        var ulChilds = ul.childNodes;
   
        for (var i = 0; i < ulChilds.length; i++) {
         var currentChild = ulChilds[i];
   
         if(currentChild.nodeType === Node.COMMENT_NODE
          && currentChild.data.trim() === "red"){
          count++;
         }
        }
       }
       console.log("Count of comments with data of 'red' = " + count);
       return count;
   }());


   
   var applyColors = function (ulClass){

    var listItems = document.querySelectorAll('ul.' + ulClass + ' li');

    for(var i = 0; i < listItems.length; i++) {
       var prevNode = listItems[i].previousSibling;
       
       while(prevNode && prevNode.nodeType !== Node.COMMENT_NODE) {
         prevNode = prevNode.previousSibling;
       }

    if(prevNode) {

    if(ulClass === 'background'){
       listItems[i].style.backgroundColor = prevNode.data.trim();
    }else if(ulClass === 'foreground'){
       listItems[i].style.color = prevNode.data.trim();
    }

    }else{
    listItems[i].style.color = "black";
    }
   }  
  };
    
 applyColors('background'); 
 applyColors('foreground'); 



//  var applyColors = function (ulClass){

//   var lis = document.querySelectorAll('ul.' + ulClass + ' li');

//   for(var i = 0; i < lis.length; i++) {

// var commentNode = lis[i].previousSibling;

// while(commentNode && commentNode.nodeType !== Node.COMMENT_NODE) {
// commentNode  = commentNode.previousSibling;
// }

// if(commentNode) {
//   lis[i].style[ulClass === 'foreground' ? 'color' : 'backgroundColor'] = commentNode.data.trim();
// }
  
//   }
// };
  
// applyColors('background'); 
// applyColors('foreground'); 



