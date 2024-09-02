import { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import configureAppStore from "../store/configureStore";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import routes from "../utils/routes";

const store = configureAppStore();

function App() {
  return (
    <div className="app">
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          {/* Suspense for lazy loading */}
          <Suspense fallback={<div>Loading.....</div>}>
            <Routes>
              {routes.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  element={<route.element />}
                />
              ))}
            </Routes>
          </Suspense>
          <Footer />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
