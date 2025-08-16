
const TreeView = ({ menus = [] }) => {
  return (
    <div>
      <MenuList list={menus} />
    </div>
  );
};
export default TreeView;

const MenuList = ({ list = [] }) => {
  return (
    <ul>
      {list.map((eachItem) => {
        return <MenuItems items={eachItem} />;
      })}
    </ul>
  );
};

const MenuItems = ({ items }) => {
  return <li>{items.label}</li>;
};
