// Script to add sample users for testing
const fs = require('fs');
const path = require('path');
const bcrypt = require('bcryptjs');
const { v4: uuidv4 } = require('uuid');

const DATA_DIR = path.join(__dirname, 'data');
const USERS_FILE = path.join(DATA_DIR, 'users.json');

// Ensure data directory exists
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR);
}

// Sample users to add
const sampleUsers = [
  {
    username: 'Alice Johnson',
    email: 'alice@example.com',
    password: 'password123',
    avatar: 'https://ui-avatars.com/api/?name=Alice+Johnson&background=077EFF&color=fff'
  },
  {
    username: 'Bob Smith',
    email: 'bob@example.com',
    password: 'password123',
    avatar: 'https://ui-avatars.com/api/?name=Bob+Smith&background=00C851&color=fff'
  },
  {
    username: 'Carol Davis',
    email: 'carol@example.com',
    password: 'password123',
    avatar: 'https://ui-avatars.com/api/?name=Carol+Davis&background=FF6B6B&color=fff'
  },
  {
    username: 'David Wilson',
    email: 'david@example.com',
    password: 'password123',
    avatar: 'https://ui-avatars.com/api/?name=David+Wilson&background=9C27B0&color=fff'
  },
  {
    username: 'Emma Brown',
    email: 'emma@example.com',
    password: 'password123',
    avatar: 'https://ui-avatars.com/api/?name=Emma+Brown&background=FF9800&color=fff'
  }
];

async function seedUsers() {
  try {
    // Read existing users
    let users = [];
    if (fs.existsSync(USERS_FILE)) {
      const data = fs.readFileSync(USERS_FILE, 'utf8');
      users = JSON.parse(data);
    }

    // Check if users already exist
    const existingEmails = users.map(user => user.email);
    const newUsers = sampleUsers.filter(user => !existingEmails.includes(user.email));

    if (newUsers.length === 0) {
      console.log('✅ Sample users already exist!');
      return;
    }

    // Add new users
    for (const userData of newUsers) {
      const hashedPassword = await bcrypt.hash(userData.password, 10);
      
      const newUser = {
        id: uuidv4(),
        username: userData.username,
        email: userData.email,
        password: hashedPassword,
        avatar: userData.avatar,
        online: false,
        createdAt: new Date().toISOString()
      };

      users.push(newUser);
      console.log(`✅ Added user: ${userData.username} (${userData.email})`);
    }

    // Save users
    fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));
    console.log(`\n🎉 Successfully added ${newUsers.length} sample users!`);
    console.log('\n📝 You can now login with any of these accounts:');
    newUsers.forEach(user => {
      console.log(`   Email: ${user.email} | Password: ${user.password}`);
    });

  } catch (error) {
    console.error('❌ Error seeding users:', error);
  }
}

// Run the seeding
seedUsers();
