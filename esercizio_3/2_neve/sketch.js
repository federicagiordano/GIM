

const SNOWFLAKES_PER_LAYER = 50;
const MAX_SIZE = 17;
const GRAVITY = 0.350;
const LAYER_COUNT =8;

const SNOWFLAKES = [];


function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  

  for (let l = 0; l < LAYER_COUNT; l++) {
    SNOWFLAKES.push([]);
    for (let i = 0; i < SNOWFLAKES_PER_LAYER; i++) {
      SNOWFLAKES[l].push({
        x: random(width),
        y: random(height),
        mass: random(0.75, 2,5),
        l: l + 1
      });
    }
  }
}

function draw() {
  background("rgb(0,126,167)");
  

  for (let l = 0; l < SNOWFLAKES.length; l++) {
    const LAYER = SNOWFLAKES[l];

    for (let i = 0; i < LAYER.length; i++) {
      const snowflake = LAYER[i];
      circle(snowflake.x, snowflake.y, (snowflake.l * MAX_SIZE) / LAYER_COUNT);
      updateSnowflake(snowflake);
    }
  }
}



function updateSnowflake(snowflake) {
  const diameter = (snowflake.l * MAX_SIZE) / LAYER_COUNT;
  if (snowflake.y > height + diameter) snowflake.y = -diameter;
  else snowflake.y += GRAVITY * snowflake.l * snowflake.mass;
}
