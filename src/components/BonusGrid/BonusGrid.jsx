import './BonusGrid.css';

//у бонусов не выставлены границы значений, я не знаю их все, может быть 200 было бы хорошо?
function BonusGrid(props) {

  let newBonuses = props.value;
  if (props.value === undefined) {  
    return (
      <div></div>
    );
  }

  function change_bonus(e, idx) {
    newBonuses.bonusList[idx].value = e;
    props.setBonuses({...newBonuses});
  }

  function uncheck_effects() {
    newBonuses.effectList.map(effects => {
      effects.checked = false;
    });
    props.setBonuses({...newBonuses});
  }

  function check_effects(idx) {
    newBonuses.effectList[idx].checked = true;
    props.setBonuses({...newBonuses});
  }

  return(
    <div className='bonus-grid'>
      <p className='bonus-grid__title'>Бонусы</p>
      <form className='bonus-grid__form'>
        {props.value.bonusList.map((bonus, idx) => (
          <label className='bonus-grid__label' key={idx}>
            {bonus.bonus}
            <input className='bonus-grid__input' type='number' name={bonus.bonus} value={bonus.value} onChange={e => change_bonus(e.target.value, idx)} />
          </label>
        ))}
        <div className='bonus-grid__button-container'>
          <button className='bonus-grid__buttons' type='button' onClick={uncheck_effects}>Нет</button>
          <button className='bonus-grid__buttons' type='button' onClick={e => check_effects(0)} >Пар</button>
          <button className='bonus-grid__buttons' type='button' onClick={e => check_effects(1)} >Таяние</button>
        </div>
      </form>
    </div>
  );
}

export default BonusGrid;