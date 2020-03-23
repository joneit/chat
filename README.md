Simple chat demo featuring:
* Web Sockets
   * server side, using [`ws`](https://www.npmjs.com/package/ws)
   * client side, using native [`WebSocket`](https://developer.mozilla.org/en-US/docs/Web/API/Websockets_API) API
* An Apple _Messages_-like look

### Try it!
_Requires Node + npm._
1. Clone this repo  
   _For example:_
   ```bash
   git clone https://github.com/joneit/chat.git
   cd chat
   ```
2. Run the server
   ```bash
   cd server
   npm i
   node .
   ```
3. Run 3 clients
   * Open 3 _Google Chrome_ windows
   * In each open `file:///path/to/chat/client/index.html`
   * Enter a unique chat name in each, _e.g.,_ Moe, Larry, Curly
   * Type messages into the tiny message area at the bottom of each window, terminated with Enter key
