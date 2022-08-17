import './BonusGrid.css';
import {bonusArr} from '../../utils/SelectorsArr.jsx';

function BonusGrid() {
  return(
    <div className='bonus-grid'>
      <p className='bonus-grid__title'>Бонусы</p>
      <form className='bonus-grid__form'>
        {bonusArr.map((bonus, idx) => (
          <label className='bonus-grid__label' key={idx}>{bonus.bonus}
            <input className='bonus-grid__input' type="text" name={bonus.bonus} value={bonus.value} />
          </label>
        ))}
      </form>
    </div>
  );
}

export default BonusGrid;