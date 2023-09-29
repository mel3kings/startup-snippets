# Bottom Nav

- Simple Bottom Nav

## Code

```js
export const BottomNav = () => {
  return (
    <footer className="bg-white bottom-0 w-full sticky">
      <div className="mx-auto w-full p-4 py-6 lg:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-black sm:text-center">
            © 2023{" "}
            <a href="https://melchortatlonghari.com/" className="hover:underline">
              Melchor Tatlonghari
            </a>
            <span className="text-gray-500 pl-5">Privacy</span>
            <span className="text-gray-500 pl-5">Terms</span>
          </span>
        </div>
      </div>
    </footer>
  );
};
```
