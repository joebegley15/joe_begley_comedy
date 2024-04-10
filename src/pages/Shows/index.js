import React from 'react';
import FixedCenter from '../../components/FixedCenter';
import Show from '../../components/Show';

import "./Shows.scss"

const shows = require("./shows.json");

const Shows = () => {
    console.log(shows);
    return (
        <div id="shows" className="background">
            <div className="top-padding">
                <FixedCenter>
                    {shows.map(show => {
                        return (
                            <Show show={show}></Show>
                        )
                    })}
                </FixedCenter>
            </div>
        </div>
    );
};

export default Shows;
