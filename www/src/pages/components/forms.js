import { graphql } from 'gatsby';
import React from 'react';
import Callout from '../../components/Callout';
import ComponentApi from '../../components/ComponentApi';
import LinkedHeading from '../../components/LinkedHeading';
import ReactPlayground from '../../components/ReactPlayground';
import FormBasic from '../../examples/Form/Basic';
import Check from '../../examples/Form/Check';
import CheckApi from '../../examples/Form/CheckApi';
import CheckCustom from '../../examples/Form/CheckCustom';
import CheckCustomInline from '../../examples/Form/CheckCustomInline';
import CheckInline from '../../examples/Form/CheckInline';
import FormFile from '../../examples/Form/FormFile';
import FormDisabled from '../../examples/Form/FormDisabled';
import FormDisabledInputs from '../../examples/Form/FormDisabledInputs';
import FormGroup from '../../examples/Form/FormGroup';
import FormRow from '../../examples/Form/FormRow';
import FormText from '../../examples/Form/FormText';
import FormTextInline from '../../examples/Form/FormTextInline';
import FormLabelSizing from '../../examples/Form/FormLabelSizing';
import GridAutoSizing from '../../examples/Form/GridAutoSizing';
import GridAutoSizingCustom from '../../examples/Form/GridAutoSizingCustom';
import GridAutoSizingColMix from '../../examples/Form/GridAutoSizingColMix';
import GridBasic from '../../examples/Form/GridBasic';
import GridColSizes from '../../examples/Form/GridColSizes';
import GridComplex from '../../examples/Form/GridComplex';
import Horizontal from '../../examples/Form/Horizontal';
import Inline from '../../examples/Form/Inline';
import InlineCustom from '../../examples/Form/InlineCustom';
import InputReadOnly from '../../examples/Form/InputReadOnly';
import FormInputSizes from '../../examples/Form/InputSizes';
import NoLabels from '../../examples/Form/NoLabels';
import Plaintext from '../../examples/Form/Plaintext';
import Switch from '../../examples/Form/Switch';
import Range from '../../examples/Form/Range';
import RangeCustom from '../../examples/Form/RangeCustom';
import SelectCustom from '../../examples/Form/SelectCustom';
import SelectCustomSize from '../../examples/Form/SelectCustomSize';
import SelectCustomHtmlSize from '../../examples/Form/SelectCustomHtmlSize';
import SelectSizes from '../../examples/Form/SelectSizes';
import File from '../../examples/Form/File';
import FileButtonTextHTML from '../../examples/Form/FileButtonTextHTML';
import FileButtonTextScss from '../../examples/Form/FileButtonTextScss';
import FileApi from '../../examples/Form/FileApi';
import FormTextControls from '../../examples/Form/TextControls';
import ValidationFormik from '../../examples/Form/ValidationFormik';
import ValidationNative from '../../examples/Form/ValidationNative';
import ValidationTooltips from '../../examples/Form/ValidationTooltips';
import withLayout from '../../withLayout';

export default withLayout(function FormControlsSection({ data }) {
  return (
    <>
      <LinkedHeading h="1" id="forms">
        Forms
      </LinkedHeading>
      <p>
        The <code>{'<FormControl>'}</code> component renders a form control with
        Bootstrap styling. The <code>{'<FormGroup>'}</code> component wraps a
        form control with proper spacing, along with support for a label, help
        text, and validation state. To ensure accessibility, set{' '}
        <code>controlId</code> on <code>{'<FormGroup>'}</code>, and use{' '}
        <code>{'<FormLabel>'}</code> for the label.
      </p>
      <ReactPlayground codeText={FormBasic} />
      <p>
        The <code>{'<FormControl>'}</code> component directly renders the{' '}
        <code>{'<input>'}</code> or other specified component. If you need to
        access the value of an uncontrolled <code>{'<FormControl>'}</code>,
        attach a <code>ref</code> to it as you would with an uncontrolled input,
        then call <code>ReactDOM.findDOMNode(ref)</code> to get the DOM node.
        You can then interact with that node as you would with any other
        uncontrolled input.
      </p>
      <p>
        If your application contains a large number of form groups, we recommend
        building a higher-level component encapsulating a complete field group
        that renders the label, the control, and any other necessary components.
        We don't provide this out-of-the-box, because the composition of those
        field groups is too specific to an individual application to admit a
        good one-size-fits-all solution.
      </p>
      <LinkedHeading h="2" id="forms-controls">
        Form controls
      </LinkedHeading>
      <p>
        For textual form controls—like <code>input</code>s, <code>select</code>
        s, and <code>textarea</code>s—use the <code>FormControl</code>{' '}
        component. FormControl adds some additional styles for general
        appearance, focus state, sizing, and more.
      </p>
      <ReactPlayground codeText={FormTextControls} />
      <p>
        For file inputs, use <code>Form.File</code>.
      </p>
      <ReactPlayground codeText={FormFile} />
      <LinkedHeading h="3" id="forms-input-sizes">
        Sizing
      </LinkedHeading>
      <p>
        Use <code>size</code> on <code>{'<FormControl>'}</code> and{' '}
        <code>{'<FormLabel>'}</code> to change the size of inputs and labels
        respectively.
      </p>
      <ReactPlayground codeText={FormInputSizes} />
      <ReactPlayground codeText={SelectSizes} />
      <LinkedHeading h="3" id="forms-input-readonly">
        Readonly
      </LinkedHeading>
      <p>
        Add the <code>readOnly</code> prop on an input to prevent modification
        of the input's value. Read-only inputs appear lighter (just like
        disabled inputs), but retain the standard cursor.
      </p>
      <ReactPlayground codeText={InputReadOnly} />
      <LinkedHeading h="3" id="forms-input-plaintext">
        Readonly plain text
      </LinkedHeading>
      <p>
        If you want to have readonly elements in your form styled as plain text,
        use the <code>plaintext</code> prop on FormControls to remove the
        default form field styling and preserve the correct margin and padding.
      </p>
      <ReactPlayground codeText={Plaintext} />
      <LinkedHeading h="2" id="forms-range">
        Range Inputs
      </LinkedHeading>
      <ReactPlayground codeText={Range} />
      <LinkedHeading h="2" id="forms-form-check">
        Checkboxes and Radios
      </LinkedHeading>
      <p>
        For the non-textual checkbox and radio controls, <code>FormCheck</code>{' '}
        provides a single component for both types that adds some additional
        styling and improved layout.
      </p>
      <LinkedHeading h="3" id="forms-check-stacked">
        Default (stacked)
      </LinkedHeading>
      <p>
        By default, any number of checkboxes and radios that are immediate
        sibling will be vertically stacked and appropriately spaced with
        FormCheck.
      </p>
      <ReactPlayground codeText={Check} />
      <LinkedHeading h="3" id="forms-check-inline">
        Inline
      </LinkedHeading>
      <p>
        Group checkboxes or radios on the same horizontal row by adding the{' '}
        <code>inline</code> prop.
      </p>
      <ReactPlayground codeText={CheckInline} />
      <LinkedHeading h="3" id="forms-check-without-labels">
        Without labels
      </LinkedHeading>
      <p>
        When you render a FormCheck without a label (no <code>children</code>)
        some additional styling is applied to keep the inputs from collapsing.{' '}
        <strong>
          Remember to add an <code>aria-label</code> when omitting labels!
        </strong>
      </p>
      <ReactPlayground codeText={NoLabels} />

      <LinkedHeading h="3" id="forms-check-api">
        Customizing FormCheck rendering
      </LinkedHeading>

      <p>
        When you need tighter control, or want to customize how the{' '}
        <code>FormCheck</code> component renders, it may better to use it's
        constituent parts directly.
      </p>
      <p>
        By provided <code>children</code> to the <code>FormCheck</code> you can
        forgo the default rendering and handle it yourself. (You can still
        provide an <code>id</code> to the <code>FormCheck</code> or{' '}
        <code>FormGroup</code> and have it propagate to the label and input).
      </p>
      <ReactPlayground codeText={CheckApi} />

      <LinkedHeading h="2" id="forms-layout">
        Layout
      </LinkedHeading>
      <p>
        FormControl and FormCheck both apply <code>display: block</code> with{' '}
        <code>width: 100%</code> to controls, which means they stack vertically
        by default. Additional components and props can be used to vary this
        layout on a per-form basis.
      </p>
      <LinkedHeading h="3" id="forms-layout-group">
        Form groups
      </LinkedHeading>
      <p>
        The <code>FormGroup</code> component is the easiest way to add some
        structure to forms. It provides a flexible container for grouping of
        labels, controls, optional help text, and form validation messaging. By
        default it only applies margin-bottom, but it picks up additional styles
        in <code>{'<Form inline >'}</code> as needed. Use it with{' '}
        <code>fieldset</code>s, <code>div</code>s, or nearly any other element.
      </p>
      <p>
        You also add the <code>controlId</code> prop to accessibly wire the
        nested label and input together via the <code>id</code>.
      </p>
      <ReactPlayground codeText={FormGroup} />
      <LinkedHeading h="3" id="forms-layout-grid">
        Form grid
      </LinkedHeading>
      <p>
        More complex forms can be built using the grid components. Use these for
        form layouts that require multiple columns, varied widths, and
        additional alignment options.
      </p>
      <ReactPlayground codeText={GridBasic} />
      <LinkedHeading h="4" id="forms-layout-form-row">
        Form row
      </LinkedHeading>
      <p>
        You may also swap <code>{'<Row>'}</code> for <code>{'<Form.Row>'}</code>
        , a variation of the standard grid row that overrides the default column
        gutters for tighter and more compact layouts.
      </p>
      <ReactPlayground codeText={FormRow} />
      <p>More complex layouts can also be created with the grid system.</p>
      <ReactPlayground codeText={GridComplex} />
      <LinkedHeading h="4" id="horizontal-forms">
        Horizontal form
      </LinkedHeading>
      <p>
        You may also swap <code>{'<Row>'}</code> for <code>{'<Form.Row>'}</code>
        , a variation of the standard grid row that overrides the default column
        gutters for tighter and more compact layouts.
      </p>
      <ReactPlayground codeText={Horizontal} />
      <LinkedHeading h="4" id="horizontal-forms-label-sizing">
        Horizontal form label sizing
      </LinkedHeading>
      <p>
        You can size the <code>{'<FormLabel>'}</code> using the column prop as
        shown.
      </p>
      <ReactPlayground codeText={FormLabelSizing} />
      <LinkedHeading h="4" id="forms-col-sizing">
        Column sizing
      </LinkedHeading>
      <p>
        As shown in the previous examples, our grid system allows you to place
        any number of <code>{'<Col>'}</code>s within a <code>{'<Row>'}</code> or{' '}
        <code>{'<Form.Row>'}</code>. They'll split the available width equally
        between them. You may also pick a subset of your columns to take up more
        or less space, while the remaining <code>{'<Col>'}</code>s equally split
        the rest, with specific column classes like{' '}
        <code>{'<Col xs={7}>'}</code>.
      </p>
      <ReactPlayground codeText={GridColSizes} />
      <LinkedHeading h="4" id="forms-auto-sizing">
        Auto-sizing
      </LinkedHeading>
      <p>
        The example below uses a flexbox utility to vertically center the
        contents and changes <code>{'<Col>'}</code> to{' '}
        <code>{'<Col xs="auto">'}</code> so that your columns only take up as
        much space as needed. Put another way, the column sizes itself based on
        on the contents.
      </p>
      <ReactPlayground codeText={GridAutoSizing} />
      <p>
        You can then remix that once again with size-specific column classes.
      </p>
      <ReactPlayground codeText={GridAutoSizingColMix} />
      <p>
        And of course <a href="#forms-custom">custom form controls</a> are
        supported.
      </p>
      <ReactPlayground codeText={GridAutoSizingCustom} />
      <LinkedHeading h="3" id="forms-inline">
        Inline forms
      </LinkedHeading>
      <p>
        Use the <code>inline</code> prop to display a series of labels, form
        controls, and buttons on a single horizontal row. Form controls within
        forms vary slightly from their default states.
      </p>
      <ul>
        <li>
          Controls are <code>display: flex</code>, collapsing any HTML white
          space and allowing you to provide alignment control with spacing and
          utilities.
        </li>
        <li>
          Controls and input groups receive <code>width: auto</code> to override
          the Bootstrap default <code>width: 100%</code>.
        </li>
        <li>
          Controls{' '}
          <b>only appear inline in viewports that are at least 576px wide</b> to
          account for narrow viewports on mobile devices.
        </li>
      </ul>
      <p>
        You may need to manually address the width and alignment of individual
        form controls with spacing utilities (as shown below). Lastly, be sure
        to always include a <code>{'<Form.Label>'}</code> with each form
        control, even if you need to hide it from non-screenreader visitors with
        the <code>srOnly</code> prop.
      </p>
      <ReactPlayground codeText={Inline} />
      <p>Custom form controls and selects are also supported.</p>
      <ReactPlayground codeText={InlineCustom} />
      <Callout>
        <h5>Alternatives to hidden labels</h5>
        Assistive technologies such as screen readers will have trouble with
        your forms if you don’t include a label for every input. For these
        inline forms, you can hide the labels using the <code>srOnly</code>{' '}
        prop. There are further alternative methods of providing a label for
        assistive technologies, such as the <code>aria-label</code>,{' '}
        <code>aria-labelledby</code> or <code>title</code> attribute. If none of
        these are present, assistive technologies may resort to using the{' '}
        <code>placeholder</code> attribute, if present, but note that use of{' '}
        <code>placeholder</code> as a replacement for other labelling methods is
        not advised.
      </Callout>
      <LinkedHeading h="2" id="forms-help-text">
        Help text
      </LinkedHeading>
      <p>
        Block-level help text in forms can be created using{' '}
        <code>{'<Form.Text>'}</code>. Inline help text can be flexibly
        implemented using any inline HTML element and utility classes like
        <code>.text-muted</code>.
      </p>
      <Callout>
        <h5>Associating help text with form controls</h5>
        Help text should be explicitly associated with the form control it
        relates to using the <code>aria-describedby</code> attribute. This will
        ensure that assistive technologies—such as screen readers—will announce
        this help text when the user focuses or enters the control.
      </Callout>
      <p>
        Help text below inputs can be styled with <code>{'<Form.Text>'}</code>.
        This component includes <code>display: block</code> and adds some top
        margin for easy spacing from the inputs above.
      </p>
      <ReactPlayground codeText={FormText} />
      <p>
        Inline text can use any typical inline HTML element (be it a{' '}
        <code>{'<small>'}</code>, <code>{'<span>'}</code>, or something else)
        with nothing more than a utility class.
      </p>
      <ReactPlayground codeText={FormTextInline} />
      <LinkedHeading h="2" id="forms-disabled">
        Disabled forms
      </LinkedHeading>
      <p>
        Add the <code>disabled</code> boolean attribute on an input to prevent
        user interactions and make it appear lighter.
      </p>
      <ReactPlayground codeText={FormDisabledInputs} />
      <p>
        Add the <code>disabled</code> attribute to a <code>{'<fieldset>'}</code>{' '}
        to disable all the controls within.
      </p>
      <ReactPlayground codeText={FormDisabled} />
      <Callout>
        <h5>Caveat with anchors</h5>
        By default, browsers will treat all native form controls (
        <code>{'<input>'}</code>, <code>{'<select>'}</code> and{' '}
        <code>{'<button>'}</code> elements) inside a{' '}
        <code>{'<fieldset disabled>'}</code> as disabled, preventing both
        keyboard and mouse interactions on them. However, if your form also
        includes <code>{'<a ... class="btn btn-*">'}</code> elements, these will
        only be given a style of <code>pointer-events: none</code>. As noted in
        the section about{' '}
        <a href="/components/buttons/#disabled-state">
          disabled state for buttons
        </a>{' '}
        (and specifically in the sub-section for anchor elements), this CSS
        property is not yet standardized and isn’t fully supported in Internet
        Explorer 10, and won’t prevent keyboard users from being able to focus
        or activate these links. So to be safe, use custom JavaScript to disable
        such links.
      </Callout>
      <Callout theme="danger">
        <h4>Cross-browser compatibility</h4>
        While Bootstrap will apply these styles in all browsers, Internet
        Explorer 11 and below don’t fully support the <code>disabled</code>{' '}
        attribute on a <code>{'<fieldset>'}</code>. Use custom JavaScript to
        disable the fieldset in these browsers.
      </Callout>
      <LinkedHeading h="2" id="forms-validation">
        Validation
      </LinkedHeading>
      <p>
        Provide valuable, actionable feedback to your users with form validation
        feedback.
      </p>
      <LinkedHeading h="3" id="forms-validation-native">
        Native HTML5 form validation
      </LinkedHeading>
      <p>
        For native HTML form validation–
        <a href="https://caniuse.com/#feat=form-validation">
          available in all our supported browsers
        </a>
        , the <code>:valid</code> and <code>:invalid</code> pseudo selectors are
        used to apply validation styles as well as display feedback messages.
      </p>
      <p>
        Bootstrap scopes the <code>:valid</code> and <code>:invalid</code>{' '}
        styles to parent <code>.was-validated</code> class, usually applied to
        the <code>{'<Form>'}</code> (you can use the <code>validated</code> prop
        as a shortcut). Otherwise, any required field without a value shows up
        as invalid on page load. This way, you may choose when to activate them
        (typically after form submission is attempted).
      </p>
      <Callout>
        Watch out! Browsers provide their own validation UI by default on{' '}
        <code>form</code>s. You can disable the default UI by adding the HTML{' '}
        <code>noValidate</code> attribute to your <code>{'<Form>'}</code> or{' '}
        <code>{'<form>'}</code> element.
      </Callout>
      <ReactPlayground codeText={ValidationNative} />

      <LinkedHeading h="3" id="forms-validation-libraries">
        Form libraries and server-rendered styles
      </LinkedHeading>
      <p>
        It's often beneficial (especially in React) to handle form validation
        via a library like Formik, or react-formal. In those cases,{' '}
        <code>isValid</code> and <code>isInvalid</code> props can be added to
        form controls to manually apply validation styles. Below is a quick
        example integrating with{' '}
        <a href="https://github.com/jaredpalmer/formik">Formik</a>.
      </p>
      <ReactPlayground codeText={ValidationFormik} />

      <LinkedHeading h="3" id="forms-validation-tooltips">
        Tooltips
      </LinkedHeading>
      <p>
        If your form layout allows it, you can use the <code>tooltip</code> prop
        to display validation feedback in a styled tooltip. Be sure to have a
        parent with <code>position: relative</code> on it for tooltip
        positioning. In the example below, our column classes have this already,
        but your project may require an alternative setup.
      </p>
      <ReactPlayground codeText={ValidationTooltips} />

      <LinkedHeading h="3" id="forms-validation-examples">
        Examples
      </LinkedHeading>

      <LinkedHeading h="2" id="forms-custom">
        Custom forms
      </LinkedHeading>
      <p>
        For even more customization and cross browser consistency, use our
        completely custom form elements to replace the browser defaults. They’re
        built on top of semantic and accessible markup, so they’re solid
        replacements for any default form control.
      </p>
      <LinkedHeading h="3" id="forms-custom-checkboxes-and-radios">
        Checkboxes and radios
      </LinkedHeading>
      <p>
        Custom checkbox and radio styles are achieved with a resourceful use of
        the <code>:checked</code> selector and <code>:after</code> pseudo
        elements, but are Structurally similar to the default{' '}
        <code>FormCheck</code>. By default the checked and indeterminate icons
        use embedded svg icons from{' '}
        <a href="https://useiconic.com/open">Open Iconic</a>.
      </p>

      <p>
        Apply Bootstrap's custom elements by adding the <code>custom</code>{' '}
        prop.
      </p>
      <ReactPlayground codeText={CheckCustom} />

      <LinkedHeading h="3" id="forms-custom-switch">
        Switches
      </LinkedHeading>
      <p>
        A switch has the markup of a custom checkbox but uses{' '}
        <code>type="switch"</code> to render a toggle switch. Switches also
        support the same customizable children as <code>{'<FormCheck>'}</code>.
      </p>

      <ReactPlayground codeText={Switch} />
      <Callout>
        You can also use the <code>{'<Form.Switch>'}</code> alias which
        encapsulates the above, in a very small component wrapper.
      </Callout>
      <Callout theme="danger">
        <h5>Watch out!</h5>
        You must specify an <code>id</code> when using custom check controls or
        switches. Event handlers are triggered by linking the label with the
        input via <code>id</code>.
      </Callout>

      <h3>Inline</h3>
      <ReactPlayground codeText={CheckCustomInline} />

      <LinkedHeading h="3" id="forms-custom-select">
        Select
      </LinkedHeading>
      <p>
        For the <code>select</code> form control you can pass the{' '}
        <code>custom</code> prop to get custom styling of the select element.
        Custom styles are limited to the <code>select</code> initial appearance
        and cannot modify the <code>option</code> styling due to browser
        limitations.
      </p>
      <ReactPlayground codeText={SelectCustom} />
      <h4>Sizing</h4>
      <p>
        The custom <code>select</code> element supports sizing.
      </p>
      <ReactPlayground codeText={SelectCustomSize} />
      <h4>HTML size</h4>
      <p>
        You can also specify the visible options of your <code>select</code>{' '}
        element.
      </p>
      <ReactPlayground codeText={SelectCustomHtmlSize} />

      <LinkedHeading h="3" id="forms-custom-range">
        Range
      </LinkedHeading>
      <p>
        For the <code>range</code> form control you can pass the{' '}
        <code>custom</code> prop to get custom styling of the select element.
        The track (the background) and thumb (the value) are both styled to
        appear the same across browsers. As only IE and Firefox support
        “filling” their track from the left or right of the thumb as a means to
        visually indicate progress, we do not currently support it.
      </p>
      <ReactPlayground codeText={RangeCustom} />

      <LinkedHeading h="3" id="forms-custom-file">
        File
      </LinkedHeading>
      <p>A custom styled File uploader.</p>
      <Callout>
        The custom <code>FormFile</code> will by default not visibly display
        your selected file. This requires additional JS. The recommended plugin
        to animate custom file input is{' '}
        <a href="https://www.npmjs.com/package/bs-custom-file-input">
          bs-custom-file-input
        </a>
        .
      </Callout>
      <ReactPlayground codeText={File} />

      <h4>Translating or customizing the strings with HTML</h4>
      <p>
        Bootstrap also provides a way to translate the “Browse” text in HTML
        with the <code>data-browse</code> attribute which can be added to the
        custom input label (example in Dutch):
      </p>
      <Callout>
        Note that the <code>data-browse</code> attribute does not to anything
        unless the <code>custom</code> prop is set.
      </Callout>
      <ReactPlayground codeText={FileButtonTextHTML} />

      <h4>Translating or customizing the strings with SCSS</h4>
      <p>
        Please refer to the official{' '}
        <a href="https://getbootstrap.com/docs/4.4/components/forms/#translating-or-customizing-the-strings-with-scss">
          Bootstrap documentation for translating via SCSS
        </a>
        . The <code>lang</code> prop can be used to pass the language.
      </p>
      <ReactPlayground codeText={FileButtonTextScss} />

      <h4>Customizing FormFile rendering</h4>
      <p>
        When you need tighter control, or want to customize how the{' '}
        <code>FormFile</code> component renders, it may be better to use it's
        constituent parts directly.
      </p>
      <p>
        By providing <code>children</code> to the <code>FormFile</code> you can
        forgo the default rendering and handle it yourself. (You can still
        provide an <code>id</code> to the <code>FormFile</code> and have it
        propagate to the label and input).
      </p>
      <Callout>
        <p>
          When customizing the <code>FormFile</code> rendering it is important
          to note the order of the <code>label</code> and <code>input</code>{' '}
          elements.
        </p>
        <ul>
          <li>
            If you are not setting the <code>custom</code> prop the
            <code>label</code> should be before the <code>input</code>.
          </li>
          <li>
            If you are setting the custom prop the <code>input</code> element
            has to be placed before the <code>label</code> or the{' '}
            <code>buttonText</code> prop will not work.
          </li>
        </ul>
      </Callout>
      <ReactPlayground codeText={FileApi} />

      <LinkedHeading h="2" id="forms-api">
        API
      </LinkedHeading>
      <ComponentApi metadata={data.Form} />
      <ComponentApi metadata={data.FormRow} exportedBy={data.Form} />
      <ComponentApi metadata={data.FormGroup} exportedBy={data.Form} />
      <ComponentApi metadata={data.FormLabel} exportedBy={data.Form} />
      <ComponentApi metadata={data.FormText} exportedBy={data.Form} />
      <ComponentApi metadata={data.FormControl} exportedBy={data.Form} />
      <ComponentApi metadata={data.Feedback} exportedBy={data.FormControl} />
      <ComponentApi metadata={data.FormCheck} exportedBy={data.Form} />
      <ComponentApi
        metadata={data.FormCheckInput}
        exportedBy={data.FormCheck}
      />
      <ComponentApi
        metadata={data.FormCheckLabel}
        exportedBy={data.FormCheck}
      />
      <ComponentApi metadata={data.FormFile} exportedBy={data.Form} />
      <ComponentApi metadata={data.FormFileInput} exportedBy={data.FormFile} />
      <ComponentApi metadata={data.FormFileLabel} exportedBy={data.FormFile} />
    </>
  );
});

export const query = graphql`
  query FormQuery {
    Form: componentMetadata(displayName: { eq: "Form" }) {
      ...ComponentApi_metadata
    }
    FormRow: componentMetadata(displayName: { eq: "FormRow" }) {
      ...ComponentApi_metadata
    }
    FormGroup: componentMetadata(displayName: { eq: "FormGroup" }) {
      ...ComponentApi_metadata
    }
    FormControl: componentMetadata(displayName: { eq: "FormControl" }) {
      ...ComponentApi_metadata
    }
    FormLabel: componentMetadata(displayName: { eq: "FormLabel" }) {
      ...ComponentApi_metadata
    }
    FormText: componentMetadata(displayName: { eq: "FormText" }) {
      ...ComponentApi_metadata
    }
    FormCheck: componentMetadata(displayName: { eq: "FormCheck" }) {
      ...ComponentApi_metadata
    }
    FormFile: componentMetadata(displayName: { eq: "FormFile" }) {
      ...ComponentApi_metadata
    }
    FormCheckInput: componentMetadata(displayName: { eq: "FormCheckInput" }) {
      ...ComponentApi_metadata
    }
    FormCheckLabel: componentMetadata(displayName: { eq: "FormCheckLabel" }) {
      ...ComponentApi_metadata
    }
    Feedback: componentMetadata(displayName: { eq: "Feedback" }) {
      ...ComponentApi_metadata
    }
    FormFileInput: componentMetadata(displayName: { eq: "FormFileInput" }) {
      ...ComponentApi_metadata
    }
    FormFileLabel: componentMetadata(displayName: { eq: "FormFileLabel" }) {
      ...ComponentApi_metadata
    }
  }
`;
