import Statistics from "./Statistic";
import PropTypes from "prop-types";
import s from "./Statistic.module.css";

export default function StatisticList({ items }) {
  return (
    <ul className={s.statList}>
      {items.map((item) => (
        <li
          className={s.item}
          key={item.id}
          style={{
            backgroundColor: getRandColor(),
          }}
        >
          <Statistics label={item.label} percentage={item.percentage} />
        </li>
      ))}
    </ul>
  );
}
StatisticList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};

function getRandColor() {
  let color = Math.floor(Math.random() * Math.pow(256, 3)).toString(16);
  while (color.length < 6) {
    color = "0" + color;
  }
  return "#" + color;
}
