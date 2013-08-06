

PlayerClass = EntityClass.extend({

	color = "#0F0",

	pos {x:400, y:100},

	size {x:20; y:20},

	draw: function() {
		context.fillStyle = this.color;
    	context.fillRect(this.pos.x - (this.size.x/2), this.pos.y - (this.size.y/2), this.size.x, this.size.y);
	}

});

game.factory['Player'] = PlayerClass;