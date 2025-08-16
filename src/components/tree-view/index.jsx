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
      {list && list.length
        ? list.map((eachItem) => {
            return <MenuItems items={eachItem} />;
          })
        : null}
    </ul>
  );
};

const MenuItems = ({ items }) => {
  return (
    <li>
      <div>
        <p> {items.label}</p>
        {items && items.children && items.children.length > 0 ? (
          <span>+</span>
        ) : null}
      </div>
      {items && items.children && items.children.length > 0 ? (
        <MenuList list={items.children} />
      ) : null}
    </li>
  );
};
