import React from 'react';
import Hero from './Hero';
import Investment from './Invemet';
import Demat from './demat';

function Signup() {
    return (
        <div className="signup">
            <Hero />
            <Investment/>
            <Demat/>
        </div>
    );
}

export default Signup;