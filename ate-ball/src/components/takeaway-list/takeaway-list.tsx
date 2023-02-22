import { Component, h, Prop } from '@stencil/core';
import { TakeawayName } from '../../models/takeawayName';

@Component({
  tag: 'takeaway-list',
  styleUrl: 'takeaway-list.css',
  shadow: true,
})
export class TakeawayList {
  @Prop() takeawayNames: TakeawayName[];

  render() {
    return (
      <ul class="takeaway-list">
      {
        this.takeawayNames.map((name: TakeawayName) => (
          <li>{name.text}</li>
        ))
      }
    </ul>
    );
  }

}
