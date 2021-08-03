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
          <Route path="/">
            <BasicLayout Page={HomePage} />
          </Route>
          {/* 스마일 & 감정 화면 */}
          <Route path="/smileys-emotion">
            <BasicLayout Page={SmileysAndEmotionPage} />
          </Route>
          {/* 사람 & 몸 화면 */}
          <Route path="/people-body">
            <BasicLayout Page={PeopleAndBodyPage} />
          </Route>
          {/* 음식 & 음료 화면 */}
          <Route path="/food-drink">
            <BasicLayout Page={FoodAndDrinkPage} />
          </Route>
          {/* 구성요소 화면 */}
          <Route path="/component">
            <BasicLayout Page={ComponentPage} />
          </Route>
          {/* 동물 & 자연 화면 */}
          <Route path="/animals-nature">
            <BasicLayout Page={AnimalsAndNaturePage} />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;
