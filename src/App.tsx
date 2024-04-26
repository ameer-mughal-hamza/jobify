import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";

const Layout = () => {
  return (
    <div className="app">
      {/* Add Navbar */}
      <Outlet />
      {/* Add Footer */}
    </div>
  );
};

const Register = () => {
  return <>Register</>;
};
const Login = () => {
  return <>Login</>;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
