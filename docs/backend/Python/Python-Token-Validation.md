# JWT Token
- Flow to authenticate a request is valid. e.g Client -> Server(Generate Token) -> Client (Revalidate token or add as part of request header) -> Server validates Token before proceeding.
- See JWT Flow.


## Notes
- Ensure that you specified a secret that only you know.

## Code
```python
import jwt
from datetime import datetime, timedelta
import uuid
import pytz

VALID_TOKEN_MINUTES = 3

def generate_token(secret):
    aest_tz = pytz.timezone('Australia/Sydney')
    expiration_time = datetime.now(aest_tz) + timedelta(minutes=VALID_TOKEN_MINUTES)

    # Create a payload containing the expiration time and a unique identifier
    payload = {
        'exp': expiration_time.timestamp(),
        'unique_id': str(uuid.uuid4()),  # Generate a new unique identifier for each token
        # Add any additional data to the payload if needed
    }

    # Generate the signed token using the secret key
    secret_key = secret
    token = jwt.encode(payload, secret_key, algorithm='HS256')
    print("token generated")
    return token


def validate_token(token, secret_key):
    # Verify and decode the token using the secret key
    try:
        payload = jwt.decode(token, secret_key, algorithms=['HS256'])
        expiration_time = datetime.fromtimestamp(payload['exp'])
    
        # Check if the token is expired
        if datetime.utcnow() > expiration_time:
            return False
    except (jwt.ExpiredSignatureError, jwt.InvalidTokenError) as e:
        print("ERROR")
        print(e)
        return False

    return True

```