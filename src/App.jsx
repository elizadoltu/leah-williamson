import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { Suspense, lazy } from "react";
const Home = lazy(() => import("./pages/Home"));
const Career = lazy(() => import("./pages/Career"));
const Contact = lazy(() => import("./pages/Contact"));
const Arsenal = lazy(() => import("./pages/AboutArsenal"));
const England = lazy(() => import("./pages/AboutEngland"));
const General = lazy(() => import("./pages/AboutGeneral"));
const NotFound = lazy(() => import ("./utils/NotFound"));

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense
              fallback={
                <div className="w-full h-screen bg-background flex justify-center items-center font-apercu-bold text-font">
                  Loading...
                </div>
              }
            >
              <Home />
            </Suspense>
          }
        />
        <Route
          path="/England"
          element={
            <Suspense
              fallback={
                <div className="w-full h-screen bg-background flex justify-center items-center font-apercu-bold text-font">
                  Loading...
                </div>
              }
            >
              <England />
            </Suspense>
          }
        />
        <Route
          path="/General"
          element={
            <Suspense
              fallback={
                <div className="w-full h-screen bg-background flex justify-center items-center font-apercu-bold text-font">
                  Loading...
                </div>
              }
            >
              <General />
            </Suspense>
          }
        />
        <Route
          path="/Arsenal"
          element={
            <Suspense
              fallback={
                <div className="w-full h-screen bg-background flex justify-center items-center font-apercu-bold text-font">
                  Loading...
                </div>
              }
            >
              <Arsenal />
            </Suspense>
          }
        />
        <Route
          path="/Contact"
          element={
            <Suspense
              fallback={
                <div className="w-full h-screen bg-background flex justify-center items-center font-apercu-bold text-font">
                  Loading...
                </div>
              }
            >
              <Contact />
            </Suspense>
          }
        />
        <Route
          path="/Career"
          element={
            <Suspense
              fallback={
                <div className="w-full h-screen bg-background flex justify-center items-center font-apercu-bold text-font">
                  Loading...
                </div>
              }
            >
              <Career />
            </Suspense>
          }
        />
        <Route path="*" element = {<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
