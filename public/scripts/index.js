// /* eslint-disable import/extensions */
// import {
//   fetchLoggedInUser,
const fetchLoggedInUser = async () => {
  const [response, _err] = await handleFetch('/api/me', { credentials: 'include' });
  return response;
};
//   handleFetch,
const handleFetch = async (url, options) => {
  try {
    const response = await fetch(url, options);
    const { status, statusText, ok } = response;
    if (!ok) return [null, { status, statusText }];

    const content = (status === 204) || await response.json();
    return [content, null];
  } catch (error) {
    return [null, error];
  }
};
//   setNav,
const setNav = (hasLoggedInUser) => {
  const loggedOutNavHtml = `<ul>
    <li><a href="/">Home</a></li>
    <li><a href="./create.html">Sign Up</a></li>
    <li><a href="./login.html">Login</a></li>
  </ul>`;

  const loggedInNavHtml = `<ul>
    <li><a href="/">Home</a></li>
    <li><a href="./user.html">Profile</a></li>
  </ul>`;

  const navHtml = hasLoggedInUser ? loggedInNavHtml : loggedOutNavHtml;
  document.querySelector('nav').innerHTML = navHtml;
};
//   getEl,
const getEl = (idOrClass) => document.querySelector(idOrClass)

//Get fetched options
const getFetchOptions = (body, method = 'POST') => ({
  method,
  credentials: 'include', // IMPORTANT, this tells fetch to include cookies
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(body),
});

// } from './global.js';

const main = async () => {
  const user = await fetchLoggedInUser();
  setNav(!!user);

  const [secret, _err] = await handleFetch('/api/logged-in-secret');
  console.log('secret, _err:', secret, _err);
  if (secret) {
    document.querySelector('#secret-message').textContent = secret.msg;
  }
};

main();


console.log("this script works")

const createButton = getEl('#post-inner-b')
const createForm = getEl('#create-post')


createButton.style.backgroundColor = 'black'


createForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // console.log("this workkkkksss");
  // console.log(e)
  // console.log(e.target[0].value)
  // console.log(e)

  
  document.getElementById('id01').style.display='none'

  const body = {
    user_id : 1 ,
    title : e.target[0].value,
    image_url : e.target[1].value,
    content : e.target[2].value
  }
  // console.log(body)
   let post =  handleFetch('http://127.0.0.1:3000/api/posts',getFetchOptions(body))

   console.log(post)

   return post
});