import React from 'react';
import { Icon, List } from 'semantic-ui-react'

export const ErrorList = () => (
  <List celled>
    <List.Item as='a'>
      <Icon name='circle' color='red' />
      <List.Content>
        <List.Header>Undefined error</List.Header>
        <List.Description>some description</List.Description>
      </List.Content>
    </List.Item>
  </List>
)

