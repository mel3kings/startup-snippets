# Unit Test


## How
- to run either execute this command or put it in your pre-commit see [Code Section](../../others/pre-commit/precommit#code):
`python -m unittest discover -s tests/ -p "*.py"`


## Code
```python
import unittest

class TestStringMethods(unittest.TestCase):
    def test_sanitize_string(self):
        s = """
        long string 

        this is a line break
        
        no line break """
        sanitized_response = sanitize_string(s)
        self.assertEqual("long string this is a line break no line break",sanitized_response)

if __name__ == '__main__':
    unittest.main()
```
