// Total amount of points
games = ["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"]

function points(games) {
  return games.reduce((output,current)=>{
    let x = parseInt(current[0]);
    let y = parseInt(current[2]);
    let value= x>y ? 3 : x===y ? 1 : 0;
    return output+value;
  },0)
}