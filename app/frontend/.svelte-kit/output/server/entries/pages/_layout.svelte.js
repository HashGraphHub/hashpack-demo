import { c as create_ssr_component, d as compute_rest_props, e as spread, f as escape_attribute_value, g as escape_object, h as escape, j as createEventDispatcher, b as subscribe, s as setContext, k as set_store_value, l as add_attribute, o as getContext, v as validate_component, p as add_classes, q as each, t as globals, m as missing_component, u as compute_slots } from "../../chunks/index3.js";
import { B as Button, W as WarningFilled, a as WarningAltFilled, T as TextInput } from "../../chunks/TextInput.js";
import { P as PasswordInput } from "../../chunks/PasswordInput.js";
import { w as writable, d as derived } from "../../chunks/index2.js";
import { o as onMount } from "../../chunks/ssr.js";
const all = "";
const ChevronDown = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let labelled;
  let attributes;
  let $$restProps = compute_rest_props($$props, ["size", "title"]);
  let { size = 16 } = $$props;
  let { title = void 0 } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  labelled = $$props["aria-label"] || $$props["aria-labelledby"] || title;
  attributes = {
    "aria-hidden": labelled ? void 0 : true,
    role: labelled ? "img" : void 0,
    focusable: Number($$props["tabindex"]) === 0 ? true : void 0
  };
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { viewBox: "0 0 32 32" },
      { fill: "currentColor" },
      { preserveAspectRatio: "xMidYMid meet" },
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      escape_object(attributes),
      escape_object($$restProps)
    ],
    {}
  )}>${title ? `<title>${escape(title)}</title>` : ``}<path d="${"M16 22L6 12 7.4 10.6 16 19.2 24.6 10.6 26 12z"}"></path></svg>`;
});
const ChevronDown$1 = ChevronDown;
const Close = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let labelled;
  let attributes;
  let $$restProps = compute_rest_props($$props, ["size", "title"]);
  let { size = 16 } = $$props;
  let { title = void 0 } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  labelled = $$props["aria-label"] || $$props["aria-labelledby"] || title;
  attributes = {
    "aria-hidden": labelled ? void 0 : true,
    role: labelled ? "img" : void 0,
    focusable: Number($$props["tabindex"]) === 0 ? true : void 0
  };
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { viewBox: "0 0 32 32" },
      { fill: "currentColor" },
      { preserveAspectRatio: "xMidYMid meet" },
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      escape_object(attributes),
      escape_object($$restProps)
    ],
    {}
  )}>${title ? `<title>${escape(title)}</title>` : ``}<path d="${"M24 9.4L22.6 8 16 14.6 9.4 8 8 9.4 14.6 16 8 22.6 9.4 24 16 17.4 22.6 24 24 22.6 17.4 16 24 9.4z"}"></path></svg>`;
});
const Close$1 = Close;
const modalsOpen = writable(0);
const trackModal = (openStore) => onMount();
modalsOpen.subscribe((openCount) => {
  if (typeof document !== "undefined")
    document.body.classList.toggle("bx--body--with-modal-open", openCount > 0);
});
const ComposedModal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "size",
    "open",
    "danger",
    "preventCloseOnClickOutside",
    "containerClass",
    "selectorPrimaryFocus",
    "ref"
  ]);
  let $openStore, $$unsubscribe_openStore;
  let $label, $$unsubscribe_label;
  let { size = void 0 } = $$props;
  let { open = false } = $$props;
  let { danger = false } = $$props;
  let { preventCloseOnClickOutside = false } = $$props;
  let { containerClass = "" } = $$props;
  let { selectorPrimaryFocus = "[data-modal-primary-focus]" } = $$props;
  let { ref = null } = $$props;
  const dispatch = createEventDispatcher();
  const label = writable(void 0);
  $$unsubscribe_label = subscribe(label, (value) => $label = value);
  let innerModal = null;
  setContext("ComposedModal", {
    closeModal: () => {
      open = false;
    },
    submit: () => {
      dispatch("submit");
      dispatch("click:button--primary");
    },
    declareRef: (ref2) => {
    },
    updateLabel: (value) => {
      label.set(value);
    }
  });
  const openStore = writable(open);
  $$unsubscribe_openStore = subscribe(openStore, (value) => $openStore = value);
  trackModal();
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  if ($$props.danger === void 0 && $$bindings.danger && danger !== void 0)
    $$bindings.danger(danger);
  if ($$props.preventCloseOnClickOutside === void 0 && $$bindings.preventCloseOnClickOutside && preventCloseOnClickOutside !== void 0)
    $$bindings.preventCloseOnClickOutside(preventCloseOnClickOutside);
  if ($$props.containerClass === void 0 && $$bindings.containerClass && containerClass !== void 0)
    $$bindings.containerClass(containerClass);
  if ($$props.selectorPrimaryFocus === void 0 && $$bindings.selectorPrimaryFocus && selectorPrimaryFocus !== void 0)
    $$bindings.selectorPrimaryFocus(selectorPrimaryFocus);
  if ($$props.ref === void 0 && $$bindings.ref && ref !== void 0)
    $$bindings.ref(ref);
  set_store_value(openStore, $openStore = open, $openStore);
  $$unsubscribe_openStore();
  $$unsubscribe_label();
  return `
<div${spread([{ role: "presentation" }, escape_object($$restProps)], {
    classes: "bx--modal " + (open ? "is-visible" : "") + " " + (danger ? "bx--modal--danger" : "")
  })}${add_attribute("this", ref, 0)}>
  <div role="${"dialog"}" aria-modal="${"true"}"${add_attribute("aria-label", $$props["aria-label"] || $label || void 0, 0)} class="${[
    escape(containerClass, true),
    "bx--modal-container " + (size === "xs" ? "bx--modal-container--xs" : "") + " " + (size === "sm" ? "bx--modal-container--sm" : "") + " " + (size === "lg" ? "bx--modal-container--lg" : "")
  ].join(" ").trim()}"${add_attribute("this", innerModal, 0)}>${slots.default ? slots.default({}) : ``}</div></div>`;
});
const ComposedModal$1 = ComposedModal;
const ModalHeader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "title",
    "label",
    "labelClass",
    "titleClass",
    "closeClass",
    "closeIconClass",
    "iconDescription"
  ]);
  let { title = "" } = $$props;
  let { label = "" } = $$props;
  let { labelClass = "" } = $$props;
  let { titleClass = "" } = $$props;
  let { closeClass = "" } = $$props;
  let { closeIconClass = "" } = $$props;
  let { iconDescription = "Close" } = $$props;
  const { closeModal, updateLabel } = getContext("ComposedModal");
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.labelClass === void 0 && $$bindings.labelClass && labelClass !== void 0)
    $$bindings.labelClass(labelClass);
  if ($$props.titleClass === void 0 && $$bindings.titleClass && titleClass !== void 0)
    $$bindings.titleClass(titleClass);
  if ($$props.closeClass === void 0 && $$bindings.closeClass && closeClass !== void 0)
    $$bindings.closeClass(closeClass);
  if ($$props.closeIconClass === void 0 && $$bindings.closeIconClass && closeIconClass !== void 0)
    $$bindings.closeIconClass(closeIconClass);
  if ($$props.iconDescription === void 0 && $$bindings.iconDescription && iconDescription !== void 0)
    $$bindings.iconDescription(iconDescription);
  {
    updateLabel(label);
  }
  return `<div${spread([escape_object($$restProps)], { classes: "bx--modal-header" })}>${label ? `<h2 class="${[
    escape(labelClass, true),
    "bx--modal-header__label bx--type-delta"
  ].join(" ").trim()}">${escape(label)}</h2>` : ``}
  ${title ? `<h3 class="${[
    escape(titleClass, true),
    "bx--modal-header__heading bx--type-beta"
  ].join(" ").trim()}">${escape(title)}</h3>` : ``}
  ${slots.default ? slots.default({}) : ``}
  <button type="${"button"}"${add_attribute("aria-label", iconDescription, 0)} class="${[escape(closeClass, true), "bx--modal-close"].join(" ").trim()}">${validate_component(Close$1, "Close").$$render(
    $$result,
    {
      size: 20,
      class: "bx--modal-close__icon " + closeIconClass,
      "aria-hidden": "true"
    },
    {},
    {}
  )}</button></div>`;
});
const ModalHeader$1 = ModalHeader;
const ModalBody = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["hasForm", "hasScrollingContent"]);
  let { hasForm = false } = $$props;
  let { hasScrollingContent = false } = $$props;
  if ($$props.hasForm === void 0 && $$bindings.hasForm && hasForm !== void 0)
    $$bindings.hasForm(hasForm);
  if ($$props.hasScrollingContent === void 0 && $$bindings.hasScrollingContent && hasScrollingContent !== void 0)
    $$bindings.hasScrollingContent(hasScrollingContent);
  return `
<div${spread(
    [
      {
        tabindex: escape_attribute_value(hasScrollingContent ? "0" : void 0)
      },
      {
        role: escape_attribute_value(hasScrollingContent ? "region" : void 0)
      },
      escape_object($$restProps)
    ],
    {
      classes: "bx--modal-content " + (hasForm ? "bx--modal-content--with-form" : "") + " " + (hasScrollingContent ? "bx--modal-scroll-content" : "")
    }
  )}>${slots.default ? slots.default({}) : ``}</div>
${hasScrollingContent ? `<div${add_classes("bx--modal-content--overflow-indicator".trim())}></div>` : ``}`;
});
const ModalBody$1 = ModalBody;
const ModalFooter = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "primaryButtonText",
    "primaryButtonIcon",
    "primaryButtonDisabled",
    "primaryClass",
    "secondaryButtonText",
    "secondaryButtons",
    "secondaryClass",
    "danger"
  ]);
  let { primaryButtonText = "" } = $$props;
  let { primaryButtonIcon = void 0 } = $$props;
  let { primaryButtonDisabled = false } = $$props;
  let { primaryClass = void 0 } = $$props;
  let { secondaryButtonText = "" } = $$props;
  let { secondaryButtons = [] } = $$props;
  let { secondaryClass = void 0 } = $$props;
  let { danger = false } = $$props;
  createEventDispatcher();
  getContext("ComposedModal");
  if ($$props.primaryButtonText === void 0 && $$bindings.primaryButtonText && primaryButtonText !== void 0)
    $$bindings.primaryButtonText(primaryButtonText);
  if ($$props.primaryButtonIcon === void 0 && $$bindings.primaryButtonIcon && primaryButtonIcon !== void 0)
    $$bindings.primaryButtonIcon(primaryButtonIcon);
  if ($$props.primaryButtonDisabled === void 0 && $$bindings.primaryButtonDisabled && primaryButtonDisabled !== void 0)
    $$bindings.primaryButtonDisabled(primaryButtonDisabled);
  if ($$props.primaryClass === void 0 && $$bindings.primaryClass && primaryClass !== void 0)
    $$bindings.primaryClass(primaryClass);
  if ($$props.secondaryButtonText === void 0 && $$bindings.secondaryButtonText && secondaryButtonText !== void 0)
    $$bindings.secondaryButtonText(secondaryButtonText);
  if ($$props.secondaryButtons === void 0 && $$bindings.secondaryButtons && secondaryButtons !== void 0)
    $$bindings.secondaryButtons(secondaryButtons);
  if ($$props.secondaryClass === void 0 && $$bindings.secondaryClass && secondaryClass !== void 0)
    $$bindings.secondaryClass(secondaryClass);
  if ($$props.danger === void 0 && $$bindings.danger && danger !== void 0)
    $$bindings.danger(danger);
  return `<div${spread([escape_object($$restProps)], {
    classes: "bx--modal-footer " + (secondaryButtons.length === 2 ? "bx--modal-footer--three-button" : "")
  })}>${secondaryButtons.length > 0 ? `${each(secondaryButtons, (button) => {
    return `${validate_component(Button, "Button").$$render($$result, { kind: "secondary" }, {}, {
      default: () => {
        return `${escape(button.text)}
      `;
      }
    })}`;
  })}` : `${secondaryButtonText ? `${validate_component(Button, "Button").$$render($$result, { kind: "secondary", class: secondaryClass }, {}, {
    default: () => {
      return `${escape(secondaryButtonText)}`;
    }
  })}` : ``}`}
  ${primaryButtonText ? `${validate_component(Button, "Button").$$render(
    $$result,
    {
      kind: danger ? "danger" : "primary",
      disabled: primaryButtonDisabled,
      class: primaryClass,
      icon: primaryButtonIcon
    },
    {},
    {
      default: () => {
        return `${escape(primaryButtonText)}`;
      }
    }
  )}` : ``}
  ${slots.default ? slots.default({}) : ``}</div>`;
});
const ModalFooter$1 = ModalFooter;
function clearAll() {
  localStorage.clear();
}
const LocalStorage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { key = "local-storage-key" } = $$props;
  let { value = "" } = $$props;
  function clearItem() {
    localStorage.removeItem(key);
  }
  createEventDispatcher();
  if ($$props.key === void 0 && $$bindings.key && key !== void 0)
    $$bindings.key(key);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.clearItem === void 0 && $$bindings.clearItem && clearItem !== void 0)
    $$bindings.clearItem(clearItem);
  if ($$props.clearAll === void 0 && $$bindings.clearAll && clearAll !== void 0)
    $$bindings.clearAll(clearAll);
  return ``;
});
const LocalStorage$1 = LocalStorage;
const Select = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let errorId;
  let $$restProps = compute_rest_props($$props, [
    "selected",
    "size",
    "inline",
    "light",
    "disabled",
    "id",
    "name",
    "invalid",
    "invalidText",
    "warn",
    "warnText",
    "helperText",
    "noLabel",
    "labelText",
    "hideLabel",
    "ref",
    "required"
  ]);
  let $defaultValue, $$unsubscribe_defaultValue;
  let $$unsubscribe_selectedValue;
  let $$unsubscribe_itemTypesByValue;
  let $defaultSelectId, $$unsubscribe_defaultSelectId;
  let { selected = void 0 } = $$props;
  let { size = void 0 } = $$props;
  let { inline = false } = $$props;
  let { light = false } = $$props;
  let { disabled = false } = $$props;
  let { id = "ccs-" + Math.random().toString(36) } = $$props;
  let { name = void 0 } = $$props;
  let { invalid = false } = $$props;
  let { invalidText = "" } = $$props;
  let { warn = false } = $$props;
  let { warnText = "" } = $$props;
  let { helperText = "" } = $$props;
  let { noLabel = false } = $$props;
  let { labelText = "" } = $$props;
  let { hideLabel = false } = $$props;
  let { ref = null } = $$props;
  let { required = false } = $$props;
  createEventDispatcher();
  const selectedValue = writable(selected);
  $$unsubscribe_selectedValue = subscribe(selectedValue, (value) => value);
  const defaultSelectId = writable(null);
  $$unsubscribe_defaultSelectId = subscribe(defaultSelectId, (value) => $defaultSelectId = value);
  const defaultValue = writable(null);
  $$unsubscribe_defaultValue = subscribe(defaultValue, (value) => $defaultValue = value);
  const itemTypesByValue = writable({});
  $$unsubscribe_itemTypesByValue = subscribe(itemTypesByValue, (value) => value);
  setContext("Select", {
    selectedValue,
    setDefaultValue: (id2, value) => {
      if ($defaultValue === null) {
        defaultSelectId.set(id2);
        defaultValue.set(value);
      } else {
        if ($defaultSelectId === id2) {
          selectedValue.set(value);
        }
      }
      itemTypesByValue.update((types) => ({ ...types, [value]: typeof value }));
    }
  });
  if ($$props.selected === void 0 && $$bindings.selected && selected !== void 0)
    $$bindings.selected(selected);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.inline === void 0 && $$bindings.inline && inline !== void 0)
    $$bindings.inline(inline);
  if ($$props.light === void 0 && $$bindings.light && light !== void 0)
    $$bindings.light(light);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.invalid === void 0 && $$bindings.invalid && invalid !== void 0)
    $$bindings.invalid(invalid);
  if ($$props.invalidText === void 0 && $$bindings.invalidText && invalidText !== void 0)
    $$bindings.invalidText(invalidText);
  if ($$props.warn === void 0 && $$bindings.warn && warn !== void 0)
    $$bindings.warn(warn);
  if ($$props.warnText === void 0 && $$bindings.warnText && warnText !== void 0)
    $$bindings.warnText(warnText);
  if ($$props.helperText === void 0 && $$bindings.helperText && helperText !== void 0)
    $$bindings.helperText(helperText);
  if ($$props.noLabel === void 0 && $$bindings.noLabel && noLabel !== void 0)
    $$bindings.noLabel(noLabel);
  if ($$props.labelText === void 0 && $$bindings.labelText && labelText !== void 0)
    $$bindings.labelText(labelText);
  if ($$props.hideLabel === void 0 && $$bindings.hideLabel && hideLabel !== void 0)
    $$bindings.hideLabel(hideLabel);
  if ($$props.ref === void 0 && $$bindings.ref && ref !== void 0)
    $$bindings.ref(ref);
  if ($$props.required === void 0 && $$bindings.required && required !== void 0)
    $$bindings.required(required);
  errorId = `error-${id}`;
  {
    selectedValue.set(selected ?? $defaultValue);
  }
  $$unsubscribe_defaultValue();
  $$unsubscribe_selectedValue();
  $$unsubscribe_itemTypesByValue();
  $$unsubscribe_defaultSelectId();
  return `<div${spread([escape_object($$restProps)], { classes: "bx--form-item" })}><div${add_classes(("bx--select " + (inline ? "bx--select--inline" : "") + " " + (light ? "bx--select--light" : "") + " " + (invalid ? "bx--select--invalid" : "") + " " + (disabled ? "bx--select--disabled" : "") + " " + (warn ? "bx--select--warning" : "")).trim())}>${!noLabel ? `<label${add_attribute("for", id, 0)}${add_classes(("bx--label " + (hideLabel ? "bx--visually-hidden" : "") + " " + (disabled ? "bx--label--disabled" : "")).trim())}>${slots.labelText ? slots.labelText({}) : `
          ${escape(labelText)}
        `}</label>` : ``}
    ${inline ? `<div${add_classes("bx--select-input--inline__wrapper".trim())}><div${add_attribute("data-invalid", invalid || void 0, 0)}${add_classes("bx--select-input__wrapper".trim())}><select${add_attribute("aria-describedby", invalid ? errorId : void 0, 0)}${add_attribute("aria-invalid", invalid || void 0, 0)} ${disabled || void 0 ? "disabled" : ""} ${required || void 0 ? "required" : ""}${add_attribute("id", id, 0)}${add_attribute("name", name, 0)}${add_classes(("bx--select-input " + (size === "sm" ? "bx--select-input--sm" : "") + " " + (size === "xl" ? "bx--select-input--xl" : "")).trim())}${add_attribute("this", ref, 0)}>${slots.default ? slots.default({}) : ``}</select>
          ${validate_component(ChevronDown$1, "ChevronDown").$$render($$result, { class: "bx--select__arrow" }, {}, {})}
          ${invalid ? `${validate_component(WarningFilled, "WarningFilled").$$render($$result, { class: "bx--select__invalid-icon" }, {}, {})}` : ``}</div>
        ${invalid ? `<div${add_attribute("id", errorId, 0)}${add_classes("bx--form-requirement".trim())}>${escape(invalidText)}</div>` : ``}</div>
      ${helperText ? `<div${add_classes(("bx--form__helper-text " + (disabled ? "bx--form__helper-text--disabled" : "")).trim())}>${escape(helperText)}</div>` : ``}` : ``}
    ${!inline ? `<div${add_attribute("data-invalid", invalid || void 0, 0)}${add_classes("bx--select-input__wrapper".trim())}><select${add_attribute("id", id, 0)}${add_attribute("name", name, 0)}${add_attribute("aria-describedby", invalid ? errorId : void 0, 0)} ${disabled || void 0 ? "disabled" : ""} ${required || void 0 ? "required" : ""}${add_attribute("aria-invalid", invalid || void 0, 0)}${add_classes(("bx--select-input " + (size === "sm" ? "bx--select-input--sm" : "") + " " + (size === "xl" ? "bx--select-input--xl" : "")).trim())}${add_attribute("this", ref, 0)}>${slots.default ? slots.default({}) : ``}</select>
        ${validate_component(ChevronDown$1, "ChevronDown").$$render($$result, { class: "bx--select__arrow" }, {}, {})}
        ${invalid ? `${validate_component(WarningFilled, "WarningFilled").$$render($$result, { class: "bx--select__invalid-icon" }, {}, {})}` : ``}
        ${!invalid && warn ? `${validate_component(WarningAltFilled, "WarningAltFilled").$$render(
    $$result,
    {
      class: "bx--select__invalid-icon bx--select__invalid-icon--warning"
    },
    {},
    {}
  )}` : ``}</div>
      ${!invalid && helperText ? `<div${add_classes(("bx--form__helper-text " + (disabled ? "bx--form__helper-text--disabled" : "")).trim())}>${escape(helperText)}</div>` : ``}
      ${invalid ? `<div${add_attribute("id", errorId, 0)}${add_classes("bx--form-requirement".trim())}>${escape(invalidText)}</div>` : ``}
      ${!invalid && warn ? `<div${add_attribute("id", errorId, 0)}${add_classes("bx--form-requirement".trim())}>${escape(warnText)}</div>` : ``}` : ``}</div></div>`;
});
const Select$1 = Select;
const SelectItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["value", "text", "hidden", "disabled"]);
  let { value = "" } = $$props;
  let { text = "" } = $$props;
  let { hidden = false } = $$props;
  let { disabled = false } = $$props;
  const id = "ccs-" + Math.random().toString(36);
  const ctx = getContext("Select") || getContext("TimePickerSelect");
  let selected = false;
  ctx.selectedValue.subscribe((currentValue) => {
    selected = currentValue === value;
  });
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.hidden === void 0 && $$bindings.hidden && hidden !== void 0)
    $$bindings.hidden(hidden);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  {
    ctx?.setDefaultValue?.(id, value);
  }
  return `<option${add_attribute("value", value, 0)} ${disabled ? "disabled" : ""} ${hidden ? "hidden" : ""} ${selected ? "selected" : ""} class="${[escape($$restProps.class, true), "bx--select-option"].join(" ").trim()}"${add_attribute("style", $$restProps.style, 0)}>${escape(text || value)}</option>`;
});
const SelectItem$1 = SelectItem;
const ProgressIndicator = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["currentIndex", "vertical", "spaceEqually", "preventChangeOnClick"]);
  let $stepsById, $$unsubscribe_stepsById;
  let { currentIndex = 0 } = $$props;
  let { vertical = false } = $$props;
  let { spaceEqually = false } = $$props;
  let { preventChangeOnClick = false } = $$props;
  const dispatch = createEventDispatcher();
  const steps = writable([]);
  const stepsById = derived(steps, ($) => $.reduce((a, c) => ({ ...a, [c.id]: c }), {}));
  $$unsubscribe_stepsById = subscribe(stepsById, (value) => $stepsById = value);
  const preventChangeOnClickStore = writable(preventChangeOnClick);
  setContext("ProgressIndicator", {
    steps,
    stepsById,
    preventChangeOnClick: {
      subscribe: preventChangeOnClickStore.subscribe
    },
    add: (step) => {
      steps.update((_) => {
        if (step.id in $stepsById) {
          return _.map((_step) => {
            if (_step.id === step.id)
              return { ..._step, ...step };
            return _step;
          });
        }
        return [
          ..._,
          {
            ...step,
            index: _.length,
            current: _.length === currentIndex,
            complete: step.complete
          }
        ];
      });
    },
    change: (index) => {
      if (preventChangeOnClick)
        return;
      currentIndex = index;
      dispatch("change", index);
    }
  });
  if ($$props.currentIndex === void 0 && $$bindings.currentIndex && currentIndex !== void 0)
    $$bindings.currentIndex(currentIndex);
  if ($$props.vertical === void 0 && $$bindings.vertical && vertical !== void 0)
    $$bindings.vertical(vertical);
  if ($$props.spaceEqually === void 0 && $$bindings.spaceEqually && spaceEqually !== void 0)
    $$bindings.spaceEqually(spaceEqually);
  if ($$props.preventChangeOnClick === void 0 && $$bindings.preventChangeOnClick && preventChangeOnClick !== void 0)
    $$bindings.preventChangeOnClick(preventChangeOnClick);
  {
    steps.update((_) => _.map((step, i) => ({ ...step, current: i === currentIndex })));
  }
  {
    preventChangeOnClickStore.set(preventChangeOnClick);
  }
  $$unsubscribe_stepsById();
  return `
<ul${spread([escape_object($$restProps)], {
    classes: "bx--progress " + (vertical ? "bx--progress--vertical" : "") + " " + (spaceEqually && !vertical ? "bx--progress--space-equal" : "")
  })}>${slots.default ? slots.default({}) : ``}</ul>`;
});
const ProgressIndicator$1 = ProgressIndicator;
const CheckmarkOutline = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let labelled;
  let attributes;
  let $$restProps = compute_rest_props($$props, ["size", "title"]);
  let { size = 16 } = $$props;
  let { title = void 0 } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  labelled = $$props["aria-label"] || $$props["aria-labelledby"] || title;
  attributes = {
    "aria-hidden": labelled ? void 0 : true,
    role: labelled ? "img" : void 0,
    focusable: Number($$props["tabindex"]) === 0 ? true : void 0
  };
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { viewBox: "0 0 32 32" },
      { fill: "currentColor" },
      { preserveAspectRatio: "xMidYMid meet" },
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      escape_object(attributes),
      escape_object($$restProps)
    ],
    {}
  )}>${title ? `<title>${escape(title)}</title>` : ``}<path d="${"M14 21.414L9 16.413 10.413 15 14 18.586 21.585 11 23 12.415 14 21.414z"}"></path><path d="${"M16,2A14,14,0,1,0,30,16,14,14,0,0,0,16,2Zm0,26A12,12,0,1,1,28,16,12,12,0,0,1,16,28Z"}"></path></svg>`;
});
const CheckmarkOutline$1 = CheckmarkOutline;
const Warning = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let labelled;
  let attributes;
  let $$restProps = compute_rest_props($$props, ["size", "title"]);
  let { size = 16 } = $$props;
  let { title = void 0 } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  labelled = $$props["aria-label"] || $$props["aria-labelledby"] || title;
  attributes = {
    "aria-hidden": labelled ? void 0 : true,
    role: labelled ? "img" : void 0,
    focusable: Number($$props["tabindex"]) === 0 ? true : void 0
  };
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { viewBox: "0 0 32 32" },
      { fill: "currentColor" },
      { preserveAspectRatio: "xMidYMid meet" },
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      escape_object(attributes),
      escape_object($$restProps)
    ],
    {}
  )}>${title ? `<title>${escape(title)}</title>` : ``}<path d="${"M16,2A14,14,0,1,0,30,16,14,14,0,0,0,16,2Zm0,26A12,12,0,1,1,28,16,12,12,0,0,1,16,28Z"}"></path><path d="${"M15 8H17V19H15zM16 22a1.5 1.5 0 101.5 1.5A1.5 1.5 0 0016 22z"}"></path></svg>`;
});
const Warning$1 = Warning;
const CircleDash = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let labelled;
  let attributes;
  let $$restProps = compute_rest_props($$props, ["size", "title"]);
  let { size = 16 } = $$props;
  let { title = void 0 } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  labelled = $$props["aria-label"] || $$props["aria-labelledby"] || title;
  attributes = {
    "aria-hidden": labelled ? void 0 : true,
    role: labelled ? "img" : void 0,
    focusable: Number($$props["tabindex"]) === 0 ? true : void 0
  };
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { viewBox: "0 0 32 32" },
      { fill: "currentColor" },
      { preserveAspectRatio: "xMidYMid meet" },
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      escape_object(attributes),
      escape_object($$restProps)
    ],
    {}
  )}>${title ? `<title>${escape(title)}</title>` : ``}<path d="${"M7.7 4.7a14.7 14.7 0 00-3 3.1L6.3 9A13.26 13.26 0 018.9 6.3zM4.6 12.3l-1.9-.6A12.51 12.51 0 002 16H4A11.48 11.48 0 014.6 12.3zM2.7 20.4a14.4 14.4 0 002 3.9l1.6-1.2a12.89 12.89 0 01-1.7-3.3zM7.8 27.3a14.4 14.4 0 003.9 2l.6-1.9A12.89 12.89 0 019 25.7zM11.7 2.7l.6 1.9A11.48 11.48 0 0116 4V2A12.51 12.51 0 0011.7 2.7zM24.2 27.3a15.18 15.18 0 003.1-3.1L25.7 23A11.53 11.53 0 0123 25.7zM27.4 19.7l1.9.6A15.47 15.47 0 0030 16H28A11.48 11.48 0 0127.4 19.7zM29.2 11.6a14.4 14.4 0 00-2-3.9L25.6 8.9a12.89 12.89 0 011.7 3.3zM24.1 4.6a14.4 14.4 0 00-3.9-2l-.6 1.9a12.89 12.89 0 013.3 1.7zM20.3 29.3l-.6-1.9A11.48 11.48 0 0116 28v2A21.42 21.42 0 0020.3 29.3z"}"></path></svg>`;
});
const CircleDash$1 = CircleDash;
const Incomplete = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let labelled;
  let attributes;
  let $$restProps = compute_rest_props($$props, ["size", "title"]);
  let { size = 16 } = $$props;
  let { title = void 0 } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  labelled = $$props["aria-label"] || $$props["aria-labelledby"] || title;
  attributes = {
    "aria-hidden": labelled ? void 0 : true,
    role: labelled ? "img" : void 0,
    focusable: Number($$props["tabindex"]) === 0 ? true : void 0
  };
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { viewBox: "0 0 32 32" },
      { fill: "currentColor" },
      { preserveAspectRatio: "xMidYMid meet" },
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      escape_object(attributes),
      escape_object($$restProps)
    ],
    {}
  )}>${title ? `<title>${escape(title)}</title>` : ``}<path d="${"M23.7642 6.8593l1.2851-1.5315A13.976 13.976 0 0020.8672 2.887l-.6836 1.8776A11.9729 11.9729 0 0123.7642 6.8593zM27.81 14l1.9677-.4128A13.8888 13.8888 0 0028.14 9.0457L26.4087 10A12.52 12.52 0 0127.81 14zM20.1836 27.2354l.6836 1.8776a13.976 13.976 0 004.1821-2.4408l-1.2851-1.5315A11.9729 11.9729 0 0120.1836 27.2354zM26.4087 22L28.14 23a14.14 14.14 0 001.6382-4.5872L27.81 18.0659A12.1519 12.1519 0 0126.4087 22zM16 30V2a14 14 0 000 28z"}"></path></svg>`;
});
const Incomplete$1 = Incomplete;
const ProgressStep = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "complete",
    "current",
    "disabled",
    "invalid",
    "description",
    "label",
    "secondaryLabel",
    "id"
  ]);
  let $preventChangeOnClick, $$unsubscribe_preventChangeOnClick;
  let { complete = false } = $$props;
  let { current = false } = $$props;
  let { disabled = false } = $$props;
  let { invalid = false } = $$props;
  let { description = "" } = $$props;
  let { label = "" } = $$props;
  let { secondaryLabel = "" } = $$props;
  let { id = "ccs-" + Math.random().toString(36) } = $$props;
  let step = {};
  const { stepsById, add, change, preventChangeOnClick } = getContext("ProgressIndicator");
  $$unsubscribe_preventChangeOnClick = subscribe(preventChangeOnClick, (value) => $preventChangeOnClick = value);
  stepsById.subscribe((value) => {
    if (value[id]) {
      step = value[id];
      current = step.current;
      complete = step.complete;
    }
  });
  if ($$props.complete === void 0 && $$bindings.complete && complete !== void 0)
    $$bindings.complete(complete);
  if ($$props.current === void 0 && $$bindings.current && current !== void 0)
    $$bindings.current(current);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.invalid === void 0 && $$bindings.invalid && invalid !== void 0)
    $$bindings.invalid(invalid);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.secondaryLabel === void 0 && $$bindings.secondaryLabel && secondaryLabel !== void 0)
    $$bindings.secondaryLabel(secondaryLabel);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  {
    add({ id, complete, disabled });
  }
  $$unsubscribe_preventChangeOnClick();
  return `
<li${spread(
    [
      {
        "aria-disabled": escape_attribute_value(disabled)
      },
      { id: escape_attribute_value(id) },
      escape_object($$restProps)
    ],
    {
      classes: "bx--progress-step " + (current ? "bx--progress-step--current" : "") + " " + (complete ? "bx--progress-step--complete" : "") + " " + (!complete && !current ? "bx--progress-step--incomplete" : "") + " " + (disabled ? "bx--progress-step--disabled" : "")
    }
  )}><button type="${"button"}" ${disabled ? "disabled" : ""}${add_attribute("aria-disabled", disabled, 0)}${add_attribute("tabindex", !current && !disabled ? "0" : "-1", 0)}${add_classes(("bx--progress-step-button " + (current || $preventChangeOnClick ? "bx--progress-step-button--unclickable" : "")).trim())}>${invalid ? `${validate_component(Warning$1, "Warning").$$render(
    $$result,
    {
      class: "bx--progress__warning",
      title: description
    },
    {},
    {}
  )}` : `${current ? `${validate_component(Incomplete$1, "Incomplete").$$render($$result, { title: description }, {}, {})}` : `${complete ? `${validate_component(CheckmarkOutline$1, "CheckmarkOutline").$$render($$result, { title: description }, {}, {})}` : `${validate_component(CircleDash$1, "CircleDash").$$render($$result, { title: description }, {}, {})}`}`}`}
    <div${add_classes("bx--progress-text".trim())}>${slots.default ? slots.default({ props: { class: "bx--progress-label" } }) : `
        <p${add_classes("bx--progress-label".trim())}>${escape(label)}</p>
      `}
      ${secondaryLabel ? `<p${add_classes("bx--progress-optional".trim())}>${escape(secondaryLabel)}</p>` : ``}</div>
    <span${add_classes("bx--progress-line".trim())}></span></button></li>`;
});
const ProgressStep$1 = ProgressStep;
const Toggle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "size",
    "toggled",
    "disabled",
    "labelA",
    "labelB",
    "labelText",
    "hideLabel",
    "id",
    "name"
  ]);
  let { size = "default" } = $$props;
  let { toggled = false } = $$props;
  let { disabled = false } = $$props;
  let { labelA = "Off" } = $$props;
  let { labelB = "On" } = $$props;
  let { labelText = "" } = $$props;
  let { hideLabel = false } = $$props;
  let { id = "ccs-" + Math.random().toString(36) } = $$props;
  let { name = void 0 } = $$props;
  const dispatch = createEventDispatcher();
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.toggled === void 0 && $$bindings.toggled && toggled !== void 0)
    $$bindings.toggled(toggled);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.labelA === void 0 && $$bindings.labelA && labelA !== void 0)
    $$bindings.labelA(labelA);
  if ($$props.labelB === void 0 && $$bindings.labelB && labelB !== void 0)
    $$bindings.labelB(labelB);
  if ($$props.labelText === void 0 && $$bindings.labelText && labelText !== void 0)
    $$bindings.labelText(labelText);
  if ($$props.hideLabel === void 0 && $$bindings.hideLabel && hideLabel !== void 0)
    $$bindings.hideLabel(hideLabel);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  {
    dispatch("toggle", { toggled });
  }
  return `
<div${spread(
    [
      escape_object($$restProps),
      {
        style: escape($$restProps["style"], true) + "; user-select: none"
      }
    ],
    { classes: "bx--form-item" }
  )}>
  <input role="${"switch"}" type="${"checkbox"}" ${toggled ? "checked" : ""} ${disabled ? "disabled" : ""}${add_attribute("id", id, 0)}${add_attribute("name", name, 0)}${add_classes(("bx--toggle-input " + (size === "sm" ? "bx--toggle-input--small" : "")).trim())}>
  <label${add_attribute(
    "aria-label",
    labelText ? void 0 : $$props["aria-label"] || "Toggle",
    0
  )}${add_attribute("for", id, 0)}${add_classes("bx--toggle-input__label".trim())}><span${add_classes((hideLabel ? "bx--visually-hidden" : "").trim())}>${slots.labelText ? slots.labelText({}) : `
        ${escape(labelText)}
      `}</span>
    <span${add_attribute("style", hideLabel && "margin-top: 0", 0)}${add_classes("bx--toggle__switch".trim())}><span aria-hidden="${"true"}"${add_classes("bx--toggle__text--off".trim())}>${slots.labelA ? slots.labelA({}) : `
          ${escape(labelA)}
        `}</span>
      <span aria-hidden="${"true"}"${add_classes("bx--toggle__text--on".trim())}>${slots.labelB ? slots.labelB({}) : `
          ${escape(labelB)}
        `}</span></span></label></div>`;
});
const Toggle$1 = Toggle;
const { Object: Object_1 } = globals;
const Theme = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { theme = "white" } = $$props;
  let { tokens = {} } = $$props;
  let { persist = false } = $$props;
  let { persistKey = "theme" } = $$props;
  let { render = void 0 } = $$props;
  let { toggle = {
    themes: ["white", "g100"],
    labelA: "",
    labelB: "",
    labelText: "Dark mode",
    hideLabel: false
  } } = $$props;
  const themes = {
    white: "White",
    g10: "Gray 10",
    g80: "Gray 80",
    g90: "Gray 90",
    g100: "Gray 100"
  };
  const themeKeys = Object.keys(themes);
  let { select = {
    themes: themeKeys,
    labelText: "Themes",
    hideLabel: false
  } } = $$props;
  const dispatch = createEventDispatcher();
  if ($$props.theme === void 0 && $$bindings.theme && theme !== void 0)
    $$bindings.theme(theme);
  if ($$props.tokens === void 0 && $$bindings.tokens && tokens !== void 0)
    $$bindings.tokens(tokens);
  if ($$props.persist === void 0 && $$bindings.persist && persist !== void 0)
    $$bindings.persist(persist);
  if ($$props.persistKey === void 0 && $$bindings.persistKey && persistKey !== void 0)
    $$bindings.persistKey(persistKey);
  if ($$props.render === void 0 && $$bindings.render && render !== void 0)
    $$bindings.render(render);
  if ($$props.toggle === void 0 && $$bindings.toggle && toggle !== void 0)
    $$bindings.toggle(toggle);
  if ($$props.select === void 0 && $$bindings.select && select !== void 0)
    $$bindings.select(select);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      if (typeof window !== "undefined") {
        Object.entries(tokens).forEach(([token, value]) => {
          document.documentElement.style.setProperty(`--cds-${token}`, value);
        });
        if (theme in themes) {
          document.documentElement.setAttribute("theme", theme);
          dispatch("update", { theme });
        } else {
          console.warn(`[Theme.svelte] invalid theme "${theme}". Value must be one of: ${JSON.stringify(Object.keys(themes))}`);
        }
      }
    }
    $$rendered = `${persist ? `${validate_component(LocalStorage$1, "LocalStorage").$$render(
      $$result,
      { key: persistKey, value: theme },
      {
        value: ($$value) => {
          theme = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : ``}

${render === "toggle" ? `${validate_component(Toggle$1, "Toggle").$$render($$result, Object_1.assign({}, toggle, { toggled: theme === toggle.themes[1] }), {}, {})}` : `${render === "select" ? `${validate_component(Select$1, "Select").$$render(
      $$result,
      Object_1.assign({}, select, { selected: theme }),
      {
        selected: ($$value) => {
          theme = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${each(select.themes, (theme2) => {
            return `${validate_component(SelectItem$1, "SelectItem").$$render($$result, { value: theme2, text: themes[theme2] }, {}, {})}`;
          })}`;
        }
      }
    )}` : ``}`}

${slots.default ? slots.default({ theme }) : ``}`;
  } while (!$$settled);
  return $$rendered;
});
const Theme$1 = Theme;
const Menu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let labelled;
  let attributes;
  let $$restProps = compute_rest_props($$props, ["size", "title"]);
  let { size = 16 } = $$props;
  let { title = void 0 } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  labelled = $$props["aria-label"] || $$props["aria-labelledby"] || title;
  attributes = {
    "aria-hidden": labelled ? void 0 : true,
    role: labelled ? "img" : void 0,
    focusable: Number($$props["tabindex"]) === 0 ? true : void 0
  };
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { viewBox: "0 0 32 32" },
      { fill: "currentColor" },
      { preserveAspectRatio: "xMidYMid meet" },
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      escape_object(attributes),
      escape_object($$restProps)
    ],
    {}
  )}>${title ? `<title>${escape(title)}</title>` : ``}<path d="${"M4 6H28V8H4zM4 24H28V26H4zM4 12H28V14H4zM4 18H28V20H4z"}"></path></svg>`;
});
const Menu$1 = Menu;
const shouldRenderHamburgerMenu = writable(false);
const isSideNavCollapsed = writable(false);
const isSideNavRail = writable(false);
const HamburgerMenu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["ariaLabel", "isOpen", "iconMenu", "iconClose", "ref"]);
  let { ariaLabel = void 0 } = $$props;
  let { isOpen = false } = $$props;
  let { iconMenu = Menu$1 } = $$props;
  let { iconClose = Close$1 } = $$props;
  let { ref = null } = $$props;
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  if ($$props.isOpen === void 0 && $$bindings.isOpen && isOpen !== void 0)
    $$bindings.isOpen(isOpen);
  if ($$props.iconMenu === void 0 && $$bindings.iconMenu && iconMenu !== void 0)
    $$bindings.iconMenu(iconMenu);
  if ($$props.iconClose === void 0 && $$bindings.iconClose && iconClose !== void 0)
    $$bindings.iconClose(iconClose);
  if ($$props.ref === void 0 && $$bindings.ref && ref !== void 0)
    $$bindings.ref(ref);
  return `<button${spread(
    [
      { type: "button" },
      { title: escape_attribute_value(ariaLabel) },
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      escape_object($$restProps)
    ],
    {
      classes: "bx--header__action bx--header__menu-trigger bx--header__menu-toggle"
    }
  )}${add_attribute("this", ref, 0)}>${validate_component((isOpen ? iconClose : iconMenu) || missing_component, "svelte:component").$$render($$result, { size: 20 }, {}, {})}</button>`;
});
const HamburgerMenu$1 = HamburgerMenu;
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let ariaLabel;
  let $$restProps = compute_rest_props($$props, [
    "expandedByDefault",
    "isSideNavOpen",
    "uiShellAriaLabel",
    "href",
    "company",
    "platformName",
    "persistentHamburgerMenu",
    "expansionBreakpoint",
    "ref",
    "iconMenu",
    "iconClose"
  ]);
  let $shouldRenderHamburgerMenu, $$unsubscribe_shouldRenderHamburgerMenu;
  $$unsubscribe_shouldRenderHamburgerMenu = subscribe(shouldRenderHamburgerMenu, (value) => $shouldRenderHamburgerMenu = value);
  let { expandedByDefault = true } = $$props;
  let { isSideNavOpen = false } = $$props;
  let { uiShellAriaLabel = void 0 } = $$props;
  let { href = void 0 } = $$props;
  let { company = void 0 } = $$props;
  let { platformName = "" } = $$props;
  let { persistentHamburgerMenu = false } = $$props;
  let { expansionBreakpoint = 1056 } = $$props;
  let { ref = null } = $$props;
  let { iconMenu = Menu$1 } = $$props;
  let { iconClose = Close$1 } = $$props;
  let winWidth = void 0;
  if ($$props.expandedByDefault === void 0 && $$bindings.expandedByDefault && expandedByDefault !== void 0)
    $$bindings.expandedByDefault(expandedByDefault);
  if ($$props.isSideNavOpen === void 0 && $$bindings.isSideNavOpen && isSideNavOpen !== void 0)
    $$bindings.isSideNavOpen(isSideNavOpen);
  if ($$props.uiShellAriaLabel === void 0 && $$bindings.uiShellAriaLabel && uiShellAriaLabel !== void 0)
    $$bindings.uiShellAriaLabel(uiShellAriaLabel);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.company === void 0 && $$bindings.company && company !== void 0)
    $$bindings.company(company);
  if ($$props.platformName === void 0 && $$bindings.platformName && platformName !== void 0)
    $$bindings.platformName(platformName);
  if ($$props.persistentHamburgerMenu === void 0 && $$bindings.persistentHamburgerMenu && persistentHamburgerMenu !== void 0)
    $$bindings.persistentHamburgerMenu(persistentHamburgerMenu);
  if ($$props.expansionBreakpoint === void 0 && $$bindings.expansionBreakpoint && expansionBreakpoint !== void 0)
    $$bindings.expansionBreakpoint(expansionBreakpoint);
  if ($$props.ref === void 0 && $$bindings.ref && ref !== void 0)
    $$bindings.ref(ref);
  if ($$props.iconMenu === void 0 && $$bindings.iconMenu && iconMenu !== void 0)
    $$bindings.iconMenu(iconMenu);
  if ($$props.iconClose === void 0 && $$bindings.iconClose && iconClose !== void 0)
    $$bindings.iconClose(iconClose);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    isSideNavOpen = expandedByDefault && winWidth >= expansionBreakpoint && !persistentHamburgerMenu;
    ariaLabel = company ? `${company} ` : "" + (uiShellAriaLabel || $$props["aria-label"] || platformName);
    $$rendered = `

<header${add_attribute("aria-label", ariaLabel, 0)}${add_classes("bx--header".trim())}>${slots["skip-to-content"] ? slots["skip-to-content"]({}) : ``}
  ${$shouldRenderHamburgerMenu && winWidth < expansionBreakpoint || persistentHamburgerMenu ? `${validate_component(HamburgerMenu$1, "HamburgerMenu").$$render(
      $$result,
      {
        iconClose,
        iconMenu,
        isOpen: isSideNavOpen
      },
      {
        isOpen: ($$value) => {
          isSideNavOpen = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : ``}
  <a${spread([{ href: escape_attribute_value(href) }, escape_object($$restProps)], { classes: "bx--header__name" })}${add_attribute("this", ref, 0)}>${company ? `<span${add_classes("bx--header__name--prefix".trim())}>${escape(company)} </span>` : ``}
    ${slots.platform ? slots.platform({}) : `${escape(platformName)}`}</a>
  ${slots.default ? slots.default({}) : ``}</header>`;
  } while (!$$settled);
  $$unsubscribe_shouldRenderHamburgerMenu();
  return $$rendered;
});
const Header$1 = Header;
const Switcher = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let labelled;
  let attributes;
  let $$restProps = compute_rest_props($$props, ["size", "title"]);
  let { size = 16 } = $$props;
  let { title = void 0 } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  labelled = $$props["aria-label"] || $$props["aria-labelledby"] || title;
  attributes = {
    "aria-hidden": labelled ? void 0 : true,
    role: labelled ? "img" : void 0,
    focusable: Number($$props["tabindex"]) === 0 ? true : void 0
  };
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { viewBox: "0 0 32 32" },
      { fill: "currentColor" },
      { preserveAspectRatio: "xMidYMid meet" },
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      escape_object(attributes),
      escape_object($$restProps)
    ],
    {}
  )}>${title ? `<title>${escape(title)}</title>` : ``}<path d="${"M14 4H18V8H14zM4 4H8V8H4zM24 4H28V8H24zM14 14H18V18H14zM4 14H8V18H4zM24 14H28V18H24zM14 24H18V28H14zM4 24H8V28H4zM24 24H28V28H24z"}"></path></svg>`;
});
const Switcher$1 = Switcher;
const HeaderAction_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ".action-text.svelte-187bdaq.svelte-187bdaq{display:inline-flex;align-items:center;width:auto;padding:0 1rem 2px 1rem;font-size:0.875rem;line-height:1.28572;letter-spacing:0.16px;color:#f4f4f4}.action-text.svelte-187bdaq>span.svelte-187bdaq{margin-left:0.75rem}",
  map: null
};
const HeaderAction = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["isOpen", "icon", "closeIcon", "text", "ref", "transition"]);
  let { isOpen = false } = $$props;
  let { icon = Switcher$1 } = $$props;
  let { closeIcon = Close$1 } = $$props;
  let { text = void 0 } = $$props;
  let { ref = null } = $$props;
  let { transition = { duration: 200 } } = $$props;
  createEventDispatcher();
  let refPanel = null;
  if ($$props.isOpen === void 0 && $$bindings.isOpen && isOpen !== void 0)
    $$bindings.isOpen(isOpen);
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  if ($$props.closeIcon === void 0 && $$bindings.closeIcon && closeIcon !== void 0)
    $$bindings.closeIcon(closeIcon);
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.ref === void 0 && $$bindings.ref && ref !== void 0)
    $$bindings.ref(ref);
  if ($$props.transition === void 0 && $$bindings.transition && transition !== void 0)
    $$bindings.transition(transition);
  $$result.css.add(css$3);
  return `

<button${spread([{ type: "button" }, escape_object($$restProps)], {
    classes: "bx--header__action " + (isOpen ? "bx--header__action--active" : "") + " " + (text ? "action-text" : "") + " svelte-187bdaq"
  })}${add_attribute("this", ref, 0)}>${isOpen ? `${slots.closeIcon ? slots.closeIcon({}) : `
      ${validate_component(closeIcon || missing_component, "svelte:component").$$render($$result, { size: 20 }, {}, {})}
    `}` : `${slots.icon ? slots.icon({}) : `
      ${validate_component(icon || missing_component, "svelte:component").$$render($$result, { size: 20 }, {}, {})}
    `}`}
  ${slots.text ? slots.text({}) : `
    ${text ? `<span class="${"svelte-187bdaq"}">${escape(text)}</span>` : ``}
  `}</button>
${isOpen ? `<div${add_classes("bx--header-panel bx--header-panel--expanded".trim())}${add_attribute("this", refPanel, 0)}>${slots.default ? slots.default({}) : ``}</div>` : ``}`;
});
const HeaderAction$1 = HeaderAction;
const HeaderPanelDivider_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "li.svelte-1tbdbmc{margin:2rem 1rem 0;color:#525252}span.svelte-1tbdbmc{font-size:0.75rem;line-height:1.3;letter-spacing:0.02rem;color:#c6c6c6}",
  map: null
};
const HeaderPanelDivider = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$slots = compute_slots(slots);
  $$result.css.add(css$2);
  return `${$$slots.default ? `<li class="${"svelte-1tbdbmc"}"><span class="${"svelte-1tbdbmc"}">${slots.default ? slots.default({}) : ``}</span></li>` : ``}
<hr${add_classes("bx--switcher__item--divider".trim())}>`;
});
const HeaderPanelDivider$1 = HeaderPanelDivider;
const HeaderPanelLink = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["href", "ref"]);
  let { href = void 0 } = $$props;
  let { ref = null } = $$props;
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.ref === void 0 && $$bindings.ref && ref !== void 0)
    $$bindings.ref(ref);
  return `<li${add_classes("bx--switcher__item".trim())}><a${spread(
    [
      { href: escape_attribute_value(href) },
      {
        rel: escape_attribute_value($$restProps.target === "_blank" ? "noopener noreferrer" : void 0)
      },
      escape_object($$restProps)
    ],
    {
      classes: "bx--switcher__item-link"
    }
  )}${add_attribute("this", ref, 0)}>${slots.default ? slots.default({}) : ``}</a></li>`;
});
const HeaderPanelLink$1 = HeaderPanelLink;
const HeaderPanelLinks = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<ul${add_classes("bx--switcher__item".trim())}>${slots.default ? slots.default({}) : ``}</ul>`;
});
const HeaderPanelLinks$1 = HeaderPanelLinks;
const HeaderUtilities = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div${add_classes("bx--header__global".trim())}>${slots.default ? slots.default({}) : ``}</div>`;
});
const HeaderUtilities$1 = HeaderUtilities;
const SideNav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["fixed", "rail", "ariaLabel", "isOpen", "expansionBreakpoint"]);
  let $isSideNavRail, $$unsubscribe_isSideNavRail;
  let $isSideNavCollapsed, $$unsubscribe_isSideNavCollapsed;
  $$unsubscribe_isSideNavRail = subscribe(isSideNavRail, (value) => $isSideNavRail = value);
  $$unsubscribe_isSideNavCollapsed = subscribe(isSideNavCollapsed, (value) => $isSideNavCollapsed = value);
  let { fixed = false } = $$props;
  let { rail = false } = $$props;
  let { ariaLabel = void 0 } = $$props;
  let { isOpen = false } = $$props;
  let { expansionBreakpoint = 1056 } = $$props;
  const dispatch = createEventDispatcher();
  let winWidth = void 0;
  if ($$props.fixed === void 0 && $$bindings.fixed && fixed !== void 0)
    $$bindings.fixed(fixed);
  if ($$props.rail === void 0 && $$bindings.rail && rail !== void 0)
    $$bindings.rail(rail);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  if ($$props.isOpen === void 0 && $$bindings.isOpen && isOpen !== void 0)
    $$bindings.isOpen(isOpen);
  if ($$props.expansionBreakpoint === void 0 && $$bindings.expansionBreakpoint && expansionBreakpoint !== void 0)
    $$bindings.expansionBreakpoint(expansionBreakpoint);
  {
    dispatch(isOpen ? "open" : "close");
  }
  set_store_value(isSideNavCollapsed, $isSideNavCollapsed = !isOpen, $isSideNavCollapsed);
  set_store_value(isSideNavRail, $isSideNavRail = rail, $isSideNavRail);
  $$unsubscribe_isSideNavRail();
  $$unsubscribe_isSideNavCollapsed();
  return `

${!fixed ? `
  <div${add_attribute("style", isOpen && "z-index: 6000", 0)}${add_classes(("bx--side-nav__overlay " + (isOpen ? "bx--side-nav__overlay-active" : "")).trim())}></div>` : ``}
<nav${spread(
    [
      {
        "aria-hidden": escape_attribute_value(!isOpen)
      },
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      escape_object($$restProps)
    ],
    {
      classes: "bx--side-nav__navigation bx--side-nav bx--side-nav--ux " + ((rail && winWidth >= expansionBreakpoint ? false : isOpen) ? "bx--side-nav--expanded" : "") + " " + (!isOpen && !rail ? "bx--side-nav--collapsed" : "") + " " + (rail ? "bx--side-nav--rail" : "")
    }
  )}>${slots.default ? slots.default({}) : ``}</nav>`;
});
const SideNav$1 = SideNav;
const SideNavItems = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<ul${add_classes("bx--side-nav__items".trim())}>${slots.default ? slots.default({}) : ``}</ul>`;
});
const SideNavItems$1 = SideNavItems;
const SideNavLink = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["isSelected", "href", "text", "icon", "ref"]);
  let $$slots = compute_slots(slots);
  let { isSelected = false } = $$props;
  let { href = void 0 } = $$props;
  let { text = void 0 } = $$props;
  let { icon = void 0 } = $$props;
  let { ref = null } = $$props;
  if ($$props.isSelected === void 0 && $$bindings.isSelected && isSelected !== void 0)
    $$bindings.isSelected(isSelected);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  if ($$props.ref === void 0 && $$bindings.ref && ref !== void 0)
    $$bindings.ref(ref);
  return `<li${add_classes("bx--side-nav__item".trim())}><a${spread(
    [
      {
        "aria-current": escape_attribute_value(isSelected ? "page" : void 0)
      },
      { href: escape_attribute_value(href) },
      {
        rel: escape_attribute_value($$restProps.target === "_blank" ? "noopener noreferrer" : void 0)
      },
      escape_object($$restProps)
    ],
    {
      classes: "bx--side-nav__link " + (isSelected ? "bx--side-nav__link--current" : "")
    }
  )}${add_attribute("this", ref, 0)}>${$$slots.icon || icon ? `<div${add_classes("bx--side-nav__icon bx--side-nav__icon--small".trim())}>${slots.icon ? slots.icon({}) : `
          ${validate_component(icon || missing_component, "svelte:component").$$render($$result, {}, {}, {})}
        `}</div>` : ``}
    <span${add_classes("bx--side-nav__link-text".trim())}>${slots.default ? slots.default({}) : `
        ${escape(text)}
      `}</span></a></li>`;
});
const SideNavLink$1 = SideNavLink;
const SideNavMenu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["expanded", "text", "icon", "ref"]);
  let $$slots = compute_slots(slots);
  let { expanded = false } = $$props;
  let { text = void 0 } = $$props;
  let { icon = void 0 } = $$props;
  let { ref = null } = $$props;
  if ($$props.expanded === void 0 && $$bindings.expanded && expanded !== void 0)
    $$bindings.expanded(expanded);
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  if ($$props.ref === void 0 && $$bindings.ref && ref !== void 0)
    $$bindings.ref(ref);
  return `<li${add_classes(("bx--side-nav__item " + (icon ? "bx--side-nav__item--icon" : "")).trim())}><button${spread(
    [
      { type: "button" },
      {
        "aria-expanded": escape_attribute_value(expanded)
      },
      escape_object($$restProps)
    ],
    {
      classes: "bx--side-nav__submenu"
    }
  )}${add_attribute("this", ref, 0)}>${$$slots.icon || icon ? `<div${add_classes("bx--side-nav__icon".trim())}>${slots.icon ? slots.icon({}) : `
          ${validate_component(icon || missing_component, "svelte:component").$$render($$result, {}, {}, {})}
        `}</div>` : ``}
    <span${add_classes("bx--side-nav__submenu-title".trim())}>${escape(text)}</span>
    <div${add_classes("bx--side-nav__icon bx--side-nav__icon--small bx--side-nav__submenu-chevron".trim())}>${validate_component(ChevronDown$1, "ChevronDown").$$render($$result, {}, {}, {})}</div></button>
  <ul role="${"menu"}"${add_attribute("style", expanded && "max-height: none", 0)}${add_classes("bx--side-nav__menu".trim())}>${slots.default ? slots.default({}) : ``}</ul></li>`;
});
const SideNavMenu$1 = SideNavMenu;
const SideNavMenuItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["isSelected", "href", "text", "ref"]);
  let { isSelected = false } = $$props;
  let { href = void 0 } = $$props;
  let { text = void 0 } = $$props;
  let { ref = null } = $$props;
  if ($$props.isSelected === void 0 && $$bindings.isSelected && isSelected !== void 0)
    $$bindings.isSelected(isSelected);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.ref === void 0 && $$bindings.ref && ref !== void 0)
    $$bindings.ref(ref);
  return `<li${add_classes("bx--side-nav__menu-item".trim())}><a${spread(
    [
      {
        "aria-current": escape_attribute_value(isSelected ? "page" : void 0)
      },
      { href: escape_attribute_value(href) },
      escape_object($$restProps)
    ],
    {
      classes: "bx--side-nav__link"
    }
  )}${add_attribute("this", ref, 0)}><span${add_classes("bx--side-nav__link-text".trim())}>${slots.default ? slots.default({}) : `${escape(text)}`}</span></a></li>`;
});
const SideNavMenuItem$1 = SideNavMenuItem;
const Content = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let unsetLeftMargin;
  let $$restProps = compute_rest_props($$props, ["id"]);
  let $isSideNavRail, $$unsubscribe_isSideNavRail;
  let $isSideNavCollapsed, $$unsubscribe_isSideNavCollapsed;
  $$unsubscribe_isSideNavRail = subscribe(isSideNavRail, (value) => $isSideNavRail = value);
  $$unsubscribe_isSideNavCollapsed = subscribe(isSideNavCollapsed, (value) => $isSideNavCollapsed = value);
  let { id = "main-content" } = $$props;
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  unsetLeftMargin = $isSideNavCollapsed && !$isSideNavRail;
  $$unsubscribe_isSideNavRail();
  $$unsubscribe_isSideNavCollapsed();
  return `<main${spread(
    [
      { id: escape_attribute_value(id) },
      escape_object($$restProps),
      {
        style: escape(unsetLeftMargin ? "margin-left: 0;" : "", true) + " " + escape($$restProps.style, true)
      }
    ],
    { classes: "bx--content" }
  )}>${slots.default ? slots.default({}) : ``}</main>`;
});
const Content$1 = Content;
const SkipToContent = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["href", "tabindex"]);
  let { href = "#main-content" } = $$props;
  let { tabindex = "0" } = $$props;
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.tabindex === void 0 && $$bindings.tabindex && tabindex !== void 0)
    $$bindings.tabindex(tabindex);
  return `<a${spread(
    [
      { href: escape_attribute_value(href) },
      {
        tabindex: escape_attribute_value(tabindex)
      },
      escape_object($$restProps)
    ],
    {
      classes: "bx--skip-to-content"
    }
  )}>${slots.default ? slots.default({}) : `Skip to main content`}</a>`;
});
const SkipToContent$1 = SkipToContent;
const SettingsAdjust = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let labelled;
  let attributes;
  let $$restProps = compute_rest_props($$props, ["size", "title"]);
  let { size = 16 } = $$props;
  let { title = void 0 } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  labelled = $$props["aria-label"] || $$props["aria-labelledby"] || title;
  attributes = {
    "aria-hidden": labelled ? void 0 : true,
    role: labelled ? "img" : void 0,
    focusable: Number($$props["tabindex"]) === 0 ? true : void 0
  };
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { viewBox: "0 0 32 32" },
      { fill: "currentColor" },
      { preserveAspectRatio: "xMidYMid meet" },
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      escape_object(attributes),
      escape_object($$restProps)
    ],
    {}
  )}>${title ? `<title>${escape(title)}</title>` : ``}<path d="${"M30 8h-4.1c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2h14.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30V8zM21 12c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3S22.7 12 21 12zM2 24h4.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30v-2H15.9c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2V24zM11 20c1.7 0 3 1.3 3 3s-1.3 3-3 3-3-1.3-3-3S9.3 20 11 20z"}"></path></svg>`;
});
const UserAvatarFilledAlt = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let labelled;
  let attributes;
  let $$restProps = compute_rest_props($$props, ["size", "title"]);
  let { size = 16 } = $$props;
  let { title = void 0 } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  labelled = $$props["aria-label"] || $$props["aria-labelledby"] || title;
  attributes = {
    "aria-hidden": labelled ? void 0 : true,
    role: labelled ? "img" : void 0,
    focusable: Number($$props["tabindex"]) === 0 ? true : void 0
  };
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { viewBox: "0 0 32 32" },
      { fill: "currentColor" },
      { preserveAspectRatio: "xMidYMid meet" },
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      escape_object(attributes),
      escape_object($$restProps)
    ],
    {}
  )}>${title ? `<title>${escape(title)}</title>` : ``}<path d="${"M16,8a5,5,0,1,0,5,5A5,5,0,0,0,16,8Z"}"></path><path d="${"M16,2A14,14,0,1,0,30,16,14.0158,14.0158,0,0,0,16,2Zm7.9925,22.9258A5.0016,5.0016,0,0,0,19,20H13a5.0016,5.0016,0,0,0-4.9925,4.9258,12,12,0,1,1,15.985,0Z"}"></path></svg>`;
});
const PersonalData = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { personalData = {} } = $$props;
  let passwordDoNotMatch = false;
  if ($$props.personalData === void 0 && $$bindings.personalData && personalData !== void 0)
    $$bindings.personalData(personalData);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    passwordDoNotMatch = personalData.pw2 && personalData.pw !== personalData.pw2 ? true : false;
    $$rendered = `${validate_component(TextInput, "TextInput").$$render(
      $$result,
      {
        labelText: "Name",
        placeholder: "John Doe",
        value: personalData.name
      },
      {
        value: ($$value) => {
          personalData.name = $$value;
          $$settled = false;
        }
      },
      {}
    )}
${validate_component(TextInput, "TextInput").$$render(
      $$result,
      {
        labelText: "Email",
        placeholder: "john@doe.com",
        value: personalData.email
      },
      {
        value: ($$value) => {
          personalData.email = $$value;
          $$settled = false;
        }
      },
      {}
    )}
${validate_component(PasswordInput, "PasswordInput").$$render(
      $$result,
      {
        tooltipAlignment: "start",
        tooltipPosition: "left",
        labelText: "Password",
        placeholder: "Enter password...",
        value: personalData.pw
      },
      {
        value: ($$value) => {
          personalData.pw = $$value;
          $$settled = false;
        }
      },
      {}
    )}
${validate_component(PasswordInput, "PasswordInput").$$render(
      $$result,
      {
        tooltipAlignment: "start",
        tooltipPosition: "left",
        labelText: "Confirm password",
        placeholder: "Enter password...",
        value: personalData.pw2
      },
      {
        value: ($$value) => {
          personalData.pw2 = $$value;
          $$settled = false;
        }
      },
      {}
    )}
${passwordDoNotMatch ? `<p>Passwords do not match.</p>` : ``}`;
  } while (!$$settled);
  return $$rendered;
});
const index_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".bx--form-item{margin-bottom:1rem}",
  map: null
};
const Signup = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  let { open } = $$props;
  let checked = false;
  let formContent = { personalData: {}, hederaData: {} };
  let currentIndex = 0;
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  $$result.css.add(css$1);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    checked = formContent.personalData.name && formContent.personalData.email && formContent.personalData.pw && formContent.personalData.pw2 && formContent.personalData.pw === formContent.personalData.pw2 ? true : false;
    $$rendered = `${validate_component(ComposedModal$1, "ComposedModal").$$render(
      $$result,
      { preventCloseOnClickOutside: true, open },
      {
        open: ($$value) => {
          open = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(ModalHeader$1, "ModalHeader").$$render(
            $$result,
            {
              label: "Sign up",
              title: "Create an account"
            },
            {},
            {
              default: () => {
                return `${validate_component(ProgressIndicator$1, "ProgressIndicator").$$render($$result, { currentIndex, spaceEqually: true }, {}, {
                  default: () => {
                    return `${validate_component(ProgressStep$1, "ProgressStep").$$render(
                      $$result,
                      {
                        complete: true,
                        label: "Step 1",
                        description: "The progress indicator will listen for clicks on the steps"
                      },
                      {},
                      {}
                    )}
			${validate_component(ProgressStep$1, "ProgressStep").$$render(
                      $$result,
                      {
                        complete: true,
                        label: "Step 2",
                        description: "The progress indicator will listen for clicks on the steps"
                      },
                      {},
                      {}
                    )}`;
                  }
                })}`;
              }
            }
          )}

	${validate_component(ModalBody$1, "ModalBody").$$render($$result, { hasForm: true }, {}, {
            default: () => {
              return `${`${validate_component(PersonalData, "PersonalData").$$render(
                $$result,
                { personalData: formContent.personalData },
                {
                  personalData: ($$value) => {
                    formContent.personalData = $$value;
                    $$settled = false;
                  }
                },
                {}
              )}`}
		${``}`;
            }
          })}
	${validate_component(ModalFooter$1, "ModalFooter").$$render(
            $$result,
            {
              secondaryButtonText: "Already have an account? Sign in",
              primaryButtonText: "Proceed",
              primaryButtonDisabled: !checked
            },
            {},
            {}
          )}`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const Login = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  let { open } = $$props;
  let checked = false;
  let email = "";
  let pw = "";
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    checked = email && pw ? true : false;
    $$rendered = `${validate_component(ComposedModal$1, "ComposedModal").$$render(
      $$result,
      { preventCloseOnClickOutside: true, open },
      {
        open: ($$value) => {
          open = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(ModalHeader$1, "ModalHeader").$$render(
            $$result,
            {
              label: "Sign in",
              title: "Login to your account"
            },
            {},
            {}
          )}
	${validate_component(ModalBody$1, "ModalBody").$$render($$result, { hasForm: true }, {}, {
            default: () => {
              return `${validate_component(TextInput, "TextInput").$$render(
                $$result,
                {
                  labelText: "Email",
                  placeholder: "john@doe.com",
                  value: email
                },
                {
                  value: ($$value) => {
                    email = $$value;
                    $$settled = false;
                  }
                },
                {}
              )}
		${validate_component(PasswordInput, "PasswordInput").$$render(
                $$result,
                {
                  tooltipAlignment: "start",
                  tooltipPosition: "left",
                  labelText: "Password",
                  placeholder: "Enter password...",
                  value: pw
                },
                {
                  value: ($$value) => {
                    pw = $$value;
                    $$settled = false;
                  }
                },
                {}
              )}`;
            }
          })}
	${validate_component(ModalFooter$1, "ModalFooter").$$render(
            $$result,
            {
              secondaryButtonText: "Don't have an account? Sign up",
              primaryButtonText: "Proceed",
              primaryButtonDisabled: !checked
            },
            {},
            {}
          )}`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".toggle-theme.svelte-qmmb20{display:inline-block;margin-top:14px;margin-right:14px;padding:0;border:0;-webkit-appearance:none;-moz-appearance:none;appearance:none;background:none;width:156px}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let isSideNavOpen = false;
  let isOpen1 = false;
  let isOpen2 = false;
  let signUpOpen = false;
  let logInOpen = false;
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(Signup, "Signup").$$render(
      $$result,
      { open: signUpOpen },
      {
        open: ($$value) => {
          signUpOpen = $$value;
          $$settled = false;
        }
      },
      {}
    )}
${validate_component(Login, "Login").$$render(
      $$result,
      { open: logInOpen },
      {
        open: ($$value) => {
          logInOpen = $$value;
          $$settled = false;
        }
      },
      {}
    )}

${validate_component(Header$1, "Header").$$render(
      $$result,
      {
        company: "IBM",
        platformName: "Carbon Svelte",
        isSideNavOpen
      },
      {
        isSideNavOpen: ($$value) => {
          isSideNavOpen = $$value;
          $$settled = false;
        }
      },
      {
        "skip-to-content": () => {
          return `${validate_component(SkipToContent$1, "SkipToContent").$$render($$result, {}, {}, {})}
	`;
        },
        default: () => {
          return `${validate_component(HeaderUtilities$1, "HeaderUtilities").$$render($$result, {}, {}, {
            default: () => {
              return `<div class="${"toggle-theme svelte-qmmb20"}">${validate_component(Theme$1, "Theme").$$render(
                $$result,
                {
                  render: "toggle",
                  toggle: {
                    themes: ["g10", "g90"],
                    labelA: "Enable dark mode",
                    labelB: "Enable dark mode",
                    hideLabel: true,
                    size: "sm"
                  },
                  persist: true,
                  persistKey: "__carbon-theme"
                },
                {},
                {}
              )}</div>

		${validate_component(HeaderAction$1, "HeaderAction").$$render(
                $$result,
                { icon: SettingsAdjust, isOpen: isOpen1 },
                {
                  isOpen: ($$value) => {
                    isOpen1 = $$value;
                    $$settled = false;
                  }
                },
                {
                  default: () => {
                    return `${validate_component(HeaderPanelLinks$1, "HeaderPanelLinks").$$render($$result, {}, {}, {
                      default: () => {
                        return `${validate_component(HeaderPanelDivider$1, "HeaderPanelDivider").$$render($$result, {}, {}, {
                          default: () => {
                            return `Theme`;
                          }
                        })}
				${validate_component(HeaderPanelLink$1, "HeaderPanelLink").$$render($$result, {}, {}, {
                          default: () => {
                            return `Hello`;
                          }
                        })}`;
                      }
                    })}`;
                  }
                }
              )}

		${validate_component(HeaderAction$1, "HeaderAction").$$render(
                $$result,
                {
                  icon: UserAvatarFilledAlt,
                  isOpen: isOpen2
                },
                {
                  isOpen: ($$value) => {
                    isOpen2 = $$value;
                    $$settled = false;
                  }
                },
                {
                  default: () => {
                    return `${validate_component(HeaderPanelLinks$1, "HeaderPanelLinks").$$render($$result, {}, {}, {
                      default: () => {
                        return `${validate_component(HeaderPanelDivider$1, "HeaderPanelDivider").$$render($$result, {}, {}, {
                          default: () => {
                            return `Authentication`;
                          }
                        })}
				${validate_component(HeaderPanelLink$1, "HeaderPanelLink").$$render($$result, { href: "/login" }, {}, {
                          default: () => {
                            return `Log in`;
                          }
                        })}
				${validate_component(HeaderPanelLink$1, "HeaderPanelLink").$$render($$result, { href: "/signup" }, {}, {
                          default: () => {
                            return `Register`;
                          }
                        })}

				${validate_component(HeaderPanelDivider$1, "HeaderPanelDivider").$$render($$result, {}, {}, {
                          default: () => {
                            return `Switcher subject 2`;
                          }
                        })}
				${validate_component(HeaderPanelLink$1, "HeaderPanelLink").$$render($$result, {}, {}, {
                          default: () => {
                            return `Switcher item 1`;
                          }
                        })}
				${validate_component(HeaderPanelLink$1, "HeaderPanelLink").$$render($$result, {}, {}, {
                          default: () => {
                            return `Switcher item 2`;
                          }
                        })}
				${validate_component(HeaderPanelLink$1, "HeaderPanelLink").$$render($$result, {}, {}, {
                          default: () => {
                            return `Switcher item 3`;
                          }
                        })}
				${validate_component(HeaderPanelLink$1, "HeaderPanelLink").$$render($$result, {}, {}, {
                          default: () => {
                            return `Switcher item 4`;
                          }
                        })}
				${validate_component(HeaderPanelLink$1, "HeaderPanelLink").$$render($$result, {}, {}, {
                          default: () => {
                            return `Switcher item 5`;
                          }
                        })}`;
                      }
                    })}`;
                  }
                }
              )}`;
            }
          })}`;
        }
      }
    )}

${validate_component(SideNav$1, "SideNav").$$render(
      $$result,
      { isOpen: isSideNavOpen },
      {
        isOpen: ($$value) => {
          isSideNavOpen = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(SideNavItems$1, "SideNavItems").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(SideNavLink$1, "SideNavLink").$$render($$result, { href: "/account", text: "My Account" }, {}, {})}
		${validate_component(SideNavLink$1, "SideNavLink").$$render($$result, { text: "Link 2" }, {}, {})}
		${validate_component(SideNavLink$1, "SideNavLink").$$render($$result, { text: "Link 3" }, {}, {})}
		${validate_component(SideNavMenu$1, "SideNavMenu").$$render($$result, { text: "Menu" }, {}, {
                default: () => {
                  return `${validate_component(SideNavMenuItem$1, "SideNavMenuItem").$$render($$result, { href: "/info", text: "INfo" }, {}, {})}
			${validate_component(SideNavMenuItem$1, "SideNavMenuItem").$$render($$result, { href: "/", text: "Link 2" }, {}, {})}
			${validate_component(SideNavMenuItem$1, "SideNavMenuItem").$$render($$result, { href: "/", text: "Link 3" }, {}, {})}`;
                }
              })}`;
            }
          })}`;
        }
      }
    )}

${validate_component(Content$1, "Content").$$render($$result, {}, {}, {
      default: () => {
        return `${slots.default ? slots.default({}) : ``}`;
      }
    })}`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Layout as default
};
