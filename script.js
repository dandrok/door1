
// door1 click img
let doorImage1 = document.getElementById('door1');

doorImage1.onclick = () => {
    var botDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg";
    doorImage1.src = openDoor1;

}
// door2 click img
let doorImage2 = document.getElementById('door2');

doorImage2.onclick = () => {
    var beachDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg";
    doorImage2.src = openDoor2;

}

// door3 click img
let doorImage3 = document.getElementById('door3');

doorImage3.onclick = () => {
    var beachDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg";
    doorImage3.src = openDoor3;

}

var numClosedDoors = 3;

let openDoor1

let openDoor2

let openDoor3

const randomChoreDoorGenerator() = () => {
    choreDoor = Math.floor(Math.random() * numClosedDoors);
    if (choreDoor === 0) {
        openDoor1 = botDoorPath;
        openDoor2 = beachDoorPath;
        openDoor3 = spaceDoorPath;
    } else if (choreDoor === 1) {
        openDoor1 = botDoorPath;
        openDoor2 = beachDoorPath;
        openDoor3 = spaceDoorPath;
    } else {
        openDoor1 = botDoorPath;
        openDoor2 = beachDoorPath;
        openDoor3 = spaceDoorPath;
    }

}

const playDoor = () => {

}


