import { Layout } from "antd";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import BasicLayout from "./layout/BasicLayout";
import HomePage from "./pages/HomePage";
import SmileysAndEmotionPage from "./pages/SmileysAndEmotionPage";
import PeopleAndBodyPage from "./pages/PeopleAndBodyPage";
import FoodAndDrinkPage from "./pages/FoodAndDrinkPage";
import ComponentPage from "./pages/ComponentPage";
import AnimalsAndNaturePage from "./pages/AnimalsAndNaturePage";

const App = () => {
  return (
    // Router
    <Router basename="/emoji">
      <Layout className="container">
        <Switch>
          {/* Home 화면 */}
          <Route
            exact
            path="/"
            component={() => <BasicLayout Page={HomePage} />}
          />
          {/* 스마일 & 감정 화면 */}
          <Route
            exact
            path="/smileys-emotion"
            component={() => <BasicLayout Page={SmileysAndEmotionPage} />}
          />
          {/* 사람 & 몸 화면 */}
          <Route
            exact
            path="/people-body"
            component={() => <BasicLayout Page={PeopleAndBodyPage} />}
          />
          {/* 음식 & 음료 화면 */}
          <Route
            exact
            path="/food-drink"
            component={() => <BasicLayout Page={FoodAndDrinkPage} />}
          />
          {/* 구성요소 화면 */}
          <Route
            exact
            path="/component"
            component={() => <BasicLayout Page={ComponentPage} />}
          />
          {/* 동물 & 자연 화면 */}
          <Route
            exact
            path="/animals-nature"
            component={() => <BasicLayout Page={AnimalsAndNaturePage} />}
          />
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;
