# Mobile Friendly Grid


## Example
![Link Name](stack-grid.png)
![Link Name](stack-grid-full.png)
## Code
```js

<div className="md:w-3/4 sm:w-full grid grid-cols-3 gap-1 text-black">
      <div className="col-span-3">
        <div className="justify-center">
          <div className="drop-shadow-md p-5 xs:p-0">
            <p className="md:text-4xl sm:text-2xl xs:text-xl [text-shadow:_.5px_.5px_0_var(--tw-shadow-color)] shadow-gray-500 sm:pb-4">
              World-class Engineering
            </p>
          </div>
        </div>
        <div className="justify-center content-center lg:flex sm:hidden xs:hidden">
          <AllIcons />
        </div>
      </div>

      <div className="col-span-3 sm:h-[4rem]"></div>

      {pricingData.map((d, index) => (
        <div
          key={index}
          className="text-left p-3 rounded-xl lg:col-span-1 xs:col-span-3 md:h-full bg-neutral-200 flex flex-col sm:my-1 xs:mx-5"
        >
          <div className="text-xl md:text-xl sm:text-sm xs:text-sm font-black [text-shadow:_.5px_.5px_0_rgb(0_0_0_/_100%)] pb-3">
            {d.plan}
          </div>
          <div className="text-md xs:text-xs font-bold [text-shadow:_.5px_.5px_0_rgb(0_0_0_/_100%)] pb-3">
            {d.price}
          </div>
          <div>
            {d.perks.map((perk, index) => (
              <div
                key={index}
                className="flex font-thin pb-2 md:text-md sm:text-sm xs:text-xs"
              >
                <div>
                  {' '}
                  <Icon className="w-5 h-5" />{' '}
                </div>
                &nbsp; {perk}
              </div>
            ))}
          </div>
          <div className="flex-grow sm:block xs:hidden"></div>
          <div className="flex justify-center">
            <a
              href="#"
              className="underline decoration-dotted xs:text-sm"
            >
              Book a Call
            </a>
          </div>
        </div>
      ))}
    </div>
    ```