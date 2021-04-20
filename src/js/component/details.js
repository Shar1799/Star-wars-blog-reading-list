import React from "react";
import { Link } from "react-router-dom";
import { Media, Table } from "react-bootstrap";
import PropTypes from "prop-types";

export const DetailsCharacters = props => {
	return (
		<div className="container">
			<div className="my-5">
				<Media>
					<img
						width={400}
						height={200}
						className="mr-3"
						src="https://i.pinimg.com/originals/80/a5/1a/80a51a0b7293317a273207178aa12358.jpg"
					/>
					<Media.Body className="text-center">
						<h1>{props.name_main}</h1>
						<p>
							Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin
							commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce
							condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
						</p>
					</Media.Body>
				</Media>
			</div>
			<div className="container border-top border-4 border-danger">
				<Table responsive className="table-borderless text-danger">
					<thead>
						<tr>
							<th>Name</th>
							<th>Birth Year</th>
							<th>Gender</th>
							<th>Height</th>
							<th>Skin Color</th>
							<th>Eye Color</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>{props.name}</td>
							<td>{props.birth_year}</td>
							<td>{props.gender}</td>
							<td>{props.height}</td>
							<td>{props.skin_color}</td>
							<td>{props.eye_color}</td>
						</tr>
					</tbody>
				</Table>
			</div>
		</div>
	);

	//Validación de los props
	DetailsCharacters.propTypes = {
		name_main: PropTypes.string,
		name: PropTypes.string,
		birth_year: PropTypes.string,
		gender: PropTypes.string,
		height: PropTypes.string,
		skin_color: PropTypes.string,
		eye_color: PropTypes.string
	};
};

export const DetailsPlanets = props => {
	return (
		<div className="container">
			<div className="my-5">
				<Media>
					<img
						width={400}
						height={300}
						className="mr-3"
						src="https://i.pinimg.com/originals/80/a5/1a/80a51a0b7293317a273207178aa12358.jpg"
					/>
					<Media.Body className="text-center">
						<h1>{props.name_main}</h1>
						<p>
							Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin
							commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce
							condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
						</p>
					</Media.Body>
				</Media>
			</div>
			<div className="container border-top border-4 border-danger">
				<Table responsive className="table-borderless text-danger">
					<thead>
						<tr>
							<th>Name</th>
							<th>Climate</th>
							<th>Population</th>
							<th>Orbital Period</th>
							<th>Rotation Period</th>
							<th>Diameter</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>{props.name}</td>
							<td>{props.climate}</td>
							<td>{props.population}</td>
							<td>{props.orbital_period}</td>
							<td>{props.rotation_period}</td>
							<td>{props.diameter}</td>
						</tr>
					</tbody>
				</Table>
			</div>
		</div>
	);

	//Validación de los props
	DetailsPlanets.propTypes = {
		name_main: PropTypes.string,
		name: PropTypes.string,
		climate: PropTypes.string,
		population: PropTypes.string,
		orbital_period: PropTypes.string,
		rotation_period: PropTypes.string,
		diameter: PropTypes.string
	};
};
