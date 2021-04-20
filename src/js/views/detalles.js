import React, { useState, useEffect, useContext } from "react";
import "../../styles/home.scss";
import { DetailsCharacters, DetailsPlanets } from "../component/details";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

export const DetailCard = () => {
	const { store, actions } = useContext(Context);
	const [cargo, setCargo] = useState(false);

	const params = useParams();

	return (
		<div>
			<DetailsCharacters
				name_main={store.personajes[params.detallesid].name}
				name={store.personajes[params.detallesid].name}
				birth_year={store.personajes[params.detallesid].birth_year}
				gender={store.personajes[params.detallesid].gender}
				height={store.personajes[params.detallesid].height}
				skin_color={store.personajes[params.detallesid].skin_color}
				eye_color={store.personajes[params.detallesid].eye_color}
			/>
		</div>
	);
};
