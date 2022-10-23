import PropTypes from "prop-types";
import css from '../statistics/Statistics.module.css';


export const Statistics = ({ title, data}) => {
    return ( 
        <section className={css.statistics} key={title}>
            <h2 className={css.title}>{title}</h2>

            <ul className={css.stat__list}>

                {data.map(({ id, label, percentage }) =>
                (<li style={{
                    backgroundColor: getRandomHexColor()
}} className={css.item} key={id} >
                    <span className={css.label} >{label}</span>
                    <span className={css.percentage}>{percentage}%</span>
                </li>)
                )}
    </ul>
</section>

    )
};

Statistics.propTypes = {
    title: PropTypes.string.isRequired,
    data: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        })
    )
    
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}