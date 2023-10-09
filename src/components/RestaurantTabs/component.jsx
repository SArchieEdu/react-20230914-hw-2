import { Tab } from "../Tab/component";

import styles from "./styles.module.css";

export const RestaurantTabs = ({
  activeRestaurantId,
  restaurants,
  onTabSelect,
}) => {
  return (
    <div>
      {restaurants.map(({ id, name }) => (
        <Tab
          key={id}
          isActive={id === activeRestaurantId}
          onClick={() => onTabSelect(id)}
          className={styles.tab}
        >
          {name}
        </Tab>
      ))}
    </div>
  );
};
