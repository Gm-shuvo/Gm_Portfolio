export function getRandomColor() {
  const minContrastRatio = 6.5;
  const darkBackgroundColor = "#222";
  let color, r, g, b, relativeLuminance, contrastRatio;
  do {
    r = Math.floor(Math.random() * 256);
    g = Math.floor(Math.random() * 256);
    b = Math.floor(Math.random() * 256);
    relativeLuminance = getRelativeLuminance(r, g, b);
    contrastRatio = getContrastRatio(relativeLuminance, darkBackgroundColor);
  } while (contrastRatio < minContrastRatio);
  color = rgbToHex(r, g, b);
  return color;
}

function getRelativeLuminance(r, g, b) {
  const sRGB = [r, g, b].map((c) => {
    const s = c / 255;
    return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
  }); // convert RGB to sRGB
  const [rLinear, gLinear, bLinear] = sRGB;
  const luminance = 0.2126 * rLinear + 0.7152 * gLinear + 0.0722 * bLinear;
  return luminance;
}

function getContrastRatio(luminance1, luminance2) {
  const lightest = Math.max(luminance1, luminance2);
  const darkest = Math.min(luminance1, luminance2);
  const contrastRatio = (lightest + 0.05) / (darkest + 0.05);
  return contrastRatio;
}

function rgbToHex(r, g, b) {
  const hexR = r.toString(16).padStart(2, "0");
  const hexG = g.toString(16).padStart(2, "0");
  const hexB = b.toString(16).padStart(2, "0");
  const hexColor = `#${hexR}${hexG}${hexB}`;
  return hexColor;
}
