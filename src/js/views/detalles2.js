import React, { useState, useEffect, useContext } from "react";
import "../../styles/home.scss";
import { DetailsCharacters, DetailsPlanets } from "../component/details";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

export const DetailPlanets = () => {
	const { store, actions } = useContext(Context);
	const [cargo, setCargo] = useState(false);

	const params = useParams();

	return (
		<div>
			<DetailsPlanets
				name_main={store.planetas[params.detallesid].name}
				name={store.planetas[params.detallesid].name}
				climate={store.planetas[params.detallesid].climate}
				population={store.planetas[params.detallesid].population}
				orbital_period={store.planetas[params.detallesid].orbital_period}
				rotation_period={store.planetas[params.detallesid].rotation_period}
				diameter={store.planetas[params.detallesid].diameter}
			/>
		</div>
	);
};
