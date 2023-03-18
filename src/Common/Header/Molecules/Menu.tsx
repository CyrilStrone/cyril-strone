import { useTranslation } from "react-i18next";
import { MenuItems } from "../Atoms/MenuItems";
import "../Styles/Menu.css";
export const Menu = () => {
  const { t } = useTranslation()

  const MenuArray: any = [
    {
      name:t('Header__Home'),
      href:"",
    },
    {
      name:t('Header__Portfolio'),
      href:"Portfolio",
    },
    {
      name:t('Header__Snippet'),
      href:"Snippet",
    },
    {
      name:t('Header__Blog'),
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
