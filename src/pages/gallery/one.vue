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
        p5.createCanvas(p5.windowWidth, p5.windowHeight);
        p5.background('black');
      };
      p5.draw = () => {
        if(p5.mouseIsPressed) {
          p5.fill('white');
          p5.textSize(150);
          p5.textFont('Helvetica');
          p5.stroke('white');
          p5.strokeWeight(6);
          p5.text('WORLD', p5.mouseX, p5.mouseY);
        } else {
            p5.fill('black');
            p5.textSize(150);
            p5.textFont('Helvetica');
            p5.stroke('white');
            p5.strokeWeight(6);
            p5.text('HELLO', p5.mouseX, p5.mouseY);
        }
      }; 
    }
    // Attach the canvas to the div
    const p5canvas = new P5(script, 'canvas');

    // Correction bug, inject two canvas.
    let canvasInPage = document.querySelectorAll("#canvas > canvas");
    if(canvasInPage.length === 2) {
      canvasInPage[0].remove();
    }
  }
}
</script>