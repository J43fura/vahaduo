// Check if Marker's name correlates to a country adjectival
function Correlation(Adjectival, Marker) {
  if (Marker.includes(Adjectival)) {
    console.log("INCLUDED");
  } else {
    console.log("NOT INCLUDED");
  }
}
function hslToHex(h) {
	s = 100
	l = 50
  h /= 360;
  s /= 100;
  l /= 100;
  let r, g, b;
  if (s === 0) {
    r = g = b = l; // achromatic
  } else {
    const hue2rgb = (p, q, t) => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    };
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }
  const toHex = x => {
    const hex = Math.round(x * 255).toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  };
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

	f= {};
	for (i=1; i<document.getElementById("distances").rows.length; i++){
		//name
		name = document.getElementById("distances").rows[i].cells[1].innerHTML;
		//color
		color = document.getElementById("distances").rows[i].cells[0].getAttribute('style').split(';')[1].split('(')[1].split(',')[0];
		//
		f[name] = hslToHex(Number(color));
		console.log(name,color,f[name])
			}
  "Tunisian",
  "Tunisian_Guebelli_106064.626421.6245798.010265.016545",
  //color
  document.getElementById("distances").rows[1].cells[0].getAttribute('style').split(';')[1],
  >'background-color:hsl(39.41378963529803, 100%, 50%)',
  //Marker name
  document.getElementById("distances").rows[1].cells[1].innerHTML,
  //rows 1 -> n cells 0 - 1


  //ychouf kel esm lbled mawjoud
  //ken ey yeou el loun 
  // yedhen el bled bel loun1332-1248



);

//how to execute js code in terminal visual studio code
//miss you
//vahuduo 25 markers
