import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <div className="footer-contain">
            {/* <div className="footer-information"> */}
            <div className="footer-a">
                <h3>Donnabellas Angels</h3>
            </div>
            <div className="footer-b">
                <h3>Contract Us</h3>
                <p>Phone <br /> (619) 818-1399 <br />
                    Email <br /> info@donnabellasangels.org
                    </p>
            </div>
            <div className="footer-c">
                <h3>Group</h3>
                <Link to="../About" className="footer-link">About</Link>
                <Link to="../Community" className="footer-link">Community</Link>
            </div>
            <div className="footer-d">
                <h3>Charity</h3>
                <Link to="../Store" className="footer-link" >Store</Link>
                <Link to="../Donate" className="footer-link">Donate</Link>
            </div>
            {/* </div> */}
        </div>
    );
}
