# React

## Code
- Simple fetch call
```javascript
  const response = await fetch(`${DOMAIN_NAME}/upload`, {
        method: "POST",
        header: {
          "Access-Control-Allow-Origin": "*",
        },
        body: formData,
      });
```
- Simple Post call for uploading files
```javascript
const handleUploadSubmit = async (event) => {
    event.preventDefault();
    if (USE_BACKEND === false) {
      setResponse(
        processResponse([
          "React Hook useEffect has a missing dependency: 'response'. Either include it or remove the dependency, this is good, this is horrendous",
        ])
      );
    }
    setLoading(true);
    if (!file) {
      console.error("no attached file");
      setError("No attached file");
      setLoading(false);
      return;
    }
    const formData = new FormData();
    formData.append("file", file);
    
    try {
      const response = await fetch(`${DOMAIN_NAME}/upload`, {
        method: "POST",
        header: {
          "Access-Control-Allow-Origin": "*",
        },
        body: formData,
      });
    }
    ...
```
```Javascript
<form onSubmit={handleUploadSubmit}>
```