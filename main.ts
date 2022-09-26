tiles.setCurrentTilemap(tilemap`level1`)
let car1 = sprites.create(assets.image`car1 back`, SpriteKind.Player)
car1.setPosition(80, 100)
controller.moveSprite(car1)
scene.cameraFollowSprite(car1)
forever(function () {
    if (car1.vx > 0) {
        car1.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . 2 2 2 2 2 2 2 2 . . . . 
            . . . 2 4 2 2 2 2 2 2 c 2 . . . 
            . . 2 c 4 2 2 2 2 2 2 c c 2 . . 
            . 2 c c 4 4 4 4 4 4 2 c c 4 2 d 
            . 2 c 2 e e e e e e e b c 4 2 2 
            . 2 2 e b b e b b b e e b 4 2 2 
            . 2 e b b b e b b b b e 2 2 2 2 
            . e e 2 2 2 e 2 2 2 2 2 e 2 2 2 
            . e e e e e e f e e e f e 2 d d 
            . e e e e e e f e e f e e e 2 d 
            . e e e e e e f f f e e e e e e 
            . e f f f f e e e e f f f e e e 
            . . f f f f f e e f f f f f e . 
            . . . f f f . . . . f f f f . . 
            . . . . . . . . . . . . . . . . 
            `)
    } else if (car1.vx < 0) {
        car1.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . 2 2 2 2 2 2 2 2 . . 
            . . . . . 2 c 2 2 2 2 2 2 4 2 . 
            . . . . 2 c c 2 2 2 2 2 2 4 c 2 
            . . d 2 4 c c 2 4 4 4 4 4 4 c c 
            . d 2 2 4 c b e e e e e e e 2 c 
            . 2 2 2 4 b e e b b b e b b e 2 
            . 2 2 2 2 2 e b b b b e b b b e 
            . 2 2 2 2 e 2 2 2 2 2 e 2 2 2 e 
            . 2 d d 2 e f e e e f e e e e e 
            . d d 2 e e e f e e f e e e e e 
            . e e e e e e e f f f e e e e e 
            . e e e e f f f e e e e f f f f 
            . . . e f f f f f e e f f f f f 
            . . . . f f f f . . . . f f f . 
            . . . . . . . . . . . . . . . . 
            `)
    } else if (car1.vy > 0) {
        car1.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . 2 2 2 2 2 2 . . . . 
            . . . . . 2 2 4 4 2 2 2 2 . . . 
            . . . . . c 4 2 2 2 2 2 c . . . 
            . . . . 2 c 4 2 2 2 2 2 c 2 . . 
            . . . e 2 c 4 2 2 2 2 2 c 2 e . 
            . . . f 2 c 4 2 2 2 2 2 c 2 f . 
            . . . f e c 2 2 2 2 2 2 c e f . 
            . . . f 2 c 2 b b b b 2 c 2 f . 
            . . . e 2 2 b c c c c b 2 2 e . 
            . . . e e b c c c c c c b e e . 
            . . . f e 4 4 4 4 4 4 4 4 e f . 
            . . . f e d 2 2 2 2 2 2 d e f . 
            . . . . 2 d d 2 2 2 2 d d 2 f . 
            . . . . f 2 d 2 2 2 2 d 2 f . . 
            . . . . . e 2 2 2 2 2 2 e . . . 
            `)
    } else if (car1.vy < 0) {
        car1.setImage(img`
            . . . . . . e e c c e e . . . . 
            . . . . . e 2 2 2 2 2 2 e . . . 
            . . . . 2 c 2 2 2 2 2 2 c 2 . . 
            . . . e 2 c 4 2 2 2 2 2 c 2 e . 
            . . . f 2 2 4 2 2 2 2 2 c 2 f . 
            . . . f 2 2 4 2 2 2 2 2 2 2 f . 
            . . . f 2 2 4 2 2 2 2 2 2 2 f . 
            . . . f 2 c 2 4 4 2 2 2 c 2 f . 
            . . . e 2 c e c c c c e c 2 e . 
            . . . e 2 e c b b b b c e 2 e . 
            . . . e 2 e b b b b b b e 2 e . 
            . . . e e e e e e e e e e e e . 
            . . . f e d e e e e e e d e f . 
            . . . f e 2 d e e e e d 2 e f . 
            . . . f f e e e e e e e e f f . 
            . . . . f f . . . . . . f f . . 
            `)
    }
})
