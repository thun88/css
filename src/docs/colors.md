---
title: Colors
description: Soho Foundation Styleguide
---

## Color swatches

<div class="color-row">
    {{#each default}}
        {{#if this.isColor}}
            <div class="color-row--col-1 swatch" style="background-color: {{ this.value }}">
                <div class="swatch-text">
                    {{this.originalDeclaration}}
                    <br>{{this.value}}
                </div>
            </div>
        {{/if}}
    {{/each}}
</div>
