import React from 'react';

const MenuHeader = ({ title }) => (
    <div className="navbar-header">
        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="">
            <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
        </button>
        <a className="navbar-brand" href="#">{ title}</a>
    </div>
);

export default MenuHeader;