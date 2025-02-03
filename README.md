# Node.js Server Hanging Bug
This repository demonstrates a common error in Node.js HTTP servers: forgetting to call `res.end()` to conclude the response.  This leads to the server hanging and not responding to further requests.

## Bug
The `bug.js` file contains a server that successfully sends a response header but forgets to call `res.end()`. This omission prevents the connection from closing, causing the server to hang. 

## Solution
The `bugSolution.js` file corrects this by adding the necessary `res.end()` call, ensuring the response is properly closed. 

## How to Reproduce
1. Clone this repository.
2. Navigate to the project directory.
3. Run `node bug.js`.
4. Attempt to make a request to `http://localhost:3000`. You'll notice the server appears to hang and may not respond.
5. Then run `node bugSolution.js` and repeat the request to see the fix.