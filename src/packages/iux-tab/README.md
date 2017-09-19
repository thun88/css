---
title: Tabs
description: Description here
specs: []
---

## Basic Tabs

<div class="example">
    <div class="example--inner-frame">
        <ul class="iux-tabs--list-horizontal">
            <li class="iux-tabs--list-item">
                <a href="#horiz-tab1" class="iux-tabs--list-link">Tab 1</a>
            </li>
            <li class="iux-tabs--list-item">
                <a href="#horiz-tab2" class="iux-tabs--list-link">Tab 2</a>
            </li>
            <li class="iux-tabs--list-item is-active">
                <a href="#horiz-tab3" class="iux-tabs--list-link">Tab 3</a>
            </li>
            <li class="iux-tabs--list-item is-disabled">
                <a href="#horiz-tab4" class="iux-tabs--list-link">Tab 4</a>
            </li>
        </ul>
        <div class="iux-container">"Tab 3" example body text to show how the content of a tab could line up below the tabs.</div>
    </div>
</div>
```html
<ul class="iux-tabs--list-horizontal">
    <li class="iux-tabs--list-item">
        <a href="#horiz-tab1" class="iux-tabs--list-link">Tab 1</a>
    </li>
    <li class="iux-tabs--list-item">
        <a href="#horiz-tab2" class="iux-tabs--list-link">Tab 2</a>
    </li>
    <li class="iux-tabs--list-item is-active">
        <a href="#horiz-tab3" class="iux-tabs--list-link">Tab 3</a>
    </li>
    <li class="iux-tabs--list-item is-disabled">
        <a href="#horiz-tab4" class="iux-tabs--list-link">Tab 4</a>
    </li>
</ul>
```


## Vertical Tabs

<div class="example">
    <div class="example--inner-frame">
        <div class="iux-row">
            <div class="iux-row--col-md-3">
                <ul class="iux-tabs--list-vertical">
                    <li class="iux-tabs--list-item">
                        <a href="#vertical-tab1" class="iux-tabs--list-link">Tab 1</a>
                    </li>
                    <li class="iux-tabs--list-item">
                        <a href="#vertical-tab2" class="iux-tabs--list-link">Tab 2</a>
                    </li>
                    <li class="iux-tabs--list-item is-active">
                        <a href="#vertical-tab3" class="iux-tabs--list-link">Tab 3</a>
                    </li>
                    <li class="iux-tabs--list-item is-disabled">
                        <a href="#vertical-tab4" class="iux-tabs--list-link">Tab 4</a>
                    </li>
                </ul>
            </div>
            <div class="iux-row--col-md-9 iux-container">
                <p>"Tab 3" example body text to show how the content of a tab could line up beside the tabs.</p>
            </div>
        </div>
    </div>
</div>
```html
<div class="iux-row">
    <div class="iux-row--col-md-3">
        <ul class="iux-tabs--list-vertical">
            <li class="iux-tabs--list-item">
                <a href="#vertical-tab1" class="iux-tabs--list-link">Tab 1</a>
            </li>
            <li class="iux-tabs--list-item">
                <a href="#vertical-tab2" class="iux-tabs--list-link">Tab 2</a>
            </li>
            <li class="iux-tabs--list-item is-active">
                <a href="#vertical-tab3" class="iux-tabs--list-link">Tab 3</a>
            </li>
            <li class="iux-tabs--list-item is-disabled">
                <a href="#vertical-tab4" class="iux-tabs--list-link">Tab 4</a>
            </li>
        </ul>
    </div>
    <div class="iux-row--col-md-9 iux-container">
        <p>"Tab 3" example body text to show how the content of a tab could line up beside the tabs.</p>
    </div>
</div>
```
