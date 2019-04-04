import React from "react";
import { Field, reduxForm } from "redux-form";

class StreamCreate extends React.Component {
  renderError({ touched, error }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }

  /*  renderInput(formProps) {
    return (
      <input
        onChange={formProps.input.onChange}
        value={formProps.input.value}
      />
    );
  } */

  //short form of the above return statement
  /*  renderInput(formProps) {
    return <input {...formProps.input} />;
  } */

  //shorter form of the return statement, using destructuring
  /*  renderInput({ input }) {
    return <input {...input} />;
  } */

  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit(formValue) {
    console.log(formValue);
  }

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form error"
      >
        <Field name="title" component={this.renderInput} label="Enter title" />
        <Field
          name="description"
          component={this.renderInput}
          label="enter description"
        />

        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

const validate = formValue => {
  const errors = {};

  if (!formValue.title) {
    errors.title = "you must enter title";
  }

  if (!formValue.description) {
    errors.description = "You must enter description";
  }

  return errors;
};

export default reduxForm({
  //the form name
  form: "streamCreate",
  validate
})(StreamCreate);
