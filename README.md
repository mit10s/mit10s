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
