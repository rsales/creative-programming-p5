<template>
  <div id="canvas"></div>
</template>

<script>
import P5 from 'p5'

export default {
  name: 'One',
  components: {
    P5
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
  }
}
</script>