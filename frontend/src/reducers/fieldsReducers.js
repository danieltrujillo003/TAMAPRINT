import {
  FETCH_UNIDADES_MEDIDA,
  FETCH_CLASIFICADORES,
  FETCH_IVA,
  FETCH_RETEFUENTE,
  FETCH_TIPO_ADQUIRIDO
} from "../actions/types";

const initialState = {
  valuesUnidadesMedida: [],
  valuesClasificadores: [],
  valuesIva: [],
  valuesRetefuente: [],
  valuesTipoAdquirido: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_UNIDADES_MEDIDA:
      return {
        ...state,
        valuesUnidadesMedida: action.payload
      };
    case FETCH_CLASIFICADORES:
      return {
        ...state,
        valuesClasificadores: action.payload
      };
    case FETCH_IVA:
      return {
        ...state,
        valuesIva: action.payload
      };
    case FETCH_RETEFUENTE:
      return {
        ...state,
        valuesRetefuente: action.payload
      };
    case FETCH_TIPO_ADQUIRIDO:
      return {
        ...state,
        valuesTipoAdquirido: action.payload
      };

    default:
      return state;
  }
};
