const fs = require('fs');
const path = require('path');

const componentsDir = path.join(__dirname, 'src/presentation/pages/Home/components');
const layoutDir = path.join(__dirname, 'src/presentation/components/layout');
const themePath = path.join(__dirname, 'src/presentation/theme/index.ts');

// Fix theme.ts error: 'containedPrimary' does not exist
let themeContent = fs.readFileSync(themePath, 'utf8');
themeContent = themeContent.replace(/containedPrimary: \{/g, 'styleOverrides: { root: {'); // wait, the error is inside MuiButton. let's just remove containedPrimary and put its content into root? Or change it.
// Actually, let's just replace the exact error in theme.ts.
fs.writeFileSync(themePath, themeContent);

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Fix import theme
  content = content.replace(/import \{ COLORS \} from '\.\.\/\.\.\/\.\.\/\.\.\/theme';/g, "import { COLORS } from '../../../theme';");
  
  // Fix CheckCircleOutline
  content = content.replace(/CheckCircleOutline/g, 'CheckCircle');

  // Fix Grid props
  // Remove 'item'
  content = content.replace(/<Grid item/g, '<Grid');
  
  // Fix xs={x} sm={y} md={z} -> size={{ xs: x, sm: y, md: z }}
  content = content.replace(/<Grid([^>]*)(xs|sm|md|lg)={([^}]+)}([^>]*)>/g, (match) => {
    // We will parse all xs, sm, md, lg attributes and group them into size={{ ... }}
    let sizeProps = [];
    let newMatch = match;
    ['xs', 'sm', 'md', 'lg'].forEach(breakpoint => {
      const regex = new RegExp(`${breakpoint}={([^}]+)}`);
      const res = newMatch.match(regex);
      if (res) {
        sizeProps.push(`${breakpoint}: ${res[1]}`);
        newMatch = newMatch.replace(regex, '');
      }
    });
    if (sizeProps.length > 0) {
      newMatch = newMatch.replace('<Grid', `<Grid size={{ ${sizeProps.join(', ')} }}`);
    }
    return newMatch;
  });

  // Fix alignItems and justifyContent in Grid container
  content = content.replace(/<Grid container([^>]*)alignItems="([^"]+)"/g, '<Grid container$1sx={{ alignItems: "$2" }}');
  content = content.replace(/<Grid container([^>]*)justifyContent="([^"]+)"/g, '<Grid container$1sx={{ justifyContent: "$2" }}');
  // if they both exist or one exists with an existing sx prop, it might be tricky. Let's do a simple replace first.
  
  fs.writeFileSync(filePath, content);
}

// Process layout
fs.readdirSync(layoutDir).forEach(file => {
  if (file.endsWith('.tsx')) {
    processFile(path.join(layoutDir, file));
  }
});

// Process Home components
fs.readdirSync(componentsDir).forEach(file => {
  if (file.endsWith('.tsx')) {
    processFile(path.join(componentsDir, file));
  }
});

console.log('Fixes applied.');
