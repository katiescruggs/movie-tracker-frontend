# Movie Tracker

  This project is working off the The Movie DB API (https://www.themoviedb.org/documentation/api - note you'll need to go create an account to get an API key). The idea of the project is to be able to sign in as a user and save favorite movies. Pretty simple right? HA HA not!

  Bc this is still in beta here is what you'll need to know.
  * Using PostgreSQL
  * Setting up steps:
    * `npm install`
    * If you don't have postgresSQl, scroll down to `Setup Postgresql` and follow those steps.
    * Then run `npm run build`
    * Lastly run `npm start` - visit `/api/users` - should see a json response.
  * 2 APIs - MovieDB and your very own api
  * Fetch upcoming movies from MovieDB

## Setup Postgresql

#### What is Postgresql?
* PostgreSQL is a powerful, open source object-relational database system

#### Installation:
* Install Homebrew. Homebrew is a package manager for MacOS.
	*  */usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)*
	
* Install Postgresql  
	*  *brew install postgresql*	
	
#### Running Postgres
* Start Postgres  
  * `psql -f ./database/users.sql` will drop and recreate your database. 
	* *postgres -D /usr/local/var/postgres* (You could create an alias for this)
	
#### Press CMD-T to create a new tab in your terminal
* Type *psql*. This will get you into the interactive postgres terminal. From here you can run postgres and sql commands. You might get an error *psql: FATAL: database "username" does not exist* To resolve this error type *createdb 'somthing does not exist'*

#### [PSQL Commands](http://postgresguide.com/utilities/psql.html)

## API
  Hopefully you will be using fetch to make all your api calls. If you are making a post request note that you will need to pass in headers - with a `'Content-Type': 'application/json'`. Additionally you will need to pass any any required fields into the body.

###### Users

 * ##### Sign In `/api/users`

  To sign in you will need to pass in *email* and *password* to the *body*.
  Emails should be sent in all lowercase. - ex: `{..., body: {email: 'tim@aol.com', password: 'password'} }`
  The database starts off with a single user inside. -> { email: tman2272@aol.com password: password }. Keep in mind the response will send the entire user back.

* ##### Create Account - `/api/users/new`
  Creating an account must have all input fields filled in (name, email, password)
  You must send all three into the body. Passwords are case sensitive.
  Keep in mind the response only gives the new user ID.

* ##### Add Favorite - `/users/favorites/new`
  To save a favorite you must send into the body: movie_id, user_id and title, poster_path, release_date, vote_average, overview.
  Keep in mind the response only gives the new favorite id

* ##### Receive All Favorites - `/users/:id/favorites`
  To get a users favorite movies you need to send in the user ID through the params. This will return an array favorite objects.

* ##### Delete a Favorite - `/users/:id/favorites/:favID`
  To delete a users favorite you must send in the users id and id of the movie.

### Iterations

##### Iteration 0: Pull in movie API
  * Pull most recent movies from MovieDB API.
  * Display each movie on root index `/`

##### Iteration 1: Sign In / Sign Out Functionality
  * Be able to sign in on page `/login` and redirect user to `/`
    * Flash "Email and Password do not match" - if password is incorrect
  * Ability to create a user.
    * Flash "Email has already been used" - if email has been taken
  * The user has the ability to sign out. 
  
##### Iteration 2: Favorites
  * Each movie should be displayed with a favorite button.
  * If the user is not signed in and clicks on a favorite button the user will be prompted with the request to create an account.
  * Validate favorites before adding to db. Aka does that user already have the movie stored as favorites. There should be no duplicates. 
  * If the user visits `/favorites` they should see a list of all their favorite movies.
  * The user should be able to delete favorites from `/favorites` or `/`.
  * Favorite movies should have a visual indication on `/`.

##### Extensions:
  * A user stays signed in after refreshing the page. *Hint:* You will probably use localStorage. 
  * Should only take real email addresses *Hint:* Look into regular expressions
  * A user can click and view any individual movie.



