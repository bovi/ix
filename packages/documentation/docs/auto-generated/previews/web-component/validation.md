<!--
SPDX-FileCopyrightText: 2022 Siemens AG

SPDX-License-Identifier: MIT
-->

<!-- Auto generated! Please edit here: packages/html-test-app/src/preview-examples/validation.html -->
```html
<form class="row g-3 needs-validation" novalidate>
  <div class="row">
    <div class="col-md-4">
      <label for="validationCustom01" class="form-label">
        First name
      </label>
      <input
        type="text"
        class="form-control"
        id="validationCustom01"
        value=""
        required
      />
      <div class="valid-feedback">Looks good!</div>
    </div>
  </div>
  <div class="row">
    <div class="col-md-4">
      <label for="validationCustom02" class="form-label"> Last name </label>
      <ix-validation-tooltip message="Cannot be empty!">
        <input
          type="text"
          class="form-control"
          id="validationCustom02"
          value=""
          required
        />
      </ix-validation-tooltip>
      <div class="valid-feedback">Looks good!</div>
    </div>
  </div>
  <div class="row">
    <div class="col-md-4">
      <label for="validationCustomUsername" class="form-label">
        Username
      </label>
      <input
        type="text"
        class="form-control"
        id="validationCustomUsername"
        aria-describedby="inputGroupPrepend"
        required
        minlength="4"
      />
      <div class="invalid-feedback">Please choose a username.</div>
    </div>
  </div>
  <div class="col-12">
    <button class="btn btn-primary" type="submit">Submit form</button>
  </div>
</form>
<script>
  (async () => {
    await window.customElements.whenDefined('ix-validation-tooltip');
    const forms = document.querySelector('form');
    forms.addEventListener('submit', (event) => {
      event.preventDefault();
      forms.classList.add('was-validated');
    });
  })();
</script>
```
