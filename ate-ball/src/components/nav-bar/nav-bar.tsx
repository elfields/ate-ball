import { Component, h } from '@stencil/core';

@Component({
  tag: 'nav-bar',
  styleUrl: 'nav-bar.css',
  shadow: true,
})
export class NavBar {

  render() {
    return (
      <header id='nav-container'>
        <ul id="nav-items-container"> 
          <li class="nav-items" id="nav-home-item"><a href="#">Home</a></li>
          <li class="nav-items" id="nav-about-item"><a href="#">About </a></li>
          <li class="nav-items" id="nav-account-item"><a href="#">Account </a></li>
        </ul>
      </header>
       
    );
  }

}
