import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {
  fetchUnidadesMedida,
  fetchClasificadores,
  fetchIva,
  fetchRetefuente,
  fetchTipoAdquirido
} from "../actions/fieldsActions";

class Dropdown extends Component {

  render() {
    return (
      <div>
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
      </div>
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
// const mapDispatchToProps = dispatch => {
//   return bindActionCreators(
//     {
//       fetchUnidadesMedida,
//       fetchClasificadores,
//       fetchIva,
//       fetchRetefuente,
//       fetchTipoAdquirido
//     },
//     dispatch
//   );
// };
export default connect(
  mapStateToProps,
  fetchClasificadores
  // mapDispatchToProps
)(Dropdown);
