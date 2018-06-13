import React from 'react';
import { Input, Menu } from 'semantic-ui-react'

const MainMenu = () => (
  <Menu>
    <Menu.Item
      name='editorials'
    >
      Issues
    </Menu.Item>
    <Menu.Menu position='right'>
      <Menu.Item>
        <Input icon='search' placeholder='Search...' />
      </Menu.Item>
      <Menu.Item
        name='logout'
      />
    </Menu.Menu>
  </Menu>
)

export default MainMenu;