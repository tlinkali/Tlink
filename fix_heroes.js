const fs = require('fs');
const path = require('path');

const files = [
  'src/pages/Xdsl.tsx',
  'src/pages/Vpn.tsx',
  'src/pages/VoipSip.tsx',
  'src/pages/Audit.tsx',
  'src/pages/Sante.tsx',
  'src/pages/PbxStandard.tsx',
  'src/pages/TelephonieUnifiee.tsx',
  'src/pages/TelephonieOverview.tsx',
  'src/pages/SolutionStudio.tsx',
  'src/pages/TelephonieHebergee.tsx',
  'src/pages/Support.tsx',
  'src/pages/Security.tsx',
  'src/pages/PolitiqueConfidentialite.tsx',
  'src/pages/Formation.tsx',
  'src/pages/CentreAppel.tsx',
  'src/pages/SolutionWifi.tsx'
];

const newHero = `      <section className="relative min-h-[70vh] flex items-center pt-40 pb-24 overflow-hidden bg-deep-navy -mt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(37,99,235,0.2),transparent_70%)]" />
          <div className="absolute top-0 left-0 w-full h-full opacity-[0.05]" 
               style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
          <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white via-white/40 to-transparent" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">`;

files.forEach(file => {
  const filePath = path.join(process.cwd(), file);
  if (!fs.existsSync(filePath)) {
    console.log(`File not found: ${file}`);
    return;
  }
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Try to match the section and everything until the container div
  // The pattern matches <section ...> up to <div className="container ...">
  const regex = /<section className="relative (pt-32 pb-20|pt-24 pb-16) overflow-hidden min-h-\[[^\]]*\] flex items-center -mt-20">[\s\S]*?<div className="container mx-auto px-4 relative z-10">/g;
  
  if (regex.test(content)) {
    content = content.replace(regex, newHero);
    fs.writeFileSync(filePath, content);
    console.log(`Updated: ${file}`);
  } else {
    // Try a second variant for pages like Support.tsx which might have different padding or structure
    const regex2 = /<section className="relative (pt-32 pb-20|pt-24 pb-16|pt-40 pb-24)[\s\S]*?bg-gradient-to-br[\s\S]*?<div className="container mx-auto px-4 relative z-10">/g;
    if (regex2.test(content)) {
       content = content.replace(regex2, newHero);
       fs.writeFileSync(filePath, content);
       console.log(`Updated (alt): ${file}`);
    } else {
       console.log(`Pattern not found in: ${file}`);
    }
  }
});
