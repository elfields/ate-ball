import { Component, h, Prop, State } from '@stencil/core';
import { TakeawayName } from '../../models/takeawayName';

@Component({
  tag: 'takeaway-list-item',
  styleUrl: 'takeaway-list-item.css',
  shadow: true,
})
export class TakeawayListItem {
  @Prop() takeawayNames: TakeawayName[];
  
  @State() text: string; 
  // @State() takeawayItem: string; 


  removeTakeaway() {
    //   // var remove = updatedTakeawayArray.splice(0, 1)
    //   // console.log(remove)
  }

  render() {
    return (
      <div class="takeaway-list-item-container">
          {/* {this.takeawayNames.map((name: TakeawayName) => (
          <li>{name.text}</li>
          ))} */}
        <button class="takeaway-buttons" id="remove-takeaway-button" onClick={() => this.removeTakeaway()}>
          Remove Takeaway
        </button>
      </div>
    );
  }
}
