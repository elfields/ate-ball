import { Component, h, Prop, Event, EventEmitter, State } from '@stencil/core';

@Component({
  tag: 'takeaway-list-form',
  styleUrl: 'takeaway-list-form.css',
  shadow: true,
})
export class TakeawayListForm {
  @Prop() takeawayNamesLength: number;

  @State() value: string = '';

  @Event() inputChange: EventEmitter; 
  @Event() submit: EventEmitter; 

  handleOnChange(e) {
    this.value = e.target.value;
    this.inputChange.emit(this.value)
  }

  handleOnSubmit(e) {
    e.preventDefault(); 
    this.submit.emit(this.value); 
    this.value = '';
  }

  render() {
    const handleOnChange = (e) => this.handleOnChange(e);
    const handleOnSubmit = (e) => this.handleOnSubmit(e);

    return (
      <form class="takeaway-list-form" onSubmit={handleOnSubmit}>
        <input id="add-takeaway-textbox"
          type="text"
          onInput={handleOnChange}
          value={this.value}
        />
        <button id="add-takeaway-button">
          Add Takeaway 
          {/* #{this.takeawayNamesLength + 1} */}
        </button>
         
      </form>
    );
  }

}
