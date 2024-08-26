<script>
    import Counter from "../lib/Counter.svelte";
    import Button from "../lib/button.svelte";

    
  let name ='testing';
  let string = 'some <strong>String</strong> with html';
</script>

<h1>Home Page</h1>

<h1>
  hello world {name}
</h1>

<p>{@html string}</p> 

<Counter maxCount={10} initialCount={3}></Counter>
<Button></Button>

<style>
  h1{ color: red;}  
</style>

