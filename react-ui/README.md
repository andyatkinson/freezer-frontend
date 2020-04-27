## Freezer Frontend

### Local Development

Manage dependencies with Yarn

```
nvm use v12.9.1
yarn install
yarn start
```

### Backend

Service should be running on `localhost:1323`

### Heroku

In production, service should be available at: <http://freezer-backend.herokuapp.com>, e.g.

```
$ curl -H 'Content-Type: application/json' https://freezer-stuff.herokuapp.com/items
```


#### Listing Items

```
$ curl -H 'Content-Type: application/json' localhost:1323/items
```

#### Creating Items

```
curl -d '{"name":"item","addedOn":"2020-01-01"}' -H 'Content-Type: application/json' localhost:1323/items
{"name":"item","addedOn":"2020-01-01"}
```
