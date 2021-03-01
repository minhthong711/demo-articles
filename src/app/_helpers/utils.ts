import { Injectable } from '@angular/core';

import * as _ from 'lodash';

@Injectable()
export class Utils {
  constructor() { }

  // Standardize json to url params
  static standardizeParam(jsonParams): string {
    let output = '';

    if (!jsonParams['sortBy']) {
      jsonParams['sortBy'] = 'createdAt';
    }

    if (!jsonParams['order']) {
      jsonParams['order'] = 'asc';
    }

    for (let key in jsonParams) {
      if (jsonParams.hasOwnProperty(key) && jsonParams[key] !== undefined && jsonParams[key] !== null) {
        output += key + '=' + jsonParams[key] + '&';
      }
    }

    if (output.length > 0) {
      output = output.substr(0, output.length - 1);
    }

    return output;
  }
}
