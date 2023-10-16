import { RestaurantTabContainer } from "../RestarauntTab/container";

import styles from "./styles.module.css";

export const RestaurantTabs = ({
  activeRestaurantId,
  onTabSelect,
  restaurantIds,
}) => {
  return (
    <div>
      {restaurantIds.map((id) => (
        <RestaurantTabContainer
          key={id}
          restaurantId={id}
          isActive={id === activeRestaurantId}
          onClick={() => onTabSelect(id)}
          className={styles.tab}
        >
          {name}
        </RestaurantTabContainer>
      ))}
    </div>
  );
};
