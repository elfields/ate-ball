import { Component, h, Prop, Event, EventEmitter, State } from '@stencil/core';

@Component({
  tag: 'takeaway-list-form',
  styleUrl: 'takeaway-list-form.css',
  shadow: true,
})
export class TakeawayListForm {
  //
  @Prop() takeawayNamesLength: number;

  @State() value: string = '';
  @State() selectedTakeaway: string = 'eat at home peasant';

  @Event() inputChange: EventEmitter;
  @Event() submitTakeaway: EventEmitter;
  @Event() clickAdd: EventEmitter;

  handleOnChange(e) {
    // allows to target where to listen for the event - listen for a change in value
    this.value = e.target.value;
    // Following the change in value being targetted and detected, the inputChange event is emitted
    this.inputChange.emit(this.value);
  }

  handleOnSubmit(e) {
    // the usual default action for when a form is submitted is prevented
    e.preventDefault();
    // instead, the submit event is emitted in relation to change in the value string
    this.submitTakeaway.emit(this.value);
    this.value = '';
  }

  // attempt to create random takeaway function but is currently not working
  randomTakeaway() {
    // new array created with different takeaway cuisines - could potentially pull from API in future
    var takeawayArray = new Array('Chinese', 'Thai', 'Indian', 'Pizza');
    var random = takeawayArray[Math.floor(Math.random() * takeawayArray.length)];
    // targetting random takeaway button element via id
    this.selectedTakeaway = random;
    console.log(this.selectedTakeaway);
  }

  render() {
    // shorten input when handling events
    const handleOnChange = e => this.handleOnChange(e);
    const handleOnSubmit = e => this.handleOnSubmit(e);

    return (
      <div>
        <form class="takeaway-list-form" onSubmit={handleOnSubmit}>
          {/* textbox for input of takeaways, using event to handle change to text input */}
          <input id="add-takeaway-textbox" type="text" onInput={handleOnChange} value={this.value} />
          <button class="takeaway-buttons" id="add-takeaway-button">
            Add Takeaway
          </button>
        </form>
        <button class="takeaway-buttons" id="random-takeaway-button" value="Add Random Takeaway" onClick={() => this.randomTakeaway()}>
        Random Selection
        </button>
        <h2>Your selected takeaway is: {this.selectedTakeaway}</h2>
      </div>
    );
  }
}
