window.params = {
  canvasSize: 300,
  toDataURLType: "image/png",
  toDataURLOptions: 0.92,
};
console.log("Settings can be configured by modify window.params");
console.log(window.params);

document.getElementById("input").onchange = async (ev) => {
  const { canvasSize, toDataURLType, toDataURLOptions } = window.params;
  console.log("Use params %o", window.params);

  const [file] = ev.currentTarget.files;
  console.log(file);

  const $img = document.createElement("img");
  $img.width = $img.height = canvasSize;
  $img.src = URL.createObjectURL(file);
  await new Promise((r) => ($img.onload = r));

  const $p = document.createElement("p");
  $p.textContent = `Original: ${$img.naturalWidth}x${$img.naturalHeight}px, size = ${file.size} byte`;
  document.body.append($p);
  document.body.append($img);

  document.body.append(document.createElement("hr"));

  const $canvas = document.createElement("canvas");
  $canvas.width = $canvas.height = canvasSize;

  const context = $canvas.getContext("2d");
  context.drawImage($img, 0, 0, canvasSize, canvasSize);

  const base64 = $canvas.toDataURL(toDataURLType, toDataURLOptions);
  console.log(base64);

  const $img2 = document.createElement("img");
  $img2.width = $img2.height = canvasSize;
  $img2.src = base64;
  await new Promise((r) => ($img2.onload = r));

  const $p2 = document.createElement("p");
  $p2.textContent = `Base64: ${canvasSize}x${canvasSize}px, size = ${new Blob([base64]).size} byte`;
  document.body.append($p2);
  document.body.append($img2);
};
