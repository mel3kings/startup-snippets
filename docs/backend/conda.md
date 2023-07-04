# Anaconda
- Allows you to segregate python versions and libraries
- https://www.anaconda.com/

## How
```shell
brew install --cask anaconda
export PATH=/usr/local/anaconda3/bin:"$PATH"
conda list
conda create --name my-python-app python=3.7 -y
conda activate my-python-app
```

### Deactivate
```conda deactivate```

## Notes
- Environment needs to be activated to run script
