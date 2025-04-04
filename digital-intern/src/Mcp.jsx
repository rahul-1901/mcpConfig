import React, { useEffect, useState } from 'react'
import mcpLogo from './assets/mcp.png'
import { Wifi, CheckCircle, XCircle, Loader } from 'lucide-react'
import axios from 'axios'
import Load from './Loader';

const Mcp = () => {
    const [mcpConfig, setMcpConfig] = useState("");
    const [status, setStatus] = useState("");
    const [responseMessage, setResponseMessage] = useState("");
    const [serverMessage, setServerMessage] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    const handleSubmit = async () => {
        if (!mcpConfig.trim()) {
            // return (setStatus("undefined"),
            //     setResponseMessage("Enter the MCP installtion code..."),
            //     setServerMessage(""))
            setStatus("undefined")
            setResponseMessage("Enter the MCP installtion code..."),
                setServerMessage("")
            return
        }

        setStatus("loading...")
        setResponseMessage("Connecting...")
        setServerMessage("");

        try {
            const response = await axios.post("https://mcp-config-az5l.vercel.app/", { mcpConfig });
            console.log(response)
            setTimeout(() => {
                setServerMessage(JSON.stringify(response.data, null, 2))
                setStatus("success");
                setResponseMessage("MCP server is connected...")
            }, 1000)
        } catch (error) {
            console.log(error)
            setTimeout(() => {
                setStatus("failed");
                setResponseMessage("MCP server is not responding...");
                setServerMessage(JSON.stringify(
                    error.response?.data || { error: error.message },
                    null, 2
                ));
            }, 1000)
        }
    }

    return (
        <>
            {isLoading && <Load onLoadingComplete={() => setIsLoading(false)} />}
            <div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-700 via-blue-900 to-purple-700 p-2'>
                <div className='w-full h-auto max-w-3xl border border-black bg-white/10 p-4 rounded-xl'>
                    <div className='flex items-center justify-center gap-2'>
                        <img src={mcpLogo} className='h-10 mt-1'></img>
                        <h1 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-400 via-blue-300 to-purple-300">
                            MCP Server Tester
                        </h1>
                    </div>

                    <div className='mt-5'>
                        <div className='w-full flex flex-col items-center justify-center mb-5'>
                            <p className='text-gray-200 mb-5 text-xl'>
                                MCP Configuration
                            </p>
                            <div className="w-full flex items-center gap-5 md:gap-8 px-4">
                                <Wifi className="text-gray-400" />
                                <input
                                    type="text"
                                    name="mcpInput"
                                    onChange={(e) => setMcpConfig(e.target.value)}
                                    placeholder="Enter MCP Installation Code"
                                    value={mcpConfig}
                                    className="w-full pl-2 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 bg-white/50"
                                />
                            </div>
                        </div>
                        <button
                            onClick={handleSubmit}
                            className="mb-5 cursor-pointer w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-xl font-medium hover:from-blue-700 hover:to-purple-700 transition-all"
                        >
                            Test 
                        </button>

                        {status !== "" ? (
                            <div
                                className={`p-4 mb-2 rounded-xl text-white flex items-center gap-3 ${status === "success" ? "bg-green-800/20" : status === 'loading...' ? "bg-yellow-800/20" : "bg-red-800/20"
                                    }`}
                            >
                                {status === "success" ? (
                                    <CheckCircle className="w-6 h-6 text-green-400" />
                                ) : status === "loading..." ? (
                                    <Loader className="w-6 h-6 text-white-400" />
                                ) : (
                                    <XCircle className="w-6 h-6 text-red-400" />
                                )}
                                <p>{responseMessage}</p>
                            </div>
                        ) : (
                            <div>
                            </div>
                        )}

                        {serverMessage && (
                            <div className="p-4 rounded-xl bg-gray-900/20 text-white">
                                <p className="text-sm font-semibold">Server Response:</p>
                                <p className="text-xs bg-black/40 p-2 rounded-md overflow-x-auto">
                                    {serverMessage}
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Mcp