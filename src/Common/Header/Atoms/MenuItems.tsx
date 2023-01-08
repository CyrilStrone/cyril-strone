import "../Styles/MenuItems.css";
export interface IMenuItems {
  name: string;
  href: string;
}
export const MenuItems = (params:IMenuItems) => {
  return (
    <div className="MenuItems">
      <a>{params.name}</a>
    </div>
  );
};
