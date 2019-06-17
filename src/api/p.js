export default [
  {
    path: "/",
    icon: "el-icon-menu",
    name: "菜单1",
    children: [
      {
        path: "/test",
        name: "菜单11",
        icon: "el-icon-menu",
      },
      {
        path: "/test12",
        name: "菜单12",
        icon: "el-icon-menu"
      },
      {
        path: "/iframe",
        name: "菜单13",
        icon: "el-icon-menu"
      }
    ]
  },
  { path: "/todo", icon: "el-icon-menu", name: "菜单2" }
];
