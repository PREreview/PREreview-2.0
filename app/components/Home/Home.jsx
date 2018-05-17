import React from 'react';

import HeroImage from './HeroImage';
import ImpactStatement from './ImpactStatement';
import LatestPreprints from './LatestPreprints';

import Modal from 'react-modal';

import { Button } from '@pubsweet/ui';

import SubmitPreprintButton from './SubmitPreprintButton';

import defaultData from './default-data';

const HEADER_HEIGHT = 400;

const styles = {
  heroImage: {
    top: 0,
    position: 'absolute',
    height: HEADER_HEIGHT,
    width: '100%'
  },
  header: {
    top: 0,
    position: 'absolute',
    height: HEADER_HEIGHT,
    background: 'rgb(0, 0, 0, 0.5)',
    backgroundSize: 'cover',
    width: '100%',
    textAlign: 'center'
  },
  logoSignIn: {
    padding: 4,
    height: 60,
    background: 'rgb(0, 0, 0, 0.5)',
    backgroundSize: 'cover',
    width: '100%',
    textAlign: 'left'
  },
  signIn: {
    float: 'right',
    paddingTop: 10,
    color: '#ccc'
  },
  signInLink: {
    color: 'white',
    textDecoration: 'none'
  },
  content: {
    marginTop: HEADER_HEIGHT + 50,
    maxWidth: 1000,
    marginLeft: 'auto',
    marginRight: 'auto'
  }
};

const SignInLink = props => (
  <a href='#' style={ styles.signInLink }>Sign in</a>
);

const RegisterLink = props => (
  <a href='#' style={ styles.signInLink }>register</a>
);

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: defaultData
    };
  }

  updatePreprints(updateFn) {
    const updatedPreprints = updateFn(this.state.data.preprints);
    this.setState({
      data: {
        ...this.state.data,
        preprints: updatedPreprints
      }
    });
  }

  onSubmitPreprint = preprint => {
    this.updatePreprints(
      preprints => preprints.concat([preprint])
    );
  }

  render() {
    const {
      submitPreprintFormShown,
      data
    } = this.state;
    const {
      preprints
    } = data;

    return (
      <div>
        <HeroImage style={ styles.heroImage } />
        <div style={ styles.header }>
          <div style={ styles.logoSignIn }>
            <img src="/assets/logo.png"/>
            <div style={ styles.signIn }>
              <SignInLink />
              { ' or ' }
              <RegisterLink />
            </div>
          </div>
          <ImpactStatement />
          <SubmitPreprintButton onSubmitPreprint={ this.onSubmitPreprint } />
        </div>
        <div style={ styles.content }>
          <LatestPreprints preprints={ preprints } />
        </div>
      </div>
    );
  }
}

export default Home;
