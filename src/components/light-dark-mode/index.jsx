import useStorage from "./useStorage";
import "./styles.css";

const SwitchColor = () => {
  const [theme, setTheme] = useStorage("theme", "dark");

  const handleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <div className="theme-container" data-switch={theme}>
      <div className="change-theme">
        <p>Hey hii</p>
        <button onClick={handleTheme}>Switch Theme</button>
      </div>
    </div>
  );
};
export default SwitchColor;
