function matrix(a){
  for (let i=0;i<a;i++){
      let row= "";
    for (let j=0;j<a;j++){
      row += "["+i+","+j+"]";
    }
    console.log(row) 
  }
}
let b=2
matrix(b)