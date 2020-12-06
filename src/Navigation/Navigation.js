import React from 'react';
import {Link} from 'react-router-dom';

class Navigation extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    <Link to="/">
                        <li>홈</li>
                    </Link>
                    <Link to="/Booking">
                        <li>예약</li>
                    </Link>
                </ul>
            </div>
        )
    }
}

export default Navigation;