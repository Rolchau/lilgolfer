import Phaser from 'phaser';
import TextureKeys from '../constants/TextureKeys';

export default class Preloader extends Phaser.Scene {
  constructor() {
    super('preloader')
  }

  preload() {
    this.load.image(TextureKeys.Tiles, 'assets/tiles/tiles.png');
    this.load.image(TextureKeys.Goal, 'assets/goal.png');
    this.load.tilemapTiledJSON('level-1', 'assets/tiles/level-1.json');
  }

  create() {
    this.scene.start('GameScene');
  }
}

