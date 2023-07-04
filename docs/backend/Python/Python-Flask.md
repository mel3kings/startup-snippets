# Flask
- Simple library to create a python API endpoint


## Code
- Code to generate a simple health check point with Python flask

```python
from flask import Flask, request, redirect, jsonify

@app.route('/health', methods=['GET'])
def health():
    return "hello ", 200

if __name__ == '__main__':
    app.run(debug=True)


```