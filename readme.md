# TODOIST-REST-CLIENT v.0.0.3

## _A simple todoist-rest-api client_

## Important changes

- Now `create` function returns a boolean: true if the resource was created successfully and false if not.
- New general functions:
  - Get JSONs => implemented methods for getting JSON (not content/name arrays)
- Now you can create projects!

```js
import TDSClient, { Project } from "todoist-rest-client";
const myClient = new TDSClient(apiToken);
myClient.create({ type: "project" }, new Project({ name: "New Project" }));
```

# TODOIST-REST-CLIENT

## _A simple todoist-rest-api client_

A todoist rest API client with:

## Implemented Features

- get Today Tasks
- get All Tasks/Projects
- create task/project (see examples)

I'll implement more features in the future like:

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
import {Task, Project} from "todoist-rest-client";

const myTask = new Task({....});
const myProject = new Project({....});
```

### Task

Tasks are the basic pieces of todoist. Each task has a lot of properties: content, date, priority...

### Project

Projects are the way to organize tasks in a simple way. Each project has, at least, a `name` property.

### Future Implementations

In future versions of this package, I'd like to implement more resources to work with sections, comments and all the Todoist's stuff.

## License

MIT © [Dubisdev](https://dubis.dev)
