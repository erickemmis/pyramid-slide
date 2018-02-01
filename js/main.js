
var change_pyramid = function() {
  var block = document.getElementById("block_type").value;
  var height = parseInt(document.getElementById("p_height").value);
  var pyramid = document.getElementById("pyramid");
  
  document.getElementById('height_num').innerHTML = height;
  
  draw_Pyramid(block,height,pyramid);
  
}

function draw_Pyramid(block, height, pyramid) {
  
  pyramid.innerHTML = '';
  
  for (var row = 0; row < height; row++) {
	  var num_blocks = row + 2;
	  var num_spaces = height - row -1;
    
    var rowStr = '';
    
    for (var i = 0; i < num_spaces; i++) {
	    rowStr += '&nbsp';
    }
    
    for (var i = 0; i < num_blocks; i++) {
      rowStr += block;
    }
    console.log(rowStr);
    
    rowElem = document.createElement("p");
    rowElem.innerHTML = rowStr;
    
    pyramid.appendChild(rowElem);
  }
}