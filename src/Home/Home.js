import React, { useState, useEffect } from "react";
import { RobotItem } from "./RobotItem/RobotItem";
import { RobotsContainer } from "./Home.styled";
import { Button } from "antd";

import { useHistory } from "react-router-dom";
import { getAllRobots } from "../api/Api";
const Home = () => {
    const [robots, setRobots] = useState([]);
    let history = useHistory();
    function goToCreateRobotPage() {
        history.push({
            pathname: "/create_robot",
        });
    }

    useEffect(() => {
        getAllRobots().then((res) => setRobots(res));
        console.log();
    }, []);

    return (
        <RobotsContainer>
            {robots.map((robot) => (
                <RobotItem robot={robot}></RobotItem>
            ))}
            <Button onClick={goToCreateRobotPage}>Add new robot</Button>
        </RobotsContainer>
    );
};

export default Home;
