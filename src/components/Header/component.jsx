import classNames from "classnames";
import styles from "./styles.module.css";
import { useTheme } from "../../contexts/Theme";
import { Button } from "../Button/component";

export const Header = ({ className }) => {
  const { toggleTheme } = useTheme();
  return (
    <header className={classNames(styles.root, className)}>
      <Button onClick={toggleTheme}>SwitchTheme</Button>
    </header>
  );
};
