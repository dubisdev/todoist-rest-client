# Comments

### Comment JSON Objects

The [official API documentation](https://developer.todoist.com/rest/v1/#comments) shows us the outline of a complete comment:

```json
{
    "content": "Need one bottle of milk",
    "id": 2992679862,
    "posted": "2016-09-22T07:00:00Z",
    "project_id": 2203306141,
    "task_id": 2995104339,
    "attachment": {
        "file_name": "File.pdf",
        "file_type": "application/pdf",
        "file_url": "https://cdn-domain.tld/path/to/file.pdf",
        "resource_type": "file"
    }
}
```

### Working Locally

Create comments locally

```javascript
import { Comment } from "todoist-rest-client";
let myComment = Comment({ project_id: 1234, content: "New comment"});
```
