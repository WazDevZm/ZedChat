// Simple test script to verify all functionality
const fetch = require('node-fetch');

const API_BASE = 'http://localhost:5000/api';

async function testAPI() {
  console.log('🧪 Testing ZedChat Backend API...\n');

  try {
    // Test health check
    console.log('1. Testing health check...');
    const healthResponse = await fetch(`${API_BASE}/health`);
    const healthData = await healthResponse.json();
    console.log('✅ Health check:', healthData.message);

    // Test user registration
    console.log('\n2. Testing user registration...');
    const registerData = {
      username: 'TestUser',
      email: 'test@example.com',
      password: 'testpassword123'
    };

    const registerResponse = await fetch(`${API_BASE}/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(registerData)
    });

    if (registerResponse.ok) {
      const registerResult = await registerResponse.json();
      console.log('✅ User registration successful');
      console.log('   User ID:', registerResult.user.id);
      console.log('   Token received:', !!registerResult.token);
      
      // Test login
      console.log('\n3. Testing user login...');
      const loginResponse = await fetch(`${API_BASE}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: 'test@example.com',
          password: 'testpassword123'
        })
      });

      if (loginResponse.ok) {
        const loginResult = await loginResponse.json();
        console.log('✅ User login successful');
        console.log('   Token received:', !!loginResult.token);

        // Test getting users
        console.log('\n4. Testing get users...');
        const usersResponse = await fetch(`${API_BASE}/users`, {
          headers: { 'Authorization': `Bearer ${loginResult.token}` }
        });

        if (usersResponse.ok) {
          const users = await usersResponse.json();
          console.log('✅ Users fetched successfully');
          console.log('   Number of users:', users.length);
        } else {
          console.log('❌ Failed to fetch users');
        }

        // Test getting messages
        console.log('\n5. Testing get messages...');
        const messagesResponse = await fetch(`${API_BASE}/messages/${registerResult.user.id}`, {
          headers: { 'Authorization': `Bearer ${loginResult.token}` }
        });

        if (messagesResponse.ok) {
          const messages = await messagesResponse.json();
          console.log('✅ Messages fetched successfully');
          console.log('   Number of messages:', messages.length);
        } else {
          console.log('❌ Failed to fetch messages');
        }

      } else {
        console.log('❌ User login failed');
      }

    } else {
      console.log('❌ User registration failed');
    }

    console.log('\n🎉 All API tests completed!');
    console.log('\n📝 Next steps:');
    console.log('   1. Start the backend: cd backend && npm start');
    console.log('   2. Start the frontend: npm start');
    console.log('   3. Open http://localhost:3000');
    console.log('   4. Register a new account and test the chat!');

  } catch (error) {
    console.error('❌ Test failed:', error.message);
    console.log('\n🔧 Make sure the backend is running:');
    console.log('   cd backend && npm start');
  }
}

// Run tests
testAPI();
