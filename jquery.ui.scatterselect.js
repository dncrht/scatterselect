/*
  jQuery UI ScatterSelect Plugin 0.0.1
  https://github.com/dncrht/scatterselect

  Copyright (c) 2013 Daniel Cruz Horts

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in
  all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
  THE SOFTWARE.
 */


(function($) {

    $.widget('ui.scatterselect', {

        options: {
            clazz: 'checkbox'
        },

        _create: function() {

            this.element.hide();

            var that = this,
                id = this.element.attr('id'),
                name = this.element.attr('name'),
                class_attribute = this.element.attr('class'),
                type = this.element.attr('multiple') ? 'checkbox' : 'radio';

            class_attribute = class_attribute ? ' class="' + class_attribute + '"' : '';

            //
            // Replaces each option tag by its counterpart
            //

            this.element.find('option').each(function(){

                // Get the interesting attributes
                var option_value = $(this).val();
                var option_label = $(this).html();
                var option_selected = $(this).attr('selected') ? 'checked="checked"' : '';

                // Build its replacing input tag
                var replacement = '<label class="' + that.options.clazz + '">';
                replacement += '<input type="' + type + '" name="' + name + '"' + class_attribute + ' value="' + option_value + '" ' + option_selected + ' />';
                replacement += option_label + '</label>';

                that.element.before(replacement);
            });

            // Farewell, select tag
            this.element.attr('name', 'ignore_me_' + name);

        },

        _setOption: function(key, value) {},

        destroy: function() { // Called after element remove(), removes the elements we created
            var name = this.element.attr('name').replace('ignore_me_', '');
            $('input[name="' + name + '"]').parent().remove();
        }
    });
})(jQuery);
