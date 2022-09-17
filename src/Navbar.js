import React from 'react';
import { Icon } from '@iconify/react';

function Navbar() {
  return (
    <div>
        <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#"><Icon icon="ic:twotone-live-tv" color="white" width="30" height="30" inline={true} />Tv Maze App</a>
            </div>
        </nav>
    </div>
  )
}

export default Navbar
