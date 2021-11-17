# Getting Names

If you are just looking for names and do not need the full JSON object, this methods are for you.

{% hint style="info" %}
This methods are not available in the rest API. They have been implemented just for this client and dont provide performance improvements respect of getting all JSON and filtering it.
{% endhint %}

### getAllTaskNames()

```javascript
const myClient // an authorized client instance
myClient.extras.getAllTaskNames().then(res => console.log(res)) // ["task1 content", "task2 content", ...]
```

### getAllProjectNames()

```javascript
const myClient // an authorized client instance
myClient.extras.getAllProjectNames().then(res => console.log(res)) // ["Inbox", "Project 1", ...]
```

### getAllSectionNames(project\_id?)

If no project\_id is provided returns all section names, if provided, returns sections from that project.

```javascript
const myClient // an authorized client instance
myClient.extras.getAllSectionNames().then(res => console.log(res)) // ["Section 1", "Section 2", ...]
```

### getAllLabelNames()

```javascript
const myClient // an authorized client instance
myClient.extras.getAllLabelNames().then(res => console.log(res)) // ["Label-1", "another-label", ...]
```
