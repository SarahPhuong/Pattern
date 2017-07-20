import React from 'react';

export default () => (
    <div className="btn-group">
    <button type="button" className="btn btn-default">1</button>
    <button type="button" className="btn btn-default">2</button>

    <div className="btn-group">
        <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown">
        Dropdown
        <span className="caret"></span>
        </button>
        <ul className="dropdown-menu">
            <li><a href="#">Dropdown link</a></li>
            <li><a href="#" id="my-name">Dropdown link</a></li>
            </ul>
        </div>
    </div>
);
