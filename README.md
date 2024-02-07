# mit10s

API security vulnerabilities scout

## Dev flow

### Publishing changes

Pull `main` before starting work on a change.

Each change that should be followed by a release version should be accompanied by the following changelog-generating command:

```sh
npx changeset
```

It will trigger the following PR from changeset which will increment and publish everything that's needed.

### Creating Docker image (done though GitHub action, w/ some modifications)

```sh
# burst cache to make npm install the latest mit10s version
# docker build --build-arg CACHEBUST=$(date +%s) -t mit10s .
# but should work without that, just like:
docker build --no-cache -t mit10s . 

# tagging needs to be further worked on
docker tag mit10s turmagangtech/mit10s

docker push turmagangtech/mit10s

# later the updated image can be used as
docker pull turmagangtech/mit10s:latest
docker run -it --rm turmagangtech/mit10s:latest
# the --rm flag automatically removes the Docker container when it exits 
```
