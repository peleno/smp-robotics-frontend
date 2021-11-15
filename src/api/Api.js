import axios from "axios";

const BaseRequest = axios.create({
    baseURL:
        "https://europe-central2-smp-robotics.cloudfunctions.net/robot-controller",
    // "http://localhost:8081/robot",
    responseType: "json",
});

export const getAllRobots = async () => {
    const robots = await (await BaseRequest.get()).data;
    return robots;
};

export const postNewRobot = (robot) => {
    BaseRequest.post("", robot).then((response) => console.log(response));
};
