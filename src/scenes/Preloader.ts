import Phaser from 'phaser';
import TextureKeys from '../constants/TextureKeys';

export default class Preloader extends Phaser.Scene {
  constructor() {
    super('preloader')
  }

  preload() {
    this.load.image(TextureKeys.Logo, 'assets/phaser3-logo.png');
  }

  create() {
    this.scene.start('game');
  }
}

