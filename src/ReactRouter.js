import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import './components/Home.css';
import ReactiveButton from 'reactive-button';



function ReactRouter() {
    return (
        <Router>
            <div className='Home'>
                <Link to="/"><ReactiveButton rounded color="dark" idleText='Home'>Home</ReactiveButton></Link>{' '}
                <Link to="/about"><ReactiveButton rounded color="secondary" idleText='About'>About</ReactiveButton></Link>{' '}
                <Link to="/contact"><ReactiveButton rounded color="secondary" idleText='Contact'>Contact</ReactiveButton></Link>{' '}
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/contact" render={Contact} />
                    <Route render={() => <h1>Page not found</h1>} />
                </Switch>
            </div>
        </Router>
    )

}

export default ReactRouter;