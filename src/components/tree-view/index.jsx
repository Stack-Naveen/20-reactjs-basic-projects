import { useState } from "react";

const TreeView = ({ menus = [] }) => {
  return (
    <div className="main-container">
      <MenuList list={menus} />
    </div>
  );
};
export default TreeView;

const MenuList = ({ list = [] }) => {
  return (
    <ul className="list-container">
      {list && list.length
        ? list.map((eachItem) => {
            return <MenuItems key={eachItem.label} items={eachItem} />;
          })
        : null}
    </ul>
  );
};

const MenuItems = ({ items }) => {
  const [displayChildren, setDisplayChildren] = useState({});

  const handleToggle = (comingLabel) => {
    setDisplayChildren({
      ...displayChildren,
      [comingLabel]: !displayChildren[comingLabel],
    });
  };
  return (
    <li>
      <div className="item">
        <p> {items.label}</p>
        {items && items.children && items.children.length > 0 ? (
          <span onClick={() => handleToggle(items.label)}>
            {displayChildren[items.label] ? "-" : "+"}
          </span>
        ) : null}
      </div>
      {items &&
      items.children &&
      items.children.length > 0 &&
      displayChildren[items.label] ? (
        <MenuList list={items.children} />
      ) : null}
    </li>
  );
};
