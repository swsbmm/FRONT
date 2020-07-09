import React from 'react';
import { render, HashRouter } from 'react-dom';
import { Router, Route } from 'react-router';
import MetisMenu from 'react-metismenu';
import RouterLink from 'react-metismenu-router-link';

const Menu1 = () => <div><u>Menu 1 View</u></div>;
const Menu2 = () => <div><i>Menu 2 View</i></div>;
const SubMenu = () => <div><s>SubMenu View</s></div>;

const menu = [
  {
    icon: 'dashboard',
    label: 'Menu 1',
    to: 'menu-1',
  },
  {
    icon: 'bell',
    label: 'Menu 2',
    to: 'menu-2',
  },
  {
    icon: 'bolt',
    label: 'Menu 3',
    content: [
      {
        icon: 'bolt',
        label: 'Sub Menu',
        to: 'sub-menu',
      },
    ],
  },
  {
    icon: 'external-link',
    label: 'External Link',
    externalLink: true,
    to: 'https://www.google.com',
  },
];

const App = (props) => (
  <div>
    <MetisMenu
      content={menu}
      LinkComponent={RouterLink}
    />
    <h2>Page Content</h2>
    {props.children || "Greeter Page"}
  </div>
);

render(
  <HashRouter >
    <Route path="/" component={App}>
      <Route path="menu-1" component={Menu1} />
      <Route path="menu-2" component={Menu2} />
      <Route path="sub-menu" component={SubMenu} />
    </Route>
  </HashRouter>,
  document.getElementById('root')
);

