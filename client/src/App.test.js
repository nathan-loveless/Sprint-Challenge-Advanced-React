import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import axios from 'axios';

const [players, setPlayers] = useState([]);

// Does app crash?
// it('renders without crashing', () => {
//   const wrapper = rtl.render(
//   <App />
//   );
//   console.log(wrapper.debug());
// });

// Does players API call return something?
it('returns data from axios get', () => {
    axios
      .get("http://localhost:5000/api/players")
      .then(res => setPlayers(res.data))
      .catch(err => console.log(err));
      expect(players.length).toaBeGreaterThan(0);
});