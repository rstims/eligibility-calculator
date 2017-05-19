import React from 'react';
import PropTypes     from 'prop-types';
import { connect }   from 'react-redux';
import { bindActionCreators } from 'redux';
import { initApp } from '../redux/reducers';

import AppView from '../views/app/AppView.js';

const App = (props) => <AppView {...props} />;


App.propTypes = {
  nextSlide: PropTypes.object.isRequired,
  prevSlide: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
    nextSlide: state.app.nextSlide,
    prevSlide: state.app.prevSlide,
    isLoading: state.app.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
    actions : bindActionCreators({
      initApp
    }, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(App);