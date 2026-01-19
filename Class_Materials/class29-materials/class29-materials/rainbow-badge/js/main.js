//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

async function getFetch(){
  const poke1 = document.querySelector('#poke1').value.toLowerCase()
  const poke2 = document.querySelector('#poke2').value.toLowerCase()
  const url = 'https://pokeapi.co/api/v2/pokemon/'+poke1
  const url2 = 'https://pokeapi.co/api/v2/pokemon/'+poke2

  try{
  const res1 = await fetch(url);
  const data1 = await res1.json();
  
  const res2 = await fetch(url2);
  const data2 = await res2.json();
  
  const poke1types = data1.types.map(t => t.type.name)
  const poke2types = data2.types.map(t => t.type.name)

  const typeShared = poke1types.some(type =>
      poke2types.includes(type)
    )
    console.log('Shared type:', typeShared);

    document.querySelector('p').innerHTML = `${poke1} types: ${poke1types} <br> ${poke2} types: ${poke2types}`
  // for (let i = 0; i < data1.types.length; i++){
  //   console.log(data1.types[i].type.name)
  //   poke1types.push(data1.types[i].type.name);
  // }
  // for (let i = 0; i < data2.types.length; i++){
  //   console.log(data2.types[i].type.name);
  //   poke2types.push(data2.types[i].type.name);
  //     }

  }
   catch (err) {
    console.error(err)
   }

    // const typeShared = poke1types.some(element => poke2types.includes(element));
    // console.log(poke1types);
    // console.log(poke2types);
    // console.log(typeShared);
}

      
