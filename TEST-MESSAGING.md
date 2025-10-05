# 🧪 Testing ZedChat Messaging

## ✅ **Quick Test Setup (2 Users)**

### **Step 1: Start the Application**
```bash
# Terminal 1 - Backend
cd backend
npm start

# Terminal 2 - Frontend  
npm start
```

### **Step 2: Create Two User Accounts**

**User 1:**
1. Open `http://localhost:3000`
2. Click "Sign Up"
3. Fill in:
   - Username: `TestUser1`
   - Email: `user1@test.com`
   - Password: `password123`
4. Click "Create Account"

**User 2:**
1. Open `http://localhost:3000` in a **new browser tab/window**
2. Click "Sign Up"
3. Fill in:
   - Username: `TestUser2`
   - Email: `user2@test.com`
   - Password: `password123`
4. Click "Create Account"

### **Step 3: Test Messaging**

**In User 1's browser:**
1. You should see "TestUser2" in the left sidebar
2. Click on "TestUser2" to select the chat
3. Type a message: "Hello from User 1!"
4. Press Enter or click the send button
5. **You should see your message appear immediately**

**In User 2's browser:**
1. You should see "TestUser1" in the left sidebar
2. Click on "TestUser1" to select the chat
3. You should see the message from User 1
4. Type a reply: "Hi back from User 2!"
5. Press Enter or click the send button

## 🔍 **Troubleshooting**

### **If messages don't appear:**

1. **Check Browser Console:**
   - Press F12 to open Developer Tools
   - Look for any error messages in the Console tab
   - Check if you see "Message sent:" logs

2. **Check Network Tab:**
   - In Developer Tools, go to Network tab
   - Look for WebSocket connections
   - Check if API calls are successful

3. **Verify Backend:**
   - Check backend terminal for any error messages
   - Ensure backend is running on port 5000

### **If send button is disabled:**

1. **Make sure you've selected a chat:**
   - Click on a user in the left sidebar first
   - The input should say "Type a message..." (not "Select a chat...")

2. **Check if you're logged in:**
   - You should see your username in the right sidebar
   - If not, try logging in again

### **If users don't appear in sidebar:**

1. **Refresh the page**
2. **Check if backend is running**
3. **Try logging out and back in**

## 🎯 **Expected Behavior**

### **✅ What Should Work:**
- ✅ See all users in left sidebar
- ✅ Click on user to select chat
- ✅ Type message in input field
- ✅ Send button becomes enabled when typing
- ✅ Message appears immediately after sending
- ✅ Messages appear in both browser windows
- ✅ Typing indicators work
- ✅ Online/offline status shows

### **✅ Visual Indicators:**
- **Send Button**: Blue when enabled, gray when disabled
- **Input Field**: Shows "Type a message..." when chat selected
- **Messages**: Your messages on right, their messages on left
- **Online Status**: Green dots next to online users
- **Typing**: "User is typing..." appears when someone types

## 🚀 **Advanced Testing**

### **Test with Multiple Users:**
1. Open 3+ browser windows
2. Create different user accounts
3. Send messages between all users
4. Verify all messages appear correctly

### **Test Real-time Features:**
1. Have one user start typing
2. Other users should see "User is typing..."
3. Test with multiple conversations open

## 📝 **Sample Test Messages**

Try these messages to test different scenarios:

- "Hello!" (short message)
- "This is a longer message to test if the chat can handle multiple lines of text properly."
- "Testing emojis: 😀 🚀 💬"
- "Special characters: @#$%^&*()"
- "Numbers: 1234567890"

## 🎉 **Success Indicators**

You'll know everything is working when:
- ✅ Messages appear instantly after sending
- ✅ Messages show in both browser windows
- ✅ Send button works properly
- ✅ No error messages in console
- ✅ Users appear in sidebar
- ✅ Chat selection works

**If all of the above work, your messaging is fully functional!** 🎉
