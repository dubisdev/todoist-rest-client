# Get All Comments

### getAll() <a href="getall" id="getall"></a>

```javascript
const myClient // an authorized client instance
myClient.comment.getAll(params).then(res => console.log(res)) // [{comment object}, {comment object}]
```

Todoist Rest API only allows to get all comments from a resource (like a project or a task). In extras module exists a method for getting all comments linked to an account.