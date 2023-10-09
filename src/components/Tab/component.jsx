import { Button } from "../Button/component";

export const Tab = ({ onClick, children, isActive, className }) => {
  return (
    <Button
      onClick={onClick}
      size="l"
      viewVariant={isActive ? "accent" : "base"}
      className={className}
    >
      {children}
    </Button>
  );
};
