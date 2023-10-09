import classNames from "classnames";
import styles from "./styles.module.css";

export const Button = ({
  children,
  onClick,
  disabled,
  className,
  size = "m",
  viewVariant = "base",
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={classNames(
        styles.root,
        className,
        styles[size],
        styles[viewVariant]
      )}
    >
      {children}
    </button>
  );
};
