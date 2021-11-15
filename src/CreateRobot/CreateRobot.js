import React, { useState } from "react";

import "antd/dist/antd.css";
import { Container } from "./CreateRobot.styled";
import { Input, Button } from "antd";
import { postNewRobot } from "../api/Api";
export const CreateRobot = () => {
    const [robotName, setRobotName] = useState("");
    const [robotRouteId, setRobotRouteId] = useState("");
    const [robotType, setRobotType] = useState("");
    const [robotPatrollingStart, setRobotPatrollingStart] = useState("");
    const [robotPatrollingEnd, setRobotPatrollingEnd] = useState("");
    function sendPostRequest() {
        const robot = {
            name: robotName,
            route_id: robotRouteId,
            type: robotType,
            patrolling_start: robotPatrollingStart,
            patrolling_end: robotPatrollingEnd,
        };
        console.log(robot);
        postNewRobot(robot);
    }
    return (
        <Container>
            <Input
                placeholder="Robot name"
                value={robotName}
                onChange={(e) => setRobotName(e.target.value)}
            ></Input>
            <Input
                placeholder="Route id"
                value={robotRouteId}
                onChange={(e) => setRobotRouteId(e.target.value)}
            ></Input>
            <Input
                placeholder="Robot type"
                value={robotType}
                onChange={(e) => setRobotType(e.target.value)}
            ></Input>
            <Input
                placeholder="Patrolling start"
                value={robotPatrollingStart}
                onChange={(e) => setRobotPatrollingStart(e.target.value)}
            ></Input>
            <Input
                placeholder="Patrolling end"
                value={robotPatrollingEnd}
                onChange={(e) => setRobotPatrollingEnd(e.target.value)}
            ></Input>
            <Button onClick={sendPostRequest}>Add robot</Button>
        </Container>
    );
};
