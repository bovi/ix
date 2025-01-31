/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { newSpecPage } from '@stencil/core/testing';
import '@testing-library/jest-dom';
import { Toast } from '../toast';

describe('ix-toast', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Toast],
      html: `<ix-toast toast-title="Test title">Test message</ix-toast>`,
    });

    await page.waitForChanges();

    expect(page.root).toEqualHtml(`
      <ix-toast class=\"animate__animated animate__fadeIn\" toast-title=\"Test title\">
      <div class=\"toast-body\">
         <div class="toast-icon">
            <ix-icon color="color-std-text" name="info" size="24"></ix-icon>
          </div>
        <div class=\"toast-content\">
          <div class=\"text-default-title-single toast-title\">
            Test title
          </div>
          <div class=\"text-default toast-message\">
            Test message
          </div>
        </div>
        <div class=\"toast-close\">
          <ix-icon-button icon=\"close\" ghost=\"\" size=\"24\"></ix-icon-button>
        </div>
      </div>
      <div class=\"toast-progress-bar toast-progress-bar--animated\" style=\"animation-duration: 5000ms; animation-play-state: running;\"></div>
    </ix-toast>
      `);
  });
});
