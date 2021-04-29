# TODOIST-REST-CLIENT

## _A simple todoist-rest-api client_

A todoist rest API client with:

## Implemented Features

- get Today Tasks
- get All Tasks
- create task (see example)

I'd implement more features in the future like:

- new resources
- more tasks functions

> something important

## Installation

For installing the client:

```sh
npm install todoist-rest-client
```

## USE

```js
import TDSClient from "todoist-rest-client";

const Client = new TDSClient(API_TOKEN); //get an api token from your todoist integrations page
```

## API

### Client.create({type}, todoistResource)

This method allows creating todoist resources (tasks, projects, ...).
If no params are given, it creates a _No_Content_ task in the inbox.
If given type param, creates default todoistResourceType.

```js
//Creating a todoist resource
import TDSClient from "todoist-rest-client";

const Client = new TDSClient(API_TOKEN); //get an api token from your todoist integrations page

Client.create({ type: "task" });
```

## Todoist Resources

Todoist resources are classes that allow you to easyly create resource objects for todoist.
They can be imported directly from the package:

```js
import {Task} from "todoist-rest-client";

const myTask = new Task({....});
```

### Task

Tasks, are the basic pieces of todoist. Each task has a lot of properties: content, date, priority...

### Future Implementations

In future versions of this package, I'd like to implement more resources to work with projects, comments and all the Todoist's stuff.

## License

MIT
