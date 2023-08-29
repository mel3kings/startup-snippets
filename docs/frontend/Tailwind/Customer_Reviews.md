# Customer Reviews Page

- Configurable Price Page that enables 'recommended' pricing to standup by just passing in color and which is recommended

![Link Name](customer_review.png)

## Usage

- Simple usage

```js
<ReviewPage reviews={reviews} />
```

- Sample Data:

```js
export const reviews = [
  {
    user_star_rating: 5,
    user_name: "Jackson Huge",
    user_position: "Co-Founder - HugeSocial",
    user_image_url:
      "https://ph-avatars.imgix.net/5682677/1abf9258-26cd-4119-b4c5-e2d9aba3d048?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=36&h=36&fit=crop&dpr=2",
    user_review: "This product is awesome",
    user_link: "https://www.producthunt.com/@jackson_huge",
  },
  {
    user_star_rating: 4,
    user_name: "Valeria Koroleva",
    user_image_url:
      "https://ph-avatars.imgix.net/5964126/2c075698-c788-498f-a4ad-e1b7073969b9?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=36&h=36&fit=crop&dpr=2",
    user_review:
      "The product is, of course, very useful - it saves time. Tell me, please, what kind of encrypted storage are the files? I'm worried about privacy. Do you sign an NDA?",
    user_link: "https://www.producthunt.com/@lestgrace",
  },
];
```

## Code

- ReviewPage.js

```js
import React from "react";
import { StarIconSVG } from "./StarIcon";

export const ReviewPage = ({ reviews }) => {
  return (
    <div className="flex h-full">
      <div className="overflow-x-auto h-full bg-white pt-6 flex flex-row scroll-smooth">
        {React.Children.toArray(
          reviews.map((review) => (
            <div className="mb-4 ml-4 p-4 outline outline-slate-400 rounded-lg w-full xs:w-3/4 sm:w-full">
              <div className="w-[360px] h-full">
                <div className="flex items-center mb-2 justify-center">
                  {[...Array(review.user_star_rating)].map((_, index) => (
                    <StarIconSVG key={index} />
                  ))}
                </div>
                <div className="flex">
                  <img className="w-12 h-12 rounded-full mb-4" src={review.user_image_url} alt="" />
                  <a href={review.user_link}>
                    <div className="text-gray-400 text-left text-sm pl-2 hover:underline hover:text-gray-800">
                      {review.user_name} <br />
                      {review.user_position}
                    </div>
                  </a>
                </div>
                <p className="text-gray-400 text-left text-md sm:text-sm">{`"${review.user_review}"`}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
```

- StarIcoon

```js
export const StarIconSVG = () => {
  return (
    <>
      <svg
        className="h-5 w-5"
        fill="#ffea00"
        viewBox="0 -32 576 576"
        xmlns="http://www.w3.org/2000/svg"
        stroke="#ffea00"
      >
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
          <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
        </g>
      </svg>
    </>
  );
};
```
