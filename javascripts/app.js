// Rover Object Goes Here
// ======================
let rover = {
  direction: "N",
  x: 0,
  y: 0
}
// ======================
function turnLeft(rover){
  if (rover.direction == "N") {
    rover.direction = "W";
    document.getElementById("rover").style.transform = "rotate(270deg)";
  } else if (rover.direction == "W") {
    rover.direction = "S";
    document.getElementById("rover").style.transform = "rotate(180deg)";
  } else if (rover.direction == "S") {
    rover.direction = "E"; 
    document.getElementById("rover").style.transform = "rotate(90deg)";
  }
  else if (rover.direction == "E") {
    rover.direction = "N";
    document.getElementById("rover").style.transform = "rotate(0deg)";
  }
  console.log("turnLeft was called! Rover is now facing " + rover.direction);
}



function turnRight(rover){
  switch (rover.direction) {
    case "N": 
    rover.direction = "E";
    document.getElementById("rover").style.transform = "rotate(90deg)";
    break;
    case "E": 
    rover.direction = "S";
    document.getElementById("rover").style.transform = "rotate(180deg)";
    break;
    case "S": 
    rover.direction = "W";
    document.getElementById("rover").style.transform = "rotate(270deg)";
    break;
    case "W": 
    rover.direction = "N";
    document.getElementById("rover").style.transform = "rotate(0deg)";
    break;
    default: 
    rover.direction = "N";
  }
  console.log("turnRight was called! Rover is now facing " + rover.direction);
}

function moveForward(rover){
  switch (rover.direction) {
    case "N": 
      rover.y--;
      break;
    case "E":
      rover.x++;
      break;
    case "S": 
      rover.y++;
      break;
    case "W":
      rover.x--;
      break;
    default: 
      rover.x = 0;
      rover.y = 0;
  }
  document.getElementById("rover").style.marginTop = rover.y * 10+"%";
  document.getElementById("rover").style.marginLeft = rover.x * 10+"%";
  console.log("moveForward was called! Rover is now in position " + rover.x + ", " + rover.y);
}
