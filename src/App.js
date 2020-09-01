import './App.css';
//import Products from './Products';
//import { Button } from 'react-bootstrap';
//import Rating from './Rating';
//import JumboTronComponent from './JumboTronComponent';
//import UserForm from './UserForm';
import GitHub from './GitHub';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import React, { Component } from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';

function App() {
    return (
        //<div className="App">
        //<Products />
        //<JumboTronComponent body='...'/>
        //<UserForm /> 
        //<GitHub/>
        //</div>
        <div>
            <Header />
        </div>
    );
}
export default App;

class Header extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Navbar bg="light" expand="lg">
                        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link href="/">Home</Nav.Link>
                                <Nav.Link href="/github">GitHub</Nav.Link>
                                <Nav.Link href="/login">Login</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                    <Switch>
                        <Route path="/github" component={GitHub} />
                        <Route exact path="/" component={Home} />
                        <Route path="/*" component={NotFound} />
                        <Route path="/login" component={Login} />
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

class Home extends Component {
    render() {
        return (
            <div>
                Home
            </div>
        )
    }
}

class NotFound extends Component {
    render() {
        return <div>Not Found</div>
    }
}

class Login extends Component {
    render() {
        return (<div>Login Page</div>)
    }
}