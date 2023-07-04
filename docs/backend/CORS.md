# Python CORS
- Cross Origin Resource Sharing
- For local development usually when you try calling different domain names CORS will prevent you from doing so.
- you need to enable from Client CORS to enable application 

## How?
```python
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
```
