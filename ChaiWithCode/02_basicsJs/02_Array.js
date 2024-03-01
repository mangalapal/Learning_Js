const marval_heros = ["thor", "Ironman", "Spiderman"]
const dc_heros = ["Superman", "flash", "batman"]

// marval_heros.push(dc_heros);
// console.log(marval_heros);//[ 'thor', 'Ironman', 'Spiderman', [ 'Superman', 'flash', 'batman' ] ]

// const allHeros = marval_heros.concat(dc_heros)//Concate return new array.
// console.log(allHeros);//[ 'thor', 'Ironman', 'Spiderman', 'Superman', 'flash', 'batman' ]

//const all_newHeros = [...marval_heros, ...dc_heros]//spread Syntax
//console.log(all_newHeros);//[ 'thor', 'Ironman', 'Spiderman', 'Superman', 'flash', 'batman' ]


const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)//flat combine arrays od array in one array

console.log(real_another_array);/*[
    1, 2, 3, 4, 5,
    6, 7, 6, 7, 4,
    5
  ]*/


  console.log( Array.isArray("mangala"));//false (we asked is this array)
  console.log( Array.from("mangala"));//['m', 'a', 'n','g', 'a', 'l','a']
  console.log(Array.from({name : "Mangala"}));//it gives empty array[], and can not convert into array

  let score1 = 100
  let score2 = 200
  let score3 = 300

  console.log(Array.of(score1, score2, score3));