# Social Media Dashboard

This is a social media dashboard landing page with a dark/light theme switcher.

Users should be able to:
- view the optimal layout for the site depending on their device's screen size
- see hover states for all interactive elements on the page (cards and toggle switch)
- toggle color theme to their preference

This is a solution to the [Social Media Dashboard challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/social-media-dashboard-with-theme-switcher-6oY8ozp_H).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshots](#screenshots)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
  - [Future iterations](#future-iterations)
- [Author](#author)



## Overview


### The challenge

- Build out the project to the provided wireframe designs

### Screenshots

![](src/images/dashboard-dark.png)

![](src/images/dashboard-light.png)

### Links

- Solution URL: [GitHub repo](https://github.com/k-monnik/maker-landing-page)
- Live Site URL: [Social Media Dashboard - Netlify](https://km-social-media-dashboard.netlify.app)


## My process


### Built with

- React
- JSX
- Flexbox
- CSS Grid
- Mobile-first workflow
- [Tailwind CSS](https://tailwindcss.com) - CSS framework


### What I learned

With this project, I had fun learning how to implement the dark/light theme switcher using JavaScript and styling the toggle switch using Tailwind. The Tailwind `dark` variant made it simple to style the various theme color changes throughout the project.

Additionally, I took some time with this project to further my understanding of working with React and JSX. One of the major things I wanted to figure out in this project was how to more efficiently render the data and styling. With the project having 2 different sets of content data for the upper and lower grids, but nearly identical styling for the cards and their respective grids, I wanted to avoid components filled with repetitive blocks of code.

My solution was to create a data file (content.js) that contained all of the card data in an array, so the card data could be looped over using the array method `map()`, and rendered onto each card in the grid. I also created two separate card components (UpperCard and LowerCard) that contained the styling for each card. Then I imported both the data and the card component to each grid component to render everything together like this:

```
{upperData.map((data, index) => (
     <UpperCard key={index} data={data} />
))}
```

This solution kept the code concise in each component with minimal repetitive code, except where necessary (like the border color changes on the upper cards).

### Useful resources

[This article by Paul Hudson on Hacking with React](http://www.hackingwithreact.com/read/1/13/rendering-an-array-of-data-with-map-and-jsx) was super helpful for understanding the map() array and how to structure all the syntax.


### Future iterations

I will be adding gradient color styling to a few elements soon.


## Author

- Website - [Kristen Monnik](https://www.monnik.dev)
- Frontend Mentor - [@k-monnik](https://www.frontendmentor.io/profile/k-monnik)
- Twitter - [@kmonnik_dev](https://twitter.com/kmonnik_dev)
- GitHub - [@k-monnik](https://github.com/k-monnik)