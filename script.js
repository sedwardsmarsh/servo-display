function update_filters() {
  // Get slider values
  const hue = document.getElementById("hueRange").value + "deg";
  const saturation = document.getElementById("saturationRange").value + "%";
  const brightness = document.getElementById("brightnessRange").value + "%";
  const contrast = document.getElementById("contrastRange").value + "%";

  dispatchUpdateFiltersEvent(hue, saturation, brightness, contrast);
}

function dispatchUpdateFiltersEvent(hue, saturation, brightness, contrast) {
  // construct an update filters event
  const updateFilters = new CustomEvent("updateFilters", {
    detail: {
      hue: hue,
      saturation: saturation,
      brightness: brightness,
      contrast: contrast,
    },
  });

  // Dispatch the custom event with updated values when a slider changes
  let el = document.getElementById("hueRange");
  el.dispatchEvent(updateFilters);
}

// update css #slider values on an updateFilters event
let root = document.documentElement;
let img = document.getElementById("myImg")
var tableElements = document.querySelectorAll(".slider");

tableElements.forEach(function (element) {
  element.addEventListener(
    "updateFilters",
    (e) => {
      console.log(e.detail);
      console.log(img)
      img.style.setProperty("--hue", e.detail.hue);
      img.style.setProperty("--saturation", e.detail.saturation);
      img.style.setProperty("--brightness", e.detail.brightness);
      img.style.setProperty("--contrast", e.detail.contrast);
    },
    false
  );
});
