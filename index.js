// Code your solution in this file!
const hq = 42
let distance;
let feet
function distanceFromHqInBlocks(startingBlock) {
    if (startingBlock < hq){
        distance = (hq - startingBlock)
        
    }

    else if(startingBlock >= hq) {
        distance = (startingBlock - hq)
        
    }

    return distance

}

function distanceFromHqInFeet(startingBlock) {
    return distanceFromHqInBlocks(startingBlock)*264;


    }



function distanceTravelledInFeet(start, end) {
    if (start >= end) {
      return (start - end)* 264;   
    }

    else if (end > start) {
        return (end - start)*264;
    }


}

function calculatesFarePrice(start, end) {
   let distance = distanceTravelledInFeet (start, end)


    if (distance <= 400)
      return 0;

    else if (distance > 400 && distance <= 2000) {
        return .02 * (distance - 400);
    }

    else if (distance > 2000 && distance < 2500) {
        return 25
    }

    else {
        return 'cannot travel that far'
    }
}