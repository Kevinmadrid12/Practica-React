import { Routes, Route } from 'react-router-dom';
import Home from '../views/Home';
import MyComponent from './MyComponent';

const Router = () =>{
    return(
        <div>
            <Routes>
                <Route path='/Contador' element={MyComponent}/>
            </Routes>
        </div>
    );
}

export default Router;