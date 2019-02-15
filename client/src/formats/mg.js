import numeral from 'numeral';

numeral.register('format', 'milligram', {
    regexps: {
        format: /(mg)/,
        unformat: /(mg)/
    },
    format: function(value, format, roundingFunction) {
        var space = numeral._.includes(format, ' mg') ? ' ' : '',
            output;

        // check for space before mg
        format = format.replace(/\s?\mg/, '');

        output = numeral._.numberToFormat(value, format, roundingFunction);

        if (numeral._.includes(output, ')')) {
            output = output.split('');

            output.splice(-1, 0, space + 'mg');

            output = output.join('');
        } else {
            output = output + space + 'mg';
        }

        return output;
    },
    unformat: function(string) {
        return numeral._.stringToNumber(string);
    }
});