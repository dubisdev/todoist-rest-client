# Labels

### Label JSON Objects

The [official API documentation](https://developer.todoist.com/rest/v1/#labels) shows us the outline of a complete comment:

```json
{
    "id": 2156154810,
    "name": "Food",
    "color": 47,
    "order": 1,
    "favorite": false
}
```

### Working Locally

Create labels locally

```javascript
import { Label } from "todoist-rest-client";
let myLabel = Label({ name: "Label"});
```
