# Search Tasks

### search(attributes)

For more info about attributes visit [official documentation](https://developer.todoist.com/rest/v1/#:~:text=Precedence%20of%20parameters)
More info about filters [here](https://todoist.com/help/articles/introduction-to-filters)

```javascript
const myClient // an authorized client instance
myClient.task.search({ lang: "en", filter: "today"}) // returns today tasks
myClient.task.search({ ids: [1234567, 1223131, 12312312]}) // returns that tasks
```
