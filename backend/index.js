import express from 'express';
import cors from 'cors';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

app.post("/", async (req, res) => {
    try {

        const { mcpConfig } = req.body;

        if (!mcpConfig) {
            return res.status(400).json({
                message: "MCP configuration is required!!"
            })
        }
        
        const response = await axios.post(`https://smithery.ai/api/mcp/${mcpConfig}`,
            {
                test: "ping"
            }
        )

        return res.status(201).json({
            message: "MCP working...",
            respond: response.data
        })
    } catch (error) {
        return res.status(500).json({
            message: "MCP server did not respond as expected!!",
            error: error.response ? error.response.data : error.message
        });
    }
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))