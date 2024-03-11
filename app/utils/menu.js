const icon = require('./Icons')

const menu = [
  {
    id: 1,
    title: "All Tasks",
    icon: icon.home,
    link: "/",
  },
  {
    id: 2,
    title: "Important!",
    icon: icon.list,
    link: "/important",
  },
  {
    id: 3,
    title: "Completed!",
    icon: icon.check,
    link: "/completed",
  },
  {
    id: 4,
    title: "Do It Now",
    icon: icon.todo,
    link: "/incomplete",
  },
];

export default menu;
