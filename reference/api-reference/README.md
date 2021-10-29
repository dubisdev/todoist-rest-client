# API Reference

### Todoist Resource Objects

We call "Todoist Resources" to all the Todoist elements that can be managed through their API:

* [x] 🗒 [Projects](broken-reference)
* [x] 🗒 [Tasks](tasks/)
* [ ] 🗒 Sections
* [ ] 🗒 Comments
* [ ] 🗒 Labels

### Resource Schemas

Every of these resources has its own properties (each task has its content, date, ...). The client you some classes that allow you to create these elements **without having errors in their schemas**. The classes can be imported directly from the package.

```javascript
// we can import the methods from the package
import { Task, Project } from "todoist-rest-client";

let myTask = Task({ content: "Task content" });
let errorTask = Task();

console.log(myTask);
console.log(errorTask);
/*
    {   content: "Task content"   }
    {   content: "_NO_CONTENT_"   }
*/
```

{% hint style="info" %}
The client creates a "_No\_Content_" task to avoid errors when creating the task in the server.
{% endhint %}

{% hint style="warning" %}
With this **methods** you are only creating JSON objects, they are not being created in the Todoist Servers!

To do that you must use the `client._resource_type_.create()` methods.
{% endhint %}

{% content-ref url="broken-reference" %}
[Broken link](broken-reference)
{% endcontent-ref %}
