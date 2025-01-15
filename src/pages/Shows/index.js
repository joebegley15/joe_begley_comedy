import React from 'react';
import FixedCenter from '../../components/FixedCenter';
import Show from '../../components/Show';

import "./Shows.scss"

const shows = require("./shows.json");

const Shows = () => {
    return (
        <div id="shows" className="background">
            <div className="top-padding">
                <FixedCenter>
                    {shows.map(show => {
                        return (
                            <Show show={show} key={show.id}></Show>
                        );
                    })}
                </FixedCenter>
            </div>
            {/* Email List Section */}
            <div className="email-list-container">
                <p className="email-list-text">Don't see a show? I need emails to make a show in your city happen.</p>
                <div className="button-container">
                    <a
                        href="https://docs.google.com/forms/d/e/1FAIpQLSe7qc131OjflHLorLBeXMMc7lx8G7EhZSZUwEzc-gFgTz4hUQ/viewform"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="form-button"
                    >
                        EMAIL LIST
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Shows;
