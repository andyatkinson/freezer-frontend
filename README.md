## Freezer Frontend

### Local Development

```
nvm use v12.9.1
yarn install
yarn start
```

### Backend

Service should be running on `localhost:1323`

#### Listing Items

```
$ curl -H 'Content-Type: application/json' localhost:1323/items
```

#### Creating Items

```
curl -d '{"name":"item","addedOn":"2020-01-01"}' -H 'Content-Type: application/json' localhost:1323/items
{"name":"item","addedOn":"2020-01-01"}
```