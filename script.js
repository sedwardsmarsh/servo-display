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
    // TODO: make sure these values are in [0,255]
    const num_shades = 3;
    const bin_width = (255 * 3) / num_shades;
    const shade_width = 255 / num_shades;
    let gray_shade = Math.ceil(color_sum / bin_width) * shade_width;

    imgData.data[i] = gray_shade;
    imgData.data[i + 1] = gray_shade;
    imgData.data[i + 2] = gray_shade;
    imgData.data[i + 3] = 255;
  }
  ctx.putImageData(imgData, 0, 0);
};
