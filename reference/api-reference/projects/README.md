# Projects

### Project JSON Objects

The [official API documentation](https://developer.todoist.com/rest/v1/#projects) shows us the outline of a complete project:

```json
{
    "comment_count": 10,
    "id": 2203306141,
    "name": "Shopping List",
    "order": 1,
    "color": 47,
    "shared": false,
    "sync_id": 2203843926,
    "parent_id": 220325187
    "favorite": false,
    "team_inbox": false,
    "inbox_project": false,
    "url": "https://todoist.com/showProject?id=2203306141&sync_id=2203843926"
}
```

### Working Locally

Create projects locally

```javascript
import { Project } from "todoist-rest-client";
let myProject = Project({ name: "Project name" });
```
