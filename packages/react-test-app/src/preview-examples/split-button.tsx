/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { IxSplitButton, IxSplitButtonItem } from '@siemens/ix-react';
import React from 'react';

export const Splitbutton: React.FC = () => {
  return (
    <IxSplitButton label="Action text">
      <IxSplitButtonItem label="Item 1"></IxSplitButtonItem>
      <IxSplitButtonItem label="Item 2"></IxSplitButtonItem>
    </IxSplitButton>
  );
};
