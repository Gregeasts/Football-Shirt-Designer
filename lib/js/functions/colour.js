// var randomColor = '#'+ ('000000' + Math.floor(Math.random()*16777215).toString(16)).slice(-6);

var colours = ['primary', 'secondary', 'tertiary', 'accent','logo'];

for (var i = 0; i < 4; i++) {
  var randomColor = '#'+ ('000000' + Math.floor(Math.random()*16777215).toString(16)).slice(-6);
  console.log(randomColor);
  $('.' + colours[i] ).attr('fill', randomColor);
  $('#' + colours[i] + 'SelectorSvg').attr('fill', randomColor);
  console.log(($('.' + colours[i] ).attr('fill', randomColor)));
  console.log("here colour")
  
}
