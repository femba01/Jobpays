import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routes from "./routes";
import MarketplacePage from "./pages/MarketplacePage";
import StockDetailsPage from "./pages/StockDetailsPage";

const App = () => {
  return (
    <Router basename="/trading-hub">
      <Routes>
        <Route exact={true} path={routes.MarketplacePage} element={<MarketplacePage />} />
        <Route exact={true} path={routes.StockDetailsPage} element={<StockDetailsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
