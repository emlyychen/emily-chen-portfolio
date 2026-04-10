"use client";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../css/timeline.css";
import StarIcon from "@mui/icons-material/Star";
import BiotechIcon from "@mui/icons-material/Biotech";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import CodeIcon from "@mui/icons-material/Code";
import NewspaperIcon from "@mui/icons-material/Newspaper";

const iconMap = {
  StarIcon: <StarIcon />,
  BiotechIcon: <BiotechIcon />,
  LightbulbIcon: <LightbulbIcon />,
  NewspaperIcon: <NewspaperIcon />,
  CodeIcon: <CodeIcon />,
};

export function Timeline({ data }) {
  return (
    <VerticalTimeline>
      {data.map((d, i) => (
        <VerticalTimelineElement
          key={i}
          className="vertical-timeline-element--work"
          contentStyle={{ background: d.bg_color, color: d.color }}
          contentArrowStyle={{ borderRight: `7px solid ${d.bg_color}` }}
          date={d.date}
          iconStyle={{ background: d.icon_bg, color: d.icon_color }}
          icon={iconMap[d.icon]}
        >
          <h3
            className="vertical-timeline-element-title"
            style={{
              fontSize: "1.3rem",
              fontWeight: "bold",
            }}
          >
            {d.role}
          </h3>
          <h4
            className="vertical-timeline-element-subtitle"
            style={{
              fontSize: "1rem",
              fontWeight: "bold",
            }}
          >
            {d.company}
          </h4>
          <h4 className="vertical-timeline-element-subtitle">{d.location}</h4>
          <p>{d.desc}</p>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
}
