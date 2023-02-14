import { MenuItems } from "../Atoms/MenuItems";
import "../Styles/Menu.css";
export const Menu = () => {
  const MenuArray: any = [
    {
      name:"About",
      href:"",
    },
    // {
    //   name:"Projects",
    //   href:"",
    // },
    // {
    //   name:"Contact",
    //   href:"",
    // },
    {
      name:"Components",
      href:"Components",
    },
    {
      name:"Projects",
      href:"Projects",
    }
  ];
  return (
    <div className="Menu">
      {MenuArray.map((e: any) => (
        <MenuItems name={e.name} href={e.href} />
      ))}
    </div>
  );
};
