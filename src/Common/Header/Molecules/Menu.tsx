import { MenuItems } from "../Atoms/MenuItems";
import "../Styles/Menu.css";
export const Menu = () => {
  const MenuArray: any = [
    {
      name:"Home",
      href:"",
    },
    {
      name:"Portfolio",
      href:"Portfolio",
    },
    {
      name:"Snippet",
      href:"Snippet",
    },
    {
      name:"Blog",
      href:"Blog",
    }
  ];
  return (
    <>
      {MenuArray.map((e: any) => (
        <MenuItems name={e.name} href={e.href} />
      ))}
    </>
  );
};
