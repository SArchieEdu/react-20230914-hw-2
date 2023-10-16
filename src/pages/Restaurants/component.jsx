import { useState } from "react";
import { Restaurant } from "../../components/Restaurant/component";
import { Layout } from "../../components/Layout/component";
import { RestaurantTabsContainer } from "../../components/RestaurantTabs/container";
import { RestaurantContainer } from "../../components/Restaurant/container";

export const RestaurantPage = () => {
  const [activeRestaurantId, setActiveRestaurantId] = useState();

  return (
    <Layout>
      <RestaurantTabsContainer
        activeRestaurantId={activeRestaurantId}
        onTabSelect={setActiveRestaurantId}
      />
      {activeRestaurantId && (
        <RestaurantContainer restaurantId={activeRestaurantId} />
      )}
    </Layout>
  );
};
