import './SeasonDisplay.css';
import React from 'react';

const seasonConfig = {
    summer: {
        text: 'Lets hit the beach!',
        iconName: 'sun outline'
    },
    winter: {
        text: 'Burr, it\'s chilly!',
        iconName: 'snowflake'
    }
};

const getSeason = (latitude, month) => {
    if (month > 2 && month < 9) {
        return latitude > 0 ? 'summer' : 'winter';
    }

    return latitude > 0 ? 'winter' : 'summer';
};

const SeasonDisplay = (props) => {
    const season = getSeason(props.latitude, new Date().getMonth());
    const { text, iconName } = seasonConfig[season];

    return (
        <div className={`season_display ${season}`}>
            <i className={`massive icon icon_left ${iconName}`}/>
            <h1>{text}</h1>
            <i className={`massive icon icon_right ${iconName}`}/>
        </div>
    );
};

export default SeasonDisplay;
