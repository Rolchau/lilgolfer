import Phaser from 'phaser';

export default class Ball extends Phaser.Physics.Arcade.Image {
  constructor(scene: Phaser.Scene, x: number, y: number, texture: string ) {
   super(scene,x, y, texture);
    scene.physics.add.existing(this);
    this.setCollideWorldBounds(true).setBounce(1);
    const body = this.body;
    body.setCircle(8,8, 8) ;
    this.setVelocityX(160);
    this.setVelocityY(70);
  }
}


