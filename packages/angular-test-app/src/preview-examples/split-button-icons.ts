/**
 * COPYRIGHT (c) Siemens AG
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import { Component } from '@angular/core';

@Component({
  selector: 'app-split-button-icons',
  template: ` <ix-split-button icon="document">
    <ix-split-button-item icon="cut"></ix-split-button-item>
    <ix-split-button-item icon="bulb"></ix-split-button-item>
  </ix-split-button>`,
})
export class SplitButtonIcons {}