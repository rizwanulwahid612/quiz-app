import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Topic from './component/Topic/Topic';
import Statistics from './component/Statistics/Statistics';
import Blog from './component/Blog/Blog';
import Main from './Layout/Main';
import ErrorPage from './component/ErrorPage/ErrorPage';
import Quizes from './component/Quizes/Quizes';

function App() {
  const router = createBrowserRouter([
    {path:'/',element:<Main></Main>,
  errorElement:<ErrorPage></ErrorPage>,
children:[
  {path:'/',loader:async()=>fetch('https://openapi.programming-hero.com/api/quiz'),element:<Topic></Topic>},
  {path:'/topics',
  loader:async()=>fetch('https://openapi.programming-hero.com/api/quiz')
  ,element:<Topic></Topic>},
  {path:'/quizes/:quizId',
  loader:async({params})=>fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`)
  ,element:<Quizes></Quizes>},
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
