---
title: Themes
description: These document how to utilize the themes in foundation.
---

## Soho Theme

{{> themeDetails spec=default }}

## Color swatches

<div class="color-swatches">
{{#each default}}
{{#if this.isColor}}
{{> colorSwatch colorData=this title=this.originalDeclaration}}
{{/if}}
{{/each}}
</div>
