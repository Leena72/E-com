import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import ProductList from "../component/productList"

export default function Home() {
    return (

        <div className="container">

            <img src="./Black-Friday.jpg" className="image" ></img>
            <span>
                Shopping {"\n"}is{"\n"} Always{"\n"} A{"\n"}Good{"\n"}Idea!!!
            </span>
       
            <Router >
                <div className="middle">

                    <Link to="/" className="text">Lets Shop</Link>
                </div>
                <div>
                    <Switch>
                        <Route path='../component/productList'>
                            <ProductList />
                        </Route>
                    </Switch>
                </div>
            </Router>
        </div>
    )
}

