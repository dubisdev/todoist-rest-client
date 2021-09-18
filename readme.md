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

const myClient = TDSClient(API_TOKEN); //get an api token from your todoist integrations page
```

## API

### Client.resource_type.getAll()

This method returns an array of Titles/Names (strings) of all objects from the resource type.

```js
import TDSClient from "todoist-rest-client";

const Client = TDSClient(API_TOKEN); //get an api token from your todoist integrations page

Client.task.getAll(); // ["task 1", "task 2", ...]
Client.project.getAll(); // ["Project 1", "Project 2", ...]
```

### Client.resouce_type.getAllJSON()

This method returns an array of Titles/Names (JSON) of all objects from the type. The JSON has all the tasks/projects info.

```js
import TDSClient from "todoist-rest-client";

const Client = TDSClient(API_TOKEN); //get an api token from your todoist integrations page

Client.task.getAllJSON(); // [{taskObject}, {taskObject}, {taskObject}, ...]
Client.project.getAllJSON(); // [{projectObject}, {projectObject}, {projectObject}]
```

### Client.create( { type: string } , todoistResource)

This method allows creating todoist resources (tasks, projects, ...).

- If no params are given -> creates default todoistResourceType.

```js
//Creating a todoist resource
import TDSClient from "todoist-rest-client";

const Client = TDSClient(API_TOKEN); //get an api token from your todoist integrations page

Client.task.create(); // creates a _NO_CONTENT_ task in the inbox
Client.task.create(taskObject); // creates a task with the data given in the object
Client.project.create(); // creates a _NO_NAME_ project
Client.project.create(projectObject); // creates a project with the data given in the object
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
const myClient = TDSCLient(API_TOKEN);

myClient.project.create(myProject);
myClient.task.create(myTask);

```

### Task

Tasks are the basic pieces of Todoist. Each task has a lot of properties: content, date, priority...

### Project

Projects are the way to organize tasks in a simple way. Each project has, at least, a `name` property.

### Future Implementations

In future versions of this package, I'd like to implement more resources to work with sections, comments and all the Todoist's stuff.

## License

MIT © [Dubisdev](https://dubis.dev)
