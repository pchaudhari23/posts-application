import { lazy, Suspense, ComponentType } from "react";
import ProtectedRoute from "../app/components/Auth/ProtectedRoute";
import PostDetails from "../app/pages/Posts/PostDetails/PostDetails";

const Loadable = (Component: ComponentType) => {
  return (props: any) => (
    <Suspense fallback={<div>Loading.....</div>}>
      <Component {...props} />
    </Suspense>
  );
};

const UsersList = Loadable(
  lazy(() => import("../app/pages/User/UsersList/UsersList"))
);
const PostsList = Loadable(
  lazy(() => import("../app/pages/Posts/PostsList/PostsList"))
);
const CommentsList = Loadable(
  lazy(() => import("../app/pages/Comments/CommentsList/CommentsList"))
);
const NotFound = Loadable(lazy(() => import("../app/pages/NotFound")));
const SignIn = Loadable(lazy(() => import("../app/pages/User/SignIn/SignIn")));

interface AppRoute {
  path: string;
  element: JSX.Element;
}

const routes: AppRoute[] = [
  { path: "/", element: <PostsList /> },
  { path: "/posts/:id", element: <PostDetails /> },
  { path: "/users", element: <UsersList /> },
  { path: "/comments", element: <ProtectedRoute element={<CommentsList />} /> },
  { path: "*", element: <NotFound /> },
  { path: "/signin", element: <SignIn /> },
];

export default routes;
