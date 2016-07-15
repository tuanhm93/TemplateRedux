import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import actionsCreators from '../../actions';

export default (obj) => {
  return connect(obj.stateToProps, (dispatch) => {
    return {
      actions: bindActionCreators(actionsCreators, dispatch)
    }
  })(obj.Layout);
}