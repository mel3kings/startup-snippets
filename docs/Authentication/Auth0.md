# Auth0
- Identity provider for Applications 
- Enable users to login to your application using existing login credentials like Google.
- https://auth0.com/

## Notes
- https://auth0.com/blog/authenticating-svelte-apps/
    
## How
Installation:
- `npm install @auth0/auth0-spa-js`

## Code
Create AuthService
```js
import { createAuth0Client } from "@auth0/auth0-spa-js";
import { user, isAuthenticated, popupOpen } from "./store";
import { config } from "../auth_config";

async function createClient() {
  let auth0Client = await createAuth0Client({
    domain: config.domain,
    clientId: config.clientId,
  });

  return auth0Client;
}

async function loginWithPopup(client, options) {
  popupOpen.set(true);
  try {
    await client.loginWithPopup(options);

    user.set(await client.getUser());
    isAuthenticated.set(true);
  } catch (e) {
    // eslint-disable-next-line
    console.error(e);
  } finally {
    popupOpen.set(false);
  }
}

function logout(client) {
  return client.logout();
}

const auth = {
  createClient,
  loginWithPopup,
  logout,
};

export default auth;

```

on your application:
- is
```js
import { onMount } from "svelte";
  import auth from "./authService";
  import { isAuthenticated, user, user_tasks, tasks } from "./store";
  import TaskItem from "./components/TaskItem.svelte";

  let auth0Client;
  let newTask;

  onMount(async () => {
    auth0Client = await auth.createClient();

    isAuthenticated.set(await auth0Client.isAuthenticated());
    user.set(await auth0Client.getUser());
  });

  function login() {
    auth.loginWithPopup(auth0Client);
  }

  function logout() {
    auth.logout(auth0Client);
  }
```

onMount of your application (code is svelte)

```js
onMount(async () => {
    auth0Client = await auth.createClient();

    isAuthenticated.set(await auth0Client.isAuthenticated());
    user.set(await auth0Client.getUser());
  });
```

login/logout functions:
```js
function login() {
    auth.loginWithPopup(auth0Client);
  }

  function logout() {
    auth.logout(auth0Client);
  }
```

login button:
```svelte
<button
          type="button"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          on:click={login}>Login to Tweet</button
        >
```

you can now conditional render things
```svelte
 {#if !$isAuthenticated}
 {/if}

 ```