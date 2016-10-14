const drawBubble = () => {
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");

  var ok2animate = true;

  function Drop() {
    this.x = Math.random() * (canvas.width - 20);
    this.y = -Math.random() * 20;
    this.fallRate = Math.random()*.5+.5;
  }
  //
  Drop.prototype.draw = function () {
    ctx.beginPath();
    ctx.moveTo(this.x - 5, this.y);
    ctx.lineTo(this.x, this.y - 7);
    ctx.lineTo(this.x + 5, this.y);
    ctx.arc(this.x, this.y, 5, 0, Math.PI);
    ctx.closePath();
    ctx.fill();
    return (this);
  }
  //
  Drop.prototype.fall = function () {
    this.y += this.fallRate;
    return (this);
  }

  function animate() {

    // request another animation frame
    if (ok2animate) {
        requestAnimationFrame(animate);
    }

    // fill the canvas with the orange background
        ctx.fillStyle="orange";
        ctx.fillRect(0,0,canvas.width,canvas.height)
    //ctx.clearRect(0, 0, canvas.width, canvas.height);

    // make all drops fall and then redraw them
    ctx.fillStyle = "red";
    for (var i = 0; i < drops.length; i++) {
        drops[i].fall().draw();
    }

  }

  // $("#stop").click(function () {
  //   ok2animate = false;
  // });



  // an array of objects each representing 1 drop
  var drops = [];

  // add some test drops
  for (var i = 0; i < 10; i++) {
    drops.push(new Drop());
  }

  requestAnimationFrame(animate);

}

export default drawBubble
