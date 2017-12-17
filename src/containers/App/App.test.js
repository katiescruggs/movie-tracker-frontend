import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
// import { Provider } from 'react-redux'
import App from './App';

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
// });

describe('App tests', () => {
  let app;

  beforeEach( () => {
    app = shallow(<App />)
  })

  it('should be defined', () => {
    expect(app).toBeDefined()
  })

  it('should match the snapshot', () => {
    expect(app).toMatchSnapshot()
  })

})