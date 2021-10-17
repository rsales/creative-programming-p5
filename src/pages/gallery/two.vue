<template>
  <ReturnPage/>
  <div id="canvas" style="z-index: -1;"></div>
</template>

<script>
import P5 from 'p5'
import ReturnPage from '../../components/return/ReturnPage.vue'

export default {
  name: 'DrawerOne',
  components: {
    P5,
    ReturnPage
  },
  mounted() {
    const script = p5 => {
      // These are your typical setup() and draw() methods
      p5.setup = () => {
        p5.createCanvas(p5.windowWidth, p5.windowHeight, p5.WEBGL);
      };
      p5.draw = () => {
        p5.background('black');

        p5.translate(-240, -100, 0);
        p5.normalMaterial();
        p5.push();
        p5.rotateZ(p5.frameCount * 0.01);
        p5.rotateX(p5.frameCount * 0.01);
        p5.rotateY(p5.frameCount * 0.01);
        p5.plane(70);
        p5.pop();

        p5.translate(240, 0, 0);
        p5.push();
        p5.rotateZ(p5.frameCount * 0.01);
        p5.rotateX(p5.frameCount * 0.01);
        p5.rotateY(p5.frameCount * 0.01);
        p5.box(70, 70, 70);
        p5.pop();

        p5.translate(240, 0, 0);
        p5.push();
        p5.rotateZ(p5.frameCount * 0.01);
        p5.rotateX(p5.frameCount * 0.01);
        p5.rotateY(p5.frameCount * 0.01);
        p5.cylinder(70, 70);
        p5.pop();

        p5.translate(-240 * 2, 200, 0);
        p5.push();
        p5.rotateZ(p5.frameCount * 0.01);
        p5.rotateX(p5.frameCount * 0.01);
        p5.rotateY(p5.frameCount * 0.01);
        p5.cone(70, 70);
        p5.pop();

        p5.translate(240, 0, 0);
        p5.push();
        p5.rotateZ(p5.frameCount * 0.01);
        p5.rotateX(p5.frameCount * 0.01);
        p5.rotateY(p5.frameCount * 0.01);
        p5.torus(70, 20);
        p5.pop();

        p5.translate(240, 0, 0);
        p5.push();
        p5.rotateZ(p5.frameCount * 0.01);
        p5.rotateX(p5.frameCount * 0.01);
        p5.rotateY(p5.frameCount * 0.01);
        p5.sphere(70);
        p5.pop();
      }
    }
    // Attach the canvas to the div
    const p5canvas = new P5(script, 'canvas');
  }
}
</script>