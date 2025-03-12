import React from 'react';
import PropTypes from 'prop-types';
import Nav from '@/components/ui/Nav';

const MainLayout = ({ children }) => {
    return (
        <div>
            <Nav />
            <main>{children}</main>
            {/* <Footer /> */}
        </div>
    );
};
MainLayout.propTypes = {
    children: PropTypes.node.isRequired, // Change from `string` to `node`
};
export default MainLayout;
