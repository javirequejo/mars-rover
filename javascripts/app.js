// Rover Object Goes Here
// ======================
let rover = {
  direction: "N",
}
// ======================
function turnLeft(rover){
  if (rover.direction == "N") {
    rover.direction = "W";
  } else if (rover.direction == "W") {
    rover.direction = "S";
  } else if (rover.direction == "S") {
    rover.direction = "E"; 
  }
  else if (rover.direction == "E") {
    rover.direction = "N";
  }
  console.log("turnLeft was called! Rover is now facing " + rover.direction);
}



function turnRight(rover){
  switch (rover.direction) {
    case "N": 
      rover.direction = "E";
      break;
    case "E": 
      rover.direction = "S";
      break;
    case "S": 
      rover.direction = "W";
      break;
    case "W": 
      rover.direction = "N";
      break;
    default: 
      rover.direction = "N";
  }
  console.log("turnRight was called! Rover is now facing " + rover.direction);
}

function moveForward(rover){
  console.log("moveForward was called")
}
