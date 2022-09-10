import Phaser from 'phaser'; import TextureKeys from '../constants/TextureKeys';

export default class Demo extends Phaser.Scene {
  constructor() {
    super('GameScene');
  }

  create() {
    const map = this.make.tilemap({ key: 'level-1' });
    const tileSet = map.addTilesetImage('walls', TextureKeys.Tiles);
    const wallsLayer = map.createLayer(0, tileSet, 0, 0);
    wallsLayer.setCollisionByProperty({ collides: true });

    const debugGraphics = this.add.graphics().setAlpha(0.7);
    wallsLayer.renderDebug(debugGraphics, {
      tileColor: null,
      collidingTileColor: new Phaser.Display.Color(243, 234, 48, 255),
      faceColor: new Phaser.Display.Color(40, 39, 37, 255)
    });
  }
}
