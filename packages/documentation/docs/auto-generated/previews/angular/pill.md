<!--
SPDX-FileCopyrightText: 2022 Siemens AG

SPDX-License-Identifier: MIT
-->

<!-- Auto generated! Please edit here: packages/angular-test-app/src/preview-examples/pill.ts -->
```typescript
/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component } from '@angular/core';

@Component({
  selector: 'app-pill',
  template: `
    <ix-pill variant="custom" color="white" background="purple">
      Label
    </ix-pill>

    <ix-pill>Label</ix-pill>
    <ix-pill outline>Label</ix-pill>
    <ix-pill style="width: 8rem">Label</ix-pill>

    <ix-pill icon="star">Label</ix-pill>
    <ix-pill icon="star" style="width: 8rem"> Label </ix-pill>
    <ix-pill outline alignLeft icon="star" style="width: 8rem"> Label </ix-pill>

    <ix-pill variant="alarm">Label</ix-pill>
    <ix-pill variant="alarm" outline> Label </ix-pill>
    <ix-pill variant="alarm" style="width: 8rem"> Label </ix-pill>

    <ix-pill variant="alarm" icon="star"> Label </ix-pill>
    <ix-pill variant="alarm" icon="star" style="width: 8rem"> Label </ix-pill>
    <ix-pill variant="alarm" outline alignLeft icon="star" style="width: 8rem">
      Label
    </ix-pill>
  `,
})
export class Pill {}
```
