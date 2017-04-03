# Colors

## Brand color specs

```css
{
{{#each brandColors}}
  {{this.name}}: {{this.value}};
{{/each}}
}
```

## Alert color specs

```css
{
{{#each alertColors}}
  {{this.name}}: {{this.value}};
{{/each}}
}
```
## Color swatches

<div class="color-grid">
  {{#each colorSwatches}}
    <div class="color-grid--col-1 swatch-{{this.name}}" style="background-color: {{this.color}};">
      <div>{{this.name}}</div>
    </div>
  {{/each}}
</div>
