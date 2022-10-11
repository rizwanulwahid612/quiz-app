import React from 'react';

const Blog = () => {
    return (
        <div className='mx-auto w-2/3 mt-[200px]'>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
  <div className="collapse-title text-xl font-medium bg-cyan-800 text-white">
  what is the purpose of the react router?
  </div>
  <div className="collapse-content"> 
    <p>ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.</p>
  </div>
</div>

<div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
  <div className="collapse-title text-xl font-medium bg-cyan-800 text-white">
  How does context API work?
  </div>
  <div className="collapse-content"> 
    <p>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
  </div>
</div>
<div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
  <div className="collapse-title text-xl font-medium bg-cyan-800 text-white">
  what is the use of useref in react?
  </div>
  <div className="collapse-content"> 
    <p>The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.</p>
  </div>
</div>
        </div>
        
    );
};

export default Blog;