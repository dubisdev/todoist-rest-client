# Sections

### Section JSON Objects

The [official API documentation](https://developer.todoist.com/rest/v1/#sections) shows us the outline of a complete section:

```json
{
    "id": 7025,
    "project_id": 2203306141,
    "order": 1,
    "name": "Groceries"
}
```

### Working Locally

Create sections locally

```javascript
import { Section } from "todoist-rest-client";
let mySection = Section({ name: "section name" });
```
