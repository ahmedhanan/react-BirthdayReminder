import { useState } from 'react';
import Card from './Card';
import data from './data';
const ListCtn = () => {
  const [list, setlist] = useState(data);
  const handleAllClear = () => {
    setlist(null);
  };
  return (
    <div className='container'>
      {list && list.map((item) => <Card key={item.id} data={{ ...item }} />)}
      {!list && <p>No reminders.</p>}
      <button onClick={handleAllClear}>Clear all reminders!</button>
    </div>
  );
};

export default ListCtn;
