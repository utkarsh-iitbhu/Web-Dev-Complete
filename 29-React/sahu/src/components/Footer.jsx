import React from 'react';
import ReactDOM from 'react-dom';

function Footer(){
    const curYr = new Date().getFullYear();
    return( <footer>
    <p>
        Copyright @LordSahu {curYr}
    </p>
            </footer>
    );
}

export default Footer;