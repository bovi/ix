<!--
SPDX-FileCopyrightText: 2022 Siemens AG

SPDX-License-Identifier: MIT
-->

<!-- Auto generated! Please edit here: packages/react-test-app/src/preview-examples/select-multiple.tsx -->
```tsx
/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { IxSelect, IxSelectItem } from '@siemens/ix-react';
import React, { useLayoutEffect, useState } from 'react';

export const SelectMultiple: React.FC = () => {
  const [selection, setSelection] = useState<string[]>([]);

  useLayoutEffect(() => {
    setSelection(['1', '3']);
  }, [setSelection]);

  return (
    <IxSelect mode="multiple" selectedIndices={selection}>
      <IxSelectItem label="Item 1" value="1"></IxSelectItem>
      <IxSelectItem label="Item 2" value="2"></IxSelectItem>
      <IxSelectItem label="Item 3" value="3"></IxSelectItem>
      <IxSelectItem label="Item 4" value="4"></IxSelectItem>
    </IxSelect>
  );
};
```
