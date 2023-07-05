# Linting
- Python Linting for uniform code formatting

## Prerequisities:
Need to install Linting and Formatting Libraries first
### Installation
- `pip install pylint`
- `pip install black`

## Code
you can add the below in your precommits so it is automated.

```shell
black --target-version=py38 .  
find . -type f -name "*.py" | xargs pylint
```