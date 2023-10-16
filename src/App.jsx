import { Provider } from "react-redux";
import { ThemeProvider } from "./contexts/Theme";
import { RestaurantPage } from "./pages/Restaurants/component";
import { store } from "./redux";

export const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <RestaurantPage />
      </ThemeProvider>
    </Provider>
  );
};
