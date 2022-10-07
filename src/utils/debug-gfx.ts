import Phaser from 'phaser';

const debugGraphics = (scene: Phaser.Scene, layer: Phaser.Tilemaps.TilemapLayer) => {
  const debugGfx = scene.add.graphics().setAlpha(0.7);

    layer.renderDebug(debugGfx, {
      tileColor: null,
      collidingTileColor: new Phaser.Display.Color(243, 234, 48, 255),
      faceColor: new Phaser.Display.Color(40, 39, 37, 255)
    });
 
  
}

export default debugGraphics;
