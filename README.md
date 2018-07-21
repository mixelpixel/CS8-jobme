# CS8-jobme

RESTful API for Jobme. In addition to serving static pages from the React client build folder at [the root directory](https://jobitduder.herokuapp.com/), it also serves the JSON data that comprises the backend at [the api directory](https://jobitduder.herokuapp.com/api/) using the following endpoints.

## API Endpoints

| Type | Path (/api)             | Body         | Token Type | Response          |
| ---- | ----------------------- | ------------ | ---------- | ----------------- |
| GET  | /employers              | --           | --         | List of Employers |
| POST | /employers/register     | New Employer | --         | New Employer      |
| POST | /employers/login        | Credentials  | --         | Success, Token    |
| GET  | /employers/profile      | --           | Employer   | Employer          |
| GET  | /seekers                | --           | --         | List of Seekers   |
| POST | /seekers/register       | New Seeker   | --         | New Seeker        |
| POST | /seekers/login          | Credentials  | --         | Success, Token    |
| GET  | /seekers/profile        | --           | Seeker     | Seeker            |
| POST | /seekers/:seekerId/like | Job ID       | Employer   | Match             |
| GET  | /jobs                   | --           | Either     | Jobs              |
| POST | /jobs                   | New Job      | Employer   | New Job           |
| GET  | /jobs/:jobId/like       | --           | Seeker     | Match             |

**Example From Client:**

```javascript
axios
  .post("https://jobitduder/herokuapp.com/api/employers/register", {
    email,
    password,
    companyName,
    companyUrl,
    description,
    industry
  })
  .then(response => {
    dispatch({ type: REGISTER_SUCCESS, employer: response.data });
  })
  .catch(err => {
    dispath({ type: REGISTER_ERROR, message: err.data });
  });
```

## Route Details

### Log-In

- [POST] request to `employers/login` and `seekers/login` requires an email address and a password.
- Response will consist of `{ success, token }`.

### Register New Employer

- [POST] request to `employers/register` takes the following string fields (\*required):
  - email\*
  - password\*
  - companyName\*
  - companyUrl\*
  - description\*
  - industry\*
- Response will return `{ employer }` document to confirm success

### Register New Seeker

- [POST] request to `seekers/register` takes the following string fields (\*required):
  - email\*
  - password\*
  - firstName\*
  - lastName\*
  - desiredTitle
  - summary\*
  - topSkills\*
  - additionalSkills
  - familiarWith

### Log-Out

### Create a New Job

### Like a Job

### Like a Seeker

- User will log out locally by destroying token on localStorage. No action needs to be take from the API. If no logout, Tokens will automatically expire on the server after 12 hours.
