# Scatter your select tags

A jQuery UI widget that transforms a HTML select tag in a set of functional equivalent tags:
* A normal select tag will be a set of radio buttons
* A multiple select tag will be a set of checkboxes

Requires jquery.ui.base and jquery.ui.widget . Successfully tested under Chrome, Firefox, Opera, Safari and IE*

## Try it!

```javascript
    $('#selector').scatterselect();
```

Given your original input tag:

```html
<select id="selector" class="class1 class2">
  <option value="val1">Label1</option>
  <option value="val2">Label2</option>
</select>
```

After widget initialization, the select tag will be hidden and several DOM elements are added in its place:

```html
<label class="checkbox"><input type="radio" name="selector" class="class1 class2" value="val1" checked="checked">Label1</label>
<label class="checkbox"><input type="radio" name="selector" class="class1 class2" value="val2">Label2</label>
<select id="selector" name="ignore_me_selector" style="display: none;">
  <option value="val1">Label1</option>
  <option value="val2">Label2</option>
</select>
```
If the original select has a *multiple="true"* attribute, the type of the inputs will be *checkbox*.

When the form is submitted, your server side language receives the parameter as it was from the original select tag.

