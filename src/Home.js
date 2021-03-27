import React from 'react';
import {Link, Route} from 'react-router-dom';
import App from './App'

export default function Home() {
    return (
        <div>
        <header>
            <h2>LAMBDA EATS</h2>
            <Link to={'./'}><button>Home</button></Link>
            <Link to={''}><button>Help</button></Link>
        </header>
       <div>
           <h1>Your favorite food, delivered while coding</h1>
           <Link to="/Pizza"><button>Pizza?</button></Link>
           <Route path='/Pizza'>
               <App/>
           </Route>
           <Route path='/'></Route>
       </div>
    </div>
    )
}