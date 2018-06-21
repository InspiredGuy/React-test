# Github Repository List

React test task implementation.

## What does it do

Simple React+Redux frontend, listing public repos from GitHub. It also allows to see contributors of each repository, mark repository as favourite and look through all such awesome repositories, liked by the user.

## Running the application

First, do `npm install` to grab all needed dependencies. Run `npm start` from root folder to run development version of the app on localhost. For other scripts please see `package.json`. If you experience troubles, try reinstalling npm packages.

## Issues/todos in current implementation

* no pagination (can be implemented by the API using Link header)
* no sort: probably can't be done due to API limitations when used with pagination, w/o pagination can be done
* non-optimal usage of contributors API: can be cached and mapped to repository
* current favourites approach does not scale, but the best solution would be to store favourites info on backend - I suggested this is not in the scope of current task and proceeded with browser-based storage
* not responsive
* no tests