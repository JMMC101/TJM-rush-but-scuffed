namespace SpriteKind {
    export const floor = SpriteKind.create()
    export const Emerald = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile_blank`, function (sprite, location) {
    controller.moveSprite(JM, 45, 45)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    JM,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . e e e e . . . . . . . 
        . . . . e e e e e e e . . . . . 
        . . . . . f f e f f e e . . . . 
        . . . . . 8 1 d 8 1 d . . . . . 
        . . . . . d d d d d d . . . . . 
        . . . . . d d f f d d . . . . . 
        . . . . 6 6 6 d d 6 6 6 . . . . 
        . . . 6 6 6 6 6 6 6 6 6 6 . . . 
        . . . 6 d 6 6 6 8 6 6 d 6 . . . 
        . . . d d 6 6 6 6 8 6 d d . . . 
        . . . d . 6 6 6 6 6 6 . d . . . 
        . . . . . . f . . f . . . . . . 
        . . . . . . f . . f . . . . . . 
        . . . . . f f . . f . . . . . . 
        . . . . . . . . f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . e e e e . . . . . . . 
        . . . . e e e e e e e . . . . . 
        . . . . . f f e f f e e . . . . 
        . . . . . 8 1 d 8 1 d . . . . . 
        . . . . . d d d d d d . . . . . 
        . . . . . d d f f d d . . . . . 
        . . . . 6 6 6 d d 6 6 6 . . . . 
        . . . 6 6 6 6 6 6 6 6 6 6 . . . 
        . . . 6 d 6 6 6 8 6 6 d 6 . . . 
        . . . d d 6 6 6 6 8 6 d d . . . 
        . . . d . 6 6 6 6 6 6 . d . . . 
        . . . . . . f . . f . . . . . . 
        . . . . . . f . . f . . . . . . 
        . . . . . . f . f f . . . . . . 
        . . . . . f f . . . . . . . . . 
        `],
    10,
    true
    )
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    animation.runImageAnimation(
    JM,
    assets.animation`JM_move_right`,
    10,
    false
    )
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    animation.runImageAnimation(
    JM,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . e e e e . . . . . . . 
        . . . . e e e e e e e . . . . . 
        . . . . . f f e f f e e . . . . 
        . . . . . 8 1 d 8 1 d . . . . . 
        . . . . . d d d d d d . . . . . 
        . . . . . d d f f d d . . . . . 
        . . . . 6 6 6 d d 6 6 6 . . . . 
        . . . 6 6 6 6 6 6 6 6 6 6 . . . 
        . . . 6 d 6 6 6 8 6 6 d 6 . . . 
        . . . d d 6 6 6 6 8 6 d d . . . 
        . . . d . 6 6 6 6 6 6 . d . . . 
        . . . . . . f . . f . . . . . . 
        . . . . . . f . . f . . . . . . 
        . . . . . f f . . f . . . . . . 
        . . . . . . . . f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . e e e e . . . . . . . 
        . . . . e e e e e e e . . . . . 
        . . . . . f f e f f e e . . . . 
        . . . . . 8 1 d 8 1 d . . . . . 
        . . . . . d d d d d d . . . . . 
        . . . . . d d f f d d . . . . . 
        . . . . 6 6 6 d d 6 6 6 . . . . 
        . . . 6 6 6 6 6 6 6 6 6 6 . . . 
        . . . 6 d 6 6 6 8 6 6 d 6 . . . 
        . . . d d 6 6 6 6 8 6 d d . . . 
        . . . d . 6 6 6 6 6 6 . d . . . 
        . . . . . . f . . f . . . . . . 
        . . . . . . f . . f . . . . . . 
        . . . . . . f . f f . . . . . . 
        . . . . . f f . . . . . . . . . 
        `],
    10,
    false
    )
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile_lava`, function (sprite, location) {
    music.stopAllSounds()
    game.gameOver(false)
})
info.onCountdownEnd(function () {
    music.stopAllSounds()
    game.setGameOverEffect(false, effects.dissolve)
    game.gameOver(false)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    JM,
    assets.animation`JM_move_right`,
    10,
    true
    )
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`BOOSTER`, function (sprite, location) {
    controller.moveSprite(JM, 150, 150)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Emerald`, function (sprite, location) {
    game.setGameOverEffect(true, effects.confetti)
    game.gameOver(true)
})
let JM: Sprite = null
tiles.setCurrentTilemap(tilemap`level1`)
JM = sprites.create(assets.image`JM`, SpriteKind.Player)
JM.setPosition(73, 85)
controller.moveSprite(JM, 60, 30)
scene.cameraFollowSprite(JM)
info.startCountdown(60)
music.play(music.createSong(assets.song`heat beat`), music.PlaybackMode.UntilDone)
