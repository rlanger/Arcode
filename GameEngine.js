
GameEngineClass = Class.extend({

	entities: [],
	factory: {}

	spawnEntity: function (typename) {
		var ent = new (factory[typename])();
		this.entities.push(ent);
		return ent;
	}

	move_dir: new Vec2(0,0),
	dirVec: new Vec2(0,0),

	gPlayer0: {
		pos: {
			x: 100,
			y: 100
		}

		walkSpeed 1,

		mpPhysBody: new BodyDef()
	},

	setup: function () {
		gInput.setup();
	},

	update: function () {
		if (gInput.actions['move-left']) {
			game.move_dir.x -=1;
		}

		if (gInput.action['move-right']) {
			game.move_dir.x +=1;
		}

		if (game.move_dir.LengthSquared()) {
			game.move_dir.Normalize();
			game.move_dir.Multiply(game.gPlayer0.walkSpeed);
		}

		game.gPlayer0.mpPhysBody.setLinearVelocity (game.move_dir.x, game.move_dir.y);

		for (var i=0; i<this.entities.length; i++) {
			var ent = this.entities[i];
			ent.update();
		}

	},

	draw: function () {
		var zIndex_array = [];
		var entities_bucketed_by_zIndex = {};
		game.entities.forEach(function(entity) {
			//bucket by zindex
			if (zIndex_array.indexOf(entity.zIndex) === -1)
			{
				zIndex_array.push(entity.zIndex);
				entities_bucketed_by_zIndex[entity.zIndex] = []
			}
			entities_bucketed_by_zIndex[entity.zIndex].push(entity)
		}))

		//draw entities sorted by zIndex
		zIndex_array.sort(function (a,b) {return a - b});
		zIndex_array.forEach(function(zIndex {
			entities_bucketed_by_zIndex[zIndex].forEach(function(entity{
				entity.draw(fractionOfNextPhysicsUpdate);
			});
		});
	}

});

game = new GameEngineClass();