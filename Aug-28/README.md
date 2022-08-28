# Aug-28, 2022


## React Router
- This is a third party package.
- This helps in creating navigation on our React application. This feels like it is a multi page website. In reality, it is only 1 page, because of JS, it feels like there are multiple pages.
- We are using the 6th version of this package.
- https://reactrouter.com/en/main
- npm install react-router-dom@6

### Steps for Installation.
- Step 1 -> npm install react-router-dom@6
- Step 2 -> Change index.js
  - import { BrowserRouter } from 'react-router-dom';
  - <BrowserRouter><App /></BrowserRouter>
- Step 3 -> Change App.js
  - import { Routes, Route } from 'react-router-dom';
  - <Routes><Route path="/" element={<Component />} /></Routes>
  - This is for routing, which component to load when.
- Step 4 -> Implement navigation.
  - import { Link } from 'react-router-dom';
  - <Link to="/"><p>Take me somewhere</p></Link>
- Done!

## Simple Social Media Project
- Using JSONPlaceholder as backend - https://jsonplaceholder.typicode.com/
- By default, show the list of posts.
- When we click on any single post, then show more detail (like comments) about that post.
- When we click on any username, then take to uesr profile page. There show all the posts made by that user.

## Path Parameters
- Examples:
  - https://www.linkedin.com/in/ishmael-muhikira-12464583/
  - https://www.linkedin.com/in/aayushsinha/
- LinkedIn DID NOT create millions of pages for millions of users.
- Instead, it created a template and used path parameters.
- When someone opens linked.com/in/<username>. It will check in the database for that user information.
- Then it will update the template with that information.
- If no data found, then throw error.

## Anatomy of a URL (URL Structuring)
- Uniform Resource Locator.
- Used to give a unique address to any resource.
- Example: https://www.google.com

### Protocol:
- What approach are you trying to access.
- Examples: http, https, ftp, sftp, smtp, ptp, tty.
- http and https for the regular websites.
- http -> hyper text transfer protocol.
- http is not recommeded.
- https is recommended.
- https -> http secure.
- In localhost, it is http by default.
- http://localhost:3000

### Top Level Domain TLD
- .com, .gov, .org, .ca, .in, .io, .app
- These are top level domains.
- These TLDs are purchased by big companies (mostly for profit or govt use, or some organizations).
- Once owned, then the company can sublet this to other people for their websites.

### Domain
- This is what we rent.
- This is rented on yearly basis.
- This is the second part of the URL.
- google.com -> Here, .com is the TLD, google is the domain name.
- Once we have control over that domain, we can also create subdomains.
- For different purposes we can create different subdomains.

### subdomain
- Sub domains can heva multiple levels.
- Upto about 64 levels of sub domains.
- a.b.c.d.google.com/
- https://research.domaintools.com/statistics/tld-counts/
- Typically for backend, we use something like api.product.com/
- Sometimes for various languages we use subdomains, typical example - Wikipedia.

### Path
- The part after the TLD.
- https://research.domaintools.com/statistics/tld-counts/
- Here, the path is /statistics/tld-counts/
- The path can point to a file as well. `/abcd.html`
- http://localhost:3000/post/1
- Here, the path is /post/1
- Here, 1 is a parameter that we are sending (it can be dynamic).
- But, it is also part of the path, therefore it is called Path Parameter.

### Port
- This can be found after the TLD.
- To specify a port, use use : followed by the Port number.
- More discussion done on Aug-21st.

### Query Parameter
- This is used for search and filter functionalities.
- https://www.youtube.com/results?search_query=laptops
- Here, path is /results. But the part we see after ? is not path.
- The part we see after ? is query parameters.
- A query parameter is a key value pair which is used to implement serarch and filter logic mostly.
- Here, the key => search_query and value => laptops
- Syntax ?<key>=<value>
- In case, if there are mulitple query parameters, then they are separated by &.
- Sytax ?<key1>=<value1>&<key2>=<value2>....
- We can have as many query parameters as we want.
- https://www.google.com/search?q=mobiles&source=hp&ei=kq8LY82JLejiz7sP6-mC8As&iflsig=AJiK0e8AAAAAYwu9ovPyjq2Uf4HXfxWOrYomSFRK6Fse&ved=0ahUKEwjNmqP-kOr5AhVo8XMBHeu0AL4Q4dUDCAY&uact=5&oq=mobiles&gs_lcp=Cgdnd3Mtd2l6EAMyBwgAELEDEEMyBAgAEEMyCggAELEDEIMBEEMyCAgAEIAEELEDMgUIABCABDIECAAQQzILCC4QgAQQxwEQrwEyCAgAEIAEELEDMggIABCABBCxAzIKCC4QsQMQgwEQQzoLCAAQgAQQsQMQgwE6EQguEIAEELEDEIMBEMcBENEDOggIABCxAxCDAToECC4QQzoKCAAQsQMQgwEQCjoICC4QgAQQsQM6DQguEMcBENEDENQCEEM6DQguELEDEIMBENQCEEM6BwguENQCEENQAFimB2C6CGgAcAB4AIABpQGIAeEGkgEDMC42mAEAoAEB&sclient=gws-wiz


## Task:
- Developing Fake Social Media Webiste.
- Create another social media clone using API -> https://dummyapi.io
- Have 3 pages:
  - Homepage -> Show the posts. When I click on any post, redirect to post detail, when I click on any username, redirect to user details page.
  - Post Detail -> Show the post detail, show the comments. when I click on the username, redirect to user details page
  - User Detail -> Show the user details, also show all the posts made by that user.

- Reference - https://geekconnect.netlify.app/


## Further Interest
- Fake Audio Streaming Platform. - https://geek-tunes.netlify.app
- Backend API being used - https://developer.prod.napster.com/



## Redux

## NodeJS


## Optional Chaning

## defer

---
## Shadow DOM
## URL Structuring
## Advanced CSS
## Query Params vs Path Params
## React Router
## Redux
## Writing your own hook

- nodemon - backend