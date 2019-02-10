import React, { Component } from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

// import "./style/sass/main.scss";
import { rootReducer } from "./reducers";
import Dropdown from "./components/dropdown";
import Table from "./components/table";

const middleware = [thunk];
const initialState = {};
const store = createStore(
  rootReducer,
  initialState,
  compose(applyMiddleware(...middleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     nombre: "",
  //     unidades_medida: "",
  //     clasificadores: "",
  //     // grupo2: '',
  //     iva: "",
  //     retefuente: "",
  //     tipo_adquirido: "",
  //     notas: ""
  //   };
  //   this.handleSubmit = this.handleSubmit.bind(this);
  //   this.handleChange = this.handleChange.bind(this);
  // }

  // handleSubmit(e) {
  //   const {
  //     nombre,
  //     unidades_medida,
  //     clasificadores,
  //     iva,
  //     retefuente,
  //     tipo_adquirido,
  //     notas
  //   } = this.state;
  //   e.preventDefault();
  //   fetch("http://localhost:3000/articulos", {
  //     method: "POST",
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify({
  //       nombre,
  //       unidades_medida,
  //       clasificadores,
  //       iva,
  //       retefuente,
  //       tipo_adquirido,
  //       notas
  //     })
  //   })
  //     .then(res => res.json())
  //     .then(data => console.log(data))
  //     .catch(err => console.log(err));
  //   console.log(this.state);
  // }

  // handleChange(e) {
  //   const { name, value } = e.target;
  //   name === "nombre"
  //     ? this.setState({ nombre: value })
  //     : name === "unidades_medida"
  //     ? this.setState({ unidades_medida: value })
  //     : name === "clasificadores"
  //     ? this.setState({ clasificadores: value })
  //     : name === "iva"
  //     ? this.setState({ iva: parseInt(value) })
  //     : name === "retefuente"
  //     ? this.setState({ retefuente: value })
  //     : name === "tipo_adquirido"
  //     ? this.setState({ tipo_adquirido: value })
  //     : this.setState({ notas: value });
  // }
  render() {
    return (
      <div>
        <h1>
          <a href="/">Artículos</a>
        </h1>
        <form onSubmit={this.handleSubmit}>
          Nombre:
          <input
            name="nombre"
            type="text"
            placeholder="escriba..."
            onChange={this.handleChange}
          />
          <br />
          <Dropdown />
          Notas:
          <input
            name="notas"
            type="text"
            placeholder="escriba..."
            onChange={this.handleChange}
          />
          <br />
          <input type="submit" value="Crear artículo" />
        </form>
        <br />
        <br />
        <Table />
      </div>
    );
  }
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  root
);
