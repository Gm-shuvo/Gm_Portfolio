import React from 'react'
let color = ""
export const RanColor = () => {
  const code = "#" + Math.floor(Math.random() * 16777215).toString(16);
  color = code
  return (
    code
  )
}

// determine the brightness of the color using the HSP color model
const hsp = Math.sqrt(
  0.299 * parseInt(color.substring(1, 3), 16) ** 2 +
    0.587 * parseInt(color.substring(3, 5), 16) ** 2 +
    0.114 * parseInt(color.substring(5, 7), 16) ** 2
);

// generate a contrasting color for the text
export const textColor = () => { 
  return hsp > 127.5 ? "black" : "white";
}
  

