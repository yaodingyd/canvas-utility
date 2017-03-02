var bg = document.getElementById('counter');
	var ctx = ctx = bg.getContext('2d');
	var imd = null;
	var circ = Math.PI * 2;
	var quart = Math.PI / 2;

	ctx.beginPath();
	ctx.strokeStyle = '#99CC33';
	ctx.lineCap = 'round';
	ctx.closePath();
	ctx.fill();
	ctx.lineWidth = 10.0;

	imd = ctx.getImageData(0, 0, 240, 240);

	var current = 0;

	var draw = function() {
			ctx.putImageData(imd, 0, 0);
			ctx.beginPath();
			ctx.arc(120, 120, 70, -(quart), ((circ) * (current / 100)) - quart, false);
			ctx.stroke();
			ctx.font = '30px Comic Sans MS';
			ctx.textAlign = 'center'
			ctx.fillText(current, 120, 130);
			if (++current < 80) {
				requestAnimationFrame(draw);
			}
	}

	requestAnimationFrame(draw);
