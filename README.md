# deCoded example API

# Steps to Run

1. clone the repo
2. cd into the repo
3. npm install
4. Start mongodb by running this: 
```bash
docker run -it -v mongodata:/data/db -p 27017:27017 --name mongodb -d mongo
```
5. npm start
6. curl http://localhost:3000
