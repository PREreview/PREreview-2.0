import React from 'react';

import { TextField } from '@pubsweet/ui';

const styles = {
  label: {
    display: 'block'
  },
  select: {
    marginBottom: 10,
    padding: 5
  }
};

class SubmitPreprintForm extends React.Component {
  updateValue = (key, newValue) => {
    this.props.onChange({
      ...this.props.preprint,
      [key]: newValue
    })
  };

  handleChange = event => {
    this.updateValue(event.target.name, event.target.value);
  };

  render() {
    const {
      preprint,
      onChange
    } = this.props;
    return (
      <form>
        <div>
          <label style={ styles.label }>Prerint url</label>
          <TextField
            name="preprintUrl"
            placeholder="https://my-preprint"
            value={ preprint.preprintUrl || '' }
            onChange={this.handleChange }
          />
        </div>
        <div>
          <label style={ styles.label }>Manucript title</label>
          <TextField
            style={ styles.input }
            name="title"
            placeholder=""
            value={ preprint.title || '' }
            onChange={this.handleChange }
          />
        </div>
        <div>
          <select
            style={ styles.select }
            placeholder="Reason for submitting"
          >
            <option>Reason for submitting</option>
            <option value="author">I'm the author and would like to invite reviews</option>
            <option value="reviewer">I would like to submit a review</option>
          </select>
        </div>
      </form>
    );
  }
}

export default SubmitPreprintForm;
