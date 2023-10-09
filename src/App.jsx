import { ThemeProvider } from "./contexts/Theme";
import { RestaurantPage } from "./pages/Restaurants/component";

export const App = () => {
  return (
    <ThemeProvider>
      <RestaurantPage />
    </ThemeProvider>
  );
};
