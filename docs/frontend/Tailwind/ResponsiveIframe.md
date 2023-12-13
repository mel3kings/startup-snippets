# Responsive IFrame

- CSS for responsive iframe

## Code

```css
.responsive-iframe-container {
  position: relative;
  overflow: hidden;
  width: 100%;
  /* for 16:9 aspect ratio change this to 75% for 4:3 padding-top: 56.25%;*/
}

.responsive-iframe {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  border: 0;
}
```

usage:

````
<div className="hidden lg:block responsive-iframe-container">
              <iframe
                allow="fullscreen"
                width={528}
                height={315}
                src={`https://www.youtube.com/embed/${YoutubeID}`}
              ></iframe>
            </div>
            ```
````
