const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			personajes: [],
			planetas: [],
			favlist: []
		},

		actions: {
			fetchcharacter() {
				fetch("https://www.swapi.tech/api/people/")
					.then(response => response.json())
					.then(result => {
						let list = [];
						result.results.forEach(element => {
							fetch(element.url)
								.then(response => response.json())
								.then(result2 => list.push(result2.result.properties))
								.catch(error => console.log("error", error));
						});

						setStore({ personajes: list });
					})
					.catch(error => console.log("error", error));
			},

			fetchplanets() {
				fetch("https://www.swapi.tech/api/planets/")
					.then(response => response.json())
					.then(result => {
						let list = [];
						result.results.forEach(element => {
							fetch(element.url)
								.then(response => response.json())
								.then(result3 => list.push(result3.result.properties))
								.catch(error => console.log("error", error));
						});

						setStore({ planetas: list });
					})
					.catch(error => console.log("error", error));
			},

			favFunction: name => {
				const store = getStore();
				const validate = store.favlist.includes(name);
				if (validate === false) {
					const favlist = [...store.favlist, name];
					setStore({ favlist: favlist });
				}
			},

			deleteFunction: indexItem => {
				const store = getStore();
				setStore({ favlist: store.favlist.filter((favlist, index) => index !== indexItem) });
			},

			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {},
			changeColor: (index, color) => {
				const store = getStore();

				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
