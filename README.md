# Connect Express to Chat Engine!

This simple repo shows how to easily add chat functionality into an Express project with [Chat Engine](https://chatengine.io).

To understand the code, please watch [this video](https://www.youtube.com/watch?v=Fzv-rgwcFKk)!

## Setup Steps

Make your express server support chat - in 3 steps:

### 1 - Setup a Chat Engine server

Go to [Chat Engine](https://chatengine.io) to setup your own chat server.

- Click "New Project" and follow the steps
- Your `Project ID` and `Private Key` will be required for step 4

### 2 - Setup code

Clone this repo
Open your IDE and add "backend" and "frontend" to your Workspace
- Open a new terminal
- Type ```npm init``` in terminal and press Enter to the hell or type sth you want like "author", "license"..etc to install node_modules
- After that type ```npm install express cors axios``` to install the things necessary
- Everythings done, except you forget to type ```npm install --save-dev nodemon``` (^3^)

To run backend server, type ```npm run start``` on backend terminal

### 3 - Now go to frontend
First step is open a terminal parallel to the previous terminal of the backend

```cd frontend/```
```npm install```

### 4 - setup ProjectID and PrivateKey

- Replace your PrivateKey at line 23 in file backend/index.js
- Replace your ProjectID at line 10 in frontend/src/assets/ChatsPage.jsx

Everythings is ready

### Some link and docs 

- https://blog.chatengine.io/fullstack-chat/nodejs-reactjs
- https://www.npmjs.com/package/react-chat-engine-advanced
- https://www.npmjs.com/package/react-chat-engine-p
- https://rest.chatengine.io/#ceafb410-6f76-43a1-9c68-eeb35867c090



# If you have any questions, PLEASE ask google or stackoverflow because it doesn't charge
# If google or etc can't give you answer, go and see the video 100 times, you will understand




