let arr = Array(10000).fill(null).map((_, i) => i+1).sort(() => 0.5-Math.random());
console.log(arr);