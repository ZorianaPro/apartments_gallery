import React from 'react';
import logo from '../../holidu.png';
import './index.css';
import Results from '../../components/Results';
import {useDispatch, useSelector} from "../../react-redux-hooks";
import allActions from "../../actions";

const App = () => {
  const {apartments, loading, error_msg} = useSelector(state => ({
    apartments: state.apartments.apartments || [],
    loading: state.apartments.loading,
    error_msg: state.apartments.error_msg
  })) || [];

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(allActions.apartmentsActions.getApartments());
  }, []);

  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <div className="App-intro">
        <Results apartments={apartments}
                 loading={loading}
                 error_msg={error_msg}
        />
      </div>
    </div>
  );
};

export default App;
