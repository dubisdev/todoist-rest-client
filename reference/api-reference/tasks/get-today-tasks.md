# Get Today Tasks

{% hint style="warning" %}
By now, [Completed tasks are not implemented in the REST API](https://stackoverflow.com/questions/68368731/todoist-api-get-all-completed-tasks#:\~:text=Completed%20tasks%20are%20not%20implemented%20in%20the%20REST%20API%20yet.%20To%20be%20able%20to%20retrieve%20completed%20tasks%2C%20you%20should%20be%20using%20the%20Sync%20API%3A%20https%3A//developer.todoist.com/sync/v8/%23get-all-completed-items), so no completed task will be returned by using this client.
{% endhint %}

### getTodayTasks() <a href="gettodaytasks" id="gettodaytasks"></a>

```javascript
const myClient // an authorized client instance
myClient.task.getToday().then(res => console.log(res)) // ["task1 content", "task2 content", ...]
```

### getTodayTasksJSON() <a href="gettodaytasksjson" id="gettodaytasksjson"></a>

```javascript
const myClient // an authorized client instance
myClient.task.getTodayJSON().then(res => console.log(res)) // [{task1...}, {task2...}, ...]
```
