# Node.js WebApi + testing with no frameworks (Based on Erick Wendel Tutorial)

First of all, leave your star 🌟 on this repo to ap.

## Project structure

```
| - src/ (All source files)
    | - database (File date store all app data)
    | - entities/ (Obj mapping)
    | - factories/ (Instance Generators)
    | - repositories/ (Data access)
    | - routes/ (Endpoints methods)
    | - services/ (Bussiness logic)
    | - util/ (Shared code)
    | - handler.js (Communication btw services and routes)
    | - index.js (Server instance)
```

### Tests

- Integration test
- Unit tests

## Features Checklist + Challenges

- Web API

  - [ ] it should have an endpoint for storing cars' data
  - [ ] it should have an endpoint for retrieving heroes' data
  - [ ] it should have an endpoint for updating heroes' data
  - [ ] it should have an endpoint for deleting heroes' data
  - [ ] it should test when the application throws an error

- Testing

  - Unit

    - [ ] it should test all files on the routes layer
    - [ ] it should test all files on the repositories layer
    - [ ] it should test all files on the factories layer
    - Plus
      - [ ] it should reach 100% code coverage (it's currently not possible to get code coverage metrics using only the native Node.js, see [c8](https://www.npmjs.com/package/c8) for this task)

  - Integration / E2E
    - [ ] it should test the endpoint for storing heroes' data
    - [ ] it should test the endpoint for retrieving heroes' data
    - [ ] it should test the endpoint for updating heroes' data
    - [ ] it should test the endpoint for deleting heroes' data
    - [ ] it should test when the application throws an error

### Notes

- Should you have some difficulties solving the problems, please comment on the [**Youtube video**](https://youtu.be/xR4D2bp8_S0)

- As soon as you've been finishing the tasks, comment on the [**Youtube video**](https://youtu.be/xR4D2bp8_S0) so all other students can be pushed forward by your efforts

## Have fun!

```

```
