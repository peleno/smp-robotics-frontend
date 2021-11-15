import React from "react";
import "antd/dist/antd.css";
import {
    StyledRobotItem,
    RobotItemContent,
    StyledButton,
    DeleteButton,
    EditButton,
} from "./RobotItem.styled";

export const RobotItem = (props) => {
    const { robot } = props;
    return (
        <StyledRobotItem>
            <RobotItemContent>
                <div>Robot name</div>
                <div>Route</div>
                <div>Type</div>
                <div>Patrolling start</div>
                <div>Patrolling end</div>
                <h3>{robot.name}</h3>
                <div>{robot.route_id}</div>
                <div>{robot.type}</div>
                <div>{robot.patrolling_start}</div>
                <div>{robot.patrolling_end}</div>
                {console.log(robot)}
            </RobotItemContent>
            <StyledButton>Monitor</StyledButton>
            <EditButton>Edit</EditButton>
            <DeleteButton>Delete</DeleteButton>
        </StyledRobotItem>
    );
};
