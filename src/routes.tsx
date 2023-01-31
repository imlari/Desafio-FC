import { BrowserRouter as Router, Route} from "react-router-dom";
import Home from './templates/Home/index'

function Routes () {
    return (
        <Router>
            <Route path="/" element={ <Home />} />
        </Router>
    )
}

export default Routes