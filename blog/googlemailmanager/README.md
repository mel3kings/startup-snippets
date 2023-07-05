---
slug: Email-Manager
title: Email-Manager
authors: [mel]
tags: [builds, snippet library, dumb, snippet]
---
# Email Manager

:::tip
Tired of manually deleting emails? run this and it will automatically delete emails from people you specify from. 
:::


## Raw Source code:
https://github.com/mel3kings/startup-snippets/tree/main/blog/googlemailmanager


## Prerequisites
- `npm run install`
- Connect your Gmail with GCP and create your own `credentials.json`
    - (Should still be valid) `credentials.json` generated from GCP. (download from GCP API & Services Credentials)
- Configure `deleteEmails.js` to add the emails you want to delete from.

## How to start
```bash
npm run start
```

### Refresh token:
- note: if you change scope you need to delete token.json to regenerate a new one. also 
reset secret in GCP.
- note: has some issues if there is an active token elsewhere.


### GCP console:
https://console.cloud.google.com/apis/dashboard?project=

