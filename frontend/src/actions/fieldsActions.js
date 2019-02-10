import {
  FETCH_UNIDADES_MEDIDA,
  FETCH_CLASIFICADORES,
  FETCH_IVA,
  FETCH_RETEFUENTE,
  FETCH_TIPO_ADQUIRIDO
} from "./types";

export const fetchUnidadesMedida = () => dispatch => {
  const url = 'http://localhost:3000/unidades_medida';
    fetch(url)
      .then(res => res.json())
      .then(data => {
        dispatch({
          type: FETCH_UNIDADES_MEDIDA,
          payload: data.info
        })
      })
      .catch(err => console.log(err));
};

export const fetchClasificadores = () => dispatch => {
  const url = 'http://localhost:3000/clasificadores';
    fetch(url)
      .then(res => res.json())
      .then(data => {
        dispatch({
          type: FETCH_CLASIFICADORES,
          payload: data.info
        })
      })
      .catch(err => console.log(err));
};

export const fetchIva = () => dispatch => {
  const url = 'http://localhost:3000/iva';
    fetch(url)
      .then(res => res.json())
      .then(data => {
        dispatch({
          type: FETCH_IVA,
          payload: data.info
        })
      })
      .catch(err => console.log(err));
};

export const fetchRetefuente = () => dispatch => {
  const url = 'http://localhost:3000/retefuente';
    fetch(url)
      .then(res => res.json())
      .then(data => {
        dispatch({
          type: FETCH_RETEFUENTE,
          payload: data.info
        })
      })
      .catch(err => console.log(err));
};

export const fetchTipoAdquirido = () => dispatch => {
  const url = 'http://localhost:3000/tipo_adquirido';
    fetch(url)
      .then(res => res.json())
      .then(data => {
        dispatch({
          type: FETCH_TIPO_ADQUIRIDO,
          payload: data.info
        })
      })
      .catch(err => console.log(err));
};

