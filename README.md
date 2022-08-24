# SimpleCRM 


[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)


## Features

- [ ] criar projeto 
- [ ] criar docker-composer com sqlserver
- [ ] connectar ao banco de dados
- [ ] criar model de usuario 
- [ ] criar model de cliente
- [ ] criar autenticação de usuario com jwt



## Installation

SimpleCRM  requires [Node.js](https://nodejs.org/) v10+ to run.

Install the dependencies and devDependencies and start the server.

```sh
docker-compose up -d
docker exec -it mssql /opt/mssql-tools/bin/sqlcmd -U SA -P "mssql1Ipw" -Q "CREATE DATABASE SimpleCRM"
```

For production environments...

```sh
npm install --production
NODE_ENV=production node app
```
