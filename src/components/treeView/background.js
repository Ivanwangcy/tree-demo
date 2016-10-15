import drawBubble from './bubble'

const drawBack = (container, context) => {

  // console.log("创建完成");

  // var container = document.getElementById("treeView");
  // console.log(container);
  // var context=container.getContext("2d");
  // debugger
  var image = new Image();
  image.src = "/dist/assets/back.jpeg";
  image.onload = function(){
    var height = image.height * (container.width / image.width);
    container.height = height;
    context.drawImage(image, 0, 0, container.width, container.height);
    drawBubble(container, context, image, {
      type : 'linear',
      revolve : 'center',
      minSpeed : 100,
      maxSpeed : 500,
      minSize : 20,
      maxSize : 20,
      num : 10,
      colors : new Array('#FF0000','#FFFFFF','#BBBBBB')
    })
  }

  return image;
}

export default drawBack
