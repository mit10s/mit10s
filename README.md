# mit10s

Security scanning tool for API codebases

## Getting started

The tool is early development. To run the main vulnerability analysis flow now, you can install the CLI package globally with `npm`:

```sh
npm install -g mit10s
```

and start vulnerability analysis by running:

```sh
mit10s scout
```

Alternatively, you can use Docker:

```sh
docker pull mit10s/mit10s:latest
docker run -it --rm mit10s/mit10s:latest scout
```

## Development flow

### Publishing changes

Pull `main` before starting work on a change.

Each change that should be followed by a release version should be accompanied by the following changelog-generating command:

```sh
npx changeset
```

It will trigger the following PR from changeset which will increment and publish everything that's needed.
