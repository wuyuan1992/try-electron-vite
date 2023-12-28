// import Versions from './components/Versions'
// import icons from './assets/icons.svg'

import { useCallback } from 'react';
import db from './utils/db';

function App(): JSX.Element {
  const onTestDb = useCallback(() => {
    db.user.create({
      name: 'elon',
      email: 'elon@gmail.com',
    });
  }, []);

  return (
    <div className="container">
      <button onClick={onTestDb}>click</button>
    </div>
  );
}

export default App;
