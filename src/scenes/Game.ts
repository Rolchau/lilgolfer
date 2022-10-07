import Phaser from 'phaser'; import TextureKeys from '../constants/TextureKeys';
import Ball from '../game-objects/Ball';

export default class Game extends Phaser.Scene {
  constructor() {
    super('GameScene');
  }
    
  create() {
    const map = this.make.tilemap({ key: 'level-1' });
    const tileSet = map.addTilesetImage('walls', TextureKeys.Tiles);
    const wallsLayer = map.createLayer(0, tileSet, 0, 0);
    wallsLayer.setCollisionByProperty({ collides: true });

    const goalObj = map.createFromObjects('positions', { name: 'goal', key: TextureKeys.Goal})
    console.log(goalObj)
   
    const ballObj = map.createFromObjects('positions', { name: 'ball', key: TextureKeys.Goal, classType: Ball});
    console.log(ballObj);
    //debugGraphics(this, wallsLayer);
    this.physics.add.collider(ballObj, wallsLayer);
 }
}
