import { Button } from "../Button/component";

export const Tab = ({ onClick, children }) => {
  return <Button onClick={onClick}>{children}</Button>;
};
