import React from 'react';
import { shallow } from 'enzyme';
import Video from './Video';

describe('Video tests', () => {
  let video;

  beforeEach(() => {
    video = shallow(<Video />);
  });

  it('should be defined', () => {
    expect(video).toBeDefined();
  });

  it('should match the snapshot', () => {
    expect(video).toMatchSnapshot();
  });
});