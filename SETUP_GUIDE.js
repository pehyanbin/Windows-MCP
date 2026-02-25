// Follow the Option B in Claude Desktop. (Install from source)
// 1. First clone the skills from Github

/*
2.
```
git clone https://github.com/CursorTouch/Windows-MCP.git
cd Windows-MCP
```
*/

// 3. Configure the MCP server in the .gemini/antigravity/mcp_config.json file

/*
4.
```
{
  "mcpServers": {
    "windows-mcp": {
      "command": "uv",
      "args": [
        "--directory",
        "<path to the windows-mcp directory>",
        "run",
        "windows-mcp"
      ]
    }
  }
}
```
*/

// 5. FILE LOCATION == C:\Users\pehya\.gemini\antigravity\mcp_config.json

// 6. Always remind the AI to use the windows-mcp server for windows-specific tasks

/*
7.
Example prompt for AI:
"Use the windows-mcp server to perform the following task: [TASK]"
*/








// Your code 
/*
```
{
  "mcpServers": {
    "windows-mcp": {
      "command": "uv",
      "args": [
        "--directory",
        "c:\\Users\\pehya\\Downloads\\windows-mcp\\Windows-MCP",
        "run",
        "windows-mcp"
      ]
    }
  }
}
```
*/



/*
Some other source : 
1. https://lobehub.com/mcp/cursortouch-windows-mcp 
2. The official Github repo : https://github.com/CursorTouch/Windows-MCP 
*/