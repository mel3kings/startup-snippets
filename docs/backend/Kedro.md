# Kedro
- Kedro is the foundation for clean data science code. It borrows concepts from software engineering and applies them to machine-learning projects.
- https://kedro.org/

## How
### Pip
- install via pip
`pip install kedro`
- test if it's working
`kedro info`
### Anaconda
```shell
brew install --cask anaconda
export PATH=/usr/local/anaconda3/bin:"$PATH"
conda list

conda create --name kedro-environment python=3.7 -y
conda activate kedro-environment
conda install -c conda-forge kedro
kedro info
```

## Code
```python
"""Contents of hello_kedro.py"""
from kedro.io import DataCatalog, MemoryDataSet
from kedro.pipeline import node, Pipeline
from kedro.runner import SequentialRunner

# Prepare a data catalog
data_catalog = DataCatalog({"my_salutation": MemoryDataSet()})


# Prepare first node
def return_greeting():
    return "Hello"


return_greeting_node = node(return_greeting, inputs=None, outputs="my_salutation")


# Prepare second node
def join_statements(greeting):
    return f"{greeting} Kedro!"


join_statements_node = node(
    join_statements, inputs="my_salutation", outputs="my_message"
)

# Assemble nodes into a pipeline
pipeline = Pipeline([return_greeting_node, join_statements_node])

# Create a runner to run the pipeline
runner = SequentialRunner()

# Run the pipeline
print(runner.run(pipeline, data_catalog))
```