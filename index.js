// code your solution here
function superbowlWin(record){
    const win = record.find(rec => rec.result === "W");
    return win ? win.year : undefined;
 }