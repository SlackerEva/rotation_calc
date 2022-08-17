import './BonusGrid.css';

//у бонусов не выставлены границы значений, я не знаю их все, может быть 200 было бы хорошо?
function BonusGrid(props) {

  if (props.value === undefined) {  
    return (
      <div></div>
    );
  }

  function change_bonus(e, idx) {
    props.setBonuses([...props.value], props.value[idx].value = e);
  }

  return(
    <div className='bonus-grid'>
      <p className='bonus-grid__title'>Бонусы</p>
      <form className='bonus-grid__form'>
        {props.value.map((bonus, idx) => (
          <label className='bonus-grid__label' key={idx}>
            {bonus.bonus}
            <input className='bonus-grid__input' type="number" name={bonus.bonus} value={bonus.value} onChange={e => change_bonus(e.target.value, idx)} />
          </label>
        ))}
        <div className='bonus-grid__button-container'>
          <button className='bonus-grid_buttons-prop'>Нет</button>
          <button className='bonus-grid_buttons-prop'>Пар</button>
          <button className='bonus-grid_buttons-prop'>Таяние</button>
        </div>
      </form>
    </div>
  );
}

export default BonusGrid;