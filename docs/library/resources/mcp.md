---
id: mcp
title: MCP - Model Context Protocol
sidebar_label: MCP - Model Context Protocol
---

Resource to implement the Model Context Protocol (MCP) that allows exposing tools through scripts dynamically loaded from the `app/mcp/` folder. Each script can register one or more tools that can be executed remotely, following the MCP pattern for integration with AI assistants.

MCP automatically loads all JavaScript scripts from the `app/mcp/` folder and makes the registered tools available for execution. It supports middlewares to intercept calls before execution, enabling validations, logs, authorization, etc.

MCP server configuration is done in the `_app/config.json` file in the `mcp.server` section.

```javascript
// Example script in app/mcp/calculator.js
// Register an addition tool
_mcp.registerTool(
    'add',
    'Adds two integer numbers',
    _val.map()
        .set('type', 'object')
        .set('properties', _val.map()
            .set('a', _val.map().set('type', 'number').set('description', 'First number'))
            .set('b', _val.map().set('type', 'number').set('description', 'Second number'))
        )
        .set('required', _val.list().add('a').add('b')),
    (input) => {
        const result = input.get('a') + input.get('b');
        return _val.map().set('success', true).set('result', result);
    }
);

// Register a multiplication tool
_mcp.registerTool(
    'multiply',
    'Multiplies two integer numbers',
    _val.map()
        .set('type', 'object')
        .set('properties', _val.map()
            .set('a', _val.map().set('type', 'number').set('description', 'First number'))
            .set('b', _val.map().set('type', 'number').set('description', 'Second number'))
        )
        .set('required', _val.list().add('a').add('b')),
    (input) => {
        const result = input.get('a') * input.get('b');
        return _val.map().set('success', true).set('result', result);
    }
);
```
```javascript
// Example of listing and executing tools
// List all available tools
const tools = _mcp.listAvailableTools();
for (const tool of tools) {
    _log.info('Tool: ' + tool.get('name') + ' - ' + tool.get('description'));
}

// Execute a tool
const result = _mcp.executeTool('add', _val.map().set('a', 5).set('b', 3));
if (result.get('success')) {
    _log.info('Result: ' + result.get('result'));
}
```

---

## addMiddlewares

---

#### <span style={{fontWeight: 'normal'}}>_mcp</span>.<span style={{color: '#008000'}}>addMiddlewares</span>(<span style={{color: '#FF8000'}}>middlewares</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>org.netuno.tritao.resource.MCP$MCPMiddleware[]</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Description

Adds middlewares that will be executed before each tool. If a middleware returns a non-null result, the tool execution is interrupted and that result is returned.

##### How To Use

```javascript
// Example middleware for logging
_mcp.addMiddlewares((tool) => {
    _log.info('Executing tool: ' + tool.name);
    return null; // Continues execution
});
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **middlewares** | _org.netuno.tritao.resource.MCP$MCPMiddleware[]_ | One or more middlewares to add. |

##### Return

( _void_ )


---

## containsTool

---

#### <span style={{fontWeight: 'normal'}}>_mcp</span>.<span style={{color: '#008000'}}>containsTool</span>(<span style={{color: '#FF8000'}}>name</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Description

Checks if a tool with the specified name is registered.

##### How To Use

```javascript
if (_mcp.containsTool('add')) {
    _log.info('Addition tool is available');
}
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **name** | _string_ | Name of the tool to check. |

##### Return

( _boolean_ )

True if the tool exists, false otherwise.

---

## executeTool

---

#### <span style={{fontWeight: 'normal'}}>_mcp</span>.<span style={{color: '#008000'}}>executeTool</span>(<span style={{color: '#FF8000'}}>name</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>input</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
##### Description

Executes a registered tool with the provided parameters. If the tool does not exist, returns an object with `success: false` and an error message. If any middleware interrupts execution, returns the middleware's result. If an error occurs during execution, returns an object with `success: false` and the error message.

##### How To Use

```javascript
const result = _mcp.executeTool('add', _val.map().set('a', 10).set('b', 20));
if (result.get('success')) {
    _log.info('Result: ' + result.get('result'));
} else {
    _log.error('Error: ' + result.get('error'));
}
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **name** | _string_ | Name of the tool to execute. |
| **input** | _[Values](/docs/library/objects/Values)_ | Object with input parameters according to the schema defined when registering the tool. |

##### Return

( _[Values](/docs/library/objects/Values)_ )

Execution result. On success, contains `success: true` and the data returned by the tool. On error, contains `success: false` and `error` with the error message.

---

## getServerInfo

---

#### <span style={{fontWeight: 'normal'}}>_mcp</span>.<span style={{color: '#008000'}}>getServerInfo</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
##### Description

Gets the MCP server information, including configured name and version.

##### How To Use

```javascript
const info = _mcp.getServerInfo();
_log.info('Server: ' + info.get('name') + ' v' + info.get('version'));
```

##### Return

( _[Values](/docs/library/objects/Values)_ )

Object with the fields `name` (server name) and `version` (server version).

---

## init

---

#### <span style={{fontWeight: 'normal'}}>_mcp</span>.<span style={{color: '#008000'}}>init</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Return

( _void_ )


---

## isEnabled

---

#### <span style={{fontWeight: 'normal'}}>_mcp</span>.<span style={{color: '#008000'}}>isEnabled</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>boolean</span>
##### Description

Checks if the MCP server is active and available to process requests.

##### How To Use

```javascript
if (_mcp.isEnabled()) {
    _log.info('MCP server is active');
}
```

##### Return

( _boolean_ )

True if the MCP server is active, false otherwise.

---

## listAvailableTools

---

#### <span style={{fontWeight: 'normal'}}>_mcp</span>.<span style={{color: '#008000'}}>listAvailableTools</span>() : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>
##### Description

Lists all tools registered in the MCP server, including name, description and input schema.

##### How To Use

```javascript
const tools = _mcp.listAvailableTools();
for (const tool of tools) {
    _log.info('Name: ' + tool.get('name'));
    _log.info('Description: ' + tool.get('description'));
    _log.info('Schema: ' + JSON.stringify(tool.get('inputSchema')));
}
```

##### Return

( _[Values](/docs/library/objects/Values)_ )

List of objects, each containing the fields: `name` (tool name), `description` (description) and `inputSchema` (JSON schema of parameters).

---

## registerTool

---

#### <span style={{fontWeight: 'normal'}}>_mcp</span>.<span style={{color: '#008000'}}>registerTool</span>(<span style={{color: '#FF8000'}}>name</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>description</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>string</span>, <span style={{color: '#FF8000'}}>schema</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>[Values](/docs/library/objects/Values)</span>, <span style={{color: '#FF8000'}}>execute</span>: <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>java.util.function.Function&lt;[Values](/docs/library/objects/Values), [Values](/docs/library/objects/Values)&gt;</span>) : <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>void</span>
##### Description

Registers a new tool in the MCP server, making it available for remote execution. The schema must follow the JSON Schema format for input parameter validation.

##### How To Use

```javascript
_mcp.registerTool(
    'greeting',
    'Returns a personalized greeting',
    _val.map()
        .set('type', 'object')
        .set('properties', _val.map()
            .set('name', _val.map().set('type', 'string').set('description', 'Person\'s name'))
        )
        .set('required', _val.list().add('name')),
    (input) => {
        return _val.map()
            .set('success', true)
            .set('message', 'Hello, ' + input.get('name') + '!');
    }
);
```

##### Attributes

| NAME | TYPE | DESCRIPTION |
|---|---|---|
| **name** | _string_ | Unique name of the tool. Must be used to execute the tool later. |
| **description** | _string_ | Textual description of the tool's functionality. |
| **schema** | _[Values](/docs/library/objects/Values)_ | JSON schema that defines the tool's input parameters. |
| **execute** | _java.util.function.Function_ | Function that implements the tool's logic. Receives input parameters and returns the result. |

##### Return

( _void_ )


---

