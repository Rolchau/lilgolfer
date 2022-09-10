import Phaser from 'phaser';

const physicsObj = {
  default: 'arcade',
  arcade: {
    debug: true,
    fixedStep: true,
  },
};

export default {
  type: Phaser.CANVAS,
  parent: 'game', //DOM node with id="game"
  dom: {
    createContainer: true,
  },
  backgroundColor: '#00A3DA',
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: 700,
    height: 600,
    min: {
      width: 375,
      height: 600,
    },
    max: {
      width: 700,
      height: 600,
    },
  },
  fps: {
    target: 60,
    smoothStep: true,
  },
  physics: physicsObj,
  pixelArt: false,
  antialiasGL: false,
  batchSize: 512,
}
