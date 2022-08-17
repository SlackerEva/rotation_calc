import './RotationGrid.css';
import '../RotationRow/RotationRow.css';
import RotationRow from '../RotationRow/RotationRow.jsx';
import TagsRow from '../TagsRow/TagsRow.jsx';
import {optionArr, champArr, create_option} from '../../utils/SelectorsArr.jsx';
import BonusGrid from '../BonusGrid/BonusGrid.jsx';
import { useEffect, useState } from 'react';

function RotationGrid() {
  const [rotationArr, setRotationArr] = useState([create_option(0), create_option(1), create_option(2), create_option(3)]);
  const [bonuses, setBonuses] = useState(undefined);

  function set_selected(idx, selected) {
    let arr = [...rotationArr];
    arr[idx].selected = selected;
    setRotationArr([...arr]);
  }

  function remove_option(idx) {
    let arr = [...rotationArr];
    arr.splice(idx, 1);
    setRotationArr([...arr]);
  }

  function show_bonuses(idx, selected) {
    let newList = rotationArr[idx].selections[selected].bonuses.bonusList;
    setBonuses(newList);
  }

  function get_remove_callback(idx) {
    return function () {
      setBonuses(undefined);
      remove_option(idx);
    }
  }

  function get_selector_callback(idx) {
    return function (selected) {
      set_selected(idx, selected);
    }
  }

  function show_bonuses_callback(idx, selected) {
    return function () {
      // by reference
      if (bonuses === rotationArr[idx].selections[selected].bonuses.bonusList) {
        setBonuses(undefined);
      } else {
        show_bonuses(idx, selected);
      }
    }
  }

  function on_add() {
    if (rotationArr.length < 6) {
      setRotationArr([...rotationArr, create_option()]);
    }
  }

  return (
    <>
    <div className='rotation-container'>
      <select className="selector selector_position">
        {champArr.map((name) => (
          <option key={name.id} >{name.name}</option>
        ))}
      </select>
      <p className='rotation-title'>Ротация</p>
      <div className='rotation-grid rotation-grid_position-option'>   
        {rotationArr.map((item, idx) => 
          <RotationRow 
            key={idx} 
            option={item} 
            selection_callback={get_selector_callback(idx)} 
            remove_callback={get_remove_callback(idx)}
            show_callback={show_bonuses_callback(idx, item.selected)}
          />
        )}
        <button className='rotation-grid__buttonAdd rotation-grid__buttonAdd_position' onClick={on_add}>+</button>
      </div>
      <div className='rotation-grid rotation-grid_position-tags'>   
        {rotationArr.map((item, idx) => (<TagsRow  key={idx} option={item} />))}
      </div>
      <BonusGrid value={bonuses} setBonuses={setBonuses} />
    </div>

    </>
  );
}

export default RotationGrid;