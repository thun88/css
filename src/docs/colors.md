# Colors

## Brand color specs

<table>
  {{#each brandColors}}
    <tr>
      <td>{{this.name}}</td><td>{{this.value}}</td>
    </tr>
  {{/each}}
</table>

## Color swatches

<ul class="psg-colorPalette">
  {{#each colorSwatches}}
    <li>
      <div style="background-color: {{this.color}}; height:40px; width: 40px;">
      </div>
      {{this.name}}
    </li>
  {{/each}}
</ul>
