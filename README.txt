Initially I started off with this code
let arr = [];
let max = 10000;

while (arr.length < max) {
    let rand = Math.floor(Math.random() * 10001);
     if(!arr.includes(rand)) { //deal with duplicate
         arr.push(rand);
     }
}
//Can be replaced by console.log(arr); if the intention is to print the whole array instead of an individual number
arr.forEach((e) =>{
    console.log(e);
});
Then I research on different algorithms to involve the speed. And use https://jsbench.me/ to compare the performance increase
let max = 10000;
function shuffle(array) {
	array.sort( ()=> Math.random() - Math.random() );
}
let arr = [...Array(max).keys()].map(x => x++);
shuffle(arr);
console.log(arr);

The fastest solution I found so far is

let arr = Array(10000).fill(null).map((_, i) => i+1).sort(() => 0.5-Math.random());
console.log(arr);

One other solution that I found
console.log(Object.keys(Array(10000).fill()).map(_ => +_ + 1).sort(() => Math.random() - .5))