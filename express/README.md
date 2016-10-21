## Express Demo

This is an [Express](http://expressjs.com/) application that runs the Northwind backend using [Sequelize](http://docs.sequelizejs.com/en/latest/), 
[breeze-sequelize](http://breeze.github.io/doc-node-sequelize/introduction.html) and [sqlite](https://github.com/mapbox/node-sqlite3).

### server.js
Sets up the request handling, and starts the server listening on port 3000.  
Specific request URLs (those starting with `/breeze/`) are passed to `routes.js`.  
All others are assumed to be requesting HTML/JS/CS files from the `docRoot`, which points to the main Northwind directory.

### routes.js
Handles AJAX requests for CRUD operations from the Breeze client.  Most queries are handled by the `get` method, which parses the query from the URL.
Other methods are for saving and for special query scenarios.

### account.js
Handles user authentication.  Just works against hard-coded username and password for now.  Could be changed to use a real database.

### Other Files

**import.js** - Used for importing data from the .sql script into a sqlite database

**metadata.json** - Breeze metadata, used for breeze-sequelize server config and also sent to the client

**package.json** - npm dependencies

**query.js** - Simple utility for running queries against sqlite

**northwindib.db** - The sqlite version of the NorthwindIB database

**northwindib-sqlite.sql** - SQL script for creating and populating the database 

## Getting Started

In the Express directory:

1. `npm install`
2. `node server`
3. Open browser to http://localhost:3000/

## Refreshing the database

1. Stop the server
2. Move/rename the existing **northwindib.db**
3. `node import.js` 
