tiles.setTilemap(tiles.createTilemap(hex`10001000020303030303030303030303030303060109090909090909090909090909090501090b0b0b0b0b090b0b090909090905010b0b090d0d0d0d0d0d0a0b0a090905010b0d090b0b090b0b090d0d0d0b0905010b0d0d0b090b0a0a0b0b0b0909090501090d0d0d0d0d0a090a090b0909090501090b0a090b0b0b0b090b0b0b09090501090b0a090b0a090d0d090a0b09090501090b0a090b090a090a090a0b09090c01090b0a0909090d09090a0a09090d050109090a090909090b0b0a09090909050109090a0a0d0d0d0d0a0b0b0909090501090b0b0b0b0b0909090909090b0905010909090d0d0d0d0d0d0d0b0b0b0b05070d0d0d040404040404040404040408`, img`
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
    `, [myTiles.transparency16,sprites.dungeon.darkGroundWest,sprites.dungeon.darkGroundNorthWest0,sprites.dungeon.darkGroundNorth,sprites.dungeon.darkGroundSouth,sprites.dungeon.darkGroundEast,sprites.dungeon.darkGroundNorthEast0,sprites.dungeon.darkGroundSouthWest0,sprites.dungeon.darkGroundSouthEast0,sprites.dungeon.darkGroundCenter,sprites.dungeon.darkGroundNorthWest1,sprites.dungeon.darkGroundNorthEast1,sprites.dungeon.doorLockedEast,sprites.dungeon.floorLight0], TileScale.Sixteen))
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
mySprite.setPosition(0, 0)
controller.moveSprite(mySprite)
