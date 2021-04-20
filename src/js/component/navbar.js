import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ButtonGroup, Button, DropdownButton, Dropdown } from "react-bootstrap";
import { Context } from "../store/appContext";
import "../../styles/index.scss";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<div>
					<Link to="/">
						<a className="navbar-brand container" href="#">
							<img
								src="https://www.lacasadeel.net/wp-content/uploads/2014/12/Star-Wars-Logo.jpg"
								alt=""
								width="70"
								height="100%"
							/>{" "}
						</a>
					</Link>
				</div>

				<ButtonGroup aria-label="Basic example">
					<DropdownButton variant="primary" id="dropdown-basic-button" title="Favorites">
						{store.favlist.length > 0 ? (
							store.favlist.map((item, index) => {
								return (
									<Dropdown.Item key={index} href="">
										<a id="button_link">{item}</a>
										<i className="fas fa-trash-alt" onClick={() => actions.deleteFunction(index)} />
									</Dropdown.Item>
								);
							})
						) : (
							<Dropdown.Item>Empty</Dropdown.Item>
						)}
					</DropdownButton>
					<Button variant="secondary">{store.favlist.length}</Button>
				</ButtonGroup>
			</div>
		</nav>
	);
};
