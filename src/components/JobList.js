import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import FadeInSection from "./FadeInSection";

import useMediaQuery from "@material-ui/core/useMediaQuery";

function TabPanel(props) {
  const { children, value, index, isHorizontal, ...other } = props;

  if (isHorizontal) {
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  } else {
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index, isHorizontal) {
  if (isHorizontal) {
    return {
      id: `full-width-tab-${index}`,
      "aria-controls": `full-width-tabpanel-${index}`,
    };
  } else {
    return {
      id: `vertical-tab-${index}`,
    };
  }
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "transparent",
    display: "flex",
    height: 300,
  },
  tabs: {
    borderRight: `1px solid var(--lightest-navy)`,
  },
}));

const JobList = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const isHorizontal = useMediaQuery("(max-width:600px)");

  const experienceItems = {
    "SDG Group": {
      jobTitle: "Data & Analytics Trainee @",
      duration: "FEB 2026 - MAY 2026",
      desc: [
        "Developed and programmed ETL processes for data integration.",
        "Designed Business Intelligence solutions and created interactive dashboards.",
      ],
    },
    "Capgemini": {
      jobTitle: "Appian Developer Trainee @",
      duration: "MAY 2025 - SEPT 2025",
      desc: [
        "Developed a recommendation application for the banking sector, with a focus on interface design.",
        "Participated in a global B2B fund distribution platform project, gaining experience in enterprise software development lifecycles.",
      ],
    }
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={`joblist-root ${classes.root}`}>
      <Tabs
        orientation={!isHorizontal ? "vertical" : "horizontal"}
        variant={isHorizontal ? "fullWidth" : "scrollable"}
        value={value}
        onChange={handleChange}
        className={`joblist-tabs ${classes.tabs}`}
      >
        {Object.keys(experienceItems).map((key, i) => (
          <Tab label={isHorizontal ? `0${i + 1}.` : key} {...a11yProps(i, isHorizontal)} key={key} />
        ))}
      </Tabs>
      {Object.keys(experienceItems).map((key, i) => (
        <TabPanel value={value} index={i} key={key} isHorizontal={isHorizontal}>
          <span className="joblist-job-title">
            {experienceItems[key]["jobTitle"] + " "}
          </span>
          <span className="joblist-job-company">{key}</span>
          <div className="joblist-duration">
            {experienceItems[key]["duration"]}
          </div>
          <ul className="job-description">
            {experienceItems[key]["desc"].map(function (descItem, i) {
              return (
                <FadeInSection delay={`${i + 1}00ms`} key={i}>
                  <li>{descItem}</li>
                </FadeInSection>
              );
            })}
          </ul>
        </TabPanel>
      ))}
    </div>
  );
};

export default JobList;