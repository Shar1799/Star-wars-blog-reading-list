import React, { useState, useEffect, useContext } from "react";
import "../../styles/home.scss";
import { MyCard, MyCardPlanets } from "../component/cards";
import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const [cargo, setCargo] = useState(false);

	setInterval(() => {
		store.personajes.length > 0 ? setCargo(true) : "";
	}, 2000);

	return (
		<div className="container mt-5 mb-5">
			<br />
			<h1 className="text-danger">Characters</h1>
			<div className="flex-row mt-5" style={{ overflow: "auto", width: "1200px", display: "flex" }}>
				{cargo
					? store.personajes.map((item, index) => {
							return (
								<div key={index}>
									<MyCard
										name={item.name}
										gender={item.gender}
										hairColor={item.hair_color}
										eyeColor={item.eye_color}
										index={index}
									/>
								</div>
							);
					  })
					: ""}
			</div>
			<br />
			<h1 className="text-danger">Planets</h1>
			<div className="flex-row mt-5" style={{ overflow: "auto", width: "1200px", display: "flex" }}>
				{cargo
					? store.planetas.map((item, index) => {
							return (
								<div key={index}>
									<MyCardPlanets
										planet={store.planetas[index].name}
										population={store.planetas[index].population}
										terrain={store.planetas[index].terrain}
										index={index}
									/>
								</div>
							);
					  })
					: ""}
			</div>
		</div>
	);
};
