export const optionArr = [
  {id: 0, option: 'N1a'},
  {id: 1, option: 'N1b'},
  {id: 2, option: 'N2'},
  {id: 3, option: 'N3'},
];

function create_bonuses() {
  return [
    {id: 0, bonus: '+ATK/HP/DEF, %', value: 0},
    {id: 1, bonus: '+ATK/HP/DEF', value: 0},
    {id: 2, bonus: '+Мастерство стихий', value: 0},
    {id: 3, bonus: '+Бонус реакции, %', value: 0},
    {id: 4, bonus: '+Крит. шанс, %', value: 0},
    {id: 5, bonus: '+Крит. урон, %', value: 0},
    {id: 6, bonus: '+Бонус урона, %', value: 0},
    {id: 7, bonus: '+Срез RES, %', value: 0},
    {id: 8, bonus: '+Срез DEF, %', value: 0},
    {id: 9, bonus: '+Игнор. DEF, %', value: 0},
    {id: 10, bonus: 'xМультипликатор', value: 1},
  ]
}

export function create_option(selected=0) {
  return { 
    selected: selected,
    selections: [
      {id: 0, option: 'N1a', bonuses: create_bonuses()},
      {id: 1, option: 'N1b', bonuses: create_bonuses()},
      {id: 2, option: 'N2', bonuses: create_bonuses()},
      {id: 3, option: 'N3', bonuses: create_bonuses()},
  ]
}
}

export const champArr = [
  {id: 0, name: 'Еимия'},
  {id: 1, name: 'Ху Тао'},
  {id: 2, name: 'Бэнет'},
];