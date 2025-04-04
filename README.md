# 🔌 MCP Server Tester

A simple and interactive full-stack web application built using **React.js** and **Node.js (Express)** to test the connectivity of an MCP (Modular Communication Protocol) server using a provided installation code.

---

## 🚀 Features

- ✅ Real-time MCP server connectivity test  
- ✅ Input validation and feedback  
- ✅ Clean and responsive UI  
- ✅ Structured backend error handling  
- ✅ Built with modern tech stack  

---

## 🧱 Tech Stack

### Frontend:
- React.js  
- TailwindCSS  

### Backend:
- Node.js  
- Express   

---

## 🧠 Project Approach

The **MCP Server Tester** was built with simplicity, usability, and effective feedback in mind. The objective is to validate the connection to an MCP (Modular Communication Protocol) server by submitting an installation configuration code and receiving a response from the server. Below is the approach followed for building the project:

### 1. Requirement Analysis

- Users should be able to input an MCP installation code.  
- The backend must validate the code by sending a request to the corresponding MCP server.  
- The frontend should provide real-time feedback with clear visual indicators of success or failure.  

### 2. System Design

#### 🖥️ Frontend (React.js + TailwindCSS)
- Built with **React.js** to handle state and logic for user input and server responses.  
- **TailwindCSS** used for responsive UI with gradient backgrounds and modern visuals.  
- Icons from **lucide-react** to represent connection status visually.  
- Displays:
  - ✅ Success  
  - ❌ Error  
  - ⏳ Connecting  
  - ⚠️ Missing input  

#### 🌐 Backend (Node.js + Express)
- Single POST route (`/`) that accepts the `mcpConfig` from the frontend.  
- Validates input and sends a POST request to:https://smithery.ai/api/mcp/{mcpConfig}
