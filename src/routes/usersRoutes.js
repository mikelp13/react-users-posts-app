import { lazy } from "react";

const usersRoutes = [
  {
    path: "/",
    name: "Users",
    exact: true,
    component: lazy(() =>
      import("../pages/usersPage/UsersPage" /* webpackChunkName: "UsersPage"*/)
    ),

  },
  {
    path: "/posts",
    name: "Posts",
    exact: true,
    component: lazy(() =>
      import("../pages/postsPage/PostsPage" /* webpackChunkName: "PostsPage"*/)
    ),
  },
  {
    path: "/post",
    name: "Post",
    exact: true,
    component: lazy(() =>
      import("../pages/postPage/PostPage" /* webpackChunkName: "PostPage"*/)
    ),
  },
 
];

export default usersRoutes;