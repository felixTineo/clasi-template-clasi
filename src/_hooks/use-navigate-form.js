import { useReducer, useCallback, useContext } from 'react';
import context from '../_context';
import { navigate } from 'gatsby';
import { urlBuilder } from '../_util';

export default (inputs)=> {
  const [params, setParams] = useReducer((current, next) => ({ ...current, ...next }), inputs);
  const builderId = useContext(context).builderId;

  const onChange = e => {
    //console.log( typeof e.target.value);
    //const value = e.target.id === "priceMax" || e.target.id === "priceMin" ? new Intl.NumberFormat().format(e.target.value.replace(/\./g, '')) : e.target.value;
    setParams({ [e.target.id]: e.target.value });
  }
  const onFinish = useCallback(()=> {
    const url = urlBuilder(`/properties`, { ...params});
    navigate(url);
  },[params]);

  return { values: params, onChange, onFinish, setInitial: setParams }
}