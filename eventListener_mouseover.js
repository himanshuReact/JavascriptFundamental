// app.js

let squareShape = document.querySelector(".square");
let interval;
squareShape.addEventListener("mouseover", () => {
  console.log("hovering");
  let count = 0;
  interval = setInterval(() => {
    console.log(count++);
  }, 1000);
});

squareShape.addEventListener("mouseout", () => {
  console.log("Yay let's have some fun");
  clearInterval(interval);
});


//styles.css
.square {
  height: 100px;
  width: 100px;
  color: red;
  background-color: blue;
}


//index.html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="./src/styles.css" />
    <script src="./src/app.js" defer></script>
  </head>

  <body>
    <div class="square" />
  </body>
</html>
