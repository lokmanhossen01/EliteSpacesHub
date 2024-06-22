import {
    createBrowserRouter,
  } from "react-router-dom";
  import Home from "../Pages/Home/Home";
  import UpdateProfile from "../Pages/UpadateProfile/UpdateProfile";
  import Login from "../Pages/Login/Login";
  import Root from "../Layouts/Root";
  import CardPropertyDetails from "../Pages/Home/SingleCard/CardPropertyDetails/CardPropertyDetails";
  import Register from "../Pages/Register/Register";
  import PrivateRoute from "./PrivateRoute";
  import ContactUs from "../Pages/ContactUs/ContactUs";
  import ErrorPage from "../Pages/ErrorPage/ErrorPage";
  import UserProfile from "../Pages/UserProfile/UserProfile";
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<ErrorPage></ErrorPage>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: 'card_property_details/:id',
  
          element: <PrivateRoute>
            <CardPropertyDetails></CardPropertyDetails>
            </PrivateRoute>,
  
          loader: ({ params }) => fetch(`/homeHive.json?id=${params.id}`).then(res => {
            if (!res.ok) {
              throw new Error('Failed to load fetch book details');
            }
            return res.json();
          }),
        },
        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path:'/contactUs',
          element:<ContactUs></ContactUs>
        },
        {
          path: '/updateProfile',
          element: <PrivateRoute>
            <UpdateProfile></UpdateProfile>
            </PrivateRoute>
        },
        {
          path:'/user_profile',
          element:<PrivateRoute>
            <UserProfile></UserProfile>
          </PrivateRoute>
        }
      ]
    },
  ]);
  
  export default router;