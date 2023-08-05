import Hero from "./pages/app/hero/Hero";
import Nav from "./components/nav/Nav";
import Courses from "./pages/app/courses/Courses";
import {Outlet, createBrowserRouter,RouterProvider } from "react-router-dom";
import Details from "./pages/app/details/Details";
import { useParams } from "react-router-dom";
import Chapter from "./pages/app/chapter/Chapter";
import Learn from './pages/app/learn/Learn'

function App() {

  const router = createBrowserRouter([
    {
      path: '/e-learning', element: <Nav />, children:[
        {
          path: '', element :<Hero />
        },
        {
          // understand below routing 
          path: '/e-learning/courses',children:[
            {
              path: '', element : <Courses />
            },
            {
              path: ':id', children: [
                 {
                  path: '', children:[
                    {
                      index:true, element: <Details />
                    },
                    {
                      path: ':id', element : <Chapter />
                     } 

                  ]
                 }
               
              ]
            }
          ]
        },
        {
          path: '/e-learning/learn/:courseId', element: <Learn />, children:[
            {
              path: 'chapter/:chapterId', element: <Chapter />
            }
          ]
        }
      ]},
     
    
  ])
  return (
    <>
    <RouterProvider router ={router} />
    </>
  );
}

export default App;
