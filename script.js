// let img1 = document.getElementById('image1');
// let img2 = document.getElementById('image2');
// let img3 = document.getElementById('image3');
// let img4 = document.getElementById('image4');

// function changeImage () {
//     if (img1.style.display === 'inline-block') {
//         img1.style.display = 'none';
//         img2.style.display = 'inline-block';
//     } else if (img2.style.display === 'inline-block') {
//         img2.style.display = 'none';
//         img3.style.display = 'inline-block';
//     } else if (img3.style.display === 'inline-block') {
//         img3.style.display = 'none';
//         img4.style.display = 'inline-block';
//     } else {
//         img4.style.display = 'none';
//         img1.style.display = 'inline-block';
//     }
// }

// img.addEventListener("click", changeImage);

let currentImage = 1;
const img = document.getElementById('image');

function changeImage() {
  currentImage++;

  if (currentImage > 4) {
    currentImage = 1;
  }

  img.src = `image${currentImage}.jpg`;
}

img.addEventListener("click", changeImage);
