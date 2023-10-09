import { useState } from "react";
import { restaurants } from "../../constants/mock";
import { RestaurantTabs } from "../../components/RestaurantTabs/component";
import { Restaurant } from "../../components/Restaurant/component";
import { Layout } from "../../components/Layout/component";

export const RestaurantPage = () => {
  const [activeRestaurantId, setActiveRestaurantId] = useState(
    restaurants[0].id
  );

  const activeRestaurant = restaurants.find(
    ({ id }) => id === activeRestaurantId
  );

  return (
    <Layout>
      <RestaurantTabs
        activeRestaurantId={activeRestaurantId}
        restaurants={restaurants}
        onTabSelect={setActiveRestaurantId}
      />
      <Restaurant restaurant={activeRestaurant} />
    </Layout>
  );
};
