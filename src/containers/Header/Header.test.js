import React from 'react';
import { shallow } from 'enzyme';
import { Header, mapStateToProps, mapDispatchToProps } from './Header';

describe('Header Container', () => {
  describe('Header', () => {
    let header;
    const mockHandleFetch = jest.fn();
    const mockHandleLogout = jest.fn();

    beforeEach( () => {
      header = shallow(
        <Header
          name="Katie"
          signedIn={true}
          handleLogout={mockHandleLogout}
          handleFetch={mockHandleFetch}
        />);
    });

    it('should call mockHandleFetch on mount', () => {
      expect(mockHandleFetch.mock.calls.length).toEqual(1);
    });

    it('should exist', () => {
      expect(header).toBeDefined();
    });

    it('should match snapshot', () => {
      expect(header).toMatchSnapshot();
    });

    it('should call mockHandleLogout on button click', () => {
      header.instance().props.handleLogout();
      expect(mockHandleLogout).toHaveBeenCalled();
    });

  });

  describe('mapStateToProps', () => {
    let mockStore;
    let result;

    beforeAll(() => {
      mockStore = {
        user: {
          signedIn: true,
          info: {
            name: 'Yung Jhun'
          }
        }
      };

      result = mapStateToProps(mockStore);
    });

    it('should pull user name from the store', () => {
      expect(result.name).toEqual(mockStore.user.info.name);
    });

    it('should pull boolean signedIn from the store', () => {
      expect(result.signedIn).toEqual(mockStore.user.signedIn);
    });
  });

  describe('mapDispatchToProps', () => {
    it('should call dispatch when handleFetch is called', () => {
      const mockDispatch = jest.fn();
      const result = mapDispatchToProps(mockDispatch);
      result.handleFetch();
      expect(mockDispatch).toHaveBeenCalled;
    });

    it('should call dispatch when handleLogout is called', () => {
      const mockDispatch = jest.fn();
      const result = mapDispatchToProps(mockDispatch);
      result.handleLogout();
      expect(mockDispatch).toHaveBeenCalled;
    });
  });
});