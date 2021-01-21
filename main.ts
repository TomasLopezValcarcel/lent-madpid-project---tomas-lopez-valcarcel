tiles.setTilemap(tiles.createTilemap(hex`10001000020303030303030303030303030303060108080808080808080808080808080501080a0a0a0a0a080a0a080808080805010a0a080c0c0c0c0c0c090a09080805010a0c080a0a080a0a080c0c0c0a0805010a0c0c0a080a09090a0a0a0808080501080c0c0c0c0c090809080a0808080501080a09080a0a0a0a080a0a0a08080501080a09080a09080c0c08090a08080501080a09080a0809080908090a08080b01080a090808080c0808090908080c0501080809080808080a0a09080808080501080809090c0c0c0c090a0a0808080501080a0a0a0a0a0808080808080a0805010808080c0c0c0c0c0c0c0a0a0a0a050c0c0c0c040404040404040404040407`, img`
    . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 . . . . . . . . . . . . . . 2 
    2 . . . . . . . . . . . . . . 2 
    2 . . . 2 2 2 2 2 2 . . . . . 2 
    2 . 2 . . . . . . . 2 2 2 . . 2 
    2 . 2 2 . . . . . . . . . . . 2 
    2 . 2 2 2 2 2 . . . . . . . . 2 
    2 . . . . . . . . . . . . . . 2 
    2 . . . . . . . 2 2 . . . . . 2 
    2 . . . . . . . . . . . . . . . 
    2 . . . . . . 2 . . . . . . 2 2 
    2 . . . . . . . . . . . . . . 2 
    2 . . . . 2 2 2 2 . . . . . . 2 
    2 . . . . . . . . . . . . . . 2 
    2 . . . 2 2 2 2 2 2 2 . . . . 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    `, [myTiles.transparency16,sprites.dungeon.darkGroundWest,sprites.dungeon.darkGroundNorthWest0,sprites.dungeon.darkGroundNorth,sprites.dungeon.darkGroundSouth,sprites.dungeon.darkGroundEast,sprites.dungeon.darkGroundNorthEast0,sprites.dungeon.darkGroundSouthEast0,sprites.dungeon.darkGroundCenter,sprites.dungeon.darkGroundNorthWest1,sprites.dungeon.darkGroundNorthEast1,sprites.dungeon.doorLockedEast,sprites.dungeon.floorLight0], TileScale.Sixteen))
scene.centerCameraAt(0, 10000000)
let mySprite = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
mySprite.setPosition(28, 70)
mySprite.ay = 500
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
forever(function () {
	
})
