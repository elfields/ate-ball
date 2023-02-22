import { Component, Prop, h, Event, EventEmitter, State } from '@stencil/core';
// import { format } from '../../utils/utils';

@Component({
  tag: 'takeaway-list',
  styleUrl: 'takeaway-list.css',
  shadow: true,
})
export class TakeawayList {
  @Prop() takeawayNames: string[]; 

  @State() value: string = '';

  @Event() inputChange: EventEmitter; 
  @Event() submit: EventEmitter; 
  @Event() takeawayAdded: EventEmitter; 

  handleOnChange(e) {
    this.value = e.target.value;
    this.inputChange.emit(this.value)
  }

  handleOnSubmit(e) { 
    e.preventDefault(); 
    this.submit.emit(this.value); 
    this.value = ''; 
  }

  handleTakeawayAdded(e) {
    this.takeawayNames.unshift(this.value);
  }

  render() {
    const handleOnChange = (e) => this.handleOnChange(e); 
    const handleOnSubmit = (e) => this.handleOnSubmit(e); 
    const handleTakeawayAdded = (e) => this.handleTakeawayAdded(e);

    console.log(this.takeawayNames);

    return (
     <form class="takeaway-list-form" onSubmit={handleOnSubmit}>
      <input 
        type="text"
        onInput={handleOnChange}
        value={this.value}
      />
      <button onClick={() => handleTakeawayAdded}>
        Add Takeaway
      </button>
     </form>
    ); 
  }
}