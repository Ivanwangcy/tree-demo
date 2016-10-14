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
  }
}

export default drawBack
