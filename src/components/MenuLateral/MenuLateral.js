import React from 'react';
import { withRouter } from 'react-router-dom';
import { Menu, MenuItem } from '@progress/kendo-react-layout';

const MenuLateral = () => {

    this.onSelect = (event) => {
        this.props.history.push(event.item.data.route);
    }


    return (
        <div>
            <Menu onSelect={this.onSelect}>
                <MenuItem text="Home" data={{ route: '/' }} />
                <MenuItem text="Products" data={{ route: '/join' }} />
                <MenuItem text="About" data={{ route: '/join' }}>
                    <MenuItem text="Team" data={{ route: '/join' }} />
                </MenuItem>
            </Menu>
            <div style={{ padding: 10 }}>{this.props.children}</div>
        </div>
    );


    
}

export default withRouter(MenuLateral);