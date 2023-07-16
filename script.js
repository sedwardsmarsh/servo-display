const img = document.getElementById("eeveelutions");
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

img.onload = function () {
  img.crossOrigin = "anonymous";
  ctx.drawImage(img, 0, 0);
  const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);

  // convert pixel data into grayscale
  for (i = 0; i < imgData.data.length; i += 4) {
    
    let color_sum = imgData.data[i] + imgData.data[i + 1] + imgData.data[i + 2];

    // quantize the color value into 5 states
    let gray_shade = 0;
    if (color_sum < 153) gray_shade = 51;
    else if (color_sum < 153 * 2) gray_shade = 51 * 2;
    else if (color_sum < 153 * 3) gray_shade = 51 * 3;
    else if (color_sum < 153 * 4) gray_shade = 51 * 4;
    else gray_shade = 51 * 5;

    imgData.data[i] = gray_shade;
    imgData.data[i + 1] = gray_shade;
    imgData.data[i + 2] = gray_shade;
    imgData.data[i + 3] = 255;
  }
  ctx.putImageData(imgData, 0, 0);
};
