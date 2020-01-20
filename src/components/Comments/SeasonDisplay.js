import React from "react";

const seasonConfig = {
  summer: {
    text: "Lets hit the beach",
    iconName: "sun"
  },
  winter: {
    text: "It is cold!",
    iconName: "snowflake"
  }
};
const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summmer";
  }
};

// get geo location
const SeasonDisplay = props => {
  const season = getSeason(props.lat, new Date().getMonth());
  const icon = season === "winter" ? "snowflake" : "sun";
  const { iconName } = seasonConfig[season];
  return (
    <div>
      <h3>
        <i className={`${iconName} icon`} />
        {season === "winter" ? "Burr, it is chilly" : "Lets hit the beach"}
        <i className={`${icon} icon`} />
      </h3>
    </div>
  );
};

export default SeasonDisplay;
