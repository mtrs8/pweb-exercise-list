import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Questao1 from './pages/Questao1';
import Questao2 from './pages/Questao2';

function Routes() {
    return (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/questao1" component={Questao1} exact/>
            <Route path="/questao2" component={Questao2} exact/>
        </ Switch>
    </ BrowserRouter>
    );
}

export default Routes;