---
title: Colors
description: These are color swatches for foundation.
---

## Color swatches

<div class="color-swatches">
{{#each default}}
{{#if this.isColor}}
{{> colorSwatch colorData=this title=this.originalDeclaration}}
{{/if}}
{{/each}}
</div>
