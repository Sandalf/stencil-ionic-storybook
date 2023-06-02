import { defineCustomElement as defineIonBage } from "@ionic/core/components/ion-badge.js";
import { initialize } from "@ionic/core/components";
// import "@ionic/core"
import { Component,  h } from '@stencil/core';

// // Initializes the Ionic config and `mode` behavior
initialize();

// Defines the `custom-badge` web component
defineIonBage();

@Component({
  tag: 'custom-badge',
  shadow: true,
})
export class CustomBadge {

  render() {
    return (
      <ion-badge>
        <slot />
      </ion-badge>
    );
  }
}
