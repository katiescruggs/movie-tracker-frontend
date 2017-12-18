import React from 'react';
import { shallow } from 'enzyme';
import { Login, mapStateToProps, mapDispatchToProps } from './Login';

describe('Login Container', () => {
  describe('Login', () => {
    let login;
    const mockLoginAttempt = jest.fn();
    const mockSignupAttempt = jest.fn();
    const mockGetCurrentUser = jest.fn();

    beforeEach( () => {
      login = shallow(
        <Login 
          name='Katie'
          showRegister={true}
          userLoginAttempt={mockLoginAttempt}
          userSignupAttempt={mockSignupAttempt}
          getCurrentUser={mockGetCurrentUser}
          errorStatus={false}
          errorMessage='an error message here'
        />);
    });

    it('should exist', () => {
      expect(login).toBeDefined();
    });

    it('should match the snapshot', () => {
      expect(login).toMatchSnapshot();
    });

    it('should have a default state', () => {
      const expectedDefault = {
        name: '', 
        email: '', 
        password: ''
      };

      expect(login.state()).toEqual(expectedDefault);
    });

    it('should update state based on input changes', () => {
      const mockNameEvent = 
        {target: {value: 'name value', name: 'name'}};
      const mockEmailEvent = 
        {target: {value: 'email value', name: 'email'}};
      const mockPasswordEvent = 
        {target: {value: 'password value', name: 'password'}};
    
      login.instance().handleInputChange(mockNameEvent);
      login.instance().handleInputChange(mockEmailEvent);
      login.instance().handleInputChange(mockPasswordEvent);

      const expectedState = {
        name: 'name value',
        email: 'email value',
        password: 'password value'
      };

      expect(login.state()).toEqual(expectedState);
    });

    it('should call userSignupAttempt on form submit', () => {
      login.instance().submitLogin();
      expect(mockSignupAttempt).toHaveBeenCalled();
    });

    it('should reset input values on form submit', () => {
      const expectedDefault = {
        name: '', 
        email: '', 
        password: ''
      };

      const mockNameEvent = 
        {target: {value: 'name value', name: 'name'}};
      const mockEmailEvent = 
        {target: {value: 'email value', name: 'email'}};
      const mockPasswordEvent = 
        {target: {value: 'password value', name: 'password'}};
    
      login.instance().handleInputChange(mockNameEvent);
      login.instance().handleInputChange(mockEmailEvent);
      login.instance().handleInputChange(mockPasswordEvent);

      login.instance().submitLogin();

      expect(login.state()).toEqual(expectedDefault);
    });
  });

  describe('mapStateToProps', () => {
    let mockStore;
    let result;

    beforeAll(() => {
      mockStore = {
        user: {
          info: {
            name: "Katie"
          }
        },
        error: {
          status: false,
          message: "Error Message Here"
        }
      };
      result = mapStateToProps(mockStore);
    });

    it('should pull user name from the store', () => {
      expect(result.name).toEqual(mockStore.user.info.name);
    });

    it('should pull error status from the store', () => {
      expect(result.errorStatus).toEqual(mockStore.error.status);
    });

    it('should pull error message from the store', () => {
      expect(result.errorMessage).toEqual(mockStore.error.message);
    });
  });

  describe('mapDispatchToProps', () => {
    let mockDispatch;
    let result;

    beforeEach(() => {
      mockDispatch = jest.fn();
      result = mapDispatchToProps(mockDispatch);
    });

    it('should call dispatch when userLoginAttempt is called', () => {
      const mockUserInfo = {mock: 'info'};

      result.userLoginAttempt(mockUserInfo);
      expect(mockDispatch).toHaveBeenCalled();
    });

    it('should call dispatch when userSignupAttempt is called', () => {
      const mockUserInfo = {mock: 'info'};

      result.userSignupAttempt(mockUserInfo);
      expect(mockDispatch).toHaveBeenCalled();
    });

    it('should call dispatch when getCurrentUser is called', () => {
      const mockUserInfo = {mock: 'info'};

      result.getCurrentUser(mockUserInfo);
      expect(mockDispatch).toHaveBeenCalled();
    });
  });
});

