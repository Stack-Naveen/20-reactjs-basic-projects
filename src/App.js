import "./App.css";
import ScrollIndicator from "./components/scroll-indicator";
/* import SwitchColor from "./components/light-dark-mode"; */
/* import TreeView from "./components/tree-view";
import menus from "./components/tree-view/data"; */
/* import ImageSlider from "./components/image-slider"; */
/* import LoadMoreData from "./components/load-more-data"; */
/* import Accordian from "./components/accordian";
import RandomColor from "./components/random-color"; */
/* import StarRating from "./components/star-rating"; */
/* import QrCode from "./components/qr-code-generator"; */
function App() {
  return (
    <div className="App">
      {/* <Accordian /> */}
      {/* <RandomColor /> */}
      {/* <StarRating stars="10"/> */}
      {/* <ImageSlider url={"https://picsum.photos/v2/list"} page={1} limit={10} /> */}
      {/* <LoadMoreData/> */}
      {/* <TreeView menus={menus}/> */}
      {/* <QrCode/> */}
      {/* <SwitchColor/> */}
      <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} />
    </div>
  );
}

export default App;
