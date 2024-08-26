<script>
 import { Router, Route, Link } from "svelte-routing";

  import Home from "./pages/Home.svelte";
  import About from "./pages/AboutUs.svelte";
  import NotFound from "./pages/NotFound.svelte";
  import Login from "./lib/Login.svelte";

</script>

<Router>
  <nav>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
  </nav>

  <Route path="/home" component={Home} />
  <Route path="/about" component={About} />
  <Route path="*" component={NotFound} />
</Router>

<Login></Login>


