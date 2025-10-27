/**
 * SVG to JSON Converter for Kitra Icons
 * 
 * USAGE:
 * 1. Get icons from Figma as "Copy as SVG" or Export → SVG
 * 2. Put all SVG files in scripts/svg-input/ folder
 * 3. node scripts/svg-to-json.js
 * 4. Output: src/components/Icons/iconPaths.json will be updated
 */

const fs = require('fs');
const path = require('path');

// Input and output paths
const INPUT_DIR = path.join(__dirname, 'svg-input');
const OUTPUT_FILE = path.join(__dirname, '../src/components/Icons/iconPaths.json');

// Extract paths from SVG file
function extractPathsFromSVG(svgContent, fileName) {
  // Find viewBox
  const viewBoxMatch = svgContent.match(/viewBox=["']([^"']*)["']/i);
  const viewBox = viewBoxMatch ? viewBoxMatch[1] : '0 0 24 24';

  // Find path elements (both fill and stroke supported)
  const pathRegex = /<path[^>]*>/gi;
  const paths = [];
  let match;

  while ((match = pathRegex.exec(svgContent)) !== null) {
    const pathElement = match[0];
    
    // Extract d attribute
    const dMatch = pathElement.match(/\sd="([^"]*)"/i);
    if (!dMatch) continue;
    
    const d = dMatch[1];
    
    // Check if stroke or fill
    const hasStroke = /\sstroke=/i.test(pathElement);
    const hasFill = /\sfill=["'](?!none)/i.test(pathElement);
    
    if (hasStroke) {
      // Extract stroke properties
      const strokeWidthMatch = pathElement.match(/stroke-width=["']([^"']*)["']/i);
      const strokeLinecapMatch = pathElement.match(/stroke-linecap=["']([^"']*)["']/i);
      const strokeLinejoinMatch = pathElement.match(/stroke-linejoin=["']([^"']*)["']/i);
      
      paths.push({
        d,
        stroke: true,
        strokeWidth: strokeWidthMatch ? parseFloat(strokeWidthMatch[1]) : undefined,
        strokeLinecap: strokeLinecapMatch ? strokeLinecapMatch[1] : undefined,
        strokeLinejoin: strokeLinejoinMatch ? strokeLinejoinMatch[1] : undefined,
      });
    } else {
      // Just d string (for fill)
      paths.push(d);
    }
  }

  if (paths.length === 0) {
    console.warn(`⚠️  ${fileName}: No path found!`);
    return null;
  }

  // If all paths are simple strings and viewBox is standard
  const allSimple = paths.every(p => typeof p === 'string');
  if (allSimple && viewBox === '0 0 24 24') {
    return paths.length === 1 ? paths[0] : paths;
  }

  // Use extended format
  return {
    viewBox,
    paths: paths.length === 1 ? [paths[0]] : paths,
  };
}

// Generate icon name from filename
function generateIconName(fileName) {
  return fileName
    .replace('.svg', '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

// Main process
function convertSVGsToJSON() {
  // Check input folder
  if (!fs.existsSync(INPUT_DIR)) {
    fs.mkdirSync(INPUT_DIR, { recursive: true });
    console.log('📁 svg-input folder created!');
    console.log(`📥 Place your SVG files here: ${INPUT_DIR}`);
    return;
  }

  // Read existing iconPaths.json (if exists)
  let existingIcons = {};
  if (fs.existsSync(OUTPUT_FILE)) {
    existingIcons = JSON.parse(fs.readFileSync(OUTPUT_FILE, 'utf-8'));
  }

  // Read SVG files
  const svgFiles = fs.readdirSync(INPUT_DIR).filter(f => f.endsWith('.svg'));

  if (svgFiles.length === 0) {
    console.log('⚠️  No SVG files found in svg-input folder!');
    console.log(`📥 Place your SVG files here: ${INPUT_DIR}`);
    return;
  }

  console.log(`\n🔄 Processing ${svgFiles.length} SVG files...\n`);

  const newIcons = {};
  let successCount = 0;
  let skipCount = 0;
  let errorCount = 0;

  svgFiles.forEach(fileName => {
    const iconName = generateIconName(fileName);
    const filePath = path.join(INPUT_DIR, fileName);
    const svgContent = fs.readFileSync(filePath, 'utf-8');

    const paths = extractPathsFromSVG(svgContent, fileName);

    if (paths) {
      newIcons[iconName] = paths;
      const pathCount = Array.isArray(paths) ? paths.length : 1;
      console.log(`✅ ${iconName} (${pathCount} path)`);
      successCount++;
    } else {
      errorCount++;
    }
  });

  // Merge existing and new icons
  const allIcons = { ...existingIcons, ...newIcons };

  // Sort alphabetically
  const sortedIcons = Object.keys(allIcons)
    .sort()
    .reduce((acc, key) => {
      acc[key] = allIcons[key];
      return acc;
    }, {});

  // Write to JSON
  fs.writeFileSync(
    OUTPUT_FILE,
    JSON.stringify(sortedIcons, null, 2),
    'utf-8'
  );

  console.log(`\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`);
  console.log(`✅ Success: ${successCount}`);
  console.log(`⚠️  Error: ${errorCount}`);
  console.log(`📝 Total icons: ${Object.keys(sortedIcons).length}`);
  console.log(`📄 Output: ${OUTPUT_FILE}`);
  console.log(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`);

  // Archive processed files (optional)
  const archiveDir = path.join(INPUT_DIR, 'processed');
  if (!fs.existsSync(archiveDir)) {
    fs.mkdirSync(archiveDir, { recursive: true });
  }

  svgFiles.forEach(fileName => {
    const oldPath = path.join(INPUT_DIR, fileName);
    const newPath = path.join(archiveDir, fileName);
    fs.renameSync(oldPath, newPath);
  });

  console.log(`📦 Processed SVG files moved to ${archiveDir}.\n`);
}

// Run script
convertSVGsToJSON();
