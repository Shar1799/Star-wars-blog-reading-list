import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ScrollToTop } from "./component/scrollToTop";

import { Home } from "./views/home";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { DetailCard } from "./views/detalles";
import { DetailPlanets } from "./views/detalles2";

const Layout = () => {
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/detalles/:detallesid">
							<DetailCard />
						</Route>
						<Route exact path="/detalles2/:detallesid">
							<DetailPlanets />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
