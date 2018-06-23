import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react';

// Actions
import { loginAuthentication } from '../../actions/apiActions';

// Reducers
import { getLoginStatus } from '../../reducers/apiReducer';

class LoginView extends Component {
  state = {
    name: '',
    password: '',
  }

  componentDidMount() {
    if (this.props.loginStatus) {
      this.props.history.push('/');
    }
  }

  handleLoginChange = (event) => {
    this.setState({
      name: event.target.value,
    });
  }

  handlePasswordChange = (event) => {
    this.setState({
      password: event.target.value,
    })
  }

  submitForm = () => {
    this.props.onLoginAuthentication({
      name: this.state.name,
      password: this.state.password,
    });
  }

  render() {
    return (
      <div className='login-form'>
        <style>{`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        height: 100%;
      }
    `}</style>
        <Link to={'/'}>home</Link>
        <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' color='teal' textAlign='center'>
              Log-in to your account
            </Header>
            <Form size='large'>
              <Segment stacked>
                <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' onChange={this.handleLoginChange} />
                <Form.Input
                  fluid
                  icon='lock'
                  iconPosition='left'
                  placeholder='Password'
                  type='password'
                  onChange={this.handlePasswordChange}
                />
                <Button onClick={this.submitForm} color='teal' fluid size='large'>
                  Login
                </Button>
              </Segment>
            </Form>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  loginStatus: getLoginStatus(state),
});

export default withRouter(connect(
  mapStateToProps,
  {
    onLoginAuthentication: loginAuthentication,
  },
)(LoginView));