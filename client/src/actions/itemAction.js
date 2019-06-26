import axios from "axios";
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING } from "./types";
import { tokenConfig } from "./authactions";
import { returnErrors } from "./erroractions";
export const getItems = () => dispatch => {
  dispatch(setItemloading());
  axios
    .get("/api/items")
    .then(res =>
      dispatch({
        type: GET_ITEMS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
export const deleteItem = id => (dispatch, getstate) => {
  axios.delete(`/api/items/${id}`, tokenConfig(getstate))
  .then(res =>
    dispatch({
      type: DELETE_ITEM,
      payload: id
    })
  )
  .catch(err =>
    dispatch(returnErrors(err.response.data, err.response.status))
  );
};
export const addItem = item => (dispatch, getstate) => {
  axios.post("/api/items", item, tokenConfig(getstate))
  .then(res =>
    dispatch({
      type: ADD_ITEM,
      payload: res.data
    })
  )
  .catch(err =>
    dispatch(returnErrors(err.response.data, err.response.status))
  );
};
export const setItemloading = () => {
  return {
    type: ITEMS_LOADING
  };
};
