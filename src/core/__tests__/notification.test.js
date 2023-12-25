/* eslint-disable no-undef */

import { act } from '@testing-library/react-native';

describe('pushQueue', () => {
  let setQueue;
  let popQueue;
  let pushQueue;
  const limit = 5;

  beforeEach(() => {
    jest.useFakeTimers();

    setQueue = jest.fn();
    popQueue = jest.fn();

    pushQueue = item => {
      setTimeout(() => {
        setQueue(prev => {
          limit <= prev.length ? popQueue(1) : popQueue();
          if (prev.length > 0) popQueue();
          return [{ ...item, keyID: Math.random() }, ...prev];
        });
      }, 100);
    };
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('calls setQueue after a delay', () => {
    pushQueue({ message: 'Test' });

    expect(setQueue).not.toHaveBeenCalled();

    act(() => {
      jest.advanceTimersByTime(100);
    });

    expect(setQueue).toHaveBeenCalled();
  });

  it('calls popQueue when the queue length exceeds the limit', () => {
    const prevQueue = new Array(limit).fill({ message: 'Test' });

    setQueue.mockImplementationOnce(callback => callback(prevQueue));

    pushQueue({ message: 'New Item' });

    act(() => {
      jest.advanceTimersByTime(100);
    });

    expect(popQueue).toHaveBeenCalledWith(1);
  });

  it('calls popQueue when the queue length is greater than 0', () => {
    const prevQueue = [{ message: 'Test' }];

    setQueue.mockImplementationOnce(callback => callback(prevQueue));

    pushQueue({ message: 'New Item' });

    act(() => {
      jest.advanceTimersByTime(100);
    });

    expect(popQueue).toHaveBeenCalled();
  });

  it('adds the new item to the queue', () => {
    const newItem = { message: 'New Item' };
    const prevQueue = [{ message: 'Test' }];

    setQueue.mockImplementationOnce(callback => {
      const newQueue = callback(prevQueue);
      expect(newQueue[0]).toEqual(expect.objectContaining(newItem));
    });

    pushQueue(newItem);

    act(() => {
      jest.advanceTimersByTime(100);
    });
  });
});
