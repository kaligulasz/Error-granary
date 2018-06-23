import React from 'react';
import { Icon, List } from 'semantic-ui-react';
import timestampToDate from '../../helpers/helpers';

const ErrorList = ({ list }) => (
  <List celled>
    {list.map(item => (
      <List.Item as="a" key={item._id}>
        <Icon name="circle" color="red" />
        <List.Content floated="left">
          <List.Header>{item.name}</List.Header>
          <List.Description>{item.message}</List.Description>
        </List.Content>
        <List.Content floated="right">
          {timestampToDate(item.timestamp)}
        </List.Content>
      </List.Item>
    ))}
  </List>
);

export default ErrorList;
