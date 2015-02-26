// ACCELEROMETER - operate on the phone

var x = 0;
var y = 0;

// acceleration
var ax = 0;
var ay = 0;

// velocity
var vx = 0;
var vy = 0;

window.ondevicemotion = function(event) {
  var rotationX = event.accelerationIncludingGravity.x;
  var rotationY = event.accelerationIncludingGravity.y;
  var rotationZ = event.accelerationIncludingGravity.z;

  ax = rotationX;
  ay = rotationY;

  console.log(rotationX, rotationY, rotationZ);
};

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');

document.body.appendChild(canvas);

// updates
requestAnimationFrame(function animate() {
	requestAnimationFrame(animate);

	// acceleration
	vx += ax;
	vy += ay;

	//friction
	vx *= 0.5;
	vy *= 0.5;

	// velocity
	x += vx;
	y += vy;

	// boundaries
	if (x < 0) {
		x = 0;
		vx *= -1;
	}

	if (x > canvas.width - 10) {
		x = canvas.width - 10;
		vx *= -1;
	}

	if (y < 0) {
		y = 0;
		vy *= -1;
	}

	if (y > canvas.height - 10) {
		y = canvas.height - 10;
		vy *= -1;
	}

	// clear screen
	ctx.fillStyle = 'black';
	ctx.fillRect(0,0, canvas.width, canvas.height);

	// draw box
	canvas.fillStyle = 'white';
	ctx.fillRect(x,y, 10, 10);
});
