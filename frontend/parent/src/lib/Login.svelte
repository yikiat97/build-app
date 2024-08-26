<script>
    import axios from 'axios';

    let username;
    let password;
    let email;
    const login = () => {
        console.log('testing')
        axios.get('http://localhost:3000/api/users' ,{
            username:username,
            
        })
        .then(response=>{
            console.log(response.data)

        }).catch(error => {
            console.error('There was an error making the GET request!', error);
        })
        
    }

</script>

<h1>login here</h1>

<form on:submit|preventDefault={login}>
    <p>
        <label>Username:</label> 
        <input  type="text"  placeholder="Username" bind:value={username} /> 
    </p>

    <p>
        <label>password:</label>  
        <input type="password" placeholder="password" bind:value={password} /> 
    </p>

    <p>
        <label>Email:</label>
        <input  type="text" placeholder="email" bind:value={email} /> 
  </p>
  <button type="submit">submit</button>

</form>
