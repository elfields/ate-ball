import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'takeaway-list-randomiser',
  styleUrl: 'takeaway-list-randomiser.css',
  shadow: true,
})
export class TakeawayListRandomiser {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
