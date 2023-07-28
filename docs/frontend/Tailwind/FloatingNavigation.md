

# Floating Navigation
- Floating navigation that appears on top right of your page
- Toggling Hamburger on click
- SVG on Menu pages

![Link Name](hamburger_open.png)
## Code
```js
import { useState } from 'react'

export const FloatingNavigation = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div className="fixed top-1 right-1">
      {!isOpen ? (
        <>
          <a
            aria-current="page"
            className="pt-6 inline-flex flex-col items-center text-xs font-medium py-3 px-4 text-slate-600 flex-grow"
            onClick={() => toggleMenu()}
          >
            <svg
              className="w-7 h-7"
              viewBox="0 -1 20 20"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g
                id="Page-1"
                stroke="none"
                strokeWidth="1"
                fill="currentColor"
                fillRule="evenodd"
              >
                <g
                  id="Icon-Set"
                  transform="translate(-210.000000, -887.000000)"
                  fill="currentColor"
                >
                  <path
                    d="M229,895 L211,895 C210.448,895 210,895.448 210,896 C210,896.553 210.448,897 211,897 L229,897 C229.552,897 230,896.553 230,896 C230,895.448 229.552,895 229,895 L229,895 Z M229,903 L211,903 C210.448,903 210,903.448 210,904 C210,904.553 210.448,905 211,905 L229,905 C229.552,905 230,904.553 230,904 C230,903.448 229.552,903 229,903 L229,903 Z M211,889 L229,889 C229.552,889 230,888.553 230,888 C230,887.448 229.552,887 229,887 L211,887 C210.448,887 210,887.448 210,888 C210,888.553 210.448,889 211,889 L211,889 Z"
                    id="hamburger"
                  ></path>
                </g>
              </g>
            </svg>
          </a>
        </>
      ) : (
        <>
          {' '}
          <a
            aria-current="page"
            className="inline-flex flex-col items-center text-xs font-medium py-3 px-4 text-slate-600 flex-grow"
            onClick={() => toggleMenu()}
          >
            {' '}
            <svg
              className="w-12 h-12"
              viewBox="0 -2 20 20"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {' '}
                <path
                  d="M16 8L8 16M12 12L16 16M8 8L10 10"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{' '}
              </g>
            </svg>
          </a>
        </>
      )}
      {/* Menu Starts Here  */}
      {isOpen && (
        <>
          <a
            aria-current="page"
            className="inline-flex flex-col items-center text-xs font-medium py-3 px-4 text-slate-600 flex-grow"
            href="#home"
          >
            <svg
              className="w-7 h-7"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
            </svg>
            <span className="sr-only">Home</span>
          </a>
          <a
            aria-current="page"
            className="inline-flex flex-col items-center text-xs font-medium py-3 px-4 text-slate-600 flex-grow"
            href="#build"
          >
            <svg
              className="w-7 h-7"
              fill="currentColor"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 511.999 511.999"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {' '}
                <g>
                  {' '}
                  <g>
                    {' '}
                    <path d="M495.327,369.288h-19.505c11.773-4.085,20.251-15.281,20.251-28.426v-55.788c0-16.59-13.496-30.086-30.085-30.086h-90.05 c11.255-4.356,19.262-15.289,19.262-28.064v-55.788c0-16.59-13.497-30.086-30.086-30.086h-89.95 c11.773-4.085,20.251-15.281,20.251-28.426V56.839c0-16.59-13.496-30.086-30.085-30.086H127.244 c-14.477,0-26.594,10.278-29.448,23.92c-2.741-13.625-14.801-23.92-29.222-23.92H16.673C7.465,26.753,0,34.218,0,43.426v82.612 c0,9.208,7.465,16.673,16.673,16.673h3.681c-11.773,4.085-20.251,15.281-20.251,28.426v55.788 c0,12.775,8.006,23.708,19.263,28.064h-2.693C7.465,254.989,0,262.454,0,271.661v82.612c0,9.208,7.465,16.673,16.673,16.673h7.309 c-11.773,4.085-20.251,15.28-20.251,28.426v55.788c0,16.59,13.496,30.086,30.085,30.086H171.9c14.37,0,26.411-10.128,29.378-23.62 c2.967,13.491,15.008,23.62,29.378,23.62H368.74c14.477,0,26.594-10.278,29.448-23.92c2.741,13.625,14.801,23.92,29.222,23.92 h67.917c9.208,0,16.673-7.465,16.673-16.673v-82.612C512,376.753,504.535,369.288,495.327,369.288z M361.854,174.397v49.267 H230.29v-49.267H361.854z M298.43,346.916c2.143,10.447,9.723,18.93,19.638,22.371h-39.277 C288.707,365.848,296.287,357.365,298.43,346.916z M279.781,257.01h37.297c-9.427,3.649-16.576,11.911-18.648,22.008 C296.358,268.922,289.21,260.66,279.781,257.01z M130.505,60.099h131.563v49.266H130.505V60.099z M197.651,164.671 c-2.256-10.258-9.759-18.566-19.544-21.96h39.089C207.41,146.105,199.907,154.413,197.651,164.671z M216.206,254.989h-37.108 c9.299-3.599,16.374-11.689,18.554-21.598C199.831,243.3,206.907,251.389,216.206,254.989z M97.797,118.791 c2.174,10.397,9.733,18.833,19.613,22.261H78.364C88.201,137.621,95.707,129.177,97.797,118.791z M165.012,174.397v49.267H33.449 v-49.267H165.012z M101.426,347.028c2.174,10.397,9.733,18.833,19.613,22.261H81.992 C91.83,365.857,99.336,357.414,101.426,347.028z M82.974,257.011h37.074c-9.393,3.635-16.522,11.85-18.623,21.897 C99.406,268.872,92.327,260.65,82.974,257.011z M33.346,60.099h31.692v49.266H33.346V60.099z M33.346,337.601v-49.266h35.32 v49.266H33.346z M168.641,451.9H37.077v-49.266h131.564V451.9z M201.279,392.907c-2.256-10.258-9.759-18.566-19.544-21.96h39.088 C211.038,374.342,203.535,382.65,201.279,392.907z M134.134,337.602v-49.267h131.563v49.267H134.134z M365.482,451.9H233.918 v-49.266h131.564V451.9z M398.189,393.208c-2.174-10.396-9.733-18.833-19.613-22.261h39.046 C407.785,374.378,400.279,382.822,398.189,393.208z M331.164,337.602v-49.267h131.563v49.267H331.164z M478.654,451.9h-47.706 v-49.266h47.706V451.9z"></path>{' '}
                  </g>{' '}
                </g>{' '}
              </g>
            </svg>
            <span className="sr-only">Build</span>
          </a>

          {/* Article Starts here */}
          <a
            className="inline-flex flex-col font-medium text-slate-600 py-4 px-4"
            href="#articles"
          >
            <svg
              className="w-7 h-7"
              fill="currentColor"
              version="1.1"
              id="XMLID_65_"
              viewBox="0 0 24 24"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {' '}
                <g id="article">
                  {' '}
                  <g>
                    {' '}
                    <path d="M20.5,22H4c-0.2,0-0.3,0-0.5,0C1.6,22,0,20.4,0,18.5V6h5V2h19v16.5C24,20.4,22.4,22,20.5,22z M6.7,20h13.8 c0.8,0,1.5-0.7,1.5-1.5V4H7v14.5C7,19,6.9,19.5,6.7,20z M2,8v10.5C2,19.3,2.7,20,3.5,20S5,19.3,5,18.5V8H2z"></path>{' '}
                  </g>{' '}
                  <g>
                    {' '}
                    <rect x="15" y="6" width="5" height="6"></rect>{' '}
                  </g>{' '}
                  <g>
                    {' '}
                    <rect x="9" y="6" width="4" height="2"></rect>{' '}
                  </g>{' '}
                  <g>
                    {' '}
                    <rect x="9" y="10" width="4" height="2"></rect>{' '}
                  </g>{' '}
                  <g>
                    {' '}
                    <rect x="9" y="14" width="11" height="2"></rect>{' '}
                  </g>{' '}
                </g>{' '}
              </g>
            </svg>
          </a>
          <span className="sr-only">Upload</span>

          {/* Person starts here */}
          <a
            className="inline-flex flex-col font-medium text-slate-600 py-4 px-4"
            href="#subscribe"
          >
            <svg
              className="w-7 h-7"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {' '}
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9 9C9 7.3425 10.3425 6 12 6C13.6575 6 15 7.3425 15 9C15 10.6575 13.6575 12 12 12C10.3425 12 9 10.6575 9 9ZM12 7.5C12.825 7.5 13.5 8.175 13.5 9C13.5 9.825 12.825 10.5 12 10.5C11.175 10.5 10.5 9.825 10.5 9C10.5 8.175 11.175 7.5 12 7.5Z"
                ></path>{' '}
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 13.5C9.9975 13.5 6 14.505 6 16.5V18H18V16.5C18 14.505 14.0025 13.5 12 13.5ZM12 15C14.025 15 16.35 15.9675 16.5 16.5H7.5C7.6725 15.96 9.9825 15 12 15Z"
                ></path>{' '}
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M19.7778 2H4.22222C3 2 2 3 2 4.22222V19.7778C2 21 3 22 4.22222 22H19.7778C21 22 22 21 22 19.7778V4.22222C22 3 21 2 19.7778 2ZM20 4V20H4V4H20Z"
                ></path>{' '}
              </g>
            </svg>
            <span className="sr-only">Profile</span>
          </a>
        </>
      )}
    </div>
  )
}

```

