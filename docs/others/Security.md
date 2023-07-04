# Security
- Various notes security specific tools

## GitLeaks
- Gitleaks is a fast, light-weight, portable, and open-source secret scanner for git repositories, files, and directories.
- Run GitLeaks before committing to ensure there are no leaked passwords
- https://gitleaks.io/

### Code
```bash
#!/bin/sh
#
# An example hook script to verify what is about to be committed.
# Called by "git commit" with no arguments.  The hook should
# exit with non-zero status after issuing an appropriate message if
# it wants to stop the commit.
#
# To enable this hook, rename this file to "pre-commit".
echo "======= running gitleaks ======="
GITLEAKS="$(gitleaks protect -v . | grep 'leaks found')"
if [ -z "$GITLEAKS" ]
then
	echo "no leaks"
else
	echo "Found potential leaks! exiting"
	echo GITLEAKS
	exit 1
fi```