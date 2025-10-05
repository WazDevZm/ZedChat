// Error checking script for ZedChat
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🔍 Checking ZedChat for common issues...\n');

// Check if backend data directory exists
const dataDir = path.join(__dirname, 'backend', 'data');
if (!fs.existsSync(dataDir)) {
    console.log('❌ Backend data directory missing. Creating...');
    fs.mkdirSync(dataDir, { recursive: true });
    console.log('✅ Created backend/data directory');
} else {
    console.log('✅ Backend data directory exists');
}

// Check if package.json files exist
const frontendPackage = path.join(__dirname, 'package.json');
const backendPackage = path.join(__dirname, 'backend', 'package.json');

if (!fs.existsSync(frontendPackage)) {
    console.log('❌ Frontend package.json missing');
} else {
    console.log('✅ Frontend package.json exists');
}

if (!fs.existsSync(backendPackage)) {
    console.log('❌ Backend package.json missing');
} else {
    console.log('✅ Backend package.json exists');
}

// Check if node_modules exist
const frontendNodeModules = path.join(__dirname, 'node_modules');
const backendNodeModules = path.join(__dirname, 'backend', 'node_modules');

if (!fs.existsSync(frontendNodeModules)) {
    console.log('❌ Frontend node_modules missing. Run: npm install');
} else {
    console.log('✅ Frontend node_modules exists');
}

if (!fs.existsSync(backendNodeModules)) {
    console.log('❌ Backend node_modules missing. Run: cd backend && npm install');
} else {
    console.log('✅ Backend node_modules exists');
}

// Check if data files exist
const usersFile = path.join(dataDir, 'users.json');
const messagesFile = path.join(dataDir, 'messages.json');

if (!fs.existsSync(usersFile)) {
    console.log('📝 Creating users.json file...');
    fs.writeFileSync(usersFile, '[]');
    console.log('✅ Created users.json');
} else {
    console.log('✅ users.json exists');
}

if (!fs.existsSync(messagesFile)) {
    console.log('📝 Creating messages.json file...');
    fs.writeFileSync(messagesFile, '[]');
    console.log('✅ Created messages.json');
} else {
    console.log('✅ messages.json exists');
}

console.log('\n🎉 Error check complete!');
console.log('\nTo start the application:');
console.log('1. Run: node check-errors.js (this script)');
console.log('2. Run: start-app.bat (Windows) or ./start-app.sh (Linux/Mac)');
console.log('3. Or manually: cd backend && npm start (in one terminal)');
console.log('4. And: npm start (in another terminal)');
