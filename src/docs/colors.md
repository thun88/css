---
title: Colors
description: Soho Foundation Styleguide
---

## Color swatches

<div class="color-swatches">
{{#each default}}
{{#if this.isColor}}
{{> colorSwatch colorData=this title=this.originalDeclaration}}
{{/if}}
{{/each}}
</div>
