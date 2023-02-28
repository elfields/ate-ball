import { Component, State, h } from '@stencil/core';
import { TakeawayName } from '../../models/takeawayName';

@Component({
  tag: 'ate-ball-app',
  styleUrl: 'ate-ball-app.css',
  shadow: true,
})
export class AteBallApp {
  // names will trigger a re-render if/when the value assigned to the variable changes
  @State() names: TakeawayName[] = []; 
  // text will trigger a re-render when its assigned string value changes 
  @State() text: string; 

  render() {
    // variables created to shorten input for event handling 
    const handleOnChange = (e) => this.handleOnChange(e);
    const handleOnSubmit = (e) => this.handleOnSubmit(e);
    // const handleOnClick = (e) => this.handleOnClick(e); 

    return (
      <div class="ate-ball-app">
        <nav-bar></nav-bar>
        <h3>Your Favourite Takeaways</h3>
        {/* adding in separate components to main app with event handling included*/}
        {/* <takeaway-list-item></takeaway-list-item> */}
        <takeaway-list takeawayNames ={this.names} />
        <takeaway-list-form onSubmit={handleOnSubmit} onInputChange={handleOnChange} takeawayNamesLength={this.names.length} />
      </div>
    );
  }

  private handleOnSubmit(e) {
    // prevents default action of submitting form event
    e.preventDefault();
    // if something is input into the text box, then return the string 
    if (!this.text.length) {
      return;
    }
    // creating new variable for inputted takeaway names to be stored in an array
    const newTakeawayName = new TakeawayName(this.text);

    this.text = '';
    // use of spread operator to copy array with existing names and merge with newly inputted names 
    this.names = [...this.names, newTakeawayName];
    const updatedTakeawayArray = this.names; 
    console.log(updatedTakeawayArray);
  }

  private handleOnChange(e) {
    // this.text defined as the data input from the event 
    this.text = e.detail;
  }

}


