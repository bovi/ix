/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component, h, Prop } from '@stencil/core';
import { getButtonClasses } from '../button/base-button';
import { Button } from '../button/button';

@Component({
  tag: 'ix-icon-button',
  scoped: true,
})
export class IconButton implements Button {
  /**
   * Variant of button
   */
  @Prop() variant: 'Primary' | 'Secondary' = 'Secondary';

  /**
   * Button outline
   */
  @Prop() outline: boolean;

  /**
   * Button invisible
   *
   * @deprecated use ghost property
   */
  @Prop() invisible: boolean;

  /**
   * Button invisible
   */
  @Prop() ghost: boolean;

  /**
   * Button in oval shape
   */
  @Prop() oval: boolean;

  /**
   * Button icon
   */
  @Prop() icon: string;

  /**
   * Size of icon in button
   */
  @Prop() size: '32' | '24' | '16' | '12' = '24';

  /**
   * Color of icon in  button
   */
  @Prop() color: string;

  /**
   * Selected state only working with outline or invisible
   */
  @Prop() selected = false;

  /**
   * Disabled
   */
  @Prop() disabled = false;

  /**
   * Type of the button
   */
  @Prop() type: 'button' | 'submit' = 'button';

  private getIconButtonClasses() {
    return {
      'btn-icon-xs': this.size === '12',
      'btn-icon-s': this.size === '16',
      ...getButtonClasses(
        this.variant,
        this.outline,
        this.ghost || this.invisible,
        true,
        this.oval,
        this.selected,
        this.disabled
      ),
    };
  }

  render() {
    return (
      <button class={this.getIconButtonClasses()} type={this.type}>
        <ix-icon size={this.size} name={this.icon} color={this.color} />
        <div style={{ display: 'none' }}>
          <slot></slot>
        </div>
      </button>
    );
  }
}
