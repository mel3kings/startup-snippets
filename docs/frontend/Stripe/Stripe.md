# Stripe
- Payments Solution for your applications

## Code
- Simple Forward Redreciton
```Javascript
<form className="pt-2" action={`${DOMAIN_NAME}/submit-session`} method="POST">
                    <button
                      className={`col-span-1 bg-tahiti-500 hover:bg-tahiti-400 text-white font-bold py-2 px-4 border-b-4 border-tahiti-700 hover:border-tahiti-500 rounded disabled:opacity-50`}
                      type="submit"
                    >
                       Checkout via Stripe for $7.99
                    </button>
                  </form>
```

- for Server side see: [Python Stripe](../../backend/Python/Python-Stripe.md)
- For token validation see: [Token Validation](../../backend/Python/Python-Token-Validation.md)