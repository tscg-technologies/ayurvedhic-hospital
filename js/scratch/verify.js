const fs = require('fs');
const path = require('path');

const html = fs.readFileSync('index.html', 'utf8');
console.log('HTML size:', html.length, 'characters');

// Check asset images
const imgMatches = [...html.matchAll(/src=["'](assets\/images\/[^"']+)["']/g)];
const uniqueImgs = [...new Set(imgMatches.map(m => m[1]))];
let allFound = true;
uniqueImgs.forEach(img => {
  const exists = fs.existsSync(img);
  console.log(`[${exists ? 'OK' : 'MISSING'}] ${img}`);
  if (!exists) allFound = false;
});

// Check key IDs referenced in JS
const js = fs.readFileSync('js/main.js', 'utf8');
const idMatches = [...js.matchAll(/getElementById\(['"]([^'"]+)['"]\)/g)];
const uniqueIds = [...new Set(idMatches.map(m => m[1]))];

console.log('\nChecking DOM IDs referenced in JS:');
let missingIds = 0;
uniqueIds.forEach(id => {
  // Check if id exists in HTML or if it is created dynamically or optional
  const hasId = html.includes(`id="${id}"`);
  if (!hasId) {
    console.log(`[WARN/DYNAMIC] ID not found directly in HTML: ${id}`);
    missingIds++;
  } else {
    console.log(`[OK] ID: ${id}`);
  }
});

console.log(`\nAssets verified. Missing images: ${allFound ? 'None' : 'Yes'}, Unmatched IDs count: ${missingIds}`);
