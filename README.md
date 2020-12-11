# Class 04: Lab
## API Server
### Aysia Brown


### Links & Resources
- CI/CD *coming soon*
- [Backend Server](https://aysiab-api-server.herokuapp.com/)
- No applicable front end

### Setup

**.env variables:**
- `PORT` = port number
- `MONGO_URI` = the url to run the mongo instance

**install dependencies:**
- run `npm i` from your cloned repo in your terminal


**Initializing & Start Up**
- run `nodemon` or `node index.js` to start the server from your cloned repo in your terminal
- run `mongo` in your terminal to view your databases 
    - `show dbs` will then show all databases within mongo

**Tests:**
*Still need to be written* Testing for:
- 404 on a bad route
- 404 on a bad method
- The correct status codes and returned data for
    - each REST route
    - Create a record using POST
    - Read a list of records using GET
    - Read a record using GET
    - Update a record using PUT
    - Destroy a record using DELETE
    
