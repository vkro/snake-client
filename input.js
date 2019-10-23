// Stores the active TCP connection object.
let connection;

/*
* Handles Ctrl-C user input
*/

const handleUserInput = function(key, conn) {
  if (key === "\u0003") {
    process.exit();
  } else if (key === "w") {
    conn.write("Move: up");
  } else if (key === "a") {
    conn.write("Move: left");
  } else if (key === "d") {
    conn.write("Move: right");
  } else if (key === "s") {
    conn.write("Move: down");
  } else if (key === "g") {
    conn.write("Say: Greetings")
  } else if (key === "o") {
    conn.write("Say: Get out of my way!")
  } else if (key === "y") {
    conn.write("Say: YUM!")
  }
}

/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */
const setupInput = function(conn) {
  const stdin = process.stdin;
  connection = conn;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', key => handleUserInput(key, connection));
  return stdin;
}

module.exports = { setupInput };