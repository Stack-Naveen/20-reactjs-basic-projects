import Tabs from "./tabs";

export default function TabsInfo() {
  const tabs = [
    {
      label: "Tab 1",
      content: <div>Hii iam Tab 1</div>,
    },
    {
      label: "Tab 2",
      content: <div>Hello iam Tab 2</div>,
    },
    {
      label: "Tab 3",
      content: <div>Bye iam Tab 3</div>,
    },
  ];

  function handleChange(currentTabIndex) {
    console.log(currentTabIndex);
  }

  return <Tabs tabsContent={tabs} onChange={handleChange} />;
}
