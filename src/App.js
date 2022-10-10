import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Topic from './component/Topic/Topic';
import Statistics from './component/Statistics/Statistics';
import Blog from './component/Blog/Blog';
import Main from './Layout/Main';
import ErrorPage from './component/ErrorPage/ErrorPage';

function App() {
  const router = createBrowserRouter([
    {path:'/',element:<Main></Main>,
  errorElement:<ErrorPage></ErrorPage>,
children:[
  {path:'/',element:<Topic></Topic>},
  {path:'/topics',element:<Topic></Topic>},
  {path:'/statistics',element:<Statistics></Statistics>},
  {path:'/blog',element:<Blog></Blog>}
]},
  
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
      
    </div>
  );
}

export default App;
