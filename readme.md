# TODOIST-REST-CLIENT

## _A simple todoist-rest-api client_

A todoist rest API client with:

## Implemented Features


- get Today Tasks (Names & JSON)
- get a Task JSON by id
- get All Tasks/Projects Names
- get All Tasks/Projects JSON
- create task/project (see examples)
- complete task (see examples)


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

### Client.getAll( { type: string } )

This method returns an array of Titles/Names (strings) of all objects from the type .

- If no param -> returns all tasks.

```js
import TDSClient from "todoist-rest-client";

const Client = new TDSClient(API_TOKEN); //get an api token from your todoist integrations page

Client.getAll(); // ["task 1", "task 2", ...]
Client.getAll({ type: "task" }); // ["task 1", "task 2", ...]
Client.getAll({ type: "project" }); // ["Project 1", "Project 2", ...]
```

### Client.getAllJSON( { type: string } )

This method returns an array of Titles/Names (JSON) of all objects from the type. The JSON has all the tasks/projects info.

- If no param -> returns all tasks JSON.

```js
import TDSClient from "todoist-rest-client";

const Client = new TDSClient(API_TOKEN); //get an api token from your todoist integrations page

Client.getAllJSON(); // [{taskObject}, {taskObject}, {taskObject}, ...]
Client.getAllJSON({ type: "task" }); // [{taskObject}, {taskObject}, {taskObject}, ...]
Client.getAllJSON({ type: "project" }); // [{projectObject}, {projectObject}, {projectObject}]
```

### Client.create( { type: string } , todoistResource)

This method allows creating todoist resources (tasks, projects, ...).

- If no params are given -> creates a _No_Content_ task in the `Inbox`.
- If only given type param -> creates default todoistResourceType.

```js
//Creating a todoist resource
import TDSClient from "todoist-rest-client";

const Client = new TDSClient(API_TOKEN); //get an api token from your todoist integrations page

Client.create(); // creates a _NO_CONTENT_ task in the inbox
Client.create({ type: "task" }); // creates a _NO_CONTENT_ task in the inbox
Client.create({ type: "project" }); // creates a _NO_NAME_ project
Client.create({ type: "project" }, projectObject); // creates a project with the data given in the object
```

See [resources](#Todoist-Resources)

## Todoist Resources

Todoist resources are classes that allow you to easyly create resource objects for Todoist.
Todoist resources are:

- Task
- Project

They can be imported directly from the package:

```js
import TDSClient, {Task, Project} from "todoist-rest-client";

//Create the resource objects
const myTask = new Task({....});
const myProject = new Project({....});

//Then use them to create the resource in the server...
const myClient = new TDSCLient(API_TOKEN);

myClient.create({type: "project"}, myProject);
myClient.create({type: "task"}, myTask);

```

### Task

Tasks are the basic pieces of Todoist. Each task has a lot of properties: content, date, priority...

### Project

Projects are the way to organize tasks in a simple way. Each project has, at least, a `name` property.

### Future Implementations

In future versions of this package, I'd like to implement more resources to work with sections, comments and all the Todoist's stuff.

## License

MIT © [Dubisdev](https://dubis.dev)
