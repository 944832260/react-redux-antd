

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
