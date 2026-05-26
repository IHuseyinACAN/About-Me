const fs = require('fs');

try {
  const css = fs.readFileSync('style.css', 'utf8');
  let openBraces = 0;
  let closeBraces = 0;
  let lines = css.split('\n');
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    for (let char of line) {
      if (char === '{') openBraces++;
      if (char === '}') closeBraces++;
    }
  }
  
  console.log(`Open braces: ${openBraces}`);
  console.log(`Close braces: ${closeBraces}`);
  if (openBraces === closeBraces) {
    console.log("Braces are balanced! No basic syntax error here.");
  } else {
    console.error("ERROR: Braces are NOT balanced! There is a syntax error.");
  }
} catch (err) {
  console.error(err);
}
