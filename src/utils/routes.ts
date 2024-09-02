// import { RouteConfig } from "react-router-config";
import { lazy } from "react";

const UsersList = lazy(() => import("../app/pages/User/UsersList/UsersList"));
const PostsList = lazy(() => import("../app/pages/Posts/PostsList/PostsList"));
const CommentsList = lazy(
  () => import("../app/pages/Comments/CommentsList/CommentsList")
);
const NotFound = lazy(() => import("../app/pages/NotFound"));

const routes = [
  {
    path: "/",
    exact: true,
    element: PostsList,
  },
  {
    path: "/users",
    element: UsersList,
  },
  {
    path: "/comments",
    element: CommentsList,
  },
  {
    path: "*",
    element: NotFound,
  },
];

export default routes;
