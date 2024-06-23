# Entertainment Web App

This is a solution to the [Entertainment web app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/entertainment-web-app-J-UhgAW1X).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Navigate between Home, Movies, TV Series, and Bookmarked Shows pages
- Add/Remove bookmarks from all movies and TV series
- Search for relevant shows on all pages

### Screenshot

![](./screenshot.png)

### Links

- [View Code](https://github.com/elizerdim/entertainment-web-app)
- [Live Preview](https://entertainment-web-app-kohl.vercel.app/)

## My process

### Built with
- React
- React Router
- Immer npm package
- TypeScript  
  &nbsp;
- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Grid
- CSS Modules
- Mobile-first workflow  

### What I learned

I used the CSS reset and utility classes from scrimba's [Build a Space Travel Website](https://scrimba.com/learn/spacetravel) course by Kevin Powell.

- In CSS `var()` function, a second argument can be provided as a fallback value.
  ```css
  .grid {
    display: grid;
    gap: var(--gap, 1rem);
  }
  ```
- To add an empty line in Markdown, add two spaces to the end of the previous line and `\&nbsp;` on the next line.
- A custom CSS property can be overwritten with inline CSS or with a new declaration:
  ```html
  <div class="call-to-action" style="--gap: 2rem;"></div>
  ```
  ```css
  .call-to-action {
    --gap: 2rem;
  }
  ```
- I was wondering why Andy Bell's CSS reset included `ul[role='list']` instead of just `ul` and found this: "Safari does not recognize ordered or unordered lists as lists in the accessibility tree if they have a `list-style` value of `none`, unless the list is nested within the &lt;nav&gt; element. This behavior is intentional and is not considered a bug." [source (MDN)](https://developer.mozilla.org/en-US/docs/Web/CSS/list-style#accessibility_concerns)

- CSS ```font``` property is a shorthand property for font-style, font-variant, font-weight, font-size/line-height, and font-family.

- Accessible SVG as a navigation link (there are other alternatives, see Useful resources below): 
  ```html
  <NavLink to="/">
    <svg aria-hidden="true">
      <path />
    </svg>
    <span className="sr-only">Home Page</span>
  </NavLink>
  ```
- `scrollbar-width: none;` for hiding scrollbar without affecting the scrolling behavior.
- `Immer` npm package makes it easier to deal with nested data structures, I discovered it while going through React documentation in this [page](https://react.dev/learn/updating-arrays-in-state).
- git rebase - How to add staged changes to a previous commit (not the last one). This should be done before pushing the commit! 
  ```
  git add <my fixed files>
  git commit --fixup=OLDCOMMIT
  git rebase --interactive --autosquash OLDCOMMIT^
  ```
- `<input type="search" />`

- Using outline, border-bottom, negative margin-bottom, and caret-color properties for interactive styles.
  ```css
  .search-input:focus {
    outline: none;
    border-bottom: 1px solid #979797;
    margin-bottom: -1px;
    caret-color: red;
  }
  ```

### Useful resources

- [dvh, svh, lvh](https://www.youtube.com/watch?v=ru3U8MHbFFI) - In this video, [Kevin Powell](https://www.youtube.com/@KevinPowell) explains the differences between the three units. (spoiler alert: you want to use svh)
- [`padding-inline` CSS property](https://developer.mozilla.org/en-US/docs/Web/CSS/padding-inline) - This is a modern CSS property that defines the logical inline start and end padding depending on the writing mode, directionality, and text orientation. There is also `margin-inline`.
- [HTML `<picture>` element](https://www.w3schools.com/html/html_images_picture.asp) - This element allows display of different pictures for different devices or screen sizes.

  ```html
  <picture>
    <source media="(min-width: 650px)" srcset="img_food.jpg">
    <source media="(min-width: 465px)" srcset="img_car.jpg">
    <img src="img_girl.jpg">
  </picture>
  ```
- [Accessible SVGs](https://www.smashingmagazine.com/2021/05/accessible-svg-patterns-comparison/) - This article offers many options for making svgs accessible. 
- [immer](https://www.npmjs.com/package/immer) - "Create the next immutable state tree by simply modifying the current tree."
- [use-immer](https://www.npmjs.com/package/use-immer) - "A hook to use immer as a React hook to manipulate state."
- [stack overflow entry about git rebase](https://stackoverflow.com/a/27721031) - I used this answer to use git rebase to add staged changes to a previous commit.
- [How To Create A Search Bar In JavaScript](https://www.youtube.com/watch?v=TlP5WIxVirU&list=PL4EX4Aw5_AFunFh_tg2QiQrYzAj93gzya&index=6&t=15s) - Video by [Web Dev Simplified](https://www.youtube.com/@WebDevSimplified), uses vanilla JS but was useful for this project.