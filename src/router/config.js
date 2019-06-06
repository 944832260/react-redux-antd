

// interface Router {
//   path: string;
//   component(): any;
//   exact?: boolean;
// }


// console.log(import("@components/home/home"));

const Config = [
  {
    path: "/",
    component: () => import("@components/home/home"),
  },
  {
    path: "/about",
    component: () => import("@components/about/about"),
  },
];

export default Config;
