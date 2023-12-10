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

  - [x] it should have an endpoint for storing cars' data
  - [x] it should have an endpoint for retrieving cars' data
  - [ ] it should have an endpoint for updating cars' data
  - [ ] it should have an endpoint for deleting cars' data
  -

- Testing

  - Unit

    - [x] it should test all files on the routes layer
    - [x] it should test all files on the service layer
    - [x] it should test all files on the repositories layer
    - [x] it should test all files on the factories layer
    - [ ] it should test when the application throws an error
    - Plus
      - [ ] it should reach 100% code coverage

  - Integration / E2E

    - [x] it should test the endpoint for storing cars' data
    - [x] it should test the endpoint for retrieving cars' data
    - [ ] it should test the endpoint for updating cars' data
    - [ ] it should test the endpoint for deleting cars' data
    - [ ] it should test when the application throws an error

## Have fun!
