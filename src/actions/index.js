"use strict";

import * as counter from './counterActionsCreator.js';
import * as another from './anotherActionsCreator.js';

export default {
  ...counter,
  ...another
}


