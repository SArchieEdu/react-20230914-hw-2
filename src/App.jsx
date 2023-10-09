import { useState } from "react";
import { restaurants } from "./constants/mock";
import { RestaurantTabs } from "./components/RestaurantTabs/component";
import { Restaurant } from "./components/Restaurant/component";

export const App = () => {
  const [activeRestaurantId, setActiveRestaurantId] = useState(
    restaurants[0].id
  );

  const activeRestaurant = restaurants.find(
    ({ id }) => id === activeRestaurantId
  );

  return (
    <div>
      <RestaurantTabs
        restaurants={restaurants}
        onTabSelect={setActiveRestaurantId}
      />
      <Restaurant restaurant={activeRestaurant} />
    </div>
  );
};
