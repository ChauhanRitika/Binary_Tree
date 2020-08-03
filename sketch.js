var tree;

function setup() {
  createCanvas(800, 450);
  background(51);
  tree = new Tree();
 for(var i=0; i<10; i++){
   tree.addValue(floor(random(0, 100)));
 }
 console.log(tree);
 tree.traverse();
}
