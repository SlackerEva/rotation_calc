import './TagsRow.css';

function get_bonus(bonus) {
  let limit = 0;

  if (bonus.shortName === '+хМульт') {
    limit = 1;
  }

  if (bonus.value > limit) {
    if (bonus.id === 1 || bonus.id === 2 || bonus.id === 10) {
      return (<p className='row-container__tags' key={bonus.id} >{bonus.shortName + ' ' + bonus.value}</p>)
    }
    return (<p className='row-container__tags' key={bonus.id}>{bonus.shortName + ' ' + bonus.value + '%'}</p>)
  }
}

function TagsRow(props) {
  return (
    <div className="row-container">
      {props.option.selections[props.option.selected].bonuses.bonusList.map(bonus => (get_bonus(bonus))) }
    </div>
  );
}

export default TagsRow;