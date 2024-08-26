<script>
  export let initialCount;
  export let maxCount;

  let count = 0
  const increment = () => {
    count += 1
  }

  let stringFail = 'you have cliked this amt:' + count
  //reactive statement below, when count update, will rerun this whole statement & 
  //can add condition & 
  // variable must be exact inside the statement if not wont work
  //order is important also
  let string = 0
  $: if(count > 5){
    string =  count
  }

// PROPS //
  console.log($$props, $$restProps); // rest props get undefine var from parent when you nvr define here

  let counter = initialCount
  const propsIncrement = () => {
    if (counter == maxCount){
      return
    }
    counter +=1 
  }

</script>

<button on:click={increment}>
  count is {count}
</button>

<h2>{stringFail}</h2>

<h2>you have clicked: {count}</h2>
<h2>this reactive statement will count: {string} </h2>

<h1>Props</h1>
<button on:click={propsIncrement}>
  count is {counter}
</button>
