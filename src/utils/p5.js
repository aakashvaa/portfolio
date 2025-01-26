let cols, rows
let colNoise, rowNoise, colorNoise
let gridScale = 20
let time = 0

function setup() {
    createCanvas(windowWidth, windowHeight)
    background(0)
    noFill()

    cols = floor(width / gridScale)
    rows = floor(height / gridScale)

    colNoise = random(10)
    rowNoise = random(10)
    colorNoise = random(10)
}

function draw() {
    background(0, 25) // Create a trailing effect

    colNoise += 0.01
    rowNoise += 0.01
    colorNoise += 0.01
    time += 0.01

    for (let col = 0; col < cols; col++) {
        for (let row = 0; row < rows; row++) {
            let x = col * gridScale + gridScale / 2
            let y = row * gridScale + gridScale / 2

            let noiseVal = noise(
                colNoise + col * 0.1,
                rowNoise + row * 0.1,
                time
            )
            let angle = noiseVal * TWO_PI
            let length = noiseVal * gridScale

            let r = noise(colorNoise + col * 0.1) * 255
            let g = noise(colorNoise + row * 0.1) * 255
            let b = noise(colorNoise + (col + row) * 0.1) * 255

            stroke(r, g, b, 150)
            strokeWeight(2)

            let x1 = x + cos(angle) * length
            let y1 = y + sin(angle) * length
            let x2 = x - cos(angle) * length
            let y2 = y - sin(angle) * length

            line(x1, y1, x2, y2)
        }
    }
}
// {
//   let angleNoise, radiusNoise, colorNoise;
// let angle = 0;
// let radius = 0;

// function setup() {
//   createCanvas(windowWidth, windowHeight);
//   background("#0f0f0f");
//   noFill();
//   angleNoise = random(10);
//   radiusNoise = random(10);
//   colorNoise = random(10);
// }

// function draw() {
//   translate(width / 2, height / 2);
//   background(15, 15, 15, 20); // Create a trailing effect

//   for (let i = 0; i < 100; i++) {
//     radiusNoise += 0.01;
//     radius = noise(radiusNoise + i) * 300;

//     angleNoise += 0.01;
//     angle += noise(angleNoise + i) * TWO_PI / 50;

//     colorNoise += 0.01;
//     let r = noise(colorNoise + i) * 255;
//     let g = noise(colorNoise + i + 5) * 255;
//     let b = noise(colorNoise + i + 10) * 255;

//     stroke(r, g, b, 100);
//     strokeWeight(2);

//     let x = radius * cos(angle);
//     let y = radius * sin(angle);

//     point(x, y);
//   }
// }
// }
