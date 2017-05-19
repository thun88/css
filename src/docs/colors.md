---
title: Colors
description: Soho Foundation Styleguide
---

## Color swatches

<div class="color-row">
    {{#each default}}
        {{#if this.isColor}}
            {{> _colors cssObj=this title=this.originalDeclaration}}
        {{/if}}
    {{/each}}
</div>
