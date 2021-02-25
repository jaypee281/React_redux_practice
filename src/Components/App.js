import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../redux/action'
import MainPage from './MainPage'
import {withRouter } from 'react-router';
function mapStateToProps(state, ownProps) {
 return {
 posts: state
 }
}
function mapDispachToProps(dispatch) {
 return bindActionCreators(actionCreators, dispatch);
}
const App = withRouter(connect(mapStateToProps, mapDispachToProps)(MainPage));
export default App;