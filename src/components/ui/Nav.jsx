import React from 'react';

import useIsMobile from '@/hooks/UseIsMobile';
import MobileNav from '@/components/ui/MobileNav';
import DesktopNav from '@/components/ui/DesktopNav';

const Nav = () => {
    const isMobile = useIsMobile('sm');
    console.log('Is mobile:', isMobile);

    return isMobile ? <MobileNav /> : <DesktopNav />;
};

export default Nav;
