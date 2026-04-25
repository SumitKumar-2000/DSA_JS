let circles = [];

document.addEventListener("click", function (event) {
  if (circles.length >= 2) {
    document.body.removeChild(circles.shift()); // Remove the oldest circle
  }

  // Generate a random size between 20px and 100px
  let size = Math.floor(Math.random() * (100 - 20 + 1)) + 20;

  const circle = document.createElement("div");
  circle.classList.add("circle");
  circle.style.width = `${size}px`;
  circle.style.height = `${size}px`;

  // Ensure the circle does not overflow the screen
  let x = Math.min(event.clientX, window.innerWidth - size);
  let y = Math.min(event.clientY, window.innerHeight - size);

  circle.style.left = `${x}px`;
  circle.style.top = `${y}px`;

  document.body.appendChild(circle);
  circles.push(circle);
});

const circle = document.createElement("div");
circle.classList.add("circle");
document.body.appendChild(circle);



document.addEventListener("mousemove", (event) => {
  let size = 50; // Fixed size, can be randomized
  let x = Math.min(event.clientX, window.innerWidth - size);
  let y = Math.min(event.clientY, window.innerHeight - size);

  // Move the circle to follow the cursor
  circle.style.transform = `translate(${x}px, ${y}px)`;
});
