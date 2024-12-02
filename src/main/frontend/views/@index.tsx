import '@vaadin/icons';
import React from 'react';
import {AppLayout, DrawerToggle, Scroller, SideNav, SideNavItem,} from '@vaadin/react-components';

const h1Style = {
    fontSize: 'var(--lumo-font-size-l)',
    margin: 0,
};

// TODO
export default function Dashboard() {

    return (
        <AppLayout>
            <DrawerToggle slot="navbar"/>

            <h1 slot="navbar" style={h1Style}>
                Home
            </h1>

            <Scroller slot="drawer" className="p-s">
                <SideNav>
                    <SideNavItem path={"/chat"}>
                        Chat
                    </SideNavItem>
                </SideNav>
            </Scroller>
        </AppLayout>
    );
}

