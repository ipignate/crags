This application was done with the MEAN Full Stack.

It includes 2 exra libraries:

- Angular-google-maps: To display the gps coordinates on the map of the crag locations.
- ng-tags-input: To display location tags for crags (merely informative).

The html was generated using the jade templating engine, both .jade and .html are provided for the views.

The authentication is local with passport.
There are 3 'roles': public, user and admin. The public role allows browsing the main search page for crags. The registered user allows CRUD operations on crags, and the admin user allows listing all users in the database as an additional level, trying to emulate a real life situation, where a site would have these roles. In order to create an 'admin' user it is necessary to do it through the mongod command line, or use a tool like robomongo to edit the user role to admin.

The folder structure is as follows:

/server: All server side files

/server/config: All server side configuration files for authentication, database, express, routes and passport authentication.
/server/controllers: The server side controllers to be used for the data models User and Crag
/server/models: Crag (mongoose schema and model) and User (mongoose schema and model). The Crag schema is a complex schema, supporting an embedded one-to-may 'Tag' schema defined within the same file.
/server/utilities: the encription file containing the crypto libray for hashing and encryption of user passwords.
/server/views: index.html main page where the views subsequent angular views are shown.

/public: All angular client side files
/app: app files
/css: site css files
/images: some site images
/vendor: front end libraries injected into angular app

.favicon : customized site favicon

To run this application, start your mongo server & do the following from the command line:
bower install
npm install
npm start