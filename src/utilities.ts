/* eslint-disable no-underscore-dangle */
/* eslint-disable no-bitwise */
// @ts-nocheck
import type React from 'react';
import type { IconType } from './types';
import { x11Colors } from './core/theme/x11';

function hexToRgbA(hex:string|undefined, percentage:number) {
  if (!hex) {
    return 'rgba(0,0,0,0)';
  }
  if (hex[0] !== '#') {
    hex = `#${x11ColorToHex(hex)}`;
  }

  let c;
  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    c = hex.substring(1).split('');
    if (c.length === 3) {
      c = [c[0], c[0], c[1], c[1], c[2], c[2]];
    }
    c = `0x${c.join('')}`;
    // @ts-ignore
    return `rgba(${[(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',')},${percentage / 100})`;
  }
  throw new Error('Bad Hex');
}

export const opacity = (color:string|undefined, percentage: number) => hexToRgbA(color, percentage);

export function x11ColorToHex(colorName: string) {
  const hex = x11Colors.find(x => x.name === colorName)?.hex;
  if (!hex) {
    throw new Error(`Unknown X11 color name: ${colorName}`);
  }
  return hex;
}

const customIcons: any = {};

export const registerCustomIconType = (id: string, customIcon: any) => {
  customIcons[id] = customIcon;
};

export const getIconType = (type: IconType): any => {
  switch (type) {
    case 'zocial':
      return require('react-native-vector-icons/Zocial').default;
    case 'octicon':
      return require('react-native-vector-icons/Octicons').default;
    case 'material':
      return require('react-native-vector-icons/MaterialIcons').default;
    case 'material-community':
      return require('react-native-vector-icons/MaterialCommunityIcons')
        .default;
    case 'ionicon':
      return require('react-native-vector-icons/Ionicons').default;
    case 'foundation':
      return require('react-native-vector-icons/Foundation').default;
    case 'evilicon':
      return require('react-native-vector-icons/EvilIcons').default;
    case 'entypo':
      return require('react-native-vector-icons/Entypo').default;
    case 'font-awesome':
      return require('react-native-vector-icons/FontAwesome').default;
    case 'font-awesome-5':
      return require('react-native-vector-icons/FontAwesome5').default;
    case 'simple-line-icon':
      return require('react-native-vector-icons/SimpleLineIcons').default;
    case 'feather':
      return require('react-native-vector-icons/Feather').default;
    case 'ant-design':
      return require('react-native-vector-icons/AntDesign').default;
    case 'fontisto':
      return require('react-native-vector-icons/Fontisto').default;
    default:
      if (Object.prototype.hasOwnProperty.call(customIcons, type)) {
        return customIcons[type];
      }
      return require('react-native-vector-icons/MaterialIcons').default;
  }
};

export const getIconProperties = (node: React.ReactElement) => {
  const { type, name, size, color } = node.props;
  return {
    type,
    name,
    size,
    color,
  };
};

export const TaskQueue = function (options: {sleepBetweenTasks:number, concurrency:number}) {
  const self = this;
  self.options = options;
  const _queue: any[] = [];
  let _currentConcurrentTasks = 0;
  let _threadBusyVector = [0];
  let _lastTaskId = 0;
  const _taskToThreadMap = {};
  if (!self.options) {
    self.options = {};
  }
  if (self.options.concurrency) {
    if (self.options.concurrency !== parseInt(self.options.concurrency, 10) || self.options.concurrency < 1) {
      throw new Error('concurrency must be a positive integer');
    }
  } else {
    self.options.concurrency = 1;
  }
  if (self.options.sleepBetweenTasks) {
    if (self.options.sleepBetweenTasks !== parseInt(self.options.sleepBetweenTasks, 10) || self.options.sleepBetweenTasks < 0) {
      throw new Error('sleepBetweenTasks must be a non-negative integer');
    }
  } else {
    self.options.sleepBetweenTasks = 0;
  }
  _threadBusyVector = new Array(self.options.concurrency);

  self.addTask = function (taskFunction: any) {
    // eslint-disable-next-line no-plusplus, no-undef
    _queue.push(new Task(_lastTaskId++, taskFunction, self));
    setTimeout(scheduleTasks, 0);
  };

  self.wrapCallback = function (task: { _task: { taskId: string | number; }; }, taskCallback: { apply: (arg0: any, arg1: IArguments) => void; }) {
    return function () {
      // eslint-disable-next-line prefer-rest-params
      taskCallback.apply(this, arguments);

      // free up 'resources'
      const threadId = _taskToThreadMap[task._task.taskId];
      setTimeout(() => {
        _threadBusyVector[threadId] = 0;
        // eslint-disable-next-line no-plusplus
        _currentConcurrentTasks--;
        setTimeout(scheduleTasks, 0);
      }, self.options.sleepBetweenTasks);
    };
  };

  // Bizim yaptığımız fonksiyon
  self.createTask = function (callback: any) {
    // eslint-disable-next-line no-plusplus, no-undef
    _queue.push(new Task(_lastTaskId++, function () {
      setTimeout(this.wrapCallback(callback), 0);
    }, self));
    setTimeout(scheduleTasks, 0);
  };
  self.length = function () {
    return _queue.length;
  };

  // eslint-disable-next-line vars-on-top, no-var
  var scheduleTasks = function () {
    if (_queue.length) { // we have tasks to schedule
      if (_currentConcurrentTasks < self.options.concurrency) { // we got free 'threads' to schedule a task for
        let threadId = -1;

        // find a free thread
        // eslint-disable-next-line no-plusplus
        for (let i = 0; i < _threadBusyVector.length; i++) {
          if (!_threadBusyVector[i]) {
            threadId = i;
            break;
          }
        }
        if (threadId > -1) {
          const task = _queue.shift();
          _threadBusyVector[threadId] = 1;
          _taskToThreadMap[task._task.taskId] = threadId;
          // eslint-disable-next-line no-plusplus
          _currentConcurrentTasks++;
          setTimeout(() => {
            task.run();
          }, 0);
        }
      }
    }
  };
};

// eslint-disable-next-line vars-on-top, no-var
var Task = function (taskId: number, actionFunc: () => void, taskQueue: { wrapCallback: (arg0: any, arg1: any) => any; }) {
  this._task = {
    taskId,
    taskQueue,
  };
  this.run = actionFunc;
  this.wrapCallback = function (taskCallback: any) {
    return taskQueue.wrapCallback(this, taskCallback);
  };
};
