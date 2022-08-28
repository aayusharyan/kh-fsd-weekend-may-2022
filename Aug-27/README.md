# Aug-27, 2022

## Hosting your React website online.
- Hosting a website means deploying it on the inetnet.
- Currently, anything we develop is on local.
- The best we can do right now is share the Github URL. (The source code).
- But we cannot share the output.
- To share the final output, we host the website.
- For hosting React applications, we commonly use Netlify.
- https://www.netlify.com/ - This is a free service (upto a certain extent).
- Every website is a separate project. Every website is a separate github reposiory. (It is not mandatory but recommended).
- Before hosting, make sure that there are no warnings. Most of the hosting providers will not allow for hosting if there are any warnings in the code.
- After fixing the warnings, upload the code on Github repository.
- On Netlify, we add a site, import from Github.
- Select the repository and click build.
- Wait for deploy to finish.
- The URL we get is the final deployed URL which we can share with anyone to see on the internet.
- If we change anything on the Github repository, it will automatically update the deployed website.


## Virtual DOM
- The way react works, is that it creates a copy of the actual DOM.
- Any changes that we make are not reflected in the DOM immediately. React will bundle multiple changes together and make 1 DOM change.
- Doing so will save computational power. That is, make it more efficient.
- That copy which React will track and compare with the Actual DOM is called Virtual DOM.
- Whatever change we do, React will first do that to Virtual DOM. Then after bundling multiple changes, it will then make the transfer of changes from Virtual DOM to Actual DOM.
- Virtual DOM only contains part of React.
- Things like Fragment, which is technically considered as a tag, is a part of Virtual DOM but not actual DOM.
- It's like a Cache between the code change and the actual dom re-rendering.
- This is primarily for better efficiency of the application.

## MPA (Multi Page Application)
- This is the default way of creating websites.
- Each page is separate from others.

## SPA (Single Page Application)
- Whenever we navigate, the browser will basically flush everything it has and then reload everything again from the server.
- This is inefficient, but from a user experience, there is a moment of blank page. (white or black, depending on system).
- In SPA, technically there is only 1 webpage.
- The very basic way of creating SPA is Conditional Rendering.
- Second approach is by using a third party package called react-router.

### Conditional Rendering
- This is the approach of deciding what to render and what not to render, based on a certain set of conditions.
- This typically uses some sort of state variable.
- For the condition, this uses ternary. It is possible that this uses more than 1 ternary operators in nested format.


### Task:
- Create a personal website using React Router. Add 3 pages.
  - Homepage
  - About me page
  - Contact me page.
- Upload it on netlify.
- Add some information about you on the website.