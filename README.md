# meteor starter kit V0.1.6

A simple kit to start experimenting with Apollo, Meteor and React.

### Includes:
- Apollo server
- Apollo client
- Express
- React
- Accounts UI, Basic & password
- ES6 syntax
* check `package.json` for specific versions


### Running it

```
meteor npm install
meteor
```

### Folder structure
.
├── client                  # Client files
│   ├── main.css            # Styles
│   ├── main.html           # First loaded view pulling from imports
│   └── main.js             # Imports all required files - React render
├── imports                 # A client/server folder
│   ├── api                 #
│   |  └── schema.js        # Schema & query definitions
│   └── ui                  #
│      └── App.js           # UI React rendering
├── server                  # Server files
│   └── server.js           # Main server file initiating Apollo server
└── package.json            # node dependencies


### Learn more

- [`apollo` package docs](https://github.com/apollostack/meteor-integration/)
- [Apollo Stack docs](http://docs.apollostack.com/)
