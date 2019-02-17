import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import * as fieldsActions from "../actions/fieldsActions";
import {postNewArticle} from "../actions/articleActions";

class ArticleForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: "",
      unidades_medida: "",
      clasificadores: "",
      // grupo2: '',
      iva: "8",
      retefuente: "",
      tipo_adquirido: "",
      notas: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    const {
      nombre,
      unidades_medida,
      clasificadores,
      iva,
      retefuente,
      tipo_adquirido,
      notas
    } = this.state;

    const newArticle = {
      nombre,
      unidades_medida,
      clasificadores,
      iva,
      retefuente,
      tipo_adquirido,
      notas
    }

    console.log(newArticle)

    e.preventDefault();
    
    this.props.postNewArticle(newArticle);
  }

  handleChange(e) {
    const { name, value } = e.target;
    name === "nombre"
      ? this.setState({ nombre: value })
      : name === "unidades_medida"
      ? this.setState({ unidades_medida: value })
      : name === "clasificadores"
      ? this.setState({ clasificadores: value })
      : name === "iva"
      ? this.setState({ iva: parseInt(value) })
      : name === "retefuente"
      ? this.setState({ retefuente: value })
      : name === "tipo_adquirido"
      ? this.setState({ tipo_adquirido: value })
      : this.setState({ notas: value });
  }
  componentDidMount() {
    const {
      fetchClasificadores,
      fetchIva,
      fetchRetefuente,
      fetchTipoAdquirido,
      fetchUnidadesMedida
    } = this.props;

    fetchClasificadores();
    fetchIva();
    fetchRetefuente();
    fetchTipoAdquirido();
    fetchUnidadesMedida();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        Nombre:
        <input
          name="nombre"
          type="text"
          placeholder="escriba..."
          onChange={this.handleChange}
        />
        <div>
          <label htmlFor="unidades_medida">Unidad de medida:</label>
          <select name="unidades_medida" id="unidades_medida">
            <option>Seleccione...</option>
            {this.props.valuesUnidadesMedida.map((content, i) => (
              <option key={i}>{content.main}</option>
            ))}
          </select>
          <a href="#">editar</a>
        </div>
        <div>
          <label htmlFor="clasificadores">Grupo:</label>
          <select name="clasificadores" id="clasificadores">
            <option>Seleccione...</option>
            {this.props.valuesClasificadores.map((content, i) => (
              <option key={i}>{content.main}</option>
            ))}
          </select>
          <a href="#">editar</a>
        </div>
        <div>
          <label htmlFor="iva">IVA:</label>
          <select name="iva" id="iva">
            <option>Seleccione...</option>
            {this.props.valuesIva.map((content, i) => (
              <option key={i}>{content.main}</option>
            ))}
          </select>
          <a href="#">editar</a>
        </div>
        <div>
          <label htmlFor="retefuente">Retefuente:</label>
          <select name="retefuente" id="retefuente">
            <option>Seleccione...</option>
            {this.props.valuesRetefuente.map((content, i) => (
              <option key={i}>{content.main}</option>
            ))}
          </select>
          <a href="#">editar</a>
        </div>
        <div>
          <label htmlFor="tipo_adquirido">Adquirido:</label>
          <select name="tipo_adquirido" id="tipo_adquirido">
            <option>Seleccione...</option>
            {this.props.valuesTipoAdquirido.map((content, i) => (
              <option key={i}>{content.main}</option>
            ))}
          </select>
          <a href="#">editar</a>
        </div>
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
    );
  }
}

const mapStateToProps = state => {
  const {
    valuesUnidadesMedida,
    valuesClasificadores,
    valuesIva,
    valuesRetefuente,
    valuesTipoAdquirido
  } = state.fields;

  return {
    valuesUnidadesMedida,
    valuesClasificadores,
    valuesIva,
    valuesRetefuente,
    valuesTipoAdquirido
  };
};
const mapDispatchToProps = dispatch => {
  return bindActionCreators({ ...fieldsActions, postNewArticle }, dispatch);
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArticleForm);
