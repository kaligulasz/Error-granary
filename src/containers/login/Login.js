import React, { Component } from 'react';
import axios from 'axios';

// Components
import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react'

class LoginView extends Component {
  state = {
    login: '',
    password: '',
  }

  handleLoginChange = (event) => {
    this.setState({
      login: event.target.value,
    })
  }

  handlePasswordChange = (event) => {
    this.setState({
      password: event.target.value,
    })
  }

  submitForm = () => {
    axios({
      method: 'post',
      url: '//localhost:3000/api/authenticate',
      data: JSON.stringify(this.state),
      config: {
        headers: {
          'Content-type': 'application/x-www-form-urlencoded'
        }
      }
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
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

export default LoginView;