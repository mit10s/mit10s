# mit10s

API security vulnerabilities scout

## Dev flow

### Publishing changes

Each change that should be followed by a release version should be accompanied by the following changelog-generating command:

```sh
npx changeset
```

It will trigger the following PR from changeset which will increment and publish everything that's needed.

### Creating Docker image

```sh
docker build -t mit10s .

docker tag mit10s turmagangtech/mit10s

docker push turmagangtech/mit10s
```
