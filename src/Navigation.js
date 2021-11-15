import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { CreateRobot } from "./CreateRobot/CreateRobot";
import Home from "./Home/Home";
export const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <Route path="/robot/:robotId/monitor">
                    <div>abc</div>
                </Route>
                <Route path="/robot/:robotId/edit">
                    <div>adb</div>
                </Route>
                <Route path="/create_robot">
                    <CreateRobot></CreateRobot>
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>
    );
};
