(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define('ngx-bootstrap/chronos', ['exports'], factory) :
    (factory((global['ngx-bootstrap'] = global['ngx-bootstrap'] || {}, global['ngx-bootstrap'].chronos = {})));
}(this, (function (exports) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @param {?} n
     * @param {?} x
     * @return {?}
     */
    function mod(n, x) {
        return (n % x + x) % x;
    }
    /**
     * @param {?} num
     * @return {?}
     */
    function absFloor(num) {
        return num < 0 ? Math.ceil(num) || 0 : Math.floor(num);
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @param {?} str
     * @return {?}
     */
    function isString(str) {
        return typeof str === 'string';
    }
    /**
     * @param {?} value
     * @return {?}
     */
    function isDate(value) {
        return value instanceof Date || Object.prototype.toString.call(value) === '[object Date]';
    }
    /**
     * @param {?} date
     * @return {?}
     */
    function isDateValid(date) {
        return date && date.getTime && !isNaN(date.getTime());
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    function isFunction(fn) {
        return (fn instanceof Function ||
            Object.prototype.toString.call(fn) === '[object Function]');
    }
    /**
     * @param {?=} value
     * @return {?}
     */
    function isNumber(value) {
        return typeof value === 'number' || Object.prototype.toString.call(value) === '[object Number]';
    }
    /**
     * @template T
     * @param {?=} input
     * @return {?}
     */
    function isArray(input) {
        return (input instanceof Array ||
            Object.prototype.toString.call(input) === '[object Array]');
    }
    /**
     * @template T
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    function hasOwnProp(a /*object*/, b) {
        return Object.prototype.hasOwnProperty.call(a, b);
    }
    /**
     * @template T
     * @param {?} input
     * @return {?}
     */
    function isObject(input /*object*/) {
        // IE8 will treat undefined and null as object if it wasn't for
        // input != null
        return (input != null && Object.prototype.toString.call(input) === '[object Object]');
    }
    /**
     * @param {?} obj
     * @return {?}
     */
    function isObjectEmpty(obj) {
        if (Object.getOwnPropertyNames) {
            return (Object.getOwnPropertyNames(obj).length === 0);
        }
        var /** @type {?} */ k;
        for (k in obj) {
            if (obj.hasOwnProperty(k)) {
                return false;
            }
        }
        return true;
    }
    /**
     * @param {?} input
     * @return {?}
     */
    function isUndefined(input) {
        return input === void 0;
    }
    /**
     * @template T
     * @param {?} argumentForCoercion
     * @return {?}
     */
    function toInt(argumentForCoercion) {
        var /** @type {?} */ coercedNumber = +argumentForCoercion;
        var /** @type {?} */ value = 0;
        if (coercedNumber !== 0 && isFinite(coercedNumber)) {
            value = absFloor(coercedNumber);
        }
        return value;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ aliases = {};
    var /** @type {?} */ _mapUnits = {
        date: 'day',
        hour: 'hours',
        minute: 'minutes',
        second: 'seconds',
        millisecond: 'milliseconds'
    };
    /**
     * @param {?} unit
     * @param {?} shorthand
     * @return {?}
     */
    function addUnitAlias(unit, shorthand) {
        var /** @type {?} */ lowerCase = unit.toLowerCase();
        var /** @type {?} */ _unit = unit;
        if (lowerCase in _mapUnits) {
            _unit = _mapUnits[lowerCase];
        }
        aliases[lowerCase] = aliases[lowerCase + "s"] = aliases[shorthand] = _unit;
    }
    /**
     * @param {?} units
     * @return {?}
     */
    function normalizeUnits(units) {
        return isString(units) ? aliases[units] || aliases[units.toLowerCase()] : undefined;
    }
    /**
     * @param {?} inputObject
     * @return {?}
     */
    function normalizeObjectUnits(inputObject) {
        var /** @type {?} */ normalizedInput = {};
        var /** @type {?} */ normalizedProp;
        var /** @type {?} */ prop;
        for (prop in inputObject) {
            if (hasOwnProp(inputObject, prop)) {
                normalizedProp = normalizeUnits(prop);
                if (normalizedProp) {
                    normalizedInput[normalizedProp] = inputObject[prop];
                }
            }
        }
        return /** @type {?} */ (normalizedInput);
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    // place in new Date([array])
    var /** @type {?} */ YEAR = 0;
    var /** @type {?} */ MONTH = 1;
    var /** @type {?} */ DATE = 2;
    var /** @type {?} */ HOUR = 3;
    var /** @type {?} */ MINUTE = 4;
    var /** @type {?} */ SECOND = 5;
    var /** @type {?} */ MILLISECOND = 6;
    var /** @type {?} */ WEEK = 7;
    var /** @type {?} */ WEEKDAY = 8;

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @param {?} num
     * @param {?} targetLength
     * @param {?=} forceSign
     * @return {?}
     */
    function zeroFill(num, targetLength, forceSign) {
        var /** @type {?} */ absNumber = "" + Math.abs(num);
        var /** @type {?} */ zerosToFill = targetLength - absNumber.length;
        var /** @type {?} */ sign = num >= 0;
        var /** @type {?} */ _sign = sign ? (forceSign ? '+' : '') : '-';
        // todo: this is crazy slow
        var /** @type {?} */ _zeros = Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1);
        return (_sign + _zeros + absNumber);
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ formatFunctions = {};
    var /** @type {?} */ formatTokenFunctions = {};
    // tslint:disable-next-line
    var /** @type {?} */ formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;
    /**
     * @param {?} token
     * @param {?} padded
     * @param {?} ordinal
     * @param {?} callback
     * @return {?}
     */
    function addFormatToken(token, padded, ordinal, callback) {
        if (token) {
            formatTokenFunctions[token] = callback;
        }
        if (padded) {
            formatTokenFunctions[padded[0]] = function () {
                return zeroFill(callback.apply(null, arguments), padded[1], padded[2]);
            };
        }
        if (ordinal) {
            formatTokenFunctions[ordinal] = function (date, opts) {
                return opts.locale.ordinal(callback.apply(null, arguments), token);
            };
        }
    }
    /**
     * @param {?} format
     * @return {?}
     */
    function makeFormatFunction(format) {
        var /** @type {?} */ array = format.match(formattingTokens);
        var /** @type {?} */ length = array.length;
        var /** @type {?} */ formatArr = new Array(length);
        for (var /** @type {?} */ i = 0; i < length; i++) {
            formatArr[i] = formatTokenFunctions[array[i]]
                ? formatTokenFunctions[array[i]]
                : removeFormattingTokens(array[i]);
        }
        return function (date, locale, isUTC, offset) {
            if (offset === void 0) {
                offset = 0;
            }
            var /** @type {?} */ output = '';
            for (var /** @type {?} */ j = 0; j < length; j++) {
                output += isFunction(formatArr[j])
                    ? ((formatArr[j])).call(null, date, { format: format, locale: locale, isUTC: isUTC, offset: offset })
                    : formatArr[j];
            }
            return output;
        };
    }
    /**
     * @param {?} input
     * @return {?}
     */
    function removeFormattingTokens(input) {
        if (input.match(/\[[\s\S]/)) {
            return input.replace(/^\[|\]$/g, '');
        }
        return input.replace(/\\/g, '');
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @param {?=} y
     * @param {?=} m
     * @param {?=} d
     * @return {?}
     */
    function createUTCDate(y, m, d) {
        var /** @type {?} */ date = new Date(Date.UTC.apply(null, arguments));
        // the Date.UTC function remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0 && isFinite(date.getUTCFullYear())) {
            date.setUTCFullYear(y);
        }
        return date;
    }
    /**
     * @param {?=} y
     * @param {?=} m
     * @param {?=} d
     * @param {?=} h
     * @param {?=} M
     * @param {?=} s
     * @param {?=} ms
     * @return {?}
     */
    function createDate(y, m, d, h, M, s, ms) {
        if (m === void 0) {
            m = 0;
        }
        if (d === void 0) {
            d = 1;
        }
        if (h === void 0) {
            h = 0;
        }
        if (M === void 0) {
            M = 0;
        }
        if (s === void 0) {
            s = 0;
        }
        if (ms === void 0) {
            ms = 0;
        }
        var /** @type {?} */ date = new Date(y, m, d, h, M, s, ms);
        // the date constructor remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0 && isFinite(date.getFullYear())) {
            date.setFullYear(y);
        }
        return date;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @param {?} date
     * @param {?=} isUTC
     * @return {?}
     */
    function getHours(date, isUTC) {
        if (isUTC === void 0) {
            isUTC = false;
        }
        return isUTC ? date.getUTCHours() : date.getHours();
    }
    /**
     * @param {?} date
     * @param {?=} isUTC
     * @return {?}
     */
    function getMinutes(date, isUTC) {
        if (isUTC === void 0) {
            isUTC = false;
        }
        return isUTC ? date.getUTCMinutes() : date.getMinutes();
    }
    /**
     * @param {?} date
     * @param {?=} isUTC
     * @return {?}
     */
    function getSeconds(date, isUTC) {
        if (isUTC === void 0) {
            isUTC = false;
        }
        return isUTC ? date.getUTCSeconds() : date.getSeconds();
    }
    /**
     * @param {?} date
     * @param {?=} isUTC
     * @return {?}
     */
    function getMilliseconds(date, isUTC) {
        if (isUTC === void 0) {
            isUTC = false;
        }
        return isUTC ? date.getUTCMilliseconds() : date.getMilliseconds();
    }
    /**
     * @param {?} date
     * @return {?}
     */
    function getTime(date) {
        return date.getTime();
    }
    /**
     * @param {?} date
     * @param {?=} isUTC
     * @return {?}
     */
    function getDay(date, isUTC) {
        if (isUTC === void 0) {
            isUTC = false;
        }
        return isUTC ? date.getUTCDay() : date.getDay();
    }
    /**
     * @param {?} date
     * @param {?=} isUTC
     * @return {?}
     */
    function getDate(date, isUTC) {
        if (isUTC === void 0) {
            isUTC = false;
        }
        return isUTC ? date.getUTCDate() : date.getDate();
    }
    /**
     * @param {?} date
     * @param {?=} isUTC
     * @return {?}
     */
    function getMonth(date, isUTC) {
        if (isUTC === void 0) {
            isUTC = false;
        }
        return isUTC ? date.getUTCMonth() : date.getMonth();
    }
    /**
     * @param {?} date
     * @param {?=} isUTC
     * @return {?}
     */
    function getFullYear(date, isUTC) {
        if (isUTC === void 0) {
            isUTC = false;
        }
        return isUTC ? date.getUTCFullYear() : date.getFullYear();
    }
    /**
     * @param {?} date
     * @return {?}
     */
    function unix(date) {
        return Math.floor(date.valueOf() / 1000);
    }
    /**
     * @param {?} date
     * @return {?}
     */
    function getFirstDayOfMonth(date) {
        return createDate(date.getFullYear(), date.getMonth(), 1, date.getHours(), date.getMinutes(), date.getSeconds());
    }
    /**
     * @param {?} date
     * @param {?} firstDayOfWeek
     * @return {?}
     */
    function isFirstDayOfWeek(date, firstDayOfWeek) {
        return date.getDay() === firstDayOfWeek;
    }
    /**
     * @param {?} date1
     * @param {?} date2
     * @return {?}
     */
    function isSameMonth(date1, date2) {
        if (!date1 || !date2) {
            return false;
        }
        return isSameYear(date1, date2) && getMonth(date1) === getMonth(date2);
    }
    /**
     * @param {?} date1
     * @param {?} date2
     * @return {?}
     */
    function isSameYear(date1, date2) {
        if (!date1 || !date2) {
            return false;
        }
        return getFullYear(date1) === getFullYear(date2);
    }
    /**
     * @param {?} date1
     * @param {?} date2
     * @return {?}
     */
    function isSameDay(date1, date2) {
        if (!date1 || !date2) {
            return false;
        }
        return (isSameYear(date1, date2) &&
            isSameMonth(date1, date2) &&
            getDate(date1) === getDate(date2));
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ match1 = /\d/; //       0 - 9
    var /** @type {?} */ match2 = /\d\d/; //      00 - 99
    var /** @type {?} */ match3 = /\d{3}/; //     000 - 999
    var /** @type {?} */ match4 = /\d{4}/; //    0000 - 9999
    var /** @type {?} */ match6 = /[+-]?\d{6}/; // -999999 - 999999
    var /** @type {?} */ match1to2 = /\d\d?/; //       0 - 99
    var /** @type {?} */ match3to4 = /\d\d\d\d?/; //     999 - 9999
    var /** @type {?} */ match5to6 = /\d\d\d\d\d\d?/; //   99999 - 999999
    var /** @type {?} */ match1to3 = /\d{1,3}/; //       0 - 999
    var /** @type {?} */ match1to4 = /\d{1,4}/; //       0 - 9999
    var /** @type {?} */ match1to6 = /[+-]?\d{1,6}/; // -999999 - 999999
    var /** @type {?} */ matchUnsigned = /\d+/; //       0 - inf
    var /** @type {?} */ matchSigned = /[+-]?\d+/; //    -inf - inf
    var /** @type {?} */ matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi; // +00 -00 +00:00 -00:00 +0000 -0000 or Z
    var /** @type {?} */ matchTimestamp = /[+-]?\d+(\.\d{1,3})?/; // 123456789 123456789.123
    // any word (or two) characters or numbers including two/three word month in arabic.
    // includes scottish gaelic two word and hyphenated months
    // tslint:disable-next-line
    var /** @type {?} */ matchWord = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i;
    var /** @type {?} */ regexes = {};
    /**
     * @param {?} token
     * @param {?} regex
     * @param {?=} strictRegex
     * @return {?}
     */
    function addRegexToken(token, regex, strictRegex) {
        if (isFunction(regex)) {
            regexes[token] = regex;
            return;
        }
        regexes[token] = function (isStrict, locale) {
            return (isStrict && strictRegex) ? strictRegex : regex;
        };
    }
    /**
     * @param {?} token
     * @param {?} locale
     * @return {?}
     */
    function getParseRegexForToken(token, locale) {
        var /** @type {?} */ _strict = false;
        if (!hasOwnProp(regexes, token)) {
            return new RegExp(unescapeFormat(token));
        }
        return regexes[token](_strict, locale);
    }
    /**
     * @param {?} str
     * @return {?}
     */
    function unescapeFormat(str) {
        // tslint:disable-next-line
        return regexEscape(str
            .replace('\\', '')
            .replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (matched, p1, p2, p3, p4) { return p1 || p2 || p3 || p4; }));
    }
    /**
     * @param {?} str
     * @return {?}
     */
    function regexEscape(str) {
        return str.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ tokens = {};
    /**
     * @param {?} token
     * @param {?} callback
     * @return {?}
     */
    function addParseToken(token, callback) {
        var /** @type {?} */ _token = isString(token) ? [token] : token;
        var /** @type {?} */ func = callback;
        if (isNumber(callback)) {
            func = function (input, array, config) {
                array[callback] = toInt(input);
                return config;
            };
        }
        if (isArray(_token) && isFunction(func)) {
            var /** @type {?} */ i = void 0;
            for (i = 0; i < _token.length; i++) {
                tokens[_token[i]] = func;
            }
        }
    }
    /**
     * @param {?} token
     * @param {?} callback
     * @return {?}
     */
    function addWeekParseToken(token, callback) {
        addParseToken(token, function (input, array, config, _token) {
            config._w = config._w || {};
            return callback(input, config._w, config, _token);
        });
    }
    /**
     * @param {?} token
     * @param {?} input
     * @param {?} config
     * @return {?}
     */
    function addTimeToArrayFromToken(token, input, config) {
        if (input != null && hasOwnProp(tokens, token)) {
            tokens[token](input, config._a, config, token);
        }
        return config;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /*
    export function getPrioritizedUnits(unitsObj) {
      const units = [];
      let unit;
      for (unit in unitsObj) {
        if (unitsObj.hasOwnProperty(unit)) {
          units.push({ unit, priority: priorities[unit] });
        }
      }
      units.sort(function (a, b) {
        return a.priority - b.priority;
      });

      return units;
    }
    */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @return {?}
     */
    function initDayOfMonth() {
        // FORMATTING
        addFormatToken('D', ['DD', 2, false], 'Do', function (date, opts) {
            return getDate(date, opts.isUTC)
                .toString(10);
        });
        // ALIASES
        addUnitAlias('date', 'D');
        // PARSING
        addRegexToken('D', match1to2);
        addRegexToken('DD', match1to2, match2);
        addRegexToken('Do', function (isStrict, locale) {
            return locale._dayOfMonthOrdinalParse || locale._ordinalParse;
        });
        addParseToken(['D', 'DD'], DATE);
        addParseToken('Do', function (input, array, config) {
            array[DATE] = toInt(input.match(match1to2)[0]);
            return config;
        });
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @return {?}
     */
    function defaultParsingFlags() {
        // We need to deep clone this object.
        return {
            empty: false,
            unusedTokens: [],
            unusedInput: [],
            overflow: -2,
            charsLeftOver: 0,
            nullInput: false,
            invalidMonth: null,
            invalidFormat: false,
            userInvalidated: false,
            iso: false,
            parsedDateParts: [],
            meridiem: null,
            rfc2822: false,
            weekdayMismatch: false
        };
    }
    /**
     * @param {?} config
     * @return {?}
     */
    function getParsingFlags(config) {
        if (config._pf == null) {
            config._pf = defaultParsingFlags();
        }
        return config._pf;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @param {?} date
     * @param {?} opts
     * @return {?}
     */
    function getYear(date, opts) {
        return getFullYear(date, opts.isUTC).toString();
    }
    /**
     * @return {?}
     */
    function initYear() {
        addFormatToken('Y', null, null, function (date, opts) {
            var /** @type {?} */ y = getFullYear(date, opts.isUTC);
            return y <= 9999 ? y.toString(10) : "+" + y;
        });
        addFormatToken(null, ['YY', 2, false], null, function (date, opts) {
            return (getFullYear(date, opts.isUTC) % 100).toString(10);
        });
        addFormatToken(null, ['YYYY', 4, false], null, getYear);
        addFormatToken(null, ['YYYYY', 5, false], null, getYear);
        addFormatToken(null, ['YYYYYY', 6, true], null, getYear);
        // ALIASES
        addUnitAlias('year', 'y');
        // PARSING
        addRegexToken('Y', matchSigned);
        addRegexToken('YY', match1to2, match2);
        addRegexToken('YYYY', match1to4, match4);
        addRegexToken('YYYYY', match1to6, match6);
        addRegexToken('YYYYYY', match1to6, match6);
        addParseToken(['YYYYY', 'YYYYYY'], YEAR);
        addParseToken('YYYY', function (input, array, config) {
            array[YEAR] = input.length === 2 ? parseTwoDigitYear(input) : toInt(input);
            return config;
        });
        addParseToken('YY', function (input, array, config) {
            array[YEAR] = parseTwoDigitYear(input);
            return config;
        });
        addParseToken('Y', function (input, array, config) {
            array[YEAR] = parseInt(input, 10);
            return config;
        });
    }
    /**
     * @param {?} input
     * @return {?}
     */
    function parseTwoDigitYear(input) {
        return toInt(input) + (toInt(input) > 68 ? 1900 : 2000);
    }
    /**
     * @param {?} year
     * @return {?}
     */
    function daysInYear(year) {
        return isLeapYear(year) ? 366 : 365;
    }
    /**
     * @param {?} year
     * @return {?}
     */
    function isLeapYear(year) {
        return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @param {?} year
     * @param {?} month
     * @return {?}
     */
    function daysInMonth$1(year, month) {
        if (isNaN(year) || isNaN(month)) {
            return NaN;
        }
        var /** @type {?} */ modMonth = mod(month, 12);
        var /** @type {?} */ _year = year + (month - modMonth) / 12;
        return modMonth === 1
            ? isLeapYear(_year) ? 29 : 28
            : (31 - modMonth % 7 % 2);
    }
    /**
     * @return {?}
     */
    function initMonth() {
        // FORMATTING
        addFormatToken('M', ['MM', 2, false], 'Mo', function (date, opts) {
            return (getMonth(date, opts.isUTC) + 1).toString(10);
        });
        addFormatToken('MMM', null, null, function (date, opts) {
            return opts.locale.monthsShort(date, opts.format, opts.isUTC);
        });
        addFormatToken('MMMM', null, null, function (date, opts) {
            return opts.locale.months(date, opts.format, opts.isUTC);
        });
        // ALIASES
        addUnitAlias('month', 'M');
        // PARSING
        addRegexToken('M', match1to2);
        addRegexToken('MM', match1to2, match2);
        addRegexToken('MMM', function (isStrict, locale) {
            return locale.monthsShortRegex(isStrict);
        });
        addRegexToken('MMMM', function (isStrict, locale) {
            return locale.monthsRegex(isStrict);
        });
        addParseToken(['M', 'MM'], function (input, array, config) {
            array[MONTH] = toInt(input) - 1;
            return config;
        });
        addParseToken(['MMM', 'MMMM'], function (input, array, config, token) {
            var /** @type {?} */ month = config._locale.monthsParse(input, token, config._strict);
            // if we didn't find a month name, mark the date as invalid.
            if (month != null) {
                array[MONTH] = month;
            }
            else {
                getParsingFlags(config).invalidMonth = !!input;
            }
            return config;
        });
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ defaultTimeUnit = {
        year: 0,
        month: 0,
        day: 0,
        hour: 0,
        minute: 0,
        seconds: 0
    };
    /**
     * @param {?} date
     * @param {?} unit
     * @return {?}
     */
    function shiftDate(date, unit) {
        var /** @type {?} */ _unit = Object.assign({}, defaultTimeUnit, unit);
        var /** @type {?} */ year = date.getFullYear() + (_unit.year || 0);
        var /** @type {?} */ month = date.getMonth() + (_unit.month || 0);
        var /** @type {?} */ day = date.getDate() + (_unit.day || 0);
        if (_unit.month && !_unit.day) {
            day = Math.min(day, daysInMonth$1(year, month));
        }
        return createDate(year, month, day, date.getHours() + (_unit.hour || 0), date.getMinutes() + (_unit.minute || 0), date.getSeconds() + (_unit.seconds || 0));
    }
    /**
     * @param {?} date
     * @param {?} unit
     * @return {?}
     */
    function setFullDate(date, unit) {
        return createDate(getNum(date.getFullYear(), unit.year), getNum(date.getMonth(), unit.month), getNum(date.getDate(), unit.day), getNum(date.getHours(), unit.hour), getNum(date.getMinutes(), unit.minute), getNum(date.getSeconds(), unit.seconds), getNum(date.getMilliseconds(), unit.milliseconds));
    }
    /**
     * @param {?} def
     * @param {?=} num
     * @return {?}
     */
    function getNum(def, num) {
        return isNumber(num) ? num : def;
    }
    /**
     * @param {?} date
     * @param {?} value
     * @param {?=} isUTC
     * @return {?}
     */
    function setMonth(date, value, isUTC) {
        var /** @type {?} */ dayOfMonth = Math.min(getDate(date), daysInMonth$1(getFullYear(date), value));
        isUTC ? date.setUTCMonth(value, dayOfMonth) : date.setMonth(value, dayOfMonth);
        return date;
    }
    /**
     * @param {?} date
     * @param {?} value
     * @param {?=} isUTC
     * @return {?}
     */
    function setHours(date, value, isUTC) {
        isUTC ? date.setUTCHours(value) : date.setHours(value);
        return date;
    }
    /**
     * @param {?} date
     * @param {?} value
     * @param {?=} isUTC
     * @return {?}
     */
    function setMinutes(date, value, isUTC) {
        isUTC ? date.setUTCMinutes(value) : date.setMinutes(value);
        return date;
    }
    /**
     * @param {?} date
     * @param {?} value
     * @param {?=} isUTC
     * @return {?}
     */
    function setSeconds(date, value, isUTC) {
        isUTC ? date.setUTCSeconds(value) : date.setSeconds(value);
        return date;
    }
    /**
     * @param {?} date
     * @param {?} value
     * @param {?=} isUTC
     * @return {?}
     */
    function setMilliseconds(date, value, isUTC) {
        isUTC ? date.setUTCMilliseconds(value) : date.setMilliseconds(value);
        return date;
    }
    /**
     * @param {?} date
     * @param {?} value
     * @param {?=} isUTC
     * @return {?}
     */
    function setDate(date, value, isUTC) {
        isUTC ? date.setUTCDate(value) : date.setDate(value);
        return date;
    }
    /**
     * @param {?} date
     * @param {?} value
     * @return {?}
     */
    function setTime(date, value) {
        date.setTime(value);
        return date;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @param {?} date
     * @return {?}
     */
    function cloneDate(date) {
        return new Date(date.getTime());
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @param {?} date
     * @param {?} unit
     * @param {?=} isUTC
     * @return {?}
     */
    function startOf(date, unit, isUTC) {
        var /** @type {?} */ _date = cloneDate(date);
        // the following switch intentionally omits break keywords
        // to utilize falling through the cases.
        switch (unit) {
            case 'year':
                setMonth(_date, 0, isUTC);
            /* falls through */
            case 'quarter':
            case 'month':
                setDate(_date, 1, isUTC);
            /* falls through */
            case 'week':
            case 'isoWeek':
            case 'day':
            case 'date':
                setHours(_date, 0, isUTC);
            /* falls through */
            case 'hours':
                setMinutes(_date, 0, isUTC);
            /* falls through */
            case 'minutes':
                setSeconds(_date, 0, isUTC);
            /* falls through */
            case 'seconds':
                setMilliseconds(_date, 0, isUTC);
        }
        // weeks are a special case
        if (unit === 'week') {
            setLocaleDayOfWeek(_date, 0, { isUTC: isUTC });
        }
        if (unit === 'isoWeek') {
            setISODayOfWeek(_date, 1);
        }
        // quarters are also special
        if (unit === 'quarter') {
            setMonth(_date, Math.floor(getMonth(_date, isUTC) / 3) * 3, isUTC);
        }
        return _date;
    }
    /**
     * @param {?} date
     * @param {?} unit
     * @param {?=} isUTC
     * @return {?}
     */
    function endOf(date, unit, isUTC) {
        var /** @type {?} */ _unit = unit;
        // 'date' is an alias for 'day', so it should be considered as such.
        if (_unit === 'date') {
            _unit = 'day';
        }
        var /** @type {?} */ start = startOf(date, _unit, isUTC);
        var /** @type {?} */ _step = add(start, 1, _unit === 'isoWeek' ? 'week' : _unit, isUTC);
        var /** @type {?} */ res = subtract(_step, 1, 'milliseconds', isUTC);
        return res;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @return {?}
     */
    function initDayOfYear() {
        // FORMATTING
        addFormatToken('DDD', ['DDDD', 3, false], 'DDDo', function (date) {
            return getDayOfYear(date)
                .toString(10);
        });
        // ALIASES
        addUnitAlias('dayOfYear', 'DDD');
        addRegexToken('DDD', match1to3);
        addRegexToken('DDDD', match3);
        addParseToken(['DDD', 'DDDD'], function (input, array, config) {
            config._dayOfYear = toInt(input);
            return config;
        });
    }
    /**
     * @param {?} date
     * @param {?=} isUTC
     * @return {?}
     */
    function getDayOfYear(date, isUTC) {
        var /** @type {?} */ date1 = +startOf(date, 'day', isUTC);
        var /** @type {?} */ date2 = +startOf(date, 'year', isUTC);
        var /** @type {?} */ someDate = date1 - date2;
        var /** @type {?} */ oneDay = 1000 * 60 * 60 * 24;
        return Math.round(someDate / oneDay) + 1;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @param {?} year
     * @param {?} dow
     * @param {?} doy
     * @return {?}
     */
    function firstWeekOffset(year, dow, doy) {
        // first-week day -- which january is always in the first week (4 for iso, 1 for other)
        var /** @type {?} */ fwd = dow - doy + 7;
        // first-week day local weekday -- which local weekday is fwd
        var /** @type {?} */ fwdlw = (createUTCDate(year, 0, fwd).getUTCDay() - dow + 7) % 7;
        return -fwdlw + fwd - 1;
    }
    /**
     * @param {?} year
     * @param {?} week
     * @param {?} weekday
     * @param {?} dow
     * @param {?} doy
     * @return {?}
     */
    function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
        var /** @type {?} */ localWeekday = (7 + weekday - dow) % 7;
        var /** @type {?} */ weekOffset = firstWeekOffset(year, dow, doy);
        var /** @type {?} */ dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset;
        var /** @type {?} */ resYear;
        var /** @type {?} */ resDayOfYear;
        if (dayOfYear <= 0) {
            resYear = year - 1;
            resDayOfYear = daysInYear(resYear) + dayOfYear;
        }
        else if (dayOfYear > daysInYear(year)) {
            resYear = year + 1;
            resDayOfYear = dayOfYear - daysInYear(year);
        }
        else {
            resYear = year;
            resDayOfYear = dayOfYear;
        }
        return {
            year: resYear,
            dayOfYear: resDayOfYear
        };
    }
    /**
     * @param {?} date
     * @param {?} dow
     * @param {?} doy
     * @param {?=} isUTC
     * @return {?}
     */
    function weekOfYear(date, dow, doy, isUTC) {
        var /** @type {?} */ weekOffset = firstWeekOffset(getFullYear(date, isUTC), dow, doy);
        var /** @type {?} */ week = Math.floor((getDayOfYear(date, isUTC) - weekOffset - 1) / 7) + 1;
        var /** @type {?} */ resWeek;
        var /** @type {?} */ resYear;
        if (week < 1) {
            resYear = getFullYear(date, isUTC) - 1;
            resWeek = week + weeksInYear(resYear, dow, doy);
        }
        else if (week > weeksInYear(getFullYear(date, isUTC), dow, doy)) {
            resWeek = week - weeksInYear(getFullYear(date, isUTC), dow, doy);
            resYear = getFullYear(date, isUTC) + 1;
        }
        else {
            resYear = getFullYear(date, isUTC);
            resWeek = week;
        }
        return {
            week: resWeek,
            year: resYear
        };
    }
    /**
     * @param {?} year
     * @param {?} dow
     * @param {?} doy
     * @return {?}
     */
    function weeksInYear(year, dow, doy) {
        var /** @type {?} */ weekOffset = firstWeekOffset(year, dow, doy);
        var /** @type {?} */ weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
        return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/;
    var /** @type {?} */ defaultLocaleMonths = 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_');
    var /** @type {?} */ defaultLocaleMonthsShort = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_');
    var /** @type {?} */ defaultLocaleWeekdays = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_');
    var /** @type {?} */ defaultLocaleWeekdaysShort = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_');
    var /** @type {?} */ defaultLocaleWeekdaysMin = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_');
    var /** @type {?} */ defaultLongDateFormat = {
        LTS: 'h:mm:ss A',
        LT: 'h:mm A',
        L: 'MM/DD/YYYY',
        LL: 'MMMM D, YYYY',
        LLL: 'MMMM D, YYYY h:mm A',
        LLLL: 'dddd, MMMM D, YYYY h:mm A'
    };
    var /** @type {?} */ defaultOrdinal = '%d';
    var /** @type {?} */ defaultDayOfMonthOrdinalParse = /\d{1,2}/;
    var /** @type {?} */ defaultMonthsShortRegex = matchWord;
    var /** @type {?} */ defaultMonthsRegex = matchWord;
    var Locale = (function () {
        function Locale(config) {
            if (!!config) {
                this.set(config);
            }
        }
        /**
         * @param {?} config
         * @return {?}
         */
        Locale.prototype.set = /**
         * @param {?} config
         * @return {?}
         */
            function (config) {
                var /** @type {?} */ confKey;
                for (confKey in config) {
                    if (!config.hasOwnProperty(confKey)) {
                        continue;
                    }
                    var /** @type {?} */ prop = config[(confKey)];
                    var /** @type {?} */ key = ((isFunction(prop) ? confKey : "_" + confKey));
                    this[key] = /** @type {?} */ (prop);
                }
                this._config = config;
            };
        /**
         * @param {?} key
         * @param {?} date
         * @param {?} now
         * @return {?}
         */
        Locale.prototype.calendar = /**
         * @param {?} key
         * @param {?} date
         * @param {?} now
         * @return {?}
         */
            function (key, date, now) {
                var /** @type {?} */ output = this._calendar[key] || this._calendar["sameElse"];
                return isFunction(output) ? output.call(null, date, now) : output;
            };
        /**
         * @param {?} key
         * @return {?}
         */
        Locale.prototype.longDateFormat = /**
         * @param {?} key
         * @return {?}
         */
            function (key) {
                var /** @type {?} */ format = this._longDateFormat[key];
                var /** @type {?} */ formatUpper = this._longDateFormat[key.toUpperCase()];
                if (format || !formatUpper) {
                    return format;
                }
                this._longDateFormat[key] = formatUpper.replace(/MMMM|MM|DD|dddd/g, function (val) {
                    return val.slice(1);
                });
                return this._longDateFormat[key];
            };
        Object.defineProperty(Locale.prototype, "invalidDate", {
            get: /**
             * @return {?}
             */ function () {
                return this._invalidDate;
            },
            set: /**
             * @param {?} val
             * @return {?}
             */ function (val) {
                this._invalidDate = val;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} num
         * @param {?=} token
         * @return {?}
         */
        Locale.prototype.ordinal = /**
         * @param {?} num
         * @param {?=} token
         * @return {?}
         */
            function (num, token) {
                return this._ordinal.replace('%d', num.toString(10));
            };
        /**
         * @param {?} str
         * @return {?}
         */
        Locale.prototype.preparse = /**
         * @param {?} str
         * @return {?}
         */
            function (str) {
                return str;
            };
        /**
         * @param {?} str
         * @return {?}
         */
        Locale.prototype.postformat = /**
         * @param {?} str
         * @return {?}
         */
            function (str) {
                return str;
            };
        /**
         * @param {?} num
         * @param {?} withoutSuffix
         * @param {?} str
         * @param {?} isFuture
         * @return {?}
         */
        Locale.prototype.relativeTime = /**
         * @param {?} num
         * @param {?} withoutSuffix
         * @param {?} str
         * @param {?} isFuture
         * @return {?}
         */
            function (num, withoutSuffix, str, isFuture) {
                var /** @type {?} */ output = this._relativeTime[str];
                return (isFunction(output)) ?
                    output(num, withoutSuffix, str, isFuture) :
                    output.replace(/%d/i, num.toString(10));
            };
        /**
         * @param {?} diff
         * @param {?} output
         * @return {?}
         */
        Locale.prototype.pastFuture = /**
         * @param {?} diff
         * @param {?} output
         * @return {?}
         */
            function (diff, output) {
                var /** @type {?} */ format = this._relativeTime[diff > 0 ? 'future' : 'past'];
                return isFunction(format) ? format(output) : format.replace(/%s/i, output);
            };
        /**
         * @param {?=} date
         * @param {?=} format
         * @param {?=} isUTC
         * @return {?}
         */
        Locale.prototype.months = /**
         * @param {?=} date
         * @param {?=} format
         * @param {?=} isUTC
         * @return {?}
         */
            function (date, format, isUTC) {
                if (isUTC === void 0) {
                    isUTC = false;
                }
                if (!date) {
                    return isArray(this._months)
                        ? this._months
                        : this._months.standalone;
                }
                if (isArray(this._months)) {
                    return this._months[getMonth(date, isUTC)];
                }
                var /** @type {?} */ key = (this._months.isFormat || MONTHS_IN_FORMAT).test(format)
                    ? 'format'
                    : 'standalone';
                return this._months[key][getMonth(date, isUTC)];
            };
        /**
         * @param {?=} date
         * @param {?=} format
         * @param {?=} isUTC
         * @return {?}
         */
        Locale.prototype.monthsShort = /**
         * @param {?=} date
         * @param {?=} format
         * @param {?=} isUTC
         * @return {?}
         */
            function (date, format, isUTC) {
                if (isUTC === void 0) {
                    isUTC = false;
                }
                if (!date) {
                    return isArray(this._monthsShort)
                        ? this._monthsShort
                        : this._monthsShort.standalone;
                }
                if (isArray(this._monthsShort)) {
                    return this._monthsShort[getMonth(date, isUTC)];
                }
                var /** @type {?} */ key = MONTHS_IN_FORMAT.test(format) ? 'format' : 'standalone';
                return this._monthsShort[key][getMonth(date, isUTC)];
            };
        /**
         * @param {?} monthName
         * @param {?=} format
         * @param {?=} strict
         * @return {?}
         */
        Locale.prototype.monthsParse = /**
         * @param {?} monthName
         * @param {?=} format
         * @param {?=} strict
         * @return {?}
         */
            function (monthName, format, strict) {
                var /** @type {?} */ date;
                var /** @type {?} */ regex;
                if (this._monthsParseExact) {
                    return this.handleMonthStrictParse(monthName, format, strict);
                }
                if (!this._monthsParse) {
                    this._monthsParse = [];
                    this._longMonthsParse = [];
                    this._shortMonthsParse = [];
                }
                // TODO: add sorting
                // Sorting makes sure if one month (or abbr) is a prefix of another
                // see sorting in computeMonthsParse
                var /** @type {?} */ i;
                for (i = 0; i < 12; i++) {
                    // make the regex if we don't have it already
                    date = new Date(Date.UTC(2000, i));
                    if (strict && !this._longMonthsParse[i]) {
                        var /** @type {?} */ _months = this.months(date, '', true).replace('.', '');
                        var /** @type {?} */ _shortMonths = this.monthsShort(date, '', true).replace('.', '');
                        this._longMonthsParse[i] = new RegExp("^" + _months + "$", 'i');
                        this._shortMonthsParse[i] = new RegExp("^" + _shortMonths + "$", 'i');
                    }
                    if (!strict && !this._monthsParse[i]) {
                        regex = "^" + this.months(date, '', true) + "|^" + this.monthsShort(date, '', true);
                        this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
                    }
                    // test the regex
                    if (strict && format === 'MMMM' && ((this._longMonthsParse[i])).test(monthName)) {
                        return i;
                    }
                    if (strict && format === 'MMM' && ((this._shortMonthsParse[i])).test(monthName)) {
                        return i;
                    }
                    if (!strict && this._monthsParse[i].test(monthName)) {
                        return i;
                    }
                }
            };
        /**
         * @param {?} isStrict
         * @return {?}
         */
        Locale.prototype.monthsRegex = /**
         * @param {?} isStrict
         * @return {?}
         */
            function (isStrict) {
                if (this._monthsParseExact) {
                    if (!hasOwnProp(this, '_monthsRegex')) {
                        this.computeMonthsParse();
                    }
                    if (isStrict) {
                        return this._monthsStrictRegex;
                    }
                    return this._monthsRegex;
                }
                if (!hasOwnProp(this, '_monthsRegex')) {
                    this._monthsRegex = defaultMonthsRegex;
                }
                return this._monthsStrictRegex && isStrict ?
                    this._monthsStrictRegex : this._monthsRegex;
            };
        /**
         * @param {?} isStrict
         * @return {?}
         */
        Locale.prototype.monthsShortRegex = /**
         * @param {?} isStrict
         * @return {?}
         */
            function (isStrict) {
                if (this._monthsParseExact) {
                    if (!hasOwnProp(this, '_monthsRegex')) {
                        this.computeMonthsParse();
                    }
                    if (isStrict) {
                        return this._monthsShortStrictRegex;
                    }
                    return this._monthsShortRegex;
                }
                if (!hasOwnProp(this, '_monthsShortRegex')) {
                    this._monthsShortRegex = defaultMonthsShortRegex;
                }
                return this._monthsShortStrictRegex && isStrict ?
                    this._monthsShortStrictRegex : this._monthsShortRegex;
            };
        /** Week */
        /**
         * Week
         * @param {?} date
         * @param {?=} isUTC
         * @return {?}
         */
        Locale.prototype.week = /**
         * Week
         * @param {?} date
         * @param {?=} isUTC
         * @return {?}
         */
            function (date, isUTC) {
                return weekOfYear(date, this._week.dow, this._week.doy, isUTC).week;
            };
        /**
         * @return {?}
         */
        Locale.prototype.firstDayOfWeek = /**
         * @return {?}
         */
            function () {
                return this._week.dow;
            };
        /**
         * @return {?}
         */
        Locale.prototype.firstDayOfYear = /**
         * @return {?}
         */
            function () {
                return this._week.doy;
            };
        /**
         * @param {?=} date
         * @param {?=} format
         * @param {?=} isUTC
         * @return {?}
         */
        Locale.prototype.weekdays = /**
         * @param {?=} date
         * @param {?=} format
         * @param {?=} isUTC
         * @return {?}
         */
            function (date, format, isUTC) {
                if (!date) {
                    return isArray(this._weekdays)
                        ? this._weekdays
                        : this._weekdays.standalone;
                }
                if (isArray(this._weekdays)) {
                    return this._weekdays[getDay(date, isUTC)];
                }
                var /** @type {?} */ _key = this._weekdays.isFormat.test(format)
                    ? 'format'
                    : 'standalone';
                return this._weekdays[_key][getDay(date, isUTC)];
            };
        /**
         * @param {?=} date
         * @param {?=} format
         * @param {?=} isUTC
         * @return {?}
         */
        Locale.prototype.weekdaysMin = /**
         * @param {?=} date
         * @param {?=} format
         * @param {?=} isUTC
         * @return {?}
         */
            function (date, format, isUTC) {
                return date ? this._weekdaysMin[getDay(date, isUTC)] : this._weekdaysMin;
            };
        /**
         * @param {?=} date
         * @param {?=} format
         * @param {?=} isUTC
         * @return {?}
         */
        Locale.prototype.weekdaysShort = /**
         * @param {?=} date
         * @param {?=} format
         * @param {?=} isUTC
         * @return {?}
         */
            function (date, format, isUTC) {
                return date ? this._weekdaysShort[getDay(date, isUTC)] : this._weekdaysShort;
            };
        // proto.weekdaysParse  =        localeWeekdaysParse;
        /**
         * @param {?=} weekdayName
         * @param {?=} format
         * @param {?=} strict
         * @return {?}
         */
        Locale.prototype.weekdaysParse = /**
         * @param {?=} weekdayName
         * @param {?=} format
         * @param {?=} strict
         * @return {?}
         */
            function (weekdayName, format, strict) {
                var /** @type {?} */ i;
                var /** @type {?} */ regex;
                if (this._weekdaysParseExact) {
                    return this.handleWeekStrictParse(weekdayName, format, strict);
                }
                if (!this._weekdaysParse) {
                    this._weekdaysParse = [];
                    this._minWeekdaysParse = [];
                    this._shortWeekdaysParse = [];
                    this._fullWeekdaysParse = [];
                }
                for (i = 0; i < 7; i++) {
                    // make the regex if we don't have it already
                    // fix: here is the issue
                    var /** @type {?} */ date = setDayOfWeek(new Date(Date.UTC(2000, 1)), i, null, true);
                    if (strict && !this._fullWeekdaysParse[i]) {
                        this._fullWeekdaysParse[i] = new RegExp("^" + this.weekdays(date, '', true).replace('.', '\.?') + "$", 'i');
                        this._shortWeekdaysParse[i] = new RegExp("^" + this.weekdaysShort(date, '', true).replace('.', '\.?') + "$", 'i');
                        this._minWeekdaysParse[i] = new RegExp("^" + this.weekdaysMin(date, '', true).replace('.', '\.?') + "$", 'i');
                    }
                    if (!this._weekdaysParse[i]) {
                        regex = "^" + this.weekdays(date, '', true) + "|^" + this.weekdaysShort(date, '', true) + "|^" + this.weekdaysMin(date, '', true);
                        this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');
                    }
                    if (!isArray(this._fullWeekdaysParse)
                        || !isArray(this._shortWeekdaysParse)
                        || !isArray(this._minWeekdaysParse)
                        || !isArray(this._weekdaysParse)) {
                        return;
                    }
                    // test the regex
                    if (strict && format === 'dddd' && this._fullWeekdaysParse[i].test(weekdayName)) {
                        return i;
                    }
                    else if (strict && format === 'ddd' && this._shortWeekdaysParse[i].test(weekdayName)) {
                        return i;
                    }
                    else if (strict && format === 'dd' && this._minWeekdaysParse[i].test(weekdayName)) {
                        return i;
                    }
                    else if (!strict && this._weekdaysParse[i].test(weekdayName)) {
                        return i;
                    }
                }
            };
        // proto.weekdaysRegex       =        weekdaysRegex;
        /**
         * @param {?} isStrict
         * @return {?}
         */
        Locale.prototype.weekdaysRegex = /**
         * @param {?} isStrict
         * @return {?}
         */
            function (isStrict) {
                if (this._weekdaysParseExact) {
                    if (!hasOwnProp(this, '_weekdaysRegex')) {
                        this.computeWeekdaysParse();
                    }
                    if (isStrict) {
                        return this._weekdaysStrictRegex;
                    }
                    else {
                        return this._weekdaysRegex;
                    }
                }
                else {
                    if (!hasOwnProp(this, '_weekdaysRegex')) {
                        this._weekdaysRegex = matchWord;
                    }
                    return this._weekdaysStrictRegex && isStrict ?
                        this._weekdaysStrictRegex : this._weekdaysRegex;
                }
            };
        // proto.weekdaysShortRegex  =        weekdaysShortRegex;
        // proto.weekdaysMinRegex    =        weekdaysMinRegex;
        /**
         * @param {?=} isStrict
         * @return {?}
         */
        Locale.prototype.weekdaysShortRegex = /**
         * @param {?=} isStrict
         * @return {?}
         */
            function (isStrict) {
                if (this._weekdaysParseExact) {
                    if (!hasOwnProp(this, '_weekdaysRegex')) {
                        this.computeWeekdaysParse();
                    }
                    if (isStrict) {
                        return this._weekdaysShortStrictRegex;
                    }
                    else {
                        return this._weekdaysShortRegex;
                    }
                }
                else {
                    if (!hasOwnProp(this, '_weekdaysShortRegex')) {
                        this._weekdaysShortRegex = matchWord;
                    }
                    return this._weekdaysShortStrictRegex && isStrict ?
                        this._weekdaysShortStrictRegex : this._weekdaysShortRegex;
                }
            };
        /**
         * @param {?=} isStrict
         * @return {?}
         */
        Locale.prototype.weekdaysMinRegex = /**
         * @param {?=} isStrict
         * @return {?}
         */
            function (isStrict) {
                if (this._weekdaysParseExact) {
                    if (!hasOwnProp(this, '_weekdaysRegex')) {
                        this.computeWeekdaysParse();
                    }
                    if (isStrict) {
                        return this._weekdaysMinStrictRegex;
                    }
                    else {
                        return this._weekdaysMinRegex;
                    }
                }
                else {
                    if (!hasOwnProp(this, '_weekdaysMinRegex')) {
                        this._weekdaysMinRegex = matchWord;
                    }
                    return this._weekdaysMinStrictRegex && isStrict ?
                        this._weekdaysMinStrictRegex : this._weekdaysMinRegex;
                }
            };
        /**
         * @param {?} input
         * @return {?}
         */
        Locale.prototype.isPM = /**
         * @param {?} input
         * @return {?}
         */
            function (input) {
                // IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
                // Using charAt should be more compatible.
                return input.toLowerCase().charAt(0) === 'p';
            };
        /**
         * @param {?} hours
         * @param {?} minutes
         * @param {?} isLower
         * @return {?}
         */
        Locale.prototype.meridiem = /**
         * @param {?} hours
         * @param {?} minutes
         * @param {?} isLower
         * @return {?}
         */
            function (hours, minutes, isLower) {
                if (hours > 11) {
                    return isLower ? 'pm' : 'PM';
                }
                return isLower ? 'am' : 'AM';
            };
        /**
         * @param {?} key
         * @return {?}
         */
        Locale.prototype.formatLongDate = /**
         * @param {?} key
         * @return {?}
         */
            function (key) {
                this._longDateFormat = this._longDateFormat ? this._longDateFormat : defaultLongDateFormat;
                var /** @type {?} */ format = this._longDateFormat[key];
                var /** @type {?} */ formatUpper = this._longDateFormat[key.toUpperCase()];
                if (format || !formatUpper) {
                    return format;
                }
                this._longDateFormat[key] = formatUpper.replace(/MMMM|MM|DD|dddd/g, function (val) {
                    return val.slice(1);
                });
                return this._longDateFormat[key];
            };
        /**
         * @param {?} monthName
         * @param {?} format
         * @param {?=} strict
         * @return {?}
         */
        Locale.prototype.handleMonthStrictParse = /**
         * @param {?} monthName
         * @param {?} format
         * @param {?=} strict
         * @return {?}
         */
            function (monthName, format, strict) {
                var /** @type {?} */ llc = monthName.toLocaleLowerCase();
                var /** @type {?} */ i;
                var /** @type {?} */ ii;
                var /** @type {?} */ mom;
                if (!this._monthsParse) {
                    // this is not used
                    this._monthsParse = [];
                    this._longMonthsParse = [];
                    this._shortMonthsParse = [];
                    for (i = 0; i < 12; ++i) {
                        mom = new Date(2000, i);
                        this._shortMonthsParse[i] = this.monthsShort(mom, '').toLocaleLowerCase();
                        this._longMonthsParse[i] = this.months(mom, '').toLocaleLowerCase();
                    }
                }
                if (strict) {
                    if (format === 'MMM') {
                        ii = ((this._shortMonthsParse)).indexOf(llc);
                        return ii !== -1 ? ii : null;
                    }
                    ii = ((this._longMonthsParse)).indexOf(llc);
                    return ii !== -1 ? ii : null;
                }
                if (format === 'MMM') {
                    ii = ((this._shortMonthsParse)).indexOf(llc);
                    if (ii !== -1) {
                        return ii;
                    }
                    ii = ((this._longMonthsParse)).indexOf(llc);
                    return ii !== -1 ? ii : null;
                }
                ii = ((this._longMonthsParse)).indexOf(llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = ((this._shortMonthsParse)).indexOf(llc);
                return ii !== -1 ? ii : null;
            };
        /**
         * @param {?} weekdayName
         * @param {?} format
         * @param {?} strict
         * @return {?}
         */
        Locale.prototype.handleWeekStrictParse = /**
         * @param {?} weekdayName
         * @param {?} format
         * @param {?} strict
         * @return {?}
         */
            function (weekdayName, format, strict) {
                var /** @type {?} */ ii;
                var /** @type {?} */ llc = weekdayName.toLocaleLowerCase();
                if (!this._weekdaysParse) {
                    this._weekdaysParse = [];
                    this._shortWeekdaysParse = [];
                    this._minWeekdaysParse = [];
                    var /** @type {?} */ i = void 0;
                    for (i = 0; i < 7; ++i) {
                        var /** @type {?} */ date = setDayOfWeek(new Date(Date.UTC(2000, 1)), i, null, true);
                        this._minWeekdaysParse[i] = this.weekdaysMin(date).toLocaleLowerCase();
                        this._shortWeekdaysParse[i] = this.weekdaysShort(date).toLocaleLowerCase();
                        this._weekdaysParse[i] = this.weekdays(date, '').toLocaleLowerCase();
                    }
                }
                if (!isArray(this._weekdaysParse)
                    || !isArray(this._shortWeekdaysParse)
                    || !isArray(this._minWeekdaysParse)) {
                    return;
                }
                if (strict) {
                    if (format === 'dddd') {
                        ii = this._weekdaysParse.indexOf(llc);
                        return ii !== -1 ? ii : null;
                    }
                    else if (format === 'ddd') {
                        ii = this._shortWeekdaysParse.indexOf(llc);
                        return ii !== -1 ? ii : null;
                    }
                    else {
                        ii = this._minWeekdaysParse.indexOf(llc);
                        return ii !== -1 ? ii : null;
                    }
                }
                else {
                    if (format === 'dddd') {
                        ii = this._weekdaysParse.indexOf(llc);
                        if (ii !== -1) {
                            return ii;
                        }
                        ii = this._shortWeekdaysParse.indexOf(llc);
                        if (ii !== -1) {
                            return ii;
                        }
                        ii = this._minWeekdaysParse.indexOf(llc);
                        return ii !== -1 ? ii : null;
                    }
                    else if (format === 'ddd') {
                        ii = this._shortWeekdaysParse.indexOf(llc);
                        if (ii !== -1) {
                            return ii;
                        }
                        ii = this._weekdaysParse.indexOf(llc);
                        if (ii !== -1) {
                            return ii;
                        }
                        ii = this._minWeekdaysParse.indexOf(llc);
                        return ii !== -1 ? ii : null;
                    }
                    else {
                        ii = this._minWeekdaysParse.indexOf(llc);
                        if (ii !== -1) {
                            return ii;
                        }
                        ii = this._weekdaysParse.indexOf(llc);
                        if (ii !== -1) {
                            return ii;
                        }
                        ii = this._shortWeekdaysParse.indexOf(llc);
                        return ii !== -1 ? ii : null;
                    }
                }
            };
        /**
         * @return {?}
         */
        Locale.prototype.computeMonthsParse = /**
         * @return {?}
         */
            function () {
                var /** @type {?} */ shortPieces = [];
                var /** @type {?} */ longPieces = [];
                var /** @type {?} */ mixedPieces = [];
                var /** @type {?} */ date;
                var /** @type {?} */ i;
                for (i = 0; i < 12; i++) {
                    // make the regex if we don't have it already
                    date = new Date(2000, i);
                    shortPieces.push(this.monthsShort(date, ''));
                    longPieces.push(this.months(date, ''));
                    mixedPieces.push(this.months(date, ''));
                    mixedPieces.push(this.monthsShort(date, ''));
                }
                // Sorting makes sure if one month (or abbr) is a prefix of another it
                // will match the longer piece.
                shortPieces.sort(cmpLenRev);
                longPieces.sort(cmpLenRev);
                mixedPieces.sort(cmpLenRev);
                for (i = 0; i < 12; i++) {
                    shortPieces[i] = regexEscape(shortPieces[i]);
                    longPieces[i] = regexEscape(longPieces[i]);
                }
                for (i = 0; i < 24; i++) {
                    mixedPieces[i] = regexEscape(mixedPieces[i]);
                }
                this._monthsRegex = new RegExp("^(" + mixedPieces.join('|') + ")", 'i');
                this._monthsShortRegex = this._monthsRegex;
                this._monthsStrictRegex = new RegExp("^(" + longPieces.join('|') + ")", 'i');
                this._monthsShortStrictRegex = new RegExp("^(" + shortPieces.join('|') + ")", 'i');
            };
        /**
         * @return {?}
         */
        Locale.prototype.computeWeekdaysParse = /**
         * @return {?}
         */
            function () {
                var /** @type {?} */ minPieces = [];
                var /** @type {?} */ shortPieces = [];
                var /** @type {?} */ longPieces = [];
                var /** @type {?} */ mixedPieces = [];
                var /** @type {?} */ i;
                for (i = 0; i < 7; i++) {
                    // make the regex if we don't have it already
                    // let mom = createUTC([2000, 1]).day(i);
                    var /** @type {?} */ date = setDayOfWeek(new Date(Date.UTC(2000, 1)), i, null, true);
                    var /** @type {?} */ minp = this.weekdaysMin(date);
                    var /** @type {?} */ shortp = this.weekdaysShort(date);
                    var /** @type {?} */ longp = this.weekdays(date);
                    minPieces.push(minp);
                    shortPieces.push(shortp);
                    longPieces.push(longp);
                    mixedPieces.push(minp);
                    mixedPieces.push(shortp);
                    mixedPieces.push(longp);
                }
                // Sorting makes sure if one weekday (or abbr) is a prefix of another it
                // will match the longer piece.
                minPieces.sort(cmpLenRev);
                shortPieces.sort(cmpLenRev);
                longPieces.sort(cmpLenRev);
                mixedPieces.sort(cmpLenRev);
                for (i = 0; i < 7; i++) {
                    shortPieces[i] = regexEscape(shortPieces[i]);
                    longPieces[i] = regexEscape(longPieces[i]);
                    mixedPieces[i] = regexEscape(mixedPieces[i]);
                }
                this._weekdaysRegex = new RegExp("^(" + mixedPieces.join('|') + ")", 'i');
                this._weekdaysShortRegex = this._weekdaysRegex;
                this._weekdaysMinRegex = this._weekdaysRegex;
                this._weekdaysStrictRegex = new RegExp("^(" + longPieces.join('|') + ")", 'i');
                this._weekdaysShortStrictRegex = new RegExp("^(" + shortPieces.join('|') + ")", 'i');
                this._weekdaysMinStrictRegex = new RegExp("^(" + minPieces.join('|') + ")", 'i');
            };
        return Locale;
    }());
    /**
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    function cmpLenRev(a, b) {
        return b.length - a.length;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ defaultCalendar = {
        sameDay: '[Today at] LT',
        nextDay: '[Tomorrow at] LT',
        nextWeek: 'dddd [at] LT',
        lastDay: '[Yesterday at] LT',
        lastWeek: '[Last] dddd [at] LT',
        sameElse: 'L'
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ defaultInvalidDate = 'Invalid date';
    var /** @type {?} */ defaultLocaleWeek = {
        dow: 0,
        // Sunday is the first day of the week.
        doy: 6 // The week that contains Jan 1st is the first week of the year.
    };
    var /** @type {?} */ defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i;
    var /** @type {?} */ defaultRelativeTime = {
        future: 'in %s',
        past: '%s ago',
        s: 'a few seconds',
        ss: '%d seconds',
        m: 'a minute',
        mm: '%d minutes',
        h: 'an hour',
        hh: '%d hours',
        d: 'a day',
        dd: '%d days',
        M: 'a month',
        MM: '%d months',
        y: 'a year',
        yy: '%d years'
    };
    var /** @type {?} */ baseConfig = {
        calendar: defaultCalendar,
        longDateFormat: defaultLongDateFormat,
        invalidDate: defaultInvalidDate,
        ordinal: defaultOrdinal,
        dayOfMonthOrdinalParse: defaultDayOfMonthOrdinalParse,
        relativeTime: defaultRelativeTime,
        months: defaultLocaleMonths,
        monthsShort: defaultLocaleMonthsShort,
        week: defaultLocaleWeek,
        weekdays: defaultLocaleWeekdays,
        weekdaysMin: defaultLocaleWeekdaysMin,
        weekdaysShort: defaultLocaleWeekdaysShort,
        meridiemParse: defaultLocaleMeridiemParse
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @template T
     * @param {?} array1
     * @param {?} array2
     * @param {?} dontConvert
     * @return {?}
     */
    function compareArrays(array1, array2, dontConvert) {
        var /** @type {?} */ len = Math.min(array1.length, array2.length);
        var /** @type {?} */ lengthDiff = Math.abs(array1.length - array2.length);
        var /** @type {?} */ diffs = 0;
        var /** @type {?} */ i;
        for (i = 0; i < len; i++) {
            if ((dontConvert && array1[i] !== array2[i])
                || (!dontConvert && toInt(array1[i]) !== toInt(array2[i]))) {
                diffs++;
            }
        }
        return diffs + lengthDiff;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @return {?}
     */
    function initWeek() {
        addFormatToken('w', ['ww', 2, false], 'wo', function (date, opts) {
            return getWeek(date, opts.locale)
                .toString(10);
        });
        addFormatToken('W', ['WW', 2, false], 'Wo', function (date) {
            return getISOWeek(date)
                .toString(10);
        });
        // ALIASES
        addUnitAlias('week', 'w');
        addUnitAlias('isoWeek', 'W');
        // PARSING
        addRegexToken('w', match1to2);
        addRegexToken('ww', match1to2, match2);
        addRegexToken('W', match1to2);
        addRegexToken('WW', match1to2, match2);
        addWeekParseToken(['w', 'ww', 'W', 'WW'], function (input, week, config, token) {
            week[token.substr(0, 1)] = toInt(input);
            return config;
        });
        // export function getSetWeek (input) {
        //   var week = this.localeData().week(this);
        //   return input == null ? week : this.add((input - week) * 7, 'd');
        // }
    }
    /**
     * @param {?} date
     * @param {?=} locale
     * @param {?=} isUTC
     * @return {?}
     */
    function getWeek(date, locale, isUTC) {
        if (locale === void 0) {
            locale = getLocale();
        }
        return locale.week(date, isUTC);
    }
    /**
     * @param {?} date
     * @param {?=} isUTC
     * @return {?}
     */
    function getISOWeek(date, isUTC) {
        return weekOfYear(date, 1, 4, isUTC).week;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @return {?}
     */
    function initWeekYear() {
        addFormatToken(null, ['gg', 2, false], null, function (date, opts) {
            // return this.weekYear() % 100;
            return (getWeekYear(date, opts.locale) % 100).toString();
        });
        addFormatToken(null, ['GG', 2, false], null, function (date) {
            // return this.isoWeekYear() % 100;
            return (getISOWeekYear(date) % 100).toString();
        });
        addWeekYearFormatToken('gggg', _getWeekYearFormatCb);
        addWeekYearFormatToken('ggggg', _getWeekYearFormatCb);
        addWeekYearFormatToken('GGGG', _getISOWeekYearFormatCb);
        addWeekYearFormatToken('GGGGG', _getISOWeekYearFormatCb);
        // ALIASES
        addUnitAlias('weekYear', 'gg');
        addUnitAlias('isoWeekYear', 'GG');
        // PARSING
        addRegexToken('G', matchSigned);
        addRegexToken('g', matchSigned);
        addRegexToken('GG', match1to2, match2);
        addRegexToken('gg', match1to2, match2);
        addRegexToken('GGGG', match1to4, match4);
        addRegexToken('gggg', match1to4, match4);
        addRegexToken('GGGGG', match1to6, match6);
        addRegexToken('ggggg', match1to6, match6);
        addWeekParseToken(['gggg', 'ggggg', 'GGGG', 'GGGGG'], function (input, week, config, token) {
            week[token.substr(0, 2)] = toInt(input);
            return config;
        });
        addWeekParseToken(['gg', 'GG'], function (input, week, config, token) {
            week[token] = parseTwoDigitYear(input);
            return config;
        });
    }
    /**
     * @param {?} token
     * @param {?} getter
     * @return {?}
     */
    function addWeekYearFormatToken(token, getter) {
        addFormatToken(null, [token, token.length, false], null, getter);
    }
    /**
     * @param {?} date
     * @param {?} opts
     * @return {?}
     */
    function _getWeekYearFormatCb(date, opts) {
        return getWeekYear(date, opts.locale).toString();
    }
    /**
     * @param {?} date
     * @return {?}
     */
    function _getISOWeekYearFormatCb(date) {
        return getISOWeekYear(date).toString();
    }
    /**
     * @param {?} date
     * @param {?=} locale
     * @param {?=} isUTC
     * @return {?}
     */
    function getWeekYear(date, locale, isUTC) {
        if (locale === void 0) {
            locale = getLocale();
        }
        return weekOfYear(date, locale.firstDayOfWeek(), locale.firstDayOfYear(), isUTC).year;
    }
    /**
     * @param {?} date
     * @param {?=} isUTC
     * @return {?}
     */
    function getISOWeekYear(date, isUTC) {
        return weekOfYear(date, 1, 4, isUTC).year;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @return {?}
     */
    function initTimezone() {
        // FORMATTING
        addFormatToken('z', null, null, function (date, opts) {
            return opts.isUTC ? 'UTC' : '';
        });
        addFormatToken('zz', null, null, function (date, opts) {
            return opts.isUTC ? 'Coordinated Universal Time' : '';
        });
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @return {?}
     */
    function initTimestamp() {
        // FORMATTING
        addFormatToken('X', null, null, function (date) {
            return unix(date)
                .toString(10);
        });
        addFormatToken('x', null, null, function (date) {
            return date.valueOf()
                .toString(10);
        });
        // PARSING
        addRegexToken('x', matchSigned);
        addRegexToken('X', matchTimestamp);
        addParseToken('X', function (input, array, config) {
            config._d = new Date(parseFloat(input) * 1000);
            return config;
        });
        addParseToken('x', function (input, array, config) {
            config._d = new Date(toInt(input));
            return config;
        });
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @return {?}
     */
    function initSecond() {
        // FORMATTING
        addFormatToken('s', ['ss', 2, false], null, function (date, opts) {
            return getSeconds(date, opts.isUTC)
                .toString(10);
        });
        // ALIASES
        addUnitAlias('second', 's');
        // PARSING
        addRegexToken('s', match1to2);
        addRegexToken('ss', match1to2, match2);
        addParseToken(['s', 'ss'], SECOND);
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @return {?}
     */
    function initQuarter() {
        // FORMATTING
        addFormatToken('Q', null, 'Qo', function (date, opts) {
            return getQuarter(date, opts.isUTC)
                .toString(10);
        });
        // ALIASES
        addUnitAlias('quarter', 'Q');
        // PARSING
        addRegexToken('Q', match1);
        addParseToken('Q', function (input, array, config) {
            array[MONTH] = (toInt(input) - 1) * 3;
            return config;
        });
    }
    /**
     * @param {?} date
     * @param {?=} isUTC
     * @return {?}
     */
    function getQuarter(date, isUTC) {
        if (isUTC === void 0) {
            isUTC = false;
        }
        return Math.ceil((getMonth(date, isUTC) + 1) / 3);
    }
    // export function getSetQuarter(input) {
    //   return input == null
    //     ? Math.ceil((this.month() + 1) / 3)
    //     : this.month((input - 1) * 3 + this.month() % 3);
    // }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @param {?} token
     * @param {?} separator
     * @return {?}
     */
    function addOffsetFormatToken(token, separator) {
        addFormatToken(token, null, null, function (date, config) {
            var /** @type {?} */ offset = getUTCOffset(date, { _isUTC: config.isUTC, _offset: config.offset });
            var /** @type {?} */ sign = '+';
            if (offset < 0) {
                offset = -offset;
                sign = '-';
            }
            return sign + zeroFill(~~(offset / 60), 2) + separator + zeroFill(~~(offset) % 60, 2);
        });
    }
    /**
     * @return {?}
     */
    function initOffset() {
        addOffsetFormatToken('Z', ':');
        addOffsetFormatToken('ZZ', '');
        // PARSING
        addRegexToken('Z', matchShortOffset);
        addRegexToken('ZZ', matchShortOffset);
        addParseToken(['Z', 'ZZ'], function (input, array, config) {
            config._useUTC = true;
            config._tzm = offsetFromString(matchShortOffset, input);
            return config;
        });
    }
    // HELPERS
    // timezone chunker
    // '+10:00' > ['10',  '00']
    // '-1530'  > ['-15', '30']
    var /** @type {?} */ chunkOffset = /([\+\-]|\d\d)/gi;
    /**
     * @param {?} matcher
     * @param {?} str
     * @return {?}
     */
    function offsetFromString(matcher, str) {
        var /** @type {?} */ matches = (str || '').match(matcher);
        if (matches === null) {
            return null;
        }
        var /** @type {?} */ chunk = matches[matches.length - 1];
        var /** @type {?} */ parts = chunk.match(chunkOffset) || ['-', '0', '0'];
        var /** @type {?} */ minutes = parseInt(parts[1], 10) * 60 + toInt(parts[2]);
        var /** @type {?} */ _min = parts[0] === '+' ? minutes : -minutes;
        return minutes === 0 ? 0 : _min;
    }
    /**
     * @param {?} input
     * @param {?} date
     * @param {?=} config
     * @return {?}
     */
    function cloneWithOffset(input, date, config) {
        if (config === void 0) {
            config = {};
        }
        if (!config._isUTC) {
            return input;
        }
        var /** @type {?} */ res = cloneDate(date);
        // todo: input._d - res._d + ((res._offset || 0) - (input._offset || 0))*60000
        var /** @type {?} */ offsetDiff = (config._offset || 0) * 60000;
        var /** @type {?} */ diff = input.valueOf() - res.valueOf() + offsetDiff;
        // Use low-level api, because this fn is low-level api.
        res.setTime(res.valueOf() + diff);
        // todo: add timezone handling
        // hooks.updateOffset(res, false);
        return res;
    }
    /**
     * @param {?} date
     * @return {?}
     */
    function getDateOffset(date) {
        // On Firefox.24 Date#getTimezoneOffset returns a floating point.
        // https://github.com/moment/moment/pull/1871
        return -Math.round(date.getTimezoneOffset() / 15) * 15;
    }
    /**
     * @param {?} date
     * @param {?=} config
     * @return {?}
     */
    function getUTCOffset(date, config) {
        if (config === void 0) {
            config = {};
        }
        var /** @type {?} */ _offset = config._offset || 0;
        return config._isUTC ? _offset : getDateOffset(date);
    }
    // DEPRECATED
    /*export function isDaylightSavingTimeShifted() {
      if (!isUndefined(this._isDSTShifted)) {
        return this._isDSTShifted;
      }

      const c = {};

      copyConfig(c, this);
      c = prepareConfig(c);

      if (c._a) {
        const other = c._isUTC ? createUTC(c._a) : createLocal(c._a);
        this._isDSTShifted = this.isValid() &&
          compareArrays(c._a, other.toArray()) > 0;
      } else {
        this._isDSTShifted = false;
      }

      return this._isDSTShifted;
    }*/
    // in Khronos
    /*export function isLocal() {
      return this.isValid() ? !this._isUTC : false;
    }

    export function isUtcOffset() {
      return this.isValid() ? this._isUTC : false;
    }

    export function isUtc() {
      return this.isValid() ? this._isUTC && this._offset === 0 : false;
    }*/

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @return {?}
     */
    function initMinute() {
        // FORMATTING
        addFormatToken('m', ['mm', 2, false], null, function (date, opts) {
            return getMinutes(date, opts.isUTC)
                .toString(10);
        });
        // ALIASES
        addUnitAlias('minute', 'm');
        // PARSING
        addRegexToken('m', match1to2);
        addRegexToken('mm', match1to2, match2);
        addParseToken(['m', 'mm'], MINUTE);
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @return {?}
     */
    function initMillisecond() {
        addFormatToken('S', null, null, function (date, opts) {
            return (~~(getMilliseconds(date, opts.isUTC) / 100)).toString(10);
        });
        addFormatToken(null, ['SS', 2, false], null, function (date, opts) {
            return (~~(getMilliseconds(date, opts.isUTC) / 10)).toString(10);
        });
        addFormatToken(null, ['SSS', 3, false], null, function (date, opts) {
            return (getMilliseconds(date, opts.isUTC)).toString(10);
        });
        addFormatToken(null, ['SSSS', 4, false], null, function (date, opts) {
            return (getMilliseconds(date, opts.isUTC) * 10).toString(10);
        });
        addFormatToken(null, ['SSSSS', 5, false], null, function (date, opts) {
            return (getMilliseconds(date, opts.isUTC) * 100).toString(10);
        });
        addFormatToken(null, ['SSSSSS', 6, false], null, function (date, opts) {
            return (getMilliseconds(date, opts.isUTC) * 1000).toString(10);
        });
        addFormatToken(null, ['SSSSSSS', 7, false], null, function (date, opts) {
            return (getMilliseconds(date, opts.isUTC) * 10000).toString(10);
        });
        addFormatToken(null, ['SSSSSSSS', 8, false], null, function (date, opts) {
            return (getMilliseconds(date, opts.isUTC) * 100000).toString(10);
        });
        addFormatToken(null, ['SSSSSSSSS', 9, false], null, function (date, opts) {
            return (getMilliseconds(date, opts.isUTC) * 1000000).toString(10);
        });
        // ALIASES
        addUnitAlias('millisecond', 'ms');
        // PARSING
        addRegexToken('S', match1to3, match1);
        addRegexToken('SS', match1to3, match2);
        addRegexToken('SSS', match1to3, match3);
        var /** @type {?} */ token;
        for (token = 'SSSS'; token.length <= 9; token += 'S') {
            addRegexToken(token, matchUnsigned);
        }
        /**
         * @param {?} input
         * @param {?} array
         * @param {?} config
         * @return {?}
         */
        function parseMs(input, array, config) {
            array[MILLISECOND] = toInt(parseFloat("0." + input) * 1000);
            return config;
        }
        for (token = 'S'; token.length <= 9; token += 'S') {
            addParseToken(token, parseMs);
        }
        // MOMENTS
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @return {?}
     */
    function initHour() {
        /**
         * @param {?} date
         * @param {?} isUTC
         * @return {?}
         */
        function hFormat(date, isUTC) {
            return getHours(date, isUTC) % 12 || 12;
        }
        /**
         * @param {?} date
         * @param {?} isUTC
         * @return {?}
         */
        function kFormat(date, isUTC) {
            return getHours(date, isUTC) || 24;
        }
        addFormatToken('H', ['HH', 2, false], null, function (date, opts) {
            return getHours(date, opts.isUTC)
                .toString(10);
        });
        addFormatToken('h', ['hh', 2, false], null, function (date, opts) {
            return hFormat(date, opts.isUTC)
                .toString(10);
        });
        addFormatToken('k', ['kk', 2, false], null, function (date, opts) {
            return kFormat(date, opts.isUTC)
                .toString(10);
        });
        addFormatToken('hmm', null, null, function (date, opts) {
            var /** @type {?} */ _h = hFormat(date, opts.isUTC);
            var /** @type {?} */ _mm = zeroFill(getMinutes(date, opts.isUTC), 2);
            return "" + _h + _mm;
        });
        addFormatToken('hmmss', null, null, function (date, opts) {
            var /** @type {?} */ _h = hFormat(date, opts.isUTC);
            var /** @type {?} */ _mm = zeroFill(getMinutes(date, opts.isUTC), 2);
            var /** @type {?} */ _ss = zeroFill(getSeconds(date, opts.isUTC), 2);
            return "" + _h + _mm + _ss;
        });
        addFormatToken('Hmm', null, null, function (date, opts) {
            var /** @type {?} */ _H = getHours(date, opts.isUTC);
            var /** @type {?} */ _mm = zeroFill(getMinutes(date, opts.isUTC), 2);
            return "" + _H + _mm;
        });
        addFormatToken('Hmmss', null, null, function (date, opts) {
            var /** @type {?} */ _H = getHours(date, opts.isUTC);
            var /** @type {?} */ _mm = zeroFill(getMinutes(date, opts.isUTC), 2);
            var /** @type {?} */ _ss = zeroFill(getSeconds(date, opts.isUTC), 2);
            return "" + _H + _mm + _ss;
        });
        /**
         * @param {?} token
         * @param {?} lowercase
         * @return {?}
         */
        function meridiem(token, lowercase) {
            addFormatToken(token, null, null, function (date, opts) {
                return opts.locale.meridiem(getHours(date, opts.isUTC), getMinutes(date, opts.isUTC), lowercase);
            });
        }
        meridiem('a', true);
        meridiem('A', false);
        // ALIASES
        addUnitAlias('hour', 'h');
        /**
         * @param {?} isStrict
         * @param {?} locale
         * @return {?}
         */
        function matchMeridiem(isStrict, locale) {
            return locale._meridiemParse;
        }
        addRegexToken('a', matchMeridiem);
        addRegexToken('A', matchMeridiem);
        addRegexToken('H', match1to2);
        addRegexToken('h', match1to2);
        addRegexToken('k', match1to2);
        addRegexToken('HH', match1to2, match2);
        addRegexToken('hh', match1to2, match2);
        addRegexToken('kk', match1to2, match2);
        addRegexToken('hmm', match3to4);
        addRegexToken('hmmss', match5to6);
        addRegexToken('Hmm', match3to4);
        addRegexToken('Hmmss', match5to6);
        addParseToken(['H', 'HH'], HOUR);
        addParseToken(['k', 'kk'], function (input, array, config) {
            var /** @type {?} */ kInput = toInt(input);
            array[HOUR] = kInput === 24 ? 0 : kInput;
            return config;
        });
        addParseToken(['a', 'A'], function (input, array, config) {
            config._isPm = config._locale.isPM(input);
            config._meridiem = input;
            return config;
        });
        addParseToken(['h', 'hh'], function (input, array, config) {
            array[HOUR] = toInt(input);
            getParsingFlags(config).bigHour = true;
            return config;
        });
        addParseToken('hmm', function (input, array, config) {
            var /** @type {?} */ pos = input.length - 2;
            array[HOUR] = toInt(input.substr(0, pos));
            array[MINUTE] = toInt(input.substr(pos));
            getParsingFlags(config).bigHour = true;
            return config;
        });
        addParseToken('hmmss', function (input, array, config) {
            var /** @type {?} */ pos1 = input.length - 4;
            var /** @type {?} */ pos2 = input.length - 2;
            array[HOUR] = toInt(input.substr(0, pos1));
            array[MINUTE] = toInt(input.substr(pos1, 2));
            array[SECOND] = toInt(input.substr(pos2));
            getParsingFlags(config).bigHour = true;
            return config;
        });
        addParseToken('Hmm', function (input, array, config) {
            var /** @type {?} */ pos = input.length - 2;
            array[HOUR] = toInt(input.substr(0, pos));
            array[MINUTE] = toInt(input.substr(pos));
            return config;
        });
        addParseToken('Hmmss', function (input, array, config) {
            var /** @type {?} */ pos1 = input.length - 4;
            var /** @type {?} */ pos2 = input.length - 2;
            array[HOUR] = toInt(input.substr(0, pos1));
            array[MINUTE] = toInt(input.substr(pos1, 2));
            array[SECOND] = toInt(input.substr(pos2));
            return config;
        });
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ locales = {};
    var /** @type {?} */ localeFamilies = {};
    var /** @type {?} */ globalLocale;
    /**
     * @param {?} key
     * @return {?}
     */
    function normalizeLocale(key) {
        return key ? key.toLowerCase().replace('_', '-') : key;
    }
    /**
     * @param {?} names
     * @return {?}
     */
    function chooseLocale(names) {
        var /** @type {?} */ next;
        var /** @type {?} */ locale;
        var /** @type {?} */ i = 0;
        while (i < names.length) {
            var /** @type {?} */ split = normalizeLocale(names[i]).split('-');
            var /** @type {?} */ j = split.length;
            next = normalizeLocale(names[i + 1]);
            next = next ? next.split('-') : null;
            while (j > 0) {
                locale = loadLocale(split.slice(0, j).join('-'));
                if (locale) {
                    return locale;
                }
                if (next && next.length >= j && compareArrays(split, next, true) >= j - 1) {
                    // the next array item is better than a shallower substring of this one
                    break;
                }
                j--;
            }
            i++;
        }
        return null;
    }
    /**
     * @param {?} parentConfig
     * @param {?} childConfig
     * @return {?}
     */
    function mergeConfigs(parentConfig, childConfig) {
        var /** @type {?} */ res = Object.assign({}, parentConfig);
        for (var /** @type {?} */ childProp in childConfig) {
            if (!hasOwnProp(childConfig, childProp)) {
                continue;
            }
            if (isObject(parentConfig[childProp]) && isObject(childConfig[childProp])) {
                res[childProp] = {};
                Object.assign(res[childProp], parentConfig[childProp]);
                Object.assign(res[childProp], childConfig[childProp]);
            }
            else if (childConfig[childProp] != null) {
                res[childProp] = childConfig[childProp];
            }
            else {
                delete res[childProp];
            }
        }
        var /** @type {?} */ parentProp;
        for (parentProp in parentConfig) {
            if (hasOwnProp(parentConfig, parentProp) &&
                !hasOwnProp(childConfig, parentProp) &&
                isObject(parentConfig[(parentProp)])) {
                // make sure changes to properties don't modify parent config
                res[(parentProp)] = Object.assign({}, res[(parentProp)]);
            }
        }
        return res;
    }
    /**
     * @param {?} name
     * @return {?}
     */
    function loadLocale(name) {
        // no way!
        /* var oldLocale = null;
           // TODO: Find a better way to register and load all the locales in Node
           if (!locales[name] && (typeof module !== 'undefined') &&
             module && module.exports) {
             try {
               oldLocale = globalLocale._abbr;
               var aliasedRequire = require;
               aliasedRequire('./locale/' + name);
               getSetGlobalLocale(oldLocale);
             } catch (e) {}
           }*/
        if (!locales[name]) {
            // tslint:disable-next-line
            console.error("Khronos locale error: please load locale \"" + name + "\" before using it");
            // throw new Error(`Khronos locale error: please load locale "${name}" before using it`);
        }
        return locales[name];
    }
    /**
     * @param {?=} key
     * @param {?=} values
     * @return {?}
     */
    function getSetGlobalLocale(key, values) {
        var /** @type {?} */ data;
        if (key) {
            if (isUndefined(values)) {
                data = getLocale(key);
            }
            else if (isString(key)) {
                data = defineLocale(key, values);
            }
            if (data) {
                globalLocale = data;
            }
        }
        return globalLocale && globalLocale._abbr;
    }
    /**
     * @param {?} name
     * @param {?=} config
     * @return {?}
     */
    function defineLocale(name, config) {
        if (config === null) {
            // useful for testing
            delete locales[name];
            globalLocale = getLocale('en');
            return null;
        }
        if (!config) {
            return;
        }
        var /** @type {?} */ parentConfig = baseConfig;
        config.abbr = name;
        if (config.parentLocale != null) {
            if (locales[config.parentLocale] != null) {
                parentConfig = locales[config.parentLocale]._config;
            }
            else {
                if (!localeFamilies[config.parentLocale]) {
                    localeFamilies[config.parentLocale] = [];
                }
                localeFamilies[config.parentLocale].push({ name: name, config: config });
                return null;
            }
        }
        locales[name] = new Locale(mergeConfigs(parentConfig, config));
        if (localeFamilies[name]) {
            localeFamilies[name].forEach(function (x) {
                defineLocale(x.name, x.config);
            });
        }
        // backwards compat for now: also set the locale
        // make sure we set the locale AFTER all child locales have been
        // created, so we won't end up with the child locale set.
        getSetGlobalLocale(name);
        return locales[name];
    }
    /**
     * @param {?} name
     * @param {?=} config
     * @return {?}
     */
    function updateLocale(name, config) {
        var /** @type {?} */ _config = config;
        if (_config != null) {
            var /** @type {?} */ parentConfig = baseConfig;
            // MERGE
            var /** @type {?} */ tmpLocale = loadLocale(name);
            if (tmpLocale != null) {
                parentConfig = tmpLocale._config;
            }
            _config = mergeConfigs(parentConfig, _config);
            var /** @type {?} */ locale = new Locale(_config);
            locale.parentLocale = locales[name];
            locales[name] = locale;
            // backwards compat for now: also set the locale
            getSetGlobalLocale(name);
        }
        else {
            // pass null for config to unupdate, useful for tests
            if (locales[name] != null) {
                if (locales[name].parentLocale != null) {
                    locales[name] = locales[name].parentLocale;
                }
                else if (locales[name] != null) {
                    delete locales[name];
                }
            }
        }
        return locales[name];
    }
    /**
     * @param {?=} key
     * @return {?}
     */
    function getLocale(key) {
        setDefaultLocale();
        if (!key) {
            return globalLocale;
        }
        // let locale;
        var /** @type {?} */ _key = isArray(key) ? key : [key];
        return chooseLocale(_key);
    }
    /**
     * @return {?}
     */
    function listLocales() {
        return Object.keys(locales);
    }
    /**
     * @return {?}
     */
    function setDefaultLocale() {
        if (locales["en"]) {
            return undefined;
        }
        getSetGlobalLocale('en', {
            dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
            ordinal: /**
             * @param {?} num
             * @return {?}
             */ function (num) {
                var /** @type {?} */ b = num % 10;
                var /** @type {?} */ output = toInt((num % 100) / 10) === 1
                    ? 'th'
                    : b === 1 ? 'st' : b === 2 ? 'nd' : b === 3 ? 'rd' : 'th';
                return num + output;
            }
        });
        initWeek();
        initWeekYear();
        initYear();
        initTimezone();
        initTimestamp();
        initSecond();
        initQuarter();
        initOffset();
        initMonth();
        initMinute();
        initMillisecond();
        initHour();
        initDayOfYear();
        initDayOfWeek();
        initDayOfMonth();
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ ordering = ['year', 'quarter', 'month', 'week', 'day', 'hours', 'minutes', 'seconds', 'milliseconds'];
    var ɵ0 = function (mem, order) {
        mem[order] = true;
        return mem;
    };
    var /** @type {?} */ orderingHash = ordering.reduce(ɵ0, {});
    /**
     * @param {?} duration
     * @return {?}
     */
    function isDurationValid(duration) {
        var /** @type {?} */ durationKeys = Object.keys(duration);
        if (durationKeys
            .some(function (key) {
            return (key in orderingHash)
                && duration[key] === null
                || isNaN(duration[key]);
        })) {
            return false;
        }
        // for (let key in duration) {
        //   if (!(indexOf.call(ordering, key) !== -1 && (duration[key] == null || !isNaN(duration[key])))) {
        //     return false;
        //   }
        // }
        var /** @type {?} */ unitHasDecimal = false;
        for (var /** @type {?} */ i = 0; i < ordering.length; ++i) {
            if (duration[ordering[i]]) {
                // only allow non-integers for smallest unit
                if (unitHasDecimal) {
                    return false;
                }
                if (duration[ordering[i]] !== toInt(duration[ordering[i]])) {
                    unitHasDecimal = true;
                }
            }
        }
        return true;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @param {?} number
     * @return {?}
     */
    function absCeil(number) {
        return number < 0 ? Math.floor(number) : Math.ceil(number);
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @param {?} dur
     * @return {?}
     */
    function bubble(dur) {
        var /** @type {?} */ milliseconds = dur._milliseconds;
        var /** @type {?} */ days = dur._days;
        var /** @type {?} */ months = dur._months;
        var /** @type {?} */ data = dur._data;
        // if we have a mix of positive and negative values, bubble down first
        // check: https://github.com/moment/moment/issues/2166
        if (!((milliseconds >= 0 && days >= 0 && months >= 0) ||
            (milliseconds <= 0 && days <= 0 && months <= 0))) {
            milliseconds += absCeil(monthsToDays(months) + days) * 864e5;
            days = 0;
            months = 0;
        }
        // The following code bubbles up values, see the tests for
        // examples of what that means.
        data.milliseconds = milliseconds % 1000;
        var /** @type {?} */ seconds = absFloor(milliseconds / 1000);
        data.seconds = seconds % 60;
        var /** @type {?} */ minutes = absFloor(seconds / 60);
        data.minutes = minutes % 60;
        var /** @type {?} */ hours = absFloor(minutes / 60);
        data.hours = hours % 24;
        days += absFloor(hours / 24);
        // convert days to months
        var /** @type {?} */ monthsFromDays = absFloor(daysToMonths(days));
        months += monthsFromDays;
        days -= absCeil(monthsToDays(monthsFromDays));
        // 12 months -> 1 year
        var /** @type {?} */ years = absFloor(months / 12);
        months %= 12;
        data.day = days;
        data.month = months;
        data.year = years;
        return dur;
    }
    /**
     * @param {?} day
     * @return {?}
     */
    function daysToMonths(day) {
        // 400 years have 146097 days (taking into account leap year rules)
        // 400 years have 12 months === 4800
        return day * 4800 / 146097;
    }
    /**
     * @param {?} month
     * @return {?}
     */
    function monthsToDays(month) {
        // the reverse of daysToMonths
        return month * 146097 / 4800;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ round = Math.round;
    var /** @type {?} */ thresholds = {
        ss: 44,
        // a few seconds to seconds
        s: 45,
        // seconds to minute
        m: 45,
        // minutes to hour
        h: 22,
        // hours to day
        d: 26,
        // days to month
        M: 11 // months to year
    };
    /**
     * @param {?} str
     * @param {?} num
     * @param {?} withoutSuffix
     * @param {?} isFuture
     * @param {?} locale
     * @return {?}
     */
    function substituteTimeAgo(str, num, withoutSuffix, isFuture, locale) {
        return locale.relativeTime(num || 1, !!withoutSuffix, str, isFuture);
    }
    /**
     * @param {?} posNegDuration
     * @param {?} withoutSuffix
     * @param {?} locale
     * @return {?}
     */
    function relativeTime(posNegDuration, withoutSuffix, locale) {
        var /** @type {?} */ duration = createDuration(posNegDuration).abs();
        var /** @type {?} */ seconds = round(duration.as('s'));
        var /** @type {?} */ minutes = round(duration.as('m'));
        var /** @type {?} */ hours = round(duration.as('h'));
        var /** @type {?} */ days = round(duration.as('d'));
        var /** @type {?} */ months = round(duration.as('M'));
        var /** @type {?} */ years = round(duration.as('y'));
        var /** @type {?} */ a = seconds <= thresholds["ss"] && ['s', seconds] ||
            seconds < thresholds["s"] && ['ss', seconds] ||
            minutes <= 1 && ['m'] ||
            minutes < thresholds["m"] && ['mm', minutes] ||
            hours <= 1 && ['h'] ||
            hours < thresholds["h"] && ['hh', hours] ||
            days <= 1 && ['d'] ||
            days < thresholds["d"] && ['dd', days] ||
            months <= 1 && ['M'] ||
            months < thresholds["M"] && ['MM', months] ||
            years <= 1 && ['y'] || ['yy', years];
        var /** @type {?} */ b = [a[0], a[1], withoutSuffix, +posNegDuration > 0, locale];
        // a[2] = withoutSuffix;
        // a[3] = +posNegDuration > 0;
        // a[4] = locale;
        return substituteTimeAgo.apply(null, b);
    }
    // export function humanize(withSuffix) {
    //   if (!this.isValid()) {
    //     return this.localeData().invalidDate();
    //   }
    //
    //   const locale = this.localeData();
    //   let output = relativeTime(this, !withSuffix, locale);
    //
    //   if (withSuffix) {
    //     output = locale.pastFuture(+this, output);
    //   }
    //
    //   return locale.postformat(output);
    // }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var Duration = (function () {
        function Duration(duration, config) {
            if (config === void 0) {
                config = {};
            }
            this._data = {};
            this._locale = getLocale();
            this._locale = config && config._locale || getLocale();
            // const normalizedInput = normalizeObjectUnits(duration);
            var /** @type {?} */ normalizedInput = duration;
            var /** @type {?} */ years = normalizedInput.year || 0;
            var /** @type {?} */ quarters = normalizedInput.quarter || 0;
            var /** @type {?} */ months = normalizedInput.month || 0;
            var /** @type {?} */ weeks = normalizedInput.week || 0;
            var /** @type {?} */ days = normalizedInput.day || 0;
            var /** @type {?} */ hours = normalizedInput.hours || 0;
            var /** @type {?} */ minutes = normalizedInput.minutes || 0;
            var /** @type {?} */ seconds = normalizedInput.seconds || 0;
            var /** @type {?} */ milliseconds = normalizedInput.milliseconds || 0;
            this._isValid = isDurationValid(normalizedInput);
            // representation for dateAddRemove
            this._milliseconds = +milliseconds +
                seconds * 1000 +
                minutes * 60 * 1000 + // 1000 * 60
                // 1000 * 60
                hours * 1000 * 60 * 60; // using 1000 * 60 * 60
            // instead of 36e5 to avoid floating point rounding errors https://github.com/moment/moment/issues/2978
            // Because of dateAddRemove treats 24 hours as different from a
            // day when working around DST, we need to store them separately
            this._days = +days +
                weeks * 7;
            // It is impossible to translate months into days without knowing
            // which months you are are talking about, so we have to store
            // it separately.
            this._months = +months +
                quarters * 3 +
                years * 12;
            // this._data = {};
            // this._locale = getLocale();
            // this._bubble();
            return bubble(this);
        }
        /**
         * @return {?}
         */
        Duration.prototype.isValid = /**
         * @return {?}
         */
            function () {
                return this._isValid;
            };
        /**
         * @param {?=} withSuffix
         * @return {?}
         */
        Duration.prototype.humanize = /**
         * @param {?=} withSuffix
         * @return {?}
         */
            function (withSuffix) {
                // throw new Error(`TODO: implement`);
                if (!this.isValid()) {
                    return this.localeData().invalidDate;
                }
                var /** @type {?} */ locale = this.localeData();
                var /** @type {?} */ output = relativeTime(this, !withSuffix, locale);
                if (withSuffix) {
                    output = locale.pastFuture(+this, output);
                }
                return locale.postformat(output);
            };
        /**
         * @return {?}
         */
        Duration.prototype.localeData = /**
         * @return {?}
         */
            function () {
                return this._locale;
            };
        /**
         * @param {?=} localeKey
         * @return {?}
         */
        Duration.prototype.locale = /**
         * @param {?=} localeKey
         * @return {?}
         */
            function (localeKey) {
                if (!localeKey) {
                    return this._locale._abbr;
                }
                this._locale = getLocale(localeKey) || this._locale;
                return this;
            };
        /**
         * @return {?}
         */
        Duration.prototype.abs = /**
         * @return {?}
         */
            function () {
                var /** @type {?} */ mathAbs = Math.abs;
                var /** @type {?} */ data = this._data;
                this._milliseconds = mathAbs(this._milliseconds);
                this._days = mathAbs(this._days);
                this._months = mathAbs(this._months);
                data.milliseconds = mathAbs(data.milliseconds);
                data.seconds = mathAbs(data.seconds);
                data.minutes = mathAbs(data.minutes);
                data.hours = mathAbs(data.hours);
                data.month = mathAbs(data.month);
                data.year = mathAbs(data.year);
                return this;
            };
        /**
         * @param {?} _units
         * @return {?}
         */
        Duration.prototype.as = /**
         * @param {?} _units
         * @return {?}
         */
            function (_units) {
                if (!this.isValid()) {
                    return NaN;
                }
                var /** @type {?} */ days;
                var /** @type {?} */ months;
                var /** @type {?} */ milliseconds = this._milliseconds;
                var /** @type {?} */ units = normalizeUnits(_units);
                if (units === 'month' || units === 'year') {
                    days = this._days + milliseconds / 864e5;
                    months = this._months + daysToMonths(days);
                    return units === 'month' ? months : months / 12;
                }
                // handle milliseconds separately because of floating point math errors (issue #1867)
                days = this._days + Math.round(monthsToDays(this._months));
                switch (units) {
                    case 'week':
                        return days / 7 + milliseconds / 6048e5;
                    case 'day':
                        return days + milliseconds / 864e5;
                    case 'hours':
                        return days * 24 + milliseconds / 36e5;
                    case 'minutes':
                        return days * 1440 + milliseconds / 6e4;
                    case 'seconds':
                        return days * 86400 + milliseconds / 1000;
                    // Math.floor prevents floating point math errors here
                    case 'milliseconds':
                        return Math.floor(days * 864e5) + milliseconds;
                    default:
                        throw new Error("Unknown unit " + units);
                }
            };
        /**
         * @return {?}
         */
        Duration.prototype.valueOf = /**
         * @return {?}
         */
            function () {
                if (!this.isValid()) {
                    return NaN;
                }
                return (this._milliseconds +
                    this._days * 864e5 +
                    (this._months % 12) * 2592e6 +
                    toInt(this._months / 12) * 31536e6);
            };
        return Duration;
    }());
    /**
     * @param {?} obj
     * @return {?}
     */
    function isDuration(obj) {
        return obj instanceof Duration;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @param {?} config
     * @return {?}
     */
    function isValid(config) {
        if (config._isValid == null) {
            var /** @type {?} */ flags = getParsingFlags(config);
            var /** @type {?} */ parsedParts = Array.prototype.some.call(flags.parsedDateParts, function (i) {
                return i != null;
            });
            var /** @type {?} */ isNowValid = !isNaN(config._d && config._d.getTime()) &&
                flags.overflow < 0 &&
                !flags.empty &&
                !flags.invalidMonth &&
                !flags.invalidWeekday &&
                !flags.weekdayMismatch &&
                !flags.nullInput &&
                !flags.invalidFormat &&
                !flags.userInvalidated &&
                (!flags.meridiem || (flags.meridiem && parsedParts));
            if (config._strict) {
                isNowValid = isNowValid &&
                    flags.charsLeftOver === 0 &&
                    flags.unusedTokens.length === 0 &&
                    flags.bigHour === undefined;
            }
            if (Object.isFrozen == null || !Object.isFrozen(config)) {
                config._isValid = isNowValid;
            }
            else {
                return isNowValid;
            }
        }
        return config._isValid;
    }
    /**
     * @param {?} config
     * @param {?=} flags
     * @return {?}
     */
    function createInvalid(config, flags) {
        config._d = new Date(NaN);
        Object.assign(getParsingFlags(config), flags || { userInvalidated: true });
        return config;
    }
    /**
     * @param {?} config
     * @return {?}
     */
    function markInvalid(config) {
        config._isValid = false;
        return config;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    // iso 8601 regex
    // 0000-00-00 0000-W00 or 0000-W00-0 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000 or +00)
    // tslint:disable-next-line
    var /** @type {?} */ extendedIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;
    // tslint:disable-next-line
    var /** @type {?} */ basicIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;
    var /** @type {?} */ tzRegex = /Z|[+-]\d\d(?::?\d\d)?/;
    var /** @type {?} */ isoDates = [
        ['YYYYYY-MM-DD', /[+-]\d{6}-\d\d-\d\d/, true],
        ['YYYY-MM-DD', /\d{4}-\d\d-\d\d/, true],
        ['GGGG-[W]WW-E', /\d{4}-W\d\d-\d/, true],
        ['GGGG-[W]WW', /\d{4}-W\d\d/, false],
        ['YYYY-DDD', /\d{4}-\d{3}/, true],
        ['YYYY-MM', /\d{4}-\d\d/, false],
        ['YYYYYYMMDD', /[+-]\d{10}/, true],
        ['YYYYMMDD', /\d{8}/, true],
        // YYYYMM is NOT allowed by the standard
        ['GGGG[W]WWE', /\d{4}W\d{3}/, true],
        ['GGGG[W]WW', /\d{4}W\d{2}/, false],
        ['YYYYDDD', /\d{7}/, true]
    ];
    // iso time formats and regexes
    var /** @type {?} */ isoTimes = [
        ['HH:mm:ss.SSSS', /\d\d:\d\d:\d\d\.\d+/],
        ['HH:mm:ss,SSSS', /\d\d:\d\d:\d\d,\d+/],
        ['HH:mm:ss', /\d\d:\d\d:\d\d/],
        ['HH:mm', /\d\d:\d\d/],
        ['HHmmss.SSSS', /\d\d\d\d\d\d\.\d+/],
        ['HHmmss,SSSS', /\d\d\d\d\d\d,\d+/],
        ['HHmmss', /\d\d\d\d\d\d/],
        ['HHmm', /\d\d\d\d/],
        ['HH', /\d\d/]
    ];
    var /** @type {?} */ aspNetJsonRegex = /^\/?Date\((\-?\d+)/i;
    var /** @type {?} */ obsOffsets = {
        UT: 0,
        GMT: 0,
        EDT: -4 * 60,
        EST: -5 * 60,
        CDT: -5 * 60,
        CST: -6 * 60,
        MDT: -6 * 60,
        MST: -7 * 60,
        PDT: -7 * 60,
        PST: -8 * 60
    };
    // RFC 2822 regex: For details see https://tools.ietf.org/html/rfc2822#section-3.3
    // tslint:disable-next-line
    var /** @type {?} */ rfc2822 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;
    /**
     * @param {?} config
     * @return {?}
     */
    function configFromISO(config) {
        if (!isString(config._i)) {
            return config;
        }
        var /** @type {?} */ input = config._i;
        var /** @type {?} */ match = extendedIsoRegex.exec(input) || basicIsoRegex.exec(input);
        var /** @type {?} */ allowTime;
        var /** @type {?} */ dateFormat;
        var /** @type {?} */ timeFormat;
        var /** @type {?} */ tzFormat;
        if (!match) {
            config._isValid = false;
            return config;
        }
        // getParsingFlags(config).iso = true;
        var /** @type {?} */ i;
        var /** @type {?} */ l;
        for (i = 0, l = isoDates.length; i < l; i++) {
            if (isoDates[i][1].exec(match[1])) {
                dateFormat = isoDates[i][0];
                allowTime = isoDates[i][2] !== false;
                break;
            }
        }
        if (dateFormat == null) {
            config._isValid = false;
            return config;
        }
        if (match[3]) {
            for (i = 0, l = isoTimes.length; i < l; i++) {
                if (isoTimes[i][1].exec(match[3])) {
                    // match[2] should be 'T' or space
                    timeFormat = (match[2] || ' ') + isoTimes[i][0];
                    break;
                }
            }
            if (timeFormat == null) {
                config._isValid = false;
                return config;
            }
        }
        if (!allowTime && timeFormat != null) {
            config._isValid = false;
            return config;
        }
        if (match[4]) {
            if (tzRegex.exec(match[4])) {
                tzFormat = 'Z';
            }
            else {
                config._isValid = false;
                return config;
            }
        }
        config._f = dateFormat + (timeFormat || '') + (tzFormat || '');
        return configFromStringAndFormat(config);
    }
    /**
     * @param {?} yearStr
     * @param {?} monthStr
     * @param {?} dayStr
     * @param {?} hourStr
     * @param {?} minuteStr
     * @param {?} secondStr
     * @return {?}
     */
    function extractFromRFC2822Strings(yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr) {
        var /** @type {?} */ result = [
            untruncateYear(yearStr),
            defaultLocaleMonthsShort.indexOf(monthStr),
            parseInt(dayStr, 10),
            parseInt(hourStr, 10),
            parseInt(minuteStr, 10)
        ];
        if (secondStr) {
            result.push(parseInt(secondStr, 10));
        }
        return result;
    }
    /**
     * @param {?} yearStr
     * @return {?}
     */
    function untruncateYear(yearStr) {
        var /** @type {?} */ year = parseInt(yearStr, 10);
        return year <= 49 ? year + 2000 : year;
    }
    /**
     * @param {?} str
     * @return {?}
     */
    function preprocessRFC2822(str) {
        // Remove comments and folding whitespace and replace multiple-spaces with a single space
        return str
            .replace(/\([^)]*\)|[\n\t]/g, ' ')
            .replace(/(\s\s+)/g, ' ').trim();
    }
    /**
     * @param {?} weekdayStr
     * @param {?} parsedInput
     * @param {?} config
     * @return {?}
     */
    function checkWeekday(weekdayStr, parsedInput, config) {
        if (weekdayStr) {
            // TODO: Replace the vanilla JS Date object with an indepentent day-of-week check.
            var /** @type {?} */ weekdayProvided = defaultLocaleWeekdaysShort.indexOf(weekdayStr);
            var /** @type {?} */ weekdayActual = new Date(parsedInput[0], parsedInput[1], parsedInput[2]).getDay();
            if (weekdayProvided !== weekdayActual) {
                getParsingFlags(config).weekdayMismatch = true;
                config._isValid = false;
                return false;
            }
        }
        return true;
    }
    /**
     * @param {?} obsOffset
     * @param {?} militaryOffset
     * @param {?} numOffset
     * @return {?}
     */
    function calculateOffset(obsOffset, militaryOffset, numOffset) {
        if (obsOffset) {
            return obsOffsets[obsOffset];
        }
        else if (militaryOffset) {
            // the only allowed military tz is Z
            return 0;
        }
        else {
            var /** @type {?} */ hm = parseInt(numOffset, 10);
            var /** @type {?} */ m = hm % 100;
            var /** @type {?} */ h = (hm - m) / 100;
            return h * 60 + m;
        }
    }
    /**
     * @param {?} config
     * @return {?}
     */
    function configFromRFC2822(config) {
        if (!isString(config._i)) {
            return config;
        }
        var /** @type {?} */ match = rfc2822.exec(preprocessRFC2822(config._i));
        if (!match) {
            return markInvalid(config);
        }
        var /** @type {?} */ parsedArray = extractFromRFC2822Strings(match[4], match[3], match[2], match[5], match[6], match[7]);
        if (!checkWeekday(match[1], parsedArray, config)) {
            return config;
        }
        config._a = parsedArray;
        config._tzm = calculateOffset(match[8], match[9], match[10]);
        config._d = createUTCDate.apply(null, config._a);
        config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
        getParsingFlags(config).rfc2822 = true;
        return config;
    }
    /**
     * @param {?} config
     * @return {?}
     */
    function configFromString(config) {
        if (!isString(config._i)) {
            return config;
        }
        var /** @type {?} */ matched = aspNetJsonRegex.exec(config._i);
        if (matched !== null) {
            config._d = new Date(+matched[1]);
            return config;
        }
        // todo: update logic processing
        // isISO -> configFromISO
        // isRFC -> configFromRFC
        configFromISO(config);
        if (config._isValid === false) {
            delete config._isValid;
        }
        else {
            return config;
        }
        configFromRFC2822(config);
        if (config._isValid === false) {
            delete config._isValid;
        }
        else {
            return config;
        }
        // Final attempt, use Input Fallback
        // hooks.createFromInputFallback(config);
        return createInvalid(config);
    }
    // hooks.createFromInputFallback = deprecate(
    //     'value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), ' +
    //     'which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are ' +
    //     'discouraged and will be removed in an upcoming major release. Please refer to ' +
    //     'http://momentjs.com/guides/#/warnings/js-date/ for more info.',
    //     function (config) {
    //         config._d = new Date(config._i + (config._useUTC ? ' UTC' : ''));
    //     }
    // );

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @param {?} date
     * @param {?} format
     * @param {?=} locale
     * @param {?=} isUTC
     * @param {?=} offset
     * @return {?}
     */
    function formatDate(date, format, locale, isUTC, offset) {
        if (offset === void 0) {
            offset = 0;
        }
        var /** @type {?} */ _locale = getLocale(locale || 'en');
        if (!_locale) {
            throw new Error("Locale \"" + locale + "\" is not defined, please add it with \"defineLocale(...)\"");
        }
        var /** @type {?} */ _format = format || (isUTC ? 'YYYY-MM-DDTHH:mm:ss[Z]' : 'YYYY-MM-DDTHH:mm:ssZ');
        var /** @type {?} */ output = formatMoment(date, _format, _locale, isUTC, offset);
        if (!output) {
            return output;
        }
        return _locale.postformat(output);
    }
    /**
     * @param {?} date
     * @param {?} _format
     * @param {?} locale
     * @param {?=} isUTC
     * @param {?=} offset
     * @return {?}
     */
    function formatMoment(date, _format, locale, isUTC, offset) {
        if (offset === void 0) {
            offset = 0;
        }
        if (!isDateValid(date)) {
            return locale.invalidDate;
        }
        var /** @type {?} */ format = expandFormat(_format, locale);
        formatFunctions[format] = formatFunctions[format] || makeFormatFunction(format);
        return formatFunctions[format](date, locale, isUTC, offset);
    }
    /**
     * @param {?} _format
     * @param {?} locale
     * @return {?}
     */
    function expandFormat(_format, locale) {
        var /** @type {?} */ format = _format;
        var /** @type {?} */ i = 5;
        var /** @type {?} */ localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g;
        var /** @type {?} */ replaceLongDateFormatTokens = function (input) {
            return locale.formatLongDate(input) || input;
        };
        localFormattingTokens.lastIndex = 0;
        while (i >= 0 && localFormattingTokens.test(format)) {
            format = format.replace(localFormattingTokens, replaceLongDateFormatTokens);
            localFormattingTokens.lastIndex = 0;
            i -= 1;
        }
        return format;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @template T
     * @param {?=} a
     * @param {?=} b
     * @param {?=} c
     * @return {?}
     */
    function defaults(a, b, c) {
        if (a != null) {
            return a;
        }
        if (b != null) {
            return b;
        }
        return c;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @param {?} config
     * @return {?}
     */
    function currentDateArray(config) {
        var /** @type {?} */ nowValue = new Date();
        if (config._useUTC) {
            return [nowValue.getUTCFullYear(), nowValue.getUTCMonth(), nowValue.getUTCDate()];
        }
        return [nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate()];
    }
    /**
     * @param {?} config
     * @return {?}
     */
    function configFromArray(config) {
        var /** @type {?} */ input = [];
        var /** @type {?} */ i;
        var /** @type {?} */ date;
        var /** @type {?} */ currentDate;
        var /** @type {?} */ expectedWeekday;
        var /** @type {?} */ yearToUse;
        if (config._d) {
            return config;
        }
        currentDate = currentDateArray(config);
        // compute day of the year from weeks and weekdays
        if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
            dayOfYearFromWeekInfo(config);
        }
        // if the day of the year is set, figure out what it is
        if (config._dayOfYear != null) {
            yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);
            if (config._dayOfYear > daysInYear(yearToUse) || config._dayOfYear === 0) {
                getParsingFlags(config)._overflowDayOfYear = true;
            }
            date = new Date(Date.UTC(yearToUse, 0, config._dayOfYear));
            config._a[MONTH] = date.getUTCMonth();
            config._a[DATE] = date.getUTCDate();
        }
        // Default to current date.
        // * if no year, month, day of month are given, default to today
        // * if day of month is given, default month and year
        // * if month is given, default only year
        // * if year is given, don't default anything
        for (i = 0; i < 3 && config._a[i] == null; ++i) {
            config._a[i] = input[i] = currentDate[i];
        }
        // Zero out whatever was not defaulted, including time
        for (; i < 7; i++) {
            config._a[i] = input[i] = (config._a[i] == null) ? (i === 2 ? 1 : 0) : config._a[i];
        }
        // Check for 24:00:00.000
        if (config._a[HOUR] === 24 &&
            config._a[MINUTE] === 0 &&
            config._a[SECOND] === 0 &&
            config._a[MILLISECOND] === 0) {
            config._nextDay = true;
            config._a[HOUR] = 0;
        }
        config._d = (config._useUTC ? createUTCDate : createDate).apply(null, input);
        expectedWeekday = config._useUTC ? config._d.getUTCDay() : config._d.getDay();
        // Apply timezone offset from input. The actual utcOffset can be changed
        // with parseZone.
        if (config._tzm != null) {
            config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
        }
        if (config._nextDay) {
            config._a[HOUR] = 24;
        }
        // check for mismatching day of week
        if (config._w && typeof config._w["d"] !== 'undefined' && config._w["d"] !== expectedWeekday) {
            getParsingFlags(config).weekdayMismatch = true;
        }
        return config;
    }
    /**
     * @param {?} config
     * @return {?}
     */
    function dayOfYearFromWeekInfo(config) {
        var /** @type {?} */ w, /** @type {?} */ weekYear, /** @type {?} */ week, /** @type {?} */ weekday, /** @type {?} */ dow, /** @type {?} */ doy, /** @type {?} */ temp, /** @type {?} */ weekdayOverflow;
        w = config._w;
        if (w.GG != null || w.W != null || w.E != null) {
            dow = 1;
            doy = 4;
            // TODO: We need to take the current isoWeekYear, but that depends on
            // how we interpret now (local, utc, fixed offset). So create
            // a now version of current config (take local/utc/offset flags, and
            // create now).
            weekYear = defaults(w.GG, config._a[YEAR], weekOfYear(new Date(), 1, 4).year);
            week = defaults(w.W, 1);
            weekday = defaults(w.E, 1);
            if (weekday < 1 || weekday > 7) {
                weekdayOverflow = true;
            }
        }
        else {
            dow = config._locale._week.dow;
            doy = config._locale._week.doy;
            var /** @type {?} */ curWeek = weekOfYear(new Date(), dow, doy);
            weekYear = defaults(w.gg, config._a[YEAR], curWeek.year);
            // Default to current week.
            week = defaults(w.w, curWeek.week);
            if (w.d != null) {
                // weekday -- low day numbers are considered next week
                weekday = w.d;
                if (weekday < 0 || weekday > 6) {
                    weekdayOverflow = true;
                }
            }
            else if (w.e != null) {
                // local weekday -- counting starts from begining of week
                weekday = w.e + dow;
                if (w.e < 0 || w.e > 6) {
                    weekdayOverflow = true;
                }
            }
            else {
                // default to begining of week
                weekday = dow;
            }
        }
        if (week < 1 || week > weeksInYear(weekYear, dow, doy)) {
            getParsingFlags(config)._overflowWeeks = true;
        }
        else if (weekdayOverflow != null) {
            getParsingFlags(config)._overflowWeekday = true;
        }
        else {
            temp = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy);
            config._a[YEAR] = temp.year;
            config._dayOfYear = temp.dayOfYear;
        }
        return config;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @param {?} config
     * @return {?}
     */
    function checkOverflow(config) {
        var /** @type {?} */ overflow;
        var /** @type {?} */ a = config._a;
        if (a && getParsingFlags(config).overflow === -2) {
            // todo: fix this sh*t
            overflow =
                a[MONTH] < 0 || a[MONTH] > 11 ? MONTH :
                    a[DATE] < 1 || a[DATE] > daysInMonth$1(a[YEAR], a[MONTH]) ? DATE :
                        a[HOUR] < 0 || a[HOUR] > 24 || (a[HOUR] === 24 && (a[MINUTE] !== 0 || a[SECOND] !== 0 || a[MILLISECOND] !== 0)) ? HOUR :
                            a[MINUTE] < 0 || a[MINUTE] > 59 ? MINUTE :
                                a[SECOND] < 0 || a[SECOND] > 59 ? SECOND :
                                    a[MILLISECOND] < 0 || a[MILLISECOND] > 999 ? MILLISECOND :
                                        -1;
            if (getParsingFlags(config)._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {
                overflow = DATE;
            }
            if (getParsingFlags(config)._overflowWeeks && overflow === -1) {
                overflow = WEEK;
            }
            if (getParsingFlags(config)._overflowWeekday && overflow === -1) {
                overflow = WEEKDAY;
            }
            getParsingFlags(config).overflow = overflow;
        }
        return config;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    // constant that refers to the ISO standard
    // hooks.ISO_8601 = function () {};
    var /** @type {?} */ ISO_8601 = 'ISO_8601';
    // constant that refers to the RFC 2822 form
    // hooks.RFC_2822 = function () {};
    var /** @type {?} */ RFC_2822 = 'RFC_2822';
    /**
     * @param {?} config
     * @return {?}
     */
    function configFromStringAndFormat(config) {
        // TODO: Move this to another part of the creation flow to prevent circular deps
        if (config._f === ISO_8601) {
            return configFromISO(config);
        }
        if (config._f === RFC_2822) {
            return configFromRFC2822(config);
        }
        config._a = [];
        getParsingFlags(config).empty = true;
        if (isArray(config._f) || (!config._i && config._i !== 0)) {
            return config;
        }
        // This array is used to make a Date, either with `new Date` or `Date.UTC`
        var /** @type {?} */ input = config._i.toString();
        var /** @type {?} */ totalParsedInputLength = 0;
        var /** @type {?} */ inputLength = input.length;
        var /** @type {?} */ tokens = expandFormat(config._f, config._locale).match(formattingTokens) || [];
        var /** @type {?} */ i;
        var /** @type {?} */ token;
        var /** @type {?} */ parsedInput;
        var /** @type {?} */ skipped;
        for (i = 0; i < tokens.length; i++) {
            token = tokens[i];
            parsedInput = (input.match(getParseRegexForToken(token, config._locale)) || [])[0];
            if (parsedInput) {
                skipped = input.substr(0, input.indexOf(parsedInput));
                if (skipped.length > 0) {
                    getParsingFlags(config).unusedInput.push(skipped);
                }
                input = input.slice(input.indexOf(parsedInput) + parsedInput.length);
                totalParsedInputLength += parsedInput.length;
            }
            // don't parse if it's not a known token
            if (formatTokenFunctions[token]) {
                if (parsedInput) {
                    getParsingFlags(config).empty = false;
                }
                else {
                    getParsingFlags(config).unusedTokens.push(token);
                }
                addTimeToArrayFromToken(token, parsedInput, config);
            }
            else if (config._strict && !parsedInput) {
                getParsingFlags(config).unusedTokens.push(token);
            }
        }
        // add remaining unparsed input length to the string
        getParsingFlags(config).charsLeftOver = inputLength - totalParsedInputLength;
        if (input.length > 0) {
            getParsingFlags(config).unusedInput.push(input);
        }
        // clear _12h flag if hour is <= 12
        if (config._a[HOUR] <= 12 &&
            getParsingFlags(config).bigHour === true &&
            config._a[HOUR] > 0) {
            getParsingFlags(config).bigHour = void 0;
        }
        getParsingFlags(config).parsedDateParts = config._a.slice(0);
        getParsingFlags(config).meridiem = config._meridiem;
        // handle meridiem
        config._a[HOUR] = meridiemFixWrap(config._locale, config._a[HOUR], config._meridiem);
        configFromArray(config);
        return checkOverflow(config);
    }
    /**
     * @param {?} locale
     * @param {?} _hour
     * @param {?} meridiem
     * @return {?}
     */
    function meridiemFixWrap(locale, _hour, meridiem) {
        var /** @type {?} */ hour = _hour;
        if (meridiem == null) {
            // nothing to do
            return hour;
        }
        if (locale.meridiemHour != null) {
            return locale.meridiemHour(hour, meridiem);
        }
        if (locale.isPM == null) {
            // this is not supposed to happen
            return hour;
        }
        // Fallback
        var /** @type {?} */ isPm = locale.isPM(meridiem);
        if (isPm && hour < 12) {
            hour += 12;
        }
        if (!isPm && hour === 12) {
            hour = 0;
        }
        return hour;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @param {?} config
     * @return {?}
     */
    function configFromStringAndArray(config) {
        var /** @type {?} */ tempConfig;
        var /** @type {?} */ bestMoment;
        var /** @type {?} */ scoreToBeat;
        var /** @type {?} */ currentScore;
        if (!config._f || config._f.length === 0) {
            getParsingFlags(config).invalidFormat = true;
            return createInvalid(config);
        }
        var /** @type {?} */ i;
        for (i = 0; i < config._f.length; i++) {
            currentScore = 0;
            tempConfig = Object.assign({}, config);
            if (config._useUTC != null) {
                tempConfig._useUTC = config._useUTC;
            }
            tempConfig._f = config._f[i];
            configFromStringAndFormat(tempConfig);
            if (!isValid(tempConfig)) {
                continue;
            }
            // if there is any input that was not parsed add a penalty for that format
            currentScore += getParsingFlags(tempConfig).charsLeftOver;
            // or tokens
            currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;
            getParsingFlags(tempConfig).score = currentScore;
            if (scoreToBeat == null || currentScore < scoreToBeat) {
                scoreToBeat = currentScore;
                bestMoment = tempConfig;
            }
        }
        return Object.assign(config, bestMoment || tempConfig);
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @param {?} config
     * @return {?}
     */
    function configFromObject(config) {
        if (config._d) {
            return config;
        }
        var /** @type {?} */ input = config._i;
        if (isObject(input)) {
            var /** @type {?} */ i = normalizeObjectUnits(/** @type {?} */ (input));
            config._a = [i.year, i.month, i.day, i.hours, i.minutes, i.seconds, i.milliseconds]
                .map(function (obj) { return isString(obj) ? parseInt(obj, 10) : obj; });
        }
        return configFromArray(config);
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @param {?} config
     * @return {?}
     */
    function createFromConfig(config) {
        var /** @type {?} */ res = checkOverflow(prepareConfig(config));
        // todo: remove, in moment.js it's never called cuz of moment constructor
        res._d = new Date(res._d != null ? res._d.getTime() : NaN);
        if (!isValid(Object.assign({}, res, { _isValid: null }))) {
            res._d = new Date(NaN);
        }
        // todo: update offset
        /*if (res._nextDay) {
            // Adding is smart enough around DST
            res._d = add(res._d, 1, 'day');
            res._nextDay = undefined;
          }*/
        return res;
    }
    /**
     * @param {?} config
     * @return {?}
     */
    function prepareConfig(config) {
        var /** @type {?} */ input = config._i;
        var /** @type {?} */ format = config._f;
        config._locale = config._locale || getLocale(config._l);
        if (input === null || (format === undefined && input === '')) {
            return createInvalid(config, { nullInput: true });
        }
        if (isString(input)) {
            config._i = input = config._locale.preparse(input);
        }
        if (isDate(input)) {
            config._d = cloneDate(input);
            return config;
        }
        // todo: add check for recursion
        if (isArray(format)) {
            configFromStringAndArray(config);
        }
        else if (format) {
            configFromStringAndFormat(config);
        }
        else {
            configFromInput(config);
        }
        if (!isValid(config)) {
            config._d = null;
        }
        return config;
    }
    /**
     * @param {?} config
     * @return {?}
     */
    function configFromInput(config) {
        var /** @type {?} */ input = config._i;
        if (isUndefined(input)) {
            config._d = new Date();
        }
        else if (isDate(input)) {
            config._d = cloneDate(input);
        }
        else if (isString(input)) {
            configFromString(config);
        }
        else if (isArray(input) && input.length) {
            var /** @type {?} */ _arr = input.slice(0);
            config._a = _arr.map(function (obj) { return isString(obj) ? parseInt(obj, 10) : obj; });
            configFromArray(config);
        }
        else if (isObject(input)) {
            configFromObject(config);
        }
        else if (isNumber(input)) {
            // from milliseconds
            config._d = new Date(input);
        }
        else {
            //   hooks.createFromInputFallback(config);
            return createInvalid(config);
        }
        return config;
    }
    /**
     * @param {?} input
     * @param {?=} format
     * @param {?=} localeKey
     * @param {?=} strict
     * @param {?=} isUTC
     * @return {?}
     */
    function createLocalOrUTC(input, format, localeKey, strict, isUTC) {
        var /** @type {?} */ config = {};
        var /** @type {?} */ _input = input;
        // params switch -> skip; test it well
        // if (localeKey === true || localeKey === false) {
        //     strict = localeKey;
        //     localeKey = undefined;
        // }
        // todo: fail fast and return not valid date
        if ((isObject(_input) && isObjectEmpty(_input)) || (isArray(_input) && _input.length === 0)) {
            _input = undefined;
        }
        // object construction must be done this way.
        // https://github.com/moment/moment/issues/1423
        // config._isAMomentObject = true;
        config._useUTC = config._isUTC = isUTC;
        config._l = localeKey;
        config._i = _input;
        config._f = format;
        config._strict = strict;
        return createFromConfig(config);
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @param {?} input
     * @param {?=} format
     * @param {?=} localeKey
     * @param {?=} strict
     * @param {?=} isUTC
     * @return {?}
     */
    function parseDate(input, format, localeKey, strict, isUTC) {
        if (isDate(input)) {
            return input;
        }
        var /** @type {?} */ config = createLocalOrUTC(input, format, localeKey, strict, isUTC);
        return config._d;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @param {?} num
     * @return {?}
     */
    function absRound(num) {
        return num < 0 ? Math.round(num * -1) * -1 : Math.round(num);
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @param {?} date1
     * @param {?} date2
     * @param {?=} units
     * @return {?}
     */
    function isAfter(date1, date2, units) {
        if (units === void 0) {
            units = 'milliseconds';
        }
        if (!date1 || !date2) {
            return false;
        }
        if (units === 'milliseconds') {
            return date1.valueOf() > date2.valueOf();
        }
        return date2.valueOf() < startOf(date1, units).valueOf();
    }
    /**
     * @param {?} date1
     * @param {?} date2
     * @param {?=} units
     * @return {?}
     */
    function isBefore(date1, date2, units) {
        if (units === void 0) {
            units = 'milliseconds';
        }
        if (!date1 || !date2) {
            return false;
        }
        if (units === 'milliseconds') {
            return date1.valueOf() < date2.valueOf();
        }
        return endOf(date1, units).valueOf() < date2.valueOf();
    }
    /**
     * @param {?} date
     * @param {?} daysDisabled
     * @return {?}
     */
    function isDisabledDay(date, daysDisabled) {
        if (daysDisabled === undefined || !daysDisabled || !daysDisabled.length) {
            return false;
        }
        return daysDisabled.some(function (day) { return day === date.getDay(); });
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ aspNetRegex = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/;
    // from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html
    // somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere
    // and further modified to allow for strings containing both week and day
    // tslint:disable-next-line
    var /** @type {?} */ isoRegex = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
    /**
     * @param {?=} input
     * @param {?=} key
     * @param {?=} config
     * @return {?}
     */
    function createDuration(input, key, config) {
        if (config === void 0) {
            config = {};
        }
        var /** @type {?} */ duration = convertDuration(input, key);
        // matching against regexp is expensive, do it on demand
        return new Duration(duration, config);
    }
    /**
     * @param {?} input
     * @param {?} key
     * @return {?}
     */
    function convertDuration(input, key) {
        // checks for null or undefined
        if (input == null) {
            return {};
        }
        if (isDuration(input)) {
            return {
                milliseconds: input._milliseconds,
                day: input._days,
                month: input._months
            };
        }
        if (isNumber(input)) {
            // duration = {};
            return key ? (_a = {}, _a[key] = input, _a) : { milliseconds: input };
        }
        if (isString(input)) {
            var /** @type {?} */ match = aspNetRegex.exec(input);
            if (match) {
                var /** @type {?} */ sign = (match[1] === '-') ? -1 : 1;
                return {
                    year: 0,
                    day: toInt(match[DATE]) * sign,
                    hours: toInt(match[HOUR]) * sign,
                    minutes: toInt(match[MINUTE]) * sign,
                    seconds: toInt(match[SECOND]) * sign,
                    // the millisecond decimal point is included in the match
                    milliseconds: toInt(absRound(toInt(match[MILLISECOND]) * 1000)) * sign
                };
            }
            match = isoRegex.exec(input);
            if (match) {
                var /** @type {?} */ sign = (match[1] === '-') ? -1 : (match[1] === '+') ? 1 : 1;
                return {
                    year: parseIso(match[2], sign),
                    month: parseIso(match[3], sign),
                    week: parseIso(match[4], sign),
                    day: parseIso(match[5], sign),
                    hours: parseIso(match[6], sign),
                    minutes: parseIso(match[7], sign),
                    seconds: parseIso(match[8], sign)
                };
            }
        }
        if (isObject(input) && ('from' in input || 'to' in input)) {
            var /** @type {?} */ diffRes = momentsDifference(parseDate(input.from), parseDate(input.to));
            return {
                milliseconds: diffRes.milliseconds,
                month: diffRes.months
            };
        }
        return input;
        var _a;
    }
    /**
     * @param {?} inp
     * @param {?} sign
     * @return {?}
     */
    function parseIso(inp, sign) {
        // We'd normally use ~~inp for this, but unfortunately it also
        // converts floats to ints.
        // inp may be undefined, so careful calling replace on it.
        var /** @type {?} */ res = inp && parseFloat(inp.replace(',', '.'));
        // apply sign while we're at it
        return (isNaN(res) ? 0 : res) * sign;
    }
    /**
     * @param {?} base
     * @param {?} other
     * @return {?}
     */
    function positiveMomentsDifference(base, other) {
        var /** @type {?} */ res = { milliseconds: 0, months: 0 };
        res.months = getMonth(other) - getMonth(base) +
            (getFullYear(other) - getFullYear(base)) * 12;
        var /** @type {?} */ _basePlus = add(cloneDate(base), res.months, 'month');
        if (isAfter(_basePlus, other)) {
            --res.months;
        }
        res.milliseconds = +other - +(add(cloneDate(base), res.months, 'month'));
        return res;
    }
    /**
     * @param {?} base
     * @param {?} other
     * @return {?}
     */
    function momentsDifference(base, other) {
        if (!(isDateValid(base) && isDateValid(other))) {
            return { milliseconds: 0, months: 0 };
        }
        var /** @type {?} */ res;
        var /** @type {?} */ _other = cloneWithOffset(other, base, { _offset: base.getTimezoneOffset() });
        if (isBefore(base, _other)) {
            res = positiveMomentsDifference(base, _other);
        }
        else {
            res = positiveMomentsDifference(_other, base);
            res.milliseconds = -res.milliseconds;
            res.months = -res.months;
        }
        return res;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @param {?} date
     * @param {?} val
     * @param {?} period
     * @param {?=} isUTC
     * @return {?}
     */
    function add(date, val, period, isUTC) {
        var /** @type {?} */ dur = createDuration(val, period);
        return addSubtract(date, dur, 1, isUTC);
    }
    /**
     * @param {?} date
     * @param {?} val
     * @param {?} period
     * @param {?=} isUTC
     * @return {?}
     */
    function subtract(date, val, period, isUTC) {
        var /** @type {?} */ dur = createDuration(val, period);
        return addSubtract(date, dur, -1, isUTC);
    }
    /**
     * @param {?} date
     * @param {?} duration
     * @param {?} isAdding
     * @param {?=} isUTC
     * @return {?}
     */
    function addSubtract(date, duration, isAdding, isUTC) {
        var /** @type {?} */ milliseconds = duration._milliseconds;
        var /** @type {?} */ days = absRound(duration._days);
        var /** @type {?} */ months = absRound(duration._months);
        // todo: add timezones support
        // const _updateOffset = updateOffset == null ? true : updateOffset;
        if (months) {
            setMonth(date, getMonth(date, isUTC) + months * isAdding, isUTC);
        }
        if (days) {
            setDate(date, getDate(date, isUTC) + days * isAdding, isUTC);
        }
        if (milliseconds) {
            setTime(date, getTime(date) + milliseconds * isAdding);
        }
        return cloneDate(date);
        // todo: add timezones support
        // if (_updateOffset) {
        //   hooks.updateOffset(date, days || months);
        // }
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @return {?}
     */
    function initDayOfWeek() {
        // FORMATTING
        addFormatToken('d', null, 'do', function (date, opts) {
            return getDay(date, opts.isUTC)
                .toString(10);
        });
        addFormatToken('dd', null, null, function (date, opts) {
            return opts.locale.weekdaysMin(date, opts.format, opts.isUTC);
        });
        addFormatToken('ddd', null, null, function (date, opts) {
            return opts.locale.weekdaysShort(date, opts.format, opts.isUTC);
        });
        addFormatToken('dddd', null, null, function (date, opts) {
            return opts.locale.weekdays(date, opts.format, opts.isUTC);
        });
        addFormatToken('e', null, null, function (date, opts) {
            return getLocaleDayOfWeek(date, opts.locale, opts.isUTC)
                .toString(10);
            // return getDay(date, opts.isUTC).toString(10);
        });
        addFormatToken('E', null, null, function (date, opts) {
            return getISODayOfWeek(date, opts.isUTC)
                .toString(10);
        });
        // ALIASES
        addUnitAlias('day', 'd');
        addUnitAlias('weekday', 'e');
        addUnitAlias('isoWeekday', 'E');
        // PARSING
        addRegexToken('d', match1to2);
        addRegexToken('e', match1to2);
        addRegexToken('E', match1to2);
        addRegexToken('dd', function (isStrict, locale) {
            return locale.weekdaysMinRegex(isStrict);
        });
        addRegexToken('ddd', function (isStrict, locale) {
            return locale.weekdaysShortRegex(isStrict);
        });
        addRegexToken('dddd', function (isStrict, locale) {
            return locale.weekdaysRegex(isStrict);
        });
        addWeekParseToken(['dd', 'ddd', 'dddd'], function (input, week, config, token) {
            var /** @type {?} */ weekday = config._locale.weekdaysParse(input, token, config._strict);
            // if we didn't get a weekday name, mark the date as invalid
            if (weekday != null) {
                week["d"] = weekday;
            }
            else {
                getParsingFlags(config).invalidWeekday = !!input;
            }
            return config;
        });
        addWeekParseToken(['d', 'e', 'E'], function (input, week, config, token) {
            week[token] = toInt(input);
            return config;
        });
    }
    /**
     * @param {?} input
     * @param {?} locale
     * @return {?}
     */
    function parseWeekday(input, locale) {
        if (!isString(input)) {
            return input;
        }
        var /** @type {?} */ _num = parseInt(input, 10);
        if (!isNaN(_num)) {
            return _num;
        }
        var /** @type {?} */ _weekDay = locale.weekdaysParse(input);
        if (isNumber(_weekDay)) {
            return _weekDay;
        }
        return null;
    }
    /**
     * @param {?} input
     * @param {?=} locale
     * @return {?}
     */
    function parseIsoWeekday(input, locale) {
        if (locale === void 0) {
            locale = getLocale();
        }
        if (isString(input)) {
            return locale.weekdaysParse(input) % 7 || 7;
        }
        return isNumber(input) && isNaN(input) ? null : input;
    }
    /**
     * @param {?} date
     * @param {?} input
     * @param {?=} locale
     * @param {?=} isUTC
     * @return {?}
     */
    function setDayOfWeek(date, input, locale, isUTC) {
        if (locale === void 0) {
            locale = getLocale();
        }
        var /** @type {?} */ day = getDay(date, isUTC);
        var /** @type {?} */ _input = parseWeekday(input, locale);
        return add(date, _input - day, 'day');
    }
    /**
     * @param {?} date
     * @param {?=} isUTC
     * @return {?}
     */
    function getDayOfWeek(date, isUTC) {
        return getDay(date, isUTC);
    }
    /**
     * ****************************************
     * @param {?} date
     * @param {?=} locale
     * @param {?=} isUTC
     * @return {?}
     */
    function getLocaleDayOfWeek(date, locale, isUTC) {
        if (locale === void 0) {
            locale = getLocale();
        }
        return (getDay(date, isUTC) + 7 - locale.firstDayOfWeek()) % 7;
    }
    /**
     * @param {?} date
     * @param {?} input
     * @param {?=} opts
     * @return {?}
     */
    function setLocaleDayOfWeek(date, input, opts) {
        if (opts === void 0) {
            opts = {};
        }
        var /** @type {?} */ weekday = getLocaleDayOfWeek(date, opts.locale, opts.isUTC);
        return add(date, input - weekday, 'day');
    }
    /**
     * @param {?} date
     * @param {?=} isUTC
     * @return {?}
     */
    function getISODayOfWeek(date, isUTC) {
        return getDay(date, isUTC) || 7;
    }
    /**
     * @param {?} date
     * @param {?} input
     * @param {?=} opts
     * @return {?}
     */
    function setISODayOfWeek(date, input, opts) {
        if (opts === void 0) {
            opts = {};
        }
        // behaves the same as moment#day except
        // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
        // as a setter, sunday should belong to the previous week.
        var /** @type {?} */ weekday = parseIsoWeekday(input, opts.locale);
        return setDayOfWeek(date, getDayOfWeek(date) % 7 ? weekday : weekday - 7);
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    // tslint:disable:comment-format binary-expression-operand-order max-line-length
    var /** @type {?} */ symbolMap = {
        1: '١',
        2: '٢',
        3: '٣',
        4: '٤',
        5: '٥',
        6: '٦',
        7: '٧',
        8: '٨',
        9: '٩',
        0: '٠'
    };
    var /** @type {?} */ numberMap = {
        '١': '1',
        '٢': '2',
        '٣': '3',
        '٤': '4',
        '٥': '5',
        '٦': '6',
        '٧': '7',
        '٨': '8',
        '٩': '9',
        '٠': '0'
    };
    var /** @type {?} */ pluralForm = function (num) {
        return num === 0 ? 0 : num === 1 ? 1 : num === 2 ? 2 : num % 100 >= 3 && num % 100 <= 10 ? 3 : num % 100 >= 11 ? 4 : 5;
    };
    var /** @type {?} */ plurals = {
        s: ['أقل من ثانية', 'ثانية واحدة', ['ثانيتان', 'ثانيتين'], '%d ثوان', '%d ثانية', '%d ثانية'],
        m: ['أقل من دقيقة', 'دقيقة واحدة', ['دقيقتان', 'دقيقتين'], '%d دقائق', '%d دقيقة', '%d دقيقة'],
        h: ['أقل من ساعة', 'ساعة واحدة', ['ساعتان', 'ساعتين'], '%d ساعات', '%d ساعة', '%d ساعة'],
        d: ['أقل من يوم', 'يوم واحد', ['يومان', 'يومين'], '%d أيام', '%d يومًا', '%d يوم'],
        M: ['أقل من شهر', 'شهر واحد', ['شهران', 'شهرين'], '%d أشهر', '%d شهرا', '%d شهر'],
        y: ['أقل من عام', 'عام واحد', ['عامان', 'عامين'], '%d أعوام', '%d عامًا', '%d عام']
    };
    var /** @type {?} */ pluralize = function (u) {
        return function (num, withoutSuffix) {
            var /** @type {?} */ f = pluralForm(num);
            var /** @type {?} */ str = plurals[u][pluralForm(num)];
            if (f === 2) {
                str = str[withoutSuffix ? 0 : 1];
            }
            return ((str)).replace(/%d/i, num.toString());
        };
    };
    var /** @type {?} */ months = [
        'يناير',
        'فبراير',
        'مارس',
        'أبريل',
        'مايو',
        'يونيو',
        'يوليو',
        'أغسطس',
        'سبتمبر',
        'أكتوبر',
        'نوفمبر',
        'ديسمبر'
    ];
    var /** @type {?} */ arLocale = {
        abbr: 'ar',
        months: months,
        monthsShort: months,
        weekdays: 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
        weekdaysShort: 'أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت'.split('_'),
        weekdaysMin: 'ح_ن_ث_ر_خ_ج_س'.split('_'),
        weekdaysParseExact: true,
        longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'D/\u200FM/\u200FYYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd D MMMM YYYY HH:mm'
        },
        meridiemParse: /ص|م/,
        isPM: /**
         * @param {?} input
         * @return {?}
         */ function (input) {
            return 'م' === input;
        },
        meridiem: /**
         * @param {?} hour
         * @param {?} minute
         * @param {?} isLower
         * @return {?}
         */ function (hour, minute, isLower) {
            if (hour < 12) {
                return 'ص';
            }
            else {
                return 'م';
            }
        },
        calendar: {
            sameDay: '[اليوم عند الساعة] LT',
            nextDay: '[غدًا عند الساعة] LT',
            nextWeek: 'dddd [عند الساعة] LT',
            lastDay: '[أمس عند الساعة] LT',
            lastWeek: 'dddd [عند الساعة] LT',
            sameElse: 'L'
        },
        relativeTime: {
            future: 'بعد %s',
            past: 'منذ %s',
            s: pluralize('s'),
            ss: pluralize('s'),
            m: pluralize('m'),
            mm: pluralize('m'),
            h: pluralize('h'),
            hh: pluralize('h'),
            d: pluralize('d'),
            dd: pluralize('d'),
            M: pluralize('M'),
            MM: pluralize('M'),
            y: pluralize('y'),
            yy: pluralize('y')
        },
        preparse: /**
         * @param {?} str
         * @return {?}
         */ function (str) {
            return str.replace(/[١٢٣٤٥٦٧٨٩٠]/g, function (match) {
                return numberMap[match];
            }).replace(/،/g, ',');
        },
        postformat: /**
         * @param {?} str
         * @return {?}
         */ function (str) {
            return str.replace(/\d/g, function (match) {
                return symbolMap[match];
            }).replace(/,/g, '،');
        },
        week: {
            dow: 6,
            // Saturday is the first day of the week.
            doy: 12 // The week that contains Jan 1st is the first week of the year.
        }
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    // tslint:disable:comment-format binary-expression-operand-order max-line-length
    // tslint:disable:no-bitwise prefer-template cyclomatic-complexity
    // tslint:disable:no-shadowed-variable switch-default prefer-const
    // tslint:disable:one-variable-per-declaration newline-before-return
    //! moment.js locale configuration
    //! locale : Bulgarian [bg]
    //! author : Iskren Ivov Chernev : https://github.com/ichernev
    //! author : Kunal Marwaha : https://github.com/marwahaha
    //! author : Matt Grande : https://github.com/mattgrande
    //! author : Isaac Cambron : https://github.com/icambron
    //! author : Venelin Manchev : https://github.com/vmanchev
    var /** @type {?} */ bgLocale = {
        abbr: 'bg',
        months: 'януари_февруари_март_април_май_юни_юли_август_септември_октомври_ноември_декември'.split('_'),
        monthsShort: 'янр_фев_мар_апр_май_юни_юли_авг_сеп_окт_ное_дек'.split('_'),
        weekdays: 'неделя_понеделник_вторник_сряда_четвъртък_петък_събота'.split('_'),
        weekdaysShort: 'нед_пон_вто_сря_чет_пет_съб'.split('_'),
        weekdaysMin: 'нд_пн_вт_ср_чт_пт_сб'.split('_'),
        longDateFormat: {
            LT: 'H:mm',
            LTS: 'H:mm:ss',
            L: 'D.MM.YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY H:mm',
            LLLL: 'dddd, D MMMM YYYY H:mm'
        },
        calendar: {
            sameDay: '[Днес в] LT',
            nextDay: '[Утре в] LT',
            nextWeek: 'dddd [в] LT',
            lastDay: '[Вчера в] LT',
            lastWeek: function (d) {
                switch (d) {
                    case 0:
                    case 3:
                    case 6:
                        return '[В изминалата] dddd [в] LT';
                    case 1:
                    case 2:
                    case 4:
                    case 5:
                        return '[В изминалия] dddd [в] LT';
                }
            },
            sameElse: 'L'
        },
        relativeTime: {
            future: 'след %s',
            past: 'преди %s',
            s: 'няколко секунди',
            ss: '%d секунди',
            m: 'минута',
            mm: '%d минути',
            h: 'час',
            hh: '%d часа',
            d: 'ден',
            dd: '%d дни',
            M: 'месец',
            MM: '%d месеца',
            y: 'година',
            yy: '%d години'
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
        ordinal: function (_num) {
            var /** @type {?} */ number = Number(_num);
            var /** @type {?} */ lastDigit = number % 10, /** @type {?} */ last2Digits = number % 100;
            if (number === 0) {
                return number + '-ев';
            }
            else if (last2Digits === 0) {
                return number + '-ен';
            }
            else if (last2Digits > 10 && last2Digits < 20) {
                return number + '-ти';
            }
            else if (lastDigit === 1) {
                return number + '-ви';
            }
            else if (lastDigit === 2) {
                return number + '-ри';
            }
            else if (lastDigit === 7 || lastDigit === 8) {
                return number + '-ми';
            }
            else {
                return number + '-ти';
            }
        },
        week: {
            dow: 1,
            // Monday is the first day of the week.
            doy: 7 // The week that contains Jan 1st is the first week of the year.
        }
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    //! moment.js locale configuration
    //! locale : Catalan [ca]
    //! author : Xavier Arbat : https://github.com/XavisaurusRex
    var /** @type {?} */ monthsShortDot = 'gen._feb._mar._abr._mai._jun._jul._ago._set._oct._nov._des.'.split('_'), /** @type {?} */ monthsShort = 'ene_feb_mar_abr_mai_jun_jul_ago_set_oct_nov_des'.split('_');
    var /** @type {?} */ monthsParse = [/^gen/i, /^feb/i, /^mar/i, /^abr/i, /^mai/i, /^jun/i, /^jul/i, /^ago/i, /^set/i, /^oct/i, /^nov/i, /^des/i];
    var /** @type {?} */ monthsRegex = /^(gener|febrer|març|abril|maig|juny|juliol|agost|setembre|octubre|novembre|desembre|gen\.?|feb\.?|mar\.?|abr\.?|mai\.?|jun\.?|jul\.?|ago\.?|set\.?|oct\.?|nov\.?|des\.?)/i;
    var /** @type {?} */ caLocale = {
        abbr: 'ca',
        months: 'gener_febrer_març_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre'.split('_'),
        monthsShort: /**
         * @param {?} date
         * @param {?} format
         * @param {?=} isUTC
         * @return {?}
         */ function (date, format, isUTC) {
            if (!date) {
                return monthsShortDot;
            }
            if (/-MMM-/.test(format)) {
                return monthsShort[getMonth(date, isUTC)];
            }
            return monthsShortDot[getMonth(date, isUTC)];
        },
        monthsRegex: monthsRegex,
        monthsShortRegex: monthsRegex,
        monthsStrictRegex: /^(gener|febrer|març|abril|maig|juny|juliol|agost|setembre|octubre|novembre|desembre)/i,
        monthsShortStrictRegex: /^(gen\.?|feb\.?|mar\.?|abr\.?|mai\.?|jun\.?|jul\.?|ago\.?|set\.?|oct\.?|nov\.?|des\.?)/i,
        monthsParse: monthsParse,
        longMonthsParse: monthsParse,
        shortMonthsParse: monthsParse,
        weekdays: 'diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte'.split('_'),
        weekdaysShort: 'diu._dil._dim._dix._dij._div._dis.'.split('_'),
        weekdaysMin: 'dg_dl_dt_dc_dj_dv_ds'.split('_'),
        weekdaysParseExact: true,
        longDateFormat: {
            LT: 'H:mm',
            LTS: 'H:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D [de] MMMM [de] YYYY',
            LLL: 'D [de] MMMM [de] YYYY H:mm',
            LLLL: 'dddd, D [de] MMMM [de] YYYY H:mm'
        },
        calendar: {
            sameDay: /**
             * @param {?} date
             * @return {?}
             */ function (date) {
                return '[avui a ' + ('la' + (getHours(date) !== 1) ? 'les' : '') + '] LT';
            },
            nextDay: /**
             * @param {?} date
             * @return {?}
             */ function (date) {
                return '[dema a ' + ('la' + (getHours(date) !== 1) ? 'les' : '') + '] LT';
            },
            nextWeek: /**
             * @param {?} date
             * @return {?}
             */ function (date) {
                return 'dddd [a ' + ('la' + (getHours(date) !== 1) ? 'les' : '') + '] LT';
            },
            lastDay: /**
             * @param {?} date
             * @return {?}
             */ function (date) {
                return '[ahir a ' + ('la' + (getHours(date) !== 1) ? 'les' : '') + '] LT';
            },
            lastWeek: /**
             * @param {?} date
             * @return {?}
             */ function (date) {
                return '[el] dddd [' + ('passada la ' + (getHours(date) !== 1) ? 'passades les' : '') + '] LT';
            },
            sameElse: 'L'
        },
        relativeTime: {
            future: 'en %s',
            past: 'fa %s',
            s: 'uns segons',
            ss: '%d segons',
            m: 'un minut',
            mm: '%d minuts',
            h: 'una hora',
            hh: '%d hores',
            d: 'un dia',
            dd: '%d dies',
            M: 'un mes',
            MM: '%d mesos',
            y: 'un any',
            yy: '%d anys'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(er|on|er|rt|é)/,
        ordinal: /**
         * @param {?} _num
         * @return {?}
         */ function (_num) {
            var /** @type {?} */ num = Number(_num);
            var /** @type {?} */ output = (num > 4) ? 'é' :
                (num === 1 || num === 3) ? 'r' :
                    (num === 2) ? 'n' :
                        (num === 4) ? 't' : 'é';
            return num + output;
        },
        week: {
            dow: 1,
            // Monday is the first day of the week.
            doy: 4 // The week that contains Jan 4th is the first week of the year.
        }
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    //! moment.js locale configuration
    //! locale : Czech [cs]
    //! author : petrbela : https://github.com/petrbela
    var /** @type {?} */ months$1 = 'leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec'.split('_');
    var /** @type {?} */ monthsShort$1 = 'led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro'.split('_');
    /**
     * @param {?} num
     * @return {?}
     */
    function plural(num) {
        return (num > 1) && (num < 5) && (~~(num / 10) !== 1);
    }
    /**
     * @param {?} num
     * @param {?} withoutSuffix
     * @param {?} key
     * @param {?} isFuture
     * @return {?}
     */
    function translate(num, withoutSuffix, key, isFuture) {
        var /** @type {?} */ result = num + ' ';
        switch (key) {
            case 's':
                // a few seconds / in a few seconds / a few seconds ago
                return (withoutSuffix || isFuture) ? 'pár sekund' : 'pár sekundami';
            case 'ss':
                // 9 seconds / in 9 seconds / 9 seconds ago
                if (withoutSuffix || isFuture) {
                    return result + (plural(num) ? 'sekundy' : 'sekund');
                }
                else {
                    return result + 'sekundami';
                }
            // break;
            case 'm':
                // a minute / in a minute / a minute ago
                return withoutSuffix ? 'minuta' : (isFuture ? 'minutu' : 'minutou');
            case 'mm':
                // 9 minutes / in 9 minutes / 9 minutes ago
                if (withoutSuffix || isFuture) {
                    return result + (plural(num) ? 'minuty' : 'minut');
                }
                else {
                    return result + 'minutami';
                }
            // break;
            case 'h':
                // an hour / in an hour / an hour ago
                return withoutSuffix ? 'hodina' : (isFuture ? 'hodinu' : 'hodinou');
            case 'hh':
                // 9 hours / in 9 hours / 9 hours ago
                if (withoutSuffix || isFuture) {
                    return result + (plural(num) ? 'hodiny' : 'hodin');
                }
                else {
                    return result + 'hodinami';
                }
            // break;
            case 'd':
                // a day / in a day / a day ago
                return (withoutSuffix || isFuture) ? 'den' : 'dnem';
            case 'dd':
                // 9 days / in 9 days / 9 days ago
                if (withoutSuffix || isFuture) {
                    return result + (plural(num) ? 'dny' : 'dní');
                }
                else {
                    return result + 'dny';
                }
            // break;
            case 'M':
                // a month / in a month / a month ago
                return (withoutSuffix || isFuture) ? 'měsíc' : 'měsícem';
            case 'MM':
                // 9 months / in 9 months / 9 months ago
                if (withoutSuffix || isFuture) {
                    return result + (plural(num) ? 'měsíce' : 'měsíců');
                }
                else {
                    return result + 'měsíci';
                }
            // break;
            case 'y':
                // a year / in a year / a year ago
                return (withoutSuffix || isFuture) ? 'rok' : 'rokem';
            case 'yy':
                // 9 years / in 9 years / 9 years ago
                if (withoutSuffix || isFuture) {
                    return result + (plural(num) ? 'roky' : 'let');
                }
                else {
                    return result + 'lety';
                }
        }
    }
    var /** @type {?} */ csLocale = {
        abbr: 'cs',
        months: months$1,
        monthsShort: monthsShort$1,
        monthsParse: (function (months, monthsShort) {
            var /** @type {?} */ i, /** @type {?} */ _monthsParse = [];
            for (i = 0; i < 12; i++) {
                // use custom parser to solve problem with July (červenec)
                _monthsParse[i] = new RegExp('^' + months[i] + '$|^' + monthsShort[i] + '$', 'i');
            }
            return _monthsParse;
        }(months$1, monthsShort$1)),
        shortMonthsParse: (function (monthsShort) {
            var /** @type {?} */ i, /** @type {?} */ _shortMonthsParse = [];
            for (i = 0; i < 12; i++) {
                _shortMonthsParse[i] = new RegExp('^' + monthsShort[i] + '$', 'i');
            }
            return _shortMonthsParse;
        }(monthsShort$1)),
        longMonthsParse: (function (months) {
            var /** @type {?} */ i, /** @type {?} */ _longMonthsParse = [];
            for (i = 0; i < 12; i++) {
                _longMonthsParse[i] = new RegExp('^' + months[i] + '$', 'i');
            }
            return _longMonthsParse;
        }(months$1)),
        weekdays: 'neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota'.split('_'),
        weekdaysShort: 'ne_po_út_st_čt_pá_so'.split('_'),
        weekdaysMin: 'ne_po_út_st_čt_pá_so'.split('_'),
        longDateFormat: {
            LT: 'H:mm',
            LTS: 'H:mm:ss',
            L: 'DD.MM.YYYY',
            LL: 'D. MMMM YYYY',
            LLL: 'D. MMMM YYYY H:mm',
            LLLL: 'dddd D. MMMM YYYY H:mm',
            l: 'D. M. YYYY'
        },
        calendar: {
            sameDay: '[dnes v] LT',
            nextDay: '[zítra v] LT',
            nextWeek: /**
             * @param {?} date
             * @return {?}
             */ function (date) {
                switch (getDayOfWeek(date)) {
                    case 0:
                        return '[v neděli v] LT';
                    case 1:
                    case 2:
                        return '[v] dddd [v] LT';
                    case 3:
                        return '[ve středu v] LT';
                    case 4:
                        return '[ve čtvrtek v] LT';
                    case 5:
                        return '[v pátek v] LT';
                    case 6:
                        return '[v sobotu v] LT';
                }
            },
            lastDay: '[včera v] LT',
            lastWeek: /**
             * @param {?} date
             * @return {?}
             */ function (date) {
                switch (getDayOfWeek(date)) {
                    case 0:
                        return '[minulou neděli v] LT';
                    case 1:
                    case 2:
                        return '[minulé] dddd [v] LT';
                    case 3:
                        return '[minulou středu v] LT';
                    case 4:
                    case 5:
                        return '[minulý] dddd [v] LT';
                    case 6:
                        return '[minulou sobotu v] LT';
                }
            },
            sameElse: 'L'
        },
        relativeTime: {
            future: 'za %s',
            past: 'před %s',
            s: translate,
            ss: translate,
            m: translate,
            mm: translate,
            h: translate,
            hh: translate,
            d: translate,
            dd: translate,
            M: translate,
            MM: translate,
            y: translate,
            yy: translate
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: {
            dow: 1,
            // Monday is the first day of the week.
            doy: 4 // The week that contains Jan 4th is the first week of the year.
        }
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    // tslint:disable:comment-format
    //! moment.js locale configuration
    //! locale : Danish (Denmark) [da]
    //! author : Per Hansen : https://github.com/perhp
    var /** @type {?} */ daLocale = {
        abbr: 'da',
        months: 'Januar_Februar_Marts_April_Maj_Juni_Juli_August_September_Oktober_November_December'.split('_'),
        monthsShort: 'Jan_Feb_Mar_Apr_Maj_Jun_Jul_Aug_Sep_Okt_Nov_Dec'.split('_'),
        weekdays: 'Søndag_Mandag_Tirsdag_Onsdag_Torsdag_Fredag_Lørdag'.split('_'),
        weekdaysShort: 'Søn_Man_Tir_Ons_Tor_Fre_Lør'.split('_'),
        weekdaysMin: 'Sø_Ma_Ti_On_To_Fr_Lø'.split('_'),
        longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D. MMMM YYYY',
            LLL: 'D. MMMM YYYY HH:mm',
            LLLL: 'dddd [d.] D. MMMM YYYY [kl.] HH:mm'
        },
        calendar: {
            sameDay: '[i dag kl.] LT',
            nextDay: '[i morgen kl.] LT',
            nextWeek: 'på dddd [kl.] LT',
            lastDay: '[i går kl.] LT',
            lastWeek: '[i] dddd[s kl.] LT',
            sameElse: 'L'
        },
        relativeTime: {
            future: 'om %s',
            past: '%s siden',
            s: 'få sekunder',
            m: 'et minut',
            mm: '%d minutter',
            h: 'en time',
            hh: '%d timer',
            d: 'en dag',
            dd: '%d dage',
            M: 'en måned',
            MM: '%d måneder',
            y: 'et år',
            yy: '%d år'
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: {
            dow: 1,
            // Monday is the first day of the week.
            doy: 4 // The week that contains Jan 4th is the first week of the year.
        }
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    // tslint:disable:comment-format binary-expression-operand-order max-line-length
    // tslint:disable:no-bitwise prefer-template cyclomatic-complexity
    // tslint:disable:no-shadowed-variable switch-default prefer-const
    // tslint:disable:one-variable-per-declaration newline-before-return
    // tslint:disable:object-literal-key-quotes
    /**
     * @param {?} num
     * @param {?} withoutSuffix
     * @param {?} key
     * @param {?} isFuture
     * @return {?}
     */
    function processRelativeTime(num, withoutSuffix, key, isFuture) {
        var /** @type {?} */ format = {
            'm': ['eine Minute', 'einer Minute'],
            'h': ['eine Stunde', 'einer Stunde'],
            'd': ['ein Tag', 'einem Tag'],
            'dd': [num + ' Tage', num + ' Tagen'],
            'M': ['ein Monat', 'einem Monat'],
            'MM': [num + ' Monate', num + ' Monaten'],
            'y': ['ein Jahr', 'einem Jahr'],
            'yy': [num + ' Jahre', num + ' Jahren']
        };
        return withoutSuffix ? format[key][0] : format[key][1];
    }
    var /** @type {?} */ deLocale = {
        abbr: 'de',
        months: 'Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember'.split('_'),
        monthsShort: 'Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.'.split('_'),
        monthsParseExact: true,
        weekdays: 'Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag'.split('_'),
        weekdaysShort: 'So._Mo._Di._Mi._Do._Fr._Sa.'.split('_'),
        weekdaysMin: 'So_Mo_Di_Mi_Do_Fr_Sa'.split('_'),
        weekdaysParseExact: true,
        longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD.MM.YYYY',
            LL: 'D. MMMM YYYY',
            LLL: 'D. MMMM YYYY HH:mm',
            LLLL: 'dddd, D. MMMM YYYY HH:mm'
        },
        calendar: {
            sameDay: '[heute um] LT [Uhr]',
            sameElse: 'L',
            nextDay: '[morgen um] LT [Uhr]',
            nextWeek: 'dddd [um] LT [Uhr]',
            lastDay: '[gestern um] LT [Uhr]',
            lastWeek: '[letzten] dddd [um] LT [Uhr]'
        },
        relativeTime: {
            future: 'in %s',
            past: 'vor %s',
            s: 'ein paar Sekunden',
            ss: '%d Sekunden',
            m: processRelativeTime,
            mm: '%d Minuten',
            h: processRelativeTime,
            hh: '%d Stunden',
            d: processRelativeTime,
            dd: processRelativeTime,
            M: processRelativeTime,
            MM: processRelativeTime,
            y: processRelativeTime,
            yy: processRelativeTime
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: {
            dow: 1,
            // Monday is the first day of the week.
            doy: 4 // The week that contains Jan 4th is the first week of the year.
        }
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    // tslint:disable:comment-format binary-expression-operand-order max-line-length
    // tslint:disable:no-bitwise prefer-template cyclomatic-complexity
    // tslint:disable:no-shadowed-variable switch-default prefer-const
    // tslint:disable:one-variable-per-declaration newline-before-return
    //! moment.js locale configuration
    //! locale : English (United Kingdom) [en-gb]
    //! author : Chris Gedrim : https://github.com/chrisgedrim
    var /** @type {?} */ enGbLocale = {
        abbr: 'en-gb',
        months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
        monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
        weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
        weekdaysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
        weekdaysMin: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
        longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd, D MMMM YYYY HH:mm'
        },
        calendar: {
            sameDay: '[Today at] LT',
            nextDay: '[Tomorrow at] LT',
            nextWeek: 'dddd [at] LT',
            lastDay: '[Yesterday at] LT',
            lastWeek: '[Last] dddd [at] LT',
            sameElse: 'L'
        },
        relativeTime: {
            future: 'in %s',
            past: '%s ago',
            s: 'a few seconds',
            ss: '%d seconds',
            m: 'a minute',
            mm: '%d minutes',
            h: 'an hour',
            hh: '%d hours',
            d: 'a day',
            dd: '%d days',
            M: 'a month',
            MM: '%d months',
            y: 'a year',
            yy: '%d years'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal: /**
         * @param {?} _num
         * @return {?}
         */ function (_num) {
            var /** @type {?} */ num = Number(_num);
            var /** @type {?} */ b = num % 10, /** @type {?} */ output = (~~(num % 100 / 10) === 1) ? 'th' :
                (b === 1) ? 'st' :
                    (b === 2) ? 'nd' :
                        (b === 3) ? 'rd' : 'th';
            return num + output;
        },
        week: {
            dow: 1,
            // Monday is the first day of the week.
            doy: 4 // The week that contains Jan 4th is the first week of the year.
        }
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    //! moment.js locale configuration
    //! locale : Spanish (Dominican Republic) [es-do]
    var /** @type {?} */ monthsShortDot$1 = 'ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.'.split('_'), /** @type {?} */ monthsShort$2 = 'ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic'.split('_');
    var /** @type {?} */ monthsParse$1 = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i];
    var /** @type {?} */ monthsRegex$1 = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
    var /** @type {?} */ esDoLocale = {
        abbr: 'es-do',
        months: 'enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre'.split('_'),
        monthsShort: /**
         * @param {?} date
         * @param {?} format
         * @param {?=} isUTC
         * @return {?}
         */ function (date, format, isUTC) {
            if (!date) {
                return monthsShortDot$1;
            }
            else if (/-MMM-/.test(format)) {
                return monthsShort$2[getMonth(date, isUTC)];
            }
            else {
                return monthsShortDot$1[getMonth(date, isUTC)];
            }
        },
        monthsRegex: monthsRegex$1,
        monthsShortRegex: monthsRegex$1,
        monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
        monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
        monthsParse: monthsParse$1,
        longMonthsParse: monthsParse$1,
        shortMonthsParse: monthsParse$1,
        weekdays: 'domingo_lunes_martes_miércoles_jueves_viernes_sábado'.split('_'),
        weekdaysShort: 'dom._lun._mar._mié._jue._vie._sáb.'.split('_'),
        weekdaysMin: 'do_lu_ma_mi_ju_vi_sá'.split('_'),
        weekdaysParseExact: true,
        longDateFormat: {
            LT: 'h:mm A',
            LTS: 'h:mm:ss A',
            L: 'DD/MM/YYYY',
            LL: 'D [de] MMMM [de] YYYY',
            LLL: 'D [de] MMMM [de] YYYY h:mm A',
            LLLL: 'dddd, D [de] MMMM [de] YYYY h:mm A'
        },
        calendar: {
            sameDay: /**
             * @param {?} date
             * @return {?}
             */ function (date) {
                return '[hoy a la' + ((getHours(date) !== 1) ? 's' : '') + '] LT';
            },
            nextDay: /**
             * @param {?} date
             * @return {?}
             */ function (date) {
                return '[mañana a la' + ((getHours(date) !== 1) ? 's' : '') + '] LT';
            },
            nextWeek: /**
             * @param {?} date
             * @return {?}
             */ function (date) {
                return 'dddd [a la' + ((getHours(date) !== 1) ? 's' : '') + '] LT';
            },
            lastDay: /**
             * @param {?} date
             * @return {?}
             */ function (date) {
                return '[ayer a la' + ((getHours(date) !== 1) ? 's' : '') + '] LT';
            },
            lastWeek: /**
             * @param {?} date
             * @return {?}
             */ function (date) {
                return '[el] dddd [pasado a la' + ((getHours(date) !== 1) ? 's' : '') + '] LT';
            },
            sameElse: 'L'
        },
        relativeTime: {
            future: 'en %s',
            past: 'hace %s',
            s: 'unos segundos',
            ss: '%d segundos',
            m: 'un minuto',
            mm: '%d minutos',
            h: 'una hora',
            hh: '%d horas',
            d: 'un día',
            dd: '%d días',
            M: 'un mes',
            MM: '%d meses',
            y: 'un año',
            yy: '%d años'
        },
        dayOfMonthOrdinalParse: /\d{1,2}º/,
        ordinal: '%dº',
        week: {
            dow: 1,
            // Monday is the first day of the week.
            doy: 4 // The week that contains Jan 4th is the first week of the year.
        }
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    //! moment.js locale configuration
    //! locale : Spanish [es]
    //! author : Julio Napurí : https://github.com/julionc
    var /** @type {?} */ monthsShortDot$2 = 'ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.'.split('_'), /** @type {?} */ monthsShort$3 = 'ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic'.split('_');
    var /** @type {?} */ monthsParse$2 = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i];
    var /** @type {?} */ monthsRegex$2 = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
    var /** @type {?} */ esLocale = {
        abbr: 'es',
        months: 'enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre'.split('_'),
        monthsShort: /**
         * @param {?} date
         * @param {?} format
         * @param {?=} isUTC
         * @return {?}
         */ function (date, format, isUTC) {
            if (!date) {
                return monthsShortDot$2;
            }
            if (/-MMM-/.test(format)) {
                return monthsShort$3[getMonth(date, isUTC)];
            }
            return monthsShortDot$2[getMonth(date, isUTC)];
        },
        monthsRegex: monthsRegex$2,
        monthsShortRegex: monthsRegex$2,
        monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
        monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
        monthsParse: monthsParse$2,
        longMonthsParse: monthsParse$2,
        shortMonthsParse: monthsParse$2,
        weekdays: 'domingo_lunes_martes_miércoles_jueves_viernes_sábado'.split('_'),
        weekdaysShort: 'dom._lun._mar._mié._jue._vie._sáb.'.split('_'),
        weekdaysMin: 'do_lu_ma_mi_ju_vi_sá'.split('_'),
        weekdaysParseExact: true,
        longDateFormat: {
            LT: 'H:mm',
            LTS: 'H:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D [de] MMMM [de] YYYY',
            LLL: 'D [de] MMMM [de] YYYY H:mm',
            LLLL: 'dddd, D [de] MMMM [de] YYYY H:mm'
        },
        calendar: {
            sameDay: /**
             * @param {?} date
             * @return {?}
             */ function (date) {
                return '[hoy a la' + ((getHours(date) !== 1) ? 's' : '') + '] LT';
            },
            nextDay: /**
             * @param {?} date
             * @return {?}
             */ function (date) {
                return '[mañana a la' + ((getHours(date) !== 1) ? 's' : '') + '] LT';
            },
            nextWeek: /**
             * @param {?} date
             * @return {?}
             */ function (date) {
                return 'dddd [a la' + ((getHours(date) !== 1) ? 's' : '') + '] LT';
            },
            lastDay: /**
             * @param {?} date
             * @return {?}
             */ function (date) {
                return '[ayer a la' + ((getHours(date) !== 1) ? 's' : '') + '] LT';
            },
            lastWeek: /**
             * @param {?} date
             * @return {?}
             */ function (date) {
                return '[el] dddd [pasado a la' + ((getHours(date) !== 1) ? 's' : '') + '] LT';
            },
            sameElse: 'L'
        },
        relativeTime: {
            future: 'en %s',
            past: 'hace %s',
            s: 'unos segundos',
            ss: '%d segundos',
            m: 'un minuto',
            mm: '%d minutos',
            h: 'una hora',
            hh: '%d horas',
            d: 'un día',
            dd: '%d días',
            M: 'un mes',
            MM: '%d meses',
            y: 'un año',
            yy: '%d años'
        },
        dayOfMonthOrdinalParse: /\d{1,2}º/,
        ordinal: '%dº',
        week: {
            dow: 1,
            // Monday is the first day of the week.
            doy: 4 // The week that contains Jan 4th is the first week of the year.
        }
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    //! moment.js locale configuration
    //! locale : Spanish (United States) [es-us]
    //! author : bustta : https://github.com/bustta
    var /** @type {?} */ monthsShortDot$3 = 'ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.'.split('_');
    var /** @type {?} */ monthsShort$4 = 'ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic'.split('_');
    var /** @type {?} */ esUsLocale = {
        abbr: 'es-us',
        months: 'enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre'.split('_'),
        monthsShort: /**
         * @param {?} date
         * @param {?} format
         * @param {?=} isUTC
         * @return {?}
         */ function (date, format, isUTC) {
            if (!date) {
                return monthsShortDot$3;
            }
            else if (/-MMM-/.test(format)) {
                return monthsShort$4[getMonth(date, isUTC)];
            }
            else {
                return monthsShortDot$3[getMonth(date, isUTC)];
            }
        },
        monthsParseExact: true,
        weekdays: 'domingo_lunes_martes_miércoles_jueves_viernes_sábado'.split('_'),
        weekdaysShort: 'dom._lun._mar._mié._jue._vie._sáb.'.split('_'),
        weekdaysMin: 'do_lu_ma_mi_ju_vi_sá'.split('_'),
        weekdaysParseExact: true,
        longDateFormat: {
            LT: 'h:mm A',
            LTS: 'h:mm:ss A',
            L: 'MM/DD/YYYY',
            LL: 'MMMM [de] D [de] YYYY',
            LLL: 'MMMM [de] D [de] YYYY h:mm A',
            LLLL: 'dddd, MMMM [de] D [de] YYYY h:mm A'
        },
        calendar: {
            sameDay: /**
             * @param {?} date
             * @return {?}
             */ function (date) {
                return '[hoy a la' + ((getHours(date) !== 1) ? 's' : '') + '] LT';
            },
            nextDay: /**
             * @param {?} date
             * @return {?}
             */ function (date) {
                return '[mañana a la' + ((getHours(date) !== 1) ? 's' : '') + '] LT';
            },
            nextWeek: /**
             * @param {?} date
             * @return {?}
             */ function (date) {
                return 'dddd [a la' + ((getHours(date) !== 1) ? 's' : '') + '] LT';
            },
            lastDay: /**
             * @param {?} date
             * @return {?}
             */ function (date) {
                return '[ayer a la' + ((getHours(date) !== 1) ? 's' : '') + '] LT';
            },
            lastWeek: /**
             * @param {?} date
             * @return {?}
             */ function (date) {
                return '[el] dddd [pasado a la' + ((getHours(date) !== 1) ? 's' : '') + '] LT';
            },
            sameElse: 'L'
        },
        relativeTime: {
            future: 'en %s',
            past: 'hace %s',
            s: 'unos segundos',
            ss: '%d segundos',
            m: 'un minuto',
            mm: '%d minutos',
            h: 'una hora',
            hh: '%d horas',
            d: 'un día',
            dd: '%d días',
            M: 'un mes',
            MM: '%d meses',
            y: 'un año',
            yy: '%d años'
        },
        dayOfMonthOrdinalParse: /\d{1,2}º/,
        ordinal: '%dº',
        week: {
            dow: 0,
            // Sunday is the first day of the week.
            doy: 6 // The week that contains Jan 1st is the first week of the year.
        }
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    // tslint:disable:comment-format binary-expression-operand-order max-line-length
    // tslint:disable:no-bitwise prefer-template cyclomatic-complexity
    // tslint:disable:no-shadowed-variable switch-default prefer-const
    // tslint:disable:one-variable-per-declaration newline-before-return
    //! moment.js locale configuration
    // https://github.com/moment/moment/blob/develop/locale/fi.js
    var /** @type {?} */ numbersPast = 'nolla yksi kaksi kolme neljä viisi kuusi seitsemän kahdeksan yhdeksän'.split(' '), /** @type {?} */ numbersFuture = [
        'nolla', 'yhden', 'kahden', 'kolmen', 'neljän', 'viiden', 'kuuden',
        numbersPast[7], numbersPast[8], numbersPast[9]
    ];
    /**
     * @param {?} num
     * @param {?} withoutSuffix
     * @param {?} key
     * @param {?} isFuture
     * @return {?}
     */
    function translate$1(num, withoutSuffix, key, isFuture) {
        var /** @type {?} */ result = '';
        switch (key) {
            case 's':
                return isFuture ? 'muutaman sekunnin' : 'muutama sekunti';
            case 'ss':
                return isFuture ? 'sekunnin' : 'sekuntia';
            case 'm':
                return isFuture ? 'minuutin' : 'minuutti';
            case 'mm':
                result = isFuture ? 'minuutin' : 'minuuttia';
                break;
            case 'h':
                return isFuture ? 'tunnin' : 'tunti';
            case 'hh':
                result = isFuture ? 'tunnin' : 'tuntia';
                break;
            case 'd':
                return isFuture ? 'päivän' : 'päivä';
            case 'dd':
                result = isFuture ? 'päivän' : 'päivää';
                break;
            case 'M':
                return isFuture ? 'kuukauden' : 'kuukausi';
            case 'MM':
                result = isFuture ? 'kuukauden' : 'kuukautta';
                break;
            case 'y':
                return isFuture ? 'vuoden' : 'vuosi';
            case 'yy':
                result = isFuture ? 'vuoden' : 'vuotta';
                break;
        }
        result = verbalNumber(num, isFuture) + ' ' + result;
        return result;
    }
    /**
     * @param {?} num
     * @param {?} isFuture
     * @return {?}
     */
    function verbalNumber(num, isFuture) {
        return num < 10 ? (isFuture ? numbersFuture[num] : numbersPast[num]) : num;
    }
    var /** @type {?} */ fiLocale = {
        abbr: 'fi',
        months: 'tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu'.split('_'),
        monthsShort: 'tammi_helmi_maalis_huhti_touko_kesä_heinä_elo_syys_loka_marras_joulu'.split('_'),
        weekdays: 'sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai'.split('_'),
        weekdaysShort: 'su_ma_ti_ke_to_pe_la'.split('_'),
        weekdaysMin: 'su_ma_ti_ke_to_pe_la'.split('_'),
        longDateFormat: {
            LT: 'HH.mm',
            LTS: 'HH.mm.ss',
            L: 'DD.MM.YYYY',
            LL: 'Do MMMM[ta] YYYY',
            LLL: 'Do MMMM[ta] YYYY, [klo] HH.mm',
            LLLL: 'dddd, Do MMMM[ta] YYYY, [klo] HH.mm',
            l: 'D.M.YYYY',
            ll: 'Do MMM YYYY',
            lll: 'Do MMM YYYY, [klo] HH.mm',
            llll: 'ddd, Do MMM YYYY, [klo] HH.mm'
        },
        calendar: {
            sameDay: '[tänään] [klo] LT',
            nextDay: '[huomenna] [klo] LT',
            nextWeek: 'dddd [klo] LT',
            lastDay: '[eilen] [klo] LT',
            lastWeek: '[viime] dddd[na] [klo] LT',
            sameElse: 'L'
        },
        relativeTime: {
            future: '%s päästä',
            past: '%s sitten',
            s: translate$1,
            ss: translate$1,
            m: translate$1,
            mm: translate$1,
            h: translate$1,
            hh: translate$1,
            d: translate$1,
            dd: translate$1,
            M: translate$1,
            MM: translate$1,
            y: translate$1,
            yy: translate$1
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: {
            dow: 1,
            // Monday is the first day of the week.
            doy: 4 // The week that contains Jan 4th is the first week of the year.
        }
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    // tslint:disable:comment-format binary-expression-operand-order max-line-length
    // tslint:disable:no-bitwise prefer-template cyclomatic-complexity
    // tslint:disable:no-shadowed-variable switch-default prefer-const
    // tslint:disable:one-variable-per-declaration newline-before-return
    //! moment.js locale configuration
    //! locale : French [fr]
    //! author : John Fischer : https://github.com/jfroffice
    var /** @type {?} */ frLocale = {
        abbr: 'fr',
        months: 'janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre'.split('_'),
        monthsShort: 'janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.'.split('_'),
        monthsParseExact: true,
        weekdays: 'dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi'.split('_'),
        weekdaysShort: 'dim._lun._mar._mer._jeu._ven._sam.'.split('_'),
        weekdaysMin: 'di_lu_ma_me_je_ve_sa'.split('_'),
        weekdaysParseExact: true,
        longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd D MMMM YYYY HH:mm'
        },
        calendar: {
            sameDay: '[Aujourd’hui à] LT',
            nextDay: '[Demain à] LT',
            nextWeek: 'dddd [à] LT',
            lastDay: '[Hier à] LT',
            lastWeek: 'dddd [dernier à] LT',
            sameElse: 'L'
        },
        relativeTime: {
            future: 'dans %s',
            past: 'il y a %s',
            s: 'quelques secondes',
            ss: '%d secondes',
            m: 'une minute',
            mm: '%d minutes',
            h: 'une heure',
            hh: '%d heures',
            d: 'un jour',
            dd: '%d jours',
            M: 'un mois',
            MM: '%d mois',
            y: 'un an',
            yy: '%d ans'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(er|)/,
        ordinal: /**
         * @param {?} _num
         * @param {?} period
         * @return {?}
         */ function (_num, period) {
            var /** @type {?} */ num = Number(_num);
            switch (period) {
                // TODO: Return 'e' when day of month > 1. Move this case inside
                // block for masculine words below.
                // See https://github.com/moment/moment/issues/3375
                case 'D':
                    return num + (num === 1 ? 'er' : '');
                // Words with masculine grammatical gender: mois, trimestre, jour
                default:
                case 'M':
                case 'Q':
                case 'DDD':
                case 'd':
                    return num + (num === 1 ? 'er' : 'e');
                // Words with feminine grammatical gender: semaine
                case 'w':
                case 'W':
                    return num + (num === 1 ? 're' : 'e');
            }
        },
        week: {
            dow: 1,
            // Monday is the first day of the week.
            doy: 4 // The week that contains Jan 4th is the first week of the year.
        }
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    //! moment.js locale configuration
    //! locale : Galician [gl]
    //! author : Darío Beiró : https://github.com/quinobravo
    var /** @type {?} */ monthsShortDot$4 = 'xan._feb._mar._abr._mai._xuñ._xul._ago._set._out._nov._dec.'.split('_'), /** @type {?} */ monthsShort$5 = 'xan_feb_mar_abr_mai_xuñ_xul_ago_set_out_nov_dec'.split('_');
    var /** @type {?} */ monthsParse$3 = [/^xan/i, /^feb/i, /^mar/i, /^abr/i, /^mai/i, /^xuñ/i, /^xul/i, /^ago/i, /^set/i, /^out/i, /^nov/i, /^dec/i];
    var /** @type {?} */ monthsRegex$3 = /^(xaneiro|febreiro|marzo|abril|maio|xuño|xullo|agosto|setembro|outubro|novembro|decembro|xan\.?|feb\.?|mar\.?|abr\.?|mai\.?|xuñ\.?|xul\.?|ago\.?|set\.?|out\.?|nov\.?|dec\.?)/i;
    var /** @type {?} */ glLocale = {
        abbr: 'gl',
        months: 'xaneiro_febreiro_marzo_abril_maio_xuño_xullo_agosto_setembro_outubro_novembro_decembro'.split('_'),
        monthsShort: /**
         * @param {?} date
         * @param {?} format
         * @param {?=} isUTC
         * @return {?}
         */ function (date, format, isUTC) {
            if (!date) {
                return monthsShortDot$4;
            }
            if (/-MMM-/.test(format)) {
                return monthsShort$5[getMonth(date, isUTC)];
            }
            return monthsShortDot$4[getMonth(date, isUTC)];
        },
        monthsRegex: monthsRegex$3,
        monthsShortRegex: monthsRegex$3,
        monthsStrictRegex: /^(xaneiro|febreiro|marzo|abril|maio|xuño|xullo|agosto|setembro|outubro|novembro|decembro)/i,
        monthsShortStrictRegex: /^(xan\.?|feb\.?|mar\.?|abr\.?|mai\.?|xuñ\.?|xul\.?|ago\.?|set\.?|out\.?|nov\.?|dec\.?)/i,
        monthsParse: monthsParse$3,
        longMonthsParse: monthsParse$3,
        shortMonthsParse: monthsParse$3,
        weekdays: 'domingo_luns_martes_mércores_xoves_venres_sábado'.split('_'),
        weekdaysShort: 'dom._lun._mar._mér._xov._ven._sáb.'.split('_'),
        weekdaysMin: 'do_lu_ma_mé_xo_ve_sá'.split('_'),
        weekdaysParseExact: true,
        longDateFormat: {
            LT: 'H:mm',
            LTS: 'H:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D [de] MMMM [de] YYYY',
            LLL: 'D [de] MMMM [de] YYYY H:mm',
            LLLL: 'dddd, D [de] MMMM [de] YYYY H:mm'
        },
        calendar: {
            sameDay: /**
             * @param {?} date
             * @return {?}
             */ function (date) {
                return '[hoxe á' + ((getHours(date) !== 1) ? 's' : '') + '] LT';
            },
            nextDay: /**
             * @param {?} date
             * @return {?}
             */ function (date) {
                return '[mañan á' + ((getHours(date) !== 1) ? 's' : '') + '] LT';
            },
            nextWeek: /**
             * @param {?} date
             * @return {?}
             */ function (date) {
                return 'dddd [á' + ((getHours(date) !== 1) ? 's' : '') + '] LT';
            },
            lastDay: /**
             * @param {?} date
             * @return {?}
             */ function (date) {
                return '[onte á' + ((getHours(date) !== 1) ? 's' : '') + '] LT';
            },
            lastWeek: /**
             * @param {?} date
             * @return {?}
             */ function (date) {
                return '[o] dddd [pasado á' + ((getHours(date) !== 1) ? 's' : '') + '] LT';
            },
            sameElse: 'L'
        },
        relativeTime: {
            future: 'en %s',
            past: 'fai %s',
            s: 'uns segundos',
            ss: '%d segundos',
            m: 'un minuto',
            mm: '%d minutos',
            h: 'unha hora',
            hh: '%d horas',
            d: 'un día',
            dd: '%d días',
            M: 'un mes',
            MM: '%d meses',
            y: 'un ano',
            yy: '%d anos'
        },
        dayOfMonthOrdinalParse: /\d{1,2}º/,
        ordinal: '%dº',
        week: {
            dow: 1,
            // Monday is the first day of the week.
            doy: 4 // The week that contains Jan 4th is the first week of the year.
        }
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    // tslint:disable:comment-format binary-expression-operand-order max-line-length
    // tslint:disable:no-bitwise prefer-template cyclomatic-complexity
    // tslint:disable:no-shadowed-variable switch-default prefer-const
    // tslint:disable:one-variable-per-declaration newline-before-return
    //! moment.js locale configuration
    //! locale : Hebrew [he]
    //! author : Tomer Cohen : https://github.com/tomer
    //! author : Moshe Simantov : https://github.com/DevelopmentIL
    //! author : Tal Ater : https://github.com/TalAter
    var /** @type {?} */ heLocale = {
        abbr: 'he',
        months: 'ינואר_פברואר_מרץ_אפריל_מאי_יוני_יולי_אוגוסט_ספטמבר_אוקטובר_נובמבר_דצמבר'.split('_'),
        monthsShort: 'ינו׳_פבר׳_מרץ_אפר׳_מאי_יוני_יולי_אוג׳_ספט׳_אוק׳_נוב׳_דצמ׳'.split('_'),
        weekdays: 'ראשון_שני_שלישי_רביעי_חמישי_שישי_שבת'.split('_'),
        weekdaysShort: 'א׳_ב׳_ג׳_ד׳_ה׳_ו׳_ש׳'.split('_'),
        weekdaysMin: 'א_ב_ג_ד_ה_ו_ש'.split('_'),
        longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D [ב]MMMM YYYY',
            LLL: 'D [ב]MMMM YYYY HH:mm',
            LLLL: 'dddd, D [ב]MMMM YYYY HH:mm',
            l: 'D/M/YYYY',
            ll: 'D MMM YYYY',
            lll: 'D MMM YYYY HH:mm',
            llll: 'ddd, D MMM YYYY HH:mm'
        },
        calendar: {
            sameDay: '[היום ב־]LT',
            nextDay: '[מחר ב־]LT',
            nextWeek: 'dddd [בשעה] LT',
            lastDay: '[אתמול ב־]LT',
            lastWeek: '[ביום] dddd [האחרון בשעה] LT',
            sameElse: 'L'
        },
        relativeTime: {
            future: 'בעוד %s',
            past: 'לפני %s',
            s: 'מספר שניות',
            ss: '%d שניות',
            m: 'דקה',
            mm: '%d דקות',
            h: 'שעה',
            hh: /**
             * @param {?} num
             * @return {?}
             */ function (num) {
                if (num === 2) {
                    return 'שעתיים';
                }
                return num + ' שעות';
            },
            d: 'יום',
            dd: /**
             * @param {?} num
             * @return {?}
             */ function (num) {
                if (num === 2) {
                    return 'יומיים';
                }
                return num + ' ימים';
            },
            M: 'חודש',
            MM: /**
             * @param {?} num
             * @return {?}
             */ function (num) {
                if (num === 2) {
                    return 'חודשיים';
                }
                return num + ' חודשים';
            },
            y: 'שנה',
            yy: /**
             * @param {?} num
             * @return {?}
             */ function (num) {
                if (num === 2) {
                    return 'שנתיים';
                }
                else if (num % 10 === 0 && num !== 10) {
                    return num + ' שנה';
                }
                return num + ' שנים';
            }
        },
        meridiemParse: /אחה"צ|לפנה"צ|אחרי הצהריים|לפני הצהריים|לפנות בוקר|בבוקר|בערב/i,
        isPM: /**
         * @param {?} input
         * @return {?}
         */ function (input) {
            return /^(אחה"צ|אחרי הצהריים|בערב)$/.test(input);
        },
        meridiem: /**
         * @param {?} hour
         * @param {?} minute
         * @param {?} isLower
         * @return {?}
         */ function (hour, minute, isLower) {
            if (hour < 5) {
                return 'לפנות בוקר';
            }
            else if (hour < 10) {
                return 'בבוקר';
            }
            else if (hour < 12) {
                return isLower ? 'לפנה"צ' : 'לפני הצהריים';
            }
            else if (hour < 18) {
                return isLower ? 'אחה"צ' : 'אחרי הצהריים';
            }
            else {
                return 'בערב';
            }
        }
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    // tslint:disable:comment-format binary-expression-operand-order max-line-length
    // tslint:disable:no-bitwise prefer-template cyclomatic-complexity
    // tslint:disable:no-shadowed-variable switch-default prefer-const
    // tslint:disable:one-variable-per-declaration newline-before-return
    // tslint:disable:no-parameter-reassignment prefer-switch
    //! moment.js locale configuration
    //! locale : Hindi [hi]
    //! author : Mayank Singhal : https://github.com/mayanksinghal
    var /** @type {?} */ symbolMap$1 = {
        1: '१',
        2: '२',
        3: '३',
        4: '४',
        5: '५',
        6: '६',
        7: '७',
        8: '८',
        9: '९',
        0: '०'
    }, /** @type {?} */ numberMap$1 = {
        '१': '1',
        '२': '2',
        '३': '3',
        '४': '4',
        '५': '5',
        '६': '6',
        '७': '7',
        '८': '8',
        '९': '9',
        '०': '0'
    };
    var /** @type {?} */ hiLocale = {
        abbr: 'hi',
        months: 'जनवरी_फ़रवरी_मार्च_अप्रैल_मई_जून_जुलाई_अगस्त_सितम्बर_अक्टूबर_नवम्बर_दिसम्बर'.split('_'),
        monthsShort: 'जन._फ़र._मार्च_अप्रै._मई_जून_जुल._अग._सित._अक्टू._नव._दिस.'.split('_'),
        monthsParseExact: true,
        weekdays: 'रविवार_सोमवार_मंगलवार_बुधवार_गुरूवार_शुक्रवार_शनिवार'.split('_'),
        weekdaysShort: 'रवि_सोम_मंगल_बुध_गुरू_शुक्र_शनि'.split('_'),
        weekdaysMin: 'र_सो_मं_बु_गु_शु_श'.split('_'),
        longDateFormat: {
            LT: 'A h:mm बजे',
            LTS: 'A h:mm:ss बजे',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY, A h:mm बजे',
            LLLL: 'dddd, D MMMM YYYY, A h:mm बजे'
        },
        calendar: {
            sameDay: '[आज] LT',
            nextDay: '[कल] LT',
            nextWeek: 'dddd, LT',
            lastDay: '[कल] LT',
            lastWeek: '[पिछले] dddd, LT',
            sameElse: 'L'
        },
        relativeTime: {
            future: '%s में',
            past: '%s पहले',
            s: 'कुछ ही क्षण',
            ss: '%d सेकंड',
            m: 'एक मिनट',
            mm: '%d मिनट',
            h: 'एक घंटा',
            hh: '%d घंटे',
            d: 'एक दिन',
            dd: '%d दिन',
            M: 'एक महीने',
            MM: '%d महीने',
            y: 'एक वर्ष',
            yy: '%d वर्ष'
        },
        preparse: /**
         * @param {?} str
         * @return {?}
         */ function (str) {
            return str.replace(/[१२३४५६७८९०]/g, function (match) {
                return numberMap$1[match];
            });
        },
        postformat: /**
         * @param {?} str
         * @return {?}
         */ function (str) {
            return str.replace(/\d/g, function (match) {
                return symbolMap$1[match];
            });
        },
        // Hindi notation for meridiems are quite fuzzy in practice. While there exists
        // a rigid notion of a 'Pahar' it is not used as rigidly in modern Hindi.
        meridiemParse: /रात|सुबह|दोपहर|शाम/,
        meridiemHour: /**
         * @param {?} hour
         * @param {?} meridiem
         * @return {?}
         */ function (hour, meridiem) {
            if (hour === 12) {
                hour = 0;
            }
            if (meridiem === 'रात') {
                return hour < 4 ? hour : hour + 12;
            }
            else if (meridiem === 'सुबह') {
                return hour;
            }
            else if (meridiem === 'दोपहर') {
                return hour >= 10 ? hour : hour + 12;
            }
            else if (meridiem === 'शाम') {
                return hour + 12;
            }
        },
        meridiem: /**
         * @param {?} hour
         * @param {?} minute
         * @param {?} isLower
         * @return {?}
         */ function (hour, minute, isLower) {
            if (hour < 4) {
                return 'रात';
            }
            else if (hour < 10) {
                return 'सुबह';
            }
            else if (hour < 17) {
                return 'दोपहर';
            }
            else if (hour < 20) {
                return 'शाम';
            }
            else {
                return 'रात';
            }
        },
        week: {
            dow: 0,
            // Sunday is the first day of the week.
            doy: 6 // The week that contains Jan 1st is the first week of the year.
        }
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    //! moment.js locale configuration
    //! locale : Hungarian [hu]
    //! author : Adam Brunner : https://github.com/adambrunner
    var /** @type {?} */ weekEndings = 'vasárnap hétfőn kedden szerdán csütörtökön pénteken szombaton'.split(' ');
    /**
     * @param {?} num
     * @param {?} withoutSuffix
     * @param {?} key
     * @param {?} isFuture
     * @return {?}
     */
    function translate$2(num, withoutSuffix, key, isFuture) {
        switch (key) {
            case 's':
                return (isFuture || withoutSuffix) ? 'néhány másodperc' : 'néhány másodperce';
            case 'ss':
                return num + ((isFuture || withoutSuffix) ? ' másodperc' : ' másodperce');
            case 'm':
                return 'egy' + (isFuture || withoutSuffix ? ' perc' : ' perce');
            case 'mm':
                return num + (isFuture || withoutSuffix ? ' perc' : ' perce');
            case 'h':
                return 'egy' + (isFuture || withoutSuffix ? ' óra' : ' órája');
            case 'hh':
                return num + (isFuture || withoutSuffix ? ' óra' : ' órája');
            case 'd':
                return 'egy' + (isFuture || withoutSuffix ? ' nap' : ' napja');
            case 'dd':
                return num + (isFuture || withoutSuffix ? ' nap' : ' napja');
            case 'M':
                return 'egy' + (isFuture || withoutSuffix ? ' hónap' : ' hónapja');
            case 'MM':
                return num + (isFuture || withoutSuffix ? ' hónap' : ' hónapja');
            case 'y':
                return 'egy' + (isFuture || withoutSuffix ? ' év' : ' éve');
            case 'yy':
                return num + (isFuture || withoutSuffix ? ' év' : ' éve');
        }
        return '';
    }
    /**
     * @param {?} date
     * @param {?} isFuture
     * @return {?}
     */
    function week(date, isFuture) {
        return (isFuture ? '' : '[múlt] ') + '[' + weekEndings[getDayOfWeek(date)] + '] LT[-kor]';
    }
    var /** @type {?} */ huLocale = {
        abbr: 'hu',
        months: 'január_február_március_április_május_június_július_augusztus_szeptember_október_november_december'.split('_'),
        monthsShort: 'jan_feb_márc_ápr_máj_jún_júl_aug_szept_okt_nov_dec'.split('_'),
        weekdays: 'vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat'.split('_'),
        weekdaysShort: 'vas_hét_kedd_sze_csüt_pén_szo'.split('_'),
        weekdaysMin: 'v_h_k_sze_cs_p_szo'.split('_'),
        longDateFormat: {
            LT: 'H:mm',
            LTS: 'H:mm:ss',
            L: 'YYYY.MM.DD.',
            LL: 'YYYY. MMMM D.',
            LLL: 'YYYY. MMMM D. H:mm',
            LLLL: 'YYYY. MMMM D., dddd H:mm'
        },
        meridiemParse: /de|du/i,
        isPM: /**
         * @param {?} input
         * @return {?}
         */ function (input) {
            return input.charAt(1).toLowerCase() === 'u';
        },
        meridiem: /**
         * @param {?} hours
         * @param {?} minutes
         * @param {?} isLower
         * @return {?}
         */ function (hours, minutes, isLower) {
            if (hours < 12) {
                return isLower === true ? 'de' : 'DE';
            }
            else {
                return isLower === true ? 'du' : 'DU';
            }
        },
        calendar: {
            sameDay: '[ma] LT[-kor]',
            nextDay: '[holnap] LT[-kor]',
            nextWeek: /**
             * @param {?} date
             * @return {?}
             */ function (date) {
                return week(date, true);
            },
            lastDay: '[tegnap] LT[-kor]',
            lastWeek: /**
             * @param {?} date
             * @return {?}
             */ function (date) {
                return week(date, false);
            },
            sameElse: 'L'
        },
        relativeTime: {
            future: '%s múlva',
            past: '%s',
            s: translate$2,
            ss: translate$2,
            m: translate$2,
            mm: translate$2,
            h: translate$2,
            hh: translate$2,
            d: translate$2,
            dd: translate$2,
            M: translate$2,
            MM: translate$2,
            y: translate$2,
            yy: translate$2
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: {
            dow: 1,
            // Monday is the first day of the week.
            doy: 4 // The week that contains Jan 4th is the first week of the year.
        }
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    // tslint:disable:comment-format binary-expression-operand-order max-line-length
    // tslint:disable:no-bitwise prefer-template cyclomatic-complexity
    // tslint:disable:no-shadowed-variable switch-default prefer-const
    // tslint:disable:one-variable-per-declaration newline-before-return
    // tslint:disable:no-parameter-reassignment prefer-switch
    //! moment.js locale configuration
    //! locale : Indonesia [id]
    //! author : Romy Kusuma : https://github.com/rkusuma
    //! reference: https://github.com/moment/moment/blob/develop/locale/id.js
    var /** @type {?} */ idLocale = {
        abbr: 'id',
        months: 'Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember'.split('_'),
        monthsShort: 'Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nov_Des'.split('_'),
        weekdays: 'Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu'.split('_'),
        weekdaysShort: 'Min_Sen_Sel_Rab_Kam_Jum_Sab'.split('_'),
        weekdaysMin: 'Mg_Sn_Sl_Rb_Km_Jm_Sb'.split('_'),
        longDateFormat: {
            LT: 'HH.mm',
            LTS: 'HH.mm.ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY [pukul] HH.mm',
            LLLL: 'dddd, D MMMM YYYY [pukul] HH.mm'
        },
        meridiemParse: /pagi|siang|sore|malam/,
        meridiemHour: /**
         * @param {?} hour
         * @param {?} meridiem
         * @return {?}
         */ function (hour, meridiem) {
            if (hour === 12) {
                hour = 0;
            }
            if (meridiem === 'pagi') {
                return hour;
            }
            else if (meridiem === 'siang') {
                return hour >= 11 ? hour : hour + 12;
            }
            else if (meridiem === 'sore' || meridiem === 'malam') {
                return hour + 12;
            }
        },
        meridiem: /**
         * @param {?} hours
         * @param {?} minutes
         * @param {?} isLower
         * @return {?}
         */ function (hours, minutes, isLower) {
            if (hours < 11) {
                return 'pagi';
            }
            else if (hours < 15) {
                return 'siang';
            }
            else if (hours < 19) {
                return 'sore';
            }
            else {
                return 'malam';
            }
        },
        calendar: {
            sameDay: '[Hari ini pukul] LT',
            nextDay: '[Besok pukul] LT',
            nextWeek: 'dddd [pukul] LT',
            lastDay: '[Kemarin pukul] LT',
            lastWeek: 'dddd [lalu pukul] LT',
            sameElse: 'L'
        },
        relativeTime: {
            future: 'dalam %s',
            past: '%s yang lalu',
            s: 'beberapa detik',
            ss: '%d detik',
            m: 'semenit',
            mm: '%d menit',
            h: 'sejam',
            hh: '%d jam',
            d: 'sehari',
            dd: '%d hari',
            M: 'sebulan',
            MM: '%d bulan',
            y: 'setahun',
            yy: '%d tahun'
        },
        week: {
            dow: 1,
            // Monday is the first day of the week.
            doy: 7 // The week that contains Jan 1st is the first week of the year.
        }
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    //! moment.js locale configuration
    //! locale : Italian [it]
    //! author : Lorenzo : https://github.com/aliem
    //! author: Mattia Larentis: https://github.com/nostalgiaz
    var /** @type {?} */ itLocale = {
        abbr: 'it',
        months: 'gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre'.split('_'),
        monthsShort: 'gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic'.split('_'),
        weekdays: 'domenica_lunedì_martedì_mercoledì_giovedì_venerdì_sabato'.split('_'),
        weekdaysShort: 'dom_lun_mar_mer_gio_ven_sab'.split('_'),
        weekdaysMin: 'do_lu_ma_me_gi_ve_sa'.split('_'),
        longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd D MMMM YYYY HH:mm'
        },
        calendar: {
            sameDay: '[Oggi alle] LT',
            nextDay: '[Domani alle] LT',
            nextWeek: 'dddd [alle] LT',
            lastDay: '[Ieri alle] LT',
            lastWeek: /**
             * @param {?} date
             * @return {?}
             */ function (date) {
                switch (getDayOfWeek(date)) {
                    case 0:
                        return '[la scorsa] dddd [alle] LT';
                    default:
                        return '[lo scorso] dddd [alle] LT';
                }
            },
            sameElse: 'L'
        },
        relativeTime: {
            future: /**
             * @param {?} num
             * @return {?}
             */ function (num) {
                return ((/^[0-9].+$/).test(num.toString(10)) ? 'tra' : 'in') + ' ' + num;
            },
            past: '%s fa',
            s: 'alcuni secondi',
            ss: '%d secondi',
            m: 'un minuto',
            mm: '%d minuti',
            h: 'un\'ora',
            hh: '%d ore',
            d: 'un giorno',
            dd: '%d giorni',
            M: 'un mese',
            MM: '%d mesi',
            y: 'un anno',
            yy: '%d anni'
        },
        dayOfMonthOrdinalParse: /\d{1,2}º/,
        ordinal: '%dº',
        week: {
            dow: 1,
            // Monday is the first day of the week.
            doy: 4 // The week that contains Jan 4th is the first week of the year.
        }
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    // tslint:disable:comment-format binary-expression-operand-order max-line-length
    // tslint:disable:no-bitwise prefer-template cyclomatic-complexity
    // tslint:disable:no-shadowed-variable switch-default prefer-const
    // tslint:disable:one-variable-per-declaration newline-before-return
    //! moment.js locale configuration
    //! locale : Japanese [ja]
    //! author : LI Long : https://github.com/baryon
    var /** @type {?} */ jaLocale = {
        abbr: 'ja',
        months: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
        monthsShort: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
        weekdays: '日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日'.split('_'),
        weekdaysShort: '日_月_火_水_木_金_土'.split('_'),
        weekdaysMin: '日_月_火_水_木_金_土'.split('_'),
        longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'YYYY/MM/DD',
            LL: 'YYYY年M月D日',
            LLL: 'YYYY年M月D日 HH:mm',
            LLLL: 'YYYY年M月D日 HH:mm dddd',
            l: 'YYYY/MM/DD',
            ll: 'YYYY年M月D日',
            lll: 'YYYY年M月D日 HH:mm',
            llll: 'YYYY年M月D日 HH:mm dddd'
        },
        meridiemParse: /午前|午後/i,
        isPM: /**
         * @param {?} input
         * @return {?}
         */ function (input) {
            return input === '午後';
        },
        meridiem: /**
         * @param {?} hour
         * @param {?} minute
         * @param {?} isLower
         * @return {?}
         */ function (hour, minute, isLower) {
            if (hour < 12) {
                return '午前';
            }
            else {
                return '午後';
            }
        },
        calendar: {
            sameDay: '[今日] LT',
            nextDay: '[明日] LT',
            nextWeek: '[来週]dddd LT',
            lastDay: '[昨日] LT',
            lastWeek: '[前週]dddd LT',
            sameElse: 'L'
        },
        dayOfMonthOrdinalParse: /\d{1,2}日/,
        ordinal: /**
         * @param {?} num
         * @param {?} period
         * @return {?}
         */ function (num, period) {
            switch (period) {
                case 'd':
                case 'D':
                case 'DDD':
                    return num + '日';
                default:
                    return num.toString(10);
            }
        },
        relativeTime: {
            future: '%s後',
            past: '%s前',
            s: '数秒',
            ss: '%d秒',
            m: '1分',
            mm: '%d分',
            h: '1時間',
            hh: '%d時間',
            d: '1日',
            dd: '%d日',
            M: '1ヶ月',
            MM: '%dヶ月',
            y: '1年',
            yy: '%d年'
        }
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    // tslint:disable:comment-format binary-expression-operand-order max-line-length
    // tslint:disable:no-bitwise prefer-template cyclomatic-complexity
    // tslint:disable:no-shadowed-variable switch-default prefer-const
    // tslint:disable:one-variable-per-declaration newline-before-return
    // tslint:disable:object-literal-shorthand
    //! moment.js locale configuration
    //! locale : Korean [ko]
    //! author : Kyungwook, Park : https://github.com/kyungw00k
    //! author : Jeeeyul Lee <jeeeyul@gmail.com>
    var /** @type {?} */ koLocale = {
        abbr: 'ko',
        months: '1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월'.split('_'),
        monthsShort: '1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월'.split('_'),
        weekdays: '일요일_월요일_화요일_수요일_목요일_금요일_토요일'.split('_'),
        weekdaysShort: '일_월_화_수_목_금_토'.split('_'),
        weekdaysMin: '일_월_화_수_목_금_토'.split('_'),
        longDateFormat: {
            LT: 'A h:mm',
            LTS: 'A h:mm:ss',
            L: 'YYYY.MM.DD',
            LL: 'YYYY년 MMMM D일',
            LLL: 'YYYY년 MMMM D일 A h:mm',
            LLLL: 'YYYY년 MMMM D일 dddd A h:mm',
            l: 'YYYY.MM.DD',
            ll: 'YYYY년 MMMM D일',
            lll: 'YYYY년 MMMM D일 A h:mm',
            llll: 'YYYY년 MMMM D일 dddd A h:mm'
        },
        calendar: {
            sameDay: '오늘 LT',
            nextDay: '내일 LT',
            nextWeek: 'dddd LT',
            lastDay: '어제 LT',
            lastWeek: '지난주 dddd LT',
            sameElse: 'L'
        },
        relativeTime: {
            future: '%s 후',
            past: '%s 전',
            s: '몇 초',
            ss: '%d초',
            m: '1분',
            mm: '%d분',
            h: '한 시간',
            hh: '%d시간',
            d: '하루',
            dd: '%d일',
            M: '한 달',
            MM: '%d달',
            y: '일 년',
            yy: '%d년'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(일|월|주)/,
        ordinal: function (num, period) {
            switch (period) {
                case 'd':
                case 'D':
                case 'DDD':
                    return num + '일';
                case 'M':
                    return num + '월';
                case 'w':
                case 'W':
                    return num + '주';
                default:
                    return num.toString(10);
            }
        },
        meridiemParse: /오전|오후/,
        isPM: function (token) {
            return token === '오후';
        },
        meridiem: function (hour, minute, isUpper) {
            return hour < 12 ? '오전' : '오후';
        }
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    // tslint:disable:comment-format binary-expression-operand-order max-line-length
    // tslint:disable:no-bitwise prefer-template cyclomatic-complexity
    // tslint:disable:no-shadowed-variable switch-default prefer-const
    // tslint:disable:one-variable-per-declaration newline-before-return
    //! moment.js locale configuration
    //! locale : Lithuanian [lt]
    //! author : Stanislavas Guk : https://github.com/ixoster
    var /** @type {?} */ units = {
        ss: 'sekundė_sekundžių_sekundes',
        m: 'minutė_minutės_minutę',
        mm: 'minutės_minučių_minutes',
        h: 'valanda_valandos_valandą',
        hh: 'valandos_valandų_valandas',
        d: 'diena_dienos_dieną',
        dd: 'dienos_dienų_dienas',
        M: 'mėnuo_mėnesio_mėnesį',
        MM: 'mėnesiai_mėnesių_mėnesius',
        y: 'metai_metų_metus',
        yy: 'metai_metų_metus'
    };
    /**
     * @param {?} num
     * @param {?} withoutSuffix
     * @param {?} key
     * @param {?} isFuture
     * @return {?}
     */
    function translateSeconds(num, withoutSuffix, key, isFuture) {
        if (withoutSuffix) {
            return 'kelios sekundės';
        }
        else {
            return isFuture ? 'kelių sekundžių' : 'kelias sekundes';
        }
    }
    /**
     * @param {?} num
     * @param {?} withoutSuffix
     * @param {?} key
     * @param {?} isFuture
     * @return {?}
     */
    function translateSingular(num, withoutSuffix, key, isFuture) {
        return withoutSuffix ? forms(key)[0] : (isFuture ? forms(key)[1] : forms(key)[2]);
    }
    /**
     * @param {?} num
     * @return {?}
     */
    function special(num) {
        return num % 10 === 0 || (num > 10 && num < 20);
    }
    /**
     * @param {?} key
     * @return {?}
     */
    function forms(key) {
        return units[key].split('_');
    }
    /**
     * @param {?} num
     * @param {?} withoutSuffix
     * @param {?} key
     * @param {?} isFuture
     * @return {?}
     */
    function translate$3(num, withoutSuffix, key, isFuture) {
        var /** @type {?} */ result = num + ' ';
        if (num === 1) {
            return result + translateSingular(num, withoutSuffix, key[0], isFuture);
        }
        else if (withoutSuffix) {
            return result + (special(num) ? forms(key)[1] : forms(key)[0]);
        }
        else {
            if (isFuture) {
                return result + forms(key)[1];
            }
            else {
                return result + (special(num) ? forms(key)[1] : forms(key)[2]);
            }
        }
    }
    var /** @type {?} */ ltLocale = {
        abbr: 'lt',
        months: {
            format: 'sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio'.split('_'),
            standalone: 'sausis_vasaris_kovas_balandis_gegužė_birželis_liepa_rugpjūtis_rugsėjis_spalis_lapkritis_gruodis'.split('_'),
            isFormat: /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/
        },
        monthsShort: 'sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd'.split('_'),
        weekdays: {
            format: 'sekmadienį_pirmadienį_antradienį_trečiadienį_ketvirtadienį_penktadienį_šeštadienį'.split('_'),
            standalone: 'sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis'.split('_'),
            isFormat: /dddd HH:mm/
        },
        weekdaysShort: 'Sek_Pir_Ant_Tre_Ket_Pen_Šeš'.split('_'),
        weekdaysMin: 'S_P_A_T_K_Pn_Š'.split('_'),
        weekdaysParseExact: true,
        longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'YYYY-MM-DD',
            LL: 'YYYY [m.] MMMM D [d.]',
            LLL: 'YYYY [m.] MMMM D [d.], HH:mm [val.]',
            LLLL: 'YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]',
            l: 'YYYY-MM-DD',
            ll: 'YYYY [m.] MMMM D [d.]',
            lll: 'YYYY [m.] MMMM D [d.], HH:mm [val.]',
            llll: 'YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]'
        },
        calendar: {
            sameDay: '[Šiandien] LT',
            nextDay: '[Rytoj] LT',
            nextWeek: 'dddd LT',
            lastDay: '[Vakar] LT',
            lastWeek: '[Praėjusį] dddd LT',
            sameElse: 'L'
        },
        relativeTime: {
            future: 'po %s',
            past: 'prieš %s',
            s: translateSeconds,
            ss: translate$3,
            m: translateSingular,
            mm: translate$3,
            h: translateSingular,
            hh: translate$3,
            d: translateSingular,
            dd: translate$3,
            M: translateSingular,
            MM: translate$3,
            y: translateSingular,
            yy: translate$3
        },
        dayOfMonthOrdinalParse: /\d{1,2}-oji/,
        ordinal: /**
         * @param {?} num
         * @return {?}
         */ function (num) {
            return num + '-oji';
        },
        week: {
            dow: 1,
            // Monday is the first day of the week.
            doy: 4 // The week that contains Jan 4th is the first week of the year.
        }
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    // tslint:disable:comment-format binary-expression-operand-order max-line-length
    // tslint:disable:no-bitwise prefer-template cyclomatic-complexity
    // tslint:disable:no-shadowed-variable switch-default prefer-const
    // tslint:disable:one-variable-per-declaration newline-before-return
    // tslint:disable:object-literal-shorthand
    /**
     * @param {?} num
     * @param {?} withoutSuffix
     * @param {?} key
     * @param {?} isFuture
     * @return {?}
     */
    function translate$4(num, withoutSuffix, key, isFuture) {
        switch (key) {
            case 's':
                return withoutSuffix ? 'хэдхэн секунд' : 'хэдхэн секундын';
            case 'ss':
                return num + (withoutSuffix ? ' секунд' : ' секундын');
            case 'm':
            case 'mm':
                return num + (withoutSuffix ? ' минут' : ' минутын');
            case 'h':
            case 'hh':
                return num + (withoutSuffix ? ' цаг' : ' цагийн');
            case 'd':
            case 'dd':
                return num + (withoutSuffix ? ' өдөр' : ' өдрийн');
            case 'M':
            case 'MM':
                return num + (withoutSuffix ? ' сар' : ' сарын');
            case 'y':
            case 'yy':
                return num + (withoutSuffix ? ' жил' : ' жилийн');
            default:
                return num.toString(10);
        }
    }
    var /** @type {?} */ mnLocale = {
        abbr: 'mn',
        months: 'Нэгдүгээр сар_Хоёрдугаар сар_Гуравдугаар сар_Дөрөвдүгээр сар_Тавдугаар сар_Зургадугаар сар_Долдугаар сар_Наймдугаар сар_Есдүгээр сар_Аравдугаар сар_Арван нэгдүгээр сар_Арван хоёрдугаар сар'.split('_'),
        monthsShort: '1 сар_2 сар_3 сар_4 сар_5 сар_6 сар_7 сар_8 сар_9 сар_10 сар_11 сар_12 сар'.split('_'),
        monthsParseExact: true,
        weekdays: 'Ням_Даваа_Мягмар_Лхагва_Пүрэв_Баасан_Бямба'.split('_'),
        weekdaysShort: 'Ням_Дав_Мяг_Лха_Пүр_Баа_Бям'.split('_'),
        weekdaysMin: 'Ня_Да_Мя_Лх_Пү_Ба_Бя'.split('_'),
        weekdaysParseExact: true,
        longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'YYYY-MM-DD',
            LL: 'YYYY оны MMMMын D',
            LLL: 'YYYY оны MMMMын D HH:mm',
            LLLL: 'dddd, YYYY оны MMMMын D HH:mm'
        },
        meridiemParse: /ҮӨ|ҮХ/i,
        isPM: function (input) {
            return input === 'ҮХ';
        },
        meridiem: function (hour, minute, isLower) {
            if (hour < 12) {
                return 'ҮӨ';
            }
            else {
                return 'ҮХ';
            }
        },
        calendar: {
            sameDay: '[Өнөөдөр] LT',
            nextDay: '[Маргааш] LT',
            nextWeek: '[Ирэх] dddd LT',
            lastDay: '[Өчигдөр] LT',
            lastWeek: '[Өнгөрсөн] dddd LT',
            sameElse: 'L'
        },
        relativeTime: {
            future: '%s дараа',
            past: '%s өмнө',
            s: translate$4,
            ss: translate$4,
            m: translate$4,
            mm: translate$4,
            h: translate$4,
            hh: translate$4,
            d: translate$4,
            dd: translate$4,
            M: translate$4,
            MM: translate$4,
            y: translate$4,
            yy: translate$4
        },
        dayOfMonthOrdinalParse: /\d{1,2} өдөр/,
        ordinal: function (num, period) {
            switch (period) {
                case 'd':
                case 'D':
                case 'DDD':
                    return num + ' өдөр';
                default:
                    return num.toString(10);
            }
        }
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    //! moment.js locale configuration
    //! locale : Norwegian Bokmål [nb]
    //! authors : Espen Hovlandsdal : https://github.com/rexxars
    //!           Sigurd Gartmann : https://github.com/sigurdga
    var /** @type {?} */ nbLocale = {
        abbr: 'nb',
        months: 'januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember'.split('_'),
        monthsShort: 'jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.'.split('_'),
        monthsParseExact: true,
        weekdays: 'søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag'.split('_'),
        weekdaysShort: 'sø._ma._ti._on._to._fr._lø.'.split('_'),
        weekdaysMin: 'sø_ma_ti_on_to_fr_lø'.split('_'),
        weekdaysParseExact: true,
        longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD.MM.YYYY',
            LL: 'D. MMMM YYYY',
            LLL: 'D. MMMM YYYY [kl.] HH:mm',
            LLLL: 'dddd D. MMMM YYYY [kl.] HH:mm'
        },
        calendar: {
            sameDay: '[i dag kl.] LT',
            nextDay: '[i morgen kl.] LT',
            nextWeek: 'dddd [kl.] LT',
            lastDay: '[i går kl.] LT',
            lastWeek: '[forrige] dddd [kl.] LT',
            sameElse: 'L'
        },
        relativeTime: {
            future: 'om %s',
            past: '%s siden',
            s: 'noen sekunder',
            ss: '%d sekunder',
            m: 'ett minutt',
            mm: '%d minutter',
            h: 'en time',
            hh: '%d timer',
            d: 'en dag',
            dd: '%d dager',
            M: 'en måned',
            MM: '%d måneder',
            y: 'ett år',
            yy: '%d år'
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: {
            dow: 1,
            // Monday is the first day of the week.
            doy: 4 // The week that contains Jan 4th is the first week of the year.
        }
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    //! moment.js locale configuration
    //! locale : Dutch (Belgium) [nl-be]
    //! author : Joris Röling : https://github.com/jorisroling
    //! author : Jacob Middag : https://github.com/middagj
    var /** @type {?} */ monthsShortWithDots = 'jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.'.split('_');
    var /** @type {?} */ monthsShortWithoutDots = 'jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec'.split('_');
    var /** @type {?} */ monthsParse$4 = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i];
    var /** @type {?} */ monthsRegex$4 = /^(januari|februari|maart|april|mei|april|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
    var /** @type {?} */ nlBeLocale = {
        abbr: 'nl-be',
        months: 'januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december'.split('_'),
        monthsShort: /**
         * @param {?} date
         * @param {?} format
         * @param {?=} isUTC
         * @return {?}
         */ function (date, format, isUTC) {
            if (!date) {
                return monthsShortWithDots;
            }
            else if (/-MMM-/.test(format)) {
                return monthsShortWithoutDots[getMonth(date, isUTC)];
            }
            else {
                return monthsShortWithDots[getMonth(date, isUTC)];
            }
        },
        monthsRegex: monthsRegex$4,
        monthsShortRegex: monthsRegex$4,
        monthsStrictRegex: /^(januari|februari|maart|mei|ju[nl]i|april|augustus|september|oktober|november|december)/i,
        monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
        monthsParse: monthsParse$4,
        longMonthsParse: monthsParse$4,
        shortMonthsParse: monthsParse$4,
        weekdays: 'zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag'.split('_'),
        weekdaysShort: 'zo._ma._di._wo._do._vr._za.'.split('_'),
        weekdaysMin: 'zo_ma_di_wo_do_vr_za'.split('_'),
        weekdaysParseExact: true,
        longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd D MMMM YYYY HH:mm'
        },
        calendar: {
            sameDay: '[vandaag om] LT',
            nextDay: '[morgen om] LT',
            nextWeek: 'dddd [om] LT',
            lastDay: '[gisteren om] LT',
            lastWeek: '[afgelopen] dddd [om] LT',
            sameElse: 'L'
        },
        relativeTime: {
            future: 'over %s',
            past: '%s geleden',
            s: 'een paar seconden',
            ss: '%d seconden',
            m: 'één minuut',
            mm: '%d minuten',
            h: 'één uur',
            hh: '%d uur',
            d: 'één dag',
            dd: '%d dagen',
            M: 'één maand',
            MM: '%d maanden',
            y: 'één jaar',
            yy: '%d jaar'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
        ordinal: /**
         * @param {?} _num
         * @return {?}
         */ function (_num) {
            var /** @type {?} */ num = Number(_num);
            return num + ((num === 1 || num === 8 || num >= 20) ? 'ste' : 'de');
        },
        week: {
            dow: 1,
            // Monday is the first day of the week.
            doy: 4 // The week that contains Jan 4th is the first week of the year.
        }
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    //! moment.js locale configuration
    //! locale : Dutch [nl]
    //! author : Joris Röling : https://github.com/jorisroling
    //! author : Jacob Middag : https://github.com/middagj
    var /** @type {?} */ monthsShortWithDots$1 = 'jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.'.split('_'), /** @type {?} */ monthsShortWithoutDots$1 = 'jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec'.split('_');
    var /** @type {?} */ monthsParse$5 = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i];
    var /** @type {?} */ monthsRegex$5 = /^(januari|februari|maart|april|mei|april|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
    var /** @type {?} */ nlLocale = {
        abbr: 'nl',
        months: 'januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december'.split('_'),
        monthsShort: /**
         * @param {?} date
         * @param {?} format
         * @param {?=} isUTC
         * @return {?}
         */ function (date, format, isUTC) {
            if (!date) {
                return monthsShortWithDots$1;
            }
            else if (/-MMM-/.test(format)) {
                return monthsShortWithoutDots$1[getMonth(date, isUTC)];
            }
            else {
                return monthsShortWithDots$1[getMonth(date, isUTC)];
            }
        },
        monthsRegex: monthsRegex$5,
        monthsShortRegex: monthsRegex$5,
        monthsStrictRegex: /^(januari|februari|maart|mei|ju[nl]i|april|augustus|september|oktober|november|december)/i,
        monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
        monthsParse: monthsParse$5,
        longMonthsParse: monthsParse$5,
        shortMonthsParse: monthsParse$5,
        weekdays: 'zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag'.split('_'),
        weekdaysShort: 'zo._ma._di._wo._do._vr._za.'.split('_'),
        weekdaysMin: 'zo_ma_di_wo_do_vr_za'.split('_'),
        weekdaysParseExact: true,
        longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD-MM-YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd D MMMM YYYY HH:mm'
        },
        calendar: {
            sameDay: '[vandaag om] LT',
            nextDay: '[morgen om] LT',
            nextWeek: 'dddd [om] LT',
            lastDay: '[gisteren om] LT',
            lastWeek: '[afgelopen] dddd [om] LT',
            sameElse: 'L'
        },
        relativeTime: {
            future: 'over %s',
            past: '%s geleden',
            s: 'een paar seconden',
            ss: '%d seconden',
            m: 'één minuut',
            mm: '%d minuten',
            h: 'één uur',
            hh: '%d uur',
            d: 'één dag',
            dd: '%d dagen',
            M: 'één maand',
            MM: '%d maanden',
            y: 'één jaar',
            yy: '%d jaar'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
        ordinal: /**
         * @param {?} _num
         * @return {?}
         */ function (_num) {
            var /** @type {?} */ num = Number(_num);
            return num + ((num === 1 || num === 8 || num >= 20) ? 'ste' : 'de');
        },
        week: {
            dow: 1,
            // Monday is the first day of the week.
            doy: 4 // The week that contains Jan 4th is the first week of the year.
        }
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    //! moment.js locale configuration
    //! locale : Polish [pl]
    //! author : Rafal Hirsz : https://github.com/evoL
    var /** @type {?} */ monthsNominative = 'styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień'.split('_');
    var /** @type {?} */ monthsSubjective = 'stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia'.split('_');
    /**
     * @param {?} num
     * @return {?}
     */
    function plural$1(num) {
        return (num % 10 < 5) && (num % 10 > 1) && ((~~(num / 10) % 10) !== 1);
    }
    /**
     * @param {?} num
     * @param {?} withoutSuffix
     * @param {?} key
     * @return {?}
     */
    function translate$5(num, withoutSuffix, key) {
        var /** @type {?} */ result = num + ' ';
        switch (key) {
            case 'ss':
                return result + (plural$1(num) ? 'sekundy' : 'sekund');
            case 'm':
                return withoutSuffix ? 'minuta' : 'minutę';
            case 'mm':
                return result + (plural$1(num) ? 'minuty' : 'minut');
            case 'h':
                return withoutSuffix ? 'godzina' : 'godzinę';
            case 'hh':
                return result + (plural$1(num) ? 'godziny' : 'godzin');
            case 'MM':
                return result + (plural$1(num) ? 'miesiące' : 'miesięcy');
            case 'yy':
                return result + (plural$1(num) ? 'lata' : 'lat');
        }
    }
    var /** @type {?} */ plLocale = {
        abbr: 'pl',
        months: /**
         * @param {?} date
         * @param {?} format
         * @param {?=} isUTC
         * @return {?}
         */ function (date, format, isUTC) {
            if (!date) {
                return monthsNominative;
            }
            else if (format === '') {
                // Hack: if format empty we know this is used to generate
                // RegExp by moment. Give then back both valid forms of months
                // in RegExp ready format.
                return '(' + monthsSubjective[getMonth(date, isUTC)] + '|' + monthsNominative[getMonth(date, isUTC)] + ')';
            }
            else if (/D MMMM/.test(format)) {
                return monthsSubjective[getMonth(date, isUTC)];
            }
            else {
                return monthsNominative[getMonth(date, isUTC)];
            }
        },
        monthsShort: 'sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru'.split('_'),
        weekdays: 'niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota'.split('_'),
        weekdaysShort: 'ndz_pon_wt_śr_czw_pt_sob'.split('_'),
        weekdaysMin: 'Nd_Pn_Wt_Śr_Cz_Pt_So'.split('_'),
        longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD.MM.YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd, D MMMM YYYY HH:mm'
        },
        calendar: {
            sameDay: '[Dziś o] LT',
            nextDay: '[Jutro o] LT',
            nextWeek: /**
             * @param {?} date
             * @return {?}
             */ function (date) {
                switch (getDayOfWeek(date)) {
                    case 0:
                        return '[W niedzielę o] LT';
                    case 2:
                        return '[We wtorek o] LT';
                    case 3:
                        return '[W środę o] LT';
                    case 5:
                        return '[W piątek o] LT';
                    case 6:
                        return '[W sobotę o] LT';
                    default:
                        return '[W] dddd [o] LT';
                }
            },
            lastDay: '[Wczoraj o] LT',
            lastWeek: /**
             * @param {?} date
             * @return {?}
             */ function (date) {
                switch (getDayOfWeek(date)) {
                    case 0:
                        return '[W zeszłą niedzielę o] LT';
                    case 3:
                        return '[W zeszłą środę o] LT';
                    case 4:
                        return '[W zeszłą czwartek o] LT';
                    case 5:
                        return '[W zeszłą piątek o] LT';
                    case 6:
                        return '[W zeszłą sobotę o] LT';
                    default:
                        return '[W zeszły] dddd [o] LT';
                }
            },
            sameElse: 'L'
        },
        relativeTime: {
            future: 'za %s',
            past: '%s temu',
            s: 'kilka sekund',
            ss: translate$5,
            m: translate$5,
            mm: translate$5,
            h: translate$5,
            hh: translate$5,
            d: '1 dzień',
            dd: '%d dni',
            M: 'miesiąc',
            MM: translate$5,
            y: 'rok',
            yy: translate$5
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: {
            dow: 1,
            // Monday is the first day of the week.
            doy: 4 // The week that contains Jan 4th is the first week of the year.
        }
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    //! moment.js locale configuration
    //! locale : Portuguese (Brazil) [pt-br]
    //! author : Caio Ribeiro Pereira : https://github.com/caio-ribeiro-pereira
    var /** @type {?} */ ptBrLocale = {
        abbr: 'pt-br',
        months: 'Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro'.split('_'),
        monthsShort: 'Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez'.split('_'),
        weekdays: 'Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado'.split('_'),
        weekdaysShort: 'Dom_Seg_Ter_Qua_Qui_Sex_Sáb'.split('_'),
        weekdaysMin: 'Do_2ª_3ª_4ª_5ª_6ª_Sá'.split('_'),
        weekdaysParseExact: true,
        longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D [de] MMMM [de] YYYY',
            LLL: 'D [de] MMMM [de] YYYY [às] HH:mm',
            LLLL: 'dddd, D [de] MMMM [de] YYYY [às] HH:mm'
        },
        calendar: {
            sameDay: '[Hoje às] LT',
            nextDay: '[Amanhã às] LT',
            nextWeek: 'dddd [às] LT',
            lastDay: '[Ontem às] LT',
            lastWeek: /**
             * @param {?} date
             * @return {?}
             */ function (date) {
                return (getDayOfWeek(date) === 0 || getDayOfWeek(date) === 6) ?
                    '[Último] dddd [às] LT' : // Saturday + Sunday
                    '[Última] dddd [às] LT'; // Monday - Friday
            },
            sameElse: 'L'
        },
        relativeTime: {
            future: 'em %s',
            past: '%s atrás',
            s: 'poucos segundos',
            ss: '%d segundos',
            m: 'um minuto',
            mm: '%d minutos',
            h: 'uma hora',
            hh: '%d horas',
            d: 'um dia',
            dd: '%d dias',
            M: 'um mês',
            MM: '%d meses',
            y: 'um ano',
            yy: '%d anos'
        },
        dayOfMonthOrdinalParse: /\d{1,2}º/,
        ordinal: '%dº'
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @param {?} num
     * @param {?} withoutSuffix
     * @param {?} key
     * @return {?}
     */
    function relativeTimeWithPlural(num, withoutSuffix, key) {
        var /** @type {?} */ format = {
            ss: 'secunde',
            mm: 'minute',
            hh: 'ore',
            dd: 'zile',
            MM: 'luni',
            yy: 'ani'
        };
        var /** @type {?} */ separator = ' ';
        if (num % 100 >= 20 || (num >= 100 && num % 100 === 0)) {
            separator = ' de ';
        }
        return num + separator + format[key];
    }
    var /** @type {?} */ roLocale = {
        abbr: 'ro',
        months: 'ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie'.split('_'),
        monthsShort: 'ian._febr._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.'.split('_'),
        monthsParseExact: true,
        weekdays: 'duminică_luni_marți_miercuri_joi_vineri_sâmbătă'.split('_'),
        weekdaysShort: 'Dum_Lun_Mar_Mie_Joi_Vin_Sâm'.split('_'),
        weekdaysMin: 'Du_Lu_Ma_Mi_Jo_Vi_Sâ'.split('_'),
        longDateFormat: {
            LT: 'H:mm',
            LTS: 'H:mm:ss',
            L: 'DD.MM.YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY H:mm',
            LLLL: 'dddd, D MMMM YYYY H:mm'
        },
        calendar: {
            sameDay: '[azi la] LT',
            nextDay: '[mâine la] LT',
            nextWeek: 'dddd [la] LT',
            lastDay: '[ieri la] LT',
            lastWeek: '[fosta] dddd [la] LT',
            sameElse: 'L'
        },
        relativeTime: {
            future: 'peste %s',
            past: '%s în urmă',
            s: 'câteva secunde',
            ss: relativeTimeWithPlural,
            m: 'un minut',
            mm: relativeTimeWithPlural,
            h: 'o oră',
            hh: relativeTimeWithPlural,
            d: 'o zi',
            dd: relativeTimeWithPlural,
            M: 'o lună',
            MM: relativeTimeWithPlural,
            y: 'un an',
            yy: relativeTimeWithPlural
        },
        week: {
            dow: 1,
            // Monday is the first day of the week.
            doy: 7 // The week that contains Jan 1st is the first week of the year.
        }
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @param {?} word
     * @param {?} num
     * @return {?}
     */
    function plural$2(word, num) {
        var /** @type {?} */ forms = word.split('_');
        return num % 10 === 1 && num % 100 !== 11 ? forms[0] : (num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20) ? forms[1] : forms[2]);
    }
    /**
     * @param {?} num
     * @param {?} withoutSuffix
     * @param {?} key
     * @return {?}
     */
    function relativeTimeWithPlural$1(num, withoutSuffix, key) {
        var /** @type {?} */ format = {
            ss: withoutSuffix ? 'секунда_секунды_секунд' : 'секунду_секунды_секунд',
            mm: withoutSuffix ? 'минута_минуты_минут' : 'минуту_минуты_минут',
            hh: 'час_часа_часов',
            dd: 'день_дня_дней',
            MM: 'месяц_месяца_месяцев',
            yy: 'год_года_лет'
        };
        if (key === 'm') {
            return withoutSuffix ? 'минута' : 'минуту';
        }
        return num + ' ' + plural$2(format[key], +num);
    }
    var /** @type {?} */ monthsParse$6 = [/^янв/i, /^фев/i, /^мар/i, /^апр/i, /^ма[йя]/i, /^июн/i, /^июл/i, /^авг/i, /^сен/i, /^окт/i, /^ноя/i, /^дек/i];
    // http://new.gramota.ru/spravka/rules/139-prop : § 103
    // Сокращения месяцев: http://new.gramota.ru/spravka/buro/search-answer?s=242637
    // CLDR data:          http://www.unicode.org/cldr/charts/28/summary/ru.html#1753
    var /** @type {?} */ ruLocale = {
        abbr: 'ru',
        months: {
            format: 'января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря'.split('_'),
            standalone: 'январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь'.split('_')
        },
        monthsShort: {
            // по CLDR именно "июл." и "июн.", но какой смысл менять букву на точку ?
            format: 'янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.'.split('_'),
            standalone: 'янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.'.split('_')
        },
        weekdays: {
            standalone: 'воскресенье_понедельник_вторник_среда_четверг_пятница_суббота'.split('_'),
            format: 'воскресенье_понедельник_вторник_среду_четверг_пятницу_субботу'.split('_'),
            isFormat: /\[ ?[Вв] ?(?:прошлую|следующую|эту)? ?\] ?dddd/
        },
        weekdaysShort: 'вс_пн_вт_ср_чт_пт_сб'.split('_'),
        weekdaysMin: 'вс_пн_вт_ср_чт_пт_сб'.split('_'),
        monthsParse: monthsParse$6,
        longMonthsParse: monthsParse$6,
        shortMonthsParse: monthsParse$6,
        // полные названия с падежами, по три буквы, для некоторых, по 4 буквы, сокращения с точкой и без точки
        monthsRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
        // копия предыдущего
        monthsShortRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
        // полные названия с падежами
        monthsStrictRegex: /^(январ[яь]|феврал[яь]|марта?|апрел[яь]|ма[яй]|июн[яь]|июл[яь]|августа?|сентябр[яь]|октябр[яь]|ноябр[яь]|декабр[яь])/i,
        // Выражение, которое соотвествует только сокращённым формам
        monthsShortStrictRegex: /^(янв\.|февр?\.|мар[т.]|апр\.|ма[яй]|июн[ья.]|июл[ья.]|авг\.|сент?\.|окт\.|нояб?\.|дек\.)/i,
        longDateFormat: {
            LT: 'H:mm',
            LTS: 'H:mm:ss',
            L: 'DD.MM.YYYY',
            LL: 'D MMMM YYYY г.',
            LLL: 'D MMMM YYYY г., H:mm',
            LLLL: 'dddd, D MMMM YYYY г., H:mm'
        },
        calendar: {
            sameDay: '[Сегодня в] LT',
            nextDay: '[Завтра в] LT',
            lastDay: '[Вчера в] LT',
            nextWeek: /**
             * @param {?} date
             * @param {?} now
             * @return {?}
             */ function (date, now) {
                if (getWeek(now) !== getWeek(date)) {
                    switch (getDayOfWeek(date)) {
                        case 0:
                            return '[В следующее] dddd [в] LT';
                        case 1:
                        case 2:
                        case 4:
                            return '[В следующий] dddd [в] LT';
                        case 3:
                        case 5:
                        case 6:
                            return '[В следующую] dddd [в] LT';
                    }
                }
                else {
                    if (getDayOfWeek(date) === 2) {
                        return '[Во] dddd [в] LT';
                    }
                    else {
                        return '[В] dddd [в] LT';
                    }
                }
            },
            lastWeek: /**
             * @param {?} date
             * @param {?} now
             * @return {?}
             */ function (date, now) {
                if (getWeek(now) !== getWeek(date)) {
                    switch (getDayOfWeek(date)) {
                        case 0:
                            return '[В прошлое] dddd [в] LT';
                        case 1:
                        case 2:
                        case 4:
                            return '[В прошлый] dddd [в] LT';
                        case 3:
                        case 5:
                        case 6:
                            return '[В прошлую] dddd [в] LT';
                    }
                }
                else {
                    if (getDayOfWeek(date) === 2) {
                        return '[Во] dddd [в] LT';
                    }
                    else {
                        return '[В] dddd [в] LT';
                    }
                }
            },
            sameElse: 'L'
        },
        relativeTime: {
            future: 'через %s',
            past: '%s назад',
            s: 'несколько секунд',
            ss: relativeTimeWithPlural$1,
            m: relativeTimeWithPlural$1,
            mm: relativeTimeWithPlural$1,
            h: 'час',
            hh: relativeTimeWithPlural$1,
            d: 'день',
            dd: relativeTimeWithPlural$1,
            M: 'месяц',
            MM: relativeTimeWithPlural$1,
            y: 'год',
            yy: relativeTimeWithPlural$1
        },
        meridiemParse: /ночи|утра|дня|вечера/i,
        isPM: /**
         * @param {?} input
         * @return {?}
         */ function (input) {
            return /^(дня|вечера)$/.test(input);
        },
        meridiem: /**
         * @param {?} hour
         * @param {?} minute
         * @param {?} isLower
         * @return {?}
         */ function (hour, minute, isLower) {
            if (hour < 4) {
                return 'ночи';
            }
            else if (hour < 12) {
                return 'утра';
            }
            else if (hour < 17) {
                return 'дня';
            }
            else {
                return 'вечера';
            }
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(й|го|я)/,
        ordinal: /**
         * @param {?} _num
         * @param {?} period
         * @return {?}
         */ function (_num, period) {
            var /** @type {?} */ num = Number(_num);
            switch (period) {
                case 'M':
                case 'd':
                case 'DDD':
                    return num + '-й';
                case 'D':
                    return num + '-го';
                case 'w':
                case 'W':
                    return num + '-я';
                default:
                    return num.toString(10);
            }
        },
        week: {
            dow: 1,
            // Monday is the first day of the week.
            doy: 4 // The week that contains Jan 4th is the first week of the year.
        }
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    //! moment.js locale configuration
    //! locale : Slovak [sk]
    //! author : Jozef Pažin : https://github.com/atiris
    var /** @type {?} */ months$2 = 'január_február_marec_apríl_máj_jún_júl_august_september_október_november_december'.split('_');
    var /** @type {?} */ monthsShort$6 = 'jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec'.split('_');
    /**
     * @param {?} num
     * @return {?}
     */
    function plural$3(num) {
        return (num > 1) && (num < 5) && (~~(num / 10) !== 1);
    }
    /**
     * @param {?} num
     * @param {?} withoutSuffix
     * @param {?} key
     * @param {?} isFuture
     * @return {?}
     */
    function translate$6(num, withoutSuffix, key, isFuture) {
        var /** @type {?} */ result = num + ' ';
        switch (key) {
            case 's':
                // a few seconds / in a few seconds / a few seconds ago
                return (withoutSuffix || isFuture) ? 'pár sekúnd' : 'pár sekundami';
            case 'ss':
                // 9 seconds / in 9 seconds / 9 seconds ago
                if (withoutSuffix || isFuture) {
                    return result + (plural$3(num) ? 'sekundy' : 'sekúnd');
                }
                else {
                    return result + 'sekundami';
                }
            // break;
            case 'm':
                // a minute / in a minute / a minute ago
                return withoutSuffix ? 'minúta' : (isFuture ? 'minútu' : 'minútou');
            case 'mm':
                // 9 minutes / in 9 minutes / 9 minutes ago
                if (withoutSuffix || isFuture) {
                    return result + (plural$3(num) ? 'minúty' : 'minút');
                }
                else {
                    return result + 'minútami';
                }
            // break;
            case 'h':
                // an hour / in an hour / an hour ago
                return withoutSuffix ? 'hodina' : (isFuture ? 'hodinu' : 'hodinou');
            case 'hh':
                // 9 hours / in 9 hours / 9 hours ago
                if (withoutSuffix || isFuture) {
                    return result + (plural$3(num) ? 'hodiny' : 'hodín');
                }
                else {
                    return result + 'hodinami';
                }
            // break;
            case 'd':
                // a day / in a day / a day ago
                return (withoutSuffix || isFuture) ? 'deň' : 'dňom';
            case 'dd':
                // 9 days / in 9 days / 9 days ago
                if (withoutSuffix || isFuture) {
                    return result + (plural$3(num) ? 'dni' : 'dní');
                }
                else {
                    return result + 'dňami';
                }
            // break;
            case 'M':
                // a month / in a month / a month ago
                return (withoutSuffix || isFuture) ? 'mesiac' : 'mesiacom';
            case 'MM':
                // 9 months / in 9 months / 9 months ago
                if (withoutSuffix || isFuture) {
                    return result + (plural$3(num) ? 'mesiace' : 'mesiacov');
                }
                else {
                    return result + 'mesiacmi';
                }
            // break;
            case 'y':
                // a year / in a year / a year ago
                return (withoutSuffix || isFuture) ? 'rok' : 'rokom';
            case 'yy':
                // 9 years / in 9 years / 9 years ago
                if (withoutSuffix || isFuture) {
                    return result + (plural$3(num) ? 'roky' : 'rokov');
                }
                else {
                    return result + 'rokmi';
                }
        }
    }
    var /** @type {?} */ skLocale = {
        abbr: 'sk',
        months: months$2,
        monthsShort: monthsShort$6,
        weekdays: 'nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota'.split('_'),
        weekdaysShort: 'ne_po_ut_st_št_pi_so'.split('_'),
        weekdaysMin: 'ne_po_ut_st_št_pi_so'.split('_'),
        longDateFormat: {
            LT: 'H:mm',
            LTS: 'H:mm:ss',
            L: 'DD.MM.YYYY',
            LL: 'D. MMMM YYYY',
            LLL: 'D. MMMM YYYY H:mm',
            LLLL: 'dddd D. MMMM YYYY H:mm',
            l: 'D. M. YYYY'
        },
        calendar: {
            sameDay: '[dnes o] LT',
            nextDay: '[zajtra o] LT',
            nextWeek: /**
             * @param {?} date
             * @return {?}
             */ function (date) {
                switch (getDayOfWeek(date)) {
                    case 0:
                        return '[v nedeľu o] LT';
                    case 1:
                    case 2:
                        return '[v] dddd [o] LT';
                    case 3:
                        return '[v stredu o] LT';
                    case 4:
                        return '[vo štvrtok o] LT';
                    case 5:
                        return '[v piatok o] LT';
                    case 6:
                        return '[v sobotu o] LT';
                }
            },
            lastDay: '[včera o] LT',
            lastWeek: /**
             * @param {?} date
             * @return {?}
             */ function (date) {
                switch (getDayOfWeek(date)) {
                    case 0:
                        return '[minulú nedeľu o] LT';
                    case 1:
                    case 2:
                        return '[minulý] dddd [o] LT';
                    case 3:
                        return '[minulú stredu o] LT';
                    case 4:
                    case 5:
                        return '[minulý] dddd [o] LT';
                    case 6:
                        return '[minulú sobotu o] LT';
                }
            },
            sameElse: 'L'
        },
        relativeTime: {
            future: 'o %s',
            past: 'pred %s',
            s: translate$6,
            ss: translate$6,
            m: translate$6,
            mm: translate$6,
            h: translate$6,
            hh: translate$6,
            d: translate$6,
            dd: translate$6,
            M: translate$6,
            MM: translate$6,
            y: translate$6,
            yy: translate$6
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: {
            dow: 1,
            // Monday is the first day of the week.
            doy: 4 // The week that contains Jan 4th is the first week of the year.
        }
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @param {?} number
     * @param {?} withoutSuffix
     * @param {?} key
     * @param {?} isFuture
     * @return {?}
     */
    function processRelativeTime$1(number, withoutSuffix, key, isFuture) {
        var /** @type {?} */ result = number + ' ';
        switch (key) {
            case 's':
                return withoutSuffix || isFuture ? 'nekaj sekund' : 'nekaj sekundami';
            case 'ss':
                if (number === 1) {
                    result += withoutSuffix ? 'sekundo' : 'sekundi';
                }
                else if (number === 2) {
                    result += withoutSuffix || isFuture ? 'sekundi' : 'sekundah';
                }
                else if (number < 5) {
                    result += withoutSuffix || isFuture ? 'sekunde' : 'sekundah';
                }
                else {
                    result += withoutSuffix || isFuture ? 'sekund' : 'sekund';
                }
                return result;
            case 'm':
                return withoutSuffix ? 'ena minuta' : 'eno minuto';
            case 'mm':
                if (number === 1) {
                    result += withoutSuffix ? 'minuta' : 'minuto';
                }
                else if (number === 2) {
                    result += withoutSuffix || isFuture ? 'minuti' : 'minutama';
                }
                else if (number < 5) {
                    result += withoutSuffix || isFuture ? 'minute' : 'minutami';
                }
                else {
                    result += withoutSuffix || isFuture ? 'minut' : 'minutami';
                }
                return result;
            case 'h':
                return withoutSuffix ? 'ena ura' : 'eno uro';
            case 'hh':
                if (number === 1) {
                    result += withoutSuffix ? 'ura' : 'uro';
                }
                else if (number === 2) {
                    result += withoutSuffix || isFuture ? 'uri' : 'urama';
                }
                else if (number < 5) {
                    result += withoutSuffix || isFuture ? 'ure' : 'urami';
                }
                else {
                    result += withoutSuffix || isFuture ? 'ur' : 'urami';
                }
                return result;
            case 'd':
                return withoutSuffix || isFuture ? 'en dan' : 'enim dnem';
            case 'dd':
                if (number === 1) {
                    result += withoutSuffix || isFuture ? 'dan' : 'dnem';
                }
                else if (number === 2) {
                    result += withoutSuffix || isFuture ? 'dni' : 'dnevoma';
                }
                else {
                    result += withoutSuffix || isFuture ? 'dni' : 'dnevi';
                }
                return result;
            case 'M':
                return withoutSuffix || isFuture ? 'en mesec' : 'enim mesecem';
            case 'MM':
                if (number === 1) {
                    result += withoutSuffix || isFuture ? 'mesec' : 'mesecem';
                }
                else if (number === 2) {
                    result += withoutSuffix || isFuture ? 'meseca' : 'mesecema';
                }
                else if (number < 5) {
                    result += withoutSuffix || isFuture ? 'mesece' : 'meseci';
                }
                else {
                    result += withoutSuffix || isFuture ? 'mesecev' : 'meseci';
                }
                return result;
            case 'y':
                return withoutSuffix || isFuture ? 'eno leto' : 'enim letom';
            case 'yy':
                if (number === 1) {
                    result += withoutSuffix || isFuture ? 'leto' : 'letom';
                }
                else if (number === 2) {
                    result += withoutSuffix || isFuture ? 'leti' : 'letoma';
                }
                else if (number < 5) {
                    result += withoutSuffix || isFuture ? 'leta' : 'leti';
                }
                else {
                    result += withoutSuffix || isFuture ? 'let' : 'leti';
                }
                return result;
        }
    }
    var /** @type {?} */ slLocale = {
        abbr: 'sl',
        months: 'januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december'.split('_'),
        monthsShort: 'jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.'.split('_'),
        monthsParseExact: true,
        weekdays: 'nedelja_ponedeljek_torek_sreda_četrtek_petek_sobota'.split('_'),
        weekdaysShort: 'ned._pon._tor._sre._čet._pet._sob.'.split('_'),
        weekdaysMin: 'ne_po_to_sr_če_pe_so'.split('_'),
        weekdaysParseExact: true,
        longDateFormat: {
            LT: 'H:mm',
            LTS: 'H:mm:ss',
            L: 'DD.MM.YYYY',
            LL: 'D. MMMM YYYY',
            LLL: 'D. MMMM YYYY H:mm',
            LLLL: 'dddd, D. MMMM YYYY H:mm'
        },
        calendar: {
            sameDay: '[danes ob] LT',
            nextDay: '[jutri ob] LT',
            nextWeek: /**
             * @param {?} date
             * @return {?}
             */ function (date) {
                switch (getDayOfWeek(date)) {
                    case 0:
                        return '[v] [nedeljo] [ob] LT';
                    case 3:
                        return '[v] [sredo] [ob] LT';
                    case 6:
                        return '[v] [soboto] [ob] LT';
                    case 1:
                    case 2:
                    case 4:
                    case 5:
                        return '[v] dddd [ob] LT';
                }
            },
            lastDay: '[včeraj ob] LT',
            lastWeek: /**
             * @param {?} date
             * @return {?}
             */ function (date) {
                switch (getDayOfWeek(date)) {
                    case 0:
                        return '[prejšnjo] [nedeljo] [ob] LT';
                    case 3:
                        return '[prejšnjo] [sredo] [ob] LT';
                    case 6:
                        return '[prejšnjo] [soboto] [ob] LT';
                    case 1:
                    case 2:
                    case 4:
                    case 5:
                        return '[prejšnji] dddd [ob] LT';
                }
            },
            sameElse: 'L'
        },
        relativeTime: {
            future: 'čez %s',
            past: 'pred %s',
            s: processRelativeTime$1,
            ss: processRelativeTime$1,
            m: processRelativeTime$1,
            mm: processRelativeTime$1,
            h: processRelativeTime$1,
            hh: processRelativeTime$1,
            d: processRelativeTime$1,
            dd: processRelativeTime$1,
            M: processRelativeTime$1,
            MM: processRelativeTime$1,
            y: processRelativeTime$1,
            yy: processRelativeTime$1
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: {
            dow: 1,
            // Monday is the first day of the week.
            doy: 7 // The week that contains Jan 1st is the first week of the year.
        }
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    // tslint:disable:comment-format binary-expression-operand-order max-line-length
    // tslint:disable:no-bitwise prefer-template cyclomatic-complexity
    // tslint:disable:no-shadowed-variable switch-default prefer-const
    // tslint:disable:one-variable-per-declaration newline-before-return
    //! moment.js locale configuration
    //! locale : Swedish [sv]
    //! author : Jens Alm : https://github.com/ulmus
    var /** @type {?} */ svLocale = {
        abbr: 'sv',
        months: 'januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december'.split('_'),
        monthsShort: 'jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec'.split('_'),
        weekdays: 'söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag'.split('_'),
        weekdaysShort: 'sön_mån_tis_ons_tor_fre_lör'.split('_'),
        weekdaysMin: 'sö_må_ti_on_to_fr_lö'.split('_'),
        longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'YYYY-MM-DD',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY [kl.] HH:mm',
            LLLL: 'dddd D MMMM YYYY [kl.] HH:mm',
            lll: 'D MMM YYYY HH:mm',
            llll: 'ddd D MMM YYYY HH:mm'
        },
        calendar: {
            sameDay: '[Idag] LT',
            nextDay: '[Imorgon] LT',
            lastDay: '[Igår] LT',
            nextWeek: '[På] dddd LT',
            lastWeek: '[I] dddd[s] LT',
            sameElse: 'L'
        },
        relativeTime: {
            future: 'om %s',
            past: 'för %s sedan',
            s: 'några sekunder',
            ss: '%d sekunder',
            m: 'en minut',
            mm: '%d minuter',
            h: 'en timme',
            hh: '%d timmar',
            d: 'en dag',
            dd: '%d dagar',
            M: 'en månad',
            MM: '%d månader',
            y: 'ett år',
            yy: '%d år'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(e|a)/,
        ordinal: /**
         * @param {?} _num
         * @return {?}
         */ function (_num) {
            var /** @type {?} */ num = Number(_num);
            var /** @type {?} */ b = num % 10, /** @type {?} */ output = (~~(num % 100 / 10) === 1) ? 'e' :
                (b === 1) ? 'a' :
                    (b === 2) ? 'a' :
                        (b === 3) ? 'e' : 'e';
            return num + output;
        },
        week: {
            dow: 1,
            // Monday is the first day of the week.
            doy: 4 // The week that contains Jan 4th is the first week of the year.
        }
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    // tslint:disable:comment-format binary-expression-operand-order max-line-length
    // tslint:disable:no-bitwise prefer-template cyclomatic-complexity
    // tslint:disable:no-shadowed-variable switch-default prefer-const
    // tslint:disable:one-variable-per-declaration newline-before-return
    var /** @type {?} */ thLocale = {
        abbr: 'th',
        months: 'มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม'.split('_'),
        monthsShort: 'ม.ค._ก.พ._มี.ค._เม.ย._พ.ค._มิ.ย._ก.ค._ส.ค._ก.ย._ต.ค._พ.ย._ธ.ค.'.split('_'),
        monthsParseExact: true,
        weekdays: 'อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์'.split('_'),
        weekdaysShort: 'อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัส_ศุกร์_เสาร์'.split('_'),
        // yes, three characters difference
        weekdaysMin: 'อา._จ._อ._พ._พฤ._ศ._ส.'.split('_'),
        weekdaysParseExact: true,
        longDateFormat: {
            LT: 'H:mm',
            LTS: 'H:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY เวลา H:mm',
            LLLL: 'วันddddที่ D MMMM YYYY เวลา H:mm'
        },
        meridiemParse: /ก่อนเที่ยง|หลังเที่ยง/,
        isPM: /**
         * @param {?} input
         * @return {?}
         */ function (input) {
            return input === 'หลังเที่ยง';
        },
        meridiem: /**
         * @param {?} hour
         * @param {?} minute
         * @param {?} isLower
         * @return {?}
         */ function (hour, minute, isLower) {
            if (hour < 12) {
                return 'ก่อนเที่ยง';
            }
            else {
                return 'หลังเที่ยง';
            }
        },
        calendar: {
            sameDay: '[วันนี้ เวลา] LT',
            nextDay: '[พรุ่งนี้ เวลา] LT',
            nextWeek: 'dddd[หน้า เวลา] LT',
            lastDay: '[เมื่อวานนี้ เวลา] LT',
            lastWeek: '[วัน]dddd[ที่แล้ว เวลา] LT',
            sameElse: 'L'
        },
        relativeTime: {
            future: 'อีก %s',
            past: '%sที่แล้ว',
            s: 'ไม่กี่วินาที',
            ss: '%d วินาที',
            m: '1 นาที',
            mm: '%d นาที',
            h: '1 ชั่วโมง',
            hh: '%d ชั่วโมง',
            d: '1 วัน',
            dd: '%d วัน',
            M: '1 เดือน',
            MM: '%d เดือน',
            y: '1 ปี',
            yy: '%d ปี'
        }
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    // tslint:disable:comment-format binary-expression-operand-order max-line-length
    // tslint:disable:no-bitwise prefer-template cyclomatic-complexity
    // tslint:disable:no-shadowed-variable switch-default prefer-const
    // tslint:disable:one-variable-per-declaration newline-before-return
    //! moment.js locale configuration
    //! locale : Turkish [tr]
    //! authors : Erhan Gundogan : https://github.com/erhangundogan,
    //!           Burak Yiğit Kaya: https://github.com/BYK
    var /** @type {?} */ suffixes = {
        1: '\'inci',
        5: '\'inci',
        8: '\'inci',
        70: '\'inci',
        80: '\'inci',
        2: '\'nci',
        7: '\'nci',
        20: '\'nci',
        50: '\'nci',
        3: '\'üncü',
        4: '\'üncü',
        100: '\'üncü',
        6: '\'ncı',
        9: '\'uncu',
        10: '\'uncu',
        30: '\'uncu',
        60: '\'ıncı',
        90: '\'ıncı'
    };
    var /** @type {?} */ trLocale = {
        abbr: 'tr',
        months: 'Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık'.split('_'),
        monthsShort: 'Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara'.split('_'),
        weekdays: 'Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi'.split('_'),
        weekdaysShort: 'Paz_Pts_Sal_Çar_Per_Cum_Cts'.split('_'),
        weekdaysMin: 'Pz_Pt_Sa_Ça_Pe_Cu_Ct'.split('_'),
        longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD.MM.YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd, D MMMM YYYY HH:mm'
        },
        calendar: {
            sameDay: '[bugün saat] LT',
            nextDay: '[yarın saat] LT',
            nextWeek: '[gelecek] dddd [saat] LT',
            lastDay: '[dün] LT',
            lastWeek: '[geçen] dddd [saat] LT',
            sameElse: 'L'
        },
        relativeTime: {
            future: '%s sonra',
            past: '%s önce',
            s: 'birkaç saniye',
            ss: '%d saniye',
            m: 'bir dakika',
            mm: '%d dakika',
            h: 'bir saat',
            hh: '%d saat',
            d: 'bir gün',
            dd: '%d gün',
            M: 'bir ay',
            MM: '%d ay',
            y: 'bir yıl',
            yy: '%d yıl'
        },
        dayOfMonthOrdinalParse: /\d{1,2}'(inci|nci|üncü|ncı|uncu|ıncı)/,
        ordinal: /**
         * @param {?} _num
         * @return {?}
         */ function (_num) {
            var /** @type {?} */ num = Number(_num);
            if (num === 0) {
                // special case for zero
                return num + '\'ıncı';
            }
            var /** @type {?} */ a = num % 10, /** @type {?} */ b = num % 100 - a, /** @type {?} */ c = num >= 100 ? 100 : null;
            return num + (suffixes[a] || suffixes[b] || suffixes[c]);
        },
        week: {
            dow: 1,
            // Monday is the first day of the week.
            doy: 7 // The week that contains Jan 1st is the first week of the year.
        }
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    // tslint:disable:comment-format binary-expression-operand-order max-line-length
    // tslint:disable:no-bitwise prefer-template cyclomatic-complexity
    // tslint:disable:no-shadowed-variable switch-default prefer-const
    // tslint:disable:one-variable-per-declaration newline-before-return
    // tslint:disable:no-parameter-reassignment prefer-switch
    //! moment.js locale configuration
    //! locale : Chinese (China) [zh-cn]
    //! author : suupic : https://github.com/suupic
    //! author : Zeno Zeng : https://github.com/zenozeng
    var /** @type {?} */ zhCnLocale = {
        abbr: 'zh-cn',
        months: '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split('_'),
        monthsShort: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
        weekdays: '星期日_星期一_星期二_星期三_星期四_星期五_星期六'.split('_'),
        weekdaysShort: '周日_周一_周二_周三_周四_周五_周六'.split('_'),
        weekdaysMin: '日_一_二_三_四_五_六'.split('_'),
        longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'YYYY/MM/DD',
            LL: 'YYYY年M月D日',
            LLL: 'YYYY年M月D日Ah点mm分',
            LLLL: 'YYYY年M月D日ddddAh点mm分',
            l: 'YYYY/M/D',
            ll: 'YYYY年M月D日',
            lll: 'YYYY年M月D日 HH:mm',
            llll: 'YYYY年M月D日dddd HH:mm'
        },
        meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
        meridiemHour: /**
         * @param {?} hour
         * @param {?} meridiem
         * @return {?}
         */ function (hour, meridiem) {
            if (hour === 12) {
                hour = 0;
            }
            if (meridiem === '凌晨' || meridiem === '早上' ||
                meridiem === '上午') {
                return hour;
            }
            else if (meridiem === '下午' || meridiem === '晚上') {
                return hour + 12;
            }
            else {
                // '中午'
                return hour >= 11 ? hour : hour + 12;
            }
        },
        meridiem: /**
         * @param {?} hour
         * @param {?} minute
         * @param {?} isLower
         * @return {?}
         */ function (hour, minute, isLower) {
            var /** @type {?} */ hm = hour * 100 + minute;
            if (hm < 600) {
                return '凌晨';
            }
            else if (hm < 900) {
                return '早上';
            }
            else if (hm < 1130) {
                return '上午';
            }
            else if (hm < 1230) {
                return '中午';
            }
            else if (hm < 1800) {
                return '下午';
            }
            else {
                return '晚上';
            }
        },
        calendar: {
            sameDay: '[今天]LT',
            nextDay: '[明天]LT',
            nextWeek: '[下]ddddLT',
            lastDay: '[昨天]LT',
            lastWeek: '[上]ddddLT',
            sameElse: 'L'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(日|月|周)/,
        ordinal: /**
         * @param {?} _num
         * @param {?} period
         * @return {?}
         */ function (_num, period) {
            var /** @type {?} */ num = Number(_num);
            switch (period) {
                case 'd':
                case 'D':
                case 'DDD':
                    return num + '日';
                case 'M':
                    return num + '月';
                case 'w':
                case 'W':
                    return num + '周';
                default:
                    return num.toString();
            }
        },
        relativeTime: {
            future: '%s内',
            past: '%s前',
            s: '几秒',
            ss: '%d 秒',
            m: '1 分钟',
            mm: '%d 分钟',
            h: '1 小时',
            hh: '%d 小时',
            d: '1 天',
            dd: '%d 天',
            M: '1 个月',
            MM: '%d 个月',
            y: '1 年',
            yy: '%d 年'
        },
        week: {
            // GB/T 7408-1994《数据元和交换格式·信息交换·日期和时间表示法》与ISO 8601:1988等效
            dow: 1,
            // Monday is the first day of the week.
            doy: 4 // The week that contains Jan 4th is the first week of the year.
        }
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    exports.add = add;
    exports.subtract = subtract;
    exports.getDay = getDay;
    exports.isFirstDayOfWeek = isFirstDayOfWeek;
    exports.isSameYear = isSameYear;
    exports.isSameDay = isSameDay;
    exports.isSameMonth = isSameMonth;
    exports.getFullYear = getFullYear;
    exports.getFirstDayOfMonth = getFirstDayOfMonth;
    exports.getMonth = getMonth;
    exports.parseDate = parseDate;
    exports.formatDate = formatDate;
    exports.listLocales = listLocales;
    exports.getLocale = getLocale;
    exports.updateLocale = updateLocale;
    exports.defineLocale = defineLocale;
    exports.getSetGlobalLocale = getSetGlobalLocale;
    exports.isAfter = isAfter;
    exports.isBefore = isBefore;
    exports.isDisabledDay = isDisabledDay;
    exports.isArray = isArray;
    exports.isDateValid = isDateValid;
    exports.isDate = isDate;
    exports.shiftDate = shiftDate;
    exports.setFullDate = setFullDate;
    exports.endOf = endOf;
    exports.startOf = startOf;
    exports.arLocale = arLocale;
    exports.bgLocale = bgLocale;
    exports.caLocale = caLocale;
    exports.csLocale = csLocale;
    exports.daLocale = daLocale;
    exports.deLocale = deLocale;
    exports.enGbLocale = enGbLocale;
    exports.esDoLocale = esDoLocale;
    exports.esLocale = esLocale;
    exports.esUsLocale = esUsLocale;
    exports.fiLocale = fiLocale;
    exports.frLocale = frLocale;
    exports.glLocale = glLocale;
    exports.heLocale = heLocale;
    exports.hiLocale = hiLocale;
    exports.huLocale = huLocale;
    exports.idLocale = idLocale;
    exports.itLocale = itLocale;
    exports.jaLocale = jaLocale;
    exports.koLocale = koLocale;
    exports.ltLocale = ltLocale;
    exports.mnLocale = mnLocale;
    exports.nbLocale = nbLocale;
    exports.nlBeLocale = nlBeLocale;
    exports.nlLocale = nlLocale;
    exports.plLocale = plLocale;
    exports.ptBrLocale = ptBrLocale;
    exports.roLocale = roLocale;
    exports.ruLocale = ruLocale;
    exports.skLocale = skLocale;
    exports.slLocale = slLocale;
    exports.svLocale = svLocale;
    exports.thLocale = thLocale;
    exports.trLocale = trLocale;
    exports.zhCnLocale = zhCnLocale;
    exports.ɵa = createDate;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWJvb3RzdHJhcC1jaHJvbm9zLnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zL3V0aWxzLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvdXRpbHMvdHlwZS1jaGVja3MudHMiLCJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy91bml0cy9hbGlhc2VzLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvdW5pdHMvY29uc3RhbnRzLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvdXRpbHMvemVyby1maWxsLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvZm9ybWF0L2Zvcm1hdC50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zL2NyZWF0ZS9kYXRlLWZyb20tYXJyYXkudHMiLCJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy91dGlscy9kYXRlLWdldHRlcnMudHMiLCJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy9wYXJzZS9yZWdleC50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zL3BhcnNlL3Rva2VuLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvdW5pdHMvcHJpb3JpdGllcy50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zL3VuaXRzL2RheS1vZi1tb250aC50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zL2NyZWF0ZS9wYXJzaW5nLWZsYWdzLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvdW5pdHMveWVhci50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zL3VuaXRzL21vbnRoLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvdXRpbHMvZGF0ZS1zZXR0ZXJzLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvY3JlYXRlL2Nsb25lLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvdXRpbHMvc3RhcnQtZW5kLW9mLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvdW5pdHMvZGF5LW9mLXllYXIudHMiLCJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy91bml0cy93ZWVrLWNhbGVuZGFyLXV0aWxzLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvbG9jYWxlL2xvY2FsZS5jbGFzcy50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zL2xvY2FsZS9jYWxlbmRhci50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zL2xvY2FsZS9sb2NhbGUuZGVmYXVsdHMudHMiLCJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy91dGlscy9jb21wYXJlLWFycmF5cy50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zL3VuaXRzL3dlZWsudHMiLCJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy91bml0cy93ZWVrLXllYXIudHMiLCJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy91bml0cy90aW1lem9uZS50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zL3VuaXRzL3RpbWVzdGFtcC50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zL3VuaXRzL3NlY29uZC50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zL3VuaXRzL3F1YXJ0ZXIudHMiLCJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy91bml0cy9vZmZzZXQudHMiLCJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy91bml0cy9taW51dGUudHMiLCJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy91bml0cy9taWxsaXNlY29uZC50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zL3VuaXRzL2hvdXIudHMiLCJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy9sb2NhbGUvbG9jYWxlcy50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zL2R1cmF0aW9uL3ZhbGlkLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvdXRpbHMvYWJzLWNlaWwudHMiLCJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy9kdXJhdGlvbi9idWJibGUudHMiLCJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy9kdXJhdGlvbi9odW1hbml6ZS50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zL2R1cmF0aW9uL2NvbnN0cnVjdG9yLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvY3JlYXRlL3ZhbGlkLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvY3JlYXRlL2Zyb20tc3RyaW5nLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvZm9ybWF0LnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvdXRpbHMvZGVmYXVsdHMudHMiLCJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy9jcmVhdGUvZnJvbS1hcnJheS50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zL2NyZWF0ZS9jaGVjay1vdmVyZmxvdy50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zL2NyZWF0ZS9mcm9tLXN0cmluZy1hbmQtZm9ybWF0LnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvY3JlYXRlL2Zyb20tc3RyaW5nLWFuZC1hcnJheS50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zL2NyZWF0ZS9mcm9tLW9iamVjdC50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zL2NyZWF0ZS9mcm9tLWFueXRoaW5nLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvY3JlYXRlL2xvY2FsLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvdXRpbHMvYWJzLXJvdW5kLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvdXRpbHMvZGF0ZS1jb21wYXJlLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvZHVyYXRpb24vY3JlYXRlLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvbW9tZW50L2FkZC1zdWJ0cmFjdC50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zL3VuaXRzL2RheS1vZi13ZWVrLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvaTE4bi9hci50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zL2kxOG4vYmcudHMiLCJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy9pMThuL2NhLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvaTE4bi9jcy50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zL2kxOG4vZGEudHMiLCJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy9pMThuL2RlLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvaTE4bi9lbi1nYi50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zL2kxOG4vZXMtZG8udHMiLCJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy9pMThuL2VzLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvaTE4bi9lcy11cy50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zL2kxOG4vZmkudHMiLCJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy9pMThuL2ZyLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvaTE4bi9nbC50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zL2kxOG4vaGUudHMiLCJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy9pMThuL2hpLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvaTE4bi9odS50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zL2kxOG4vaWQudHMiLCJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy9pMThuL2l0LnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvaTE4bi9qYS50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zL2kxOG4va28udHMiLCJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy9pMThuL2x0LnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvaTE4bi9tbi50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zL2kxOG4vbmIudHMiLCJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy9pMThuL25sLWJlLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvaTE4bi9ubC50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zL2kxOG4vcGwudHMiLCJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy9pMThuL3B0LWJyLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvaTE4bi9yby50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zL2kxOG4vcnUudHMiLCJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy9pMThuL3NrLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvaTE4bi9zbC50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zL2kxOG4vc3YudHMiLCJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy9pMThuL3RoLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvaTE4bi90ci50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zL2kxOG4vemgtY24udHMiXSwic291cmNlc0NvbnRlbnQiOlsiXG5cbmV4cG9ydCBmdW5jdGlvbiBtb2QobjogbnVtYmVyLCB4OiBudW1iZXIpOiBudW1iZXIge1xuICByZXR1cm4gKG4gJSB4ICsgeCkgJSB4O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWJzRmxvb3IobnVtOiBudW1iZXIpOiBudW1iZXIge1xuICByZXR1cm4gbnVtIDwgMCA/IE1hdGguY2VpbChudW0pIHx8IDAgOiBNYXRoLmZsb29yKG51bSk7XG59XG5cbiIsImltcG9ydCB7IGFic0Zsb29yIH0gZnJvbSAnLi4vdXRpbHMnO1xuXG5leHBvcnQgZnVuY3Rpb24gaXNTdHJpbmcoc3RyOiBhbnkpOiBzdHIgaXMgc3RyaW5nIHtcbiAgcmV0dXJuIHR5cGVvZiBzdHIgPT09ICdzdHJpbmcnO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNEYXRlKHZhbHVlOiBhbnkpOiB2YWx1ZSBpcyBEYXRlIHtcbiAgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgRGF0ZSB8fCBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBEYXRlXSc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0Jvb2xlYW4odmFsdWU6IGFueSk6IHZhbHVlIGlzIGJvb2xlYW4ge1xuICByZXR1cm4gdmFsdWUgPT09IHRydWUgfHwgdmFsdWUgPT09IGZhbHNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNEYXRlVmFsaWQoZGF0ZTogRGF0ZSk6IGJvb2xlYW4ge1xuICByZXR1cm4gZGF0ZSAmJiBkYXRlLmdldFRpbWUgJiYgIWlzTmFOKGRhdGUuZ2V0VGltZSgpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRnVuY3Rpb24oZm46IGFueSk6IGZuIGlzIEZ1bmN0aW9uIHtcbiAgcmV0dXJuIChcbiAgICBmbiBpbnN0YW5jZW9mIEZ1bmN0aW9uIHx8XG4gICAgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGZuKSA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJ1xuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNOdW1iZXIodmFsdWU/OiBhbnkpOiB2YWx1ZSBpcyBudW1iZXIge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyB8fCBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBOdW1iZXJdJztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzQXJyYXk8VD4oaW5wdXQ/OiBhbnkpOiBpbnB1dCBpcyBUW10ge1xuICByZXR1cm4gKFxuICAgIGlucHV0IGluc3RhbmNlb2YgQXJyYXkgfHxcbiAgICBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoaW5wdXQpID09PSAnW29iamVjdCBBcnJheV0nXG4gICk7XG59XG5cbi8vIFRPRE86IHJldHVybmVkIHR5cGUgc2hvdWxkIGJlIGNoYW5nZWQgdG8gXCJiIGlzIEV4dHJhY3Q8a2V5b2YgVCwgc3RyaW5nPlwiXG4vLyBhZnRlciB1cGRhdGUgdG8gdHlwZXNjcmlwdCAzLjEuMSAoaXNzdWUgNDcyOClcbmV4cG9ydCBmdW5jdGlvbiBoYXNPd25Qcm9wPFQ+KGE6IFQgLypvYmplY3QqLywgYjogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYSwgYik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc09iamVjdDxUPihpbnB1dDogYW55IC8qb2JqZWN0Ki8pOiBpbnB1dCBpcyBUIHtcbiAgLy8gSUU4IHdpbGwgdHJlYXQgdW5kZWZpbmVkIGFuZCBudWxsIGFzIG9iamVjdCBpZiBpdCB3YXNuJ3QgZm9yXG4gIC8vIGlucHV0ICE9IG51bGxcbiAgcmV0dXJuIChcbiAgICBpbnB1dCAhPSBudWxsICYmIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChpbnB1dCkgPT09ICdbb2JqZWN0IE9iamVjdF0nXG4gICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc09iamVjdEVtcHR5KG9iajogYW55KTogYm9vbGVhbiB7XG4gIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcykge1xuICAgIHJldHVybiAoT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMob2JqKS5sZW5ndGggPT09IDApO1xuICB9XG4gIGxldCBrO1xuICBmb3IgKGsgaW4gb2JqKSB7XG4gICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShrKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBpc1VuZGVmaW5lZChpbnB1dDogYW55KTogYm9vbGVhbiB7XG4gIHJldHVybiBpbnB1dCA9PT0gdm9pZCAwO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9JbnQ8VD4oYXJndW1lbnRGb3JDb2VyY2lvbjogc3RyaW5nIHwgbnVtYmVyIHwgVCk6IG51bWJlciB7XG4gIGNvbnN0IGNvZXJjZWROdW1iZXIgPSArYXJndW1lbnRGb3JDb2VyY2lvbjtcbiAgbGV0IHZhbHVlID0gMDtcblxuICBpZiAoY29lcmNlZE51bWJlciAhPT0gMCAmJiBpc0Zpbml0ZShjb2VyY2VkTnVtYmVyKSkge1xuICAgIHZhbHVlID0gYWJzRmxvb3IoY29lcmNlZE51bWJlcik7XG4gIH1cblxuICByZXR1cm4gdmFsdWU7XG59XG4iLCJpbXBvcnQgeyBoYXNPd25Qcm9wLCBpc1N0cmluZyB9IGZyb20gJy4uL3V0aWxzL3R5cGUtY2hlY2tzJztcbmltcG9ydCB7IERhdGVPYmplY3QsIFVuaXRPZlRpbWUgfSBmcm9tICcuLi90eXBlcyc7XG5cbmNvbnN0IGFsaWFzZXM6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gPSB7fTtcblxuZXhwb3J0IHR5cGUgRXh0ZW5kZWRVbml0T2ZUaW1lID0gVW5pdE9mVGltZSB8ICdkYXRlJyB8ICd3ZWVrJyB8ICdpc29XZWVrJyB8ICdkYXlPZlllYXInIHxcbiAgJ3dlZWtkYXknIHwgJ2lzb1dlZWtkYXknIHwgJ3NlY29uZCcgfCAnbWlsbGlzZWNvbmQnIHwgJ21pbnV0ZScgfCAnaG91cicgfCAncXVhcnRlcicgfCAnd2Vla1llYXInIHwgJ2lzb1dlZWtZZWFyJztcblxuY29uc3QgX21hcFVuaXRzOiB7IFtrZXk6IHN0cmluZ106IFVuaXRPZlRpbWUgfSA9IHtcbiAgZGF0ZTogJ2RheScsXG4gIGhvdXI6ICdob3VycycsXG4gIG1pbnV0ZTogJ21pbnV0ZXMnLFxuICBzZWNvbmQ6ICdzZWNvbmRzJyxcbiAgbWlsbGlzZWNvbmQ6ICdtaWxsaXNlY29uZHMnXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gYWRkVW5pdEFsaWFzKHVuaXQ6IEV4dGVuZGVkVW5pdE9mVGltZSwgc2hvcnRoYW5kOiBzdHJpbmcpOiB2b2lkIHtcbiAgY29uc3QgbG93ZXJDYXNlID0gdW5pdC50b0xvd2VyQ2FzZSgpO1xuICBsZXQgX3VuaXQgPSB1bml0O1xuICBpZiAobG93ZXJDYXNlIGluIF9tYXBVbml0cykge1xuICAgIF91bml0ID0gX21hcFVuaXRzW2xvd2VyQ2FzZV07XG4gIH1cbiAgYWxpYXNlc1tsb3dlckNhc2VdID0gYWxpYXNlc1tgJHtsb3dlckNhc2V9c2BdID0gYWxpYXNlc1tzaG9ydGhhbmRdID0gX3VuaXQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVVbml0cyh1bml0czogc3RyaW5nIHwgc3RyaW5nW10pOiBzdHJpbmcge1xuICByZXR1cm4gaXNTdHJpbmcodW5pdHMpID8gYWxpYXNlc1t1bml0c10gfHwgYWxpYXNlc1t1bml0cy50b0xvd2VyQ2FzZSgpXSA6IHVuZGVmaW5lZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZU9iamVjdFVuaXRzKGlucHV0T2JqZWN0OiB7IFtrZXk6IHN0cmluZ106IG51bWJlciB9KTogRGF0ZU9iamVjdCB7XG4gIGNvbnN0IG5vcm1hbGl6ZWRJbnB1dDogeyBba2V5OiBzdHJpbmddOiBudW1iZXIgfSA9IHt9O1xuICBsZXQgbm9ybWFsaXplZFByb3A7XG4gIGxldCBwcm9wO1xuXG4gIGZvciAocHJvcCBpbiBpbnB1dE9iamVjdCkge1xuICAgIGlmIChoYXNPd25Qcm9wKGlucHV0T2JqZWN0LCBwcm9wKSkge1xuICAgICAgbm9ybWFsaXplZFByb3AgPSBub3JtYWxpemVVbml0cyhwcm9wKTtcbiAgICAgIGlmIChub3JtYWxpemVkUHJvcCkge1xuICAgICAgICBub3JtYWxpemVkSW5wdXRbbm9ybWFsaXplZFByb3BdID0gaW5wdXRPYmplY3RbcHJvcF07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5vcm1hbGl6ZWRJbnB1dCBhcyBhbnk7XG59XG4iLCIvLyBwbGFjZSBpbiBuZXcgRGF0ZShbYXJyYXldKVxuZXhwb3J0IGNvbnN0IFlFQVIgPSAwO1xuZXhwb3J0IGNvbnN0IE1PTlRIID0gMTtcbmV4cG9ydCBjb25zdCBEQVRFID0gMjtcbmV4cG9ydCBjb25zdCBIT1VSID0gMztcbmV4cG9ydCBjb25zdCBNSU5VVEUgPSA0O1xuZXhwb3J0IGNvbnN0IFNFQ09ORCA9IDU7XG5leHBvcnQgY29uc3QgTUlMTElTRUNPTkQgPSA2O1xuZXhwb3J0IGNvbnN0IFdFRUsgPSA3O1xuZXhwb3J0IGNvbnN0IFdFRUtEQVkgPSA4O1xuIiwiZXhwb3J0IGZ1bmN0aW9uIHplcm9GaWxsKG51bTogbnVtYmVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldExlbmd0aDogbnVtYmVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgIGZvcmNlU2lnbj86IGJvb2xlYW4pOiBzdHJpbmcge1xuICBjb25zdCBhYnNOdW1iZXIgPSBgJHtNYXRoLmFicyhudW0pfWA7XG4gIGNvbnN0IHplcm9zVG9GaWxsID0gdGFyZ2V0TGVuZ3RoIC0gYWJzTnVtYmVyLmxlbmd0aDtcbiAgY29uc3Qgc2lnbiA9IG51bSA+PSAwO1xuICBjb25zdCBfc2lnbiA9IHNpZ24gPyAoZm9yY2VTaWduID8gJysnIDogJycpIDogJy0nO1xuICAvLyB0b2RvOiB0aGlzIGlzIGNyYXp5IHNsb3dcbiAgY29uc3QgX3plcm9zID0gTWF0aC5wb3coMTAsIE1hdGgubWF4KDAsIHplcm9zVG9GaWxsKSkudG9TdHJpbmcoKS5zdWJzdHIoMSk7XG5cbiAgcmV0dXJuIChfc2lnbiArIF96ZXJvcyArIGFic051bWJlcik7XG59XG4iLCJpbXBvcnQgeyBMb2NhbGUgfSBmcm9tICcuLi9sb2NhbGUvbG9jYWxlLmNsYXNzJztcbmltcG9ydCB7IHplcm9GaWxsIH0gZnJvbSAnLi4vdXRpbHMvemVyby1maWxsJztcbmltcG9ydCB7IGlzRnVuY3Rpb24gfSBmcm9tICcuLi91dGlscy90eXBlLWNoZWNrcyc7XG5pbXBvcnQgeyBEYXRlRm9ybWF0dGVyT3B0aW9ucywgRGF0ZUZvcm1hdHRlckZuIH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5leHBvcnQgbGV0IGZvcm1hdEZ1bmN0aW9uczoge1xuICBba2V5OiBzdHJpbmddOiAoZGF0ZTogRGF0ZSwgbG9jYWxlOiBMb2NhbGUsIGlzVVRDPzogYm9vbGVhbiwgb2Zmc2V0PzogbnVtYmVyKSA9PiBzdHJpbmc7XG59ID0ge307XG5leHBvcnQgbGV0IGZvcm1hdFRva2VuRnVuY3Rpb25zOiB7IFtrZXk6IHN0cmluZ106IERhdGVGb3JtYXR0ZXJGbiB9ID0ge307XG5cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuZXhwb3J0IGNvbnN0IGZvcm1hdHRpbmdUb2tlbnMgPSAvKFxcW1teXFxbXSpcXF0pfChcXFxcKT8oW0hoXW1tKHNzKT98TW98TU0/TT9NP3xEb3xERERvfEREP0Q/RD98ZGRkP2Q/fGRvP3x3W298d10/fFdbb3xXXT98UW8/fFlZWVlZWXxZWVlZWXxZWVlZfFlZfGdnKGdnZz8pP3xHRyhHR0c/KT98ZXxFfGF8QXxoaD98SEg/fGtrP3xtbT98c3M/fFN7MSw5fXx4fFh8eno/fFpaP3wuKS9nO1xuXG4vLyB0b2tlbjogICAgJ00nXG4vLyBwYWRkZWQ6ICAgWydNTScsIDJdXG4vLyBvcmRpbmFsOiAgJ01vJ1xuLy8gY2FsbGJhY2s6IGZ1bmN0aW9uICgpIHsgdGhpcy5tb250aCgpICsgMSB9XG5leHBvcnQgZnVuY3Rpb24gYWRkRm9ybWF0VG9rZW4odG9rZW46IHN0cmluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkZWQ6IFtzdHJpbmcsIG51bWJlciwgYm9vbGVhbl0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkaW5hbDogc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBEYXRlRm9ybWF0dGVyRm4pOiB2b2lkIHtcblxuICBpZiAodG9rZW4pIHtcbiAgICBmb3JtYXRUb2tlbkZ1bmN0aW9uc1t0b2tlbl0gPSBjYWxsYmFjaztcbiAgfVxuXG4gIGlmIChwYWRkZWQpIHtcbiAgICBmb3JtYXRUb2tlbkZ1bmN0aW9uc1twYWRkZWRbMF1dID0gZnVuY3Rpb24gKCk6IHN0cmluZyB7XG4gICAgICByZXR1cm4gemVyb0ZpbGwoY2FsbGJhY2suYXBwbHkobnVsbCwgYXJndW1lbnRzKSwgcGFkZGVkWzFdLCBwYWRkZWRbMl0pO1xuICAgIH07XG4gIH1cblxuICBpZiAob3JkaW5hbCkge1xuICAgIGZvcm1hdFRva2VuRnVuY3Rpb25zW29yZGluYWxdID0gZnVuY3Rpb24gKGRhdGU6IERhdGUsIG9wdHM6IERhdGVGb3JtYXR0ZXJPcHRpb25zKTogc3RyaW5nIHtcbiAgICAgIHJldHVybiBvcHRzLmxvY2FsZS5vcmRpbmFsKGNhbGxiYWNrLmFwcGx5KG51bGwsIGFyZ3VtZW50cyksIHRva2VuKTtcbiAgICB9O1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWtlRm9ybWF0RnVuY3Rpb24oZm9ybWF0OiBzdHJpbmcpOlxuICAoZGF0ZTogRGF0ZSwgbG9jYWxlOiBMb2NhbGUsIGlzVVRDPzogYm9vbGVhbiwgb2Zmc2V0PzogbnVtYmVyKSA9PiBzdHJpbmcge1xuXG4gIGNvbnN0IGFycmF5OiBzdHJpbmdbXSA9IGZvcm1hdC5tYXRjaChmb3JtYXR0aW5nVG9rZW5zKTtcbiAgY29uc3QgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGNvbnN0IGZvcm1hdEFycjogc3RyaW5nW10gfCBEYXRlRm9ybWF0dGVyRm5bXSA9IG5ldyBBcnJheShsZW5ndGgpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICBmb3JtYXRBcnJbaV0gPSBmb3JtYXRUb2tlbkZ1bmN0aW9uc1thcnJheVtpXV1cbiAgICAgID8gZm9ybWF0VG9rZW5GdW5jdGlvbnNbYXJyYXlbaV1dXG4gICAgICA6IHJlbW92ZUZvcm1hdHRpbmdUb2tlbnMoYXJyYXlbaV0pO1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChkYXRlOiBEYXRlLCBsb2NhbGU6IExvY2FsZSwgaXNVVEM6IGJvb2xlYW4sIG9mZnNldCA9IDApOiBzdHJpbmcge1xuICAgIGxldCBvdXRwdXQgPSAnJztcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IGxlbmd0aDsgaisrKSB7XG4gICAgICBvdXRwdXQgKz0gaXNGdW5jdGlvbihmb3JtYXRBcnJbal0pXG4gICAgICAgID8gKGZvcm1hdEFycltqXSBhcyBEYXRlRm9ybWF0dGVyRm4pLmNhbGwobnVsbCwgZGF0ZSwge2Zvcm1hdCwgbG9jYWxlLCBpc1VUQywgb2Zmc2V0fSlcbiAgICAgICAgOiBmb3JtYXRBcnJbal07XG4gICAgfVxuXG4gICAgcmV0dXJuIG91dHB1dDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlRm9ybWF0dGluZ1Rva2VucyhpbnB1dDogc3RyaW5nKTogc3RyaW5nIHtcbiAgaWYgKGlucHV0Lm1hdGNoKC9cXFtbXFxzXFxTXS8pKSB7XG4gICAgcmV0dXJuIGlucHV0LnJlcGxhY2UoL15cXFt8XFxdJC9nLCAnJyk7XG4gIH1cblxuICByZXR1cm4gaW5wdXQucmVwbGFjZSgvXFxcXC9nLCAnJyk7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gY3JlYXRlVVRDRGF0ZSh5PzogbnVtYmVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbT86IG51bWJlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ/OiBudW1iZXIpOiBEYXRlIHtcbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKERhdGUuVVRDLmFwcGx5KG51bGwsIGFyZ3VtZW50cykpO1xuXG4gIC8vIHRoZSBEYXRlLlVUQyBmdW5jdGlvbiByZW1hcHMgeWVhcnMgMC05OSB0byAxOTAwLTE5OTlcbiAgaWYgKHkgPCAxMDAgJiYgeSA+PSAwICYmIGlzRmluaXRlKGRhdGUuZ2V0VVRDRnVsbFllYXIoKSkpIHtcbiAgICBkYXRlLnNldFVUQ0Z1bGxZZWFyKHkpO1xuICB9XG5cbiAgcmV0dXJuIGRhdGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVEYXRlKHk/OiBudW1iZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBtID0gMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGQgPSAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgaCA9IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBNID0gMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHMgPSAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgbXMgPSAwKTogRGF0ZSB7XG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSh5LCBtLCBkLCBoLCBNLCBzLCBtcyk7XG5cbiAgLy8gdGhlIGRhdGUgY29uc3RydWN0b3IgcmVtYXBzIHllYXJzIDAtOTkgdG8gMTkwMC0xOTk5XG4gIGlmICh5IDwgMTAwICYmIHkgPj0gMCAmJiBpc0Zpbml0ZShkYXRlLmdldEZ1bGxZZWFyKCkpKSB7XG4gICAgZGF0ZS5zZXRGdWxsWWVhcih5KTtcbiAgfVxuXG4gIHJldHVybiBkYXRlO1xufVxuIiwiaW1wb3J0IHsgY3JlYXRlRGF0ZSB9IGZyb20gJy4uL2NyZWF0ZS9kYXRlLWZyb20tYXJyYXknO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0SG91cnMoZGF0ZTogRGF0ZSwgaXNVVEMgPSBmYWxzZSk6IG51bWJlciB7XG4gIHJldHVybiBpc1VUQyA/IGRhdGUuZ2V0VVRDSG91cnMoKSA6IGRhdGUuZ2V0SG91cnMoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldE1pbnV0ZXMoZGF0ZTogRGF0ZSwgaXNVVEMgPSBmYWxzZSk6IG51bWJlciB7XG4gIHJldHVybiBpc1VUQyA/IGRhdGUuZ2V0VVRDTWludXRlcygpIDogZGF0ZS5nZXRNaW51dGVzKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTZWNvbmRzKGRhdGU6IERhdGUsIGlzVVRDID0gZmFsc2UpOiBudW1iZXIge1xuICByZXR1cm4gaXNVVEMgPyBkYXRlLmdldFVUQ1NlY29uZHMoKSA6IGRhdGUuZ2V0U2Vjb25kcygpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TWlsbGlzZWNvbmRzKGRhdGU6IERhdGUsIGlzVVRDID0gZmFsc2UpOiBudW1iZXIge1xuICByZXR1cm4gaXNVVEMgPyBkYXRlLmdldFVUQ01pbGxpc2Vjb25kcygpIDogZGF0ZS5nZXRNaWxsaXNlY29uZHMoKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRUaW1lKGRhdGU6IERhdGUpOiBudW1iZXIge1xuICByZXR1cm4gZGF0ZS5nZXRUaW1lKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREYXkoZGF0ZTogRGF0ZSwgaXNVVEMgPSBmYWxzZSk6IG51bWJlciB7XG4gIHJldHVybiBpc1VUQyA/IGRhdGUuZ2V0VVRDRGF5KCkgOiBkYXRlLmdldERheSgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGF0ZShkYXRlOiBEYXRlLCBpc1VUQyA9IGZhbHNlKTogbnVtYmVyIHtcbiAgcmV0dXJuIGlzVVRDID8gZGF0ZS5nZXRVVENEYXRlKCkgOiBkYXRlLmdldERhdGUoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldE1vbnRoKGRhdGU6IERhdGUsIGlzVVRDID0gZmFsc2UpOiBudW1iZXIge1xuICByZXR1cm4gaXNVVEMgPyBkYXRlLmdldFVUQ01vbnRoKCkgOiBkYXRlLmdldE1vbnRoKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRGdWxsWWVhcihkYXRlOiBEYXRlLCBpc1VUQyA9IGZhbHNlKTogbnVtYmVyIHtcbiAgcmV0dXJuIGlzVVRDID8gZGF0ZS5nZXRVVENGdWxsWWVhcigpIDogZGF0ZS5nZXRGdWxsWWVhcigpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VW5peFRpbWUoZGF0ZTogRGF0ZSk6IG51bWJlciB7XG4gIHJldHVybiBNYXRoLmZsb29yKGRhdGUudmFsdWVPZigpIC8gMTAwMCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1bml4KGRhdGU6IERhdGUpOiBudW1iZXIge1xuICByZXR1cm4gTWF0aC5mbG9vcihkYXRlLnZhbHVlT2YoKSAvIDEwMDApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Rmlyc3REYXlPZk1vbnRoKGRhdGU6IERhdGUpOiBEYXRlIHtcbiAgcmV0dXJuIGNyZWF0ZURhdGUoXG4gICAgZGF0ZS5nZXRGdWxsWWVhcigpLFxuICAgIGRhdGUuZ2V0TW9udGgoKSxcbiAgICAxLFxuICAgIGRhdGUuZ2V0SG91cnMoKSxcbiAgICBkYXRlLmdldE1pbnV0ZXMoKSxcbiAgICBkYXRlLmdldFNlY29uZHMoKVxuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF5c0luTW9udGgoZGF0ZTogRGF0ZSk6IG51bWJlciB7XG4gIHJldHVybiBfZGF5c0luTW9udGgoZGF0ZS5nZXRGdWxsWWVhcigpLCBkYXRlLmdldE1vbnRoKCkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX2RheXNJbk1vbnRoKHllYXI6IG51bWJlciwgbW9udGg6IG51bWJlcik6IG51bWJlciB7XG4gIHJldHVybiBuZXcgRGF0ZShEYXRlLlVUQyh5ZWFyLCBtb250aCArIDEsIDApKS5nZXRVVENEYXRlKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0ZpcnN0RGF5T2ZXZWVrKGRhdGU6IERhdGUsIGZpcnN0RGF5T2ZXZWVrOiBudW1iZXIpOiBib29sZWFuIHtcbiAgcmV0dXJuIGRhdGUuZ2V0RGF5KCkgPT09IGZpcnN0RGF5T2ZXZWVrO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNTYW1lTW9udGgoZGF0ZTE6IERhdGUsIGRhdGUyOiBEYXRlKSB7XG4gIGlmICghZGF0ZTEgfHwgIWRhdGUyKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIGlzU2FtZVllYXIoZGF0ZTEsIGRhdGUyKSAmJiBnZXRNb250aChkYXRlMSkgPT09IGdldE1vbnRoKGRhdGUyKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzU2FtZVllYXIoZGF0ZTE6IERhdGUsIGRhdGUyOiBEYXRlKSB7XG4gIGlmICghZGF0ZTEgfHwgIWRhdGUyKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIGdldEZ1bGxZZWFyKGRhdGUxKSA9PT0gZ2V0RnVsbFllYXIoZGF0ZTIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNTYW1lRGF5KGRhdGUxOiBEYXRlLCBkYXRlMjogRGF0ZSk6IGJvb2xlYW4ge1xuICBpZiAoIWRhdGUxIHx8ICFkYXRlMikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgaXNTYW1lWWVhcihkYXRlMSwgZGF0ZTIpICYmXG4gICAgaXNTYW1lTW9udGgoZGF0ZTEsIGRhdGUyKSAmJlxuICAgIGdldERhdGUoZGF0ZTEpID09PSBnZXREYXRlKGRhdGUyKVxuICApO1xufVxuIiwiaW1wb3J0IHsgaGFzT3duUHJvcCwgaXNGdW5jdGlvbiB9IGZyb20gJy4uL3V0aWxzL3R5cGUtY2hlY2tzJztcbmltcG9ydCB7IExvY2FsZSB9IGZyb20gJy4uL2xvY2FsZS9sb2NhbGUuY2xhc3MnO1xuXG5leHBvcnQgY29uc3QgbWF0Y2gxID0gL1xcZC87ICAgICAgICAgICAgLy8gICAgICAgMCAtIDlcbmV4cG9ydCBjb25zdCBtYXRjaDIgPSAvXFxkXFxkLzsgICAgICAgICAgLy8gICAgICAwMCAtIDk5XG5leHBvcnQgY29uc3QgbWF0Y2gzID0gL1xcZHszfS87ICAgICAgICAgLy8gICAgIDAwMCAtIDk5OVxuZXhwb3J0IGNvbnN0IG1hdGNoNCA9IC9cXGR7NH0vOyAgICAgICAgIC8vICAgIDAwMDAgLSA5OTk5XG5leHBvcnQgY29uc3QgbWF0Y2g2ID0gL1srLV0/XFxkezZ9LzsgICAgLy8gLTk5OTk5OSAtIDk5OTk5OVxuZXhwb3J0IGNvbnN0IG1hdGNoMXRvMiA9IC9cXGRcXGQ/LzsgICAgICAgICAvLyAgICAgICAwIC0gOTlcbmV4cG9ydCBjb25zdCBtYXRjaDN0bzQgPSAvXFxkXFxkXFxkXFxkPy87ICAgICAvLyAgICAgOTk5IC0gOTk5OVxuZXhwb3J0IGNvbnN0IG1hdGNoNXRvNiA9IC9cXGRcXGRcXGRcXGRcXGRcXGQ/LzsgLy8gICA5OTk5OSAtIDk5OTk5OVxuZXhwb3J0IGNvbnN0IG1hdGNoMXRvMyA9IC9cXGR7MSwzfS87ICAgICAgIC8vICAgICAgIDAgLSA5OTlcbmV4cG9ydCBjb25zdCBtYXRjaDF0bzQgPSAvXFxkezEsNH0vOyAgICAgICAvLyAgICAgICAwIC0gOTk5OVxuZXhwb3J0IGNvbnN0IG1hdGNoMXRvNiA9IC9bKy1dP1xcZHsxLDZ9LzsgIC8vIC05OTk5OTkgLSA5OTk5OTlcblxuZXhwb3J0IGNvbnN0IG1hdGNoVW5zaWduZWQgPSAvXFxkKy87ICAgICAgICAgICAvLyAgICAgICAwIC0gaW5mXG5leHBvcnQgY29uc3QgbWF0Y2hTaWduZWQgPSAvWystXT9cXGQrLzsgICAgICAvLyAgICAtaW5mIC0gaW5mXG5cbmV4cG9ydCBjb25zdCBtYXRjaE9mZnNldCA9IC9afFsrLV1cXGRcXGQ6P1xcZFxcZC9naTsgLy8gKzAwOjAwIC0wMDowMCArMDAwMCAtMDAwMCBvciBaXG5leHBvcnQgY29uc3QgbWF0Y2hTaG9ydE9mZnNldCA9IC9afFsrLV1cXGRcXGQoPzo6P1xcZFxcZCk/L2dpOyAvLyArMDAgLTAwICswMDowMCAtMDA6MDAgKzAwMDAgLTAwMDAgb3IgWlxuXG5leHBvcnQgY29uc3QgbWF0Y2hUaW1lc3RhbXAgPSAvWystXT9cXGQrKFxcLlxcZHsxLDN9KT8vOyAvLyAxMjM0NTY3ODkgMTIzNDU2Nzg5LjEyM1xuXG4vLyBhbnkgd29yZCAob3IgdHdvKSBjaGFyYWN0ZXJzIG9yIG51bWJlcnMgaW5jbHVkaW5nIHR3by90aHJlZSB3b3JkIG1vbnRoIGluIGFyYWJpYy5cbi8vIGluY2x1ZGVzIHNjb3R0aXNoIGdhZWxpYyB0d28gd29yZCBhbmQgaHlwaGVuYXRlZCBtb250aHNcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuZXhwb3J0IGNvbnN0IG1hdGNoV29yZCA9IC9bMC05XXswLDI1Nn1bJ2EtelxcdTAwQTAtXFx1MDVGRlxcdTA3MDAtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkZFRl17MSwyNTZ9fFtcXHUwNjAwLVxcdTA2RkZcXC9dezEsMjU2fShcXHMqP1tcXHUwNjAwLVxcdTA2RkZdezEsMjU2fSl7MSwyfS9pO1xuXG5leHBvcnQgdHlwZSBSZWdFeHBUb2tlbkZuID0gKGlzU3RyaWN0OiBib29sZWFuLCBsb2NhbGU6IExvY2FsZSkgPT4gUmVnRXhwO1xuY29uc3QgcmVnZXhlczoge1trZXk6IHN0cmluZ106IFJlZ0V4cFRva2VuRm59ID0ge307XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFJlZ2V4VG9rZW4odG9rZW46IHN0cmluZywgcmVnZXg6IFJlZ0V4cCB8IFJlZ0V4cFRva2VuRm4sIHN0cmljdFJlZ2V4PzogUmVnRXhwKTogdm9pZCB7XG4gIGlmIChpc0Z1bmN0aW9uKHJlZ2V4KSkge1xuICAgIHJlZ2V4ZXNbdG9rZW5dID0gcmVnZXg7XG5cbiAgICByZXR1cm47XG4gIH1cblxuICByZWdleGVzW3Rva2VuXSA9IGZ1bmN0aW9uIChpc1N0cmljdDogYm9vbGVhbiwgbG9jYWxlOiBMb2NhbGUpIHtcbiAgICByZXR1cm4gKGlzU3RyaWN0ICYmIHN0cmljdFJlZ2V4KSA/IHN0cmljdFJlZ2V4IDogcmVnZXg7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQYXJzZVJlZ2V4Rm9yVG9rZW4odG9rZW46IHN0cmluZywgbG9jYWxlOiBMb2NhbGUpOiBSZWdFeHAge1xuICBjb25zdCBfc3RyaWN0ID0gZmFsc2U7XG4gIGlmICghaGFzT3duUHJvcChyZWdleGVzLCB0b2tlbikpIHtcbiAgICByZXR1cm4gbmV3IFJlZ0V4cCh1bmVzY2FwZUZvcm1hdCh0b2tlbikpO1xuICB9XG5cbiAgcmV0dXJuIHJlZ2V4ZXNbdG9rZW5dKF9zdHJpY3QsIGxvY2FsZSk7XG59XG5cbi8vIENvZGUgZnJvbSBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzM1NjE0OTMvaXMtdGhlcmUtYS1yZWdleHAtZXNjYXBlLWZ1bmN0aW9uLWluLWphdmFzY3JpcHRcbmZ1bmN0aW9uIHVuZXNjYXBlRm9ybWF0KHN0cjogc3RyaW5nKTogc3RyaW5nIHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gIHJldHVybiByZWdleEVzY2FwZShzdHJcbiAgICAucmVwbGFjZSgnXFxcXCcsICcnKVxuICAgIC5yZXBsYWNlKC9cXFxcKFxcWyl8XFxcXChcXF0pfFxcWyhbXlxcXVxcW10qKVxcXXxcXFxcKC4pL2csIChtYXRjaGVkLCBwMSwgcDIsIHAzLCBwNCkgPT4gcDEgfHwgcDIgfHwgcDMgfHwgcDQpXG4gICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWdleEVzY2FwZShzdHI6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvWy1cXC9cXFxcXiQqKz8uKCl8W1xcXXt9XS9nLCAnXFxcXCQmJyk7XG59XG4iLCIvLyB0c2xpbnQ6ZGlzYWJsZTptYXgtbGluZS1sZW5ndGhcbmltcG9ydCB7IGhhc093blByb3AsIGlzQXJyYXksIGlzRnVuY3Rpb24sIGlzTnVtYmVyLCBpc1N0cmluZywgdG9JbnQgfSBmcm9tICcuLi91dGlscy90eXBlLWNoZWNrcyc7XG5pbXBvcnQgeyBEYXRlUGFyc2luZ0NvbmZpZyB9IGZyb20gJy4uL2NyZWF0ZS9wYXJzaW5nLnR5cGVzJztcbmltcG9ydCB7IERhdGVBcnJheSwgRGF0ZVBhcnNlVG9rZW5GbiB9IGZyb20gJy4uL3R5cGVzJztcblxuY29uc3QgdG9rZW5zOiB7W2tleTogc3RyaW5nXTogRGF0ZVBhcnNlVG9rZW5Gbn0gPSB7fTtcblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFBhcnNlVG9rZW4odG9rZW46IHN0cmluZyB8IHN0cmluZ1tdLCBjYWxsYmFjazogRGF0ZVBhcnNlVG9rZW5GbiB8IG51bWJlcikge1xuICBjb25zdCBfdG9rZW4gPSBpc1N0cmluZyh0b2tlbikgPyBbdG9rZW5dIDogdG9rZW47XG4gIGxldCBmdW5jID0gY2FsbGJhY2s7XG5cbiAgaWYgKGlzTnVtYmVyKGNhbGxiYWNrKSkge1xuICAgIGZ1bmMgPSBmdW5jdGlvbiAoaW5wdXQ6IHN0cmluZywgYXJyYXk6IERhdGVBcnJheSwgY29uZmlnOiBEYXRlUGFyc2luZ0NvbmZpZyk6IERhdGVQYXJzaW5nQ29uZmlnIHtcbiAgICAgIGFycmF5W2NhbGxiYWNrXSA9IHRvSW50KGlucHV0KTtcblxuICAgICAgcmV0dXJuIGNvbmZpZztcbiAgICB9O1xuICB9XG5cbiAgaWYgKGlzQXJyYXk8c3RyaW5nPihfdG9rZW4pICYmIGlzRnVuY3Rpb24oZnVuYykpIHtcbiAgICBsZXQgaTtcbiAgICBmb3IgKGkgPSAwOyBpIDwgX3Rva2VuLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0b2tlbnNbX3Rva2VuW2ldXSA9IGZ1bmM7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRXZWVrUGFyc2VUb2tlbih0b2tlbjogc3RyaW5nW10sIGNhbGxiYWNrOiBEYXRlUGFyc2VUb2tlbkZuKTogdm9pZCB7XG4gIGFkZFBhcnNlVG9rZW4odG9rZW4sIGZ1bmN0aW9uIChpbnB1dDogc3RyaW5nLCBhcnJheTogRGF0ZUFycmF5LCBjb25maWc6IERhdGVQYXJzaW5nQ29uZmlnLCBfdG9rZW46IHN0cmluZyk6IERhdGVQYXJzaW5nQ29uZmlnIHtcbiAgICBjb25maWcuX3cgPSBjb25maWcuX3cgfHwge307XG5cbiAgICByZXR1cm4gY2FsbGJhY2soaW5wdXQsIGNvbmZpZy5fdywgY29uZmlnLCBfdG9rZW4pO1xuICB9KTtcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gYWRkVGltZVRvQXJyYXlGcm9tVG9rZW4odG9rZW46IHN0cmluZywgaW5wdXQ6IHN0cmluZywgY29uZmlnOiBEYXRlUGFyc2luZ0NvbmZpZyk6IERhdGVQYXJzaW5nQ29uZmlnIHtcbiAgaWYgKGlucHV0ICE9IG51bGwgJiYgaGFzT3duUHJvcCh0b2tlbnMsIHRva2VuKSkge1xuICAgIHRva2Vuc1t0b2tlbl0oaW5wdXQsIGNvbmZpZy5fYSwgY29uZmlnLCB0b2tlbik7XG4gIH1cblxuICByZXR1cm4gY29uZmlnO1xufVxuIiwiY29uc3QgcHJpb3JpdGllczoge1trZXk6IHN0cmluZ106IG51bWJlcn0gPSB7fTtcblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFVuaXRQcmlvcml0eSh1bml0OiBzdHJpbmcsIHByaW9yaXR5OiBudW1iZXIpOiB2b2lkIHtcbiAgcHJpb3JpdGllc1t1bml0XSA9IHByaW9yaXR5O1xufVxuXG4vKlxuZXhwb3J0IGZ1bmN0aW9uIGdldFByaW9yaXRpemVkVW5pdHModW5pdHNPYmopIHtcbiAgY29uc3QgdW5pdHMgPSBbXTtcbiAgbGV0IHVuaXQ7XG4gIGZvciAodW5pdCBpbiB1bml0c09iaikge1xuICAgIGlmICh1bml0c09iai5oYXNPd25Qcm9wZXJ0eSh1bml0KSkge1xuICAgICAgdW5pdHMucHVzaCh7IHVuaXQsIHByaW9yaXR5OiBwcmlvcml0aWVzW3VuaXRdIH0pO1xuICAgIH1cbiAgfVxuICB1bml0cy5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgcmV0dXJuIGEucHJpb3JpdHkgLSBiLnByaW9yaXR5O1xuICB9KTtcblxuICByZXR1cm4gdW5pdHM7XG59XG4qL1xuIiwiaW1wb3J0IHsgYWRkRm9ybWF0VG9rZW4gfSBmcm9tICcuLi9mb3JtYXQvZm9ybWF0JztcbmltcG9ydCB7IGdldERhdGUgfSBmcm9tICcuLi91dGlscy9kYXRlLWdldHRlcnMnO1xuaW1wb3J0IHsgYWRkUmVnZXhUb2tlbiwgbWF0Y2gxdG8yLCBtYXRjaDIgfSBmcm9tICcuLi9wYXJzZS9yZWdleCc7XG5pbXBvcnQgeyBhZGRQYXJzZVRva2VuIH0gZnJvbSAnLi4vcGFyc2UvdG9rZW4nO1xuaW1wb3J0IHsgREFURSB9IGZyb20gJy4vY29uc3RhbnRzJztcbmltcG9ydCB7IHRvSW50IH0gZnJvbSAnLi4vdXRpbHMvdHlwZS1jaGVja3MnO1xuaW1wb3J0IHsgRGF0ZUFycmF5LCBEYXRlRm9ybWF0dGVyT3B0aW9ucyB9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7IGFkZFVuaXRBbGlhcyB9IGZyb20gJy4vYWxpYXNlcyc7XG5pbXBvcnQgeyBhZGRVbml0UHJpb3JpdHkgfSBmcm9tICcuL3ByaW9yaXRpZXMnO1xuaW1wb3J0IHsgRGF0ZVBhcnNpbmdDb25maWcgfSBmcm9tICcuLi9jcmVhdGUvcGFyc2luZy50eXBlcyc7XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGluaXREYXlPZk1vbnRoKCkge1xuLy8gRk9STUFUVElOR1xuXG4gIGFkZEZvcm1hdFRva2VuKCdEJywgWydERCcsIDIsIGZhbHNlXSwgJ0RvJyxcbiAgICBmdW5jdGlvbihkYXRlOiBEYXRlLCBvcHRzOiBEYXRlRm9ybWF0dGVyT3B0aW9ucyk6IHN0cmluZyB7XG4gICAgICByZXR1cm4gZ2V0RGF0ZShkYXRlLCBvcHRzLmlzVVRDKVxuICAgICAgICAudG9TdHJpbmcoMTApO1xuICAgIH1cbiAgKTtcblxuLy8gQUxJQVNFU1xuXG4gIGFkZFVuaXRBbGlhcygnZGF0ZScsICdEJyk7XG5cbi8vIFBSSU9ST0lUWVxuICBhZGRVbml0UHJpb3JpdHkoJ2RhdGUnLCA5KTtcblxuLy8gUEFSU0lOR1xuXG4gIGFkZFJlZ2V4VG9rZW4oJ0QnLCBtYXRjaDF0bzIpO1xuICBhZGRSZWdleFRva2VuKCdERCcsIG1hdGNoMXRvMiwgbWF0Y2gyKTtcbiAgYWRkUmVnZXhUb2tlbignRG8nLCBmdW5jdGlvbihpc1N0cmljdCwgbG9jYWxlKSB7XG4gICAgcmV0dXJuIGxvY2FsZS5fZGF5T2ZNb250aE9yZGluYWxQYXJzZSB8fCBsb2NhbGUuX29yZGluYWxQYXJzZTtcbiAgfSk7XG5cbiAgYWRkUGFyc2VUb2tlbihbJ0QnLCAnREQnXSwgREFURSk7XG4gIGFkZFBhcnNlVG9rZW4oXG4gICAgJ0RvJyxcbiAgICBmdW5jdGlvbihpbnB1dDogc3RyaW5nLCBhcnJheTogRGF0ZUFycmF5LCBjb25maWc6IERhdGVQYXJzaW5nQ29uZmlnKTogRGF0ZVBhcnNpbmdDb25maWcge1xuICAgICAgYXJyYXlbREFURV0gPSB0b0ludChpbnB1dC5tYXRjaChtYXRjaDF0bzIpWzBdKTtcblxuICAgICAgcmV0dXJuIGNvbmZpZztcbiAgICB9XG4gICk7XG59XG4iLCJpbXBvcnQgeyBEYXRlUGFyc2luZ0NvbmZpZywgRGF0ZVBhcnNpbmdGbGFncyB9IGZyb20gJy4vcGFyc2luZy50eXBlcyc7XG5cbmZ1bmN0aW9uIGRlZmF1bHRQYXJzaW5nRmxhZ3MoKTogRGF0ZVBhcnNpbmdGbGFncyB7XG4gIC8vIFdlIG5lZWQgdG8gZGVlcCBjbG9uZSB0aGlzIG9iamVjdC5cbiAgcmV0dXJuIHtcbiAgICBlbXB0eTogZmFsc2UsXG4gICAgdW51c2VkVG9rZW5zOiBbXSxcbiAgICB1bnVzZWRJbnB1dDogW10sXG4gICAgb3ZlcmZsb3c6IC0yLFxuICAgIGNoYXJzTGVmdE92ZXI6IDAsXG4gICAgbnVsbElucHV0OiBmYWxzZSxcbiAgICBpbnZhbGlkTW9udGg6IG51bGwsXG4gICAgaW52YWxpZEZvcm1hdDogZmFsc2UsXG4gICAgdXNlckludmFsaWRhdGVkOiBmYWxzZSxcbiAgICBpc286IGZhbHNlLFxuICAgIHBhcnNlZERhdGVQYXJ0czogW10sXG4gICAgbWVyaWRpZW06IG51bGwsXG4gICAgcmZjMjgyMjogZmFsc2UsXG4gICAgd2Vla2RheU1pc21hdGNoOiBmYWxzZVxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZzogRGF0ZVBhcnNpbmdDb25maWcpOiBEYXRlUGFyc2luZ0ZsYWdzIHtcbiAgaWYgKGNvbmZpZy5fcGYgPT0gbnVsbCkge1xuICAgIGNvbmZpZy5fcGYgPSBkZWZhdWx0UGFyc2luZ0ZsYWdzKCk7XG4gIH1cblxuICByZXR1cm4gY29uZmlnLl9wZjtcbn1cbiIsImltcG9ydCB7IGFkZEZvcm1hdFRva2VuIH0gZnJvbSAnLi4vZm9ybWF0L2Zvcm1hdCc7XG5pbXBvcnQgeyBnZXRGdWxsWWVhciB9IGZyb20gJy4uL3V0aWxzL2RhdGUtZ2V0dGVycyc7XG5pbXBvcnQgeyBhZGRSZWdleFRva2VuLCBtYXRjaDF0bzIsIG1hdGNoMXRvNCwgbWF0Y2gxdG82LCBtYXRjaDIsIG1hdGNoNCwgbWF0Y2g2LCBtYXRjaFNpZ25lZCB9IGZyb20gJy4uL3BhcnNlL3JlZ2V4JztcbmltcG9ydCB7IGFkZFBhcnNlVG9rZW4gfSBmcm9tICcuLi9wYXJzZS90b2tlbic7XG5pbXBvcnQgeyBZRUFSIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgdG9JbnQgfSBmcm9tICcuLi91dGlscy90eXBlLWNoZWNrcyc7XG5pbXBvcnQgeyBhZGRVbml0UHJpb3JpdHkgfSBmcm9tICcuL3ByaW9yaXRpZXMnO1xuaW1wb3J0IHsgYWRkVW5pdEFsaWFzIH0gZnJvbSAnLi9hbGlhc2VzJztcbmltcG9ydCB7IERhdGVGb3JtYXR0ZXJPcHRpb25zIH0gZnJvbSAnLi4vdHlwZXMnO1xuXG4vLyBGT1JNQVRUSU5HXG5cbmZ1bmN0aW9uIGdldFllYXIoZGF0ZTogRGF0ZSwgb3B0czogRGF0ZUZvcm1hdHRlck9wdGlvbnMpOiBzdHJpbmcge1xuICByZXR1cm4gZ2V0RnVsbFllYXIoZGF0ZSwgb3B0cy5pc1VUQykudG9TdHJpbmcoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRZZWFyKCkge1xuICBhZGRGb3JtYXRUb2tlbignWScsIG51bGwsIG51bGwsXG4gICAgZnVuY3Rpb24gKGRhdGU6IERhdGUsIG9wdHM6IERhdGVGb3JtYXR0ZXJPcHRpb25zKTogc3RyaW5nIHtcbiAgICBjb25zdCB5ID0gZ2V0RnVsbFllYXIoZGF0ZSwgb3B0cy5pc1VUQyk7XG5cbiAgICByZXR1cm4geSA8PSA5OTk5ID8geS50b1N0cmluZygxMCkgOiBgKyR7eX1gO1xuICB9KTtcblxuICBhZGRGb3JtYXRUb2tlbihudWxsLCBbJ1lZJywgMiwgZmFsc2VdLCBudWxsLFxuICAgIGZ1bmN0aW9uIChkYXRlOiBEYXRlLCBvcHRzOiBEYXRlRm9ybWF0dGVyT3B0aW9ucyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIChnZXRGdWxsWWVhcihkYXRlLCBvcHRzLmlzVVRDKSAlIDEwMCkudG9TdHJpbmcoMTApO1xuICB9KTtcblxuICBhZGRGb3JtYXRUb2tlbihudWxsLCBbJ1lZWVknLCA0LCBmYWxzZV0sIG51bGwsIGdldFllYXIpO1xuICBhZGRGb3JtYXRUb2tlbihudWxsLCBbJ1lZWVlZJywgNSwgZmFsc2VdLCBudWxsLCBnZXRZZWFyKTtcbiAgYWRkRm9ybWF0VG9rZW4obnVsbCwgWydZWVlZWVknLCA2LCB0cnVlXSwgbnVsbCwgZ2V0WWVhcik7XG5cbiAgLy8gQUxJQVNFU1xuXG4gIGFkZFVuaXRBbGlhcygneWVhcicsICd5Jyk7XG5cbiAgLy8gUFJJT1JJVElFU1xuXG4gIGFkZFVuaXRQcmlvcml0eSgneWVhcicsIDEpO1xuXG4gIC8vIFBBUlNJTkdcblxuICBhZGRSZWdleFRva2VuKCdZJywgbWF0Y2hTaWduZWQpO1xuICBhZGRSZWdleFRva2VuKCdZWScsIG1hdGNoMXRvMiwgbWF0Y2gyKTtcbiAgYWRkUmVnZXhUb2tlbignWVlZWScsIG1hdGNoMXRvNCwgbWF0Y2g0KTtcbiAgYWRkUmVnZXhUb2tlbignWVlZWVknLCBtYXRjaDF0bzYsIG1hdGNoNik7XG4gIGFkZFJlZ2V4VG9rZW4oJ1lZWVlZWScsIG1hdGNoMXRvNiwgbWF0Y2g2KTtcblxuICBhZGRQYXJzZVRva2VuKFsnWVlZWVknLCAnWVlZWVlZJ10sIFlFQVIpO1xuICBhZGRQYXJzZVRva2VuKCdZWVlZJywgZnVuY3Rpb24gKGlucHV0LCBhcnJheSwgY29uZmlnKSB7XG4gICAgYXJyYXlbWUVBUl0gPSBpbnB1dC5sZW5ndGggPT09IDIgPyBwYXJzZVR3b0RpZ2l0WWVhcihpbnB1dCkgOiB0b0ludChpbnB1dCk7XG5cbiAgICByZXR1cm4gY29uZmlnO1xuICB9KTtcbiAgYWRkUGFyc2VUb2tlbignWVknLCBmdW5jdGlvbiAoaW5wdXQsIGFycmF5LCBjb25maWcpIHtcbiAgICBhcnJheVtZRUFSXSA9IHBhcnNlVHdvRGlnaXRZZWFyKGlucHV0KTtcblxuICAgIHJldHVybiBjb25maWc7XG4gIH0pO1xuICBhZGRQYXJzZVRva2VuKCdZJywgZnVuY3Rpb24gKGlucHV0LCBhcnJheSwgY29uZmlnKSB7XG4gICAgYXJyYXlbWUVBUl0gPSBwYXJzZUludChpbnB1dCwgMTApO1xuXG4gICAgcmV0dXJuIGNvbmZpZztcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVR3b0RpZ2l0WWVhcihpbnB1dDogc3RyaW5nKTogbnVtYmVyIHtcbiAgcmV0dXJuIHRvSW50KGlucHV0KSArICh0b0ludChpbnB1dCkgPiA2OCA/IDE5MDAgOiAyMDAwKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRheXNJblllYXIoeWVhcjogbnVtYmVyKTogbnVtYmVyIHtcbiAgcmV0dXJuIGlzTGVhcFllYXIoeWVhcikgPyAzNjYgOiAzNjU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0xlYXBZZWFyKHllYXI6IG51bWJlcik6IGJvb2xlYW4ge1xuICByZXR1cm4gKHllYXIgJSA0ID09PSAwICYmIHllYXIgJSAxMDAgIT09IDApIHx8IHllYXIgJSA0MDAgPT09IDA7XG59XG4iLCJpbXBvcnQgeyBhZGRGb3JtYXRUb2tlbiB9IGZyb20gJy4uL2Zvcm1hdC9mb3JtYXQnO1xuaW1wb3J0IHsgaXNMZWFwWWVhciB9IGZyb20gJy4veWVhcic7XG5pbXBvcnQgeyBtb2QgfSBmcm9tICcuLi91dGlscyc7XG5pbXBvcnQgeyBnZXRNb250aCB9IGZyb20gJy4uL3V0aWxzL2RhdGUtZ2V0dGVycyc7XG5pbXBvcnQgeyBhZGRSZWdleFRva2VuLCBtYXRjaDF0bzIsIG1hdGNoMiB9IGZyb20gJy4uL3BhcnNlL3JlZ2V4JztcbmltcG9ydCB7IGFkZFBhcnNlVG9rZW4gfSBmcm9tICcuLi9wYXJzZS90b2tlbic7XG5pbXBvcnQgeyBNT05USCB9IGZyb20gJy4vY29uc3RhbnRzJztcbmltcG9ydCB7IHRvSW50IH0gZnJvbSAnLi4vdXRpbHMvdHlwZS1jaGVja3MnO1xuaW1wb3J0IHsgYWRkVW5pdFByaW9yaXR5IH0gZnJvbSAnLi9wcmlvcml0aWVzJztcbmltcG9ydCB7IGFkZFVuaXRBbGlhcyB9IGZyb20gJy4vYWxpYXNlcyc7XG5pbXBvcnQgeyBnZXRQYXJzaW5nRmxhZ3MgfSBmcm9tICcuLi9jcmVhdGUvcGFyc2luZy1mbGFncyc7XG5pbXBvcnQgeyBEYXRlUGFyc2luZ0NvbmZpZyB9IGZyb20gJy4uL2NyZWF0ZS9wYXJzaW5nLnR5cGVzJztcbmltcG9ydCB7IERhdGVBcnJheSwgRGF0ZUZvcm1hdHRlck9wdGlvbnMgfSBmcm9tICcuLi90eXBlcyc7XG5cbi8vIHRvZG86IHRoaXMgaXMgZHVwbGljYXRlLCBzb3VyY2UgaW4gZGF0ZS1nZXR0ZXJzLnRzXG5leHBvcnQgZnVuY3Rpb24gZGF5c0luTW9udGgoeWVhcjogbnVtYmVyLCBtb250aDogbnVtYmVyKTogbnVtYmVyIHtcbiAgaWYgKGlzTmFOKHllYXIpIHx8IGlzTmFOKG1vbnRoKSkge1xuICAgIHJldHVybiBOYU47XG4gIH1cbiAgY29uc3QgbW9kTW9udGggPSBtb2QobW9udGgsIDEyKTtcbiAgY29uc3QgX3llYXIgPSB5ZWFyICsgKG1vbnRoIC0gbW9kTW9udGgpIC8gMTI7XG5cbiAgcmV0dXJuIG1vZE1vbnRoID09PSAxXG4gICAgPyBpc0xlYXBZZWFyKF95ZWFyKSA/IDI5IDogMjhcbiAgICA6ICgzMSAtIG1vZE1vbnRoICUgNyAlIDIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5pdE1vbnRoKCkge1xuLy8gRk9STUFUVElOR1xuXG4gIGFkZEZvcm1hdFRva2VuKCdNJywgWydNTScsIDIsIGZhbHNlXSwgJ01vJyxcbiAgICBmdW5jdGlvbihkYXRlOiBEYXRlLCBvcHRzOiBEYXRlRm9ybWF0dGVyT3B0aW9ucyk6IHN0cmluZyB7XG4gICAgICByZXR1cm4gKGdldE1vbnRoKGRhdGUsIG9wdHMuaXNVVEMpICsgMSkudG9TdHJpbmcoMTApO1xuICAgIH1cbiAgKTtcblxuICBhZGRGb3JtYXRUb2tlbignTU1NJywgbnVsbCwgbnVsbCxcbiAgICBmdW5jdGlvbihkYXRlOiBEYXRlLCBvcHRzOiBEYXRlRm9ybWF0dGVyT3B0aW9ucyk6IHN0cmluZyB7XG4gICAgICByZXR1cm4gb3B0cy5sb2NhbGUubW9udGhzU2hvcnQoZGF0ZSwgb3B0cy5mb3JtYXQsIG9wdHMuaXNVVEMpO1xuICAgIH1cbiAgKTtcblxuICBhZGRGb3JtYXRUb2tlbignTU1NTScsIG51bGwsIG51bGwsXG4gICAgZnVuY3Rpb24oZGF0ZTogRGF0ZSwgb3B0czogRGF0ZUZvcm1hdHRlck9wdGlvbnMpOiBzdHJpbmcge1xuICAgICAgcmV0dXJuIG9wdHMubG9jYWxlLm1vbnRocyhkYXRlLCBvcHRzLmZvcm1hdCwgb3B0cy5pc1VUQyk7XG4gICAgfVxuICApO1xuXG5cbi8vIEFMSUFTRVNcblxuICBhZGRVbml0QWxpYXMoJ21vbnRoJywgJ00nKTtcblxuLy8gUFJJT1JJVFlcblxuICBhZGRVbml0UHJpb3JpdHkoJ21vbnRoJywgOCk7XG5cbi8vIFBBUlNJTkdcblxuICBhZGRSZWdleFRva2VuKCdNJywgbWF0Y2gxdG8yKTtcbiAgYWRkUmVnZXhUb2tlbignTU0nLCBtYXRjaDF0bzIsIG1hdGNoMik7XG4gIGFkZFJlZ2V4VG9rZW4oJ01NTScsIGZ1bmN0aW9uKGlzU3RyaWN0LCBsb2NhbGUpIHtcbiAgICByZXR1cm4gbG9jYWxlLm1vbnRoc1Nob3J0UmVnZXgoaXNTdHJpY3QpO1xuICB9KTtcbiAgYWRkUmVnZXhUb2tlbignTU1NTScsIGZ1bmN0aW9uKGlzU3RyaWN0LCBsb2NhbGUpIHtcbiAgICByZXR1cm4gbG9jYWxlLm1vbnRoc1JlZ2V4KGlzU3RyaWN0KTtcbiAgfSk7XG5cbiAgYWRkUGFyc2VUb2tlbihbJ00nLCAnTU0nXSwgZnVuY3Rpb24oaW5wdXQ6IHN0cmluZywgYXJyYXk6IERhdGVBcnJheSwgY29uZmlnOiBEYXRlUGFyc2luZ0NvbmZpZyk6IERhdGVQYXJzaW5nQ29uZmlnIHtcbiAgICBhcnJheVtNT05USF0gPSB0b0ludChpbnB1dCkgLSAxO1xuXG4gICAgcmV0dXJuIGNvbmZpZztcbiAgfSk7XG5cbiAgYWRkUGFyc2VUb2tlbihcbiAgICBbJ01NTScsICdNTU1NJ10sXG4gICAgZnVuY3Rpb24oaW5wdXQ6IHN0cmluZywgYXJyYXk6IERhdGVBcnJheSwgY29uZmlnOiBEYXRlUGFyc2luZ0NvbmZpZywgdG9rZW46IHN0cmluZyk6IERhdGVQYXJzaW5nQ29uZmlnIHtcbiAgICAgIGNvbnN0IG1vbnRoID0gY29uZmlnLl9sb2NhbGUubW9udGhzUGFyc2UoaW5wdXQsIHRva2VuLCBjb25maWcuX3N0cmljdCk7XG4gICAgICAvLyBpZiB3ZSBkaWRuJ3QgZmluZCBhIG1vbnRoIG5hbWUsIG1hcmsgdGhlIGRhdGUgYXMgaW52YWxpZC5cbiAgICAgIGlmIChtb250aCAhPSBudWxsKSB7XG4gICAgICAgIGFycmF5W01PTlRIXSA9IG1vbnRoO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZykuaW52YWxpZE1vbnRoID0gISFpbnB1dDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbmZpZztcbiAgICB9XG4gICk7XG59XG4iLCJpbXBvcnQgeyBUaW1lVW5pdCB9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7IGRheXNJbk1vbnRoIH0gZnJvbSAnLi4vdW5pdHMvbW9udGgnO1xuaW1wb3J0IHsgaXNOdW1iZXIgfSBmcm9tICcuL3R5cGUtY2hlY2tzJztcbmltcG9ydCB7IGdldERhdGUsIGdldEZ1bGxZZWFyLCBnZXRNb250aCB9IGZyb20gJy4vZGF0ZS1nZXR0ZXJzJztcbmltcG9ydCB7IGlzTGVhcFllYXIgfSBmcm9tICcuLi91bml0cy95ZWFyJztcbmltcG9ydCB7IGNyZWF0ZURhdGUgfSBmcm9tICcuLi9jcmVhdGUvZGF0ZS1mcm9tLWFycmF5JztcblxuY29uc3QgZGVmYXVsdFRpbWVVbml0OiBUaW1lVW5pdCA9IHtcbiAgeWVhcjogMCxcbiAgbW9udGg6IDAsXG4gIGRheTogMCxcbiAgaG91cjogMCxcbiAgbWludXRlOiAwLFxuICBzZWNvbmRzOiAwXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gc2hpZnREYXRlKGRhdGU6IERhdGUsIHVuaXQ6IFRpbWVVbml0KTogRGF0ZSB7XG4gIGNvbnN0IF91bml0ID0gT2JqZWN0LmFzc2lnbih7fSwgZGVmYXVsdFRpbWVVbml0LCB1bml0KTtcbiAgY29uc3QgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKSArIChfdW5pdC55ZWFyIHx8IDApO1xuICBjb25zdCBtb250aCA9IGRhdGUuZ2V0TW9udGgoKSArIChfdW5pdC5tb250aCB8fCAwKTtcbiAgbGV0IGRheSA9IGRhdGUuZ2V0RGF0ZSgpICsgKF91bml0LmRheSB8fCAwKTtcbiAgaWYgKF91bml0Lm1vbnRoICYmICFfdW5pdC5kYXkpIHtcbiAgICBkYXkgPSBNYXRoLm1pbihkYXksIGRheXNJbk1vbnRoKHllYXIsIG1vbnRoKSk7XG4gIH1cblxuICByZXR1cm4gY3JlYXRlRGF0ZShcbiAgICB5ZWFyLFxuICAgIG1vbnRoLFxuICAgIGRheSxcbiAgICBkYXRlLmdldEhvdXJzKCkgKyAoX3VuaXQuaG91ciB8fCAwKSxcbiAgICBkYXRlLmdldE1pbnV0ZXMoKSArIChfdW5pdC5taW51dGUgfHwgMCksXG4gICAgZGF0ZS5nZXRTZWNvbmRzKCkgKyAoX3VuaXQuc2Vjb25kcyB8fCAwKVxuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0RnVsbERhdGUoZGF0ZTogRGF0ZSwgdW5pdDogVGltZVVuaXQpOiBEYXRlIHtcbiAgcmV0dXJuIGNyZWF0ZURhdGUoXG4gICAgZ2V0TnVtKGRhdGUuZ2V0RnVsbFllYXIoKSwgdW5pdC55ZWFyKSxcbiAgICBnZXROdW0oZGF0ZS5nZXRNb250aCgpLCB1bml0Lm1vbnRoKSxcbiAgICBnZXROdW0oZGF0ZS5nZXREYXRlKCksIHVuaXQuZGF5KSxcbiAgICBnZXROdW0oZGF0ZS5nZXRIb3VycygpLCB1bml0LmhvdXIpLFxuICAgIGdldE51bShkYXRlLmdldE1pbnV0ZXMoKSwgdW5pdC5taW51dGUpLFxuICAgIGdldE51bShkYXRlLmdldFNlY29uZHMoKSwgdW5pdC5zZWNvbmRzKSxcbiAgICBnZXROdW0oZGF0ZS5nZXRNaWxsaXNlY29uZHMoKSwgdW5pdC5taWxsaXNlY29uZHMpXG4gICk7XG59XG5cbmZ1bmN0aW9uIGdldE51bShkZWY6IG51bWJlciwgbnVtPzogbnVtYmVyKTogbnVtYmVyIHtcbiAgcmV0dXJuIGlzTnVtYmVyKG51bSkgPyBudW0gOiBkZWY7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRGdWxsWWVhcihkYXRlOiBEYXRlLCB2YWx1ZTogbnVtYmVyLCBpc1VUQz86IGJvb2xlYW4pOiBEYXRlIHtcbiAgY29uc3QgX21vbnRoID0gZ2V0TW9udGgoZGF0ZSwgaXNVVEMpO1xuICBjb25zdCBfZGF0ZSA9IGdldERhdGUoZGF0ZSwgaXNVVEMpO1xuICBjb25zdCBfeWVhciA9IGdldEZ1bGxZZWFyKGRhdGUsIGlzVVRDKTtcbiAgaWYgKGlzTGVhcFllYXIoX3llYXIpICYmIF9tb250aCA9PT0gMSAmJiBfZGF0ZSA9PT0gMjkpIHtcbiAgICBjb25zdCBfZGF5c0luTW9udGggPSBkYXlzSW5Nb250aCh2YWx1ZSwgX21vbnRoKTtcbiAgICBpc1VUQyA/IGRhdGUuc2V0VVRDRnVsbFllYXIodmFsdWUsIF9tb250aCwgX2RheXNJbk1vbnRoKSA6IGRhdGUuc2V0RnVsbFllYXIodmFsdWUsIF9tb250aCwgX2RheXNJbk1vbnRoKTtcbiAgfVxuXG4gIGlzVVRDID8gZGF0ZS5zZXRVVENGdWxsWWVhcih2YWx1ZSkgOiBkYXRlLnNldEZ1bGxZZWFyKHZhbHVlKTtcblxuICByZXR1cm4gZGF0ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldE1vbnRoKGRhdGU6IERhdGUsIHZhbHVlOiBudW1iZXIsIGlzVVRDPzogYm9vbGVhbik6IERhdGUge1xuICBjb25zdCBkYXlPZk1vbnRoID0gTWF0aC5taW4oZ2V0RGF0ZShkYXRlKSwgZGF5c0luTW9udGgoZ2V0RnVsbFllYXIoZGF0ZSksIHZhbHVlKSk7XG4gIGlzVVRDID8gZGF0ZS5zZXRVVENNb250aCh2YWx1ZSwgZGF5T2ZNb250aCkgOiBkYXRlLnNldE1vbnRoKHZhbHVlLCBkYXlPZk1vbnRoKTtcblxuICByZXR1cm4gZGF0ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldERheShkYXRlOiBEYXRlLCB2YWx1ZTogbnVtYmVyLCBpc1VUQz86IGJvb2xlYW4pOiBEYXRlIHtcbiAgaXNVVEMgPyBkYXRlLnNldFVUQ0RhdGUodmFsdWUpIDogZGF0ZS5zZXREYXRlKHZhbHVlKTtcblxuICByZXR1cm4gZGF0ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldEhvdXJzKGRhdGU6IERhdGUsIHZhbHVlOiBudW1iZXIsIGlzVVRDPzogYm9vbGVhbik6IERhdGUge1xuICBpc1VUQyA/IGRhdGUuc2V0VVRDSG91cnModmFsdWUpIDogZGF0ZS5zZXRIb3Vycyh2YWx1ZSk7XG5cbiAgcmV0dXJuIGRhdGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRNaW51dGVzKGRhdGU6IERhdGUsIHZhbHVlOiBudW1iZXIsIGlzVVRDPzogYm9vbGVhbik6IERhdGUge1xuICBpc1VUQyA/IGRhdGUuc2V0VVRDTWludXRlcyh2YWx1ZSkgOiBkYXRlLnNldE1pbnV0ZXModmFsdWUpO1xuXG4gIHJldHVybiBkYXRlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0U2Vjb25kcyhkYXRlOiBEYXRlLCB2YWx1ZTogbnVtYmVyLCBpc1VUQz86IGJvb2xlYW4pOiBEYXRlIHtcbiAgaXNVVEMgPyBkYXRlLnNldFVUQ1NlY29uZHModmFsdWUpIDogZGF0ZS5zZXRTZWNvbmRzKHZhbHVlKTtcblxuICByZXR1cm4gZGF0ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldE1pbGxpc2Vjb25kcyhkYXRlOiBEYXRlLCB2YWx1ZTogbnVtYmVyLCBpc1VUQz86IGJvb2xlYW4pOiBEYXRlIHtcbiAgaXNVVEMgPyBkYXRlLnNldFVUQ01pbGxpc2Vjb25kcyh2YWx1ZSkgOiBkYXRlLnNldE1pbGxpc2Vjb25kcyh2YWx1ZSk7XG5cbiAgcmV0dXJuIGRhdGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXREYXRlKGRhdGU6IERhdGUsIHZhbHVlOiBudW1iZXIsIGlzVVRDPzogYm9vbGVhbik6IERhdGUge1xuICBpc1VUQyA/IGRhdGUuc2V0VVRDRGF0ZSh2YWx1ZSkgOiBkYXRlLnNldERhdGUodmFsdWUpO1xuXG4gIHJldHVybiBkYXRlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0VGltZShkYXRlOiBEYXRlLCB2YWx1ZTogbnVtYmVyKTogRGF0ZSB7XG4gIGRhdGUuc2V0VGltZSh2YWx1ZSk7XG5cbiAgcmV0dXJuIGRhdGU7XG59XG4iLCIvLyBmYXN0ZXN0IHdheSB0byBjbG9uZSBkYXRlXG4vLyBodHRwczovL2pzcGVyZi5jb20vY2xvbmUtZGF0ZS1vYmplY3QyXG5leHBvcnQgZnVuY3Rpb24gY2xvbmVEYXRlKGRhdGU6IERhdGUpOiBEYXRlIHtcbiAgcmV0dXJuIG5ldyBEYXRlKGRhdGUuZ2V0VGltZSgpKTtcbn1cbiIsIi8vIHRzbGludDpkaXNhYmxlOiBzd2l0Y2gtZGVmYXVsdFxuaW1wb3J0IHsgVGltZVVuaXQsIFVuaXRPZlRpbWUgfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQge1xuICBzZXREYXRlLCBzZXRGdWxsRGF0ZSwgc2V0SG91cnMsIHNldE1pbGxpc2Vjb25kcywgc2V0TWludXRlcywgc2V0TW9udGgsIHNldFNlY29uZHMsXG4gIHNoaWZ0RGF0ZVxufSBmcm9tICcuL2RhdGUtc2V0dGVycyc7XG5pbXBvcnQgeyBjbG9uZURhdGUgfSBmcm9tICcuLi9jcmVhdGUvY2xvbmUnO1xuaW1wb3J0IHsgc2V0SVNPRGF5T2ZXZWVrLCBzZXRMb2NhbGVEYXlPZldlZWsgfSBmcm9tICcuLi91bml0cy9kYXktb2Ytd2Vlayc7XG5pbXBvcnQgeyBnZXRNb250aCB9IGZyb20gJy4vZGF0ZS1nZXR0ZXJzJztcbmltcG9ydCB7IGFkZCwgc3VidHJhY3QgfSBmcm9tICcuLi9tb21lbnQvYWRkLXN1YnRyYWN0JztcblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0T2YoZGF0ZTogRGF0ZSwgdW5pdDogVW5pdE9mVGltZSwgaXNVVEM/OiBib29sZWFuKTogRGF0ZSB7XG4gIGNvbnN0IF9kYXRlID0gY2xvbmVEYXRlKGRhdGUpO1xuICAvLyB0aGUgZm9sbG93aW5nIHN3aXRjaCBpbnRlbnRpb25hbGx5IG9taXRzIGJyZWFrIGtleXdvcmRzXG4gIC8vIHRvIHV0aWxpemUgZmFsbGluZyB0aHJvdWdoIHRoZSBjYXNlcy5cbiAgc3dpdGNoICh1bml0KSB7XG4gICAgY2FzZSAneWVhcic6XG4gICAgICBzZXRNb250aChfZGF0ZSwgMCwgaXNVVEMpO1xuICAgIC8qIGZhbGxzIHRocm91Z2ggKi9cbiAgICBjYXNlICdxdWFydGVyJzpcbiAgICBjYXNlICdtb250aCc6XG4gICAgICBzZXREYXRlKF9kYXRlLCAxLCBpc1VUQyk7XG4gICAgLyogZmFsbHMgdGhyb3VnaCAqL1xuICAgIGNhc2UgJ3dlZWsnOlxuICAgIGNhc2UgJ2lzb1dlZWsnOlxuICAgIGNhc2UgJ2RheSc6XG4gICAgY2FzZSAnZGF0ZSc6XG4gICAgICBzZXRIb3VycyhfZGF0ZSwgMCwgaXNVVEMpO1xuICAgIC8qIGZhbGxzIHRocm91Z2ggKi9cbiAgICBjYXNlICdob3Vycyc6XG4gICAgICBzZXRNaW51dGVzKF9kYXRlLCAwLCBpc1VUQyk7XG4gICAgLyogZmFsbHMgdGhyb3VnaCAqL1xuICAgIGNhc2UgJ21pbnV0ZXMnOlxuICAgICAgc2V0U2Vjb25kcyhfZGF0ZSwgMCwgaXNVVEMpO1xuICAgIC8qIGZhbGxzIHRocm91Z2ggKi9cbiAgICBjYXNlICdzZWNvbmRzJzpcbiAgICAgIHNldE1pbGxpc2Vjb25kcyhfZGF0ZSwgMCwgaXNVVEMpO1xuICB9XG5cbiAgLy8gd2Vla3MgYXJlIGEgc3BlY2lhbCBjYXNlXG4gIGlmICh1bml0ID09PSAnd2VlaycpIHtcbiAgICBzZXRMb2NhbGVEYXlPZldlZWsoX2RhdGUsIDAsIHtpc1VUQ30pO1xuICB9XG4gIGlmICh1bml0ID09PSAnaXNvV2VlaycpIHtcbiAgICBzZXRJU09EYXlPZldlZWsoX2RhdGUsIDEpO1xuICB9XG5cbiAgLy8gcXVhcnRlcnMgYXJlIGFsc28gc3BlY2lhbFxuICBpZiAodW5pdCA9PT0gJ3F1YXJ0ZXInKSB7XG4gICAgc2V0TW9udGgoX2RhdGUsIE1hdGguZmxvb3IoZ2V0TW9udGgoX2RhdGUsIGlzVVRDKSAvIDMpICogMywgaXNVVEMpO1xuICB9XG5cbiAgcmV0dXJuIF9kYXRlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZW5kT2YoZGF0ZTogRGF0ZSwgdW5pdDogVW5pdE9mVGltZSwgaXNVVEM/OiBib29sZWFuKTogRGF0ZSB7XG4gIGxldCBfdW5pdCA9IHVuaXQ7XG4gIC8vICdkYXRlJyBpcyBhbiBhbGlhcyBmb3IgJ2RheScsIHNvIGl0IHNob3VsZCBiZSBjb25zaWRlcmVkIGFzIHN1Y2guXG4gIGlmIChfdW5pdCA9PT0gJ2RhdGUnKSB7XG4gICAgX3VuaXQgPSAnZGF5JztcbiAgfVxuXG4gIGNvbnN0IHN0YXJ0ID0gc3RhcnRPZihkYXRlLCBfdW5pdCwgaXNVVEMpO1xuICBjb25zdCBfc3RlcCA9IGFkZChzdGFydCwgMSwgX3VuaXQgPT09ICdpc29XZWVrJyA/ICd3ZWVrJyA6IF91bml0LCBpc1VUQyk7XG4gIGNvbnN0IHJlcyA9IHN1YnRyYWN0KF9zdGVwLCAxLCAnbWlsbGlzZWNvbmRzJywgaXNVVEMpO1xuXG4gIHJldHVybiByZXM7XG59XG4iLCJpbXBvcnQgeyBhZGRGb3JtYXRUb2tlbiB9IGZyb20gJy4uL2Zvcm1hdC9mb3JtYXQnO1xuaW1wb3J0IHsgc3RhcnRPZiB9IGZyb20gJy4uL3V0aWxzL3N0YXJ0LWVuZC1vZic7XG5pbXBvcnQgeyBhZGRSZWdleFRva2VuLCBtYXRjaDF0bzMsIG1hdGNoMyB9IGZyb20gJy4uL3BhcnNlL3JlZ2V4JztcbmltcG9ydCB7IGFkZFBhcnNlVG9rZW4gfSBmcm9tICcuLi9wYXJzZS90b2tlbic7XG5pbXBvcnQgeyBhZGRVbml0UHJpb3JpdHkgfSBmcm9tICcuL3ByaW9yaXRpZXMnO1xuaW1wb3J0IHsgYWRkVW5pdEFsaWFzIH0gZnJvbSAnLi9hbGlhc2VzJztcbmltcG9ydCB7IERhdGVBcnJheSwgRGF0ZUZvcm1hdHRlck9wdGlvbnMgfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBEYXRlUGFyc2luZ0NvbmZpZyB9IGZyb20gJy4uL2NyZWF0ZS9wYXJzaW5nLnR5cGVzJztcbmltcG9ydCB7IHRvSW50IH0gZnJvbSAnLi4vdXRpbHMvdHlwZS1jaGVja3MnO1xuaW1wb3J0IHsgYWRkIH0gZnJvbSAnLi4vbW9tZW50L2FkZC1zdWJ0cmFjdCc7XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGluaXREYXlPZlllYXIoKSB7XG4vLyBGT1JNQVRUSU5HXG5cbiAgYWRkRm9ybWF0VG9rZW4oJ0RERCcsIFsnRERERCcsIDMsIGZhbHNlXSwgJ0RERG8nLFxuICAgIGZ1bmN0aW9uKGRhdGU6IERhdGUpOiBzdHJpbmcge1xuICAgICAgcmV0dXJuIGdldERheU9mWWVhcihkYXRlKVxuICAgICAgICAudG9TdHJpbmcoMTApO1xuICAgIH1cbiAgKTtcblxuXG4vLyBBTElBU0VTXG5cbiAgYWRkVW5pdEFsaWFzKCdkYXlPZlllYXInLCAnREREJyk7XG5cbi8vIFBSSU9SSVRZXG5cbiAgYWRkVW5pdFByaW9yaXR5KCdkYXlPZlllYXInLCA0KTtcblxuICBhZGRSZWdleFRva2VuKCdEREQnLCBtYXRjaDF0bzMpO1xuICBhZGRSZWdleFRva2VuKCdEREREJywgbWF0Y2gzKTtcbiAgYWRkUGFyc2VUb2tlbihcbiAgICBbJ0RERCcsICdEREREJ10sXG4gICAgZnVuY3Rpb24oaW5wdXQ6IHN0cmluZywgYXJyYXk6IERhdGVBcnJheSwgY29uZmlnOiBEYXRlUGFyc2luZ0NvbmZpZyk6IERhdGVQYXJzaW5nQ29uZmlnIHtcbiAgICAgIGNvbmZpZy5fZGF5T2ZZZWFyID0gdG9JbnQoaW5wdXQpO1xuXG4gICAgICByZXR1cm4gY29uZmlnO1xuICAgIH1cbiAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERheU9mWWVhcihkYXRlOiBEYXRlLCBpc1VUQz86IGJvb2xlYW4pOiBudW1iZXIge1xuICBjb25zdCBkYXRlMSA9ICtzdGFydE9mKGRhdGUsICdkYXknLCBpc1VUQyk7XG4gIGNvbnN0IGRhdGUyID0gK3N0YXJ0T2YoZGF0ZSwgJ3llYXInLCBpc1VUQyk7XG4gIGNvbnN0IHNvbWVEYXRlID0gZGF0ZTEgLSBkYXRlMjtcbiAgY29uc3Qgb25lRGF5ID0gMTAwMCAqIDYwICogNjAgKiAyNDtcblxuICByZXR1cm4gTWF0aC5yb3VuZChzb21lRGF0ZSAvIG9uZURheSkgKyAxO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0RGF5T2ZZZWFyKGRhdGU6IERhdGUsIGlucHV0OiBudW1iZXIpOiBEYXRlIHtcbiAgY29uc3QgZGF5T2ZZZWFyID0gZ2V0RGF5T2ZZZWFyKGRhdGUpO1xuXG4gIHJldHVybiBhZGQoZGF0ZSwgKGlucHV0IC0gZGF5T2ZZZWFyKSwgJ2RheScpO1xufVxuIiwiLyoqXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IHllYXJcbiAqIEBwYXJhbSB7bnVtYmVyfSBkb3cgLSBzdGFydC1vZi1maXJzdC13ZWVrXG4gKiBAcGFyYW0ge251bWJlcn0gZG95IC0gc3RhcnQtb2YteWVhclxuICogQHJldHVybnMge251bWJlcn1cbiAqL1xuaW1wb3J0IHsgY3JlYXRlVVRDRGF0ZSB9IGZyb20gJy4uL2NyZWF0ZS9kYXRlLWZyb20tYXJyYXknO1xuaW1wb3J0IHsgZGF5c0luWWVhciB9IGZyb20gJy4veWVhcic7XG5pbXBvcnQgeyBnZXREYXlPZlllYXIgfSBmcm9tICcuL2RheS1vZi15ZWFyJztcbmltcG9ydCB7IGdldEZ1bGxZZWFyIH0gZnJvbSAnLi4vdXRpbHMvZGF0ZS1nZXR0ZXJzJztcblxuZnVuY3Rpb24gZmlyc3RXZWVrT2Zmc2V0KHllYXI6IG51bWJlciwgZG93OiBudW1iZXIsIGRveTogbnVtYmVyKTogbnVtYmVyIHtcbiAgLy8gZmlyc3Qtd2VlayBkYXkgLS0gd2hpY2ggamFudWFyeSBpcyBhbHdheXMgaW4gdGhlIGZpcnN0IHdlZWsgKDQgZm9yIGlzbywgMSBmb3Igb3RoZXIpXG4gIGNvbnN0IGZ3ZCA9IGRvdyAtIGRveSArIDc7XG4gIC8vIGZpcnN0LXdlZWsgZGF5IGxvY2FsIHdlZWtkYXkgLS0gd2hpY2ggbG9jYWwgd2Vla2RheSBpcyBmd2RcbiAgY29uc3QgZndkbHcgPSAoY3JlYXRlVVRDRGF0ZSh5ZWFyLCAwLCBmd2QpLmdldFVUQ0RheSgpIC0gZG93ICsgNykgJSA3O1xuXG4gIHJldHVybiAtZndkbHcgKyBmd2QgLSAxO1xufVxuXG4vLyBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fd2Vla19kYXRlI0NhbGN1bGF0aW5nX2FfZGF0ZV9naXZlbl90aGVfeWVhci4yQ193ZWVrX251bWJlcl9hbmRfd2Vla2RheVxuZXhwb3J0IGZ1bmN0aW9uIGRheU9mWWVhckZyb21XZWVrcyhcbiAgeWVhcjogbnVtYmVyLFxuICB3ZWVrOiBudW1iZXIsXG4gIHdlZWtkYXk6IG51bWJlcixcbiAgZG93OiBudW1iZXIsXG4gIGRveTogbnVtYmVyXG4pOiB7IHllYXI6IG51bWJlcjsgZGF5T2ZZZWFyOiBudW1iZXIgfSB7XG4gIGNvbnN0IGxvY2FsV2Vla2RheSA9ICg3ICsgd2Vla2RheSAtIGRvdykgJSA3O1xuICBjb25zdCB3ZWVrT2Zmc2V0ID0gZmlyc3RXZWVrT2Zmc2V0KHllYXIsIGRvdywgZG95KTtcbiAgY29uc3QgZGF5T2ZZZWFyID0gMSArIDcgKiAod2VlayAtIDEpICsgbG9jYWxXZWVrZGF5ICsgd2Vla09mZnNldDtcbiAgbGV0IHJlc1llYXI6IG51bWJlcjtcbiAgbGV0IHJlc0RheU9mWWVhcjogbnVtYmVyO1xuXG4gIGlmIChkYXlPZlllYXIgPD0gMCkge1xuICAgIHJlc1llYXIgPSB5ZWFyIC0gMTtcbiAgICByZXNEYXlPZlllYXIgPSBkYXlzSW5ZZWFyKHJlc1llYXIpICsgZGF5T2ZZZWFyO1xuICB9IGVsc2UgaWYgKGRheU9mWWVhciA+IGRheXNJblllYXIoeWVhcikpIHtcbiAgICByZXNZZWFyID0geWVhciArIDE7XG4gICAgcmVzRGF5T2ZZZWFyID0gZGF5T2ZZZWFyIC0gZGF5c0luWWVhcih5ZWFyKTtcbiAgfSBlbHNlIHtcbiAgICByZXNZZWFyID0geWVhcjtcbiAgICByZXNEYXlPZlllYXIgPSBkYXlPZlllYXI7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHllYXI6IHJlc1llYXIsXG4gICAgZGF5T2ZZZWFyOiByZXNEYXlPZlllYXJcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHdlZWtPZlllYXIoZGF0ZTogRGF0ZSwgZG93OiBudW1iZXIsIGRveTogbnVtYmVyLCBpc1VUQz86IGJvb2xlYW4pOiB7IHdlZWs6IG51bWJlcjsgeWVhcjogbnVtYmVyIH0ge1xuICBjb25zdCB3ZWVrT2Zmc2V0ID0gZmlyc3RXZWVrT2Zmc2V0KGdldEZ1bGxZZWFyKGRhdGUsIGlzVVRDKSwgZG93LCBkb3kpO1xuICBjb25zdCB3ZWVrID0gTWF0aC5mbG9vcigoZ2V0RGF5T2ZZZWFyKGRhdGUsIGlzVVRDKSAtIHdlZWtPZmZzZXQgLSAxKSAvIDcpICsgMTtcbiAgbGV0IHJlc1dlZWs6IG51bWJlcjtcbiAgbGV0IHJlc1llYXI6IG51bWJlcjtcblxuICBpZiAod2VlayA8IDEpIHtcbiAgICByZXNZZWFyID0gZ2V0RnVsbFllYXIoZGF0ZSwgaXNVVEMpIC0gMTtcbiAgICByZXNXZWVrID0gd2VlayArIHdlZWtzSW5ZZWFyKHJlc1llYXIsIGRvdywgZG95KTtcbiAgfSBlbHNlIGlmICh3ZWVrID4gd2Vla3NJblllYXIoZ2V0RnVsbFllYXIoZGF0ZSwgaXNVVEMpLCBkb3csIGRveSkpIHtcbiAgICByZXNXZWVrID0gd2VlayAtIHdlZWtzSW5ZZWFyKGdldEZ1bGxZZWFyKGRhdGUsIGlzVVRDKSwgZG93LCBkb3kpO1xuICAgIHJlc1llYXIgPSBnZXRGdWxsWWVhcihkYXRlLCBpc1VUQykgKyAxO1xuICB9IGVsc2Uge1xuICAgIHJlc1llYXIgPSBnZXRGdWxsWWVhcihkYXRlLCBpc1VUQyk7XG4gICAgcmVzV2VlayA9IHdlZWs7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHdlZWs6IHJlc1dlZWssXG4gICAgeWVhcjogcmVzWWVhclxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gd2Vla3NJblllYXIoeWVhcjogbnVtYmVyLCBkb3c6IG51bWJlciwgZG95OiBudW1iZXIpOiBudW1iZXIge1xuICBjb25zdCB3ZWVrT2Zmc2V0ID0gZmlyc3RXZWVrT2Zmc2V0KHllYXIsIGRvdywgZG95KTtcbiAgY29uc3Qgd2Vla09mZnNldE5leHQgPSBmaXJzdFdlZWtPZmZzZXQoeWVhciArIDEsIGRvdywgZG95KTtcblxuICByZXR1cm4gKGRheXNJblllYXIoeWVhcikgLSB3ZWVrT2Zmc2V0ICsgd2Vla09mZnNldE5leHQpIC8gNztcbn1cbiIsIi8vIHRzbGludDpkaXNhYmxlOm1heC1maWxlLWxpbmUtY291bnQgbWF4LWxpbmUtbGVuZ3RoIGN5Y2xvbWF0aWMtY29tcGxleGl0eVxuXG5pbXBvcnQgeyB3ZWVrT2ZZZWFyIH0gZnJvbSAnLi4vdW5pdHMvd2Vlay1jYWxlbmRhci11dGlscyc7XG5pbXBvcnQgeyBoYXNPd25Qcm9wLCBpc0FycmF5LCBpc0Z1bmN0aW9uIH0gZnJvbSAnLi4vdXRpbHMvdHlwZS1jaGVja3MnO1xuaW1wb3J0IHsgZ2V0RGF5LCBnZXRNb250aCB9IGZyb20gJy4uL3V0aWxzL2RhdGUtZ2V0dGVycyc7XG5pbXBvcnQgeyBtYXRjaFdvcmQsIHJlZ2V4RXNjYXBlIH0gZnJvbSAnLi4vcGFyc2UvcmVnZXgnO1xuaW1wb3J0IHsgc2V0RGF5T2ZXZWVrIH0gZnJvbSAnLi4vdW5pdHMvZGF5LW9mLXdlZWsnO1xuXG5leHBvcnQgaW50ZXJmYWNlIExvY2FsZU9wdGlvbnNGb3JtYXQge1xuICBmb3JtYXQ6IHN0cmluZ1tdO1xuICBzdGFuZGFsb25lOiBzdHJpbmdbXTtcbiAgaXNGb3JtYXQ/OiBSZWdFeHA7XG59XG5cbmV4cG9ydCB0eXBlIExvY2FsZU9wdGlvbnMgPSBzdHJpbmdbXSB8IExvY2FsZU9wdGlvbnNGb3JtYXQ7XG5cbmNvbnN0IE1PTlRIU19JTl9GT1JNQVQgPSAvRFtvRF0/KFxcW1teXFxbXFxdXSpcXF18XFxzKStNTU1NPy87XG5leHBvcnQgY29uc3QgZGVmYXVsdExvY2FsZU1vbnRocyA9ICdKYW51YXJ5X0ZlYnJ1YXJ5X01hcmNoX0FwcmlsX01heV9KdW5lX0p1bHlfQXVndXN0X1NlcHRlbWJlcl9PY3RvYmVyX05vdmVtYmVyX0RlY2VtYmVyJy5zcGxpdChcbiAgJ18nXG4pO1xuZXhwb3J0IGNvbnN0IGRlZmF1bHRMb2NhbGVNb250aHNTaG9ydCA9ICdKYW5fRmViX01hcl9BcHJfTWF5X0p1bl9KdWxfQXVnX1NlcF9PY3RfTm92X0RlYycuc3BsaXQoXG4gICdfJ1xuKTtcbmV4cG9ydCBjb25zdCBkZWZhdWx0TG9jYWxlV2Vla2RheXMgPSAnU3VuZGF5X01vbmRheV9UdWVzZGF5X1dlZG5lc2RheV9UaHVyc2RheV9GcmlkYXlfU2F0dXJkYXknLnNwbGl0KFxuICAnXydcbik7XG5leHBvcnQgY29uc3QgZGVmYXVsdExvY2FsZVdlZWtkYXlzU2hvcnQgPSAnU3VuX01vbl9UdWVfV2VkX1RodV9GcmlfU2F0Jy5zcGxpdChcbiAgJ18nXG4pO1xuZXhwb3J0IGNvbnN0IGRlZmF1bHRMb2NhbGVXZWVrZGF5c01pbiA9ICdTdV9Nb19UdV9XZV9UaF9Gcl9TYScuc3BsaXQoJ18nKTtcbmV4cG9ydCBjb25zdCBkZWZhdWx0TG9uZ0RhdGVGb3JtYXQ6IHsgW2luZGV4OiBzdHJpbmddOiBzdHJpbmcgfSA9IHtcbiAgTFRTOiAnaDptbTpzcyBBJyxcbiAgTFQ6ICdoOm1tIEEnLFxuICBMOiAnTU0vREQvWVlZWScsXG4gIExMOiAnTU1NTSBELCBZWVlZJyxcbiAgTExMOiAnTU1NTSBELCBZWVlZIGg6bW0gQScsXG4gIExMTEw6ICdkZGRkLCBNTU1NIEQsIFlZWVkgaDptbSBBJ1xufTtcblxuZXhwb3J0IGNvbnN0IGRlZmF1bHRPcmRpbmFsID0gJyVkJztcbmV4cG9ydCBjb25zdCBkZWZhdWx0RGF5T2ZNb250aE9yZGluYWxQYXJzZSA9IC9cXGR7MSwyfS87XG5cbmNvbnN0IGRlZmF1bHRNb250aHNTaG9ydFJlZ2V4ID0gbWF0Y2hXb3JkO1xuY29uc3QgZGVmYXVsdE1vbnRoc1JlZ2V4ID0gbWF0Y2hXb3JkO1xuXG5leHBvcnQgdHlwZSBPcmRpbmFsRGF0ZUZuID0gKG51bTogbnVtYmVyLCB0b2tlbj86IHN0cmluZykgPT4gc3RyaW5nO1xuZXhwb3J0IHR5cGUgUGx1cmFsaXplRGF0ZUZuID0gKG51bTogbnVtYmVyLCB3aXRob3V0U3VmZml4OiBib29sZWFuLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT86IHN0cmluZywgaXNGdXR1cmU/OiBib29sZWFuKSA9PiBzdHJpbmc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9jYWxlRGF0YSB7XG4gIGFiYnI/OiBzdHJpbmc7XG4gIHBhcmVudExvY2FsZT86IHN0cmluZztcblxuICBtb250aHM/OiBMb2NhbGVPcHRpb25zIHwgKChkYXRlOiBEYXRlLCBmb3JtYXQ6IHN0cmluZywgaXNVVEM/OiBib29sZWFuKSA9PiBzdHJpbmcgfCBzdHJpbmdbXSk7XG4gIG1vbnRoc1Nob3J0PzogTG9jYWxlT3B0aW9ucyB8ICgoZGF0ZTogRGF0ZSwgZm9ybWF0OiBzdHJpbmcsIGlzVVRDPzogYm9vbGVhbikgPT4gc3RyaW5nIHwgc3RyaW5nW10pO1xuICBtb250aHNQYXJzZUV4YWN0PzogYm9vbGVhbjtcblxuICB3ZWVrZGF5cz86IExvY2FsZU9wdGlvbnMgfCAoKGRhdGU6IERhdGUsIGZvcm1hdDogc3RyaW5nLCBpc1VUQz86IGJvb2xlYW4pID0+IHN0cmluZyB8IHN0cmluZ1tdKTtcbiAgd2Vla2RheXNTaG9ydD86IHN0cmluZ1tdIHwgKChkYXRlOiBEYXRlLCBmb3JtYXQ6IHN0cmluZywgaXNVVEM/OiBib29sZWFuKSA9PiBzdHJpbmcgfCBzdHJpbmdbXSk7XG4gIHdlZWtkYXlzTWluPzogc3RyaW5nW10gfCAoKGRhdGU6IERhdGUsIGZvcm1hdDogc3RyaW5nLCBpc1VUQz86IGJvb2xlYW4pID0+IHN0cmluZyB8IHN0cmluZ1tdKTtcbiAgd2Vla2RheXNQYXJzZUV4YWN0PzogYm9vbGVhbjtcblxuICBsb25nRGF0ZUZvcm1hdD86IHsgW2luZGV4OiBzdHJpbmddOiBzdHJpbmcgfTtcbiAgY2FsZW5kYXI/OiB7XG4gICAgW2tleTogc3RyaW5nXTogKHN0cmluZ1xuICAgICAgfCAoKGRhdGU6IERhdGUsIG5vdz86IERhdGUpID0+IHN0cmluZylcbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgICAgfCAoKGRheU9mV2VlazogbnVtYmVyLCBpc05leHRXZWVrOiBib29sZWFuKSA9PiBzdHJpbmcpKVxuICB9O1xuICByZWxhdGl2ZVRpbWU/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB8IFBsdXJhbGl6ZURhdGVGbiB9O1xuICBkYXlPZk1vbnRoT3JkaW5hbFBhcnNlPzogUmVnRXhwO1xuICBvcmRpbmFsPzogc3RyaW5nIHwgT3JkaW5hbERhdGVGbjtcblxuICB3ZWVrPzogeyBkb3c/OiBudW1iZXI7IGRveT86IG51bWJlciB9O1xuXG4gIGludmFsaWREYXRlPzogc3RyaW5nO1xuXG4gIG1vbnRoc1JlZ2V4PzogUmVnRXhwO1xuICBtb250aHNQYXJzZT86IFJlZ0V4cFtdO1xuICBtb250aHNTaG9ydFJlZ2V4PzogUmVnRXhwO1xuICBtb250aHNTdHJpY3RSZWdleD86IFJlZ0V4cDtcbiAgbW9udGhzU2hvcnRTdHJpY3RSZWdleD86IFJlZ0V4cDtcbiAgbG9uZ01vbnRoc1BhcnNlPzogUmVnRXhwW107XG4gIHNob3J0TW9udGhzUGFyc2U/OiBSZWdFeHBbXTtcblxuICBtZXJpZGllbVBhcnNlPzogUmVnRXhwO1xuXG4gIG1lcmlkaWVtSG91cj8oaG91cjogbnVtYmVyLCBtZXJpZGllbTogc3RyaW5nKTogbnVtYmVyO1xuXG4gIHByZXBhcnNlPyhzdHI6IHN0cmluZyk6IHN0cmluZztcblxuICBwb3N0Zm9ybWF0PyhzdHI6IHN0cmluZyB8IG51bWJlcik6IHN0cmluZztcblxuICBtZXJpZGllbT8oaG91cjogbnVtYmVyLCBtaW51dGU/OiBudW1iZXIsIGlzTG93ZXI/OiBib29sZWFuKTogc3RyaW5nO1xuXG4gIGlzUE0/KGlucHV0OiBzdHJpbmcpOiBib29sZWFuO1xufVxuXG5leHBvcnQgY2xhc3MgTG9jYWxlIHtcbiAgcGFyZW50TG9jYWxlPzogTG9jYWxlO1xuICBfYWJicjogc3RyaW5nO1xuICBfY29uZmlnOiBMb2NhbGVEYXRhO1xuICBtZXJpZGllbUhvdXI6IChob3VyOiBudW1iZXIsIG1lcmlkaWVtOiBzdHJpbmcpID0+IG51bWJlcjtcblxuICBfaW52YWxpZERhdGU6IHN0cmluZztcbiAgX3dlZWs6IHsgZG93OiBudW1iZXI7IGRveTogbnVtYmVyIH07XG4gIF9kYXlPZk1vbnRoT3JkaW5hbFBhcnNlOiBSZWdFeHA7XG4gIF9vcmRpbmFsUGFyc2U6IFJlZ0V4cDtcbiAgX21lcmlkaWVtUGFyc2U6IFJlZ0V4cDtcblxuICBwcml2YXRlIF9jYWxlbmRhcjogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcbiAgcHJpdmF0ZSBfcmVsYXRpdmVUaW1lOiB7IGZ1dHVyZTogc3RyaW5nOyBwYXN0OiBzdHJpbmcgfTtcbiAgcHJpdmF0ZSBfbW9udGhzOiBMb2NhbGVPcHRpb25zO1xuICBwcml2YXRlIF9tb250aHNTaG9ydDogTG9jYWxlT3B0aW9ucztcbiAgcHJpdmF0ZSBfbW9udGhzUmVnZXg6IFJlZ0V4cDtcbiAgcHJpdmF0ZSBfbW9udGhzU2hvcnRSZWdleDogUmVnRXhwO1xuICBwcml2YXRlIF9tb250aHNTdHJpY3RSZWdleDogUmVnRXhwO1xuICBwcml2YXRlIF9tb250aHNTaG9ydFN0cmljdFJlZ2V4OiBSZWdFeHA7XG4gIHByaXZhdGUgX21vbnRoc1BhcnNlOiBSZWdFeHBbXTtcbiAgcHJpdmF0ZSBfbG9uZ01vbnRoc1BhcnNlOiBzdHJpbmdbXSB8IFJlZ0V4cFtdO1xuICBwcml2YXRlIF9zaG9ydE1vbnRoc1BhcnNlOiBzdHJpbmdbXSB8IFJlZ0V4cFtdO1xuICBwcml2YXRlIF9tb250aHNQYXJzZUV4YWN0OiBSZWdFeHA7XG4gIHByaXZhdGUgX3dlZWtkYXlzUGFyc2VFeGFjdDogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfd2Vla2RheXNSZWdleDogUmVnRXhwO1xuICBwcml2YXRlIF93ZWVrZGF5c1Nob3J0UmVnZXg6IFJlZ0V4cDtcbiAgcHJpdmF0ZSBfd2Vla2RheXNNaW5SZWdleDogUmVnRXhwO1xuXG4gIHByaXZhdGUgX3dlZWtkYXlzU3RyaWN0UmVnZXg6IFJlZ0V4cDtcbiAgcHJpdmF0ZSBfd2Vla2RheXNTaG9ydFN0cmljdFJlZ2V4OiBSZWdFeHA7XG4gIHByaXZhdGUgX3dlZWtkYXlzTWluU3RyaWN0UmVnZXg6IFJlZ0V4cDtcblxuICBwcml2YXRlIF93ZWVrZGF5czogTG9jYWxlT3B0aW9ucztcbiAgcHJpdmF0ZSBfd2Vla2RheXNTaG9ydDogc3RyaW5nW107XG4gIHByaXZhdGUgX3dlZWtkYXlzTWluOiBzdHJpbmdbXTtcbiAgcHJpdmF0ZSBfd2Vla2RheXNQYXJzZTogc3RyaW5nW10gfCBSZWdFeHBbXTtcbiAgcHJpdmF0ZSBfbWluV2Vla2RheXNQYXJzZTogc3RyaW5nW10gfCBSZWdFeHBbXTtcbiAgcHJpdmF0ZSBfc2hvcnRXZWVrZGF5c1BhcnNlOiBzdHJpbmdbXSB8IFJlZ0V4cFtdO1xuICBwcml2YXRlIF9mdWxsV2Vla2RheXNQYXJzZTogUmVnRXhwW107XG4gIHByaXZhdGUgX2xvbmdEYXRlRm9ybWF0OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9O1xuXG4gIHByaXZhdGUgX29yZGluYWw6IHN0cmluZztcblxuICBjb25zdHJ1Y3Rvcihjb25maWc6IExvY2FsZURhdGEpIHtcbiAgICBpZiAoISFjb25maWcpIHtcbiAgICAgIHRoaXMuc2V0KGNvbmZpZyk7XG4gICAgfVxuICB9XG5cbiAgc2V0KGNvbmZpZzogTG9jYWxlRGF0YSk6IHZvaWQge1xuICAgIGxldCBjb25mS2V5O1xuICAgIGZvciAoY29uZktleSBpbiBjb25maWcpIHtcbiAgICAgIGlmICghY29uZmlnLmhhc093blByb3BlcnR5KGNvbmZLZXkpKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgY29uc3QgcHJvcCA9IGNvbmZpZ1tjb25mS2V5IGFzIGtleW9mIExvY2FsZURhdGFdO1xuICAgICAgY29uc3Qga2V5ID0gKGlzRnVuY3Rpb24ocHJvcCkgPyBjb25mS2V5IDogYF8ke2NvbmZLZXl9YCkgYXMga2V5b2YgTG9jYWxlO1xuXG4gICAgICB0aGlzW2tleV0gPSBwcm9wIGFzIGFueTtcbiAgICB9XG5cbiAgICB0aGlzLl9jb25maWcgPSBjb25maWc7XG4gIH1cblxuICBjYWxlbmRhcihrZXk6IHN0cmluZywgZGF0ZTogRGF0ZSwgbm93OiBEYXRlKTogc3RyaW5nIHtcbiAgICBjb25zdCBvdXRwdXQgPSB0aGlzLl9jYWxlbmRhcltrZXldIHx8IHRoaXMuX2NhbGVuZGFyLnNhbWVFbHNlO1xuXG4gICAgcmV0dXJuIGlzRnVuY3Rpb24ob3V0cHV0KSA/IG91dHB1dC5jYWxsKG51bGwsIGRhdGUsIG5vdykgOiBvdXRwdXQ7XG4gIH1cblxuICBsb25nRGF0ZUZvcm1hdChrZXk6IHN0cmluZykge1xuICAgIGNvbnN0IGZvcm1hdCA9IHRoaXMuX2xvbmdEYXRlRm9ybWF0W2tleV07XG4gICAgY29uc3QgZm9ybWF0VXBwZXIgPSB0aGlzLl9sb25nRGF0ZUZvcm1hdFtrZXkudG9VcHBlckNhc2UoKV07XG5cbiAgICBpZiAoZm9ybWF0IHx8ICFmb3JtYXRVcHBlcikge1xuICAgICAgcmV0dXJuIGZvcm1hdDtcbiAgICB9XG5cbiAgICB0aGlzLl9sb25nRGF0ZUZvcm1hdFtrZXldID0gZm9ybWF0VXBwZXIucmVwbGFjZSgvTU1NTXxNTXxERHxkZGRkL2csIGZ1bmN0aW9uICh2YWw6IHN0cmluZykge1xuICAgICAgcmV0dXJuIHZhbC5zbGljZSgxKTtcbiAgICB9KTtcblxuICAgIHJldHVybiB0aGlzLl9sb25nRGF0ZUZvcm1hdFtrZXldO1xuICB9XG5cbiAgZ2V0IGludmFsaWREYXRlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2ludmFsaWREYXRlO1xuICB9XG5cbiAgc2V0IGludmFsaWREYXRlKHZhbDogc3RyaW5nKSB7XG4gICAgdGhpcy5faW52YWxpZERhdGUgPSB2YWw7XG4gIH1cblxuICBvcmRpbmFsKG51bTogbnVtYmVyLCB0b2tlbj86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX29yZGluYWwucmVwbGFjZSgnJWQnLCBudW0udG9TdHJpbmcoMTApKTtcbiAgfVxuXG4gIHByZXBhcnNlKHN0cjogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHN0cjtcbiAgfVxuXG4gIHBvc3Rmb3JtYXQoc3RyOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gc3RyO1xuICB9XG5cbiAgcmVsYXRpdmVUaW1lKG51bTogbnVtYmVyLCB3aXRob3V0U3VmZml4OiBib29sZWFuLCBzdHI6ICdmdXR1cmUnIHwgJ3Bhc3QnLCBpc0Z1dHVyZTogYm9vbGVhbik6IHN0cmluZyB7XG4gICAgY29uc3Qgb3V0cHV0ID0gdGhpcy5fcmVsYXRpdmVUaW1lW3N0cl07XG5cbiAgICByZXR1cm4gKGlzRnVuY3Rpb24ob3V0cHV0KSkgP1xuICAgICAgb3V0cHV0KG51bSwgd2l0aG91dFN1ZmZpeCwgc3RyLCBpc0Z1dHVyZSkgOlxuICAgICAgb3V0cHV0LnJlcGxhY2UoLyVkL2ksIG51bS50b1N0cmluZygxMCkpO1xuICB9XG5cbiAgcGFzdEZ1dHVyZShkaWZmOiBudW1iZXIsIG91dHB1dDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBjb25zdCBmb3JtYXQgPSB0aGlzLl9yZWxhdGl2ZVRpbWVbZGlmZiA+IDAgPyAnZnV0dXJlJyA6ICdwYXN0J107XG5cbiAgICByZXR1cm4gaXNGdW5jdGlvbihmb3JtYXQpID8gZm9ybWF0KG91dHB1dCkgOiBmb3JtYXQucmVwbGFjZSgvJXMvaSwgb3V0cHV0KTtcbiAgfVxuXG4gIC8qKiBNb250aHMgKi9cbiAgbW9udGhzKCk6IHN0cmluZ1tdO1xuICBtb250aHMoZGF0ZTogRGF0ZSwgZm9ybWF0Pzogc3RyaW5nLCBpc1VUQz86IGJvb2xlYW4pOiBzdHJpbmc7XG4gIG1vbnRocyhkYXRlPzogRGF0ZSwgZm9ybWF0Pzogc3RyaW5nLCBpc1VUQyA9IGZhbHNlKTogc3RyaW5nIHwgc3RyaW5nW10ge1xuICAgIGlmICghZGF0ZSkge1xuICAgICAgcmV0dXJuIGlzQXJyYXk8c3RyaW5nPih0aGlzLl9tb250aHMpXG4gICAgICAgID8gdGhpcy5fbW9udGhzXG4gICAgICAgIDogdGhpcy5fbW9udGhzLnN0YW5kYWxvbmU7XG4gICAgfVxuXG4gICAgaWYgKGlzQXJyYXk8c3RyaW5nPih0aGlzLl9tb250aHMpKSB7XG4gICAgICByZXR1cm4gdGhpcy5fbW9udGhzW2dldE1vbnRoKGRhdGUsIGlzVVRDKV07XG4gICAgfVxuXG4gICAgY29uc3Qga2V5ID0gKHRoaXMuX21vbnRocy5pc0Zvcm1hdCB8fCBNT05USFNfSU5fRk9STUFUKS50ZXN0KGZvcm1hdClcbiAgICAgID8gJ2Zvcm1hdCdcbiAgICAgIDogJ3N0YW5kYWxvbmUnO1xuXG4gICAgcmV0dXJuIHRoaXMuX21vbnRoc1trZXldW2dldE1vbnRoKGRhdGUsIGlzVVRDKV07XG4gIH1cblxuICBtb250aHNTaG9ydCgpOiBzdHJpbmdbXTtcbiAgbW9udGhzU2hvcnQoZGF0ZT86IERhdGUsIGZvcm1hdD86IHN0cmluZywgaXNVVEM/OiBib29sZWFuKTogc3RyaW5nO1xuICBtb250aHNTaG9ydChkYXRlPzogRGF0ZSwgZm9ybWF0Pzogc3RyaW5nLCBpc1VUQyA9IGZhbHNlKTogc3RyaW5nIHwgc3RyaW5nW10ge1xuICAgIGlmICghZGF0ZSkge1xuICAgICAgcmV0dXJuIGlzQXJyYXk8c3RyaW5nPih0aGlzLl9tb250aHNTaG9ydClcbiAgICAgICAgPyB0aGlzLl9tb250aHNTaG9ydFxuICAgICAgICA6IHRoaXMuX21vbnRoc1Nob3J0LnN0YW5kYWxvbmU7XG4gICAgfVxuXG4gICAgaWYgKGlzQXJyYXk8c3RyaW5nPih0aGlzLl9tb250aHNTaG9ydCkpIHtcbiAgICAgIHJldHVybiB0aGlzLl9tb250aHNTaG9ydFtnZXRNb250aChkYXRlLCBpc1VUQyldO1xuICAgIH1cbiAgICBjb25zdCBrZXkgPSBNT05USFNfSU5fRk9STUFULnRlc3QoZm9ybWF0KSA/ICdmb3JtYXQnIDogJ3N0YW5kYWxvbmUnO1xuXG4gICAgcmV0dXJuIHRoaXMuX21vbnRoc1Nob3J0W2tleV1bZ2V0TW9udGgoZGF0ZSwgaXNVVEMpXTtcbiAgfVxuXG4gIG1vbnRoc1BhcnNlKG1vbnRoTmFtZTogc3RyaW5nLCBmb3JtYXQ/OiBzdHJpbmcsIHN0cmljdD86IGJvb2xlYW4pOiBudW1iZXIge1xuICAgIGxldCBkYXRlO1xuICAgIGxldCByZWdleDtcblxuICAgIGlmICh0aGlzLl9tb250aHNQYXJzZUV4YWN0KSB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVNb250aFN0cmljdFBhcnNlKG1vbnRoTmFtZSwgZm9ybWF0LCBzdHJpY3QpO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5fbW9udGhzUGFyc2UpIHtcbiAgICAgIHRoaXMuX21vbnRoc1BhcnNlID0gW107XG4gICAgICB0aGlzLl9sb25nTW9udGhzUGFyc2UgPSBbXTtcbiAgICAgIHRoaXMuX3Nob3J0TW9udGhzUGFyc2UgPSBbXTtcbiAgICB9XG5cbiAgICAvLyBUT0RPOiBhZGQgc29ydGluZ1xuICAgIC8vIFNvcnRpbmcgbWFrZXMgc3VyZSBpZiBvbmUgbW9udGggKG9yIGFiYnIpIGlzIGEgcHJlZml4IG9mIGFub3RoZXJcbiAgICAvLyBzZWUgc29ydGluZyBpbiBjb21wdXRlTW9udGhzUGFyc2VcbiAgICBsZXQgaTtcbiAgICBmb3IgKGkgPSAwOyBpIDwgMTI7IGkrKykge1xuICAgICAgLy8gbWFrZSB0aGUgcmVnZXggaWYgd2UgZG9uJ3QgaGF2ZSBpdCBhbHJlYWR5XG4gICAgICBkYXRlID0gbmV3IERhdGUoRGF0ZS5VVEMoMjAwMCwgaSkpO1xuICAgICAgaWYgKHN0cmljdCAmJiAhdGhpcy5fbG9uZ01vbnRoc1BhcnNlW2ldKSB7XG4gICAgICAgIGNvbnN0IF9tb250aHMgPSB0aGlzLm1vbnRocyhkYXRlLCAnJywgdHJ1ZSkucmVwbGFjZSgnLicsICcnKTtcbiAgICAgICAgY29uc3QgX3Nob3J0TW9udGhzID0gdGhpcy5tb250aHNTaG9ydChkYXRlLCAnJywgdHJ1ZSkucmVwbGFjZSgnLicsICcnKTtcbiAgICAgICAgdGhpcy5fbG9uZ01vbnRoc1BhcnNlW2ldID0gbmV3IFJlZ0V4cChgXiR7X21vbnRoc30kYCwgJ2knKTtcbiAgICAgICAgdGhpcy5fc2hvcnRNb250aHNQYXJzZVtpXSA9IG5ldyBSZWdFeHAoYF4ke19zaG9ydE1vbnRoc30kYCwgJ2knKTtcbiAgICAgIH1cbiAgICAgIGlmICghc3RyaWN0ICYmICF0aGlzLl9tb250aHNQYXJzZVtpXSkge1xuICAgICAgICByZWdleCA9IGBeJHt0aGlzLm1vbnRocyhkYXRlLCAnJywgdHJ1ZSl9fF4ke3RoaXMubW9udGhzU2hvcnQoZGF0ZSwgJycsIHRydWUpfWA7XG4gICAgICAgIHRoaXMuX21vbnRoc1BhcnNlW2ldID0gbmV3IFJlZ0V4cChyZWdleC5yZXBsYWNlKCcuJywgJycpLCAnaScpO1xuICAgICAgfVxuICAgICAgLy8gdGVzdCB0aGUgcmVnZXhcbiAgICAgIGlmIChzdHJpY3QgJiYgZm9ybWF0ID09PSAnTU1NTScgJiYgKHRoaXMuX2xvbmdNb250aHNQYXJzZVtpXSBhcyBSZWdFeHApLnRlc3QobW9udGhOYW1lKSkge1xuICAgICAgICByZXR1cm4gaTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0cmljdCAmJiBmb3JtYXQgPT09ICdNTU0nICYmICh0aGlzLl9zaG9ydE1vbnRoc1BhcnNlW2ldIGFzIFJlZ0V4cCkudGVzdChtb250aE5hbWUpKSB7XG4gICAgICAgIHJldHVybiBpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXN0cmljdCAmJiB0aGlzLl9tb250aHNQYXJzZVtpXS50ZXN0KG1vbnRoTmFtZSkpIHtcbiAgICAgICAgcmV0dXJuIGk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbW9udGhzUmVnZXgoaXNTdHJpY3Q6IGJvb2xlYW4pOiBSZWdFeHAge1xuICAgIGlmICh0aGlzLl9tb250aHNQYXJzZUV4YWN0KSB7XG4gICAgICBpZiAoIWhhc093blByb3AodGhpcywgJ19tb250aHNSZWdleCcpKSB7XG4gICAgICAgIHRoaXMuY29tcHV0ZU1vbnRoc1BhcnNlKCk7XG4gICAgICB9XG4gICAgICBpZiAoaXNTdHJpY3QpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX21vbnRoc1N0cmljdFJlZ2V4O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5fbW9udGhzUmVnZXg7XG4gICAgfVxuXG4gICAgaWYgKCFoYXNPd25Qcm9wKHRoaXMsICdfbW9udGhzUmVnZXgnKSkge1xuICAgICAgdGhpcy5fbW9udGhzUmVnZXggPSBkZWZhdWx0TW9udGhzUmVnZXg7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX21vbnRoc1N0cmljdFJlZ2V4ICYmIGlzU3RyaWN0ID9cbiAgICAgIHRoaXMuX21vbnRoc1N0cmljdFJlZ2V4IDogdGhpcy5fbW9udGhzUmVnZXg7XG4gIH1cblxuICBtb250aHNTaG9ydFJlZ2V4KGlzU3RyaWN0OiBib29sZWFuKTogUmVnRXhwIHtcbiAgICBpZiAodGhpcy5fbW9udGhzUGFyc2VFeGFjdCkge1xuICAgICAgaWYgKCFoYXNPd25Qcm9wKHRoaXMsICdfbW9udGhzUmVnZXgnKSkge1xuICAgICAgICB0aGlzLmNvbXB1dGVNb250aHNQYXJzZSgpO1xuICAgICAgfVxuICAgICAgaWYgKGlzU3RyaWN0KSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9tb250aHNTaG9ydFN0cmljdFJlZ2V4O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5fbW9udGhzU2hvcnRSZWdleDtcbiAgICB9XG4gICAgaWYgKCFoYXNPd25Qcm9wKHRoaXMsICdfbW9udGhzU2hvcnRSZWdleCcpKSB7XG4gICAgICB0aGlzLl9tb250aHNTaG9ydFJlZ2V4ID0gZGVmYXVsdE1vbnRoc1Nob3J0UmVnZXg7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX21vbnRoc1Nob3J0U3RyaWN0UmVnZXggJiYgaXNTdHJpY3QgP1xuICAgICAgdGhpcy5fbW9udGhzU2hvcnRTdHJpY3RSZWdleCA6IHRoaXMuX21vbnRoc1Nob3J0UmVnZXg7XG4gIH1cblxuICAvKiogV2VlayAqL1xuICB3ZWVrKGRhdGU6IERhdGUsIGlzVVRDPzogYm9vbGVhbik6IG51bWJlciB7XG4gICAgcmV0dXJuIHdlZWtPZlllYXIoZGF0ZSwgdGhpcy5fd2Vlay5kb3csIHRoaXMuX3dlZWsuZG95LCBpc1VUQykud2VlaztcbiAgfVxuXG4gIGZpcnN0RGF5T2ZXZWVrKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3dlZWsuZG93O1xuICB9XG5cbiAgZmlyc3REYXlPZlllYXIoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fd2Vlay5kb3k7XG4gIH1cblxuICAvKiogRGF5IG9mIFdlZWsgKi9cbiAgd2Vla2RheXMoKTogc3RyaW5nW107XG4gIHdlZWtkYXlzKGRhdGU6IERhdGUsIGZvcm1hdD86IHN0cmluZywgaXNVVEM/OiBib29sZWFuKTogc3RyaW5nO1xuICB3ZWVrZGF5cyhkYXRlPzogRGF0ZSwgZm9ybWF0Pzogc3RyaW5nLCBpc1VUQz86IGJvb2xlYW4pOiBzdHJpbmcgfCBzdHJpbmdbXSB7XG4gICAgaWYgKCFkYXRlKSB7XG4gICAgICByZXR1cm4gaXNBcnJheTxzdHJpbmc+KHRoaXMuX3dlZWtkYXlzKVxuICAgICAgICA/IHRoaXMuX3dlZWtkYXlzXG4gICAgICAgIDogdGhpcy5fd2Vla2RheXMuc3RhbmRhbG9uZTtcbiAgICB9XG5cbiAgICBpZiAoaXNBcnJheTxzdHJpbmc+KHRoaXMuX3dlZWtkYXlzKSkge1xuICAgICAgcmV0dXJuIHRoaXMuX3dlZWtkYXlzW2dldERheShkYXRlLCBpc1VUQyldO1xuICAgIH1cblxuICAgIGNvbnN0IF9rZXkgPSB0aGlzLl93ZWVrZGF5cy5pc0Zvcm1hdC50ZXN0KGZvcm1hdClcbiAgICAgID8gJ2Zvcm1hdCdcbiAgICAgIDogJ3N0YW5kYWxvbmUnO1xuXG4gICAgcmV0dXJuIHRoaXMuX3dlZWtkYXlzW19rZXldW2dldERheShkYXRlLCBpc1VUQyldO1xuICB9XG5cbiAgd2Vla2RheXNNaW4oKTogc3RyaW5nW107XG4gIHdlZWtkYXlzTWluKGRhdGU6IERhdGUsIGZvcm1hdD86IHN0cmluZywgaXNVVEM/OiBib29sZWFuKTogc3RyaW5nO1xuICB3ZWVrZGF5c01pbihkYXRlPzogRGF0ZSwgZm9ybWF0Pzogc3RyaW5nLCBpc1VUQz86IGJvb2xlYW4pOiBzdHJpbmcgfCBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIGRhdGUgPyB0aGlzLl93ZWVrZGF5c01pbltnZXREYXkoZGF0ZSwgaXNVVEMpXSA6IHRoaXMuX3dlZWtkYXlzTWluO1xuICB9XG5cbiAgd2Vla2RheXNTaG9ydCgpOiBzdHJpbmdbXTtcbiAgd2Vla2RheXNTaG9ydChkYXRlOiBEYXRlLCBmb3JtYXQ/OiBzdHJpbmcsIGlzVVRDPzogYm9vbGVhbik6IHN0cmluZztcbiAgd2Vla2RheXNTaG9ydChkYXRlPzogRGF0ZSwgZm9ybWF0Pzogc3RyaW5nLCBpc1VUQz86IGJvb2xlYW4pOiBzdHJpbmcgfCBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIGRhdGUgPyB0aGlzLl93ZWVrZGF5c1Nob3J0W2dldERheShkYXRlLCBpc1VUQyldIDogdGhpcy5fd2Vla2RheXNTaG9ydDtcbiAgfVxuXG5cbiAgLy8gcHJvdG8ud2Vla2RheXNQYXJzZSAgPSAgICAgICAgbG9jYWxlV2Vla2RheXNQYXJzZTtcbiAgd2Vla2RheXNQYXJzZSh3ZWVrZGF5TmFtZT86IHN0cmluZywgZm9ybWF0Pzogc3RyaW5nLCBzdHJpY3Q/OiBib29sZWFuKTogbnVtYmVyIHtcbiAgICBsZXQgaTtcbiAgICBsZXQgcmVnZXg7XG5cbiAgICBpZiAodGhpcy5fd2Vla2RheXNQYXJzZUV4YWN0KSB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVXZWVrU3RyaWN0UGFyc2Uod2Vla2RheU5hbWUsIGZvcm1hdCwgc3RyaWN0KTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuX3dlZWtkYXlzUGFyc2UpIHtcbiAgICAgIHRoaXMuX3dlZWtkYXlzUGFyc2UgPSBbXTtcbiAgICAgIHRoaXMuX21pbldlZWtkYXlzUGFyc2UgPSBbXTtcbiAgICAgIHRoaXMuX3Nob3J0V2Vla2RheXNQYXJzZSA9IFtdO1xuICAgICAgdGhpcy5fZnVsbFdlZWtkYXlzUGFyc2UgPSBbXTtcbiAgICB9XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgNzsgaSsrKSB7XG4gICAgICAvLyBtYWtlIHRoZSByZWdleCBpZiB3ZSBkb24ndCBoYXZlIGl0IGFscmVhZHlcbiAgICAgIC8vIGZpeDogaGVyZSBpcyB0aGUgaXNzdWVcbiAgICAgIGNvbnN0IGRhdGUgPSBzZXREYXlPZldlZWsobmV3IERhdGUoRGF0ZS5VVEMoMjAwMCwgMSkpLCBpLCBudWxsLCB0cnVlKTtcbiAgICAgIGlmIChzdHJpY3QgJiYgIXRoaXMuX2Z1bGxXZWVrZGF5c1BhcnNlW2ldKSB7XG4gICAgICAgIHRoaXMuX2Z1bGxXZWVrZGF5c1BhcnNlW2ldID0gbmV3IFJlZ0V4cChgXiR7dGhpcy53ZWVrZGF5cyhkYXRlLCAnJywgdHJ1ZSkucmVwbGFjZSgnLicsICdcXC4/Jyl9JGAsICdpJyk7XG4gICAgICAgIHRoaXMuX3Nob3J0V2Vla2RheXNQYXJzZVtpXSA9IG5ldyBSZWdFeHAoYF4ke3RoaXMud2Vla2RheXNTaG9ydChkYXRlLCAnJywgdHJ1ZSkucmVwbGFjZSgnLicsICdcXC4/Jyl9JGAsICdpJyk7XG4gICAgICAgIHRoaXMuX21pbldlZWtkYXlzUGFyc2VbaV0gPSBuZXcgUmVnRXhwKGBeJHt0aGlzLndlZWtkYXlzTWluKGRhdGUsICcnLCB0cnVlKS5yZXBsYWNlKCcuJywgJ1xcLj8nKX0kYCwgJ2knKTtcbiAgICAgIH1cbiAgICAgIGlmICghdGhpcy5fd2Vla2RheXNQYXJzZVtpXSkge1xuICAgICAgICByZWdleCA9IGBeJHt0aGlzLndlZWtkYXlzKGRhdGUsICcnLCB0cnVlKX18XiR7dGhpcy53ZWVrZGF5c1Nob3J0KGRhdGUsICcnLCB0cnVlKX18XiR7dGhpcy53ZWVrZGF5c01pbihkYXRlLCAnJywgdHJ1ZSl9YDtcbiAgICAgICAgdGhpcy5fd2Vla2RheXNQYXJzZVtpXSA9IG5ldyBSZWdFeHAocmVnZXgucmVwbGFjZSgnLicsICcnKSwgJ2knKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFpc0FycmF5PFJlZ0V4cD4odGhpcy5fZnVsbFdlZWtkYXlzUGFyc2UpXG4gICAgICAgIHx8ICFpc0FycmF5PFJlZ0V4cD4odGhpcy5fc2hvcnRXZWVrZGF5c1BhcnNlKVxuICAgICAgICB8fCAhaXNBcnJheTxSZWdFeHA+KHRoaXMuX21pbldlZWtkYXlzUGFyc2UpXG4gICAgICAgIHx8ICFpc0FycmF5PFJlZ0V4cD4odGhpcy5fd2Vla2RheXNQYXJzZSkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyB0ZXN0IHRoZSByZWdleFxuICAgICAgaWYgKHN0cmljdCAmJiBmb3JtYXQgPT09ICdkZGRkJyAmJiB0aGlzLl9mdWxsV2Vla2RheXNQYXJzZVtpXS50ZXN0KHdlZWtkYXlOYW1lKSkge1xuICAgICAgICByZXR1cm4gaTtcbiAgICAgIH0gZWxzZSBpZiAoc3RyaWN0ICYmIGZvcm1hdCA9PT0gJ2RkZCcgJiYgdGhpcy5fc2hvcnRXZWVrZGF5c1BhcnNlW2ldLnRlc3Qod2Vla2RheU5hbWUpKSB7XG4gICAgICAgIHJldHVybiBpO1xuICAgICAgfSBlbHNlIGlmIChzdHJpY3QgJiYgZm9ybWF0ID09PSAnZGQnICYmIHRoaXMuX21pbldlZWtkYXlzUGFyc2VbaV0udGVzdCh3ZWVrZGF5TmFtZSkpIHtcbiAgICAgICAgcmV0dXJuIGk7XG4gICAgICB9IGVsc2UgaWYgKCFzdHJpY3QgJiYgdGhpcy5fd2Vla2RheXNQYXJzZVtpXS50ZXN0KHdlZWtkYXlOYW1lKSkge1xuICAgICAgICByZXR1cm4gaTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBwcm90by53ZWVrZGF5c1JlZ2V4ICAgICAgID0gICAgICAgIHdlZWtkYXlzUmVnZXg7XG4gIHdlZWtkYXlzUmVnZXgoaXNTdHJpY3Q6IGJvb2xlYW4pIHtcbiAgICBpZiAodGhpcy5fd2Vla2RheXNQYXJzZUV4YWN0KSB7XG4gICAgICBpZiAoIWhhc093blByb3AodGhpcywgJ193ZWVrZGF5c1JlZ2V4JykpIHtcbiAgICAgICAgdGhpcy5jb21wdXRlV2Vla2RheXNQYXJzZSgpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXNTdHJpY3QpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3dlZWtkYXlzU3RyaWN0UmVnZXg7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5fd2Vla2RheXNSZWdleDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKCFoYXNPd25Qcm9wKHRoaXMsICdfd2Vla2RheXNSZWdleCcpKSB7XG4gICAgICAgIHRoaXMuX3dlZWtkYXlzUmVnZXggPSBtYXRjaFdvcmQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLl93ZWVrZGF5c1N0cmljdFJlZ2V4ICYmIGlzU3RyaWN0ID9cbiAgICAgICAgdGhpcy5fd2Vla2RheXNTdHJpY3RSZWdleCA6IHRoaXMuX3dlZWtkYXlzUmVnZXg7XG4gICAgfVxuICB9XG5cbiAgLy8gcHJvdG8ud2Vla2RheXNTaG9ydFJlZ2V4ICA9ICAgICAgICB3ZWVrZGF5c1Nob3J0UmVnZXg7XG4gIC8vIHByb3RvLndlZWtkYXlzTWluUmVnZXggICAgPSAgICAgICAgd2Vla2RheXNNaW5SZWdleDtcblxuXG4gIHdlZWtkYXlzU2hvcnRSZWdleChpc1N0cmljdD86IGJvb2xlYW4pOiBSZWdFeHAge1xuICAgIGlmICh0aGlzLl93ZWVrZGF5c1BhcnNlRXhhY3QpIHtcbiAgICAgIGlmICghaGFzT3duUHJvcCh0aGlzLCAnX3dlZWtkYXlzUmVnZXgnKSkge1xuICAgICAgICB0aGlzLmNvbXB1dGVXZWVrZGF5c1BhcnNlKCk7XG4gICAgICB9XG4gICAgICBpZiAoaXNTdHJpY3QpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3dlZWtkYXlzU2hvcnRTdHJpY3RSZWdleDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLl93ZWVrZGF5c1Nob3J0UmVnZXg7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICghaGFzT3duUHJvcCh0aGlzLCAnX3dlZWtkYXlzU2hvcnRSZWdleCcpKSB7XG4gICAgICAgIHRoaXMuX3dlZWtkYXlzU2hvcnRSZWdleCA9IG1hdGNoV29yZDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuX3dlZWtkYXlzU2hvcnRTdHJpY3RSZWdleCAmJiBpc1N0cmljdCA/XG4gICAgICAgIHRoaXMuX3dlZWtkYXlzU2hvcnRTdHJpY3RSZWdleCA6IHRoaXMuX3dlZWtkYXlzU2hvcnRSZWdleDtcbiAgICB9XG4gIH1cblxuICB3ZWVrZGF5c01pblJlZ2V4KGlzU3RyaWN0PzogYm9vbGVhbik6IFJlZ0V4cCB7XG4gICAgaWYgKHRoaXMuX3dlZWtkYXlzUGFyc2VFeGFjdCkge1xuICAgICAgaWYgKCFoYXNPd25Qcm9wKHRoaXMsICdfd2Vla2RheXNSZWdleCcpKSB7XG4gICAgICAgIHRoaXMuY29tcHV0ZVdlZWtkYXlzUGFyc2UoKTtcbiAgICAgIH1cbiAgICAgIGlmIChpc1N0cmljdCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fd2Vla2RheXNNaW5TdHJpY3RSZWdleDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLl93ZWVrZGF5c01pblJlZ2V4O1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoIWhhc093blByb3AodGhpcywgJ193ZWVrZGF5c01pblJlZ2V4JykpIHtcbiAgICAgICAgdGhpcy5fd2Vla2RheXNNaW5SZWdleCA9IG1hdGNoV29yZDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuX3dlZWtkYXlzTWluU3RyaWN0UmVnZXggJiYgaXNTdHJpY3QgP1xuICAgICAgICB0aGlzLl93ZWVrZGF5c01pblN0cmljdFJlZ2V4IDogdGhpcy5fd2Vla2RheXNNaW5SZWdleDtcbiAgICB9XG4gIH1cblxuICBpc1BNKGlucHV0OiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICAvLyBJRTggUXVpcmtzIE1vZGUgJiBJRTcgU3RhbmRhcmRzIE1vZGUgZG8gbm90IGFsbG93IGFjY2Vzc2luZyBzdHJpbmdzIGxpa2UgYXJyYXlzXG4gICAgLy8gVXNpbmcgY2hhckF0IHNob3VsZCBiZSBtb3JlIGNvbXBhdGlibGUuXG4gICAgcmV0dXJuIGlucHV0LnRvTG93ZXJDYXNlKCkuY2hhckF0KDApID09PSAncCc7XG4gIH1cblxuICBtZXJpZGllbShob3VyczogbnVtYmVyLCBtaW51dGVzOiBudW1iZXIsIGlzTG93ZXI6IGJvb2xlYW4pOiBzdHJpbmcge1xuICAgIGlmIChob3VycyA+IDExKSB7XG4gICAgICByZXR1cm4gaXNMb3dlciA/ICdwbScgOiAnUE0nO1xuICAgIH1cblxuICAgIHJldHVybiBpc0xvd2VyID8gJ2FtJyA6ICdBTSc7XG4gIH1cblxuICBmb3JtYXRMb25nRGF0ZShrZXk6IHN0cmluZykge1xuICAgIHRoaXMuX2xvbmdEYXRlRm9ybWF0ID0gdGhpcy5fbG9uZ0RhdGVGb3JtYXQgPyB0aGlzLl9sb25nRGF0ZUZvcm1hdCA6IGRlZmF1bHRMb25nRGF0ZUZvcm1hdDtcbiAgICBjb25zdCBmb3JtYXQgPSB0aGlzLl9sb25nRGF0ZUZvcm1hdFtrZXldO1xuICAgIGNvbnN0IGZvcm1hdFVwcGVyID0gdGhpcy5fbG9uZ0RhdGVGb3JtYXRba2V5LnRvVXBwZXJDYXNlKCldO1xuXG4gICAgaWYgKGZvcm1hdCB8fCAhZm9ybWF0VXBwZXIpIHtcbiAgICAgIHJldHVybiBmb3JtYXQ7XG4gICAgfVxuXG4gICAgdGhpcy5fbG9uZ0RhdGVGb3JtYXRbXG4gICAgICBrZXlcbiAgICAgIF0gPSBmb3JtYXRVcHBlci5yZXBsYWNlKC9NTU1NfE1NfEREfGRkZGQvZywgKHZhbDogc3RyaW5nKSA9PiB7XG4gICAgICByZXR1cm4gdmFsLnNsaWNlKDEpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRoaXMuX2xvbmdEYXRlRm9ybWF0W2tleV07XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZU1vbnRoU3RyaWN0UGFyc2UobW9udGhOYW1lOiBzdHJpbmcsIGZvcm1hdDogc3RyaW5nLCBzdHJpY3Q/OiBib29sZWFuKSB7XG4gICAgY29uc3QgbGxjID0gbW9udGhOYW1lLnRvTG9jYWxlTG93ZXJDYXNlKCk7XG4gICAgbGV0IGk7XG4gICAgbGV0IGlpO1xuICAgIGxldCBtb207XG4gICAgaWYgKCF0aGlzLl9tb250aHNQYXJzZSkge1xuICAgICAgLy8gdGhpcyBpcyBub3QgdXNlZFxuICAgICAgdGhpcy5fbW9udGhzUGFyc2UgPSBbXTtcbiAgICAgIHRoaXMuX2xvbmdNb250aHNQYXJzZSA9IFtdO1xuICAgICAgdGhpcy5fc2hvcnRNb250aHNQYXJzZSA9IFtdO1xuICAgICAgZm9yIChpID0gMDsgaSA8IDEyOyArK2kpIHtcbiAgICAgICAgbW9tID0gbmV3IERhdGUoMjAwMCwgaSk7XG4gICAgICAgIHRoaXMuX3Nob3J0TW9udGhzUGFyc2VbaV0gPSB0aGlzLm1vbnRoc1Nob3J0KG1vbSwgJycpLnRvTG9jYWxlTG93ZXJDYXNlKCk7XG4gICAgICAgIHRoaXMuX2xvbmdNb250aHNQYXJzZVtpXSA9IHRoaXMubW9udGhzKG1vbSwgJycpLnRvTG9jYWxlTG93ZXJDYXNlKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHN0cmljdCkge1xuICAgICAgaWYgKGZvcm1hdCA9PT0gJ01NTScpIHtcbiAgICAgICAgaWkgPSAodGhpcy5fc2hvcnRNb250aHNQYXJzZSBhcyBzdHJpbmdbXSkuaW5kZXhPZihsbGMpO1xuXG4gICAgICAgIHJldHVybiBpaSAhPT0gLTEgPyBpaSA6IG51bGw7XG4gICAgICB9XG4gICAgICBpaSA9ICh0aGlzLl9sb25nTW9udGhzUGFyc2UgYXMgc3RyaW5nW10pLmluZGV4T2YobGxjKTtcblxuICAgICAgcmV0dXJuIGlpICE9PSAtMSA/IGlpIDogbnVsbDtcbiAgICB9XG5cbiAgICBpZiAoZm9ybWF0ID09PSAnTU1NJykge1xuICAgICAgaWkgPSAodGhpcy5fc2hvcnRNb250aHNQYXJzZSBhcyBzdHJpbmdbXSkuaW5kZXhPZihsbGMpO1xuICAgICAgaWYgKGlpICE9PSAtMSkge1xuICAgICAgICByZXR1cm4gaWk7XG4gICAgICB9XG5cbiAgICAgIGlpID0gKHRoaXMuX2xvbmdNb250aHNQYXJzZSBhcyBzdHJpbmdbXSkuaW5kZXhPZihsbGMpO1xuXG4gICAgICByZXR1cm4gaWkgIT09IC0xID8gaWkgOiBudWxsO1xuICAgIH1cblxuICAgIGlpID0gKHRoaXMuX2xvbmdNb250aHNQYXJzZSBhcyBzdHJpbmdbXSkuaW5kZXhPZihsbGMpO1xuICAgIGlmIChpaSAhPT0gLTEpIHtcbiAgICAgIHJldHVybiBpaTtcbiAgICB9XG4gICAgaWkgPSAodGhpcy5fc2hvcnRNb250aHNQYXJzZSBhcyBzdHJpbmdbXSkuaW5kZXhPZihsbGMpO1xuXG4gICAgcmV0dXJuIGlpICE9PSAtMSA/IGlpIDogbnVsbDtcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlV2Vla1N0cmljdFBhcnNlKHdlZWtkYXlOYW1lOiBzdHJpbmcsIGZvcm1hdDogc3RyaW5nLCBzdHJpY3Q6IGJvb2xlYW4pOiBudW1iZXIge1xuICAgIGxldCBpaTtcbiAgICBjb25zdCBsbGMgPSB3ZWVrZGF5TmFtZS50b0xvY2FsZUxvd2VyQ2FzZSgpO1xuICAgIGlmICghdGhpcy5fd2Vla2RheXNQYXJzZSkge1xuICAgICAgdGhpcy5fd2Vla2RheXNQYXJzZSA9IFtdO1xuICAgICAgdGhpcy5fc2hvcnRXZWVrZGF5c1BhcnNlID0gW107XG4gICAgICB0aGlzLl9taW5XZWVrZGF5c1BhcnNlID0gW107XG5cbiAgICAgIGxldCBpO1xuICAgICAgZm9yIChpID0gMDsgaSA8IDc7ICsraSkge1xuICAgICAgICBjb25zdCBkYXRlID0gc2V0RGF5T2ZXZWVrKG5ldyBEYXRlKERhdGUuVVRDKDIwMDAsIDEpKSwgaSwgbnVsbCwgdHJ1ZSk7XG4gICAgICAgIHRoaXMuX21pbldlZWtkYXlzUGFyc2VbaV0gPSB0aGlzLndlZWtkYXlzTWluKGRhdGUpLnRvTG9jYWxlTG93ZXJDYXNlKCk7XG4gICAgICAgIHRoaXMuX3Nob3J0V2Vla2RheXNQYXJzZVtpXSA9IHRoaXMud2Vla2RheXNTaG9ydChkYXRlKS50b0xvY2FsZUxvd2VyQ2FzZSgpO1xuICAgICAgICB0aGlzLl93ZWVrZGF5c1BhcnNlW2ldID0gdGhpcy53ZWVrZGF5cyhkYXRlLCAnJykudG9Mb2NhbGVMb3dlckNhc2UoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIWlzQXJyYXk8c3RyaW5nPih0aGlzLl93ZWVrZGF5c1BhcnNlKVxuICAgICAgfHwgIWlzQXJyYXk8c3RyaW5nPih0aGlzLl9zaG9ydFdlZWtkYXlzUGFyc2UpXG4gICAgICB8fCAhaXNBcnJheTxzdHJpbmc+KHRoaXMuX21pbldlZWtkYXlzUGFyc2UpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHN0cmljdCkge1xuICAgICAgaWYgKGZvcm1hdCA9PT0gJ2RkZGQnKSB7XG4gICAgICAgIGlpID0gdGhpcy5fd2Vla2RheXNQYXJzZS5pbmRleE9mKGxsYyk7XG5cbiAgICAgICAgcmV0dXJuIGlpICE9PSAtMSA/IGlpIDogbnVsbDtcbiAgICAgIH0gZWxzZSBpZiAoZm9ybWF0ID09PSAnZGRkJykge1xuICAgICAgICBpaSA9IHRoaXMuX3Nob3J0V2Vla2RheXNQYXJzZS5pbmRleE9mKGxsYyk7XG5cbiAgICAgICAgcmV0dXJuIGlpICE9PSAtMSA/IGlpIDogbnVsbDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlpID0gdGhpcy5fbWluV2Vla2RheXNQYXJzZS5pbmRleE9mKGxsYyk7XG5cbiAgICAgICAgcmV0dXJuIGlpICE9PSAtMSA/IGlpIDogbnVsbDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGZvcm1hdCA9PT0gJ2RkZGQnKSB7XG4gICAgICAgIGlpID0gdGhpcy5fd2Vla2RheXNQYXJzZS5pbmRleE9mKGxsYyk7XG4gICAgICAgIGlmIChpaSAhPT0gLTEpIHtcbiAgICAgICAgICByZXR1cm4gaWk7XG4gICAgICAgIH1cbiAgICAgICAgaWkgPSB0aGlzLl9zaG9ydFdlZWtkYXlzUGFyc2UuaW5kZXhPZihsbGMpO1xuICAgICAgICBpZiAoaWkgIT09IC0xKSB7XG4gICAgICAgICAgcmV0dXJuIGlpO1xuICAgICAgICB9XG4gICAgICAgIGlpID0gdGhpcy5fbWluV2Vla2RheXNQYXJzZS5pbmRleE9mKGxsYyk7XG5cbiAgICAgICAgcmV0dXJuIGlpICE9PSAtMSA/IGlpIDogbnVsbDtcbiAgICAgIH0gZWxzZSBpZiAoZm9ybWF0ID09PSAnZGRkJykge1xuICAgICAgICBpaSA9IHRoaXMuX3Nob3J0V2Vla2RheXNQYXJzZS5pbmRleE9mKGxsYyk7XG4gICAgICAgIGlmIChpaSAhPT0gLTEpIHtcbiAgICAgICAgICByZXR1cm4gaWk7XG4gICAgICAgIH1cbiAgICAgICAgaWkgPSB0aGlzLl93ZWVrZGF5c1BhcnNlLmluZGV4T2YobGxjKTtcbiAgICAgICAgaWYgKGlpICE9PSAtMSkge1xuICAgICAgICAgIHJldHVybiBpaTtcbiAgICAgICAgfVxuICAgICAgICBpaSA9IHRoaXMuX21pbldlZWtkYXlzUGFyc2UuaW5kZXhPZihsbGMpO1xuXG4gICAgICAgIHJldHVybiBpaSAhPT0gLTEgPyBpaSA6IG51bGw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpaSA9IHRoaXMuX21pbldlZWtkYXlzUGFyc2UuaW5kZXhPZihsbGMpO1xuICAgICAgICBpZiAoaWkgIT09IC0xKSB7XG4gICAgICAgICAgcmV0dXJuIGlpO1xuICAgICAgICB9XG4gICAgICAgIGlpID0gdGhpcy5fd2Vla2RheXNQYXJzZS5pbmRleE9mKGxsYyk7XG4gICAgICAgIGlmIChpaSAhPT0gLTEpIHtcbiAgICAgICAgICByZXR1cm4gaWk7XG4gICAgICAgIH1cbiAgICAgICAgaWkgPSB0aGlzLl9zaG9ydFdlZWtkYXlzUGFyc2UuaW5kZXhPZihsbGMpO1xuXG4gICAgICAgIHJldHVybiBpaSAhPT0gLTEgPyBpaSA6IG51bGw7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjb21wdXRlTW9udGhzUGFyc2UoKSB7XG4gICAgY29uc3Qgc2hvcnRQaWVjZXM6IHN0cmluZ1tdID0gW107XG4gICAgY29uc3QgbG9uZ1BpZWNlczogc3RyaW5nW10gPSBbXTtcbiAgICBjb25zdCBtaXhlZFBpZWNlczogc3RyaW5nW10gPSBbXTtcbiAgICBsZXQgZGF0ZTtcblxuICAgIGxldCBpO1xuICAgIGZvciAoaSA9IDA7IGkgPCAxMjsgaSsrKSB7XG4gICAgICAvLyBtYWtlIHRoZSByZWdleCBpZiB3ZSBkb24ndCBoYXZlIGl0IGFscmVhZHlcbiAgICAgIGRhdGUgPSBuZXcgRGF0ZSgyMDAwLCBpKTtcbiAgICAgIHNob3J0UGllY2VzLnB1c2godGhpcy5tb250aHNTaG9ydChkYXRlLCAnJykpO1xuICAgICAgbG9uZ1BpZWNlcy5wdXNoKHRoaXMubW9udGhzKGRhdGUsICcnKSk7XG4gICAgICBtaXhlZFBpZWNlcy5wdXNoKHRoaXMubW9udGhzKGRhdGUsICcnKSk7XG4gICAgICBtaXhlZFBpZWNlcy5wdXNoKHRoaXMubW9udGhzU2hvcnQoZGF0ZSwgJycpKTtcbiAgICB9XG4gICAgLy8gU29ydGluZyBtYWtlcyBzdXJlIGlmIG9uZSBtb250aCAob3IgYWJicikgaXMgYSBwcmVmaXggb2YgYW5vdGhlciBpdFxuICAgIC8vIHdpbGwgbWF0Y2ggdGhlIGxvbmdlciBwaWVjZS5cbiAgICBzaG9ydFBpZWNlcy5zb3J0KGNtcExlblJldik7XG4gICAgbG9uZ1BpZWNlcy5zb3J0KGNtcExlblJldik7XG4gICAgbWl4ZWRQaWVjZXMuc29ydChjbXBMZW5SZXYpO1xuICAgIGZvciAoaSA9IDA7IGkgPCAxMjsgaSsrKSB7XG4gICAgICBzaG9ydFBpZWNlc1tpXSA9IHJlZ2V4RXNjYXBlKHNob3J0UGllY2VzW2ldKTtcbiAgICAgIGxvbmdQaWVjZXNbaV0gPSByZWdleEVzY2FwZShsb25nUGllY2VzW2ldKTtcbiAgICB9XG4gICAgZm9yIChpID0gMDsgaSA8IDI0OyBpKyspIHtcbiAgICAgIG1peGVkUGllY2VzW2ldID0gcmVnZXhFc2NhcGUobWl4ZWRQaWVjZXNbaV0pO1xuICAgIH1cblxuICAgIHRoaXMuX21vbnRoc1JlZ2V4ID0gbmV3IFJlZ0V4cChgXigke21peGVkUGllY2VzLmpvaW4oJ3wnKX0pYCwgJ2knKTtcbiAgICB0aGlzLl9tb250aHNTaG9ydFJlZ2V4ID0gdGhpcy5fbW9udGhzUmVnZXg7XG4gICAgdGhpcy5fbW9udGhzU3RyaWN0UmVnZXggPSBuZXcgUmVnRXhwKGBeKCR7bG9uZ1BpZWNlcy5qb2luKCd8Jyl9KWAsICdpJyk7XG4gICAgdGhpcy5fbW9udGhzU2hvcnRTdHJpY3RSZWdleCA9IG5ldyBSZWdFeHAoYF4oJHtzaG9ydFBpZWNlcy5qb2luKCd8Jyl9KWAsICdpJyk7XG4gIH1cblxuICBwcml2YXRlIGNvbXB1dGVXZWVrZGF5c1BhcnNlKCkge1xuICAgIGNvbnN0IG1pblBpZWNlcyA9IFtdO1xuICAgIGNvbnN0IHNob3J0UGllY2VzID0gW107XG4gICAgY29uc3QgbG9uZ1BpZWNlcyA9IFtdO1xuICAgIGNvbnN0IG1peGVkUGllY2VzID0gW107XG5cbiAgICBsZXQgaTtcbiAgICBmb3IgKGkgPSAwOyBpIDwgNzsgaSsrKSB7XG4gICAgICAvLyBtYWtlIHRoZSByZWdleCBpZiB3ZSBkb24ndCBoYXZlIGl0IGFscmVhZHlcbiAgICAgIC8vIGxldCBtb20gPSBjcmVhdGVVVEMoWzIwMDAsIDFdKS5kYXkoaSk7XG4gICAgICBjb25zdCBkYXRlID0gc2V0RGF5T2ZXZWVrKG5ldyBEYXRlKERhdGUuVVRDKDIwMDAsIDEpKSwgaSwgbnVsbCwgdHJ1ZSk7XG4gICAgICBjb25zdCBtaW5wID0gdGhpcy53ZWVrZGF5c01pbihkYXRlKTtcbiAgICAgIGNvbnN0IHNob3J0cCA9IHRoaXMud2Vla2RheXNTaG9ydChkYXRlKTtcbiAgICAgIGNvbnN0IGxvbmdwID0gdGhpcy53ZWVrZGF5cyhkYXRlKTtcbiAgICAgIG1pblBpZWNlcy5wdXNoKG1pbnApO1xuICAgICAgc2hvcnRQaWVjZXMucHVzaChzaG9ydHApO1xuICAgICAgbG9uZ1BpZWNlcy5wdXNoKGxvbmdwKTtcbiAgICAgIG1peGVkUGllY2VzLnB1c2gobWlucCk7XG4gICAgICBtaXhlZFBpZWNlcy5wdXNoKHNob3J0cCk7XG4gICAgICBtaXhlZFBpZWNlcy5wdXNoKGxvbmdwKTtcbiAgICB9XG4gICAgLy8gU29ydGluZyBtYWtlcyBzdXJlIGlmIG9uZSB3ZWVrZGF5IChvciBhYmJyKSBpcyBhIHByZWZpeCBvZiBhbm90aGVyIGl0XG4gICAgLy8gd2lsbCBtYXRjaCB0aGUgbG9uZ2VyIHBpZWNlLlxuICAgIG1pblBpZWNlcy5zb3J0KGNtcExlblJldik7XG4gICAgc2hvcnRQaWVjZXMuc29ydChjbXBMZW5SZXYpO1xuICAgIGxvbmdQaWVjZXMuc29ydChjbXBMZW5SZXYpO1xuICAgIG1peGVkUGllY2VzLnNvcnQoY21wTGVuUmV2KTtcbiAgICBmb3IgKGkgPSAwOyBpIDwgNzsgaSsrKSB7XG4gICAgICBzaG9ydFBpZWNlc1tpXSA9IHJlZ2V4RXNjYXBlKHNob3J0UGllY2VzW2ldKTtcbiAgICAgIGxvbmdQaWVjZXNbaV0gPSByZWdleEVzY2FwZShsb25nUGllY2VzW2ldKTtcbiAgICAgIG1peGVkUGllY2VzW2ldID0gcmVnZXhFc2NhcGUobWl4ZWRQaWVjZXNbaV0pO1xuICAgIH1cblxuICAgIHRoaXMuX3dlZWtkYXlzUmVnZXggPSBuZXcgUmVnRXhwKGBeKCR7bWl4ZWRQaWVjZXMuam9pbignfCcpfSlgLCAnaScpO1xuICAgIHRoaXMuX3dlZWtkYXlzU2hvcnRSZWdleCA9IHRoaXMuX3dlZWtkYXlzUmVnZXg7XG4gICAgdGhpcy5fd2Vla2RheXNNaW5SZWdleCA9IHRoaXMuX3dlZWtkYXlzUmVnZXg7XG5cbiAgICB0aGlzLl93ZWVrZGF5c1N0cmljdFJlZ2V4ID0gbmV3IFJlZ0V4cChgXigke2xvbmdQaWVjZXMuam9pbignfCcpfSlgLCAnaScpO1xuICAgIHRoaXMuX3dlZWtkYXlzU2hvcnRTdHJpY3RSZWdleCA9IG5ldyBSZWdFeHAoYF4oJHtzaG9ydFBpZWNlcy5qb2luKCd8Jyl9KWAsICdpJyk7XG4gICAgdGhpcy5fd2Vla2RheXNNaW5TdHJpY3RSZWdleCA9IG5ldyBSZWdFeHAoYF4oJHttaW5QaWVjZXMuam9pbignfCcpfSlgLCAnaScpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNtcExlblJldihhOiBzdHJpbmcsIGI6IHN0cmluZyk6IG51bWJlciB7XG4gIHJldHVybiBiLmxlbmd0aCAtIGEubGVuZ3RoO1xufVxuIiwiZXhwb3J0IGNvbnN0IGRlZmF1bHRDYWxlbmRhciA9IHtcbiAgc2FtZURheTogJ1tUb2RheSBhdF0gTFQnLFxuICBuZXh0RGF5OiAnW1RvbW9ycm93IGF0XSBMVCcsXG4gIG5leHRXZWVrOiAnZGRkZCBbYXRdIExUJyxcbiAgbGFzdERheTogJ1tZZXN0ZXJkYXkgYXRdIExUJyxcbiAgbGFzdFdlZWs6ICdbTGFzdF0gZGRkZCBbYXRdIExUJyxcbiAgc2FtZUVsc2U6ICdMJ1xufTtcbiIsImltcG9ydCB7XG4gIGRlZmF1bHREYXlPZk1vbnRoT3JkaW5hbFBhcnNlLFxuICBkZWZhdWx0TG9jYWxlTW9udGhzLFxuICBkZWZhdWx0TG9jYWxlTW9udGhzU2hvcnQsXG4gIGRlZmF1bHRMb2NhbGVXZWVrZGF5cyxcbiAgZGVmYXVsdExvY2FsZVdlZWtkYXlzTWluLFxuICBkZWZhdWx0TG9jYWxlV2Vla2RheXNTaG9ydCwgZGVmYXVsdExvbmdEYXRlRm9ybWF0LCBkZWZhdWx0T3JkaW5hbCxcbiAgTG9jYWxlRGF0YVxufSBmcm9tICcuL2xvY2FsZS5jbGFzcyc7XG5pbXBvcnQgeyBkZWZhdWx0Q2FsZW5kYXIgfSBmcm9tICcuL2NhbGVuZGFyJztcblxuZXhwb3J0IGNvbnN0IGRlZmF1bHRJbnZhbGlkRGF0ZSA9ICdJbnZhbGlkIGRhdGUnO1xuXG5leHBvcnQgY29uc3QgZGVmYXVsdExvY2FsZVdlZWsgPSB7XG4gIGRvdzogMCwgLy8gU3VuZGF5IGlzIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsuXG4gIGRveTogNiAvLyBUaGUgd2VlayB0aGF0IGNvbnRhaW5zIEphbiAxc3QgaXMgdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHllYXIuXG59O1xuXG5leHBvcnQgY29uc3QgZGVmYXVsdExvY2FsZU1lcmlkaWVtUGFyc2UgPSAvW2FwXVxcLj9tP1xcLj8vaTtcblxuZXhwb3J0IGNvbnN0IGRlZmF1bHRSZWxhdGl2ZVRpbWU6IHtba2V5OiBzdHJpbmddOiBzdHJpbmd9ID0ge1xuICBmdXR1cmUgOiAnaW4gJXMnLFxuICBwYXN0ICAgOiAnJXMgYWdvJyxcbiAgcyAgOiAnYSBmZXcgc2Vjb25kcycsXG4gIHNzIDogJyVkIHNlY29uZHMnLFxuICBtICA6ICdhIG1pbnV0ZScsXG4gIG1tIDogJyVkIG1pbnV0ZXMnLFxuICBoICA6ICdhbiBob3VyJyxcbiAgaGggOiAnJWQgaG91cnMnLFxuICBkICA6ICdhIGRheScsXG4gIGRkIDogJyVkIGRheXMnLFxuICBNICA6ICdhIG1vbnRoJyxcbiAgTU0gOiAnJWQgbW9udGhzJyxcbiAgeSAgOiAnYSB5ZWFyJyxcbiAgeXkgOiAnJWQgeWVhcnMnXG59O1xuXG5leHBvcnQgY29uc3QgYmFzZUNvbmZpZzogTG9jYWxlRGF0YSA9IHtcbiAgY2FsZW5kYXI6IGRlZmF1bHRDYWxlbmRhcixcbiAgbG9uZ0RhdGVGb3JtYXQ6IGRlZmF1bHRMb25nRGF0ZUZvcm1hdCxcbiAgaW52YWxpZERhdGU6IGRlZmF1bHRJbnZhbGlkRGF0ZSxcbiAgb3JkaW5hbDogZGVmYXVsdE9yZGluYWwsXG4gIGRheU9mTW9udGhPcmRpbmFsUGFyc2U6IGRlZmF1bHREYXlPZk1vbnRoT3JkaW5hbFBhcnNlLFxuICByZWxhdGl2ZVRpbWU6IGRlZmF1bHRSZWxhdGl2ZVRpbWUsXG5cbiAgbW9udGhzOiBkZWZhdWx0TG9jYWxlTW9udGhzLFxuICBtb250aHNTaG9ydDogZGVmYXVsdExvY2FsZU1vbnRoc1Nob3J0LFxuXG4gIHdlZWs6IGRlZmF1bHRMb2NhbGVXZWVrLFxuXG4gIHdlZWtkYXlzOiBkZWZhdWx0TG9jYWxlV2Vla2RheXMsXG4gIHdlZWtkYXlzTWluOiBkZWZhdWx0TG9jYWxlV2Vla2RheXNNaW4sXG4gIHdlZWtkYXlzU2hvcnQ6IGRlZmF1bHRMb2NhbGVXZWVrZGF5c1Nob3J0LFxuXG4gIG1lcmlkaWVtUGFyc2U6IGRlZmF1bHRMb2NhbGVNZXJpZGllbVBhcnNlXG59O1xuIiwiLy8gY29tcGFyZSB0d28gYXJyYXlzLCByZXR1cm4gdGhlIG51bWJlciBvZiBkaWZmZXJlbmNlc1xuaW1wb3J0IHsgdG9JbnQgfSBmcm9tICcuL3R5cGUtY2hlY2tzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGNvbXBhcmVBcnJheXM8VD4oYXJyYXkxOiBUW10sIGFycmF5MjogVFtdLCBkb250Q29udmVydDogYm9vbGVhbikge1xuICBjb25zdCBsZW4gPSBNYXRoLm1pbihhcnJheTEubGVuZ3RoLCBhcnJheTIubGVuZ3RoKTtcbiAgY29uc3QgbGVuZ3RoRGlmZiA9IE1hdGguYWJzKGFycmF5MS5sZW5ndGggLSBhcnJheTIubGVuZ3RoKTtcbiAgbGV0IGRpZmZzID0gMDtcbiAgbGV0IGk7XG4gIGZvciAoaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgIGlmICgoZG9udENvbnZlcnQgJiYgYXJyYXkxW2ldICE9PSBhcnJheTJbaV0pXG4gICAgICB8fCAoIWRvbnRDb252ZXJ0ICYmIHRvSW50KGFycmF5MVtpXSkgIT09IHRvSW50KGFycmF5MltpXSkpKSB7XG4gICAgICBkaWZmcysrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBkaWZmcyArIGxlbmd0aERpZmY7XG59XG4iLCJpbXBvcnQgeyBhZGRGb3JtYXRUb2tlbiB9IGZyb20gJy4uL2Zvcm1hdC9mb3JtYXQnO1xuaW1wb3J0IHsgTG9jYWxlIH0gZnJvbSAnLi4vbG9jYWxlL2xvY2FsZS5jbGFzcyc7XG5pbXBvcnQgeyB3ZWVrT2ZZZWFyIH0gZnJvbSAnLi93ZWVrLWNhbGVuZGFyLXV0aWxzJztcbmltcG9ydCB7IGFkZFJlZ2V4VG9rZW4sIG1hdGNoMXRvMiwgbWF0Y2gyIH0gZnJvbSAnLi4vcGFyc2UvcmVnZXgnO1xuaW1wb3J0IHsgYWRkVW5pdEFsaWFzIH0gZnJvbSAnLi9hbGlhc2VzJztcbmltcG9ydCB7IGFkZFVuaXRQcmlvcml0eSB9IGZyb20gJy4vcHJpb3JpdGllcyc7XG5pbXBvcnQgeyBhZGRXZWVrUGFyc2VUb2tlbiB9IGZyb20gJy4uL3BhcnNlL3Rva2VuJztcbmltcG9ydCB7IHRvSW50IH0gZnJvbSAnLi4vdXRpbHMvdHlwZS1jaGVja3MnO1xuaW1wb3J0IHsgRGF0ZUZvcm1hdHRlck9wdGlvbnMsIFdlZWtQYXJzaW5nIH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgRGF0ZVBhcnNpbmdDb25maWcgfSBmcm9tICcuLi9jcmVhdGUvcGFyc2luZy50eXBlcyc7XG5pbXBvcnQgeyBnZXRMb2NhbGUgfSBmcm9tICcuLi9sb2NhbGUvbG9jYWxlcyc7XG5pbXBvcnQgeyBhZGQgfSBmcm9tICcuLi9tb21lbnQvYWRkLXN1YnRyYWN0JztcblxuLy8gRk9STUFUVElOR1xuXG5leHBvcnQgZnVuY3Rpb24gaW5pdFdlZWsoKSB7XG4gIGFkZEZvcm1hdFRva2VuKCd3JywgWyd3dycsIDIsIGZhbHNlXSwgJ3dvJyxcbiAgICBmdW5jdGlvbihkYXRlOiBEYXRlLCBvcHRzOiBEYXRlRm9ybWF0dGVyT3B0aW9ucyk6IHN0cmluZyB7XG4gICAgICByZXR1cm4gZ2V0V2VlayhkYXRlLCBvcHRzLmxvY2FsZSlcbiAgICAgICAgLnRvU3RyaW5nKDEwKTtcbiAgICB9XG4gICk7XG5cbiAgYWRkRm9ybWF0VG9rZW4oJ1cnLCBbJ1dXJywgMiwgZmFsc2VdLCAnV28nLFxuICAgIGZ1bmN0aW9uKGRhdGU6IERhdGUpOiBzdHJpbmcge1xuICAgICAgcmV0dXJuIGdldElTT1dlZWsoZGF0ZSlcbiAgICAgICAgLnRvU3RyaW5nKDEwKTtcbiAgICB9XG4gICk7XG5cbi8vIEFMSUFTRVNcblxuICBhZGRVbml0QWxpYXMoJ3dlZWsnLCAndycpO1xuICBhZGRVbml0QWxpYXMoJ2lzb1dlZWsnLCAnVycpO1xuXG4vLyBQUklPUklUSUVTXG5cbiAgYWRkVW5pdFByaW9yaXR5KCd3ZWVrJywgNSk7XG4gIGFkZFVuaXRQcmlvcml0eSgnaXNvV2VlaycsIDUpO1xuXG4vLyBQQVJTSU5HXG5cbiAgYWRkUmVnZXhUb2tlbigndycsIG1hdGNoMXRvMik7XG4gIGFkZFJlZ2V4VG9rZW4oJ3d3JywgbWF0Y2gxdG8yLCBtYXRjaDIpO1xuICBhZGRSZWdleFRva2VuKCdXJywgbWF0Y2gxdG8yKTtcbiAgYWRkUmVnZXhUb2tlbignV1cnLCBtYXRjaDF0bzIsIG1hdGNoMik7XG5cbiAgYWRkV2Vla1BhcnNlVG9rZW4oXG4gICAgWyd3JywgJ3d3JywgJ1cnLCAnV1cnXSxcbiAgICBmdW5jdGlvbihpbnB1dDogc3RyaW5nLCB3ZWVrOiBXZWVrUGFyc2luZywgY29uZmlnOiBEYXRlUGFyc2luZ0NvbmZpZywgdG9rZW46IHN0cmluZyk6IERhdGVQYXJzaW5nQ29uZmlnIHtcbiAgICAgIHdlZWtbdG9rZW4uc3Vic3RyKDAsIDEpXSA9IHRvSW50KGlucHV0KTtcblxuICAgICAgcmV0dXJuIGNvbmZpZztcbiAgICB9XG4gICk7XG5cbi8vIGV4cG9ydCBmdW5jdGlvbiBnZXRTZXRXZWVrIChpbnB1dCkge1xuLy8gICB2YXIgd2VlayA9IHRoaXMubG9jYWxlRGF0YSgpLndlZWsodGhpcyk7XG4vLyAgIHJldHVybiBpbnB1dCA9PSBudWxsID8gd2VlayA6IHRoaXMuYWRkKChpbnB1dCAtIHdlZWspICogNywgJ2QnKTtcbi8vIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldFdlZWsoZGF0ZTogRGF0ZSwgaW5wdXQ6IG51bWJlciwgbG9jYWxlID0gZ2V0TG9jYWxlKCkpOiBEYXRlIHtcbiAgY29uc3Qgd2VlayA9IGdldFdlZWsoZGF0ZSwgbG9jYWxlKTtcblxuICByZXR1cm4gYWRkKGRhdGUsIChpbnB1dCAtIHdlZWspICogNywgJ2RheScpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0V2VlayhkYXRlOiBEYXRlLCBsb2NhbGUgPSBnZXRMb2NhbGUoKSwgaXNVVEM/OiBib29sZWFuKTogbnVtYmVyIHtcbiAgcmV0dXJuIGxvY2FsZS53ZWVrKGRhdGUsIGlzVVRDKTtcbn1cblxuLy8gZXhwb3J0IGZ1bmN0aW9uIGdldFNldElTT1dlZWsgKGlucHV0KSB7XG4vLyAgIHZhciB3ZWVrID0gd2Vla09mWWVhcih0aGlzLCAxLCA0KS53ZWVrO1xuLy8gICByZXR1cm4gaW5wdXQgPT0gbnVsbCA/IHdlZWsgOiB0aGlzLmFkZCgoaW5wdXQgLSB3ZWVrKSAqIDcsICdkJyk7XG4vLyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRJU09XZWVrKGRhdGU6IERhdGUsIGlucHV0OiBudW1iZXIpOiBEYXRlIHtcbiAgY29uc3Qgd2VlayA9IGdldElTT1dlZWsoZGF0ZSk7XG5cbiAgcmV0dXJuIGFkZChkYXRlLCAoaW5wdXQgLSB3ZWVrKSAqIDcsICdkYXknKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldElTT1dlZWsoZGF0ZTogRGF0ZSwgaXNVVEM/OiBib29sZWFuKTogbnVtYmVyIHtcbiAgcmV0dXJuIHdlZWtPZlllYXIoZGF0ZSwgMSwgNCwgaXNVVEMpLndlZWs7XG59XG5cbiIsImltcG9ydCB7IGFkZEZvcm1hdFRva2VuIH0gZnJvbSAnLi4vZm9ybWF0L2Zvcm1hdCc7XG5pbXBvcnQgeyBhZGRVbml0QWxpYXMgfSBmcm9tICcuL2FsaWFzZXMnO1xuaW1wb3J0IHsgYWRkVW5pdFByaW9yaXR5IH0gZnJvbSAnLi9wcmlvcml0aWVzJztcbmltcG9ydCB7IGFkZFJlZ2V4VG9rZW4sIG1hdGNoMXRvMiwgbWF0Y2gxdG80LCBtYXRjaDF0bzYsIG1hdGNoMiwgbWF0Y2g0LCBtYXRjaDYsIG1hdGNoU2lnbmVkIH0gZnJvbSAnLi4vcGFyc2UvcmVnZXgnO1xuaW1wb3J0IHsgYWRkV2Vla1BhcnNlVG9rZW4gfSBmcm9tICcuLi9wYXJzZS90b2tlbic7XG5pbXBvcnQgeyB0b0ludCB9IGZyb20gJy4uL3V0aWxzL3R5cGUtY2hlY2tzJztcbmltcG9ydCB7IHBhcnNlVHdvRGlnaXRZZWFyIH0gZnJvbSAnLi95ZWFyJztcbmltcG9ydCB7IGRheU9mWWVhckZyb21XZWVrcywgd2Vla09mWWVhciwgd2Vla3NJblllYXIgfSBmcm9tICcuL3dlZWstY2FsZW5kYXItdXRpbHMnO1xuaW1wb3J0IHsgY3JlYXRlVVRDRGF0ZSB9IGZyb20gJy4uL2NyZWF0ZS9kYXRlLWZyb20tYXJyYXknO1xuaW1wb3J0IHsgZ2V0SVNPV2VlaywgZ2V0V2VlayB9IGZyb20gJy4vd2Vlayc7XG5pbXBvcnQgeyBnZXRJU09EYXlPZldlZWssIGdldExvY2FsZURheU9mV2VlayB9IGZyb20gJy4vZGF5LW9mLXdlZWsnO1xuaW1wb3J0IHsgZ2V0TG9jYWxlIH0gZnJvbSAnLi4vbG9jYWxlL2xvY2FsZXMnO1xuaW1wb3J0IHsgc2V0RGF0ZSwgc2V0RnVsbFllYXIsIHNldE1vbnRoIH0gZnJvbSAnLi4vdXRpbHMvZGF0ZS1zZXR0ZXJzJztcbmltcG9ydCB7IGdldERhdGUsIGdldEZ1bGxZZWFyLCBnZXRNb250aCB9IGZyb20gJy4uL3V0aWxzL2RhdGUtZ2V0dGVycyc7XG5pbXBvcnQgeyBMb2NhbGUgfSBmcm9tICcuLi9sb2NhbGUvbG9jYWxlLmNsYXNzJztcbmltcG9ydCB7IERhdGVGb3JtYXR0ZXJGbiwgRGF0ZUZvcm1hdHRlck9wdGlvbnMsIFdlZWtQYXJzaW5nIH0gZnJvbSAnLi4vdHlwZXMnO1xuXG4vLyBGT1JNQVRUSU5HXG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0V2Vla1llYXIoKSB7XG4gIGFkZEZvcm1hdFRva2VuKG51bGwsIFsnZ2cnLCAyLCBmYWxzZV0sIG51bGwsXG4gICAgZnVuY3Rpb24gKGRhdGU6IERhdGUsIG9wdHM6IERhdGVGb3JtYXR0ZXJPcHRpb25zKTogc3RyaW5nIHtcbiAgICAgIC8vIHJldHVybiB0aGlzLndlZWtZZWFyKCkgJSAxMDA7XG4gICAgICByZXR1cm4gKGdldFdlZWtZZWFyKGRhdGUsIG9wdHMubG9jYWxlKSAlIDEwMCkudG9TdHJpbmcoKTtcbiAgICB9XG4gICk7XG5cbiAgYWRkRm9ybWF0VG9rZW4obnVsbCwgWydHRycsIDIsIGZhbHNlXSwgbnVsbCxcbiAgICBmdW5jdGlvbiAoZGF0ZTogRGF0ZSk6IHN0cmluZyB7XG4gICAgICAvLyByZXR1cm4gdGhpcy5pc29XZWVrWWVhcigpICUgMTAwO1xuICAgICAgcmV0dXJuIChnZXRJU09XZWVrWWVhcihkYXRlKSAlIDEwMCkudG9TdHJpbmcoKTtcbiAgICB9XG4gICk7XG5cbiAgYWRkV2Vla1llYXJGb3JtYXRUb2tlbignZ2dnZycsIF9nZXRXZWVrWWVhckZvcm1hdENiKTtcbiAgYWRkV2Vla1llYXJGb3JtYXRUb2tlbignZ2dnZ2cnLCBfZ2V0V2Vla1llYXJGb3JtYXRDYik7XG4gIGFkZFdlZWtZZWFyRm9ybWF0VG9rZW4oJ0dHR0cnLCBfZ2V0SVNPV2Vla1llYXJGb3JtYXRDYik7XG4gIGFkZFdlZWtZZWFyRm9ybWF0VG9rZW4oJ0dHR0dHJywgX2dldElTT1dlZWtZZWFyRm9ybWF0Q2IpO1xuXG4vLyBBTElBU0VTXG5cbiAgYWRkVW5pdEFsaWFzKCd3ZWVrWWVhcicsICdnZycpO1xuICBhZGRVbml0QWxpYXMoJ2lzb1dlZWtZZWFyJywgJ0dHJyk7XG5cbi8vIFBSSU9SSVRZXG5cbiAgYWRkVW5pdFByaW9yaXR5KCd3ZWVrWWVhcicsIDEpO1xuICBhZGRVbml0UHJpb3JpdHkoJ2lzb1dlZWtZZWFyJywgMSk7XG5cblxuLy8gUEFSU0lOR1xuXG4gIGFkZFJlZ2V4VG9rZW4oJ0cnLCBtYXRjaFNpZ25lZCk7XG4gIGFkZFJlZ2V4VG9rZW4oJ2cnLCBtYXRjaFNpZ25lZCk7XG4gIGFkZFJlZ2V4VG9rZW4oJ0dHJywgbWF0Y2gxdG8yLCBtYXRjaDIpO1xuICBhZGRSZWdleFRva2VuKCdnZycsIG1hdGNoMXRvMiwgbWF0Y2gyKTtcbiAgYWRkUmVnZXhUb2tlbignR0dHRycsIG1hdGNoMXRvNCwgbWF0Y2g0KTtcbiAgYWRkUmVnZXhUb2tlbignZ2dnZycsIG1hdGNoMXRvNCwgbWF0Y2g0KTtcbiAgYWRkUmVnZXhUb2tlbignR0dHR0cnLCBtYXRjaDF0bzYsIG1hdGNoNik7XG4gIGFkZFJlZ2V4VG9rZW4oJ2dnZ2dnJywgbWF0Y2gxdG82LCBtYXRjaDYpO1xuXG4gIGFkZFdlZWtQYXJzZVRva2VuKFsnZ2dnZycsICdnZ2dnZycsICdHR0dHJywgJ0dHR0dHJ10sXG4gICAgZnVuY3Rpb24gKGlucHV0LCB3ZWVrOiBXZWVrUGFyc2luZywgY29uZmlnLCB0b2tlbikge1xuICAgICAgd2Vla1t0b2tlbi5zdWJzdHIoMCwgMildID0gdG9JbnQoaW5wdXQpO1xuXG4gICAgICByZXR1cm4gY29uZmlnO1xuICAgIH0pO1xuXG4gIGFkZFdlZWtQYXJzZVRva2VuKFsnZ2cnLCAnR0cnXSwgZnVuY3Rpb24gKGlucHV0LCB3ZWVrOiBXZWVrUGFyc2luZywgY29uZmlnLCB0b2tlbikge1xuICAgIHdlZWtbdG9rZW5dID0gcGFyc2VUd29EaWdpdFllYXIoaW5wdXQpO1xuXG4gICAgcmV0dXJuIGNvbmZpZztcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGFkZFdlZWtZZWFyRm9ybWF0VG9rZW4odG9rZW46IHN0cmluZywgZ2V0dGVyOiBEYXRlRm9ybWF0dGVyRm4pOiB2b2lkIHtcbiAgYWRkRm9ybWF0VG9rZW4obnVsbCwgW3Rva2VuLCB0b2tlbi5sZW5ndGgsIGZhbHNlXSwgbnVsbCwgZ2V0dGVyKTtcbn1cblxuZnVuY3Rpb24gX2dldFdlZWtZZWFyRm9ybWF0Q2IoZGF0ZTogRGF0ZSwgb3B0czogRGF0ZUZvcm1hdHRlck9wdGlvbnMpOiBzdHJpbmcge1xuICByZXR1cm4gZ2V0V2Vla1llYXIoZGF0ZSwgb3B0cy5sb2NhbGUpLnRvU3RyaW5nKCk7XG59XG5cbmZ1bmN0aW9uIF9nZXRJU09XZWVrWWVhckZvcm1hdENiKGRhdGU6IERhdGUpOiBzdHJpbmcge1xuICByZXR1cm4gZ2V0SVNPV2Vla1llYXIoZGF0ZSkudG9TdHJpbmcoKTtcbn1cblxuLy8gTU9NRU5UU1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2V0V2Vla1llYXIoZGF0ZTogRGF0ZSwgaW5wdXQ6IG51bWJlciwgbG9jYWxlID0gZ2V0TG9jYWxlKCksIGlzVVRDPzogYm9vbGVhbik6IG51bWJlciB8IERhdGUge1xuICByZXR1cm4gZ2V0U2V0V2Vla1llYXJIZWxwZXIoZGF0ZSxcbiAgICBpbnB1dCxcbiAgICAvLyB0aGlzLndlZWsoKSxcbiAgICBnZXRXZWVrKGRhdGUsIGxvY2FsZSwgaXNVVEMpLFxuICAgIC8vIHRoaXMud2Vla2RheSgpLFxuICAgIGdldExvY2FsZURheU9mV2VlayhkYXRlLCBsb2NhbGUsIGlzVVRDKSxcbiAgICBsb2NhbGUuZmlyc3REYXlPZldlZWsoKSxcbiAgICBsb2NhbGUuZmlyc3REYXlPZlllYXIoKSxcbiAgICBpc1VUQyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRXZWVrWWVhcihkYXRlOiBEYXRlLCBsb2NhbGUgPSBnZXRMb2NhbGUoKSwgaXNVVEM/OiBib29sZWFuKTogbnVtYmVyIHtcbiAgcmV0dXJuIHdlZWtPZlllYXIoZGF0ZSwgbG9jYWxlLmZpcnN0RGF5T2ZXZWVrKCksIGxvY2FsZS5maXJzdERheU9mWWVhcigpLCBpc1VUQykueWVhcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNldElTT1dlZWtZZWFyKGRhdGU6IERhdGUsIGlucHV0OiBudW1iZXIsIGlzVVRDPzogYm9vbGVhbik6IG51bWJlciB8IERhdGUge1xuICByZXR1cm4gZ2V0U2V0V2Vla1llYXJIZWxwZXIoZGF0ZSwgaW5wdXQsIGdldElTT1dlZWsoZGF0ZSwgaXNVVEMpLCBnZXRJU09EYXlPZldlZWsoZGF0ZSwgaXNVVEMpLCAxLCA0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldElTT1dlZWtZZWFyKGRhdGU6IERhdGUsIGlzVVRDPzogYm9vbGVhbik6IG51bWJlciB7XG4gIHJldHVybiB3ZWVrT2ZZZWFyKGRhdGUsIDEsIDQsIGlzVVRDKS55ZWFyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0SVNPV2Vla3NJblllYXIoZGF0ZTogRGF0ZSwgaXNVVEM/OiBib29sZWFuKSB7XG4gIHJldHVybiB3ZWVrc0luWWVhcihnZXRGdWxsWWVhcihkYXRlLCBpc1VUQyksIDEsIDQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0V2Vla3NJblllYXIoZGF0ZTogRGF0ZSwgaXNVVEM/OiBib29sZWFuLCBsb2NhbGU6IExvY2FsZSA9IGdldExvY2FsZSgpKTogbnVtYmVyIHtcbiAgcmV0dXJuIHdlZWtzSW5ZZWFyKGdldEZ1bGxZZWFyKGRhdGUsIGlzVVRDKSwgbG9jYWxlLmZpcnN0RGF5T2ZXZWVrKCksIGxvY2FsZS5maXJzdERheU9mWWVhcigpKTtcbn1cblxuZnVuY3Rpb24gZ2V0U2V0V2Vla1llYXJIZWxwZXIoZGF0ZTogRGF0ZSwgaW5wdXQ6IG51bWJlciwgd2VlazogbnVtYmVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2Vla2RheTogbnVtYmVyLCBkb3c6IG51bWJlciwgZG95OiBudW1iZXIsIGlzVVRDPzogYm9vbGVhbik6IG51bWJlciB8IERhdGUge1xuICBpZiAoIWlucHV0KSB7XG4gICAgcmV0dXJuIGdldFdlZWtZZWFyKGRhdGUsIHZvaWQgMCwgaXNVVEMpO1xuICB9XG5cbiAgY29uc3Qgd2Vla3NUYXJnZXQgPSB3ZWVrc0luWWVhcihpbnB1dCwgZG93LCBkb3kpO1xuICBjb25zdCBfd2VlayA9IHdlZWsgPiB3ZWVrc1RhcmdldCA/IHdlZWtzVGFyZ2V0IDogd2VlaztcblxuICByZXR1cm4gc2V0V2Vla0FsbChkYXRlLCBpbnB1dCwgX3dlZWssIHdlZWtkYXksIGRvdywgZG95KTtcbn1cblxuZnVuY3Rpb24gc2V0V2Vla0FsbChkYXRlOiBEYXRlLCB3ZWVrWWVhcjogbnVtYmVyLCB3ZWVrOiBudW1iZXIsXG4gICAgICAgICAgICAgICAgICAgIHdlZWtkYXk6IG51bWJlciwgZG93OiBudW1iZXIsIGRveTogbnVtYmVyKTogRGF0ZSB7XG4gIGNvbnN0IGRheU9mWWVhckRhdGEgPSBkYXlPZlllYXJGcm9tV2Vla3Mod2Vla1llYXIsIHdlZWssIHdlZWtkYXksIGRvdywgZG95KTtcbiAgY29uc3QgX2RhdGUgPSBjcmVhdGVVVENEYXRlKGRheU9mWWVhckRhdGEueWVhciwgMCwgZGF5T2ZZZWFyRGF0YS5kYXlPZlllYXIpO1xuICBzZXRGdWxsWWVhcihkYXRlLCBnZXRGdWxsWWVhcihfZGF0ZSwgdHJ1ZSksIHRydWUpO1xuICBzZXRNb250aChkYXRlLCBnZXRNb250aChfZGF0ZSwgdHJ1ZSksIHRydWUpO1xuICBzZXREYXRlKGRhdGUsIGdldERhdGUoX2RhdGUsIHRydWUpLCB0cnVlKTtcblxuICByZXR1cm4gZGF0ZTtcbn1cbiIsImltcG9ydCB7IGFkZEZvcm1hdFRva2VuIH0gZnJvbSAnLi4vZm9ybWF0L2Zvcm1hdCc7XG5pbXBvcnQgeyBEYXRlRm9ybWF0dGVyT3B0aW9ucyB9IGZyb20gJy4uL3R5cGVzJztcblxuLy8gdG9kbzogYWRkIHN1cHBvcnQgZm9yIHRpbWV6b25lc1xuXG5leHBvcnQgZnVuY3Rpb24gaW5pdFRpbWV6b25lKCkge1xuICAvLyBGT1JNQVRUSU5HXG4gIGFkZEZvcm1hdFRva2VuKCd6JywgbnVsbCwgbnVsbCxcbiAgICBmdW5jdGlvbihkYXRlOiBEYXRlLCBvcHRzOiBEYXRlRm9ybWF0dGVyT3B0aW9ucyk6IHN0cmluZyB7XG4gICAgICByZXR1cm4gb3B0cy5pc1VUQyA/ICdVVEMnIDogJyc7XG4gICAgfVxuICApO1xuICBhZGRGb3JtYXRUb2tlbignenonLCBudWxsLCBudWxsLFxuICAgIGZ1bmN0aW9uKGRhdGU6IERhdGUsIG9wdHM6IERhdGVGb3JtYXR0ZXJPcHRpb25zKTogc3RyaW5nIHtcbiAgICAgIHJldHVybiBvcHRzLmlzVVRDID8gJ0Nvb3JkaW5hdGVkIFVuaXZlcnNhbCBUaW1lJyA6ICcnO1xuICAgIH1cbiAgKTtcbn1cblxuLy8gTU9NRU5UU1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Wm9uZUFiYnIoaXNVVEM6IGJvb2xlYW4pIHtcbiAgcmV0dXJuIGlzVVRDID8gJ1VUQycgOiAnJztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFpvbmVOYW1lKGlzVVRDOiBib29sZWFuKSB7XG4gIHJldHVybiBpc1VUQyA/ICdDb29yZGluYXRlZCBVbml2ZXJzYWwgVGltZScgOiAnJztcbn1cbiIsImltcG9ydCB7IGFkZEZvcm1hdFRva2VuIH0gZnJvbSAnLi4vZm9ybWF0L2Zvcm1hdCc7XG5pbXBvcnQgeyB1bml4IH0gZnJvbSAnLi4vdXRpbHMvZGF0ZS1nZXR0ZXJzJztcbmltcG9ydCB7IGFkZFJlZ2V4VG9rZW4sIG1hdGNoU2lnbmVkLCBtYXRjaFRpbWVzdGFtcCB9IGZyb20gJy4uL3BhcnNlL3JlZ2V4JztcbmltcG9ydCB7IGFkZFBhcnNlVG9rZW59IGZyb20gJy4uL3BhcnNlL3Rva2VuJztcbmltcG9ydCB7IHRvSW50IH0gZnJvbSAnLi4vdXRpbHMvdHlwZS1jaGVja3MnO1xuaW1wb3J0IHsgRGF0ZUFycmF5IH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgRGF0ZVBhcnNpbmdDb25maWcgfSBmcm9tICcuLi9jcmVhdGUvcGFyc2luZy50eXBlcyc7XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRUaW1lc3RhbXAoKSB7XG4vLyBGT1JNQVRUSU5HXG5cbiAgYWRkRm9ybWF0VG9rZW4oJ1gnLCBudWxsLCBudWxsLCBmdW5jdGlvbihkYXRlOiBEYXRlKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdW5peChkYXRlKVxuICAgICAgLnRvU3RyaW5nKDEwKTtcbiAgfSk7XG4gIGFkZEZvcm1hdFRva2VuKCd4JywgbnVsbCwgbnVsbCwgZnVuY3Rpb24oZGF0ZTogRGF0ZSk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGRhdGUudmFsdWVPZigpXG4gICAgICAudG9TdHJpbmcoMTApO1xuICB9KTtcblxuLy8gUEFSU0lOR1xuXG4gIGFkZFJlZ2V4VG9rZW4oJ3gnLCBtYXRjaFNpZ25lZCk7XG4gIGFkZFJlZ2V4VG9rZW4oJ1gnLCBtYXRjaFRpbWVzdGFtcCk7XG5cbiAgYWRkUGFyc2VUb2tlbignWCcsIGZ1bmN0aW9uKGlucHV0OiBzdHJpbmcsIGFycmF5OiBEYXRlQXJyYXksIGNvbmZpZzogRGF0ZVBhcnNpbmdDb25maWcpOiBEYXRlUGFyc2luZ0NvbmZpZyB7XG4gICAgY29uZmlnLl9kID0gbmV3IERhdGUocGFyc2VGbG9hdChpbnB1dCkgKiAxMDAwKTtcblxuICAgIHJldHVybiBjb25maWc7XG4gIH0pO1xuICBhZGRQYXJzZVRva2VuKCd4JywgZnVuY3Rpb24oaW5wdXQ6IHN0cmluZywgYXJyYXk6IERhdGVBcnJheSwgY29uZmlnOiBEYXRlUGFyc2luZ0NvbmZpZyk6IERhdGVQYXJzaW5nQ29uZmlnIHtcbiAgICBjb25maWcuX2QgPSBuZXcgRGF0ZSh0b0ludChpbnB1dCkpO1xuXG4gICAgcmV0dXJuIGNvbmZpZztcbiAgfSk7XG59XG4iLCJpbXBvcnQgeyBhZGRGb3JtYXRUb2tlbiB9IGZyb20gJy4uL2Zvcm1hdC9mb3JtYXQnO1xuaW1wb3J0IHsgZ2V0U2Vjb25kcyB9IGZyb20gJy4uL3V0aWxzL2RhdGUtZ2V0dGVycyc7XG5pbXBvcnQgeyBhZGRSZWdleFRva2VuLCBtYXRjaDF0bzIsIG1hdGNoMiB9IGZyb20gJy4uL3BhcnNlL3JlZ2V4JztcbmltcG9ydCB7IGFkZFBhcnNlVG9rZW4gfSBmcm9tICcuLi9wYXJzZS90b2tlbic7XG5pbXBvcnQgeyBTRUNPTkQgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBhZGRVbml0QWxpYXMgfSBmcm9tICcuL2FsaWFzZXMnO1xuaW1wb3J0IHsgYWRkVW5pdFByaW9yaXR5IH0gZnJvbSAnLi9wcmlvcml0aWVzJztcbmltcG9ydCB7IERhdGVGb3JtYXR0ZXJPcHRpb25zIH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0U2Vjb25kKCkge1xuLy8gRk9STUFUVElOR1xuXG4gIGFkZEZvcm1hdFRva2VuKCdzJywgWydzcycsIDIsIGZhbHNlXSwgbnVsbCxcbiAgICBmdW5jdGlvbihkYXRlOiBEYXRlLCBvcHRzOiBEYXRlRm9ybWF0dGVyT3B0aW9ucyk6IHN0cmluZyB7XG4gICAgICByZXR1cm4gZ2V0U2Vjb25kcyhkYXRlLCBvcHRzLmlzVVRDKVxuICAgICAgICAudG9TdHJpbmcoMTApO1xuICAgIH1cbiAgKTtcblxuLy8gQUxJQVNFU1xuXG4gIGFkZFVuaXRBbGlhcygnc2Vjb25kJywgJ3MnKTtcblxuLy8gUFJJT1JJVFlcblxuICBhZGRVbml0UHJpb3JpdHkoJ3NlY29uZCcsIDE1KTtcblxuLy8gUEFSU0lOR1xuXG4gIGFkZFJlZ2V4VG9rZW4oJ3MnLCBtYXRjaDF0bzIpO1xuICBhZGRSZWdleFRva2VuKCdzcycsIG1hdGNoMXRvMiwgbWF0Y2gyKTtcbiAgYWRkUGFyc2VUb2tlbihbJ3MnLCAnc3MnXSwgU0VDT05EKTtcbn1cbiIsImltcG9ydCB7IGFkZEZvcm1hdFRva2VuIH0gZnJvbSAnLi4vZm9ybWF0L2Zvcm1hdCc7XG5pbXBvcnQgeyBhZGRSZWdleFRva2VuLCBtYXRjaDEgfSBmcm9tICcuLi9wYXJzZS9yZWdleCc7XG5pbXBvcnQgeyBhZGRQYXJzZVRva2VuIH0gZnJvbSAnLi4vcGFyc2UvdG9rZW4nO1xuaW1wb3J0IHsgTU9OVEggfSBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQgeyB0b0ludCB9IGZyb20gJy4uL3V0aWxzL3R5cGUtY2hlY2tzJztcbmltcG9ydCB7IGdldE1vbnRoIH0gZnJvbSAnLi4vdXRpbHMvZGF0ZS1nZXR0ZXJzJztcbmltcG9ydCB7IERhdGVBcnJheSwgRGF0ZUZvcm1hdHRlck9wdGlvbnMgfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBhZGRVbml0UHJpb3JpdHkgfSBmcm9tICcuL3ByaW9yaXRpZXMnO1xuaW1wb3J0IHsgYWRkVW5pdEFsaWFzIH0gZnJvbSAnLi9hbGlhc2VzJztcbmltcG9ydCB7IERhdGVQYXJzaW5nQ29uZmlnIH0gZnJvbSAnLi4vY3JlYXRlL3BhcnNpbmcudHlwZXMnO1xuaW1wb3J0IHsgc2V0TW9udGggfSBmcm9tICcuLi91dGlscy9kYXRlLXNldHRlcnMnO1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0UXVhcnRlcigpIHtcbi8vIEZPUk1BVFRJTkdcblxuICBhZGRGb3JtYXRUb2tlbignUScsIG51bGwsICdRbycsXG4gICAgZnVuY3Rpb24oZGF0ZTogRGF0ZSwgb3B0czogRGF0ZUZvcm1hdHRlck9wdGlvbnMpOiBzdHJpbmcge1xuICAgICAgcmV0dXJuIGdldFF1YXJ0ZXIoZGF0ZSwgb3B0cy5pc1VUQylcbiAgICAgICAgLnRvU3RyaW5nKDEwKTtcbiAgICB9XG4gICk7XG5cbi8vIEFMSUFTRVNcblxuICBhZGRVbml0QWxpYXMoJ3F1YXJ0ZXInLCAnUScpO1xuXG4vLyBQUklPUklUWVxuXG4gIGFkZFVuaXRQcmlvcml0eSgncXVhcnRlcicsIDcpO1xuXG4vLyBQQVJTSU5HXG5cbiAgYWRkUmVnZXhUb2tlbignUScsIG1hdGNoMSk7XG4gIGFkZFBhcnNlVG9rZW4oJ1EnLCBmdW5jdGlvbihpbnB1dDogc3RyaW5nLCBhcnJheTogRGF0ZUFycmF5LCBjb25maWc6IERhdGVQYXJzaW5nQ29uZmlnKTogRGF0ZVBhcnNpbmdDb25maWcge1xuICAgIGFycmF5W01PTlRIXSA9ICh0b0ludChpbnB1dCkgLSAxKSAqIDM7XG5cbiAgICByZXR1cm4gY29uZmlnO1xuICB9KTtcbn1cblxuLy8gTU9NRU5UU1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UXVhcnRlcihkYXRlOiBEYXRlLCBpc1VUQyA9IGZhbHNlKTogbnVtYmVyIHtcbiAgcmV0dXJuIE1hdGguY2VpbCgoZ2V0TW9udGgoZGF0ZSwgaXNVVEMpICsgMSkgLyAzKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldFF1YXJ0ZXIoZGF0ZTogRGF0ZSwgcXVhcnRlcjogbnVtYmVyLCBpc1VUQz86IGJvb2xlYW4pOiBEYXRlIHtcbiAgcmV0dXJuIHNldE1vbnRoKGRhdGUsIChxdWFydGVyIC0gMSkgKiAzICsgZ2V0TW9udGgoZGF0ZSwgaXNVVEMpICUgMywgaXNVVEMpO1xufVxuXG4vLyBleHBvcnQgZnVuY3Rpb24gZ2V0U2V0UXVhcnRlcihpbnB1dCkge1xuLy8gICByZXR1cm4gaW5wdXQgPT0gbnVsbFxuLy8gICAgID8gTWF0aC5jZWlsKCh0aGlzLm1vbnRoKCkgKyAxKSAvIDMpXG4vLyAgICAgOiB0aGlzLm1vbnRoKChpbnB1dCAtIDEpICogMyArIHRoaXMubW9udGgoKSAlIDMpO1xuLy8gfVxuIiwiLy8gdHNsaW50OmRpc2FibGU6bm8tYml0d2lzZSBtYXgtbGluZS1sZW5ndGhcbi8vIEZPUk1BVFRJTkdcblxuaW1wb3J0IHsgYWRkRm9ybWF0VG9rZW4gfSBmcm9tICcuLi9mb3JtYXQvZm9ybWF0JztcbmltcG9ydCB7IHplcm9GaWxsIH0gZnJvbSAnLi4vdXRpbHMvemVyby1maWxsJztcbmltcG9ydCB7IERhdGVQYXJzaW5nQ29uZmlnIH0gZnJvbSAnLi4vY3JlYXRlL3BhcnNpbmcudHlwZXMnO1xuaW1wb3J0IHsgaXNOdW1iZXIsIGlzU3RyaW5nLCB0b0ludCB9IGZyb20gJy4uL3V0aWxzL3R5cGUtY2hlY2tzJztcbmltcG9ydCB7IGFkZFJlZ2V4VG9rZW4sIG1hdGNoT2Zmc2V0LCBtYXRjaFNob3J0T2Zmc2V0IH0gZnJvbSAnLi4vcGFyc2UvcmVnZXgnO1xuaW1wb3J0IHsgYWRkIH0gZnJvbSAnLi4vbW9tZW50L2FkZC1zdWJ0cmFjdCc7XG5pbXBvcnQgeyBhZGRQYXJzZVRva2VuIH0gZnJvbSAnLi4vcGFyc2UvdG9rZW4nO1xuaW1wb3J0IHsgRGF0ZUFycmF5IH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgY2xvbmVEYXRlIH0gZnJvbSAnLi4vY3JlYXRlL2Nsb25lJztcbmltcG9ydCB7IHNldE1vbnRoIH0gZnJvbSAnLi4vdXRpbHMvZGF0ZS1zZXR0ZXJzJztcblxuZnVuY3Rpb24gYWRkT2Zmc2V0Rm9ybWF0VG9rZW4odG9rZW46IHN0cmluZywgc2VwYXJhdG9yOiBzdHJpbmcpOiB2b2lkIHtcbiAgYWRkRm9ybWF0VG9rZW4odG9rZW4sIG51bGwsIG51bGwsIGZ1bmN0aW9uIChkYXRlOiBEYXRlLCBjb25maWcpOiBzdHJpbmcge1xuICAgIGxldCBvZmZzZXQgPSBnZXRVVENPZmZzZXQoZGF0ZSwge19pc1VUQzogY29uZmlnLmlzVVRDLCBfb2Zmc2V0OiBjb25maWcub2Zmc2V0fSk7XG4gICAgbGV0IHNpZ24gPSAnKyc7XG4gICAgaWYgKG9mZnNldCA8IDApIHtcbiAgICAgIG9mZnNldCA9IC1vZmZzZXQ7XG4gICAgICBzaWduID0gJy0nO1xuICAgIH1cblxuICAgIHJldHVybiBzaWduICsgemVyb0ZpbGwofn4ob2Zmc2V0IC8gNjApLCAyKSArIHNlcGFyYXRvciArIHplcm9GaWxsKH5+KG9mZnNldCkgJSA2MCwgMik7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5pdE9mZnNldCgpIHtcbiAgYWRkT2Zmc2V0Rm9ybWF0VG9rZW4oJ1onLCAnOicpO1xuICBhZGRPZmZzZXRGb3JtYXRUb2tlbignWlonLCAnJyk7XG5cbi8vIFBBUlNJTkdcblxuICBhZGRSZWdleFRva2VuKCdaJywgbWF0Y2hTaG9ydE9mZnNldCk7XG4gIGFkZFJlZ2V4VG9rZW4oJ1paJywgbWF0Y2hTaG9ydE9mZnNldCk7XG4gIGFkZFBhcnNlVG9rZW4oWydaJywgJ1paJ10sIGZ1bmN0aW9uKGlucHV0OiBzdHJpbmcsIGFycmF5OiBEYXRlQXJyYXksIGNvbmZpZzogRGF0ZVBhcnNpbmdDb25maWcpOiBEYXRlUGFyc2luZ0NvbmZpZyB7XG4gICAgY29uZmlnLl91c2VVVEMgPSB0cnVlO1xuICAgIGNvbmZpZy5fdHptID0gb2Zmc2V0RnJvbVN0cmluZyhtYXRjaFNob3J0T2Zmc2V0LCBpbnB1dCk7XG5cbiAgICByZXR1cm4gY29uZmlnO1xuICB9KTtcbn1cblxuLy8gSEVMUEVSU1xuXG4vLyB0aW1lem9uZSBjaHVua2VyXG4vLyAnKzEwOjAwJyA+IFsnMTAnLCAgJzAwJ11cbi8vICctMTUzMCcgID4gWyctMTUnLCAnMzAnXVxuY29uc3QgY2h1bmtPZmZzZXQgPSAvKFtcXCtcXC1dfFxcZFxcZCkvZ2k7XG5cbmZ1bmN0aW9uIG9mZnNldEZyb21TdHJpbmcobWF0Y2hlcjogUmVnRXhwLCBzdHI6IHN0cmluZyk6IG51bWJlciB7XG4gIGNvbnN0IG1hdGNoZXMgPSAoc3RyIHx8ICcnKS5tYXRjaChtYXRjaGVyKTtcblxuICBpZiAobWF0Y2hlcyA9PT0gbnVsbCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgY29uc3QgY2h1bmsgPSBtYXRjaGVzW21hdGNoZXMubGVuZ3RoIC0gMV07XG4gIGNvbnN0IHBhcnRzID0gY2h1bmsubWF0Y2goY2h1bmtPZmZzZXQpIHx8IFsnLScsICcwJywgJzAnXTtcbiAgY29uc3QgbWludXRlcyA9IHBhcnNlSW50KHBhcnRzWzFdLCAxMCkgKiA2MCArIHRvSW50KHBhcnRzWzJdKTtcbiAgY29uc3QgX21pbiA9IHBhcnRzWzBdID09PSAnKycgPyBtaW51dGVzIDogLW1pbnV0ZXM7XG5cbiAgcmV0dXJuIG1pbnV0ZXMgPT09IDAgPyAwIDogX21pbjtcbn1cblxuLy8gUmV0dXJuIGEgbW9tZW50IGZyb20gaW5wdXQsIHRoYXQgaXMgbG9jYWwvdXRjL3pvbmUgZXF1aXZhbGVudCB0byBtb2RlbC5cbmV4cG9ydCBmdW5jdGlvbiBjbG9uZVdpdGhPZmZzZXQoaW5wdXQ6IERhdGUsIGRhdGU6IERhdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpZzogRGF0ZVBhcnNpbmdDb25maWcgPSB7fSk6IERhdGUge1xuICBpZiAoIWNvbmZpZy5faXNVVEMpIHtcbiAgICByZXR1cm4gaW5wdXQ7XG4gIH1cblxuICBjb25zdCByZXMgPSBjbG9uZURhdGUoZGF0ZSk7XG4gIC8vIHRvZG86IGlucHV0Ll9kIC0gcmVzLl9kICsgKChyZXMuX29mZnNldCB8fCAwKSAtIChpbnB1dC5fb2Zmc2V0IHx8IDApKSo2MDAwMFxuICBjb25zdCBvZmZzZXREaWZmID0gKGNvbmZpZy5fb2Zmc2V0IHx8IDApICogNjAwMDA7XG4gIGNvbnN0IGRpZmYgPSBpbnB1dC52YWx1ZU9mKCkgLSByZXMudmFsdWVPZigpICsgb2Zmc2V0RGlmZjtcbiAgLy8gVXNlIGxvdy1sZXZlbCBhcGksIGJlY2F1c2UgdGhpcyBmbiBpcyBsb3ctbGV2ZWwgYXBpLlxuICByZXMuc2V0VGltZShyZXMudmFsdWVPZigpICsgZGlmZik7XG4gIC8vIHRvZG86IGFkZCB0aW1lem9uZSBoYW5kbGluZ1xuICAvLyBob29rcy51cGRhdGVPZmZzZXQocmVzLCBmYWxzZSk7XG5cbiAgcmV0dXJuIHJlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERhdGVPZmZzZXQoZGF0ZTogRGF0ZSk6IG51bWJlciB7XG4gIC8vIE9uIEZpcmVmb3guMjQgRGF0ZSNnZXRUaW1lem9uZU9mZnNldCByZXR1cm5zIGEgZmxvYXRpbmcgcG9pbnQuXG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9tb21lbnQvbW9tZW50L3B1bGwvMTg3MVxuICByZXR1cm4gLU1hdGgucm91bmQoZGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpIC8gMTUpICogMTU7XG59XG5cbi8vIEhPT0tTXG5cbi8vIFRoaXMgZnVuY3Rpb24gd2lsbCBiZSBjYWxsZWQgd2hlbmV2ZXIgYSBtb21lbnQgaXMgbXV0YXRlZC5cbi8vIEl0IGlzIGludGVuZGVkIHRvIGtlZXAgdGhlIG9mZnNldCBpbiBzeW5jIHdpdGggdGhlIHRpbWV6b25lLlxuLy8gdG9kbzogaXQncyBmcm9tIG1vbWVudCB0aW1lem9uZXNcbi8vIGhvb2tzLnVwZGF0ZU9mZnNldCA9IGZ1bmN0aW9uICgpIHtcbi8vIH07XG5cbi8vIE1PTUVOVFNcblxuLy8ga2VlcExvY2FsVGltZSA9IHRydWUgbWVhbnMgb25seSBjaGFuZ2UgdGhlIHRpbWV6b25lLCB3aXRob3V0XG4vLyBhZmZlY3RpbmcgdGhlIGxvY2FsIGhvdXIuIFNvIDU6MzE6MjYgKzAzMDAgLS1bdXRjT2Zmc2V0KDIsIHRydWUpXS0tPlxuLy8gNTozMToyNiArMDIwMCBJdCBpcyBwb3NzaWJsZSB0aGF0IDU6MzE6MjYgZG9lc24ndCBleGlzdCB3aXRoIG9mZnNldFxuLy8gKzAyMDAsIHNvIHdlIGFkanVzdCB0aGUgdGltZSBhcyBuZWVkZWQsIHRvIGJlIHZhbGlkLlxuLy9cbi8vIEtlZXBpbmcgdGhlIHRpbWUgYWN0dWFsbHkgYWRkcy9zdWJ0cmFjdHMgKG9uZSBob3VyKVxuLy8gZnJvbSB0aGUgYWN0dWFsIHJlcHJlc2VudGVkIHRpbWUuIFRoYXQgaXMgd2h5IHdlIGNhbGwgdXBkYXRlT2Zmc2V0XG4vLyBhIHNlY29uZCB0aW1lLiBJbiBjYXNlIGl0IHdhbnRzIHVzIHRvIGNoYW5nZSB0aGUgb2Zmc2V0IGFnYWluXG4vLyBfY2hhbmdlSW5Qcm9ncmVzcyA9PSB0cnVlIGNhc2UsIHRoZW4gd2UgaGF2ZSB0byBhZGp1c3QsIGJlY2F1c2Vcbi8vIHRoZXJlIGlzIG5vIHN1Y2ggdGltZSBpbiB0aGUgZ2l2ZW4gdGltZXpvbmUuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VVRDT2Zmc2V0KGRhdGU6IERhdGUsIGNvbmZpZzogRGF0ZVBhcnNpbmdDb25maWcgPSB7fSk6IG51bWJlciB7XG4gIGNvbnN0IF9vZmZzZXQgPSBjb25maWcuX29mZnNldCB8fCAwO1xuXG4gIHJldHVybiBjb25maWcuX2lzVVRDID8gX29mZnNldCA6IGdldERhdGVPZmZzZXQoZGF0ZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRVVENPZmZzZXQoZGF0ZTogRGF0ZSwgaW5wdXQ6IG51bWJlciB8IHN0cmluZywga2VlcExvY2FsVGltZT86IGJvb2xlYW4sIGtlZXBNaW51dGVzPzogYm9vbGVhbiwgY29uZmlnOiBEYXRlUGFyc2luZ0NvbmZpZyA9IHt9KTogRGF0ZSB7XG4gIGNvbnN0IG9mZnNldCA9IGNvbmZpZy5fb2Zmc2V0IHx8IDA7XG4gIGxldCBsb2NhbEFkanVzdDtcbiAgbGV0IF9pbnB1dCA9IGlucHV0O1xuICBsZXQgX2RhdGUgPSBkYXRlO1xuXG4gIGlmIChpc1N0cmluZyhfaW5wdXQpKSB7XG4gICAgX2lucHV0ID0gb2Zmc2V0RnJvbVN0cmluZyhtYXRjaFNob3J0T2Zmc2V0LCBfaW5wdXQpO1xuICAgIGlmIChfaW5wdXQgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiBfZGF0ZTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoaXNOdW1iZXIoX2lucHV0KSAmJiBNYXRoLmFicyhfaW5wdXQpIDwgMTYgJiYgIWtlZXBNaW51dGVzKSB7XG4gICAgX2lucHV0ID0gX2lucHV0ICogNjA7XG4gIH1cblxuICBpZiAoIWNvbmZpZy5faXNVVEMgJiYga2VlcExvY2FsVGltZSkge1xuICAgIGxvY2FsQWRqdXN0ID0gZ2V0RGF0ZU9mZnNldChfZGF0ZSk7XG4gIH1cbiAgY29uZmlnLl9vZmZzZXQgPSBfaW5wdXQ7XG4gIGNvbmZpZy5faXNVVEMgPSB0cnVlO1xuICBpZiAobG9jYWxBZGp1c3QgIT0gbnVsbCkge1xuICAgIF9kYXRlID0gYWRkKF9kYXRlLCBsb2NhbEFkanVzdCwgJ21pbnV0ZXMnKTtcbiAgfVxuICBpZiAob2Zmc2V0ICE9PSBfaW5wdXQpIHtcbiAgICBpZiAoIWtlZXBMb2NhbFRpbWUgfHwgY29uZmlnLl9jaGFuZ2VJblByb2dyZXNzKSB7XG4gICAgICBfZGF0ZSA9IGFkZChfZGF0ZSwgX2lucHV0IC0gb2Zmc2V0LCAnbWludXRlcycsIGNvbmZpZy5faXNVVEMpO1xuICAgICAgLy8gYWRkU3VidHJhY3QodGhpcywgY3JlYXRlRHVyYXRpb24oX2lucHV0IC0gb2Zmc2V0LCAnbScpLCAxLCBmYWxzZSk7XG4gICAgfSBlbHNlIGlmICghY29uZmlnLl9jaGFuZ2VJblByb2dyZXNzKSB7XG4gICAgICBjb25maWcuX2NoYW5nZUluUHJvZ3Jlc3MgPSB0cnVlO1xuICAgICAgLy8gdG9kbzogYWRkIHRpbWV6b25lIGhhbmRsaW5nXG4gICAgICAvLyBob29rcy51cGRhdGVPZmZzZXQodGhpcywgdHJ1ZSk7XG4gICAgICBjb25maWcuX2NoYW5nZUluUHJvZ3Jlc3MgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBfZGF0ZTtcbn1cblxuLypcbmV4cG9ydCBmdW5jdGlvbiBnZXRTZXRab25lKGlucHV0LCBrZWVwTG9jYWxUaW1lKSB7XG4gIGlmIChpbnB1dCAhPSBudWxsKSB7XG4gICAgaWYgKHR5cGVvZiBpbnB1dCAhPT0gJ3N0cmluZycpIHtcbiAgICAgIGlucHV0ID0gLWlucHV0O1xuICAgIH1cblxuICAgIHRoaXMudXRjT2Zmc2V0KGlucHV0LCBrZWVwTG9jYWxUaW1lKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAtdGhpcy51dGNPZmZzZXQoKTtcbiAgfVxufVxuKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHNldE9mZnNldFRvVVRDKGRhdGU6IERhdGUsIGtlZXBMb2NhbFRpbWU/OiBib29sZWFuKTogRGF0ZSB7XG4gIHJldHVybiBzZXRVVENPZmZzZXQoZGF0ZSwgMCwga2VlcExvY2FsVGltZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0RheWxpZ2h0U2F2aW5nVGltZShkYXRlOiBEYXRlKTogYm9vbGVhbiB7XG5cbiAgcmV0dXJuIChnZXRVVENPZmZzZXQoZGF0ZSkgPiBnZXRVVENPZmZzZXQoc2V0TW9udGgoY2xvbmVEYXRlKGRhdGUpLCAwKSlcbiAgICB8fCBnZXRVVENPZmZzZXQoZGF0ZSkgPiBnZXRVVENPZmZzZXQoc2V0TW9udGgoY2xvbmVEYXRlKGRhdGUpLCA1KSkpO1xufVxuXG4vKmV4cG9ydCBmdW5jdGlvbiBzZXRPZmZzZXRUb0xvY2FsKGRhdGU6IERhdGUsIGlzVVRDPzogYm9vbGVhbiwga2VlcExvY2FsVGltZT86IGJvb2xlYW4pIHtcbiAgaWYgKHRoaXMuX2lzVVRDKSB7XG4gICAgdGhpcy51dGNPZmZzZXQoMCwga2VlcExvY2FsVGltZSk7XG4gICAgdGhpcy5faXNVVEMgPSBmYWxzZTtcblxuICAgIGlmIChrZWVwTG9jYWxUaW1lKSB7XG4gICAgICB0aGlzLnN1YnRyYWN0KGdldERhdGVPZmZzZXQodGhpcyksICdtJyk7XG4gICAgfVxuICB9XG4gIHJldHVybiB0aGlzO1xufSovXG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRPZmZzZXRUb1BhcnNlZE9mZnNldChkYXRlOiBEYXRlLCBpbnB1dDogc3RyaW5nLCBjb25maWc6IERhdGVQYXJzaW5nQ29uZmlnID0ge30pOiBEYXRlIHtcbiAgaWYgKGNvbmZpZy5fdHptICE9IG51bGwpIHtcbiAgICByZXR1cm4gc2V0VVRDT2Zmc2V0KGRhdGUsIGNvbmZpZy5fdHptLCBmYWxzZSwgdHJ1ZSwgY29uZmlnKTtcbiAgfVxuXG4gIGlmIChpc1N0cmluZyhpbnB1dCkpIHtcbiAgICBjb25zdCB0Wm9uZSA9IG9mZnNldEZyb21TdHJpbmcobWF0Y2hPZmZzZXQsIGlucHV0KTtcbiAgICBpZiAodFpvbmUgIT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHNldFVUQ09mZnNldChkYXRlLCB0Wm9uZSwgZmFsc2UsIGZhbHNlLCBjb25maWcpO1xuICAgIH1cblxuICAgIHJldHVybiBzZXRVVENPZmZzZXQoZGF0ZSwgMCwgdHJ1ZSwgZmFsc2UsIGNvbmZpZyk7XG4gIH1cblxuICByZXR1cm4gZGF0ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhc0FsaWduZWRIb3VyT2Zmc2V0KGRhdGU6IERhdGUsIGlucHV0PzogRGF0ZSkge1xuICBjb25zdCBfaW5wdXQgPSBpbnB1dCA/IGdldFVUQ09mZnNldChpbnB1dCwgeyBfaXNVVEM6IGZhbHNlIH0pIDogMDtcblxuICByZXR1cm4gKGdldFVUQ09mZnNldChkYXRlKSAtIF9pbnB1dCkgJSA2MCA9PT0gMDtcbn1cblxuXG4vLyBERVBSRUNBVEVEXG4vKmV4cG9ydCBmdW5jdGlvbiBpc0RheWxpZ2h0U2F2aW5nVGltZVNoaWZ0ZWQoKSB7XG4gIGlmICghaXNVbmRlZmluZWQodGhpcy5faXNEU1RTaGlmdGVkKSkge1xuICAgIHJldHVybiB0aGlzLl9pc0RTVFNoaWZ0ZWQ7XG4gIH1cblxuICBjb25zdCBjID0ge307XG5cbiAgY29weUNvbmZpZyhjLCB0aGlzKTtcbiAgYyA9IHByZXBhcmVDb25maWcoYyk7XG5cbiAgaWYgKGMuX2EpIHtcbiAgICBjb25zdCBvdGhlciA9IGMuX2lzVVRDID8gY3JlYXRlVVRDKGMuX2EpIDogY3JlYXRlTG9jYWwoYy5fYSk7XG4gICAgdGhpcy5faXNEU1RTaGlmdGVkID0gdGhpcy5pc1ZhbGlkKCkgJiZcbiAgICAgIGNvbXBhcmVBcnJheXMoYy5fYSwgb3RoZXIudG9BcnJheSgpKSA+IDA7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5faXNEU1RTaGlmdGVkID0gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gdGhpcy5faXNEU1RTaGlmdGVkO1xufSovXG5cbi8vIGluIEtocm9ub3Ncbi8qZXhwb3J0IGZ1bmN0aW9uIGlzTG9jYWwoKSB7XG4gIHJldHVybiB0aGlzLmlzVmFsaWQoKSA/ICF0aGlzLl9pc1VUQyA6IGZhbHNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNVdGNPZmZzZXQoKSB7XG4gIHJldHVybiB0aGlzLmlzVmFsaWQoKSA/IHRoaXMuX2lzVVRDIDogZmFsc2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1V0YygpIHtcbiAgcmV0dXJuIHRoaXMuaXNWYWxpZCgpID8gdGhpcy5faXNVVEMgJiYgdGhpcy5fb2Zmc2V0ID09PSAwIDogZmFsc2U7XG59Ki9cbiIsImltcG9ydCB7IGFkZEZvcm1hdFRva2VuIH0gZnJvbSAnLi4vZm9ybWF0L2Zvcm1hdCc7XG5pbXBvcnQgeyBnZXRNaW51dGVzIH0gZnJvbSAnLi4vdXRpbHMvZGF0ZS1nZXR0ZXJzJztcbmltcG9ydCB7IGFkZFJlZ2V4VG9rZW4sIG1hdGNoMXRvMiwgbWF0Y2gyIH0gZnJvbSAnLi4vcGFyc2UvcmVnZXgnO1xuaW1wb3J0IHsgYWRkUGFyc2VUb2tlbiB9IGZyb20gJy4uL3BhcnNlL3Rva2VuJztcbmltcG9ydCB7IE1JTlVURSB9IGZyb20gJy4vY29uc3RhbnRzJztcbmltcG9ydCB7IGFkZFVuaXRQcmlvcml0eSB9IGZyb20gJy4vcHJpb3JpdGllcyc7XG5pbXBvcnQgeyBhZGRVbml0QWxpYXMgfSBmcm9tICcuL2FsaWFzZXMnO1xuaW1wb3J0IHsgRGF0ZUZvcm1hdHRlck9wdGlvbnMgfSBmcm9tICcuLi90eXBlcyc7XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRNaW51dGUoKSB7XG4vLyBGT1JNQVRUSU5HXG5cbiAgYWRkRm9ybWF0VG9rZW4oJ20nLCBbJ21tJywgMiwgZmFsc2VdLCBudWxsLFxuICAgIGZ1bmN0aW9uKGRhdGU6IERhdGUsIG9wdHM6IERhdGVGb3JtYXR0ZXJPcHRpb25zKTogc3RyaW5nIHtcbiAgICAgIHJldHVybiBnZXRNaW51dGVzKGRhdGUsIG9wdHMuaXNVVEMpXG4gICAgICAgIC50b1N0cmluZygxMCk7XG4gICAgfVxuICApO1xuXG4vLyBBTElBU0VTXG5cbiAgYWRkVW5pdEFsaWFzKCdtaW51dGUnLCAnbScpO1xuXG4vLyBQUklPUklUWVxuXG4gIGFkZFVuaXRQcmlvcml0eSgnbWludXRlJywgMTQpO1xuXG4vLyBQQVJTSU5HXG5cbiAgYWRkUmVnZXhUb2tlbignbScsIG1hdGNoMXRvMik7XG4gIGFkZFJlZ2V4VG9rZW4oJ21tJywgbWF0Y2gxdG8yLCBtYXRjaDIpO1xuICBhZGRQYXJzZVRva2VuKFsnbScsICdtbSddLCBNSU5VVEUpO1xufVxuIiwiLy8gdHNsaW50OmRpc2FibGU6bm8tYml0d2lzZVxuLy8gRk9STUFUVElOR1xuXG5pbXBvcnQgeyBhZGRGb3JtYXRUb2tlbiB9IGZyb20gJy4uL2Zvcm1hdC9mb3JtYXQnO1xuaW1wb3J0IHsgYWRkUmVnZXhUb2tlbiwgbWF0Y2gxLCBtYXRjaDF0bzMsIG1hdGNoMiwgbWF0Y2gzLCBtYXRjaFVuc2lnbmVkIH0gZnJvbSAnLi4vcGFyc2UvcmVnZXgnO1xuaW1wb3J0IHsgTUlMTElTRUNPTkQgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQgeyB0b0ludCB9IGZyb20gJy4uL3V0aWxzL3R5cGUtY2hlY2tzJztcbmltcG9ydCB7IGFkZFBhcnNlVG9rZW4gfSBmcm9tICcuLi9wYXJzZS90b2tlbic7XG5pbXBvcnQgeyBEYXRlQXJyYXksIERhdGVGb3JtYXR0ZXJPcHRpb25zLCBXZWVrUGFyc2luZyB9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7IGFkZFVuaXRBbGlhcyB9IGZyb20gJy4vYWxpYXNlcyc7XG5pbXBvcnQgeyBhZGRVbml0UHJpb3JpdHkgfSBmcm9tICcuL3ByaW9yaXRpZXMnO1xuaW1wb3J0IHsgRGF0ZVBhcnNpbmdDb25maWcgfSBmcm9tICcuLi9jcmVhdGUvcGFyc2luZy50eXBlcyc7XG5pbXBvcnQgeyBnZXRNaWxsaXNlY29uZHMgfSBmcm9tICcuLi91dGlscy9kYXRlLWdldHRlcnMnO1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0TWlsbGlzZWNvbmQoKSB7XG4gIGFkZEZvcm1hdFRva2VuKCdTJywgbnVsbCwgbnVsbCxcbiAgICBmdW5jdGlvbihkYXRlOiBEYXRlLCBvcHRzOiBEYXRlRm9ybWF0dGVyT3B0aW9ucyk6IHN0cmluZyB7XG4gICAgICByZXR1cm4gKH5+KGdldE1pbGxpc2Vjb25kcyhkYXRlLCBvcHRzLmlzVVRDKSAvIDEwMCkpLnRvU3RyaW5nKDEwKTtcbiAgICB9XG4gICk7XG5cbiAgYWRkRm9ybWF0VG9rZW4obnVsbCwgWydTUycsIDIsIGZhbHNlXSwgbnVsbCxcbiAgICBmdW5jdGlvbihkYXRlOiBEYXRlLCBvcHRzOiBEYXRlRm9ybWF0dGVyT3B0aW9ucyk6IHN0cmluZyB7XG4gICAgICByZXR1cm4gKH5+KGdldE1pbGxpc2Vjb25kcyhkYXRlLCBvcHRzLmlzVVRDKSAvIDEwKSkudG9TdHJpbmcoMTApO1xuICAgIH1cbiAgKTtcblxuICBhZGRGb3JtYXRUb2tlbihudWxsLCBbJ1NTUycsIDMsIGZhbHNlXSwgbnVsbCxcbiAgICBmdW5jdGlvbihkYXRlOiBEYXRlLCBvcHRzOiBEYXRlRm9ybWF0dGVyT3B0aW9ucyk6IHN0cmluZyB7XG4gICAgICByZXR1cm4gKGdldE1pbGxpc2Vjb25kcyhkYXRlLCBvcHRzLmlzVVRDKSkudG9TdHJpbmcoMTApO1xuICAgIH1cbiAgKTtcbiAgYWRkRm9ybWF0VG9rZW4obnVsbCwgWydTU1NTJywgNCwgZmFsc2VdLCBudWxsLFxuICAgIGZ1bmN0aW9uKGRhdGU6IERhdGUsIG9wdHM6IERhdGVGb3JtYXR0ZXJPcHRpb25zKTogc3RyaW5nIHtcbiAgICAgIHJldHVybiAoZ2V0TWlsbGlzZWNvbmRzKGRhdGUsIG9wdHMuaXNVVEMpICogMTApLnRvU3RyaW5nKDEwKTtcbiAgICB9XG4gICk7XG4gIGFkZEZvcm1hdFRva2VuKG51bGwsIFsnU1NTU1MnLCA1LCBmYWxzZV0sIG51bGwsXG4gICAgZnVuY3Rpb24oZGF0ZTogRGF0ZSwgb3B0czogRGF0ZUZvcm1hdHRlck9wdGlvbnMpOiBzdHJpbmcge1xuICAgICAgcmV0dXJuIChnZXRNaWxsaXNlY29uZHMoZGF0ZSwgb3B0cy5pc1VUQykgKiAxMDApLnRvU3RyaW5nKDEwKTtcbiAgICB9XG4gICk7XG4gIGFkZEZvcm1hdFRva2VuKG51bGwsIFsnU1NTU1NTJywgNiwgZmFsc2VdLCBudWxsLFxuICAgIGZ1bmN0aW9uKGRhdGU6IERhdGUsIG9wdHM6IERhdGVGb3JtYXR0ZXJPcHRpb25zKTogc3RyaW5nIHtcbiAgICAgIHJldHVybiAoZ2V0TWlsbGlzZWNvbmRzKGRhdGUsIG9wdHMuaXNVVEMpICogMTAwMCkudG9TdHJpbmcoMTApO1xuICAgIH1cbiAgKTtcbiAgYWRkRm9ybWF0VG9rZW4obnVsbCwgWydTU1NTU1NTJywgNywgZmFsc2VdLCBudWxsLFxuICAgIGZ1bmN0aW9uKGRhdGU6IERhdGUsIG9wdHM6IERhdGVGb3JtYXR0ZXJPcHRpb25zKTogc3RyaW5nIHtcbiAgICAgIHJldHVybiAoZ2V0TWlsbGlzZWNvbmRzKGRhdGUsIG9wdHMuaXNVVEMpICogMTAwMDApLnRvU3RyaW5nKDEwKTtcbiAgICB9XG4gICk7XG4gIGFkZEZvcm1hdFRva2VuKG51bGwsIFsnU1NTU1NTU1MnLCA4LCBmYWxzZV0sIG51bGwsXG4gICAgZnVuY3Rpb24oZGF0ZTogRGF0ZSwgb3B0czogRGF0ZUZvcm1hdHRlck9wdGlvbnMpOiBzdHJpbmcge1xuICAgICAgcmV0dXJuIChnZXRNaWxsaXNlY29uZHMoZGF0ZSwgb3B0cy5pc1VUQykgKiAxMDAwMDApLnRvU3RyaW5nKDEwKTtcbiAgICB9XG4gICk7XG4gIGFkZEZvcm1hdFRva2VuKG51bGwsIFsnU1NTU1NTU1NTJywgOSwgZmFsc2VdLCBudWxsLFxuICAgIGZ1bmN0aW9uKGRhdGU6IERhdGUsIG9wdHM6IERhdGVGb3JtYXR0ZXJPcHRpb25zKTogc3RyaW5nIHtcbiAgICAgIHJldHVybiAoZ2V0TWlsbGlzZWNvbmRzKGRhdGUsIG9wdHMuaXNVVEMpICogMTAwMDAwMCkudG9TdHJpbmcoMTApO1xuICAgIH1cbiAgKTtcblxuXG4vLyBBTElBU0VTXG5cbiAgYWRkVW5pdEFsaWFzKCdtaWxsaXNlY29uZCcsICdtcycpO1xuXG4vLyBQUklPUklUWVxuXG4gIGFkZFVuaXRQcmlvcml0eSgnbWlsbGlzZWNvbmQnLCAxNik7XG5cbi8vIFBBUlNJTkdcblxuICBhZGRSZWdleFRva2VuKCdTJywgbWF0Y2gxdG8zLCBtYXRjaDEpO1xuICBhZGRSZWdleFRva2VuKCdTUycsIG1hdGNoMXRvMywgbWF0Y2gyKTtcbiAgYWRkUmVnZXhUb2tlbignU1NTJywgbWF0Y2gxdG8zLCBtYXRjaDMpO1xuXG4gIGxldCB0b2tlbjtcbiAgZm9yICh0b2tlbiA9ICdTU1NTJzsgdG9rZW4ubGVuZ3RoIDw9IDk7IHRva2VuICs9ICdTJykge1xuICAgIGFkZFJlZ2V4VG9rZW4odG9rZW4sIG1hdGNoVW5zaWduZWQpO1xuICB9XG5cbiAgZnVuY3Rpb24gcGFyc2VNcyhpbnB1dDogc3RyaW5nLCBhcnJheTogRGF0ZUFycmF5LCBjb25maWc6IERhdGVQYXJzaW5nQ29uZmlnKTogRGF0ZVBhcnNpbmdDb25maWcge1xuICAgIGFycmF5W01JTExJU0VDT05EXSA9IHRvSW50KHBhcnNlRmxvYXQoYDAuJHtpbnB1dH1gKSAqIDEwMDApO1xuXG4gICAgcmV0dXJuIGNvbmZpZztcbiAgfVxuXG4gIGZvciAodG9rZW4gPSAnUyc7IHRva2VuLmxlbmd0aCA8PSA5OyB0b2tlbiArPSAnUycpIHtcbiAgICBhZGRQYXJzZVRva2VuKHRva2VuLCBwYXJzZU1zKTtcbiAgfVxuLy8gTU9NRU5UU1xufVxuIiwiaW1wb3J0IHsgZ2V0SG91cnMsIGdldE1pbnV0ZXMsIGdldFNlY29uZHMgfSBmcm9tICcuLi91dGlscy9kYXRlLWdldHRlcnMnO1xuaW1wb3J0IHsgYWRkRm9ybWF0VG9rZW4gfSBmcm9tICcuLi9mb3JtYXQvZm9ybWF0JztcbmltcG9ydCB7IHplcm9GaWxsIH0gZnJvbSAnLi4vdXRpbHMvemVyby1maWxsJztcbmltcG9ydCB7IExvY2FsZSB9IGZyb20gJy4uL2xvY2FsZS9sb2NhbGUuY2xhc3MnO1xuaW1wb3J0IHsgYWRkUmVnZXhUb2tlbiwgbWF0Y2gxdG8yLCBtYXRjaDIsIG1hdGNoM3RvNCwgbWF0Y2g1dG82IH0gZnJvbSAnLi4vcGFyc2UvcmVnZXgnO1xuaW1wb3J0IHsgYWRkUGFyc2VUb2tlbiB9IGZyb20gJy4uL3BhcnNlL3Rva2VuJztcbmltcG9ydCB7IEhPVVIsIE1JTlVURSwgU0VDT05EIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgdG9JbnQgfSBmcm9tICcuLi91dGlscy90eXBlLWNoZWNrcyc7XG5pbXBvcnQgeyBEYXRlQXJyYXksIERhdGVGb3JtYXR0ZXJPcHRpb25zIH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgRGF0ZVBhcnNpbmdDb25maWcgfSBmcm9tICcuLi9jcmVhdGUvcGFyc2luZy50eXBlcyc7XG5pbXBvcnQgeyBnZXRQYXJzaW5nRmxhZ3MgfSBmcm9tICcuLi9jcmVhdGUvcGFyc2luZy1mbGFncyc7XG5pbXBvcnQgeyBhZGRVbml0UHJpb3JpdHkgfSBmcm9tICcuL3ByaW9yaXRpZXMnO1xuaW1wb3J0IHsgYWRkVW5pdEFsaWFzIH0gZnJvbSAnLi9hbGlhc2VzJztcblxuXG5leHBvcnQgZnVuY3Rpb24gaW5pdEhvdXIoKSB7XG4vLyBGT1JNQVRUSU5HXG5cbiAgZnVuY3Rpb24gaEZvcm1hdChkYXRlOiBEYXRlLCBpc1VUQzogYm9vbGVhbik6IG51bWJlciB7XG4gICAgcmV0dXJuIGdldEhvdXJzKGRhdGUsIGlzVVRDKSAlIDEyIHx8IDEyO1xuICB9XG5cbiAgZnVuY3Rpb24ga0Zvcm1hdChkYXRlOiBEYXRlLCBpc1VUQzogYm9vbGVhbik6IG51bWJlciB7XG4gICAgcmV0dXJuIGdldEhvdXJzKGRhdGUsIGlzVVRDKSB8fCAyNDtcbiAgfVxuXG4gIGFkZEZvcm1hdFRva2VuKCdIJywgWydISCcsIDIsIGZhbHNlXSwgbnVsbCxcbiAgICBmdW5jdGlvbihkYXRlOiBEYXRlLCBvcHRzOiBEYXRlRm9ybWF0dGVyT3B0aW9ucyk6IHN0cmluZyB7XG4gICAgICByZXR1cm4gZ2V0SG91cnMoZGF0ZSwgb3B0cy5pc1VUQylcbiAgICAgICAgLnRvU3RyaW5nKDEwKTtcbiAgICB9XG4gICk7XG4gIGFkZEZvcm1hdFRva2VuKCdoJywgWydoaCcsIDIsIGZhbHNlXSwgbnVsbCxcbiAgICBmdW5jdGlvbihkYXRlOiBEYXRlLCBvcHRzOiBEYXRlRm9ybWF0dGVyT3B0aW9ucyk6IHN0cmluZyB7XG4gICAgICByZXR1cm4gaEZvcm1hdChkYXRlLCBvcHRzLmlzVVRDKVxuICAgICAgICAudG9TdHJpbmcoMTApO1xuICAgIH1cbiAgKTtcbiAgYWRkRm9ybWF0VG9rZW4oJ2snLCBbJ2trJywgMiwgZmFsc2VdLCBudWxsLFxuICAgIGZ1bmN0aW9uKGRhdGU6IERhdGUsIG9wdHM6IERhdGVGb3JtYXR0ZXJPcHRpb25zKTogc3RyaW5nIHtcbiAgICAgIHJldHVybiBrRm9ybWF0KGRhdGUsIG9wdHMuaXNVVEMpXG4gICAgICAgIC50b1N0cmluZygxMCk7XG4gICAgfVxuICApO1xuXG4gIGFkZEZvcm1hdFRva2VuKCdobW0nLCBudWxsLCBudWxsLFxuICAgIGZ1bmN0aW9uKGRhdGU6IERhdGUsIG9wdHM6IERhdGVGb3JtYXR0ZXJPcHRpb25zKTogc3RyaW5nIHtcbiAgICAgIGNvbnN0IF9oID0gaEZvcm1hdChkYXRlLCBvcHRzLmlzVVRDKTtcbiAgICAgIGNvbnN0IF9tbSA9IHplcm9GaWxsKGdldE1pbnV0ZXMoZGF0ZSwgb3B0cy5pc1VUQyksIDIpO1xuXG4gICAgICByZXR1cm4gYCR7X2h9JHtfbW19YDtcbiAgICB9XG4gICk7XG5cbiAgYWRkRm9ybWF0VG9rZW4oJ2htbXNzJywgbnVsbCwgbnVsbCxcbiAgICBmdW5jdGlvbihkYXRlOiBEYXRlLCBvcHRzOiBEYXRlRm9ybWF0dGVyT3B0aW9ucyk6IHN0cmluZyB7XG4gICAgICBjb25zdCBfaCA9IGhGb3JtYXQoZGF0ZSwgb3B0cy5pc1VUQyk7XG4gICAgICBjb25zdCBfbW0gPSB6ZXJvRmlsbChnZXRNaW51dGVzKGRhdGUsIG9wdHMuaXNVVEMpLCAyKTtcbiAgICAgIGNvbnN0IF9zcyA9IHplcm9GaWxsKGdldFNlY29uZHMoZGF0ZSwgb3B0cy5pc1VUQyksIDIpO1xuXG4gICAgICByZXR1cm4gYCR7X2h9JHtfbW19JHtfc3N9YDtcbiAgICB9XG4gICk7XG5cbiAgYWRkRm9ybWF0VG9rZW4oJ0htbScsIG51bGwsIG51bGwsXG4gICAgZnVuY3Rpb24oZGF0ZTogRGF0ZSwgb3B0czogRGF0ZUZvcm1hdHRlck9wdGlvbnMpOiBzdHJpbmcge1xuICAgICAgY29uc3QgX0ggPSBnZXRIb3VycyhkYXRlLCBvcHRzLmlzVVRDKTtcbiAgICAgIGNvbnN0IF9tbSA9IHplcm9GaWxsKGdldE1pbnV0ZXMoZGF0ZSwgb3B0cy5pc1VUQyksIDIpO1xuXG4gICAgICByZXR1cm4gYCR7X0h9JHtfbW19YDtcbiAgICB9XG4gICk7XG5cbiAgYWRkRm9ybWF0VG9rZW4oJ0htbXNzJywgbnVsbCwgbnVsbCxcbiAgICBmdW5jdGlvbihkYXRlOiBEYXRlLCBvcHRzOiBEYXRlRm9ybWF0dGVyT3B0aW9ucyk6IHN0cmluZyB7XG4gICAgICBjb25zdCBfSCA9IGdldEhvdXJzKGRhdGUsIG9wdHMuaXNVVEMpO1xuICAgICAgY29uc3QgX21tID0gemVyb0ZpbGwoZ2V0TWludXRlcyhkYXRlLCBvcHRzLmlzVVRDKSwgMik7XG4gICAgICBjb25zdCBfc3MgPSB6ZXJvRmlsbChnZXRTZWNvbmRzKGRhdGUsIG9wdHMuaXNVVEMpLCAyKTtcblxuICAgICAgcmV0dXJuIGAke19IfSR7X21tfSR7X3NzfWA7XG4gICAgfVxuICApO1xuXG4gIGZ1bmN0aW9uIG1lcmlkaWVtKHRva2VuOiBzdHJpbmcsIGxvd2VyY2FzZTogYm9vbGVhbik6IHZvaWQge1xuICAgIGFkZEZvcm1hdFRva2VuKHRva2VuLCBudWxsLCBudWxsLFxuICAgICAgZnVuY3Rpb24oZGF0ZTogRGF0ZSwgb3B0czogRGF0ZUZvcm1hdHRlck9wdGlvbnMpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gb3B0cy5sb2NhbGUubWVyaWRpZW0oZ2V0SG91cnMoZGF0ZSwgb3B0cy5pc1VUQyksIGdldE1pbnV0ZXMoZGF0ZSwgb3B0cy5pc1VUQyksIGxvd2VyY2FzZSk7XG4gICAgICB9XG4gICAgKTtcbiAgfVxuXG4gIG1lcmlkaWVtKCdhJywgdHJ1ZSk7XG4gIG1lcmlkaWVtKCdBJywgZmFsc2UpO1xuXG4vLyBBTElBU0VTXG5cbiAgYWRkVW5pdEFsaWFzKCdob3VyJywgJ2gnKTtcblxuLy8gUFJJT1JJVFlcbiAgYWRkVW5pdFByaW9yaXR5KCdob3VyJywgMTMpO1xuXG5cbi8vIFBBUlNJTkdcblxuICBmdW5jdGlvbiBtYXRjaE1lcmlkaWVtKGlzU3RyaWN0OiBib29sZWFuLCBsb2NhbGU6IExvY2FsZSk6IFJlZ0V4cCB7XG4gICAgcmV0dXJuIGxvY2FsZS5fbWVyaWRpZW1QYXJzZTtcbiAgfVxuXG4gIGFkZFJlZ2V4VG9rZW4oJ2EnLCBtYXRjaE1lcmlkaWVtKTtcbiAgYWRkUmVnZXhUb2tlbignQScsIG1hdGNoTWVyaWRpZW0pO1xuICBhZGRSZWdleFRva2VuKCdIJywgbWF0Y2gxdG8yKTtcbiAgYWRkUmVnZXhUb2tlbignaCcsIG1hdGNoMXRvMik7XG4gIGFkZFJlZ2V4VG9rZW4oJ2snLCBtYXRjaDF0bzIpO1xuICBhZGRSZWdleFRva2VuKCdISCcsIG1hdGNoMXRvMiwgbWF0Y2gyKTtcbiAgYWRkUmVnZXhUb2tlbignaGgnLCBtYXRjaDF0bzIsIG1hdGNoMik7XG4gIGFkZFJlZ2V4VG9rZW4oJ2trJywgbWF0Y2gxdG8yLCBtYXRjaDIpO1xuXG4gIGFkZFJlZ2V4VG9rZW4oJ2htbScsIG1hdGNoM3RvNCk7XG4gIGFkZFJlZ2V4VG9rZW4oJ2htbXNzJywgbWF0Y2g1dG82KTtcbiAgYWRkUmVnZXhUb2tlbignSG1tJywgbWF0Y2gzdG80KTtcbiAgYWRkUmVnZXhUb2tlbignSG1tc3MnLCBtYXRjaDV0bzYpO1xuXG4gIGFkZFBhcnNlVG9rZW4oWydIJywgJ0hIJ10sIEhPVVIpO1xuICBhZGRQYXJzZVRva2VuKFxuICAgIFsnaycsICdrayddLFxuICAgIGZ1bmN0aW9uKGlucHV0OiBzdHJpbmcsIGFycmF5OiBEYXRlQXJyYXksIGNvbmZpZzogRGF0ZVBhcnNpbmdDb25maWcpOiBEYXRlUGFyc2luZ0NvbmZpZyB7XG4gICAgICBjb25zdCBrSW5wdXQgPSB0b0ludChpbnB1dCk7XG4gICAgICBhcnJheVtIT1VSXSA9IGtJbnB1dCA9PT0gMjQgPyAwIDoga0lucHV0O1xuXG4gICAgICByZXR1cm4gY29uZmlnO1xuICAgIH1cbiAgKTtcbiAgYWRkUGFyc2VUb2tlbihbJ2EnLCAnQSddLCBmdW5jdGlvbihpbnB1dDogc3RyaW5nLCBhcnJheTogRGF0ZUFycmF5LCBjb25maWc6IERhdGVQYXJzaW5nQ29uZmlnKTogRGF0ZVBhcnNpbmdDb25maWcge1xuICAgIGNvbmZpZy5faXNQbSA9IGNvbmZpZy5fbG9jYWxlLmlzUE0oaW5wdXQpO1xuICAgIGNvbmZpZy5fbWVyaWRpZW0gPSBpbnB1dDtcblxuICAgIHJldHVybiBjb25maWc7XG4gIH0pO1xuICBhZGRQYXJzZVRva2VuKFsnaCcsICdoaCddLCBmdW5jdGlvbihpbnB1dDogc3RyaW5nLCBhcnJheTogRGF0ZUFycmF5LCBjb25maWc6IERhdGVQYXJzaW5nQ29uZmlnKTogRGF0ZVBhcnNpbmdDb25maWcge1xuICAgIGFycmF5W0hPVVJdID0gdG9JbnQoaW5wdXQpO1xuICAgIGdldFBhcnNpbmdGbGFncyhjb25maWcpLmJpZ0hvdXIgPSB0cnVlO1xuXG4gICAgcmV0dXJuIGNvbmZpZztcbiAgfSk7XG4gIGFkZFBhcnNlVG9rZW4oJ2htbScsIGZ1bmN0aW9uKGlucHV0OiBzdHJpbmcsIGFycmF5OiBEYXRlQXJyYXksIGNvbmZpZzogRGF0ZVBhcnNpbmdDb25maWcpOiBEYXRlUGFyc2luZ0NvbmZpZyB7XG4gICAgY29uc3QgcG9zID0gaW5wdXQubGVuZ3RoIC0gMjtcbiAgICBhcnJheVtIT1VSXSA9IHRvSW50KGlucHV0LnN1YnN0cigwLCBwb3MpKTtcbiAgICBhcnJheVtNSU5VVEVdID0gdG9JbnQoaW5wdXQuc3Vic3RyKHBvcykpO1xuICAgIGdldFBhcnNpbmdGbGFncyhjb25maWcpLmJpZ0hvdXIgPSB0cnVlO1xuXG4gICAgcmV0dXJuIGNvbmZpZztcbiAgfSk7XG4gIGFkZFBhcnNlVG9rZW4oJ2htbXNzJywgZnVuY3Rpb24oaW5wdXQ6IHN0cmluZywgYXJyYXk6IERhdGVBcnJheSwgY29uZmlnOiBEYXRlUGFyc2luZ0NvbmZpZyk6IERhdGVQYXJzaW5nQ29uZmlnIHtcbiAgICBjb25zdCBwb3MxID0gaW5wdXQubGVuZ3RoIC0gNDtcbiAgICBjb25zdCBwb3MyID0gaW5wdXQubGVuZ3RoIC0gMjtcbiAgICBhcnJheVtIT1VSXSA9IHRvSW50KGlucHV0LnN1YnN0cigwLCBwb3MxKSk7XG4gICAgYXJyYXlbTUlOVVRFXSA9IHRvSW50KGlucHV0LnN1YnN0cihwb3MxLCAyKSk7XG4gICAgYXJyYXlbU0VDT05EXSA9IHRvSW50KGlucHV0LnN1YnN0cihwb3MyKSk7XG4gICAgZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZykuYmlnSG91ciA9IHRydWU7XG5cbiAgICByZXR1cm4gY29uZmlnO1xuICB9KTtcbiAgYWRkUGFyc2VUb2tlbignSG1tJywgZnVuY3Rpb24oaW5wdXQ6IHN0cmluZywgYXJyYXk6IERhdGVBcnJheSwgY29uZmlnOiBEYXRlUGFyc2luZ0NvbmZpZyk6IERhdGVQYXJzaW5nQ29uZmlnIHtcbiAgICBjb25zdCBwb3MgPSBpbnB1dC5sZW5ndGggLSAyO1xuICAgIGFycmF5W0hPVVJdID0gdG9JbnQoaW5wdXQuc3Vic3RyKDAsIHBvcykpO1xuICAgIGFycmF5W01JTlVURV0gPSB0b0ludChpbnB1dC5zdWJzdHIocG9zKSk7XG5cbiAgICByZXR1cm4gY29uZmlnO1xuICB9KTtcbiAgYWRkUGFyc2VUb2tlbignSG1tc3MnLCBmdW5jdGlvbihpbnB1dDogc3RyaW5nLCBhcnJheTogRGF0ZUFycmF5LCBjb25maWc6IERhdGVQYXJzaW5nQ29uZmlnKTogRGF0ZVBhcnNpbmdDb25maWcge1xuICAgIGNvbnN0IHBvczEgPSBpbnB1dC5sZW5ndGggLSA0O1xuICAgIGNvbnN0IHBvczIgPSBpbnB1dC5sZW5ndGggLSAyO1xuICAgIGFycmF5W0hPVVJdID0gdG9JbnQoaW5wdXQuc3Vic3RyKDAsIHBvczEpKTtcbiAgICBhcnJheVtNSU5VVEVdID0gdG9JbnQoaW5wdXQuc3Vic3RyKHBvczEsIDIpKTtcbiAgICBhcnJheVtTRUNPTkRdID0gdG9JbnQoaW5wdXQuc3Vic3RyKHBvczIpKTtcblxuICAgIHJldHVybiBjb25maWc7XG4gIH0pO1xuXG59XG4iLCIvLyBpbnRlcm5hbCBzdG9yYWdlIGZvciBsb2NhbGUgY29uZmlnIGZpbGVzXG5pbXBvcnQgeyBMb2NhbGUsIExvY2FsZURhdGEgfSBmcm9tICcuL2xvY2FsZS5jbGFzcyc7XG5pbXBvcnQgeyBiYXNlQ29uZmlnIH0gZnJvbSAnLi9sb2NhbGUuZGVmYXVsdHMnO1xuaW1wb3J0IHsgaGFzT3duUHJvcCwgaXNBcnJheSwgaXNPYmplY3QsIGlzU3RyaW5nLCBpc1VuZGVmaW5lZCwgdG9JbnQgfSBmcm9tICcuLi91dGlscy90eXBlLWNoZWNrcyc7XG5pbXBvcnQgeyBjb21wYXJlQXJyYXlzIH0gZnJvbSAnLi4vdXRpbHMvY29tcGFyZS1hcnJheXMnO1xuXG5pbXBvcnQgeyBpbml0V2VlayB9IGZyb20gJy4uL3VuaXRzL3dlZWsnO1xuaW1wb3J0IHsgaW5pdFdlZWtZZWFyIH0gZnJvbSAnLi4vdW5pdHMvd2Vlay15ZWFyJztcbmltcG9ydCB7IGluaXRZZWFyIH0gZnJvbSAnLi4vdW5pdHMveWVhcic7XG5pbXBvcnQgeyBpbml0VGltZXpvbmUgfSBmcm9tICcuLi91bml0cy90aW1lem9uZSc7XG5pbXBvcnQgeyBpbml0VGltZXN0YW1wIH0gZnJvbSAnLi4vdW5pdHMvdGltZXN0YW1wJztcbmltcG9ydCB7IGluaXRTZWNvbmQgfSBmcm9tICcuLi91bml0cy9zZWNvbmQnO1xuaW1wb3J0IHsgaW5pdFF1YXJ0ZXIgfSBmcm9tICcuLi91bml0cy9xdWFydGVyJztcbmltcG9ydCB7IGluaXRPZmZzZXQgfSBmcm9tICcuLi91bml0cy9vZmZzZXQnO1xuaW1wb3J0IHsgaW5pdE1pbnV0ZSB9IGZyb20gJy4uL3VuaXRzL21pbnV0ZSc7XG5pbXBvcnQgeyBpbml0TWlsbGlzZWNvbmQgfSBmcm9tICcuLi91bml0cy9taWxsaXNlY29uZCc7XG5pbXBvcnQgeyBpbml0TW9udGggfSBmcm9tICcuLi91bml0cy9tb250aCc7XG5pbXBvcnQgeyBpbml0SG91ciB9IGZyb20gJy4uL3VuaXRzL2hvdXInO1xuaW1wb3J0IHsgaW5pdERheU9mWWVhciB9IGZyb20gJy4uL3VuaXRzL2RheS1vZi15ZWFyJztcbmltcG9ydCB7IGluaXREYXlPZldlZWsgfSBmcm9tICcuLi91bml0cy9kYXktb2Ytd2Vlayc7XG5pbXBvcnQgeyBpbml0RGF5T2ZNb250aCB9IGZyb20gJy4uL3VuaXRzL2RheS1vZi1tb250aCc7XG5cbmNvbnN0IGxvY2FsZXM6IHsgW2tleTogc3RyaW5nXTogTG9jYWxlIH0gPSB7fTtcbmNvbnN0IGxvY2FsZUZhbWlsaWVzOiB7IFtrZXk6IHN0cmluZ106IHtuYW1lOiBzdHJpbmc7IGNvbmZpZzogTG9jYWxlRGF0YX1bXSB9ID0ge307XG5sZXQgZ2xvYmFsTG9jYWxlOiBMb2NhbGU7XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZUxvY2FsZShrZXk6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBrZXkgPyBrZXkudG9Mb3dlckNhc2UoKS5yZXBsYWNlKCdfJywgJy0nKSA6IGtleTtcbn1cblxuLy8gcGljayB0aGUgbG9jYWxlIGZyb20gdGhlIGFycmF5XG4vLyB0cnkgWydlbi1hdScsICdlbi1nYiddIGFzICdlbi1hdScsICdlbi1nYicsICdlbicsIGFzIGluIG1vdmUgdGhyb3VnaCB0aGUgbGlzdCB0cnlpbmcgZWFjaFxuLy8gc3Vic3RyaW5nIGZyb20gbW9zdCBzcGVjaWZpYyB0byBsZWFzdCxcbi8vIGJ1dCBtb3ZlIHRvIHRoZSBuZXh0IGFycmF5IGl0ZW0gaWYgaXQncyBhIG1vcmUgc3BlY2lmaWMgdmFyaWFudCB0aGFuIHRoZSBjdXJyZW50IHJvb3RcbmZ1bmN0aW9uIGNob29zZUxvY2FsZShuYW1lczogc3RyaW5nW10pOiBMb2NhbGUge1xuICBsZXQgbmV4dDtcbiAgbGV0IGxvY2FsZTtcbiAgbGV0IGkgPSAwO1xuXG4gIHdoaWxlIChpIDwgbmFtZXMubGVuZ3RoKSB7XG4gICAgY29uc3Qgc3BsaXQgPSBub3JtYWxpemVMb2NhbGUobmFtZXNbaV0pLnNwbGl0KCctJyk7XG4gICAgbGV0IGogPSBzcGxpdC5sZW5ndGg7XG4gICAgbmV4dCA9IG5vcm1hbGl6ZUxvY2FsZShuYW1lc1tpICsgMV0pO1xuICAgIG5leHQgPSBuZXh0ID8gbmV4dC5zcGxpdCgnLScpIDogbnVsbDtcbiAgICB3aGlsZSAoaiA+IDApIHtcbiAgICAgIGxvY2FsZSA9IGxvYWRMb2NhbGUoc3BsaXQuc2xpY2UoMCwgaikuam9pbignLScpKTtcbiAgICAgIGlmIChsb2NhbGUpIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsZTtcbiAgICAgIH1cbiAgICAgIGlmIChuZXh0ICYmIG5leHQubGVuZ3RoID49IGogJiYgY29tcGFyZUFycmF5cyhzcGxpdCwgbmV4dCwgdHJ1ZSkgPj0gaiAtIDEpIHtcbiAgICAgICAgLy8gdGhlIG5leHQgYXJyYXkgaXRlbSBpcyBiZXR0ZXIgdGhhbiBhIHNoYWxsb3dlciBzdWJzdHJpbmcgb2YgdGhpcyBvbmVcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBqLS07XG4gICAgfVxuICAgIGkrKztcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VDb25maWdzKHBhcmVudENvbmZpZzogTG9jYWxlRGF0YSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRDb25maWc6IExvY2FsZURhdGEpIHtcbiAgY29uc3QgcmVzOiBMb2NhbGVEYXRhID0gT2JqZWN0LmFzc2lnbih7fSwgcGFyZW50Q29uZmlnKTtcblxuICBmb3IgKGNvbnN0IGNoaWxkUHJvcCBpbiBjaGlsZENvbmZpZykge1xuICAgIGlmICghaGFzT3duUHJvcChjaGlsZENvbmZpZywgY2hpbGRQcm9wKSkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGlmIChpc09iamVjdChwYXJlbnRDb25maWdbY2hpbGRQcm9wXSkgJiYgaXNPYmplY3QoY2hpbGRDb25maWdbY2hpbGRQcm9wXSkpIHtcbiAgICAgIHJlc1tjaGlsZFByb3BdID0ge307XG4gICAgICBPYmplY3QuYXNzaWduKHJlc1tjaGlsZFByb3BdLCBwYXJlbnRDb25maWdbY2hpbGRQcm9wXSk7XG4gICAgICBPYmplY3QuYXNzaWduKHJlc1tjaGlsZFByb3BdLCBjaGlsZENvbmZpZ1tjaGlsZFByb3BdKTtcbiAgICB9IGVsc2UgaWYgKGNoaWxkQ29uZmlnW2NoaWxkUHJvcF0gIT0gbnVsbCkge1xuICAgICAgcmVzW2NoaWxkUHJvcF0gPSBjaGlsZENvbmZpZ1tjaGlsZFByb3BdO1xuICAgIH0gZWxzZSB7XG4gICAgICBkZWxldGUgcmVzW2NoaWxkUHJvcF07XG4gICAgfVxuICB9XG4gIGxldCBwYXJlbnRQcm9wO1xuICBmb3IgKHBhcmVudFByb3AgaW4gcGFyZW50Q29uZmlnKSB7XG4gICAgaWYgKFxuICAgICAgaGFzT3duUHJvcChwYXJlbnRDb25maWcsIHBhcmVudFByb3ApICYmXG4gICAgICAhaGFzT3duUHJvcChjaGlsZENvbmZpZywgcGFyZW50UHJvcCkgJiZcbiAgICAgIGlzT2JqZWN0KHBhcmVudENvbmZpZ1twYXJlbnRQcm9wIGFzIGtleW9mIExvY2FsZURhdGFdKVxuICAgICkge1xuICAgICAgLy8gbWFrZSBzdXJlIGNoYW5nZXMgdG8gcHJvcGVydGllcyBkb24ndCBtb2RpZnkgcGFyZW50IGNvbmZpZ1xuICAgICAgcmVzW3BhcmVudFByb3AgYXMga2V5b2YgTG9jYWxlRGF0YV0gPSBPYmplY3QuYXNzaWduKHt9LCByZXNbcGFyZW50UHJvcCBhcyBrZXlvZiBMb2NhbGVEYXRhXSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlcztcbn1cblxuXG5mdW5jdGlvbiBsb2FkTG9jYWxlKG5hbWU6IHN0cmluZyk6IExvY2FsZSB7XG4gIC8vIG5vIHdheSFcbiAgLyogdmFyIG9sZExvY2FsZSA9IG51bGw7XG4gICAvLyBUT0RPOiBGaW5kIGEgYmV0dGVyIHdheSB0byByZWdpc3RlciBhbmQgbG9hZCBhbGwgdGhlIGxvY2FsZXMgaW4gTm9kZVxuICAgaWYgKCFsb2NhbGVzW25hbWVdICYmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJykgJiZcbiAgICAgbW9kdWxlICYmIG1vZHVsZS5leHBvcnRzKSB7XG4gICAgIHRyeSB7XG4gICAgICAgb2xkTG9jYWxlID0gZ2xvYmFsTG9jYWxlLl9hYmJyO1xuICAgICAgIHZhciBhbGlhc2VkUmVxdWlyZSA9IHJlcXVpcmU7XG4gICAgICAgYWxpYXNlZFJlcXVpcmUoJy4vbG9jYWxlLycgKyBuYW1lKTtcbiAgICAgICBnZXRTZXRHbG9iYWxMb2NhbGUob2xkTG9jYWxlKTtcbiAgICAgfSBjYXRjaCAoZSkge31cbiAgIH0qL1xuICBpZiAoIWxvY2FsZXNbbmFtZV0pIHtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICBjb25zb2xlLmVycm9yKGBLaHJvbm9zIGxvY2FsZSBlcnJvcjogcGxlYXNlIGxvYWQgbG9jYWxlIFwiJHtuYW1lfVwiIGJlZm9yZSB1c2luZyBpdGApO1xuICAgIC8vIHRocm93IG5ldyBFcnJvcihgS2hyb25vcyBsb2NhbGUgZXJyb3I6IHBsZWFzZSBsb2FkIGxvY2FsZSBcIiR7bmFtZX1cIiBiZWZvcmUgdXNpbmcgaXRgKTtcbiAgfVxuXG4gIHJldHVybiBsb2NhbGVzW25hbWVdO1xufVxuXG4vLyBUaGlzIGZ1bmN0aW9uIHdpbGwgbG9hZCBsb2NhbGUgYW5kIHRoZW4gc2V0IHRoZSBnbG9iYWwgbG9jYWxlLiAgSWZcbi8vIG5vIGFyZ3VtZW50cyBhcmUgcGFzc2VkIGluLCBpdCB3aWxsIHNpbXBseSByZXR1cm4gdGhlIGN1cnJlbnQgZ2xvYmFsXG4vLyBsb2NhbGUga2V5LlxuZXhwb3J0IGZ1bmN0aW9uIGdldFNldEdsb2JhbExvY2FsZShrZXk/OiBzdHJpbmcgfCBzdHJpbmdbXSwgdmFsdWVzPzogTG9jYWxlRGF0YSk6IHN0cmluZyB7XG4gIGxldCBkYXRhOiBMb2NhbGU7XG5cbiAgaWYgKGtleSkge1xuICAgIGlmIChpc1VuZGVmaW5lZCh2YWx1ZXMpKSB7XG4gICAgICBkYXRhID0gZ2V0TG9jYWxlKGtleSk7XG4gICAgfSBlbHNlIGlmIChpc1N0cmluZyhrZXkpKSB7XG4gICAgICBkYXRhID0gZGVmaW5lTG9jYWxlKGtleSwgdmFsdWVzKTtcbiAgICB9XG5cbiAgICBpZiAoZGF0YSkge1xuICAgICAgZ2xvYmFsTG9jYWxlID0gZGF0YTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZ2xvYmFsTG9jYWxlICYmIGdsb2JhbExvY2FsZS5fYWJicjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlZmluZUxvY2FsZShuYW1lOiBzdHJpbmcsIGNvbmZpZz86IExvY2FsZURhdGEpOiBMb2NhbGUge1xuICBpZiAoY29uZmlnID09PSBudWxsKSB7XG4gICAgLy8gdXNlZnVsIGZvciB0ZXN0aW5nXG4gICAgZGVsZXRlIGxvY2FsZXNbbmFtZV07XG4gICAgZ2xvYmFsTG9jYWxlID0gZ2V0TG9jYWxlKCdlbicpO1xuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBpZiAoIWNvbmZpZykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGxldCBwYXJlbnRDb25maWcgPSBiYXNlQ29uZmlnO1xuICBjb25maWcuYWJiciA9IG5hbWU7XG4gIGlmIChjb25maWcucGFyZW50TG9jYWxlICE9IG51bGwpIHtcbiAgICBpZiAobG9jYWxlc1tjb25maWcucGFyZW50TG9jYWxlXSAhPSBudWxsKSB7XG4gICAgICBwYXJlbnRDb25maWcgPSBsb2NhbGVzW2NvbmZpZy5wYXJlbnRMb2NhbGVdLl9jb25maWc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICghbG9jYWxlRmFtaWxpZXNbY29uZmlnLnBhcmVudExvY2FsZV0pIHtcbiAgICAgICAgbG9jYWxlRmFtaWxpZXNbY29uZmlnLnBhcmVudExvY2FsZV0gPSBbXTtcbiAgICAgIH1cbiAgICAgIGxvY2FsZUZhbWlsaWVzW2NvbmZpZy5wYXJlbnRMb2NhbGVdLnB1c2goeyBuYW1lLCBjb25maWcgfSk7XG5cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxuXG4gIGxvY2FsZXNbbmFtZV0gPSBuZXcgTG9jYWxlKG1lcmdlQ29uZmlncyhwYXJlbnRDb25maWcsIGNvbmZpZykpO1xuXG4gIGlmIChsb2NhbGVGYW1pbGllc1tuYW1lXSkge1xuICAgIGxvY2FsZUZhbWlsaWVzW25hbWVdLmZvckVhY2goZnVuY3Rpb24gKHgpIHtcbiAgICAgIGRlZmluZUxvY2FsZSh4Lm5hbWUsIHguY29uZmlnKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIGJhY2t3YXJkcyBjb21wYXQgZm9yIG5vdzogYWxzbyBzZXQgdGhlIGxvY2FsZVxuICAvLyBtYWtlIHN1cmUgd2Ugc2V0IHRoZSBsb2NhbGUgQUZURVIgYWxsIGNoaWxkIGxvY2FsZXMgaGF2ZSBiZWVuXG4gIC8vIGNyZWF0ZWQsIHNvIHdlIHdvbid0IGVuZCB1cCB3aXRoIHRoZSBjaGlsZCBsb2NhbGUgc2V0LlxuICBnZXRTZXRHbG9iYWxMb2NhbGUobmFtZSk7XG5cblxuICByZXR1cm4gbG9jYWxlc1tuYW1lXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUxvY2FsZShuYW1lOiBzdHJpbmcsIGNvbmZpZz86IExvY2FsZURhdGEpOiBMb2NhbGUge1xuICBsZXQgX2NvbmZpZyA9IGNvbmZpZztcblxuICBpZiAoX2NvbmZpZyAhPSBudWxsKSB7XG4gICAgbGV0IHBhcmVudENvbmZpZyA9IGJhc2VDb25maWc7XG4gICAgLy8gTUVSR0VcbiAgICBjb25zdCB0bXBMb2NhbGUgPSBsb2FkTG9jYWxlKG5hbWUpO1xuICAgIGlmICh0bXBMb2NhbGUgIT0gbnVsbCkge1xuICAgICAgcGFyZW50Q29uZmlnID0gdG1wTG9jYWxlLl9jb25maWc7XG4gICAgfVxuICAgIF9jb25maWcgPSBtZXJnZUNvbmZpZ3MocGFyZW50Q29uZmlnLCBfY29uZmlnKTtcbiAgICBjb25zdCBsb2NhbGUgPSBuZXcgTG9jYWxlKF9jb25maWcpO1xuICAgIGxvY2FsZS5wYXJlbnRMb2NhbGUgPSBsb2NhbGVzW25hbWVdO1xuICAgIGxvY2FsZXNbbmFtZV0gPSBsb2NhbGU7XG5cbiAgICAvLyBiYWNrd2FyZHMgY29tcGF0IGZvciBub3c6IGFsc28gc2V0IHRoZSBsb2NhbGVcbiAgICBnZXRTZXRHbG9iYWxMb2NhbGUobmFtZSk7XG4gIH0gZWxzZSB7XG4gICAgLy8gcGFzcyBudWxsIGZvciBjb25maWcgdG8gdW51cGRhdGUsIHVzZWZ1bCBmb3IgdGVzdHNcbiAgICBpZiAobG9jYWxlc1tuYW1lXSAhPSBudWxsKSB7XG4gICAgICBpZiAobG9jYWxlc1tuYW1lXS5wYXJlbnRMb2NhbGUgIT0gbnVsbCkge1xuICAgICAgICBsb2NhbGVzW25hbWVdID0gbG9jYWxlc1tuYW1lXS5wYXJlbnRMb2NhbGU7XG4gICAgICB9IGVsc2UgaWYgKGxvY2FsZXNbbmFtZV0gIT0gbnVsbCkge1xuICAgICAgICBkZWxldGUgbG9jYWxlc1tuYW1lXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbG9jYWxlc1tuYW1lXTtcbn1cblxuLy8gcmV0dXJucyBsb2NhbGUgZGF0YVxuZXhwb3J0IGZ1bmN0aW9uIGdldExvY2FsZShrZXk/OiBzdHJpbmcgfCBzdHJpbmdbXSk6IExvY2FsZSB7XG4gIHNldERlZmF1bHRMb2NhbGUoKTtcblxuICBpZiAoIWtleSkge1xuICAgIHJldHVybiBnbG9iYWxMb2NhbGU7XG4gIH1cbiAgLy8gbGV0IGxvY2FsZTtcbiAgY29uc3QgX2tleSA9IGlzQXJyYXkoa2V5KSA/IGtleSA6IFtrZXldO1xuXG4gIHJldHVybiBjaG9vc2VMb2NhbGUoX2tleSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsaXN0TG9jYWxlcygpOiBzdHJpbmdbXSB7XG4gIHJldHVybiBPYmplY3Qua2V5cyhsb2NhbGVzKTtcbn1cblxuZnVuY3Rpb24gc2V0RGVmYXVsdExvY2FsZSgpOiB2b2lkIHtcbiAgaWYgKGxvY2FsZXNbYGVuYF0pIHtcblxuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cblxuICBnZXRTZXRHbG9iYWxMb2NhbGUoJ2VuJywge1xuICAgIGRheU9mTW9udGhPcmRpbmFsUGFyc2U6IC9cXGR7MSwyfSh0aHxzdHxuZHxyZCkvLFxuICAgIG9yZGluYWwobnVtOiBudW1iZXIpOiBzdHJpbmcge1xuICAgICAgY29uc3QgYiA9IG51bSAlIDEwO1xuICAgICAgY29uc3Qgb3V0cHV0ID1cbiAgICAgICAgdG9JbnQoKG51bSAlIDEwMCkgLyAxMCkgPT09IDFcbiAgICAgICAgICA/ICd0aCdcbiAgICAgICAgICA6IGIgPT09IDEgPyAnc3QnIDogYiA9PT0gMiA/ICduZCcgOiBiID09PSAzID8gJ3JkJyA6ICd0aCc7XG5cbiAgICAgIHJldHVybiBudW0gKyBvdXRwdXQ7XG4gICAgfVxuICB9KTtcblxuICBpbml0V2VlaygpO1xuICBpbml0V2Vla1llYXIoKTtcbiAgaW5pdFllYXIoKTtcbiAgaW5pdFRpbWV6b25lKCk7XG4gIGluaXRUaW1lc3RhbXAoKTtcbiAgaW5pdFNlY29uZCgpO1xuICBpbml0UXVhcnRlcigpO1xuICBpbml0T2Zmc2V0KCk7XG4gIGluaXRNb250aCgpO1xuICBpbml0TWludXRlKCk7XG4gIGluaXRNaWxsaXNlY29uZCgpO1xuICBpbml0SG91cigpO1xuICBpbml0RGF5T2ZZZWFyKCk7XG4gIGluaXREYXlPZldlZWsoKTtcbiAgaW5pdERheU9mTW9udGgoKTtcbn1cbiIsImltcG9ydCB7IHRvSW50IH0gZnJvbSAnLi4vdXRpbHMvdHlwZS1jaGVja3MnO1xuaW1wb3J0IHsgY3JlYXRlRHVyYXRpb24gfSBmcm9tICcuL2NyZWF0ZSc7XG5pbXBvcnQgeyBEdXJhdGlvbiB9IGZyb20gJy4vY29uc3RydWN0b3InO1xuaW1wb3J0IHsgRGF0ZU9iamVjdCB9IGZyb20gJy4uL3R5cGVzJztcblxuY29uc3Qgb3JkZXJpbmc6IChrZXlvZiBEYXRlT2JqZWN0KVtdID0gWyd5ZWFyJywgJ3F1YXJ0ZXInLCAnbW9udGgnLCAnd2VlaycsICdkYXknLCAnaG91cnMnLCAnbWludXRlcycsICdzZWNvbmRzJywgJ21pbGxpc2Vjb25kcyddO1xuY29uc3Qgb3JkZXJpbmdIYXNoID0gb3JkZXJpbmcucmVkdWNlKChtZW06IHsgW2tleTogc3RyaW5nXTogYm9vbGVhbiB9LCBvcmRlcikgPT4ge1xuICBtZW1bb3JkZXJdID0gdHJ1ZTtcblxuICByZXR1cm4gbWVtO1xufSwge30pO1xuXG5leHBvcnQgZnVuY3Rpb24gaXNEdXJhdGlvblZhbGlkKGR1cmF0aW9uOiBQYXJ0aWFsPERhdGVPYmplY3Q+KTogYm9vbGVhbiB7XG4gIGNvbnN0IGR1cmF0aW9uS2V5cyA9IE9iamVjdC5rZXlzKGR1cmF0aW9uKTtcbiAgaWYgKGR1cmF0aW9uS2V5c1xuICAgICAgLnNvbWUoKGtleToga2V5b2YgRGF0ZU9iamVjdCkgPT4ge1xuICAgICAgICByZXR1cm4gKGtleSBpbiBvcmRlcmluZ0hhc2gpXG4gICAgICAgICAgJiYgZHVyYXRpb25ba2V5XSA9PT0gbnVsbFxuICAgICAgICAgIHx8IGlzTmFOKGR1cmF0aW9uW2tleV0pO1xuICAgICAgfSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgLy8gZm9yIChsZXQga2V5IGluIGR1cmF0aW9uKSB7XG4gIC8vICAgaWYgKCEoaW5kZXhPZi5jYWxsKG9yZGVyaW5nLCBrZXkpICE9PSAtMSAmJiAoZHVyYXRpb25ba2V5XSA9PSBudWxsIHx8ICFpc05hTihkdXJhdGlvbltrZXldKSkpKSB7XG4gIC8vICAgICByZXR1cm4gZmFsc2U7XG4gIC8vICAgfVxuICAvLyB9XG5cbiAgbGV0IHVuaXRIYXNEZWNpbWFsID0gZmFsc2U7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgb3JkZXJpbmcubGVuZ3RoOyArK2kpIHtcbiAgICBpZiAoZHVyYXRpb25bb3JkZXJpbmdbaV1dKSB7XG4gICAgICAvLyBvbmx5IGFsbG93IG5vbi1pbnRlZ2VycyBmb3Igc21hbGxlc3QgdW5pdFxuICAgICAgaWYgKHVuaXRIYXNEZWNpbWFsKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGlmIChkdXJhdGlvbltvcmRlcmluZ1tpXV0gIT09IHRvSW50KGR1cmF0aW9uW29yZGVyaW5nW2ldXSkpIHtcbiAgICAgICAgdW5pdEhhc0RlY2ltYWwgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG4vLyBleHBvcnQgZnVuY3Rpb24gaXNWYWxpZCgpIHtcbi8vICAgcmV0dXJuIHRoaXMuX2lzVmFsaWQ7XG4vLyB9XG4vL1xuLy8gZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUludmFsaWQoKTogRHVyYXRpb24ge1xuLy8gICByZXR1cm4gY3JlYXRlRHVyYXRpb24oTmFOKTtcbi8vIH1cbiIsImV4cG9ydCBmdW5jdGlvbiBhYnNDZWlsIChudW1iZXI6IG51bWJlcik6IG51bWJlciB7XG4gIHJldHVybiBudW1iZXIgPCAwID8gTWF0aC5mbG9vcihudW1iZXIpIDogTWF0aC5jZWlsKG51bWJlcik7XG59XG4iLCJpbXBvcnQgeyBEdXJhdGlvbiB9IGZyb20gJy4vY29uc3RydWN0b3InO1xuaW1wb3J0IHsgYWJzRmxvb3IgfSBmcm9tICcuLi91dGlscyc7XG5pbXBvcnQgeyBhYnNDZWlsIH0gZnJvbSAnLi4vdXRpbHMvYWJzLWNlaWwnO1xuXG5leHBvcnQgZnVuY3Rpb24gYnViYmxlKGR1cjogRHVyYXRpb24pOiBEdXJhdGlvbiB7XG4gIGxldCBtaWxsaXNlY29uZHMgPSBkdXIuX21pbGxpc2Vjb25kcztcbiAgbGV0IGRheXMgPSBkdXIuX2RheXM7XG4gIGxldCBtb250aHMgPSBkdXIuX21vbnRocztcbiAgY29uc3QgZGF0YSA9IGR1ci5fZGF0YTtcblxuICAvLyBpZiB3ZSBoYXZlIGEgbWl4IG9mIHBvc2l0aXZlIGFuZCBuZWdhdGl2ZSB2YWx1ZXMsIGJ1YmJsZSBkb3duIGZpcnN0XG4gIC8vIGNoZWNrOiBodHRwczovL2dpdGh1Yi5jb20vbW9tZW50L21vbWVudC9pc3N1ZXMvMjE2NlxuICBpZiAoISgobWlsbGlzZWNvbmRzID49IDAgJiYgZGF5cyA+PSAwICYmIG1vbnRocyA+PSAwKSB8fFxuICAgICAgKG1pbGxpc2Vjb25kcyA8PSAwICYmIGRheXMgPD0gMCAmJiBtb250aHMgPD0gMCkpKSB7XG4gICAgbWlsbGlzZWNvbmRzICs9IGFic0NlaWwobW9udGhzVG9EYXlzKG1vbnRocykgKyBkYXlzKSAqIDg2NGU1O1xuICAgIGRheXMgPSAwO1xuICAgIG1vbnRocyA9IDA7XG4gIH1cblxuICAvLyBUaGUgZm9sbG93aW5nIGNvZGUgYnViYmxlcyB1cCB2YWx1ZXMsIHNlZSB0aGUgdGVzdHMgZm9yXG4gIC8vIGV4YW1wbGVzIG9mIHdoYXQgdGhhdCBtZWFucy5cbiAgZGF0YS5taWxsaXNlY29uZHMgPSBtaWxsaXNlY29uZHMgJSAxMDAwO1xuXG4gIGNvbnN0IHNlY29uZHMgPSBhYnNGbG9vcihtaWxsaXNlY29uZHMgLyAxMDAwKTtcbiAgZGF0YS5zZWNvbmRzID0gc2Vjb25kcyAlIDYwO1xuXG4gIGNvbnN0IG1pbnV0ZXMgPSBhYnNGbG9vcihzZWNvbmRzIC8gNjApO1xuICBkYXRhLm1pbnV0ZXMgPSBtaW51dGVzICUgNjA7XG5cbiAgY29uc3QgaG91cnMgPSBhYnNGbG9vcihtaW51dGVzIC8gNjApO1xuICBkYXRhLmhvdXJzID0gaG91cnMgJSAyNDtcblxuICBkYXlzICs9IGFic0Zsb29yKGhvdXJzIC8gMjQpO1xuXG4gIC8vIGNvbnZlcnQgZGF5cyB0byBtb250aHNcbiAgY29uc3QgbW9udGhzRnJvbURheXMgPSBhYnNGbG9vcihkYXlzVG9Nb250aHMoZGF5cykpO1xuICBtb250aHMgKz0gbW9udGhzRnJvbURheXM7XG4gIGRheXMgLT0gYWJzQ2VpbChtb250aHNUb0RheXMobW9udGhzRnJvbURheXMpKTtcblxuICAvLyAxMiBtb250aHMgLT4gMSB5ZWFyXG4gIGNvbnN0IHllYXJzID0gYWJzRmxvb3IobW9udGhzIC8gMTIpO1xuICBtb250aHMgJT0gMTI7XG5cbiAgZGF0YS5kYXkgPSBkYXlzO1xuICBkYXRhLm1vbnRoID0gbW9udGhzO1xuICBkYXRhLnllYXIgPSB5ZWFycztcblxuICByZXR1cm4gZHVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF5c1RvTW9udGhzKGRheTogbnVtYmVyKTogbnVtYmVyIHtcbiAgLy8gNDAwIHllYXJzIGhhdmUgMTQ2MDk3IGRheXMgKHRha2luZyBpbnRvIGFjY291bnQgbGVhcCB5ZWFyIHJ1bGVzKVxuICAvLyA0MDAgeWVhcnMgaGF2ZSAxMiBtb250aHMgPT09IDQ4MDBcbiAgcmV0dXJuIGRheSAqIDQ4MDAgLyAxNDYwOTc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtb250aHNUb0RheXMobW9udGg6IG51bWJlcik6IG51bWJlciB7XG4gIC8vIHRoZSByZXZlcnNlIG9mIGRheXNUb01vbnRoc1xuICByZXR1cm4gbW9udGggKiAxNDYwOTcgLyA0ODAwO1xufVxuIiwiLy8gdHNsaW50OmRpc2FibGU6Y3ljbG9tYXRpYy1jb21wbGV4aXR5XG5pbXBvcnQgeyBjcmVhdGVEdXJhdGlvbiB9IGZyb20gJy4vY3JlYXRlJztcbmltcG9ydCB7IExvY2FsZSB9IGZyb20gJy4uL2xvY2FsZS9sb2NhbGUuY2xhc3MnO1xuaW1wb3J0IHsgRHVyYXRpb24gfSBmcm9tICcuL2NvbnN0cnVjdG9yJztcblxubGV0IHJvdW5kID0gTWF0aC5yb3VuZDtcbmNvbnN0IHRocmVzaG9sZHM6IHsgW2tleTogc3RyaW5nXTogbnVtYmVyIH0gPSB7XG4gIHNzOiA0NCwgICAgICAgICAvLyBhIGZldyBzZWNvbmRzIHRvIHNlY29uZHNcbiAgczogNDUsICAgICAgICAgLy8gc2Vjb25kcyB0byBtaW51dGVcbiAgbTogNDUsICAgICAgICAgLy8gbWludXRlcyB0byBob3VyXG4gIGg6IDIyLCAgICAgICAgIC8vIGhvdXJzIHRvIGRheVxuICBkOiAyNiwgICAgICAgICAvLyBkYXlzIHRvIG1vbnRoXG4gIE06IDExICAgICAgICAgIC8vIG1vbnRocyB0byB5ZWFyXG59O1xuXG4vLyBoZWxwZXIgZnVuY3Rpb24gZm9yIG1vbWVudC5mbi5mcm9tLCBtb21lbnQuZm4uZnJvbU5vdywgYW5kIG1vbWVudC5kdXJhdGlvbi5mbi5odW1hbml6ZVxuZnVuY3Rpb24gc3Vic3RpdHV0ZVRpbWVBZ28oc3RyOiAnZnV0dXJlJyB8ICdwYXN0JywgbnVtOiBudW1iZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB3aXRob3V0U3VmZml4OiBib29sZWFuLCBpc0Z1dHVyZTogYm9vbGVhbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2FsZTogTG9jYWxlKTogc3RyaW5nIHtcbiAgcmV0dXJuIGxvY2FsZS5yZWxhdGl2ZVRpbWUobnVtIHx8IDEsICEhd2l0aG91dFN1ZmZpeCwgc3RyLCBpc0Z1dHVyZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWxhdGl2ZVRpbWUocG9zTmVnRHVyYXRpb246IER1cmF0aW9uLCB3aXRob3V0U3VmZml4OiBib29sZWFuLCBsb2NhbGU6IExvY2FsZSk6IHN0cmluZyB7XG4gIGNvbnN0IGR1cmF0aW9uID0gY3JlYXRlRHVyYXRpb24ocG9zTmVnRHVyYXRpb24pLmFicygpO1xuICBjb25zdCBzZWNvbmRzID0gcm91bmQoZHVyYXRpb24uYXMoJ3MnKSk7XG4gIGNvbnN0IG1pbnV0ZXMgPSByb3VuZChkdXJhdGlvbi5hcygnbScpKTtcbiAgY29uc3QgaG91cnMgPSByb3VuZChkdXJhdGlvbi5hcygnaCcpKTtcbiAgY29uc3QgZGF5cyA9IHJvdW5kKGR1cmF0aW9uLmFzKCdkJykpO1xuICBjb25zdCBtb250aHMgPSByb3VuZChkdXJhdGlvbi5hcygnTScpKTtcbiAgY29uc3QgeWVhcnMgPSByb3VuZChkdXJhdGlvbi5hcygneScpKTtcblxuICBjb25zdCBhOiBbc3RyaW5nXSB8IFtzdHJpbmcsIG51bWJlcl0gPVxuICAgIHNlY29uZHMgPD0gdGhyZXNob2xkcy5zcyAmJiBbJ3MnLCBzZWNvbmRzXSB8fFxuICAgIHNlY29uZHMgPCB0aHJlc2hvbGRzLnMgJiYgWydzcycsIHNlY29uZHNdIHx8XG4gICAgbWludXRlcyA8PSAxICYmIFsnbSddIHx8XG4gICAgbWludXRlcyA8IHRocmVzaG9sZHMubSAmJiBbJ21tJywgbWludXRlc10gfHxcbiAgICBob3VycyA8PSAxICYmIFsnaCddIHx8XG4gICAgaG91cnMgPCB0aHJlc2hvbGRzLmggJiYgWydoaCcsIGhvdXJzXSB8fFxuICAgIGRheXMgPD0gMSAmJiBbJ2QnXSB8fFxuICAgIGRheXMgPCB0aHJlc2hvbGRzLmQgJiYgWydkZCcsIGRheXNdIHx8XG4gICAgbW9udGhzIDw9IDEgJiYgWydNJ10gfHxcbiAgICBtb250aHMgPCB0aHJlc2hvbGRzLk0gJiYgWydNTScsIG1vbnRoc10gfHxcbiAgICB5ZWFycyA8PSAxICYmIFsneSddIHx8IFsneXknLCB5ZWFyc107XG5cbiAgY29uc3QgYjogW3N0cmluZywgbnVtYmVyIHwgc3RyaW5nLCBib29sZWFuLCBib29sZWFuLCBMb2NhbGVdID1cbiAgICBbYVswXSwgYVsxXSwgd2l0aG91dFN1ZmZpeCwgK3Bvc05lZ0R1cmF0aW9uID4gMCwgbG9jYWxlXTtcbiAgLy8gYVsyXSA9IHdpdGhvdXRTdWZmaXg7XG4gIC8vIGFbM10gPSArcG9zTmVnRHVyYXRpb24gPiAwO1xuICAvLyBhWzRdID0gbG9jYWxlO1xuXG4gIHJldHVybiBzdWJzdGl0dXRlVGltZUFnby5hcHBseShudWxsLCBiKTtcbn1cblxuLy8gVGhpcyBmdW5jdGlvbiBhbGxvd3MgeW91IHRvIHNldCB0aGUgcm91bmRpbmcgZnVuY3Rpb24gZm9yIHJlbGF0aXZlIHRpbWUgc3RyaW5nc1xuZXhwb3J0IGZ1bmN0aW9uIGdldFNldFJlbGF0aXZlVGltZVJvdW5kaW5nKHJvdW5kaW5nRnVuY3Rpb246IGFueSk6IGJvb2xlYW4gfCBGdW5jdGlvbiB7XG4gIGlmIChyb3VuZGluZ0Z1bmN0aW9uID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gcm91bmQ7XG4gIH1cbiAgaWYgKHR5cGVvZihyb3VuZGluZ0Z1bmN0aW9uKSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJvdW5kID0gcm91bmRpbmdGdW5jdGlvbjtcblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG4vLyBUaGlzIGZ1bmN0aW9uIGFsbG93cyB5b3UgdG8gc2V0IGEgdGhyZXNob2xkIGZvciByZWxhdGl2ZSB0aW1lIHN0cmluZ3NcbmV4cG9ydCBmdW5jdGlvbiBnZXRTZXRSZWxhdGl2ZVRpbWVUaHJlc2hvbGQodGhyZXNob2xkOiBzdHJpbmcsIGxpbWl0OiBudW1iZXIpOiBib29sZWFuIHwgbnVtYmVyIHtcbiAgaWYgKHRocmVzaG9sZHNbdGhyZXNob2xkXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmIChsaW1pdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIHRocmVzaG9sZHNbdGhyZXNob2xkXTtcbiAgfVxuICB0aHJlc2hvbGRzW3RocmVzaG9sZF0gPSBsaW1pdDtcbiAgaWYgKHRocmVzaG9sZCA9PT0gJ3MnKSB7XG4gICAgdGhyZXNob2xkcy5zcyA9IGxpbWl0IC0gMTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG4vLyBleHBvcnQgZnVuY3Rpb24gaHVtYW5pemUod2l0aFN1ZmZpeCkge1xuLy8gICBpZiAoIXRoaXMuaXNWYWxpZCgpKSB7XG4vLyAgICAgcmV0dXJuIHRoaXMubG9jYWxlRGF0YSgpLmludmFsaWREYXRlKCk7XG4vLyAgIH1cbi8vXG4vLyAgIGNvbnN0IGxvY2FsZSA9IHRoaXMubG9jYWxlRGF0YSgpO1xuLy8gICBsZXQgb3V0cHV0ID0gcmVsYXRpdmVUaW1lKHRoaXMsICF3aXRoU3VmZml4LCBsb2NhbGUpO1xuLy9cbi8vICAgaWYgKHdpdGhTdWZmaXgpIHtcbi8vICAgICBvdXRwdXQgPSBsb2NhbGUucGFzdEZ1dHVyZSgrdGhpcywgb3V0cHV0KTtcbi8vICAgfVxuLy9cbi8vICAgcmV0dXJuIGxvY2FsZS5wb3N0Zm9ybWF0KG91dHB1dCk7XG4vLyB9XG4iLCJpbXBvcnQgeyBnZXRMb2NhbGUgfSBmcm9tICcuLi9sb2NhbGUvbG9jYWxlcyc7XG5pbXBvcnQgeyBEYXRlUGFyc2luZ0NvbmZpZyB9IGZyb20gJy4uL2NyZWF0ZS9wYXJzaW5nLnR5cGVzJztcbmltcG9ydCB7IGlzRHVyYXRpb25WYWxpZCB9IGZyb20gJy4vdmFsaWQnO1xuaW1wb3J0IHsgYnViYmxlLCBkYXlzVG9Nb250aHMsIG1vbnRoc1RvRGF5cyB9IGZyb20gJy4vYnViYmxlJztcbmltcG9ydCB7IERhdGVPYmplY3QgfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBMb2NhbGUgfSBmcm9tICcuLi9sb2NhbGUvbG9jYWxlLmNsYXNzJztcbmltcG9ydCB7IG5vcm1hbGl6ZVVuaXRzIH0gZnJvbSAnLi4vdW5pdHMvYWxpYXNlcyc7XG5pbXBvcnQgeyByZWxhdGl2ZVRpbWUgfSBmcm9tICcuL2h1bWFuaXplJztcbmltcG9ydCB7IHRvSW50IH0gZnJvbSAnLi4vdXRpbHMvdHlwZS1jaGVja3MnO1xuXG5leHBvcnQgY2xhc3MgRHVyYXRpb24ge1xuICBfbWlsbGlzZWNvbmRzOiBudW1iZXI7XG4gIF9kYXlzOiBudW1iZXI7XG4gIF9tb250aHM6IG51bWJlcjtcbiAgX2RhdGE6IFBhcnRpYWw8RGF0ZU9iamVjdD4gPSB7fTtcbiAgX2xvY2FsZTogTG9jYWxlID0gZ2V0TG9jYWxlKCk7XG4gIF9pc1ZhbGlkOiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKGR1cmF0aW9uOiBQYXJ0aWFsPERhdGVPYmplY3Q+LCBjb25maWc6IERhdGVQYXJzaW5nQ29uZmlnID0ge30pIHtcbiAgICB0aGlzLl9sb2NhbGUgPSBjb25maWcgJiYgY29uZmlnLl9sb2NhbGUgfHwgZ2V0TG9jYWxlKCk7XG4gICAgLy8gY29uc3Qgbm9ybWFsaXplZElucHV0ID0gbm9ybWFsaXplT2JqZWN0VW5pdHMoZHVyYXRpb24pO1xuICAgIGNvbnN0IG5vcm1hbGl6ZWRJbnB1dCA9IGR1cmF0aW9uO1xuICAgIGNvbnN0IHllYXJzID0gbm9ybWFsaXplZElucHV0LnllYXIgfHwgMDtcbiAgICBjb25zdCBxdWFydGVycyA9IG5vcm1hbGl6ZWRJbnB1dC5xdWFydGVyIHx8IDA7XG4gICAgY29uc3QgbW9udGhzID0gbm9ybWFsaXplZElucHV0Lm1vbnRoIHx8IDA7XG4gICAgY29uc3Qgd2Vla3MgPSBub3JtYWxpemVkSW5wdXQud2VlayB8fCAwO1xuICAgIGNvbnN0IGRheXMgPSBub3JtYWxpemVkSW5wdXQuZGF5IHx8IDA7XG4gICAgY29uc3QgaG91cnMgPSBub3JtYWxpemVkSW5wdXQuaG91cnMgfHwgMDtcbiAgICBjb25zdCBtaW51dGVzID0gbm9ybWFsaXplZElucHV0Lm1pbnV0ZXMgfHwgMDtcbiAgICBjb25zdCBzZWNvbmRzID0gbm9ybWFsaXplZElucHV0LnNlY29uZHMgfHwgMDtcbiAgICBjb25zdCBtaWxsaXNlY29uZHMgPSBub3JtYWxpemVkSW5wdXQubWlsbGlzZWNvbmRzIHx8IDA7XG5cbiAgICB0aGlzLl9pc1ZhbGlkID0gaXNEdXJhdGlvblZhbGlkKG5vcm1hbGl6ZWRJbnB1dCk7XG5cbiAgICAvLyByZXByZXNlbnRhdGlvbiBmb3IgZGF0ZUFkZFJlbW92ZVxuICAgIHRoaXMuX21pbGxpc2Vjb25kcyA9ICttaWxsaXNlY29uZHMgK1xuICAgICAgc2Vjb25kcyAqIDEwMDAgK1xuICAgICAgbWludXRlcyAqIDYwICogMTAwMCArIC8vIDEwMDAgKiA2MFxuICAgICAgaG91cnMgKiAxMDAwICogNjAgKiA2MDsgLy8gdXNpbmcgMTAwMCAqIDYwICogNjBcbiAgICAvLyBpbnN0ZWFkIG9mIDM2ZTUgdG8gYXZvaWQgZmxvYXRpbmcgcG9pbnQgcm91bmRpbmcgZXJyb3JzIGh0dHBzOi8vZ2l0aHViLmNvbS9tb21lbnQvbW9tZW50L2lzc3Vlcy8yOTc4XG4gICAgLy8gQmVjYXVzZSBvZiBkYXRlQWRkUmVtb3ZlIHRyZWF0cyAyNCBob3VycyBhcyBkaWZmZXJlbnQgZnJvbSBhXG4gICAgLy8gZGF5IHdoZW4gd29ya2luZyBhcm91bmQgRFNULCB3ZSBuZWVkIHRvIHN0b3JlIHRoZW0gc2VwYXJhdGVseVxuICAgIHRoaXMuX2RheXMgPSArZGF5cyArXG4gICAgICB3ZWVrcyAqIDc7XG4gICAgLy8gSXQgaXMgaW1wb3NzaWJsZSB0byB0cmFuc2xhdGUgbW9udGhzIGludG8gZGF5cyB3aXRob3V0IGtub3dpbmdcbiAgICAvLyB3aGljaCBtb250aHMgeW91IGFyZSBhcmUgdGFsa2luZyBhYm91dCwgc28gd2UgaGF2ZSB0byBzdG9yZVxuICAgIC8vIGl0IHNlcGFyYXRlbHkuXG4gICAgdGhpcy5fbW9udGhzID0gK21vbnRocyArXG4gICAgICBxdWFydGVycyAqIDMgK1xuICAgICAgeWVhcnMgKiAxMjtcblxuICAgIC8vIHRoaXMuX2RhdGEgPSB7fTtcblxuICAgIC8vIHRoaXMuX2xvY2FsZSA9IGdldExvY2FsZSgpO1xuXG4gICAgLy8gdGhpcy5fYnViYmxlKCk7XG4gICAgcmV0dXJuIGJ1YmJsZSh0aGlzKTtcbiAgfVxuXG4gIGlzVmFsaWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2lzVmFsaWQ7XG4gIH1cblxuICBodW1hbml6ZSh3aXRoU3VmZml4PzogYm9vbGVhbik6IHN0cmluZyB7XG4gICAgLy8gdGhyb3cgbmV3IEVycm9yKGBUT0RPOiBpbXBsZW1lbnRgKTtcblxuICAgIGlmICghdGhpcy5pc1ZhbGlkKCkpIHtcbiAgICAgIHJldHVybiB0aGlzLmxvY2FsZURhdGEoKS5pbnZhbGlkRGF0ZTtcbiAgICB9XG5cbiAgICBjb25zdCBsb2NhbGUgPSB0aGlzLmxvY2FsZURhdGEoKTtcbiAgICBsZXQgb3V0cHV0ID0gcmVsYXRpdmVUaW1lKHRoaXMsICF3aXRoU3VmZml4LCBsb2NhbGUpO1xuXG4gICAgaWYgKHdpdGhTdWZmaXgpIHtcbiAgICAgIG91dHB1dCA9IGxvY2FsZS5wYXN0RnV0dXJlKCt0aGlzLCBvdXRwdXQpO1xuICAgIH1cblxuICAgIHJldHVybiBsb2NhbGUucG9zdGZvcm1hdChvdXRwdXQpO1xuICB9XG5cbiAgbG9jYWxlRGF0YSgpOiBMb2NhbGUge1xuICAgIHJldHVybiB0aGlzLl9sb2NhbGU7XG4gIH1cblxuICBsb2NhbGUoKTogc3RyaW5nO1xuICBsb2NhbGUobG9jYWxlS2V5OiBzdHJpbmcpOiBEdXJhdGlvbjtcbiAgbG9jYWxlKGxvY2FsZUtleT86IHN0cmluZyk6IER1cmF0aW9uIHwgc3RyaW5nIHtcbiAgICBpZiAoIWxvY2FsZUtleSkge1xuICAgICAgcmV0dXJuIHRoaXMuX2xvY2FsZS5fYWJicjtcbiAgICB9XG5cbiAgICB0aGlzLl9sb2NhbGUgPSBnZXRMb2NhbGUobG9jYWxlS2V5KSB8fCB0aGlzLl9sb2NhbGU7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG5cbiAgYWJzKCk6IER1cmF0aW9uIHtcbiAgICBjb25zdCBtYXRoQWJzID0gTWF0aC5hYnM7XG5cbiAgICBjb25zdCBkYXRhID0gdGhpcy5fZGF0YTtcblxuICAgIHRoaXMuX21pbGxpc2Vjb25kcyA9IG1hdGhBYnModGhpcy5fbWlsbGlzZWNvbmRzKTtcbiAgICB0aGlzLl9kYXlzID0gbWF0aEFicyh0aGlzLl9kYXlzKTtcbiAgICB0aGlzLl9tb250aHMgPSBtYXRoQWJzKHRoaXMuX21vbnRocyk7XG5cbiAgICBkYXRhLm1pbGxpc2Vjb25kcyA9IG1hdGhBYnMoZGF0YS5taWxsaXNlY29uZHMpO1xuICAgIGRhdGEuc2Vjb25kcyA9IG1hdGhBYnMoZGF0YS5zZWNvbmRzKTtcbiAgICBkYXRhLm1pbnV0ZXMgPSBtYXRoQWJzKGRhdGEubWludXRlcyk7XG4gICAgZGF0YS5ob3VycyA9IG1hdGhBYnMoZGF0YS5ob3Vycyk7XG4gICAgZGF0YS5tb250aCA9IG1hdGhBYnMoZGF0YS5tb250aCk7XG4gICAgZGF0YS55ZWFyID0gbWF0aEFicyhkYXRhLnllYXIpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBhcyhfdW5pdHM6IHN0cmluZyk6IG51bWJlciB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQoKSkge1xuICAgICAgcmV0dXJuIE5hTjtcbiAgICB9XG4gICAgbGV0IGRheXM7XG4gICAgbGV0IG1vbnRocztcbiAgICBjb25zdCBtaWxsaXNlY29uZHMgPSB0aGlzLl9taWxsaXNlY29uZHM7XG5cbiAgICBjb25zdCB1bml0cyA9IG5vcm1hbGl6ZVVuaXRzKF91bml0cyk7XG5cbiAgICBpZiAodW5pdHMgPT09ICdtb250aCcgfHwgdW5pdHMgPT09ICd5ZWFyJykge1xuICAgICAgZGF5cyA9IHRoaXMuX2RheXMgKyBtaWxsaXNlY29uZHMgLyA4NjRlNTtcbiAgICAgIG1vbnRocyA9IHRoaXMuX21vbnRocyArIGRheXNUb01vbnRocyhkYXlzKTtcblxuICAgICAgcmV0dXJuIHVuaXRzID09PSAnbW9udGgnID8gbW9udGhzIDogbW9udGhzIC8gMTI7XG4gICAgfVxuXG4gICAgLy8gaGFuZGxlIG1pbGxpc2Vjb25kcyBzZXBhcmF0ZWx5IGJlY2F1c2Ugb2YgZmxvYXRpbmcgcG9pbnQgbWF0aCBlcnJvcnMgKGlzc3VlICMxODY3KVxuICAgIGRheXMgPSB0aGlzLl9kYXlzICsgTWF0aC5yb3VuZChtb250aHNUb0RheXModGhpcy5fbW9udGhzKSk7XG4gICAgc3dpdGNoICh1bml0cykge1xuICAgICAgY2FzZSAnd2VlaycgICA6XG4gICAgICAgIHJldHVybiBkYXlzIC8gNyArIG1pbGxpc2Vjb25kcyAvIDYwNDhlNTtcbiAgICAgIGNhc2UgJ2RheScgICAgOlxuICAgICAgICByZXR1cm4gZGF5cyArIG1pbGxpc2Vjb25kcyAvIDg2NGU1O1xuICAgICAgY2FzZSAnaG91cnMnICAgOlxuICAgICAgICByZXR1cm4gZGF5cyAqIDI0ICsgbWlsbGlzZWNvbmRzIC8gMzZlNTtcbiAgICAgIGNhc2UgJ21pbnV0ZXMnIDpcbiAgICAgICAgcmV0dXJuIGRheXMgKiAxNDQwICsgbWlsbGlzZWNvbmRzIC8gNmU0O1xuICAgICAgY2FzZSAnc2Vjb25kcycgOlxuICAgICAgICByZXR1cm4gZGF5cyAqIDg2NDAwICsgbWlsbGlzZWNvbmRzIC8gMTAwMDtcbiAgICAgIC8vIE1hdGguZmxvb3IgcHJldmVudHMgZmxvYXRpbmcgcG9pbnQgbWF0aCBlcnJvcnMgaGVyZVxuICAgICAgY2FzZSAnbWlsbGlzZWNvbmRzJzpcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoZGF5cyAqIDg2NGU1KSArIG1pbGxpc2Vjb25kcztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgVW5rbm93biB1bml0ICR7dW5pdHN9YCk7XG4gICAgfVxuICB9XG5cbiAgdmFsdWVPZiAoKSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQoKSkge1xuICAgICAgcmV0dXJuIE5hTjtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5fbWlsbGlzZWNvbmRzICtcbiAgICAgIHRoaXMuX2RheXMgKiA4NjRlNSArXG4gICAgICAodGhpcy5fbW9udGhzICUgMTIpICogMjU5MmU2ICtcbiAgICAgIHRvSW50KHRoaXMuX21vbnRocyAvIDEyKSAqIDMxNTM2ZTZcbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0R1cmF0aW9uKG9iajogYW55KTogb2JqIGlzIER1cmF0aW9uIHtcbiAgcmV0dXJuIG9iaiBpbnN0YW5jZW9mIER1cmF0aW9uO1xufVxuIiwiaW1wb3J0IHsgRGF0ZVBhcnNpbmdDb25maWcgfSBmcm9tICcuL3BhcnNpbmcudHlwZXMnO1xuaW1wb3J0IHsgZ2V0UGFyc2luZ0ZsYWdzIH0gZnJvbSAnLi9wYXJzaW5nLWZsYWdzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGlzVmFsaWQoY29uZmlnOiBEYXRlUGFyc2luZ0NvbmZpZyk6IGJvb2xlYW4ge1xuICBpZiAoY29uZmlnLl9pc1ZhbGlkID09IG51bGwpIHtcbiAgICBjb25zdCBmbGFncyA9IGdldFBhcnNpbmdGbGFncyhjb25maWcpO1xuICAgIGNvbnN0IHBhcnNlZFBhcnRzID0gQXJyYXkucHJvdG90eXBlLnNvbWUuY2FsbChmbGFncy5wYXJzZWREYXRlUGFydHMsIGZ1bmN0aW9uIChpOiBudW1iZXIpIHtcbiAgICAgIHJldHVybiBpICE9IG51bGw7XG4gICAgfSk7XG4gICAgbGV0IGlzTm93VmFsaWQgPSAhaXNOYU4oY29uZmlnLl9kICYmIGNvbmZpZy5fZC5nZXRUaW1lKCkpICYmXG4gICAgICBmbGFncy5vdmVyZmxvdyA8IDAgJiZcbiAgICAgICFmbGFncy5lbXB0eSAmJlxuICAgICAgIWZsYWdzLmludmFsaWRNb250aCAmJlxuICAgICAgIWZsYWdzLmludmFsaWRXZWVrZGF5ICYmXG4gICAgICAhZmxhZ3Mud2Vla2RheU1pc21hdGNoICYmXG4gICAgICAhZmxhZ3MubnVsbElucHV0ICYmXG4gICAgICAhZmxhZ3MuaW52YWxpZEZvcm1hdCAmJlxuICAgICAgIWZsYWdzLnVzZXJJbnZhbGlkYXRlZCAmJlxuICAgICAgKCFmbGFncy5tZXJpZGllbSB8fCAoZmxhZ3MubWVyaWRpZW0gJiYgcGFyc2VkUGFydHMpKTtcblxuICAgIGlmIChjb25maWcuX3N0cmljdCkge1xuICAgICAgaXNOb3dWYWxpZCA9IGlzTm93VmFsaWQgJiZcbiAgICAgICAgZmxhZ3MuY2hhcnNMZWZ0T3ZlciA9PT0gMCAmJlxuICAgICAgICBmbGFncy51bnVzZWRUb2tlbnMubGVuZ3RoID09PSAwICYmXG4gICAgICAgIGZsYWdzLmJpZ0hvdXIgPT09IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBpZiAoT2JqZWN0LmlzRnJvemVuID09IG51bGwgfHwgIU9iamVjdC5pc0Zyb3plbihjb25maWcpKSB7XG4gICAgICBjb25maWcuX2lzVmFsaWQgPSBpc05vd1ZhbGlkO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gaXNOb3dWYWxpZDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gY29uZmlnLl9pc1ZhbGlkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlSW52YWxpZChjb25maWc6IERhdGVQYXJzaW5nQ29uZmlnLCBmbGFncz86IHsgbnVsbElucHV0OiBib29sZWFuIH0pOiBEYXRlUGFyc2luZ0NvbmZpZyB7XG4gIGNvbmZpZy5fZCA9IG5ldyBEYXRlKE5hTik7XG4gIE9iamVjdC5hc3NpZ24oZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZyksIGZsYWdzIHx8IHsgdXNlckludmFsaWRhdGVkOiB0cnVlIH0pO1xuXG4gIHJldHVybiBjb25maWc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtYXJrSW52YWxpZChjb25maWc6IERhdGVQYXJzaW5nQ29uZmlnKTogRGF0ZVBhcnNpbmdDb25maWcge1xuICBjb25maWcuX2lzVmFsaWQgPSBmYWxzZTtcblxuICByZXR1cm4gY29uZmlnO1xufVxuIiwiLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG5pbXBvcnQgeyBkZWZhdWx0TG9jYWxlTW9udGhzU2hvcnQsIGRlZmF1bHRMb2NhbGVXZWVrZGF5c1Nob3J0IH0gZnJvbSAnLi4vbG9jYWxlL2xvY2FsZS5jbGFzcyc7XG5pbXBvcnQgeyBEYXRlQXJyYXkgfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBEYXRlUGFyc2luZ0NvbmZpZyB9IGZyb20gJy4vcGFyc2luZy50eXBlcyc7XG5pbXBvcnQgeyBpc1N0cmluZyB9IGZyb20gJy4uL3V0aWxzL3R5cGUtY2hlY2tzJztcbmltcG9ydCB7IGNvbmZpZ0Zyb21TdHJpbmdBbmRGb3JtYXQgfSBmcm9tICcuL2Zyb20tc3RyaW5nLWFuZC1mb3JtYXQnO1xuaW1wb3J0IHsgY3JlYXRlVVRDRGF0ZSB9IGZyb20gJy4vZGF0ZS1mcm9tLWFycmF5JztcbmltcG9ydCB7IGNyZWF0ZUludmFsaWQsIG1hcmtJbnZhbGlkIH0gZnJvbSAnLi92YWxpZCc7XG5pbXBvcnQgeyBnZXRQYXJzaW5nRmxhZ3MgfSBmcm9tICcuL3BhcnNpbmctZmxhZ3MnO1xuXG4vLyBpc28gODYwMSByZWdleFxuLy8gMDAwMC0wMC0wMCAwMDAwLVcwMCBvciAwMDAwLVcwMC0wICsgVCArIDAwIG9yIDAwOjAwIG9yIDAwOjAwOjAwIG9yIDAwOjAwOjAwLjAwMCArICswMDowMCBvciArMDAwMCBvciArMDApXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbmNvbnN0IGV4dGVuZGVkSXNvUmVnZXggPSAvXlxccyooKD86WystXVxcZHs2fXxcXGR7NH0pLSg/OlxcZFxcZC1cXGRcXGR8V1xcZFxcZC1cXGR8V1xcZFxcZHxcXGRcXGRcXGR8XFxkXFxkKSkoPzooVHwgKShcXGRcXGQoPzo6XFxkXFxkKD86OlxcZFxcZCg/OlsuLF1cXGQrKT8pPyk/KShbXFwrXFwtXVxcZFxcZCg/Ojo/XFxkXFxkKT98XFxzKlopPyk/JC87XG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbmNvbnN0IGJhc2ljSXNvUmVnZXggPSAvXlxccyooKD86WystXVxcZHs2fXxcXGR7NH0pKD86XFxkXFxkXFxkXFxkfFdcXGRcXGRcXGR8V1xcZFxcZHxcXGRcXGRcXGR8XFxkXFxkKSkoPzooVHwgKShcXGRcXGQoPzpcXGRcXGQoPzpcXGRcXGQoPzpbLixdXFxkKyk/KT8pPykoW1xcK1xcLV1cXGRcXGQoPzo6P1xcZFxcZCk/fFxccypaKT8pPyQvO1xuXG5jb25zdCB0elJlZ2V4ID0gL1p8WystXVxcZFxcZCg/Ojo/XFxkXFxkKT8vO1xuXG5jb25zdCBpc29EYXRlczogW3N0cmluZywgUmVnRXhwLCBib29sZWFuXVtdID0gW1xuICBbJ1lZWVlZWS1NTS1ERCcsIC9bKy1dXFxkezZ9LVxcZFxcZC1cXGRcXGQvLCB0cnVlXSxcbiAgWydZWVlZLU1NLUREJywgL1xcZHs0fS1cXGRcXGQtXFxkXFxkLywgdHJ1ZV0sXG4gIFsnR0dHRy1bV11XVy1FJywgL1xcZHs0fS1XXFxkXFxkLVxcZC8sIHRydWVdLFxuICBbJ0dHR0ctW1ddV1cnLCAvXFxkezR9LVdcXGRcXGQvLCBmYWxzZV0sXG4gIFsnWVlZWS1EREQnLCAvXFxkezR9LVxcZHszfS8sIHRydWVdLFxuICBbJ1lZWVktTU0nLCAvXFxkezR9LVxcZFxcZC8sIGZhbHNlXSxcbiAgWydZWVlZWVlNTUREJywgL1srLV1cXGR7MTB9LywgdHJ1ZV0sXG4gIFsnWVlZWU1NREQnLCAvXFxkezh9LywgdHJ1ZV0sXG4gIC8vIFlZWVlNTSBpcyBOT1QgYWxsb3dlZCBieSB0aGUgc3RhbmRhcmRcbiAgWydHR0dHW1ddV1dFJywgL1xcZHs0fVdcXGR7M30vLCB0cnVlXSxcbiAgWydHR0dHW1ddV1cnLCAvXFxkezR9V1xcZHsyfS8sIGZhbHNlXSxcbiAgWydZWVlZREREJywgL1xcZHs3fS8sIHRydWVdXG5dO1xuXG4vLyBpc28gdGltZSBmb3JtYXRzIGFuZCByZWdleGVzXG5jb25zdCBpc29UaW1lczogW3N0cmluZywgUmVnRXhwXVtdID0gW1xuICBbJ0hIOm1tOnNzLlNTU1MnLCAvXFxkXFxkOlxcZFxcZDpcXGRcXGRcXC5cXGQrL10sXG4gIFsnSEg6bW06c3MsU1NTUycsIC9cXGRcXGQ6XFxkXFxkOlxcZFxcZCxcXGQrL10sXG4gIFsnSEg6bW06c3MnLCAvXFxkXFxkOlxcZFxcZDpcXGRcXGQvXSxcbiAgWydISDptbScsIC9cXGRcXGQ6XFxkXFxkL10sXG4gIFsnSEhtbXNzLlNTU1MnLCAvXFxkXFxkXFxkXFxkXFxkXFxkXFwuXFxkKy9dLFxuICBbJ0hIbW1zcyxTU1NTJywgL1xcZFxcZFxcZFxcZFxcZFxcZCxcXGQrL10sXG4gIFsnSEhtbXNzJywgL1xcZFxcZFxcZFxcZFxcZFxcZC9dLFxuICBbJ0hIbW0nLCAvXFxkXFxkXFxkXFxkL10sXG4gIFsnSEgnLCAvXFxkXFxkL11cbl07XG5cbmNvbnN0IGFzcE5ldEpzb25SZWdleCA9IC9eXFwvP0RhdGVcXCgoXFwtP1xcZCspL2k7XG5cbmNvbnN0IG9ic09mZnNldHM6IHsgW2tleTogc3RyaW5nXTogbnVtYmVyIH0gPSB7XG4gIFVUOiAwLFxuICBHTVQ6IDAsXG4gIEVEVDogLTQgKiA2MCxcbiAgRVNUOiAtNSAqIDYwLFxuICBDRFQ6IC01ICogNjAsXG4gIENTVDogLTYgKiA2MCxcbiAgTURUOiAtNiAqIDYwLFxuICBNU1Q6IC03ICogNjAsXG4gIFBEVDogLTcgKiA2MCxcbiAgUFNUOiAtOCAqIDYwXG59O1xuXG4vLyBSRkMgMjgyMiByZWdleDogRm9yIGRldGFpbHMgc2VlIGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmMyODIyI3NlY3Rpb24tMy4zXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbmNvbnN0IHJmYzI4MjIgPSAvXig/OihNb258VHVlfFdlZHxUaHV8RnJpfFNhdHxTdW4pLD9cXHMpPyhcXGR7MSwyfSlcXHMoSmFufEZlYnxNYXJ8QXByfE1heXxKdW58SnVsfEF1Z3xTZXB8T2N0fE5vdnxEZWMpXFxzKFxcZHsyLDR9KVxccyhcXGRcXGQpOihcXGRcXGQpKD86OihcXGRcXGQpKT9cXHMoPzooVVR8R01UfFtFQ01QXVtTRF1UKXwoW1p6XSl8KFsrLV1cXGR7NH0pKSQvO1xuXG4vLyBkYXRlIGZyb20gaXNvIGZvcm1hdFxuZXhwb3J0IGZ1bmN0aW9uIGNvbmZpZ0Zyb21JU08oY29uZmlnOiBEYXRlUGFyc2luZ0NvbmZpZyk6IERhdGVQYXJzaW5nQ29uZmlnIHtcbiAgaWYgKCFpc1N0cmluZyhjb25maWcuX2kpKSB7XG4gICAgcmV0dXJuIGNvbmZpZztcbiAgfVxuXG4gIGNvbnN0IGlucHV0ID0gY29uZmlnLl9pO1xuICBjb25zdCBtYXRjaCA9IGV4dGVuZGVkSXNvUmVnZXguZXhlYyhpbnB1dCkgfHwgYmFzaWNJc29SZWdleC5leGVjKGlucHV0KTtcblxuXG4gIGxldCBhbGxvd1RpbWU7XG4gIGxldCBkYXRlRm9ybWF0O1xuICBsZXQgdGltZUZvcm1hdDtcbiAgbGV0IHR6Rm9ybWF0O1xuXG4gIGlmICghbWF0Y2gpIHtcbiAgICBjb25maWcuX2lzVmFsaWQgPSBmYWxzZTtcblxuICAgIHJldHVybiBjb25maWc7XG4gIH1cblxuICAvLyBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS5pc28gPSB0cnVlO1xuICBsZXQgaTtcbiAgbGV0IGw7XG4gIGZvciAoaSA9IDAsIGwgPSBpc29EYXRlcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBpZiAoaXNvRGF0ZXNbaV1bMV0uZXhlYyhtYXRjaFsxXSkpIHtcbiAgICAgIGRhdGVGb3JtYXQgPSBpc29EYXRlc1tpXVswXTtcbiAgICAgIGFsbG93VGltZSA9IGlzb0RhdGVzW2ldWzJdICE9PSBmYWxzZTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIGlmIChkYXRlRm9ybWF0ID09IG51bGwpIHtcbiAgICBjb25maWcuX2lzVmFsaWQgPSBmYWxzZTtcblxuICAgIHJldHVybiBjb25maWc7XG4gIH1cblxuICBpZiAobWF0Y2hbM10pIHtcbiAgICBmb3IgKGkgPSAwLCBsID0gaXNvVGltZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBpZiAoaXNvVGltZXNbaV1bMV0uZXhlYyhtYXRjaFszXSkpIHtcbiAgICAgICAgLy8gbWF0Y2hbMl0gc2hvdWxkIGJlICdUJyBvciBzcGFjZVxuICAgICAgICB0aW1lRm9ybWF0ID0gKG1hdGNoWzJdIHx8ICcgJykgKyBpc29UaW1lc1tpXVswXTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRpbWVGb3JtYXQgPT0gbnVsbCkge1xuICAgICAgY29uZmlnLl9pc1ZhbGlkID0gZmFsc2U7XG5cbiAgICAgIHJldHVybiBjb25maWc7XG4gICAgfVxuXG4gIH1cbiAgaWYgKCFhbGxvd1RpbWUgJiYgdGltZUZvcm1hdCAhPSBudWxsKSB7XG4gICAgY29uZmlnLl9pc1ZhbGlkID0gZmFsc2U7XG5cbiAgICByZXR1cm4gY29uZmlnO1xuICB9XG5cbiAgaWYgKG1hdGNoWzRdKSB7XG4gICAgaWYgKHR6UmVnZXguZXhlYyhtYXRjaFs0XSkpIHtcbiAgICAgIHR6Rm9ybWF0ID0gJ1onO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25maWcuX2lzVmFsaWQgPSBmYWxzZTtcblxuICAgICAgcmV0dXJuIGNvbmZpZztcbiAgICB9XG4gIH1cblxuICBjb25maWcuX2YgPSBkYXRlRm9ybWF0ICsgKHRpbWVGb3JtYXQgfHwgJycpICsgKHR6Rm9ybWF0IHx8ICcnKTtcblxuICByZXR1cm4gY29uZmlnRnJvbVN0cmluZ0FuZEZvcm1hdChjb25maWcpO1xufVxuXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbmZ1bmN0aW9uIGV4dHJhY3RGcm9tUkZDMjgyMlN0cmluZ3MoeWVhclN0cjogc3RyaW5nLCBtb250aFN0cjogc3RyaW5nLCBkYXlTdHI6IHN0cmluZywgaG91clN0cjogc3RyaW5nLCBtaW51dGVTdHI6IHN0cmluZywgc2Vjb25kU3RyOiBzdHJpbmcpOiBEYXRlQXJyYXkge1xuICBjb25zdCByZXN1bHQgPSBbXG4gICAgdW50cnVuY2F0ZVllYXIoeWVhclN0ciksXG4gICAgZGVmYXVsdExvY2FsZU1vbnRoc1Nob3J0LmluZGV4T2YobW9udGhTdHIpLFxuICAgIHBhcnNlSW50KGRheVN0ciwgMTApLFxuICAgIHBhcnNlSW50KGhvdXJTdHIsIDEwKSxcbiAgICBwYXJzZUludChtaW51dGVTdHIsIDEwKVxuICBdO1xuXG4gIGlmIChzZWNvbmRTdHIpIHtcbiAgICByZXN1bHQucHVzaChwYXJzZUludChzZWNvbmRTdHIsIDEwKSk7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiB1bnRydW5jYXRlWWVhcih5ZWFyU3RyOiBzdHJpbmcpOiBudW1iZXIge1xuICBjb25zdCB5ZWFyID0gcGFyc2VJbnQoeWVhclN0ciwgMTApO1xuXG4gIHJldHVybiB5ZWFyIDw9IDQ5ID8geWVhciArIDIwMDAgOiB5ZWFyO1xufVxuXG5mdW5jdGlvbiBwcmVwcm9jZXNzUkZDMjgyMihzdHI6IHN0cmluZyk6IHN0cmluZyB7XG4gIC8vIFJlbW92ZSBjb21tZW50cyBhbmQgZm9sZGluZyB3aGl0ZXNwYWNlIGFuZCByZXBsYWNlIG11bHRpcGxlLXNwYWNlcyB3aXRoIGEgc2luZ2xlIHNwYWNlXG4gIHJldHVybiBzdHJcbiAgICAucmVwbGFjZSgvXFwoW14pXSpcXCl8W1xcblxcdF0vZywgJyAnKVxuICAgIC5yZXBsYWNlKC8oXFxzXFxzKykvZywgJyAnKS50cmltKCk7XG59XG5cbmZ1bmN0aW9uIGNoZWNrV2Vla2RheSh3ZWVrZGF5U3RyOiBzdHJpbmcsIHBhcnNlZElucHV0OiBEYXRlQXJyYXksIGNvbmZpZzogRGF0ZVBhcnNpbmdDb25maWcpOiBib29sZWFuIHtcbiAgaWYgKHdlZWtkYXlTdHIpIHtcbiAgICAvLyBUT0RPOiBSZXBsYWNlIHRoZSB2YW5pbGxhIEpTIERhdGUgb2JqZWN0IHdpdGggYW4gaW5kZXBlbnRlbnQgZGF5LW9mLXdlZWsgY2hlY2suXG4gICAgY29uc3Qgd2Vla2RheVByb3ZpZGVkID0gZGVmYXVsdExvY2FsZVdlZWtkYXlzU2hvcnQuaW5kZXhPZih3ZWVrZGF5U3RyKTtcbiAgICBjb25zdCB3ZWVrZGF5QWN0dWFsID0gbmV3IERhdGUocGFyc2VkSW5wdXRbMF0sIHBhcnNlZElucHV0WzFdLCBwYXJzZWRJbnB1dFsyXSkuZ2V0RGF5KCk7XG4gICAgaWYgKHdlZWtkYXlQcm92aWRlZCAhPT0gd2Vla2RheUFjdHVhbCkge1xuICAgICAgZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZykud2Vla2RheU1pc21hdGNoID0gdHJ1ZTtcbiAgICAgIGNvbmZpZy5faXNWYWxpZCA9IGZhbHNlO1xuXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZU9mZnNldChvYnNPZmZzZXQ6IHN0cmluZywgbWlsaXRhcnlPZmZzZXQ6IHN0cmluZywgbnVtT2Zmc2V0OiBzdHJpbmcpIHtcbiAgaWYgKG9ic09mZnNldCkge1xuICAgIHJldHVybiBvYnNPZmZzZXRzW29ic09mZnNldF07XG4gIH0gZWxzZSBpZiAobWlsaXRhcnlPZmZzZXQpIHtcbiAgICAvLyB0aGUgb25seSBhbGxvd2VkIG1pbGl0YXJ5IHR6IGlzIFpcbiAgICByZXR1cm4gMDtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBobSA9IHBhcnNlSW50KG51bU9mZnNldCwgMTApO1xuICAgIGNvbnN0IG0gPSBobSAlIDEwMDtcbiAgICBjb25zdCBoID0gKGhtIC0gbSkgLyAxMDA7XG5cbiAgICByZXR1cm4gaCAqIDYwICsgbTtcbiAgfVxufVxuXG4vLyBkYXRlIGFuZCB0aW1lIGZyb20gcmVmIDI4MjIgZm9ybWF0XG5leHBvcnQgZnVuY3Rpb24gY29uZmlnRnJvbVJGQzI4MjIoY29uZmlnOiBEYXRlUGFyc2luZ0NvbmZpZyk6IERhdGVQYXJzaW5nQ29uZmlnIHtcbiAgaWYgKCFpc1N0cmluZyhjb25maWcuX2kpKSB7XG4gICAgcmV0dXJuIGNvbmZpZztcbiAgfVxuXG4gIGNvbnN0IG1hdGNoID0gcmZjMjgyMi5leGVjKHByZXByb2Nlc3NSRkMyODIyKGNvbmZpZy5faSkpO1xuXG4gIGlmICghbWF0Y2gpIHtcbiAgICByZXR1cm4gbWFya0ludmFsaWQoY29uZmlnKTtcbiAgfVxuXG4gIGNvbnN0IHBhcnNlZEFycmF5ID0gZXh0cmFjdEZyb21SRkMyODIyU3RyaW5ncyhtYXRjaFs0XSwgbWF0Y2hbM10sIG1hdGNoWzJdLCBtYXRjaFs1XSwgbWF0Y2hbNl0sIG1hdGNoWzddKTtcbiAgaWYgKCFjaGVja1dlZWtkYXkobWF0Y2hbMV0sIHBhcnNlZEFycmF5LCBjb25maWcpKSB7XG4gICAgcmV0dXJuIGNvbmZpZztcbiAgfVxuXG4gIGNvbmZpZy5fYSA9IHBhcnNlZEFycmF5O1xuICBjb25maWcuX3R6bSA9IGNhbGN1bGF0ZU9mZnNldChtYXRjaFs4XSwgbWF0Y2hbOV0sIG1hdGNoWzEwXSk7XG5cbiAgY29uZmlnLl9kID0gY3JlYXRlVVRDRGF0ZS5hcHBseShudWxsLCBjb25maWcuX2EpO1xuICBjb25maWcuX2Quc2V0VVRDTWludXRlcyhjb25maWcuX2QuZ2V0VVRDTWludXRlcygpIC0gY29uZmlnLl90em0pO1xuXG4gIGdldFBhcnNpbmdGbGFncyhjb25maWcpLnJmYzI4MjIgPSB0cnVlO1xuXG4gIHJldHVybiBjb25maWc7XG59XG5cbi8vIGRhdGUgZnJvbSBpc28gZm9ybWF0IG9yIGZhbGxiYWNrXG5leHBvcnQgZnVuY3Rpb24gY29uZmlnRnJvbVN0cmluZyhjb25maWc6IERhdGVQYXJzaW5nQ29uZmlnKTogRGF0ZVBhcnNpbmdDb25maWcge1xuICBpZiAoIWlzU3RyaW5nKGNvbmZpZy5faSkpIHtcbiAgICByZXR1cm4gY29uZmlnO1xuICB9XG5cbiAgY29uc3QgbWF0Y2hlZCA9IGFzcE5ldEpzb25SZWdleC5leGVjKGNvbmZpZy5faSk7XG5cbiAgaWYgKG1hdGNoZWQgIT09IG51bGwpIHtcbiAgICBjb25maWcuX2QgPSBuZXcgRGF0ZSgrbWF0Y2hlZFsxXSk7XG5cbiAgICByZXR1cm4gY29uZmlnO1xuICB9XG5cbiAgLy8gdG9kbzogdXBkYXRlIGxvZ2ljIHByb2Nlc3NpbmdcbiAgLy8gaXNJU08gLT4gY29uZmlnRnJvbUlTT1xuICAvLyBpc1JGQyAtPiBjb25maWdGcm9tUkZDXG5cbiAgY29uZmlnRnJvbUlTTyhjb25maWcpO1xuICBpZiAoY29uZmlnLl9pc1ZhbGlkID09PSBmYWxzZSkge1xuICAgIGRlbGV0ZSBjb25maWcuX2lzVmFsaWQ7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGNvbmZpZztcbiAgfVxuXG4gIGNvbmZpZ0Zyb21SRkMyODIyKGNvbmZpZyk7XG4gIGlmIChjb25maWcuX2lzVmFsaWQgPT09IGZhbHNlKSB7XG4gICAgZGVsZXRlIGNvbmZpZy5faXNWYWxpZDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gY29uZmlnO1xuICB9XG5cbiAgLy8gRmluYWwgYXR0ZW1wdCwgdXNlIElucHV0IEZhbGxiYWNrXG4gIC8vIGhvb2tzLmNyZWF0ZUZyb21JbnB1dEZhbGxiYWNrKGNvbmZpZyk7XG4gIHJldHVybiBjcmVhdGVJbnZhbGlkKGNvbmZpZyk7XG59XG5cbi8vIGhvb2tzLmNyZWF0ZUZyb21JbnB1dEZhbGxiYWNrID0gZGVwcmVjYXRlKFxuLy8gICAgICd2YWx1ZSBwcm92aWRlZCBpcyBub3QgaW4gYSByZWNvZ25pemVkIFJGQzI4MjIgb3IgSVNPIGZvcm1hdC4gbW9tZW50IGNvbnN0cnVjdGlvbiBmYWxscyBiYWNrIHRvIGpzIERhdGUoKSwgJyArXG4vLyAgICAgJ3doaWNoIGlzIG5vdCByZWxpYWJsZSBhY3Jvc3MgYWxsIGJyb3dzZXJzIGFuZCB2ZXJzaW9ucy4gTm9uIFJGQzI4MjIvSVNPIGRhdGUgZm9ybWF0cyBhcmUgJyArXG4vLyAgICAgJ2Rpc2NvdXJhZ2VkIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gYW4gdXBjb21pbmcgbWFqb3IgcmVsZWFzZS4gUGxlYXNlIHJlZmVyIHRvICcgK1xuLy8gICAgICdodHRwOi8vbW9tZW50anMuY29tL2d1aWRlcy8jL3dhcm5pbmdzL2pzLWRhdGUvIGZvciBtb3JlIGluZm8uJyxcbi8vICAgICBmdW5jdGlvbiAoY29uZmlnKSB7XG4vLyAgICAgICAgIGNvbmZpZy5fZCA9IG5ldyBEYXRlKGNvbmZpZy5faSArIChjb25maWcuX3VzZVVUQyA/ICcgVVRDJyA6ICcnKSk7XG4vLyAgICAgfVxuLy8gKTtcbiIsIi8vIG1vbWVudC5qc1xuLy8gdmVyc2lvbiA6IDIuMTguMVxuLy8gYXV0aG9ycyA6IFRpbSBXb29kLCBJc2tyZW4gQ2hlcm5ldiwgTW9tZW50LmpzIGNvbnRyaWJ1dG9yc1xuLy8gbGljZW5zZSA6IE1JVFxuLy8gbW9tZW50anMuY29tXG5cbmltcG9ydCAnLi91bml0cy9pbmRleCc7XG5pbXBvcnQgeyBmb3JtYXRGdW5jdGlvbnMsIG1ha2VGb3JtYXRGdW5jdGlvbiB9IGZyb20gJy4vZm9ybWF0L2Zvcm1hdCc7XG5pbXBvcnQgeyBMb2NhbGUgfSBmcm9tICcuL2xvY2FsZS9sb2NhbGUuY2xhc3MnO1xuaW1wb3J0IHsgZ2V0TG9jYWxlIH0gZnJvbSAnLi9sb2NhbGUvbG9jYWxlcyc7XG5pbXBvcnQgeyBpc0RhdGVWYWxpZCB9IGZyb20gJy4vdXRpbHMvdHlwZS1jaGVja3MnO1xuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0RGF0ZShkYXRlOiBEYXRlLCBmb3JtYXQ6IHN0cmluZywgbG9jYWxlPzogc3RyaW5nLCBpc1VUQz86IGJvb2xlYW4sIG9mZnNldCA9IDApOiBzdHJpbmcge1xuICBjb25zdCBfbG9jYWxlID0gZ2V0TG9jYWxlKGxvY2FsZSB8fCAnZW4nKTtcbiAgaWYgKCFfbG9jYWxlKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgYExvY2FsZSBcIiR7bG9jYWxlfVwiIGlzIG5vdCBkZWZpbmVkLCBwbGVhc2UgYWRkIGl0IHdpdGggXCJkZWZpbmVMb2NhbGUoLi4uKVwiYFxuICAgICk7XG4gIH1cblxuICBjb25zdCBfZm9ybWF0ID0gZm9ybWF0IHx8IChpc1VUQyA/ICAnWVlZWS1NTS1ERFRISDptbTpzc1taXScgOiAnWVlZWS1NTS1ERFRISDptbTpzc1onKTtcblxuICBjb25zdCBvdXRwdXQgPSBmb3JtYXRNb21lbnQoZGF0ZSwgX2Zvcm1hdCwgX2xvY2FsZSwgaXNVVEMsIG9mZnNldCk7XG5cbiAgaWYgKCFvdXRwdXQpIHtcbiAgICByZXR1cm4gb3V0cHV0O1xuICB9XG5cbiAgcmV0dXJuIF9sb2NhbGUucG9zdGZvcm1hdChvdXRwdXQpO1xufVxuXG4vLyBmb3JtYXQgZGF0ZSB1c2luZyBuYXRpdmUgZGF0ZSBvYmplY3RcbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRNb21lbnQoZGF0ZTogRGF0ZSwgX2Zvcm1hdDogc3RyaW5nLCBsb2NhbGU6IExvY2FsZSwgaXNVVEM/OiBib29sZWFuLCBvZmZzZXQgPSAwKTogc3RyaW5nIHtcbiAgaWYgKCFpc0RhdGVWYWxpZChkYXRlKSkge1xuICAgIHJldHVybiBsb2NhbGUuaW52YWxpZERhdGU7XG4gIH1cblxuICBjb25zdCBmb3JtYXQgPSBleHBhbmRGb3JtYXQoX2Zvcm1hdCwgbG9jYWxlKTtcbiAgZm9ybWF0RnVuY3Rpb25zW2Zvcm1hdF0gPSBmb3JtYXRGdW5jdGlvbnNbZm9ybWF0XSB8fCBtYWtlRm9ybWF0RnVuY3Rpb24oZm9ybWF0KTtcblxuICByZXR1cm4gZm9ybWF0RnVuY3Rpb25zW2Zvcm1hdF0oZGF0ZSwgbG9jYWxlLCBpc1VUQywgb2Zmc2V0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV4cGFuZEZvcm1hdChfZm9ybWF0OiBzdHJpbmcsIGxvY2FsZTogTG9jYWxlKTogc3RyaW5nIHtcbiAgbGV0IGZvcm1hdCA9IF9mb3JtYXQ7XG4gIGxldCBpID0gNTtcbiAgY29uc3QgbG9jYWxGb3JtYXR0aW5nVG9rZW5zID0gLyhcXFtbXlxcW10qXFxdKXwoXFxcXCk/KExUU3xMVHxMTD9MP0w/fGx7MSw0fSkvZztcblxuICBjb25zdCByZXBsYWNlTG9uZ0RhdGVGb3JtYXRUb2tlbnMgPSAoaW5wdXQ6IGFueSkgPT4ge1xuICAgIHJldHVybiBsb2NhbGUuZm9ybWF0TG9uZ0RhdGUoaW5wdXQpIHx8IGlucHV0O1xuICB9O1xuXG4gIGxvY2FsRm9ybWF0dGluZ1Rva2Vucy5sYXN0SW5kZXggPSAwO1xuICB3aGlsZSAoaSA+PSAwICYmIGxvY2FsRm9ybWF0dGluZ1Rva2Vucy50ZXN0KGZvcm1hdCkpIHtcbiAgICBmb3JtYXQgPSBmb3JtYXQucmVwbGFjZShsb2NhbEZvcm1hdHRpbmdUb2tlbnMsIHJlcGxhY2VMb25nRGF0ZUZvcm1hdFRva2Vucyk7XG4gICAgbG9jYWxGb3JtYXR0aW5nVG9rZW5zLmxhc3RJbmRleCA9IDA7XG4gICAgaSAtPSAxO1xuICB9XG5cbiAgcmV0dXJuIGZvcm1hdDtcbn1cbiIsIi8vIFBpY2sgdGhlIGZpcnN0IGRlZmluZWQgb2YgdHdvIG9yIHRocmVlIGFyZ3VtZW50cy5cbmV4cG9ydCBmdW5jdGlvbiBkZWZhdWx0czxUPihhPzogVCwgYj86IFQsIGM/OiBUKTogVCB7XG4gIGlmIChhICE9IG51bGwpIHtcbiAgICByZXR1cm4gYTtcbiAgfVxuICBpZiAoYiAhPSBudWxsKSB7XG4gICAgcmV0dXJuIGI7XG4gIH1cblxuICByZXR1cm4gYztcbn1cbiIsImltcG9ydCB7IERhdGVQYXJzaW5nQ29uZmlnIH0gZnJvbSAnLi9wYXJzaW5nLnR5cGVzJztcbmltcG9ydCB7IERhdGVBcnJheSB9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7IERBVEUsIEhPVVIsIE1JTExJU0VDT05ELCBNSU5VVEUsIE1PTlRILCBTRUNPTkQsIFlFQVIgfSBmcm9tICcuLi91bml0cy9jb25zdGFudHMnO1xuaW1wb3J0IHsgZGF5c0luWWVhciB9IGZyb20gJy4uL3VuaXRzL3llYXInO1xuaW1wb3J0IHsgZ2V0UGFyc2luZ0ZsYWdzIH0gZnJvbSAnLi9wYXJzaW5nLWZsYWdzJztcbmltcG9ydCB7IGNyZWF0ZVVUQ0RhdGUgfSBmcm9tICcuL2RhdGUtZnJvbS1hcnJheSc7XG5pbXBvcnQgeyBjcmVhdGVEYXRlIH0gZnJvbSAnLi9kYXRlLWZyb20tYXJyYXknO1xuaW1wb3J0IHsgZGF5T2ZZZWFyRnJvbVdlZWtzLCB3ZWVrT2ZZZWFyLCB3ZWVrc0luWWVhciB9IGZyb20gJy4uL3VuaXRzL3dlZWstY2FsZW5kYXItdXRpbHMnO1xuaW1wb3J0IHsgZGVmYXVsdHMgfSBmcm9tICcuLi91dGlscy9kZWZhdWx0cyc7XG5cbmZ1bmN0aW9uIGN1cnJlbnREYXRlQXJyYXkoY29uZmlnOiBEYXRlUGFyc2luZ0NvbmZpZyk6IERhdGVBcnJheSB7XG4gIGNvbnN0IG5vd1ZhbHVlID0gbmV3IERhdGUoKTtcblxuICBpZiAoY29uZmlnLl91c2VVVEMpIHtcbiAgICByZXR1cm4gW25vd1ZhbHVlLmdldFVUQ0Z1bGxZZWFyKCksIG5vd1ZhbHVlLmdldFVUQ01vbnRoKCksIG5vd1ZhbHVlLmdldFVUQ0RhdGUoKV07XG4gIH1cblxuICByZXR1cm4gW25vd1ZhbHVlLmdldEZ1bGxZZWFyKCksIG5vd1ZhbHVlLmdldE1vbnRoKCksIG5vd1ZhbHVlLmdldERhdGUoKV07XG59XG5cbi8vIGNvbnZlcnQgYW4gYXJyYXkgdG8gYSBkYXRlLlxuLy8gdGhlIGFycmF5IHNob3VsZCBtaXJyb3IgdGhlIHBhcmFtZXRlcnMgYmVsb3dcbi8vIG5vdGU6IGFsbCB2YWx1ZXMgcGFzdCB0aGUgeWVhciBhcmUgb3B0aW9uYWwgYW5kIHdpbGwgZGVmYXVsdCB0byB0aGUgbG93ZXN0IHBvc3NpYmxlIHZhbHVlLlxuLy8gW3llYXIsIG1vbnRoLCBkYXkgLCBob3VyLCBtaW51dGUsIHNlY29uZCwgbWlsbGlzZWNvbmRdXG5leHBvcnQgZnVuY3Rpb24gY29uZmlnRnJvbUFycmF5KGNvbmZpZzogRGF0ZVBhcnNpbmdDb25maWcpOiBEYXRlUGFyc2luZ0NvbmZpZyB7XG4gIGNvbnN0IGlucHV0ID0gW107XG4gIGxldCBpO1xuICBsZXQgZGF0ZTtcbiAgbGV0IGN1cnJlbnREYXRlO1xuICBsZXQgZXhwZWN0ZWRXZWVrZGF5O1xuICBsZXQgeWVhclRvVXNlO1xuXG4gIGlmIChjb25maWcuX2QpIHtcbiAgICByZXR1cm4gY29uZmlnO1xuICB9XG5cbiAgY3VycmVudERhdGUgPSBjdXJyZW50RGF0ZUFycmF5KGNvbmZpZyk7XG5cbiAgLy8gY29tcHV0ZSBkYXkgb2YgdGhlIHllYXIgZnJvbSB3ZWVrcyBhbmQgd2Vla2RheXNcbiAgaWYgKGNvbmZpZy5fdyAmJiBjb25maWcuX2FbREFURV0gPT0gbnVsbCAmJiBjb25maWcuX2FbTU9OVEhdID09IG51bGwpIHtcbiAgICBkYXlPZlllYXJGcm9tV2Vla0luZm8oY29uZmlnKTtcbiAgfVxuXG4gIC8vIGlmIHRoZSBkYXkgb2YgdGhlIHllYXIgaXMgc2V0LCBmaWd1cmUgb3V0IHdoYXQgaXQgaXNcbiAgaWYgKGNvbmZpZy5fZGF5T2ZZZWFyICE9IG51bGwpIHtcbiAgICB5ZWFyVG9Vc2UgPSBkZWZhdWx0cyhjb25maWcuX2FbWUVBUl0sIGN1cnJlbnREYXRlW1lFQVJdKTtcblxuICAgIGlmIChjb25maWcuX2RheU9mWWVhciA+IGRheXNJblllYXIoeWVhclRvVXNlKSB8fCBjb25maWcuX2RheU9mWWVhciA9PT0gMCkge1xuICAgICAgZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZykuX292ZXJmbG93RGF5T2ZZZWFyID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBkYXRlID0gbmV3IERhdGUoRGF0ZS5VVEMoeWVhclRvVXNlLCAwLCBjb25maWcuX2RheU9mWWVhcikpO1xuICAgIGNvbmZpZy5fYVtNT05USF0gPSBkYXRlLmdldFVUQ01vbnRoKCk7XG4gICAgY29uZmlnLl9hW0RBVEVdID0gZGF0ZS5nZXRVVENEYXRlKCk7XG4gIH1cblxuICAvLyBEZWZhdWx0IHRvIGN1cnJlbnQgZGF0ZS5cbiAgLy8gKiBpZiBubyB5ZWFyLCBtb250aCwgZGF5IG9mIG1vbnRoIGFyZSBnaXZlbiwgZGVmYXVsdCB0byB0b2RheVxuICAvLyAqIGlmIGRheSBvZiBtb250aCBpcyBnaXZlbiwgZGVmYXVsdCBtb250aCBhbmQgeWVhclxuICAvLyAqIGlmIG1vbnRoIGlzIGdpdmVuLCBkZWZhdWx0IG9ubHkgeWVhclxuICAvLyAqIGlmIHllYXIgaXMgZ2l2ZW4sIGRvbid0IGRlZmF1bHQgYW55dGhpbmdcbiAgZm9yIChpID0gMDsgaSA8IDMgJiYgY29uZmlnLl9hW2ldID09IG51bGw7ICsraSkge1xuICAgIGNvbmZpZy5fYVtpXSA9IGlucHV0W2ldID0gY3VycmVudERhdGVbaV07XG4gIH1cblxuICAvLyBaZXJvIG91dCB3aGF0ZXZlciB3YXMgbm90IGRlZmF1bHRlZCwgaW5jbHVkaW5nIHRpbWVcbiAgZm9yICg7IGkgPCA3OyBpKyspIHtcbiAgICBjb25maWcuX2FbaV0gPSBpbnB1dFtpXSA9IChjb25maWcuX2FbaV0gPT0gbnVsbCkgPyAoaSA9PT0gMiA/IDEgOiAwKSA6IGNvbmZpZy5fYVtpXTtcbiAgfVxuXG4gIC8vIENoZWNrIGZvciAyNDowMDowMC4wMDBcbiAgaWYgKGNvbmZpZy5fYVtIT1VSXSA9PT0gMjQgJiZcbiAgICBjb25maWcuX2FbTUlOVVRFXSA9PT0gMCAmJlxuICAgIGNvbmZpZy5fYVtTRUNPTkRdID09PSAwICYmXG4gICAgY29uZmlnLl9hW01JTExJU0VDT05EXSA9PT0gMCkge1xuICAgIGNvbmZpZy5fbmV4dERheSA9IHRydWU7XG4gICAgY29uZmlnLl9hW0hPVVJdID0gMDtcbiAgfVxuXG4gIGNvbmZpZy5fZCA9IChjb25maWcuX3VzZVVUQyA/IGNyZWF0ZVVUQ0RhdGUgOiBjcmVhdGVEYXRlKS5hcHBseShudWxsLCBpbnB1dCk7XG4gIGV4cGVjdGVkV2Vla2RheSA9IGNvbmZpZy5fdXNlVVRDID8gY29uZmlnLl9kLmdldFVUQ0RheSgpIDogY29uZmlnLl9kLmdldERheSgpO1xuXG4gIC8vIEFwcGx5IHRpbWV6b25lIG9mZnNldCBmcm9tIGlucHV0LiBUaGUgYWN0dWFsIHV0Y09mZnNldCBjYW4gYmUgY2hhbmdlZFxuICAvLyB3aXRoIHBhcnNlWm9uZS5cbiAgaWYgKGNvbmZpZy5fdHptICE9IG51bGwpIHtcbiAgICBjb25maWcuX2Quc2V0VVRDTWludXRlcyhjb25maWcuX2QuZ2V0VVRDTWludXRlcygpIC0gY29uZmlnLl90em0pO1xuICB9XG5cbiAgaWYgKGNvbmZpZy5fbmV4dERheSkge1xuICAgIGNvbmZpZy5fYVtIT1VSXSA9IDI0O1xuICB9XG5cbiAgLy8gY2hlY2sgZm9yIG1pc21hdGNoaW5nIGRheSBvZiB3ZWVrXG4gIGlmIChjb25maWcuX3cgJiYgdHlwZW9mIGNvbmZpZy5fdy5kICE9PSAndW5kZWZpbmVkJyAmJiBjb25maWcuX3cuZCAhPT0gZXhwZWN0ZWRXZWVrZGF5KSB7XG4gICAgZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZykud2Vla2RheU1pc21hdGNoID0gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBjb25maWc7XG59XG5cbmZ1bmN0aW9uIGRheU9mWWVhckZyb21XZWVrSW5mbyhjb25maWc6IERhdGVQYXJzaW5nQ29uZmlnKTogRGF0ZVBhcnNpbmdDb25maWcge1xuICBsZXQgdywgd2Vla1llYXIsIHdlZWssIHdlZWtkYXksIGRvdywgZG95LCB0ZW1wLCB3ZWVrZGF5T3ZlcmZsb3c7XG5cbiAgdyA9IGNvbmZpZy5fdztcbiAgaWYgKHcuR0cgIT0gbnVsbCB8fCB3LlcgIT0gbnVsbCB8fCB3LkUgIT0gbnVsbCkge1xuICAgIGRvdyA9IDE7XG4gICAgZG95ID0gNDtcblxuICAgIC8vIFRPRE86IFdlIG5lZWQgdG8gdGFrZSB0aGUgY3VycmVudCBpc29XZWVrWWVhciwgYnV0IHRoYXQgZGVwZW5kcyBvblxuICAgIC8vIGhvdyB3ZSBpbnRlcnByZXQgbm93IChsb2NhbCwgdXRjLCBmaXhlZCBvZmZzZXQpLiBTbyBjcmVhdGVcbiAgICAvLyBhIG5vdyB2ZXJzaW9uIG9mIGN1cnJlbnQgY29uZmlnICh0YWtlIGxvY2FsL3V0Yy9vZmZzZXQgZmxhZ3MsIGFuZFxuICAgIC8vIGNyZWF0ZSBub3cpLlxuICAgIHdlZWtZZWFyID0gZGVmYXVsdHMody5HRywgY29uZmlnLl9hW1lFQVJdLCB3ZWVrT2ZZZWFyKG5ldyBEYXRlKCksIDEsIDQpLnllYXIpO1xuICAgIHdlZWsgPSBkZWZhdWx0cyh3LlcsIDEpO1xuICAgIHdlZWtkYXkgPSBkZWZhdWx0cyh3LkUsIDEpO1xuICAgIGlmICh3ZWVrZGF5IDwgMSB8fCB3ZWVrZGF5ID4gNykge1xuICAgICAgd2Vla2RheU92ZXJmbG93ID0gdHJ1ZTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgZG93ID0gY29uZmlnLl9sb2NhbGUuX3dlZWsuZG93O1xuICAgIGRveSA9IGNvbmZpZy5fbG9jYWxlLl93ZWVrLmRveTtcblxuICAgIGNvbnN0IGN1cldlZWsgPSB3ZWVrT2ZZZWFyKG5ldyBEYXRlKCksIGRvdywgZG95KTtcblxuICAgIHdlZWtZZWFyID0gZGVmYXVsdHMody5nZywgY29uZmlnLl9hW1lFQVJdLCBjdXJXZWVrLnllYXIpO1xuXG4gICAgLy8gRGVmYXVsdCB0byBjdXJyZW50IHdlZWsuXG4gICAgd2VlayA9IGRlZmF1bHRzKHcudywgY3VyV2Vlay53ZWVrKTtcblxuICAgIGlmICh3LmQgIT0gbnVsbCkge1xuICAgICAgLy8gd2Vla2RheSAtLSBsb3cgZGF5IG51bWJlcnMgYXJlIGNvbnNpZGVyZWQgbmV4dCB3ZWVrXG4gICAgICB3ZWVrZGF5ID0gdy5kO1xuICAgICAgaWYgKHdlZWtkYXkgPCAwIHx8IHdlZWtkYXkgPiA2KSB7XG4gICAgICAgIHdlZWtkYXlPdmVyZmxvdyA9IHRydWU7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh3LmUgIT0gbnVsbCkge1xuICAgICAgLy8gbG9jYWwgd2Vla2RheSAtLSBjb3VudGluZyBzdGFydHMgZnJvbSBiZWdpbmluZyBvZiB3ZWVrXG4gICAgICB3ZWVrZGF5ID0gdy5lICsgZG93O1xuICAgICAgaWYgKHcuZSA8IDAgfHwgdy5lID4gNikge1xuICAgICAgICB3ZWVrZGF5T3ZlcmZsb3cgPSB0cnVlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBkZWZhdWx0IHRvIGJlZ2luaW5nIG9mIHdlZWtcbiAgICAgIHdlZWtkYXkgPSBkb3c7XG4gICAgfVxuICB9XG4gIGlmICh3ZWVrIDwgMSB8fCB3ZWVrID4gd2Vla3NJblllYXIod2Vla1llYXIsIGRvdywgZG95KSkge1xuICAgIGdldFBhcnNpbmdGbGFncyhjb25maWcpLl9vdmVyZmxvd1dlZWtzID0gdHJ1ZTtcbiAgfSBlbHNlIGlmICh3ZWVrZGF5T3ZlcmZsb3cgIT0gbnVsbCkge1xuICAgIGdldFBhcnNpbmdGbGFncyhjb25maWcpLl9vdmVyZmxvd1dlZWtkYXkgPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIHRlbXAgPSBkYXlPZlllYXJGcm9tV2Vla3Mod2Vla1llYXIsIHdlZWssIHdlZWtkYXksIGRvdywgZG95KTtcbiAgICBjb25maWcuX2FbWUVBUl0gPSB0ZW1wLnllYXI7XG4gICAgY29uZmlnLl9kYXlPZlllYXIgPSB0ZW1wLmRheU9mWWVhcjtcbiAgfVxuXG4gIHJldHVybiBjb25maWc7XG59XG4iLCJpbXBvcnQgeyBnZXRQYXJzaW5nRmxhZ3MgfSBmcm9tICcuL3BhcnNpbmctZmxhZ3MnO1xuaW1wb3J0IHsgREFURSwgSE9VUiwgTUlMTElTRUNPTkQsIE1JTlVURSwgTU9OVEgsIFNFQ09ORCwgV0VFSywgV0VFS0RBWSwgWUVBUiB9IGZyb20gJy4uL3VuaXRzL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBkYXlzSW5Nb250aCB9IGZyb20gJy4uL3VuaXRzL21vbnRoJztcbmltcG9ydCB7IERhdGVQYXJzaW5nQ29uZmlnIH0gZnJvbSAnLi9wYXJzaW5nLnR5cGVzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrT3ZlcmZsb3coY29uZmlnOiBEYXRlUGFyc2luZ0NvbmZpZyk6IERhdGVQYXJzaW5nQ29uZmlnIHtcbiAgbGV0IG92ZXJmbG93O1xuICBjb25zdCBhID0gY29uZmlnLl9hO1xuXG4gIGlmIChhICYmIGdldFBhcnNpbmdGbGFncyhjb25maWcpLm92ZXJmbG93ID09PSAtMikge1xuICAgIC8vIHRvZG86IGZpeCB0aGlzIHNoKnRcbiAgICBvdmVyZmxvdyA9XG4gICAgICBhW01PTlRIXSA8IDAgfHwgYVtNT05USF0gPiAxMSA/IE1PTlRIIDpcbiAgICAgICAgYVtEQVRFXSA8IDEgfHwgYVtEQVRFXSA+IGRheXNJbk1vbnRoKGFbWUVBUl0sIGFbTU9OVEhdKSA/IERBVEUgOlxuICAgICAgICAgIGFbSE9VUl0gPCAwIHx8IGFbSE9VUl0gPiAyNCB8fCAoYVtIT1VSXSA9PT0gMjQgJiYgKGFbTUlOVVRFXSAhPT0gMCB8fCBhW1NFQ09ORF0gIT09IDAgfHwgYVtNSUxMSVNFQ09ORF0gIT09IDApKSA/IEhPVVIgOlxuICAgICAgICAgICAgYVtNSU5VVEVdIDwgMCB8fCBhW01JTlVURV0gPiA1OSA/IE1JTlVURSA6XG4gICAgICAgICAgICAgIGFbU0VDT05EXSA8IDAgfHwgYVtTRUNPTkRdID4gNTkgPyBTRUNPTkQgOlxuICAgICAgICAgICAgICAgIGFbTUlMTElTRUNPTkRdIDwgMCB8fCBhW01JTExJU0VDT05EXSA+IDk5OSA/IE1JTExJU0VDT05EIDpcbiAgICAgICAgICAgICAgICAgIC0xO1xuXG4gICAgaWYgKGdldFBhcnNpbmdGbGFncyhjb25maWcpLl9vdmVyZmxvd0RheU9mWWVhciAmJiAob3ZlcmZsb3cgPCBZRUFSIHx8IG92ZXJmbG93ID4gREFURSkpIHtcbiAgICAgIG92ZXJmbG93ID0gREFURTtcbiAgICB9XG4gICAgaWYgKGdldFBhcnNpbmdGbGFncyhjb25maWcpLl9vdmVyZmxvd1dlZWtzICYmIG92ZXJmbG93ID09PSAtMSkge1xuICAgICAgb3ZlcmZsb3cgPSBXRUVLO1xuICAgIH1cbiAgICBpZiAoZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZykuX292ZXJmbG93V2Vla2RheSAmJiBvdmVyZmxvdyA9PT0gLTEpIHtcbiAgICAgIG92ZXJmbG93ID0gV0VFS0RBWTtcbiAgICB9XG5cbiAgICBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS5vdmVyZmxvdyA9IG92ZXJmbG93O1xuICB9XG5cbiAgcmV0dXJuIGNvbmZpZztcbn1cblxuIiwiaW1wb3J0IHsgRGF0ZVBhcnNpbmdDb25maWcgfSBmcm9tICcuL3BhcnNpbmcudHlwZXMnO1xuaW1wb3J0IHsgY29uZmlnRnJvbUlTTywgY29uZmlnRnJvbVJGQzI4MjIgfSBmcm9tICcuL2Zyb20tc3RyaW5nJztcbmltcG9ydCB7IGV4cGFuZEZvcm1hdCB9IGZyb20gJy4uL2Zvcm1hdCc7XG5pbXBvcnQgeyBmb3JtYXR0aW5nVG9rZW5zLCBmb3JtYXRUb2tlbkZ1bmN0aW9ucyB9IGZyb20gJy4uL2Zvcm1hdC9mb3JtYXQnO1xuaW1wb3J0IHsgaXNBcnJheSwgaXNTdHJpbmcgfSBmcm9tICcuLi91dGlscy90eXBlLWNoZWNrcyc7XG5pbXBvcnQgeyBnZXRQYXJzZVJlZ2V4Rm9yVG9rZW4gfSBmcm9tICcuLi9wYXJzZS9yZWdleCc7XG5pbXBvcnQgeyBhZGRUaW1lVG9BcnJheUZyb21Ub2tlbiB9IGZyb20gJy4uL3BhcnNlL3Rva2VuJztcbmltcG9ydCB7IEhPVVIgfSBmcm9tICcuLi91bml0cy9jb25zdGFudHMnO1xuaW1wb3J0IHsgY29uZmlnRnJvbUFycmF5IH0gZnJvbSAnLi9mcm9tLWFycmF5JztcbmltcG9ydCB7IGdldFBhcnNpbmdGbGFncyB9IGZyb20gJy4vcGFyc2luZy1mbGFncyc7XG5pbXBvcnQgeyBjaGVja092ZXJmbG93IH0gZnJvbSAnLi9jaGVjay1vdmVyZmxvdyc7XG5pbXBvcnQgeyBMb2NhbGUgfSBmcm9tICcuLi9sb2NhbGUvbG9jYWxlLmNsYXNzJztcblxuLy8gY29uc3RhbnQgdGhhdCByZWZlcnMgdG8gdGhlIElTTyBzdGFuZGFyZFxuLy8gaG9va3MuSVNPXzg2MDEgPSBmdW5jdGlvbiAoKSB7fTtcbmV4cG9ydCBjb25zdCBJU09fODYwMSA9ICdJU09fODYwMSc7XG5cbi8vIGNvbnN0YW50IHRoYXQgcmVmZXJzIHRvIHRoZSBSRkMgMjgyMiBmb3JtXG4vLyBob29rcy5SRkNfMjgyMiA9IGZ1bmN0aW9uICgpIHt9O1xuZXhwb3J0IGNvbnN0IFJGQ18yODIyID0gJ1JGQ18yODIyJztcblxuLy8gZGF0ZSBmcm9tIHN0cmluZyBhbmQgZm9ybWF0IHN0cmluZ1xuZXhwb3J0IGZ1bmN0aW9uIGNvbmZpZ0Zyb21TdHJpbmdBbmRGb3JtYXQoY29uZmlnOiBEYXRlUGFyc2luZ0NvbmZpZyk6IERhdGVQYXJzaW5nQ29uZmlnIHtcbiAgLy8gVE9ETzogTW92ZSB0aGlzIHRvIGFub3RoZXIgcGFydCBvZiB0aGUgY3JlYXRpb24gZmxvdyB0byBwcmV2ZW50IGNpcmN1bGFyIGRlcHNcbiAgaWYgKGNvbmZpZy5fZiA9PT0gSVNPXzg2MDEpIHtcbiAgICByZXR1cm4gY29uZmlnRnJvbUlTTyhjb25maWcpO1xuICB9XG4gIGlmIChjb25maWcuX2YgPT09IFJGQ18yODIyKSB7XG4gICAgcmV0dXJuIGNvbmZpZ0Zyb21SRkMyODIyKGNvbmZpZyk7XG4gIH1cbiAgY29uZmlnLl9hID0gW107XG4gIGdldFBhcnNpbmdGbGFncyhjb25maWcpLmVtcHR5ID0gdHJ1ZTtcblxuICBpZiAoaXNBcnJheShjb25maWcuX2YpIHx8ICghY29uZmlnLl9pICYmIGNvbmZpZy5faSAhPT0gMCkpIHtcbiAgICByZXR1cm4gY29uZmlnO1xuICB9XG5cbiAgLy8gVGhpcyBhcnJheSBpcyB1c2VkIHRvIG1ha2UgYSBEYXRlLCBlaXRoZXIgd2l0aCBgbmV3IERhdGVgIG9yIGBEYXRlLlVUQ2BcblxuICBsZXQgaW5wdXQgPSBjb25maWcuX2kudG9TdHJpbmcoKTtcbiAgbGV0IHRvdGFsUGFyc2VkSW5wdXRMZW5ndGggPSAwO1xuICBjb25zdCBpbnB1dExlbmd0aCA9IGlucHV0Lmxlbmd0aDtcbiAgY29uc3QgdG9rZW5zID0gZXhwYW5kRm9ybWF0KGNvbmZpZy5fZiwgY29uZmlnLl9sb2NhbGUpLm1hdGNoKGZvcm1hdHRpbmdUb2tlbnMpIHx8IFtdO1xuXG4gIGxldCBpO1xuICBsZXQgdG9rZW47XG4gIGxldCBwYXJzZWRJbnB1dDtcbiAgbGV0IHNraXBwZWQ7XG4gIGZvciAoaSA9IDA7IGkgPCB0b2tlbnMubGVuZ3RoOyBpKyspIHtcbiAgICB0b2tlbiA9IHRva2Vuc1tpXTtcbiAgICBwYXJzZWRJbnB1dCA9IChpbnB1dC5tYXRjaChnZXRQYXJzZVJlZ2V4Rm9yVG9rZW4odG9rZW4sIGNvbmZpZy5fbG9jYWxlKSkgfHwgW10pWzBdO1xuICAgIGlmIChwYXJzZWRJbnB1dCkge1xuICAgICAgc2tpcHBlZCA9IGlucHV0LnN1YnN0cigwLCBpbnB1dC5pbmRleE9mKHBhcnNlZElucHV0KSk7XG4gICAgICBpZiAoc2tpcHBlZC5sZW5ndGggPiAwKSB7XG4gICAgICAgIGdldFBhcnNpbmdGbGFncyhjb25maWcpLnVudXNlZElucHV0LnB1c2goc2tpcHBlZCk7XG4gICAgICB9XG4gICAgICBpbnB1dCA9IGlucHV0LnNsaWNlKGlucHV0LmluZGV4T2YocGFyc2VkSW5wdXQpICsgcGFyc2VkSW5wdXQubGVuZ3RoKTtcbiAgICAgIHRvdGFsUGFyc2VkSW5wdXRMZW5ndGggKz0gcGFyc2VkSW5wdXQubGVuZ3RoO1xuICAgIH1cbiAgICAvLyBkb24ndCBwYXJzZSBpZiBpdCdzIG5vdCBhIGtub3duIHRva2VuXG4gICAgaWYgKGZvcm1hdFRva2VuRnVuY3Rpb25zW3Rva2VuXSkge1xuICAgICAgaWYgKHBhcnNlZElucHV0KSB7XG4gICAgICAgIGdldFBhcnNpbmdGbGFncyhjb25maWcpLmVtcHR5ID0gZmFsc2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS51bnVzZWRUb2tlbnMucHVzaCh0b2tlbik7XG4gICAgICB9XG5cbiAgICAgIGFkZFRpbWVUb0FycmF5RnJvbVRva2VuKHRva2VuLCBwYXJzZWRJbnB1dCwgY29uZmlnKTtcbiAgICB9IGVsc2UgaWYgKGNvbmZpZy5fc3RyaWN0ICYmICFwYXJzZWRJbnB1dCkge1xuICAgICAgZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZykudW51c2VkVG9rZW5zLnB1c2godG9rZW4pO1xuICAgIH1cbiAgfVxuXG4gIC8vIGFkZCByZW1haW5pbmcgdW5wYXJzZWQgaW5wdXQgbGVuZ3RoIHRvIHRoZSBzdHJpbmdcbiAgZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZykuY2hhcnNMZWZ0T3ZlciA9IGlucHV0TGVuZ3RoIC0gdG90YWxQYXJzZWRJbnB1dExlbmd0aDtcbiAgaWYgKGlucHV0Lmxlbmd0aCA+IDApIHtcbiAgICBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS51bnVzZWRJbnB1dC5wdXNoKGlucHV0KTtcbiAgfVxuXG4gIC8vIGNsZWFyIF8xMmggZmxhZyBpZiBob3VyIGlzIDw9IDEyXG4gIGlmIChjb25maWcuX2FbSE9VUl0gPD0gMTIgJiZcbiAgICBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS5iaWdIb3VyID09PSB0cnVlICYmXG4gICAgY29uZmlnLl9hW0hPVVJdID4gMCkge1xuICAgIGdldFBhcnNpbmdGbGFncyhjb25maWcpLmJpZ0hvdXIgPSB2b2lkIDA7XG4gIH1cblxuICBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS5wYXJzZWREYXRlUGFydHMgPSBjb25maWcuX2Euc2xpY2UoMCk7XG4gIGdldFBhcnNpbmdGbGFncyhjb25maWcpLm1lcmlkaWVtID0gY29uZmlnLl9tZXJpZGllbTtcbiAgLy8gaGFuZGxlIG1lcmlkaWVtXG4gIGNvbmZpZy5fYVtIT1VSXSA9IG1lcmlkaWVtRml4V3JhcChjb25maWcuX2xvY2FsZSwgY29uZmlnLl9hW0hPVVJdLCBjb25maWcuX21lcmlkaWVtKTtcblxuICBjb25maWdGcm9tQXJyYXkoY29uZmlnKTtcblxuICByZXR1cm4gY2hlY2tPdmVyZmxvdyhjb25maWcpO1xufVxuXG5cbmZ1bmN0aW9uIG1lcmlkaWVtRml4V3JhcChsb2NhbGU6IExvY2FsZSwgX2hvdXI6IG51bWJlciwgbWVyaWRpZW06IHN0cmluZyk6IG51bWJlciB7XG4gIGxldCBob3VyID0gX2hvdXI7XG5cbiAgaWYgKG1lcmlkaWVtID09IG51bGwpIHtcbiAgICAvLyBub3RoaW5nIHRvIGRvXG4gICAgcmV0dXJuIGhvdXI7XG4gIH1cblxuICBpZiAobG9jYWxlLm1lcmlkaWVtSG91ciAhPSBudWxsKSB7XG4gICAgcmV0dXJuIGxvY2FsZS5tZXJpZGllbUhvdXIoaG91ciwgbWVyaWRpZW0pO1xuICB9XG5cbiAgaWYgKGxvY2FsZS5pc1BNID09IG51bGwpIHtcbiAgICAvLyB0aGlzIGlzIG5vdCBzdXBwb3NlZCB0byBoYXBwZW5cbiAgICByZXR1cm4gaG91cjtcbiAgfVxuICAvLyBGYWxsYmFja1xuICBjb25zdCBpc1BtID0gbG9jYWxlLmlzUE0obWVyaWRpZW0pO1xuICBpZiAoaXNQbSAmJiBob3VyIDwgMTIpIHtcbiAgICBob3VyICs9IDEyO1xuICB9XG5cbiAgaWYgKCFpc1BtICYmIGhvdXIgPT09IDEyKSB7XG4gICAgaG91ciA9IDA7XG4gIH1cblxuICByZXR1cm4gaG91cjtcbn1cbiIsImltcG9ydCB7IERhdGVQYXJzaW5nQ29uZmlnIH0gZnJvbSAnLi9wYXJzaW5nLnR5cGVzJztcbmltcG9ydCB7IGNyZWF0ZUludmFsaWQsIGlzVmFsaWQgfSBmcm9tICcuL3ZhbGlkJztcbmltcG9ydCB7IGdldFBhcnNpbmdGbGFncyB9IGZyb20gJy4vcGFyc2luZy1mbGFncyc7XG5pbXBvcnQgeyBjb25maWdGcm9tU3RyaW5nQW5kRm9ybWF0IH0gZnJvbSAnLi9mcm9tLXN0cmluZy1hbmQtZm9ybWF0JztcblxuLy8gZGF0ZSBmcm9tIHN0cmluZyBhbmQgYXJyYXkgb2YgZm9ybWF0IHN0cmluZ3NcbmV4cG9ydCBmdW5jdGlvbiBjb25maWdGcm9tU3RyaW5nQW5kQXJyYXkoY29uZmlnOiBEYXRlUGFyc2luZ0NvbmZpZyk6IERhdGVQYXJzaW5nQ29uZmlnIHtcbiAgbGV0IHRlbXBDb25maWc7XG4gIGxldCBiZXN0TW9tZW50O1xuICBsZXQgc2NvcmVUb0JlYXQ7XG4gIGxldCBjdXJyZW50U2NvcmU7XG5cbiAgaWYgKCFjb25maWcuX2YgfHwgY29uZmlnLl9mLmxlbmd0aCA9PT0gMCkge1xuICAgIGdldFBhcnNpbmdGbGFncyhjb25maWcpLmludmFsaWRGb3JtYXQgPSB0cnVlO1xuXG4gICAgcmV0dXJuIGNyZWF0ZUludmFsaWQoY29uZmlnKTtcbiAgfVxuXG4gIGxldCBpO1xuICBmb3IgKGkgPSAwOyBpIDwgY29uZmlnLl9mLmxlbmd0aDsgaSsrKSB7XG4gICAgY3VycmVudFNjb3JlID0gMDtcbiAgICB0ZW1wQ29uZmlnID0gT2JqZWN0LmFzc2lnbih7fSwgY29uZmlnKTtcbiAgICBpZiAoY29uZmlnLl91c2VVVEMgIT0gbnVsbCkge1xuICAgICAgdGVtcENvbmZpZy5fdXNlVVRDID0gY29uZmlnLl91c2VVVEM7XG4gICAgfVxuICAgIHRlbXBDb25maWcuX2YgPSBjb25maWcuX2ZbaV07XG4gICAgY29uZmlnRnJvbVN0cmluZ0FuZEZvcm1hdCh0ZW1wQ29uZmlnKTtcblxuICAgIGlmICghaXNWYWxpZCh0ZW1wQ29uZmlnKSkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgLy8gaWYgdGhlcmUgaXMgYW55IGlucHV0IHRoYXQgd2FzIG5vdCBwYXJzZWQgYWRkIGEgcGVuYWx0eSBmb3IgdGhhdCBmb3JtYXRcbiAgICBjdXJyZW50U2NvcmUgKz0gZ2V0UGFyc2luZ0ZsYWdzKHRlbXBDb25maWcpLmNoYXJzTGVmdE92ZXI7XG5cbiAgICAvLyBvciB0b2tlbnNcbiAgICBjdXJyZW50U2NvcmUgKz0gZ2V0UGFyc2luZ0ZsYWdzKHRlbXBDb25maWcpLnVudXNlZFRva2Vucy5sZW5ndGggKiAxMDtcblxuICAgIGdldFBhcnNpbmdGbGFncyh0ZW1wQ29uZmlnKS5zY29yZSA9IGN1cnJlbnRTY29yZTtcblxuICAgIGlmIChzY29yZVRvQmVhdCA9PSBudWxsIHx8IGN1cnJlbnRTY29yZSA8IHNjb3JlVG9CZWF0KSB7XG4gICAgICBzY29yZVRvQmVhdCA9IGN1cnJlbnRTY29yZTtcbiAgICAgIGJlc3RNb21lbnQgPSB0ZW1wQ29uZmlnO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBPYmplY3QuYXNzaWduKGNvbmZpZywgYmVzdE1vbWVudCB8fCB0ZW1wQ29uZmlnKTtcbn1cbiIsImltcG9ydCB7IG5vcm1hbGl6ZU9iamVjdFVuaXRzIH0gZnJvbSAnLi4vdW5pdHMvYWxpYXNlcyc7XG5pbXBvcnQgeyBjb25maWdGcm9tQXJyYXkgfSBmcm9tICcuL2Zyb20tYXJyYXknO1xuaW1wb3J0IHsgRGF0ZVBhcnNpbmdDb25maWcgfSBmcm9tICcuL3BhcnNpbmcudHlwZXMnO1xuaW1wb3J0IHsgaXNPYmplY3QsIGlzU3RyaW5nIH0gZnJvbSAnLi4vdXRpbHMvdHlwZS1jaGVja3MnO1xuXG5leHBvcnQgZnVuY3Rpb24gY29uZmlnRnJvbU9iamVjdChjb25maWc6IERhdGVQYXJzaW5nQ29uZmlnKTogRGF0ZVBhcnNpbmdDb25maWcge1xuICBpZiAoY29uZmlnLl9kKSB7XG4gICAgcmV0dXJuIGNvbmZpZztcbiAgfVxuXG4gIGNvbnN0IGlucHV0ID0gY29uZmlnLl9pO1xuICBpZiAoaXNPYmplY3QoaW5wdXQpKSB7XG4gICAgY29uc3QgaSA9IG5vcm1hbGl6ZU9iamVjdFVuaXRzKGlucHV0IGFzIGFueSk7XG4gICAgY29uZmlnLl9hID0gW2kueWVhciwgaS5tb250aCwgaS5kYXksIGkuaG91cnMsIGkubWludXRlcywgaS5zZWNvbmRzLCBpLm1pbGxpc2Vjb25kc11cbiAgICAvLyB0b2RvOiBvYnNvbGV0ZSAtPiByZW1vdmUgaXRcbiAgICAgIC5tYXAob2JqID0+IGlzU3RyaW5nKG9iaikgPyBwYXJzZUludChvYmosIDEwKSA6IG9iaik7XG4gIH1cblxuICByZXR1cm4gY29uZmlnRnJvbUFycmF5KGNvbmZpZyk7XG59XG4iLCIvLyB0c2xpbnQ6ZGlzYWJsZTptYXgtbGluZS1sZW5ndGhcbmltcG9ydCB7IGlzQXJyYXksIGlzRGF0ZSwgaXNOdW1iZXIsIGlzT2JqZWN0LCBpc09iamVjdEVtcHR5LCBpc1N0cmluZywgaXNVbmRlZmluZWQgfSBmcm9tICcuLi91dGlscy90eXBlLWNoZWNrcyc7XG5pbXBvcnQgeyBEYXRlUGFyc2luZ0NvbmZpZyB9IGZyb20gJy4vcGFyc2luZy50eXBlcyc7XG5pbXBvcnQgeyBnZXRMb2NhbGUgfSBmcm9tICcuLi9sb2NhbGUvbG9jYWxlcyc7XG5pbXBvcnQgeyBjcmVhdGVJbnZhbGlkLCBpc1ZhbGlkIH0gZnJvbSAnLi92YWxpZCc7XG5pbXBvcnQgeyBjb25maWdGcm9tU3RyaW5nQW5kQXJyYXkgfSBmcm9tICcuL2Zyb20tc3RyaW5nLWFuZC1hcnJheSc7XG5pbXBvcnQgeyBjb25maWdGcm9tU3RyaW5nQW5kRm9ybWF0IH0gZnJvbSAnLi9mcm9tLXN0cmluZy1hbmQtZm9ybWF0JztcbmltcG9ydCB7IGNsb25lRGF0ZSB9IGZyb20gJy4vY2xvbmUnO1xuaW1wb3J0IHsgY29uZmlnRnJvbVN0cmluZyB9IGZyb20gJy4vZnJvbS1zdHJpbmcnO1xuaW1wb3J0IHsgY29uZmlnRnJvbUFycmF5IH0gZnJvbSAnLi9mcm9tLWFycmF5JztcbmltcG9ydCB7IGNvbmZpZ0Zyb21PYmplY3QgfSBmcm9tICcuL2Zyb20tb2JqZWN0JztcbmltcG9ydCB7IGNoZWNrT3ZlcmZsb3cgfSBmcm9tICcuL2NoZWNrLW92ZXJmbG93JztcbmltcG9ydCB7IERhdGVJbnB1dCB9IGZyb20gJy4uL3Rlc3QvY2hhaW4nO1xuXG5mdW5jdGlvbiBjcmVhdGVGcm9tQ29uZmlnKGNvbmZpZzogRGF0ZVBhcnNpbmdDb25maWcpOiBEYXRlUGFyc2luZ0NvbmZpZyB7XG4gIGNvbnN0IHJlcyA9IGNoZWNrT3ZlcmZsb3cocHJlcGFyZUNvbmZpZyhjb25maWcpKTtcbiAgLy8gdG9kbzogcmVtb3ZlLCBpbiBtb21lbnQuanMgaXQncyBuZXZlciBjYWxsZWQgY3V6IG9mIG1vbWVudCBjb25zdHJ1Y3RvclxuICByZXMuX2QgPSBuZXcgRGF0ZShyZXMuX2QgIT0gbnVsbCA/IHJlcy5fZC5nZXRUaW1lKCkgOiBOYU4pO1xuICBpZiAoIWlzVmFsaWQoT2JqZWN0LmFzc2lnbih7fSwgcmVzLCB7X2lzVmFsaWQ6IG51bGx9KSkpIHtcbiAgICByZXMuX2QgPSBuZXcgRGF0ZShOYU4pO1xuICB9XG4gIC8vIHRvZG86IHVwZGF0ZSBvZmZzZXRcbiAgLyppZiAocmVzLl9uZXh0RGF5KSB7XG4gICAgLy8gQWRkaW5nIGlzIHNtYXJ0IGVub3VnaCBhcm91bmQgRFNUXG4gICAgcmVzLl9kID0gYWRkKHJlcy5fZCwgMSwgJ2RheScpO1xuICAgIHJlcy5fbmV4dERheSA9IHVuZGVmaW5lZDtcbiAgfSovXG5cbiAgcmV0dXJuIHJlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByZXBhcmVDb25maWcoY29uZmlnOiBEYXRlUGFyc2luZ0NvbmZpZyk6IERhdGVQYXJzaW5nQ29uZmlnIHtcbiAgbGV0IGlucHV0ID0gY29uZmlnLl9pO1xuICBjb25zdCBmb3JtYXQgPSBjb25maWcuX2Y7XG5cbiAgY29uZmlnLl9sb2NhbGUgPSBjb25maWcuX2xvY2FsZSB8fCBnZXRMb2NhbGUoY29uZmlnLl9sKTtcblxuICBpZiAoaW5wdXQgPT09IG51bGwgfHwgKGZvcm1hdCA9PT0gdW5kZWZpbmVkICYmIGlucHV0ID09PSAnJykpIHtcbiAgICByZXR1cm4gY3JlYXRlSW52YWxpZChjb25maWcsIHsgbnVsbElucHV0OiB0cnVlIH0pO1xuICB9XG5cbiAgaWYgKGlzU3RyaW5nKGlucHV0KSkge1xuICAgIGNvbmZpZy5faSA9IGlucHV0ID0gY29uZmlnLl9sb2NhbGUucHJlcGFyc2UoaW5wdXQpO1xuICB9XG5cbiAgaWYgKGlzRGF0ZShpbnB1dCkpIHtcbiAgICBjb25maWcuX2QgPSBjbG9uZURhdGUoaW5wdXQpO1xuXG4gICAgcmV0dXJuIGNvbmZpZztcbiAgfVxuXG4gIC8vIHRvZG86IGFkZCBjaGVjayBmb3IgcmVjdXJzaW9uXG5cbiAgaWYgKGlzQXJyYXkoZm9ybWF0KSkge1xuICAgIGNvbmZpZ0Zyb21TdHJpbmdBbmRBcnJheShjb25maWcpO1xuICB9IGVsc2UgaWYgKGZvcm1hdCkge1xuICAgIGNvbmZpZ0Zyb21TdHJpbmdBbmRGb3JtYXQoY29uZmlnKTtcbiAgfSBlbHNlIHtcbiAgICBjb25maWdGcm9tSW5wdXQoY29uZmlnKTtcbiAgfVxuXG4gIGlmICghaXNWYWxpZChjb25maWcpKSB7XG4gICAgY29uZmlnLl9kID0gbnVsbDtcbiAgfVxuXG4gIHJldHVybiBjb25maWc7XG59XG5cbmZ1bmN0aW9uIGNvbmZpZ0Zyb21JbnB1dChjb25maWc6IERhdGVQYXJzaW5nQ29uZmlnKTogRGF0ZVBhcnNpbmdDb25maWcge1xuICBjb25zdCBpbnB1dCA9IGNvbmZpZy5faTtcbiAgaWYgKGlzVW5kZWZpbmVkKGlucHV0KSkge1xuICAgIGNvbmZpZy5fZCA9IG5ldyBEYXRlKCk7XG4gIH0gZWxzZSBpZiAoaXNEYXRlKGlucHV0KSkge1xuICAgIGNvbmZpZy5fZCA9IGNsb25lRGF0ZShpbnB1dCk7XG4gIH0gZWxzZSBpZiAoaXNTdHJpbmcoaW5wdXQpKSB7XG4gICAgY29uZmlnRnJvbVN0cmluZyhjb25maWcpO1xuICB9IGVsc2UgaWYgKGlzQXJyYXk8c3RyaW5nIHwgbnVtYmVyPihpbnB1dCkgJiYgaW5wdXQubGVuZ3RoKSB7XG4gICAgY29uc3QgX2FycjogKHN0cmluZyB8IG51bWJlcilbXSA9IGlucHV0LnNsaWNlKDApO1xuICAgIGNvbmZpZy5fYSA9IF9hcnIubWFwKG9iaiA9PiBpc1N0cmluZyhvYmopID8gcGFyc2VJbnQob2JqLCAxMCkgOiBvYmopO1xuICAgIGNvbmZpZ0Zyb21BcnJheShjb25maWcpO1xuICB9IGVsc2UgaWYgKGlzT2JqZWN0KGlucHV0KSkge1xuICAgIGNvbmZpZ0Zyb21PYmplY3QoY29uZmlnKTtcbiAgfSBlbHNlIGlmIChpc051bWJlcihpbnB1dCkpIHtcbiAgICAvLyBmcm9tIG1pbGxpc2Vjb25kc1xuICAgIGNvbmZpZy5fZCA9IG5ldyBEYXRlKGlucHV0KTtcbiAgfSBlbHNlIHtcbiAgICAvLyAgIGhvb2tzLmNyZWF0ZUZyb21JbnB1dEZhbGxiYWNrKGNvbmZpZyk7XG4gICAgcmV0dXJuIGNyZWF0ZUludmFsaWQoY29uZmlnKTtcbiAgfVxuXG4gIHJldHVybiBjb25maWc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVMb2NhbE9yVVRDKGlucHV0OiBEYXRlSW5wdXQsIGZvcm1hdD86IHN0cmluZyB8IHN0cmluZ1tdLCBsb2NhbGVLZXk/OiBzdHJpbmcsIHN0cmljdD86IGJvb2xlYW4sIGlzVVRDPzogYm9vbGVhbik6IERhdGVQYXJzaW5nQ29uZmlnIHtcbiAgY29uc3QgY29uZmlnOiBEYXRlUGFyc2luZ0NvbmZpZyA9IHt9O1xuICBsZXQgX2lucHV0ID0gaW5wdXQ7XG5cbiAgLy8gcGFyYW1zIHN3aXRjaCAtPiBza2lwOyB0ZXN0IGl0IHdlbGxcbiAgLy8gaWYgKGxvY2FsZUtleSA9PT0gdHJ1ZSB8fCBsb2NhbGVLZXkgPT09IGZhbHNlKSB7XG4gIC8vICAgICBzdHJpY3QgPSBsb2NhbGVLZXk7XG4gIC8vICAgICBsb2NhbGVLZXkgPSB1bmRlZmluZWQ7XG4gIC8vIH1cblxuICAvLyB0b2RvOiBmYWlsIGZhc3QgYW5kIHJldHVybiBub3QgdmFsaWQgZGF0ZVxuICBpZiAoKGlzT2JqZWN0KF9pbnB1dCkgJiYgaXNPYmplY3RFbXB0eShfaW5wdXQpKSB8fCAoaXNBcnJheShfaW5wdXQpICYmIF9pbnB1dC5sZW5ndGggPT09IDApKSB7XG4gICAgX2lucHV0ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIG9iamVjdCBjb25zdHJ1Y3Rpb24gbXVzdCBiZSBkb25lIHRoaXMgd2F5LlxuICAvLyBodHRwczovL2dpdGh1Yi5jb20vbW9tZW50L21vbWVudC9pc3N1ZXMvMTQyM1xuICAvLyBjb25maWcuX2lzQU1vbWVudE9iamVjdCA9IHRydWU7XG4gIGNvbmZpZy5fdXNlVVRDID0gY29uZmlnLl9pc1VUQyA9IGlzVVRDO1xuICBjb25maWcuX2wgPSBsb2NhbGVLZXk7XG4gIGNvbmZpZy5faSA9IF9pbnB1dDtcbiAgY29uZmlnLl9mID0gZm9ybWF0O1xuICBjb25maWcuX3N0cmljdCA9IHN0cmljdDtcblxuICByZXR1cm4gY3JlYXRlRnJvbUNvbmZpZyhjb25maWcpO1xufVxuIiwiaW1wb3J0IHsgY3JlYXRlTG9jYWxPclVUQyB9IGZyb20gJy4vZnJvbS1hbnl0aGluZyc7XG5pbXBvcnQgeyBEYXRlQXJyYXksIERhdGVPYmplY3QgfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBEYXRlSW5wdXQgfSBmcm9tICcuLi90ZXN0L2NoYWluJztcbmltcG9ydCB7IGlzRGF0ZSB9IGZyb20gJy4uL3V0aWxzL3R5cGUtY2hlY2tzJztcblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlRGF0ZShpbnB1dDogRGF0ZUlucHV0LCBmb3JtYXQ/OiBzdHJpbmcgfCBzdHJpbmdbXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxlS2V5Pzogc3RyaW5nLCBzdHJpY3Q/OiBib29sZWFuLCBpc1VUQz86IGJvb2xlYW4pOiBEYXRlIHtcbiAgaWYgKGlzRGF0ZShpbnB1dCkpIHtcbiAgICByZXR1cm4gaW5wdXQ7XG4gIH1cblxuICBjb25zdCBjb25maWcgPSBjcmVhdGVMb2NhbE9yVVRDKGlucHV0LCBmb3JtYXQsIGxvY2FsZUtleSwgc3RyaWN0LCBpc1VUQyk7XG5cbiAgcmV0dXJuIGNvbmZpZy5fZDtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBhYnNSb3VuZChudW06IG51bWJlcik6IG51bWJlciB7XG4gIHJldHVybiBudW0gPCAwID8gTWF0aC5yb3VuZChudW0gKiAtMSkgKiAtMSA6IE1hdGgucm91bmQobnVtKTtcbn1cbiIsImltcG9ydCB7IFVuaXRPZlRpbWUgfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBlbmRPZiwgc3RhcnRPZiB9IGZyb20gJy4vc3RhcnQtZW5kLW9mJztcblxuZXhwb3J0IGZ1bmN0aW9uIGlzQWZ0ZXIoXG4gIGRhdGUxOiBEYXRlLFxuICBkYXRlMjogRGF0ZSxcbiAgdW5pdHM6IFVuaXRPZlRpbWUgPSAnbWlsbGlzZWNvbmRzJ1xuKTogYm9vbGVhbiB7XG4gIGlmICghZGF0ZTEgfHwgIWRhdGUyKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKHVuaXRzID09PSAnbWlsbGlzZWNvbmRzJykge1xuICAgIHJldHVybiBkYXRlMS52YWx1ZU9mKCkgPiBkYXRlMi52YWx1ZU9mKCk7XG4gIH1cblxuICByZXR1cm4gZGF0ZTIudmFsdWVPZigpIDwgc3RhcnRPZihkYXRlMSwgdW5pdHMpLnZhbHVlT2YoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzQmVmb3JlKFxuICBkYXRlMTogRGF0ZSxcbiAgZGF0ZTI6IERhdGUsXG4gIHVuaXRzOiBVbml0T2ZUaW1lID0gJ21pbGxpc2Vjb25kcydcbik6IGJvb2xlYW4ge1xuICBpZiAoIWRhdGUxIHx8ICFkYXRlMikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmICh1bml0cyA9PT0gJ21pbGxpc2Vjb25kcycpIHtcbiAgICByZXR1cm4gZGF0ZTEudmFsdWVPZigpIDwgZGF0ZTIudmFsdWVPZigpO1xuICB9XG5cbiAgcmV0dXJuIGVuZE9mKGRhdGUxLCB1bml0cykudmFsdWVPZigpIDwgZGF0ZTIudmFsdWVPZigpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNEaXNhYmxlZERheShkYXRlOiBEYXRlLCBkYXlzRGlzYWJsZWQ6IG51bWJlcltdKTogYm9vbGVhbiB7XG4gIGlmIChkYXlzRGlzYWJsZWQgPT09IHVuZGVmaW5lZCB8fCAhZGF5c0Rpc2FibGVkIHx8ICFkYXlzRGlzYWJsZWQubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIGRheXNEaXNhYmxlZC5zb21lKChkYXk6IG51bWJlcikgPT4gZGF5ID09PSBkYXRlLmdldERheSgpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzQmV0d2VlbihcbiAgZGF0ZTogRGF0ZSxcbiAgZnJvbTogRGF0ZSxcbiAgdG86IERhdGUsXG4gIHVuaXRzOiBVbml0T2ZUaW1lLFxuICBpbmNsdXNpdml0eSA9ICcoKSdcbik6IGJvb2xlYW4ge1xuICBjb25zdCBsZWZ0Qm91bmQgPVxuICAgIGluY2x1c2l2aXR5WzBdID09PSAnKCdcbiAgICAgID8gaXNBZnRlcihkYXRlLCBmcm9tLCB1bml0cylcbiAgICAgIDogIWlzQmVmb3JlKGRhdGUsIGZyb20sIHVuaXRzKTtcbiAgY29uc3QgcmlnaHRCb3VuZCA9XG4gICAgaW5jbHVzaXZpdHlbMV0gPT09ICcpJ1xuICAgICAgPyBpc0JlZm9yZShkYXRlLCB0bywgdW5pdHMpXG4gICAgICA6ICFpc0FmdGVyKGRhdGUsIHRvLCB1bml0cyk7XG5cbiAgcmV0dXJuIGxlZnRCb3VuZCAmJiByaWdodEJvdW5kO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNTYW1lKFxuICBkYXRlMTogRGF0ZSxcbiAgZGF0ZTI6IERhdGUsXG4gIHVuaXRzOiBVbml0T2ZUaW1lID0gJ21pbGxpc2Vjb25kcydcbik6IGJvb2xlYW4ge1xuICBpZiAoIWRhdGUxIHx8ICFkYXRlMikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmICh1bml0cyA9PT0gJ21pbGxpc2Vjb25kcycpIHtcbiAgICByZXR1cm4gZGF0ZTEudmFsdWVPZigpID09PSBkYXRlMi52YWx1ZU9mKCk7XG4gIH1cblxuICBjb25zdCBpbnB1dE1zID0gZGF0ZTIudmFsdWVPZigpO1xuXG4gIHJldHVybiAoXG4gICAgc3RhcnRPZihkYXRlMSwgdW5pdHMpLnZhbHVlT2YoKSA8PSBpbnB1dE1zICYmXG4gICAgaW5wdXRNcyA8PSBlbmRPZihkYXRlMSwgdW5pdHMpLnZhbHVlT2YoKVxuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNTYW1lRGF5KGRhdGUxOiBEYXRlLCBkYXRlMjogRGF0ZSk6Ym9vbGVhbntcbiAgcmV0dXJuIChkYXRlMS5nZXREYXkoKSA9PSBkYXRlMi5nZXREYXkoKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1NhbWVPckFmdGVyKFxuICBkYXRlMTogRGF0ZSxcbiAgZGF0ZTI6IERhdGUsXG4gIHVuaXRzPzogVW5pdE9mVGltZVxuKTogYm9vbGVhbiB7XG4gIHJldHVybiBpc1NhbWUoZGF0ZTEsIGRhdGUyLCB1bml0cykgfHwgaXNBZnRlcihkYXRlMSwgZGF0ZTIsIHVuaXRzKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzU2FtZU9yQmVmb3JlKFxuICBkYXRlMTogRGF0ZSxcbiAgZGF0ZTI6IERhdGUsXG4gIHVuaXRzPzogVW5pdE9mVGltZVxuKTogYm9vbGVhbiB7XG4gIHJldHVybiBpc1NhbWUoZGF0ZTEsIGRhdGUyLCB1bml0cykgfHwgaXNCZWZvcmUoZGF0ZTEsIGRhdGUyLCB1bml0cyk7XG59XG4iLCIvLyBBU1AuTkVUIGpzb24gZGF0ZSBmb3JtYXQgcmVnZXhcbmltcG9ydCB7IER1cmF0aW9uLCBpc0R1cmF0aW9uIH0gZnJvbSAnLi9jb25zdHJ1Y3Rvcic7XG5pbXBvcnQgeyBpc0RhdGVWYWxpZCwgaXNOdW1iZXIsIGlzT2JqZWN0LCBpc1N0cmluZywgdG9JbnQgfSBmcm9tICcuLi91dGlscy90eXBlLWNoZWNrcyc7XG5pbXBvcnQgeyBEQVRFLCBIT1VSLCBNSUxMSVNFQ09ORCwgTUlOVVRFLCBTRUNPTkQgfSBmcm9tICcuLi91bml0cy9jb25zdGFudHMnO1xuaW1wb3J0IHsgcGFyc2VEYXRlIH0gZnJvbSAnLi4vY3JlYXRlL2xvY2FsJztcbmltcG9ydCB7IGFic1JvdW5kIH0gZnJvbSAnLi4vdXRpbHMvYWJzLXJvdW5kJztcbmltcG9ydCB7IERhdGVPYmplY3QgfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBEYXRlUGFyc2luZ0NvbmZpZyB9IGZyb20gJy4uL2NyZWF0ZS9wYXJzaW5nLnR5cGVzJztcbmltcG9ydCB7IGNsb25lV2l0aE9mZnNldCB9IGZyb20gJy4uL3VuaXRzL29mZnNldCc7XG5pbXBvcnQgeyBpc0FmdGVyLCBpc0JlZm9yZSB9IGZyb20gJy4uL3V0aWxzL2RhdGUtY29tcGFyZSc7XG5pbXBvcnQgeyBnZXRGdWxsWWVhciwgZ2V0TW9udGggfSBmcm9tICcuLi91dGlscy9kYXRlLWdldHRlcnMnO1xuaW1wb3J0IHsgYWRkIH0gZnJvbSAnLi4vbW9tZW50L2FkZC1zdWJ0cmFjdCc7XG5pbXBvcnQgeyBjbG9uZURhdGUgfSBmcm9tICcuLi9jcmVhdGUvY2xvbmUnO1xuXG5jb25zdCBhc3BOZXRSZWdleCA9IC9eKFxcLXxcXCspPyg/OihcXGQqKVsuIF0pPyhcXGQrKVxcOihcXGQrKSg/OlxcOihcXGQrKShcXC5cXGQqKT8pPyQvO1xuXG4vLyBmcm9tIGh0dHA6Ly9kb2NzLmNsb3N1cmUtbGlicmFyeS5nb29nbGVjb2RlLmNvbS9naXQvY2xvc3VyZV9nb29nX2RhdGVfZGF0ZS5qcy5zb3VyY2UuaHRtbFxuLy8gc29tZXdoYXQgbW9yZSBpbiBsaW5lIHdpdGggNC40LjMuMiAyMDA0IHNwZWMsIGJ1dCBhbGxvd3MgZGVjaW1hbCBhbnl3aGVyZVxuLy8gYW5kIGZ1cnRoZXIgbW9kaWZpZWQgdG8gYWxsb3cgZm9yIHN0cmluZ3MgY29udGFpbmluZyBib3RoIHdlZWsgYW5kIGRheVxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG5jb25zdCBpc29SZWdleCA9IC9eKC18XFwrKT9QKD86KFstK10/WzAtOSwuXSopWSk/KD86KFstK10/WzAtOSwuXSopTSk/KD86KFstK10/WzAtOSwuXSopVyk/KD86KFstK10/WzAtOSwuXSopRCk/KD86VCg/OihbLStdP1swLTksLl0qKUgpPyg/OihbLStdP1swLTksLl0qKU0pPyg/OihbLStdP1swLTksLl0qKVMpPyk/JC87XG5cbmV4cG9ydCB0eXBlIER1cmF0aW9uSW5wdXQgPSBzdHJpbmcgfCBudW1iZXIgfCBEdXJhdGlvbiB8IFBhcnRpYWw8RGF0ZU9iamVjdD4gfCB7IGZyb206IERhdGU7IHRvOiBEYXRlIH07XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVEdXJhdGlvbihpbnB1dD86IER1cmF0aW9uSW5wdXQsIGtleT86IHN0cmluZywgY29uZmlnOiBEYXRlUGFyc2luZ0NvbmZpZyA9IHt9KSB7XG4gIGNvbnN0IGR1cmF0aW9uID0gY29udmVydER1cmF0aW9uKGlucHV0LCBrZXkpO1xuICAvLyBtYXRjaGluZyBhZ2FpbnN0IHJlZ2V4cCBpcyBleHBlbnNpdmUsIGRvIGl0IG9uIGRlbWFuZFxuXG4gIHJldHVybiBuZXcgRHVyYXRpb24oZHVyYXRpb24sIGNvbmZpZyk7XG59XG5cbmZ1bmN0aW9uIGNvbnZlcnREdXJhdGlvbihpbnB1dDogYW55LCBrZXk6IHN0cmluZyk6IFBhcnRpYWw8RGF0ZU9iamVjdD4ge1xuICAvLyBjaGVja3MgZm9yIG51bGwgb3IgdW5kZWZpbmVkXG4gIGlmIChpbnB1dCA9PSBudWxsKSB7XG4gICAgcmV0dXJuIHt9O1xuICB9XG5cbiAgaWYgKGlzRHVyYXRpb24oaW5wdXQpKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG1pbGxpc2Vjb25kczogaW5wdXQuX21pbGxpc2Vjb25kcyxcbiAgICAgIGRheTogaW5wdXQuX2RheXMsXG4gICAgICBtb250aDogaW5wdXQuX21vbnRoc1xuICAgIH07XG4gIH1cbiAgaWYgKGlzTnVtYmVyKGlucHV0KSkge1xuICAgIC8vIGR1cmF0aW9uID0ge307XG4gICAgcmV0dXJuIGtleSA/IHsgW2tleV06IGlucHV0IH0gOiB7IG1pbGxpc2Vjb25kczogaW5wdXQgfTtcbiAgfVxuXG4gIGlmIChpc1N0cmluZyhpbnB1dCkpIHtcbiAgICBsZXQgbWF0Y2ggPSBhc3BOZXRSZWdleC5leGVjKGlucHV0KTtcblxuICAgIGlmIChtYXRjaCkge1xuICAgICAgY29uc3Qgc2lnbiA9IChtYXRjaFsxXSA9PT0gJy0nKSA/IC0xIDogMTtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgeWVhcjogMCxcbiAgICAgICAgZGF5OiB0b0ludChtYXRjaFtEQVRFXSkgKiBzaWduLFxuICAgICAgICBob3VyczogdG9JbnQobWF0Y2hbSE9VUl0pICogc2lnbixcbiAgICAgICAgbWludXRlczogdG9JbnQobWF0Y2hbTUlOVVRFXSkgKiBzaWduLFxuICAgICAgICBzZWNvbmRzOiB0b0ludChtYXRjaFtTRUNPTkRdKSAqIHNpZ24sXG4gICAgICAgIC8vIHRoZSBtaWxsaXNlY29uZCBkZWNpbWFsIHBvaW50IGlzIGluY2x1ZGVkIGluIHRoZSBtYXRjaFxuICAgICAgICBtaWxsaXNlY29uZHM6IHRvSW50KGFic1JvdW5kKHRvSW50KG1hdGNoW01JTExJU0VDT05EXSkgKiAxMDAwKSkgKiBzaWduXG4gICAgICB9O1xuICAgIH1cblxuICAgIG1hdGNoID0gaXNvUmVnZXguZXhlYyhpbnB1dCk7XG4gICAgaWYgKG1hdGNoKSB7XG4gICAgICBjb25zdCBzaWduID0gKG1hdGNoWzFdID09PSAnLScpID8gLTEgOiAobWF0Y2hbMV0gPT09ICcrJykgPyAxIDogMTtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgeWVhcjogcGFyc2VJc28obWF0Y2hbMl0sIHNpZ24pLFxuICAgICAgICBtb250aDogcGFyc2VJc28obWF0Y2hbM10sIHNpZ24pLFxuICAgICAgICB3ZWVrOiBwYXJzZUlzbyhtYXRjaFs0XSwgc2lnbiksXG4gICAgICAgIGRheTogcGFyc2VJc28obWF0Y2hbNV0sIHNpZ24pLFxuICAgICAgICBob3VyczogcGFyc2VJc28obWF0Y2hbNl0sIHNpZ24pLFxuICAgICAgICBtaW51dGVzOiBwYXJzZUlzbyhtYXRjaFs3XSwgc2lnbiksXG4gICAgICAgIHNlY29uZHM6IHBhcnNlSXNvKG1hdGNoWzhdLCBzaWduKVxuICAgICAgfTtcbiAgICB9XG5cbiAgfVxuXG4gIGlmIChpc09iamVjdDx7ZnJvbTogYW55OyB0bzogYW55fT4oaW5wdXQpICYmICgnZnJvbScgaW4gaW5wdXQgfHwgJ3RvJyBpbiBpbnB1dCkpIHtcbiAgICBjb25zdCBkaWZmUmVzID0gbW9tZW50c0RpZmZlcmVuY2UocGFyc2VEYXRlKGlucHV0LmZyb20pLCBwYXJzZURhdGUoaW5wdXQudG8pKTtcblxuICAgIHJldHVybiB7XG4gICAgICBtaWxsaXNlY29uZHM6IGRpZmZSZXMubWlsbGlzZWNvbmRzLFxuICAgICAgbW9udGg6IGRpZmZSZXMubW9udGhzXG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBpbnB1dDtcbn1cblxuLy8gY3JlYXRlRHVyYXRpb24uZm4gPSBEdXJhdGlvbi5wcm90b3R5cGU7XG4vLyBjcmVhdGVEdXJhdGlvbi5pbnZhbGlkID0gaW52YWxpZDtcblxuZnVuY3Rpb24gcGFyc2VJc28oaW5wOiBzdHJpbmcsIHNpZ246IG51bWJlcik6IG51bWJlciB7XG4gIC8vIFdlJ2Qgbm9ybWFsbHkgdXNlIH5+aW5wIGZvciB0aGlzLCBidXQgdW5mb3J0dW5hdGVseSBpdCBhbHNvXG4gIC8vIGNvbnZlcnRzIGZsb2F0cyB0byBpbnRzLlxuICAvLyBpbnAgbWF5IGJlIHVuZGVmaW5lZCwgc28gY2FyZWZ1bCBjYWxsaW5nIHJlcGxhY2Ugb24gaXQuXG4gIGNvbnN0IHJlcyA9IGlucCAmJiBwYXJzZUZsb2F0KGlucC5yZXBsYWNlKCcsJywgJy4nKSk7XG4gIC8vIGFwcGx5IHNpZ24gd2hpbGUgd2UncmUgYXQgaXRcblxuICByZXR1cm4gKGlzTmFOKHJlcykgPyAwIDogcmVzKSAqIHNpZ247XG59XG5cbmZ1bmN0aW9uIHBvc2l0aXZlTW9tZW50c0RpZmZlcmVuY2UoYmFzZTogRGF0ZSwgb3RoZXI6IERhdGUpOiB7IG1pbGxpc2Vjb25kczogbnVtYmVyOyBtb250aHM6IG51bWJlciB9IHtcbiAgY29uc3QgcmVzID0geyBtaWxsaXNlY29uZHM6IDAsIG1vbnRoczogMCB9O1xuXG4gIHJlcy5tb250aHMgPSBnZXRNb250aChvdGhlcikgLSBnZXRNb250aChiYXNlKSArXG4gICAgKGdldEZ1bGxZZWFyKG90aGVyKSAtIGdldEZ1bGxZZWFyKGJhc2UpKSAqIDEyO1xuICBjb25zdCBfYmFzZVBsdXMgPSBhZGQoY2xvbmVEYXRlKGJhc2UpLCByZXMubW9udGhzLCAnbW9udGgnKTtcbiAgaWYgKGlzQWZ0ZXIoX2Jhc2VQbHVzLCBvdGhlcikpIHtcbiAgICAtLXJlcy5tb250aHM7XG4gIH1cblxuICByZXMubWlsbGlzZWNvbmRzID0gK290aGVyIC0gKyhhZGQoY2xvbmVEYXRlKGJhc2UpLCByZXMubW9udGhzLCAnbW9udGgnKSk7XG5cbiAgcmV0dXJuIHJlcztcbn1cblxuZnVuY3Rpb24gbW9tZW50c0RpZmZlcmVuY2UoYmFzZTogRGF0ZSwgb3RoZXI6IERhdGUpOiB7IG1pbGxpc2Vjb25kczogbnVtYmVyOyBtb250aHM6IG51bWJlciB9IHtcbiAgaWYgKCEoaXNEYXRlVmFsaWQoYmFzZSkgJiYgaXNEYXRlVmFsaWQob3RoZXIpKSkge1xuICAgIHJldHVybiB7IG1pbGxpc2Vjb25kczogMCwgbW9udGhzOiAwIH07XG4gIH1cblxuICBsZXQgcmVzO1xuICBjb25zdCBfb3RoZXIgPSBjbG9uZVdpdGhPZmZzZXQob3RoZXIsIGJhc2UsIHtfb2Zmc2V0OiBiYXNlLmdldFRpbWV6b25lT2Zmc2V0KCl9KTtcbiAgaWYgKGlzQmVmb3JlKGJhc2UsIF9vdGhlcikpIHtcbiAgICByZXMgPSBwb3NpdGl2ZU1vbWVudHNEaWZmZXJlbmNlKGJhc2UsIF9vdGhlcik7XG4gIH0gZWxzZSB7XG4gICAgcmVzID0gcG9zaXRpdmVNb21lbnRzRGlmZmVyZW5jZShfb3RoZXIsIGJhc2UpO1xuICAgIHJlcy5taWxsaXNlY29uZHMgPSAtcmVzLm1pbGxpc2Vjb25kcztcbiAgICByZXMubW9udGhzID0gLXJlcy5tb250aHM7XG4gIH1cblxuICByZXR1cm4gcmVzO1xufVxuIiwiaW1wb3J0IHsgY3JlYXRlRHVyYXRpb24gfSBmcm9tICcuLi9kdXJhdGlvbi9jcmVhdGUnO1xuaW1wb3J0IHsgYWJzUm91bmQgfSBmcm9tICcuLi91dGlscy9hYnMtcm91bmQnO1xuaW1wb3J0IHsgRHVyYXRpb24gfSBmcm9tICcuLi9kdXJhdGlvbi9jb25zdHJ1Y3Rvcic7XG5pbXBvcnQgeyBnZXREYXRlLCBnZXRNb250aCwgZ2V0VGltZSB9IGZyb20gJy4uL3V0aWxzL2RhdGUtZ2V0dGVycyc7XG5pbXBvcnQgeyBzZXREYXRlLCBzZXRNb250aCwgc2V0VGltZSB9IGZyb20gJy4uL3V0aWxzL2RhdGUtc2V0dGVycyc7XG5pbXBvcnQgeyBjbG9uZURhdGUgfSBmcm9tICcuLi9jcmVhdGUvY2xvbmUnO1xuaW1wb3J0IHsgVW5pdE9mVGltZSB9IGZyb20gJy4uL3R5cGVzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGFkZChkYXRlOiBEYXRlLCB2YWw6IG51bWJlciwgcGVyaW9kOiBVbml0T2ZUaW1lLCBpc1VUQz86IGJvb2xlYW4pOiBEYXRlIHtcbiAgY29uc3QgZHVyID0gY3JlYXRlRHVyYXRpb24odmFsLCBwZXJpb2QpO1xuXG4gIHJldHVybiBhZGRTdWJ0cmFjdChkYXRlLCBkdXIsIDEsIGlzVVRDKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1YnRyYWN0KGRhdGU6IERhdGUsIHZhbDogbnVtYmVyLCBwZXJpb2Q6IFVuaXRPZlRpbWUsIGlzVVRDPzogYm9vbGVhbik6IERhdGUge1xuICBjb25zdCBkdXIgPSBjcmVhdGVEdXJhdGlvbih2YWwsIHBlcmlvZCk7XG5cbiAgcmV0dXJuIGFkZFN1YnRyYWN0KGRhdGUsIGR1ciwgLTEsIGlzVVRDKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFN1YnRyYWN0KGRhdGU6IERhdGUsIGR1cmF0aW9uOiBEdXJhdGlvbiwgaXNBZGRpbmc6IG51bWJlciwgaXNVVEM/OiBib29sZWFuKTogRGF0ZSB7XG4gIGNvbnN0IG1pbGxpc2Vjb25kcyA9IGR1cmF0aW9uLl9taWxsaXNlY29uZHM7XG4gIGNvbnN0IGRheXMgPSBhYnNSb3VuZChkdXJhdGlvbi5fZGF5cyk7XG4gIGNvbnN0IG1vbnRocyA9IGFic1JvdW5kKGR1cmF0aW9uLl9tb250aHMpO1xuXG4gIC8vIHRvZG86IGFkZCB0aW1lem9uZXMgc3VwcG9ydFxuICAvLyBjb25zdCBfdXBkYXRlT2Zmc2V0ID0gdXBkYXRlT2Zmc2V0ID09IG51bGwgPyB0cnVlIDogdXBkYXRlT2Zmc2V0O1xuXG4gIGlmIChtb250aHMpIHtcbiAgICBzZXRNb250aChkYXRlLCBnZXRNb250aChkYXRlLCBpc1VUQykgKyBtb250aHMgKiBpc0FkZGluZywgaXNVVEMpO1xuICB9XG4gIGlmIChkYXlzKSB7XG4gICAgc2V0RGF0ZShkYXRlLCBnZXREYXRlKGRhdGUsIGlzVVRDKSArIGRheXMgKiBpc0FkZGluZywgaXNVVEMpO1xuICB9XG4gIGlmIChtaWxsaXNlY29uZHMpIHtcbiAgICBzZXRUaW1lKGRhdGUsIGdldFRpbWUoZGF0ZSkgKyBtaWxsaXNlY29uZHMgKiBpc0FkZGluZyk7XG4gIH1cblxuICByZXR1cm4gY2xvbmVEYXRlKGRhdGUpO1xuICAvLyB0b2RvOiBhZGQgdGltZXpvbmVzIHN1cHBvcnRcbiAgLy8gaWYgKF91cGRhdGVPZmZzZXQpIHtcbiAgLy8gICBob29rcy51cGRhdGVPZmZzZXQoZGF0ZSwgZGF5cyB8fCBtb250aHMpO1xuICAvLyB9XG59XG4iLCJpbXBvcnQgeyBhZGRGb3JtYXRUb2tlbiB9IGZyb20gJy4uL2Zvcm1hdC9mb3JtYXQnO1xuaW1wb3J0IHsgTG9jYWxlIH0gZnJvbSAnLi4vbG9jYWxlL2xvY2FsZS5jbGFzcyc7XG5pbXBvcnQgeyBnZXREYXkgfSBmcm9tICcuLi91dGlscy9kYXRlLWdldHRlcnMnO1xuaW1wb3J0IHsgYWRkUmVnZXhUb2tlbiwgbWF0Y2gxdG8yIH0gZnJvbSAnLi4vcGFyc2UvcmVnZXgnO1xuaW1wb3J0IHsgYWRkVW5pdEFsaWFzIH0gZnJvbSAnLi9hbGlhc2VzJztcbmltcG9ydCB7IGFkZFVuaXRQcmlvcml0eSB9IGZyb20gJy4vcHJpb3JpdGllcyc7XG5pbXBvcnQgeyBhZGRXZWVrUGFyc2VUb2tlbiB9IGZyb20gJy4uL3BhcnNlL3Rva2VuJztcbmltcG9ydCB7IGdldFBhcnNpbmdGbGFncyB9IGZyb20gJy4uL2NyZWF0ZS9wYXJzaW5nLWZsYWdzJztcbmltcG9ydCB7IGlzTnVtYmVyLCBpc1N0cmluZywgdG9JbnQgfSBmcm9tICcuLi91dGlscy90eXBlLWNoZWNrcyc7XG5pbXBvcnQgeyBEYXRlRm9ybWF0dGVyT3B0aW9ucywgV2Vla1BhcnNpbmcgfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBEYXRlUGFyc2luZ0NvbmZpZyB9IGZyb20gJy4uL2NyZWF0ZS9wYXJzaW5nLnR5cGVzJztcbmltcG9ydCB7IGFkZCB9IGZyb20gJy4uL21vbWVudC9hZGQtc3VidHJhY3QnO1xuaW1wb3J0IHsgZ2V0TG9jYWxlIH0gZnJvbSAnLi4vbG9jYWxlL2xvY2FsZXMnO1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0RGF5T2ZXZWVrKCkge1xuLy8gRk9STUFUVElOR1xuXG4gIGFkZEZvcm1hdFRva2VuKCdkJywgbnVsbCwgJ2RvJyxcbiAgICBmdW5jdGlvbihkYXRlOiBEYXRlLCBvcHRzOiBEYXRlRm9ybWF0dGVyT3B0aW9ucyk6IHN0cmluZyB7XG4gICAgICByZXR1cm4gZ2V0RGF5KGRhdGUsIG9wdHMuaXNVVEMpXG4gICAgICAgIC50b1N0cmluZygxMCk7XG4gICAgfVxuICApO1xuXG4gIGFkZEZvcm1hdFRva2VuKCdkZCcsIG51bGwsIG51bGwsXG4gICAgZnVuY3Rpb24oZGF0ZTogRGF0ZSwgb3B0czogRGF0ZUZvcm1hdHRlck9wdGlvbnMpOiBzdHJpbmcge1xuICAgICAgcmV0dXJuIG9wdHMubG9jYWxlLndlZWtkYXlzTWluKGRhdGUsIG9wdHMuZm9ybWF0LCBvcHRzLmlzVVRDKTtcbiAgICB9XG4gICk7XG5cbiAgYWRkRm9ybWF0VG9rZW4oJ2RkZCcsIG51bGwsIG51bGwsXG4gICAgZnVuY3Rpb24oZGF0ZTogRGF0ZSwgb3B0czogRGF0ZUZvcm1hdHRlck9wdGlvbnMpOiBzdHJpbmcge1xuICAgICAgcmV0dXJuIG9wdHMubG9jYWxlLndlZWtkYXlzU2hvcnQoZGF0ZSwgb3B0cy5mb3JtYXQsIG9wdHMuaXNVVEMpO1xuICAgIH1cbiAgKTtcblxuICBhZGRGb3JtYXRUb2tlbignZGRkZCcsIG51bGwsIG51bGwsXG4gICAgZnVuY3Rpb24oZGF0ZTogRGF0ZSwgb3B0czogRGF0ZUZvcm1hdHRlck9wdGlvbnMpOiBzdHJpbmcge1xuICAgICAgcmV0dXJuIG9wdHMubG9jYWxlLndlZWtkYXlzKGRhdGUsIG9wdHMuZm9ybWF0LCBvcHRzLmlzVVRDKTtcbiAgICB9XG4gICk7XG5cbiAgYWRkRm9ybWF0VG9rZW4oJ2UnLCBudWxsLCBudWxsLFxuICAgIGZ1bmN0aW9uKGRhdGU6IERhdGUsIG9wdHM6IERhdGVGb3JtYXR0ZXJPcHRpb25zKTogc3RyaW5nIHtcbiAgICAgIHJldHVybiBnZXRMb2NhbGVEYXlPZldlZWsoZGF0ZSwgb3B0cy5sb2NhbGUsIG9wdHMuaXNVVEMpXG4gICAgICAgIC50b1N0cmluZygxMCk7XG4gICAgICAvLyByZXR1cm4gZ2V0RGF5KGRhdGUsIG9wdHMuaXNVVEMpLnRvU3RyaW5nKDEwKTtcbiAgICB9XG4gICk7XG4gIGFkZEZvcm1hdFRva2VuKCdFJywgbnVsbCwgbnVsbCxcbiAgICBmdW5jdGlvbihkYXRlOiBEYXRlLCBvcHRzOiBEYXRlRm9ybWF0dGVyT3B0aW9ucyk6IHN0cmluZyB7XG4gICAgICByZXR1cm4gZ2V0SVNPRGF5T2ZXZWVrKGRhdGUsIG9wdHMuaXNVVEMpXG4gICAgICAgIC50b1N0cmluZygxMCk7XG4gICAgfVxuICApO1xuXG4vLyBBTElBU0VTXG5cbiAgYWRkVW5pdEFsaWFzKCdkYXknLCAnZCcpO1xuICBhZGRVbml0QWxpYXMoJ3dlZWtkYXknLCAnZScpO1xuICBhZGRVbml0QWxpYXMoJ2lzb1dlZWtkYXknLCAnRScpO1xuXG4vLyBQUklPUklUWVxuICBhZGRVbml0UHJpb3JpdHkoJ2RheScsIDExKTtcbiAgYWRkVW5pdFByaW9yaXR5KCd3ZWVrZGF5JywgMTEpO1xuICBhZGRVbml0UHJpb3JpdHkoJ2lzb1dlZWtkYXknLCAxMSk7XG5cbi8vIFBBUlNJTkdcblxuICBhZGRSZWdleFRva2VuKCdkJywgbWF0Y2gxdG8yKTtcbiAgYWRkUmVnZXhUb2tlbignZScsIG1hdGNoMXRvMik7XG4gIGFkZFJlZ2V4VG9rZW4oJ0UnLCBtYXRjaDF0bzIpO1xuXG4gIGFkZFJlZ2V4VG9rZW4oJ2RkJywgZnVuY3Rpb24oaXNTdHJpY3Q6IGJvb2xlYW4sIGxvY2FsZTogTG9jYWxlKTogUmVnRXhwIHtcbiAgICByZXR1cm4gbG9jYWxlLndlZWtkYXlzTWluUmVnZXgoaXNTdHJpY3QpO1xuICB9KTtcblxuICBhZGRSZWdleFRva2VuKCdkZGQnLCBmdW5jdGlvbihpc1N0cmljdDogYm9vbGVhbiwgbG9jYWxlOiBMb2NhbGUpOiBSZWdFeHAge1xuICAgIHJldHVybiBsb2NhbGUud2Vla2RheXNTaG9ydFJlZ2V4KGlzU3RyaWN0KTtcbiAgfSk7XG4gIGFkZFJlZ2V4VG9rZW4oJ2RkZGQnLCBmdW5jdGlvbihpc1N0cmljdDogYm9vbGVhbiwgbG9jYWxlOiBMb2NhbGUpOiBSZWdFeHAge1xuICAgIHJldHVybiBsb2NhbGUud2Vla2RheXNSZWdleChpc1N0cmljdCk7XG4gIH0pO1xuXG4gIGFkZFdlZWtQYXJzZVRva2VuKFxuICAgIFsnZGQnLCAnZGRkJywgJ2RkZGQnXSxcbiAgICBmdW5jdGlvbihpbnB1dDogc3RyaW5nLCB3ZWVrOiBXZWVrUGFyc2luZywgY29uZmlnOiBEYXRlUGFyc2luZ0NvbmZpZywgdG9rZW4pIHtcbiAgICAgIGNvbnN0IHdlZWtkYXkgPSBjb25maWcuX2xvY2FsZS53ZWVrZGF5c1BhcnNlKGlucHV0LCB0b2tlbiwgY29uZmlnLl9zdHJpY3QpO1xuICAgICAgLy8gaWYgd2UgZGlkbid0IGdldCBhIHdlZWtkYXkgbmFtZSwgbWFyayB0aGUgZGF0ZSBhcyBpbnZhbGlkXG4gICAgICBpZiAod2Vla2RheSAhPSBudWxsKSB7XG4gICAgICAgIHdlZWsuZCA9IHdlZWtkYXk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS5pbnZhbGlkV2Vla2RheSA9ICEhaW5wdXQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb25maWc7XG4gICAgfVxuICApO1xuXG4gIGFkZFdlZWtQYXJzZVRva2VuKFxuICAgIFsnZCcsICdlJywgJ0UnXSxcbiAgICBmdW5jdGlvbihpbnB1dDogc3RyaW5nLCB3ZWVrOiBXZWVrUGFyc2luZywgY29uZmlnOiBEYXRlUGFyc2luZ0NvbmZpZywgdG9rZW46IHN0cmluZyk6IERhdGVQYXJzaW5nQ29uZmlnIHtcbiAgICAgIHdlZWtbdG9rZW5dID0gdG9JbnQoaW5wdXQpO1xuXG4gICAgICByZXR1cm4gY29uZmlnO1xuICAgIH1cbiAgKTtcbn1cblxuLy8gSEVMUEVSU1xuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VXZWVrZGF5KGlucHV0OiBzdHJpbmcgfCBudW1iZXIsIGxvY2FsZTogTG9jYWxlKTogbnVtYmVyIHtcbiAgaWYgKCFpc1N0cmluZyhpbnB1dCkpIHtcbiAgICByZXR1cm4gaW5wdXQ7XG4gIH1cblxuICBjb25zdCBfbnVtID0gcGFyc2VJbnQoaW5wdXQsIDEwKTtcbiAgaWYgKCFpc05hTihfbnVtKSkge1xuICAgIHJldHVybiBfbnVtO1xuICB9XG5cbiAgY29uc3QgX3dlZWtEYXkgPSBsb2NhbGUud2Vla2RheXNQYXJzZShpbnB1dCk7XG4gIGlmIChpc051bWJlcihfd2Vla0RheSkpIHtcbiAgICByZXR1cm4gX3dlZWtEYXk7XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlSXNvV2Vla2RheShpbnB1dDogc3RyaW5nIHwgbnVtYmVyLCBsb2NhbGU6IExvY2FsZSA9IGdldExvY2FsZSgpKTogbnVtYmVyIHtcbiAgaWYgKGlzU3RyaW5nKGlucHV0KSkge1xuICAgIHJldHVybiBsb2NhbGUud2Vla2RheXNQYXJzZShpbnB1dCkgJSA3IHx8IDc7XG4gIH1cblxuICByZXR1cm4gaXNOdW1iZXIoaW5wdXQpICYmIGlzTmFOKGlucHV0KSA/IG51bGwgOiBpbnB1dDtcbn1cblxuLy8gTU9NRU5UU1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2V0RGF5T2ZXZWVrKGRhdGU6IERhdGUsIGlucHV0OiBudW1iZXIsIG9wdHM6IHsgaXNVVEM/OiBib29sZWFuOyBsb2NhbGU6IExvY2FsZSB9KTogRGF0ZSB8IG51bWJlciB7XG4gIGlmICghaW5wdXQpIHtcbiAgICByZXR1cm4gZ2V0RGF5T2ZXZWVrKGRhdGUsIG9wdHMuaXNVVEMpO1xuICB9XG5cbiAgcmV0dXJuIHNldERheU9mV2VlayhkYXRlLCBpbnB1dCwgb3B0cy5sb2NhbGUsIG9wdHMuaXNVVEMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0RGF5T2ZXZWVrKGRhdGU6IERhdGUsIGlucHV0OiBudW1iZXIsIGxvY2FsZSA9IGdldExvY2FsZSgpLCBpc1VUQz86IGJvb2xlYW4pOiBEYXRlIHtcbiAgY29uc3QgZGF5ID0gZ2V0RGF5KGRhdGUsIGlzVVRDKTtcbiAgY29uc3QgX2lucHV0ID0gcGFyc2VXZWVrZGF5KGlucHV0LCBsb2NhbGUpO1xuXG4gIHJldHVybiBhZGQoZGF0ZSwgX2lucHV0IC0gZGF5LCAnZGF5Jyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREYXlPZldlZWsoZGF0ZTogRGF0ZSwgaXNVVEM/OiBib29sZWFuKTogbnVtYmVyIHtcbiAgcmV0dXJuIGdldERheShkYXRlLCBpc1VUQyk7XG59XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuLy8gdG9kbzogdXRjXG4vLyBnZXRTZXRMb2NhbGVEYXlPZldlZWtcbmV4cG9ydCBmdW5jdGlvbiBnZXRMb2NhbGVEYXlPZldlZWsoZGF0ZTogRGF0ZSwgbG9jYWxlID0gZ2V0TG9jYWxlKCksIGlzVVRDPzogYm9vbGVhbik6IG51bWJlciB7XG4gIHJldHVybiAoZ2V0RGF5KGRhdGUsIGlzVVRDKSArIDcgLSBsb2NhbGUuZmlyc3REYXlPZldlZWsoKSkgJSA3O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0TG9jYWxlRGF5T2ZXZWVrKGRhdGU6IERhdGUsIGlucHV0OiBudW1iZXIsIG9wdHM6IHsgbG9jYWxlPzogTG9jYWxlOyBpc1VUQz86IGJvb2xlYW4gfSA9IHt9KTogRGF0ZSB7XG4gIGNvbnN0IHdlZWtkYXkgPSBnZXRMb2NhbGVEYXlPZldlZWsoZGF0ZSwgb3B0cy5sb2NhbGUsIG9wdHMuaXNVVEMpO1xuXG4gIHJldHVybiBhZGQoZGF0ZSwgaW5wdXQgLSB3ZWVrZGF5LCAnZGF5Jyk7XG59XG5cblxuLy8gZ2V0U2V0SVNPRGF5T2ZXZWVrXG5leHBvcnQgZnVuY3Rpb24gZ2V0SVNPRGF5T2ZXZWVrKGRhdGU6IERhdGUsIGlzVVRDPzogYm9vbGVhbik6IG51bWJlciB7XG4gIHJldHVybiBnZXREYXkoZGF0ZSwgaXNVVEMpIHx8IDc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRJU09EYXlPZldlZWsoZGF0ZTogRGF0ZSwgaW5wdXQ6IG51bWJlciB8IHN0cmluZywgb3B0czogeyBsb2NhbGU/OiBMb2NhbGUgfSA9IHt9KTogRGF0ZSB7XG4gIC8vIGJlaGF2ZXMgdGhlIHNhbWUgYXMgbW9tZW50I2RheSBleGNlcHRcbiAgLy8gYXMgYSBnZXR0ZXIsIHJldHVybnMgNyBpbnN0ZWFkIG9mIDAgKDEtNyByYW5nZSBpbnN0ZWFkIG9mIDAtNilcbiAgLy8gYXMgYSBzZXR0ZXIsIHN1bmRheSBzaG91bGQgYmVsb25nIHRvIHRoZSBwcmV2aW91cyB3ZWVrLlxuXG4gIGNvbnN0IHdlZWtkYXkgPSBwYXJzZUlzb1dlZWtkYXkoaW5wdXQsIG9wdHMubG9jYWxlKTtcblxuICByZXR1cm4gc2V0RGF5T2ZXZWVrKGRhdGUsIGdldERheU9mV2VlayhkYXRlKSAlIDcgPyB3ZWVrZGF5IDogd2Vla2RheSAtIDcpO1xufVxuIiwiLy8gdHNsaW50OmRpc2FibGU6Y29tbWVudC1mb3JtYXQgYmluYXJ5LWV4cHJlc3Npb24tb3BlcmFuZC1vcmRlciBtYXgtbGluZS1sZW5ndGhcblxuLy8hIG1vbWVudC5qcyBsb2NhbGUgY29uZmlndXJhdGlvblxuLy8hIGxvY2FsZSA6IEFyYWJpYyBbYXJdXG4vLyEgYXV0aG9yIDogQWJkZWwgU2FpZDogaHR0cHM6Ly9naXRodWIuY29tL2FiZGVsc2FpZFxuLy8hIGF1dGhvciA6IEFobWVkIEVsa2hhdGliXG4vLyEgYXV0aG9yIDogZm9yYWJpIGh0dHBzOi8vZ2l0aHViLmNvbS9mb3JhYmlcblxuaW1wb3J0IHsgTG9jYWxlRGF0YSB9IGZyb20gJy4uL2xvY2FsZS9sb2NhbGUuY2xhc3MnO1xuXG5jb25zdCBzeW1ib2xNYXA6IHtba2V5OiBzdHJpbmddOiBzdHJpbmd9ID0ge1xuICAxOiAnw5nCoScsXG4gIDI6ICfDmcKiJyxcbiAgMzogJ8OZwqMnLFxuICA0OiAnw5nCpCcsXG4gIDU6ICfDmcKlJyxcbiAgNjogJ8OZwqYnLFxuICA3OiAnw5nCpycsXG4gIDg6ICfDmcKoJyxcbiAgOTogJ8OZwqknLFxuICAwOiAnw5nCoCdcbn07XG5jb25zdCBudW1iZXJNYXA6IHtba2V5OiBzdHJpbmddOiBzdHJpbmd9ID0ge1xuICAnw5nCoSc6ICcxJyxcbiAgJ8OZwqInOiAnMicsXG4gICfDmcKjJzogJzMnLFxuICAnw5nCpCc6ICc0JyxcbiAgJ8OZwqUnOiAnNScsXG4gICfDmcKmJzogJzYnLFxuICAnw5nCpyc6ICc3JyxcbiAgJ8OZwqgnOiAnOCcsXG4gICfDmcKpJzogJzknLFxuICAnw5nCoCc6ICcwJ1xufTtcbmNvbnN0IHBsdXJhbEZvcm0gPSBmdW5jdGlvbiAobnVtOiBudW1iZXIpOiBudW1iZXIge1xuICByZXR1cm4gbnVtID09PSAwID8gMCA6IG51bSA9PT0gMSA/IDEgOiBudW0gPT09IDIgPyAyIDogbnVtICUgMTAwID49IDMgJiYgbnVtICUgMTAwIDw9IDEwID8gMyA6IG51bSAlIDEwMCA+PSAxMSA/IDQgOiA1O1xufTtcbmNvbnN0IHBsdXJhbHM6IHtba2V5OiBzdHJpbmddOiBbc3RyaW5nLCBzdHJpbmcsIFtzdHJpbmcsIHN0cmluZ10sIHN0cmluZywgc3RyaW5nLCBzdHJpbmddfSA9IHtcbiAgczogWyfDmMKjw5nCgsOZwoQgw5nChcOZwoYgw5jCq8OYwqfDmcKGw5nCisOYwqknLCAnw5jCq8OYwqfDmcKGw5nCisOYwqkgw5nCiMOYwqfDmMKtw5jCr8OYwqknLCBbJ8OYwqvDmMKnw5nChsOZworDmMKqw5jCp8OZwoYnLCAnw5jCq8OYwqfDmcKGw5nCisOYwqrDmcKKw5nChiddLCAnJWQgw5jCq8OZwojDmMKnw5nChicsICclZCDDmMKrw5jCp8OZwobDmcKKw5jCqScsICclZCDDmMKrw5jCp8OZwobDmcKKw5jCqSddLFxuICBtOiBbJ8OYwqPDmcKCw5nChCDDmcKFw5nChiDDmMKvw5nCgsOZworDmcKCw5jCqScsICfDmMKvw5nCgsOZworDmcKCw5jCqSDDmcKIw5jCp8OYwq3DmMKvw5jCqScsIFsnw5jCr8OZwoLDmcKKw5nCgsOYwqrDmMKnw5nChicsICfDmMKvw5nCgsOZworDmcKCw5jCqsOZworDmcKGJ10sICclZCDDmMKvw5nCgsOYwqfDmMKmw5nCgicsICclZCDDmMKvw5nCgsOZworDmcKCw5jCqScsICclZCDDmMKvw5nCgsOZworDmcKCw5jCqSddLFxuICBoOiBbJ8OYwqPDmcKCw5nChCDDmcKFw5nChiDDmMKzw5jCp8OYwrnDmMKpJywgJ8OYwrPDmMKnw5jCucOYwqkgw5nCiMOYwqfDmMKtw5jCr8OYwqknLCBbJ8OYwrPDmMKnw5jCucOYwqrDmMKnw5nChicsICfDmMKzw5jCp8OYwrnDmMKqw5nCisOZwoYnXSwgJyVkIMOYwrPDmMKnw5jCucOYwqfDmMKqJywgJyVkIMOYwrPDmMKnw5jCucOYwqknLCAnJWQgw5jCs8OYwqfDmMK5w5jCqSddLFxuICBkOiBbJ8OYwqPDmcKCw5nChCDDmcKFw5nChiDDmcKKw5nCiMOZwoUnLCAnw5nCisOZwojDmcKFIMOZwojDmMKnw5jCrcOYwq8nLCBbJ8OZworDmcKIw5nChcOYwqfDmcKGJywgJ8OZworDmcKIw5nChcOZworDmcKGJ10sICclZCDDmMKjw5nCisOYwqfDmcKFJywgJyVkIMOZworDmcKIw5nChcOZwovDmMKnJywgJyVkIMOZworDmcKIw5nChSddLFxuICBNOiBbJ8OYwqPDmcKCw5nChCDDmcKFw5nChiDDmMK0w5nCh8OYwrEnLCAnw5jCtMOZwofDmMKxIMOZwojDmMKnw5jCrcOYwq8nLCBbJ8OYwrTDmcKHw5jCscOYwqfDmcKGJywgJ8OYwrTDmcKHw5jCscOZworDmcKGJ10sICclZCDDmMKjw5jCtMOZwofDmMKxJywgJyVkIMOYwrTDmcKHw5jCscOYwqcnLCAnJWQgw5jCtMOZwofDmMKxJ10sXG4gIHk6IFsnw5jCo8OZwoLDmcKEIMOZwoXDmcKGIMOYwrnDmMKnw5nChScsICfDmMK5w5jCp8OZwoUgw5nCiMOYwqfDmMKtw5jCrycsIFsnw5jCucOYwqfDmcKFw5jCp8OZwoYnLCAnw5jCucOYwqfDmcKFw5nCisOZwoYnXSwgJyVkIMOYwqPDmMK5w5nCiMOYwqfDmcKFJywgJyVkIMOYwrnDmMKnw5nChcOZwovDmMKnJywgJyVkIMOYwrnDmMKnw5nChSddXG59O1xuY29uc3QgcGx1cmFsaXplID0gZnVuY3Rpb24gKHU6IHN0cmluZykge1xuICByZXR1cm4gZnVuY3Rpb24gKG51bTogbnVtYmVyLCB3aXRob3V0U3VmZml4OiBib29sZWFuKTogc3RyaW5nIHtcbiAgICBjb25zdCBmID0gcGx1cmFsRm9ybShudW0pO1xuICAgIGxldCBzdHIgPSBwbHVyYWxzW3VdW3BsdXJhbEZvcm0obnVtKV07XG4gICAgaWYgKGYgPT09IDIpIHtcbiAgICAgIHN0ciA9IHN0clt3aXRob3V0U3VmZml4ID8gMCA6IDFdO1xuICAgIH1cblxuICAgIHJldHVybiAoc3RyIGFzIHN0cmluZykucmVwbGFjZSgvJWQvaSwgbnVtLnRvU3RyaW5nKCkpO1xuICB9O1xufTtcbmNvbnN0IG1vbnRoczogc3RyaW5nW10gPSBbXG4gICfDmcKKw5nChsOYwqfDmcKKw5jCsScsXG4gICfDmcKBw5jCqMOYwrHDmMKnw5nCisOYwrEnLFxuICAnw5nChcOYwqfDmMKxw5jCsycsXG4gICfDmMKjw5jCqMOYwrHDmcKKw5nChCcsXG4gICfDmcKFw5jCp8OZworDmcKIJyxcbiAgJ8OZworDmcKIw5nChsOZworDmcKIJyxcbiAgJ8OZworDmcKIw5nChMOZworDmcKIJyxcbiAgJ8OYwqPDmMK6w5jCs8OYwrfDmMKzJyxcbiAgJ8OYwrPDmMKow5jCqsOZwoXDmMKow5jCsScsXG4gICfDmMKjw5nCg8OYwqrDmcKIw5jCqMOYwrEnLFxuICAnw5nChsOZwojDmcKBw5nChcOYwqjDmMKxJyxcbiAgJ8OYwq/DmcKKw5jCs8OZwoXDmMKow5jCsSdcbl07XG5cbmV4cG9ydCBjb25zdCBhckxvY2FsZTogTG9jYWxlRGF0YSA9IHtcbiAgYWJicjogJ2FyJyxcbiAgbW9udGhzLFxuICBtb250aHNTaG9ydDogbW9udGhzLFxuICB3ZWVrZGF5czogJ8OYwqfDmcKEw5jCo8OYwq3DmMKvX8OYwqfDmcKEw5jCpcOYwqvDmcKGw5nCisOZwoZfw5jCp8OZwoTDmMKrw5nChMOYwqfDmMKrw5jCp8OYwqFfw5jCp8OZwoTDmMKjw5jCscOYwqjDmMK5w5jCp8OYwqFfw5jCp8OZwoTDmMKuw5nChcOZworDmMKzX8OYwqfDmcKEw5jCrMOZwoXDmMK5w5jCqV/DmMKnw5nChMOYwrPDmMKow5jCqicuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNTaG9ydDogJ8OYwqPDmMKtw5jCr1/DmMKlw5jCq8OZwobDmcKKw5nChl/DmMKrw5nChMOYwqfDmMKrw5jCp8OYwqFfw5jCo8OYwrHDmMKow5jCucOYwqfDmMKhX8OYwq7DmcKFw5nCisOYwrNfw5jCrMOZwoXDmMK5w5jCqV/DmMKzw5jCqMOYwqonLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzTWluOiAnw5jCrV/DmcKGX8OYwqtfw5jCsV/DmMKuX8OYwqxfw5jCsycuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNQYXJzZUV4YWN0OiB0cnVlLFxuICBsb25nRGF0ZUZvcm1hdDoge1xuICAgIExUOiAnSEg6bW0nLFxuICAgIExUUzogJ0hIOm1tOnNzJyxcbiAgICBMOiAnRC9cXHUyMDBGTS9cXHUyMDBGWVlZWScsXG4gICAgTEw6ICdEIE1NTU0gWVlZWScsXG4gICAgTExMOiAnRCBNTU1NIFlZWVkgSEg6bW0nLFxuICAgIExMTEw6ICdkZGRkIEQgTU1NTSBZWVlZIEhIOm1tJ1xuICB9LFxuICBtZXJpZGllbVBhcnNlOiAvw5jCtXzDmcKFLyxcbiAgaXNQTShpbnB1dCkge1xuICAgIHJldHVybiAnw5nChScgPT09IGlucHV0O1xuICB9LFxuICBtZXJpZGllbShob3VyLCBtaW51dGUsIGlzTG93ZXIpIHtcbiAgICBpZiAoaG91ciA8IDEyKSB7XG4gICAgICByZXR1cm4gJ8OYwrUnO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gJ8OZwoUnO1xuICAgIH1cbiAgfSxcbiAgY2FsZW5kYXI6IHtcbiAgICBzYW1lRGF5OiAnW8OYwqfDmcKEw5nCisOZwojDmcKFIMOYwrnDmcKGw5jCryDDmMKnw5nChMOYwrPDmMKnw5jCucOYwqldIExUJyxcbiAgICBuZXh0RGF5OiAnW8OYwrrDmMKvw5nCi8OYwqcgw5jCucOZwobDmMKvIMOYwqfDmcKEw5jCs8OYwqfDmMK5w5jCqV0gTFQnLFxuICAgIG5leHRXZWVrOiAnZGRkZCBbw5jCucOZwobDmMKvIMOYwqfDmcKEw5jCs8OYwqfDmMK5w5jCqV0gTFQnLFxuICAgIGxhc3REYXk6ICdbw5jCo8OZwoXDmMKzIMOYwrnDmcKGw5jCryDDmMKnw5nChMOYwrPDmMKnw5jCucOYwqldIExUJyxcbiAgICBsYXN0V2VlazogJ2RkZGQgW8OYwrnDmcKGw5jCryDDmMKnw5nChMOYwrPDmMKnw5jCucOYwqldIExUJyxcbiAgICBzYW1lRWxzZTogJ0wnXG4gIH0sXG4gIHJlbGF0aXZlVGltZToge1xuICAgIGZ1dHVyZTogJ8OYwqjDmMK5w5jCryAlcycsXG4gICAgcGFzdDogJ8OZwoXDmcKGw5jCsCAlcycsXG4gICAgczogcGx1cmFsaXplKCdzJyksXG4gICAgc3M6IHBsdXJhbGl6ZSgncycpLFxuICAgIG06IHBsdXJhbGl6ZSgnbScpLFxuICAgIG1tOiBwbHVyYWxpemUoJ20nKSxcbiAgICBoOiBwbHVyYWxpemUoJ2gnKSxcbiAgICBoaDogcGx1cmFsaXplKCdoJyksXG4gICAgZDogcGx1cmFsaXplKCdkJyksXG4gICAgZGQ6IHBsdXJhbGl6ZSgnZCcpLFxuICAgIE06IHBsdXJhbGl6ZSgnTScpLFxuICAgIE1NOiBwbHVyYWxpemUoJ00nKSxcbiAgICB5OiBwbHVyYWxpemUoJ3knKSxcbiAgICB5eTogcGx1cmFsaXplKCd5JylcbiAgfSxcbiAgcHJlcGFyc2Uoc3RyOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvW8OZwqHDmcKiw5nCo8OZwqTDmcKlw5nCpsOZwqfDmcKow5nCqcOZwqBdL2csIGZ1bmN0aW9uIChtYXRjaCkge1xuICAgICAgcmV0dXJuIG51bWJlck1hcFttYXRjaF07XG4gICAgfSkucmVwbGFjZSgvw5jCjC9nLCAnLCcpO1xuICB9LFxuICBwb3N0Zm9ybWF0KHN0cjogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC9cXGQvZywgZnVuY3Rpb24gKG1hdGNoKSB7XG4gICAgICByZXR1cm4gc3ltYm9sTWFwW21hdGNoXTtcbiAgICB9KS5yZXBsYWNlKC8sL2csICfDmMKMJyk7XG4gIH0sXG4gIHdlZWs6IHtcbiAgICBkb3c6IDYsIC8vIFNhdHVyZGF5IGlzIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsuXG4gICAgZG95OiAxMiAgLy8gVGhlIHdlZWsgdGhhdCBjb250YWlucyBKYW4gMXN0IGlzIHRoZSBmaXJzdCB3ZWVrIG9mIHRoZSB5ZWFyLlxuICB9XG59O1xuIiwiLy8gdHNsaW50OmRpc2FibGU6Y29tbWVudC1mb3JtYXQgYmluYXJ5LWV4cHJlc3Npb24tb3BlcmFuZC1vcmRlciBtYXgtbGluZS1sZW5ndGhcbi8vIHRzbGludDpkaXNhYmxlOm5vLWJpdHdpc2UgcHJlZmVyLXRlbXBsYXRlIGN5Y2xvbWF0aWMtY29tcGxleGl0eVxuLy8gdHNsaW50OmRpc2FibGU6bm8tc2hhZG93ZWQtdmFyaWFibGUgc3dpdGNoLWRlZmF1bHQgcHJlZmVyLWNvbnN0XG4vLyB0c2xpbnQ6ZGlzYWJsZTpvbmUtdmFyaWFibGUtcGVyLWRlY2xhcmF0aW9uIG5ld2xpbmUtYmVmb3JlLXJldHVyblxuXG5pbXBvcnQgeyBMb2NhbGVEYXRhIH0gZnJvbSAnLi4vbG9jYWxlL2xvY2FsZS5jbGFzcyc7XG5pbXBvcnQgeyBLaHJvbm9zIH0gZnJvbSAnLi4vdGVzdC9jaGFpbic7XG5cbi8vISBtb21lbnQuanMgbG9jYWxlIGNvbmZpZ3VyYXRpb25cbi8vISBsb2NhbGUgOiBCdWxnYXJpYW4gW2JnXVxuLy8hIGF1dGhvciA6IElza3JlbiBJdm92IENoZXJuZXYgOiBodHRwczovL2dpdGh1Yi5jb20vaWNoZXJuZXZcbi8vISBhdXRob3IgOiBLdW5hbCBNYXJ3YWhhIDogaHR0cHM6Ly9naXRodWIuY29tL21hcndhaGFoYVxuLy8hIGF1dGhvciA6IE1hdHQgR3JhbmRlIDogaHR0cHM6Ly9naXRodWIuY29tL21hdHRncmFuZGVcbi8vISBhdXRob3IgOiBJc2FhYyBDYW1icm9uIDogaHR0cHM6Ly9naXRodWIuY29tL2ljYW1icm9uXG4vLyEgYXV0aG9yIDogVmVuZWxpbiBNYW5jaGV2IDogaHR0cHM6Ly9naXRodWIuY29tL3ZtYW5jaGV2XG5cbmV4cG9ydCBjb25zdCBiZ0xvY2FsZTogTG9jYWxlRGF0YSA9IHtcbiAgYWJicjogJ2JnJyxcbiAgbW9udGhzOiAnw5HCj8OQwr3DkcKDw5DCsMORwoDDkMK4X8ORwoTDkMK1w5DCssORwoDDkcKDw5DCsMORwoDDkMK4X8OQwrzDkMKww5HCgMORwoJfw5DCsMOQwr/DkcKAw5DCuMOQwrtfw5DCvMOQwrDDkMK5X8ORwo7DkMK9w5DCuF/DkcKOw5DCu8OQwrhfw5DCsMOQwrLDkMKzw5HCg8ORwoHDkcKCX8ORwoHDkMK1w5DCv8ORwoLDkMK1w5DCvMOQwrLDkcKAw5DCuF/DkMK+w5DCusORwoLDkMK+w5DCvMOQwrLDkcKAw5DCuF/DkMK9w5DCvsOQwrXDkMK8w5DCssORwoDDkMK4X8OQwrTDkMK1w5DCusOQwrXDkMK8w5DCssORwoDDkMK4Jy5zcGxpdCgnXycpLFxuICBtb250aHNTaG9ydDogJ8ORwo/DkMK9w5HCgF/DkcKEw5DCtcOQwrJfw5DCvMOQwrDDkcKAX8OQwrDDkMK/w5HCgF/DkMK8w5DCsMOQwrlfw5HCjsOQwr3DkMK4X8ORwo7DkMK7w5DCuF/DkMKww5DCssOQwrNfw5HCgcOQwrXDkMK/X8OQwr7DkMK6w5HCgl/DkMK9w5DCvsOQwrVfw5DCtMOQwrXDkMK6Jy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5czogJ8OQwr3DkMK1w5DCtMOQwrXDkMK7w5HCj1/DkMK/w5DCvsOQwr3DkMK1w5DCtMOQwrXDkMK7w5DCvcOQwrjDkMK6X8OQwrLDkcKCw5DCvsORwoDDkMK9w5DCuMOQwrpfw5HCgcORwoDDkcKPw5DCtMOQwrBfw5HCh8OQwrXDkcKCw5DCssORworDkcKAw5HCgsORworDkMK6X8OQwr/DkMK1w5HCgsORworDkMK6X8ORwoHDkcKKw5DCscOQwr7DkcKCw5DCsCcuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNTaG9ydDogJ8OQwr3DkMK1w5DCtF/DkMK/w5DCvsOQwr1fw5DCssORwoLDkMK+X8ORwoHDkcKAw5HCj1/DkcKHw5DCtcORwoJfw5DCv8OQwrXDkcKCX8ORwoHDkcKKw5DCsScuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNNaW46ICfDkMK9w5DCtF/DkMK/w5DCvV/DkMKyw5HCgl/DkcKBw5HCgF/DkcKHw5HCgl/DkMK/w5HCgl/DkcKBw5DCsScuc3BsaXQoJ18nKSxcbiAgbG9uZ0RhdGVGb3JtYXQ6IHtcbiAgICBMVDogJ0g6bW0nLFxuICAgIExUUzogJ0g6bW06c3MnLFxuICAgIEw6ICdELk1NLllZWVknLFxuICAgIExMOiAnRCBNTU1NIFlZWVknLFxuICAgIExMTDogJ0QgTU1NTSBZWVlZIEg6bW0nLFxuICAgIExMTEw6ICdkZGRkLCBEIE1NTU0gWVlZWSBIOm1tJ1xuICB9LFxuICBjYWxlbmRhcjoge1xuICAgIHNhbWVEYXk6ICdbw5DClMOQwr3DkMK1w5HCgSDDkMKyXSBMVCcsXG4gICAgbmV4dERheTogJ1vDkMKjw5HCgsORwoDDkMK1IMOQwrJdIExUJyxcbiAgICBuZXh0V2VlazogJ2RkZGQgW8OQwrJdIExUJyxcbiAgICBsYXN0RGF5OiAnW8OQwpLDkcKHw5DCtcORwoDDkMKwIMOQwrJdIExUJyxcbiAgICBsYXN0V2VlazogZnVuY3Rpb24gKGQ6IGFueSkge1xuXG4gICAgICBzd2l0Y2ggKGQpIHtcbiAgICAgICAgY2FzZSAwOlxuICAgICAgICBjYXNlIDM6XG4gICAgICAgIGNhc2UgNjpcbiAgICAgICAgICByZXR1cm4gJ1vDkMKSIMOQwrjDkMK3w5DCvMOQwrjDkMK9w5DCsMOQwrvDkMKww5HCgsOQwrBdIGRkZGQgW8OQwrJdIExUJztcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICBjYXNlIDI6XG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgY2FzZSA1OlxuICAgICAgICAgIHJldHVybiAnW8OQwpIgw5DCuMOQwrfDkMK8w5DCuMOQwr3DkMKww5DCu8OQwrjDkcKPXSBkZGRkIFvDkMKyXSBMVCc7XG4gICAgICB9XG4gICAgfSxcbiAgICBzYW1lRWxzZTogJ0wnXG4gIH0sXG4gIHJlbGF0aXZlVGltZToge1xuICAgIGZ1dHVyZTogJ8ORwoHDkMK7w5DCtcOQwrQgJXMnLFxuICAgIHBhc3Q6ICfDkMK/w5HCgMOQwrXDkMK0w5DCuCAlcycsXG4gICAgczogJ8OQwr3DkcKPw5DCusOQwr7DkMK7w5DCusOQwr4gw5HCgcOQwrXDkMK6w5HCg8OQwr3DkMK0w5DCuCcsXG4gICAgc3M6ICclZCDDkcKBw5DCtcOQwrrDkcKDw5DCvcOQwrTDkMK4JyxcbiAgICBtOiAnw5DCvMOQwrjDkMK9w5HCg8ORwoLDkMKwJyxcbiAgICBtbTogJyVkIMOQwrzDkMK4w5DCvcORwoPDkcKCw5DCuCcsXG4gICAgaDogJ8ORwofDkMKww5HCgScsXG4gICAgaGg6ICclZCDDkcKHw5DCsMORwoHDkMKwJyxcbiAgICBkOiAnw5DCtMOQwrXDkMK9JyxcbiAgICBkZDogJyVkIMOQwrTDkMK9w5DCuCcsXG4gICAgTTogJ8OQwrzDkMK1w5HCgcOQwrXDkcKGJyxcbiAgICBNTTogJyVkIMOQwrzDkMK1w5HCgcOQwrXDkcKGw5DCsCcsXG4gICAgeTogJ8OQwrPDkMK+w5DCtMOQwrjDkMK9w5DCsCcsXG4gICAgeXk6ICclZCDDkMKzw5DCvsOQwrTDkMK4w5DCvcOQwrgnXG4gIH0sXG4gIGRheU9mTW9udGhPcmRpbmFsUGFyc2U6IC9cXGR7MSwyfS0ow5DCtcOQwrJ8w5DCtcOQwr18w5HCgsOQwrh8w5DCssOQwrh8w5HCgMOQwrh8w5DCvMOQwrgpLyxcbiAgb3JkaW5hbDogZnVuY3Rpb24gKF9udW06IG51bWJlcik6IHN0cmluZyB7XG5cbiAgICBjb25zdCBudW1iZXIgPSBOdW1iZXIoX251bSk7XG5cbiAgICBsZXQgbGFzdERpZ2l0ID0gbnVtYmVyICUgMTAsXG4gICAgICBsYXN0MkRpZ2l0cyA9IG51bWJlciAlIDEwMDtcblxuICAgIGlmIChudW1iZXIgPT09IDApIHtcbiAgICAgIHJldHVybiBudW1iZXIgKyAnLcOQwrXDkMKyJztcbiAgICB9IGVsc2UgaWYgKGxhc3QyRGlnaXRzID09PSAwKSB7XG4gICAgICByZXR1cm4gbnVtYmVyICsgJy3DkMK1w5DCvSc7XG4gICAgfSBlbHNlIGlmIChsYXN0MkRpZ2l0cyA+IDEwICYmIGxhc3QyRGlnaXRzIDwgMjApIHtcbiAgICAgIHJldHVybiBudW1iZXIgKyAnLcORwoLDkMK4JztcbiAgICB9IGVsc2UgaWYgKGxhc3REaWdpdCA9PT0gMSkge1xuICAgICAgcmV0dXJuIG51bWJlciArICctw5DCssOQwrgnO1xuICAgIH0gZWxzZSBpZiAobGFzdERpZ2l0ID09PSAyKSB7XG4gICAgICByZXR1cm4gbnVtYmVyICsgJy3DkcKAw5DCuCc7XG4gICAgfSBlbHNlIGlmIChsYXN0RGlnaXQgPT09IDcgfHwgbGFzdERpZ2l0ID09PSA4KSB7XG4gICAgICByZXR1cm4gbnVtYmVyICsgJy3DkMK8w5DCuCc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBudW1iZXIgKyAnLcORwoLDkMK4JztcbiAgICB9XG4gIH0sXG4gIHdlZWs6IHtcbiAgICBkb3c6IDEsIC8vIE1vbmRheSBpcyB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrLlxuICAgIGRveTogNyAgLy8gVGhlIHdlZWsgdGhhdCBjb250YWlucyBKYW4gMXN0IGlzIHRoZSBmaXJzdCB3ZWVrIG9mIHRoZSB5ZWFyLlxuICB9XG59O1xuIiwiLy8gdHNsaW50OmRpc2FibGU6Y29tbWVudC1mb3JtYXQgYmluYXJ5LWV4cHJlc3Npb24tb3BlcmFuZC1vcmRlciBtYXgtbGluZS1sZW5ndGhcbi8vIHRzbGludDpkaXNhYmxlOm5vLWJpdHdpc2UgcHJlZmVyLXRlbXBsYXRlIGN5Y2xvbWF0aWMtY29tcGxleGl0eVxuLy8gdHNsaW50OmRpc2FibGU6bm8tc2hhZG93ZWQtdmFyaWFibGUgc3dpdGNoLWRlZmF1bHQgcHJlZmVyLWNvbnN0XG4vLyB0c2xpbnQ6ZGlzYWJsZTpvbmUtdmFyaWFibGUtcGVyLWRlY2xhcmF0aW9uIG5ld2xpbmUtYmVmb3JlLXJldHVyblxuXG5pbXBvcnQgeyBMb2NhbGVEYXRhIH0gZnJvbSAnLi4vbG9jYWxlL2xvY2FsZS5jbGFzcyc7XG5pbXBvcnQgeyBnZXRIb3VycywgZ2V0TW9udGggfSBmcm9tICcuLi91dGlscy9kYXRlLWdldHRlcnMnO1xuXG4vLyEgbW9tZW50LmpzIGxvY2FsZSBjb25maWd1cmF0aW9uXG4vLyEgbG9jYWxlIDogQ2F0YWxhbiBbY2FdXG4vLyEgYXV0aG9yIDogWGF2aWVyIEFyYmF0IDogaHR0cHM6Ly9naXRodWIuY29tL1hhdmlzYXVydXNSZXhcblxubGV0IG1vbnRoc1Nob3J0RG90ID0gJ2dlbi5fZmViLl9tYXIuX2Fici5fbWFpLl9qdW4uX2p1bC5fYWdvLl9zZXQuX29jdC5fbm92Ll9kZXMuJy5zcGxpdCgnXycpLFxuICBtb250aHNTaG9ydCA9ICdlbmVfZmViX21hcl9hYnJfbWFpX2p1bl9qdWxfYWdvX3NldF9vY3Rfbm92X2Rlcycuc3BsaXQoJ18nKTtcblxubGV0IG1vbnRoc1BhcnNlID0gWy9eZ2VuL2ksIC9eZmViL2ksIC9ebWFyL2ksIC9eYWJyL2ksIC9ebWFpL2ksIC9eanVuL2ksIC9eanVsL2ksIC9eYWdvL2ksIC9ec2V0L2ksIC9eb2N0L2ksIC9ebm92L2ksIC9eZGVzL2ldO1xubGV0IG1vbnRoc1JlZ2V4ID0gL14oZ2VuZXJ8ZmVicmVyfG1hcsODwqd8YWJyaWx8bWFpZ3xqdW55fGp1bGlvbHxhZ29zdHxzZXRlbWJyZXxvY3R1YnJlfG5vdmVtYnJlfGRlc2VtYnJlfGdlblxcLj98ZmViXFwuP3xtYXJcXC4/fGFiclxcLj98bWFpXFwuP3xqdW5cXC4/fGp1bFxcLj98YWdvXFwuP3xzZXRcXC4/fG9jdFxcLj98bm92XFwuP3xkZXNcXC4/KS9pO1xuXG5leHBvcnQgY29uc3QgY2FMb2NhbGU6IExvY2FsZURhdGEgPSB7XG4gIGFiYnI6ICdjYScsXG4gIG1vbnRoczogJ2dlbmVyX2ZlYnJlcl9tYXLDg8KnX2FicmlsX21haWdfanVueV9qdWxpb2xfYWdvc3Rfc2V0ZW1icmVfb2N0dWJyZV9ub3ZlbWJyZV9kZXNlbWJyZScuc3BsaXQoJ18nKSxcbiAgbW9udGhzU2hvcnQoZGF0ZTogRGF0ZSwgZm9ybWF0OiBzdHJpbmcsIGlzVVRDPzogYm9vbGVhbik6IHN0cmluZyB8IHN0cmluZ1tdIHtcbiAgICBpZiAoIWRhdGUpIHtcbiAgICAgIHJldHVybiBtb250aHNTaG9ydERvdDtcbiAgICB9XG5cbiAgICBpZiAoLy1NTU0tLy50ZXN0KGZvcm1hdCkpIHtcbiAgICAgIHJldHVybiBtb250aHNTaG9ydFtnZXRNb250aChkYXRlLCBpc1VUQyldO1xuICAgIH1cblxuICAgIHJldHVybiBtb250aHNTaG9ydERvdFtnZXRNb250aChkYXRlLCBpc1VUQyldO1xuICB9LFxuICBtb250aHNSZWdleCxcbiAgbW9udGhzU2hvcnRSZWdleDogbW9udGhzUmVnZXgsXG4gIG1vbnRoc1N0cmljdFJlZ2V4OiAvXihnZW5lcnxmZWJyZXJ8bWFyw4PCp3xhYnJpbHxtYWlnfGp1bnl8anVsaW9sfGFnb3N0fHNldGVtYnJlfG9jdHVicmV8bm92ZW1icmV8ZGVzZW1icmUpL2ksXG4gIG1vbnRoc1Nob3J0U3RyaWN0UmVnZXg6IC9eKGdlblxcLj98ZmViXFwuP3xtYXJcXC4/fGFiclxcLj98bWFpXFwuP3xqdW5cXC4/fGp1bFxcLj98YWdvXFwuP3xzZXRcXC4/fG9jdFxcLj98bm92XFwuP3xkZXNcXC4/KS9pLFxuICBtb250aHNQYXJzZSxcbiAgbG9uZ01vbnRoc1BhcnNlOiBtb250aHNQYXJzZSxcbiAgc2hvcnRNb250aHNQYXJzZTogbW9udGhzUGFyc2UsXG4gIHdlZWtkYXlzOiAnZGl1bWVuZ2VfZGlsbHVuc19kaW1hcnRzX2RpbWVjcmVzX2Rpam91c19kaXZlbmRyZXNfZGlzc2FidGUnLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzU2hvcnQ6ICdkaXUuX2RpbC5fZGltLl9kaXguX2Rpai5fZGl2Ll9kaXMuJy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5c01pbjogJ2RnX2RsX2R0X2RjX2RqX2R2X2RzJy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5c1BhcnNlRXhhY3Q6IHRydWUsXG4gIGxvbmdEYXRlRm9ybWF0OiB7XG4gICAgTFQ6ICdIOm1tJyxcbiAgICBMVFM6ICdIOm1tOnNzJyxcbiAgICBMOiAnREQvTU0vWVlZWScsXG4gICAgTEw6ICdEIFtkZV0gTU1NTSBbZGVdIFlZWVknLFxuICAgIExMTDogJ0QgW2RlXSBNTU1NIFtkZV0gWVlZWSBIOm1tJyxcbiAgICBMTExMOiAnZGRkZCwgRCBbZGVdIE1NTU0gW2RlXSBZWVlZIEg6bW0nXG4gIH0sXG4gIGNhbGVuZGFyOiB7XG4gICAgc2FtZURheShkYXRlOiBEYXRlKSB7XG4gICAgICByZXR1cm4gJ1thdnVpIGEgJyArICgnbGEnICsgKGdldEhvdXJzKGRhdGUpICE9PSAxKSA/ICdsZXMnIDogJycpICsgJ10gTFQnO1xuICAgIH0sXG4gICAgbmV4dERheShkYXRlOiBEYXRlKSB7XG4gICAgICByZXR1cm4gJ1tkZW1hIGEgJyArICgnbGEnICsgKGdldEhvdXJzKGRhdGUpICE9PSAxKSA/ICdsZXMnIDogJycpICsgJ10gTFQnO1xuICAgIH0sXG4gICAgbmV4dFdlZWsoZGF0ZTogRGF0ZSkge1xuICAgICAgcmV0dXJuICdkZGRkIFthICcgKyAoJ2xhJyArIChnZXRIb3VycyhkYXRlKSAhPT0gMSkgPyAnbGVzJyA6ICcnKSArICddIExUJztcbiAgICB9LFxuICAgIGxhc3REYXkoZGF0ZTogRGF0ZSkge1xuICAgICAgcmV0dXJuICdbYWhpciBhICcgKyAoJ2xhJyArIChnZXRIb3VycyhkYXRlKSAhPT0gMSkgPyAnbGVzJyA6ICcnKSArICddIExUJztcbiAgICB9LFxuICAgIGxhc3RXZWVrKGRhdGU6IERhdGUpIHtcbiAgICAgIHJldHVybiAnW2VsXSBkZGRkIFsnICsgKCdwYXNzYWRhIGxhICcgKyAoZ2V0SG91cnMoZGF0ZSkgIT09IDEpID8gJ3Bhc3NhZGVzIGxlcycgOiAnJykgKyAnXSBMVCc7XG4gICAgfSxcbiAgICBzYW1lRWxzZTogJ0wnXG4gIH0sXG4gIHJlbGF0aXZlVGltZToge1xuICAgIGZ1dHVyZTogJ2VuICVzJyxcbiAgICBwYXN0OiAnZmEgJXMnLFxuICAgIHM6ICd1bnMgc2Vnb25zJyxcbiAgICBzczogJyVkIHNlZ29ucycsXG4gICAgbTogJ3VuIG1pbnV0JyxcbiAgICBtbTogJyVkIG1pbnV0cycsXG4gICAgaDogJ3VuYSBob3JhJyxcbiAgICBoaDogJyVkIGhvcmVzJyxcbiAgICBkOiAndW4gZGlhJyxcbiAgICBkZDogJyVkIGRpZXMnLFxuICAgIE06ICd1biBtZXMnLFxuICAgIE1NOiAnJWQgbWVzb3MnLFxuICAgIHk6ICd1biBhbnknLFxuICAgIHl5OiAnJWQgYW55cydcbiAgfSxcbiAgZGF5T2ZNb250aE9yZGluYWxQYXJzZTogL1xcZHsxLDJ9KGVyfG9ufGVyfHJ0fMODwqkpLyxcbiAgb3JkaW5hbChfbnVtOiBudW1iZXIpOiBzdHJpbmcge1xuICAgIGNvbnN0IG51bSA9IE51bWJlcihfbnVtKTtcbiAgICBjb25zdCBvdXRwdXQgPSAobnVtID4gNCkgPyAnw4PCqScgOlxuICAgICAgICAobnVtID09PSAxIHx8IG51bSA9PT0gMykgPyAncicgOlxuICAgICAgICAgIChudW0gPT09IDIpID8gJ24nIDpcbiAgICAgICAgICAgIChudW0gPT09IDQpID8gJ3QnIDogJ8ODwqknO1xuICAgIHJldHVybiBudW0gKyBvdXRwdXQ7XG4gIH0sXG4gIHdlZWs6IHtcbiAgICBkb3c6IDEsIC8vIE1vbmRheSBpcyB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrLlxuICAgIGRveTogNCAgLy8gVGhlIHdlZWsgdGhhdCBjb250YWlucyBKYW4gNHRoIGlzIHRoZSBmaXJzdCB3ZWVrIG9mIHRoZSB5ZWFyLlxuICB9XG59O1xuIiwiLy8gdHNsaW50OmRpc2FibGU6Y29tbWVudC1mb3JtYXQgYmluYXJ5LWV4cHJlc3Npb24tb3BlcmFuZC1vcmRlciBtYXgtbGluZS1sZW5ndGhcbi8vIHRzbGludDpkaXNhYmxlOm5vLWJpdHdpc2UgcHJlZmVyLXRlbXBsYXRlIGN5Y2xvbWF0aWMtY29tcGxleGl0eVxuLy8gdHNsaW50OmRpc2FibGU6bm8tc2hhZG93ZWQtdmFyaWFibGUgc3dpdGNoLWRlZmF1bHQgcHJlZmVyLWNvbnN0XG4vLyB0c2xpbnQ6ZGlzYWJsZTpvbmUtdmFyaWFibGUtcGVyLWRlY2xhcmF0aW9uIG5ld2xpbmUtYmVmb3JlLXJldHVyblxuXG5pbXBvcnQgeyBMb2NhbGVEYXRhIH0gZnJvbSAnLi4vbG9jYWxlL2xvY2FsZS5jbGFzcyc7XG5pbXBvcnQgeyBnZXREYXlPZldlZWsgfSBmcm9tICcuLi91bml0cy9kYXktb2Ytd2Vlayc7XG5cbi8vISBtb21lbnQuanMgbG9jYWxlIGNvbmZpZ3VyYXRpb25cbi8vISBsb2NhbGUgOiBDemVjaCBbY3NdXG4vLyEgYXV0aG9yIDogcGV0cmJlbGEgOiBodHRwczovL2dpdGh1Yi5jb20vcGV0cmJlbGFcblxuY29uc3QgbW9udGhzOiBzdHJpbmdbXSA9ICdsZWRlbl/Dg8K6bm9yX2LDhcKZZXplbl9kdWJlbl9rdsOEwpt0ZW5fw4TCjWVydmVuX8OEwo1lcnZlbmVjX3NycGVuX3rDg8Khw4XCmcODwq1fw4XCmcODwq1qZW5fbGlzdG9wYWRfcHJvc2luZWMnLnNwbGl0KCdfJyk7XG5jb25zdCBtb250aHNTaG9ydDogc3RyaW5nW10gPSAnbGVkX8ODwrpub19iw4XCmWVfZHViX2t2w4TCm1/DhMKNdm5fw4TCjXZjX3NycF96w4PCocOFwplfw4XCmcODwq1qX2xpc19wcm8nLnNwbGl0KCdfJyk7XG5cbmZ1bmN0aW9uIHBsdXJhbChudW06IG51bWJlcik6IGJvb2xlYW4ge1xuICByZXR1cm4gKG51bSA+IDEpICYmIChudW0gPCA1KSAmJiAofn4obnVtIC8gMTApICE9PSAxKTtcbn1cblxuZnVuY3Rpb24gdHJhbnNsYXRlKG51bTogbnVtYmVyLCB3aXRob3V0U3VmZml4OiBib29sZWFuLCBrZXk6IHN0cmluZywgaXNGdXR1cmU6IGJvb2xlYW4pOiBzdHJpbmcge1xuICBjb25zdCByZXN1bHQgPSBudW0gKyAnICc7XG5cbiAgc3dpdGNoIChrZXkpIHtcbiAgICBjYXNlICdzJzogIC8vIGEgZmV3IHNlY29uZHMgLyBpbiBhIGZldyBzZWNvbmRzIC8gYSBmZXcgc2Vjb25kcyBhZ29cbiAgICAgIHJldHVybiAod2l0aG91dFN1ZmZpeCB8fCBpc0Z1dHVyZSkgPyAncMODwqFyIHNla3VuZCcgOiAncMODwqFyIHNla3VuZGFtaSc7XG4gICAgY2FzZSAnc3MnOiAvLyA5IHNlY29uZHMgLyBpbiA5IHNlY29uZHMgLyA5IHNlY29uZHMgYWdvXG4gICAgICBpZiAod2l0aG91dFN1ZmZpeCB8fCBpc0Z1dHVyZSkge1xuICAgICAgICByZXR1cm4gcmVzdWx0ICsgKHBsdXJhbChudW0pID8gJ3Nla3VuZHknIDogJ3Nla3VuZCcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHJlc3VsdCArICdzZWt1bmRhbWknO1xuICAgICAgfVxuICAgIC8vIGJyZWFrO1xuICAgIGNhc2UgJ20nOiAgLy8gYSBtaW51dGUgLyBpbiBhIG1pbnV0ZSAvIGEgbWludXRlIGFnb1xuICAgICAgcmV0dXJuIHdpdGhvdXRTdWZmaXggPyAnbWludXRhJyA6IChpc0Z1dHVyZSA/ICdtaW51dHUnIDogJ21pbnV0b3UnKTtcbiAgICBjYXNlICdtbSc6IC8vIDkgbWludXRlcyAvIGluIDkgbWludXRlcyAvIDkgbWludXRlcyBhZ29cbiAgICAgIGlmICh3aXRob3V0U3VmZml4IHx8IGlzRnV0dXJlKSB7XG4gICAgICAgIHJldHVybiByZXN1bHQgKyAocGx1cmFsKG51bSkgPyAnbWludXR5JyA6ICdtaW51dCcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHJlc3VsdCArICdtaW51dGFtaSc7XG4gICAgICB9XG4gICAgLy8gYnJlYWs7XG4gICAgY2FzZSAnaCc6ICAvLyBhbiBob3VyIC8gaW4gYW4gaG91ciAvIGFuIGhvdXIgYWdvXG4gICAgICByZXR1cm4gd2l0aG91dFN1ZmZpeCA/ICdob2RpbmEnIDogKGlzRnV0dXJlID8gJ2hvZGludScgOiAnaG9kaW5vdScpO1xuICAgIGNhc2UgJ2hoJzogLy8gOSBob3VycyAvIGluIDkgaG91cnMgLyA5IGhvdXJzIGFnb1xuICAgICAgaWYgKHdpdGhvdXRTdWZmaXggfHwgaXNGdXR1cmUpIHtcbiAgICAgICAgcmV0dXJuIHJlc3VsdCArIChwbHVyYWwobnVtKSA/ICdob2RpbnknIDogJ2hvZGluJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcmVzdWx0ICsgJ2hvZGluYW1pJztcbiAgICAgIH1cbiAgICAvLyBicmVhaztcbiAgICBjYXNlICdkJzogIC8vIGEgZGF5IC8gaW4gYSBkYXkgLyBhIGRheSBhZ29cbiAgICAgIHJldHVybiAod2l0aG91dFN1ZmZpeCB8fCBpc0Z1dHVyZSkgPyAnZGVuJyA6ICdkbmVtJztcbiAgICBjYXNlICdkZCc6IC8vIDkgZGF5cyAvIGluIDkgZGF5cyAvIDkgZGF5cyBhZ29cbiAgICAgIGlmICh3aXRob3V0U3VmZml4IHx8IGlzRnV0dXJlKSB7XG4gICAgICAgIHJldHVybiByZXN1bHQgKyAocGx1cmFsKG51bSkgPyAnZG55JyA6ICdkbsODwq0nKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiByZXN1bHQgKyAnZG55JztcbiAgICAgIH1cbiAgICAvLyBicmVhaztcbiAgICBjYXNlICdNJzogIC8vIGEgbW9udGggLyBpbiBhIG1vbnRoIC8gYSBtb250aCBhZ29cbiAgICAgIHJldHVybiAod2l0aG91dFN1ZmZpeCB8fCBpc0Z1dHVyZSkgPyAnbcOEwptzw4PCrWMnIDogJ23DhMKbc8ODwq1jZW0nO1xuICAgIGNhc2UgJ01NJzogLy8gOSBtb250aHMgLyBpbiA5IG1vbnRocyAvIDkgbW9udGhzIGFnb1xuICAgICAgaWYgKHdpdGhvdXRTdWZmaXggfHwgaXNGdXR1cmUpIHtcbiAgICAgICAgcmV0dXJuIHJlc3VsdCArIChwbHVyYWwobnVtKSA/ICdtw4TCm3PDg8KtY2UnIDogJ23DhMKbc8ODwq1jw4XCrycpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHJlc3VsdCArICdtw4TCm3PDg8KtY2knO1xuICAgICAgfVxuICAgIC8vIGJyZWFrO1xuICAgIGNhc2UgJ3knOiAgLy8gYSB5ZWFyIC8gaW4gYSB5ZWFyIC8gYSB5ZWFyIGFnb1xuICAgICAgcmV0dXJuICh3aXRob3V0U3VmZml4IHx8IGlzRnV0dXJlKSA/ICdyb2snIDogJ3Jva2VtJztcbiAgICBjYXNlICd5eSc6IC8vIDkgeWVhcnMgLyBpbiA5IHllYXJzIC8gOSB5ZWFycyBhZ29cbiAgICAgIGlmICh3aXRob3V0U3VmZml4IHx8IGlzRnV0dXJlKSB7XG4gICAgICAgIHJldHVybiByZXN1bHQgKyAocGx1cmFsKG51bSkgPyAncm9reScgOiAnbGV0Jyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcmVzdWx0ICsgJ2xldHknO1xuICAgICAgfVxuICAgIC8vIGJyZWFrO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBjc0xvY2FsZTogTG9jYWxlRGF0YSA9IHtcbiAgYWJicjogJ2NzJyxcbiAgbW9udGhzLFxuICBtb250aHNTaG9ydCxcbiAgbW9udGhzUGFyc2U6IChmdW5jdGlvbiAobW9udGhzLCBtb250aHNTaG9ydCkge1xuICAgIGxldCBpLCBfbW9udGhzUGFyc2UgPSBbXTtcbiAgICBmb3IgKGkgPSAwOyBpIDwgMTI7IGkrKykge1xuICAgICAgLy8gdXNlIGN1c3RvbSBwYXJzZXIgdG8gc29sdmUgcHJvYmxlbSB3aXRoIEp1bHkgKMOEwo1lcnZlbmVjKVxuICAgICAgX21vbnRoc1BhcnNlW2ldID0gbmV3IFJlZ0V4cCgnXicgKyBtb250aHNbaV0gKyAnJHxeJyArIG1vbnRoc1Nob3J0W2ldICsgJyQnLCAnaScpO1xuICAgIH1cbiAgICByZXR1cm4gX21vbnRoc1BhcnNlO1xuICB9KG1vbnRocywgbW9udGhzU2hvcnQpKSxcbiAgc2hvcnRNb250aHNQYXJzZTogKGZ1bmN0aW9uIChtb250aHNTaG9ydCkge1xuICAgIGxldCBpLCBfc2hvcnRNb250aHNQYXJzZSA9IFtdO1xuICAgIGZvciAoaSA9IDA7IGkgPCAxMjsgaSsrKSB7XG4gICAgICBfc2hvcnRNb250aHNQYXJzZVtpXSA9IG5ldyBSZWdFeHAoJ14nICsgbW9udGhzU2hvcnRbaV0gKyAnJCcsICdpJyk7XG4gICAgfVxuICAgIHJldHVybiBfc2hvcnRNb250aHNQYXJzZTtcbiAgfShtb250aHNTaG9ydCkpLFxuICBsb25nTW9udGhzUGFyc2U6IChmdW5jdGlvbiAobW9udGhzKSB7XG4gICAgbGV0IGksIF9sb25nTW9udGhzUGFyc2UgPSBbXTtcbiAgICBmb3IgKGkgPSAwOyBpIDwgMTI7IGkrKykge1xuICAgICAgX2xvbmdNb250aHNQYXJzZVtpXSA9IG5ldyBSZWdFeHAoJ14nICsgbW9udGhzW2ldICsgJyQnLCAnaScpO1xuICAgIH1cbiAgICByZXR1cm4gX2xvbmdNb250aHNQYXJzZTtcbiAgfShtb250aHMpKSxcbiAgd2Vla2RheXM6ICduZWTDhMKbbGVfcG9uZMOEwptsw4PCrV/Dg8K6dGVyw4PCvV9zdMOFwpllZGFfw4TCjXR2cnRla19ww4PCoXRla19zb2JvdGEnLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzU2hvcnQ6ICduZV9wb1/Dg8K6dF9zdF/DhMKNdF9ww4PCoV9zbycuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNNaW46ICduZV9wb1/Dg8K6dF9zdF/DhMKNdF9ww4PCoV9zbycuc3BsaXQoJ18nKSxcbiAgbG9uZ0RhdGVGb3JtYXQ6IHtcbiAgICBMVDogJ0g6bW0nLFxuICAgIExUUzogJ0g6bW06c3MnLFxuICAgIEw6ICdERC5NTS5ZWVlZJyxcbiAgICBMTDogJ0QuIE1NTU0gWVlZWScsXG4gICAgTExMOiAnRC4gTU1NTSBZWVlZIEg6bW0nLFxuICAgIExMTEw6ICdkZGRkIEQuIE1NTU0gWVlZWSBIOm1tJyxcbiAgICBsOiAnRC4gTS4gWVlZWSdcbiAgfSxcbiAgY2FsZW5kYXI6IHtcbiAgICBzYW1lRGF5OiAnW2RuZXMgdl0gTFQnLFxuICAgIG5leHREYXk6ICdbesODwq10cmEgdl0gTFQnLFxuICAgIG5leHRXZWVrKGRhdGU6IERhdGUpOiBzdHJpbmcge1xuICAgICAgc3dpdGNoIChnZXREYXlPZldlZWsoZGF0ZSkpIHtcbiAgICAgICAgY2FzZSAwOlxuICAgICAgICAgIHJldHVybiAnW3YgbmVkw4TCm2xpIHZdIExUJztcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgcmV0dXJuICdbdl0gZGRkZCBbdl0gTFQnO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgcmV0dXJuICdbdmUgc3TDhcKZZWR1IHZdIExUJztcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIHJldHVybiAnW3ZlIMOEwo10dnJ0ZWsgdl0gTFQnO1xuICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgcmV0dXJuICdbdiBww4PCoXRlayB2XSBMVCc7XG4gICAgICAgIGNhc2UgNjpcbiAgICAgICAgICByZXR1cm4gJ1t2IHNvYm90dSB2XSBMVCc7XG4gICAgICB9XG4gICAgfSxcbiAgICBsYXN0RGF5OiAnW3bDhMKNZXJhIHZdIExUJyxcbiAgICBsYXN0V2VlayhkYXRlOiBEYXRlKTogc3RyaW5nIHtcbiAgICAgIHN3aXRjaCAoZ2V0RGF5T2ZXZWVrKGRhdGUpKSB7XG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgICByZXR1cm4gJ1ttaW51bG91IG5lZMOEwptsaSB2XSBMVCc7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIHJldHVybiAnW21pbnVsw4PCqV0gZGRkZCBbdl0gTFQnO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgcmV0dXJuICdbbWludWxvdSBzdMOFwpllZHUgdl0gTFQnO1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgIGNhc2UgNTpcbiAgICAgICAgICByZXR1cm4gJ1ttaW51bMODwr1dIGRkZGQgW3ZdIExUJztcbiAgICAgICAgY2FzZSA2OlxuICAgICAgICAgIHJldHVybiAnW21pbnVsb3Ugc29ib3R1IHZdIExUJztcbiAgICAgIH1cbiAgICB9LFxuICAgIHNhbWVFbHNlOiAnTCdcbiAgfSxcbiAgcmVsYXRpdmVUaW1lOiB7XG4gICAgZnV0dXJlOiAnemEgJXMnLFxuICAgIHBhc3Q6ICdww4XCmWVkICVzJyxcbiAgICBzOiB0cmFuc2xhdGUsXG4gICAgc3M6IHRyYW5zbGF0ZSxcbiAgICBtOiB0cmFuc2xhdGUsXG4gICAgbW06IHRyYW5zbGF0ZSxcbiAgICBoOiB0cmFuc2xhdGUsXG4gICAgaGg6IHRyYW5zbGF0ZSxcbiAgICBkOiB0cmFuc2xhdGUsXG4gICAgZGQ6IHRyYW5zbGF0ZSxcbiAgICBNOiB0cmFuc2xhdGUsXG4gICAgTU06IHRyYW5zbGF0ZSxcbiAgICB5OiB0cmFuc2xhdGUsXG4gICAgeXk6IHRyYW5zbGF0ZVxuICB9LFxuICBkYXlPZk1vbnRoT3JkaW5hbFBhcnNlOiAvXFxkezEsMn1cXC4vLFxuICBvcmRpbmFsOiAnJWQuJyxcbiAgd2Vlazoge1xuICAgIGRvdzogMSwgLy8gTW9uZGF5IGlzIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsuXG4gICAgZG95OiA0ICAvLyBUaGUgd2VlayB0aGF0IGNvbnRhaW5zIEphbiA0dGggaXMgdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHllYXIuXG4gIH1cbn07XG5cbiIsIi8vIHRzbGludDpkaXNhYmxlOmNvbW1lbnQtZm9ybWF0XG5cbmltcG9ydCB7IExvY2FsZURhdGEgfSBmcm9tICcuLi9sb2NhbGUvbG9jYWxlLmNsYXNzJztcblxuLy8hIG1vbWVudC5qcyBsb2NhbGUgY29uZmlndXJhdGlvblxuLy8hIGxvY2FsZSA6IERhbmlzaCAoRGVubWFyaykgW2RhXVxuLy8hIGF1dGhvciA6IFBlciBIYW5zZW4gOiBodHRwczovL2dpdGh1Yi5jb20vcGVyaHBcblxuZXhwb3J0IGNvbnN0IGRhTG9jYWxlOiBMb2NhbGVEYXRhID0ge1xuICBhYmJyOiAnZGEnLFxuICBtb250aHMgOiAnSmFudWFyX0ZlYnJ1YXJfTWFydHNfQXByaWxfTWFqX0p1bmlfSnVsaV9BdWd1c3RfU2VwdGVtYmVyX09rdG9iZXJfTm92ZW1iZXJfRGVjZW1iZXInLnNwbGl0KCdfJyksXG4gIG1vbnRoc1Nob3J0IDogJ0phbl9GZWJfTWFyX0Fwcl9NYWpfSnVuX0p1bF9BdWdfU2VwX09rdF9Ob3ZfRGVjJy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5cyA6ICdTw4PCuG5kYWdfTWFuZGFnX1RpcnNkYWdfT25zZGFnX1RvcnNkYWdfRnJlZGFnX0zDg8K4cmRhZycuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNTaG9ydCA6ICdTw4PCuG5fTWFuX1Rpcl9PbnNfVG9yX0ZyZV9Mw4PCuHInLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzTWluIDogJ1PDg8K4X01hX1RpX09uX1RvX0ZyX0zDg8K4Jy5zcGxpdCgnXycpLFxuICBsb25nRGF0ZUZvcm1hdCA6IHtcbiAgICAgIExUIDogJ0hIOm1tJyxcbiAgICAgIExUUyA6ICdISDptbTpzcycsXG4gICAgICBMIDogJ0REL01NL1lZWVknLFxuICAgICAgTEwgOiAnRC4gTU1NTSBZWVlZJyxcbiAgICAgIExMTCA6ICdELiBNTU1NIFlZWVkgSEg6bW0nLFxuICAgICAgTExMTCA6ICdkZGRkIFtkLl0gRC4gTU1NTSBZWVlZIFtrbC5dIEhIOm1tJ1xuICB9LFxuICBjYWxlbmRhciA6IHtcbiAgICAgIHNhbWVEYXkgOiAnW2kgZGFnIGtsLl0gTFQnLFxuICAgICAgbmV4dERheSA6ICdbaSBtb3JnZW4ga2wuXSBMVCcsXG4gICAgICBuZXh0V2VlayA6ICdww4PCpSBkZGRkIFtrbC5dIExUJyxcbiAgICAgIGxhc3REYXkgOiAnW2kgZ8ODwqVyIGtsLl0gTFQnLFxuICAgICAgbGFzdFdlZWsgOiAnW2ldIGRkZGRbcyBrbC5dIExUJyxcbiAgICAgIHNhbWVFbHNlIDogJ0wnXG4gIH0sXG4gIHJlbGF0aXZlVGltZSA6IHtcbiAgICAgIGZ1dHVyZSA6ICdvbSAlcycsXG4gICAgICBwYXN0IDogJyVzIHNpZGVuJyxcbiAgICAgIHMgOiAnZsODwqUgc2VrdW5kZXInLFxuICAgICAgbSA6ICdldCBtaW51dCcsXG4gICAgICBtbSA6ICclZCBtaW51dHRlcicsXG4gICAgICBoIDogJ2VuIHRpbWUnLFxuICAgICAgaGggOiAnJWQgdGltZXInLFxuICAgICAgZCA6ICdlbiBkYWcnLFxuICAgICAgZGQgOiAnJWQgZGFnZScsXG4gICAgICBNIDogJ2VuIG3Dg8KlbmVkJyxcbiAgICAgIE1NIDogJyVkIG3Dg8KlbmVkZXInLFxuICAgICAgeSA6ICdldCDDg8KlcicsXG4gICAgICB5eSA6ICclZCDDg8KlcidcbiAgfSxcbiAgZGF5T2ZNb250aE9yZGluYWxQYXJzZTogL1xcZHsxLDJ9XFwuLyxcbiAgb3JkaW5hbCA6ICclZC4nLFxuICB3ZWVrIDoge1xuICAgICAgZG93IDogMSwgLy8gTW9uZGF5IGlzIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsuXG4gICAgICBkb3kgOiA0ICAvLyBUaGUgd2VlayB0aGF0IGNvbnRhaW5zIEphbiA0dGggaXMgdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHllYXIuXG4gIH1cbn07XG5cbiIsIi8vIHRzbGludDpkaXNhYmxlOmNvbW1lbnQtZm9ybWF0IGJpbmFyeS1leHByZXNzaW9uLW9wZXJhbmQtb3JkZXIgbWF4LWxpbmUtbGVuZ3RoXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1iaXR3aXNlIHByZWZlci10ZW1wbGF0ZSBjeWNsb21hdGljLWNvbXBsZXhpdHlcbi8vIHRzbGludDpkaXNhYmxlOm5vLXNoYWRvd2VkLXZhcmlhYmxlIHN3aXRjaC1kZWZhdWx0IHByZWZlci1jb25zdFxuLy8gdHNsaW50OmRpc2FibGU6b25lLXZhcmlhYmxlLXBlci1kZWNsYXJhdGlvbiBuZXdsaW5lLWJlZm9yZS1yZXR1cm5cbi8vIHRzbGludDpkaXNhYmxlOm9iamVjdC1saXRlcmFsLWtleS1xdW90ZXNcblxuaW1wb3J0IHsgTG9jYWxlRGF0YSB9IGZyb20gJy4uL2xvY2FsZS9sb2NhbGUuY2xhc3MnO1xuXG4vLyEgbW9tZW50LmpzIGxvY2FsZSBjb25maWd1cmF0aW9uXG4vLyEgbG9jYWxlIDogR2VybWFuIFtkZV1cbi8vISBhdXRob3IgOiBsbHVjaHMgOiBodHRwczovL2dpdGh1Yi5jb20vbGx1Y2hzXG4vLyEgYXV0aG9yOiBNZW5lbGlvbiBFbGVuc8ODwrpsZTogaHR0cHM6Ly9naXRodWIuY29tL09pcmVcbi8vISBhdXRob3IgOiBNaWtvbGFqIERhZGVsYSA6IGh0dHBzOi8vZ2l0aHViLmNvbS9taWswMWFqXG5cbmZ1bmN0aW9uIHByb2Nlc3NSZWxhdGl2ZVRpbWUobnVtOiBudW1iZXIsIHdpdGhvdXRTdWZmaXg6IGJvb2xlYW4sIGtleTogc3RyaW5nLCBpc0Z1dHVyZTogYm9vbGVhbik6IHN0cmluZyB7XG4gIGNvbnN0IGZvcm1hdDogeyBba2V5OiBzdHJpbmddOiBbc3RyaW5nLCBzdHJpbmddIH0gPSB7XG4gICAgJ20nOiBbJ2VpbmUgTWludXRlJywgJ2VpbmVyIE1pbnV0ZSddLFxuICAgICdoJzogWydlaW5lIFN0dW5kZScsICdlaW5lciBTdHVuZGUnXSxcbiAgICAnZCc6IFsnZWluIFRhZycsICdlaW5lbSBUYWcnXSxcbiAgICAnZGQnOiBbbnVtICsgJyBUYWdlJywgbnVtICsgJyBUYWdlbiddLFxuICAgICdNJzogWydlaW4gTW9uYXQnLCAnZWluZW0gTW9uYXQnXSxcbiAgICAnTU0nOiBbbnVtICsgJyBNb25hdGUnLCBudW0gKyAnIE1vbmF0ZW4nXSxcbiAgICAneSc6IFsnZWluIEphaHInLCAnZWluZW0gSmFociddLFxuICAgICd5eSc6IFtudW0gKyAnIEphaHJlJywgbnVtICsgJyBKYWhyZW4nXVxuICB9O1xuICByZXR1cm4gd2l0aG91dFN1ZmZpeCA/IGZvcm1hdFtrZXldWzBdIDogZm9ybWF0W2tleV1bMV07XG59XG5cbmV4cG9ydCBjb25zdCBkZUxvY2FsZTogTG9jYWxlRGF0YSA9IHtcbiAgYWJicjogJ2RlJyxcbiAgbW9udGhzOiAnSmFudWFyX0ZlYnJ1YXJfTcODwqRyel9BcHJpbF9NYWlfSnVuaV9KdWxpX0F1Z3VzdF9TZXB0ZW1iZXJfT2t0b2Jlcl9Ob3ZlbWJlcl9EZXplbWJlcicuc3BsaXQoJ18nKSxcbiAgbW9udGhzU2hvcnQ6ICdKYW4uX0ZlYi5fTcODwqRyel9BcHIuX01haV9KdW5pX0p1bGlfQXVnLl9TZXAuX09rdC5fTm92Ll9EZXouJy5zcGxpdCgnXycpLFxuICBtb250aHNQYXJzZUV4YWN0OiB0cnVlLFxuICB3ZWVrZGF5czogJ1Nvbm50YWdfTW9udGFnX0RpZW5zdGFnX01pdHR3b2NoX0Rvbm5lcnN0YWdfRnJlaXRhZ19TYW1zdGFnJy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5c1Nob3J0OiAnU28uX01vLl9EaS5fTWkuX0RvLl9Gci5fU2EuJy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5c01pbjogJ1NvX01vX0RpX01pX0RvX0ZyX1NhJy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5c1BhcnNlRXhhY3Q6IHRydWUsXG4gIGxvbmdEYXRlRm9ybWF0OiB7XG4gICAgTFQ6ICdISDptbScsXG4gICAgTFRTOiAnSEg6bW06c3MnLFxuICAgIEw6ICdERC5NTS5ZWVlZJyxcbiAgICBMTDogJ0QuIE1NTU0gWVlZWScsXG4gICAgTExMOiAnRC4gTU1NTSBZWVlZIEhIOm1tJyxcbiAgICBMTExMOiAnZGRkZCwgRC4gTU1NTSBZWVlZIEhIOm1tJ1xuICB9LFxuICBjYWxlbmRhcjoge1xuICAgIHNhbWVEYXk6ICdbaGV1dGUgdW1dIExUIFtVaHJdJyxcbiAgICBzYW1lRWxzZTogJ0wnLFxuICAgIG5leHREYXk6ICdbbW9yZ2VuIHVtXSBMVCBbVWhyXScsXG4gICAgbmV4dFdlZWs6ICdkZGRkIFt1bV0gTFQgW1Vocl0nLFxuICAgIGxhc3REYXk6ICdbZ2VzdGVybiB1bV0gTFQgW1Vocl0nLFxuICAgIGxhc3RXZWVrOiAnW2xldHp0ZW5dIGRkZGQgW3VtXSBMVCBbVWhyXSdcbiAgfSxcbiAgcmVsYXRpdmVUaW1lOiB7XG4gICAgZnV0dXJlOiAnaW4gJXMnLFxuICAgIHBhc3Q6ICd2b3IgJXMnLFxuICAgIHM6ICdlaW4gcGFhciBTZWt1bmRlbicsXG4gICAgc3M6ICclZCBTZWt1bmRlbicsXG4gICAgbTogcHJvY2Vzc1JlbGF0aXZlVGltZSxcbiAgICBtbTogJyVkIE1pbnV0ZW4nLFxuICAgIGg6IHByb2Nlc3NSZWxhdGl2ZVRpbWUsXG4gICAgaGg6ICclZCBTdHVuZGVuJyxcbiAgICBkOiBwcm9jZXNzUmVsYXRpdmVUaW1lLFxuICAgIGRkOiBwcm9jZXNzUmVsYXRpdmVUaW1lLFxuICAgIE06IHByb2Nlc3NSZWxhdGl2ZVRpbWUsXG4gICAgTU06IHByb2Nlc3NSZWxhdGl2ZVRpbWUsXG4gICAgeTogcHJvY2Vzc1JlbGF0aXZlVGltZSxcbiAgICB5eTogcHJvY2Vzc1JlbGF0aXZlVGltZVxuICB9LFxuICBkYXlPZk1vbnRoT3JkaW5hbFBhcnNlOiAvXFxkezEsMn1cXC4vLFxuICBvcmRpbmFsOiAnJWQuJyxcbiAgd2Vlazoge1xuICAgIGRvdzogMSwgLy8gTW9uZGF5IGlzIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsuXG4gICAgZG95OiA0ICAvLyBUaGUgd2VlayB0aGF0IGNvbnRhaW5zIEphbiA0dGggaXMgdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHllYXIuXG4gIH1cbn07XG4iLCIvLyB0c2xpbnQ6ZGlzYWJsZTpjb21tZW50LWZvcm1hdCBiaW5hcnktZXhwcmVzc2lvbi1vcGVyYW5kLW9yZGVyIG1heC1saW5lLWxlbmd0aFxuLy8gdHNsaW50OmRpc2FibGU6bm8tYml0d2lzZSBwcmVmZXItdGVtcGxhdGUgY3ljbG9tYXRpYy1jb21wbGV4aXR5XG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1zaGFkb3dlZC12YXJpYWJsZSBzd2l0Y2gtZGVmYXVsdCBwcmVmZXItY29uc3Rcbi8vIHRzbGludDpkaXNhYmxlOm9uZS12YXJpYWJsZS1wZXItZGVjbGFyYXRpb24gbmV3bGluZS1iZWZvcmUtcmV0dXJuXG5cbmltcG9ydCB7IExvY2FsZURhdGEgfSBmcm9tICcuLi9sb2NhbGUvbG9jYWxlLmNsYXNzJztcblxuLy8hIG1vbWVudC5qcyBsb2NhbGUgY29uZmlndXJhdGlvblxuLy8hIGxvY2FsZSA6IEVuZ2xpc2ggKFVuaXRlZCBLaW5nZG9tKSBbZW4tZ2JdXG4vLyEgYXV0aG9yIDogQ2hyaXMgR2VkcmltIDogaHR0cHM6Ly9naXRodWIuY29tL2NocmlzZ2VkcmltXG5cbmV4cG9ydCBjb25zdCBlbkdiTG9jYWxlOiBMb2NhbGVEYXRhID0ge1xuICBhYmJyOiAnZW4tZ2InLFxuICBtb250aHMgOiAnSmFudWFyeV9GZWJydWFyeV9NYXJjaF9BcHJpbF9NYXlfSnVuZV9KdWx5X0F1Z3VzdF9TZXB0ZW1iZXJfT2N0b2Jlcl9Ob3ZlbWJlcl9EZWNlbWJlcicuc3BsaXQoJ18nKSxcbiAgbW9udGhzU2hvcnQgOiAnSmFuX0ZlYl9NYXJfQXByX01heV9KdW5fSnVsX0F1Z19TZXBfT2N0X05vdl9EZWMnLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzIDogJ1N1bmRheV9Nb25kYXlfVHVlc2RheV9XZWRuZXNkYXlfVGh1cnNkYXlfRnJpZGF5X1NhdHVyZGF5Jy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5c1Nob3J0IDogJ1N1bl9Nb25fVHVlX1dlZF9UaHVfRnJpX1NhdCcuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNNaW4gOiAnU3VfTW9fVHVfV2VfVGhfRnJfU2EnLnNwbGl0KCdfJyksXG4gIGxvbmdEYXRlRm9ybWF0IDoge1xuICAgIExUIDogJ0hIOm1tJyxcbiAgICBMVFMgOiAnSEg6bW06c3MnLFxuICAgIEwgOiAnREQvTU0vWVlZWScsXG4gICAgTEwgOiAnRCBNTU1NIFlZWVknLFxuICAgIExMTCA6ICdEIE1NTU0gWVlZWSBISDptbScsXG4gICAgTExMTCA6ICdkZGRkLCBEIE1NTU0gWVlZWSBISDptbSdcbiAgfSxcbiAgY2FsZW5kYXIgOiB7XG4gICAgc2FtZURheSA6ICdbVG9kYXkgYXRdIExUJyxcbiAgICBuZXh0RGF5IDogJ1tUb21vcnJvdyBhdF0gTFQnLFxuICAgIG5leHRXZWVrIDogJ2RkZGQgW2F0XSBMVCcsXG4gICAgbGFzdERheSA6ICdbWWVzdGVyZGF5IGF0XSBMVCcsXG4gICAgbGFzdFdlZWsgOiAnW0xhc3RdIGRkZGQgW2F0XSBMVCcsXG4gICAgc2FtZUVsc2UgOiAnTCdcbiAgfSxcbiAgcmVsYXRpdmVUaW1lIDoge1xuICAgIGZ1dHVyZSA6ICdpbiAlcycsXG4gICAgcGFzdCA6ICclcyBhZ28nLFxuICAgIHMgOiAnYSBmZXcgc2Vjb25kcycsXG4gICAgc3MgOiAnJWQgc2Vjb25kcycsXG4gICAgbSA6ICdhIG1pbnV0ZScsXG4gICAgbW0gOiAnJWQgbWludXRlcycsXG4gICAgaCA6ICdhbiBob3VyJyxcbiAgICBoaCA6ICclZCBob3VycycsXG4gICAgZCA6ICdhIGRheScsXG4gICAgZGQgOiAnJWQgZGF5cycsXG4gICAgTSA6ICdhIG1vbnRoJyxcbiAgICBNTSA6ICclZCBtb250aHMnLFxuICAgIHkgOiAnYSB5ZWFyJyxcbiAgICB5eSA6ICclZCB5ZWFycydcbiAgfSxcbiAgZGF5T2ZNb250aE9yZGluYWxQYXJzZTogL1xcZHsxLDJ9KHN0fG5kfHJkfHRoKS8sXG4gIG9yZGluYWwoX251bTogbnVtYmVyKTogc3RyaW5nIHtcbiAgICBjb25zdCBudW0gPSBOdW1iZXIoX251bSk7XG4gICAgY29uc3QgYiA9IG51bSAlIDEwLFxuICAgICAgb3V0cHV0ID0gKH5+KG51bSAlIDEwMCAvIDEwKSA9PT0gMSkgPyAndGgnIDpcbiAgICAgICAgKGIgPT09IDEpID8gJ3N0JyA6XG4gICAgICAgICAgKGIgPT09IDIpID8gJ25kJyA6XG4gICAgICAgICAgICAoYiA9PT0gMykgPyAncmQnIDogJ3RoJztcbiAgICByZXR1cm4gbnVtICsgb3V0cHV0O1xuICB9LFxuICB3ZWVrIDoge1xuICAgIGRvdyA6IDEsIC8vIE1vbmRheSBpcyB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrLlxuICAgIGRveSA6IDQgIC8vIFRoZSB3ZWVrIHRoYXQgY29udGFpbnMgSmFuIDR0aCBpcyB0aGUgZmlyc3Qgd2VlayBvZiB0aGUgeWVhci5cbiAgfVxufTtcblxuIiwiLy8gdHNsaW50OmRpc2FibGU6Y29tbWVudC1mb3JtYXQgYmluYXJ5LWV4cHJlc3Npb24tb3BlcmFuZC1vcmRlciBtYXgtbGluZS1sZW5ndGhcbi8vIHRzbGludDpkaXNhYmxlOm5vLWJpdHdpc2UgcHJlZmVyLXRlbXBsYXRlIGN5Y2xvbWF0aWMtY29tcGxleGl0eVxuLy8gdHNsaW50OmRpc2FibGU6bm8tc2hhZG93ZWQtdmFyaWFibGUgc3dpdGNoLWRlZmF1bHQgcHJlZmVyLWNvbnN0XG4vLyB0c2xpbnQ6ZGlzYWJsZTpvbmUtdmFyaWFibGUtcGVyLWRlY2xhcmF0aW9uIG5ld2xpbmUtYmVmb3JlLXJldHVyblxuXG5pbXBvcnQgeyBMb2NhbGVEYXRhIH0gZnJvbSAnLi4vbG9jYWxlL2xvY2FsZS5jbGFzcyc7XG5pbXBvcnQgeyBnZXRIb3VycywgZ2V0TW9udGggfSBmcm9tICcuLi91dGlscy9kYXRlLWdldHRlcnMnO1xuXG4vLyEgbW9tZW50LmpzIGxvY2FsZSBjb25maWd1cmF0aW9uXG4vLyEgbG9jYWxlIDogU3BhbmlzaCAoRG9taW5pY2FuIFJlcHVibGljKSBbZXMtZG9dXG5cbmxldCBtb250aHNTaG9ydERvdCA9ICdlbmUuX2ZlYi5fbWFyLl9hYnIuX21heS5fanVuLl9qdWwuX2Fnby5fc2VwLl9vY3QuX25vdi5fZGljLicuc3BsaXQoJ18nKSxcbiAgbW9udGhzU2hvcnQgPSAnZW5lX2ZlYl9tYXJfYWJyX21heV9qdW5fanVsX2Fnb19zZXBfb2N0X25vdl9kaWMnLnNwbGl0KCdfJyk7XG5cbmxldCBtb250aHNQYXJzZSA9IFsvXmVuZS9pLCAvXmZlYi9pLCAvXm1hci9pLCAvXmFici9pLCAvXm1heS9pLCAvXmp1bi9pLCAvXmp1bC9pLCAvXmFnby9pLCAvXnNlcC9pLCAvXm9jdC9pLCAvXm5vdi9pLCAvXmRpYy9pXTtcbmxldCBtb250aHNSZWdleCA9IC9eKGVuZXJvfGZlYnJlcm98bWFyem98YWJyaWx8bWF5b3xqdW5pb3xqdWxpb3xhZ29zdG98c2VwdGllbWJyZXxvY3R1YnJlfG5vdmllbWJyZXxkaWNpZW1icmV8ZW5lXFwuP3xmZWJcXC4/fG1hclxcLj98YWJyXFwuP3xtYXlcXC4/fGp1blxcLj98anVsXFwuP3xhZ29cXC4/fHNlcFxcLj98b2N0XFwuP3xub3ZcXC4/fGRpY1xcLj8pL2k7XG5cbmV4cG9ydCBjb25zdCBlc0RvTG9jYWxlOiBMb2NhbGVEYXRhID0ge1xuICBhYmJyOiAnZXMtZG8nLFxuICBtb250aHM6ICdlbmVyb19mZWJyZXJvX21hcnpvX2FicmlsX21heW9fanVuaW9fanVsaW9fYWdvc3RvX3NlcHRpZW1icmVfb2N0dWJyZV9ub3ZpZW1icmVfZGljaWVtYnJlJy5zcGxpdCgnXycpLFxuICBtb250aHNTaG9ydChkYXRlOiBEYXRlLCBmb3JtYXQ6IHN0cmluZywgaXNVVEM/OiBib29sZWFuKTogc3RyaW5nIHwgc3RyaW5nW10ge1xuICAgIGlmICghZGF0ZSkge1xuICAgICAgcmV0dXJuIG1vbnRoc1Nob3J0RG90O1xuICAgIH0gZWxzZSBpZiAoLy1NTU0tLy50ZXN0KGZvcm1hdCkpIHtcbiAgICAgIHJldHVybiBtb250aHNTaG9ydFtnZXRNb250aChkYXRlLCBpc1VUQyldO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbW9udGhzU2hvcnREb3RbZ2V0TW9udGgoZGF0ZSwgaXNVVEMpXTtcbiAgICB9XG4gIH0sXG4gIG1vbnRoc1JlZ2V4LFxuICBtb250aHNTaG9ydFJlZ2V4OiBtb250aHNSZWdleCxcbiAgbW9udGhzU3RyaWN0UmVnZXg6IC9eKGVuZXJvfGZlYnJlcm98bWFyem98YWJyaWx8bWF5b3xqdW5pb3xqdWxpb3xhZ29zdG98c2VwdGllbWJyZXxvY3R1YnJlfG5vdmllbWJyZXxkaWNpZW1icmUpL2ksXG4gIG1vbnRoc1Nob3J0U3RyaWN0UmVnZXg6IC9eKGVuZVxcLj98ZmViXFwuP3xtYXJcXC4/fGFiclxcLj98bWF5XFwuP3xqdW5cXC4/fGp1bFxcLj98YWdvXFwuP3xzZXBcXC4/fG9jdFxcLj98bm92XFwuP3xkaWNcXC4/KS9pLFxuICBtb250aHNQYXJzZSxcbiAgbG9uZ01vbnRoc1BhcnNlOiBtb250aHNQYXJzZSxcbiAgc2hvcnRNb250aHNQYXJzZTogbW9udGhzUGFyc2UsXG4gIHdlZWtkYXlzOiAnZG9taW5nb19sdW5lc19tYXJ0ZXNfbWnDg8KpcmNvbGVzX2p1ZXZlc192aWVybmVzX3PDg8KhYmFkbycuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNTaG9ydDogJ2RvbS5fbHVuLl9tYXIuX21pw4PCqS5fanVlLl92aWUuX3PDg8KhYi4nLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzTWluOiAnZG9fbHVfbWFfbWlfanVfdmlfc8ODwqEnLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzUGFyc2VFeGFjdDogdHJ1ZSxcbiAgbG9uZ0RhdGVGb3JtYXQ6IHtcbiAgICBMVDogJ2g6bW0gQScsXG4gICAgTFRTOiAnaDptbTpzcyBBJyxcbiAgICBMOiAnREQvTU0vWVlZWScsXG4gICAgTEw6ICdEIFtkZV0gTU1NTSBbZGVdIFlZWVknLFxuICAgIExMTDogJ0QgW2RlXSBNTU1NIFtkZV0gWVlZWSBoOm1tIEEnLFxuICAgIExMTEw6ICdkZGRkLCBEIFtkZV0gTU1NTSBbZGVdIFlZWVkgaDptbSBBJ1xuICB9LFxuICBjYWxlbmRhcjoge1xuICAgIHNhbWVEYXkoZGF0ZTogRGF0ZSk6IHN0cmluZyB7XG4gICAgICByZXR1cm4gJ1tob3kgYSBsYScgKyAoKGdldEhvdXJzKGRhdGUpICE9PSAxKSA/ICdzJyA6ICcnKSArICddIExUJztcbiAgICB9LFxuICAgIG5leHREYXkoZGF0ZTogRGF0ZSk6IHN0cmluZyB7XG4gICAgICByZXR1cm4gJ1ttYcODwrFhbmEgYSBsYScgKyAoKGdldEhvdXJzKGRhdGUpICE9PSAxKSA/ICdzJyA6ICcnKSArICddIExUJztcbiAgICB9LFxuICAgIG5leHRXZWVrKGRhdGU6IERhdGUpOiBzdHJpbmcge1xuICAgICAgcmV0dXJuICdkZGRkIFthIGxhJyArICgoZ2V0SG91cnMoZGF0ZSkgIT09IDEpID8gJ3MnIDogJycpICsgJ10gTFQnO1xuICAgIH0sXG4gICAgbGFzdERheShkYXRlOiBEYXRlKTogc3RyaW5nIHtcbiAgICAgIHJldHVybiAnW2F5ZXIgYSBsYScgKyAoKGdldEhvdXJzKGRhdGUpICE9PSAxKSA/ICdzJyA6ICcnKSArICddIExUJztcbiAgICB9LFxuICAgIGxhc3RXZWVrKGRhdGU6IERhdGUpOiBzdHJpbmcge1xuICAgICAgcmV0dXJuICdbZWxdIGRkZGQgW3Bhc2FkbyBhIGxhJyArICgoZ2V0SG91cnMoZGF0ZSkgIT09IDEpID8gJ3MnIDogJycpICsgJ10gTFQnO1xuICAgIH0sXG4gICAgc2FtZUVsc2U6ICdMJ1xuICB9LFxuICByZWxhdGl2ZVRpbWU6IHtcbiAgICBmdXR1cmU6ICdlbiAlcycsXG4gICAgcGFzdDogJ2hhY2UgJXMnLFxuICAgIHM6ICd1bm9zIHNlZ3VuZG9zJyxcbiAgICBzczogJyVkIHNlZ3VuZG9zJyxcbiAgICBtOiAndW4gbWludXRvJyxcbiAgICBtbTogJyVkIG1pbnV0b3MnLFxuICAgIGg6ICd1bmEgaG9yYScsXG4gICAgaGg6ICclZCBob3JhcycsXG4gICAgZDogJ3VuIGTDg8KtYScsXG4gICAgZGQ6ICclZCBkw4PCrWFzJyxcbiAgICBNOiAndW4gbWVzJyxcbiAgICBNTTogJyVkIG1lc2VzJyxcbiAgICB5OiAndW4gYcODwrFvJyxcbiAgICB5eTogJyVkIGHDg8Kxb3MnXG4gIH0sXG4gIGRheU9mTW9udGhPcmRpbmFsUGFyc2U6IC9cXGR7MSwyfcOCwrovLFxuICBvcmRpbmFsOiAnJWTDgsK6JyxcbiAgd2Vlazoge1xuICAgIGRvdzogMSwgLy8gTW9uZGF5IGlzIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsuXG4gICAgZG95OiA0ICAvLyBUaGUgd2VlayB0aGF0IGNvbnRhaW5zIEphbiA0dGggaXMgdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHllYXIuXG4gIH1cbn07XG4iLCIvLyB0c2xpbnQ6ZGlzYWJsZTpjb21tZW50LWZvcm1hdCBiaW5hcnktZXhwcmVzc2lvbi1vcGVyYW5kLW9yZGVyIG1heC1saW5lLWxlbmd0aFxuLy8gdHNsaW50OmRpc2FibGU6bm8tYml0d2lzZSBwcmVmZXItdGVtcGxhdGUgY3ljbG9tYXRpYy1jb21wbGV4aXR5XG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1zaGFkb3dlZC12YXJpYWJsZSBzd2l0Y2gtZGVmYXVsdCBwcmVmZXItY29uc3Rcbi8vIHRzbGludDpkaXNhYmxlOm9uZS12YXJpYWJsZS1wZXItZGVjbGFyYXRpb24gbmV3bGluZS1iZWZvcmUtcmV0dXJuXG5cbmltcG9ydCB7IExvY2FsZURhdGEgfSBmcm9tICcuLi9sb2NhbGUvbG9jYWxlLmNsYXNzJztcbmltcG9ydCB7IGdldEhvdXJzLCBnZXRNb250aCB9IGZyb20gJy4uL3V0aWxzL2RhdGUtZ2V0dGVycyc7XG5cbi8vISBtb21lbnQuanMgbG9jYWxlIGNvbmZpZ3VyYXRpb25cbi8vISBsb2NhbGUgOiBTcGFuaXNoIFtlc11cbi8vISBhdXRob3IgOiBKdWxpbyBOYXB1csODwq0gOiBodHRwczovL2dpdGh1Yi5jb20vanVsaW9uY1xuXG5sZXQgbW9udGhzU2hvcnREb3QgPSAnZW5lLl9mZWIuX21hci5fYWJyLl9tYXkuX2p1bi5fanVsLl9hZ28uX3NlcC5fb2N0Ll9ub3YuX2RpYy4nLnNwbGl0KCdfJyksXG4gIG1vbnRoc1Nob3J0ID0gJ2VuZV9mZWJfbWFyX2Ficl9tYXlfanVuX2p1bF9hZ29fc2VwX29jdF9ub3ZfZGljJy5zcGxpdCgnXycpO1xuXG5sZXQgbW9udGhzUGFyc2UgPSBbL15lbmUvaSwgL15mZWIvaSwgL15tYXIvaSwgL15hYnIvaSwgL15tYXkvaSwgL15qdW4vaSwgL15qdWwvaSwgL15hZ28vaSwgL15zZXAvaSwgL15vY3QvaSwgL15ub3YvaSwgL15kaWMvaV07XG5sZXQgbW9udGhzUmVnZXggPSAvXihlbmVyb3xmZWJyZXJvfG1hcnpvfGFicmlsfG1heW98anVuaW98anVsaW98YWdvc3RvfHNlcHRpZW1icmV8b2N0dWJyZXxub3ZpZW1icmV8ZGljaWVtYnJlfGVuZVxcLj98ZmViXFwuP3xtYXJcXC4/fGFiclxcLj98bWF5XFwuP3xqdW5cXC4/fGp1bFxcLj98YWdvXFwuP3xzZXBcXC4/fG9jdFxcLj98bm92XFwuP3xkaWNcXC4/KS9pO1xuXG5leHBvcnQgY29uc3QgZXNMb2NhbGU6IExvY2FsZURhdGEgPSB7XG4gIGFiYnI6ICdlcycsXG4gIG1vbnRoczogJ2VuZXJvX2ZlYnJlcm9fbWFyem9fYWJyaWxfbWF5b19qdW5pb19qdWxpb19hZ29zdG9fc2VwdGllbWJyZV9vY3R1YnJlX25vdmllbWJyZV9kaWNpZW1icmUnLnNwbGl0KCdfJyksXG4gIG1vbnRoc1Nob3J0KGRhdGU6IERhdGUsIGZvcm1hdDogc3RyaW5nLCBpc1VUQz86IGJvb2xlYW4pOiBzdHJpbmcgfCBzdHJpbmdbXSB7XG4gICAgaWYgKCFkYXRlKSB7XG4gICAgICByZXR1cm4gbW9udGhzU2hvcnREb3Q7XG4gICAgfVxuXG4gICAgaWYgKC8tTU1NLS8udGVzdChmb3JtYXQpKSB7XG4gICAgICByZXR1cm4gbW9udGhzU2hvcnRbZ2V0TW9udGgoZGF0ZSwgaXNVVEMpXTtcbiAgICB9XG5cbiAgICByZXR1cm4gbW9udGhzU2hvcnREb3RbZ2V0TW9udGgoZGF0ZSwgaXNVVEMpXTtcbiAgfSxcbiAgbW9udGhzUmVnZXgsXG4gIG1vbnRoc1Nob3J0UmVnZXg6IG1vbnRoc1JlZ2V4LFxuICBtb250aHNTdHJpY3RSZWdleDogL14oZW5lcm98ZmVicmVyb3xtYXJ6b3xhYnJpbHxtYXlvfGp1bmlvfGp1bGlvfGFnb3N0b3xzZXB0aWVtYnJlfG9jdHVicmV8bm92aWVtYnJlfGRpY2llbWJyZSkvaSxcbiAgbW9udGhzU2hvcnRTdHJpY3RSZWdleDogL14oZW5lXFwuP3xmZWJcXC4/fG1hclxcLj98YWJyXFwuP3xtYXlcXC4/fGp1blxcLj98anVsXFwuP3xhZ29cXC4/fHNlcFxcLj98b2N0XFwuP3xub3ZcXC4/fGRpY1xcLj8pL2ksXG4gIG1vbnRoc1BhcnNlLFxuICBsb25nTW9udGhzUGFyc2U6IG1vbnRoc1BhcnNlLFxuICBzaG9ydE1vbnRoc1BhcnNlOiBtb250aHNQYXJzZSxcbiAgd2Vla2RheXM6ICdkb21pbmdvX2x1bmVzX21hcnRlc19tacODwqlyY29sZXNfanVldmVzX3ZpZXJuZXNfc8ODwqFiYWRvJy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5c1Nob3J0OiAnZG9tLl9sdW4uX21hci5fbWnDg8KpLl9qdWUuX3ZpZS5fc8ODwqFiLicuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNNaW46ICdkb19sdV9tYV9taV9qdV92aV9zw4PCoScuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNQYXJzZUV4YWN0OiB0cnVlLFxuICBsb25nRGF0ZUZvcm1hdDoge1xuICAgIExUOiAnSDptbScsXG4gICAgTFRTOiAnSDptbTpzcycsXG4gICAgTDogJ0REL01NL1lZWVknLFxuICAgIExMOiAnRCBbZGVdIE1NTU0gW2RlXSBZWVlZJyxcbiAgICBMTEw6ICdEIFtkZV0gTU1NTSBbZGVdIFlZWVkgSDptbScsXG4gICAgTExMTDogJ2RkZGQsIEQgW2RlXSBNTU1NIFtkZV0gWVlZWSBIOm1tJ1xuICB9LFxuICBjYWxlbmRhcjoge1xuICAgIHNhbWVEYXkoZGF0ZTogRGF0ZSkge1xuICAgICAgcmV0dXJuICdbaG95IGEgbGEnICsgKChnZXRIb3VycyhkYXRlKSAhPT0gMSkgPyAncycgOiAnJykgKyAnXSBMVCc7XG4gICAgfSxcbiAgICBuZXh0RGF5KGRhdGU6IERhdGUpIHtcbiAgICAgIHJldHVybiAnW21hw4PCsWFuYSBhIGxhJyArICgoZ2V0SG91cnMoZGF0ZSkgIT09IDEpID8gJ3MnIDogJycpICsgJ10gTFQnO1xuICAgIH0sXG4gICAgbmV4dFdlZWsoZGF0ZTogRGF0ZSkge1xuICAgICAgcmV0dXJuICdkZGRkIFthIGxhJyArICgoZ2V0SG91cnMoZGF0ZSkgIT09IDEpID8gJ3MnIDogJycpICsgJ10gTFQnO1xuICAgIH0sXG4gICAgbGFzdERheShkYXRlOiBEYXRlKSB7XG4gICAgICByZXR1cm4gJ1theWVyIGEgbGEnICsgKChnZXRIb3VycyhkYXRlKSAhPT0gMSkgPyAncycgOiAnJykgKyAnXSBMVCc7XG4gICAgfSxcbiAgICBsYXN0V2VlayhkYXRlOiBEYXRlKSB7XG4gICAgICByZXR1cm4gJ1tlbF0gZGRkZCBbcGFzYWRvIGEgbGEnICsgKChnZXRIb3VycyhkYXRlKSAhPT0gMSkgPyAncycgOiAnJykgKyAnXSBMVCc7XG4gICAgfSxcbiAgICBzYW1lRWxzZTogJ0wnXG4gIH0sXG4gIHJlbGF0aXZlVGltZToge1xuICAgIGZ1dHVyZTogJ2VuICVzJyxcbiAgICBwYXN0OiAnaGFjZSAlcycsXG4gICAgczogJ3Vub3Mgc2VndW5kb3MnLFxuICAgIHNzOiAnJWQgc2VndW5kb3MnLFxuICAgIG06ICd1biBtaW51dG8nLFxuICAgIG1tOiAnJWQgbWludXRvcycsXG4gICAgaDogJ3VuYSBob3JhJyxcbiAgICBoaDogJyVkIGhvcmFzJyxcbiAgICBkOiAndW4gZMODwq1hJyxcbiAgICBkZDogJyVkIGTDg8KtYXMnLFxuICAgIE06ICd1biBtZXMnLFxuICAgIE1NOiAnJWQgbWVzZXMnLFxuICAgIHk6ICd1biBhw4PCsW8nLFxuICAgIHl5OiAnJWQgYcODwrFvcydcbiAgfSxcbiAgZGF5T2ZNb250aE9yZGluYWxQYXJzZTogL1xcZHsxLDJ9w4LCui8sXG4gIG9yZGluYWw6ICclZMOCwronLFxuICB3ZWVrOiB7XG4gICAgZG93OiAxLCAvLyBNb25kYXkgaXMgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2Vlay5cbiAgICBkb3k6IDQgIC8vIFRoZSB3ZWVrIHRoYXQgY29udGFpbnMgSmFuIDR0aCBpcyB0aGUgZmlyc3Qgd2VlayBvZiB0aGUgeWVhci5cbiAgfVxufTtcbiIsIi8vIHRzbGludDpkaXNhYmxlOmNvbW1lbnQtZm9ybWF0IGJpbmFyeS1leHByZXNzaW9uLW9wZXJhbmQtb3JkZXIgbWF4LWxpbmUtbGVuZ3RoXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1iaXR3aXNlIHByZWZlci10ZW1wbGF0ZSBjeWNsb21hdGljLWNvbXBsZXhpdHlcbi8vIHRzbGludDpkaXNhYmxlOm5vLXNoYWRvd2VkLXZhcmlhYmxlIHN3aXRjaC1kZWZhdWx0IHByZWZlci1jb25zdFxuLy8gdHNsaW50OmRpc2FibGU6b25lLXZhcmlhYmxlLXBlci1kZWNsYXJhdGlvbiBuZXdsaW5lLWJlZm9yZS1yZXR1cm5cblxuaW1wb3J0IHsgTG9jYWxlRGF0YSB9IGZyb20gJy4uL2xvY2FsZS9sb2NhbGUuY2xhc3MnO1xuaW1wb3J0IHsgZ2V0SG91cnMsIGdldE1vbnRoIH0gZnJvbSAnLi4vdXRpbHMvZGF0ZS1nZXR0ZXJzJztcblxuLy8hIG1vbWVudC5qcyBsb2NhbGUgY29uZmlndXJhdGlvblxuLy8hIGxvY2FsZSA6IFNwYW5pc2ggKFVuaXRlZCBTdGF0ZXMpIFtlcy11c11cbi8vISBhdXRob3IgOiBidXN0dGEgOiBodHRwczovL2dpdGh1Yi5jb20vYnVzdHRhXG5cbmxldCBtb250aHNTaG9ydERvdCA9ICdlbmUuX2ZlYi5fbWFyLl9hYnIuX21heS5fanVuLl9qdWwuX2Fnby5fc2VwLl9vY3QuX25vdi5fZGljLicuc3BsaXQoJ18nKTtcbmxldCBtb250aHNTaG9ydCA9ICdlbmVfZmViX21hcl9hYnJfbWF5X2p1bl9qdWxfYWdvX3NlcF9vY3Rfbm92X2RpYycuc3BsaXQoJ18nKTtcblxuZXhwb3J0IGNvbnN0IGVzVXNMb2NhbGU6IExvY2FsZURhdGEgPSB7XG4gIGFiYnI6ICdlcy11cycsXG4gIG1vbnRoczogJ2VuZXJvX2ZlYnJlcm9fbWFyem9fYWJyaWxfbWF5b19qdW5pb19qdWxpb19hZ29zdG9fc2VwdGllbWJyZV9vY3R1YnJlX25vdmllbWJyZV9kaWNpZW1icmUnLnNwbGl0KCdfJyksXG4gIG1vbnRoc1Nob3J0KGRhdGU6IERhdGUsIGZvcm1hdDogc3RyaW5nLCBpc1VUQz86IGJvb2xlYW4pOiBzdHJpbmcgfCBzdHJpbmdbXSB7XG4gICAgaWYgKCFkYXRlKSB7XG4gICAgICByZXR1cm4gbW9udGhzU2hvcnREb3Q7XG4gICAgfSBlbHNlIGlmICgvLU1NTS0vLnRlc3QoZm9ybWF0KSkge1xuICAgICAgcmV0dXJuIG1vbnRoc1Nob3J0W2dldE1vbnRoKGRhdGUsIGlzVVRDKV07XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBtb250aHNTaG9ydERvdFtnZXRNb250aChkYXRlLCBpc1VUQyldO1xuICAgIH1cbiAgfSxcbiAgbW9udGhzUGFyc2VFeGFjdDogdHJ1ZSxcbiAgd2Vla2RheXM6ICdkb21pbmdvX2x1bmVzX21hcnRlc19tacODwqlyY29sZXNfanVldmVzX3ZpZXJuZXNfc8ODwqFiYWRvJy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5c1Nob3J0OiAnZG9tLl9sdW4uX21hci5fbWnDg8KpLl9qdWUuX3ZpZS5fc8ODwqFiLicuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNNaW46ICdkb19sdV9tYV9taV9qdV92aV9zw4PCoScuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNQYXJzZUV4YWN0OiB0cnVlLFxuICBsb25nRGF0ZUZvcm1hdDoge1xuICAgIExUOiAnaDptbSBBJyxcbiAgICBMVFM6ICdoOm1tOnNzIEEnLFxuICAgIEw6ICdNTS9ERC9ZWVlZJyxcbiAgICBMTDogJ01NTU0gW2RlXSBEIFtkZV0gWVlZWScsXG4gICAgTExMOiAnTU1NTSBbZGVdIEQgW2RlXSBZWVlZIGg6bW0gQScsXG4gICAgTExMTDogJ2RkZGQsIE1NTU0gW2RlXSBEIFtkZV0gWVlZWSBoOm1tIEEnXG4gIH0sXG4gIGNhbGVuZGFyOiB7XG4gICAgc2FtZURheShkYXRlOiBEYXRlKTogc3RyaW5nIHtcbiAgICAgIHJldHVybiAnW2hveSBhIGxhJyArICgoZ2V0SG91cnMoZGF0ZSkgIT09IDEpID8gJ3MnIDogJycpICsgJ10gTFQnO1xuICAgIH0sXG4gICAgbmV4dERheShkYXRlOiBEYXRlKTogc3RyaW5nIHtcbiAgICAgIHJldHVybiAnW21hw4PCsWFuYSBhIGxhJyArICgoZ2V0SG91cnMoZGF0ZSkgIT09IDEpID8gJ3MnIDogJycpICsgJ10gTFQnO1xuICAgIH0sXG4gICAgbmV4dFdlZWsoZGF0ZTogRGF0ZSk6IHN0cmluZyB7XG4gICAgICByZXR1cm4gJ2RkZGQgW2EgbGEnICsgKChnZXRIb3VycyhkYXRlKSAhPT0gMSkgPyAncycgOiAnJykgKyAnXSBMVCc7XG4gICAgfSxcbiAgICBsYXN0RGF5KGRhdGU6IERhdGUpOiBzdHJpbmcge1xuICAgICAgcmV0dXJuICdbYXllciBhIGxhJyArICgoZ2V0SG91cnMoZGF0ZSkgIT09IDEpID8gJ3MnIDogJycpICsgJ10gTFQnO1xuICAgIH0sXG4gICAgbGFzdFdlZWsoZGF0ZTogRGF0ZSk6IHN0cmluZyB7XG4gICAgICByZXR1cm4gJ1tlbF0gZGRkZCBbcGFzYWRvIGEgbGEnICsgKChnZXRIb3VycyhkYXRlKSAhPT0gMSkgPyAncycgOiAnJykgKyAnXSBMVCc7XG4gICAgfSxcbiAgICBzYW1lRWxzZTogJ0wnXG4gIH0sXG4gIHJlbGF0aXZlVGltZToge1xuICAgIGZ1dHVyZTogJ2VuICVzJyxcbiAgICBwYXN0OiAnaGFjZSAlcycsXG4gICAgczogJ3Vub3Mgc2VndW5kb3MnLFxuICAgIHNzOiAnJWQgc2VndW5kb3MnLFxuICAgIG06ICd1biBtaW51dG8nLFxuICAgIG1tOiAnJWQgbWludXRvcycsXG4gICAgaDogJ3VuYSBob3JhJyxcbiAgICBoaDogJyVkIGhvcmFzJyxcbiAgICBkOiAndW4gZMODwq1hJyxcbiAgICBkZDogJyVkIGTDg8KtYXMnLFxuICAgIE06ICd1biBtZXMnLFxuICAgIE1NOiAnJWQgbWVzZXMnLFxuICAgIHk6ICd1biBhw4PCsW8nLFxuICAgIHl5OiAnJWQgYcODwrFvcydcbiAgfSxcbiAgZGF5T2ZNb250aE9yZGluYWxQYXJzZTogL1xcZHsxLDJ9w4LCui8sXG4gIG9yZGluYWw6ICclZMOCwronLFxuICB3ZWVrOiB7XG4gICAgZG93OiAwLCAvLyBTdW5kYXkgaXMgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2Vlay5cbiAgICBkb3k6IDYgIC8vIFRoZSB3ZWVrIHRoYXQgY29udGFpbnMgSmFuIDFzdCBpcyB0aGUgZmlyc3Qgd2VlayBvZiB0aGUgeWVhci5cbiAgfVxufTtcbiIsIi8vIHRzbGludDpkaXNhYmxlOmNvbW1lbnQtZm9ybWF0IGJpbmFyeS1leHByZXNzaW9uLW9wZXJhbmQtb3JkZXIgbWF4LWxpbmUtbGVuZ3RoXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1iaXR3aXNlIHByZWZlci10ZW1wbGF0ZSBjeWNsb21hdGljLWNvbXBsZXhpdHlcbi8vIHRzbGludDpkaXNhYmxlOm5vLXNoYWRvd2VkLXZhcmlhYmxlIHN3aXRjaC1kZWZhdWx0IHByZWZlci1jb25zdFxuLy8gdHNsaW50OmRpc2FibGU6b25lLXZhcmlhYmxlLXBlci1kZWNsYXJhdGlvbiBuZXdsaW5lLWJlZm9yZS1yZXR1cm5cblxuaW1wb3J0IHsgTG9jYWxlRGF0YSB9IGZyb20gJy4uL2xvY2FsZS9sb2NhbGUuY2xhc3MnO1xuXG4vLyEgbW9tZW50LmpzIGxvY2FsZSBjb25maWd1cmF0aW9uXG4vLyBodHRwczovL2dpdGh1Yi5jb20vbW9tZW50L21vbWVudC9ibG9iL2RldmVsb3AvbG9jYWxlL2ZpLmpzXG5cbnZhciBudW1iZXJzUGFzdCA9ICdub2xsYSB5a3NpIGtha3NpIGtvbG1lIG5lbGrDg8KkIHZpaXNpIGt1dXNpIHNlaXRzZW3Dg8KkbiBrYWhkZWtzYW4geWhkZWtzw4PCpG4nLnNwbGl0KCcgJyksXG4gIG51bWJlcnNGdXR1cmUgPSBbXG4gICAgJ25vbGxhJywgJ3loZGVuJywgJ2thaGRlbicsICdrb2xtZW4nLCAnbmVsasODwqRuJywgJ3ZpaWRlbicsICdrdXVkZW4nLFxuICAgIG51bWJlcnNQYXN0WzddLCBudW1iZXJzUGFzdFs4XSwgbnVtYmVyc1Bhc3RbOV1cbiAgXTtcblxuZnVuY3Rpb24gdHJhbnNsYXRlKG51bTogbnVtYmVyLCB3aXRob3V0U3VmZml4OiBib29sZWFuLCBrZXk6IHN0cmluZywgaXNGdXR1cmU6IGJvb2xlYW4pOiBzdHJpbmcge1xuICB2YXIgcmVzdWx0ID0gJyc7XG4gIHN3aXRjaCAoa2V5KSB7XG4gICAgY2FzZSAncyc6XG4gICAgICByZXR1cm4gaXNGdXR1cmUgPyAnbXV1dGFtYW4gc2VrdW5uaW4nIDogJ211dXRhbWEgc2VrdW50aSc7XG4gICAgY2FzZSAnc3MnOlxuICAgICAgcmV0dXJuIGlzRnV0dXJlID8gJ3Nla3VubmluJyA6ICdzZWt1bnRpYSc7XG4gICAgY2FzZSAnbSc6XG4gICAgICByZXR1cm4gaXNGdXR1cmUgPyAnbWludXV0aW4nIDogJ21pbnV1dHRpJztcbiAgICBjYXNlICdtbSc6XG4gICAgICByZXN1bHQgPSBpc0Z1dHVyZSA/ICdtaW51dXRpbicgOiAnbWludXV0dGlhJztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ2gnOlxuICAgICAgcmV0dXJuIGlzRnV0dXJlID8gJ3R1bm5pbicgOiAndHVudGknO1xuICAgIGNhc2UgJ2hoJzpcbiAgICAgIHJlc3VsdCA9IGlzRnV0dXJlID8gJ3R1bm5pbicgOiAndHVudGlhJztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ2QnOlxuICAgICAgcmV0dXJuIGlzRnV0dXJlID8gJ3DDg8KkaXbDg8KkbicgOiAncMODwqRpdsODwqQnO1xuICAgIGNhc2UgJ2RkJzpcbiAgICAgIHJlc3VsdCA9IGlzRnV0dXJlID8gJ3DDg8KkaXbDg8KkbicgOiAncMODwqRpdsODwqTDg8KkJztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ00nOlxuICAgICAgcmV0dXJuIGlzRnV0dXJlID8gJ2t1dWthdWRlbicgOiAna3V1a2F1c2knO1xuICAgIGNhc2UgJ01NJzpcbiAgICAgIHJlc3VsdCA9IGlzRnV0dXJlID8gJ2t1dWthdWRlbicgOiAna3V1a2F1dHRhJztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3knOlxuICAgICAgcmV0dXJuIGlzRnV0dXJlID8gJ3Z1b2RlbicgOiAndnVvc2knO1xuICAgIGNhc2UgJ3l5JzpcbiAgICAgIHJlc3VsdCA9IGlzRnV0dXJlID8gJ3Z1b2RlbicgOiAndnVvdHRhJztcbiAgICAgIGJyZWFrO1xuICB9XG4gIHJlc3VsdCA9IHZlcmJhbE51bWJlcihudW0sIGlzRnV0dXJlKSArICcgJyArIHJlc3VsdDtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gdmVyYmFsTnVtYmVyKG51bTogbnVtYmVyLCBpc0Z1dHVyZTogYm9vbGVhbikge1xuICByZXR1cm4gbnVtIDwgMTAgPyAoaXNGdXR1cmUgPyBudW1iZXJzRnV0dXJlW251bV0gOiBudW1iZXJzUGFzdFtudW1dKSA6IG51bTtcbn1cblxuZXhwb3J0IGNvbnN0IGZpTG9jYWxlOiBMb2NhbGVEYXRhID0ge1xuICBhYmJyOiAnZmknLFxuICBtb250aHM6ICd0YW1taWt1dV9oZWxtaWt1dV9tYWFsaXNrdXVfaHVodGlrdXVfdG91a29rdXVfa2Vzw4PCpGt1dV9oZWluw4PCpGt1dV9lbG9rdXVfc3l5c2t1dV9sb2tha3V1X21hcnJhc2t1dV9qb3VsdWt1dScuc3BsaXQoJ18nKSxcbiAgbW9udGhzU2hvcnQ6ICd0YW1taV9oZWxtaV9tYWFsaXNfaHVodGlfdG91a29fa2Vzw4PCpF9oZWluw4PCpF9lbG9fc3l5c19sb2thX21hcnJhc19qb3VsdScuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXM6ICdzdW5udW50YWlfbWFhbmFudGFpX3RpaXN0YWlfa2Vza2l2aWlra29fdG9yc3RhaV9wZXJqYW50YWlfbGF1YW50YWknLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzU2hvcnQ6ICdzdV9tYV90aV9rZV90b19wZV9sYScuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNNaW46ICdzdV9tYV90aV9rZV90b19wZV9sYScuc3BsaXQoJ18nKSxcbiAgbG9uZ0RhdGVGb3JtYXQ6IHtcbiAgICBMVDogJ0hILm1tJyxcbiAgICBMVFM6ICdISC5tbS5zcycsXG4gICAgTDogJ0RELk1NLllZWVknLFxuICAgIExMOiAnRG8gTU1NTVt0YV0gWVlZWScsXG4gICAgTExMOiAnRG8gTU1NTVt0YV0gWVlZWSwgW2tsb10gSEgubW0nLFxuICAgIExMTEw6ICdkZGRkLCBEbyBNTU1NW3RhXSBZWVlZLCBba2xvXSBISC5tbScsXG4gICAgbDogJ0QuTS5ZWVlZJyxcbiAgICBsbDogJ0RvIE1NTSBZWVlZJyxcbiAgICBsbGw6ICdEbyBNTU0gWVlZWSwgW2tsb10gSEgubW0nLFxuICAgIGxsbGw6ICdkZGQsIERvIE1NTSBZWVlZLCBba2xvXSBISC5tbSdcbiAgfSxcbiAgY2FsZW5kYXI6IHtcbiAgICBzYW1lRGF5OiAnW3TDg8KkbsODwqTDg8Kkbl0gW2tsb10gTFQnLFxuICAgIG5leHREYXk6ICdbaHVvbWVubmFdIFtrbG9dIExUJyxcbiAgICBuZXh0V2VlazogJ2RkZGQgW2tsb10gTFQnLFxuICAgIGxhc3REYXk6ICdbZWlsZW5dIFtrbG9dIExUJyxcbiAgICBsYXN0V2VlazogJ1t2aWltZV0gZGRkZFtuYV0gW2tsb10gTFQnLFxuICAgIHNhbWVFbHNlOiAnTCdcbiAgfSxcbiAgcmVsYXRpdmVUaW1lOiB7XG4gICAgZnV0dXJlOiAnJXMgcMODwqTDg8Kkc3TDg8KkJyxcbiAgICBwYXN0OiAnJXMgc2l0dGVuJyxcbiAgICBzOiB0cmFuc2xhdGUsXG4gICAgc3M6IHRyYW5zbGF0ZSxcbiAgICBtOiB0cmFuc2xhdGUsXG4gICAgbW06IHRyYW5zbGF0ZSxcbiAgICBoOiB0cmFuc2xhdGUsXG4gICAgaGg6IHRyYW5zbGF0ZSxcbiAgICBkOiB0cmFuc2xhdGUsXG4gICAgZGQ6IHRyYW5zbGF0ZSxcbiAgICBNOiB0cmFuc2xhdGUsXG4gICAgTU06IHRyYW5zbGF0ZSxcbiAgICB5OiB0cmFuc2xhdGUsXG4gICAgeXk6IHRyYW5zbGF0ZVxuICB9LFxuICBkYXlPZk1vbnRoT3JkaW5hbFBhcnNlOiAvXFxkezEsMn1cXC4vLFxuICBvcmRpbmFsOiAnJWQuJyxcbiAgd2Vlazoge1xuICAgIGRvdzogMSwgLy8gTW9uZGF5IGlzIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsuXG4gICAgZG95OiA0ICAvLyBUaGUgd2VlayB0aGF0IGNvbnRhaW5zIEphbiA0dGggaXMgdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHllYXIuXG4gIH1cbn07XG4iLCIvLyB0c2xpbnQ6ZGlzYWJsZTpjb21tZW50LWZvcm1hdCBiaW5hcnktZXhwcmVzc2lvbi1vcGVyYW5kLW9yZGVyIG1heC1saW5lLWxlbmd0aFxuLy8gdHNsaW50OmRpc2FibGU6bm8tYml0d2lzZSBwcmVmZXItdGVtcGxhdGUgY3ljbG9tYXRpYy1jb21wbGV4aXR5XG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1zaGFkb3dlZC12YXJpYWJsZSBzd2l0Y2gtZGVmYXVsdCBwcmVmZXItY29uc3Rcbi8vIHRzbGludDpkaXNhYmxlOm9uZS12YXJpYWJsZS1wZXItZGVjbGFyYXRpb24gbmV3bGluZS1iZWZvcmUtcmV0dXJuXG5cbmltcG9ydCB7IExvY2FsZURhdGEgfSBmcm9tICcuLi9sb2NhbGUvbG9jYWxlLmNsYXNzJztcblxuLy8hIG1vbWVudC5qcyBsb2NhbGUgY29uZmlndXJhdGlvblxuLy8hIGxvY2FsZSA6IEZyZW5jaCBbZnJdXG4vLyEgYXV0aG9yIDogSm9obiBGaXNjaGVyIDogaHR0cHM6Ly9naXRodWIuY29tL2pmcm9mZmljZVxuXG5leHBvcnQgY29uc3QgZnJMb2NhbGU6IExvY2FsZURhdGEgPSB7XG4gIGFiYnI6ICdmcicsXG4gIG1vbnRoczogJ2phbnZpZXJfZsODwql2cmllcl9tYXJzX2F2cmlsX21haV9qdWluX2p1aWxsZXRfYW/Dg8K7dF9zZXB0ZW1icmVfb2N0b2JyZV9ub3ZlbWJyZV9kw4PCqWNlbWJyZScuc3BsaXQoJ18nKSxcbiAgbW9udGhzU2hvcnQ6ICdqYW52Ll9mw4PCqXZyLl9tYXJzX2F2ci5fbWFpX2p1aW5fanVpbC5fYW/Dg8K7dF9zZXB0Ll9vY3QuX25vdi5fZMODwqljLicuc3BsaXQoJ18nKSxcbiAgbW9udGhzUGFyc2VFeGFjdDogdHJ1ZSxcbiAgd2Vla2RheXM6ICdkaW1hbmNoZV9sdW5kaV9tYXJkaV9tZXJjcmVkaV9qZXVkaV92ZW5kcmVkaV9zYW1lZGknLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzU2hvcnQ6ICdkaW0uX2x1bi5fbWFyLl9tZXIuX2pldS5fdmVuLl9zYW0uJy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5c01pbjogJ2RpX2x1X21hX21lX2plX3ZlX3NhJy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5c1BhcnNlRXhhY3Q6IHRydWUsXG4gIGxvbmdEYXRlRm9ybWF0OiB7XG4gICAgTFQ6ICdISDptbScsXG4gICAgTFRTOiAnSEg6bW06c3MnLFxuICAgIEw6ICdERC9NTS9ZWVlZJyxcbiAgICBMTDogJ0QgTU1NTSBZWVlZJyxcbiAgICBMTEw6ICdEIE1NTU0gWVlZWSBISDptbScsXG4gICAgTExMTDogJ2RkZGQgRCBNTU1NIFlZWVkgSEg6bW0nXG4gIH0sXG4gIGNhbGVuZGFyOiB7XG4gICAgc2FtZURheTogJ1tBdWpvdXJkw6LCgMKZaHVpIMODwqBdIExUJyxcbiAgICBuZXh0RGF5OiAnW0RlbWFpbiDDg8KgXSBMVCcsXG4gICAgbmV4dFdlZWs6ICdkZGRkIFvDg8KgXSBMVCcsXG4gICAgbGFzdERheTogJ1tIaWVyIMODwqBdIExUJyxcbiAgICBsYXN0V2VlazogJ2RkZGQgW2Rlcm5pZXIgw4PCoF0gTFQnLFxuICAgIHNhbWVFbHNlOiAnTCdcbiAgfSxcbiAgcmVsYXRpdmVUaW1lOiB7XG4gICAgZnV0dXJlOiAnZGFucyAlcycsXG4gICAgcGFzdDogJ2lsIHkgYSAlcycsXG4gICAgczogJ3F1ZWxxdWVzIHNlY29uZGVzJyxcbiAgICBzczogJyVkIHNlY29uZGVzJyxcbiAgICBtOiAndW5lIG1pbnV0ZScsXG4gICAgbW06ICclZCBtaW51dGVzJyxcbiAgICBoOiAndW5lIGhldXJlJyxcbiAgICBoaDogJyVkIGhldXJlcycsXG4gICAgZDogJ3VuIGpvdXInLFxuICAgIGRkOiAnJWQgam91cnMnLFxuICAgIE06ICd1biBtb2lzJyxcbiAgICBNTTogJyVkIG1vaXMnLFxuICAgIHk6ICd1biBhbicsXG4gICAgeXk6ICclZCBhbnMnXG4gIH0sXG4gIGRheU9mTW9udGhPcmRpbmFsUGFyc2U6IC9cXGR7MSwyfShlcnwpLyxcbiAgb3JkaW5hbChfbnVtOiBudW1iZXIsIHBlcmlvZDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBjb25zdCBudW0gPSBOdW1iZXIoX251bSk7XG4gICAgc3dpdGNoIChwZXJpb2QpIHtcbiAgICAgIC8vIFRPRE86IFJldHVybiAnZScgd2hlbiBkYXkgb2YgbW9udGggPiAxLiBNb3ZlIHRoaXMgY2FzZSBpbnNpZGVcbiAgICAgIC8vIGJsb2NrIGZvciBtYXNjdWxpbmUgd29yZHMgYmVsb3cuXG4gICAgICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL21vbWVudC9tb21lbnQvaXNzdWVzLzMzNzVcbiAgICAgIGNhc2UgJ0QnOlxuICAgICAgICByZXR1cm4gbnVtICsgKG51bSA9PT0gMSA/ICdlcicgOiAnJyk7XG5cbiAgICAgIC8vIFdvcmRzIHdpdGggbWFzY3VsaW5lIGdyYW1tYXRpY2FsIGdlbmRlcjogbW9pcywgdHJpbWVzdHJlLCBqb3VyXG4gICAgICBkZWZhdWx0OlxuICAgICAgY2FzZSAnTSc6XG4gICAgICBjYXNlICdRJzpcbiAgICAgIGNhc2UgJ0RERCc6XG4gICAgICBjYXNlICdkJzpcbiAgICAgICAgcmV0dXJuIG51bSArIChudW0gPT09IDEgPyAnZXInIDogJ2UnKTtcblxuICAgICAgLy8gV29yZHMgd2l0aCBmZW1pbmluZSBncmFtbWF0aWNhbCBnZW5kZXI6IHNlbWFpbmVcbiAgICAgIGNhc2UgJ3cnOlxuICAgICAgY2FzZSAnVyc6XG4gICAgICAgIHJldHVybiBudW0gKyAobnVtID09PSAxID8gJ3JlJyA6ICdlJyk7XG4gICAgfVxuICB9LFxuICB3ZWVrOiB7XG4gICAgZG93OiAxLCAvLyBNb25kYXkgaXMgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2Vlay5cbiAgICBkb3k6IDQgIC8vIFRoZSB3ZWVrIHRoYXQgY29udGFpbnMgSmFuIDR0aCBpcyB0aGUgZmlyc3Qgd2VlayBvZiB0aGUgeWVhci5cbiAgfVxufTtcblxuIiwiLy8gdHNsaW50OmRpc2FibGU6Y29tbWVudC1mb3JtYXQgYmluYXJ5LWV4cHJlc3Npb24tb3BlcmFuZC1vcmRlciBtYXgtbGluZS1sZW5ndGhcbi8vIHRzbGludDpkaXNhYmxlOm5vLWJpdHdpc2UgcHJlZmVyLXRlbXBsYXRlIGN5Y2xvbWF0aWMtY29tcGxleGl0eVxuLy8gdHNsaW50OmRpc2FibGU6bm8tc2hhZG93ZWQtdmFyaWFibGUgc3dpdGNoLWRlZmF1bHQgcHJlZmVyLWNvbnN0XG4vLyB0c2xpbnQ6ZGlzYWJsZTpvbmUtdmFyaWFibGUtcGVyLWRlY2xhcmF0aW9uIG5ld2xpbmUtYmVmb3JlLXJldHVyblxuXG5pbXBvcnQgeyBMb2NhbGVEYXRhIH0gZnJvbSAnLi4vbG9jYWxlL2xvY2FsZS5jbGFzcyc7XG5pbXBvcnQgeyBnZXRIb3VycywgZ2V0TW9udGggfSBmcm9tICcuLi91dGlscy9kYXRlLWdldHRlcnMnO1xuXG4vLyEgbW9tZW50LmpzIGxvY2FsZSBjb25maWd1cmF0aW9uXG4vLyEgbG9jYWxlIDogR2FsaWNpYW4gW2dsXVxuLy8hIGF1dGhvciA6IERhcsODwq1vIEJlaXLDg8KzIDogaHR0cHM6Ly9naXRodWIuY29tL3F1aW5vYnJhdm9cblxubGV0IG1vbnRoc1Nob3J0RG90ID0gJ3hhbi5fZmViLl9tYXIuX2Fici5fbWFpLl94dcODwrEuX3h1bC5fYWdvLl9zZXQuX291dC5fbm92Ll9kZWMuJy5zcGxpdCgnXycpLFxuICBtb250aHNTaG9ydCA9ICd4YW5fZmViX21hcl9hYnJfbWFpX3h1w4PCsV94dWxfYWdvX3NldF9vdXRfbm92X2RlYycuc3BsaXQoJ18nKTtcblxubGV0IG1vbnRoc1BhcnNlID0gWy9eeGFuL2ksIC9eZmViL2ksIC9ebWFyL2ksIC9eYWJyL2ksIC9ebWFpL2ksIC9eeHXDg8KxL2ksIC9eeHVsL2ksIC9eYWdvL2ksIC9ec2V0L2ksIC9eb3V0L2ksIC9ebm92L2ksIC9eZGVjL2ldO1xubGV0IG1vbnRoc1JlZ2V4ID0gL14oeGFuZWlyb3xmZWJyZWlyb3xtYXJ6b3xhYnJpbHxtYWlvfHh1w4PCsW98eHVsbG98YWdvc3RvfHNldGVtYnJvfG91dHVicm98bm92ZW1icm98ZGVjZW1icm98eGFuXFwuP3xmZWJcXC4/fG1hclxcLj98YWJyXFwuP3xtYWlcXC4/fHh1w4PCsVxcLj98eHVsXFwuP3xhZ29cXC4/fHNldFxcLj98b3V0XFwuP3xub3ZcXC4/fGRlY1xcLj8pL2k7XG5cbmV4cG9ydCBjb25zdCBnbExvY2FsZTogTG9jYWxlRGF0YSA9IHtcbiAgYWJicjogJ2dsJyxcbiAgbW9udGhzOiAneGFuZWlyb19mZWJyZWlyb19tYXJ6b19hYnJpbF9tYWlvX3h1w4PCsW9feHVsbG9fYWdvc3RvX3NldGVtYnJvX291dHVicm9fbm92ZW1icm9fZGVjZW1icm8nLnNwbGl0KCdfJyksXG4gIG1vbnRoc1Nob3J0KGRhdGU6IERhdGUsIGZvcm1hdDogc3RyaW5nLCBpc1VUQz86IGJvb2xlYW4pOiBzdHJpbmcgfCBzdHJpbmdbXSB7XG4gICAgaWYgKCFkYXRlKSB7XG4gICAgICByZXR1cm4gbW9udGhzU2hvcnREb3Q7XG4gICAgfVxuXG4gICAgaWYgKC8tTU1NLS8udGVzdChmb3JtYXQpKSB7XG4gICAgICByZXR1cm4gbW9udGhzU2hvcnRbZ2V0TW9udGgoZGF0ZSwgaXNVVEMpXTtcbiAgICB9XG5cbiAgICByZXR1cm4gbW9udGhzU2hvcnREb3RbZ2V0TW9udGgoZGF0ZSwgaXNVVEMpXTtcbiAgfSxcbiAgbW9udGhzUmVnZXgsXG4gIG1vbnRoc1Nob3J0UmVnZXg6IG1vbnRoc1JlZ2V4LFxuICBtb250aHNTdHJpY3RSZWdleDogL14oeGFuZWlyb3xmZWJyZWlyb3xtYXJ6b3xhYnJpbHxtYWlvfHh1w4PCsW98eHVsbG98YWdvc3RvfHNldGVtYnJvfG91dHVicm98bm92ZW1icm98ZGVjZW1icm8pL2ksXG4gIG1vbnRoc1Nob3J0U3RyaWN0UmVnZXg6IC9eKHhhblxcLj98ZmViXFwuP3xtYXJcXC4/fGFiclxcLj98bWFpXFwuP3x4dcODwrFcXC4/fHh1bFxcLj98YWdvXFwuP3xzZXRcXC4/fG91dFxcLj98bm92XFwuP3xkZWNcXC4/KS9pLFxuICBtb250aHNQYXJzZSxcbiAgbG9uZ01vbnRoc1BhcnNlOiBtb250aHNQYXJzZSxcbiAgc2hvcnRNb250aHNQYXJzZTogbW9udGhzUGFyc2UsXG4gIHdlZWtkYXlzOiAnZG9taW5nb19sdW5zX21hcnRlc19tw4PCqXJjb3Jlc194b3Zlc192ZW5yZXNfc8ODwqFiYWRvJy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5c1Nob3J0OiAnZG9tLl9sdW4uX21hci5fbcODwqlyLl94b3YuX3Zlbi5fc8ODwqFiLicuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNNaW46ICdkb19sdV9tYV9tw4PCqV94b192ZV9zw4PCoScuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNQYXJzZUV4YWN0OiB0cnVlLFxuICBsb25nRGF0ZUZvcm1hdDoge1xuICAgIExUOiAnSDptbScsXG4gICAgTFRTOiAnSDptbTpzcycsXG4gICAgTDogJ0REL01NL1lZWVknLFxuICAgIExMOiAnRCBbZGVdIE1NTU0gW2RlXSBZWVlZJyxcbiAgICBMTEw6ICdEIFtkZV0gTU1NTSBbZGVdIFlZWVkgSDptbScsXG4gICAgTExMTDogJ2RkZGQsIEQgW2RlXSBNTU1NIFtkZV0gWVlZWSBIOm1tJ1xuICB9LFxuICBjYWxlbmRhcjoge1xuICAgIHNhbWVEYXkoZGF0ZTogRGF0ZSkge1xuICAgICAgcmV0dXJuICdbaG94ZSDDg8KhJyArICgoZ2V0SG91cnMoZGF0ZSkgIT09IDEpID8gJ3MnIDogJycpICsgJ10gTFQnO1xuICAgIH0sXG4gICAgbmV4dERheShkYXRlOiBEYXRlKSB7XG4gICAgICByZXR1cm4gJ1ttYcODwrFhbiDDg8KhJyArICgoZ2V0SG91cnMoZGF0ZSkgIT09IDEpID8gJ3MnIDogJycpICsgJ10gTFQnO1xuICAgIH0sXG4gICAgbmV4dFdlZWsoZGF0ZTogRGF0ZSkge1xuICAgICAgcmV0dXJuICdkZGRkIFvDg8KhJyArICgoZ2V0SG91cnMoZGF0ZSkgIT09IDEpID8gJ3MnIDogJycpICsgJ10gTFQnO1xuICAgIH0sXG4gICAgbGFzdERheShkYXRlOiBEYXRlKSB7XG4gICAgICByZXR1cm4gJ1tvbnRlIMODwqEnICsgKChnZXRIb3VycyhkYXRlKSAhPT0gMSkgPyAncycgOiAnJykgKyAnXSBMVCc7XG4gICAgfSxcbiAgICBsYXN0V2VlayhkYXRlOiBEYXRlKSB7XG4gICAgICByZXR1cm4gJ1tvXSBkZGRkIFtwYXNhZG8gw4PCoScgKyAoKGdldEhvdXJzKGRhdGUpICE9PSAxKSA/ICdzJyA6ICcnKSArICddIExUJztcbiAgICB9LFxuICAgIHNhbWVFbHNlOiAnTCdcbiAgfSxcbiAgcmVsYXRpdmVUaW1lOiB7XG4gICAgZnV0dXJlOiAnZW4gJXMnLFxuICAgIHBhc3Q6ICdmYWkgJXMnLFxuICAgIHM6ICd1bnMgc2VndW5kb3MnLFxuICAgIHNzOiAnJWQgc2VndW5kb3MnLFxuICAgIG06ICd1biBtaW51dG8nLFxuICAgIG1tOiAnJWQgbWludXRvcycsXG4gICAgaDogJ3VuaGEgaG9yYScsXG4gICAgaGg6ICclZCBob3JhcycsXG4gICAgZDogJ3VuIGTDg8KtYScsXG4gICAgZGQ6ICclZCBkw4PCrWFzJyxcbiAgICBNOiAndW4gbWVzJyxcbiAgICBNTTogJyVkIG1lc2VzJyxcbiAgICB5OiAndW4gYW5vJyxcbiAgICB5eTogJyVkIGFub3MnXG4gIH0sXG4gIGRheU9mTW9udGhPcmRpbmFsUGFyc2U6IC9cXGR7MSwyfcOCwrovLFxuICBvcmRpbmFsOiAnJWTDgsK6JyxcbiAgd2Vlazoge1xuICAgIGRvdzogMSwgLy8gTW9uZGF5IGlzIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsuXG4gICAgZG95OiA0ICAvLyBUaGUgd2VlayB0aGF0IGNvbnRhaW5zIEphbiA0dGggaXMgdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHllYXIuXG4gIH1cbn07XG4iLCIvLyB0c2xpbnQ6ZGlzYWJsZTpjb21tZW50LWZvcm1hdCBiaW5hcnktZXhwcmVzc2lvbi1vcGVyYW5kLW9yZGVyIG1heC1saW5lLWxlbmd0aFxuLy8gdHNsaW50OmRpc2FibGU6bm8tYml0d2lzZSBwcmVmZXItdGVtcGxhdGUgY3ljbG9tYXRpYy1jb21wbGV4aXR5XG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1zaGFkb3dlZC12YXJpYWJsZSBzd2l0Y2gtZGVmYXVsdCBwcmVmZXItY29uc3Rcbi8vIHRzbGludDpkaXNhYmxlOm9uZS12YXJpYWJsZS1wZXItZGVjbGFyYXRpb24gbmV3bGluZS1iZWZvcmUtcmV0dXJuXG5cbmltcG9ydCB7IExvY2FsZURhdGEgfSBmcm9tICcuLi9sb2NhbGUvbG9jYWxlLmNsYXNzJztcblxuLy8hIG1vbWVudC5qcyBsb2NhbGUgY29uZmlndXJhdGlvblxuLy8hIGxvY2FsZSA6IEhlYnJldyBbaGVdXG4vLyEgYXV0aG9yIDogVG9tZXIgQ29oZW4gOiBodHRwczovL2dpdGh1Yi5jb20vdG9tZXJcbi8vISBhdXRob3IgOiBNb3NoZSBTaW1hbnRvdiA6IGh0dHBzOi8vZ2l0aHViLmNvbS9EZXZlbG9wbWVudElMXG4vLyEgYXV0aG9yIDogVGFsIEF0ZXIgOiBodHRwczovL2dpdGh1Yi5jb20vVGFsQXRlclxuXG5leHBvcnQgY29uc3QgaGVMb2NhbGU6IExvY2FsZURhdGEgPSB7XG4gIGFiYnI6ICdoZScsXG4gIG1vbnRoczogJ8OXwpnDl8Kgw5fClcOXwpDDl8KoX8OXwqTDl8KRw5fCqMOXwpXDl8KQw5fCqF/Dl8Kew5fCqMOXwqVfw5fCkMOXwqTDl8Kow5fCmcOXwpxfw5fCnsOXwpDDl8KZX8OXwpnDl8KVw5fCoMOXwplfw5fCmcOXwpXDl8Kcw5fCmV/Dl8KQw5fClcOXwpLDl8KVw5fCocOXwphfw5fCocOXwqTDl8KYw5fCnsOXwpHDl8KoX8OXwpDDl8KVw5fCp8OXwpjDl8KVw5fCkcOXwqhfw5fCoMOXwpXDl8KRw5fCnsOXwpHDl8KoX8OXwpPDl8Kmw5fCnsOXwpHDl8KoJy5zcGxpdCgnXycpLFxuICBtb250aHNTaG9ydDogJ8OXwpnDl8Kgw5fClcOXwrNfw5fCpMOXwpHDl8Kow5fCs1/Dl8Kew5fCqMOXwqVfw5fCkMOXwqTDl8Kow5fCs1/Dl8Kew5fCkMOXwplfw5fCmcOXwpXDl8Kgw5fCmV/Dl8KZw5fClcOXwpzDl8KZX8OXwpDDl8KVw5fCksOXwrNfw5fCocOXwqTDl8KYw5fCs1/Dl8KQw5fClcOXwqfDl8KzX8OXwqDDl8KVw5fCkcOXwrNfw5fCk8OXwqbDl8Kew5fCsycuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXM6ICfDl8Kow5fCkMOXwqnDl8KVw5fCn1/Dl8Kpw5fCoMOXwplfw5fCqcOXwpzDl8KZw5fCqcOXwplfw5fCqMOXwpHDl8KZw5fCosOXwplfw5fCl8OXwp7Dl8KZw5fCqcOXwplfw5fCqcOXwpnDl8Kpw5fCmV/Dl8Kpw5fCkcOXwqonLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzU2hvcnQ6ICfDl8KQw5fCs1/Dl8KRw5fCs1/Dl8KSw5fCs1/Dl8KTw5fCs1/Dl8KUw5fCs1/Dl8KVw5fCs1/Dl8Kpw5fCsycuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNNaW46ICfDl8KQX8OXwpFfw5fCkl/Dl8KTX8OXwpRfw5fClV/Dl8KpJy5zcGxpdCgnXycpLFxuICBsb25nRGF0ZUZvcm1hdDoge1xuICAgIExUOiAnSEg6bW0nLFxuICAgIExUUzogJ0hIOm1tOnNzJyxcbiAgICBMOiAnREQvTU0vWVlZWScsXG4gICAgTEw6ICdEIFvDl8KRXU1NTU0gWVlZWScsXG4gICAgTExMOiAnRCBbw5fCkV1NTU1NIFlZWVkgSEg6bW0nLFxuICAgIExMTEw6ICdkZGRkLCBEIFvDl8KRXU1NTU0gWVlZWSBISDptbScsXG4gICAgbDogJ0QvTS9ZWVlZJyxcbiAgICBsbDogJ0QgTU1NIFlZWVknLFxuICAgIGxsbDogJ0QgTU1NIFlZWVkgSEg6bW0nLFxuICAgIGxsbGw6ICdkZGQsIEQgTU1NIFlZWVkgSEg6bW0nXG4gIH0sXG4gIGNhbGVuZGFyOiB7XG4gICAgc2FtZURheTogJ1vDl8KUw5fCmcOXwpXDl8KdIMOXwpHDlsK+XUxUJyxcbiAgICBuZXh0RGF5OiAnW8OXwp7Dl8KXw5fCqCDDl8KRw5bCvl1MVCcsXG4gICAgbmV4dFdlZWs6ICdkZGRkIFvDl8KRw5fCqcOXwqLDl8KUXSBMVCcsXG4gICAgbGFzdERheTogJ1vDl8KQw5fCqsOXwp7Dl8KVw5fCnCDDl8KRw5bCvl1MVCcsXG4gICAgbGFzdFdlZWs6ICdbw5fCkcOXwpnDl8KVw5fCnV0gZGRkZCBbw5fClMOXwpDDl8KXw5fCqMOXwpXDl8KfIMOXwpHDl8Kpw5fCosOXwpRdIExUJyxcbiAgICBzYW1lRWxzZTogJ0wnXG4gIH0sXG4gIHJlbGF0aXZlVGltZToge1xuICAgIGZ1dHVyZTogJ8OXwpHDl8Kiw5fClcOXwpMgJXMnLFxuICAgIHBhc3Q6ICfDl8Kcw5fCpMOXwqDDl8KZICVzJyxcbiAgICBzOiAnw5fCnsOXwqHDl8Kkw5fCqCDDl8Kpw5fCoMOXwpnDl8KVw5fCqicsXG4gICAgc3M6ICclZCDDl8Kpw5fCoMOXwpnDl8KVw5fCqicsXG4gICAgbTogJ8OXwpPDl8Knw5fClCcsXG4gICAgbW06ICclZCDDl8KTw5fCp8OXwpXDl8KqJyxcbiAgICBoOiAnw5fCqcOXwqLDl8KUJyxcbiAgICBoaChudW06IG51bWJlcik6IHN0cmluZyB7XG4gICAgICBpZiAobnVtID09PSAyKSB7XG4gICAgICAgIHJldHVybiAnw5fCqcOXwqLDl8Kqw5fCmcOXwpnDl8KdJztcbiAgICAgIH1cbiAgICAgIHJldHVybiBudW0gKyAnIMOXwqnDl8Kiw5fClcOXwqonO1xuICAgIH0sXG4gICAgZDogJ8OXwpnDl8KVw5fCnScsXG4gICAgZGQobnVtOiBudW1iZXIpOiBzdHJpbmcge1xuICAgICAgaWYgKG51bSA9PT0gMikge1xuICAgICAgICByZXR1cm4gJ8OXwpnDl8KVw5fCnsOXwpnDl8KZw5fCnSc7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVtICsgJyDDl8KZw5fCnsOXwpnDl8KdJztcbiAgICB9LFxuICAgIE06ICfDl8KXw5fClcOXwpPDl8KpJyxcbiAgICBNTShudW06IG51bWJlcik6IHN0cmluZyB7XG4gICAgICBpZiAobnVtID09PSAyKSB7XG4gICAgICAgIHJldHVybiAnw5fCl8OXwpXDl8KTw5fCqcOXwpnDl8KZw5fCnSc7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVtICsgJyDDl8KXw5fClcOXwpPDl8Kpw5fCmcOXwp0nO1xuICAgIH0sXG4gICAgeTogJ8OXwqnDl8Kgw5fClCcsXG4gICAgeXkobnVtOiBudW1iZXIpOiBzdHJpbmcge1xuICAgICAgaWYgKG51bSA9PT0gMikge1xuICAgICAgICByZXR1cm4gJ8OXwqnDl8Kgw5fCqsOXwpnDl8KZw5fCnSc7XG4gICAgICB9IGVsc2UgaWYgKG51bSAlIDEwID09PSAwICYmIG51bSAhPT0gMTApIHtcbiAgICAgICAgcmV0dXJuIG51bSArICcgw5fCqcOXwqDDl8KUJztcbiAgICAgIH1cbiAgICAgIHJldHVybiBudW0gKyAnIMOXwqnDl8Kgw5fCmcOXwp0nO1xuICAgIH1cbiAgfSxcbiAgbWVyaWRpZW1QYXJzZTogL8OXwpDDl8KXw5fClFwiw5fCpnzDl8Kcw5fCpMOXwqDDl8KUXCLDl8KmfMOXwpDDl8KXw5fCqMOXwpkgw5fClMOXwqbDl8KUw5fCqMOXwpnDl8KZw5fCnXzDl8Kcw5fCpMOXwqDDl8KZIMOXwpTDl8Kmw5fClMOXwqjDl8KZw5fCmcOXwp18w5fCnMOXwqTDl8Kgw5fClcOXwqogw5fCkcOXwpXDl8Knw5fCqHzDl8KRw5fCkcOXwpXDl8Knw5fCqHzDl8KRw5fCosOXwqjDl8KRL2ksXG4gIGlzUE0oaW5wdXQpIHtcbiAgICByZXR1cm4gL14ow5fCkMOXwpfDl8KUXCLDl8KmfMOXwpDDl8KXw5fCqMOXwpkgw5fClMOXwqbDl8KUw5fCqMOXwpnDl8KZw5fCnXzDl8KRw5fCosOXwqjDl8KRKSQvLnRlc3QoaW5wdXQpO1xuICB9LFxuICBtZXJpZGllbShob3VyLCBtaW51dGUsIGlzTG93ZXIpIHtcbiAgICBpZiAoaG91ciA8IDUpIHtcbiAgICAgIHJldHVybiAnw5fCnMOXwqTDl8Kgw5fClcOXwqogw5fCkcOXwpXDl8Knw5fCqCc7XG4gICAgfSBlbHNlIGlmIChob3VyIDwgMTApIHtcbiAgICAgIHJldHVybiAnw5fCkcOXwpHDl8KVw5fCp8OXwqgnO1xuICAgIH0gZWxzZSBpZiAoaG91ciA8IDEyKSB7XG4gICAgICByZXR1cm4gaXNMb3dlciA/ICfDl8Kcw5fCpMOXwqDDl8KUXCLDl8KmJyA6ICfDl8Kcw5fCpMOXwqDDl8KZIMOXwpTDl8Kmw5fClMOXwqjDl8KZw5fCmcOXwp0nO1xuICAgIH0gZWxzZSBpZiAoaG91ciA8IDE4KSB7XG4gICAgICByZXR1cm4gaXNMb3dlciA/ICfDl8KQw5fCl8OXwpRcIsOXwqYnIDogJ8OXwpDDl8KXw5fCqMOXwpkgw5fClMOXwqbDl8KUw5fCqMOXwpnDl8KZw5fCnSc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAnw5fCkcOXwqLDl8Kow5fCkSc7XG4gICAgfVxuICB9XG59O1xuIiwiLy8gdHNsaW50OmRpc2FibGU6Y29tbWVudC1mb3JtYXQgYmluYXJ5LWV4cHJlc3Npb24tb3BlcmFuZC1vcmRlciBtYXgtbGluZS1sZW5ndGhcbi8vIHRzbGludDpkaXNhYmxlOm5vLWJpdHdpc2UgcHJlZmVyLXRlbXBsYXRlIGN5Y2xvbWF0aWMtY29tcGxleGl0eVxuLy8gdHNsaW50OmRpc2FibGU6bm8tc2hhZG93ZWQtdmFyaWFibGUgc3dpdGNoLWRlZmF1bHQgcHJlZmVyLWNvbnN0XG4vLyB0c2xpbnQ6ZGlzYWJsZTpvbmUtdmFyaWFibGUtcGVyLWRlY2xhcmF0aW9uIG5ld2xpbmUtYmVmb3JlLXJldHVyblxuLy8gdHNsaW50OmRpc2FibGU6bm8tcGFyYW1ldGVyLXJlYXNzaWdubWVudCBwcmVmZXItc3dpdGNoXG5cbmltcG9ydCB7IExvY2FsZURhdGEgfSBmcm9tICcuLi9sb2NhbGUvbG9jYWxlLmNsYXNzJztcblxuLy8hIG1vbWVudC5qcyBsb2NhbGUgY29uZmlndXJhdGlvblxuLy8hIGxvY2FsZSA6IEhpbmRpIFtoaV1cbi8vISBhdXRob3IgOiBNYXlhbmsgU2luZ2hhbCA6IGh0dHBzOi8vZ2l0aHViLmNvbS9tYXlhbmtzaW5naGFsXG5cbmxldCBzeW1ib2xNYXA6IHtba2V5OiBzdHJpbmddOiBzdHJpbmd9ID0ge1xuICAgIDE6ICfDoMKlwqcnLFxuICAgIDI6ICfDoMKlwqgnLFxuICAgIDM6ICfDoMKlwqknLFxuICAgIDQ6ICfDoMKlwqonLFxuICAgIDU6ICfDoMKlwqsnLFxuICAgIDY6ICfDoMKlwqwnLFxuICAgIDc6ICfDoMKlwq0nLFxuICAgIDg6ICfDoMKlwq4nLFxuICAgIDk6ICfDoMKlwq8nLFxuICAgIDA6ICfDoMKlwqYnXG4gIH0sXG4gIG51bWJlck1hcDoge1trZXk6IHN0cmluZ106IHN0cmluZ30gPSB7XG4gICAgJ8OgwqXCpyc6ICcxJyxcbiAgICAnw6DCpcKoJzogJzInLFxuICAgICfDoMKlwqknOiAnMycsXG4gICAgJ8OgwqXCqic6ICc0JyxcbiAgICAnw6DCpcKrJzogJzUnLFxuICAgICfDoMKlwqwnOiAnNicsXG4gICAgJ8OgwqXCrSc6ICc3JyxcbiAgICAnw6DCpcKuJzogJzgnLFxuICAgICfDoMKlwq8nOiAnOScsXG4gICAgJ8OgwqXCpic6ICcwJ1xuICB9O1xuXG5leHBvcnQgY29uc3QgaGlMb2NhbGU6IExvY2FsZURhdGEgPSB7XG4gIGFiYnI6ICdoaScsXG4gIG1vbnRoczogJ8OgwqTCnMOgwqTCqMOgwqTCtcOgwqTCsMOgwqXCgF/DoMKkwqvDoMKkwrzDoMKkwrDDoMKkwrXDoMKkwrDDoMKlwoBfw6DCpMKuw6DCpMK+w6DCpMKww6DCpcKNw6DCpMKaX8OgwqTChcOgwqTCqsOgwqXCjcOgwqTCsMOgwqXCiMOgwqTCsl/DoMKkwq7DoMKkwohfw6DCpMKcw6DCpcKCw6DCpMKoX8OgwqTCnMOgwqXCgcOgwqTCssOgwqTCvsOgwqTCiF/DoMKkwoXDoMKkwpfDoMKkwrjDoMKlwo3DoMKkwqRfw6DCpMK4w6DCpMK/w6DCpMKkw6DCpMKuw6DCpcKNw6DCpMKsw6DCpMKwX8OgwqTChcOgwqTClcOgwqXCjcOgwqTCn8OgwqXCgsOgwqTCrMOgwqTCsF/DoMKkwqjDoMKkwrXDoMKkwq7DoMKlwo3DoMKkwqzDoMKkwrBfw6DCpMKmw6DCpMK/w6DCpMK4w6DCpMKuw6DCpcKNw6DCpMKsw6DCpMKwJy5zcGxpdCgnXycpLFxuICBtb250aHNTaG9ydDogJ8OgwqTCnMOgwqTCqC5fw6DCpMKrw6DCpMK8w6DCpMKwLl/DoMKkwq7DoMKkwr7DoMKkwrDDoMKlwo3DoMKkwppfw6DCpMKFw6DCpMKqw6DCpcKNw6DCpMKww6DCpcKILl/DoMKkwq7DoMKkwohfw6DCpMKcw6DCpcKCw6DCpMKoX8OgwqTCnMOgwqXCgcOgwqTCsi5fw6DCpMKFw6DCpMKXLl/DoMKkwrjDoMKkwr/DoMKkwqQuX8OgwqTChcOgwqTClcOgwqXCjcOgwqTCn8OgwqXCgi5fw6DCpMKow6DCpMK1Ll/DoMKkwqbDoMKkwr/DoMKkwrguJy5zcGxpdCgnXycpLFxuICBtb250aHNQYXJzZUV4YWN0OiB0cnVlLFxuICB3ZWVrZGF5czogJ8OgwqTCsMOgwqTCtcOgwqTCv8OgwqTCtcOgwqTCvsOgwqTCsF/DoMKkwrjDoMKlwovDoMKkwq7DoMKkwrXDoMKkwr7DoMKkwrBfw6DCpMKuw6DCpMKCw6DCpMKXw6DCpMKyw6DCpMK1w6DCpMK+w6DCpMKwX8OgwqTCrMOgwqXCgcOgwqTCp8OgwqTCtcOgwqTCvsOgwqTCsF/DoMKkwpfDoMKlwoHDoMKkwrDDoMKlwoLDoMKkwrXDoMKkwr7DoMKkwrBfw6DCpMK2w6DCpcKBw6DCpMKVw6DCpcKNw6DCpMKww6DCpMK1w6DCpMK+w6DCpMKwX8OgwqTCtsOgwqTCqMOgwqTCv8OgwqTCtcOgwqTCvsOgwqTCsCcuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNTaG9ydDogJ8OgwqTCsMOgwqTCtcOgwqTCv1/DoMKkwrjDoMKlwovDoMKkwq5fw6DCpMKuw6DCpMKCw6DCpMKXw6DCpMKyX8OgwqTCrMOgwqXCgcOgwqTCp1/DoMKkwpfDoMKlwoHDoMKkwrDDoMKlwoJfw6DCpMK2w6DCpcKBw6DCpMKVw6DCpcKNw6DCpMKwX8OgwqTCtsOgwqTCqMOgwqTCvycuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNNaW46ICfDoMKkwrBfw6DCpMK4w6DCpcKLX8OgwqTCrsOgwqTCgl/DoMKkwqzDoMKlwoFfw6DCpMKXw6DCpcKBX8OgwqTCtsOgwqXCgV/DoMKkwrYnLnNwbGl0KCdfJyksXG4gIGxvbmdEYXRlRm9ybWF0OiB7XG4gICAgTFQ6ICdBIGg6bW0gw6DCpMKsw6DCpMKcw6DCpcKHJyxcbiAgICBMVFM6ICdBIGg6bW06c3Mgw6DCpMKsw6DCpMKcw6DCpcKHJyxcbiAgICBMOiAnREQvTU0vWVlZWScsXG4gICAgTEw6ICdEIE1NTU0gWVlZWScsXG4gICAgTExMOiAnRCBNTU1NIFlZWVksIEEgaDptbSDDoMKkwqzDoMKkwpzDoMKlwocnLFxuICAgIExMTEw6ICdkZGRkLCBEIE1NTU0gWVlZWSwgQSBoOm1tIMOgwqTCrMOgwqTCnMOgwqXChydcbiAgfSxcbiAgY2FsZW5kYXI6IHtcbiAgICBzYW1lRGF5OiAnW8OgwqTChsOgwqTCnF0gTFQnLFxuICAgIG5leHREYXk6ICdbw6DCpMKVw6DCpMKyXSBMVCcsXG4gICAgbmV4dFdlZWs6ICdkZGRkLCBMVCcsXG4gICAgbGFzdERheTogJ1vDoMKkwpXDoMKkwrJdIExUJyxcbiAgICBsYXN0V2VlazogJ1vDoMKkwqrDoMKkwr/DoMKkwpvDoMKkwrLDoMKlwoddIGRkZGQsIExUJyxcbiAgICBzYW1lRWxzZTogJ0wnXG4gIH0sXG4gIHJlbGF0aXZlVGltZToge1xuICAgIGZ1dHVyZTogJyVzIMOgwqTCrsOgwqXCh8OgwqTCgicsXG4gICAgcGFzdDogJyVzIMOgwqTCqsOgwqTCucOgwqTCssOgwqXChycsXG4gICAgczogJ8OgwqTClcOgwqXCgcOgwqTCmyDDoMKkwrnDoMKlwoAgw6DCpMKVw6DCpcKNw6DCpMK3w6DCpMKjJyxcbiAgICBzczogJyVkIMOgwqTCuMOgwqXCh8OgwqTClcOgwqTCgsOgwqTCoScsXG4gICAgbTogJ8OgwqTCj8OgwqTClSDDoMKkwq7DoMKkwr/DoMKkwqjDoMKkwp8nLFxuICAgIG1tOiAnJWQgw6DCpMKuw6DCpMK/w6DCpMKow6DCpMKfJyxcbiAgICBoOiAnw6DCpMKPw6DCpMKVIMOgwqTCmMOgwqTCgsOgwqTCn8OgwqTCvicsXG4gICAgaGg6ICclZCDDoMKkwpjDoMKkwoLDoMKkwp/DoMKlwocnLFxuICAgIGQ6ICfDoMKkwo/DoMKkwpUgw6DCpMKmw6DCpMK/w6DCpMKoJyxcbiAgICBkZDogJyVkIMOgwqTCpsOgwqTCv8OgwqTCqCcsXG4gICAgTTogJ8OgwqTCj8OgwqTClSDDoMKkwq7DoMKkwrnDoMKlwoDDoMKkwqjDoMKlwocnLFxuICAgIE1NOiAnJWQgw6DCpMKuw6DCpMK5w6DCpcKAw6DCpMKow6DCpcKHJyxcbiAgICB5OiAnw6DCpMKPw6DCpMKVIMOgwqTCtcOgwqTCsMOgwqXCjcOgwqTCtycsXG4gICAgeXk6ICclZCDDoMKkwrXDoMKkwrDDoMKlwo3DoMKkwrcnXG4gIH0sXG4gIHByZXBhcnNlKHN0cjogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoL1vDoMKlwqfDoMKlwqjDoMKlwqnDoMKlwqrDoMKlwqvDoMKlwqzDoMKlwq3DoMKlwq7DoMKlwq/DoMKlwqZdL2csIGZ1bmN0aW9uIChtYXRjaCkge1xuICAgICAgcmV0dXJuIG51bWJlck1hcFttYXRjaF07XG4gICAgfSk7XG4gIH0sXG4gIHBvc3Rmb3JtYXQoc3RyOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvXFxkL2csIGZ1bmN0aW9uIChtYXRjaCkge1xuICAgICAgcmV0dXJuIHN5bWJvbE1hcFttYXRjaF07XG4gICAgfSk7XG4gIH0sXG4gIC8vIEhpbmRpIG5vdGF0aW9uIGZvciBtZXJpZGllbXMgYXJlIHF1aXRlIGZ1enp5IGluIHByYWN0aWNlLiBXaGlsZSB0aGVyZSBleGlzdHNcbiAgLy8gYSByaWdpZCBub3Rpb24gb2YgYSAnUGFoYXInIGl0IGlzIG5vdCB1c2VkIGFzIHJpZ2lkbHkgaW4gbW9kZXJuIEhpbmRpLlxuICBtZXJpZGllbVBhcnNlOiAvw6DCpMKww6DCpMK+w6DCpMKkfMOgwqTCuMOgwqXCgcOgwqTCrMOgwqTCuXzDoMKkwqbDoMKlwovDoMKkwqrDoMKkwrnDoMKkwrB8w6DCpMK2w6DCpMK+w6DCpMKuLyxcbiAgbWVyaWRpZW1Ib3VyKGhvdXIsIG1lcmlkaWVtKSB7XG4gICAgaWYgKGhvdXIgPT09IDEyKSB7XG4gICAgICBob3VyID0gMDtcbiAgICB9XG4gICAgaWYgKG1lcmlkaWVtID09PSAnw6DCpMKww6DCpMK+w6DCpMKkJykge1xuICAgICAgcmV0dXJuIGhvdXIgPCA0ID8gaG91ciA6IGhvdXIgKyAxMjtcbiAgICB9IGVsc2UgaWYgKG1lcmlkaWVtID09PSAnw6DCpMK4w6DCpcKBw6DCpMKsw6DCpMK5Jykge1xuICAgICAgcmV0dXJuIGhvdXI7XG4gICAgfSBlbHNlIGlmIChtZXJpZGllbSA9PT0gJ8OgwqTCpsOgwqXCi8OgwqTCqsOgwqTCucOgwqTCsCcpIHtcbiAgICAgIHJldHVybiBob3VyID49IDEwID8gaG91ciA6IGhvdXIgKyAxMjtcbiAgICB9IGVsc2UgaWYgKG1lcmlkaWVtID09PSAnw6DCpMK2w6DCpMK+w6DCpMKuJykge1xuICAgICAgcmV0dXJuIGhvdXIgKyAxMjtcbiAgICB9XG4gIH0sXG4gIG1lcmlkaWVtKGhvdXIsIG1pbnV0ZSwgaXNMb3dlcikge1xuICAgIGlmIChob3VyIDwgNCkge1xuICAgICAgcmV0dXJuICfDoMKkwrDDoMKkwr7DoMKkwqQnO1xuICAgIH0gZWxzZSBpZiAoaG91ciA8IDEwKSB7XG4gICAgICByZXR1cm4gJ8OgwqTCuMOgwqXCgcOgwqTCrMOgwqTCuSc7XG4gICAgfSBlbHNlIGlmIChob3VyIDwgMTcpIHtcbiAgICAgIHJldHVybiAnw6DCpMKmw6DCpcKLw6DCpMKqw6DCpMK5w6DCpMKwJztcbiAgICB9IGVsc2UgaWYgKGhvdXIgPCAyMCkge1xuICAgICAgcmV0dXJuICfDoMKkwrbDoMKkwr7DoMKkwq4nO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gJ8OgwqTCsMOgwqTCvsOgwqTCpCc7XG4gICAgfVxuICB9LFxuICB3ZWVrOiB7XG4gICAgZG93OiAwLCAvLyBTdW5kYXkgaXMgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2Vlay5cbiAgICBkb3k6IDYgIC8vIFRoZSB3ZWVrIHRoYXQgY29udGFpbnMgSmFuIDFzdCBpcyB0aGUgZmlyc3Qgd2VlayBvZiB0aGUgeWVhci5cbiAgfVxufTtcbiIsIi8vIHRzbGludDpkaXNhYmxlOmNvbW1lbnQtZm9ybWF0IGJpbmFyeS1leHByZXNzaW9uLW9wZXJhbmQtb3JkZXIgbWF4LWxpbmUtbGVuZ3RoXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1iaXR3aXNlIHByZWZlci10ZW1wbGF0ZSBjeWNsb21hdGljLWNvbXBsZXhpdHlcbi8vIHRzbGludDpkaXNhYmxlOm5vLXNoYWRvd2VkLXZhcmlhYmxlIHN3aXRjaC1kZWZhdWx0IHByZWZlci1jb25zdFxuLy8gdHNsaW50OmRpc2FibGU6b25lLXZhcmlhYmxlLXBlci1kZWNsYXJhdGlvbiBuZXdsaW5lLWJlZm9yZS1yZXR1cm5cblxuaW1wb3J0IHsgTG9jYWxlRGF0YSB9IGZyb20gJy4uL2xvY2FsZS9sb2NhbGUuY2xhc3MnO1xuaW1wb3J0IHsgZ2V0RGF5T2ZXZWVrIH0gZnJvbSAnLi4vdW5pdHMvZGF5LW9mLXdlZWsnO1xuXG4vLyEgbW9tZW50LmpzIGxvY2FsZSBjb25maWd1cmF0aW9uXG4vLyEgbG9jYWxlIDogSHVuZ2FyaWFuIFtodV1cbi8vISBhdXRob3IgOiBBZGFtIEJydW5uZXIgOiBodHRwczovL2dpdGh1Yi5jb20vYWRhbWJydW5uZXJcblxubGV0IHdlZWtFbmRpbmdzID0gJ3Zhc8ODwqFybmFwIGjDg8KpdGbDhcKRbiBrZWRkZW4gc3plcmTDg8KhbiBjc8ODwrx0w4PCtnJ0w4PCtmvDg8K2biBww4PCqW50ZWtlbiBzem9tYmF0b24nLnNwbGl0KCcgJyk7XG5mdW5jdGlvbiB0cmFuc2xhdGUobnVtOiBudW1iZXIsIHdpdGhvdXRTdWZmaXg6IGJvb2xlYW4sIGtleTogc3RyaW5nLCBpc0Z1dHVyZTogYm9vbGVhbik6IHN0cmluZyB7XG4gIHN3aXRjaCAoa2V5KSB7XG4gICAgY2FzZSAncyc6XG4gICAgICByZXR1cm4gKGlzRnV0dXJlIHx8IHdpdGhvdXRTdWZmaXgpID8gJ27Dg8KpaMODwqFueSBtw4PCoXNvZHBlcmMnIDogJ27Dg8KpaMODwqFueSBtw4PCoXNvZHBlcmNlJztcbiAgICBjYXNlICdzcyc6XG4gICAgICByZXR1cm4gbnVtICsgKChpc0Z1dHVyZSB8fCB3aXRob3V0U3VmZml4KSA/ICcgbcODwqFzb2RwZXJjJyA6ICcgbcODwqFzb2RwZXJjZScpO1xuICAgIGNhc2UgJ20nOlxuICAgICAgcmV0dXJuICdlZ3knICsgKGlzRnV0dXJlIHx8IHdpdGhvdXRTdWZmaXggPyAnIHBlcmMnIDogJyBwZXJjZScpO1xuICAgIGNhc2UgJ21tJzpcbiAgICAgIHJldHVybiBudW0gKyAoaXNGdXR1cmUgfHwgd2l0aG91dFN1ZmZpeCA/ICcgcGVyYycgOiAnIHBlcmNlJyk7XG4gICAgY2FzZSAnaCc6XG4gICAgICByZXR1cm4gJ2VneScgKyAoaXNGdXR1cmUgfHwgd2l0aG91dFN1ZmZpeCA/ICcgw4PCs3JhJyA6ICcgw4PCs3LDg8KhamEnKTtcbiAgICBjYXNlICdoaCc6XG4gICAgICByZXR1cm4gbnVtICsgKGlzRnV0dXJlIHx8IHdpdGhvdXRTdWZmaXggPyAnIMODwrNyYScgOiAnIMODwrNyw4PCoWphJyk7XG4gICAgY2FzZSAnZCc6XG4gICAgICByZXR1cm4gJ2VneScgKyAoaXNGdXR1cmUgfHwgd2l0aG91dFN1ZmZpeCA/ICcgbmFwJyA6ICcgbmFwamEnKTtcbiAgICBjYXNlICdkZCc6XG4gICAgICByZXR1cm4gbnVtICsgKGlzRnV0dXJlIHx8IHdpdGhvdXRTdWZmaXggPyAnIG5hcCcgOiAnIG5hcGphJyk7XG4gICAgY2FzZSAnTSc6XG4gICAgICByZXR1cm4gJ2VneScgKyAoaXNGdXR1cmUgfHwgd2l0aG91dFN1ZmZpeCA/ICcgaMODwrNuYXAnIDogJyBow4PCs25hcGphJyk7XG4gICAgY2FzZSAnTU0nOlxuICAgICAgcmV0dXJuIG51bSArIChpc0Z1dHVyZSB8fCB3aXRob3V0U3VmZml4ID8gJyBow4PCs25hcCcgOiAnIGjDg8KzbmFwamEnKTtcbiAgICBjYXNlICd5JzpcbiAgICAgIHJldHVybiAnZWd5JyArIChpc0Z1dHVyZSB8fCB3aXRob3V0U3VmZml4ID8gJyDDg8KpdicgOiAnIMODwql2ZScpO1xuICAgIGNhc2UgJ3l5JzpcbiAgICAgIHJldHVybiBudW0gKyAoaXNGdXR1cmUgfHwgd2l0aG91dFN1ZmZpeCA/ICcgw4PCqXYnIDogJyDDg8KpdmUnKTtcbiAgfVxuICByZXR1cm4gJyc7XG59XG5mdW5jdGlvbiB3ZWVrKGRhdGU6IERhdGUsIGlzRnV0dXJlOiBib29sZWFuKSB7XG4gIHJldHVybiAoaXNGdXR1cmUgPyAnJyA6ICdbbcODwrpsdF0gJykgKyAnWycgKyB3ZWVrRW5kaW5nc1tnZXREYXlPZldlZWsoZGF0ZSldICsgJ10gTFRbLWtvcl0nO1xufVxuXG5leHBvcnQgY29uc3QgaHVMb2NhbGU6IExvY2FsZURhdGEgPSB7XG4gIGFiYnI6ICdodScsXG4gIG1vbnRocyA6ICdqYW51w4PCoXJfZmVicnXDg8Khcl9tw4PCoXJjaXVzX8ODwqFwcmlsaXNfbcODwqFqdXNfasODwrpuaXVzX2rDg8K6bGl1c19hdWd1c3p0dXNfc3plcHRlbWJlcl9va3TDg8KzYmVyX25vdmVtYmVyX2RlY2VtYmVyJy5zcGxpdCgnXycpLFxuICBtb250aHNTaG9ydCA6ICdqYW5fZmViX23Dg8KhcmNfw4PCoXByX23Dg8Khal9qw4PCum5fasODwrpsX2F1Z19zemVwdF9va3Rfbm92X2RlYycuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXMgOiAndmFzw4PCoXJuYXBfaMODwql0ZsOFwpFfa2VkZF9zemVyZGFfY3PDg8K8dMODwrZydMODwrZrX3DDg8KpbnRla19zem9tYmF0Jy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5c1Nob3J0IDogJ3Zhc19ow4PCqXRfa2VkZF9zemVfY3PDg8K8dF9ww4PCqW5fc3pvJy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5c01pbiA6ICd2X2hfa19zemVfY3NfcF9zem8nLnNwbGl0KCdfJyksXG4gIGxvbmdEYXRlRm9ybWF0IDoge1xuICAgIExUIDogJ0g6bW0nLFxuICAgIExUUyA6ICdIOm1tOnNzJyxcbiAgICBMIDogJ1lZWVkuTU0uREQuJyxcbiAgICBMTCA6ICdZWVlZLiBNTU1NIEQuJyxcbiAgICBMTEwgOiAnWVlZWS4gTU1NTSBELiBIOm1tJyxcbiAgICBMTExMIDogJ1lZWVkuIE1NTU0gRC4sIGRkZGQgSDptbSdcbiAgfSxcbiAgbWVyaWRpZW1QYXJzZTogL2RlfGR1L2ksXG4gIGlzUE0gKGlucHV0KSB7XG4gICAgcmV0dXJuIGlucHV0LmNoYXJBdCgxKS50b0xvd2VyQ2FzZSgpID09PSAndSc7XG4gIH0sXG4gIG1lcmlkaWVtIChob3VycywgbWludXRlcywgaXNMb3dlcikge1xuICAgIGlmIChob3VycyA8IDEyKSB7XG4gICAgICByZXR1cm4gaXNMb3dlciA9PT0gdHJ1ZSA/ICdkZScgOiAnREUnO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gaXNMb3dlciA9PT0gdHJ1ZSA/ICdkdScgOiAnRFUnO1xuICAgIH1cbiAgfSxcbiAgY2FsZW5kYXIgOiB7XG4gICAgc2FtZURheSA6ICdbbWFdIExUWy1rb3JdJyxcbiAgICBuZXh0RGF5IDogJ1tob2xuYXBdIExUWy1rb3JdJyxcbiAgICBuZXh0V2VlayAoZGF0ZTogRGF0ZSkge1xuICAgICAgcmV0dXJuIHdlZWsoZGF0ZSwgdHJ1ZSk7XG4gICAgfSxcbiAgICBsYXN0RGF5IDogJ1t0ZWduYXBdIExUWy1rb3JdJyxcbiAgICBsYXN0V2VlayAoZGF0ZTogRGF0ZSkge1xuICAgICAgcmV0dXJuIHdlZWsoZGF0ZSwgZmFsc2UpO1xuICAgIH0sXG4gICAgc2FtZUVsc2UgOiAnTCdcbiAgfSxcbiAgcmVsYXRpdmVUaW1lIDoge1xuICAgIGZ1dHVyZSA6ICclcyBtw4PCumx2YScsXG4gICAgcGFzdCA6ICclcycsXG4gICAgcyA6IHRyYW5zbGF0ZSxcbiAgICBzcyA6IHRyYW5zbGF0ZSxcbiAgICBtIDogdHJhbnNsYXRlLFxuICAgIG1tIDogdHJhbnNsYXRlLFxuICAgIGggOiB0cmFuc2xhdGUsXG4gICAgaGggOiB0cmFuc2xhdGUsXG4gICAgZCA6IHRyYW5zbGF0ZSxcbiAgICBkZCA6IHRyYW5zbGF0ZSxcbiAgICBNIDogdHJhbnNsYXRlLFxuICAgIE1NIDogdHJhbnNsYXRlLFxuICAgIHkgOiB0cmFuc2xhdGUsXG4gICAgeXkgOiB0cmFuc2xhdGVcbiAgfSxcbiAgZGF5T2ZNb250aE9yZGluYWxQYXJzZTogL1xcZHsxLDJ9XFwuLyxcbiAgb3JkaW5hbCA6ICclZC4nLFxuICB3ZWVrIDoge1xuICAgIGRvdyA6IDEsIC8vIE1vbmRheSBpcyB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrLlxuICAgIGRveSA6IDQgIC8vIFRoZSB3ZWVrIHRoYXQgY29udGFpbnMgSmFuIDR0aCBpcyB0aGUgZmlyc3Qgd2VlayBvZiB0aGUgeWVhci5cbiAgfVxufTtcbiIsIi8vIHRzbGludDpkaXNhYmxlOmNvbW1lbnQtZm9ybWF0IGJpbmFyeS1leHByZXNzaW9uLW9wZXJhbmQtb3JkZXIgbWF4LWxpbmUtbGVuZ3RoXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1iaXR3aXNlIHByZWZlci10ZW1wbGF0ZSBjeWNsb21hdGljLWNvbXBsZXhpdHlcbi8vIHRzbGludDpkaXNhYmxlOm5vLXNoYWRvd2VkLXZhcmlhYmxlIHN3aXRjaC1kZWZhdWx0IHByZWZlci1jb25zdFxuLy8gdHNsaW50OmRpc2FibGU6b25lLXZhcmlhYmxlLXBlci1kZWNsYXJhdGlvbiBuZXdsaW5lLWJlZm9yZS1yZXR1cm5cbi8vIHRzbGludDpkaXNhYmxlOm5vLXBhcmFtZXRlci1yZWFzc2lnbm1lbnQgcHJlZmVyLXN3aXRjaFxuXG5pbXBvcnQgeyBMb2NhbGVEYXRhIH0gZnJvbSAnLi4vbG9jYWxlL2xvY2FsZS5jbGFzcyc7XG5cbi8vISBtb21lbnQuanMgbG9jYWxlIGNvbmZpZ3VyYXRpb25cbi8vISBsb2NhbGUgOiBJbmRvbmVzaWEgW2lkXVxuLy8hIGF1dGhvciA6IFJvbXkgS3VzdW1hIDogaHR0cHM6Ly9naXRodWIuY29tL3JrdXN1bWFcbi8vISByZWZlcmVuY2U6IGh0dHBzOi8vZ2l0aHViLmNvbS9tb21lbnQvbW9tZW50L2Jsb2IvZGV2ZWxvcC9sb2NhbGUvaWQuanNcblxuZXhwb3J0IGNvbnN0IGlkTG9jYWxlOiBMb2NhbGVEYXRhID0ge1xuICBhYmJyOiAnaWQnLFxuICBtb250aHMgOiAnSmFudWFyaV9GZWJydWFyaV9NYXJldF9BcHJpbF9NZWlfSnVuaV9KdWxpX0FndXN0dXNfU2VwdGVtYmVyX09rdG9iZXJfTm92ZW1iZXJfRGVzZW1iZXInLnNwbGl0KCdfJyksXG4gIG1vbnRoc1Nob3J0IDogJ0phbl9GZWJfTWFyX0Fwcl9NZWlfSnVuX0p1bF9BZ3NfU2VwX09rdF9Ob3ZfRGVzJy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5cyA6ICdNaW5nZ3VfU2VuaW5fU2VsYXNhX1JhYnVfS2FtaXNfSnVtYXRfU2FidHUnLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzU2hvcnQgOiAnTWluX1Nlbl9TZWxfUmFiX0thbV9KdW1fU2FiJy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5c01pbiA6ICdNZ19Tbl9TbF9SYl9LbV9KbV9TYicuc3BsaXQoJ18nKSxcbiAgbG9uZ0RhdGVGb3JtYXQgOiB7XG4gICAgTFQgOiAnSEgubW0nLFxuICAgIExUUyA6ICdISC5tbS5zcycsXG4gICAgTCA6ICdERC9NTS9ZWVlZJyxcbiAgICBMTCA6ICdEIE1NTU0gWVlZWScsXG4gICAgTExMIDogJ0QgTU1NTSBZWVlZIFtwdWt1bF0gSEgubW0nLFxuICAgIExMTEwgOiAnZGRkZCwgRCBNTU1NIFlZWVkgW3B1a3VsXSBISC5tbSdcbiAgfSxcbiAgbWVyaWRpZW1QYXJzZTogL3BhZ2l8c2lhbmd8c29yZXxtYWxhbS8sXG4gIG1lcmlkaWVtSG91cihob3VyLCBtZXJpZGllbSkge1xuICAgIGlmIChob3VyID09PSAxMikge1xuICAgICAgaG91ciA9IDA7XG4gICAgfVxuICAgIGlmIChtZXJpZGllbSA9PT0gJ3BhZ2knKSB7XG4gICAgICByZXR1cm4gaG91cjtcbiAgICB9IGVsc2UgaWYgKG1lcmlkaWVtID09PSAnc2lhbmcnKSB7XG4gICAgICByZXR1cm4gaG91ciA+PSAxMSA/IGhvdXIgOiBob3VyICsgMTI7XG4gICAgfSBlbHNlIGlmIChtZXJpZGllbSA9PT0gJ3NvcmUnIHx8IG1lcmlkaWVtID09PSAnbWFsYW0nKSB7XG4gICAgICByZXR1cm4gaG91ciArIDEyO1xuICAgIH1cbiAgfSxcbiAgbWVyaWRpZW0oaG91cnMsIG1pbnV0ZXMsIGlzTG93ZXIpIHtcbiAgICBpZiAoaG91cnMgPCAxMSkge1xuICAgICAgcmV0dXJuICdwYWdpJztcbiAgICB9IGVsc2UgaWYgKGhvdXJzIDwgMTUpIHtcbiAgICAgIHJldHVybiAnc2lhbmcnO1xuICAgIH0gZWxzZSBpZiAoaG91cnMgPCAxOSkge1xuICAgICAgcmV0dXJuICdzb3JlJztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICdtYWxhbSc7XG4gICAgfVxuICB9LFxuICBjYWxlbmRhciA6IHtcbiAgICBzYW1lRGF5IDogJ1tIYXJpIGluaSBwdWt1bF0gTFQnLFxuICAgIG5leHREYXkgOiAnW0Jlc29rIHB1a3VsXSBMVCcsXG4gICAgbmV4dFdlZWsgOiAnZGRkZCBbcHVrdWxdIExUJyxcbiAgICBsYXN0RGF5IDogJ1tLZW1hcmluIHB1a3VsXSBMVCcsXG4gICAgbGFzdFdlZWsgOiAnZGRkZCBbbGFsdSBwdWt1bF0gTFQnLFxuICAgIHNhbWVFbHNlIDogJ0wnXG4gIH0sXG4gIHJlbGF0aXZlVGltZSA6IHtcbiAgICBmdXR1cmUgOiAnZGFsYW0gJXMnLFxuICAgIHBhc3QgOiAnJXMgeWFuZyBsYWx1JyxcbiAgICBzIDogJ2JlYmVyYXBhIGRldGlrJyxcbiAgICBzcyA6ICclZCBkZXRpaycsXG4gICAgbSA6ICdzZW1lbml0JyxcbiAgICBtbSA6ICclZCBtZW5pdCcsXG4gICAgaCA6ICdzZWphbScsXG4gICAgaGggOiAnJWQgamFtJyxcbiAgICBkIDogJ3NlaGFyaScsXG4gICAgZGQgOiAnJWQgaGFyaScsXG4gICAgTSA6ICdzZWJ1bGFuJyxcbiAgICBNTSA6ICclZCBidWxhbicsXG4gICAgeSA6ICdzZXRhaHVuJyxcbiAgICB5eSA6ICclZCB0YWh1bidcbiAgfSxcbiAgd2VlayA6IHtcbiAgICBkb3cgOiAxLCAvLyBNb25kYXkgaXMgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2Vlay5cbiAgICBkb3kgOiA3ICAvLyBUaGUgd2VlayB0aGF0IGNvbnRhaW5zIEphbiAxc3QgaXMgdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHllYXIuXG4gIH1cbn07XG5cbiIsIi8vIHRzbGludDpkaXNhYmxlOmNvbW1lbnQtZm9ybWF0IGJpbmFyeS1leHByZXNzaW9uLW9wZXJhbmQtb3JkZXIgbWF4LWxpbmUtbGVuZ3RoXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1iaXR3aXNlIHByZWZlci10ZW1wbGF0ZSBjeWNsb21hdGljLWNvbXBsZXhpdHlcbi8vIHRzbGludDpkaXNhYmxlOm5vLXNoYWRvd2VkLXZhcmlhYmxlIHN3aXRjaC1kZWZhdWx0IHByZWZlci1jb25zdFxuLy8gdHNsaW50OmRpc2FibGU6b25lLXZhcmlhYmxlLXBlci1kZWNsYXJhdGlvbiBuZXdsaW5lLWJlZm9yZS1yZXR1cm5cblxuaW1wb3J0IHsgTG9jYWxlRGF0YSB9IGZyb20gJy4uL2xvY2FsZS9sb2NhbGUuY2xhc3MnO1xuaW1wb3J0IHsgZ2V0RGF5T2ZXZWVrIH0gZnJvbSAnLi4vdW5pdHMvZGF5LW9mLXdlZWsnO1xuXG4vLyEgbW9tZW50LmpzIGxvY2FsZSBjb25maWd1cmF0aW9uXG4vLyEgbG9jYWxlIDogSXRhbGlhbiBbaXRdXG4vLyEgYXV0aG9yIDogTG9yZW56byA6IGh0dHBzOi8vZ2l0aHViLmNvbS9hbGllbVxuLy8hIGF1dGhvcjogTWF0dGlhIExhcmVudGlzOiBodHRwczovL2dpdGh1Yi5jb20vbm9zdGFsZ2lhelxuXG5leHBvcnQgY29uc3QgaXRMb2NhbGU6IExvY2FsZURhdGEgPSB7XG4gIGFiYnI6ICdpdCcsXG4gIG1vbnRoczogJ2dlbm5haW9fZmViYnJhaW9fbWFyem9fYXByaWxlX21hZ2dpb19naXVnbm9fbHVnbGlvX2Fnb3N0b19zZXR0ZW1icmVfb3R0b2JyZV9ub3ZlbWJyZV9kaWNlbWJyZScuc3BsaXQoJ18nKSxcbiAgbW9udGhzU2hvcnQ6ICdnZW5fZmViX21hcl9hcHJfbWFnX2dpdV9sdWdfYWdvX3NldF9vdHRfbm92X2RpYycuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXM6ICdkb21lbmljYV9sdW5lZMODwqxfbWFydGVkw4PCrF9tZXJjb2xlZMODwqxfZ2lvdmVkw4PCrF92ZW5lcmTDg8KsX3NhYmF0bycuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNTaG9ydDogJ2RvbV9sdW5fbWFyX21lcl9naW9fdmVuX3NhYicuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNNaW46ICdkb19sdV9tYV9tZV9naV92ZV9zYScuc3BsaXQoJ18nKSxcbiAgbG9uZ0RhdGVGb3JtYXQ6IHtcbiAgICBMVDogJ0hIOm1tJyxcbiAgICBMVFM6ICdISDptbTpzcycsXG4gICAgTDogJ0REL01NL1lZWVknLFxuICAgIExMOiAnRCBNTU1NIFlZWVknLFxuICAgIExMTDogJ0QgTU1NTSBZWVlZIEhIOm1tJyxcbiAgICBMTExMOiAnZGRkZCBEIE1NTU0gWVlZWSBISDptbSdcbiAgfSxcbiAgY2FsZW5kYXI6IHtcbiAgICBzYW1lRGF5OiAnW09nZ2kgYWxsZV0gTFQnLFxuICAgIG5leHREYXk6ICdbRG9tYW5pIGFsbGVdIExUJyxcbiAgICBuZXh0V2VlazogJ2RkZGQgW2FsbGVdIExUJyxcbiAgICBsYXN0RGF5OiAnW0llcmkgYWxsZV0gTFQnLFxuICAgIGxhc3RXZWVrKGRhdGU6IERhdGUpIHtcbiAgICAgIHN3aXRjaCAoZ2V0RGF5T2ZXZWVrKGRhdGUpKSB7XG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgICByZXR1cm4gJ1tsYSBzY29yc2FdIGRkZGQgW2FsbGVdIExUJztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZXR1cm4gJ1tsbyBzY29yc29dIGRkZGQgW2FsbGVdIExUJztcbiAgICAgIH1cbiAgICB9LFxuICAgIHNhbWVFbHNlOiAnTCdcbiAgfSxcbiAgcmVsYXRpdmVUaW1lOiB7XG4gICAgZnV0dXJlKG51bTogbnVtYmVyKTogc3RyaW5nIHtcbiAgICAgIHJldHVybiAoKC9eWzAtOV0uKyQvKS50ZXN0KG51bS50b1N0cmluZygxMCkpID8gJ3RyYScgOiAnaW4nKSArICcgJyArIG51bTtcbiAgICB9LFxuICAgIHBhc3Q6ICclcyBmYScsXG4gICAgczogJ2FsY3VuaSBzZWNvbmRpJyxcbiAgICBzczogJyVkIHNlY29uZGknLFxuICAgIG06ICd1biBtaW51dG8nLFxuICAgIG1tOiAnJWQgbWludXRpJyxcbiAgICBoOiAndW5cXCdvcmEnLFxuICAgIGhoOiAnJWQgb3JlJyxcbiAgICBkOiAndW4gZ2lvcm5vJyxcbiAgICBkZDogJyVkIGdpb3JuaScsXG4gICAgTTogJ3VuIG1lc2UnLFxuICAgIE1NOiAnJWQgbWVzaScsXG4gICAgeTogJ3VuIGFubm8nLFxuICAgIHl5OiAnJWQgYW5uaSdcbiAgfSxcbiAgZGF5T2ZNb250aE9yZGluYWxQYXJzZTogL1xcZHsxLDJ9w4LCui8sXG4gIG9yZGluYWw6ICclZMOCwronLFxuICB3ZWVrOiB7XG4gICAgZG93OiAxLCAvLyBNb25kYXkgaXMgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2Vlay5cbiAgICBkb3k6IDQgIC8vIFRoZSB3ZWVrIHRoYXQgY29udGFpbnMgSmFuIDR0aCBpcyB0aGUgZmlyc3Qgd2VlayBvZiB0aGUgeWVhci5cbiAgfVxufTtcbiIsIi8vIHRzbGludDpkaXNhYmxlOmNvbW1lbnQtZm9ybWF0IGJpbmFyeS1leHByZXNzaW9uLW9wZXJhbmQtb3JkZXIgbWF4LWxpbmUtbGVuZ3RoXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1iaXR3aXNlIHByZWZlci10ZW1wbGF0ZSBjeWNsb21hdGljLWNvbXBsZXhpdHlcbi8vIHRzbGludDpkaXNhYmxlOm5vLXNoYWRvd2VkLXZhcmlhYmxlIHN3aXRjaC1kZWZhdWx0IHByZWZlci1jb25zdFxuLy8gdHNsaW50OmRpc2FibGU6b25lLXZhcmlhYmxlLXBlci1kZWNsYXJhdGlvbiBuZXdsaW5lLWJlZm9yZS1yZXR1cm5cblxuaW1wb3J0IHsgTG9jYWxlRGF0YSB9IGZyb20gJy4uL2xvY2FsZS9sb2NhbGUuY2xhc3MnO1xuXG4vLyEgbW9tZW50LmpzIGxvY2FsZSBjb25maWd1cmF0aW9uXG4vLyEgbG9jYWxlIDogSmFwYW5lc2UgW2phXVxuLy8hIGF1dGhvciA6IExJIExvbmcgOiBodHRwczovL2dpdGh1Yi5jb20vYmFyeW9uXG5cbmV4cG9ydCBjb25zdCBqYUxvY2FsZTogTG9jYWxlRGF0YSA9ICB7XG4gIGFiYnI6ICdqYScsXG4gIG1vbnRocyA6ICcxw6bCnMKIXzLDpsKcwohfM8OmwpzCiF80w6bCnMKIXzXDpsKcwohfNsOmwpzCiF83w6bCnMKIXzjDpsKcwohfOcOmwpzCiF8xMMOmwpzCiF8xMcOmwpzCiF8xMsOmwpzCiCcuc3BsaXQoJ18nKSxcbiAgbW9udGhzU2hvcnQgOiAnMcOmwpzCiF8yw6bCnMKIXzPDpsKcwohfNMOmwpzCiF81w6bCnMKIXzbDpsKcwohfN8OmwpzCiF84w6bCnMKIXznDpsKcwohfMTDDpsKcwohfMTHDpsKcwohfMTLDpsKcwognLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzIDogJ8OmwpfCpcOmwpvCnMOmwpfCpV/DpsKcwojDpsKbwpzDpsKXwqVfw6fCgcKrw6bCm8Kcw6bCl8KlX8OmwrDCtMOmwpvCnMOmwpfCpV/DpsKcwqjDpsKbwpzDpsKXwqVfw6nCh8KRw6bCm8Kcw6bCl8KlX8OlwpzCn8OmwpvCnMOmwpfCpScuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNTaG9ydCA6ICfDpsKXwqVfw6bCnMKIX8OnwoHCq1/DpsKwwrRfw6bCnMKoX8OpwofCkV/DpcKcwp8nLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzTWluIDogJ8OmwpfCpV/DpsKcwohfw6fCgcKrX8OmwrDCtF/DpsKcwqhfw6nCh8KRX8OlwpzCnycuc3BsaXQoJ18nKSxcbiAgbG9uZ0RhdGVGb3JtYXQgOiB7XG4gICAgTFQgOiAnSEg6bW0nLFxuICAgIExUUyA6ICdISDptbTpzcycsXG4gICAgTCA6ICdZWVlZL01NL0REJyxcbiAgICBMTCA6ICdZWVlZw6XCucK0TcOmwpzCiETDpsKXwqUnLFxuICAgIExMTCA6ICdZWVlZw6XCucK0TcOmwpzCiETDpsKXwqUgSEg6bW0nLFxuICAgIExMTEwgOiAnWVlZWcOlwrnCtE3DpsKcwohEw6bCl8KlIEhIOm1tIGRkZGQnLFxuICAgIGwgOiAnWVlZWS9NTS9ERCcsXG4gICAgbGwgOiAnWVlZWcOlwrnCtE3DpsKcwohEw6bCl8KlJyxcbiAgICBsbGwgOiAnWVlZWcOlwrnCtE3DpsKcwohEw6bCl8KlIEhIOm1tJyxcbiAgICBsbGxsIDogJ1lZWVnDpcK5wrRNw6bCnMKIRMOmwpfCpSBISDptbSBkZGRkJ1xuICB9LFxuICBtZXJpZGllbVBhcnNlOiAvw6XCjcKIw6XCicKNfMOlwo3CiMOlwr7CjC9pLFxuICBpc1BNIChpbnB1dCkge1xuICAgIHJldHVybiBpbnB1dCA9PT0gJ8Olwo3CiMOlwr7CjCc7XG4gIH0sXG4gIG1lcmlkaWVtIChob3VyLCBtaW51dGUsIGlzTG93ZXIpIHtcbiAgICBpZiAoaG91ciA8IDEyKSB7XG4gICAgICByZXR1cm4gJ8Olwo3CiMOlwonCjSc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAnw6XCjcKIw6XCvsKMJztcbiAgICB9XG4gIH0sXG4gIGNhbGVuZGFyIDoge1xuICAgIHNhbWVEYXkgOiAnW8OkwrvCisOmwpfCpV0gTFQnLFxuICAgIG5leHREYXkgOiAnW8OmwpjCjsOmwpfCpV0gTFQnLFxuICAgIG5leHRXZWVrIDogJ1vDpsKdwqXDqcKAwrFdZGRkZCBMVCcsXG4gICAgbGFzdERheSA6ICdbw6bCmMKow6bCl8KlXSBMVCcsXG4gICAgbGFzdFdlZWsgOiAnW8OlwonCjcOpwoDCsV1kZGRkIExUJyxcbiAgICBzYW1lRWxzZSA6ICdMJ1xuICB9LFxuICBkYXlPZk1vbnRoT3JkaW5hbFBhcnNlIDogL1xcZHsxLDJ9w6bCl8KlLyxcbiAgb3JkaW5hbCAobnVtOiBudW1iZXIsIHBlcmlvZDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBzd2l0Y2ggKHBlcmlvZCkge1xuICAgICAgY2FzZSAnZCc6XG4gICAgICBjYXNlICdEJzpcbiAgICAgIGNhc2UgJ0RERCc6XG4gICAgICAgIHJldHVybiBudW0gKyAnw6bCl8KlJztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBudW0udG9TdHJpbmcoMTApO1xuICAgIH1cbiAgfSxcbiAgcmVsYXRpdmVUaW1lIDoge1xuICAgIGZ1dHVyZSA6ICclc8Olwr7CjCcsXG4gICAgcGFzdCA6ICclc8OlwonCjScsXG4gICAgcyA6ICfDpsKVwrDDp8KnwpInLFxuICAgIHNzIDogJyVkw6fCp8KSJyxcbiAgICBtIDogJzHDpcKIwoYnLFxuICAgIG1tIDogJyVkw6XCiMKGJyxcbiAgICBoIDogJzHDpsKZwoLDqcKWwpMnLFxuICAgIGhoIDogJyVkw6bCmcKCw6nClsKTJyxcbiAgICBkIDogJzHDpsKXwqUnLFxuICAgIGRkIDogJyVkw6bCl8KlJyxcbiAgICBNIDogJzHDo8KDwrbDpsKcwognLFxuICAgIE1NIDogJyVkw6PCg8K2w6bCnMKIJyxcbiAgICB5IDogJzHDpcK5wrQnLFxuICAgIHl5IDogJyVkw6XCucK0J1xuICB9XG59O1xuIiwiLy8gdHNsaW50OmRpc2FibGU6Y29tbWVudC1mb3JtYXQgYmluYXJ5LWV4cHJlc3Npb24tb3BlcmFuZC1vcmRlciBtYXgtbGluZS1sZW5ndGhcbi8vIHRzbGludDpkaXNhYmxlOm5vLWJpdHdpc2UgcHJlZmVyLXRlbXBsYXRlIGN5Y2xvbWF0aWMtY29tcGxleGl0eVxuLy8gdHNsaW50OmRpc2FibGU6bm8tc2hhZG93ZWQtdmFyaWFibGUgc3dpdGNoLWRlZmF1bHQgcHJlZmVyLWNvbnN0XG4vLyB0c2xpbnQ6ZGlzYWJsZTpvbmUtdmFyaWFibGUtcGVyLWRlY2xhcmF0aW9uIG5ld2xpbmUtYmVmb3JlLXJldHVyblxuLy8gdHNsaW50OmRpc2FibGU6b2JqZWN0LWxpdGVyYWwtc2hvcnRoYW5kXG5cbmltcG9ydCB7IExvY2FsZURhdGEgfSBmcm9tICcuLi9sb2NhbGUvbG9jYWxlLmNsYXNzJztcblxuLy8hIG1vbWVudC5qcyBsb2NhbGUgY29uZmlndXJhdGlvblxuLy8hIGxvY2FsZSA6IEtvcmVhbiBba29dXG4vLyEgYXV0aG9yIDogS3l1bmd3b29rLCBQYXJrIDogaHR0cHM6Ly9naXRodWIuY29tL2t5dW5ndzAwa1xuLy8hIGF1dGhvciA6IEplZWV5dWwgTGVlIDxqZWVleXVsQGdtYWlsLmNvbT5cblxuZXhwb3J0IGNvbnN0IGtvTG9jYWxlOiBMb2NhbGVEYXRhID0ge1xuICBhYmJyOiAna28nLFxuICBtb250aHMgOiAnMcOswpvClF8yw6zCm8KUXzPDrMKbwpRfNMOswpvClF81w6zCm8KUXzbDrMKbwpRfN8OswpvClF84w6zCm8KUXznDrMKbwpRfMTDDrMKbwpRfMTHDrMKbwpRfMTLDrMKbwpQnLnNwbGl0KCdfJyksXG4gIG1vbnRoc1Nob3J0IDogJzHDrMKbwpRfMsOswpvClF8zw6zCm8KUXzTDrMKbwpRfNcOswpvClF82w6zCm8KUXzfDrMKbwpRfOMOswpvClF85w6zCm8KUXzEww6zCm8KUXzExw6zCm8KUXzEyw6zCm8KUJy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5cyA6ICfDrMKdwrzDrMKawpTDrMKdwrxfw6zCm8KUw6zCmsKUw6zCncK8X8OtwpnClMOswprClMOswp3CvF/DrMKIwpjDrMKawpTDrMKdwrxfw6vCqsKpw6zCmsKUw6zCncK8X8OqwrjCiMOswprClMOswp3CvF/DrcKGwqDDrMKawpTDrMKdwrwnLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzU2hvcnQgOiAnw6zCncK8X8OswpvClF/DrcKZwpRfw6zCiMKYX8OrwqrCqV/DqsK4wohfw63ChsKgJy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5c01pbiA6ICfDrMKdwrxfw6zCm8KUX8OtwpnClF/DrMKIwphfw6vCqsKpX8OqwrjCiF/DrcKGwqAnLnNwbGl0KCdfJyksXG4gIGxvbmdEYXRlRm9ybWF0IDoge1xuICAgIExUIDogJ0EgaDptbScsXG4gICAgTFRTIDogJ0EgaDptbTpzcycsXG4gICAgTCA6ICdZWVlZLk1NLkREJyxcbiAgICBMTCA6ICdZWVlZw6vChcKEIE1NTU0gRMOswp3CvCcsXG4gICAgTExMIDogJ1lZWVnDq8KFwoQgTU1NTSBEw6zCncK8IEEgaDptbScsXG4gICAgTExMTCA6ICdZWVlZw6vChcKEIE1NTU0gRMOswp3CvCBkZGRkIEEgaDptbScsXG4gICAgbCA6ICdZWVlZLk1NLkREJyxcbiAgICBsbCA6ICdZWVlZw6vChcKEIE1NTU0gRMOswp3CvCcsXG4gICAgbGxsIDogJ1lZWVnDq8KFwoQgTU1NTSBEw6zCncK8IEEgaDptbScsXG4gICAgbGxsbCA6ICdZWVlZw6vChcKEIE1NTU0gRMOswp3CvCBkZGRkIEEgaDptbSdcbiAgfSxcbiAgY2FsZW5kYXIgOiB7XG4gICAgc2FtZURheSA6ICfDrMKYwqTDq8KKwpggTFQnLFxuICAgIG5leHREYXkgOiAnw6vCgsK0w6zCncK8IExUJyxcbiAgICBuZXh0V2VlayA6ICdkZGRkIExUJyxcbiAgICBsYXN0RGF5IDogJ8OswpbCtMOswqDCnCBMVCcsXG4gICAgbGFzdFdlZWsgOiAnw6zCp8KAw6vCgsKcw6zCo8K8IGRkZGQgTFQnLFxuICAgIHNhbWVFbHNlIDogJ0wnXG4gIH0sXG4gIHJlbGF0aXZlVGltZSA6IHtcbiAgICBmdXR1cmUgOiAnJXMgw63Cm8KEJyxcbiAgICBwYXN0IDogJyVzIMOswqDChCcsXG4gICAgcyA6ICfDq8Kqwocgw6zCtMKIJyxcbiAgICBzcyA6ICclZMOswrTCiCcsXG4gICAgbSA6ICcxw6vCtsKEJyxcbiAgICBtbSA6ICclZMOrwrbChCcsXG4gICAgaCA6ICfDrcKVwpwgw6zCi8Kcw6rCsMKEJyxcbiAgICBoaCA6ICclZMOswovCnMOqwrDChCcsXG4gICAgZCA6ICfDrcKVwpjDq8KjwqgnLFxuICAgIGRkIDogJyVkw6zCncK8JyxcbiAgICBNIDogJ8OtwpXCnCDDq8KLwqwnLFxuICAgIE1NIDogJyVkw6vCi8KsJyxcbiAgICB5IDogJ8Oswp3CvCDDq8KFwoQnLFxuICAgIHl5IDogJyVkw6vChcKEJ1xuICB9LFxuICBkYXlPZk1vbnRoT3JkaW5hbFBhcnNlIDogL1xcZHsxLDJ9KMOswp3CvHzDrMKbwpR8w6zCo8K8KS8sXG4gIG9yZGluYWwgOiBmdW5jdGlvbiAobnVtOiBudW1iZXIsIHBlcmlvZDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBzd2l0Y2ggKHBlcmlvZCkge1xuICAgICAgY2FzZSAnZCc6XG4gICAgICBjYXNlICdEJzpcbiAgICAgIGNhc2UgJ0RERCc6XG4gICAgICAgIHJldHVybiBudW0gKyAnw6zCncK8JztcbiAgICAgIGNhc2UgJ00nOlxuICAgICAgICByZXR1cm4gbnVtICsgJ8OswpvClCc7XG4gICAgICBjYXNlICd3JzpcbiAgICAgIGNhc2UgJ1cnOlxuICAgICAgICByZXR1cm4gbnVtICsgJ8OswqPCvCc7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbnVtLnRvU3RyaW5nKDEwKTtcbiAgICB9XG4gIH0sXG4gIG1lcmlkaWVtUGFyc2UgOiAvw6zCmMKkw6zCoMKEfMOswpjCpMOtwpvChC8sXG4gIGlzUE0gOiBmdW5jdGlvbiAodG9rZW4pIHtcbiAgICByZXR1cm4gdG9rZW4gPT09ICfDrMKYwqTDrcKbwoQnO1xuICB9LFxuICBtZXJpZGllbSA6IGZ1bmN0aW9uIChob3VyLCBtaW51dGUsIGlzVXBwZXIpIHtcbiAgICByZXR1cm4gaG91ciA8IDEyID8gJ8OswpjCpMOswqDChCcgOiAnw6zCmMKkw63Cm8KEJztcbiAgfVxufTtcbiIsIi8vIHRzbGludDpkaXNhYmxlOmNvbW1lbnQtZm9ybWF0IGJpbmFyeS1leHByZXNzaW9uLW9wZXJhbmQtb3JkZXIgbWF4LWxpbmUtbGVuZ3RoXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1iaXR3aXNlIHByZWZlci10ZW1wbGF0ZSBjeWNsb21hdGljLWNvbXBsZXhpdHlcbi8vIHRzbGludDpkaXNhYmxlOm5vLXNoYWRvd2VkLXZhcmlhYmxlIHN3aXRjaC1kZWZhdWx0IHByZWZlci1jb25zdFxuLy8gdHNsaW50OmRpc2FibGU6b25lLXZhcmlhYmxlLXBlci1kZWNsYXJhdGlvbiBuZXdsaW5lLWJlZm9yZS1yZXR1cm5cblxuaW1wb3J0IHsgTG9jYWxlRGF0YSB9IGZyb20gJy4uL2xvY2FsZS9sb2NhbGUuY2xhc3MnO1xuXG4vLyEgbW9tZW50LmpzIGxvY2FsZSBjb25maWd1cmF0aW9uXG4vLyEgbG9jYWxlIDogTGl0aHVhbmlhbiBbbHRdXG4vLyEgYXV0aG9yIDogU3RhbmlzbGF2YXMgR3VrIDogaHR0cHM6Ly9naXRodWIuY29tL2l4b3N0ZXJcblxuY29uc3QgdW5pdHMgPSB7XG4gIHNzIDogJ3Nla3VuZMOEwpdfc2VrdW5kw4XCvmnDhcKzX3Nla3VuZGVzJyxcbiAgbSA6ICdtaW51dMOEwpdfbWludXTDhMKXc19taW51dMOEwpknLFxuICBtbTogJ21pbnV0w4TCl3NfbWludcOEwo1pw4XCs19taW51dGVzJyxcbiAgaCA6ICd2YWxhbmRhX3ZhbGFuZG9zX3ZhbGFuZMOEwoUnLFxuICBoaDogJ3ZhbGFuZG9zX3ZhbGFuZMOFwrNfdmFsYW5kYXMnLFxuICBkIDogJ2RpZW5hX2RpZW5vc19kaWVuw4TChScsXG4gIGRkOiAnZGllbm9zX2RpZW7DhcKzX2RpZW5hcycsXG4gIE0gOiAnbcOEwpdudW9fbcOEwpduZXNpb19tw4TCl25lc8OEwq8nLFxuICBNTTogJ23DhMKXbmVzaWFpX23DhMKXbmVzacOFwrNfbcOEwpduZXNpdXMnLFxuICB5IDogJ21ldGFpX21ldMOFwrNfbWV0dXMnLFxuICB5eTogJ21ldGFpX21ldMOFwrNfbWV0dXMnXG59O1xuZnVuY3Rpb24gdHJhbnNsYXRlU2Vjb25kcyhudW06IG51bWJlciwgd2l0aG91dFN1ZmZpeDogYm9vbGVhbiwga2V5OiBzdHJpbmcsIGlzRnV0dXJlOiBib29sZWFuKSB7XG4gIGlmICh3aXRob3V0U3VmZml4KSB7XG4gICAgICByZXR1cm4gJ2tlbGlvcyBzZWt1bmTDhMKXcyc7XG4gIH0gZWxzZSB7XG4gICAgICByZXR1cm4gaXNGdXR1cmUgPyAna2VsacOFwrMgc2VrdW5kw4XCvmnDhcKzJyA6ICdrZWxpYXMgc2VrdW5kZXMnO1xuICB9XG59XG5mdW5jdGlvbiB0cmFuc2xhdGVTaW5ndWxhcihudW06IG51bWJlciwgd2l0aG91dFN1ZmZpeDogYm9vbGVhbiwga2V5OiBzdHJpbmcsIGlzRnV0dXJlOiBib29sZWFuKSB7XG4gIHJldHVybiB3aXRob3V0U3VmZml4ID8gZm9ybXMoa2V5KVswXSA6IChpc0Z1dHVyZSA/IGZvcm1zKGtleSlbMV0gOiBmb3JtcyhrZXkpWzJdKTtcbn1cbmZ1bmN0aW9uIHNwZWNpYWwobnVtOiBudW1iZXIpIHtcbiAgcmV0dXJuIG51bSAlIDEwID09PSAwIHx8IChudW0gPiAxMCAmJiBudW0gPCAyMCk7XG59XG5mdW5jdGlvbiBmb3JtcyhrZXk6IHN0cmluZykge1xuICByZXR1cm4gdW5pdHNba2V5XS5zcGxpdCgnXycpO1xufVxuZnVuY3Rpb24gdHJhbnNsYXRlKG51bTogbnVtYmVyLCB3aXRob3V0U3VmZml4OiBib29sZWFuLCBrZXk6IHN0cmluZywgaXNGdXR1cmU6IGJvb2xlYW4pIHtcbiAgbGV0IHJlc3VsdCA9IG51bSArICcgJztcbiAgaWYgKG51bSA9PT0gMSkge1xuICAgICAgcmV0dXJuIHJlc3VsdCArIHRyYW5zbGF0ZVNpbmd1bGFyKG51bSwgd2l0aG91dFN1ZmZpeCwga2V5WzBdLCBpc0Z1dHVyZSk7XG4gIH0gZWxzZSBpZiAod2l0aG91dFN1ZmZpeCkge1xuICAgICAgcmV0dXJuIHJlc3VsdCArIChzcGVjaWFsKG51bSkgPyBmb3JtcyhrZXkpWzFdIDogZm9ybXMoa2V5KVswXSk7XG4gIH0gZWxzZSB7XG4gICAgICBpZiAoaXNGdXR1cmUpIHtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0ICsgZm9ybXMoa2V5KVsxXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdCArIChzcGVjaWFsKG51bSkgPyBmb3JtcyhrZXkpWzFdIDogZm9ybXMoa2V5KVsyXSk7XG4gICAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGx0TG9jYWxlOiBMb2NhbGVEYXRhID0ge1xuICBhYmJyOiAnbHQnLFxuICBtb250aHMgOiB7XG4gICAgZm9ybWF0OiAnc2F1c2lvX3Zhc2FyaW9fa292b19iYWxhbmTDhcK+aW9fZ2VndcOFwr7DhMKXc19iaXLDhcK+ZWxpb19saWVwb3NfcnVncGrDhcKrw4TCjWlvX3J1Z3PDhMKXam9fc3BhbGlvX2xhcGtyacOEwo1pb19ncnVvZMOFwr5pbycuc3BsaXQoJ18nKSxcbiAgICBzdGFuZGFsb25lOiAnc2F1c2lzX3Zhc2FyaXNfa292YXNfYmFsYW5kaXNfZ2VndcOFwr7DhMKXX2JpcsOFwr5lbGlzX2xpZXBhX3J1Z3Bqw4XCq3Rpc19ydWdzw4TCl2ppc19zcGFsaXNfbGFwa3JpdGlzX2dydW9kaXMnLnNwbGl0KCdfJyksXG4gICAgaXNGb3JtYXQ6IC9EW29EXT8oXFxbW15cXFtcXF1dKlxcXXxcXHMpK01NTU0/fE1NTU0/KFxcW1teXFxbXFxdXSpcXF18XFxzKStEW29EXT8vXG4gIH0sXG4gIG1vbnRoc1Nob3J0IDogJ3NhdV92YXNfa292X2JhbF9nZWdfYmlyX2xpZV9yZ3BfcmdzX3NwYV9sYXBfZ3JkJy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5cyA6IHtcbiAgICAgIGZvcm1hdDogJ3Nla21hZGllbsOEwq9fcGlybWFkaWVuw4TCr19hbnRyYWRpZW7DhMKvX3RyZcOEwo1pYWRpZW7DhMKvX2tldHZpcnRhZGllbsOEwq9fcGVua3RhZGllbsOEwq9fw4XCoWXDhcKhdGFkaWVuw4TCrycuc3BsaXQoJ18nKSxcbiAgICAgIHN0YW5kYWxvbmU6ICdzZWttYWRpZW5pc19waXJtYWRpZW5pc19hbnRyYWRpZW5pc190cmXDhMKNaWFkaWVuaXNfa2V0dmlydGFkaWVuaXNfcGVua3RhZGllbmlzX8OFwqFlw4XCoXRhZGllbmlzJy5zcGxpdCgnXycpLFxuICAgICAgaXNGb3JtYXQ6IC9kZGRkIEhIOm1tL1xuICB9LFxuICB3ZWVrZGF5c1Nob3J0IDogJ1Nla19QaXJfQW50X1RyZV9LZXRfUGVuX8OFwqBlw4XCoScuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNNaW4gOiAnU19QX0FfVF9LX1BuX8OFwqAnLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzUGFyc2VFeGFjdCA6IHRydWUsXG4gIGxvbmdEYXRlRm9ybWF0IDoge1xuICAgICAgTFQgOiAnSEg6bW0nLFxuICAgICAgTFRTIDogJ0hIOm1tOnNzJyxcbiAgICAgIEwgOiAnWVlZWS1NTS1ERCcsXG4gICAgICBMTCA6ICdZWVlZIFttLl0gTU1NTSBEIFtkLl0nLFxuICAgICAgTExMIDogJ1lZWVkgW20uXSBNTU1NIEQgW2QuXSwgSEg6bW0gW3ZhbC5dJyxcbiAgICAgIExMTEwgOiAnWVlZWSBbbS5dIE1NTU0gRCBbZC5dLCBkZGRkLCBISDptbSBbdmFsLl0nLFxuICAgICAgbCA6ICdZWVlZLU1NLUREJyxcbiAgICAgIGxsIDogJ1lZWVkgW20uXSBNTU1NIEQgW2QuXScsXG4gICAgICBsbGwgOiAnWVlZWSBbbS5dIE1NTU0gRCBbZC5dLCBISDptbSBbdmFsLl0nLFxuICAgICAgbGxsbCA6ICdZWVlZIFttLl0gTU1NTSBEIFtkLl0sIGRkZCwgSEg6bW0gW3ZhbC5dJ1xuICB9LFxuICBjYWxlbmRhciA6IHtcbiAgICAgIHNhbWVEYXkgOiAnW8OFwqBpYW5kaWVuXSBMVCcsXG4gICAgICBuZXh0RGF5IDogJ1tSeXRval0gTFQnLFxuICAgICAgbmV4dFdlZWsgOiAnZGRkZCBMVCcsXG4gICAgICBsYXN0RGF5IDogJ1tWYWthcl0gTFQnLFxuICAgICAgbGFzdFdlZWsgOiAnW1ByYcOEwpdqdXPDhMKvXSBkZGRkIExUJyxcbiAgICAgIHNhbWVFbHNlIDogJ0wnXG4gIH0sXG4gIHJlbGF0aXZlVGltZSA6IHtcbiAgICAgIGZ1dHVyZSA6ICdwbyAlcycsXG4gICAgICBwYXN0IDogJ3ByaWXDhcKhICVzJyxcbiAgICAgIHMgOiB0cmFuc2xhdGVTZWNvbmRzLFxuICAgICAgc3MgOiB0cmFuc2xhdGUsXG4gICAgICBtIDogdHJhbnNsYXRlU2luZ3VsYXIsXG4gICAgICBtbSA6IHRyYW5zbGF0ZSxcbiAgICAgIGggOiB0cmFuc2xhdGVTaW5ndWxhcixcbiAgICAgIGhoIDogdHJhbnNsYXRlLFxuICAgICAgZCA6IHRyYW5zbGF0ZVNpbmd1bGFyLFxuICAgICAgZGQgOiB0cmFuc2xhdGUsXG4gICAgICBNIDogdHJhbnNsYXRlU2luZ3VsYXIsXG4gICAgICBNTSA6IHRyYW5zbGF0ZSxcbiAgICAgIHkgOiB0cmFuc2xhdGVTaW5ndWxhcixcbiAgICAgIHl5IDogdHJhbnNsYXRlXG4gIH0sXG4gIGRheU9mTW9udGhPcmRpbmFsUGFyc2U6IC9cXGR7MSwyfS1vamkvLFxuICBvcmRpbmFsKG51bSkge1xuICAgICAgcmV0dXJuIG51bSArICctb2ppJztcbiAgfSxcbiAgd2VlayA6IHtcbiAgICAgIGRvdyA6IDEsIC8vIE1vbmRheSBpcyB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrLlxuICAgICAgZG95IDogNCAgLy8gVGhlIHdlZWsgdGhhdCBjb250YWlucyBKYW4gNHRoIGlzIHRoZSBmaXJzdCB3ZWVrIG9mIHRoZSB5ZWFyLlxuICB9XG59O1xuIiwiLy8gdHNsaW50OmRpc2FibGU6Y29tbWVudC1mb3JtYXQgYmluYXJ5LWV4cHJlc3Npb24tb3BlcmFuZC1vcmRlciBtYXgtbGluZS1sZW5ndGhcbi8vIHRzbGludDpkaXNhYmxlOm5vLWJpdHdpc2UgcHJlZmVyLXRlbXBsYXRlIGN5Y2xvbWF0aWMtY29tcGxleGl0eVxuLy8gdHNsaW50OmRpc2FibGU6bm8tc2hhZG93ZWQtdmFyaWFibGUgc3dpdGNoLWRlZmF1bHQgcHJlZmVyLWNvbnN0XG4vLyB0c2xpbnQ6ZGlzYWJsZTpvbmUtdmFyaWFibGUtcGVyLWRlY2xhcmF0aW9uIG5ld2xpbmUtYmVmb3JlLXJldHVyblxuLy8gdHNsaW50OmRpc2FibGU6b2JqZWN0LWxpdGVyYWwtc2hvcnRoYW5kXG5cbmltcG9ydCB7IExvY2FsZURhdGEgfSBmcm9tICcuLi9sb2NhbGUvbG9jYWxlLmNsYXNzJztcblxuLy8hIG1vbWVudC5qcyBsb2NhbGUgY29uZmlndXJhdGlvblxuLy8hIGxvY2FsZSA6IE1vbmdvbGlhbiBbbW5dXG4vLyEgYXV0aG9yIDogSmF2a2hsYW50dWdzIE55YW1kb3JqIDogaHR0cHM6Ly9naXRodWIuY29tL2phdmtoYWFuajdcblxuZnVuY3Rpb24gdHJhbnNsYXRlKG51bTogbnVtYmVyLCB3aXRob3V0U3VmZml4OiBib29sZWFuLCBrZXk6IHN0cmluZywgaXNGdXR1cmU6IGJvb2xlYW4pIHtcbiAgc3dpdGNoIChrZXkpIHtcbiAgICBjYXNlICdzJzpcbiAgICAgIHJldHVybiB3aXRob3V0U3VmZml4ID8gJ8ORwoXDkcKNw5DCtMORwoXDkcKNw5DCvSDDkcKBw5DCtcOQwrrDkcKDw5DCvcOQwrQnIDogJ8ORwoXDkcKNw5DCtMORwoXDkcKNw5DCvSDDkcKBw5DCtcOQwrrDkcKDw5DCvcOQwrTDkcKLw5DCvSc7XG4gICAgY2FzZSAnc3MnOlxuICAgICAgcmV0dXJuIG51bSArICh3aXRob3V0U3VmZml4ID8gJyDDkcKBw5DCtcOQwrrDkcKDw5DCvcOQwrQnIDogJyDDkcKBw5DCtcOQwrrDkcKDw5DCvcOQwrTDkcKLw5DCvScpO1xuICAgIGNhc2UgJ20nOlxuICAgIGNhc2UgJ21tJzpcbiAgICAgIHJldHVybiBudW0gKyAod2l0aG91dFN1ZmZpeCA/ICcgw5DCvMOQwrjDkMK9w5HCg8ORwoInIDogJyDDkMK8w5DCuMOQwr3DkcKDw5HCgsORwovDkMK9Jyk7XG4gICAgY2FzZSAnaCc6XG4gICAgY2FzZSAnaGgnOlxuICAgICAgcmV0dXJuIG51bSArICh3aXRob3V0U3VmZml4ID8gJyDDkcKGw5DCsMOQwrMnIDogJyDDkcKGw5DCsMOQwrPDkMK4w5DCucOQwr0nKTtcbiAgICBjYXNlICdkJzpcbiAgICBjYXNlICdkZCc6XG4gICAgICByZXR1cm4gbnVtICsgKHdpdGhvdXRTdWZmaXggPyAnIMOTwqnDkMK0w5PCqcORwoAnIDogJyDDk8Kpw5DCtMORwoDDkMK4w5DCucOQwr0nKTtcbiAgICBjYXNlICdNJzpcbiAgICBjYXNlICdNTSc6XG4gICAgICByZXR1cm4gbnVtICsgKHdpdGhvdXRTdWZmaXggPyAnIMORwoHDkMKww5HCgCcgOiAnIMORwoHDkMKww5HCgMORwovDkMK9Jyk7XG4gICAgY2FzZSAneSc6XG4gICAgY2FzZSAneXknOlxuICAgICAgcmV0dXJuIG51bSArICh3aXRob3V0U3VmZml4ID8gJyDDkMK2w5DCuMOQwrsnIDogJyDDkMK2w5DCuMOQwrvDkMK4w5DCucOQwr0nKTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIG51bS50b1N0cmluZygxMCk7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IG1uTG9jYWxlOiBMb2NhbGVEYXRhID0ge1xuICBhYmJyOiAnbW4nLFxuICBtb250aHM6ICfDkMKdw5HCjcOQwrPDkMK0w5LCr8OQwrPDkcKNw5HCjcORwoAgw5HCgcOQwrDDkcKAX8OQwqXDkMK+w5HCkcORwoDDkMK0w5HCg8OQwrPDkMKww5DCsMORwoAgw5HCgcOQwrDDkcKAX8OQwpPDkcKDw5HCgMOQwrDDkMKyw5DCtMORwoPDkMKzw5DCsMOQwrDDkcKAIMORwoHDkMKww5HCgF/DkMKUw5PCqcORwoDDk8Kpw5DCssOQwrTDksKvw5DCs8ORwo3DkcKNw5HCgCDDkcKBw5DCsMORwoBfw5DCosOQwrDDkMKyw5DCtMORwoPDkMKzw5DCsMOQwrDDkcKAIMORwoHDkMKww5HCgF/DkMKXw5HCg8ORwoDDkMKzw5DCsMOQwrTDkcKDw5DCs8OQwrDDkMKww5HCgCDDkcKBw5DCsMORwoBfw5DClMOQwr7DkMK7w5DCtMORwoPDkMKzw5DCsMOQwrDDkcKAIMORwoHDkMKww5HCgF/DkMKdw5DCsMOQwrnDkMK8w5DCtMORwoPDkMKzw5DCsMOQwrDDkcKAIMORwoHDkMKww5HCgF/DkMKVw5HCgcOQwrTDksKvw5DCs8ORwo3DkcKNw5HCgCDDkcKBw5DCsMORwoBfw5DCkMORwoDDkMKww5DCssOQwrTDkcKDw5DCs8OQwrDDkMKww5HCgCDDkcKBw5DCsMORwoBfw5DCkMORwoDDkMKyw5DCsMOQwr0gw5DCvcORwo3DkMKzw5DCtMOSwq/DkMKzw5HCjcORwo3DkcKAIMORwoHDkMKww5HCgF/DkMKQw5HCgMOQwrLDkMKww5DCvSDDkcKFw5DCvsORwpHDkcKAw5DCtMORwoPDkMKzw5DCsMOQwrDDkcKAIMORwoHDkMKww5HCgCcuc3BsaXQoJ18nKSxcbiAgbW9udGhzU2hvcnQ6ICcxIMORwoHDkMKww5HCgF8yIMORwoHDkMKww5HCgF8zIMORwoHDkMKww5HCgF80IMORwoHDkMKww5HCgF81IMORwoHDkMKww5HCgF82IMORwoHDkMKww5HCgF83IMORwoHDkMKww5HCgF84IMORwoHDkMKww5HCgF85IMORwoHDkMKww5HCgF8xMCDDkcKBw5DCsMORwoBfMTEgw5HCgcOQwrDDkcKAXzEyIMORwoHDkMKww5HCgCcuc3BsaXQoJ18nKSxcbiAgbW9udGhzUGFyc2VFeGFjdDogdHJ1ZSxcbiAgd2Vla2RheXM6ICfDkMKdw5HCj8OQwrxfw5DClMOQwrDDkMKyw5DCsMOQwrBfw5DCnMORwo/DkMKzw5DCvMOQwrDDkcKAX8OQwpvDkcKFw5DCsMOQwrPDkMKyw5DCsF/DkMKfw5LCr8ORwoDDkcKNw5DCsl/DkMKRw5DCsMOQwrDDkcKBw5DCsMOQwr1fw5DCkcORwo/DkMK8w5DCscOQwrAnLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzU2hvcnQ6ICfDkMKdw5HCj8OQwrxfw5DClMOQwrDDkMKyX8OQwpzDkcKPw5DCs1/DkMKbw5HChcOQwrBfw5DCn8OSwq/DkcKAX8OQwpHDkMKww5DCsF/DkMKRw5HCj8OQwrwnLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzTWluOiAnw5DCncORwo9fw5DClMOQwrBfw5DCnMORwo9fw5DCm8ORwoVfw5DCn8OSwq9fw5DCkcOQwrBfw5DCkcORwo8nLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzUGFyc2VFeGFjdDogdHJ1ZSxcbiAgbG9uZ0RhdGVGb3JtYXQ6IHtcbiAgICBMVDogJ0hIOm1tJyxcbiAgICBMVFM6ICdISDptbTpzcycsXG4gICAgTDogJ1lZWVktTU0tREQnLFxuICAgIExMOiAnWVlZWSDDkMK+w5DCvcORwosgTU1NTcORwovDkMK9IEQnLFxuICAgIExMTDogJ1lZWVkgw5DCvsOQwr3DkcKLIE1NTU3DkcKLw5DCvSBEIEhIOm1tJyxcbiAgICBMTExMOiAnZGRkZCwgWVlZWSDDkMK+w5DCvcORwosgTU1NTcORwovDkMK9IEQgSEg6bW0nXG4gIH0sXG4gIG1lcmlkaWVtUGFyc2U6IC/DksKuw5PCqHzDksKuw5DCpS9pLFxuICBpc1BNOiBmdW5jdGlvbiAoaW5wdXQpIHtcbiAgICByZXR1cm4gaW5wdXQgPT09ICfDksKuw5DCpSc7XG4gIH0sXG4gIG1lcmlkaWVtOiBmdW5jdGlvbiAoaG91ciwgbWludXRlLCBpc0xvd2VyKSB7XG4gICAgaWYgKGhvdXIgPCAxMikge1xuICAgICAgcmV0dXJuICfDksKuw5PCqCc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAnw5LCrsOQwqUnO1xuICAgIH1cbiAgfSxcbiAgY2FsZW5kYXI6IHtcbiAgICBzYW1lRGF5OiAnW8OTwqjDkMK9w5PCqcOTwqnDkMK0w5PCqcORwoBdIExUJyxcbiAgICBuZXh0RGF5OiAnW8OQwpzDkMKww5HCgMOQwrPDkMKww5DCsMORwohdIExUJyxcbiAgICBuZXh0V2VlazogJ1vDkMKYw5HCgMORwo3DkcKFXSBkZGRkIExUJyxcbiAgICBsYXN0RGF5OiAnW8OTwqjDkcKHw5DCuMOQwrPDkMK0w5PCqcORwoBdIExUJyxcbiAgICBsYXN0V2VlazogJ1vDk8Kow5DCvcOQwrPDk8Kpw5HCgMORwoHDk8Kpw5DCvV0gZGRkZCBMVCcsXG4gICAgc2FtZUVsc2U6ICdMJ1xuICB9LFxuICByZWxhdGl2ZVRpbWU6IHtcbiAgICBmdXR1cmU6ICclcyDDkMK0w5DCsMORwoDDkMKww5DCsCcsXG4gICAgcGFzdDogJyVzIMOTwqnDkMK8w5DCvcOTwqknLFxuICAgIHM6IHRyYW5zbGF0ZSxcbiAgICBzczogdHJhbnNsYXRlLFxuICAgIG06IHRyYW5zbGF0ZSxcbiAgICBtbTogdHJhbnNsYXRlLFxuICAgIGg6IHRyYW5zbGF0ZSxcbiAgICBoaDogdHJhbnNsYXRlLFxuICAgIGQ6IHRyYW5zbGF0ZSxcbiAgICBkZDogdHJhbnNsYXRlLFxuICAgIE06IHRyYW5zbGF0ZSxcbiAgICBNTTogdHJhbnNsYXRlLFxuICAgIHk6IHRyYW5zbGF0ZSxcbiAgICB5eTogdHJhbnNsYXRlXG4gIH0sXG4gIGRheU9mTW9udGhPcmRpbmFsUGFyc2U6IC9cXGR7MSwyfSDDk8Kpw5DCtMOTwqnDkcKALyxcbiAgb3JkaW5hbDogZnVuY3Rpb24gKG51bTogbnVtYmVyLCBwZXJpb2Q6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgc3dpdGNoIChwZXJpb2QpIHtcbiAgICAgIGNhc2UgJ2QnOlxuICAgICAgY2FzZSAnRCc6XG4gICAgICBjYXNlICdEREQnOlxuICAgICAgICByZXR1cm4gbnVtICsgJyDDk8Kpw5DCtMOTwqnDkcKAJztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBudW0udG9TdHJpbmcoMTApO1xuICAgIH1cbiAgfVxufTtcbiIsIi8vIHRzbGludDpkaXNhYmxlOmNvbW1lbnQtZm9ybWF0XG5pbXBvcnQgeyBMb2NhbGVEYXRhIH0gZnJvbSAnLi4vbG9jYWxlL2xvY2FsZS5jbGFzcyc7XG5cbi8vISBtb21lbnQuanMgbG9jYWxlIGNvbmZpZ3VyYXRpb25cbi8vISBsb2NhbGUgOiBOb3J3ZWdpYW4gQm9rbcODwqVsIFtuYl1cbi8vISBhdXRob3JzIDogRXNwZW4gSG92bGFuZHNkYWwgOiBodHRwczovL2dpdGh1Yi5jb20vcmV4eGFyc1xuLy8hICAgICAgICAgICBTaWd1cmQgR2FydG1hbm4gOiBodHRwczovL2dpdGh1Yi5jb20vc2lndXJkZ2FcblxuZXhwb3J0IGNvbnN0IG5iTG9jYWxlOiBMb2NhbGVEYXRhID0ge1xuICBhYmJyOiAnbmInLFxuICBtb250aHM6ICdqYW51YXJfZmVicnVhcl9tYXJzX2FwcmlsX21haV9qdW5pX2p1bGlfYXVndXN0X3NlcHRlbWJlcl9va3RvYmVyX25vdmVtYmVyX2Rlc2VtYmVyJy5zcGxpdCgnXycpLFxuICBtb250aHNTaG9ydDogJ2phbi5fZmViLl9tYXJzX2FwcmlsX21haV9qdW5pX2p1bGlfYXVnLl9zZXAuX29rdC5fbm92Ll9kZXMuJy5zcGxpdCgnXycpLFxuICBtb250aHNQYXJzZUV4YWN0OiB0cnVlLFxuICB3ZWVrZGF5czogJ3PDg8K4bmRhZ19tYW5kYWdfdGlyc2RhZ19vbnNkYWdfdG9yc2RhZ19mcmVkYWdfbMODwrhyZGFnJy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5c1Nob3J0OiAnc8ODwrguX21hLl90aS5fb24uX3RvLl9mci5fbMODwrguJy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5c01pbjogJ3PDg8K4X21hX3RpX29uX3RvX2ZyX2zDg8K4Jy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5c1BhcnNlRXhhY3Q6IHRydWUsXG4gIGxvbmdEYXRlRm9ybWF0OiB7XG4gICAgTFQ6ICdISDptbScsXG4gICAgTFRTOiAnSEg6bW06c3MnLFxuICAgIEw6ICdERC5NTS5ZWVlZJyxcbiAgICBMTDogJ0QuIE1NTU0gWVlZWScsXG4gICAgTExMOiAnRC4gTU1NTSBZWVlZIFtrbC5dIEhIOm1tJyxcbiAgICBMTExMOiAnZGRkZCBELiBNTU1NIFlZWVkgW2tsLl0gSEg6bW0nXG4gIH0sXG4gIGNhbGVuZGFyOiB7XG4gICAgc2FtZURheTogJ1tpIGRhZyBrbC5dIExUJyxcbiAgICBuZXh0RGF5OiAnW2kgbW9yZ2VuIGtsLl0gTFQnLFxuICAgIG5leHRXZWVrOiAnZGRkZCBba2wuXSBMVCcsXG4gICAgbGFzdERheTogJ1tpIGfDg8KlciBrbC5dIExUJyxcbiAgICBsYXN0V2VlazogJ1tmb3JyaWdlXSBkZGRkIFtrbC5dIExUJyxcbiAgICBzYW1lRWxzZTogJ0wnXG4gIH0sXG4gIHJlbGF0aXZlVGltZToge1xuICAgIGZ1dHVyZTogJ29tICVzJyxcbiAgICBwYXN0OiAnJXMgc2lkZW4nLFxuICAgIHM6ICdub2VuIHNla3VuZGVyJyxcbiAgICBzczogJyVkIHNla3VuZGVyJyxcbiAgICBtOiAnZXR0IG1pbnV0dCcsXG4gICAgbW06ICclZCBtaW51dHRlcicsXG4gICAgaDogJ2VuIHRpbWUnLFxuICAgIGhoOiAnJWQgdGltZXInLFxuICAgIGQ6ICdlbiBkYWcnLFxuICAgIGRkOiAnJWQgZGFnZXInLFxuICAgIE06ICdlbiBtw4PCpW5lZCcsXG4gICAgTU06ICclZCBtw4PCpW5lZGVyJyxcbiAgICB5OiAnZXR0IMODwqVyJyxcbiAgICB5eTogJyVkIMODwqVyJ1xuICB9LFxuICBkYXlPZk1vbnRoT3JkaW5hbFBhcnNlOiAvXFxkezEsMn1cXC4vLFxuICBvcmRpbmFsOiAnJWQuJyxcbiAgd2Vlazoge1xuICAgIGRvdzogMSwgLy8gTW9uZGF5IGlzIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsuXG4gICAgZG95OiA0IC8vIFRoZSB3ZWVrIHRoYXQgY29udGFpbnMgSmFuIDR0aCBpcyB0aGUgZmlyc3Qgd2VlayBvZiB0aGUgeWVhci5cbiAgfVxufTtcbiIsIi8vIHRzbGludDpkaXNhYmxlOmNvbW1lbnQtZm9ybWF0IGJpbmFyeS1leHByZXNzaW9uLW9wZXJhbmQtb3JkZXIgbWF4LWxpbmUtbGVuZ3RoXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1iaXR3aXNlIHByZWZlci10ZW1wbGF0ZSBjeWNsb21hdGljLWNvbXBsZXhpdHlcbi8vIHRzbGludDpkaXNhYmxlOm5vLXNoYWRvd2VkLXZhcmlhYmxlIHN3aXRjaC1kZWZhdWx0IHByZWZlci1jb25zdFxuLy8gdHNsaW50OmRpc2FibGU6b25lLXZhcmlhYmxlLXBlci1kZWNsYXJhdGlvbiBuZXdsaW5lLWJlZm9yZS1yZXR1cm5cblxuaW1wb3J0IHsgTG9jYWxlRGF0YSB9IGZyb20gJy4uL2xvY2FsZS9sb2NhbGUuY2xhc3MnO1xuaW1wb3J0IHsgZ2V0TW9udGggfSBmcm9tICcuLi91dGlscy9kYXRlLWdldHRlcnMnO1xuXG4vLyEgbW9tZW50LmpzIGxvY2FsZSBjb25maWd1cmF0aW9uXG4vLyEgbG9jYWxlIDogRHV0Y2ggKEJlbGdpdW0pIFtubC1iZV1cbi8vISBhdXRob3IgOiBKb3JpcyBSw4PCtmxpbmcgOiBodHRwczovL2dpdGh1Yi5jb20vam9yaXNyb2xpbmdcbi8vISBhdXRob3IgOiBKYWNvYiBNaWRkYWcgOiBodHRwczovL2dpdGh1Yi5jb20vbWlkZGFnalxuXG5sZXQgbW9udGhzU2hvcnRXaXRoRG90cyA9ICdqYW4uX2ZlYi5fbXJ0Ll9hcHIuX21laV9qdW4uX2p1bC5fYXVnLl9zZXAuX29rdC5fbm92Ll9kZWMuJy5zcGxpdCgnXycpO1xubGV0IG1vbnRoc1Nob3J0V2l0aG91dERvdHMgPSAnamFuX2ZlYl9tcnRfYXByX21laV9qdW5fanVsX2F1Z19zZXBfb2t0X25vdl9kZWMnLnNwbGl0KCdfJyk7XG5cbmxldCBtb250aHNQYXJzZSA9IFsvXmphbi9pLCAvXmZlYi9pLCAvXm1hYXJ0fG1ydC4/JC9pLCAvXmFwci9pLCAvXm1laSQvaSwgL15qdW5baS5dPyQvaSwgL15qdWxbaS5dPyQvaSwgL15hdWcvaSwgL15zZXAvaSwgL15va3QvaSwgL15ub3YvaSwgL15kZWMvaV07XG5sZXQgbW9udGhzUmVnZXggPSAvXihqYW51YXJpfGZlYnJ1YXJpfG1hYXJ0fGFwcmlsfG1laXxhcHJpbHxqdVtubF1pfGF1Z3VzdHVzfHNlcHRlbWJlcnxva3RvYmVyfG5vdmVtYmVyfGRlY2VtYmVyfGphblxcLj98ZmViXFwuP3xtcnRcXC4/fGFwclxcLj98anVbbmxdXFwuP3xhdWdcXC4/fHNlcFxcLj98b2t0XFwuP3xub3ZcXC4/fGRlY1xcLj8pL2k7XG5cbmV4cG9ydCBjb25zdCBubEJlTG9jYWxlOiBMb2NhbGVEYXRhID0ge1xuICBhYmJyOiAnbmwtYmUnLFxuICBtb250aHM6ICdqYW51YXJpX2ZlYnJ1YXJpX21hYXJ0X2FwcmlsX21laV9qdW5pX2p1bGlfYXVndXN0dXNfc2VwdGVtYmVyX29rdG9iZXJfbm92ZW1iZXJfZGVjZW1iZXInLnNwbGl0KCdfJyksXG4gIG1vbnRoc1Nob3J0KGRhdGU6IERhdGUsIGZvcm1hdDogc3RyaW5nLCBpc1VUQz86IGJvb2xlYW4pOiBzdHJpbmcgfCBzdHJpbmdbXSB7XG4gICAgaWYgKCFkYXRlKSB7XG4gICAgICByZXR1cm4gbW9udGhzU2hvcnRXaXRoRG90cztcbiAgICB9IGVsc2UgaWYgKC8tTU1NLS8udGVzdChmb3JtYXQpKSB7XG4gICAgICByZXR1cm4gbW9udGhzU2hvcnRXaXRob3V0RG90c1tnZXRNb250aChkYXRlLCBpc1VUQyldO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbW9udGhzU2hvcnRXaXRoRG90c1tnZXRNb250aChkYXRlLCBpc1VUQyldO1xuICAgIH1cbiAgfSxcblxuICBtb250aHNSZWdleCxcbiAgbW9udGhzU2hvcnRSZWdleDogbW9udGhzUmVnZXgsXG4gIG1vbnRoc1N0cmljdFJlZ2V4OiAvXihqYW51YXJpfGZlYnJ1YXJpfG1hYXJ0fG1laXxqdVtubF1pfGFwcmlsfGF1Z3VzdHVzfHNlcHRlbWJlcnxva3RvYmVyfG5vdmVtYmVyfGRlY2VtYmVyKS9pLFxuICBtb250aHNTaG9ydFN0cmljdFJlZ2V4OiAvXihqYW5cXC4/fGZlYlxcLj98bXJ0XFwuP3xhcHJcXC4/fG1laXxqdVtubF1cXC4/fGF1Z1xcLj98c2VwXFwuP3xva3RcXC4/fG5vdlxcLj98ZGVjXFwuPykvaSxcblxuICBtb250aHNQYXJzZSxcbiAgbG9uZ01vbnRoc1BhcnNlOiBtb250aHNQYXJzZSxcbiAgc2hvcnRNb250aHNQYXJzZTogbW9udGhzUGFyc2UsXG5cbiAgd2Vla2RheXM6ICd6b25kYWdfbWFhbmRhZ19kaW5zZGFnX3dvZW5zZGFnX2RvbmRlcmRhZ192cmlqZGFnX3phdGVyZGFnJy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5c1Nob3J0OiAnem8uX21hLl9kaS5fd28uX2RvLl92ci5femEuJy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5c01pbjogJ3pvX21hX2RpX3dvX2RvX3ZyX3phJy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5c1BhcnNlRXhhY3Q6IHRydWUsXG4gIGxvbmdEYXRlRm9ybWF0OiB7XG4gICAgTFQ6ICdISDptbScsXG4gICAgTFRTOiAnSEg6bW06c3MnLFxuICAgIEw6ICdERC9NTS9ZWVlZJyxcbiAgICBMTDogJ0QgTU1NTSBZWVlZJyxcbiAgICBMTEw6ICdEIE1NTU0gWVlZWSBISDptbScsXG4gICAgTExMTDogJ2RkZGQgRCBNTU1NIFlZWVkgSEg6bW0nXG4gIH0sXG4gIGNhbGVuZGFyOiB7XG4gICAgc2FtZURheTogJ1t2YW5kYWFnIG9tXSBMVCcsXG4gICAgbmV4dERheTogJ1ttb3JnZW4gb21dIExUJyxcbiAgICBuZXh0V2VlazogJ2RkZGQgW29tXSBMVCcsXG4gICAgbGFzdERheTogJ1tnaXN0ZXJlbiBvbV0gTFQnLFxuICAgIGxhc3RXZWVrOiAnW2FmZ2Vsb3Blbl0gZGRkZCBbb21dIExUJyxcbiAgICBzYW1lRWxzZTogJ0wnXG4gIH0sXG4gIHJlbGF0aXZlVGltZToge1xuICAgIGZ1dHVyZTogJ292ZXIgJXMnLFxuICAgIHBhc3Q6ICclcyBnZWxlZGVuJyxcbiAgICBzOiAnZWVuIHBhYXIgc2Vjb25kZW4nLFxuICAgIHNzOiAnJWQgc2Vjb25kZW4nLFxuICAgIG06ICfDg8Kpw4PCqW4gbWludXV0JyxcbiAgICBtbTogJyVkIG1pbnV0ZW4nLFxuICAgIGg6ICfDg8Kpw4PCqW4gdXVyJyxcbiAgICBoaDogJyVkIHV1cicsXG4gICAgZDogJ8ODwqnDg8KpbiBkYWcnLFxuICAgIGRkOiAnJWQgZGFnZW4nLFxuICAgIE06ICfDg8Kpw4PCqW4gbWFhbmQnLFxuICAgIE1NOiAnJWQgbWFhbmRlbicsXG4gICAgeTogJ8ODwqnDg8KpbiBqYWFyJyxcbiAgICB5eTogJyVkIGphYXInXG4gIH0sXG4gIGRheU9mTW9udGhPcmRpbmFsUGFyc2U6IC9cXGR7MSwyfShzdGV8ZGUpLyxcbiAgb3JkaW5hbChfbnVtOiBudW1iZXIpOiBzdHJpbmcge1xuICAgIGNvbnN0IG51bSA9IE51bWJlcihfbnVtKTtcbiAgICByZXR1cm4gbnVtICsgKChudW0gPT09IDEgfHwgbnVtID09PSA4IHx8IG51bSA+PSAyMCkgPyAnc3RlJyA6ICdkZScpO1xuICB9LFxuICB3ZWVrOiB7XG4gICAgZG93OiAxLCAvLyBNb25kYXkgaXMgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2Vlay5cbiAgICBkb3k6IDQgIC8vIFRoZSB3ZWVrIHRoYXQgY29udGFpbnMgSmFuIDR0aCBpcyB0aGUgZmlyc3Qgd2VlayBvZiB0aGUgeWVhci5cbiAgfVxufTtcbiIsIi8vIHRzbGludDpkaXNhYmxlOmNvbW1lbnQtZm9ybWF0IGJpbmFyeS1leHByZXNzaW9uLW9wZXJhbmQtb3JkZXIgbWF4LWxpbmUtbGVuZ3RoXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1iaXR3aXNlIHByZWZlci10ZW1wbGF0ZSBjeWNsb21hdGljLWNvbXBsZXhpdHlcbi8vIHRzbGludDpkaXNhYmxlOm5vLXNoYWRvd2VkLXZhcmlhYmxlIHN3aXRjaC1kZWZhdWx0IHByZWZlci1jb25zdFxuLy8gdHNsaW50OmRpc2FibGU6b25lLXZhcmlhYmxlLXBlci1kZWNsYXJhdGlvbiBuZXdsaW5lLWJlZm9yZS1yZXR1cm5cblxuaW1wb3J0IHsgTG9jYWxlRGF0YSB9IGZyb20gJy4uL2xvY2FsZS9sb2NhbGUuY2xhc3MnO1xuaW1wb3J0IHsgZ2V0TW9udGggfSBmcm9tICcuLi91dGlscy9kYXRlLWdldHRlcnMnO1xuXG4vLyEgbW9tZW50LmpzIGxvY2FsZSBjb25maWd1cmF0aW9uXG4vLyEgbG9jYWxlIDogRHV0Y2ggW25sXVxuLy8hIGF1dGhvciA6IEpvcmlzIFLDg8K2bGluZyA6IGh0dHBzOi8vZ2l0aHViLmNvbS9qb3Jpc3JvbGluZ1xuLy8hIGF1dGhvciA6IEphY29iIE1pZGRhZyA6IGh0dHBzOi8vZ2l0aHViLmNvbS9taWRkYWdqXG5cbmxldCBtb250aHNTaG9ydFdpdGhEb3RzID0gJ2phbi5fZmViLl9tcnQuX2Fwci5fbWVpX2p1bi5fanVsLl9hdWcuX3NlcC5fb2t0Ll9ub3YuX2RlYy4nLnNwbGl0KCdfJyksXG4gIG1vbnRoc1Nob3J0V2l0aG91dERvdHMgPSAnamFuX2ZlYl9tcnRfYXByX21laV9qdW5fanVsX2F1Z19zZXBfb2t0X25vdl9kZWMnLnNwbGl0KCdfJyk7XG5cbmxldCBtb250aHNQYXJzZSA9IFsvXmphbi9pLCAvXmZlYi9pLCAvXm1hYXJ0fG1ydC4/JC9pLCAvXmFwci9pLCAvXm1laSQvaSwgL15qdW5baS5dPyQvaSwgL15qdWxbaS5dPyQvaSwgL15hdWcvaSwgL15zZXAvaSwgL15va3QvaSwgL15ub3YvaSwgL15kZWMvaV07XG5sZXQgbW9udGhzUmVnZXggPSAvXihqYW51YXJpfGZlYnJ1YXJpfG1hYXJ0fGFwcmlsfG1laXxhcHJpbHxqdVtubF1pfGF1Z3VzdHVzfHNlcHRlbWJlcnxva3RvYmVyfG5vdmVtYmVyfGRlY2VtYmVyfGphblxcLj98ZmViXFwuP3xtcnRcXC4/fGFwclxcLj98anVbbmxdXFwuP3xhdWdcXC4/fHNlcFxcLj98b2t0XFwuP3xub3ZcXC4/fGRlY1xcLj8pL2k7XG5cbmV4cG9ydCBjb25zdCBubExvY2FsZTogTG9jYWxlRGF0YSA9IHtcbiAgYWJicjogJ25sJyxcbiAgbW9udGhzIDogJ2phbnVhcmlfZmVicnVhcmlfbWFhcnRfYXByaWxfbWVpX2p1bmlfanVsaV9hdWd1c3R1c19zZXB0ZW1iZXJfb2t0b2Jlcl9ub3ZlbWJlcl9kZWNlbWJlcicuc3BsaXQoJ18nKSxcbiAgbW9udGhzU2hvcnQgKGRhdGU6IERhdGUsIGZvcm1hdDogc3RyaW5nLCBpc1VUQz86IGJvb2xlYW4pOiBzdHJpbmcgfCBzdHJpbmdbXSB7XG4gICAgaWYgKCFkYXRlKSB7XG4gICAgICByZXR1cm4gbW9udGhzU2hvcnRXaXRoRG90cztcbiAgICB9IGVsc2UgaWYgKC8tTU1NLS8udGVzdChmb3JtYXQpKSB7XG4gICAgICByZXR1cm4gbW9udGhzU2hvcnRXaXRob3V0RG90c1tnZXRNb250aChkYXRlLCBpc1VUQyldO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbW9udGhzU2hvcnRXaXRoRG90c1tnZXRNb250aChkYXRlLCBpc1VUQyldO1xuICAgIH1cbiAgfSxcblxuICBtb250aHNSZWdleCxcbiAgbW9udGhzU2hvcnRSZWdleDogbW9udGhzUmVnZXgsXG4gIG1vbnRoc1N0cmljdFJlZ2V4OiAvXihqYW51YXJpfGZlYnJ1YXJpfG1hYXJ0fG1laXxqdVtubF1pfGFwcmlsfGF1Z3VzdHVzfHNlcHRlbWJlcnxva3RvYmVyfG5vdmVtYmVyfGRlY2VtYmVyKS9pLFxuICBtb250aHNTaG9ydFN0cmljdFJlZ2V4OiAvXihqYW5cXC4/fGZlYlxcLj98bXJ0XFwuP3xhcHJcXC4/fG1laXxqdVtubF1cXC4/fGF1Z1xcLj98c2VwXFwuP3xva3RcXC4/fG5vdlxcLj98ZGVjXFwuPykvaSxcblxuICBtb250aHNQYXJzZSxcbiAgbG9uZ01vbnRoc1BhcnNlIDogbW9udGhzUGFyc2UsXG4gIHNob3J0TW9udGhzUGFyc2UgOiBtb250aHNQYXJzZSxcblxuICB3ZWVrZGF5cyA6ICd6b25kYWdfbWFhbmRhZ19kaW5zZGFnX3dvZW5zZGFnX2RvbmRlcmRhZ192cmlqZGFnX3phdGVyZGFnJy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5c1Nob3J0IDogJ3pvLl9tYS5fZGkuX3dvLl9kby5fdnIuX3phLicuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNNaW4gOiAnem9fbWFfZGlfd29fZG9fdnJfemEnLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzUGFyc2VFeGFjdCA6IHRydWUsXG4gIGxvbmdEYXRlRm9ybWF0IDoge1xuICAgIExUIDogJ0hIOm1tJyxcbiAgICBMVFMgOiAnSEg6bW06c3MnLFxuICAgIEwgOiAnREQtTU0tWVlZWScsXG4gICAgTEwgOiAnRCBNTU1NIFlZWVknLFxuICAgIExMTCA6ICdEIE1NTU0gWVlZWSBISDptbScsXG4gICAgTExMTCA6ICdkZGRkIEQgTU1NTSBZWVlZIEhIOm1tJ1xuICB9LFxuICBjYWxlbmRhciA6IHtcbiAgICBzYW1lRGF5OiAnW3ZhbmRhYWcgb21dIExUJyxcbiAgICBuZXh0RGF5OiAnW21vcmdlbiBvbV0gTFQnLFxuICAgIG5leHRXZWVrOiAnZGRkZCBbb21dIExUJyxcbiAgICBsYXN0RGF5OiAnW2dpc3RlcmVuIG9tXSBMVCcsXG4gICAgbGFzdFdlZWs6ICdbYWZnZWxvcGVuXSBkZGRkIFtvbV0gTFQnLFxuICAgIHNhbWVFbHNlOiAnTCdcbiAgfSxcbiAgcmVsYXRpdmVUaW1lIDoge1xuICAgIGZ1dHVyZSA6ICdvdmVyICVzJyxcbiAgICBwYXN0IDogJyVzIGdlbGVkZW4nLFxuICAgIHMgOiAnZWVuIHBhYXIgc2Vjb25kZW4nLFxuICAgIHNzIDogJyVkIHNlY29uZGVuJyxcbiAgICBtIDogJ8ODwqnDg8KpbiBtaW51dXQnLFxuICAgIG1tIDogJyVkIG1pbnV0ZW4nLFxuICAgIGggOiAnw4PCqcODwqluIHV1cicsXG4gICAgaGggOiAnJWQgdXVyJyxcbiAgICBkIDogJ8ODwqnDg8KpbiBkYWcnLFxuICAgIGRkIDogJyVkIGRhZ2VuJyxcbiAgICBNIDogJ8ODwqnDg8KpbiBtYWFuZCcsXG4gICAgTU0gOiAnJWQgbWFhbmRlbicsXG4gICAgeSA6ICfDg8Kpw4PCqW4gamFhcicsXG4gICAgeXkgOiAnJWQgamFhcidcbiAgfSxcbiAgZGF5T2ZNb250aE9yZGluYWxQYXJzZTogL1xcZHsxLDJ9KHN0ZXxkZSkvLFxuICBvcmRpbmFsIChfbnVtOiBudW1iZXIpOiBzdHJpbmcge1xuICAgIGNvbnN0IG51bSA9IE51bWJlcihfbnVtKTtcbiAgICByZXR1cm4gbnVtICsgKChudW0gPT09IDEgfHwgbnVtID09PSA4IHx8IG51bSA+PSAyMCkgPyAnc3RlJyA6ICdkZScpO1xuICB9LFxuICB3ZWVrIDoge1xuICAgIGRvdyA6IDEsIC8vIE1vbmRheSBpcyB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrLlxuICAgIGRveSA6IDQgIC8vIFRoZSB3ZWVrIHRoYXQgY29udGFpbnMgSmFuIDR0aCBpcyB0aGUgZmlyc3Qgd2VlayBvZiB0aGUgeWVhci5cbiAgfVxufTtcbiIsIi8vIHRzbGludDpkaXNhYmxlOmNvbW1lbnQtZm9ybWF0IGJpbmFyeS1leHByZXNzaW9uLW9wZXJhbmQtb3JkZXIgbWF4LWxpbmUtbGVuZ3RoXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1iaXR3aXNlIHByZWZlci10ZW1wbGF0ZSBjeWNsb21hdGljLWNvbXBsZXhpdHlcbi8vIHRzbGludDpkaXNhYmxlOm5vLXNoYWRvd2VkLXZhcmlhYmxlIHN3aXRjaC1kZWZhdWx0IHByZWZlci1jb25zdFxuLy8gdHNsaW50OmRpc2FibGU6b25lLXZhcmlhYmxlLXBlci1kZWNsYXJhdGlvbiBuZXdsaW5lLWJlZm9yZS1yZXR1cm5cblxuaW1wb3J0IHsgTG9jYWxlRGF0YSB9IGZyb20gJy4uL2xvY2FsZS9sb2NhbGUuY2xhc3MnO1xuaW1wb3J0IHsgZ2V0TW9udGggfSBmcm9tICcuLi91dGlscy9kYXRlLWdldHRlcnMnO1xuaW1wb3J0IHsgZ2V0RGF5T2ZXZWVrIH0gZnJvbSAnLi4vdW5pdHMvZGF5LW9mLXdlZWsnO1xuXG4vLyEgbW9tZW50LmpzIGxvY2FsZSBjb25maWd1cmF0aW9uXG4vLyEgbG9jYWxlIDogUG9saXNoIFtwbF1cbi8vISBhdXRob3IgOiBSYWZhbCBIaXJzeiA6IGh0dHBzOi8vZ2l0aHViLmNvbS9ldm9MXG5cbmxldCBtb250aHNOb21pbmF0aXZlID0gJ3N0eWN6ZcOFwoRfbHV0eV9tYXJ6ZWNfa3dpZWNpZcOFwoRfbWFqX2N6ZXJ3aWVjX2xpcGllY19zaWVycGllw4XChF93cnplc2llw4XChF9wYcOFwrpkemllcm5pa19saXN0b3BhZF9ncnVkemllw4XChCcuc3BsaXQoJ18nKTtcbmxldCBtb250aHNTdWJqZWN0aXZlID0gJ3N0eWN6bmlhX2x1dGVnb19tYXJjYV9rd2lldG5pYV9tYWphX2N6ZXJ3Y2FfbGlwY2Ffc2llcnBuaWFfd3J6ZcOFwptuaWFfcGHDhcK6ZHppZXJuaWthX2xpc3RvcGFkYV9ncnVkbmlhJy5zcGxpdCgnXycpO1xuXG5mdW5jdGlvbiBwbHVyYWwobnVtOiBudW1iZXIpOiBib29sZWFuIHtcbiAgcmV0dXJuIChudW0gJSAxMCA8IDUpICYmIChudW0gJSAxMCA+IDEpICYmICgofn4obnVtIC8gMTApICUgMTApICE9PSAxKTtcbn1cblxuZnVuY3Rpb24gdHJhbnNsYXRlKG51bTogbnVtYmVyLCB3aXRob3V0U3VmZml4OiBib29sZWFuLCBrZXk6IHN0cmluZyk6IHN0cmluZyB7XG4gIGxldCByZXN1bHQgPSBudW0gKyAnICc7XG4gIHN3aXRjaCAoa2V5KSB7XG4gICAgY2FzZSAnc3MnOlxuICAgICAgcmV0dXJuIHJlc3VsdCArIChwbHVyYWwobnVtKSA/ICdzZWt1bmR5JyA6ICdzZWt1bmQnKTtcbiAgICBjYXNlICdtJzpcbiAgICAgIHJldHVybiB3aXRob3V0U3VmZml4ID8gJ21pbnV0YScgOiAnbWludXTDhMKZJztcbiAgICBjYXNlICdtbSc6XG4gICAgICByZXR1cm4gcmVzdWx0ICsgKHBsdXJhbChudW0pID8gJ21pbnV0eScgOiAnbWludXQnKTtcbiAgICBjYXNlICdoJzpcbiAgICAgIHJldHVybiB3aXRob3V0U3VmZml4ID8gJ2dvZHppbmEnIDogJ2dvZHppbsOEwpknO1xuICAgIGNhc2UgJ2hoJzpcbiAgICAgIHJldHVybiByZXN1bHQgKyAocGx1cmFsKG51bSkgPyAnZ29kemlueScgOiAnZ29kemluJyk7XG4gICAgY2FzZSAnTU0nOlxuICAgICAgcmV0dXJuIHJlc3VsdCArIChwbHVyYWwobnVtKSA/ICdtaWVzacOEwoVjZScgOiAnbWllc2nDhMKZY3knKTtcbiAgICBjYXNlICd5eSc6XG4gICAgICByZXR1cm4gcmVzdWx0ICsgKHBsdXJhbChudW0pID8gJ2xhdGEnIDogJ2xhdCcpO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBwbExvY2FsZTogTG9jYWxlRGF0YSA9IHtcbiAgYWJicjogJ3BsJyxcbiAgbW9udGhzKGRhdGU6IERhdGUsIGZvcm1hdDogc3RyaW5nLCBpc1VUQz86IGJvb2xlYW4pOiBzdHJpbmcgfCBzdHJpbmdbXSB7XG4gICAgaWYgKCFkYXRlKSB7XG4gICAgICByZXR1cm4gbW9udGhzTm9taW5hdGl2ZTtcbiAgICB9IGVsc2UgaWYgKGZvcm1hdCA9PT0gJycpIHtcbiAgICAgIC8vIEhhY2s6IGlmIGZvcm1hdCBlbXB0eSB3ZSBrbm93IHRoaXMgaXMgdXNlZCB0byBnZW5lcmF0ZVxuICAgICAgLy8gUmVnRXhwIGJ5IG1vbWVudC4gR2l2ZSB0aGVuIGJhY2sgYm90aCB2YWxpZCBmb3JtcyBvZiBtb250aHNcbiAgICAgIC8vIGluIFJlZ0V4cCByZWFkeSBmb3JtYXQuXG4gICAgICByZXR1cm4gJygnICsgbW9udGhzU3ViamVjdGl2ZVtnZXRNb250aChkYXRlLCBpc1VUQyldICsgJ3wnICsgbW9udGhzTm9taW5hdGl2ZVtnZXRNb250aChkYXRlLCBpc1VUQyldICsgJyknO1xuICAgIH0gZWxzZSBpZiAoL0QgTU1NTS8udGVzdChmb3JtYXQpKSB7XG4gICAgICByZXR1cm4gbW9udGhzU3ViamVjdGl2ZVtnZXRNb250aChkYXRlLCBpc1VUQyldO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbW9udGhzTm9taW5hdGl2ZVtnZXRNb250aChkYXRlLCBpc1VUQyldO1xuICAgIH1cbiAgfSxcbiAgbW9udGhzU2hvcnQ6ICdzdHlfbHV0X21hcl9rd2lfbWFqX2N6ZV9saXBfc2llX3dyel9wYcOFwrpfbGlzX2dydScuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXM6ICduaWVkemllbGFfcG9uaWVkemlhw4XCgmVrX3d0b3Jla1/DhcKbcm9kYV9jendhcnRla19wacOEwoV0ZWtfc29ib3RhJy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5c1Nob3J0OiAnbmR6X3Bvbl93dF/DhcKbcl9jendfcHRfc29iJy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5c01pbjogJ05kX1BuX1d0X8OFwppyX0N6X1B0X1NvJy5zcGxpdCgnXycpLFxuICBsb25nRGF0ZUZvcm1hdDoge1xuICAgIExUOiAnSEg6bW0nLFxuICAgIExUUzogJ0hIOm1tOnNzJyxcbiAgICBMOiAnREQuTU0uWVlZWScsXG4gICAgTEw6ICdEIE1NTU0gWVlZWScsXG4gICAgTExMOiAnRCBNTU1NIFlZWVkgSEg6bW0nLFxuICAgIExMTEw6ICdkZGRkLCBEIE1NTU0gWVlZWSBISDptbSdcbiAgfSxcbiAgY2FsZW5kYXI6IHtcbiAgICBzYW1lRGF5OiAnW0R6acOFwpsgb10gTFQnLFxuICAgIG5leHREYXk6ICdbSnV0cm8gb10gTFQnLFxuICAgIG5leHRXZWVrKGRhdGU6IERhdGUpOiBzdHJpbmcge1xuICAgICAgc3dpdGNoIChnZXREYXlPZldlZWsoZGF0ZSkpIHtcbiAgICAgICAgY2FzZSAwOlxuICAgICAgICAgIHJldHVybiAnW1cgbmllZHppZWzDhMKZIG9dIExUJztcblxuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgcmV0dXJuICdbV2Ugd3RvcmVrIG9dIExUJztcblxuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgcmV0dXJuICdbVyDDhcKbcm9kw4TCmSBvXSBMVCc7XG5cbiAgICAgICAgY2FzZSA1OlxuICAgICAgICAgIHJldHVybiAnW1cgcGnDhMKFdGVrIG9dIExUJztcblxuICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgcmV0dXJuICdbVyBzb2JvdMOEwpkgb10gTFQnO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuICdbV10gZGRkZCBbb10gTFQnO1xuICAgICAgfVxuICAgIH0sXG4gICAgbGFzdERheTogJ1tXY3pvcmFqIG9dIExUJyxcbiAgICBsYXN0V2VlayhkYXRlOiBEYXRlKTogc3RyaW5nIHtcbiAgICAgIHN3aXRjaCAoZ2V0RGF5T2ZXZWVrKGRhdGUpKSB7XG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgICByZXR1cm4gJ1tXIHplc3rDhcKCw4TChSBuaWVkemllbMOEwpkgb10gTFQnO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgcmV0dXJuICdbVyB6ZXN6w4XCgsOEwoUgw4XCm3JvZMOEwpkgb10gTFQnO1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgcmV0dXJuICdbVyB6ZXN6w4XCgsOEwoUgY3p3YXJ0ZWsgb10gTFQnO1xuICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgcmV0dXJuICdbVyB6ZXN6w4XCgsOEwoUgcGnDhMKFdGVrIG9dIExUJztcbiAgICAgICAgY2FzZSA2OlxuICAgICAgICAgIHJldHVybiAnW1cgemVzesOFwoLDhMKFIHNvYm90w4TCmSBvXSBMVCc7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuICdbVyB6ZXN6w4XCgnldIGRkZGQgW29dIExUJztcbiAgICAgIH1cbiAgICB9LFxuICAgIHNhbWVFbHNlOiAnTCdcbiAgfSxcbiAgcmVsYXRpdmVUaW1lOiB7XG4gICAgZnV0dXJlOiAnemEgJXMnLFxuICAgIHBhc3Q6ICclcyB0ZW11JyxcbiAgICBzOiAna2lsa2Egc2VrdW5kJyxcbiAgICBzczogdHJhbnNsYXRlLFxuICAgIG06IHRyYW5zbGF0ZSxcbiAgICBtbTogdHJhbnNsYXRlLFxuICAgIGg6IHRyYW5zbGF0ZSxcbiAgICBoaDogdHJhbnNsYXRlLFxuICAgIGQ6ICcxIGR6aWXDhcKEJyxcbiAgICBkZDogJyVkIGRuaScsXG4gICAgTTogJ21pZXNpw4TChWMnLFxuICAgIE1NOiB0cmFuc2xhdGUsXG4gICAgeTogJ3JvaycsXG4gICAgeXk6IHRyYW5zbGF0ZVxuICB9LFxuICBkYXlPZk1vbnRoT3JkaW5hbFBhcnNlOiAvXFxkezEsMn1cXC4vLFxuICBvcmRpbmFsOiAnJWQuJyxcbiAgd2Vlazoge1xuICAgIGRvdzogMSwgLy8gTW9uZGF5IGlzIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsuXG4gICAgZG95OiA0ICAvLyBUaGUgd2VlayB0aGF0IGNvbnRhaW5zIEphbiA0dGggaXMgdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHllYXIuXG4gIH1cbn07XG4iLCIvLyB0c2xpbnQ6ZGlzYWJsZTpjb21tZW50LWZvcm1hdCBiaW5hcnktZXhwcmVzc2lvbi1vcGVyYW5kLW9yZGVyIG1heC1saW5lLWxlbmd0aFxuLy8gdHNsaW50OmRpc2FibGU6bm8tYml0d2lzZSBwcmVmZXItdGVtcGxhdGUgY3ljbG9tYXRpYy1jb21wbGV4aXR5XG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1zaGFkb3dlZC12YXJpYWJsZSBzd2l0Y2gtZGVmYXVsdCBwcmVmZXItY29uc3Rcbi8vIHRzbGludDpkaXNhYmxlOm9uZS12YXJpYWJsZS1wZXItZGVjbGFyYXRpb24gbmV3bGluZS1iZWZvcmUtcmV0dXJuXG5cbmltcG9ydCB7IExvY2FsZURhdGEgfSBmcm9tICcuLi9sb2NhbGUvbG9jYWxlLmNsYXNzJztcbmltcG9ydCB7IGdldERheU9mV2VlayB9IGZyb20gJy4uL3VuaXRzL2RheS1vZi13ZWVrJztcblxuLy8hIG1vbWVudC5qcyBsb2NhbGUgY29uZmlndXJhdGlvblxuLy8hIGxvY2FsZSA6IFBvcnR1Z3Vlc2UgKEJyYXppbCkgW3B0LWJyXVxuLy8hIGF1dGhvciA6IENhaW8gUmliZWlybyBQZXJlaXJhIDogaHR0cHM6Ly9naXRodWIuY29tL2NhaW8tcmliZWlyby1wZXJlaXJhXG5cbmV4cG9ydCBjb25zdCBwdEJyTG9jYWxlOiBMb2NhbGVEYXRhID0ge1xuICBhYmJyOiAncHQtYnInLFxuICBtb250aHM6ICdKYW5laXJvX0ZldmVyZWlyb19NYXLDg8Knb19BYnJpbF9NYWlvX0p1bmhvX0p1bGhvX0Fnb3N0b19TZXRlbWJyb19PdXR1YnJvX05vdmVtYnJvX0RlemVtYnJvJy5zcGxpdCgnXycpLFxuICBtb250aHNTaG9ydDogJ0phbl9GZXZfTWFyX0Ficl9NYWlfSnVuX0p1bF9BZ29fU2V0X091dF9Ob3ZfRGV6Jy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5czogJ0RvbWluZ29fU2VndW5kYS1mZWlyYV9UZXLDg8KnYS1mZWlyYV9RdWFydGEtZmVpcmFfUXVpbnRhLWZlaXJhX1NleHRhLWZlaXJhX1PDg8KhYmFkbycuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNTaG9ydDogJ0RvbV9TZWdfVGVyX1F1YV9RdWlfU2V4X1PDg8KhYicuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNNaW46ICdEb18yw4LCql8zw4LCql80w4LCql81w4LCql82w4LCql9Tw4PCoScuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNQYXJzZUV4YWN0OiB0cnVlLFxuICBsb25nRGF0ZUZvcm1hdDoge1xuICAgIExUOiAnSEg6bW0nLFxuICAgIExUUzogJ0hIOm1tOnNzJyxcbiAgICBMOiAnREQvTU0vWVlZWScsXG4gICAgTEw6ICdEIFtkZV0gTU1NTSBbZGVdIFlZWVknLFxuICAgIExMTDogJ0QgW2RlXSBNTU1NIFtkZV0gWVlZWSBbw4PCoHNdIEhIOm1tJyxcbiAgICBMTExMOiAnZGRkZCwgRCBbZGVdIE1NTU0gW2RlXSBZWVlZIFvDg8Kgc10gSEg6bW0nXG4gIH0sXG4gIGNhbGVuZGFyOiB7XG4gICAgc2FtZURheTogJ1tIb2plIMODwqBzXSBMVCcsXG4gICAgbmV4dERheTogJ1tBbWFuaMODwqMgw4PCoHNdIExUJyxcbiAgICBuZXh0V2VlazogJ2RkZGQgW8ODwqBzXSBMVCcsXG4gICAgbGFzdERheTogJ1tPbnRlbSDDg8Kgc10gTFQnLFxuICAgIGxhc3RXZWVrKGRhdGU6IERhdGUpIHtcbiAgICAgIHJldHVybiAoZ2V0RGF5T2ZXZWVrKGRhdGUpID09PSAwIHx8IGdldERheU9mV2VlayhkYXRlKSA9PT0gNikgP1xuICAgICAgICAnW8ODwppsdGltb10gZGRkZCBbw4PCoHNdIExUJyA6IC8vIFNhdHVyZGF5ICsgU3VuZGF5XG4gICAgICAgICdbw4PCmmx0aW1hXSBkZGRkIFvDg8Kgc10gTFQnOyAvLyBNb25kYXkgLSBGcmlkYXlcbiAgICB9LFxuICAgIHNhbWVFbHNlOiAnTCdcbiAgfSxcbiAgcmVsYXRpdmVUaW1lOiB7XG4gICAgZnV0dXJlOiAnZW0gJXMnLFxuICAgIHBhc3Q6ICclcyBhdHLDg8KhcycsXG4gICAgczogJ3BvdWNvcyBzZWd1bmRvcycsXG4gICAgc3M6ICclZCBzZWd1bmRvcycsXG4gICAgbTogJ3VtIG1pbnV0bycsXG4gICAgbW06ICclZCBtaW51dG9zJyxcbiAgICBoOiAndW1hIGhvcmEnLFxuICAgIGhoOiAnJWQgaG9yYXMnLFxuICAgIGQ6ICd1bSBkaWEnLFxuICAgIGRkOiAnJWQgZGlhcycsXG4gICAgTTogJ3VtIG3Dg8KqcycsXG4gICAgTU06ICclZCBtZXNlcycsXG4gICAgeTogJ3VtIGFubycsXG4gICAgeXk6ICclZCBhbm9zJ1xuICB9LFxuICBkYXlPZk1vbnRoT3JkaW5hbFBhcnNlOiAvXFxkezEsMn3DgsK6LyxcbiAgb3JkaW5hbDogJyVkw4LCuidcbn07XG4iLCIvLyB0c2xpbnQ6ZGlzYWJsZTpjb21tZW50LWZvcm1hdCBiaW5hcnktZXhwcmVzc2lvbi1vcGVyYW5kLW9yZGVyIG1heC1saW5lLWxlbmd0aFxuLy8gdHNsaW50OmRpc2FibGU6bm8tYml0d2lzZSBwcmVmZXItdGVtcGxhdGUgY3ljbG9tYXRpYy1jb21wbGV4aXR5XG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1zaGFkb3dlZC12YXJpYWJsZSBzd2l0Y2gtZGVmYXVsdCBwcmVmZXItY29uc3Rcbi8vIHRzbGludDpkaXNhYmxlOm9uZS12YXJpYWJsZS1wZXItZGVjbGFyYXRpb24gbmV3bGluZS1iZWZvcmUtcmV0dXJuXG5pbXBvcnQgeyBMb2NhbGVEYXRhIH0gZnJvbSAnLi4vbG9jYWxlL2xvY2FsZS5jbGFzcyc7XG5cbi8vICEgbW9tZW50LmpzIGxvY2FsZSBjb25maWd1cmF0aW9uXG4vLyAhIGxvY2FsZSA6IFJvbWFuaWFuIFtyb11cbi8vISBhdXRob3IgOiBWbGFkIEd1cmRpZ2EgOiBodHRwczovL2dpdGh1Yi5jb20vZ3VyZGlnYVxuLy8hIGF1dGhvciA6IFZhbGVudGluIEFnYWNoaSA6IGh0dHBzOi8vZ2l0aHViLmNvbS9hdmFseVxuLy8gISBhdXRob3IgOiBFYXJsZSB3aGl0ZTogaHR0cHM6Ly9naXRodWIuY29tLzVlYXJsZVxuXG5mdW5jdGlvbiByZWxhdGl2ZVRpbWVXaXRoUGx1cmFsKG51bTogbnVtYmVyLCB3aXRob3V0U3VmZml4OiBib29sZWFuLCBrZXk6IHN0cmluZyk6IHN0cmluZyB7XG4gIGxldCBmb3JtYXQ6IHtba2V5OnN0cmluZ106IHN0cmluZ30gPSB7XG4gICAgc3M6ICdzZWN1bmRlJyxcbiAgICBtbTogJ21pbnV0ZScsXG4gICAgaGg6ICdvcmUnLFxuICAgIGRkOiAnemlsZScsXG4gICAgTU06ICdsdW5pJyxcbiAgICB5eTogJ2FuaSdcbiAgfTtcblxuICBsZXQgc2VwYXJhdG9yID0gJyAnO1xuICBpZiAobnVtICUgMTAwID49IDIwIHx8IChudW0gPj0gMTAwICYmIG51bSAlIDEwMCA9PT0gMCkpIHtcbiAgICBzZXBhcmF0b3IgPSAnIGRlICc7XG4gIH1cbiAgcmV0dXJuIG51bSArIHNlcGFyYXRvciArIGZvcm1hdFtrZXldO1xufVxuXG5cbmV4cG9ydCBjb25zdCByb0xvY2FsZTogTG9jYWxlRGF0YSA9IHtcbiAgYWJicjogJ3JvJyxcbiAgbW9udGhzOiAnaWFudWFyaWVfZmVicnVhcmllX21hcnRpZV9hcHJpbGllX21haV9pdW5pZV9pdWxpZV9hdWd1c3Rfc2VwdGVtYnJpZV9vY3RvbWJyaWVfbm9pZW1icmllX2RlY2VtYnJpZScuc3BsaXQoJ18nKSxcbiAgbW9udGhzU2hvcnQ6ICdpYW4uX2ZlYnIuX21hcnQuX2Fwci5fbWFpX2l1bi5faXVsLl9hdWcuX3NlcHQuX29jdC5fbm92Ll9kZWMuJy5zcGxpdCgnXycpLFxuICBtb250aHNQYXJzZUV4YWN0OiB0cnVlLFxuICB3ZWVrZGF5czogJ2R1bWluaWPDhMKDX2x1bmlfbWFyw4jCm2lfbWllcmN1cmlfam9pX3ZpbmVyaV9zw4PCom1iw4TCg3TDhMKDJy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5c1Nob3J0OiAnRHVtX0x1bl9NYXJfTWllX0pvaV9WaW5fU8ODwqJtJy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5c01pbjogJ0R1X0x1X01hX01pX0pvX1ZpX1PDg8KiJy5zcGxpdCgnXycpLFxuICBsb25nRGF0ZUZvcm1hdDoge1xuICAgIExUOiAnSDptbScsXG4gICAgTFRTOiAnSDptbTpzcycsXG4gICAgTDogJ0RELk1NLllZWVknLFxuICAgIExMOiAnRCBNTU1NIFlZWVknLFxuICAgIExMTDogJ0QgTU1NTSBZWVlZIEg6bW0nLFxuICAgIExMTEw6ICdkZGRkLCBEIE1NTU0gWVlZWSBIOm1tJ1xuICB9LFxuICBjYWxlbmRhcjoge1xuICAgIHNhbWVEYXk6ICdbYXppIGxhXSBMVCcsXG4gICAgbmV4dERheTogJ1ttw4PComluZSBsYV0gTFQnLFxuICAgIG5leHRXZWVrOiAnZGRkZCBbbGFdIExUJyxcbiAgICBsYXN0RGF5OiAnW2llcmkgbGFdIExUJyxcbiAgICBsYXN0V2VlazogJ1tmb3N0YV0gZGRkZCBbbGFdIExUJyxcbiAgICBzYW1lRWxzZTogJ0wnXG4gIH0sXG4gIHJlbGF0aXZlVGltZToge1xuICAgIGZ1dHVyZTogJ3Blc3RlICVzJyxcbiAgICBwYXN0OiAnJXMgw4PCrm4gdXJtw4TCgycsXG4gICAgczogJ2PDg8KidGV2YSBzZWN1bmRlJyxcbiAgICBzczogcmVsYXRpdmVUaW1lV2l0aFBsdXJhbCxcbiAgICBtOiAndW4gbWludXQnLFxuICAgIG1tOiByZWxhdGl2ZVRpbWVXaXRoUGx1cmFsLFxuICAgIGg6ICdvIG9yw4TCgycsXG4gICAgaGg6IHJlbGF0aXZlVGltZVdpdGhQbHVyYWwsXG4gICAgZDogJ28gemknLFxuICAgIGRkOiByZWxhdGl2ZVRpbWVXaXRoUGx1cmFsLFxuICAgIE06ICdvIGx1bsOEwoMnLFxuICAgIE1NOiByZWxhdGl2ZVRpbWVXaXRoUGx1cmFsLFxuICAgIHk6ICd1biBhbicsXG4gICAgeXk6IHJlbGF0aXZlVGltZVdpdGhQbHVyYWxcbiAgfSxcbiAgd2Vlazoge1xuICAgIGRvdzogMSwgLy8gTW9uZGF5IGlzIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsuXG4gICAgZG95OiA3ICAvLyBUaGUgd2VlayB0aGF0IGNvbnRhaW5zIEphbiAxc3QgaXMgdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHllYXIuXG4gIH1cbn07XG4iLCIvLyB0c2xpbnQ6ZGlzYWJsZTpjb21tZW50LWZvcm1hdCBiaW5hcnktZXhwcmVzc2lvbi1vcGVyYW5kLW9yZGVyIG1heC1saW5lLWxlbmd0aFxuLy8gdHNsaW50OmRpc2FibGU6bm8tYml0d2lzZSBwcmVmZXItdGVtcGxhdGUgY3ljbG9tYXRpYy1jb21wbGV4aXR5XG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1zaGFkb3dlZC12YXJpYWJsZSBzd2l0Y2gtZGVmYXVsdCBwcmVmZXItY29uc3Rcbi8vIHRzbGludDpkaXNhYmxlOm9uZS12YXJpYWJsZS1wZXItZGVjbGFyYXRpb24gbmV3bGluZS1iZWZvcmUtcmV0dXJuXG5cbmltcG9ydCB7IExvY2FsZURhdGEgfSBmcm9tICcuLi9sb2NhbGUvbG9jYWxlLmNsYXNzJztcbmltcG9ydCB7IGdldFdlZWsgfSBmcm9tICcuLi91bml0cy93ZWVrJztcbmltcG9ydCB7IGdldERheU9mV2VlayB9IGZyb20gJy4uL3VuaXRzL2RheS1vZi13ZWVrJztcblxuLy8hIG1vbWVudC5qcyBsb2NhbGUgY29uZmlndXJhdGlvblxuLy8hIGxvY2FsZSA6IFJ1c3NpYW4gW3J1XVxuLy8hIGF1dGhvciA6IFZpa3Rvcm1pbmF0b3IgOiBodHRwczovL2dpdGh1Yi5jb20vVmlrdG9ybWluYXRvclxuLy8hIEF1dGhvciA6IE1lbmVsaW9uIEVsZW5zw4PCumxlIDogaHR0cHM6Ly9naXRodWIuY29tL09pcmVcbi8vISBhdXRob3IgOiDDkMKaw5DCvsORwoDDkMK1w5DCvcOQwrHDkMK1w5HCgMOQwrMgw5DCnMOQwrDDkcKAw5DCuiA6IGh0dHBzOi8vZ2l0aHViLmNvbS9zb2NrZXRwYWlyXG5cbmZ1bmN0aW9uIHBsdXJhbCh3b3JkOiBzdHJpbmcsIG51bTogbnVtYmVyKTogc3RyaW5nIHtcbiAgbGV0IGZvcm1zID0gd29yZC5zcGxpdCgnXycpO1xuICByZXR1cm4gbnVtICUgMTAgPT09IDEgJiYgbnVtICUgMTAwICE9PSAxMSA/IGZvcm1zWzBdIDogKG51bSAlIDEwID49IDIgJiYgbnVtICUgMTAgPD0gNCAmJiAobnVtICUgMTAwIDwgMTAgfHwgbnVtICUgMTAwID49IDIwKSA/IGZvcm1zWzFdIDogZm9ybXNbMl0pO1xufVxuXG5mdW5jdGlvbiByZWxhdGl2ZVRpbWVXaXRoUGx1cmFsKG51bTogbnVtYmVyLCB3aXRob3V0U3VmZml4OiBib29sZWFuLCBrZXk6IHN0cmluZyk6IHN0cmluZyB7XG4gIGxldCBmb3JtYXQ6IHtba2V5OiBzdHJpbmddOiBzdHJpbmd9ID0ge1xuICAgIHNzOiB3aXRob3V0U3VmZml4ID8gJ8ORwoHDkMK1w5DCusORwoPDkMK9w5DCtMOQwrBfw5HCgcOQwrXDkMK6w5HCg8OQwr3DkMK0w5HCi1/DkcKBw5DCtcOQwrrDkcKDw5DCvcOQwrQnIDogJ8ORwoHDkMK1w5DCusORwoPDkMK9w5DCtMORwoNfw5HCgcOQwrXDkMK6w5HCg8OQwr3DkMK0w5HCi1/DkcKBw5DCtcOQwrrDkcKDw5DCvcOQwrQnLFxuICAgIG1tOiB3aXRob3V0U3VmZml4ID8gJ8OQwrzDkMK4w5DCvcORwoPDkcKCw5DCsF/DkMK8w5DCuMOQwr3DkcKDw5HCgsORwotfw5DCvMOQwrjDkMK9w5HCg8ORwoInIDogJ8OQwrzDkMK4w5DCvcORwoPDkcKCw5HCg1/DkMK8w5DCuMOQwr3DkcKDw5HCgsORwotfw5DCvMOQwrjDkMK9w5HCg8ORwoInLFxuICAgIGhoOiAnw5HCh8OQwrDDkcKBX8ORwofDkMKww5HCgcOQwrBfw5HCh8OQwrDDkcKBw5DCvsOQwrInLFxuICAgIGRkOiAnw5DCtMOQwrXDkMK9w5HCjF/DkMK0w5DCvcORwo9fw5DCtMOQwr3DkMK1w5DCuScsXG4gICAgTU06ICfDkMK8w5DCtcORwoHDkcKPw5HChl/DkMK8w5DCtcORwoHDkcKPw5HChsOQwrBfw5DCvMOQwrXDkcKBw5HCj8ORwobDkMK1w5DCsicsXG4gICAgeXk6ICfDkMKzw5DCvsOQwrRfw5DCs8OQwr7DkMK0w5DCsF/DkMK7w5DCtcORwoInXG4gIH07XG4gIGlmIChrZXkgPT09ICdtJykge1xuICAgIHJldHVybiB3aXRob3V0U3VmZml4ID8gJ8OQwrzDkMK4w5DCvcORwoPDkcKCw5DCsCcgOiAnw5DCvMOQwrjDkMK9w5HCg8ORwoLDkcKDJztcbiAgfVxuICByZXR1cm4gbnVtICsgJyAnICsgcGx1cmFsKGZvcm1hdFtrZXldLCArbnVtKTtcbn1cblxubGV0IG1vbnRoc1BhcnNlID0gWy9ew5HCj8OQwr3DkMKyL2ksIC9ew5HChMOQwrXDkMKyL2ksIC9ew5DCvMOQwrDDkcKAL2ksIC9ew5DCsMOQwr/DkcKAL2ksIC9ew5DCvMOQwrBbw5DCucORwo9dL2ksIC9ew5DCuMORwo7DkMK9L2ksIC9ew5DCuMORwo7DkMK7L2ksIC9ew5DCsMOQwrLDkMKzL2ksIC9ew5HCgcOQwrXDkMK9L2ksIC9ew5DCvsOQwrrDkcKCL2ksIC9ew5DCvcOQwr7DkcKPL2ksIC9ew5DCtMOQwrXDkMK6L2ldO1xuXG4vLyBodHRwOi8vbmV3LmdyYW1vdGEucnUvc3ByYXZrYS9ydWxlcy8xMzktcHJvcCA6IMOCwqcgMTAzXG4vLyDDkMKhw5DCvsOQwrrDkcKAw5DCsMORwonDkMK1w5DCvcOQwrjDkcKPIMOQwrzDkMK1w5HCgcORwo/DkcKGw5DCtcOQwrI6IGh0dHA6Ly9uZXcuZ3JhbW90YS5ydS9zcHJhdmthL2J1cm8vc2VhcmNoLWFuc3dlcj9zPTI0MjYzN1xuLy8gQ0xEUiBkYXRhOiAgICAgICAgICBodHRwOi8vd3d3LnVuaWNvZGUub3JnL2NsZHIvY2hhcnRzLzI4L3N1bW1hcnkvcnUuaHRtbCMxNzUzXG5leHBvcnQgY29uc3QgcnVMb2NhbGU6IExvY2FsZURhdGEgPSB7XG4gIGFiYnI6ICdydScsXG4gIG1vbnRoczoge1xuICAgIGZvcm1hdDogJ8ORwo/DkMK9w5DCssOQwrDDkcKAw5HCj1/DkcKEw5DCtcOQwrLDkcKAw5DCsMOQwrvDkcKPX8OQwrzDkMKww5HCgMORwoLDkMKwX8OQwrDDkMK/w5HCgMOQwrXDkMK7w5HCj1/DkMK8w5DCsMORwo9fw5DCuMORwo7DkMK9w5HCj1/DkMK4w5HCjsOQwrvDkcKPX8OQwrDDkMKyw5DCs8ORwoPDkcKBw5HCgsOQwrBfw5HCgcOQwrXDkMK9w5HCgsORwo/DkMKxw5HCgMORwo9fw5DCvsOQwrrDkcKCw5HCj8OQwrHDkcKAw5HCj1/DkMK9w5DCvsORwo/DkMKxw5HCgMORwo9fw5DCtMOQwrXDkMK6w5DCsMOQwrHDkcKAw5HCjycuc3BsaXQoJ18nKSxcbiAgICBzdGFuZGFsb25lOiAnw5HCj8OQwr3DkMKyw5DCsMORwoDDkcKMX8ORwoTDkMK1w5DCssORwoDDkMKww5DCu8ORwoxfw5DCvMOQwrDDkcKAw5HCgl/DkMKww5DCv8ORwoDDkMK1w5DCu8ORwoxfw5DCvMOQwrDDkMK5X8OQwrjDkcKOw5DCvcORwoxfw5DCuMORwo7DkMK7w5HCjF/DkMKww5DCssOQwrPDkcKDw5HCgcORwoJfw5HCgcOQwrXDkMK9w5HCgsORwo/DkMKxw5HCgMORwoxfw5DCvsOQwrrDkcKCw5HCj8OQwrHDkcKAw5HCjF/DkMK9w5DCvsORwo/DkMKxw5HCgMORwoxfw5DCtMOQwrXDkMK6w5DCsMOQwrHDkcKAw5HCjCcuc3BsaXQoJ18nKVxuICB9LFxuICBtb250aHNTaG9ydDoge1xuICAgIC8vIMOQwr/DkMK+IENMRFIgw5DCuMOQwrzDkMK1w5DCvcOQwr3DkMK+IFwiw5DCuMORwo7DkMK7LlwiIMOQwrggXCLDkMK4w5HCjsOQwr0uXCIsIMOQwr3DkMK+IMOQwrrDkMKww5DCusOQwr7DkMK5IMORwoHDkMK8w5HCi8ORwoHDkMK7IMOQwrzDkMK1w5DCvcORwo/DkcKCw5HCjCDDkMKxw5HCg8OQwrrDkMKyw5HCgyDDkMK9w5DCsCDDkcKCw5DCvsORwofDkMK6w5HCgyA/XG4gICAgZm9ybWF0OiAnw5HCj8OQwr3DkMKyLl/DkcKEw5DCtcOQwrLDkcKALl/DkMK8w5DCsMORwoAuX8OQwrDDkMK/w5HCgC5fw5DCvMOQwrDDkcKPX8OQwrjDkcKOw5DCvcORwo9fw5DCuMORwo7DkMK7w5HCj1/DkMKww5DCssOQwrMuX8ORwoHDkMK1w5DCvcORwoIuX8OQwr7DkMK6w5HCgi5fw5DCvcOQwr7DkcKPw5DCsS5fw5DCtMOQwrXDkMK6Licuc3BsaXQoJ18nKSxcbiAgICBzdGFuZGFsb25lOiAnw5HCj8OQwr3DkMKyLl/DkcKEw5DCtcOQwrLDkcKALl/DkMK8w5DCsMORwoDDkcKCX8OQwrDDkMK/w5HCgC5fw5DCvMOQwrDDkMK5X8OQwrjDkcKOw5DCvcORwoxfw5DCuMORwo7DkMK7w5HCjF/DkMKww5DCssOQwrMuX8ORwoHDkMK1w5DCvcORwoIuX8OQwr7DkMK6w5HCgi5fw5DCvcOQwr7DkcKPw5DCsS5fw5DCtMOQwrXDkMK6Licuc3BsaXQoJ18nKVxuICB9LFxuICB3ZWVrZGF5czoge1xuICAgIHN0YW5kYWxvbmU6ICfDkMKyw5DCvsORwoHDkMK6w5HCgMOQwrXDkcKBw5DCtcOQwr3DkcKMw5DCtV/DkMK/w5DCvsOQwr3DkMK1w5DCtMOQwrXDkMK7w5HCjMOQwr3DkMK4w5DCul/DkMKyw5HCgsOQwr7DkcKAw5DCvcOQwrjDkMK6X8ORwoHDkcKAw5DCtcOQwrTDkMKwX8ORwofDkMK1w5HCgsOQwrLDkMK1w5HCgMOQwrNfw5DCv8ORwo/DkcKCw5DCvcOQwrjDkcKGw5DCsF/DkcKBw5HCg8OQwrHDkMKxw5DCvsORwoLDkMKwJy5zcGxpdCgnXycpLFxuICAgIGZvcm1hdDogJ8OQwrLDkMK+w5HCgcOQwrrDkcKAw5DCtcORwoHDkMK1w5DCvcORwozDkMK1X8OQwr/DkMK+w5DCvcOQwrXDkMK0w5DCtcOQwrvDkcKMw5DCvcOQwrjDkMK6X8OQwrLDkcKCw5DCvsORwoDDkMK9w5DCuMOQwrpfw5HCgcORwoDDkMK1w5DCtMORwoNfw5HCh8OQwrXDkcKCw5DCssOQwrXDkcKAw5DCs1/DkMK/w5HCj8ORwoLDkMK9w5DCuMORwobDkcKDX8ORwoHDkcKDw5DCscOQwrHDkMK+w5HCgsORwoMnLnNwbGl0KCdfJyksXG4gICAgaXNGb3JtYXQ6IC9cXFsgP1vDkMKSw5DCsl0gPyg/OsOQwr/DkcKAw5DCvsORwojDkMK7w5HCg8ORwo58w5HCgcOQwrvDkMK1w5DCtMORwoPDkcKOw5HCicORwoPDkcKOfMORwo3DkcKCw5HCgyk/ID9cXF0gP2RkZGQvXG4gIH0sXG4gIHdlZWtkYXlzU2hvcnQ6ICfDkMKyw5HCgV/DkMK/w5DCvV/DkMKyw5HCgl/DkcKBw5HCgF/DkcKHw5HCgl/DkMK/w5HCgl/DkcKBw5DCsScuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNNaW46ICfDkMKyw5HCgV/DkMK/w5DCvV/DkMKyw5HCgl/DkcKBw5HCgF/DkcKHw5HCgl/DkMK/w5HCgl/DkcKBw5DCsScuc3BsaXQoJ18nKSxcbiAgbW9udGhzUGFyc2UsXG4gIGxvbmdNb250aHNQYXJzZTogbW9udGhzUGFyc2UsXG4gIHNob3J0TW9udGhzUGFyc2U6IG1vbnRoc1BhcnNlLFxuXG4gIC8vIMOQwr/DkMK+w5DCu8OQwr3DkcKLw5DCtSDDkMK9w5DCsMOQwrfDkMKyw5DCsMOQwr3DkMK4w5HCjyDDkcKBIMOQwr/DkMKww5DCtMOQwrXDkMK2w5DCsMOQwrzDkMK4LCDDkMK/w5DCviDDkcKCw5HCgMOQwrggw5DCscORwoPDkMK6w5DCssORwossIMOQwrTDkMK7w5HCjyDDkMK9w5DCtcOQwrrDkMK+w5HCgsOQwr7DkcKAw5HCi8ORwoUsIMOQwr/DkMK+IDQgw5DCscORwoPDkMK6w5DCssORwossIMORwoHDkMK+w5DCusORwoDDkMKww5HCicOQwrXDkMK9w5DCuMORwo8gw5HCgSDDkcKCw5DCvsORwofDkMK6w5DCvsOQwrkgw5DCuCDDkMKxw5DCtcOQwrcgw5HCgsOQwr7DkcKHw5DCusOQwrhcbiAgbW9udGhzUmVnZXg6IC9eKMORwo/DkMK9w5DCssOQwrDDkcKAW8ORwozDkcKPXXzDkcKPw5DCvcOQwrJcXC4/fMORwoTDkMK1w5DCssORwoDDkMKww5DCu1vDkcKMw5HCj118w5HChMOQwrXDkMKyw5HCgD9cXC4/fMOQwrzDkMKww5HCgMORwoLDkMKwP3zDkMK8w5DCsMORwoBcXC4/fMOQwrDDkMK/w5HCgMOQwrXDkMK7W8ORwozDkcKPXXzDkMKww5DCv8ORwoBcXC4/fMOQwrzDkMKwW8OQwrnDkcKPXXzDkMK4w5HCjsOQwr1bw5HCjMORwo9dfMOQwrjDkcKOw5DCvVxcLj98w5DCuMORwo7DkMK7W8ORwozDkcKPXXzDkMK4w5HCjsOQwrtcXC4/fMOQwrDDkMKyw5DCs8ORwoPDkcKBw5HCgsOQwrA/fMOQwrDDkMKyw5DCs1xcLj98w5HCgcOQwrXDkMK9w5HCgsORwo/DkMKxw5HCgFvDkcKMw5HCj118w5HCgcOQwrXDkMK9w5HCgj9cXC4/fMOQwr7DkMK6w5HCgsORwo/DkMKxw5HCgFvDkcKMw5HCj118w5DCvsOQwrrDkcKCXFwuP3zDkMK9w5DCvsORwo/DkMKxw5HCgFvDkcKMw5HCj118w5DCvcOQwr7DkcKPw5DCsT9cXC4/fMOQwrTDkMK1w5DCusOQwrDDkMKxw5HCgFvDkcKMw5HCj118w5DCtMOQwrXDkMK6XFwuPykvaSxcblxuICAvLyDDkMK6w5DCvsOQwr/DkMK4w5HCjyDDkMK/w5HCgMOQwrXDkMK0w5HCi8OQwrTDkcKDw5HCicOQwrXDkMKzw5DCvlxuICBtb250aHNTaG9ydFJlZ2V4OiAvXijDkcKPw5DCvcOQwrLDkMKww5HCgFvDkcKMw5HCj118w5HCj8OQwr3DkMKyXFwuP3zDkcKEw5DCtcOQwrLDkcKAw5DCsMOQwrtbw5HCjMORwo9dfMORwoTDkMK1w5DCssORwoA/XFwuP3zDkMK8w5DCsMORwoDDkcKCw5DCsD98w5DCvMOQwrDDkcKAXFwuP3zDkMKww5DCv8ORwoDDkMK1w5DCu1vDkcKMw5HCj118w5DCsMOQwr/DkcKAXFwuP3zDkMK8w5DCsFvDkMK5w5HCj118w5DCuMORwo7DkMK9W8ORwozDkcKPXXzDkMK4w5HCjsOQwr1cXC4/fMOQwrjDkcKOw5DCu1vDkcKMw5HCj118w5DCuMORwo7DkMK7XFwuP3zDkMKww5DCssOQwrPDkcKDw5HCgcORwoLDkMKwP3zDkMKww5DCssOQwrNcXC4/fMORwoHDkMK1w5DCvcORwoLDkcKPw5DCscORwoBbw5HCjMORwo9dfMORwoHDkMK1w5DCvcORwoI/XFwuP3zDkMK+w5DCusORwoLDkcKPw5DCscORwoBbw5HCjMORwo9dfMOQwr7DkMK6w5HCglxcLj98w5DCvcOQwr7DkcKPw5DCscORwoBbw5HCjMORwo9dfMOQwr3DkMK+w5HCj8OQwrE/XFwuP3zDkMK0w5DCtcOQwrrDkMKww5DCscORwoBbw5HCjMORwo9dfMOQwrTDkMK1w5DCulxcLj8pL2ksXG5cbiAgLy8gw5DCv8OQwr7DkMK7w5DCvcORwovDkMK1IMOQwr3DkMKww5DCt8OQwrLDkMKww5DCvcOQwrjDkcKPIMORwoEgw5DCv8OQwrDDkMK0w5DCtcOQwrbDkMKww5DCvMOQwrhcbiAgbW9udGhzU3RyaWN0UmVnZXg6IC9eKMORwo/DkMK9w5DCssOQwrDDkcKAW8ORwo/DkcKMXXzDkcKEw5DCtcOQwrLDkcKAw5DCsMOQwrtbw5HCj8ORwoxdfMOQwrzDkMKww5HCgMORwoLDkMKwP3zDkMKww5DCv8ORwoDDkMK1w5DCu1vDkcKPw5HCjF18w5DCvMOQwrBbw5HCj8OQwrldfMOQwrjDkcKOw5DCvVvDkcKPw5HCjF18w5DCuMORwo7DkMK7W8ORwo/DkcKMXXzDkMKww5DCssOQwrPDkcKDw5HCgcORwoLDkMKwP3zDkcKBw5DCtcOQwr3DkcKCw5HCj8OQwrHDkcKAW8ORwo/DkcKMXXzDkMK+w5DCusORwoLDkcKPw5DCscORwoBbw5HCj8ORwoxdfMOQwr3DkMK+w5HCj8OQwrHDkcKAW8ORwo/DkcKMXXzDkMK0w5DCtcOQwrrDkMKww5DCscORwoBbw5HCj8ORwoxdKS9pLFxuXG4gIC8vIMOQwpLDkcKLw5HCgMOQwrDDkMK2w5DCtcOQwr3DkMK4w5DCtSwgw5DCusOQwr7DkcKCw5DCvsORwoDDkMK+w5DCtSDDkcKBw5DCvsOQwr7DkcKCw5DCssOQwrXDkcKBw5HCgsOQwrLDkcKDw5DCtcORwoIgw5HCgsOQwr7DkMK7w5HCjMOQwrrDkMK+IMORwoHDkMK+w5DCusORwoDDkMKww5HCicORwpHDkMK9w5DCvcORwovDkMK8IMORwoTDkMK+w5HCgMOQwrzDkMKww5DCvFxuICBtb250aHNTaG9ydFN0cmljdFJlZ2V4OiAvXijDkcKPw5DCvcOQwrJcXC58w5HChMOQwrXDkMKyw5HCgD9cXC58w5DCvMOQwrDDkcKAW8ORwoIuXXzDkMKww5DCv8ORwoBcXC58w5DCvMOQwrBbw5HCj8OQwrldfMOQwrjDkcKOw5DCvVvDkcKMw5HCjy5dfMOQwrjDkcKOw5DCu1vDkcKMw5HCjy5dfMOQwrDDkMKyw5DCs1xcLnzDkcKBw5DCtcOQwr3DkcKCP1xcLnzDkMK+w5DCusORwoJcXC58w5DCvcOQwr7DkcKPw5DCsT9cXC58w5DCtMOQwrXDkMK6XFwuKS9pLFxuICBsb25nRGF0ZUZvcm1hdDoge1xuICAgIExUOiAnSDptbScsXG4gICAgTFRTOiAnSDptbTpzcycsXG4gICAgTDogJ0RELk1NLllZWVknLFxuICAgIExMOiAnRCBNTU1NIFlZWVkgw5DCsy4nLFxuICAgIExMTDogJ0QgTU1NTSBZWVlZIMOQwrMuLCBIOm1tJyxcbiAgICBMTExMOiAnZGRkZCwgRCBNTU1NIFlZWVkgw5DCsy4sIEg6bW0nXG4gIH0sXG4gIGNhbGVuZGFyOiB7XG4gICAgc2FtZURheTogJ1vDkMKhw5DCtcOQwrPDkMK+w5DCtMOQwr3DkcKPIMOQwrJdIExUJyxcbiAgICBuZXh0RGF5OiAnW8OQwpfDkMKww5DCssORwoLDkcKAw5DCsCDDkMKyXSBMVCcsXG4gICAgbGFzdERheTogJ1vDkMKSw5HCh8OQwrXDkcKAw5DCsCDDkMKyXSBMVCcsXG4gICAgbmV4dFdlZWsoZGF0ZTogRGF0ZSwgbm93OiBEYXRlKSB7XG4gICAgICBpZiAoZ2V0V2Vlayhub3cpICE9PSBnZXRXZWVrKGRhdGUpKSB7XG4gICAgICAgIHN3aXRjaCAoZ2V0RGF5T2ZXZWVrKGRhdGUpKSB7XG4gICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgcmV0dXJuICdbw5DCkiDDkcKBw5DCu8OQwrXDkMK0w5HCg8ORwo7DkcKJw5DCtcOQwrVdIGRkZGQgW8OQwrJdIExUJztcbiAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgIHJldHVybiAnW8OQwpIgw5HCgcOQwrvDkMK1w5DCtMORwoPDkcKOw5HCicOQwrjDkMK5XSBkZGRkIFvDkMKyXSBMVCc7XG4gICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgICByZXR1cm4gJ1vDkMKSIMORwoHDkMK7w5DCtcOQwrTDkcKDw5HCjsORwonDkcKDw5HCjl0gZGRkZCBbw5DCsl0gTFQnO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoZ2V0RGF5T2ZXZWVrKGRhdGUpID09PSAyKSB7XG4gICAgICAgICAgcmV0dXJuICdbw5DCksOQwr5dIGRkZGQgW8OQwrJdIExUJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gJ1vDkMKSXSBkZGRkIFvDkMKyXSBMVCc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIGxhc3RXZWVrKGRhdGU6IERhdGUsIG5vdzogRGF0ZSkge1xuICAgICAgaWYgKGdldFdlZWsobm93KSAhPT0gZ2V0V2VlayhkYXRlKSkge1xuICAgICAgICBzd2l0Y2ggKGdldERheU9mV2VlayhkYXRlKSkge1xuICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIHJldHVybiAnW8OQwpIgw5DCv8ORwoDDkMK+w5HCiMOQwrvDkMK+w5DCtV0gZGRkZCBbw5DCsl0gTFQnO1xuICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgcmV0dXJuICdbw5DCkiDDkMK/w5HCgMOQwr7DkcKIw5DCu8ORwovDkMK5XSBkZGRkIFvDkMKyXSBMVCc7XG4gICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgICByZXR1cm4gJ1vDkMKSIMOQwr/DkcKAw5DCvsORwojDkMK7w5HCg8ORwo5dIGRkZGQgW8OQwrJdIExUJztcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGdldERheU9mV2VlayhkYXRlKSA9PT0gMikge1xuICAgICAgICAgIHJldHVybiAnW8OQwpLDkMK+XSBkZGRkIFvDkMKyXSBMVCc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuICdbw5DCkl0gZGRkZCBbw5DCsl0gTFQnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBzYW1lRWxzZTogJ0wnXG4gIH0sXG4gIHJlbGF0aXZlVGltZToge1xuICAgIGZ1dHVyZTogJ8ORwofDkMK1w5HCgMOQwrXDkMK3ICVzJyxcbiAgICBwYXN0OiAnJXMgw5DCvcOQwrDDkMK3w5DCsMOQwrQnLFxuICAgIHM6ICfDkMK9w5DCtcORwoHDkMK6w5DCvsOQwrvDkcKMw5DCusOQwr4gw5HCgcOQwrXDkMK6w5HCg8OQwr3DkMK0JyxcbiAgICBzczogcmVsYXRpdmVUaW1lV2l0aFBsdXJhbCxcbiAgICBtOiByZWxhdGl2ZVRpbWVXaXRoUGx1cmFsLFxuICAgIG1tOiByZWxhdGl2ZVRpbWVXaXRoUGx1cmFsLFxuICAgIGg6ICfDkcKHw5DCsMORwoEnLFxuICAgIGhoOiByZWxhdGl2ZVRpbWVXaXRoUGx1cmFsLFxuICAgIGQ6ICfDkMK0w5DCtcOQwr3DkcKMJyxcbiAgICBkZDogcmVsYXRpdmVUaW1lV2l0aFBsdXJhbCxcbiAgICBNOiAnw5DCvMOQwrXDkcKBw5HCj8ORwoYnLFxuICAgIE1NOiByZWxhdGl2ZVRpbWVXaXRoUGx1cmFsLFxuICAgIHk6ICfDkMKzw5DCvsOQwrQnLFxuICAgIHl5OiByZWxhdGl2ZVRpbWVXaXRoUGx1cmFsXG4gIH0sXG4gIG1lcmlkaWVtUGFyc2U6IC/DkMK9w5DCvsORwofDkMK4fMORwoPDkcKCw5HCgMOQwrB8w5DCtMOQwr3DkcKPfMOQwrLDkMK1w5HCh8OQwrXDkcKAw5DCsC9pLFxuICBpc1BNKGlucHV0KSB7XG4gICAgcmV0dXJuIC9eKMOQwrTDkMK9w5HCj3zDkMKyw5DCtcORwofDkMK1w5HCgMOQwrApJC8udGVzdChpbnB1dCk7XG4gIH0sXG4gIG1lcmlkaWVtKGhvdXIsIG1pbnV0ZSwgaXNMb3dlcikge1xuICAgIGlmIChob3VyIDwgNCkge1xuICAgICAgcmV0dXJuICfDkMK9w5DCvsORwofDkMK4JztcbiAgICB9IGVsc2UgaWYgKGhvdXIgPCAxMikge1xuICAgICAgcmV0dXJuICfDkcKDw5HCgsORwoDDkMKwJztcbiAgICB9IGVsc2UgaWYgKGhvdXIgPCAxNykge1xuICAgICAgcmV0dXJuICfDkMK0w5DCvcORwo8nO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gJ8OQwrLDkMK1w5HCh8OQwrXDkcKAw5DCsCc7XG4gICAgfVxuICB9LFxuICBkYXlPZk1vbnRoT3JkaW5hbFBhcnNlOiAvXFxkezEsMn0tKMOQwrl8w5DCs8OQwr58w5HCjykvLFxuICBvcmRpbmFsKF9udW06IG51bWJlciwgcGVyaW9kOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGNvbnN0IG51bSA9IE51bWJlcihfbnVtKTtcbiAgICBzd2l0Y2ggKHBlcmlvZCkge1xuICAgICAgY2FzZSAnTSc6XG4gICAgICBjYXNlICdkJzpcbiAgICAgIGNhc2UgJ0RERCc6XG4gICAgICAgIHJldHVybiBudW0gKyAnLcOQwrknO1xuICAgICAgY2FzZSAnRCc6XG4gICAgICAgIHJldHVybiBudW0gKyAnLcOQwrPDkMK+JztcbiAgICAgIGNhc2UgJ3cnOlxuICAgICAgY2FzZSAnVyc6XG4gICAgICAgIHJldHVybiBudW0gKyAnLcORwo8nO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIG51bS50b1N0cmluZygxMCk7XG4gICAgfVxuICB9LFxuICB3ZWVrOiB7XG4gICAgZG93OiAxLCAvLyBNb25kYXkgaXMgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2Vlay5cbiAgICBkb3k6IDQgIC8vIFRoZSB3ZWVrIHRoYXQgY29udGFpbnMgSmFuIDR0aCBpcyB0aGUgZmlyc3Qgd2VlayBvZiB0aGUgeWVhci5cbiAgfVxufTtcbiIsIi8vIHRzbGludDpkaXNhYmxlOmNvbW1lbnQtZm9ybWF0IGJpbmFyeS1leHByZXNzaW9uLW9wZXJhbmQtb3JkZXIgbWF4LWxpbmUtbGVuZ3RoXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1iaXR3aXNlIHByZWZlci10ZW1wbGF0ZSBjeWNsb21hdGljLWNvbXBsZXhpdHlcbi8vIHRzbGludDpkaXNhYmxlOm5vLXNoYWRvd2VkLXZhcmlhYmxlIHN3aXRjaC1kZWZhdWx0IHByZWZlci1jb25zdFxuLy8gdHNsaW50OmRpc2FibGU6b25lLXZhcmlhYmxlLXBlci1kZWNsYXJhdGlvbiBuZXdsaW5lLWJlZm9yZS1yZXR1cm5cblxuaW1wb3J0IHsgTG9jYWxlRGF0YSB9IGZyb20gJy4uL2xvY2FsZS9sb2NhbGUuY2xhc3MnO1xuaW1wb3J0IHsgZ2V0RGF5T2ZXZWVrIH0gZnJvbSAnLi4vdW5pdHMvZGF5LW9mLXdlZWsnO1xuXG4vLyEgbW9tZW50LmpzIGxvY2FsZSBjb25maWd1cmF0aW9uXG4vLyEgbG9jYWxlIDogU2xvdmFrIFtza11cbi8vISBhdXRob3IgOiBKb3plZiBQYcOFwr5pbiA6IGh0dHBzOi8vZ2l0aHViLmNvbS9hdGlyaXNcblxuY29uc3QgbW9udGhzID0gJ2phbnXDg8Khcl9mZWJydcODwqFyX21hcmVjX2FwcsODwq1sX23Dg8Khal9qw4PCum5fasODwrpsX2F1Z3VzdF9zZXB0ZW1iZXJfb2t0w4PCs2Jlcl9ub3ZlbWJlcl9kZWNlbWJlcicuc3BsaXQoJ18nKTtcbmNvbnN0IG1vbnRoc1Nob3J0ID0gJ2phbl9mZWJfbWFyX2Fwcl9tw4PCoWpfasODwrpuX2rDg8K6bF9hdWdfc2VwX29rdF9ub3ZfZGVjJy5zcGxpdCgnXycpO1xuXG5mdW5jdGlvbiBwbHVyYWwobnVtOiBudW1iZXIpOiBib29sZWFuIHtcbiAgcmV0dXJuIChudW0gPiAxKSAmJiAobnVtIDwgNSkgJiYgKH5+KG51bSAvIDEwKSAhPT0gMSk7XG59XG5cbmZ1bmN0aW9uIHRyYW5zbGF0ZShudW06IG51bWJlciwgd2l0aG91dFN1ZmZpeDogYm9vbGVhbiwga2V5OiBzdHJpbmcsIGlzRnV0dXJlOiBib29sZWFuKTogc3RyaW5nIHtcbiAgY29uc3QgcmVzdWx0ID0gbnVtICsgJyAnO1xuXG4gIHN3aXRjaCAoa2V5KSB7XG4gICAgY2FzZSAncyc6Ly8gYSBmZXcgc2Vjb25kcyAvIGluIGEgZmV3IHNlY29uZHMgLyBhIGZldyBzZWNvbmRzIGFnb1xuICAgICAgcmV0dXJuICh3aXRob3V0U3VmZml4IHx8IGlzRnV0dXJlKSA/ICdww4PCoXIgc2Vrw4PCum5kJyA6ICdww4PCoXIgc2VrdW5kYW1pJztcbiAgICBjYXNlICdzcyc6Ly8gOSBzZWNvbmRzIC8gaW4gOSBzZWNvbmRzIC8gOSBzZWNvbmRzIGFnb1xuICAgICAgaWYgKHdpdGhvdXRTdWZmaXggfHwgaXNGdXR1cmUpIHtcbiAgICAgICAgcmV0dXJuIHJlc3VsdCArIChwbHVyYWwobnVtKSA/ICdzZWt1bmR5JyA6ICdzZWvDg8K6bmQnKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gcmVzdWx0ICsgJ3Nla3VuZGFtaSc7XG4gICAgICB9XG4gICAgLy8gYnJlYWs7XG4gICAgY2FzZSAnbSc6Ly8gYSBtaW51dGUgLyBpbiBhIG1pbnV0ZSAvIGEgbWludXRlIGFnb1xuICAgICAgcmV0dXJuIHdpdGhvdXRTdWZmaXggPyAnbWluw4PCunRhJyA6IChpc0Z1dHVyZSA/ICdtaW7Dg8K6dHUnIDogJ21pbsODwrp0b3UnKTtcbiAgICBjYXNlICdtbSc6Ly8gOSBtaW51dGVzIC8gaW4gOSBtaW51dGVzIC8gOSBtaW51dGVzIGFnb1xuICAgICAgaWYgKHdpdGhvdXRTdWZmaXggfHwgaXNGdXR1cmUpIHtcbiAgICAgICAgcmV0dXJuIHJlc3VsdCArIChwbHVyYWwobnVtKSA/ICdtaW7Dg8K6dHknIDogJ21pbsODwrp0Jyk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHJlc3VsdCArICdtaW7Dg8K6dGFtaSc7XG4gICAgICB9XG4gICAgLy8gYnJlYWs7XG4gICAgY2FzZSAnaCc6Ly8gYW4gaG91ciAvIGluIGFuIGhvdXIgLyBhbiBob3VyIGFnb1xuICAgICAgcmV0dXJuIHdpdGhvdXRTdWZmaXggPyAnaG9kaW5hJyA6IChpc0Z1dHVyZSA/ICdob2RpbnUnIDogJ2hvZGlub3UnKTtcbiAgICBjYXNlICdoaCc6Ly8gOSBob3VycyAvIGluIDkgaG91cnMgLyA5IGhvdXJzIGFnb1xuICAgICAgaWYgKHdpdGhvdXRTdWZmaXggfHwgaXNGdXR1cmUpIHtcbiAgICAgICAgcmV0dXJuIHJlc3VsdCArIChwbHVyYWwobnVtKSA/ICdob2RpbnknIDogJ2hvZMODwq1uJyk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHJlc3VsdCArICdob2RpbmFtaSc7XG4gICAgICB9XG4gICAgLy8gYnJlYWs7XG4gICAgY2FzZSAnZCc6Ly8gYSBkYXkgLyBpbiBhIGRheSAvIGEgZGF5IGFnb1xuICAgICAgcmV0dXJuICh3aXRob3V0U3VmZml4IHx8IGlzRnV0dXJlKSA/ICdkZcOFwognIDogJ2TDhcKIb20nO1xuICAgIGNhc2UgJ2RkJzovLyA5IGRheXMgLyBpbiA5IGRheXMgLyA5IGRheXMgYWdvXG4gICAgICBpZiAod2l0aG91dFN1ZmZpeCB8fCBpc0Z1dHVyZSkge1xuICAgICAgICByZXR1cm4gcmVzdWx0ICsgKHBsdXJhbChudW0pID8gJ2RuaScgOiAnZG7Dg8KtJyk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHJlc3VsdCArICdkw4XCiGFtaSc7XG4gICAgICB9XG4gICAgLy8gYnJlYWs7XG4gICAgY2FzZSAnTSc6Ly8gYSBtb250aCAvIGluIGEgbW9udGggLyBhIG1vbnRoIGFnb1xuICAgICAgcmV0dXJuICh3aXRob3V0U3VmZml4IHx8IGlzRnV0dXJlKSA/ICdtZXNpYWMnIDogJ21lc2lhY29tJztcbiAgICBjYXNlICdNTSc6Ly8gOSBtb250aHMgLyBpbiA5IG1vbnRocyAvIDkgbW9udGhzIGFnb1xuICAgICAgaWYgKHdpdGhvdXRTdWZmaXggfHwgaXNGdXR1cmUpIHtcbiAgICAgICAgcmV0dXJuIHJlc3VsdCArIChwbHVyYWwobnVtKSA/ICdtZXNpYWNlJyA6ICdtZXNpYWNvdicpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHJldHVybiByZXN1bHQgKyAnbWVzaWFjbWknO1xuICAgICAgfVxuICAgIC8vIGJyZWFrO1xuICAgIGNhc2UgJ3knOi8vIGEgeWVhciAvIGluIGEgeWVhciAvIGEgeWVhciBhZ29cbiAgICAgIHJldHVybiAod2l0aG91dFN1ZmZpeCB8fCBpc0Z1dHVyZSkgPyAncm9rJyA6ICdyb2tvbSc7XG4gICAgY2FzZSAneXknOi8vIDkgeWVhcnMgLyBpbiA5IHllYXJzIC8gOSB5ZWFycyBhZ29cbiAgICAgIGlmICh3aXRob3V0U3VmZml4IHx8IGlzRnV0dXJlKSB7XG4gICAgICAgIHJldHVybiByZXN1bHQgKyAocGx1cmFsKG51bSkgPyAncm9reScgOiAncm9rb3YnKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gcmVzdWx0ICsgJ3Jva21pJztcbiAgICAgIH1cbiAgICAvLyBicmVhaztcbiAgfVxufVxuXG5leHBvcnQgY29uc3Qgc2tMb2NhbGU6IExvY2FsZURhdGEgPSB7XG4gIGFiYnI6ICdzaycsXG4gIG1vbnRocyxcbiAgbW9udGhzU2hvcnQsXG4gIHdlZWtkYXlzOiAnbmVkZcOEwr5hX3BvbmRlbG9rX3V0b3Jva19zdHJlZGFfw4XCoXR2cnRva19waWF0b2tfc29ib3RhJy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5c1Nob3J0OiAnbmVfcG9fdXRfc3Rfw4XCoXRfcGlfc28nLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzTWluOiAnbmVfcG9fdXRfc3Rfw4XCoXRfcGlfc28nLnNwbGl0KCdfJyksXG4gIGxvbmdEYXRlRm9ybWF0OiB7XG4gICAgTFQ6ICdIOm1tJyxcbiAgICBMVFM6ICdIOm1tOnNzJyxcbiAgICBMOiAnREQuTU0uWVlZWScsXG4gICAgTEw6ICdELiBNTU1NIFlZWVknLFxuICAgIExMTDogJ0QuIE1NTU0gWVlZWSBIOm1tJyxcbiAgICBMTExMOiAnZGRkZCBELiBNTU1NIFlZWVkgSDptbScsXG4gICAgbDogJ0QuIE0uIFlZWVknXG4gIH0sXG4gIGNhbGVuZGFyOiB7XG4gICAgc2FtZURheTogJ1tkbmVzIG9dIExUJyxcbiAgICBuZXh0RGF5OiAnW3phanRyYSBvXSBMVCcsXG4gICAgbmV4dFdlZWsoZGF0ZTogRGF0ZSk6IHN0cmluZyB7XG4gICAgICBzd2l0Y2ggKGdldERheU9mV2VlayhkYXRlKSkge1xuICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgcmV0dXJuICdbdiBuZWRlw4TCvnUgb10gTFQnO1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICByZXR1cm4gJ1t2XSBkZGRkIFtvXSBMVCc7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICByZXR1cm4gJ1t2IHN0cmVkdSBvXSBMVCc7XG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICByZXR1cm4gJ1t2byDDhcKhdHZydG9rIG9dIExUJztcbiAgICAgICAgY2FzZSA1OlxuICAgICAgICAgIHJldHVybiAnW3YgcGlhdG9rIG9dIExUJztcbiAgICAgICAgY2FzZSA2OlxuICAgICAgICAgIHJldHVybiAnW3Ygc29ib3R1IG9dIExUJztcbiAgICAgIH1cbiAgICB9LFxuICAgIGxhc3REYXk6ICdbdsOEwo1lcmEgb10gTFQnLFxuICAgIGxhc3RXZWVrKGRhdGU6IERhdGUpOiBzdHJpbmcge1xuICAgICAgc3dpdGNoIChnZXREYXlPZldlZWsoZGF0ZSkpIHtcbiAgICAgICAgY2FzZSAwOlxuICAgICAgICAgIHJldHVybiAnW21pbnVsw4PCuiBuZWRlw4TCvnUgb10gTFQnO1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICByZXR1cm4gJ1ttaW51bMODwr1dIGRkZGQgW29dIExUJztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIHJldHVybiAnW21pbnVsw4PCuiBzdHJlZHUgb10gTFQnO1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgIGNhc2UgNTpcbiAgICAgICAgICByZXR1cm4gJ1ttaW51bMODwr1dIGRkZGQgW29dIExUJztcbiAgICAgICAgY2FzZSA2OlxuICAgICAgICAgIHJldHVybiAnW21pbnVsw4PCuiBzb2JvdHUgb10gTFQnO1xuICAgICAgfVxuICAgIH0sXG4gICAgc2FtZUVsc2U6ICdMJ1xuICB9LFxuICByZWxhdGl2ZVRpbWU6IHtcbiAgICBmdXR1cmU6ICdvICVzJyxcbiAgICBwYXN0OiAncHJlZCAlcycsXG4gICAgczogdHJhbnNsYXRlLFxuICAgIHNzOiB0cmFuc2xhdGUsXG4gICAgbTogdHJhbnNsYXRlLFxuICAgIG1tOiB0cmFuc2xhdGUsXG4gICAgaDogdHJhbnNsYXRlLFxuICAgIGhoOiB0cmFuc2xhdGUsXG4gICAgZDogdHJhbnNsYXRlLFxuICAgIGRkOiB0cmFuc2xhdGUsXG4gICAgTTogdHJhbnNsYXRlLFxuICAgIE1NOiB0cmFuc2xhdGUsXG4gICAgeTogdHJhbnNsYXRlLFxuICAgIHl5OiB0cmFuc2xhdGVcbiAgfSxcbiAgZGF5T2ZNb250aE9yZGluYWxQYXJzZTogL1xcZHsxLDJ9XFwuLyxcbiAgb3JkaW5hbDogJyVkLicsXG4gIHdlZWs6IHtcbiAgICBkb3c6IDEsIC8vIE1vbmRheSBpcyB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrLlxuICAgIGRveTogNCAgLy8gVGhlIHdlZWsgdGhhdCBjb250YWlucyBKYW4gNHRoIGlzIHRoZSBmaXJzdCB3ZWVrIG9mIHRoZSB5ZWFyLlxuICB9XG59O1xuXG4iLCIvLyB0c2xpbnQ6ZGlzYWJsZTpjb21tZW50LWZvcm1hdCBiaW5hcnktZXhwcmVzc2lvbi1vcGVyYW5kLW9yZGVyIG1heC1saW5lLWxlbmd0aFxuLy8gdHNsaW50OmRpc2FibGU6bm8tYml0d2lzZSBwcmVmZXItdGVtcGxhdGUgY3ljbG9tYXRpYy1jb21wbGV4aXR5XG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1zaGFkb3dlZC12YXJpYWJsZSBzd2l0Y2gtZGVmYXVsdCBwcmVmZXItY29uc3Rcbi8vIHRzbGludDpkaXNhYmxlOm9uZS12YXJpYWJsZS1wZXItZGVjbGFyYXRpb24gbmV3bGluZS1iZWZvcmUtcmV0dXJuXG4vLyB0c2xpbnQ6ZGlzYWJsZTpvYmplY3QtbGl0ZXJhbC1rZXktcXVvdGVzXG5cbmltcG9ydCB7IExvY2FsZURhdGEgfSBmcm9tICcuLi9sb2NhbGUvbG9jYWxlLmNsYXNzJztcbmltcG9ydCB7IGdldERheU9mV2VlayB9IGZyb20gJy4uL3VuaXRzL2RheS1vZi13ZWVrJztcblxuLy8hIG1vbWVudC5qcyBsb2NhbGUgY29uZmlndXJhdGlvblxuLy8hIGxvY2FsZSA6IFNsb3ZlbmlhbiBbc2xdXG4vLyEgYXV0aG9yIDogbWloYW4gOiBodHRwczovL2dpdGh1Yi5jb20vbWloYW5cblxuZnVuY3Rpb24gcHJvY2Vzc1JlbGF0aXZlVGltZShudW1iZXI6IG51bWJlciwgd2l0aG91dFN1ZmZpeDogYm9vbGVhbiwga2V5OiBzdHJpbmcsIGlzRnV0dXJlOiBib29sZWFuKTogc3RyaW5nIHtcbiAgdmFyIHJlc3VsdCA9IG51bWJlciArICcgJztcbiAgc3dpdGNoIChrZXkpIHtcbiAgICBjYXNlICdzJzpcbiAgICAgIHJldHVybiB3aXRob3V0U3VmZml4IHx8IGlzRnV0dXJlID8gJ25la2FqIHNla3VuZCcgOiAnbmVrYWogc2VrdW5kYW1pJztcbiAgICBjYXNlICdzcyc6XG4gICAgICBpZiAobnVtYmVyID09PSAxKSB7XG4gICAgICAgIHJlc3VsdCArPSB3aXRob3V0U3VmZml4ID8gJ3Nla3VuZG8nIDogJ3Nla3VuZGknO1xuICAgICAgfSBlbHNlIGlmIChudW1iZXIgPT09IDIpIHtcbiAgICAgICAgcmVzdWx0ICs9IHdpdGhvdXRTdWZmaXggfHwgaXNGdXR1cmUgPyAnc2VrdW5kaScgOiAnc2VrdW5kYWgnO1xuICAgICAgfSBlbHNlIGlmIChudW1iZXIgPCA1KSB7XG4gICAgICAgIHJlc3VsdCArPSB3aXRob3V0U3VmZml4IHx8IGlzRnV0dXJlID8gJ3Nla3VuZGUnIDogJ3Nla3VuZGFoJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdCArPSB3aXRob3V0U3VmZml4IHx8IGlzRnV0dXJlID8gJ3Nla3VuZCcgOiAnc2VrdW5kJztcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgY2FzZSAnbSc6XG4gICAgICByZXR1cm4gd2l0aG91dFN1ZmZpeCA/ICdlbmEgbWludXRhJyA6ICdlbm8gbWludXRvJztcbiAgICBjYXNlICdtbSc6XG4gICAgICBpZiAobnVtYmVyID09PSAxKSB7XG4gICAgICAgIHJlc3VsdCArPSB3aXRob3V0U3VmZml4ID8gJ21pbnV0YScgOiAnbWludXRvJztcbiAgICAgIH0gZWxzZSBpZiAobnVtYmVyID09PSAyKSB7XG4gICAgICAgIHJlc3VsdCArPSB3aXRob3V0U3VmZml4IHx8IGlzRnV0dXJlID8gJ21pbnV0aScgOiAnbWludXRhbWEnO1xuICAgICAgfSBlbHNlIGlmIChudW1iZXIgPCA1KSB7XG4gICAgICAgIHJlc3VsdCArPSB3aXRob3V0U3VmZml4IHx8IGlzRnV0dXJlID8gJ21pbnV0ZScgOiAnbWludXRhbWknO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0ICs9IHdpdGhvdXRTdWZmaXggfHwgaXNGdXR1cmUgPyAnbWludXQnIDogJ21pbnV0YW1pJztcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgY2FzZSAnaCc6XG4gICAgICByZXR1cm4gd2l0aG91dFN1ZmZpeCA/ICdlbmEgdXJhJyA6ICdlbm8gdXJvJztcbiAgICBjYXNlICdoaCc6XG4gICAgICBpZiAobnVtYmVyID09PSAxKSB7XG4gICAgICAgIHJlc3VsdCArPSB3aXRob3V0U3VmZml4ID8gJ3VyYScgOiAndXJvJztcbiAgICAgIH0gZWxzZSBpZiAobnVtYmVyID09PSAyKSB7XG4gICAgICAgIHJlc3VsdCArPSB3aXRob3V0U3VmZml4IHx8IGlzRnV0dXJlID8gJ3VyaScgOiAndXJhbWEnO1xuICAgICAgfSBlbHNlIGlmIChudW1iZXIgPCA1KSB7XG4gICAgICAgIHJlc3VsdCArPSB3aXRob3V0U3VmZml4IHx8IGlzRnV0dXJlID8gJ3VyZScgOiAndXJhbWknO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0ICs9IHdpdGhvdXRTdWZmaXggfHwgaXNGdXR1cmUgPyAndXInIDogJ3VyYW1pJztcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgY2FzZSAnZCc6XG4gICAgICByZXR1cm4gd2l0aG91dFN1ZmZpeCB8fCBpc0Z1dHVyZSA/ICdlbiBkYW4nIDogJ2VuaW0gZG5lbSc7XG4gICAgY2FzZSAnZGQnOlxuICAgICAgaWYgKG51bWJlciA9PT0gMSkge1xuICAgICAgICByZXN1bHQgKz0gd2l0aG91dFN1ZmZpeCB8fCBpc0Z1dHVyZSA/ICdkYW4nIDogJ2RuZW0nO1xuICAgICAgfSBlbHNlIGlmIChudW1iZXIgPT09IDIpIHtcbiAgICAgICAgcmVzdWx0ICs9IHdpdGhvdXRTdWZmaXggfHwgaXNGdXR1cmUgPyAnZG5pJyA6ICdkbmV2b21hJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdCArPSB3aXRob3V0U3VmZml4IHx8IGlzRnV0dXJlID8gJ2RuaScgOiAnZG5ldmknO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICBjYXNlICdNJzpcbiAgICAgIHJldHVybiB3aXRob3V0U3VmZml4IHx8IGlzRnV0dXJlID8gJ2VuIG1lc2VjJyA6ICdlbmltIG1lc2VjZW0nO1xuICAgIGNhc2UgJ01NJzpcbiAgICAgIGlmIChudW1iZXIgPT09IDEpIHtcbiAgICAgICAgcmVzdWx0ICs9IHdpdGhvdXRTdWZmaXggfHwgaXNGdXR1cmUgPyAnbWVzZWMnIDogJ21lc2VjZW0nO1xuICAgICAgfSBlbHNlIGlmIChudW1iZXIgPT09IDIpIHtcbiAgICAgICAgcmVzdWx0ICs9IHdpdGhvdXRTdWZmaXggfHwgaXNGdXR1cmUgPyAnbWVzZWNhJyA6ICdtZXNlY2VtYSc7XG4gICAgICB9IGVsc2UgaWYgKG51bWJlciA8IDUpIHtcbiAgICAgICAgcmVzdWx0ICs9IHdpdGhvdXRTdWZmaXggfHwgaXNGdXR1cmUgPyAnbWVzZWNlJyA6ICdtZXNlY2knO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0ICs9IHdpdGhvdXRTdWZmaXggfHwgaXNGdXR1cmUgPyAnbWVzZWNldicgOiAnbWVzZWNpJztcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgY2FzZSAneSc6XG4gICAgICByZXR1cm4gd2l0aG91dFN1ZmZpeCB8fCBpc0Z1dHVyZSA/ICdlbm8gbGV0bycgOiAnZW5pbSBsZXRvbSc7XG4gICAgY2FzZSAneXknOlxuICAgICAgaWYgKG51bWJlciA9PT0gMSkge1xuICAgICAgICByZXN1bHQgKz0gd2l0aG91dFN1ZmZpeCB8fCBpc0Z1dHVyZSA/ICdsZXRvJyA6ICdsZXRvbSc7XG4gICAgICB9IGVsc2UgaWYgKG51bWJlciA9PT0gMikge1xuICAgICAgICByZXN1bHQgKz0gd2l0aG91dFN1ZmZpeCB8fCBpc0Z1dHVyZSA/ICdsZXRpJyA6ICdsZXRvbWEnO1xuICAgICAgfSBlbHNlIGlmIChudW1iZXIgPCA1KSB7XG4gICAgICAgIHJlc3VsdCArPSB3aXRob3V0U3VmZml4IHx8IGlzRnV0dXJlID8gJ2xldGEnIDogJ2xldGknO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0ICs9IHdpdGhvdXRTdWZmaXggfHwgaXNGdXR1cmUgPyAnbGV0JyA6ICdsZXRpJztcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHNsTG9jYWxlOiBMb2NhbGVEYXRhID0ge1xuICBhYmJyOiAnc2wnLFxuICBtb250aHM6ICdqYW51YXJfZmVicnVhcl9tYXJlY19hcHJpbF9tYWpfanVuaWpfanVsaWpfYXZndXN0X3NlcHRlbWJlcl9va3RvYmVyX25vdmVtYmVyX2RlY2VtYmVyJy5zcGxpdCgnXycpLFxuICBtb250aHNTaG9ydDogJ2phbi5fZmViLl9tYXIuX2Fwci5fbWFqLl9qdW4uX2p1bC5fYXZnLl9zZXAuX29rdC5fbm92Ll9kZWMuJy5zcGxpdCgnXycpLFxuICBtb250aHNQYXJzZUV4YWN0OiB0cnVlLFxuICB3ZWVrZGF5czogJ25lZGVsamFfcG9uZWRlbGpla190b3Jla19zcmVkYV/DhMKNZXRydGVrX3BldGVrX3NvYm90YScuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNTaG9ydDogJ25lZC5fcG9uLl90b3IuX3NyZS5fw4TCjWV0Ll9wZXQuX3NvYi4nLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzTWluOiAnbmVfcG9fdG9fc3Jfw4TCjWVfcGVfc28nLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzUGFyc2VFeGFjdDogdHJ1ZSxcbiAgbG9uZ0RhdGVGb3JtYXQ6IHtcbiAgICBMVDogJ0g6bW0nLFxuICAgIExUUzogJ0g6bW06c3MnLFxuICAgIEw6ICdERC5NTS5ZWVlZJyxcbiAgICBMTDogJ0QuIE1NTU0gWVlZWScsXG4gICAgTExMOiAnRC4gTU1NTSBZWVlZIEg6bW0nLFxuICAgIExMTEw6ICdkZGRkLCBELiBNTU1NIFlZWVkgSDptbSdcbiAgfSxcbiAgY2FsZW5kYXI6IHtcbiAgICBzYW1lRGF5OiAnW2RhbmVzIG9iXSBMVCcsXG4gICAgbmV4dERheTogJ1tqdXRyaSBvYl0gTFQnLFxuXG4gICAgbmV4dFdlZWsoZGF0ZTogRGF0ZSkge1xuICAgICAgc3dpdGNoIChnZXREYXlPZldlZWsoZGF0ZSkpIHtcbiAgICAgICAgY2FzZSAwOlxuICAgICAgICAgIHJldHVybiAnW3ZdIFtuZWRlbGpvXSBbb2JdIExUJztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIHJldHVybiAnW3ZdIFtzcmVkb10gW29iXSBMVCc7XG4gICAgICAgIGNhc2UgNjpcbiAgICAgICAgICByZXR1cm4gJ1t2XSBbc29ib3RvXSBbb2JdIExUJztcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICBjYXNlIDI6XG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgY2FzZSA1OlxuICAgICAgICAgIHJldHVybiAnW3ZdIGRkZGQgW29iXSBMVCc7XG4gICAgICB9XG4gICAgfSxcbiAgICBsYXN0RGF5OiAnW3bDhMKNZXJhaiBvYl0gTFQnLFxuICAgIGxhc3RXZWVrKGRhdGU6IERhdGUpIHtcbiAgICAgIHN3aXRjaCAoZ2V0RGF5T2ZXZWVrKGRhdGUpKSB7XG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgICByZXR1cm4gJ1twcmVqw4XCoW5qb10gW25lZGVsam9dIFtvYl0gTFQnO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgcmV0dXJuICdbcHJlasOFwqFuam9dIFtzcmVkb10gW29iXSBMVCc7XG4gICAgICAgIGNhc2UgNjpcbiAgICAgICAgICByZXR1cm4gJ1twcmVqw4XCoW5qb10gW3NvYm90b10gW29iXSBMVCc7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICBjYXNlIDQ6XG4gICAgICAgIGNhc2UgNTpcbiAgICAgICAgICByZXR1cm4gJ1twcmVqw4XCoW5qaV0gZGRkZCBbb2JdIExUJztcbiAgICAgIH1cbiAgICB9LFxuICAgIHNhbWVFbHNlOiAnTCdcbiAgfSxcbiAgcmVsYXRpdmVUaW1lOiB7XG4gICAgZnV0dXJlOiAnw4TCjWV6ICVzJyxcbiAgICBwYXN0OiAncHJlZCAlcycsXG4gICAgczogcHJvY2Vzc1JlbGF0aXZlVGltZSxcbiAgICBzczogcHJvY2Vzc1JlbGF0aXZlVGltZSxcbiAgICBtOiBwcm9jZXNzUmVsYXRpdmVUaW1lLFxuICAgIG1tOiBwcm9jZXNzUmVsYXRpdmVUaW1lLFxuICAgIGg6IHByb2Nlc3NSZWxhdGl2ZVRpbWUsXG4gICAgaGg6IHByb2Nlc3NSZWxhdGl2ZVRpbWUsXG4gICAgZDogcHJvY2Vzc1JlbGF0aXZlVGltZSxcbiAgICBkZDogcHJvY2Vzc1JlbGF0aXZlVGltZSxcbiAgICBNOiBwcm9jZXNzUmVsYXRpdmVUaW1lLFxuICAgIE1NOiBwcm9jZXNzUmVsYXRpdmVUaW1lLFxuICAgIHk6IHByb2Nlc3NSZWxhdGl2ZVRpbWUsXG4gICAgeXk6IHByb2Nlc3NSZWxhdGl2ZVRpbWVcbiAgfSxcbiAgZGF5T2ZNb250aE9yZGluYWxQYXJzZTogL1xcZHsxLDJ9XFwuLyxcbiAgb3JkaW5hbDogJyVkLicsXG4gIHdlZWs6IHtcbiAgICBkb3c6IDEsIC8vIE1vbmRheSBpcyB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrLlxuICAgIGRveTogNyAgLy8gVGhlIHdlZWsgdGhhdCBjb250YWlucyBKYW4gMXN0IGlzIHRoZSBmaXJzdCB3ZWVrIG9mIHRoZSB5ZWFyLlxuICB9XG59O1xuIiwiLy8gdHNsaW50OmRpc2FibGU6Y29tbWVudC1mb3JtYXQgYmluYXJ5LWV4cHJlc3Npb24tb3BlcmFuZC1vcmRlciBtYXgtbGluZS1sZW5ndGhcbi8vIHRzbGludDpkaXNhYmxlOm5vLWJpdHdpc2UgcHJlZmVyLXRlbXBsYXRlIGN5Y2xvbWF0aWMtY29tcGxleGl0eVxuLy8gdHNsaW50OmRpc2FibGU6bm8tc2hhZG93ZWQtdmFyaWFibGUgc3dpdGNoLWRlZmF1bHQgcHJlZmVyLWNvbnN0XG4vLyB0c2xpbnQ6ZGlzYWJsZTpvbmUtdmFyaWFibGUtcGVyLWRlY2xhcmF0aW9uIG5ld2xpbmUtYmVmb3JlLXJldHVyblxuXG5pbXBvcnQgeyBMb2NhbGVEYXRhIH0gZnJvbSAnLi4vbG9jYWxlL2xvY2FsZS5jbGFzcyc7XG5cbi8vISBtb21lbnQuanMgbG9jYWxlIGNvbmZpZ3VyYXRpb25cbi8vISBsb2NhbGUgOiBTd2VkaXNoIFtzdl1cbi8vISBhdXRob3IgOiBKZW5zIEFsbSA6IGh0dHBzOi8vZ2l0aHViLmNvbS91bG11c1xuXG5leHBvcnQgY29uc3Qgc3ZMb2NhbGU6IExvY2FsZURhdGEgPSB7XG4gIGFiYnI6ICdzdicsXG4gIG1vbnRoczogJ2phbnVhcmlfZmVicnVhcmlfbWFyc19hcHJpbF9tYWpfanVuaV9qdWxpX2F1Z3VzdGlfc2VwdGVtYmVyX29rdG9iZXJfbm92ZW1iZXJfZGVjZW1iZXInLnNwbGl0KCdfJyksXG4gIG1vbnRoc1Nob3J0OiAnamFuX2ZlYl9tYXJfYXByX21hal9qdW5fanVsX2F1Z19zZXBfb2t0X25vdl9kZWMnLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzOiAnc8ODwrZuZGFnX23Dg8KlbmRhZ190aXNkYWdfb25zZGFnX3RvcnNkYWdfZnJlZGFnX2zDg8K2cmRhZycuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNTaG9ydDogJ3PDg8K2bl9tw4PCpW5fdGlzX29uc190b3JfZnJlX2zDg8K2cicuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNNaW46ICdzw4PCtl9tw4PCpV90aV9vbl90b19mcl9sw4PCticuc3BsaXQoJ18nKSxcbiAgbG9uZ0RhdGVGb3JtYXQ6IHtcbiAgICBMVDogJ0hIOm1tJyxcbiAgICBMVFM6ICdISDptbTpzcycsXG4gICAgTDogJ1lZWVktTU0tREQnLFxuICAgIExMOiAnRCBNTU1NIFlZWVknLFxuICAgIExMTDogJ0QgTU1NTSBZWVlZIFtrbC5dIEhIOm1tJyxcbiAgICBMTExMOiAnZGRkZCBEIE1NTU0gWVlZWSBba2wuXSBISDptbScsXG4gICAgbGxsOiAnRCBNTU0gWVlZWSBISDptbScsXG4gICAgbGxsbDogJ2RkZCBEIE1NTSBZWVlZIEhIOm1tJ1xuICB9LFxuICBjYWxlbmRhcjoge1xuICAgIHNhbWVEYXk6ICdbSWRhZ10gTFQnLFxuICAgIG5leHREYXk6ICdbSW1vcmdvbl0gTFQnLFxuICAgIGxhc3REYXk6ICdbSWfDg8Klcl0gTFQnLFxuICAgIG5leHRXZWVrOiAnW1DDg8KlXSBkZGRkIExUJyxcbiAgICBsYXN0V2VlazogJ1tJXSBkZGRkW3NdIExUJyxcbiAgICBzYW1lRWxzZTogJ0wnXG4gIH0sXG4gIHJlbGF0aXZlVGltZToge1xuICAgIGZ1dHVyZTogJ29tICVzJyxcbiAgICBwYXN0OiAnZsODwrZyICVzIHNlZGFuJyxcbiAgICBzOiAnbsODwqVncmEgc2VrdW5kZXInLFxuICAgIHNzOiAnJWQgc2VrdW5kZXInLFxuICAgIG06ICdlbiBtaW51dCcsXG4gICAgbW06ICclZCBtaW51dGVyJyxcbiAgICBoOiAnZW4gdGltbWUnLFxuICAgIGhoOiAnJWQgdGltbWFyJyxcbiAgICBkOiAnZW4gZGFnJyxcbiAgICBkZDogJyVkIGRhZ2FyJyxcbiAgICBNOiAnZW4gbcODwqVuYWQnLFxuICAgIE1NOiAnJWQgbcODwqVuYWRlcicsXG4gICAgeTogJ2V0dCDDg8KlcicsXG4gICAgeXk6ICclZCDDg8KlcidcbiAgfSxcbiAgZGF5T2ZNb250aE9yZGluYWxQYXJzZTogL1xcZHsxLDJ9KGV8YSkvLFxuICBvcmRpbmFsKF9udW06IG51bWJlcik6IHN0cmluZyB7XG4gICAgY29uc3QgbnVtID0gTnVtYmVyKF9udW0pO1xuICAgIGxldCBiID0gbnVtICUgMTAsXG4gICAgICBvdXRwdXQgPSAofn4obnVtICUgMTAwIC8gMTApID09PSAxKSA/ICdlJyA6XG4gICAgICAgIChiID09PSAxKSA/ICdhJyA6XG4gICAgICAgICAgKGIgPT09IDIpID8gJ2EnIDpcbiAgICAgICAgICAgIChiID09PSAzKSA/ICdlJyA6ICdlJztcbiAgICByZXR1cm4gbnVtICsgb3V0cHV0O1xuICB9LFxuICB3ZWVrOiB7XG4gICAgZG93OiAxLCAvLyBNb25kYXkgaXMgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2Vlay5cbiAgICBkb3k6IDQgIC8vIFRoZSB3ZWVrIHRoYXQgY29udGFpbnMgSmFuIDR0aCBpcyB0aGUgZmlyc3Qgd2VlayBvZiB0aGUgeWVhci5cbiAgfVxufTtcbiIsIi8vIHRzbGludDpkaXNhYmxlOmNvbW1lbnQtZm9ybWF0IGJpbmFyeS1leHByZXNzaW9uLW9wZXJhbmQtb3JkZXIgbWF4LWxpbmUtbGVuZ3RoXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1iaXR3aXNlIHByZWZlci10ZW1wbGF0ZSBjeWNsb21hdGljLWNvbXBsZXhpdHlcbi8vIHRzbGludDpkaXNhYmxlOm5vLXNoYWRvd2VkLXZhcmlhYmxlIHN3aXRjaC1kZWZhdWx0IHByZWZlci1jb25zdFxuLy8gdHNsaW50OmRpc2FibGU6b25lLXZhcmlhYmxlLXBlci1kZWNsYXJhdGlvbiBuZXdsaW5lLWJlZm9yZS1yZXR1cm5cblxuLy8gbW9tZW50LmpzIGxvY2FsZSBjb25maWd1cmF0aW9uXG4vLyBsb2NhbGUgOiBUaGFpIFt0aF1cbi8vIGF1dGhvciA6IFdhdGNoYXJhcG9sIFNhbml0d29uZyA6IGh0dHBzOi8vZ2l0aHViLmNvbS90dW1pdFxuXG5pbXBvcnQgeyBMb2NhbGVEYXRhIH0gZnJvbSAnLi4vbG9jYWxlL2xvY2FsZS5jbGFzcyc7XG5cbmV4cG9ydCBjb25zdCB0aExvY2FsZTogTG9jYWxlRGF0YSA9IHtcbiAgYWJicjogJ3RoJyxcbiAgbW9udGhzOiAnw6DCuMKhw6DCuMKBw6DCuMKjw6DCuMKyw6DCuMKEw6DCuMKhX8OgwrjCgcOgwrjCuMOgwrjCocOgwrjCoMOgwrjCssOgwrjCnsOgwrjCscOgwrjCmcOgwrjCmMOgwrnCjF/DoMK4wqHDoMK4wrXDoMK4wpnDoMK4wrLDoMK4woTDoMK4wqFfw6DCucKAw6DCuMKhw6DCuMKpw6DCuMKyw6DCuMKiw6DCuMKZX8OgwrjCnsOgwrjCpMOgwrjCqcOgwrjCoMOgwrjCssOgwrjChMOgwrjCoV/DoMK4wqHDoMK4wrTDoMK4wpbDoMK4wrjDoMK4wpnDoMK4wrLDoMK4wqLDoMK4wplfw6DCuMKBw6DCuMKjw6DCuMKBw6DCuMKOw6DCuMKyw6DCuMKEw6DCuMKhX8OgwrjCqsOgwrjCtMOgwrjCh8OgwrjCq8OgwrjCssOgwrjChMOgwrjCoV/DoMK4woHDoMK4wrHDoMK4wpnDoMK4wqLDoMK4wrLDoMK4wqLDoMK4wplfw6DCuMKVw6DCuMK4w6DCuMKlw6DCuMKyw6DCuMKEw6DCuMKhX8OgwrjCnsOgwrjCpMOgwrjCqMOgwrjCiMOgwrjCtMOgwrjCgcOgwrjCssOgwrjCosOgwrjCmV/DoMK4wpjDoMK4wrHDoMK4wpnDoMK4wqfDoMK4wrLDoMK4woTDoMK4wqEnLnNwbGl0KCdfJyksXG4gIG1vbnRoc1Nob3J0OiAnw6DCuMKhLsOgwrjChC5fw6DCuMKBLsOgwrjCni5fw6DCuMKhw6DCuMK1LsOgwrjChC5fw6DCucKAw6DCuMKhLsOgwrjCoi5fw6DCuMKeLsOgwrjChC5fw6DCuMKhw6DCuMK0LsOgwrjCoi5fw6DCuMKBLsOgwrjChC5fw6DCuMKqLsOgwrjChC5fw6DCuMKBLsOgwrjCoi5fw6DCuMKVLsOgwrjChC5fw6DCuMKeLsOgwrjCoi5fw6DCuMKYLsOgwrjChC4nLnNwbGl0KCdfJyksXG4gIG1vbnRoc1BhcnNlRXhhY3Q6IHRydWUsXG4gIHdlZWtkYXlzOiAnw6DCuMKtw6DCuMKyw6DCuMKXw6DCuMK0w6DCuMKVw6DCuMKiw6DCucKMX8OgwrjCiMOgwrjCscOgwrjCmcOgwrjCl8OgwrjCo8OgwrnCjF/DoMK4wq3DoMK4wrHDoMK4wofDoMK4woTDoMK4wrLDoMK4wqNfw6DCuMKew6DCuMK4w6DCuMKYX8OgwrjCnsOgwrjCpMOgwrjCq8OgwrjCscOgwrjCqsOgwrjCmsOgwrjClMOgwrjCtV/DoMK4wqjDoMK4wrjDoMK4woHDoMK4wqPDoMK5woxfw6DCucKAw6DCuMKqw6DCuMKyw6DCuMKjw6DCucKMJy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5c1Nob3J0OiAnw6DCuMKtw6DCuMKyw6DCuMKXw6DCuMK0w6DCuMKVw6DCuMKiw6DCucKMX8OgwrjCiMOgwrjCscOgwrjCmcOgwrjCl8OgwrjCo8OgwrnCjF/DoMK4wq3DoMK4wrHDoMK4wofDoMK4woTDoMK4wrLDoMK4wqNfw6DCuMKew6DCuMK4w6DCuMKYX8OgwrjCnsOgwrjCpMOgwrjCq8OgwrjCscOgwrjCql/DoMK4wqjDoMK4wrjDoMK4woHDoMK4wqPDoMK5woxfw6DCucKAw6DCuMKqw6DCuMKyw6DCuMKjw6DCucKMJy5zcGxpdCgnXycpLCAvLyB5ZXMsIHRocmVlIGNoYXJhY3RlcnMgZGlmZmVyZW5jZVxuICB3ZWVrZGF5c01pbjogJ8OgwrjCrcOgwrjCsi5fw6DCuMKILl/DoMK4wq0uX8OgwrjCni5fw6DCuMKew6DCuMKkLl/DoMK4wqguX8OgwrjCqi4nLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzUGFyc2VFeGFjdDogdHJ1ZSxcbiAgbG9uZ0RhdGVGb3JtYXQ6IHtcbiAgICBMVDogJ0g6bW0nLFxuICAgIExUUzogJ0g6bW06c3MnLFxuICAgIEw6ICdERC9NTS9ZWVlZJyxcbiAgICBMTDogJ0QgTU1NTSBZWVlZJyxcbiAgICBMTEw6ICdEIE1NTU0gWVlZWSDDoMK5woDDoMK4wqfDoMK4wqXDoMK4wrIgSDptbScsXG4gICAgTExMTDogJ8OgwrjCp8OgwrjCscOgwrjCmWRkZGTDoMK4wpfDoMK4wrXDoMK5woggRCBNTU1NIFlZWVkgw6DCucKAw6DCuMKnw6DCuMKlw6DCuMKyIEg6bW0nXG4gIH0sXG4gIG1lcmlkaWVtUGFyc2U6IC/DoMK4woHDoMK5wojDoMK4wq3DoMK4wpnDoMK5woDDoMK4wpfDoMK4wrXDoMK5wojDoMK4wqLDoMK4wod8w6DCuMKrw6DCuMKlw6DCuMKxw6DCuMKHw6DCucKAw6DCuMKXw6DCuMK1w6DCucKIw6DCuMKiw6DCuMKHLyxcbiAgaXNQTShpbnB1dCkge1xuICAgIHJldHVybiBpbnB1dCA9PT0gJ8OgwrjCq8OgwrjCpcOgwrjCscOgwrjCh8OgwrnCgMOgwrjCl8OgwrjCtcOgwrnCiMOgwrjCosOgwrjChyc7XG4gIH0sXG4gIG1lcmlkaWVtKGhvdXIsIG1pbnV0ZSwgaXNMb3dlcikge1xuICAgIGlmIChob3VyIDwgMTIpIHtcbiAgICAgIHJldHVybiAnw6DCuMKBw6DCucKIw6DCuMKtw6DCuMKZw6DCucKAw6DCuMKXw6DCuMK1w6DCucKIw6DCuMKiw6DCuMKHJztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICfDoMK4wqvDoMK4wqXDoMK4wrHDoMK4wofDoMK5woDDoMK4wpfDoMK4wrXDoMK5wojDoMK4wqLDoMK4wocnO1xuICAgIH1cbiAgfSxcbiAgY2FsZW5kYXI6IHtcbiAgICBzYW1lRGF5OiAnW8OgwrjCp8OgwrjCscOgwrjCmcOgwrjCmcOgwrjCtcOgwrnCiSDDoMK5woDDoMK4wqfDoMK4wqXDoMK4wrJdIExUJyxcbiAgICBuZXh0RGF5OiAnW8OgwrjCnsOgwrjCo8OgwrjCuMOgwrnCiMOgwrjCh8OgwrjCmcOgwrjCtcOgwrnCiSDDoMK5woDDoMK4wqfDoMK4wqXDoMK4wrJdIExUJyxcbiAgICBuZXh0V2VlazogJ2RkZGRbw6DCuMKrw6DCuMKZw6DCucKJw6DCuMKyIMOgwrnCgMOgwrjCp8OgwrjCpcOgwrjCsl0gTFQnLFxuICAgIGxhc3REYXk6ICdbw6DCucKAw6DCuMKhw6DCuMK3w6DCucKIw6DCuMKtw6DCuMKnw6DCuMKyw6DCuMKZw6DCuMKZw6DCuMK1w6DCucKJIMOgwrnCgMOgwrjCp8OgwrjCpcOgwrjCsl0gTFQnLFxuICAgIGxhc3RXZWVrOiAnW8OgwrjCp8OgwrjCscOgwrjCmV1kZGRkW8OgwrjCl8OgwrjCtcOgwrnCiMOgwrnCgcOgwrjCpcOgwrnCicOgwrjCpyDDoMK5woDDoMK4wqfDoMK4wqXDoMK4wrJdIExUJyxcbiAgICBzYW1lRWxzZTogJ0wnXG4gIH0sXG4gIHJlbGF0aXZlVGltZToge1xuICAgIGZ1dHVyZTogJ8OgwrjCrcOgwrjCtcOgwrjCgSAlcycsXG4gICAgcGFzdDogJyVzw6DCuMKXw6DCuMK1w6DCucKIw6DCucKBw6DCuMKlw6DCucKJw6DCuMKnJyxcbiAgICBzOiAnw6DCucKEw6DCuMKhw6DCucKIw6DCuMKBw6DCuMK1w6DCucKIw6DCuMKnw6DCuMK0w6DCuMKZw6DCuMKyw6DCuMKXw6DCuMK1JyxcbiAgICBzczogJyVkIMOgwrjCp8OgwrjCtMOgwrjCmcOgwrjCssOgwrjCl8OgwrjCtScsXG4gICAgbTogJzEgw6DCuMKZw6DCuMKyw6DCuMKXw6DCuMK1JyxcbiAgICBtbTogJyVkIMOgwrjCmcOgwrjCssOgwrjCl8OgwrjCtScsXG4gICAgaDogJzEgw6DCuMKKw6DCuMKxw6DCucKIw6DCuMKnw6DCucKCw6DCuMKhw6DCuMKHJyxcbiAgICBoaDogJyVkIMOgwrjCisOgwrjCscOgwrnCiMOgwrjCp8OgwrnCgsOgwrjCocOgwrjChycsXG4gICAgZDogJzEgw6DCuMKnw6DCuMKxw6DCuMKZJyxcbiAgICBkZDogJyVkIMOgwrjCp8OgwrjCscOgwrjCmScsXG4gICAgTTogJzEgw6DCucKAw6DCuMKUw6DCuMK3w6DCuMKtw6DCuMKZJyxcbiAgICBNTTogJyVkIMOgwrnCgMOgwrjClMOgwrjCt8OgwrjCrcOgwrjCmScsXG4gICAgeTogJzEgw6DCuMKbw6DCuMK1JyxcbiAgICB5eTogJyVkIMOgwrjCm8OgwrjCtSdcbiAgfVxufTtcbiIsIi8vIHRzbGludDpkaXNhYmxlOmNvbW1lbnQtZm9ybWF0IGJpbmFyeS1leHByZXNzaW9uLW9wZXJhbmQtb3JkZXIgbWF4LWxpbmUtbGVuZ3RoXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1iaXR3aXNlIHByZWZlci10ZW1wbGF0ZSBjeWNsb21hdGljLWNvbXBsZXhpdHlcbi8vIHRzbGludDpkaXNhYmxlOm5vLXNoYWRvd2VkLXZhcmlhYmxlIHN3aXRjaC1kZWZhdWx0IHByZWZlci1jb25zdFxuLy8gdHNsaW50OmRpc2FibGU6b25lLXZhcmlhYmxlLXBlci1kZWNsYXJhdGlvbiBuZXdsaW5lLWJlZm9yZS1yZXR1cm5cblxuaW1wb3J0IHsgTG9jYWxlRGF0YSB9IGZyb20gJy4uL2xvY2FsZS9sb2NhbGUuY2xhc3MnO1xuXG4vLyEgbW9tZW50LmpzIGxvY2FsZSBjb25maWd1cmF0aW9uXG4vLyEgbG9jYWxlIDogVHVya2lzaCBbdHJdXG4vLyEgYXV0aG9ycyA6IEVyaGFuIEd1bmRvZ2FuIDogaHR0cHM6Ly9naXRodWIuY29tL2VyaGFuZ3VuZG9nYW4sXG4vLyEgICAgICAgICAgIEJ1cmFrIFlpw4TCn2l0IEtheWE6IGh0dHBzOi8vZ2l0aHViLmNvbS9CWUtcblxubGV0IHN1ZmZpeGVzOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9ID0ge1xuICAxOiAnXFwnaW5jaScsXG4gIDU6ICdcXCdpbmNpJyxcbiAgODogJ1xcJ2luY2knLFxuICA3MDogJ1xcJ2luY2knLFxuICA4MDogJ1xcJ2luY2knLFxuICAyOiAnXFwnbmNpJyxcbiAgNzogJ1xcJ25jaScsXG4gIDIwOiAnXFwnbmNpJyxcbiAgNTA6ICdcXCduY2knLFxuICAzOiAnXFwnw4PCvG5jw4PCvCcsXG4gIDQ6ICdcXCfDg8K8bmPDg8K8JyxcbiAgMTAwOiAnXFwnw4PCvG5jw4PCvCcsXG4gIDY6ICdcXCduY8OEwrEnLFxuICA5OiAnXFwndW5jdScsXG4gIDEwOiAnXFwndW5jdScsXG4gIDMwOiAnXFwndW5jdScsXG4gIDYwOiAnXFwnw4TCsW5jw4TCsScsXG4gIDkwOiAnXFwnw4TCsW5jw4TCsSdcbn07XG5cbmV4cG9ydCBjb25zdCB0ckxvY2FsZTogTG9jYWxlRGF0YSA9IHtcbiAgYWJicjogJ3RyJyxcbiAgbW9udGhzOiAnT2Nha1/DhcKedWJhdF9NYXJ0X05pc2FuX01hecOEwrFzX0hhemlyYW5fVGVtbXV6X0HDhMKfdXN0b3NfRXlsw4PCvGxfRWtpbV9LYXPDhMKxbV9BcmFsw4TCsWsnLnNwbGl0KCdfJyksXG4gIG1vbnRoc1Nob3J0OiAnT2NhX8OFwp51Yl9NYXJfTmlzX01heV9IYXpfVGVtX0HDhMKfdV9FeWxfRWtpX0thc19BcmEnLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzOiAnUGF6YXJfUGF6YXJ0ZXNpX1NhbMOEwrFfw4PCh2Fyw4XCn2FtYmFfUGVyw4XCn2VtYmVfQ3VtYV9DdW1hcnRlc2knLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzU2hvcnQ6ICdQYXpfUHRzX1NhbF/Dg8KHYXJfUGVyX0N1bV9DdHMnLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzTWluOiAnUHpfUHRfU2Ffw4PCh2FfUGVfQ3VfQ3QnLnNwbGl0KCdfJyksXG4gIGxvbmdEYXRlRm9ybWF0OiB7XG4gICAgTFQ6ICdISDptbScsXG4gICAgTFRTOiAnSEg6bW06c3MnLFxuICAgIEw6ICdERC5NTS5ZWVlZJyxcbiAgICBMTDogJ0QgTU1NTSBZWVlZJyxcbiAgICBMTEw6ICdEIE1NTU0gWVlZWSBISDptbScsXG4gICAgTExMTDogJ2RkZGQsIEQgTU1NTSBZWVlZIEhIOm1tJ1xuICB9LFxuICBjYWxlbmRhcjoge1xuICAgIHNhbWVEYXk6ICdbYnVnw4PCvG4gc2FhdF0gTFQnLFxuICAgIG5leHREYXk6ICdbeWFyw4TCsW4gc2FhdF0gTFQnLFxuICAgIG5leHRXZWVrOiAnW2dlbGVjZWtdIGRkZGQgW3NhYXRdIExUJyxcbiAgICBsYXN0RGF5OiAnW2TDg8K8bl0gTFQnLFxuICAgIGxhc3RXZWVrOiAnW2dlw4PCp2VuXSBkZGRkIFtzYWF0XSBMVCcsXG4gICAgc2FtZUVsc2U6ICdMJ1xuICB9LFxuICByZWxhdGl2ZVRpbWU6IHtcbiAgICBmdXR1cmU6ICclcyBzb25yYScsXG4gICAgcGFzdDogJyVzIMODwrZuY2UnLFxuICAgIHM6ICdiaXJrYcODwqcgc2FuaXllJyxcbiAgICBzczogJyVkIHNhbml5ZScsXG4gICAgbTogJ2JpciBkYWtpa2EnLFxuICAgIG1tOiAnJWQgZGFraWthJyxcbiAgICBoOiAnYmlyIHNhYXQnLFxuICAgIGhoOiAnJWQgc2FhdCcsXG4gICAgZDogJ2JpciBnw4PCvG4nLFxuICAgIGRkOiAnJWQgZ8ODwrxuJyxcbiAgICBNOiAnYmlyIGF5JyxcbiAgICBNTTogJyVkIGF5JyxcbiAgICB5OiAnYmlyIHnDhMKxbCcsXG4gICAgeXk6ICclZCB5w4TCsWwnXG4gIH0sXG4gIGRheU9mTW9udGhPcmRpbmFsUGFyc2U6IC9cXGR7MSwyfScoaW5jaXxuY2l8w4PCvG5jw4PCvHxuY8OEwrF8dW5jdXzDhMKxbmPDhMKxKS8sXG4gIG9yZGluYWwoX251bTogbnVtYmVyKTogc3RyaW5nIHtcbiAgICBjb25zdCBudW0gPSBOdW1iZXIoX251bSk7XG4gICAgaWYgKG51bSA9PT0gMCkgeyAgLy8gc3BlY2lhbCBjYXNlIGZvciB6ZXJvXG4gICAgICByZXR1cm4gbnVtICsgJ1xcJ8OEwrFuY8OEwrEnO1xuICAgIH1cbiAgICBsZXQgYSA9IG51bSAlIDEwLFxuICAgICAgYiA9IG51bSAlIDEwMCAtIGEsXG4gICAgICBjID0gbnVtID49IDEwMCA/IDEwMCA6IG51bGw7XG4gICAgcmV0dXJuIG51bSArIChzdWZmaXhlc1thXSB8fCBzdWZmaXhlc1tiXSB8fCBzdWZmaXhlc1tjXSk7XG4gIH0sXG4gIHdlZWs6IHtcbiAgICBkb3c6IDEsIC8vIE1vbmRheSBpcyB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrLlxuICAgIGRveTogNyAgLy8gVGhlIHdlZWsgdGhhdCBjb250YWlucyBKYW4gMXN0IGlzIHRoZSBmaXJzdCB3ZWVrIG9mIHRoZSB5ZWFyLlxuICB9XG59O1xuIiwiLy8gdHNsaW50OmRpc2FibGU6Y29tbWVudC1mb3JtYXQgYmluYXJ5LWV4cHJlc3Npb24tb3BlcmFuZC1vcmRlciBtYXgtbGluZS1sZW5ndGhcbi8vIHRzbGludDpkaXNhYmxlOm5vLWJpdHdpc2UgcHJlZmVyLXRlbXBsYXRlIGN5Y2xvbWF0aWMtY29tcGxleGl0eVxuLy8gdHNsaW50OmRpc2FibGU6bm8tc2hhZG93ZWQtdmFyaWFibGUgc3dpdGNoLWRlZmF1bHQgcHJlZmVyLWNvbnN0XG4vLyB0c2xpbnQ6ZGlzYWJsZTpvbmUtdmFyaWFibGUtcGVyLWRlY2xhcmF0aW9uIG5ld2xpbmUtYmVmb3JlLXJldHVyblxuLy8gdHNsaW50OmRpc2FibGU6bm8tcGFyYW1ldGVyLXJlYXNzaWdubWVudCBwcmVmZXItc3dpdGNoXG5cbmltcG9ydCB7IExvY2FsZURhdGEgfSBmcm9tICcuLi9sb2NhbGUvbG9jYWxlLmNsYXNzJztcblxuLy8hIG1vbWVudC5qcyBsb2NhbGUgY29uZmlndXJhdGlvblxuLy8hIGxvY2FsZSA6IENoaW5lc2UgKENoaW5hKSBbemgtY25dXG4vLyEgYXV0aG9yIDogc3V1cGljIDogaHR0cHM6Ly9naXRodWIuY29tL3N1dXBpY1xuLy8hIGF1dGhvciA6IFplbm8gWmVuZyA6IGh0dHBzOi8vZ2l0aHViLmNvbS96ZW5vemVuZ1xuXG5leHBvcnQgY29uc3QgemhDbkxvY2FsZTogTG9jYWxlRGF0YSA9IHtcbiAgYWJicjogJ3poLWNuJyxcbiAgbW9udGhzOiAnw6TCuMKAw6bCnMKIX8OkwrrCjMOmwpzCiF/DpMK4wonDpsKcwohfw6XCm8Kbw6bCnMKIX8OkwrrClMOmwpzCiF/DpcKFwq3DpsKcwohfw6TCuMKDw6bCnMKIX8OlwoXCq8OmwpzCiF/DpMK5wp3DpsKcwohfw6XCjcKBw6bCnMKIX8Olwo3CgcOkwrjCgMOmwpzCiF/DpcKNwoHDpMK6wozDpsKcwognLnNwbGl0KCdfJyksXG4gIG1vbnRoc1Nob3J0OiAnMcOmwpzCiF8yw6bCnMKIXzPDpsKcwohfNMOmwpzCiF81w6bCnMKIXzbDpsKcwohfN8OmwpzCiF84w6bCnMKIXznDpsKcwohfMTDDpsKcwohfMTHDpsKcwohfMTLDpsKcwognLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzOiAnw6bCmMKfw6bCnMKfw6bCl8KlX8OmwpjCn8OmwpzCn8OkwrjCgF/DpsKYwp/DpsKcwp/DpMK6woxfw6bCmMKfw6bCnMKfw6TCuMKJX8OmwpjCn8OmwpzCn8OlwpvCm1/DpsKYwp/DpsKcwp/DpMK6wpRfw6bCmMKfw6bCnMKfw6XChcKtJy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5c1Nob3J0OiAnw6XCkcKow6bCl8KlX8OlwpHCqMOkwrjCgF/DpcKRwqjDpMK6woxfw6XCkcKow6TCuMKJX8OlwpHCqMOlwpvCm1/DpcKRwqjDpMK6wpRfw6XCkcKow6XChcKtJy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5c01pbjogJ8OmwpfCpV/DpMK4woBfw6TCusKMX8OkwrjCiV/DpcKbwptfw6TCusKUX8OlwoXCrScuc3BsaXQoJ18nKSxcbiAgbG9uZ0RhdGVGb3JtYXQ6IHtcbiAgICBMVDogJ0hIOm1tJyxcbiAgICBMVFM6ICdISDptbTpzcycsXG4gICAgTDogJ1lZWVkvTU0vREQnLFxuICAgIExMOiAnWVlZWcOlwrnCtE3DpsKcwohEw6bCl8KlJyxcbiAgICBMTEw6ICdZWVlZw6XCucK0TcOmwpzCiETDpsKXwqVBaMOnwoLCuW1tw6XCiMKGJyxcbiAgICBMTExMOiAnWVlZWcOlwrnCtE3DpsKcwohEw6bCl8KlZGRkZEFow6fCgsK5bW3DpcKIwoYnLFxuICAgIGw6ICdZWVlZL00vRCcsXG4gICAgbGw6ICdZWVlZw6XCucK0TcOmwpzCiETDpsKXwqUnLFxuICAgIGxsbDogJ1lZWVnDpcK5wrRNw6bCnMKIRMOmwpfCpSBISDptbScsXG4gICAgbGxsbDogJ1lZWVnDpcK5wrRNw6bCnMKIRMOmwpfCpWRkZGQgSEg6bW0nXG4gIH0sXG4gIG1lcmlkaWVtUGFyc2U6IC/DpcKHwozDpsKZwqh8w6bCl8Kpw6TCuMKKfMOkwrjCisOlwo3CiHzDpMK4wq3DpcKNwoh8w6TCuMKLw6XCjcKIfMOmwpnCmsOkwrjCii8sXG4gIG1lcmlkaWVtSG91cihob3VyLCBtZXJpZGllbSkge1xuICAgIGlmIChob3VyID09PSAxMikge1xuICAgICAgaG91ciA9IDA7XG4gICAgfVxuICAgIGlmIChtZXJpZGllbSA9PT0gJ8OlwofCjMOmwpnCqCcgfHwgbWVyaWRpZW0gPT09ICfDpsKXwqnDpMK4woonIHx8XG4gICAgICBtZXJpZGllbSA9PT0gJ8OkwrjCisOlwo3CiCcpIHtcbiAgICAgIHJldHVybiBob3VyO1xuICAgIH0gZWxzZSBpZiAobWVyaWRpZW0gPT09ICfDpMK4wovDpcKNwognIHx8IG1lcmlkaWVtID09PSAnw6bCmcKaw6TCuMKKJykge1xuICAgICAgcmV0dXJuIGhvdXIgKyAxMjtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gJ8OkwrjCrcOlwo3CiCdcbiAgICAgIHJldHVybiBob3VyID49IDExID8gaG91ciA6IGhvdXIgKyAxMjtcbiAgICB9XG4gIH0sXG4gIG1lcmlkaWVtKGhvdXIsIG1pbnV0ZSwgaXNMb3dlcikge1xuICAgIGxldCBobSA9IGhvdXIgKiAxMDAgKyBtaW51dGU7XG4gICAgaWYgKGhtIDwgNjAwKSB7XG4gICAgICByZXR1cm4gJ8OlwofCjMOmwpnCqCc7XG4gICAgfSBlbHNlIGlmIChobSA8IDkwMCkge1xuICAgICAgcmV0dXJuICfDpsKXwqnDpMK4woonO1xuICAgIH0gZWxzZSBpZiAoaG0gPCAxMTMwKSB7XG4gICAgICByZXR1cm4gJ8OkwrjCisOlwo3CiCc7XG4gICAgfSBlbHNlIGlmIChobSA8IDEyMzApIHtcbiAgICAgIHJldHVybiAnw6TCuMKtw6XCjcKIJztcbiAgICB9IGVsc2UgaWYgKGhtIDwgMTgwMCkge1xuICAgICAgcmV0dXJuICfDpMK4wovDpcKNwognO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gJ8OmwpnCmsOkwrjCiic7XG4gICAgfVxuICB9LFxuICBjYWxlbmRhcjoge1xuICAgIHNhbWVEYXk6ICdbw6TCu8KKw6XCpMKpXUxUJyxcbiAgICBuZXh0RGF5OiAnW8OmwpjCjsOlwqTCqV1MVCcsXG4gICAgbmV4dFdlZWs6ICdbw6TCuMKLXWRkZGRMVCcsXG4gICAgbGFzdERheTogJ1vDpsKYwqjDpcKkwqldTFQnLFxuICAgIGxhc3RXZWVrOiAnW8OkwrjCil1kZGRkTFQnLFxuICAgIHNhbWVFbHNlOiAnTCdcbiAgfSxcbiAgZGF5T2ZNb250aE9yZGluYWxQYXJzZTogL1xcZHsxLDJ9KMOmwpfCpXzDpsKcwoh8w6XCkcKoKS8sXG4gIG9yZGluYWwoX251bTogbnVtYmVyLCBwZXJpb2QpIHtcbiAgICBjb25zdCBudW0gPSBOdW1iZXIoX251bSk7XG4gICAgc3dpdGNoIChwZXJpb2QpIHtcbiAgICAgIGNhc2UgJ2QnOlxuICAgICAgY2FzZSAnRCc6XG4gICAgICBjYXNlICdEREQnOlxuICAgICAgICByZXR1cm4gbnVtICsgJ8OmwpfCpSc7XG4gICAgICBjYXNlICdNJzpcbiAgICAgICAgcmV0dXJuIG51bSArICfDpsKcwognO1xuICAgICAgY2FzZSAndyc6XG4gICAgICBjYXNlICdXJzpcbiAgICAgICAgcmV0dXJuIG51bSArICfDpcKRwqgnO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIG51bS50b1N0cmluZygpO1xuICAgIH1cbiAgfSxcbiAgcmVsYXRpdmVUaW1lOiB7XG4gICAgZnV0dXJlOiAnJXPDpcKGwoUnLFxuICAgIHBhc3Q6ICclc8OlwonCjScsXG4gICAgczogJ8OlwofCoMOnwqfCkicsXG4gICAgc3M6ICclZCDDp8KnwpInLFxuICAgIG06ICcxIMOlwojChsOpwpLCnycsXG4gICAgbW06ICclZCDDpcKIwobDqcKSwp8nLFxuICAgIGg6ICcxIMOlwrDCj8OmwpfCticsXG4gICAgaGg6ICclZCDDpcKwwo/DpsKXwrYnLFxuICAgIGQ6ICcxIMOlwqTCqScsXG4gICAgZGQ6ICclZCDDpcKkwqknLFxuICAgIE06ICcxIMOkwrjCqsOmwpzCiCcsXG4gICAgTU06ICclZCDDpMK4wqrDpsKcwognLFxuICAgIHk6ICcxIMOlwrnCtCcsXG4gICAgeXk6ICclZCDDpcK5wrQnXG4gIH0sXG4gIHdlZWs6IHtcbiAgICAvLyBHQi9UIDc0MDgtMTk5NMOjwoDCisOmwpXCsMOmwo3CrsOlwoXCg8OlwpLCjMOkwrrCpMOmwo3CosOmwqDCvMOlwrzCj8OCwrfDpMK/wqHDpsKBwq/DpMK6wqTDpsKNwqLDgsK3w6bCl8Klw6bCnMKfw6XCksKMw6bCl8K2w6nCl8K0w6jCocKow6fCpMK6w6bCs8KVw6PCgMKLw6TCuMKOSVNPIDg2MDE6MTk4OMOnwq3CicOmwpXCiFxuICAgIGRvdzogMSwgLy8gTW9uZGF5IGlzIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsuXG4gICAgZG95OiA0ICAvLyBUaGUgd2VlayB0aGF0IGNvbnRhaW5zIEphbiA0dGggaXMgdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHllYXIuXG4gIH1cbn07XG4iXSwibmFtZXMiOlsiZGF5c0luTW9udGgiLCJtb250aHMiLCJtb250aHNTaG9ydCIsIm1vbnRoc1Nob3J0RG90IiwibW9udGhzUGFyc2UiLCJtb250aHNSZWdleCIsInRyYW5zbGF0ZSIsInN5bWJvbE1hcCIsIm51bWJlck1hcCIsIm1vbnRoc1Nob3J0V2l0aERvdHMiLCJtb250aHNTaG9ydFdpdGhvdXREb3RzIiwicGx1cmFsIiwicmVsYXRpdmVUaW1lV2l0aFBsdXJhbCIsInByb2Nlc3NSZWxhdGl2ZVRpbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUVBLGlCQUFvQixDQUFTLEVBQUUsQ0FBUztRQUN0QyxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ3hCOzs7OztBQUVELHNCQUF5QixHQUFXO1FBQ2xDLE9BQU8sR0FBRyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQ3hEOzs7Ozs7QUNSRDs7OztBQUVBLHNCQUF5QixHQUFRO1FBQy9CLE9BQU8sT0FBTyxHQUFHLEtBQUssUUFBUSxDQUFDO0tBQ2hDOzs7OztBQUVELG9CQUF1QixLQUFVO1FBQy9CLE9BQU8sS0FBSyxZQUFZLElBQUksSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssZUFBZSxDQUFDO0tBQzNGOzs7OztBQU1ELHlCQUE0QixJQUFVO1FBQ3BDLE9BQU8sSUFBSSxJQUFJLElBQUksQ0FBQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7S0FDdkQ7Ozs7O0FBRUQsd0JBQTJCLEVBQU87UUFDaEMsUUFDRSxFQUFFLFlBQVksUUFBUTtZQUN0QixNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssbUJBQW1CLEVBQzFEO0tBQ0g7Ozs7O0FBRUQsc0JBQXlCLEtBQVc7UUFDbEMsT0FBTyxPQUFPLEtBQUssS0FBSyxRQUFRLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLGlCQUFpQixDQUFDO0tBQ2pHOzs7Ozs7QUFFRCxxQkFBMkIsS0FBVztRQUNwQyxRQUNFLEtBQUssWUFBWSxLQUFLO1lBQ3RCLE1BQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxnQkFBZ0IsRUFDMUQ7S0FDSDs7Ozs7OztBQUlELHdCQUE4QixDQUFJLGFBQWEsQ0FBUztRQUN0RCxPQUFPLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7S0FDbkQ7Ozs7OztBQUVELHNCQUE0QixLQUFVOzs7UUFHcEMsUUFDRSxLQUFLLElBQUksSUFBSSxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxpQkFBaUIsRUFDNUU7S0FDSDs7Ozs7QUFFRCwyQkFBOEIsR0FBUTtRQUNwQyxJQUFJLE1BQU0sQ0FBQyxtQkFBbUIsRUFBRTtZQUM5QixRQUFRLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1NBQ3ZEO1FBQ0QscUJBQUksQ0FBQyxDQUFDO1FBQ04sS0FBSyxDQUFDLElBQUksR0FBRyxFQUFFO1lBQ2IsSUFBSSxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUN6QixPQUFPLEtBQUssQ0FBQzthQUNkO1NBQ0Y7UUFFRCxPQUFPLElBQUksQ0FBQztLQUNiOzs7OztBQUdELHlCQUE0QixLQUFVO1FBQ3BDLE9BQU8sS0FBSyxLQUFLLEtBQUssQ0FBQyxDQUFDO0tBQ3pCOzs7Ozs7QUFFRCxtQkFBeUIsbUJBQXdDO1FBQy9ELHFCQUFNLGFBQWEsR0FBRyxDQUFDLG1CQUFtQixDQUFDO1FBQzNDLHFCQUFJLEtBQUssR0FBRyxDQUFDLENBQUM7UUFFZCxJQUFJLGFBQWEsS0FBSyxDQUFDLElBQUksUUFBUSxDQUFDLGFBQWEsQ0FBQyxFQUFFO1lBQ2xELEtBQUssR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUM7U0FDakM7UUFFRCxPQUFPLEtBQUssQ0FBQztLQUNkOzs7Ozs7QUM5RUQsSUFHQSxxQkFBTSxPQUFPLEdBQThCLEVBQUUsQ0FBQztJQUs5QyxxQkFBTSxTQUFTLEdBQWtDO1FBQy9DLElBQUksRUFBRSxLQUFLO1FBQ1gsSUFBSSxFQUFFLE9BQU87UUFDYixNQUFNLEVBQUUsU0FBUztRQUNqQixNQUFNLEVBQUUsU0FBUztRQUNqQixXQUFXLEVBQUUsY0FBYztLQUM1QixDQUFDOzs7Ozs7QUFFRiwwQkFBNkIsSUFBd0IsRUFBRSxTQUFpQjtRQUN0RSxxQkFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3JDLHFCQUFJLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxTQUFTLElBQUksU0FBUyxFQUFFO1lBQzFCLEtBQUssR0FBRyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDOUI7UUFDRCxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsT0FBTyxDQUFJLFNBQVMsTUFBRyxDQUFDLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEtBQUssQ0FBQztLQUM1RTs7Ozs7QUFFRCw0QkFBK0IsS0FBd0I7UUFDckQsT0FBTyxRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLE9BQU8sQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUMsR0FBRyxTQUFTLENBQUM7S0FDckY7Ozs7O0FBRUQsa0NBQXFDLFdBQXNDO1FBQ3pFLHFCQUFNLGVBQWUsR0FBOEIsRUFBRSxDQUFDO1FBQ3RELHFCQUFJLGNBQWMsQ0FBQztRQUNuQixxQkFBSSxJQUFJLENBQUM7UUFFVCxLQUFLLElBQUksSUFBSSxXQUFXLEVBQUU7WUFDeEIsSUFBSSxVQUFVLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxFQUFFO2dCQUNqQyxjQUFjLEdBQUcsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUN0QyxJQUFJLGNBQWMsRUFBRTtvQkFDbEIsZUFBZSxDQUFDLGNBQWMsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDckQ7YUFDRjtTQUNGO1FBRUQseUJBQU8sZUFBc0IsRUFBQztLQUMvQjs7Ozs7OztBQzNDRCxJQUFPLHFCQUFNLElBQUksR0FBRyxDQUFDLENBQUM7QUFDdEIsSUFBTyxxQkFBTSxLQUFLLEdBQUcsQ0FBQyxDQUFDO0FBQ3ZCLElBQU8scUJBQU0sSUFBSSxHQUFHLENBQUMsQ0FBQztBQUN0QixJQUFPLHFCQUFNLElBQUksR0FBRyxDQUFDLENBQUM7QUFDdEIsSUFBTyxxQkFBTSxNQUFNLEdBQUcsQ0FBQyxDQUFDO0FBQ3hCLElBQU8scUJBQU0sTUFBTSxHQUFHLENBQUMsQ0FBQztBQUN4QixJQUFPLHFCQUFNLFdBQVcsR0FBRyxDQUFDLENBQUM7QUFDN0IsSUFBTyxxQkFBTSxJQUFJLEdBQUcsQ0FBQyxDQUFDO0FBQ3RCLElBQU8scUJBQU0sT0FBTyxHQUFHLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7O0FDVHpCLHNCQUF5QixHQUFXLEVBQ1gsWUFBb0IsRUFDcEIsU0FBbUI7UUFDMUMscUJBQU0sU0FBUyxHQUFHLEtBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUcsQ0FBQztRQUNyQyxxQkFBTSxXQUFXLEdBQUcsWUFBWSxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUM7UUFDcEQscUJBQU0sSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLENBQUM7UUFDdEIscUJBQU0sS0FBSyxHQUFHLElBQUksSUFBSSxTQUFTLEdBQUcsR0FBRyxHQUFHLEVBQUUsSUFBSSxHQUFHLENBQUM7O1FBRWxELHFCQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxXQUFXLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUUzRSxRQUFRLEtBQUssR0FBRyxNQUFNLEdBQUcsU0FBUyxFQUFFO0tBQ3JDOzs7Ozs7QUNWRCxJQUlPLHFCQUFJLGVBQWUsR0FFdEIsRUFBRSxDQUFDO0FBQ1AsSUFBTyxxQkFBSSxvQkFBb0IsR0FBdUMsRUFBRSxDQUFDOztBQUd6RSxJQUFPLHFCQUFNLGdCQUFnQixHQUFHLHNMQUFzTCxDQUFDOzs7Ozs7OztBQU12Tiw0QkFBK0IsS0FBYSxFQUNiLE1BQWlDLEVBQ2pDLE9BQWUsRUFDZixRQUF5QjtRQUV0RCxJQUFJLEtBQUssRUFBRTtZQUNULG9CQUFvQixDQUFDLEtBQUssQ0FBQyxHQUFHLFFBQVEsQ0FBQztTQUN4QztRQUVELElBQUksTUFBTSxFQUFFO1lBQ1Ysb0JBQW9CLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUc7Z0JBQ2hDLE9BQU8sUUFBUSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUN4RSxDQUFDO1NBQ0g7UUFFRCxJQUFJLE9BQU8sRUFBRTtZQUNYLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxHQUFHLFVBQVUsSUFBVSxFQUFFLElBQTBCO2dCQUM5RSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO2FBQ3BFLENBQUM7U0FDSDtLQUNGOzs7OztBQUVELGdDQUFtQyxNQUFjO1FBRy9DLHFCQUFNLEtBQUssR0FBYSxNQUFNLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDdkQscUJBQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUM7UUFFNUIscUJBQU0sU0FBUyxHQUFpQyxJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUVsRSxLQUFLLHFCQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUMvQixTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUcsb0JBQW9CLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO2tCQUN6QyxvQkFBb0IsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7a0JBQzlCLHNCQUFzQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3RDO1FBRUQsT0FBTyxVQUFVLElBQVUsRUFBRSxNQUFjLEVBQUUsS0FBYyxFQUFFLE1BQVU7WUFBVix1QkFBQTtnQkFBQSxVQUFVOztZQUNyRSxxQkFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDO1lBQ2hCLEtBQUsscUJBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUMvQixNQUFNLElBQUksVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztzQkFDOUIsRUFBQyxTQUFTLENBQUMsQ0FBQyxDQUFvQixHQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLEVBQUMsTUFBTSxRQUFBLEVBQUUsTUFBTSxRQUFBLEVBQUUsS0FBSyxPQUFBLEVBQUUsTUFBTSxRQUFBLEVBQUMsQ0FBQztzQkFDbkYsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ2xCO1lBRUQsT0FBTyxNQUFNLENBQUM7U0FDZixDQUFDO0tBQ0g7Ozs7O0lBRUQsZ0NBQWdDLEtBQWE7UUFDM0MsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQzNCLE9BQU8sS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDLENBQUM7U0FDdEM7UUFFRCxPQUFPLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0tBQ2pDOzs7Ozs7Ozs7Ozs7QUN2RUQsMkJBQThCLENBQVUsRUFDVixDQUFVLEVBQ1YsQ0FBVTtRQUN0QyxxQkFBTSxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUM7O1FBR3ZELElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsRUFBRTtZQUN4RCxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3hCO1FBRUQsT0FBTyxJQUFJLENBQUM7S0FDYjs7Ozs7Ozs7Ozs7QUFFRCx3QkFBMkIsQ0FBVSxFQUNWLENBQUssRUFDTCxDQUFLLEVBQ0wsQ0FBSyxFQUNMLENBQUssRUFDTCxDQUFLLEVBQ0wsRUFBTTtRQUxOLGtCQUFBO1lBQUEsS0FBSzs7UUFDTCxrQkFBQTtZQUFBLEtBQUs7O1FBQ0wsa0JBQUE7WUFBQSxLQUFLOztRQUNMLGtCQUFBO1lBQUEsS0FBSzs7UUFDTCxrQkFBQTtZQUFBLEtBQUs7O1FBQ0wsbUJBQUE7WUFBQSxNQUFNOztRQUMvQixxQkFBTSxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7O1FBRzVDLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsRUFBRTtZQUNyRCxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3JCO1FBRUQsT0FBTyxJQUFJLENBQUM7S0FDYjs7Ozs7O0FDNUJEOzs7OztBQUVBLHNCQUF5QixJQUFVLEVBQUUsS0FBYTtRQUFiLHNCQUFBO1lBQUEsYUFBYTs7UUFDaEQsT0FBTyxLQUFLLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztLQUNyRDs7Ozs7O0FBRUQsd0JBQTJCLElBQVUsRUFBRSxLQUFhO1FBQWIsc0JBQUE7WUFBQSxhQUFhOztRQUNsRCxPQUFPLEtBQUssR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0tBQ3pEOzs7Ozs7QUFFRCx3QkFBMkIsSUFBVSxFQUFFLEtBQWE7UUFBYixzQkFBQTtZQUFBLGFBQWE7O1FBQ2xELE9BQU8sS0FBSyxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7S0FDekQ7Ozs7OztBQUVELDZCQUFnQyxJQUFVLEVBQUUsS0FBYTtRQUFiLHNCQUFBO1lBQUEsYUFBYTs7UUFDdkQsT0FBTyxLQUFLLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixFQUFFLEdBQUcsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0tBQ25FOzs7OztBQUNELHFCQUF3QixJQUFVO1FBQ2hDLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0tBQ3ZCOzs7Ozs7QUFFRCxvQkFBdUIsSUFBVSxFQUFFLEtBQWE7UUFBYixzQkFBQTtZQUFBLGFBQWE7O1FBQzlDLE9BQU8sS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7S0FDakQ7Ozs7OztBQUVELHFCQUF3QixJQUFVLEVBQUUsS0FBYTtRQUFiLHNCQUFBO1lBQUEsYUFBYTs7UUFDL0MsT0FBTyxLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRSxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztLQUNuRDs7Ozs7O0FBRUQsc0JBQXlCLElBQVUsRUFBRSxLQUFhO1FBQWIsc0JBQUE7WUFBQSxhQUFhOztRQUNoRCxPQUFPLEtBQUssR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0tBQ3JEOzs7Ozs7QUFFRCx5QkFBNEIsSUFBVSxFQUFFLEtBQWE7UUFBYixzQkFBQTtZQUFBLGFBQWE7O1FBQ25ELE9BQU8sS0FBSyxHQUFHLElBQUksQ0FBQyxjQUFjLEVBQUUsR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7S0FDM0Q7Ozs7O0FBTUQsa0JBQXFCLElBQVU7UUFDN0IsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQztLQUMxQzs7Ozs7QUFFRCxnQ0FBbUMsSUFBVTtRQUMzQyxPQUFPLFVBQVUsQ0FDZixJQUFJLENBQUMsV0FBVyxFQUFFLEVBQ2xCLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFDZixDQUFDLEVBQ0QsSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUNmLElBQUksQ0FBQyxVQUFVLEVBQUUsRUFDakIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUNsQixDQUFDO0tBQ0g7Ozs7OztBQVVELDhCQUFpQyxJQUFVLEVBQUUsY0FBc0I7UUFDakUsT0FBTyxJQUFJLENBQUMsTUFBTSxFQUFFLEtBQUssY0FBYyxDQUFDO0tBQ3pDOzs7Ozs7QUFFRCx5QkFBNEIsS0FBVyxFQUFFLEtBQVc7UUFDbEQsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNwQixPQUFPLEtBQUssQ0FBQztTQUNkO1FBRUQsT0FBTyxVQUFVLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxJQUFJLFFBQVEsQ0FBQyxLQUFLLENBQUMsS0FBSyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDeEU7Ozs7OztBQUVELHdCQUEyQixLQUFXLEVBQUUsS0FBVztRQUNqRCxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ3BCLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFFRCxPQUFPLFdBQVcsQ0FBQyxLQUFLLENBQUMsS0FBSyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDbEQ7Ozs7OztBQUVELHVCQUEwQixLQUFXLEVBQUUsS0FBVztRQUNoRCxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ3BCLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFFRCxRQUNFLFVBQVUsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDO1lBQ3hCLFdBQVcsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDO1lBQ3pCLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQ2pDO0tBQ0g7Ozs7OztBQzlGRCxJQUdPLHFCQUFNLE1BQU0sR0FBRyxJQUFJLENBQUM7QUFDM0IsSUFBTyxxQkFBTSxNQUFNLEdBQUcsTUFBTSxDQUFDO0FBQzdCLElBQU8scUJBQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQztBQUM5QixJQUFPLHFCQUFNLE1BQU0sR0FBRyxPQUFPLENBQUM7QUFDOUIsSUFBTyxxQkFBTSxNQUFNLEdBQUcsWUFBWSxDQUFDO0FBQ25DLElBQU8scUJBQU0sU0FBUyxHQUFHLE9BQU8sQ0FBQztBQUNqQyxJQUFPLHFCQUFNLFNBQVMsR0FBRyxXQUFXLENBQUM7QUFDckMsSUFBTyxxQkFBTSxTQUFTLEdBQUcsZUFBZSxDQUFDO0FBQ3pDLElBQU8scUJBQU0sU0FBUyxHQUFHLFNBQVMsQ0FBQztBQUNuQyxJQUFPLHFCQUFNLFNBQVMsR0FBRyxTQUFTLENBQUM7QUFDbkMsSUFBTyxxQkFBTSxTQUFTLEdBQUcsY0FBYyxDQUFDO0FBRXhDLElBQU8scUJBQU0sYUFBYSxHQUFHLEtBQUssQ0FBQztBQUNuQyxJQUFPLHFCQUFNLFdBQVcsR0FBRyxVQUFVLENBQUM7QUFFdEMsSUFDTyxxQkFBTSxnQkFBZ0IsR0FBRyx5QkFBeUIsQ0FBQztBQUUxRCxJQUFPLHFCQUFNLGNBQWMsR0FBRyxzQkFBc0IsQ0FBQzs7OztBQUtyRCxJQUFPLHFCQUFNLFNBQVMsR0FBRywwSUFBMEksQ0FBQztJQUdwSyxxQkFBTSxPQUFPLEdBQW1DLEVBQUUsQ0FBQzs7Ozs7OztBQUduRCwyQkFBOEIsS0FBYSxFQUFFLEtBQTZCLEVBQUUsV0FBb0I7UUFDOUYsSUFBSSxVQUFVLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDckIsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLEtBQUssQ0FBQztZQUV2QixPQUFPO1NBQ1I7UUFFRCxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsVUFBVSxRQUFpQixFQUFFLE1BQWM7WUFDMUQsT0FBTyxDQUFDLFFBQVEsSUFBSSxXQUFXLElBQUksV0FBVyxHQUFHLEtBQUssQ0FBQztTQUN4RCxDQUFDO0tBQ0g7Ozs7OztBQUVELG1DQUFzQyxLQUFhLEVBQUUsTUFBYztRQUNqRSxxQkFBTSxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxFQUFFO1lBQy9CLE9BQU8sSUFBSSxNQUFNLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7U0FDMUM7UUFFRCxPQUFPLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUM7S0FDeEM7Ozs7O0lBR0Qsd0JBQXdCLEdBQVc7O1FBRWpDLE9BQU8sV0FBVyxDQUFDLEdBQUc7YUFDbkIsT0FBTyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUM7YUFDakIsT0FBTyxDQUFDLHFDQUFxQyxFQUFFLFVBQUMsT0FBTyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsSUFBSyxPQUFBLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBQSxDQUFDLENBQ25HLENBQUM7S0FDSDs7Ozs7QUFFRCx5QkFBNEIsR0FBVztRQUNyQyxPQUFPLEdBQUcsQ0FBQyxPQUFPLENBQUMsd0JBQXdCLEVBQUUsTUFBTSxDQUFDLENBQUM7S0FDdEQ7Ozs7OztBQy9ERCxJQUlBLHFCQUFNLE1BQU0sR0FBc0MsRUFBRSxDQUFDOzs7Ozs7QUFFckQsMkJBQThCLEtBQXdCLEVBQUUsUUFBbUM7UUFDekYscUJBQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLEtBQUssQ0FBQztRQUNqRCxxQkFBSSxJQUFJLEdBQUcsUUFBUSxDQUFDO1FBRXBCLElBQUksUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQ3RCLElBQUksR0FBRyxVQUFVLEtBQWEsRUFBRSxLQUFnQixFQUFFLE1BQXlCO2dCQUN6RSxLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUUvQixPQUFPLE1BQU0sQ0FBQzthQUNmLENBQUM7U0FDSDtRQUVELElBQUksT0FBTyxDQUFTLE1BQU0sQ0FBQyxJQUFJLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUMvQyxxQkFBSSxDQUFDLFNBQUEsQ0FBQztZQUNOLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDbEMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQzthQUMxQjtTQUNGO0tBQ0Y7Ozs7OztBQUVELCtCQUFrQyxLQUFlLEVBQUUsUUFBMEI7UUFDM0UsYUFBYSxDQUFDLEtBQUssRUFBRSxVQUFVLEtBQWEsRUFBRSxLQUFnQixFQUFFLE1BQXlCLEVBQUUsTUFBYztZQUN2RyxNQUFNLENBQUMsRUFBRSxHQUFHLE1BQU0sQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDO1lBRTVCLE9BQU8sUUFBUSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsRUFBRSxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztTQUNuRCxDQUFDLENBQUM7S0FDSjs7Ozs7OztBQUdELHFDQUF3QyxLQUFhLEVBQUUsS0FBYSxFQUFFLE1BQXlCO1FBQzdGLElBQUksS0FBSyxJQUFJLElBQUksSUFBSSxVQUFVLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxFQUFFO1lBQzlDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDaEQ7UUFFRCxPQUFPLE1BQU0sQ0FBQztLQUNmOzs7Ozs7QUMxQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBOzs7QUFZQTs7UUFHRSxjQUFjLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxLQUFLLENBQUMsRUFBRSxJQUFJLEVBQ3hDLFVBQVMsSUFBVSxFQUFFLElBQTBCO1lBQzdDLE9BQU8sT0FBTyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDO2lCQUM3QixRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDakIsQ0FDRixDQUFDOztRQUlGLFlBQVksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUM7O1FBTzFCLGFBQWEsQ0FBQyxHQUFHLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDOUIsYUFBYSxDQUFDLElBQUksRUFBRSxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDdkMsYUFBYSxDQUFDLElBQUksRUFBRSxVQUFTLFFBQVEsRUFBRSxNQUFNO1lBQzNDLE9BQU8sTUFBTSxDQUFDLHVCQUF1QixJQUFJLE1BQU0sQ0FBQyxhQUFhLENBQUM7U0FDL0QsQ0FBQyxDQUFDO1FBRUgsYUFBYSxDQUFDLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2pDLGFBQWEsQ0FDWCxJQUFJLEVBQ0osVUFBUyxLQUFhLEVBQUUsS0FBZ0IsRUFBRSxNQUF5QjtZQUNqRSxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUUvQyxPQUFPLE1BQU0sQ0FBQztTQUNmLENBQ0YsQ0FBQztLQUNIOzs7Ozs7Ozs7SUM1Q0Q7O1FBRUUsT0FBTztZQUNMLEtBQUssRUFBRSxLQUFLO1lBQ1osWUFBWSxFQUFFLEVBQUU7WUFDaEIsV0FBVyxFQUFFLEVBQUU7WUFDZixRQUFRLEVBQUUsQ0FBQyxDQUFDO1lBQ1osYUFBYSxFQUFFLENBQUM7WUFDaEIsU0FBUyxFQUFFLEtBQUs7WUFDaEIsWUFBWSxFQUFFLElBQUk7WUFDbEIsYUFBYSxFQUFFLEtBQUs7WUFDcEIsZUFBZSxFQUFFLEtBQUs7WUFDdEIsR0FBRyxFQUFFLEtBQUs7WUFDVixlQUFlLEVBQUUsRUFBRTtZQUNuQixRQUFRLEVBQUUsSUFBSTtZQUNkLE9BQU8sRUFBRSxLQUFLO1lBQ2QsZUFBZSxFQUFFLEtBQUs7U0FDdkIsQ0FBQztLQUNIOzs7OztBQUVELDZCQUFnQyxNQUF5QjtRQUN2RCxJQUFJLE1BQU0sQ0FBQyxHQUFHLElBQUksSUFBSSxFQUFFO1lBQ3RCLE1BQU0sQ0FBQyxHQUFHLEdBQUcsbUJBQW1CLEVBQUUsQ0FBQztTQUNwQztRQUVELE9BQU8sTUFBTSxDQUFDLEdBQUcsQ0FBQztLQUNuQjs7Ozs7O0FDNUJEOzs7OztJQVlBLGlCQUFpQixJQUFVLEVBQUUsSUFBMEI7UUFDckQsT0FBTyxXQUFXLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztLQUNqRDs7OztBQUVEO1FBQ0UsY0FBYyxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUM1QixVQUFVLElBQVUsRUFBRSxJQUEwQjtZQUNoRCxxQkFBTSxDQUFDLEdBQUcsV0FBVyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFFeEMsT0FBTyxDQUFDLElBQUksSUFBSSxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBSSxDQUFHLENBQUM7U0FDN0MsQ0FBQyxDQUFDO1FBRUgsY0FBYyxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsS0FBSyxDQUFDLEVBQUUsSUFBSSxFQUN6QyxVQUFVLElBQVUsRUFBRSxJQUEwQjtZQUNoRCxPQUFPLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxFQUFFLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUMzRCxDQUFDLENBQUM7UUFFSCxjQUFjLENBQUMsSUFBSSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxLQUFLLENBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDeEQsY0FBYyxDQUFDLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUUsS0FBSyxDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3pELGNBQWMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQzs7UUFJekQsWUFBWSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQzs7UUFRMUIsYUFBYSxDQUFDLEdBQUcsRUFBRSxXQUFXLENBQUMsQ0FBQztRQUNoQyxhQUFhLENBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUN2QyxhQUFhLENBQUMsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUN6QyxhQUFhLENBQUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUMxQyxhQUFhLENBQUMsUUFBUSxFQUFFLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUUzQyxhQUFhLENBQUMsQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDekMsYUFBYSxDQUFDLE1BQU0sRUFBRSxVQUFVLEtBQUssRUFBRSxLQUFLLEVBQUUsTUFBTTtZQUNsRCxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sS0FBSyxDQUFDLEdBQUcsaUJBQWlCLENBQUMsS0FBSyxDQUFDLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBRTNFLE9BQU8sTUFBTSxDQUFDO1NBQ2YsQ0FBQyxDQUFDO1FBQ0gsYUFBYSxDQUFDLElBQUksRUFBRSxVQUFVLEtBQUssRUFBRSxLQUFLLEVBQUUsTUFBTTtZQUNoRCxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsaUJBQWlCLENBQUMsS0FBSyxDQUFDLENBQUM7WUFFdkMsT0FBTyxNQUFNLENBQUM7U0FDZixDQUFDLENBQUM7UUFDSCxhQUFhLENBQUMsR0FBRyxFQUFFLFVBQVUsS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNO1lBQy9DLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxRQUFRLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBRWxDLE9BQU8sTUFBTSxDQUFDO1NBQ2YsQ0FBQyxDQUFDO0tBQ0o7Ozs7O0FBRUQsK0JBQWtDLEtBQWE7UUFDN0MsT0FBTyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUM7S0FDekQ7Ozs7O0FBRUQsd0JBQTJCLElBQVk7UUFDckMsT0FBTyxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztLQUNyQzs7Ozs7QUFFRCx3QkFBMkIsSUFBWTtRQUNyQyxPQUFPLENBQUMsSUFBSSxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksSUFBSSxHQUFHLEdBQUcsS0FBSyxDQUFDLEtBQUssSUFBSSxHQUFHLEdBQUcsS0FBSyxDQUFDLENBQUM7S0FDakU7Ozs7OztBQzdFRDs7Ozs7QUFlQSwyQkFBNEIsSUFBWSxFQUFFLEtBQWE7UUFDckQsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQy9CLE9BQU8sR0FBRyxDQUFDO1NBQ1o7UUFDRCxxQkFBTSxRQUFRLEdBQUcsR0FBRyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNoQyxxQkFBTSxLQUFLLEdBQUcsSUFBSSxHQUFHLENBQUMsS0FBSyxHQUFHLFFBQVEsSUFBSSxFQUFFLENBQUM7UUFFN0MsT0FBTyxRQUFRLEtBQUssQ0FBQztjQUNqQixVQUFVLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUU7ZUFDMUIsRUFBRSxHQUFHLFFBQVEsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7S0FDN0I7Ozs7QUFFRDs7UUFHRSxjQUFjLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxLQUFLLENBQUMsRUFBRSxJQUFJLEVBQ3hDLFVBQVMsSUFBVSxFQUFFLElBQTBCO1lBQzdDLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQ3RELENBQ0YsQ0FBQztRQUVGLGNBQWMsQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLElBQUksRUFDOUIsVUFBUyxJQUFVLEVBQUUsSUFBMEI7WUFDN0MsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDL0QsQ0FDRixDQUFDO1FBRUYsY0FBYyxDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUMvQixVQUFTLElBQVUsRUFBRSxJQUEwQjtZQUM3QyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUMxRCxDQUNGLENBQUM7O1FBS0YsWUFBWSxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQzs7UUFRM0IsYUFBYSxDQUFDLEdBQUcsRUFBRSxTQUFTLENBQUMsQ0FBQztRQUM5QixhQUFhLENBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUN2QyxhQUFhLENBQUMsS0FBSyxFQUFFLFVBQVMsUUFBUSxFQUFFLE1BQU07WUFDNUMsT0FBTyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDMUMsQ0FBQyxDQUFDO1FBQ0gsYUFBYSxDQUFDLE1BQU0sRUFBRSxVQUFTLFFBQVEsRUFBRSxNQUFNO1lBQzdDLE9BQU8sTUFBTSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUNyQyxDQUFDLENBQUM7UUFFSCxhQUFhLENBQUMsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLEVBQUUsVUFBUyxLQUFhLEVBQUUsS0FBZ0IsRUFBRSxNQUF5QjtZQUM1RixLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUVoQyxPQUFPLE1BQU0sQ0FBQztTQUNmLENBQUMsQ0FBQztRQUVILGFBQWEsQ0FDWCxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsRUFDZixVQUFTLEtBQWEsRUFBRSxLQUFnQixFQUFFLE1BQXlCLEVBQUUsS0FBYTtZQUNoRixxQkFBTSxLQUFLLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7O1lBRXZFLElBQUksS0FBSyxJQUFJLElBQUksRUFBRTtnQkFDakIsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLEtBQUssQ0FBQzthQUN0QjtpQkFBTTtnQkFDTCxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUM7YUFDaEQ7WUFFRCxPQUFPLE1BQU0sQ0FBQztTQUNmLENBQ0YsQ0FBQztLQUNIOzs7Ozs7QUN2RkQsSUFNQSxxQkFBTSxlQUFlLEdBQWE7UUFDaEMsSUFBSSxFQUFFLENBQUM7UUFDUCxLQUFLLEVBQUUsQ0FBQztRQUNSLEdBQUcsRUFBRSxDQUFDO1FBQ04sSUFBSSxFQUFFLENBQUM7UUFDUCxNQUFNLEVBQUUsQ0FBQztRQUNULE9BQU8sRUFBRSxDQUFDO0tBQ1gsQ0FBQzs7Ozs7O0FBRUYsdUJBQTBCLElBQVUsRUFBRSxJQUFjO1FBQ2xELHFCQUFNLEtBQUssR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxlQUFlLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDdkQscUJBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxLQUFLLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ3BELHFCQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksS0FBSyxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNuRCxxQkFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDNUMsSUFBSSxLQUFLLENBQUMsS0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRTtZQUM3QixHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUVBLGFBQVcsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztTQUMvQztRQUVELE9BQU8sVUFBVSxDQUNmLElBQUksRUFDSixLQUFLLEVBQ0wsR0FBRyxFQUNILElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxLQUFLLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxFQUNuQyxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksS0FBSyxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUMsRUFDdkMsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLEtBQUssQ0FBQyxPQUFPLElBQUksQ0FBQyxDQUFDLENBQ3pDLENBQUM7S0FDSDs7Ozs7O0FBRUQseUJBQTRCLElBQVUsRUFBRSxJQUFjO1FBQ3BELE9BQU8sVUFBVSxDQUNmLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUNyQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsRUFDbkMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQ2hDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUNsQyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsRUFDdEMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQ3ZDLE1BQU0sQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUNsRCxDQUFDO0tBQ0g7Ozs7OztJQUVELGdCQUFnQixHQUFXLEVBQUUsR0FBWTtRQUN2QyxPQUFPLFFBQVEsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO0tBQ2xDOzs7Ozs7O0FBZ0JELHNCQUF5QixJQUFVLEVBQUUsS0FBYSxFQUFFLEtBQWU7UUFDakUscUJBQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFQSxhQUFXLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDbEYsS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLFVBQVUsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBRS9FLE9BQU8sSUFBSSxDQUFDO0tBQ2I7Ozs7Ozs7QUFRRCxzQkFBeUIsSUFBVSxFQUFFLEtBQWEsRUFBRSxLQUFlO1FBQ2pFLEtBQUssR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFdkQsT0FBTyxJQUFJLENBQUM7S0FDYjs7Ozs7OztBQUVELHdCQUEyQixJQUFVLEVBQUUsS0FBYSxFQUFFLEtBQWU7UUFDbkUsS0FBSyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUUzRCxPQUFPLElBQUksQ0FBQztLQUNiOzs7Ozs7O0FBRUQsd0JBQTJCLElBQVUsRUFBRSxLQUFhLEVBQUUsS0FBZTtRQUNuRSxLQUFLLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRTNELE9BQU8sSUFBSSxDQUFDO0tBQ2I7Ozs7Ozs7QUFFRCw2QkFBZ0MsSUFBVSxFQUFFLEtBQWEsRUFBRSxLQUFlO1FBQ3hFLEtBQUssR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUVyRSxPQUFPLElBQUksQ0FBQztLQUNiOzs7Ozs7O0FBRUQscUJBQXdCLElBQVUsRUFBRSxLQUFhLEVBQUUsS0FBZTtRQUNoRSxLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRXJELE9BQU8sSUFBSSxDQUFDO0tBQ2I7Ozs7OztBQUVELHFCQUF3QixJQUFVLEVBQUUsS0FBYTtRQUMvQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRXBCLE9BQU8sSUFBSSxDQUFDO0tBQ2I7Ozs7Ozs7Ozs7QUM5R0QsdUJBQTBCLElBQVU7UUFDbEMsT0FBTyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztLQUNqQzs7Ozs7O0FDRkQ7Ozs7OztBQVNBLHFCQUF3QixJQUFVLEVBQUUsSUFBZ0IsRUFBRSxLQUFlO1FBQ25FLHFCQUFNLEtBQUssR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7OztRQUc5QixRQUFRLElBQUk7WUFDVixLQUFLLE1BQU07Z0JBQ1QsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7O1lBRTVCLEtBQUssU0FBUyxDQUFDO1lBQ2YsS0FBSyxPQUFPO2dCQUNWLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDOztZQUUzQixLQUFLLE1BQU0sQ0FBQztZQUNaLEtBQUssU0FBUyxDQUFDO1lBQ2YsS0FBSyxLQUFLLENBQUM7WUFDWCxLQUFLLE1BQU07Z0JBQ1QsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7O1lBRTVCLEtBQUssT0FBTztnQkFDVixVQUFVLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQzs7WUFFOUIsS0FBSyxTQUFTO2dCQUNaLFVBQVUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDOztZQUU5QixLQUFLLFNBQVM7Z0JBQ1osZUFBZSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDcEM7O1FBR0QsSUFBSSxJQUFJLEtBQUssTUFBTSxFQUFFO1lBQ25CLGtCQUFrQixDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBQyxLQUFLLE9BQUEsRUFBQyxDQUFDLENBQUM7U0FDdkM7UUFDRCxJQUFJLElBQUksS0FBSyxTQUFTLEVBQUU7WUFDdEIsZUFBZSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztTQUMzQjs7UUFHRCxJQUFJLElBQUksS0FBSyxTQUFTLEVBQUU7WUFDdEIsUUFBUSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQ3BFO1FBRUQsT0FBTyxLQUFLLENBQUM7S0FDZDs7Ozs7OztBQUVELG1CQUFzQixJQUFVLEVBQUUsSUFBZ0IsRUFBRSxLQUFlO1FBQ2pFLHFCQUFJLEtBQUssR0FBRyxJQUFJLENBQUM7O1FBRWpCLElBQUksS0FBSyxLQUFLLE1BQU0sRUFBRTtZQUNwQixLQUFLLEdBQUcsS0FBSyxDQUFDO1NBQ2Y7UUFFRCxxQkFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDMUMscUJBQU0sS0FBSyxHQUFHLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLEtBQUssS0FBSyxTQUFTLEdBQUcsTUFBTSxHQUFHLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztRQUN6RSxxQkFBTSxHQUFHLEdBQUcsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsY0FBYyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBRXRELE9BQU8sR0FBRyxDQUFDO0tBQ1o7Ozs7OztBQ25FRDs7O0FBWUE7O1FBR0UsY0FBYyxDQUFDLEtBQUssRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsS0FBSyxDQUFDLEVBQUUsTUFBTSxFQUM5QyxVQUFTLElBQVU7WUFDakIsT0FBTyxZQUFZLENBQUMsSUFBSSxDQUFDO2lCQUN0QixRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDakIsQ0FDRixDQUFDOztRQUtGLFlBQVksQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFNakMsYUFBYSxDQUFDLEtBQUssRUFBRSxTQUFTLENBQUMsQ0FBQztRQUNoQyxhQUFhLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQzlCLGFBQWEsQ0FDWCxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsRUFDZixVQUFTLEtBQWEsRUFBRSxLQUFnQixFQUFFLE1BQXlCO1lBQ2pFLE1BQU0sQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBRWpDLE9BQU8sTUFBTSxDQUFDO1NBQ2YsQ0FDRixDQUFDO0tBQ0g7Ozs7OztBQUVELDBCQUE2QixJQUFVLEVBQUUsS0FBZTtRQUN0RCxxQkFBTSxLQUFLLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztRQUMzQyxxQkFBTSxLQUFLLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztRQUM1QyxxQkFBTSxRQUFRLEdBQUcsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUMvQixxQkFBTSxNQUFNLEdBQUcsSUFBSSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBRW5DLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQzFDOzs7Ozs7QUMzQ0Q7Ozs7OztJQUtBLHlCQUF5QixJQUFZLEVBQUUsR0FBVyxFQUFFLEdBQVc7O1FBRTdELHFCQUFNLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQzs7UUFFMUIscUJBQU0sS0FBSyxHQUFHLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsU0FBUyxFQUFFLEdBQUcsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFdEUsT0FBTyxDQUFDLEtBQUssR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDO0tBQ3pCOzs7Ozs7Ozs7QUFHRCxnQ0FDRSxJQUFZLEVBQ1osSUFBWSxFQUNaLE9BQWUsRUFDZixHQUFXLEVBQ1gsR0FBVztRQUVYLHFCQUFNLFlBQVksR0FBRyxDQUFDLENBQUMsR0FBRyxPQUFPLEdBQUcsR0FBRyxJQUFJLENBQUMsQ0FBQztRQUM3QyxxQkFBTSxVQUFVLEdBQUcsZUFBZSxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDbkQscUJBQU0sU0FBUyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxHQUFHLENBQUMsQ0FBQyxHQUFHLFlBQVksR0FBRyxVQUFVLENBQUM7UUFDakUscUJBQUksT0FBZSxDQUFDO1FBQ3BCLHFCQUFJLFlBQW9CLENBQUM7UUFFekIsSUFBSSxTQUFTLElBQUksQ0FBQyxFQUFFO1lBQ2xCLE9BQU8sR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUFDO1lBQ25CLFlBQVksR0FBRyxVQUFVLENBQUMsT0FBTyxDQUFDLEdBQUcsU0FBUyxDQUFDO1NBQ2hEO2FBQU0sSUFBSSxTQUFTLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ3ZDLE9BQU8sR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUFDO1lBQ25CLFlBQVksR0FBRyxTQUFTLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzdDO2FBQU07WUFDTCxPQUFPLEdBQUcsSUFBSSxDQUFDO1lBQ2YsWUFBWSxHQUFHLFNBQVMsQ0FBQztTQUMxQjtRQUVELE9BQU87WUFDTCxJQUFJLEVBQUUsT0FBTztZQUNiLFNBQVMsRUFBRSxZQUFZO1NBQ3hCLENBQUM7S0FDSDs7Ozs7Ozs7QUFFRCx3QkFBMkIsSUFBVSxFQUFFLEdBQVcsRUFBRSxHQUFXLEVBQUUsS0FBZTtRQUM5RSxxQkFBTSxVQUFVLEdBQUcsZUFBZSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZFLHFCQUFNLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsR0FBRyxVQUFVLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM5RSxxQkFBSSxPQUFlLENBQUM7UUFDcEIscUJBQUksT0FBZSxDQUFDO1FBRXBCLElBQUksSUFBSSxHQUFHLENBQUMsRUFBRTtZQUNaLE9BQU8sR0FBRyxXQUFXLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN2QyxPQUFPLEdBQUcsSUFBSSxHQUFHLFdBQVcsQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQ2pEO2FBQU0sSUFBSSxJQUFJLEdBQUcsV0FBVyxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUFFO1lBQ2pFLE9BQU8sR0FBRyxJQUFJLEdBQUcsV0FBVyxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQ2pFLE9BQU8sR0FBRyxXQUFXLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUN4QzthQUFNO1lBQ0wsT0FBTyxHQUFHLFdBQVcsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDbkMsT0FBTyxHQUFHLElBQUksQ0FBQztTQUNoQjtRQUVELE9BQU87WUFDTCxJQUFJLEVBQUUsT0FBTztZQUNiLElBQUksRUFBRSxPQUFPO1NBQ2QsQ0FBQztLQUNIOzs7Ozs7O0FBRUQseUJBQTRCLElBQVksRUFBRSxHQUFXLEVBQUUsR0FBVztRQUNoRSxxQkFBTSxVQUFVLEdBQUcsZUFBZSxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDbkQscUJBQU0sY0FBYyxHQUFHLGVBQWUsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUUzRCxPQUFPLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLFVBQVUsR0FBRyxjQUFjLElBQUksQ0FBQyxDQUFDO0tBQzdEOzs7Ozs7SUNoRUQscUJBQU0sZ0JBQWdCLEdBQUcsK0JBQStCLENBQUM7QUFDekQsSUFBTyxxQkFBTSxtQkFBbUIsR0FBRyx1RkFBdUYsQ0FBQyxLQUFLLENBQzlILEdBQUcsQ0FDSixDQUFDO0FBQ0YsSUFBTyxxQkFBTSx3QkFBd0IsR0FBRyxpREFBaUQsQ0FBQyxLQUFLLENBQzdGLEdBQUcsQ0FDSixDQUFDO0FBQ0YsSUFBTyxxQkFBTSxxQkFBcUIsR0FBRywwREFBMEQsQ0FBQyxLQUFLLENBQ25HLEdBQUcsQ0FDSixDQUFDO0FBQ0YsSUFBTyxxQkFBTSwwQkFBMEIsR0FBRyw2QkFBNkIsQ0FBQyxLQUFLLENBQzNFLEdBQUcsQ0FDSixDQUFDO0FBQ0YsSUFBTyxxQkFBTSx3QkFBd0IsR0FBRyxzQkFBc0IsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDMUUsSUFBTyxxQkFBTSxxQkFBcUIsR0FBZ0M7UUFDaEUsR0FBRyxFQUFFLFdBQVc7UUFDaEIsRUFBRSxFQUFFLFFBQVE7UUFDWixDQUFDLEVBQUUsWUFBWTtRQUNmLEVBQUUsRUFBRSxjQUFjO1FBQ2xCLEdBQUcsRUFBRSxxQkFBcUI7UUFDMUIsSUFBSSxFQUFFLDJCQUEyQjtLQUNsQyxDQUFDO0FBRUYsSUFBTyxxQkFBTSxjQUFjLEdBQUcsSUFBSSxDQUFDO0FBQ25DLElBQU8scUJBQU0sNkJBQTZCLEdBQUcsU0FBUyxDQUFDO0lBRXZELHFCQUFNLHVCQUF1QixHQUFHLFNBQVMsQ0FBQztJQUMxQyxxQkFBTSxrQkFBa0IsR0FBRyxTQUFTLENBQUM7SUF1RHJDLElBQUE7UUE0Q0UsZ0JBQVksTUFBa0I7WUFDNUIsSUFBSSxDQUFDLENBQUMsTUFBTSxFQUFFO2dCQUNaLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDbEI7U0FDRjs7Ozs7UUFFRCxvQkFBRzs7OztZQUFILFVBQUksTUFBa0I7Z0JBQ3BCLHFCQUFJLE9BQU8sQ0FBQztnQkFDWixLQUFLLE9BQU8sSUFBSSxNQUFNLEVBQUU7b0JBQ3RCLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxFQUFFO3dCQUNuQyxTQUFTO3FCQUNWO29CQUNELHFCQUFNLElBQUksR0FBRyxNQUFNLEVBQUMsT0FBMkIsRUFBQyxDQUFDO29CQUNqRCxxQkFBTSxHQUFHLEtBQUksVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLE9BQU8sR0FBRyxNQUFJLE9BQVMsRUFBaUIsQ0FBQztvQkFFekUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxxQkFBRyxJQUFXLENBQUEsQ0FBQztpQkFDekI7Z0JBRUQsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7YUFDdkI7Ozs7Ozs7UUFFRCx5QkFBUTs7Ozs7O1lBQVIsVUFBUyxHQUFXLEVBQUUsSUFBVSxFQUFFLEdBQVM7Z0JBQ3pDLHFCQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxTQUFTLFlBQVMsQ0FBQztnQkFFOUQsT0FBTyxVQUFVLENBQUMsTUFBTSxDQUFDLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsQ0FBQyxHQUFHLE1BQU0sQ0FBQzthQUNuRTs7Ozs7UUFFRCwrQkFBYzs7OztZQUFkLFVBQWUsR0FBVztnQkFDeEIscUJBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ3pDLHFCQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO2dCQUU1RCxJQUFJLE1BQU0sSUFBSSxDQUFDLFdBQVcsRUFBRTtvQkFDMUIsT0FBTyxNQUFNLENBQUM7aUJBQ2Y7Z0JBRUQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsR0FBRyxXQUFXLENBQUMsT0FBTyxDQUFDLGtCQUFrQixFQUFFLFVBQVUsR0FBVztvQkFDdkYsT0FBTyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUNyQixDQUFDLENBQUM7Z0JBRUgsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ2xDO1FBRUQsc0JBQUksK0JBQVc7OztnQkFBZjtnQkFDRSxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7YUFDMUI7Ozs7Z0JBRUQsVUFBZ0IsR0FBVztnQkFDekIsSUFBSSxDQUFDLFlBQVksR0FBRyxHQUFHLENBQUM7YUFDekI7OztXQUpBOzs7Ozs7UUFNRCx3QkFBTzs7Ozs7WUFBUCxVQUFRLEdBQVcsRUFBRSxLQUFjO2dCQUNqQyxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7YUFDdEQ7Ozs7O1FBRUQseUJBQVE7Ozs7WUFBUixVQUFTLEdBQVc7Z0JBQ2xCLE9BQU8sR0FBRyxDQUFDO2FBQ1o7Ozs7O1FBRUQsMkJBQVU7Ozs7WUFBVixVQUFXLEdBQVc7Z0JBQ3BCLE9BQU8sR0FBRyxDQUFDO2FBQ1o7Ozs7Ozs7O1FBRUQsNkJBQVk7Ozs7Ozs7WUFBWixVQUFhLEdBQVcsRUFBRSxhQUFzQixFQUFFLEdBQXNCLEVBQUUsUUFBaUI7Z0JBQ3pGLHFCQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUV2QyxPQUFPLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQztvQkFDeEIsTUFBTSxDQUFDLEdBQUcsRUFBRSxhQUFhLEVBQUUsR0FBRyxFQUFFLFFBQVEsQ0FBQztvQkFDekMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2FBQzNDOzs7Ozs7UUFFRCwyQkFBVTs7Ozs7WUFBVixVQUFXLElBQVksRUFBRSxNQUFjO2dCQUNyQyxxQkFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxHQUFHLFFBQVEsR0FBRyxNQUFNLENBQUMsQ0FBQztnQkFFaEUsT0FBTyxVQUFVLENBQUMsTUFBTSxDQUFDLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO2FBQzVFOzs7Ozs7O1FBS0QsdUJBQU07Ozs7OztZQUFOLFVBQU8sSUFBVyxFQUFFLE1BQWUsRUFBRSxLQUFhO2dCQUFiLHNCQUFBO29CQUFBLGFBQWE7O2dCQUNoRCxJQUFJLENBQUMsSUFBSSxFQUFFO29CQUNULE9BQU8sT0FBTyxDQUFTLElBQUksQ0FBQyxPQUFPLENBQUM7MEJBQ2hDLElBQUksQ0FBQyxPQUFPOzBCQUNaLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDO2lCQUM3QjtnQkFFRCxJQUFJLE9BQU8sQ0FBUyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUU7b0JBQ2pDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7aUJBQzVDO2dCQUVELHFCQUFNLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxJQUFJLGdCQUFnQixFQUFFLElBQUksQ0FBQyxNQUFNLENBQUM7c0JBQ2hFLFFBQVE7c0JBQ1IsWUFBWSxDQUFDO2dCQUVqQixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO2FBQ2pEOzs7Ozs7O1FBSUQsNEJBQVc7Ozs7OztZQUFYLFVBQVksSUFBVyxFQUFFLE1BQWUsRUFBRSxLQUFhO2dCQUFiLHNCQUFBO29CQUFBLGFBQWE7O2dCQUNyRCxJQUFJLENBQUMsSUFBSSxFQUFFO29CQUNULE9BQU8sT0FBTyxDQUFTLElBQUksQ0FBQyxZQUFZLENBQUM7MEJBQ3JDLElBQUksQ0FBQyxZQUFZOzBCQUNqQixJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQztpQkFDbEM7Z0JBRUQsSUFBSSxPQUFPLENBQVMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFO29CQUN0QyxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO2lCQUNqRDtnQkFDRCxxQkFBTSxHQUFHLEdBQUcsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLFFBQVEsR0FBRyxZQUFZLENBQUM7Z0JBRXBFLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7YUFDdEQ7Ozs7Ozs7UUFFRCw0QkFBVzs7Ozs7O1lBQVgsVUFBWSxTQUFpQixFQUFFLE1BQWUsRUFBRSxNQUFnQjtnQkFDOUQscUJBQUksSUFBSSxDQUFDO2dCQUNULHFCQUFJLEtBQUssQ0FBQztnQkFFVixJQUFJLElBQUksQ0FBQyxpQkFBaUIsRUFBRTtvQkFDMUIsT0FBTyxJQUFJLENBQUMsc0JBQXNCLENBQUMsU0FBUyxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztpQkFDL0Q7Z0JBRUQsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUU7b0JBQ3RCLElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDO29CQUN2QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsRUFBRSxDQUFDO29CQUMzQixJQUFJLENBQUMsaUJBQWlCLEdBQUcsRUFBRSxDQUFDO2lCQUM3Qjs7OztnQkFLRCxxQkFBSSxDQUFDLENBQUM7Z0JBQ04sS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUU7O29CQUV2QixJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDbkMsSUFBSSxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLEVBQUU7d0JBQ3ZDLHFCQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQzt3QkFDN0QscUJBQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDO3dCQUN2RSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxNQUFNLENBQUMsTUFBSSxPQUFPLE1BQUcsRUFBRSxHQUFHLENBQUMsQ0FBQzt3QkFDM0QsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksTUFBTSxDQUFDLE1BQUksWUFBWSxNQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7cUJBQ2xFO29CQUNELElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxFQUFFO3dCQUNwQyxLQUFLLEdBQUcsTUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxFQUFFLEVBQUUsSUFBSSxDQUFDLFVBQUssSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLElBQUksQ0FBRyxDQUFDO3dCQUMvRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO3FCQUNoRTs7b0JBRUQsSUFBSSxNQUFNLElBQUksTUFBTSxLQUFLLE1BQU0sSUFBSSxFQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQVcsR0FBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUU7d0JBQ3ZGLE9BQU8sQ0FBQyxDQUFDO3FCQUNWO29CQUVELElBQUksTUFBTSxJQUFJLE1BQU0sS0FBSyxLQUFLLElBQUksRUFBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFXLEdBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFO3dCQUN2RixPQUFPLENBQUMsQ0FBQztxQkFDVjtvQkFFRCxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFO3dCQUNuRCxPQUFPLENBQUMsQ0FBQztxQkFDVjtpQkFDRjthQUNGOzs7OztRQUVELDRCQUFXOzs7O1lBQVgsVUFBWSxRQUFpQjtnQkFDM0IsSUFBSSxJQUFJLENBQUMsaUJBQWlCLEVBQUU7b0JBQzFCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLGNBQWMsQ0FBQyxFQUFFO3dCQUNyQyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztxQkFDM0I7b0JBQ0QsSUFBSSxRQUFRLEVBQUU7d0JBQ1osT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUM7cUJBQ2hDO29CQUVELE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztpQkFDMUI7Z0JBRUQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsY0FBYyxDQUFDLEVBQUU7b0JBQ3JDLElBQUksQ0FBQyxZQUFZLEdBQUcsa0JBQWtCLENBQUM7aUJBQ3hDO2dCQUVELE9BQU8sSUFBSSxDQUFDLGtCQUFrQixJQUFJLFFBQVE7b0JBQ3hDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO2FBQy9DOzs7OztRQUVELGlDQUFnQjs7OztZQUFoQixVQUFpQixRQUFpQjtnQkFDaEMsSUFBSSxJQUFJLENBQUMsaUJBQWlCLEVBQUU7b0JBQzFCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLGNBQWMsQ0FBQyxFQUFFO3dCQUNyQyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztxQkFDM0I7b0JBQ0QsSUFBSSxRQUFRLEVBQUU7d0JBQ1osT0FBTyxJQUFJLENBQUMsdUJBQXVCLENBQUM7cUJBQ3JDO29CQUVELE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDO2lCQUMvQjtnQkFDRCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxtQkFBbUIsQ0FBQyxFQUFFO29CQUMxQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsdUJBQXVCLENBQUM7aUJBQ2xEO2dCQUVELE9BQU8sSUFBSSxDQUFDLHVCQUF1QixJQUFJLFFBQVE7b0JBQzdDLElBQUksQ0FBQyx1QkFBdUIsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUM7YUFDekQ7Ozs7Ozs7O1FBR0QscUJBQUk7Ozs7OztZQUFKLFVBQUssSUFBVSxFQUFFLEtBQWU7Z0JBQzlCLE9BQU8sVUFBVSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUM7YUFDckU7Ozs7UUFFRCwrQkFBYzs7O1lBQWQ7Z0JBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQzthQUN2Qjs7OztRQUVELCtCQUFjOzs7WUFBZDtnQkFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO2FBQ3ZCOzs7Ozs7O1FBS0QseUJBQVE7Ozs7OztZQUFSLFVBQVMsSUFBVyxFQUFFLE1BQWUsRUFBRSxLQUFlO2dCQUNwRCxJQUFJLENBQUMsSUFBSSxFQUFFO29CQUNULE9BQU8sT0FBTyxDQUFTLElBQUksQ0FBQyxTQUFTLENBQUM7MEJBQ2xDLElBQUksQ0FBQyxTQUFTOzBCQUNkLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDO2lCQUMvQjtnQkFFRCxJQUFJLE9BQU8sQ0FBUyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUU7b0JBQ25DLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7aUJBQzVDO2dCQUVELHFCQUFNLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO3NCQUM3QyxRQUFRO3NCQUNSLFlBQVksQ0FBQztnQkFFakIsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQzthQUNsRDs7Ozs7OztRQUlELDRCQUFXOzs7Ozs7WUFBWCxVQUFZLElBQVcsRUFBRSxNQUFlLEVBQUUsS0FBZTtnQkFDdkQsT0FBTyxJQUFJLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQzthQUMxRTs7Ozs7OztRQUlELDhCQUFhOzs7Ozs7WUFBYixVQUFjLElBQVcsRUFBRSxNQUFlLEVBQUUsS0FBZTtnQkFDekQsT0FBTyxJQUFJLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQzthQUM5RTs7Ozs7Ozs7UUFJRCw4QkFBYTs7Ozs7O1lBQWIsVUFBYyxXQUFvQixFQUFFLE1BQWUsRUFBRSxNQUFnQjtnQkFDbkUscUJBQUksQ0FBQyxDQUFDO2dCQUNOLHFCQUFJLEtBQUssQ0FBQztnQkFFVixJQUFJLElBQUksQ0FBQyxtQkFBbUIsRUFBRTtvQkFDNUIsT0FBTyxJQUFJLENBQUMscUJBQXFCLENBQUMsV0FBVyxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztpQkFDaEU7Z0JBRUQsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUU7b0JBQ3hCLElBQUksQ0FBQyxjQUFjLEdBQUcsRUFBRSxDQUFDO29CQUN6QixJQUFJLENBQUMsaUJBQWlCLEdBQUcsRUFBRSxDQUFDO29CQUM1QixJQUFJLENBQUMsbUJBQW1CLEdBQUcsRUFBRSxDQUFDO29CQUM5QixJQUFJLENBQUMsa0JBQWtCLEdBQUcsRUFBRSxDQUFDO2lCQUM5QjtnQkFFRCxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTs7O29CQUd0QixxQkFBTSxJQUFJLEdBQUcsWUFBWSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztvQkFDdEUsSUFBSSxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLEVBQUU7d0JBQ3pDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLE1BQU0sQ0FBQyxNQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxNQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7d0JBQ3ZHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLE1BQU0sQ0FBQyxNQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxNQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7d0JBQzdHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLE1BQU0sQ0FBQyxNQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxNQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7cUJBQzFHO29CQUNELElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxFQUFFO3dCQUMzQixLQUFLLEdBQUcsTUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxFQUFFLEVBQUUsSUFBSSxDQUFDLFVBQUssSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLElBQUksQ0FBQyxVQUFLLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxJQUFJLENBQUcsQ0FBQzt3QkFDeEgsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztxQkFDbEU7b0JBRUQsSUFBSSxDQUFDLE9BQU8sQ0FBUyxJQUFJLENBQUMsa0JBQWtCLENBQUM7MkJBQ3hDLENBQUMsT0FBTyxDQUFTLElBQUksQ0FBQyxtQkFBbUIsQ0FBQzsyQkFDMUMsQ0FBQyxPQUFPLENBQVMsSUFBSSxDQUFDLGlCQUFpQixDQUFDOzJCQUN4QyxDQUFDLE9BQU8sQ0FBUyxJQUFJLENBQUMsY0FBYyxDQUFDLEVBQUU7d0JBQzFDLE9BQU87cUJBQ1I7O29CQUdELElBQUksTUFBTSxJQUFJLE1BQU0sS0FBSyxNQUFNLElBQUksSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRTt3QkFDL0UsT0FBTyxDQUFDLENBQUM7cUJBQ1Y7eUJBQU0sSUFBSSxNQUFNLElBQUksTUFBTSxLQUFLLEtBQUssSUFBSSxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFO3dCQUN0RixPQUFPLENBQUMsQ0FBQztxQkFDVjt5QkFBTSxJQUFJLE1BQU0sSUFBSSxNQUFNLEtBQUssSUFBSSxJQUFJLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUU7d0JBQ25GLE9BQU8sQ0FBQyxDQUFDO3FCQUNWO3lCQUFNLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUU7d0JBQzlELE9BQU8sQ0FBQyxDQUFDO3FCQUNWO2lCQUNGO2FBQ0Y7Ozs7OztRQUdELDhCQUFhOzs7O1lBQWIsVUFBYyxRQUFpQjtnQkFDN0IsSUFBSSxJQUFJLENBQUMsbUJBQW1CLEVBQUU7b0JBQzVCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLEVBQUU7d0JBQ3ZDLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO3FCQUM3QjtvQkFFRCxJQUFJLFFBQVEsRUFBRTt3QkFDWixPQUFPLElBQUksQ0FBQyxvQkFBb0IsQ0FBQztxQkFDbEM7eUJBQU07d0JBQ0wsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO3FCQUM1QjtpQkFDRjtxQkFBTTtvQkFDTCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxFQUFFO3dCQUN2QyxJQUFJLENBQUMsY0FBYyxHQUFHLFNBQVMsQ0FBQztxQkFDakM7b0JBRUQsT0FBTyxJQUFJLENBQUMsb0JBQW9CLElBQUksUUFBUTt3QkFDMUMsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQyxjQUFjLENBQUM7aUJBQ25EO2FBQ0Y7Ozs7Ozs7UUFNRCxtQ0FBa0I7Ozs7WUFBbEIsVUFBbUIsUUFBa0I7Z0JBQ25DLElBQUksSUFBSSxDQUFDLG1CQUFtQixFQUFFO29CQUM1QixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxFQUFFO3dCQUN2QyxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztxQkFDN0I7b0JBQ0QsSUFBSSxRQUFRLEVBQUU7d0JBQ1osT0FBTyxJQUFJLENBQUMseUJBQXlCLENBQUM7cUJBQ3ZDO3lCQUFNO3dCQUNMLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDO3FCQUNqQztpQkFDRjtxQkFBTTtvQkFDTCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxxQkFBcUIsQ0FBQyxFQUFFO3dCQUM1QyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsU0FBUyxDQUFDO3FCQUN0QztvQkFFRCxPQUFPLElBQUksQ0FBQyx5QkFBeUIsSUFBSSxRQUFRO3dCQUMvQyxJQUFJLENBQUMseUJBQXlCLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDO2lCQUM3RDthQUNGOzs7OztRQUVELGlDQUFnQjs7OztZQUFoQixVQUFpQixRQUFrQjtnQkFDakMsSUFBSSxJQUFJLENBQUMsbUJBQW1CLEVBQUU7b0JBQzVCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLEVBQUU7d0JBQ3ZDLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO3FCQUM3QjtvQkFDRCxJQUFJLFFBQVEsRUFBRTt3QkFDWixPQUFPLElBQUksQ0FBQyx1QkFBdUIsQ0FBQztxQkFDckM7eUJBQU07d0JBQ0wsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUM7cUJBQy9CO2lCQUNGO3FCQUFNO29CQUNMLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLG1CQUFtQixDQUFDLEVBQUU7d0JBQzFDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxTQUFTLENBQUM7cUJBQ3BDO29CQUVELE9BQU8sSUFBSSxDQUFDLHVCQUF1QixJQUFJLFFBQVE7d0JBQzdDLElBQUksQ0FBQyx1QkFBdUIsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUM7aUJBQ3pEO2FBQ0Y7Ozs7O1FBRUQscUJBQUk7Ozs7WUFBSixVQUFLLEtBQWE7OztnQkFHaEIsT0FBTyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQzthQUM5Qzs7Ozs7OztRQUVELHlCQUFROzs7Ozs7WUFBUixVQUFTLEtBQWEsRUFBRSxPQUFlLEVBQUUsT0FBZ0I7Z0JBQ3ZELElBQUksS0FBSyxHQUFHLEVBQUUsRUFBRTtvQkFDZCxPQUFPLE9BQU8sR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDO2lCQUM5QjtnQkFFRCxPQUFPLE9BQU8sR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDO2FBQzlCOzs7OztRQUVELCtCQUFjOzs7O1lBQWQsVUFBZSxHQUFXO2dCQUN4QixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLGVBQWUsR0FBRyxxQkFBcUIsQ0FBQztnQkFDM0YscUJBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ3pDLHFCQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO2dCQUU1RCxJQUFJLE1BQU0sSUFBSSxDQUFDLFdBQVcsRUFBRTtvQkFDMUIsT0FBTyxNQUFNLENBQUM7aUJBQ2Y7Z0JBRUQsSUFBSSxDQUFDLGVBQWUsQ0FDbEIsR0FBRyxDQUNGLEdBQUcsV0FBVyxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsRUFBRSxVQUFDLEdBQVc7b0JBQ3hELE9BQU8sR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDckIsQ0FBQyxDQUFDO2dCQUVILE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUNsQzs7Ozs7OztRQUVPLHVDQUFzQjs7Ozs7O3NCQUFDLFNBQWlCLEVBQUUsTUFBYyxFQUFFLE1BQWdCO2dCQUNoRixxQkFBTSxHQUFHLEdBQUcsU0FBUyxDQUFDLGlCQUFpQixFQUFFLENBQUM7Z0JBQzFDLHFCQUFJLENBQUMsQ0FBQztnQkFDTixxQkFBSSxFQUFFLENBQUM7Z0JBQ1AscUJBQUksR0FBRyxDQUFDO2dCQUNSLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFOztvQkFFdEIsSUFBSSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUM7b0JBQ3ZCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxFQUFFLENBQUM7b0JBQzNCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxFQUFFLENBQUM7b0JBQzVCLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFO3dCQUN2QixHQUFHLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO3dCQUN4QixJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUMsaUJBQWlCLEVBQUUsQ0FBQzt3QkFDMUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDLGlCQUFpQixFQUFFLENBQUM7cUJBQ3JFO2lCQUNGO2dCQUVELElBQUksTUFBTSxFQUFFO29CQUNWLElBQUksTUFBTSxLQUFLLEtBQUssRUFBRTt3QkFDcEIsRUFBRSxHQUFHLEVBQUMsSUFBSSxDQUFDLGlCQUE2QixHQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQzt3QkFFdkQsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQztxQkFDOUI7b0JBQ0QsRUFBRSxHQUFHLEVBQUMsSUFBSSxDQUFDLGdCQUE0QixHQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFFdEQsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQztpQkFDOUI7Z0JBRUQsSUFBSSxNQUFNLEtBQUssS0FBSyxFQUFFO29CQUNwQixFQUFFLEdBQUcsRUFBQyxJQUFJLENBQUMsaUJBQTZCLEdBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUN2RCxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUMsRUFBRTt3QkFDYixPQUFPLEVBQUUsQ0FBQztxQkFDWDtvQkFFRCxFQUFFLEdBQUcsRUFBQyxJQUFJLENBQUMsZ0JBQTRCLEdBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUV0RCxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDO2lCQUM5QjtnQkFFRCxFQUFFLEdBQUcsRUFBQyxJQUFJLENBQUMsZ0JBQTRCLEdBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUN0RCxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUMsRUFBRTtvQkFDYixPQUFPLEVBQUUsQ0FBQztpQkFDWDtnQkFDRCxFQUFFLEdBQUcsRUFBQyxJQUFJLENBQUMsaUJBQTZCLEdBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUV2RCxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDOzs7Ozs7OztRQUd2QixzQ0FBcUI7Ozs7OztzQkFBQyxXQUFtQixFQUFFLE1BQWMsRUFBRSxNQUFlO2dCQUNoRixxQkFBSSxFQUFFLENBQUM7Z0JBQ1AscUJBQU0sR0FBRyxHQUFHLFdBQVcsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO2dCQUM1QyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRTtvQkFDeEIsSUFBSSxDQUFDLGNBQWMsR0FBRyxFQUFFLENBQUM7b0JBQ3pCLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxFQUFFLENBQUM7b0JBQzlCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxFQUFFLENBQUM7b0JBRTVCLHFCQUFJLENBQUMsU0FBQSxDQUFDO29CQUNOLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFO3dCQUN0QixxQkFBTSxJQUFJLEdBQUcsWUFBWSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQzt3QkFDdEUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsaUJBQWlCLEVBQUUsQ0FBQzt3QkFDdkUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUMsaUJBQWlCLEVBQUUsQ0FBQzt3QkFDM0UsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO3FCQUN0RTtpQkFDRjtnQkFFRCxJQUFJLENBQUMsT0FBTyxDQUFTLElBQUksQ0FBQyxjQUFjLENBQUM7dUJBQ3BDLENBQUMsT0FBTyxDQUFTLElBQUksQ0FBQyxtQkFBbUIsQ0FBQzt1QkFDMUMsQ0FBQyxPQUFPLENBQVMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEVBQUU7b0JBQzdDLE9BQU87aUJBQ1I7Z0JBRUQsSUFBSSxNQUFNLEVBQUU7b0JBQ1YsSUFBSSxNQUFNLEtBQUssTUFBTSxFQUFFO3dCQUNyQixFQUFFLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7d0JBRXRDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUM7cUJBQzlCO3lCQUFNLElBQUksTUFBTSxLQUFLLEtBQUssRUFBRTt3QkFDM0IsRUFBRSxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7d0JBRTNDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUM7cUJBQzlCO3lCQUFNO3dCQUNMLEVBQUUsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO3dCQUV6QyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDO3FCQUM5QjtpQkFDRjtxQkFBTTtvQkFDTCxJQUFJLE1BQU0sS0FBSyxNQUFNLEVBQUU7d0JBQ3JCLEVBQUUsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQzt3QkFDdEMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDLEVBQUU7NEJBQ2IsT0FBTyxFQUFFLENBQUM7eUJBQ1g7d0JBQ0QsRUFBRSxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7d0JBQzNDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQyxFQUFFOzRCQUNiLE9BQU8sRUFBRSxDQUFDO3lCQUNYO3dCQUNELEVBQUUsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO3dCQUV6QyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDO3FCQUM5Qjt5QkFBTSxJQUFJLE1BQU0sS0FBSyxLQUFLLEVBQUU7d0JBQzNCLEVBQUUsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO3dCQUMzQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUMsRUFBRTs0QkFDYixPQUFPLEVBQUUsQ0FBQzt5QkFDWDt3QkFDRCxFQUFFLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7d0JBQ3RDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQyxFQUFFOzRCQUNiLE9BQU8sRUFBRSxDQUFDO3lCQUNYO3dCQUNELEVBQUUsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO3dCQUV6QyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDO3FCQUM5Qjt5QkFBTTt3QkFDTCxFQUFFLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQzt3QkFDekMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDLEVBQUU7NEJBQ2IsT0FBTyxFQUFFLENBQUM7eUJBQ1g7d0JBQ0QsRUFBRSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO3dCQUN0QyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUMsRUFBRTs0QkFDYixPQUFPLEVBQUUsQ0FBQzt5QkFDWDt3QkFDRCxFQUFFLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQzt3QkFFM0MsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQztxQkFDOUI7aUJBQ0Y7Ozs7O1FBR0ssbUNBQWtCOzs7O2dCQUN4QixxQkFBTSxXQUFXLEdBQWEsRUFBRSxDQUFDO2dCQUNqQyxxQkFBTSxVQUFVLEdBQWEsRUFBRSxDQUFDO2dCQUNoQyxxQkFBTSxXQUFXLEdBQWEsRUFBRSxDQUFDO2dCQUNqQyxxQkFBSSxJQUFJLENBQUM7Z0JBRVQscUJBQUksQ0FBQyxDQUFDO2dCQUNOLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFOztvQkFFdkIsSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztvQkFDekIsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO29CQUM3QyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7b0JBQ3ZDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztvQkFDeEMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO2lCQUM5Qzs7O2dCQUdELFdBQVcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQzVCLFVBQVUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQzNCLFdBQVcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQzVCLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFO29CQUN2QixXQUFXLENBQUMsQ0FBQyxDQUFDLEdBQUcsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUM3QyxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUcsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUM1QztnQkFDRCxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRTtvQkFDdkIsV0FBVyxDQUFDLENBQUMsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDOUM7Z0JBRUQsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLE1BQU0sQ0FBQyxPQUFLLFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztnQkFDbkUsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7Z0JBQzNDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLE1BQU0sQ0FBQyxPQUFLLFVBQVUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztnQkFDeEUsSUFBSSxDQUFDLHVCQUF1QixHQUFHLElBQUksTUFBTSxDQUFDLE9BQUssV0FBVyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDOzs7OztRQUd4RSxxQ0FBb0I7Ozs7Z0JBQzFCLHFCQUFNLFNBQVMsR0FBRyxFQUFFLENBQUM7Z0JBQ3JCLHFCQUFNLFdBQVcsR0FBRyxFQUFFLENBQUM7Z0JBQ3ZCLHFCQUFNLFVBQVUsR0FBRyxFQUFFLENBQUM7Z0JBQ3RCLHFCQUFNLFdBQVcsR0FBRyxFQUFFLENBQUM7Z0JBRXZCLHFCQUFJLENBQUMsQ0FBQztnQkFDTixLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTs7O29CQUd0QixxQkFBTSxJQUFJLEdBQUcsWUFBWSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztvQkFDdEUscUJBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ3BDLHFCQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUN4QyxxQkFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDbEMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDckIsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFDekIsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDdkIsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDdkIsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFDekIsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztpQkFDekI7OztnQkFHRCxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUMxQixXQUFXLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUM1QixVQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUMzQixXQUFXLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUM1QixLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtvQkFDdEIsV0FBVyxDQUFDLENBQUMsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDN0MsVUFBVSxDQUFDLENBQUMsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDM0MsV0FBVyxDQUFDLENBQUMsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDOUM7Z0JBRUQsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLE1BQU0sQ0FBQyxPQUFLLFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztnQkFDckUsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxjQUFjLENBQUM7Z0JBQy9DLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDO2dCQUU3QyxJQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxNQUFNLENBQUMsT0FBSyxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7Z0JBQzFFLElBQUksQ0FBQyx5QkFBeUIsR0FBRyxJQUFJLE1BQU0sQ0FBQyxPQUFLLFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztnQkFDaEYsSUFBSSxDQUFDLHVCQUF1QixHQUFHLElBQUksTUFBTSxDQUFDLE9BQUssU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDOztxQkEvdEJoRjtRQWl1QkMsQ0FBQTtBQS9uQkQ7Ozs7O0lBaW9CQSxtQkFBbUIsQ0FBUyxFQUFFLENBQVM7UUFDckMsT0FBTyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUM7S0FDNUI7Ozs7OztBQ3J1QkQsSUFBTyxxQkFBTSxlQUFlLEdBQUc7UUFDN0IsT0FBTyxFQUFFLGVBQWU7UUFDeEIsT0FBTyxFQUFFLGtCQUFrQjtRQUMzQixRQUFRLEVBQUUsY0FBYztRQUN4QixPQUFPLEVBQUUsbUJBQW1CO1FBQzVCLFFBQVEsRUFBRSxxQkFBcUI7UUFDL0IsUUFBUSxFQUFFLEdBQUc7S0FDZCxDQUFDOzs7Ozs7QUNQRixJQVdPLHFCQUFNLGtCQUFrQixHQUFHLGNBQWMsQ0FBQztBQUVqRCxJQUFPLHFCQUFNLGlCQUFpQixHQUFHO1FBQy9CLEdBQUcsRUFBRSxDQUFDOztRQUNOLEdBQUcsRUFBRSxDQUFDO0tBQ1AsQ0FBQztBQUVGLElBQU8scUJBQU0sMEJBQTBCLEdBQUcsZUFBZSxDQUFDO0FBRTFELElBQU8scUJBQU0sbUJBQW1CLEdBQTRCO1FBQzFELE1BQU0sRUFBRyxPQUFPO1FBQ2hCLElBQUksRUFBSyxRQUFRO1FBQ2pCLENBQUMsRUFBSSxlQUFlO1FBQ3BCLEVBQUUsRUFBRyxZQUFZO1FBQ2pCLENBQUMsRUFBSSxVQUFVO1FBQ2YsRUFBRSxFQUFHLFlBQVk7UUFDakIsQ0FBQyxFQUFJLFNBQVM7UUFDZCxFQUFFLEVBQUcsVUFBVTtRQUNmLENBQUMsRUFBSSxPQUFPO1FBQ1osRUFBRSxFQUFHLFNBQVM7UUFDZCxDQUFDLEVBQUksU0FBUztRQUNkLEVBQUUsRUFBRyxXQUFXO1FBQ2hCLENBQUMsRUFBSSxRQUFRO1FBQ2IsRUFBRSxFQUFHLFVBQVU7S0FDaEIsQ0FBQztBQUVGLElBQU8scUJBQU0sVUFBVSxHQUFlO1FBQ3BDLFFBQVEsRUFBRSxlQUFlO1FBQ3pCLGNBQWMsRUFBRSxxQkFBcUI7UUFDckMsV0FBVyxFQUFFLGtCQUFrQjtRQUMvQixPQUFPLEVBQUUsY0FBYztRQUN2QixzQkFBc0IsRUFBRSw2QkFBNkI7UUFDckQsWUFBWSxFQUFFLG1CQUFtQjtRQUVqQyxNQUFNLEVBQUUsbUJBQW1CO1FBQzNCLFdBQVcsRUFBRSx3QkFBd0I7UUFFckMsSUFBSSxFQUFFLGlCQUFpQjtRQUV2QixRQUFRLEVBQUUscUJBQXFCO1FBQy9CLFdBQVcsRUFBRSx3QkFBd0I7UUFDckMsYUFBYSxFQUFFLDBCQUEwQjtRQUV6QyxhQUFhLEVBQUUsMEJBQTBCO0tBQzFDLENBQUM7Ozs7OztBQ3RERjs7Ozs7OztBQUVBLDJCQUFpQyxNQUFXLEVBQUUsTUFBVyxFQUFFLFdBQW9CO1FBQzdFLHFCQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ25ELHFCQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzNELHFCQUFJLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDZCxxQkFBSSxDQUFDLENBQUM7UUFDTixLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN4QixJQUFJLENBQUMsV0FBVyxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxNQUFNLENBQUMsQ0FBQyxDQUFDO29CQUNyQyxDQUFDLFdBQVcsSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQzVELEtBQUssRUFBRSxDQUFDO2FBQ1Q7U0FDRjtRQUVELE9BQU8sS0FBSyxHQUFHLFVBQVUsQ0FBQztLQUMzQjs7Ozs7O0FDaEJEOzs7QUFlQTtRQUNFLGNBQWMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxFQUFFLElBQUksRUFDeEMsVUFBUyxJQUFVLEVBQUUsSUFBMEI7WUFDN0MsT0FBTyxPQUFPLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUM7aUJBQzlCLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUNqQixDQUNGLENBQUM7UUFFRixjQUFjLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxLQUFLLENBQUMsRUFBRSxJQUFJLEVBQ3hDLFVBQVMsSUFBVTtZQUNqQixPQUFPLFVBQVUsQ0FBQyxJQUFJLENBQUM7aUJBQ3BCLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUNqQixDQUNGLENBQUM7O1FBSUYsWUFBWSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQztRQUMxQixZQUFZLENBQUMsU0FBUyxFQUFFLEdBQUcsQ0FBQyxDQUFDOztRQVM3QixhQUFhLENBQUMsR0FBRyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQzlCLGFBQWEsQ0FBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ3ZDLGFBQWEsQ0FBQyxHQUFHLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDOUIsYUFBYSxDQUFDLElBQUksRUFBRSxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFFdkMsaUJBQWlCLENBQ2YsQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsRUFDdEIsVUFBUyxLQUFhLEVBQUUsSUFBaUIsRUFBRSxNQUF5QixFQUFFLEtBQWE7WUFDakYsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBRXhDLE9BQU8sTUFBTSxDQUFDO1NBQ2YsQ0FDRixDQUFDOzs7OztLQU1IOzs7Ozs7O0FBUUQscUJBQXdCLElBQVUsRUFBRSxNQUFvQixFQUFFLEtBQWU7UUFBckMsdUJBQUE7WUFBQSxTQUFTLFNBQVMsRUFBRTs7UUFDdEQsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztLQUNqQzs7Ozs7O0FBYUQsd0JBQTJCLElBQVUsRUFBRSxLQUFlO1FBQ3BELE9BQU8sVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQztLQUMzQzs7Ozs7O0FDckZEOzs7QUFtQkE7UUFDRSxjQUFjLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxLQUFLLENBQUMsRUFBRSxJQUFJLEVBQ3pDLFVBQVUsSUFBVSxFQUFFLElBQTBCOztZQUU5QyxPQUFPLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxFQUFFLFFBQVEsRUFBRSxDQUFDO1NBQzFELENBQ0YsQ0FBQztRQUVGLGNBQWMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxFQUFFLElBQUksRUFDekMsVUFBVSxJQUFVOztZQUVsQixPQUFPLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsRUFBRSxRQUFRLEVBQUUsQ0FBQztTQUNoRCxDQUNGLENBQUM7UUFFRixzQkFBc0IsQ0FBQyxNQUFNLEVBQUUsb0JBQW9CLENBQUMsQ0FBQztRQUNyRCxzQkFBc0IsQ0FBQyxPQUFPLEVBQUUsb0JBQW9CLENBQUMsQ0FBQztRQUN0RCxzQkFBc0IsQ0FBQyxNQUFNLEVBQUUsdUJBQXVCLENBQUMsQ0FBQztRQUN4RCxzQkFBc0IsQ0FBQyxPQUFPLEVBQUUsdUJBQXVCLENBQUMsQ0FBQzs7UUFJekQsWUFBWSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMvQixZQUFZLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxDQUFDOztRQVVsQyxhQUFhLENBQUMsR0FBRyxFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBQ2hDLGFBQWEsQ0FBQyxHQUFHLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFDaEMsYUFBYSxDQUFDLElBQUksRUFBRSxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDdkMsYUFBYSxDQUFDLElBQUksRUFBRSxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDdkMsYUFBYSxDQUFDLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDekMsYUFBYSxDQUFDLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDekMsYUFBYSxDQUFDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDMUMsYUFBYSxDQUFDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFFMUMsaUJBQWlCLENBQUMsQ0FBQyxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxPQUFPLENBQUMsRUFDbEQsVUFBVSxLQUFLLEVBQUUsSUFBaUIsRUFBRSxNQUFNLEVBQUUsS0FBSztZQUMvQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7WUFFeEMsT0FBTyxNQUFNLENBQUM7U0FDZixDQUFDLENBQUM7UUFFTCxpQkFBaUIsQ0FBQyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsRUFBRSxVQUFVLEtBQUssRUFBRSxJQUFpQixFQUFFLE1BQU0sRUFBRSxLQUFLO1lBQy9FLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUV2QyxPQUFPLE1BQU0sQ0FBQztTQUNmLENBQUMsQ0FBQztLQUNKOzs7Ozs7SUFFRCxnQ0FBZ0MsS0FBYSxFQUFFLE1BQXVCO1FBQ3BFLGNBQWMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7S0FDbEU7Ozs7OztJQUVELDhCQUE4QixJQUFVLEVBQUUsSUFBMEI7UUFDbEUsT0FBTyxXQUFXLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztLQUNsRDs7Ozs7SUFFRCxpQ0FBaUMsSUFBVTtRQUN6QyxPQUFPLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztLQUN4Qzs7Ozs7OztBQWdCRCx5QkFBNEIsSUFBVSxFQUFFLE1BQW9CLEVBQUUsS0FBZTtRQUFyQyx1QkFBQTtZQUFBLFNBQVMsU0FBUyxFQUFFOztRQUMxRCxPQUFPLFVBQVUsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLGNBQWMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxjQUFjLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUM7S0FDdkY7Ozs7OztBQU1ELDRCQUErQixJQUFVLEVBQUUsS0FBZTtRQUN4RCxPQUFPLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUM7S0FDM0M7Ozs7OztBQy9HRDs7O0FBS0E7O1FBRUUsY0FBYyxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUM1QixVQUFTLElBQVUsRUFBRSxJQUEwQjtZQUM3QyxPQUFPLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxHQUFHLEVBQUUsQ0FBQztTQUNoQyxDQUNGLENBQUM7UUFDRixjQUFjLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQzdCLFVBQVMsSUFBVSxFQUFFLElBQTBCO1lBQzdDLE9BQU8sSUFBSSxDQUFDLEtBQUssR0FBRyw0QkFBNEIsR0FBRyxFQUFFLENBQUM7U0FDdkQsQ0FDRixDQUFDO0tBQ0g7Ozs7OztBQ2pCRDs7O0FBU0E7O1FBR0UsY0FBYyxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLFVBQVMsSUFBVTtZQUNqRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7aUJBQ2QsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQ2pCLENBQUMsQ0FBQztRQUNILGNBQWMsQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxVQUFTLElBQVU7WUFDakQsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFO2lCQUNsQixRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDakIsQ0FBQyxDQUFDOztRQUlILGFBQWEsQ0FBQyxHQUFHLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFDaEMsYUFBYSxDQUFDLEdBQUcsRUFBRSxjQUFjLENBQUMsQ0FBQztRQUVuQyxhQUFhLENBQUMsR0FBRyxFQUFFLFVBQVMsS0FBYSxFQUFFLEtBQWdCLEVBQUUsTUFBeUI7WUFDcEYsTUFBTSxDQUFDLEVBQUUsR0FBRyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7WUFFL0MsT0FBTyxNQUFNLENBQUM7U0FDZixDQUFDLENBQUM7UUFDSCxhQUFhLENBQUMsR0FBRyxFQUFFLFVBQVMsS0FBYSxFQUFFLEtBQWdCLEVBQUUsTUFBeUI7WUFDcEYsTUFBTSxDQUFDLEVBQUUsR0FBRyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUVuQyxPQUFPLE1BQU0sQ0FBQztTQUNmLENBQUMsQ0FBQztLQUNKOzs7Ozs7QUNwQ0Q7OztBQVVBOztRQUdFLGNBQWMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxFQUFFLElBQUksRUFDeEMsVUFBUyxJQUFVLEVBQUUsSUFBMEI7WUFDN0MsT0FBTyxVQUFVLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUM7aUJBQ2hDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUNqQixDQUNGLENBQUM7O1FBSUYsWUFBWSxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FBQzs7UUFRNUIsYUFBYSxDQUFDLEdBQUcsRUFBRSxTQUFTLENBQUMsQ0FBQztRQUM5QixhQUFhLENBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUN2QyxhQUFhLENBQUMsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUM7S0FDcEM7Ozs7OztBQ2pDRDs7O0FBYUE7O1FBR0UsY0FBYyxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUM1QixVQUFTLElBQVUsRUFBRSxJQUEwQjtZQUM3QyxPQUFPLFVBQVUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQztpQkFDaEMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQ2pCLENBQ0YsQ0FBQzs7UUFJRixZQUFZLENBQUMsU0FBUyxFQUFFLEdBQUcsQ0FBQyxDQUFDOztRQVE3QixhQUFhLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQzNCLGFBQWEsQ0FBQyxHQUFHLEVBQUUsVUFBUyxLQUFhLEVBQUUsS0FBZ0IsRUFBRSxNQUF5QjtZQUNwRixLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUV0QyxPQUFPLE1BQU0sQ0FBQztTQUNmLENBQUMsQ0FBQztLQUNKOzs7Ozs7QUFJRCx3QkFBMkIsSUFBVSxFQUFFLEtBQWE7UUFBYixzQkFBQTtZQUFBLGFBQWE7O1FBQ2xELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0tBQ25EOzs7Ozs7Ozs7Ozs7Ozs7O0lDL0JELDhCQUE4QixLQUFhLEVBQUUsU0FBaUI7UUFDNUQsY0FBYyxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLFVBQVUsSUFBVSxFQUFFLE1BQU07WUFDNUQscUJBQUksTUFBTSxHQUFHLFlBQVksQ0FBQyxJQUFJLEVBQUUsRUFBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsTUFBTSxDQUFDLE1BQU0sRUFBQyxDQUFDLENBQUM7WUFDaEYscUJBQUksSUFBSSxHQUFHLEdBQUcsQ0FBQztZQUNmLElBQUksTUFBTSxHQUFHLENBQUMsRUFBRTtnQkFDZCxNQUFNLEdBQUcsQ0FBQyxNQUFNLENBQUM7Z0JBQ2pCLElBQUksR0FBRyxHQUFHLENBQUM7YUFDWjtZQUVELE9BQU8sSUFBSSxHQUFHLFFBQVEsQ0FBQyxDQUFDLEVBQUUsTUFBTSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLFNBQVMsR0FBRyxRQUFRLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUN2RixDQUFDLENBQUM7S0FDSjs7OztBQUVEO1FBQ0Usb0JBQW9CLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQy9CLG9CQUFvQixDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQzs7UUFJL0IsYUFBYSxDQUFDLEdBQUcsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ3JDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztRQUN0QyxhQUFhLENBQUMsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLEVBQUUsVUFBUyxLQUFhLEVBQUUsS0FBZ0IsRUFBRSxNQUF5QjtZQUM1RixNQUFNLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztZQUN0QixNQUFNLENBQUMsSUFBSSxHQUFHLGdCQUFnQixDQUFDLGdCQUFnQixFQUFFLEtBQUssQ0FBQyxDQUFDO1lBRXhELE9BQU8sTUFBTSxDQUFDO1NBQ2YsQ0FBQyxDQUFDO0tBQ0o7Ozs7O0lBT0QscUJBQU0sV0FBVyxHQUFHLGlCQUFpQixDQUFDOzs7Ozs7SUFFdEMsMEJBQTBCLE9BQWUsRUFBRSxHQUFXO1FBQ3BELHFCQUFNLE9BQU8sR0FBRyxDQUFDLEdBQUcsSUFBSSxFQUFFLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRTNDLElBQUksT0FBTyxLQUFLLElBQUksRUFBRTtZQUNwQixPQUFPLElBQUksQ0FBQztTQUNiO1FBRUQscUJBQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzFDLHFCQUFNLEtBQUssR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUMxRCxxQkFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzlELHFCQUFNLElBQUksR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxHQUFHLE9BQU8sR0FBRyxDQUFDLE9BQU8sQ0FBQztRQUVuRCxPQUFPLE9BQU8sS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQztLQUNqQzs7Ozs7OztBQUdELDZCQUFnQyxLQUFXLEVBQUUsSUFBVSxFQUN2QixNQUE4QjtRQUE5Qix1QkFBQTtZQUFBLFdBQThCOztRQUM1RCxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRTtZQUNsQixPQUFPLEtBQUssQ0FBQztTQUNkO1FBRUQscUJBQU0sR0FBRyxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQzs7UUFFNUIscUJBQU0sVUFBVSxHQUFHLENBQUMsTUFBTSxDQUFDLE9BQU8sSUFBSSxDQUFDLElBQUksS0FBSyxDQUFDO1FBQ2pELHFCQUFNLElBQUksR0FBRyxLQUFLLENBQUMsT0FBTyxFQUFFLEdBQUcsR0FBRyxDQUFDLE9BQU8sRUFBRSxHQUFHLFVBQVUsQ0FBQzs7UUFFMUQsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUM7OztRQUlsQyxPQUFPLEdBQUcsQ0FBQztLQUNaOzs7OztBQUVELDJCQUE4QixJQUFVOzs7UUFHdEMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDO0tBQ3hEOzs7Ozs7QUFzQkQsMEJBQTZCLElBQVUsRUFBRSxNQUE4QjtRQUE5Qix1QkFBQTtZQUFBLFdBQThCOztRQUNyRSxxQkFBTSxPQUFPLEdBQUcsTUFBTSxDQUFDLE9BQU8sSUFBSSxDQUFDLENBQUM7UUFFcEMsT0FBTyxNQUFNLENBQUMsTUFBTSxHQUFHLE9BQU8sR0FBRyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDdEQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xIRDs7O0FBVUE7O1FBR0UsY0FBYyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsS0FBSyxDQUFDLEVBQUUsSUFBSSxFQUN4QyxVQUFTLElBQVUsRUFBRSxJQUEwQjtZQUM3QyxPQUFPLFVBQVUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQztpQkFDaEMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQ2pCLENBQ0YsQ0FBQzs7UUFJRixZQUFZLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxDQUFDOztRQVE1QixhQUFhLENBQUMsR0FBRyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQzlCLGFBQWEsQ0FBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ3ZDLGFBQWEsQ0FBQyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQztLQUNwQzs7Ozs7Ozs7O0FDbEJEO1FBQ0UsY0FBYyxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUM1QixVQUFTLElBQVUsRUFBRSxJQUEwQjtZQUM3QyxPQUFPLENBQUMsQ0FBQyxFQUFFLGVBQWUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUNuRSxDQUNGLENBQUM7UUFFRixjQUFjLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxLQUFLLENBQUMsRUFBRSxJQUFJLEVBQ3pDLFVBQVMsSUFBVSxFQUFFLElBQTBCO1lBQzdDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsZUFBZSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQ2xFLENBQ0YsQ0FBQztRQUVGLGNBQWMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxFQUFFLElBQUksRUFDMUMsVUFBUyxJQUFVLEVBQUUsSUFBMEI7WUFDN0MsT0FBTyxDQUFDLGVBQWUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUN6RCxDQUNGLENBQUM7UUFDRixjQUFjLENBQUMsSUFBSSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxLQUFLLENBQUMsRUFBRSxJQUFJLEVBQzNDLFVBQVMsSUFBVSxFQUFFLElBQTBCO1lBQzdDLE9BQU8sQ0FBQyxlQUFlLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLEVBQUUsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQzlELENBQ0YsQ0FBQztRQUNGLGNBQWMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxFQUFFLElBQUksRUFDNUMsVUFBUyxJQUFVLEVBQUUsSUFBMEI7WUFDN0MsT0FBTyxDQUFDLGVBQWUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsRUFBRSxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDL0QsQ0FDRixDQUFDO1FBQ0YsY0FBYyxDQUFDLElBQUksRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsS0FBSyxDQUFDLEVBQUUsSUFBSSxFQUM3QyxVQUFTLElBQVUsRUFBRSxJQUEwQjtZQUM3QyxPQUFPLENBQUMsZUFBZSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxFQUFFLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUNoRSxDQUNGLENBQUM7UUFDRixjQUFjLENBQUMsSUFBSSxFQUFFLENBQUMsU0FBUyxFQUFFLENBQUMsRUFBRSxLQUFLLENBQUMsRUFBRSxJQUFJLEVBQzlDLFVBQVMsSUFBVSxFQUFFLElBQTBCO1lBQzdDLE9BQU8sQ0FBQyxlQUFlLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxLQUFLLEVBQUUsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQ2pFLENBQ0YsQ0FBQztRQUNGLGNBQWMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxFQUFFLElBQUksRUFDL0MsVUFBUyxJQUFVLEVBQUUsSUFBMEI7WUFDN0MsT0FBTyxDQUFDLGVBQWUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLE1BQU0sRUFBRSxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDbEUsQ0FDRixDQUFDO1FBQ0YsY0FBYyxDQUFDLElBQUksRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDLEVBQUUsS0FBSyxDQUFDLEVBQUUsSUFBSSxFQUNoRCxVQUFTLElBQVUsRUFBRSxJQUEwQjtZQUM3QyxPQUFPLENBQUMsZUFBZSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsT0FBTyxFQUFFLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUNuRSxDQUNGLENBQUM7O1FBS0YsWUFBWSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsQ0FBQzs7UUFRbEMsYUFBYSxDQUFDLEdBQUcsRUFBRSxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDdEMsYUFBYSxDQUFDLElBQUksRUFBRSxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDdkMsYUFBYSxDQUFDLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFFeEMscUJBQUksS0FBSyxDQUFDO1FBQ1YsS0FBSyxLQUFLLEdBQUcsTUFBTSxFQUFFLEtBQUssQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFLEtBQUssSUFBSSxHQUFHLEVBQUU7WUFDcEQsYUFBYSxDQUFDLEtBQUssRUFBRSxhQUFhLENBQUMsQ0FBQztTQUNyQzs7Ozs7OztRQUVELGlCQUFpQixLQUFhLEVBQUUsS0FBZ0IsRUFBRSxNQUF5QjtZQUN6RSxLQUFLLENBQUMsV0FBVyxDQUFDLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FBQyxPQUFLLEtBQU8sQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO1lBRTVELE9BQU8sTUFBTSxDQUFDO1NBQ2Y7UUFFRCxLQUFLLEtBQUssR0FBRyxHQUFHLEVBQUUsS0FBSyxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUUsS0FBSyxJQUFJLEdBQUcsRUFBRTtZQUNqRCxhQUFhLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1NBQy9COztLQUVGOzs7Ozs7QUM5RkQ7OztBQWVBOzs7Ozs7UUFHRSxpQkFBaUIsSUFBVSxFQUFFLEtBQWM7WUFDekMsT0FBTyxRQUFRLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLENBQUM7U0FDekM7Ozs7OztRQUVELGlCQUFpQixJQUFVLEVBQUUsS0FBYztZQUN6QyxPQUFPLFFBQVEsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ3BDO1FBRUQsY0FBYyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsS0FBSyxDQUFDLEVBQUUsSUFBSSxFQUN4QyxVQUFTLElBQVUsRUFBRSxJQUEwQjtZQUM3QyxPQUFPLFFBQVEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQztpQkFDOUIsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQ2pCLENBQ0YsQ0FBQztRQUNGLGNBQWMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxFQUFFLElBQUksRUFDeEMsVUFBUyxJQUFVLEVBQUUsSUFBMEI7WUFDN0MsT0FBTyxPQUFPLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUM7aUJBQzdCLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUNqQixDQUNGLENBQUM7UUFDRixjQUFjLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxLQUFLLENBQUMsRUFBRSxJQUFJLEVBQ3hDLFVBQVMsSUFBVSxFQUFFLElBQTBCO1lBQzdDLE9BQU8sT0FBTyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDO2lCQUM3QixRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDakIsQ0FDRixDQUFDO1FBRUYsY0FBYyxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUM5QixVQUFTLElBQVUsRUFBRSxJQUEwQjtZQUM3QyxxQkFBTSxFQUFFLEdBQUcsT0FBTyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDckMscUJBQU0sR0FBRyxHQUFHLFFBQVEsQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUV0RCxPQUFPLEtBQUcsRUFBRSxHQUFHLEdBQUssQ0FBQztTQUN0QixDQUNGLENBQUM7UUFFRixjQUFjLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQ2hDLFVBQVMsSUFBVSxFQUFFLElBQTBCO1lBQzdDLHFCQUFNLEVBQUUsR0FBRyxPQUFPLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNyQyxxQkFBTSxHQUFHLEdBQUcsUUFBUSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3RELHFCQUFNLEdBQUcsR0FBRyxRQUFRLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFFdEQsT0FBTyxLQUFHLEVBQUUsR0FBRyxHQUFHLEdBQUcsR0FBSyxDQUFDO1NBQzVCLENBQ0YsQ0FBQztRQUVGLGNBQWMsQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLElBQUksRUFDOUIsVUFBUyxJQUFVLEVBQUUsSUFBMEI7WUFDN0MscUJBQU0sRUFBRSxHQUFHLFFBQVEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3RDLHFCQUFNLEdBQUcsR0FBRyxRQUFRLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFFdEQsT0FBTyxLQUFHLEVBQUUsR0FBRyxHQUFLLENBQUM7U0FDdEIsQ0FDRixDQUFDO1FBRUYsY0FBYyxDQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUNoQyxVQUFTLElBQVUsRUFBRSxJQUEwQjtZQUM3QyxxQkFBTSxFQUFFLEdBQUcsUUFBUSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDdEMscUJBQU0sR0FBRyxHQUFHLFFBQVEsQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUN0RCxxQkFBTSxHQUFHLEdBQUcsUUFBUSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBRXRELE9BQU8sS0FBRyxFQUFFLEdBQUcsR0FBRyxHQUFHLEdBQUssQ0FBQztTQUM1QixDQUNGLENBQUM7Ozs7OztRQUVGLGtCQUFrQixLQUFhLEVBQUUsU0FBa0I7WUFDakQsY0FBYyxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUM5QixVQUFTLElBQVUsRUFBRSxJQUEwQjtnQkFDN0MsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxVQUFVLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxTQUFTLENBQUMsQ0FBQzthQUNsRyxDQUNGLENBQUM7U0FDSDtRQUVELFFBQVEsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDcEIsUUFBUSxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQzs7UUFJckIsWUFBWSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQzs7Ozs7O1FBUTFCLHVCQUF1QixRQUFpQixFQUFFLE1BQWM7WUFDdEQsT0FBTyxNQUFNLENBQUMsY0FBYyxDQUFDO1NBQzlCO1FBRUQsYUFBYSxDQUFDLEdBQUcsRUFBRSxhQUFhLENBQUMsQ0FBQztRQUNsQyxhQUFhLENBQUMsR0FBRyxFQUFFLGFBQWEsQ0FBQyxDQUFDO1FBQ2xDLGFBQWEsQ0FBQyxHQUFHLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDOUIsYUFBYSxDQUFDLEdBQUcsRUFBRSxTQUFTLENBQUMsQ0FBQztRQUM5QixhQUFhLENBQUMsR0FBRyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQzlCLGFBQWEsQ0FBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ3ZDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ3ZDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBRXZDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDaEMsYUFBYSxDQUFDLE9BQU8sRUFBRSxTQUFTLENBQUMsQ0FBQztRQUNsQyxhQUFhLENBQUMsS0FBSyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQ2hDLGFBQWEsQ0FBQyxPQUFPLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFFbEMsYUFBYSxDQUFDLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2pDLGFBQWEsQ0FDWCxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsRUFDWCxVQUFTLEtBQWEsRUFBRSxLQUFnQixFQUFFLE1BQXlCO1lBQ2pFLHFCQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDNUIsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLE1BQU0sS0FBSyxFQUFFLEdBQUcsQ0FBQyxHQUFHLE1BQU0sQ0FBQztZQUV6QyxPQUFPLE1BQU0sQ0FBQztTQUNmLENBQ0YsQ0FBQztRQUNGLGFBQWEsQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBRSxVQUFTLEtBQWEsRUFBRSxLQUFnQixFQUFFLE1BQXlCO1lBQzNGLE1BQU0sQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDMUMsTUFBTSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7WUFFekIsT0FBTyxNQUFNLENBQUM7U0FDZixDQUFDLENBQUM7UUFDSCxhQUFhLENBQUMsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLEVBQUUsVUFBUyxLQUFhLEVBQUUsS0FBZ0IsRUFBRSxNQUF5QjtZQUM1RixLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzNCLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1lBRXZDLE9BQU8sTUFBTSxDQUFDO1NBQ2YsQ0FBQyxDQUFDO1FBQ0gsYUFBYSxDQUFDLEtBQUssRUFBRSxVQUFTLEtBQWEsRUFBRSxLQUFnQixFQUFFLE1BQXlCO1lBQ3RGLHFCQUFNLEdBQUcsR0FBRyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztZQUM3QixLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDMUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDekMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7WUFFdkMsT0FBTyxNQUFNLENBQUM7U0FDZixDQUFDLENBQUM7UUFDSCxhQUFhLENBQUMsT0FBTyxFQUFFLFVBQVMsS0FBYSxFQUFFLEtBQWdCLEVBQUUsTUFBeUI7WUFDeEYscUJBQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1lBQzlCLHFCQUFNLElBQUksR0FBRyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztZQUM5QixLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDM0MsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzdDLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQzFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1lBRXZDLE9BQU8sTUFBTSxDQUFDO1NBQ2YsQ0FBQyxDQUFDO1FBQ0gsYUFBYSxDQUFDLEtBQUssRUFBRSxVQUFTLEtBQWEsRUFBRSxLQUFnQixFQUFFLE1BQXlCO1lBQ3RGLHFCQUFNLEdBQUcsR0FBRyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztZQUM3QixLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDMUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFFekMsT0FBTyxNQUFNLENBQUM7U0FDZixDQUFDLENBQUM7UUFDSCxhQUFhLENBQUMsT0FBTyxFQUFFLFVBQVMsS0FBYSxFQUFFLEtBQWdCLEVBQUUsTUFBeUI7WUFDeEYscUJBQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1lBQzlCLHFCQUFNLElBQUksR0FBRyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztZQUM5QixLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDM0MsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzdDLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBRTFDLE9BQU8sTUFBTSxDQUFDO1NBQ2YsQ0FBQyxDQUFDO0tBRUo7Ozs7OztBQ2xMRCxJQXFCQSxxQkFBTSxPQUFPLEdBQThCLEVBQUUsQ0FBQztJQUM5QyxxQkFBTSxjQUFjLEdBQTRELEVBQUUsQ0FBQztJQUNuRixxQkFBSSxZQUFvQixDQUFDOzs7OztJQUV6Qix5QkFBeUIsR0FBVztRQUNsQyxPQUFPLEdBQUcsR0FBRyxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7S0FDeEQ7Ozs7O0lBTUQsc0JBQXNCLEtBQWU7UUFDbkMscUJBQUksSUFBSSxDQUFDO1FBQ1QscUJBQUksTUFBTSxDQUFDO1FBQ1gscUJBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUVWLE9BQU8sQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUU7WUFDdkIscUJBQU0sS0FBSyxHQUFHLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDbkQscUJBQUksQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUM7WUFDckIsSUFBSSxHQUFHLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDckMsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQztZQUNyQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQ1osTUFBTSxHQUFHLFVBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDakQsSUFBSSxNQUFNLEVBQUU7b0JBQ1YsT0FBTyxNQUFNLENBQUM7aUJBQ2Y7Z0JBQ0QsSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLElBQUksYUFBYSxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRTs7b0JBRXpFLE1BQU07aUJBQ1A7Z0JBQ0QsQ0FBQyxFQUFFLENBQUM7YUFDTDtZQUNELENBQUMsRUFBRSxDQUFDO1NBQ0w7UUFFRCxPQUFPLElBQUksQ0FBQztLQUNiOzs7Ozs7QUFFRCwwQkFBNkIsWUFBd0IsRUFDeEIsV0FBdUI7UUFDbEQscUJBQU0sR0FBRyxHQUFlLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLFlBQVksQ0FBQyxDQUFDO1FBRXhELEtBQUsscUJBQU0sU0FBUyxJQUFJLFdBQVcsRUFBRTtZQUNuQyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRSxTQUFTLENBQUMsRUFBRTtnQkFDdkMsU0FBUzthQUNWO1lBQ0QsSUFBSSxRQUFRLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksUUFBUSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFO2dCQUN6RSxHQUFHLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDO2dCQUNwQixNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsRUFBRSxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztnQkFDdkQsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLEVBQUUsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7YUFDdkQ7aUJBQU0sSUFBSSxXQUFXLENBQUMsU0FBUyxDQUFDLElBQUksSUFBSSxFQUFFO2dCQUN6QyxHQUFHLENBQUMsU0FBUyxDQUFDLEdBQUcsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDO2FBQ3pDO2lCQUFNO2dCQUNMLE9BQU8sR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO2FBQ3ZCO1NBQ0Y7UUFDRCxxQkFBSSxVQUFVLENBQUM7UUFDZixLQUFLLFVBQVUsSUFBSSxZQUFZLEVBQUU7WUFDL0IsSUFDRSxVQUFVLENBQUMsWUFBWSxFQUFFLFVBQVUsQ0FBQztnQkFDcEMsQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFLFVBQVUsQ0FBQztnQkFDcEMsUUFBUSxDQUFDLFlBQVksRUFBQyxVQUE4QixFQUFDLENBQ3ZELEVBQUU7O2dCQUVBLEdBQUcsRUFBQyxVQUE4QixFQUFDLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsR0FBRyxFQUFDLFVBQThCLEVBQUMsQ0FBQyxDQUFDO2FBQzlGO1NBQ0Y7UUFFRCxPQUFPLEdBQUcsQ0FBQztLQUNaOzs7OztJQUdELG9CQUFvQixJQUFZOzs7Ozs7Ozs7Ozs7O1FBYTlCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7O1lBRWxCLE9BQU8sQ0FBQyxLQUFLLENBQUMsZ0RBQTZDLElBQUksdUJBQW1CLENBQUMsQ0FBQzs7U0FFckY7UUFFRCxPQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUN0Qjs7Ozs7O0FBS0QsZ0NBQW1DLEdBQXVCLEVBQUUsTUFBbUI7UUFDN0UscUJBQUksSUFBWSxDQUFDO1FBRWpCLElBQUksR0FBRyxFQUFFO1lBQ1AsSUFBSSxXQUFXLENBQUMsTUFBTSxDQUFDLEVBQUU7Z0JBQ3ZCLElBQUksR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDdkI7aUJBQU0sSUFBSSxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQ3hCLElBQUksR0FBRyxZQUFZLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxDQUFDO2FBQ2xDO1lBRUQsSUFBSSxJQUFJLEVBQUU7Z0JBQ1IsWUFBWSxHQUFHLElBQUksQ0FBQzthQUNyQjtTQUNGO1FBRUQsT0FBTyxZQUFZLElBQUksWUFBWSxDQUFDLEtBQUssQ0FBQztLQUMzQzs7Ozs7O0FBRUQsMEJBQTZCLElBQVksRUFBRSxNQUFtQjtRQUM1RCxJQUFJLE1BQU0sS0FBSyxJQUFJLEVBQUU7O1lBRW5CLE9BQU8sT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3JCLFlBQVksR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7WUFFL0IsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUVELElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDWCxPQUFPO1NBQ1I7UUFFRCxxQkFBSSxZQUFZLEdBQUcsVUFBVSxDQUFDO1FBQzlCLE1BQU0sQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ25CLElBQUksTUFBTSxDQUFDLFlBQVksSUFBSSxJQUFJLEVBQUU7WUFDL0IsSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxJQUFJLElBQUksRUFBRTtnQkFDeEMsWUFBWSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsT0FBTyxDQUFDO2FBQ3JEO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxFQUFFO29CQUN4QyxjQUFjLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQUUsQ0FBQztpQkFDMUM7Z0JBQ0QsY0FBYyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLE1BQUEsRUFBRSxNQUFNLFFBQUEsRUFBRSxDQUFDLENBQUM7Z0JBRTNELE9BQU8sSUFBSSxDQUFDO2FBQ2I7U0FDRjtRQUVELE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLE1BQU0sQ0FBQyxZQUFZLENBQUMsWUFBWSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFFL0QsSUFBSSxjQUFjLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDeEIsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUM7Z0JBQ3RDLFlBQVksQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUNoQyxDQUFDLENBQUM7U0FDSjs7OztRQUtELGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBR3pCLE9BQU8sT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ3RCOzs7Ozs7QUFFRCwwQkFBNkIsSUFBWSxFQUFFLE1BQW1CO1FBQzVELHFCQUFJLE9BQU8sR0FBRyxNQUFNLENBQUM7UUFFckIsSUFBSSxPQUFPLElBQUksSUFBSSxFQUFFO1lBQ25CLHFCQUFJLFlBQVksR0FBRyxVQUFVLENBQUM7O1lBRTlCLHFCQUFNLFNBQVMsR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbkMsSUFBSSxTQUFTLElBQUksSUFBSSxFQUFFO2dCQUNyQixZQUFZLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQzthQUNsQztZQUNELE9BQU8sR0FBRyxZQUFZLENBQUMsWUFBWSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBQzlDLHFCQUFNLE1BQU0sR0FBRyxJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNuQyxNQUFNLENBQUMsWUFBWSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNwQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDOztZQUd2QixrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUMxQjthQUFNOztZQUVMLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksRUFBRTtnQkFDekIsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsWUFBWSxJQUFJLElBQUksRUFBRTtvQkFDdEMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxZQUFZLENBQUM7aUJBQzVDO3FCQUFNLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksRUFBRTtvQkFDaEMsT0FBTyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7aUJBQ3RCO2FBQ0Y7U0FDRjtRQUVELE9BQU8sT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ3RCOzs7OztBQUdELHVCQUEwQixHQUF1QjtRQUMvQyxnQkFBZ0IsRUFBRSxDQUFDO1FBRW5CLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDUixPQUFPLFlBQVksQ0FBQztTQUNyQjs7UUFFRCxxQkFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRXhDLE9BQU8sWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQzNCOzs7O0FBRUQ7UUFDRSxPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7S0FDN0I7Ozs7SUFFRDtRQUNFLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBRWpCLE9BQU8sU0FBUyxDQUFDO1NBQ2xCO1FBRUQsa0JBQWtCLENBQUMsSUFBSSxFQUFFO1lBQ3ZCLHNCQUFzQixFQUFFLHNCQUFzQjtZQUM5QyxPQUFPOzs7Z0JBQVAsVUFBUSxHQUFXO2dCQUNqQixxQkFBTSxDQUFDLEdBQUcsR0FBRyxHQUFHLEVBQUUsQ0FBQztnQkFDbkIscUJBQU0sTUFBTSxHQUNWLEtBQUssQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLElBQUksRUFBRSxDQUFDLEtBQUssQ0FBQztzQkFDekIsSUFBSTtzQkFDSixDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksR0FBRyxJQUFJLENBQUM7Z0JBRTlELE9BQU8sR0FBRyxHQUFHLE1BQU0sQ0FBQzthQUNyQjtTQUNGLENBQUMsQ0FBQztRQUVILFFBQVEsRUFBRSxDQUFDO1FBQ1gsWUFBWSxFQUFFLENBQUM7UUFDZixRQUFRLEVBQUUsQ0FBQztRQUNYLFlBQVksRUFBRSxDQUFDO1FBQ2YsYUFBYSxFQUFFLENBQUM7UUFDaEIsVUFBVSxFQUFFLENBQUM7UUFDYixXQUFXLEVBQUUsQ0FBQztRQUNkLFVBQVUsRUFBRSxDQUFDO1FBQ2IsU0FBUyxFQUFFLENBQUM7UUFDWixVQUFVLEVBQUUsQ0FBQztRQUNiLGVBQWUsRUFBRSxDQUFDO1FBQ2xCLFFBQVEsRUFBRSxDQUFDO1FBQ1gsYUFBYSxFQUFFLENBQUM7UUFDaEIsYUFBYSxFQUFFLENBQUM7UUFDaEIsY0FBYyxFQUFFLENBQUM7S0FDbEI7Ozs7OztBQ3pRRCxJQUtBLHFCQUFNLFFBQVEsR0FBeUIsQ0FBQyxNQUFNLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLGNBQWMsQ0FBQyxDQUFDO2FBQzdGLFVBQUMsR0FBK0IsRUFBRSxLQUFLO1FBQzFFLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUM7UUFFbEIsT0FBTyxHQUFHLENBQUM7S0FDWjtJQUpELHFCQUFNLFlBQVksR0FBRyxRQUFRLENBQUMsTUFBTSxLQUlqQyxFQUFFLENBQUMsQ0FBQzs7Ozs7QUFFUCw2QkFBZ0MsUUFBNkI7UUFDM0QscUJBQU0sWUFBWSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDM0MsSUFBSSxZQUFZO2FBQ1gsSUFBSSxDQUFDLFVBQUMsR0FBcUI7WUFDMUIsT0FBTyxDQUFDLEdBQUcsSUFBSSxZQUFZO21CQUN0QixRQUFRLENBQUMsR0FBRyxDQUFDLEtBQUssSUFBSTttQkFDdEIsS0FBSyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQzNCLENBQUMsRUFBRTtZQUNOLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7Ozs7OztRQU9ELHFCQUFJLGNBQWMsR0FBRyxLQUFLLENBQUM7UUFDM0IsS0FBSyxxQkFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxRQUFRLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxFQUFFO1lBQ3hDLElBQUksUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFOztnQkFFekIsSUFBSSxjQUFjLEVBQUU7b0JBQ2xCLE9BQU8sS0FBSyxDQUFDO2lCQUNkO2dCQUNELElBQUksUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEtBQUssQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtvQkFDMUQsY0FBYyxHQUFHLElBQUksQ0FBQztpQkFDdkI7YUFDRjtTQUNGO1FBRUQsT0FBTyxJQUFJLENBQUM7S0FDYjs7Ozs7Ozs7OztBQzFDRCxxQkFBeUIsTUFBYztRQUNyQyxPQUFPLE1BQU0sR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0tBQzVEOzs7Ozs7QUNERDs7OztBQUdBLG9CQUF1QixHQUFhO1FBQ2xDLHFCQUFJLFlBQVksR0FBRyxHQUFHLENBQUMsYUFBYSxDQUFDO1FBQ3JDLHFCQUFJLElBQUksR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDO1FBQ3JCLHFCQUFJLE1BQU0sR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDO1FBQ3pCLHFCQUFNLElBQUksR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDOzs7UUFJdkIsSUFBSSxFQUFFLENBQUMsWUFBWSxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLE1BQU0sSUFBSSxDQUFDO2FBQy9DLFlBQVksSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxNQUFNLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNwRCxZQUFZLElBQUksT0FBTyxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxLQUFLLENBQUM7WUFDN0QsSUFBSSxHQUFHLENBQUMsQ0FBQztZQUNULE1BQU0sR0FBRyxDQUFDLENBQUM7U0FDWjs7O1FBSUQsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLEdBQUcsSUFBSSxDQUFDO1FBRXhDLHFCQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxDQUFDO1FBQzlDLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUU1QixxQkFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFFNUIscUJBQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBRXhCLElBQUksSUFBSSxRQUFRLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxDQUFDOztRQUc3QixxQkFBTSxjQUFjLEdBQUcsUUFBUSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ3BELE1BQU0sSUFBSSxjQUFjLENBQUM7UUFDekIsSUFBSSxJQUFJLE9BQU8sQ0FBQyxZQUFZLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQzs7UUFHOUMscUJBQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDcEMsTUFBTSxJQUFJLEVBQUUsQ0FBQztRQUViLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO1FBRWxCLE9BQU8sR0FBRyxDQUFDO0tBQ1o7Ozs7O0FBRUQsMEJBQTZCLEdBQVc7OztRQUd0QyxPQUFPLEdBQUcsR0FBRyxJQUFJLEdBQUcsTUFBTSxDQUFDO0tBQzVCOzs7OztBQUVELDBCQUE2QixLQUFhOztRQUV4QyxPQUFPLEtBQUssR0FBRyxNQUFNLEdBQUcsSUFBSSxDQUFDO0tBQzlCOzs7Ozs7QUMxREQsSUFJQSxxQkFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztJQUN2QixxQkFBTSxVQUFVLEdBQThCO1FBQzVDLEVBQUUsRUFBRSxFQUFFOztRQUNOLENBQUMsRUFBRSxFQUFFOztRQUNMLENBQUMsRUFBRSxFQUFFOztRQUNMLENBQUMsRUFBRSxFQUFFOztRQUNMLENBQUMsRUFBRSxFQUFFOztRQUNMLENBQUMsRUFBRSxFQUFFO0tBQ04sQ0FBQzs7Ozs7Ozs7O0lBR0YsMkJBQTJCLEdBQXNCLEVBQUUsR0FBVyxFQUNuQyxhQUFzQixFQUFFLFFBQWlCLEVBQ3pDLE1BQWM7UUFDdkMsT0FBTyxNQUFNLENBQUMsWUFBWSxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLGFBQWEsRUFBRSxHQUFHLEVBQUUsUUFBUSxDQUFDLENBQUM7S0FDdEU7Ozs7Ozs7QUFFRCwwQkFBNkIsY0FBd0IsRUFBRSxhQUFzQixFQUFFLE1BQWM7UUFDM0YscUJBQU0sUUFBUSxHQUFHLGNBQWMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUN0RCxxQkFBTSxPQUFPLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUN4QyxxQkFBTSxPQUFPLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUN4QyxxQkFBTSxLQUFLLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUN0QyxxQkFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNyQyxxQkFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUN2QyxxQkFBTSxLQUFLLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUV0QyxxQkFBTSxDQUFDLEdBQ0wsT0FBTyxJQUFJLFVBQVUsTUFBRyxJQUFJLENBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQztZQUMxQyxPQUFPLEdBQUcsVUFBVSxLQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDO1lBQ3pDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7WUFDckIsT0FBTyxHQUFHLFVBQVUsS0FBRSxJQUFJLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQztZQUN6QyxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO1lBQ25CLEtBQUssR0FBRyxVQUFVLEtBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUM7WUFDckMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztZQUNsQixJQUFJLEdBQUcsVUFBVSxLQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDO1lBQ25DLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7WUFDcEIsTUFBTSxHQUFHLFVBQVUsS0FBRSxJQUFJLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQztZQUN2QyxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFFdkMscUJBQU0sQ0FBQyxHQUNMLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxhQUFhLEVBQUUsQ0FBQyxjQUFjLEdBQUcsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDOzs7O1FBSzNELE9BQU8saUJBQWlCLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztLQUN6Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuREQsSUFVQSxJQUFBO1FBUUUsa0JBQVksUUFBNkIsRUFBRSxNQUE4QjtZQUE5Qix1QkFBQTtnQkFBQSxXQUE4Qjs7eUJBSjVDLEVBQUU7MkJBQ2IsU0FBUyxFQUFFO1lBSTNCLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxJQUFJLE1BQU0sQ0FBQyxPQUFPLElBQUksU0FBUyxFQUFFLENBQUM7O1lBRXZELHFCQUFNLGVBQWUsR0FBRyxRQUFRLENBQUM7WUFDakMscUJBQU0sS0FBSyxHQUFHLGVBQWUsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDO1lBQ3hDLHFCQUFNLFFBQVEsR0FBRyxlQUFlLENBQUMsT0FBTyxJQUFJLENBQUMsQ0FBQztZQUM5QyxxQkFBTSxNQUFNLEdBQUcsZUFBZSxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUM7WUFDMUMscUJBQU0sS0FBSyxHQUFHLGVBQWUsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDO1lBQ3hDLHFCQUFNLElBQUksR0FBRyxlQUFlLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztZQUN0QyxxQkFBTSxLQUFLLEdBQUcsZUFBZSxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUM7WUFDekMscUJBQU0sT0FBTyxHQUFHLGVBQWUsQ0FBQyxPQUFPLElBQUksQ0FBQyxDQUFDO1lBQzdDLHFCQUFNLE9BQU8sR0FBRyxlQUFlLENBQUMsT0FBTyxJQUFJLENBQUMsQ0FBQztZQUM3QyxxQkFBTSxZQUFZLEdBQUcsZUFBZSxDQUFDLFlBQVksSUFBSSxDQUFDLENBQUM7WUFFdkQsSUFBSSxDQUFDLFFBQVEsR0FBRyxlQUFlLENBQUMsZUFBZSxDQUFDLENBQUM7O1lBR2pELElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxZQUFZO2dCQUNoQyxPQUFPLEdBQUcsSUFBSTtnQkFDZCxPQUFPLEdBQUcsRUFBRSxHQUFHLElBQUk7O2dCQUNuQixLQUFLLEdBQUcsSUFBSSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUM7Ozs7WUFJekIsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLElBQUk7Z0JBQ2hCLEtBQUssR0FBRyxDQUFDLENBQUM7Ozs7WUFJWixJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsTUFBTTtnQkFDcEIsUUFBUSxHQUFHLENBQUM7Z0JBQ1osS0FBSyxHQUFHLEVBQUUsQ0FBQzs7OztZQU9iLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3JCOzs7O1FBRUQsMEJBQU87OztZQUFQO2dCQUNFLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQzthQUN0Qjs7Ozs7UUFFRCwyQkFBUTs7OztZQUFSLFVBQVMsVUFBb0I7O2dCQUczQixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxFQUFFO29CQUNuQixPQUFPLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxXQUFXLENBQUM7aUJBQ3RDO2dCQUVELHFCQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7Z0JBQ2pDLHFCQUFJLE1BQU0sR0FBRyxZQUFZLENBQUMsSUFBSSxFQUFFLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBQyxDQUFDO2dCQUVyRCxJQUFJLFVBQVUsRUFBRTtvQkFDZCxNQUFNLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztpQkFDM0M7Z0JBRUQsT0FBTyxNQUFNLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQ2xDOzs7O1FBRUQsNkJBQVU7OztZQUFWO2dCQUNFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQzthQUNyQjs7Ozs7UUFJRCx5QkFBTTs7OztZQUFOLFVBQU8sU0FBa0I7Z0JBQ3ZCLElBQUksQ0FBQyxTQUFTLEVBQUU7b0JBQ2QsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztpQkFDM0I7Z0JBRUQsSUFBSSxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUMsU0FBUyxDQUFDLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQztnQkFFcEQsT0FBTyxJQUFJLENBQUM7YUFDYjs7OztRQUdELHNCQUFHOzs7WUFBSDtnQkFDRSxxQkFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQztnQkFFekIscUJBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7Z0JBRXhCLElBQUksQ0FBQyxhQUFhLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztnQkFDakQsSUFBSSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNqQyxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBRXJDLElBQUksQ0FBQyxZQUFZLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztnQkFDL0MsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUNyQyxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ3JDLElBQUksQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDakMsSUFBSSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNqQyxJQUFJLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBRS9CLE9BQU8sSUFBSSxDQUFDO2FBQ2I7Ozs7O1FBRUQscUJBQUU7Ozs7WUFBRixVQUFHLE1BQWM7Z0JBQ2YsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsRUFBRTtvQkFDbkIsT0FBTyxHQUFHLENBQUM7aUJBQ1o7Z0JBQ0QscUJBQUksSUFBSSxDQUFDO2dCQUNULHFCQUFJLE1BQU0sQ0FBQztnQkFDWCxxQkFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztnQkFFeEMscUJBQU0sS0FBSyxHQUFHLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFFckMsSUFBSSxLQUFLLEtBQUssT0FBTyxJQUFJLEtBQUssS0FBSyxNQUFNLEVBQUU7b0JBQ3pDLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLFlBQVksR0FBRyxLQUFLLENBQUM7b0JBQ3pDLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxHQUFHLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFFM0MsT0FBTyxLQUFLLEtBQUssT0FBTyxHQUFHLE1BQU0sR0FBRyxNQUFNLEdBQUcsRUFBRSxDQUFDO2lCQUNqRDs7Z0JBR0QsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7Z0JBQzNELFFBQVEsS0FBSztvQkFDWCxLQUFLLE1BQU07d0JBQ1QsT0FBTyxJQUFJLEdBQUcsQ0FBQyxHQUFHLFlBQVksR0FBRyxNQUFNLENBQUM7b0JBQzFDLEtBQUssS0FBSzt3QkFDUixPQUFPLElBQUksR0FBRyxZQUFZLEdBQUcsS0FBSyxDQUFDO29CQUNyQyxLQUFLLE9BQU87d0JBQ1YsT0FBTyxJQUFJLEdBQUcsRUFBRSxHQUFHLFlBQVksR0FBRyxJQUFJLENBQUM7b0JBQ3pDLEtBQUssU0FBUzt3QkFDWixPQUFPLElBQUksR0FBRyxJQUFJLEdBQUcsWUFBWSxHQUFHLEdBQUcsQ0FBQztvQkFDMUMsS0FBSyxTQUFTO3dCQUNaLE9BQU8sSUFBSSxHQUFHLEtBQUssR0FBRyxZQUFZLEdBQUcsSUFBSSxDQUFDOztvQkFFNUMsS0FBSyxjQUFjO3dCQUNqQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQyxHQUFHLFlBQVksQ0FBQztvQkFDakQ7d0JBQ0UsTUFBTSxJQUFJLEtBQUssQ0FBQyxrQkFBZ0IsS0FBTyxDQUFDLENBQUM7aUJBQzVDO2FBQ0Y7Ozs7UUFFRCwwQkFBTzs7O1lBQVA7Z0JBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsRUFBRTtvQkFDbkIsT0FBTyxHQUFHLENBQUM7aUJBQ1o7Z0JBRUQsUUFDRSxJQUFJLENBQUMsYUFBYTtvQkFDbEIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLO29CQUNsQixDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxJQUFJLE1BQU07b0JBQzVCLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQyxHQUFHLE9BQU8sRUFDbEM7YUFDSDt1QkFyS0g7UUFzS0MsQ0FBQTtBQTVKRDs7OztBQThKQSx3QkFBMkIsR0FBUTtRQUNqQyxPQUFPLEdBQUcsWUFBWSxRQUFRLENBQUM7S0FDaEM7Ozs7OztBQ3pLRDs7OztBQUVBLHFCQUF3QixNQUF5QjtRQUMvQyxJQUFJLE1BQU0sQ0FBQyxRQUFRLElBQUksSUFBSSxFQUFFO1lBQzNCLHFCQUFNLEtBQUssR0FBRyxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDdEMscUJBQU0sV0FBVyxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxFQUFFLFVBQVUsQ0FBUztnQkFDdEYsT0FBTyxDQUFDLElBQUksSUFBSSxDQUFDO2FBQ2xCLENBQUMsQ0FBQztZQUNILHFCQUFJLFVBQVUsR0FBRyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsRUFBRSxJQUFJLE1BQU0sQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBQ3ZELEtBQUssQ0FBQyxRQUFRLEdBQUcsQ0FBQztnQkFDbEIsQ0FBQyxLQUFLLENBQUMsS0FBSztnQkFDWixDQUFDLEtBQUssQ0FBQyxZQUFZO2dCQUNuQixDQUFDLEtBQUssQ0FBQyxjQUFjO2dCQUNyQixDQUFDLEtBQUssQ0FBQyxlQUFlO2dCQUN0QixDQUFDLEtBQUssQ0FBQyxTQUFTO2dCQUNoQixDQUFDLEtBQUssQ0FBQyxhQUFhO2dCQUNwQixDQUFDLEtBQUssQ0FBQyxlQUFlO2lCQUNyQixDQUFDLEtBQUssQ0FBQyxRQUFRLEtBQUssS0FBSyxDQUFDLFFBQVEsSUFBSSxXQUFXLENBQUMsQ0FBQyxDQUFDO1lBRXZELElBQUksTUFBTSxDQUFDLE9BQU8sRUFBRTtnQkFDbEIsVUFBVSxHQUFHLFVBQVU7b0JBQ3JCLEtBQUssQ0FBQyxhQUFhLEtBQUssQ0FBQztvQkFDekIsS0FBSyxDQUFDLFlBQVksQ0FBQyxNQUFNLEtBQUssQ0FBQztvQkFDL0IsS0FBSyxDQUFDLE9BQU8sS0FBSyxTQUFTLENBQUM7YUFDL0I7WUFFRCxJQUFJLE1BQU0sQ0FBQyxRQUFRLElBQUksSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFBRTtnQkFDdkQsTUFBTSxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUM7YUFDOUI7aUJBQU07Z0JBQ0wsT0FBTyxVQUFVLENBQUM7YUFDbkI7U0FDRjtRQUVELE9BQU8sTUFBTSxDQUFDLFFBQVEsQ0FBQztLQUN4Qjs7Ozs7O0FBRUQsMkJBQThCLE1BQXlCLEVBQUUsS0FBOEI7UUFDckYsTUFBTSxDQUFDLEVBQUUsR0FBRyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMxQixNQUFNLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsRUFBRSxLQUFLLElBQUksRUFBRSxlQUFlLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUUzRSxPQUFPLE1BQU0sQ0FBQztLQUNmOzs7OztBQUVELHlCQUE0QixNQUF5QjtRQUNuRCxNQUFNLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUV4QixPQUFPLE1BQU0sQ0FBQztLQUNmOzs7Ozs7QUMvQ0Q7OztJQVlBLHFCQUFNLGdCQUFnQixHQUFHLGtKQUFrSixDQUFDOztJQUU1SyxxQkFBTSxhQUFhLEdBQUcsNklBQTZJLENBQUM7SUFFcEsscUJBQU0sT0FBTyxHQUFHLHVCQUF1QixDQUFDO0lBRXhDLHFCQUFNLFFBQVEsR0FBZ0M7UUFDNUMsQ0FBQyxjQUFjLEVBQUUscUJBQXFCLEVBQUUsSUFBSSxDQUFDO1FBQzdDLENBQUMsWUFBWSxFQUFFLGlCQUFpQixFQUFFLElBQUksQ0FBQztRQUN2QyxDQUFDLGNBQWMsRUFBRSxnQkFBZ0IsRUFBRSxJQUFJLENBQUM7UUFDeEMsQ0FBQyxZQUFZLEVBQUUsYUFBYSxFQUFFLEtBQUssQ0FBQztRQUNwQyxDQUFDLFVBQVUsRUFBRSxhQUFhLEVBQUUsSUFBSSxDQUFDO1FBQ2pDLENBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLENBQUM7UUFDaEMsQ0FBQyxZQUFZLEVBQUUsWUFBWSxFQUFFLElBQUksQ0FBQztRQUNsQyxDQUFDLFVBQVUsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDOztRQUUzQixDQUFDLFlBQVksRUFBRSxhQUFhLEVBQUUsSUFBSSxDQUFDO1FBQ25DLENBQUMsV0FBVyxFQUFFLGFBQWEsRUFBRSxLQUFLLENBQUM7UUFDbkMsQ0FBQyxTQUFTLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQztLQUMzQixDQUFDOztJQUdGLHFCQUFNLFFBQVEsR0FBdUI7UUFDbkMsQ0FBQyxlQUFlLEVBQUUscUJBQXFCLENBQUM7UUFDeEMsQ0FBQyxlQUFlLEVBQUUsb0JBQW9CLENBQUM7UUFDdkMsQ0FBQyxVQUFVLEVBQUUsZ0JBQWdCLENBQUM7UUFDOUIsQ0FBQyxPQUFPLEVBQUUsV0FBVyxDQUFDO1FBQ3RCLENBQUMsYUFBYSxFQUFFLG1CQUFtQixDQUFDO1FBQ3BDLENBQUMsYUFBYSxFQUFFLGtCQUFrQixDQUFDO1FBQ25DLENBQUMsUUFBUSxFQUFFLGNBQWMsQ0FBQztRQUMxQixDQUFDLE1BQU0sRUFBRSxVQUFVLENBQUM7UUFDcEIsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDO0tBQ2YsQ0FBQztJQUVGLHFCQUFNLGVBQWUsR0FBRyxxQkFBcUIsQ0FBQztJQUU5QyxxQkFBTSxVQUFVLEdBQThCO1FBQzVDLEVBQUUsRUFBRSxDQUFDO1FBQ0wsR0FBRyxFQUFFLENBQUM7UUFDTixHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRTtRQUNaLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFO1FBQ1osR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUU7UUFDWixHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRTtRQUNaLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFO1FBQ1osR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUU7UUFDWixHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRTtRQUNaLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFO0tBQ2IsQ0FBQzs7O0lBSUYscUJBQU0sT0FBTyxHQUFHLHlMQUF5TCxDQUFDOzs7OztBQUcxTSwyQkFBOEIsTUFBeUI7UUFDckQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEVBQUU7WUFDeEIsT0FBTyxNQUFNLENBQUM7U0FDZjtRQUVELHFCQUFNLEtBQUssR0FBRyxNQUFNLENBQUMsRUFBRSxDQUFDO1FBQ3hCLHFCQUFNLEtBQUssR0FBRyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUd4RSxxQkFBSSxTQUFTLENBQUM7UUFDZCxxQkFBSSxVQUFVLENBQUM7UUFDZixxQkFBSSxVQUFVLENBQUM7UUFDZixxQkFBSSxRQUFRLENBQUM7UUFFYixJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ1YsTUFBTSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7WUFFeEIsT0FBTyxNQUFNLENBQUM7U0FDZjs7UUFHRCxxQkFBSSxDQUFDLENBQUM7UUFDTixxQkFBSSxDQUFDLENBQUM7UUFDTixLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUMzQyxJQUFJLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQ2pDLFVBQVUsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzVCLFNBQVMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssS0FBSyxDQUFDO2dCQUNyQyxNQUFNO2FBQ1A7U0FDRjtRQUVELElBQUksVUFBVSxJQUFJLElBQUksRUFBRTtZQUN0QixNQUFNLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztZQUV4QixPQUFPLE1BQU0sQ0FBQztTQUNmO1FBRUQsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDWixLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDM0MsSUFBSSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFOztvQkFFakMsVUFBVSxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ2hELE1BQU07aUJBQ1A7YUFDRjtZQUVELElBQUksVUFBVSxJQUFJLElBQUksRUFBRTtnQkFDdEIsTUFBTSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7Z0JBRXhCLE9BQU8sTUFBTSxDQUFDO2FBQ2Y7U0FFRjtRQUNELElBQUksQ0FBQyxTQUFTLElBQUksVUFBVSxJQUFJLElBQUksRUFBRTtZQUNwQyxNQUFNLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztZQUV4QixPQUFPLE1BQU0sQ0FBQztTQUNmO1FBRUQsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDWixJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQzFCLFFBQVEsR0FBRyxHQUFHLENBQUM7YUFDaEI7aUJBQU07Z0JBQ0wsTUFBTSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7Z0JBRXhCLE9BQU8sTUFBTSxDQUFDO2FBQ2Y7U0FDRjtRQUVELE1BQU0sQ0FBQyxFQUFFLEdBQUcsVUFBVSxJQUFJLFVBQVUsSUFBSSxFQUFFLENBQUMsSUFBSSxRQUFRLElBQUksRUFBRSxDQUFDLENBQUM7UUFFL0QsT0FBTyx5QkFBeUIsQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUMxQzs7Ozs7Ozs7OztJQUdELG1DQUFtQyxPQUFlLEVBQUUsUUFBZ0IsRUFBRSxNQUFjLEVBQUUsT0FBZSxFQUFFLFNBQWlCLEVBQUUsU0FBaUI7UUFDekkscUJBQU0sTUFBTSxHQUFHO1lBQ2IsY0FBYyxDQUFDLE9BQU8sQ0FBQztZQUN2Qix3QkFBd0IsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDO1lBQzFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDO1lBQ3BCLFFBQVEsQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDO1lBQ3JCLFFBQVEsQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUFDO1NBQ3hCLENBQUM7UUFFRixJQUFJLFNBQVMsRUFBRTtZQUNiLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ3RDO1FBRUQsT0FBTyxNQUFNLENBQUM7S0FDZjs7Ozs7SUFFRCx3QkFBd0IsT0FBZTtRQUNyQyxxQkFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQztRQUVuQyxPQUFPLElBQUksSUFBSSxFQUFFLEdBQUcsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLENBQUM7S0FDeEM7Ozs7O0lBRUQsMkJBQTJCLEdBQVc7O1FBRXBDLE9BQU8sR0FBRzthQUNQLE9BQU8sQ0FBQyxtQkFBbUIsRUFBRSxHQUFHLENBQUM7YUFDakMsT0FBTyxDQUFDLFVBQVUsRUFBRSxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztLQUNwQzs7Ozs7OztJQUVELHNCQUFzQixVQUFrQixFQUFFLFdBQXNCLEVBQUUsTUFBeUI7UUFDekYsSUFBSSxVQUFVLEVBQUU7O1lBRWQscUJBQU0sZUFBZSxHQUFHLDBCQUEwQixDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUN2RSxxQkFBTSxhQUFhLEdBQUcsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFFLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBRSxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUN4RixJQUFJLGVBQWUsS0FBSyxhQUFhLEVBQUU7Z0JBQ3JDLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO2dCQUMvQyxNQUFNLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztnQkFFeEIsT0FBTyxLQUFLLENBQUM7YUFDZDtTQUNGO1FBRUQsT0FBTyxJQUFJLENBQUM7S0FDYjs7Ozs7OztJQUVELHlCQUF5QixTQUFpQixFQUFFLGNBQXNCLEVBQUUsU0FBaUI7UUFDbkYsSUFBSSxTQUFTLEVBQUU7WUFDYixPQUFPLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUM5QjthQUFNLElBQUksY0FBYyxFQUFFOztZQUV6QixPQUFPLENBQUMsQ0FBQztTQUNWO2FBQU07WUFDTCxxQkFBTSxFQUFFLEdBQUcsUUFBUSxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUNuQyxxQkFBTSxDQUFDLEdBQUcsRUFBRSxHQUFHLEdBQUcsQ0FBQztZQUNuQixxQkFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxJQUFJLEdBQUcsQ0FBQztZQUV6QixPQUFPLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQ25CO0tBQ0Y7Ozs7O0FBR0QsK0JBQWtDLE1BQXlCO1FBQ3pELElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxFQUFFO1lBQ3hCLE9BQU8sTUFBTSxDQUFDO1NBQ2Y7UUFFRCxxQkFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUV6RCxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ1YsT0FBTyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDNUI7UUFFRCxxQkFBTSxXQUFXLEdBQUcseUJBQXlCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMxRyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxXQUFXLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDaEQsT0FBTyxNQUFNLENBQUM7U0FDZjtRQUVELE1BQU0sQ0FBQyxFQUFFLEdBQUcsV0FBVyxDQUFDO1FBQ3hCLE1BQU0sQ0FBQyxJQUFJLEdBQUcsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFN0QsTUFBTSxDQUFDLEVBQUUsR0FBRyxhQUFhLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDakQsTUFBTSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFakUsZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFFdkMsT0FBTyxNQUFNLENBQUM7S0FDZjs7Ozs7QUFHRCw4QkFBaUMsTUFBeUI7UUFDeEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEVBQUU7WUFDeEIsT0FBTyxNQUFNLENBQUM7U0FDZjtRQUVELHFCQUFNLE9BQU8sR0FBRyxlQUFlLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUVoRCxJQUFJLE9BQU8sS0FBSyxJQUFJLEVBQUU7WUFDcEIsTUFBTSxDQUFDLEVBQUUsR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBRWxDLE9BQU8sTUFBTSxDQUFDO1NBQ2Y7Ozs7UUFNRCxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdEIsSUFBSSxNQUFNLENBQUMsUUFBUSxLQUFLLEtBQUssRUFBRTtZQUM3QixPQUFPLE1BQU0sQ0FBQyxRQUFRLENBQUM7U0FDeEI7YUFBTTtZQUNMLE9BQU8sTUFBTSxDQUFDO1NBQ2Y7UUFFRCxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMxQixJQUFJLE1BQU0sQ0FBQyxRQUFRLEtBQUssS0FBSyxFQUFFO1lBQzdCLE9BQU8sTUFBTSxDQUFDLFFBQVEsQ0FBQztTQUN4QjthQUFNO1lBQ0wsT0FBTyxNQUFNLENBQUM7U0FDZjs7O1FBSUQsT0FBTyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7S0FDOUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN1BELHdCQUEyQixJQUFVLEVBQUUsTUFBYyxFQUFFLE1BQWUsRUFBRSxLQUFlLEVBQUUsTUFBVTtRQUFWLHVCQUFBO1lBQUEsVUFBVTs7UUFDakcscUJBQU0sT0FBTyxHQUFHLFNBQVMsQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLENBQUM7UUFDMUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNaLE1BQU0sSUFBSSxLQUFLLENBQ2IsY0FBVyxNQUFNLGdFQUEwRCxDQUM1RSxDQUFDO1NBQ0g7UUFFRCxxQkFBTSxPQUFPLEdBQUcsTUFBTSxLQUFLLEtBQUssR0FBSSx3QkFBd0IsR0FBRyxzQkFBc0IsQ0FBQyxDQUFDO1FBRXZGLHFCQUFNLE1BQU0sR0FBRyxZQUFZLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBRW5FLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDWCxPQUFPLE1BQU0sQ0FBQztTQUNmO1FBRUQsT0FBTyxPQUFPLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0tBQ25DOzs7Ozs7Ozs7QUFHRCwwQkFBNkIsSUFBVSxFQUFFLE9BQWUsRUFBRSxNQUFjLEVBQUUsS0FBZSxFQUFFLE1BQVU7UUFBVix1QkFBQTtZQUFBLFVBQVU7O1FBQ25HLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDdEIsT0FBTyxNQUFNLENBQUMsV0FBVyxDQUFDO1NBQzNCO1FBRUQscUJBQU0sTUFBTSxHQUFHLFlBQVksQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDN0MsZUFBZSxDQUFDLE1BQU0sQ0FBQyxHQUFHLGVBQWUsQ0FBQyxNQUFNLENBQUMsSUFBSSxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUVoRixPQUFPLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztLQUM3RDs7Ozs7O0FBRUQsMEJBQTZCLE9BQWUsRUFBRSxNQUFjO1FBQzFELHFCQUFJLE1BQU0sR0FBRyxPQUFPLENBQUM7UUFDckIscUJBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNWLHFCQUFNLHFCQUFxQixHQUFHLDRDQUE0QyxDQUFDO1FBRTNFLHFCQUFNLDJCQUEyQixHQUFHLFVBQUMsS0FBVTtZQUM3QyxPQUFPLE1BQU0sQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLElBQUksS0FBSyxDQUFDO1NBQzlDLENBQUM7UUFFRixxQkFBcUIsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ3BDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDbkQsTUFBTSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMscUJBQXFCLEVBQUUsMkJBQTJCLENBQUMsQ0FBQztZQUM1RSxxQkFBcUIsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1lBQ3BDLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDUjtRQUVELE9BQU8sTUFBTSxDQUFDO0tBQ2Y7Ozs7Ozs7Ozs7Ozs7QUMzREQsc0JBQTRCLENBQUssRUFBRSxDQUFLLEVBQUUsQ0FBSztRQUM3QyxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUU7WUFDYixPQUFPLENBQUMsQ0FBQztTQUNWO1FBQ0QsSUFBSSxDQUFDLElBQUksSUFBSSxFQUFFO1lBQ2IsT0FBTyxDQUFDLENBQUM7U0FDVjtRQUVELE9BQU8sQ0FBQyxDQUFDO0tBQ1Y7Ozs7OztBQ1JEOzs7O0lBUUEsMEJBQTBCLE1BQXlCO1FBQ2pELHFCQUFNLFFBQVEsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO1FBRTVCLElBQUksTUFBTSxDQUFDLE9BQU8sRUFBRTtZQUNsQixPQUFPLENBQUMsUUFBUSxDQUFDLGNBQWMsRUFBRSxFQUFFLFFBQVEsQ0FBQyxXQUFXLEVBQUUsRUFBRSxRQUFRLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQztTQUNuRjtRQUVELE9BQU8sQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLEVBQUUsUUFBUSxDQUFDLFFBQVEsRUFBRSxFQUFFLFFBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO0tBQzFFOzs7OztBQU1ELDZCQUFnQyxNQUF5QjtRQUN2RCxxQkFBTSxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLHFCQUFJLENBQUMsQ0FBQztRQUNOLHFCQUFJLElBQUksQ0FBQztRQUNULHFCQUFJLFdBQVcsQ0FBQztRQUNoQixxQkFBSSxlQUFlLENBQUM7UUFDcEIscUJBQUksU0FBUyxDQUFDO1FBRWQsSUFBSSxNQUFNLENBQUMsRUFBRSxFQUFFO1lBQ2IsT0FBTyxNQUFNLENBQUM7U0FDZjtRQUVELFdBQVcsR0FBRyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsQ0FBQzs7UUFHdkMsSUFBSSxNQUFNLENBQUMsRUFBRSxJQUFJLE1BQU0sQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLE1BQU0sQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksSUFBSSxFQUFFO1lBQ3BFLHFCQUFxQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQy9COztRQUdELElBQUksTUFBTSxDQUFDLFVBQVUsSUFBSSxJQUFJLEVBQUU7WUFDN0IsU0FBUyxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBRXpELElBQUksTUFBTSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUMsU0FBUyxDQUFDLElBQUksTUFBTSxDQUFDLFVBQVUsS0FBSyxDQUFDLEVBQUU7Z0JBQ3hFLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUM7YUFDbkQ7WUFFRCxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBQzNELE1BQU0sQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ3RDLE1BQU0sQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1NBQ3JDOzs7Ozs7UUFPRCxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksRUFBRSxFQUFFLENBQUMsRUFBRTtZQUM5QyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDMUM7O1FBR0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ2pCLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDckY7O1FBR0QsSUFBSSxNQUFNLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDeEIsTUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO1lBQ3ZCLE1BQU0sQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztZQUN2QixNQUFNLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUM5QixNQUFNLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztZQUN2QixNQUFNLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNyQjtRQUVELE1BQU0sQ0FBQyxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsT0FBTyxHQUFHLGFBQWEsR0FBRyxVQUFVLEVBQUUsS0FBSyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztRQUM3RSxlQUFlLEdBQUcsTUFBTSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsRUFBRSxDQUFDLFNBQVMsRUFBRSxHQUFHLE1BQU0sQ0FBQyxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUM7OztRQUk5RSxJQUFJLE1BQU0sQ0FBQyxJQUFJLElBQUksSUFBSSxFQUFFO1lBQ3ZCLE1BQU0sQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ2xFO1FBRUQsSUFBSSxNQUFNLENBQUMsUUFBUSxFQUFFO1lBQ25CLE1BQU0sQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1NBQ3RCOztRQUdELElBQUksTUFBTSxDQUFDLEVBQUUsSUFBSSxPQUFPLE1BQU0sQ0FBQyxFQUFFLEtBQUUsS0FBSyxXQUFXLElBQUksTUFBTSxDQUFDLEVBQUUsVUFBTyxlQUFlLEVBQUU7WUFDdEYsZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7U0FDaEQ7UUFFRCxPQUFPLE1BQU0sQ0FBQztLQUNmOzs7OztJQUVELCtCQUErQixNQUF5QjtRQUN0RCxxQkFBSSxDQUFDLG1CQUFFLFFBQVEsbUJBQUUsSUFBSSxtQkFBRSxPQUFPLG1CQUFFLEdBQUcsbUJBQUUsR0FBRyxtQkFBRSxJQUFJLG1CQUFFLGVBQWUsQ0FBQztRQUVoRSxDQUFDLEdBQUcsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUNkLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLEVBQUU7WUFDOUMsR0FBRyxHQUFHLENBQUMsQ0FBQztZQUNSLEdBQUcsR0FBRyxDQUFDLENBQUM7Ozs7O1lBTVIsUUFBUSxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsVUFBVSxDQUFDLElBQUksSUFBSSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzlFLElBQUksR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUN4QixPQUFPLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDM0IsSUFBSSxPQUFPLEdBQUcsQ0FBQyxJQUFJLE9BQU8sR0FBRyxDQUFDLEVBQUU7Z0JBQzlCLGVBQWUsR0FBRyxJQUFJLENBQUM7YUFDeEI7U0FDRjthQUFNO1lBQ0wsR0FBRyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztZQUMvQixHQUFHLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO1lBRS9CLHFCQUFNLE9BQU8sR0FBRyxVQUFVLENBQUMsSUFBSSxJQUFJLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFFakQsUUFBUSxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDOztZQUd6RCxJQUFJLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBRW5DLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLEVBQUU7O2dCQUVmLE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNkLElBQUksT0FBTyxHQUFHLENBQUMsSUFBSSxPQUFPLEdBQUcsQ0FBQyxFQUFFO29CQUM5QixlQUFlLEdBQUcsSUFBSSxDQUFDO2lCQUN4QjthQUNGO2lCQUFNLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLEVBQUU7O2dCQUV0QixPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7Z0JBQ3BCLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUU7b0JBQ3RCLGVBQWUsR0FBRyxJQUFJLENBQUM7aUJBQ3hCO2FBQ0Y7aUJBQU07O2dCQUVMLE9BQU8sR0FBRyxHQUFHLENBQUM7YUFDZjtTQUNGO1FBQ0QsSUFBSSxJQUFJLEdBQUcsQ0FBQyxJQUFJLElBQUksR0FBRyxXQUFXLENBQUMsUUFBUSxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBRTtZQUN0RCxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztTQUMvQzthQUFNLElBQUksZUFBZSxJQUFJLElBQUksRUFBRTtZQUNsQyxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDO1NBQ2pEO2FBQU07WUFDTCxJQUFJLEdBQUcsa0JBQWtCLENBQUMsUUFBUSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQzdELE1BQU0sQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztZQUM1QixNQUFNLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7U0FDcEM7UUFFRCxPQUFPLE1BQU0sQ0FBQztLQUNmOzs7Ozs7QUM3SkQ7Ozs7QUFLQSwyQkFBOEIsTUFBeUI7UUFDckQscUJBQUksUUFBUSxDQUFDO1FBQ2IscUJBQU0sQ0FBQyxHQUFHLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFFcEIsSUFBSSxDQUFDLElBQUksZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFFBQVEsS0FBSyxDQUFDLENBQUMsRUFBRTs7WUFFaEQsUUFBUTtnQkFDTixDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLEdBQUcsS0FBSztvQkFDbkMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUdBLGFBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSTt3QkFDNUQsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUk7NEJBQ3BILENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsR0FBRyxNQUFNO2dDQUN0QyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLEdBQUcsTUFBTTtvQ0FDdEMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsV0FBVyxDQUFDLEdBQUcsR0FBRyxHQUFHLFdBQVc7d0NBQ3RELENBQUMsQ0FBQyxDQUFDO1lBRWpCLElBQUksZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDLGtCQUFrQixLQUFLLFFBQVEsR0FBRyxJQUFJLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxFQUFFO2dCQUN0RixRQUFRLEdBQUcsSUFBSSxDQUFDO2FBQ2pCO1lBQ0QsSUFBSSxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUMsY0FBYyxJQUFJLFFBQVEsS0FBSyxDQUFDLENBQUMsRUFBRTtnQkFDN0QsUUFBUSxHQUFHLElBQUksQ0FBQzthQUNqQjtZQUNELElBQUksZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDLGdCQUFnQixJQUFJLFFBQVEsS0FBSyxDQUFDLENBQUMsRUFBRTtnQkFDL0QsUUFBUSxHQUFHLE9BQU8sQ0FBQzthQUNwQjtZQUVELGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1NBQzdDO1FBRUQsT0FBTyxNQUFNLENBQUM7S0FDZjs7Ozs7O0FDakNEOztBQWNBLElBQU8scUJBQU0sUUFBUSxHQUFHLFVBQVUsQ0FBQzs7O0FBSW5DLElBQU8scUJBQU0sUUFBUSxHQUFHLFVBQVUsQ0FBQzs7Ozs7QUFHbkMsdUNBQTBDLE1BQXlCOztRQUVqRSxJQUFJLE1BQU0sQ0FBQyxFQUFFLEtBQUssUUFBUSxFQUFFO1lBQzFCLE9BQU8sYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQzlCO1FBQ0QsSUFBSSxNQUFNLENBQUMsRUFBRSxLQUFLLFFBQVEsRUFBRTtZQUMxQixPQUFPLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ2xDO1FBQ0QsTUFBTSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDZixlQUFlLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztRQUVyQyxJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsRUFBRSxJQUFJLE1BQU0sQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLEVBQUU7WUFDekQsT0FBTyxNQUFNLENBQUM7U0FDZjs7UUFJRCxxQkFBSSxLQUFLLEdBQUcsTUFBTSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNqQyxxQkFBSSxzQkFBc0IsR0FBRyxDQUFDLENBQUM7UUFDL0IscUJBQU0sV0FBVyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUM7UUFDakMscUJBQU0sTUFBTSxHQUFHLFlBQVksQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLENBQUM7UUFFckYscUJBQUksQ0FBQyxDQUFDO1FBQ04scUJBQUksS0FBSyxDQUFDO1FBQ1YscUJBQUksV0FBVyxDQUFDO1FBQ2hCLHFCQUFJLE9BQU8sQ0FBQztRQUNaLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNsQyxLQUFLLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2xCLFdBQVcsR0FBRyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMscUJBQXFCLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNuRixJQUFJLFdBQVcsRUFBRTtnQkFDZixPQUFPLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO2dCQUN0RCxJQUFJLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO29CQUN0QixlQUFlLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztpQkFDbkQ7Z0JBQ0QsS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsR0FBRyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ3JFLHNCQUFzQixJQUFJLFdBQVcsQ0FBQyxNQUFNLENBQUM7YUFDOUM7O1lBRUQsSUFBSSxvQkFBb0IsQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDL0IsSUFBSSxXQUFXLEVBQUU7b0JBQ2YsZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7aUJBQ3ZDO3FCQUFNO29CQUNMLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2lCQUNsRDtnQkFFRCx1QkFBdUIsQ0FBQyxLQUFLLEVBQUUsV0FBVyxFQUFFLE1BQU0sQ0FBQyxDQUFDO2FBQ3JEO2lCQUFNLElBQUksTUFBTSxDQUFDLE9BQU8sSUFBSSxDQUFDLFdBQVcsRUFBRTtnQkFDekMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDbEQ7U0FDRjs7UUFHRCxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUMsYUFBYSxHQUFHLFdBQVcsR0FBRyxzQkFBc0IsQ0FBQztRQUM3RSxJQUFJLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ3BCLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ2pEOztRQUdELElBQUksTUFBTSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ3ZCLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLEtBQUssSUFBSTtZQUN4QyxNQUFNLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUNyQixlQUFlLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxDQUFDO1NBQzFDO1FBRUQsZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDLGVBQWUsR0FBRyxNQUFNLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM3RCxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUM7O1FBRXBELE1BQU0sQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsZUFBZSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFckYsZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRXhCLE9BQU8sYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0tBQzlCOzs7Ozs7O0lBR0QseUJBQXlCLE1BQWMsRUFBRSxLQUFhLEVBQUUsUUFBZ0I7UUFDdEUscUJBQUksSUFBSSxHQUFHLEtBQUssQ0FBQztRQUVqQixJQUFJLFFBQVEsSUFBSSxJQUFJLEVBQUU7O1lBRXBCLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFFRCxJQUFJLE1BQU0sQ0FBQyxZQUFZLElBQUksSUFBSSxFQUFFO1lBQy9CLE9BQU8sTUFBTSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUM7U0FDNUM7UUFFRCxJQUFJLE1BQU0sQ0FBQyxJQUFJLElBQUksSUFBSSxFQUFFOztZQUV2QixPQUFPLElBQUksQ0FBQztTQUNiOztRQUVELHFCQUFNLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ25DLElBQUksSUFBSSxJQUFJLElBQUksR0FBRyxFQUFFLEVBQUU7WUFDckIsSUFBSSxJQUFJLEVBQUUsQ0FBQztTQUNaO1FBRUQsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLEtBQUssRUFBRSxFQUFFO1lBQ3hCLElBQUksR0FBRyxDQUFDLENBQUM7U0FDVjtRQUVELE9BQU8sSUFBSSxDQUFDO0tBQ2I7Ozs7OztBQzNIRDs7OztBQUtBLHNDQUF5QyxNQUF5QjtRQUNoRSxxQkFBSSxVQUFVLENBQUM7UUFDZixxQkFBSSxVQUFVLENBQUM7UUFDZixxQkFBSSxXQUFXLENBQUM7UUFDaEIscUJBQUksWUFBWSxDQUFDO1FBRWpCLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxJQUFJLE1BQU0sQ0FBQyxFQUFFLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUN4QyxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztZQUU3QyxPQUFPLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUM5QjtRQUVELHFCQUFJLENBQUMsQ0FBQztRQUNOLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDckMsWUFBWSxHQUFHLENBQUMsQ0FBQztZQUNqQixVQUFVLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDdkMsSUFBSSxNQUFNLENBQUMsT0FBTyxJQUFJLElBQUksRUFBRTtnQkFDMUIsVUFBVSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDO2FBQ3JDO1lBQ0QsVUFBVSxDQUFDLEVBQUUsR0FBRyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzdCLHlCQUF5QixDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBRXRDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLEVBQUU7Z0JBQ3hCLFNBQVM7YUFDVjs7WUFHRCxZQUFZLElBQUksZUFBZSxDQUFDLFVBQVUsQ0FBQyxDQUFDLGFBQWEsQ0FBQzs7WUFHMUQsWUFBWSxJQUFJLGVBQWUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztZQUVyRSxlQUFlLENBQUMsVUFBVSxDQUFDLENBQUMsS0FBSyxHQUFHLFlBQVksQ0FBQztZQUVqRCxJQUFJLFdBQVcsSUFBSSxJQUFJLElBQUksWUFBWSxHQUFHLFdBQVcsRUFBRTtnQkFDckQsV0FBVyxHQUFHLFlBQVksQ0FBQztnQkFDM0IsVUFBVSxHQUFHLFVBQVUsQ0FBQzthQUN6QjtTQUNGO1FBRUQsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxVQUFVLElBQUksVUFBVSxDQUFDLENBQUM7S0FDeEQ7Ozs7OztBQy9DRDs7OztBQUtBLDhCQUFpQyxNQUF5QjtRQUN4RCxJQUFJLE1BQU0sQ0FBQyxFQUFFLEVBQUU7WUFDYixPQUFPLE1BQU0sQ0FBQztTQUNmO1FBRUQscUJBQU0sS0FBSyxHQUFHLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFDeEIsSUFBSSxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDbkIscUJBQU0sQ0FBQyxHQUFHLG9CQUFvQixtQkFBQyxLQUFZLEVBQUMsQ0FBQztZQUM3QyxNQUFNLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLFlBQVksQ0FBQztpQkFFaEYsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsUUFBUSxDQUFDLEdBQUcsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUcsR0FBRyxHQUFBLENBQUMsQ0FBQztTQUN4RDtRQUVELE9BQU8sZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0tBQ2hDOzs7Ozs7QUNsQkQ7Ozs7SUFhQSwwQkFBMEIsTUFBeUI7UUFDakQscUJBQU0sR0FBRyxHQUFHLGFBQWEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQzs7UUFFakQsR0FBRyxDQUFDLEVBQUUsR0FBRyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxJQUFJLElBQUksR0FBRyxHQUFHLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDO1FBQzNELElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUMsUUFBUSxFQUFFLElBQUksRUFBQyxDQUFDLENBQUMsRUFBRTtZQUN0RCxHQUFHLENBQUMsRUFBRSxHQUFHLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ3hCOzs7Ozs7O1FBUUQsT0FBTyxHQUFHLENBQUM7S0FDWjs7Ozs7QUFFRCwyQkFBOEIsTUFBeUI7UUFDckQscUJBQUksS0FBSyxHQUFHLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFDdEIscUJBQU0sTUFBTSxHQUFHLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFFekIsTUFBTSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsT0FBTyxJQUFJLFNBQVMsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7UUFFeEQsSUFBSSxLQUFLLEtBQUssSUFBSSxLQUFLLE1BQU0sS0FBSyxTQUFTLElBQUksS0FBSyxLQUFLLEVBQUUsQ0FBQyxFQUFFO1lBQzVELE9BQU8sYUFBYSxDQUFDLE1BQU0sRUFBRSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1NBQ25EO1FBRUQsSUFBSSxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDbkIsTUFBTSxDQUFDLEVBQUUsR0FBRyxLQUFLLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDcEQ7UUFFRCxJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNqQixNQUFNLENBQUMsRUFBRSxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUU3QixPQUFPLE1BQU0sQ0FBQztTQUNmOztRQUlELElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLHdCQUF3QixDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ2xDO2FBQU0sSUFBSSxNQUFNLEVBQUU7WUFDakIseUJBQXlCLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDbkM7YUFBTTtZQUNMLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUN6QjtRQUVELElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDcEIsTUFBTSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUM7U0FDbEI7UUFFRCxPQUFPLE1BQU0sQ0FBQztLQUNmOzs7OztJQUVELHlCQUF5QixNQUF5QjtRQUNoRCxxQkFBTSxLQUFLLEdBQUcsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUN4QixJQUFJLFdBQVcsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUN0QixNQUFNLENBQUMsRUFBRSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7U0FDeEI7YUFBTSxJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUN4QixNQUFNLENBQUMsRUFBRSxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUM5QjthQUFNLElBQUksUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQzFCLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQzFCO2FBQU0sSUFBSSxPQUFPLENBQWtCLEtBQUssQ0FBQyxJQUFJLEtBQUssQ0FBQyxNQUFNLEVBQUU7WUFDMUQscUJBQU0sSUFBSSxHQUF3QixLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2pELE1BQU0sQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLFFBQVEsQ0FBQyxHQUFHLENBQUMsR0FBRyxRQUFRLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxHQUFHLEdBQUcsR0FBQSxDQUFDLENBQUM7WUFDckUsZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ3pCO2FBQU0sSUFBSSxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDMUIsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDMUI7YUFBTSxJQUFJLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBRTs7WUFFMUIsTUFBTSxDQUFDLEVBQUUsR0FBRyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUM3QjthQUFNOztZQUVMLE9BQU8sYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQzlCO1FBRUQsT0FBTyxNQUFNLENBQUM7S0FDZjs7Ozs7Ozs7O0FBRUQsOEJBQWlDLEtBQWdCLEVBQUUsTUFBMEIsRUFBRSxTQUFrQixFQUFFLE1BQWdCLEVBQUUsS0FBZTtRQUNsSSxxQkFBTSxNQUFNLEdBQXNCLEVBQUUsQ0FBQztRQUNyQyxxQkFBSSxNQUFNLEdBQUcsS0FBSyxDQUFDOzs7Ozs7O1FBU25CLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksYUFBYSxDQUFDLE1BQU0sQ0FBQyxNQUFNLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxNQUFNLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxFQUFFO1lBQzNGLE1BQU0sR0FBRyxTQUFTLENBQUM7U0FDcEI7Ozs7UUFJRCxNQUFNLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3ZDLE1BQU0sQ0FBQyxFQUFFLEdBQUcsU0FBUyxDQUFDO1FBQ3RCLE1BQU0sQ0FBQyxFQUFFLEdBQUcsTUFBTSxDQUFDO1FBQ25CLE1BQU0sQ0FBQyxFQUFFLEdBQUcsTUFBTSxDQUFDO1FBQ25CLE1BQU0sQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO1FBRXhCLE9BQU8sZ0JBQWdCLENBQUMsTUFBTSxDQUFDLENBQUM7S0FDakM7Ozs7OztBQ3JIRDs7Ozs7Ozs7QUFLQSx1QkFBMEIsS0FBZ0IsRUFBRSxNQUEwQixFQUM1QyxTQUFrQixFQUFFLE1BQWdCLEVBQUUsS0FBZTtRQUM3RSxJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNqQixPQUFPLEtBQUssQ0FBQztTQUNkO1FBRUQscUJBQU0sTUFBTSxHQUFHLGdCQUFnQixDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztRQUV6RSxPQUFPLE1BQU0sQ0FBQyxFQUFFLENBQUM7S0FDbEI7Ozs7Ozs7Ozs7QUNkRCxzQkFBeUIsR0FBVztRQUNsQyxPQUFPLEdBQUcsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQzlEOzs7Ozs7QUNERDs7Ozs7O0FBRUEscUJBQ0UsS0FBVyxFQUNYLEtBQVcsRUFDWCxLQUFrQztRQUFsQyxzQkFBQTtZQUFBLHNCQUFrQzs7UUFFbEMsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNwQixPQUFPLEtBQUssQ0FBQztTQUNkO1FBRUQsSUFBSSxLQUFLLEtBQUssY0FBYyxFQUFFO1lBQzVCLE9BQU8sS0FBSyxDQUFDLE9BQU8sRUFBRSxHQUFHLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUMxQztRQUVELE9BQU8sS0FBSyxDQUFDLE9BQU8sRUFBRSxHQUFHLE9BQU8sQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7S0FDMUQ7Ozs7Ozs7QUFFRCxzQkFDRSxLQUFXLEVBQ1gsS0FBVyxFQUNYLEtBQWtDO1FBQWxDLHNCQUFBO1lBQUEsc0JBQWtDOztRQUVsQyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ3BCLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFFRCxJQUFJLEtBQUssS0FBSyxjQUFjLEVBQUU7WUFDNUIsT0FBTyxLQUFLLENBQUMsT0FBTyxFQUFFLEdBQUcsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQzFDO1FBRUQsT0FBTyxLQUFLLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDLE9BQU8sRUFBRSxHQUFHLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztLQUN4RDs7Ozs7O0FBRUQsMkJBQThCLElBQVUsRUFBRSxZQUFzQjtRQUM5RCxJQUFJLFlBQVksS0FBSyxTQUFTLElBQUksQ0FBQyxZQUFZLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFO1lBQ3ZFLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFFRCxPQUFPLFlBQVksQ0FBQyxJQUFJLENBQUMsVUFBQyxHQUFXLElBQUssT0FBQSxHQUFHLEtBQUssSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFBLENBQUMsQ0FBQztLQUNsRTs7Ozs7O0FDeENELElBYUEscUJBQU0sV0FBVyxHQUFHLDBEQUEwRCxDQUFDOzs7OztJQU0vRSxxQkFBTSxRQUFRLEdBQUcscUtBQXFLLENBQUM7Ozs7Ozs7QUFJdkwsNEJBQStCLEtBQXFCLEVBQUUsR0FBWSxFQUFFLE1BQThCO1FBQTlCLHVCQUFBO1lBQUEsV0FBOEI7O1FBQ2hHLHFCQUFNLFFBQVEsR0FBRyxlQUFlLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDOztRQUc3QyxPQUFPLElBQUksUUFBUSxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQztLQUN2Qzs7Ozs7O0lBRUQseUJBQXlCLEtBQVUsRUFBRSxHQUFXOztRQUU5QyxJQUFJLEtBQUssSUFBSSxJQUFJLEVBQUU7WUFDakIsT0FBTyxFQUFFLENBQUM7U0FDWDtRQUVELElBQUksVUFBVSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ3JCLE9BQU87Z0JBQ0wsWUFBWSxFQUFFLEtBQUssQ0FBQyxhQUFhO2dCQUNqQyxHQUFHLEVBQUUsS0FBSyxDQUFDLEtBQUs7Z0JBQ2hCLEtBQUssRUFBRSxLQUFLLENBQUMsT0FBTzthQUNyQixDQUFDO1NBQ0g7UUFDRCxJQUFJLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBRTs7WUFFbkIsT0FBTyxHQUFHLGFBQUssR0FBQyxHQUFHLElBQUcsS0FBSyxRQUFLLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxDQUFDO1NBQ3pEO1FBRUQsSUFBSSxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDbkIscUJBQUksS0FBSyxHQUFHLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFFcEMsSUFBSSxLQUFLLEVBQUU7Z0JBQ1QscUJBQU0sSUFBSSxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBRXpDLE9BQU87b0JBQ0wsSUFBSSxFQUFFLENBQUM7b0JBQ1AsR0FBRyxFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJO29CQUM5QixLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUk7b0JBQ2hDLE9BQU8sRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSTtvQkFDcEMsT0FBTyxFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJOztvQkFFcEMsWUFBWSxFQUFFLEtBQUssQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSTtpQkFDdkUsQ0FBQzthQUNIO1lBRUQsS0FBSyxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDN0IsSUFBSSxLQUFLLEVBQUU7Z0JBQ1QscUJBQU0sSUFBSSxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFFbEUsT0FBTztvQkFDTCxJQUFJLEVBQUUsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUM7b0JBQzlCLEtBQUssRUFBRSxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQztvQkFDL0IsSUFBSSxFQUFFLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDO29CQUM5QixHQUFHLEVBQUUsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUM7b0JBQzdCLEtBQUssRUFBRSxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQztvQkFDL0IsT0FBTyxFQUFFLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDO29CQUNqQyxPQUFPLEVBQUUsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUM7aUJBQ2xDLENBQUM7YUFDSDtTQUVGO1FBRUQsSUFBSSxRQUFRLENBQXVCLEtBQUssQ0FBQyxLQUFLLE1BQU0sSUFBSSxLQUFLLElBQUksSUFBSSxJQUFJLEtBQUssQ0FBQyxFQUFFO1lBQy9FLHFCQUFNLE9BQU8sR0FBRyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLFNBQVMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUU5RSxPQUFPO2dCQUNMLFlBQVksRUFBRSxPQUFPLENBQUMsWUFBWTtnQkFDbEMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxNQUFNO2FBQ3RCLENBQUM7U0FDSDtRQUVELE9BQU8sS0FBSyxDQUFDOztLQUNkOzs7Ozs7SUFLRCxrQkFBa0IsR0FBVyxFQUFFLElBQVk7Ozs7UUFJekMscUJBQU0sR0FBRyxHQUFHLEdBQUcsSUFBSSxVQUFVLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQzs7UUFHckQsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxJQUFJLElBQUksQ0FBQztLQUN0Qzs7Ozs7O0lBRUQsbUNBQW1DLElBQVUsRUFBRSxLQUFXO1FBQ3hELHFCQUFNLEdBQUcsR0FBRyxFQUFFLFlBQVksRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDO1FBRTNDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUM7WUFDM0MsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEdBQUcsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNoRCxxQkFBTSxTQUFTLEdBQUcsR0FBRyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQzVELElBQUksT0FBTyxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsRUFBRTtZQUM3QixFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUM7U0FDZDtRQUVELEdBQUcsQ0FBQyxZQUFZLEdBQUcsQ0FBQyxLQUFLLEdBQUcsRUFBRSxHQUFHLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUV6RSxPQUFPLEdBQUcsQ0FBQztLQUNaOzs7Ozs7SUFFRCwyQkFBMkIsSUFBVSxFQUFFLEtBQVc7UUFDaEQsSUFBSSxFQUFFLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtZQUM5QyxPQUFPLEVBQUUsWUFBWSxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUM7U0FDdkM7UUFFRCxxQkFBSSxHQUFHLENBQUM7UUFDUixxQkFBTSxNQUFNLEdBQUcsZUFBZSxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsRUFBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixFQUFFLEVBQUMsQ0FBQyxDQUFDO1FBQ2pGLElBQUksUUFBUSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsRUFBRTtZQUMxQixHQUFHLEdBQUcseUJBQXlCLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1NBQy9DO2FBQU07WUFDTCxHQUFHLEdBQUcseUJBQXlCLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQzlDLEdBQUcsQ0FBQyxZQUFZLEdBQUcsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDO1lBQ3JDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDO1NBQzFCO1FBRUQsT0FBTyxHQUFHLENBQUM7S0FDWjs7Ozs7O0FDM0lEOzs7Ozs7O0FBUUEsaUJBQW9CLElBQVUsRUFBRSxHQUFXLEVBQUUsTUFBa0IsRUFBRSxLQUFlO1FBQzlFLHFCQUFNLEdBQUcsR0FBRyxjQUFjLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBRXhDLE9BQU8sV0FBVyxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO0tBQ3pDOzs7Ozs7OztBQUVELHNCQUF5QixJQUFVLEVBQUUsR0FBVyxFQUFFLE1BQWtCLEVBQUUsS0FBZTtRQUNuRixxQkFBTSxHQUFHLEdBQUcsY0FBYyxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUV4QyxPQUFPLFdBQVcsQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO0tBQzFDOzs7Ozs7OztBQUVELHlCQUE0QixJQUFVLEVBQUUsUUFBa0IsRUFBRSxRQUFnQixFQUFFLEtBQWU7UUFDM0YscUJBQU0sWUFBWSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUM7UUFDNUMscUJBQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdEMscUJBQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7OztRQUsxQyxJQUFJLE1BQU0sRUFBRTtZQUNWLFFBQVEsQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsR0FBRyxNQUFNLEdBQUcsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQ2xFO1FBQ0QsSUFBSSxJQUFJLEVBQUU7WUFDUixPQUFPLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLEdBQUcsSUFBSSxHQUFHLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQztTQUM5RDtRQUNELElBQUksWUFBWSxFQUFFO1lBQ2hCLE9BQU8sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLFlBQVksR0FBRyxRQUFRLENBQUMsQ0FBQztTQUN4RDtRQUVELE9BQU8sU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDOzs7OztLQUt4Qjs7Ozs7O0FDM0NEOzs7QUFlQTs7UUFHRSxjQUFjLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQzVCLFVBQVMsSUFBVSxFQUFFLElBQTBCO1lBQzdDLE9BQU8sTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDO2lCQUM1QixRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDakIsQ0FDRixDQUFDO1FBRUYsY0FBYyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUM3QixVQUFTLElBQVUsRUFBRSxJQUEwQjtZQUM3QyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUMvRCxDQUNGLENBQUM7UUFFRixjQUFjLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQzlCLFVBQVMsSUFBVSxFQUFFLElBQTBCO1lBQzdDLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ2pFLENBQ0YsQ0FBQztRQUVGLGNBQWMsQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLElBQUksRUFDL0IsVUFBUyxJQUFVLEVBQUUsSUFBMEI7WUFDN0MsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDNUQsQ0FDRixDQUFDO1FBRUYsY0FBYyxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUM1QixVQUFTLElBQVUsRUFBRSxJQUEwQjtZQUM3QyxPQUFPLGtCQUFrQixDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUM7aUJBQ3JELFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQzs7U0FFakIsQ0FDRixDQUFDO1FBQ0YsY0FBYyxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUM1QixVQUFTLElBQVUsRUFBRSxJQUEwQjtZQUM3QyxPQUFPLGVBQWUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQztpQkFDckMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQ2pCLENBQ0YsQ0FBQzs7UUFJRixZQUFZLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ3pCLFlBQVksQ0FBQyxTQUFTLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDN0IsWUFBWSxDQUFDLFlBQVksRUFBRSxHQUFHLENBQUMsQ0FBQzs7UUFTaEMsYUFBYSxDQUFDLEdBQUcsRUFBRSxTQUFTLENBQUMsQ0FBQztRQUM5QixhQUFhLENBQUMsR0FBRyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQzlCLGFBQWEsQ0FBQyxHQUFHLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFFOUIsYUFBYSxDQUFDLElBQUksRUFBRSxVQUFTLFFBQWlCLEVBQUUsTUFBYztZQUM1RCxPQUFPLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUMxQyxDQUFDLENBQUM7UUFFSCxhQUFhLENBQUMsS0FBSyxFQUFFLFVBQVMsUUFBaUIsRUFBRSxNQUFjO1lBQzdELE9BQU8sTUFBTSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQzVDLENBQUMsQ0FBQztRQUNILGFBQWEsQ0FBQyxNQUFNLEVBQUUsVUFBUyxRQUFpQixFQUFFLE1BQWM7WUFDOUQsT0FBTyxNQUFNLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ3ZDLENBQUMsQ0FBQztRQUVILGlCQUFpQixDQUNmLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxNQUFNLENBQUMsRUFDckIsVUFBUyxLQUFhLEVBQUUsSUFBaUIsRUFBRSxNQUF5QixFQUFFLEtBQUs7WUFDekUscUJBQU0sT0FBTyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDOztZQUUzRSxJQUFJLE9BQU8sSUFBSSxJQUFJLEVBQUU7Z0JBQ25CLElBQUksUUFBSyxPQUFPLENBQUM7YUFDbEI7aUJBQU07Z0JBQ0wsZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDLGNBQWMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDO2FBQ2xEO1lBRUQsT0FBTyxNQUFNLENBQUM7U0FDZixDQUNGLENBQUM7UUFFRixpQkFBaUIsQ0FDZixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQ2YsVUFBUyxLQUFhLEVBQUUsSUFBaUIsRUFBRSxNQUF5QixFQUFFLEtBQWE7WUFDakYsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUUzQixPQUFPLE1BQU0sQ0FBQztTQUNmLENBQ0YsQ0FBQztLQUNIOzs7Ozs7QUFJRCwwQkFBNkIsS0FBc0IsRUFBRSxNQUFjO1FBQ2pFLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDcEIsT0FBTyxLQUFLLENBQUM7U0FDZDtRQUVELHFCQUFNLElBQUksR0FBRyxRQUFRLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDaEIsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUVELHFCQUFNLFFBQVEsR0FBRyxNQUFNLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzdDLElBQUksUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQ3RCLE9BQU8sUUFBUSxDQUFDO1NBQ2pCO1FBRUQsT0FBTyxJQUFJLENBQUM7S0FDYjs7Ozs7O0FBRUQsNkJBQWdDLEtBQXNCLEVBQUUsTUFBNEI7UUFBNUIsdUJBQUE7WUFBQSxTQUFpQixTQUFTLEVBQUU7O1FBQ2xGLElBQUksUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ25CLE9BQU8sTUFBTSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzdDO1FBRUQsT0FBTyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksR0FBRyxLQUFLLENBQUM7S0FDdkQ7Ozs7Ozs7O0FBWUQsMEJBQTZCLElBQVUsRUFBRSxLQUFhLEVBQUUsTUFBb0IsRUFBRSxLQUFlO1FBQXJDLHVCQUFBO1lBQUEsU0FBUyxTQUFTLEVBQUU7O1FBQzFFLHFCQUFNLEdBQUcsR0FBRyxNQUFNLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ2hDLHFCQUFNLE1BQU0sR0FBRyxZQUFZLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBRTNDLE9BQU8sR0FBRyxDQUFDLElBQUksRUFBRSxNQUFNLEdBQUcsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO0tBQ3ZDOzs7Ozs7QUFFRCwwQkFBNkIsSUFBVSxFQUFFLEtBQWU7UUFDdEQsT0FBTyxNQUFNLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO0tBQzVCOzs7Ozs7OztBQU1ELGdDQUFtQyxJQUFVLEVBQUUsTUFBb0IsRUFBRSxLQUFlO1FBQXJDLHVCQUFBO1lBQUEsU0FBUyxTQUFTLEVBQUU7O1FBQ2pFLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxNQUFNLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxDQUFDO0tBQ2hFOzs7Ozs7O0FBRUQsZ0NBQW1DLElBQVUsRUFBRSxLQUFhLEVBQUUsSUFBK0M7UUFBL0MscUJBQUE7WUFBQSxTQUErQzs7UUFDM0cscUJBQU0sT0FBTyxHQUFHLGtCQUFrQixDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUVsRSxPQUFPLEdBQUcsQ0FBQyxJQUFJLEVBQUUsS0FBSyxHQUFHLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztLQUMxQzs7Ozs7O0FBSUQsNkJBQWdDLElBQVUsRUFBRSxLQUFlO1FBQ3pELE9BQU8sTUFBTSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDakM7Ozs7Ozs7QUFFRCw2QkFBZ0MsSUFBVSxFQUFFLEtBQXNCLEVBQUUsSUFBOEI7UUFBOUIscUJBQUE7WUFBQSxTQUE4Qjs7Ozs7UUFLaEcscUJBQU0sT0FBTyxHQUFHLGVBQWUsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRXBELE9BQU8sWUFBWSxDQUFDLElBQUksRUFBRSxZQUFZLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLE9BQU8sR0FBRyxPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUM7S0FDM0U7Ozs7Ozs7Ozs7OztJQ2pMRCxxQkFBTSxTQUFTLEdBQTRCO1FBQ3pDLENBQUMsRUFBRSxHQUFHO1FBQ04sQ0FBQyxFQUFFLEdBQUc7UUFDTixDQUFDLEVBQUUsR0FBRztRQUNOLENBQUMsRUFBRSxHQUFHO1FBQ04sQ0FBQyxFQUFFLEdBQUc7UUFDTixDQUFDLEVBQUUsR0FBRztRQUNOLENBQUMsRUFBRSxHQUFHO1FBQ04sQ0FBQyxFQUFFLEdBQUc7UUFDTixDQUFDLEVBQUUsR0FBRztRQUNOLENBQUMsRUFBRSxHQUFHO0tBQ1AsQ0FBQztJQUNGLHFCQUFNLFNBQVMsR0FBNEI7UUFDekMsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7S0FDVCxDQUFDO0lBQ0YscUJBQU0sVUFBVSxHQUFHLFVBQVUsR0FBVztRQUN0QyxPQUFPLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxHQUFHLElBQUksRUFBRSxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxJQUFJLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQ3hILENBQUM7SUFDRixxQkFBTSxPQUFPLEdBQWdGO1FBQzNGLENBQUMsRUFBRSxDQUFDLGNBQWMsRUFBRSxhQUFhLEVBQUUsQ0FBQyxTQUFTLEVBQUUsU0FBUyxDQUFDLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxVQUFVLENBQUM7UUFDN0YsQ0FBQyxFQUFFLENBQUMsY0FBYyxFQUFFLGFBQWEsRUFBRSxDQUFDLFNBQVMsRUFBRSxTQUFTLENBQUMsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLFVBQVUsQ0FBQztRQUM5RixDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsWUFBWSxFQUFFLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsU0FBUyxDQUFDO1FBQ3hGLENBQUMsRUFBRSxDQUFDLFlBQVksRUFBRSxVQUFVLEVBQUUsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxRQUFRLENBQUM7UUFDbEYsQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUFFLFVBQVUsRUFBRSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFFBQVEsQ0FBQztRQUNqRixDQUFDLEVBQUUsQ0FBQyxZQUFZLEVBQUUsVUFBVSxFQUFFLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsUUFBUSxDQUFDO0tBQ3BGLENBQUM7SUFDRixxQkFBTSxTQUFTLEdBQUcsVUFBVSxDQUFTO1FBQ25DLE9BQU8sVUFBVSxHQUFXLEVBQUUsYUFBc0I7WUFDbEQscUJBQU0sQ0FBQyxHQUFHLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUMxQixxQkFBSSxHQUFHLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ3RDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDWCxHQUFHLEdBQUcsR0FBRyxDQUFDLGFBQWEsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7YUFDbEM7WUFFRCxPQUFPLEVBQUMsR0FBYSxHQUFFLE9BQU8sQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7U0FDdkQsQ0FBQztLQUNILENBQUM7SUFDRixxQkFBTSxNQUFNLEdBQWE7UUFDdkIsT0FBTztRQUNQLFFBQVE7UUFDUixNQUFNO1FBQ04sT0FBTztRQUNQLE1BQU07UUFDTixPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO0tBQ1QsQ0FBQztBQUVGLHlCQUFhLFFBQVEsR0FBZTtRQUNsQyxJQUFJLEVBQUUsSUFBSTtRQUNWLE1BQU0sUUFBQTtRQUNOLFdBQVcsRUFBRSxNQUFNO1FBQ25CLFFBQVEsRUFBRSxxREFBcUQsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO1FBQzFFLGFBQWEsRUFBRSx1Q0FBdUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO1FBQ2pFLFdBQVcsRUFBRSxlQUFlLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztRQUN2QyxrQkFBa0IsRUFBRSxJQUFJO1FBQ3hCLGNBQWMsRUFBRTtZQUNkLEVBQUUsRUFBRSxPQUFPO1lBQ1gsR0FBRyxFQUFFLFVBQVU7WUFDZixDQUFDLEVBQUUsc0JBQXNCO1lBQ3pCLEVBQUUsRUFBRSxhQUFhO1lBQ2pCLEdBQUcsRUFBRSxtQkFBbUI7WUFDeEIsSUFBSSxFQUFFLHdCQUF3QjtTQUMvQjtRQUNELGFBQWEsRUFBRSxLQUFLO1FBQ3BCLElBQUk7OztzQkFBQyxLQUFLO1lBQ1IsT0FBTyxHQUFHLEtBQUssS0FBSyxDQUFDO1NBQ3RCO1FBQ0QsUUFBUTs7Ozs7c0JBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxPQUFPO1lBQzVCLElBQUksSUFBSSxHQUFHLEVBQUUsRUFBRTtnQkFDYixPQUFPLEdBQUcsQ0FBQzthQUNaO2lCQUFNO2dCQUNMLE9BQU8sR0FBRyxDQUFDO2FBQ1o7U0FDRjtRQUNELFFBQVEsRUFBRTtZQUNSLE9BQU8sRUFBRSx1QkFBdUI7WUFDaEMsT0FBTyxFQUFFLHNCQUFzQjtZQUMvQixRQUFRLEVBQUUsc0JBQXNCO1lBQ2hDLE9BQU8sRUFBRSxxQkFBcUI7WUFDOUIsUUFBUSxFQUFFLHNCQUFzQjtZQUNoQyxRQUFRLEVBQUUsR0FBRztTQUNkO1FBQ0QsWUFBWSxFQUFFO1lBQ1osTUFBTSxFQUFFLFFBQVE7WUFDaEIsSUFBSSxFQUFFLFFBQVE7WUFDZCxDQUFDLEVBQUUsU0FBUyxDQUFDLEdBQUcsQ0FBQztZQUNqQixFQUFFLEVBQUUsU0FBUyxDQUFDLEdBQUcsQ0FBQztZQUNsQixDQUFDLEVBQUUsU0FBUyxDQUFDLEdBQUcsQ0FBQztZQUNqQixFQUFFLEVBQUUsU0FBUyxDQUFDLEdBQUcsQ0FBQztZQUNsQixDQUFDLEVBQUUsU0FBUyxDQUFDLEdBQUcsQ0FBQztZQUNqQixFQUFFLEVBQUUsU0FBUyxDQUFDLEdBQUcsQ0FBQztZQUNsQixDQUFDLEVBQUUsU0FBUyxDQUFDLEdBQUcsQ0FBQztZQUNqQixFQUFFLEVBQUUsU0FBUyxDQUFDLEdBQUcsQ0FBQztZQUNsQixDQUFDLEVBQUUsU0FBUyxDQUFDLEdBQUcsQ0FBQztZQUNqQixFQUFFLEVBQUUsU0FBUyxDQUFDLEdBQUcsQ0FBQztZQUNsQixDQUFDLEVBQUUsU0FBUyxDQUFDLEdBQUcsQ0FBQztZQUNqQixFQUFFLEVBQUUsU0FBUyxDQUFDLEdBQUcsQ0FBQztTQUNuQjtRQUNELFFBQVE7OztZQUFSLFVBQVMsR0FBVztZQUNsQixPQUFPLEdBQUcsQ0FBQyxPQUFPLENBQUMsZUFBZSxFQUFFLFVBQVUsS0FBSztnQkFDakQsT0FBTyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDekIsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDdkI7UUFDRCxVQUFVOzs7c0JBQUMsR0FBVztZQUNwQixPQUFPLEdBQUcsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLFVBQVUsS0FBSztnQkFDdkMsT0FBTyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDekIsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDdkI7UUFDRCxJQUFJLEVBQUU7WUFDSixHQUFHLEVBQUUsQ0FBQzs7WUFDTixHQUFHLEVBQUUsRUFBRTtTQUNSO0tBQ0Y7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEhELHlCQUFhLFFBQVEsR0FBZTtRQUNsQyxJQUFJLEVBQUUsSUFBSTtRQUNWLE1BQU0sRUFBRSxtRkFBbUYsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO1FBQ3RHLFdBQVcsRUFBRSxpREFBaUQsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO1FBQ3pFLFFBQVEsRUFBRSx3REFBd0QsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO1FBQzdFLGFBQWEsRUFBRSw2QkFBNkIsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO1FBQ3ZELFdBQVcsRUFBRSxzQkFBc0IsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO1FBQzlDLGNBQWMsRUFBRTtZQUNkLEVBQUUsRUFBRSxNQUFNO1lBQ1YsR0FBRyxFQUFFLFNBQVM7WUFDZCxDQUFDLEVBQUUsV0FBVztZQUNkLEVBQUUsRUFBRSxhQUFhO1lBQ2pCLEdBQUcsRUFBRSxrQkFBa0I7WUFDdkIsSUFBSSxFQUFFLHdCQUF3QjtTQUMvQjtRQUNELFFBQVEsRUFBRTtZQUNSLE9BQU8sRUFBRSxhQUFhO1lBQ3RCLE9BQU8sRUFBRSxhQUFhO1lBQ3RCLFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLE9BQU8sRUFBRSxjQUFjO1lBQ3ZCLFFBQVEsRUFBRSxVQUFVLENBQU07Z0JBRXhCLFFBQVEsQ0FBQztvQkFDUCxLQUFLLENBQUMsQ0FBQztvQkFDUCxLQUFLLENBQUMsQ0FBQztvQkFDUCxLQUFLLENBQUM7d0JBQ0osT0FBTyw0QkFBNEIsQ0FBQztvQkFDdEMsS0FBSyxDQUFDLENBQUM7b0JBQ1AsS0FBSyxDQUFDLENBQUM7b0JBQ1AsS0FBSyxDQUFDLENBQUM7b0JBQ1AsS0FBSyxDQUFDO3dCQUNKLE9BQU8sMkJBQTJCLENBQUM7aUJBQ3RDO2FBQ0Y7WUFDRCxRQUFRLEVBQUUsR0FBRztTQUNkO1FBQ0QsWUFBWSxFQUFFO1lBQ1osTUFBTSxFQUFFLFNBQVM7WUFDakIsSUFBSSxFQUFFLFVBQVU7WUFDaEIsQ0FBQyxFQUFFLGlCQUFpQjtZQUNwQixFQUFFLEVBQUUsWUFBWTtZQUNoQixDQUFDLEVBQUUsUUFBUTtZQUNYLEVBQUUsRUFBRSxXQUFXO1lBQ2YsQ0FBQyxFQUFFLEtBQUs7WUFDUixFQUFFLEVBQUUsU0FBUztZQUNiLENBQUMsRUFBRSxLQUFLO1lBQ1IsRUFBRSxFQUFFLFFBQVE7WUFDWixDQUFDLEVBQUUsT0FBTztZQUNWLEVBQUUsRUFBRSxXQUFXO1lBQ2YsQ0FBQyxFQUFFLFFBQVE7WUFDWCxFQUFFLEVBQUUsV0FBVztTQUNoQjtRQUNELHNCQUFzQixFQUFFLDZCQUE2QjtRQUNyRCxPQUFPLEVBQUUsVUFBVSxJQUFZO1lBRTdCLHFCQUFNLE1BQU0sR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7WUFFNUIscUJBQUksU0FBUyxHQUFHLE1BQU0sR0FBRyxFQUFFLG1CQUN6QixXQUFXLEdBQUcsTUFBTSxHQUFHLEdBQUcsQ0FBQztZQUU3QixJQUFJLE1BQU0sS0FBSyxDQUFDLEVBQUU7Z0JBQ2hCLE9BQU8sTUFBTSxHQUFHLEtBQUssQ0FBQzthQUN2QjtpQkFBTSxJQUFJLFdBQVcsS0FBSyxDQUFDLEVBQUU7Z0JBQzVCLE9BQU8sTUFBTSxHQUFHLEtBQUssQ0FBQzthQUN2QjtpQkFBTSxJQUFJLFdBQVcsR0FBRyxFQUFFLElBQUksV0FBVyxHQUFHLEVBQUUsRUFBRTtnQkFDL0MsT0FBTyxNQUFNLEdBQUcsS0FBSyxDQUFDO2FBQ3ZCO2lCQUFNLElBQUksU0FBUyxLQUFLLENBQUMsRUFBRTtnQkFDMUIsT0FBTyxNQUFNLEdBQUcsS0FBSyxDQUFDO2FBQ3ZCO2lCQUFNLElBQUksU0FBUyxLQUFLLENBQUMsRUFBRTtnQkFDMUIsT0FBTyxNQUFNLEdBQUcsS0FBSyxDQUFDO2FBQ3ZCO2lCQUFNLElBQUksU0FBUyxLQUFLLENBQUMsSUFBSSxTQUFTLEtBQUssQ0FBQyxFQUFFO2dCQUM3QyxPQUFPLE1BQU0sR0FBRyxLQUFLLENBQUM7YUFDdkI7aUJBQU07Z0JBQ0wsT0FBTyxNQUFNLEdBQUcsS0FBSyxDQUFDO2FBQ3ZCO1NBQ0Y7UUFDRCxJQUFJLEVBQUU7WUFDSixHQUFHLEVBQUUsQ0FBQzs7WUFDTixHQUFHLEVBQUUsQ0FBQztTQUNQO0tBQ0Y7Ozs7Ozs7OztJQ3BGRCxxQkFBSSxjQUFjLEdBQUcsNkRBQTZELENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxtQkFDM0YsV0FBVyxHQUFHLGlEQUFpRCxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUU3RSxxQkFBSSxXQUFXLEdBQUcsQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQy9ILHFCQUFJLFdBQVcsR0FBRywyS0FBMkssQ0FBQztBQUU5TCx5QkFBYSxRQUFRLEdBQWU7UUFDbEMsSUFBSSxFQUFFLElBQUk7UUFDVixNQUFNLEVBQUUsbUZBQW1GLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztRQUN0RyxXQUFXOzs7OztZQUFYLFVBQVksSUFBVSxFQUFFLE1BQWMsRUFBRSxLQUFlO1lBQ3JELElBQUksQ0FBQyxJQUFJLEVBQUU7Z0JBQ1QsT0FBTyxjQUFjLENBQUM7YUFDdkI7WUFFRCxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUU7Z0JBQ3hCLE9BQU8sV0FBVyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQzthQUMzQztZQUVELE9BQU8sY0FBYyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztTQUM5QztRQUNELFdBQVcsYUFBQTtRQUNYLGdCQUFnQixFQUFFLFdBQVc7UUFDN0IsaUJBQWlCLEVBQUUsdUZBQXVGO1FBQzFHLHNCQUFzQixFQUFFLHlGQUF5RjtRQUNqSCxXQUFXLGFBQUE7UUFDWCxlQUFlLEVBQUUsV0FBVztRQUM1QixnQkFBZ0IsRUFBRSxXQUFXO1FBQzdCLFFBQVEsRUFBRSw2REFBNkQsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO1FBQ2xGLGFBQWEsRUFBRSxvQ0FBb0MsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO1FBQzlELFdBQVcsRUFBRSxzQkFBc0IsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO1FBQzlDLGtCQUFrQixFQUFFLElBQUk7UUFDeEIsY0FBYyxFQUFFO1lBQ2QsRUFBRSxFQUFFLE1BQU07WUFDVixHQUFHLEVBQUUsU0FBUztZQUNkLENBQUMsRUFBRSxZQUFZO1lBQ2YsRUFBRSxFQUFFLHVCQUF1QjtZQUMzQixHQUFHLEVBQUUsNEJBQTRCO1lBQ2pDLElBQUksRUFBRSxrQ0FBa0M7U0FDekM7UUFDRCxRQUFRLEVBQUU7WUFDUixPQUFPOzs7MEJBQUMsSUFBVTtnQkFDaEIsT0FBTyxVQUFVLElBQUksSUFBSSxJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxLQUFLLEdBQUcsRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDO2FBQzNFO1lBQ0QsT0FBTzs7OzBCQUFDLElBQVU7Z0JBQ2hCLE9BQU8sVUFBVSxJQUFJLElBQUksSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsS0FBSyxHQUFHLEVBQUUsQ0FBQyxHQUFHLE1BQU0sQ0FBQzthQUMzRTtZQUNELFFBQVE7OzswQkFBQyxJQUFVO2dCQUNqQixPQUFPLFVBQVUsSUFBSSxJQUFJLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLEtBQUssR0FBRyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUM7YUFDM0U7WUFDRCxPQUFPOzs7MEJBQUMsSUFBVTtnQkFDaEIsT0FBTyxVQUFVLElBQUksSUFBSSxJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxLQUFLLEdBQUcsRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDO2FBQzNFO1lBQ0QsUUFBUTs7OzBCQUFDLElBQVU7Z0JBQ2pCLE9BQU8sYUFBYSxJQUFJLGFBQWEsSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsY0FBYyxHQUFHLEVBQUUsQ0FBQyxHQUFHLE1BQU0sQ0FBQzthQUNoRztZQUNELFFBQVEsRUFBRSxHQUFHO1NBQ2Q7UUFDRCxZQUFZLEVBQUU7WUFDWixNQUFNLEVBQUUsT0FBTztZQUNmLElBQUksRUFBRSxPQUFPO1lBQ2IsQ0FBQyxFQUFFLFlBQVk7WUFDZixFQUFFLEVBQUUsV0FBVztZQUNmLENBQUMsRUFBRSxVQUFVO1lBQ2IsRUFBRSxFQUFFLFdBQVc7WUFDZixDQUFDLEVBQUUsVUFBVTtZQUNiLEVBQUUsRUFBRSxVQUFVO1lBQ2QsQ0FBQyxFQUFFLFFBQVE7WUFDWCxFQUFFLEVBQUUsU0FBUztZQUNiLENBQUMsRUFBRSxRQUFRO1lBQ1gsRUFBRSxFQUFFLFVBQVU7WUFDZCxDQUFDLEVBQUUsUUFBUTtZQUNYLEVBQUUsRUFBRSxTQUFTO1NBQ2Q7UUFDRCxzQkFBc0IsRUFBRSx3QkFBd0I7UUFDaEQsT0FBTzs7O1lBQVAsVUFBUSxJQUFZO1lBQ2xCLHFCQUFNLEdBQUcsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDekIscUJBQU0sTUFBTSxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsSUFBSSxHQUFHO2dCQUMxQixDQUFDLEdBQUcsS0FBSyxDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSSxHQUFHO29CQUM1QixDQUFDLEdBQUcsS0FBSyxDQUFDLElBQUksR0FBRzt3QkFDZixDQUFDLEdBQUcsS0FBSyxDQUFDLElBQUksR0FBRyxHQUFHLEdBQUcsQ0FBQztZQUNoQyxPQUFPLEdBQUcsR0FBRyxNQUFNLENBQUM7U0FDckI7UUFDRCxJQUFJLEVBQUU7WUFDSixHQUFHLEVBQUUsQ0FBQzs7WUFDTixHQUFHLEVBQUUsQ0FBQztTQUNQO0tBQ0Y7Ozs7Ozs7OztJQ3RGRCxxQkFBTUMsUUFBTSxHQUFhLG1GQUFtRixDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN4SCxxQkFBTUMsYUFBVyxHQUFhLGlEQUFpRCxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQzs7Ozs7SUFFM0YsZ0JBQWdCLEdBQVc7UUFDekIsT0FBTyxDQUFDLEdBQUcsR0FBRyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxHQUFHLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7S0FDdkQ7Ozs7Ozs7O0lBRUQsbUJBQW1CLEdBQVcsRUFBRSxhQUFzQixFQUFFLEdBQVcsRUFBRSxRQUFpQjtRQUNwRixxQkFBTSxNQUFNLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUV6QixRQUFRLEdBQUc7WUFDVCxLQUFLLEdBQUc7O2dCQUNOLE9BQU8sQ0FBQyxhQUFhLElBQUksUUFBUSxJQUFJLFlBQVksR0FBRyxlQUFlLENBQUM7WUFDdEUsS0FBSyxJQUFJOztnQkFDUCxJQUFJLGFBQWEsSUFBSSxRQUFRLEVBQUU7b0JBQzdCLE9BQU8sTUFBTSxJQUFJLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxTQUFTLEdBQUcsUUFBUSxDQUFDLENBQUM7aUJBQ3REO3FCQUFNO29CQUNMLE9BQU8sTUFBTSxHQUFHLFdBQVcsQ0FBQztpQkFDN0I7O1lBRUgsS0FBSyxHQUFHOztnQkFDTixPQUFPLGFBQWEsR0FBRyxRQUFRLElBQUksUUFBUSxHQUFHLFFBQVEsR0FBRyxTQUFTLENBQUMsQ0FBQztZQUN0RSxLQUFLLElBQUk7O2dCQUNQLElBQUksYUFBYSxJQUFJLFFBQVEsRUFBRTtvQkFDN0IsT0FBTyxNQUFNLElBQUksTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLFFBQVEsR0FBRyxPQUFPLENBQUMsQ0FBQztpQkFDcEQ7cUJBQU07b0JBQ0wsT0FBTyxNQUFNLEdBQUcsVUFBVSxDQUFDO2lCQUM1Qjs7WUFFSCxLQUFLLEdBQUc7O2dCQUNOLE9BQU8sYUFBYSxHQUFHLFFBQVEsSUFBSSxRQUFRLEdBQUcsUUFBUSxHQUFHLFNBQVMsQ0FBQyxDQUFDO1lBQ3RFLEtBQUssSUFBSTs7Z0JBQ1AsSUFBSSxhQUFhLElBQUksUUFBUSxFQUFFO29CQUM3QixPQUFPLE1BQU0sSUFBSSxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsUUFBUSxHQUFHLE9BQU8sQ0FBQyxDQUFDO2lCQUNwRDtxQkFBTTtvQkFDTCxPQUFPLE1BQU0sR0FBRyxVQUFVLENBQUM7aUJBQzVCOztZQUVILEtBQUssR0FBRzs7Z0JBQ04sT0FBTyxDQUFDLGFBQWEsSUFBSSxRQUFRLElBQUksS0FBSyxHQUFHLE1BQU0sQ0FBQztZQUN0RCxLQUFLLElBQUk7O2dCQUNQLElBQUksYUFBYSxJQUFJLFFBQVEsRUFBRTtvQkFDN0IsT0FBTyxNQUFNLElBQUksTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssR0FBRyxLQUFLLENBQUMsQ0FBQztpQkFDL0M7cUJBQU07b0JBQ0wsT0FBTyxNQUFNLEdBQUcsS0FBSyxDQUFDO2lCQUN2Qjs7WUFFSCxLQUFLLEdBQUc7O2dCQUNOLE9BQU8sQ0FBQyxhQUFhLElBQUksUUFBUSxJQUFJLE9BQU8sR0FBRyxTQUFTLENBQUM7WUFDM0QsS0FBSyxJQUFJOztnQkFDUCxJQUFJLGFBQWEsSUFBSSxRQUFRLEVBQUU7b0JBQzdCLE9BQU8sTUFBTSxJQUFJLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxRQUFRLEdBQUcsUUFBUSxDQUFDLENBQUM7aUJBQ3JEO3FCQUFNO29CQUNMLE9BQU8sTUFBTSxHQUFHLFFBQVEsQ0FBQztpQkFDMUI7O1lBRUgsS0FBSyxHQUFHOztnQkFDTixPQUFPLENBQUMsYUFBYSxJQUFJLFFBQVEsSUFBSSxLQUFLLEdBQUcsT0FBTyxDQUFDO1lBQ3ZELEtBQUssSUFBSTs7Z0JBQ1AsSUFBSSxhQUFhLElBQUksUUFBUSxFQUFFO29CQUM3QixPQUFPLE1BQU0sSUFBSSxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsTUFBTSxHQUFHLEtBQUssQ0FBQyxDQUFDO2lCQUNoRDtxQkFBTTtvQkFDTCxPQUFPLE1BQU0sR0FBRyxNQUFNLENBQUM7aUJBQ3hCO1NBRUo7S0FDRjtBQUVELHlCQUFhLFFBQVEsR0FBZTtRQUNsQyxJQUFJLEVBQUUsSUFBSTtRQUNWLE1BQU0sVUFBQTtRQUNOLFdBQVcsZUFBQTtRQUNYLFdBQVcsR0FBRyxVQUFVLE1BQU0sRUFBRSxXQUFXO1lBQ3pDLHFCQUFJLENBQUMsbUJBQUUsWUFBWSxHQUFHLEVBQUUsQ0FBQztZQUN6QixLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRTs7Z0JBRXZCLFlBQVksQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLE1BQU0sQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssR0FBRyxXQUFXLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2FBQ25GO1lBQ0QsT0FBTyxZQUFZLENBQUM7U0FDckIsQ0FBQ0QsUUFBTSxFQUFFQyxhQUFXLENBQUMsQ0FBQztRQUN2QixnQkFBZ0IsR0FBRyxVQUFVLFdBQVc7WUFDdEMscUJBQUksQ0FBQyxtQkFBRSxpQkFBaUIsR0FBRyxFQUFFLENBQUM7WUFDOUIsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ3ZCLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksTUFBTSxDQUFDLEdBQUcsR0FBRyxXQUFXLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2FBQ3BFO1lBQ0QsT0FBTyxpQkFBaUIsQ0FBQztTQUMxQixDQUFDQSxhQUFXLENBQUMsQ0FBQztRQUNmLGVBQWUsR0FBRyxVQUFVLE1BQU07WUFDaEMscUJBQUksQ0FBQyxtQkFBRSxnQkFBZ0IsR0FBRyxFQUFFLENBQUM7WUFDN0IsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ3ZCLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksTUFBTSxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2FBQzlEO1lBQ0QsT0FBTyxnQkFBZ0IsQ0FBQztTQUN6QixDQUFDRCxRQUFNLENBQUMsQ0FBQztRQUNWLFFBQVEsRUFBRSxrREFBa0QsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO1FBQ3ZFLGFBQWEsRUFBRSxzQkFBc0IsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO1FBQ2hELFdBQVcsRUFBRSxzQkFBc0IsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO1FBQzlDLGNBQWMsRUFBRTtZQUNkLEVBQUUsRUFBRSxNQUFNO1lBQ1YsR0FBRyxFQUFFLFNBQVM7WUFDZCxDQUFDLEVBQUUsWUFBWTtZQUNmLEVBQUUsRUFBRSxjQUFjO1lBQ2xCLEdBQUcsRUFBRSxtQkFBbUI7WUFDeEIsSUFBSSxFQUFFLHdCQUF3QjtZQUM5QixDQUFDLEVBQUUsWUFBWTtTQUNoQjtRQUNELFFBQVEsRUFBRTtZQUNSLE9BQU8sRUFBRSxhQUFhO1lBQ3RCLE9BQU8sRUFBRSxjQUFjO1lBQ3ZCLFFBQVE7OztnQkFBUixVQUFTLElBQVU7Z0JBQ2pCLFFBQVEsWUFBWSxDQUFDLElBQUksQ0FBQztvQkFDeEIsS0FBSyxDQUFDO3dCQUNKLE9BQU8saUJBQWlCLENBQUM7b0JBQzNCLEtBQUssQ0FBQyxDQUFDO29CQUNQLEtBQUssQ0FBQzt3QkFDSixPQUFPLGlCQUFpQixDQUFDO29CQUMzQixLQUFLLENBQUM7d0JBQ0osT0FBTyxrQkFBa0IsQ0FBQztvQkFDNUIsS0FBSyxDQUFDO3dCQUNKLE9BQU8sbUJBQW1CLENBQUM7b0JBQzdCLEtBQUssQ0FBQzt3QkFDSixPQUFPLGdCQUFnQixDQUFDO29CQUMxQixLQUFLLENBQUM7d0JBQ0osT0FBTyxpQkFBaUIsQ0FBQztpQkFDNUI7YUFDRjtZQUNELE9BQU8sRUFBRSxjQUFjO1lBQ3ZCLFFBQVE7OztnQkFBUixVQUFTLElBQVU7Z0JBQ2pCLFFBQVEsWUFBWSxDQUFDLElBQUksQ0FBQztvQkFDeEIsS0FBSyxDQUFDO3dCQUNKLE9BQU8sdUJBQXVCLENBQUM7b0JBQ2pDLEtBQUssQ0FBQyxDQUFDO29CQUNQLEtBQUssQ0FBQzt3QkFDSixPQUFPLHNCQUFzQixDQUFDO29CQUNoQyxLQUFLLENBQUM7d0JBQ0osT0FBTyx1QkFBdUIsQ0FBQztvQkFDakMsS0FBSyxDQUFDLENBQUM7b0JBQ1AsS0FBSyxDQUFDO3dCQUNKLE9BQU8sc0JBQXNCLENBQUM7b0JBQ2hDLEtBQUssQ0FBQzt3QkFDSixPQUFPLHVCQUF1QixDQUFDO2lCQUNsQzthQUNGO1lBQ0QsUUFBUSxFQUFFLEdBQUc7U0FDZDtRQUNELFlBQVksRUFBRTtZQUNaLE1BQU0sRUFBRSxPQUFPO1lBQ2YsSUFBSSxFQUFFLFNBQVM7WUFDZixDQUFDLEVBQUUsU0FBUztZQUNaLEVBQUUsRUFBRSxTQUFTO1lBQ2IsQ0FBQyxFQUFFLFNBQVM7WUFDWixFQUFFLEVBQUUsU0FBUztZQUNiLENBQUMsRUFBRSxTQUFTO1lBQ1osRUFBRSxFQUFFLFNBQVM7WUFDYixDQUFDLEVBQUUsU0FBUztZQUNaLEVBQUUsRUFBRSxTQUFTO1lBQ2IsQ0FBQyxFQUFFLFNBQVM7WUFDWixFQUFFLEVBQUUsU0FBUztZQUNiLENBQUMsRUFBRSxTQUFTO1lBQ1osRUFBRSxFQUFFLFNBQVM7U0FDZDtRQUNELHNCQUFzQixFQUFFLFdBQVc7UUFDbkMsT0FBTyxFQUFFLEtBQUs7UUFDZCxJQUFJLEVBQUU7WUFDSixHQUFHLEVBQUUsQ0FBQzs7WUFDTixHQUFHLEVBQUUsQ0FBQztTQUNQO0tBQ0Y7Ozs7Ozs7Ozs7QUMzS0QseUJBQWEsUUFBUSxHQUFlO1FBQ2xDLElBQUksRUFBRSxJQUFJO1FBQ1YsTUFBTSxFQUFHLHFGQUFxRixDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7UUFDekcsV0FBVyxFQUFHLGlEQUFpRCxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7UUFDMUUsUUFBUSxFQUFHLG9EQUFvRCxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7UUFDMUUsYUFBYSxFQUFHLDZCQUE2QixDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7UUFDeEQsV0FBVyxFQUFHLHNCQUFzQixDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7UUFDL0MsY0FBYyxFQUFHO1lBQ2IsRUFBRSxFQUFHLE9BQU87WUFDWixHQUFHLEVBQUcsVUFBVTtZQUNoQixDQUFDLEVBQUcsWUFBWTtZQUNoQixFQUFFLEVBQUcsY0FBYztZQUNuQixHQUFHLEVBQUcsb0JBQW9CO1lBQzFCLElBQUksRUFBRyxvQ0FBb0M7U0FDOUM7UUFDRCxRQUFRLEVBQUc7WUFDUCxPQUFPLEVBQUcsZ0JBQWdCO1lBQzFCLE9BQU8sRUFBRyxtQkFBbUI7WUFDN0IsUUFBUSxFQUFHLGtCQUFrQjtZQUM3QixPQUFPLEVBQUcsZ0JBQWdCO1lBQzFCLFFBQVEsRUFBRyxvQkFBb0I7WUFDL0IsUUFBUSxFQUFHLEdBQUc7U0FDakI7UUFDRCxZQUFZLEVBQUc7WUFDWCxNQUFNLEVBQUcsT0FBTztZQUNoQixJQUFJLEVBQUcsVUFBVTtZQUNqQixDQUFDLEVBQUcsYUFBYTtZQUNqQixDQUFDLEVBQUcsVUFBVTtZQUNkLEVBQUUsRUFBRyxhQUFhO1lBQ2xCLENBQUMsRUFBRyxTQUFTO1lBQ2IsRUFBRSxFQUFHLFVBQVU7WUFDZixDQUFDLEVBQUcsUUFBUTtZQUNaLEVBQUUsRUFBRyxTQUFTO1lBQ2QsQ0FBQyxFQUFHLFVBQVU7WUFDZCxFQUFFLEVBQUcsWUFBWTtZQUNqQixDQUFDLEVBQUcsT0FBTztZQUNYLEVBQUUsRUFBRyxPQUFPO1NBQ2Y7UUFDRCxzQkFBc0IsRUFBRSxXQUFXO1FBQ25DLE9BQU8sRUFBRyxLQUFLO1FBQ2YsSUFBSSxFQUFHO1lBQ0gsR0FBRyxFQUFHLENBQUM7O1lBQ1AsR0FBRyxFQUFHLENBQUM7U0FDVjtLQUNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7SUN0Q0QsNkJBQTZCLEdBQVcsRUFBRSxhQUFzQixFQUFFLEdBQVcsRUFBRSxRQUFpQjtRQUM5RixxQkFBTSxNQUFNLEdBQXdDO1lBQ2xELEdBQUcsRUFBRSxDQUFDLGFBQWEsRUFBRSxjQUFjLENBQUM7WUFDcEMsR0FBRyxFQUFFLENBQUMsYUFBYSxFQUFFLGNBQWMsQ0FBQztZQUNwQyxHQUFHLEVBQUUsQ0FBQyxTQUFTLEVBQUUsV0FBVyxDQUFDO1lBQzdCLElBQUksRUFBRSxDQUFDLEdBQUcsR0FBRyxPQUFPLEVBQUUsR0FBRyxHQUFHLFFBQVEsQ0FBQztZQUNyQyxHQUFHLEVBQUUsQ0FBQyxXQUFXLEVBQUUsYUFBYSxDQUFDO1lBQ2pDLElBQUksRUFBRSxDQUFDLEdBQUcsR0FBRyxTQUFTLEVBQUUsR0FBRyxHQUFHLFVBQVUsQ0FBQztZQUN6QyxHQUFHLEVBQUUsQ0FBQyxVQUFVLEVBQUUsWUFBWSxDQUFDO1lBQy9CLElBQUksRUFBRSxDQUFDLEdBQUcsR0FBRyxRQUFRLEVBQUUsR0FBRyxHQUFHLFNBQVMsQ0FBQztTQUN4QyxDQUFDO1FBQ0YsT0FBTyxhQUFhLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUN4RDtBQUVELHlCQUFhLFFBQVEsR0FBZTtRQUNsQyxJQUFJLEVBQUUsSUFBSTtRQUNWLE1BQU0sRUFBRSxvRkFBb0YsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO1FBQ3ZHLFdBQVcsRUFBRSw0REFBNEQsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO1FBQ3BGLGdCQUFnQixFQUFFLElBQUk7UUFDdEIsUUFBUSxFQUFFLDZEQUE2RCxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7UUFDbEYsYUFBYSxFQUFFLDZCQUE2QixDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7UUFDdkQsV0FBVyxFQUFFLHNCQUFzQixDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7UUFDOUMsa0JBQWtCLEVBQUUsSUFBSTtRQUN4QixjQUFjLEVBQUU7WUFDZCxFQUFFLEVBQUUsT0FBTztZQUNYLEdBQUcsRUFBRSxVQUFVO1lBQ2YsQ0FBQyxFQUFFLFlBQVk7WUFDZixFQUFFLEVBQUUsY0FBYztZQUNsQixHQUFHLEVBQUUsb0JBQW9CO1lBQ3pCLElBQUksRUFBRSwwQkFBMEI7U0FDakM7UUFDRCxRQUFRLEVBQUU7WUFDUixPQUFPLEVBQUUscUJBQXFCO1lBQzlCLFFBQVEsRUFBRSxHQUFHO1lBQ2IsT0FBTyxFQUFFLHNCQUFzQjtZQUMvQixRQUFRLEVBQUUsb0JBQW9CO1lBQzlCLE9BQU8sRUFBRSx1QkFBdUI7WUFDaEMsUUFBUSxFQUFFLDhCQUE4QjtTQUN6QztRQUNELFlBQVksRUFBRTtZQUNaLE1BQU0sRUFBRSxPQUFPO1lBQ2YsSUFBSSxFQUFFLFFBQVE7WUFDZCxDQUFDLEVBQUUsbUJBQW1CO1lBQ3RCLEVBQUUsRUFBRSxhQUFhO1lBQ2pCLENBQUMsRUFBRSxtQkFBbUI7WUFDdEIsRUFBRSxFQUFFLFlBQVk7WUFDaEIsQ0FBQyxFQUFFLG1CQUFtQjtZQUN0QixFQUFFLEVBQUUsWUFBWTtZQUNoQixDQUFDLEVBQUUsbUJBQW1CO1lBQ3RCLEVBQUUsRUFBRSxtQkFBbUI7WUFDdkIsQ0FBQyxFQUFFLG1CQUFtQjtZQUN0QixFQUFFLEVBQUUsbUJBQW1CO1lBQ3ZCLENBQUMsRUFBRSxtQkFBbUI7WUFDdEIsRUFBRSxFQUFFLG1CQUFtQjtTQUN4QjtRQUNELHNCQUFzQixFQUFFLFdBQVc7UUFDbkMsT0FBTyxFQUFFLEtBQUs7UUFDZCxJQUFJLEVBQUU7WUFDSixHQUFHLEVBQUUsQ0FBQzs7WUFDTixHQUFHLEVBQUUsQ0FBQztTQUNQO0tBQ0Y7Ozs7Ozs7Ozs7Ozs7QUNoRUQseUJBQWEsVUFBVSxHQUFlO1FBQ3BDLElBQUksRUFBRSxPQUFPO1FBQ2IsTUFBTSxFQUFHLHVGQUF1RixDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7UUFDM0csV0FBVyxFQUFHLGlEQUFpRCxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7UUFDMUUsUUFBUSxFQUFHLDBEQUEwRCxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7UUFDaEYsYUFBYSxFQUFHLDZCQUE2QixDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7UUFDeEQsV0FBVyxFQUFHLHNCQUFzQixDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7UUFDL0MsY0FBYyxFQUFHO1lBQ2YsRUFBRSxFQUFHLE9BQU87WUFDWixHQUFHLEVBQUcsVUFBVTtZQUNoQixDQUFDLEVBQUcsWUFBWTtZQUNoQixFQUFFLEVBQUcsYUFBYTtZQUNsQixHQUFHLEVBQUcsbUJBQW1CO1lBQ3pCLElBQUksRUFBRyx5QkFBeUI7U0FDakM7UUFDRCxRQUFRLEVBQUc7WUFDVCxPQUFPLEVBQUcsZUFBZTtZQUN6QixPQUFPLEVBQUcsa0JBQWtCO1lBQzVCLFFBQVEsRUFBRyxjQUFjO1lBQ3pCLE9BQU8sRUFBRyxtQkFBbUI7WUFDN0IsUUFBUSxFQUFHLHFCQUFxQjtZQUNoQyxRQUFRLEVBQUcsR0FBRztTQUNmO1FBQ0QsWUFBWSxFQUFHO1lBQ2IsTUFBTSxFQUFHLE9BQU87WUFDaEIsSUFBSSxFQUFHLFFBQVE7WUFDZixDQUFDLEVBQUcsZUFBZTtZQUNuQixFQUFFLEVBQUcsWUFBWTtZQUNqQixDQUFDLEVBQUcsVUFBVTtZQUNkLEVBQUUsRUFBRyxZQUFZO1lBQ2pCLENBQUMsRUFBRyxTQUFTO1lBQ2IsRUFBRSxFQUFHLFVBQVU7WUFDZixDQUFDLEVBQUcsT0FBTztZQUNYLEVBQUUsRUFBRyxTQUFTO1lBQ2QsQ0FBQyxFQUFHLFNBQVM7WUFDYixFQUFFLEVBQUcsV0FBVztZQUNoQixDQUFDLEVBQUcsUUFBUTtZQUNaLEVBQUUsRUFBRyxVQUFVO1NBQ2hCO1FBQ0Qsc0JBQXNCLEVBQUUsc0JBQXNCO1FBQzlDLE9BQU87OztZQUFQLFVBQVEsSUFBWTtZQUNsQixxQkFBTSxHQUFHLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3pCLHFCQUFNLENBQUMsR0FBRyxHQUFHLEdBQUcsRUFBRSxtQkFDaEIsTUFBTSxHQUFHLENBQUMsQ0FBQyxFQUFFLEdBQUcsR0FBRyxHQUFHLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLElBQUk7Z0JBQ3hDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxJQUFJO29CQUNkLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxJQUFJO3dCQUNkLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1lBQ2hDLE9BQU8sR0FBRyxHQUFHLE1BQU0sQ0FBQztTQUNyQjtRQUNELElBQUksRUFBRztZQUNMLEdBQUcsRUFBRyxDQUFDOztZQUNQLEdBQUcsRUFBRyxDQUFDO1NBQ1I7S0FDRjs7Ozs7Ozs7SUNyREQscUJBQUlFLGdCQUFjLEdBQUcsNkRBQTZELENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxtQkFDM0ZELGFBQVcsR0FBRyxpREFBaUQsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7SUFFN0UscUJBQUlFLGFBQVcsR0FBRyxDQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDL0gscUJBQUlDLGFBQVcsR0FBRyxrTEFBa0wsQ0FBQztBQUVyTSx5QkFBYSxVQUFVLEdBQWU7UUFDcEMsSUFBSSxFQUFFLE9BQU87UUFDYixNQUFNLEVBQUUsMEZBQTBGLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztRQUM3RyxXQUFXOzs7OztZQUFYLFVBQVksSUFBVSxFQUFFLE1BQWMsRUFBRSxLQUFlO1lBQ3JELElBQUksQ0FBQyxJQUFJLEVBQUU7Z0JBQ1QsT0FBT0YsZ0JBQWMsQ0FBQzthQUN2QjtpQkFBTSxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUU7Z0JBQy9CLE9BQU9ELGFBQVcsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7YUFDM0M7aUJBQU07Z0JBQ0wsT0FBT0MsZ0JBQWMsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7YUFDOUM7U0FDRjtRQUNELFdBQVcsZUFBQTtRQUNYLGdCQUFnQixFQUFFRSxhQUFXO1FBQzdCLGlCQUFpQixFQUFFLDhGQUE4RjtRQUNqSCxzQkFBc0IsRUFBRSx5RkFBeUY7UUFDakgsV0FBVyxlQUFBO1FBQ1gsZUFBZSxFQUFFRCxhQUFXO1FBQzVCLGdCQUFnQixFQUFFQSxhQUFXO1FBQzdCLFFBQVEsRUFBRSxzREFBc0QsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO1FBQzNFLGFBQWEsRUFBRSxvQ0FBb0MsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO1FBQzlELFdBQVcsRUFBRSxzQkFBc0IsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO1FBQzlDLGtCQUFrQixFQUFFLElBQUk7UUFDeEIsY0FBYyxFQUFFO1lBQ2QsRUFBRSxFQUFFLFFBQVE7WUFDWixHQUFHLEVBQUUsV0FBVztZQUNoQixDQUFDLEVBQUUsWUFBWTtZQUNmLEVBQUUsRUFBRSx1QkFBdUI7WUFDM0IsR0FBRyxFQUFFLDhCQUE4QjtZQUNuQyxJQUFJLEVBQUUsb0NBQW9DO1NBQzNDO1FBQ0QsUUFBUSxFQUFFO1lBQ1IsT0FBTzs7O2dCQUFQLFVBQVEsSUFBVTtnQkFDaEIsT0FBTyxXQUFXLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsR0FBRyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUM7YUFDbkU7WUFDRCxPQUFPOzs7Z0JBQVAsVUFBUSxJQUFVO2dCQUNoQixPQUFPLGNBQWMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQyxHQUFHLE1BQU0sQ0FBQzthQUN0RTtZQUNELFFBQVE7OztnQkFBUixVQUFTLElBQVU7Z0JBQ2pCLE9BQU8sWUFBWSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDO2FBQ3BFO1lBQ0QsT0FBTzs7O2dCQUFQLFVBQVEsSUFBVTtnQkFDaEIsT0FBTyxZQUFZLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsR0FBRyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUM7YUFDcEU7WUFDRCxRQUFROzs7Z0JBQVIsVUFBUyxJQUFVO2dCQUNqQixPQUFPLHdCQUF3QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDO2FBQ2hGO1lBQ0QsUUFBUSxFQUFFLEdBQUc7U0FDZDtRQUNELFlBQVksRUFBRTtZQUNaLE1BQU0sRUFBRSxPQUFPO1lBQ2YsSUFBSSxFQUFFLFNBQVM7WUFDZixDQUFDLEVBQUUsZUFBZTtZQUNsQixFQUFFLEVBQUUsYUFBYTtZQUNqQixDQUFDLEVBQUUsV0FBVztZQUNkLEVBQUUsRUFBRSxZQUFZO1lBQ2hCLENBQUMsRUFBRSxVQUFVO1lBQ2IsRUFBRSxFQUFFLFVBQVU7WUFDZCxDQUFDLEVBQUUsUUFBUTtZQUNYLEVBQUUsRUFBRSxTQUFTO1lBQ2IsQ0FBQyxFQUFFLFFBQVE7WUFDWCxFQUFFLEVBQUUsVUFBVTtZQUNkLENBQUMsRUFBRSxRQUFRO1lBQ1gsRUFBRSxFQUFFLFNBQVM7U0FDZDtRQUNELHNCQUFzQixFQUFFLFVBQVU7UUFDbEMsT0FBTyxFQUFFLEtBQUs7UUFDZCxJQUFJLEVBQUU7WUFDSixHQUFHLEVBQUUsQ0FBQzs7WUFDTixHQUFHLEVBQUUsQ0FBQztTQUNQO0tBQ0Y7Ozs7Ozs7OztJQzVFRCxxQkFBSUQsZ0JBQWMsR0FBRyw2REFBNkQsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLG1CQUMzRkQsYUFBVyxHQUFHLGlEQUFpRCxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUU3RSxxQkFBSUUsYUFBVyxHQUFHLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztJQUMvSCxxQkFBSUMsYUFBVyxHQUFHLGtMQUFrTCxDQUFDO0FBRXJNLHlCQUFhLFFBQVEsR0FBZTtRQUNsQyxJQUFJLEVBQUUsSUFBSTtRQUNWLE1BQU0sRUFBRSwwRkFBMEYsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO1FBQzdHLFdBQVc7Ozs7O1lBQVgsVUFBWSxJQUFVLEVBQUUsTUFBYyxFQUFFLEtBQWU7WUFDckQsSUFBSSxDQUFDLElBQUksRUFBRTtnQkFDVCxPQUFPRixnQkFBYyxDQUFDO2FBQ3ZCO1lBRUQsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFO2dCQUN4QixPQUFPRCxhQUFXLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO2FBQzNDO1lBRUQsT0FBT0MsZ0JBQWMsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7U0FDOUM7UUFDRCxXQUFXLGVBQUE7UUFDWCxnQkFBZ0IsRUFBRUUsYUFBVztRQUM3QixpQkFBaUIsRUFBRSw4RkFBOEY7UUFDakgsc0JBQXNCLEVBQUUseUZBQXlGO1FBQ2pILFdBQVcsZUFBQTtRQUNYLGVBQWUsRUFBRUQsYUFBVztRQUM1QixnQkFBZ0IsRUFBRUEsYUFBVztRQUM3QixRQUFRLEVBQUUsc0RBQXNELENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztRQUMzRSxhQUFhLEVBQUUsb0NBQW9DLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztRQUM5RCxXQUFXLEVBQUUsc0JBQXNCLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztRQUM5QyxrQkFBa0IsRUFBRSxJQUFJO1FBQ3hCLGNBQWMsRUFBRTtZQUNkLEVBQUUsRUFBRSxNQUFNO1lBQ1YsR0FBRyxFQUFFLFNBQVM7WUFDZCxDQUFDLEVBQUUsWUFBWTtZQUNmLEVBQUUsRUFBRSx1QkFBdUI7WUFDM0IsR0FBRyxFQUFFLDRCQUE0QjtZQUNqQyxJQUFJLEVBQUUsa0NBQWtDO1NBQ3pDO1FBQ0QsUUFBUSxFQUFFO1lBQ1IsT0FBTzs7OzBCQUFDLElBQVU7Z0JBQ2hCLE9BQU8sV0FBVyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDO2FBQ25FO1lBQ0QsT0FBTzs7OzBCQUFDLElBQVU7Z0JBQ2hCLE9BQU8sY0FBYyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDO2FBQ3RFO1lBQ0QsUUFBUTs7OzBCQUFDLElBQVU7Z0JBQ2pCLE9BQU8sWUFBWSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDO2FBQ3BFO1lBQ0QsT0FBTzs7OzBCQUFDLElBQVU7Z0JBQ2hCLE9BQU8sWUFBWSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDO2FBQ3BFO1lBQ0QsUUFBUTs7OzBCQUFDLElBQVU7Z0JBQ2pCLE9BQU8sd0JBQXdCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsR0FBRyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUM7YUFDaEY7WUFDRCxRQUFRLEVBQUUsR0FBRztTQUNkO1FBQ0QsWUFBWSxFQUFFO1lBQ1osTUFBTSxFQUFFLE9BQU87WUFDZixJQUFJLEVBQUUsU0FBUztZQUNmLENBQUMsRUFBRSxlQUFlO1lBQ2xCLEVBQUUsRUFBRSxhQUFhO1lBQ2pCLENBQUMsRUFBRSxXQUFXO1lBQ2QsRUFBRSxFQUFFLFlBQVk7WUFDaEIsQ0FBQyxFQUFFLFVBQVU7WUFDYixFQUFFLEVBQUUsVUFBVTtZQUNkLENBQUMsRUFBRSxRQUFRO1lBQ1gsRUFBRSxFQUFFLFNBQVM7WUFDYixDQUFDLEVBQUUsUUFBUTtZQUNYLEVBQUUsRUFBRSxVQUFVO1lBQ2QsQ0FBQyxFQUFFLFFBQVE7WUFDWCxFQUFFLEVBQUUsU0FBUztTQUNkO1FBQ0Qsc0JBQXNCLEVBQUUsVUFBVTtRQUNsQyxPQUFPLEVBQUUsS0FBSztRQUNkLElBQUksRUFBRTtZQUNKLEdBQUcsRUFBRSxDQUFDOztZQUNOLEdBQUcsRUFBRSxDQUFDO1NBQ1A7S0FDRjs7Ozs7Ozs7O0lDL0VELHFCQUFJRCxnQkFBYyxHQUFHLDZEQUE2RCxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM5RixxQkFBSUQsYUFBVyxHQUFHLGlEQUFpRCxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUUvRSx5QkFBYSxVQUFVLEdBQWU7UUFDcEMsSUFBSSxFQUFFLE9BQU87UUFDYixNQUFNLEVBQUUsMEZBQTBGLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztRQUM3RyxXQUFXOzs7OztZQUFYLFVBQVksSUFBVSxFQUFFLE1BQWMsRUFBRSxLQUFlO1lBQ3JELElBQUksQ0FBQyxJQUFJLEVBQUU7Z0JBQ1QsT0FBT0MsZ0JBQWMsQ0FBQzthQUN2QjtpQkFBTSxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUU7Z0JBQy9CLE9BQU9ELGFBQVcsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7YUFDM0M7aUJBQU07Z0JBQ0wsT0FBT0MsZ0JBQWMsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7YUFDOUM7U0FDRjtRQUNELGdCQUFnQixFQUFFLElBQUk7UUFDdEIsUUFBUSxFQUFFLHNEQUFzRCxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7UUFDM0UsYUFBYSxFQUFFLG9DQUFvQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7UUFDOUQsV0FBVyxFQUFFLHNCQUFzQixDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7UUFDOUMsa0JBQWtCLEVBQUUsSUFBSTtRQUN4QixjQUFjLEVBQUU7WUFDZCxFQUFFLEVBQUUsUUFBUTtZQUNaLEdBQUcsRUFBRSxXQUFXO1lBQ2hCLENBQUMsRUFBRSxZQUFZO1lBQ2YsRUFBRSxFQUFFLHVCQUF1QjtZQUMzQixHQUFHLEVBQUUsOEJBQThCO1lBQ25DLElBQUksRUFBRSxvQ0FBb0M7U0FDM0M7UUFDRCxRQUFRLEVBQUU7WUFDUixPQUFPOzs7Z0JBQVAsVUFBUSxJQUFVO2dCQUNoQixPQUFPLFdBQVcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQyxHQUFHLE1BQU0sQ0FBQzthQUNuRTtZQUNELE9BQU87OztnQkFBUCxVQUFRLElBQVU7Z0JBQ2hCLE9BQU8sY0FBYyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDO2FBQ3RFO1lBQ0QsUUFBUTs7O2dCQUFSLFVBQVMsSUFBVTtnQkFDakIsT0FBTyxZQUFZLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsR0FBRyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUM7YUFDcEU7WUFDRCxPQUFPOzs7Z0JBQVAsVUFBUSxJQUFVO2dCQUNoQixPQUFPLFlBQVksSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQyxHQUFHLE1BQU0sQ0FBQzthQUNwRTtZQUNELFFBQVE7OztnQkFBUixVQUFTLElBQVU7Z0JBQ2pCLE9BQU8sd0JBQXdCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsR0FBRyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUM7YUFDaEY7WUFDRCxRQUFRLEVBQUUsR0FBRztTQUNkO1FBQ0QsWUFBWSxFQUFFO1lBQ1osTUFBTSxFQUFFLE9BQU87WUFDZixJQUFJLEVBQUUsU0FBUztZQUNmLENBQUMsRUFBRSxlQUFlO1lBQ2xCLEVBQUUsRUFBRSxhQUFhO1lBQ2pCLENBQUMsRUFBRSxXQUFXO1lBQ2QsRUFBRSxFQUFFLFlBQVk7WUFDaEIsQ0FBQyxFQUFFLFVBQVU7WUFDYixFQUFFLEVBQUUsVUFBVTtZQUNkLENBQUMsRUFBRSxRQUFRO1lBQ1gsRUFBRSxFQUFFLFNBQVM7WUFDYixDQUFDLEVBQUUsUUFBUTtZQUNYLEVBQUUsRUFBRSxVQUFVO1lBQ2QsQ0FBQyxFQUFFLFFBQVE7WUFDWCxFQUFFLEVBQUUsU0FBUztTQUNkO1FBQ0Qsc0JBQXNCLEVBQUUsVUFBVTtRQUNsQyxPQUFPLEVBQUUsS0FBSztRQUNkLElBQUksRUFBRTtZQUNKLEdBQUcsRUFBRSxDQUFDOztZQUNOLEdBQUcsRUFBRSxDQUFDO1NBQ1A7S0FDRjs7Ozs7Ozs7Ozs7O0lDdEVELHFCQUFJLFdBQVcsR0FBRyx1RUFBdUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLG1CQUNsRyxhQUFhLEdBQUc7UUFDZCxPQUFPLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRO1FBQ2xFLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBRSxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUUsV0FBVyxDQUFDLENBQUMsQ0FBQztLQUMvQyxDQUFDOzs7Ozs7OztJQUVKLHFCQUFtQixHQUFXLEVBQUUsYUFBc0IsRUFBRSxHQUFXLEVBQUUsUUFBaUI7UUFDcEYscUJBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUNoQixRQUFRLEdBQUc7WUFDVCxLQUFLLEdBQUc7Z0JBQ04sT0FBTyxRQUFRLEdBQUcsbUJBQW1CLEdBQUcsaUJBQWlCLENBQUM7WUFDNUQsS0FBSyxJQUFJO2dCQUNQLE9BQU8sUUFBUSxHQUFHLFVBQVUsR0FBRyxVQUFVLENBQUM7WUFDNUMsS0FBSyxHQUFHO2dCQUNOLE9BQU8sUUFBUSxHQUFHLFVBQVUsR0FBRyxVQUFVLENBQUM7WUFDNUMsS0FBSyxJQUFJO2dCQUNQLE1BQU0sR0FBRyxRQUFRLEdBQUcsVUFBVSxHQUFHLFdBQVcsQ0FBQztnQkFDN0MsTUFBTTtZQUNSLEtBQUssR0FBRztnQkFDTixPQUFPLFFBQVEsR0FBRyxRQUFRLEdBQUcsT0FBTyxDQUFDO1lBQ3ZDLEtBQUssSUFBSTtnQkFDUCxNQUFNLEdBQUcsUUFBUSxHQUFHLFFBQVEsR0FBRyxRQUFRLENBQUM7Z0JBQ3hDLE1BQU07WUFDUixLQUFLLEdBQUc7Z0JBQ04sT0FBTyxRQUFRLEdBQUcsUUFBUSxHQUFHLE9BQU8sQ0FBQztZQUN2QyxLQUFLLElBQUk7Z0JBQ1AsTUFBTSxHQUFHLFFBQVEsR0FBRyxRQUFRLEdBQUcsUUFBUSxDQUFDO2dCQUN4QyxNQUFNO1lBQ1IsS0FBSyxHQUFHO2dCQUNOLE9BQU8sUUFBUSxHQUFHLFdBQVcsR0FBRyxVQUFVLENBQUM7WUFDN0MsS0FBSyxJQUFJO2dCQUNQLE1BQU0sR0FBRyxRQUFRLEdBQUcsV0FBVyxHQUFHLFdBQVcsQ0FBQztnQkFDOUMsTUFBTTtZQUNSLEtBQUssR0FBRztnQkFDTixPQUFPLFFBQVEsR0FBRyxRQUFRLEdBQUcsT0FBTyxDQUFDO1lBQ3ZDLEtBQUssSUFBSTtnQkFDUCxNQUFNLEdBQUcsUUFBUSxHQUFHLFFBQVEsR0FBRyxRQUFRLENBQUM7Z0JBQ3hDLE1BQU07U0FDVDtRQUNELE1BQU0sR0FBRyxZQUFZLENBQUMsR0FBRyxFQUFFLFFBQVEsQ0FBQyxHQUFHLEdBQUcsR0FBRyxNQUFNLENBQUM7UUFDcEQsT0FBTyxNQUFNLENBQUM7S0FDZjs7Ozs7O0lBRUQsc0JBQXNCLEdBQVcsRUFBRSxRQUFpQjtRQUNsRCxPQUFPLEdBQUcsR0FBRyxFQUFFLElBQUksUUFBUSxHQUFHLGFBQWEsQ0FBQyxHQUFHLENBQUMsR0FBRyxXQUFXLENBQUMsR0FBRyxDQUFDLElBQUksR0FBRyxDQUFDO0tBQzVFO0FBRUQseUJBQWEsUUFBUSxHQUFlO1FBQ2xDLElBQUksRUFBRSxJQUFJO1FBQ1YsTUFBTSxFQUFFLDBHQUEwRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7UUFDN0gsV0FBVyxFQUFFLHNFQUFzRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7UUFDOUYsUUFBUSxFQUFFLG9FQUFvRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7UUFDekYsYUFBYSxFQUFFLHNCQUFzQixDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7UUFDaEQsV0FBVyxFQUFFLHNCQUFzQixDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7UUFDOUMsY0FBYyxFQUFFO1lBQ2QsRUFBRSxFQUFFLE9BQU87WUFDWCxHQUFHLEVBQUUsVUFBVTtZQUNmLENBQUMsRUFBRSxZQUFZO1lBQ2YsRUFBRSxFQUFFLGtCQUFrQjtZQUN0QixHQUFHLEVBQUUsK0JBQStCO1lBQ3BDLElBQUksRUFBRSxxQ0FBcUM7WUFDM0MsQ0FBQyxFQUFFLFVBQVU7WUFDYixFQUFFLEVBQUUsYUFBYTtZQUNqQixHQUFHLEVBQUUsMEJBQTBCO1lBQy9CLElBQUksRUFBRSwrQkFBK0I7U0FDdEM7UUFDRCxRQUFRLEVBQUU7WUFDUixPQUFPLEVBQUUsbUJBQW1CO1lBQzVCLE9BQU8sRUFBRSxxQkFBcUI7WUFDOUIsUUFBUSxFQUFFLGVBQWU7WUFDekIsT0FBTyxFQUFFLGtCQUFrQjtZQUMzQixRQUFRLEVBQUUsMkJBQTJCO1lBQ3JDLFFBQVEsRUFBRSxHQUFHO1NBQ2Q7UUFDRCxZQUFZLEVBQUU7WUFDWixNQUFNLEVBQUUsV0FBVztZQUNuQixJQUFJLEVBQUUsV0FBVztZQUNqQixDQUFDLEVBQUVHLFdBQVM7WUFDWixFQUFFLEVBQUVBLFdBQVM7WUFDYixDQUFDLEVBQUVBLFdBQVM7WUFDWixFQUFFLEVBQUVBLFdBQVM7WUFDYixDQUFDLEVBQUVBLFdBQVM7WUFDWixFQUFFLEVBQUVBLFdBQVM7WUFDYixDQUFDLEVBQUVBLFdBQVM7WUFDWixFQUFFLEVBQUVBLFdBQVM7WUFDYixDQUFDLEVBQUVBLFdBQVM7WUFDWixFQUFFLEVBQUVBLFdBQVM7WUFDYixDQUFDLEVBQUVBLFdBQVM7WUFDWixFQUFFLEVBQUVBLFdBQVM7U0FDZDtRQUNELHNCQUFzQixFQUFFLFdBQVc7UUFDbkMsT0FBTyxFQUFFLEtBQUs7UUFDZCxJQUFJLEVBQUU7WUFDSixHQUFHLEVBQUUsQ0FBQzs7WUFDTixHQUFHLEVBQUUsQ0FBQztTQUNQO0tBQ0Y7Ozs7Ozs7Ozs7Ozs7QUMvRkQseUJBQWEsUUFBUSxHQUFlO1FBQ2xDLElBQUksRUFBRSxJQUFJO1FBQ1YsTUFBTSxFQUFFLHNGQUFzRixDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7UUFDekcsV0FBVyxFQUFFLGdFQUFnRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7UUFDeEYsZ0JBQWdCLEVBQUUsSUFBSTtRQUN0QixRQUFRLEVBQUUscURBQXFELENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztRQUMxRSxhQUFhLEVBQUUsb0NBQW9DLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztRQUM5RCxXQUFXLEVBQUUsc0JBQXNCLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztRQUM5QyxrQkFBa0IsRUFBRSxJQUFJO1FBQ3hCLGNBQWMsRUFBRTtZQUNkLEVBQUUsRUFBRSxPQUFPO1lBQ1gsR0FBRyxFQUFFLFVBQVU7WUFDZixDQUFDLEVBQUUsWUFBWTtZQUNmLEVBQUUsRUFBRSxhQUFhO1lBQ2pCLEdBQUcsRUFBRSxtQkFBbUI7WUFDeEIsSUFBSSxFQUFFLHdCQUF3QjtTQUMvQjtRQUNELFFBQVEsRUFBRTtZQUNSLE9BQU8sRUFBRSxvQkFBb0I7WUFDN0IsT0FBTyxFQUFFLGVBQWU7WUFDeEIsUUFBUSxFQUFFLGFBQWE7WUFDdkIsT0FBTyxFQUFFLGFBQWE7WUFDdEIsUUFBUSxFQUFFLHFCQUFxQjtZQUMvQixRQUFRLEVBQUUsR0FBRztTQUNkO1FBQ0QsWUFBWSxFQUFFO1lBQ1osTUFBTSxFQUFFLFNBQVM7WUFDakIsSUFBSSxFQUFFLFdBQVc7WUFDakIsQ0FBQyxFQUFFLG1CQUFtQjtZQUN0QixFQUFFLEVBQUUsYUFBYTtZQUNqQixDQUFDLEVBQUUsWUFBWTtZQUNmLEVBQUUsRUFBRSxZQUFZO1lBQ2hCLENBQUMsRUFBRSxXQUFXO1lBQ2QsRUFBRSxFQUFFLFdBQVc7WUFDZixDQUFDLEVBQUUsU0FBUztZQUNaLEVBQUUsRUFBRSxVQUFVO1lBQ2QsQ0FBQyxFQUFFLFNBQVM7WUFDWixFQUFFLEVBQUUsU0FBUztZQUNiLENBQUMsRUFBRSxPQUFPO1lBQ1YsRUFBRSxFQUFFLFFBQVE7U0FDYjtRQUNELHNCQUFzQixFQUFFLGNBQWM7UUFDdEMsT0FBTzs7OztZQUFQLFVBQVEsSUFBWSxFQUFFLE1BQWM7WUFDbEMscUJBQU0sR0FBRyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN6QixRQUFRLE1BQU07Ozs7Z0JBSVosS0FBSyxHQUFHO29CQUNOLE9BQU8sR0FBRyxJQUFJLEdBQUcsS0FBSyxDQUFDLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQyxDQUFDOztnQkFHdkMsUUFBUTtnQkFDUixLQUFLLEdBQUcsQ0FBQztnQkFDVCxLQUFLLEdBQUcsQ0FBQztnQkFDVCxLQUFLLEtBQUssQ0FBQztnQkFDWCxLQUFLLEdBQUc7b0JBQ04sT0FBTyxHQUFHLElBQUksR0FBRyxLQUFLLENBQUMsR0FBRyxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUM7O2dCQUd4QyxLQUFLLEdBQUcsQ0FBQztnQkFDVCxLQUFLLEdBQUc7b0JBQ04sT0FBTyxHQUFHLElBQUksR0FBRyxLQUFLLENBQUMsR0FBRyxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUM7YUFDekM7U0FDRjtRQUNELElBQUksRUFBRTtZQUNKLEdBQUcsRUFBRSxDQUFDOztZQUNOLEdBQUcsRUFBRSxDQUFDO1NBQ1A7S0FDRjs7Ozs7Ozs7O0lDcEVELHFCQUFJSCxnQkFBYyxHQUFHLDZEQUE2RCxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsbUJBQzNGRCxhQUFXLEdBQUcsaURBQWlELENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBRTdFLHFCQUFJRSxhQUFXLEdBQUcsQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQy9ILHFCQUFJQyxhQUFXLEdBQUcsZ0xBQWdMLENBQUM7QUFFbk0seUJBQWEsUUFBUSxHQUFlO1FBQ2xDLElBQUksRUFBRSxJQUFJO1FBQ1YsTUFBTSxFQUFFLHdGQUF3RixDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7UUFDM0csV0FBVzs7Ozs7WUFBWCxVQUFZLElBQVUsRUFBRSxNQUFjLEVBQUUsS0FBZTtZQUNyRCxJQUFJLENBQUMsSUFBSSxFQUFFO2dCQUNULE9BQU9GLGdCQUFjLENBQUM7YUFDdkI7WUFFRCxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUU7Z0JBQ3hCLE9BQU9ELGFBQVcsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7YUFDM0M7WUFFRCxPQUFPQyxnQkFBYyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztTQUM5QztRQUNELFdBQVcsZUFBQTtRQUNYLGdCQUFnQixFQUFFRSxhQUFXO1FBQzdCLGlCQUFpQixFQUFFLDRGQUE0RjtRQUMvRyxzQkFBc0IsRUFBRSx5RkFBeUY7UUFDakgsV0FBVyxlQUFBO1FBQ1gsZUFBZSxFQUFFRCxhQUFXO1FBQzVCLGdCQUFnQixFQUFFQSxhQUFXO1FBQzdCLFFBQVEsRUFBRSxrREFBa0QsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO1FBQ3ZFLGFBQWEsRUFBRSxvQ0FBb0MsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO1FBQzlELFdBQVcsRUFBRSxzQkFBc0IsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO1FBQzlDLGtCQUFrQixFQUFFLElBQUk7UUFDeEIsY0FBYyxFQUFFO1lBQ2QsRUFBRSxFQUFFLE1BQU07WUFDVixHQUFHLEVBQUUsU0FBUztZQUNkLENBQUMsRUFBRSxZQUFZO1lBQ2YsRUFBRSxFQUFFLHVCQUF1QjtZQUMzQixHQUFHLEVBQUUsNEJBQTRCO1lBQ2pDLElBQUksRUFBRSxrQ0FBa0M7U0FDekM7UUFDRCxRQUFRLEVBQUU7WUFDUixPQUFPOzs7MEJBQUMsSUFBVTtnQkFDaEIsT0FBTyxTQUFTLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsR0FBRyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUM7YUFDakU7WUFDRCxPQUFPOzs7MEJBQUMsSUFBVTtnQkFDaEIsT0FBTyxVQUFVLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsR0FBRyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUM7YUFDbEU7WUFDRCxRQUFROzs7MEJBQUMsSUFBVTtnQkFDakIsT0FBTyxTQUFTLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsR0FBRyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUM7YUFDakU7WUFDRCxPQUFPOzs7MEJBQUMsSUFBVTtnQkFDaEIsT0FBTyxTQUFTLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsR0FBRyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUM7YUFDakU7WUFDRCxRQUFROzs7MEJBQUMsSUFBVTtnQkFDakIsT0FBTyxvQkFBb0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQyxHQUFHLE1BQU0sQ0FBQzthQUM1RTtZQUNELFFBQVEsRUFBRSxHQUFHO1NBQ2Q7UUFDRCxZQUFZLEVBQUU7WUFDWixNQUFNLEVBQUUsT0FBTztZQUNmLElBQUksRUFBRSxRQUFRO1lBQ2QsQ0FBQyxFQUFFLGNBQWM7WUFDakIsRUFBRSxFQUFFLGFBQWE7WUFDakIsQ0FBQyxFQUFFLFdBQVc7WUFDZCxFQUFFLEVBQUUsWUFBWTtZQUNoQixDQUFDLEVBQUUsV0FBVztZQUNkLEVBQUUsRUFBRSxVQUFVO1lBQ2QsQ0FBQyxFQUFFLFFBQVE7WUFDWCxFQUFFLEVBQUUsU0FBUztZQUNiLENBQUMsRUFBRSxRQUFRO1lBQ1gsRUFBRSxFQUFFLFVBQVU7WUFDZCxDQUFDLEVBQUUsUUFBUTtZQUNYLEVBQUUsRUFBRSxTQUFTO1NBQ2Q7UUFDRCxzQkFBc0IsRUFBRSxVQUFVO1FBQ2xDLE9BQU8sRUFBRSxLQUFLO1FBQ2QsSUFBSSxFQUFFO1lBQ0osR0FBRyxFQUFFLENBQUM7O1lBQ04sR0FBRyxFQUFFLENBQUM7U0FDUDtLQUNGOzs7Ozs7Ozs7Ozs7Ozs7QUM5RUQseUJBQWEsUUFBUSxHQUFlO1FBQ2xDLElBQUksRUFBRSxJQUFJO1FBQ1YsTUFBTSxFQUFFLHlFQUF5RSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7UUFDNUYsV0FBVyxFQUFFLDJEQUEyRCxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7UUFDbkYsUUFBUSxFQUFFLHNDQUFzQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7UUFDM0QsYUFBYSxFQUFFLHNCQUFzQixDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7UUFDaEQsV0FBVyxFQUFFLGVBQWUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO1FBQ3ZDLGNBQWMsRUFBRTtZQUNkLEVBQUUsRUFBRSxPQUFPO1lBQ1gsR0FBRyxFQUFFLFVBQVU7WUFDZixDQUFDLEVBQUUsWUFBWTtZQUNmLEVBQUUsRUFBRSxnQkFBZ0I7WUFDcEIsR0FBRyxFQUFFLHNCQUFzQjtZQUMzQixJQUFJLEVBQUUsNEJBQTRCO1lBQ2xDLENBQUMsRUFBRSxVQUFVO1lBQ2IsRUFBRSxFQUFFLFlBQVk7WUFDaEIsR0FBRyxFQUFFLGtCQUFrQjtZQUN2QixJQUFJLEVBQUUsdUJBQXVCO1NBQzlCO1FBQ0QsUUFBUSxFQUFFO1lBQ1IsT0FBTyxFQUFFLGFBQWE7WUFDdEIsT0FBTyxFQUFFLFlBQVk7WUFDckIsUUFBUSxFQUFFLGdCQUFnQjtZQUMxQixPQUFPLEVBQUUsY0FBYztZQUN2QixRQUFRLEVBQUUsOEJBQThCO1lBQ3hDLFFBQVEsRUFBRSxHQUFHO1NBQ2Q7UUFDRCxZQUFZLEVBQUU7WUFDWixNQUFNLEVBQUUsU0FBUztZQUNqQixJQUFJLEVBQUUsU0FBUztZQUNmLENBQUMsRUFBRSxZQUFZO1lBQ2YsRUFBRSxFQUFFLFVBQVU7WUFDZCxDQUFDLEVBQUUsS0FBSztZQUNSLEVBQUUsRUFBRSxTQUFTO1lBQ2IsQ0FBQyxFQUFFLEtBQUs7WUFDUixFQUFFOzs7Z0JBQUYsVUFBRyxHQUFXO2dCQUNaLElBQUksR0FBRyxLQUFLLENBQUMsRUFBRTtvQkFDYixPQUFPLFFBQVEsQ0FBQztpQkFDakI7Z0JBQ0QsT0FBTyxHQUFHLEdBQUcsT0FBTyxDQUFDO2FBQ3RCO1lBQ0QsQ0FBQyxFQUFFLEtBQUs7WUFDUixFQUFFOzs7Z0JBQUYsVUFBRyxHQUFXO2dCQUNaLElBQUksR0FBRyxLQUFLLENBQUMsRUFBRTtvQkFDYixPQUFPLFFBQVEsQ0FBQztpQkFDakI7Z0JBQ0QsT0FBTyxHQUFHLEdBQUcsT0FBTyxDQUFDO2FBQ3RCO1lBQ0QsQ0FBQyxFQUFFLE1BQU07WUFDVCxFQUFFOzs7Z0JBQUYsVUFBRyxHQUFXO2dCQUNaLElBQUksR0FBRyxLQUFLLENBQUMsRUFBRTtvQkFDYixPQUFPLFNBQVMsQ0FBQztpQkFDbEI7Z0JBQ0QsT0FBTyxHQUFHLEdBQUcsU0FBUyxDQUFDO2FBQ3hCO1lBQ0QsQ0FBQyxFQUFFLEtBQUs7WUFDUixFQUFFOzs7Z0JBQUYsVUFBRyxHQUFXO2dCQUNaLElBQUksR0FBRyxLQUFLLENBQUMsRUFBRTtvQkFDYixPQUFPLFFBQVEsQ0FBQztpQkFDakI7cUJBQU0sSUFBSSxHQUFHLEdBQUcsRUFBRSxLQUFLLENBQUMsSUFBSSxHQUFHLEtBQUssRUFBRSxFQUFFO29CQUN2QyxPQUFPLEdBQUcsR0FBRyxNQUFNLENBQUM7aUJBQ3JCO2dCQUNELE9BQU8sR0FBRyxHQUFHLE9BQU8sQ0FBQzthQUN0QjtTQUNGO1FBQ0QsYUFBYSxFQUFFLCtEQUErRDtRQUM5RSxJQUFJOzs7c0JBQUMsS0FBSztZQUNSLE9BQU8sNkJBQTZCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ2xEO1FBQ0QsUUFBUTs7Ozs7c0JBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxPQUFPO1lBQzVCLElBQUksSUFBSSxHQUFHLENBQUMsRUFBRTtnQkFDWixPQUFPLFlBQVksQ0FBQzthQUNyQjtpQkFBTSxJQUFJLElBQUksR0FBRyxFQUFFLEVBQUU7Z0JBQ3BCLE9BQU8sT0FBTyxDQUFDO2FBQ2hCO2lCQUFNLElBQUksSUFBSSxHQUFHLEVBQUUsRUFBRTtnQkFDcEIsT0FBTyxPQUFPLEdBQUcsUUFBUSxHQUFHLGNBQWMsQ0FBQzthQUM1QztpQkFBTSxJQUFJLElBQUksR0FBRyxFQUFFLEVBQUU7Z0JBQ3BCLE9BQU8sT0FBTyxHQUFHLE9BQU8sR0FBRyxjQUFjLENBQUM7YUFDM0M7aUJBQU07Z0JBQ0wsT0FBTyxNQUFNLENBQUM7YUFDZjtTQUNGO0tBQ0Y7Ozs7Ozs7Ozs7Ozs7O0lDbkZELHFCQUFJRyxXQUFTLEdBQTRCO1FBQ3JDLENBQUMsRUFBRSxHQUFHO1FBQ04sQ0FBQyxFQUFFLEdBQUc7UUFDTixDQUFDLEVBQUUsR0FBRztRQUNOLENBQUMsRUFBRSxHQUFHO1FBQ04sQ0FBQyxFQUFFLEdBQUc7UUFDTixDQUFDLEVBQUUsR0FBRztRQUNOLENBQUMsRUFBRSxHQUFHO1FBQ04sQ0FBQyxFQUFFLEdBQUc7UUFDTixDQUFDLEVBQUUsR0FBRztRQUNOLENBQUMsRUFBRSxHQUFHO0tBQ1AsbUJBQ0RDLFdBQVMsR0FBNEI7UUFDbkMsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7S0FDVCxDQUFDO0FBRUoseUJBQWEsUUFBUSxHQUFlO1FBQ2xDLElBQUksRUFBRSxJQUFJO1FBQ1YsTUFBTSxFQUFFLDZFQUE2RSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7UUFDaEcsV0FBVyxFQUFFLDREQUE0RCxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7UUFDcEYsZ0JBQWdCLEVBQUUsSUFBSTtRQUN0QixRQUFRLEVBQUUsc0RBQXNELENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztRQUMzRSxhQUFhLEVBQUUsaUNBQWlDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztRQUMzRCxXQUFXLEVBQUUsb0JBQW9CLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztRQUM1QyxjQUFjLEVBQUU7WUFDZCxFQUFFLEVBQUUsWUFBWTtZQUNoQixHQUFHLEVBQUUsZUFBZTtZQUNwQixDQUFDLEVBQUUsWUFBWTtZQUNmLEVBQUUsRUFBRSxhQUFhO1lBQ2pCLEdBQUcsRUFBRSx5QkFBeUI7WUFDOUIsSUFBSSxFQUFFLCtCQUErQjtTQUN0QztRQUNELFFBQVEsRUFBRTtZQUNSLE9BQU8sRUFBRSxTQUFTO1lBQ2xCLE9BQU8sRUFBRSxTQUFTO1lBQ2xCLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLE9BQU8sRUFBRSxTQUFTO1lBQ2xCLFFBQVEsRUFBRSxrQkFBa0I7WUFDNUIsUUFBUSxFQUFFLEdBQUc7U0FDZDtRQUNELFlBQVksRUFBRTtZQUNaLE1BQU0sRUFBRSxRQUFRO1lBQ2hCLElBQUksRUFBRSxTQUFTO1lBQ2YsQ0FBQyxFQUFFLGFBQWE7WUFDaEIsRUFBRSxFQUFFLFVBQVU7WUFDZCxDQUFDLEVBQUUsU0FBUztZQUNaLEVBQUUsRUFBRSxTQUFTO1lBQ2IsQ0FBQyxFQUFFLFNBQVM7WUFDWixFQUFFLEVBQUUsU0FBUztZQUNiLENBQUMsRUFBRSxRQUFRO1lBQ1gsRUFBRSxFQUFFLFFBQVE7WUFDWixDQUFDLEVBQUUsVUFBVTtZQUNiLEVBQUUsRUFBRSxVQUFVO1lBQ2QsQ0FBQyxFQUFFLFNBQVM7WUFDWixFQUFFLEVBQUUsU0FBUztTQUNkO1FBQ0QsUUFBUTs7O1lBQVIsVUFBUyxHQUFXO1lBQ2xCLE9BQU8sR0FBRyxDQUFDLE9BQU8sQ0FBQyxlQUFlLEVBQUUsVUFBVSxLQUFLO2dCQUNqRCxPQUFPQSxXQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDekIsQ0FBQyxDQUFDO1NBQ0o7UUFDRCxVQUFVOzs7WUFBVixVQUFXLEdBQVc7WUFDcEIsT0FBTyxHQUFHLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxVQUFVLEtBQUs7Z0JBQ3ZDLE9BQU9ELFdBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUN6QixDQUFDLENBQUM7U0FDSjs7O1FBR0QsYUFBYSxFQUFFLG9CQUFvQjtRQUNuQyxZQUFZOzs7O3NCQUFDLElBQUksRUFBRSxRQUFRO1lBQ3pCLElBQUksSUFBSSxLQUFLLEVBQUUsRUFBRTtnQkFDZixJQUFJLEdBQUcsQ0FBQyxDQUFDO2FBQ1Y7WUFDRCxJQUFJLFFBQVEsS0FBSyxLQUFLLEVBQUU7Z0JBQ3RCLE9BQU8sSUFBSSxHQUFHLENBQUMsR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQzthQUNwQztpQkFBTSxJQUFJLFFBQVEsS0FBSyxNQUFNLEVBQUU7Z0JBQzlCLE9BQU8sSUFBSSxDQUFDO2FBQ2I7aUJBQU0sSUFBSSxRQUFRLEtBQUssT0FBTyxFQUFFO2dCQUMvQixPQUFPLElBQUksSUFBSSxFQUFFLEdBQUcsSUFBSSxHQUFHLElBQUksR0FBRyxFQUFFLENBQUM7YUFDdEM7aUJBQU0sSUFBSSxRQUFRLEtBQUssS0FBSyxFQUFFO2dCQUM3QixPQUFPLElBQUksR0FBRyxFQUFFLENBQUM7YUFDbEI7U0FDRjtRQUNELFFBQVE7Ozs7O3NCQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsT0FBTztZQUM1QixJQUFJLElBQUksR0FBRyxDQUFDLEVBQUU7Z0JBQ1osT0FBTyxLQUFLLENBQUM7YUFDZDtpQkFBTSxJQUFJLElBQUksR0FBRyxFQUFFLEVBQUU7Z0JBQ3BCLE9BQU8sTUFBTSxDQUFDO2FBQ2Y7aUJBQU0sSUFBSSxJQUFJLEdBQUcsRUFBRSxFQUFFO2dCQUNwQixPQUFPLE9BQU8sQ0FBQzthQUNoQjtpQkFBTSxJQUFJLElBQUksR0FBRyxFQUFFLEVBQUU7Z0JBQ3BCLE9BQU8sS0FBSyxDQUFDO2FBQ2Q7aUJBQU07Z0JBQ0wsT0FBTyxLQUFLLENBQUM7YUFDZDtTQUNGO1FBQ0QsSUFBSSxFQUFFO1lBQ0osR0FBRyxFQUFFLENBQUM7O1lBQ04sR0FBRyxFQUFFLENBQUM7U0FDUDtLQUNGOzs7Ozs7Ozs7SUM3R0QscUJBQUksV0FBVyxHQUFHLCtEQUErRCxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQzs7Ozs7Ozs7SUFDN0YscUJBQW1CLEdBQVcsRUFBRSxhQUFzQixFQUFFLEdBQVcsRUFBRSxRQUFpQjtRQUNwRixRQUFRLEdBQUc7WUFDVCxLQUFLLEdBQUc7Z0JBQ04sT0FBTyxDQUFDLFFBQVEsSUFBSSxhQUFhLElBQUksa0JBQWtCLEdBQUcsbUJBQW1CLENBQUM7WUFDaEYsS0FBSyxJQUFJO2dCQUNQLE9BQU8sR0FBRyxJQUFJLENBQUMsUUFBUSxJQUFJLGFBQWEsSUFBSSxZQUFZLEdBQUcsYUFBYSxDQUFDLENBQUM7WUFDNUUsS0FBSyxHQUFHO2dCQUNOLE9BQU8sS0FBSyxJQUFJLFFBQVEsSUFBSSxhQUFhLEdBQUcsT0FBTyxHQUFHLFFBQVEsQ0FBQyxDQUFDO1lBQ2xFLEtBQUssSUFBSTtnQkFDUCxPQUFPLEdBQUcsSUFBSSxRQUFRLElBQUksYUFBYSxHQUFHLE9BQU8sR0FBRyxRQUFRLENBQUMsQ0FBQztZQUNoRSxLQUFLLEdBQUc7Z0JBQ04sT0FBTyxLQUFLLElBQUksUUFBUSxJQUFJLGFBQWEsR0FBRyxNQUFNLEdBQUcsUUFBUSxDQUFDLENBQUM7WUFDakUsS0FBSyxJQUFJO2dCQUNQLE9BQU8sR0FBRyxJQUFJLFFBQVEsSUFBSSxhQUFhLEdBQUcsTUFBTSxHQUFHLFFBQVEsQ0FBQyxDQUFDO1lBQy9ELEtBQUssR0FBRztnQkFDTixPQUFPLEtBQUssSUFBSSxRQUFRLElBQUksYUFBYSxHQUFHLE1BQU0sR0FBRyxRQUFRLENBQUMsQ0FBQztZQUNqRSxLQUFLLElBQUk7Z0JBQ1AsT0FBTyxHQUFHLElBQUksUUFBUSxJQUFJLGFBQWEsR0FBRyxNQUFNLEdBQUcsUUFBUSxDQUFDLENBQUM7WUFDL0QsS0FBSyxHQUFHO2dCQUNOLE9BQU8sS0FBSyxJQUFJLFFBQVEsSUFBSSxhQUFhLEdBQUcsUUFBUSxHQUFHLFVBQVUsQ0FBQyxDQUFDO1lBQ3JFLEtBQUssSUFBSTtnQkFDUCxPQUFPLEdBQUcsSUFBSSxRQUFRLElBQUksYUFBYSxHQUFHLFFBQVEsR0FBRyxVQUFVLENBQUMsQ0FBQztZQUNuRSxLQUFLLEdBQUc7Z0JBQ04sT0FBTyxLQUFLLElBQUksUUFBUSxJQUFJLGFBQWEsR0FBRyxLQUFLLEdBQUcsTUFBTSxDQUFDLENBQUM7WUFDOUQsS0FBSyxJQUFJO2dCQUNQLE9BQU8sR0FBRyxJQUFJLFFBQVEsSUFBSSxhQUFhLEdBQUcsS0FBSyxHQUFHLE1BQU0sQ0FBQyxDQUFDO1NBQzdEO1FBQ0QsT0FBTyxFQUFFLENBQUM7S0FDWDs7Ozs7O0lBQ0QsY0FBYyxJQUFVLEVBQUUsUUFBaUI7UUFDekMsT0FBTyxDQUFDLFFBQVEsR0FBRyxFQUFFLEdBQUcsU0FBUyxJQUFJLEdBQUcsR0FBRyxXQUFXLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsWUFBWSxDQUFDO0tBQzNGO0FBRUQseUJBQWEsUUFBUSxHQUFlO1FBQ2xDLElBQUksRUFBRSxJQUFJO1FBQ1YsTUFBTSxFQUFHLG1HQUFtRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7UUFDdkgsV0FBVyxFQUFHLG9EQUFvRCxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7UUFDN0UsUUFBUSxFQUFHLHFEQUFxRCxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7UUFDM0UsYUFBYSxFQUFHLCtCQUErQixDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7UUFDMUQsV0FBVyxFQUFHLG9CQUFvQixDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7UUFDN0MsY0FBYyxFQUFHO1lBQ2YsRUFBRSxFQUFHLE1BQU07WUFDWCxHQUFHLEVBQUcsU0FBUztZQUNmLENBQUMsRUFBRyxhQUFhO1lBQ2pCLEVBQUUsRUFBRyxlQUFlO1lBQ3BCLEdBQUcsRUFBRyxvQkFBb0I7WUFDMUIsSUFBSSxFQUFHLDBCQUEwQjtTQUNsQztRQUNELGFBQWEsRUFBRSxRQUFRO1FBQ3ZCLElBQUk7OztzQkFBRSxLQUFLO1lBQ1QsT0FBTyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxLQUFLLEdBQUcsQ0FBQztTQUM5QztRQUNELFFBQVE7Ozs7O3NCQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsT0FBTztZQUMvQixJQUFJLEtBQUssR0FBRyxFQUFFLEVBQUU7Z0JBQ2QsT0FBTyxPQUFPLEtBQUssSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLENBQUM7YUFDdkM7aUJBQU07Z0JBQ0wsT0FBTyxPQUFPLEtBQUssSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLENBQUM7YUFDdkM7U0FDRjtRQUNELFFBQVEsRUFBRztZQUNULE9BQU8sRUFBRyxlQUFlO1lBQ3pCLE9BQU8sRUFBRyxtQkFBbUI7WUFDN0IsUUFBUTs7OzBCQUFFLElBQVU7Z0JBQ2xCLE9BQU8sSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQzthQUN6QjtZQUNELE9BQU8sRUFBRyxtQkFBbUI7WUFDN0IsUUFBUTs7OzBCQUFFLElBQVU7Z0JBQ2xCLE9BQU8sSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQzthQUMxQjtZQUNELFFBQVEsRUFBRyxHQUFHO1NBQ2Y7UUFDRCxZQUFZLEVBQUc7WUFDYixNQUFNLEVBQUcsVUFBVTtZQUNuQixJQUFJLEVBQUcsSUFBSTtZQUNYLENBQUMsRUFBR0QsV0FBUztZQUNiLEVBQUUsRUFBR0EsV0FBUztZQUNkLENBQUMsRUFBR0EsV0FBUztZQUNiLEVBQUUsRUFBR0EsV0FBUztZQUNkLENBQUMsRUFBR0EsV0FBUztZQUNiLEVBQUUsRUFBR0EsV0FBUztZQUNkLENBQUMsRUFBR0EsV0FBUztZQUNiLEVBQUUsRUFBR0EsV0FBUztZQUNkLENBQUMsRUFBR0EsV0FBUztZQUNiLEVBQUUsRUFBR0EsV0FBUztZQUNkLENBQUMsRUFBR0EsV0FBUztZQUNiLEVBQUUsRUFBR0EsV0FBUztTQUNmO1FBQ0Qsc0JBQXNCLEVBQUUsV0FBVztRQUNuQyxPQUFPLEVBQUcsS0FBSztRQUNmLElBQUksRUFBRztZQUNMLEdBQUcsRUFBRyxDQUFDOztZQUNQLEdBQUcsRUFBRyxDQUFDO1NBQ1I7S0FDRjs7Ozs7Ozs7Ozs7Ozs7O0FDN0ZELHlCQUFhLFFBQVEsR0FBZTtRQUNsQyxJQUFJLEVBQUUsSUFBSTtRQUNWLE1BQU0sRUFBRyx3RkFBd0YsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO1FBQzVHLFdBQVcsRUFBRyxpREFBaUQsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO1FBQzFFLFFBQVEsRUFBRyw0Q0FBNEMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO1FBQ2xFLGFBQWEsRUFBRyw2QkFBNkIsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO1FBQ3hELFdBQVcsRUFBRyxzQkFBc0IsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO1FBQy9DLGNBQWMsRUFBRztZQUNmLEVBQUUsRUFBRyxPQUFPO1lBQ1osR0FBRyxFQUFHLFVBQVU7WUFDaEIsQ0FBQyxFQUFHLFlBQVk7WUFDaEIsRUFBRSxFQUFHLGFBQWE7WUFDbEIsR0FBRyxFQUFHLDJCQUEyQjtZQUNqQyxJQUFJLEVBQUcsaUNBQWlDO1NBQ3pDO1FBQ0QsYUFBYSxFQUFFLHVCQUF1QjtRQUN0QyxZQUFZOzs7O3NCQUFDLElBQUksRUFBRSxRQUFRO1lBQ3pCLElBQUksSUFBSSxLQUFLLEVBQUUsRUFBRTtnQkFDZixJQUFJLEdBQUcsQ0FBQyxDQUFDO2FBQ1Y7WUFDRCxJQUFJLFFBQVEsS0FBSyxNQUFNLEVBQUU7Z0JBQ3ZCLE9BQU8sSUFBSSxDQUFDO2FBQ2I7aUJBQU0sSUFBSSxRQUFRLEtBQUssT0FBTyxFQUFFO2dCQUMvQixPQUFPLElBQUksSUFBSSxFQUFFLEdBQUcsSUFBSSxHQUFHLElBQUksR0FBRyxFQUFFLENBQUM7YUFDdEM7aUJBQU0sSUFBSSxRQUFRLEtBQUssTUFBTSxJQUFJLFFBQVEsS0FBSyxPQUFPLEVBQUU7Z0JBQ3RELE9BQU8sSUFBSSxHQUFHLEVBQUUsQ0FBQzthQUNsQjtTQUNGO1FBQ0QsUUFBUTs7Ozs7c0JBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxPQUFPO1lBQzlCLElBQUksS0FBSyxHQUFHLEVBQUUsRUFBRTtnQkFDZCxPQUFPLE1BQU0sQ0FBQzthQUNmO2lCQUFNLElBQUksS0FBSyxHQUFHLEVBQUUsRUFBRTtnQkFDckIsT0FBTyxPQUFPLENBQUM7YUFDaEI7aUJBQU0sSUFBSSxLQUFLLEdBQUcsRUFBRSxFQUFFO2dCQUNyQixPQUFPLE1BQU0sQ0FBQzthQUNmO2lCQUFNO2dCQUNMLE9BQU8sT0FBTyxDQUFDO2FBQ2hCO1NBQ0Y7UUFDRCxRQUFRLEVBQUc7WUFDVCxPQUFPLEVBQUcscUJBQXFCO1lBQy9CLE9BQU8sRUFBRyxrQkFBa0I7WUFDNUIsUUFBUSxFQUFHLGlCQUFpQjtZQUM1QixPQUFPLEVBQUcsb0JBQW9CO1lBQzlCLFFBQVEsRUFBRyxzQkFBc0I7WUFDakMsUUFBUSxFQUFHLEdBQUc7U0FDZjtRQUNELFlBQVksRUFBRztZQUNiLE1BQU0sRUFBRyxVQUFVO1lBQ25CLElBQUksRUFBRyxjQUFjO1lBQ3JCLENBQUMsRUFBRyxnQkFBZ0I7WUFDcEIsRUFBRSxFQUFHLFVBQVU7WUFDZixDQUFDLEVBQUcsU0FBUztZQUNiLEVBQUUsRUFBRyxVQUFVO1lBQ2YsQ0FBQyxFQUFHLE9BQU87WUFDWCxFQUFFLEVBQUcsUUFBUTtZQUNiLENBQUMsRUFBRyxRQUFRO1lBQ1osRUFBRSxFQUFHLFNBQVM7WUFDZCxDQUFDLEVBQUcsU0FBUztZQUNiLEVBQUUsRUFBRyxVQUFVO1lBQ2YsQ0FBQyxFQUFHLFNBQVM7WUFDYixFQUFFLEVBQUcsVUFBVTtTQUNoQjtRQUNELElBQUksRUFBRztZQUNMLEdBQUcsRUFBRyxDQUFDOztZQUNQLEdBQUcsRUFBRyxDQUFDO1NBQ1I7S0FDRjs7Ozs7Ozs7OztBQ25FRCx5QkFBYSxRQUFRLEdBQWU7UUFDbEMsSUFBSSxFQUFFLElBQUk7UUFDVixNQUFNLEVBQUUsK0ZBQStGLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztRQUNsSCxXQUFXLEVBQUUsaURBQWlELENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztRQUN6RSxRQUFRLEVBQUUsMERBQTBELENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztRQUMvRSxhQUFhLEVBQUUsNkJBQTZCLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztRQUN2RCxXQUFXLEVBQUUsc0JBQXNCLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztRQUM5QyxjQUFjLEVBQUU7WUFDZCxFQUFFLEVBQUUsT0FBTztZQUNYLEdBQUcsRUFBRSxVQUFVO1lBQ2YsQ0FBQyxFQUFFLFlBQVk7WUFDZixFQUFFLEVBQUUsYUFBYTtZQUNqQixHQUFHLEVBQUUsbUJBQW1CO1lBQ3hCLElBQUksRUFBRSx3QkFBd0I7U0FDL0I7UUFDRCxRQUFRLEVBQUU7WUFDUixPQUFPLEVBQUUsZ0JBQWdCO1lBQ3pCLE9BQU8sRUFBRSxrQkFBa0I7WUFDM0IsUUFBUSxFQUFFLGdCQUFnQjtZQUMxQixPQUFPLEVBQUUsZ0JBQWdCO1lBQ3pCLFFBQVE7OzswQkFBQyxJQUFVO2dCQUNqQixRQUFRLFlBQVksQ0FBQyxJQUFJLENBQUM7b0JBQ3hCLEtBQUssQ0FBQzt3QkFDSixPQUFPLDRCQUE0QixDQUFDO29CQUN0Qzt3QkFDRSxPQUFPLDRCQUE0QixDQUFDO2lCQUN2QzthQUNGO1lBQ0QsUUFBUSxFQUFFLEdBQUc7U0FDZDtRQUNELFlBQVksRUFBRTtZQUNaLE1BQU07OztnQkFBTixVQUFPLEdBQVc7Z0JBQ2hCLE9BQU8sQ0FBQyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEtBQUssR0FBRyxJQUFJLElBQUksR0FBRyxHQUFHLEdBQUcsQ0FBQzthQUMxRTtZQUNELElBQUksRUFBRSxPQUFPO1lBQ2IsQ0FBQyxFQUFFLGdCQUFnQjtZQUNuQixFQUFFLEVBQUUsWUFBWTtZQUNoQixDQUFDLEVBQUUsV0FBVztZQUNkLEVBQUUsRUFBRSxXQUFXO1lBQ2YsQ0FBQyxFQUFFLFNBQVM7WUFDWixFQUFFLEVBQUUsUUFBUTtZQUNaLENBQUMsRUFBRSxXQUFXO1lBQ2QsRUFBRSxFQUFFLFdBQVc7WUFDZixDQUFDLEVBQUUsU0FBUztZQUNaLEVBQUUsRUFBRSxTQUFTO1lBQ2IsQ0FBQyxFQUFFLFNBQVM7WUFDWixFQUFFLEVBQUUsU0FBUztTQUNkO1FBQ0Qsc0JBQXNCLEVBQUUsVUFBVTtRQUNsQyxPQUFPLEVBQUUsS0FBSztRQUNkLElBQUksRUFBRTtZQUNKLEdBQUcsRUFBRSxDQUFDOztZQUNOLEdBQUcsRUFBRSxDQUFDO1NBQ1A7S0FDRjs7Ozs7Ozs7Ozs7OztBQ3hERCx5QkFBYSxRQUFRLEdBQWdCO1FBQ25DLElBQUksRUFBRSxJQUFJO1FBQ1YsTUFBTSxFQUFHLHdDQUF3QyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7UUFDNUQsV0FBVyxFQUFHLHdDQUF3QyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7UUFDakUsUUFBUSxFQUFHLDZCQUE2QixDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7UUFDbkQsYUFBYSxFQUFHLGVBQWUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO1FBQzFDLFdBQVcsRUFBRyxlQUFlLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztRQUN4QyxjQUFjLEVBQUc7WUFDZixFQUFFLEVBQUcsT0FBTztZQUNaLEdBQUcsRUFBRyxVQUFVO1lBQ2hCLENBQUMsRUFBRyxZQUFZO1lBQ2hCLEVBQUUsRUFBRyxXQUFXO1lBQ2hCLEdBQUcsRUFBRyxpQkFBaUI7WUFDdkIsSUFBSSxFQUFHLHNCQUFzQjtZQUM3QixDQUFDLEVBQUcsWUFBWTtZQUNoQixFQUFFLEVBQUcsV0FBVztZQUNoQixHQUFHLEVBQUcsaUJBQWlCO1lBQ3ZCLElBQUksRUFBRyxzQkFBc0I7U0FDOUI7UUFDRCxhQUFhLEVBQUUsUUFBUTtRQUN2QixJQUFJOzs7c0JBQUUsS0FBSztZQUNULE9BQU8sS0FBSyxLQUFLLElBQUksQ0FBQztTQUN2QjtRQUNELFFBQVE7Ozs7O3NCQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsT0FBTztZQUM3QixJQUFJLElBQUksR0FBRyxFQUFFLEVBQUU7Z0JBQ2IsT0FBTyxJQUFJLENBQUM7YUFDYjtpQkFBTTtnQkFDTCxPQUFPLElBQUksQ0FBQzthQUNiO1NBQ0Y7UUFDRCxRQUFRLEVBQUc7WUFDVCxPQUFPLEVBQUcsU0FBUztZQUNuQixPQUFPLEVBQUcsU0FBUztZQUNuQixRQUFRLEVBQUcsYUFBYTtZQUN4QixPQUFPLEVBQUcsU0FBUztZQUNuQixRQUFRLEVBQUcsYUFBYTtZQUN4QixRQUFRLEVBQUcsR0FBRztTQUNmO1FBQ0Qsc0JBQXNCLEVBQUcsVUFBVTtRQUNuQyxPQUFPOzs7O1lBQVAsVUFBUyxHQUFXLEVBQUUsTUFBYztZQUNsQyxRQUFRLE1BQU07Z0JBQ1osS0FBSyxHQUFHLENBQUM7Z0JBQ1QsS0FBSyxHQUFHLENBQUM7Z0JBQ1QsS0FBSyxLQUFLO29CQUNSLE9BQU8sR0FBRyxHQUFHLEdBQUcsQ0FBQztnQkFDbkI7b0JBQ0UsT0FBTyxHQUFHLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2FBQzNCO1NBQ0Y7UUFDRCxZQUFZLEVBQUc7WUFDYixNQUFNLEVBQUcsS0FBSztZQUNkLElBQUksRUFBRyxLQUFLO1lBQ1osQ0FBQyxFQUFHLElBQUk7WUFDUixFQUFFLEVBQUcsS0FBSztZQUNWLENBQUMsRUFBRyxJQUFJO1lBQ1IsRUFBRSxFQUFHLEtBQUs7WUFDVixDQUFDLEVBQUcsS0FBSztZQUNULEVBQUUsRUFBRyxNQUFNO1lBQ1gsQ0FBQyxFQUFHLElBQUk7WUFDUixFQUFFLEVBQUcsS0FBSztZQUNWLENBQUMsRUFBRyxLQUFLO1lBQ1QsRUFBRSxFQUFHLE1BQU07WUFDWCxDQUFDLEVBQUcsSUFBSTtZQUNSLEVBQUUsRUFBRyxLQUFLO1NBQ1g7S0FDRjs7Ozs7Ozs7Ozs7Ozs7O0FDL0RELHlCQUFhLFFBQVEsR0FBZTtRQUNsQyxJQUFJLEVBQUUsSUFBSTtRQUNWLE1BQU0sRUFBRyx3Q0FBd0MsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO1FBQzVELFdBQVcsRUFBRyx3Q0FBd0MsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO1FBQ2pFLFFBQVEsRUFBRyw2QkFBNkIsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO1FBQ25ELGFBQWEsRUFBRyxlQUFlLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztRQUMxQyxXQUFXLEVBQUcsZUFBZSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7UUFDeEMsY0FBYyxFQUFHO1lBQ2YsRUFBRSxFQUFHLFFBQVE7WUFDYixHQUFHLEVBQUcsV0FBVztZQUNqQixDQUFDLEVBQUcsWUFBWTtZQUNoQixFQUFFLEVBQUcsZUFBZTtZQUNwQixHQUFHLEVBQUcsc0JBQXNCO1lBQzVCLElBQUksRUFBRywyQkFBMkI7WUFDbEMsQ0FBQyxFQUFHLFlBQVk7WUFDaEIsRUFBRSxFQUFHLGVBQWU7WUFDcEIsR0FBRyxFQUFHLHNCQUFzQjtZQUM1QixJQUFJLEVBQUcsMkJBQTJCO1NBQ25DO1FBQ0QsUUFBUSxFQUFHO1lBQ1QsT0FBTyxFQUFHLE9BQU87WUFDakIsT0FBTyxFQUFHLE9BQU87WUFDakIsUUFBUSxFQUFHLFNBQVM7WUFDcEIsT0FBTyxFQUFHLE9BQU87WUFDakIsUUFBUSxFQUFHLGFBQWE7WUFDeEIsUUFBUSxFQUFHLEdBQUc7U0FDZjtRQUNELFlBQVksRUFBRztZQUNiLE1BQU0sRUFBRyxNQUFNO1lBQ2YsSUFBSSxFQUFHLE1BQU07WUFDYixDQUFDLEVBQUcsS0FBSztZQUNULEVBQUUsRUFBRyxLQUFLO1lBQ1YsQ0FBQyxFQUFHLElBQUk7WUFDUixFQUFFLEVBQUcsS0FBSztZQUNWLENBQUMsRUFBRyxNQUFNO1lBQ1YsRUFBRSxFQUFHLE1BQU07WUFDWCxDQUFDLEVBQUcsSUFBSTtZQUNSLEVBQUUsRUFBRyxLQUFLO1lBQ1YsQ0FBQyxFQUFHLEtBQUs7WUFDVCxFQUFFLEVBQUcsS0FBSztZQUNWLENBQUMsRUFBRyxLQUFLO1lBQ1QsRUFBRSxFQUFHLEtBQUs7U0FDWDtRQUNELHNCQUFzQixFQUFHLGdCQUFnQjtRQUN6QyxPQUFPLEVBQUcsVUFBVSxHQUFXLEVBQUUsTUFBYztZQUM3QyxRQUFRLE1BQU07Z0JBQ1osS0FBSyxHQUFHLENBQUM7Z0JBQ1QsS0FBSyxHQUFHLENBQUM7Z0JBQ1QsS0FBSyxLQUFLO29CQUNSLE9BQU8sR0FBRyxHQUFHLEdBQUcsQ0FBQztnQkFDbkIsS0FBSyxHQUFHO29CQUNOLE9BQU8sR0FBRyxHQUFHLEdBQUcsQ0FBQztnQkFDbkIsS0FBSyxHQUFHLENBQUM7Z0JBQ1QsS0FBSyxHQUFHO29CQUNOLE9BQU8sR0FBRyxHQUFHLEdBQUcsQ0FBQztnQkFDbkI7b0JBQ0UsT0FBTyxHQUFHLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2FBQzNCO1NBQ0Y7UUFDRCxhQUFhLEVBQUcsT0FBTztRQUN2QixJQUFJLEVBQUcsVUFBVSxLQUFLO1lBQ3BCLE9BQU8sS0FBSyxLQUFLLElBQUksQ0FBQztTQUN2QjtRQUNELFFBQVEsRUFBRyxVQUFVLElBQUksRUFBRSxNQUFNLEVBQUUsT0FBTztZQUN4QyxPQUFPLElBQUksR0FBRyxFQUFFLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQztTQUNoQztLQUNGOzs7Ozs7Ozs7Ozs7O0lDcEVELHFCQUFNLEtBQUssR0FBRztRQUNaLEVBQUUsRUFBRyw0QkFBNEI7UUFDakMsQ0FBQyxFQUFHLHVCQUF1QjtRQUMzQixFQUFFLEVBQUUseUJBQXlCO1FBQzdCLENBQUMsRUFBRywwQkFBMEI7UUFDOUIsRUFBRSxFQUFFLDJCQUEyQjtRQUMvQixDQUFDLEVBQUcsb0JBQW9CO1FBQ3hCLEVBQUUsRUFBRSxxQkFBcUI7UUFDekIsQ0FBQyxFQUFHLHNCQUFzQjtRQUMxQixFQUFFLEVBQUUsMkJBQTJCO1FBQy9CLENBQUMsRUFBRyxrQkFBa0I7UUFDdEIsRUFBRSxFQUFFLGtCQUFrQjtLQUN2QixDQUFDOzs7Ozs7OztJQUNGLDBCQUEwQixHQUFXLEVBQUUsYUFBc0IsRUFBRSxHQUFXLEVBQUUsUUFBaUI7UUFDM0YsSUFBSSxhQUFhLEVBQUU7WUFDZixPQUFPLGlCQUFpQixDQUFDO1NBQzVCO2FBQU07WUFDSCxPQUFPLFFBQVEsR0FBRyxpQkFBaUIsR0FBRyxpQkFBaUIsQ0FBQztTQUMzRDtLQUNGOzs7Ozs7OztJQUNELDJCQUEyQixHQUFXLEVBQUUsYUFBc0IsRUFBRSxHQUFXLEVBQUUsUUFBaUI7UUFDNUYsT0FBTyxhQUFhLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLFFBQVEsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDbkY7Ozs7O0lBQ0QsaUJBQWlCLEdBQVc7UUFDMUIsT0FBTyxHQUFHLEdBQUcsRUFBRSxLQUFLLENBQUMsS0FBSyxHQUFHLEdBQUcsRUFBRSxJQUFJLEdBQUcsR0FBRyxFQUFFLENBQUMsQ0FBQztLQUNqRDs7Ozs7SUFDRCxlQUFlLEdBQVc7UUFDeEIsT0FBTyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQzlCOzs7Ozs7OztJQUNELHFCQUFtQixHQUFXLEVBQUUsYUFBc0IsRUFBRSxHQUFXLEVBQUUsUUFBaUI7UUFDcEYscUJBQUksTUFBTSxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDdkIsSUFBSSxHQUFHLEtBQUssQ0FBQyxFQUFFO1lBQ1gsT0FBTyxNQUFNLEdBQUcsaUJBQWlCLENBQUMsR0FBRyxFQUFFLGFBQWEsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUM7U0FDM0U7YUFBTSxJQUFJLGFBQWEsRUFBRTtZQUN0QixPQUFPLE1BQU0sSUFBSSxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2xFO2FBQU07WUFDSCxJQUFJLFFBQVEsRUFBRTtnQkFDVixPQUFPLE1BQU0sR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDakM7aUJBQU07Z0JBQ0gsT0FBTyxNQUFNLElBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNsRTtTQUNKO0tBQ0Y7QUFFRCx5QkFBYSxRQUFRLEdBQWU7UUFDbEMsSUFBSSxFQUFFLElBQUk7UUFDVixNQUFNLEVBQUc7WUFDUCxNQUFNLEVBQUUsbUdBQW1HLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztZQUN0SCxVQUFVLEVBQUUsaUdBQWlHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztZQUN4SCxRQUFRLEVBQUUsNkRBQTZEO1NBQ3hFO1FBQ0QsV0FBVyxFQUFHLGlEQUFpRCxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7UUFDMUUsUUFBUSxFQUFHO1lBQ1AsTUFBTSxFQUFFLG1GQUFtRixDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7WUFDdEcsVUFBVSxFQUFFLDBGQUEwRixDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7WUFDakgsUUFBUSxFQUFFLFlBQVk7U0FDekI7UUFDRCxhQUFhLEVBQUcsNkJBQTZCLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztRQUN4RCxXQUFXLEVBQUcsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztRQUN6QyxrQkFBa0IsRUFBRyxJQUFJO1FBQ3pCLGNBQWMsRUFBRztZQUNiLEVBQUUsRUFBRyxPQUFPO1lBQ1osR0FBRyxFQUFHLFVBQVU7WUFDaEIsQ0FBQyxFQUFHLFlBQVk7WUFDaEIsRUFBRSxFQUFHLHVCQUF1QjtZQUM1QixHQUFHLEVBQUcscUNBQXFDO1lBQzNDLElBQUksRUFBRywyQ0FBMkM7WUFDbEQsQ0FBQyxFQUFHLFlBQVk7WUFDaEIsRUFBRSxFQUFHLHVCQUF1QjtZQUM1QixHQUFHLEVBQUcscUNBQXFDO1lBQzNDLElBQUksRUFBRywwQ0FBMEM7U0FDcEQ7UUFDRCxRQUFRLEVBQUc7WUFDUCxPQUFPLEVBQUcsZUFBZTtZQUN6QixPQUFPLEVBQUcsWUFBWTtZQUN0QixRQUFRLEVBQUcsU0FBUztZQUNwQixPQUFPLEVBQUcsWUFBWTtZQUN0QixRQUFRLEVBQUcsb0JBQW9CO1lBQy9CLFFBQVEsRUFBRyxHQUFHO1NBQ2pCO1FBQ0QsWUFBWSxFQUFHO1lBQ1gsTUFBTSxFQUFHLE9BQU87WUFDaEIsSUFBSSxFQUFHLFVBQVU7WUFDakIsQ0FBQyxFQUFHLGdCQUFnQjtZQUNwQixFQUFFLEVBQUdBLFdBQVM7WUFDZCxDQUFDLEVBQUcsaUJBQWlCO1lBQ3JCLEVBQUUsRUFBR0EsV0FBUztZQUNkLENBQUMsRUFBRyxpQkFBaUI7WUFDckIsRUFBRSxFQUFHQSxXQUFTO1lBQ2QsQ0FBQyxFQUFHLGlCQUFpQjtZQUNyQixFQUFFLEVBQUdBLFdBQVM7WUFDZCxDQUFDLEVBQUcsaUJBQWlCO1lBQ3JCLEVBQUUsRUFBR0EsV0FBUztZQUNkLENBQUMsRUFBRyxpQkFBaUI7WUFDckIsRUFBRSxFQUFHQSxXQUFTO1NBQ2pCO1FBQ0Qsc0JBQXNCLEVBQUUsYUFBYTtRQUNyQyxPQUFPOzs7c0JBQUMsR0FBRztZQUNQLE9BQU8sR0FBRyxHQUFHLE1BQU0sQ0FBQztTQUN2QjtRQUNELElBQUksRUFBRztZQUNILEdBQUcsRUFBRyxDQUFDOztZQUNQLEdBQUcsRUFBRyxDQUFDO1NBQ1Y7S0FDRjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDdkdELHFCQUFtQixHQUFXLEVBQUUsYUFBc0IsRUFBRSxHQUFXLEVBQUUsUUFBaUI7UUFDcEYsUUFBUSxHQUFHO1lBQ1QsS0FBSyxHQUFHO2dCQUNOLE9BQU8sYUFBYSxHQUFHLGVBQWUsR0FBRyxpQkFBaUIsQ0FBQztZQUM3RCxLQUFLLElBQUk7Z0JBQ1AsT0FBTyxHQUFHLElBQUksYUFBYSxHQUFHLFNBQVMsR0FBRyxXQUFXLENBQUMsQ0FBQztZQUN6RCxLQUFLLEdBQUcsQ0FBQztZQUNULEtBQUssSUFBSTtnQkFDUCxPQUFPLEdBQUcsSUFBSSxhQUFhLEdBQUcsUUFBUSxHQUFHLFVBQVUsQ0FBQyxDQUFDO1lBQ3ZELEtBQUssR0FBRyxDQUFDO1lBQ1QsS0FBSyxJQUFJO2dCQUNQLE9BQU8sR0FBRyxJQUFJLGFBQWEsR0FBRyxNQUFNLEdBQUcsU0FBUyxDQUFDLENBQUM7WUFDcEQsS0FBSyxHQUFHLENBQUM7WUFDVCxLQUFLLElBQUk7Z0JBQ1AsT0FBTyxHQUFHLElBQUksYUFBYSxHQUFHLE9BQU8sR0FBRyxTQUFTLENBQUMsQ0FBQztZQUNyRCxLQUFLLEdBQUcsQ0FBQztZQUNULEtBQUssSUFBSTtnQkFDUCxPQUFPLEdBQUcsSUFBSSxhQUFhLEdBQUcsTUFBTSxHQUFHLFFBQVEsQ0FBQyxDQUFDO1lBQ25ELEtBQUssR0FBRyxDQUFDO1lBQ1QsS0FBSyxJQUFJO2dCQUNQLE9BQU8sR0FBRyxJQUFJLGFBQWEsR0FBRyxNQUFNLEdBQUcsU0FBUyxDQUFDLENBQUM7WUFDcEQ7Z0JBQ0UsT0FBTyxHQUFHLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQzNCO0tBQ0Y7QUFFRCx5QkFBYSxRQUFRLEdBQWU7UUFDbEMsSUFBSSxFQUFFLElBQUk7UUFDVixNQUFNLEVBQUUsOExBQThMLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztRQUNqTixXQUFXLEVBQUUsNEVBQTRFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztRQUNwRyxnQkFBZ0IsRUFBRSxJQUFJO1FBQ3RCLFFBQVEsRUFBRSw0Q0FBNEMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO1FBQ2pFLGFBQWEsRUFBRSw2QkFBNkIsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO1FBQ3ZELFdBQVcsRUFBRSxzQkFBc0IsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO1FBQzlDLGtCQUFrQixFQUFFLElBQUk7UUFDeEIsY0FBYyxFQUFFO1lBQ2QsRUFBRSxFQUFFLE9BQU87WUFDWCxHQUFHLEVBQUUsVUFBVTtZQUNmLENBQUMsRUFBRSxZQUFZO1lBQ2YsRUFBRSxFQUFFLG1CQUFtQjtZQUN2QixHQUFHLEVBQUUseUJBQXlCO1lBQzlCLElBQUksRUFBRSwrQkFBK0I7U0FDdEM7UUFDRCxhQUFhLEVBQUUsUUFBUTtRQUN2QixJQUFJLEVBQUUsVUFBVSxLQUFLO1lBQ25CLE9BQU8sS0FBSyxLQUFLLElBQUksQ0FBQztTQUN2QjtRQUNELFFBQVEsRUFBRSxVQUFVLElBQUksRUFBRSxNQUFNLEVBQUUsT0FBTztZQUN2QyxJQUFJLElBQUksR0FBRyxFQUFFLEVBQUU7Z0JBQ2IsT0FBTyxJQUFJLENBQUM7YUFDYjtpQkFBTTtnQkFDTCxPQUFPLElBQUksQ0FBQzthQUNiO1NBQ0Y7UUFDRCxRQUFRLEVBQUU7WUFDUixPQUFPLEVBQUUsY0FBYztZQUN2QixPQUFPLEVBQUUsY0FBYztZQUN2QixRQUFRLEVBQUUsZ0JBQWdCO1lBQzFCLE9BQU8sRUFBRSxjQUFjO1lBQ3ZCLFFBQVEsRUFBRSxvQkFBb0I7WUFDOUIsUUFBUSxFQUFFLEdBQUc7U0FDZDtRQUNELFlBQVksRUFBRTtZQUNaLE1BQU0sRUFBRSxVQUFVO1lBQ2xCLElBQUksRUFBRSxTQUFTO1lBQ2YsQ0FBQyxFQUFFQSxXQUFTO1lBQ1osRUFBRSxFQUFFQSxXQUFTO1lBQ2IsQ0FBQyxFQUFFQSxXQUFTO1lBQ1osRUFBRSxFQUFFQSxXQUFTO1lBQ2IsQ0FBQyxFQUFFQSxXQUFTO1lBQ1osRUFBRSxFQUFFQSxXQUFTO1lBQ2IsQ0FBQyxFQUFFQSxXQUFTO1lBQ1osRUFBRSxFQUFFQSxXQUFTO1lBQ2IsQ0FBQyxFQUFFQSxXQUFTO1lBQ1osRUFBRSxFQUFFQSxXQUFTO1lBQ2IsQ0FBQyxFQUFFQSxXQUFTO1lBQ1osRUFBRSxFQUFFQSxXQUFTO1NBQ2Q7UUFDRCxzQkFBc0IsRUFBRSxjQUFjO1FBQ3RDLE9BQU8sRUFBRSxVQUFVLEdBQVcsRUFBRSxNQUFjO1lBQzVDLFFBQVEsTUFBTTtnQkFDWixLQUFLLEdBQUcsQ0FBQztnQkFDVCxLQUFLLEdBQUcsQ0FBQztnQkFDVCxLQUFLLEtBQUs7b0JBQ1IsT0FBTyxHQUFHLEdBQUcsT0FBTyxDQUFDO2dCQUN2QjtvQkFDRSxPQUFPLEdBQUcsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7YUFDM0I7U0FDRjtLQUNGOzs7Ozs7Ozs7O0FDN0ZELHlCQUFhLFFBQVEsR0FBZTtRQUNsQyxJQUFJLEVBQUUsSUFBSTtRQUNWLE1BQU0sRUFBRSxvRkFBb0YsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO1FBQ3ZHLFdBQVcsRUFBRSw2REFBNkQsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO1FBQ3JGLGdCQUFnQixFQUFFLElBQUk7UUFDdEIsUUFBUSxFQUFFLG9EQUFvRCxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7UUFDekUsYUFBYSxFQUFFLDZCQUE2QixDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7UUFDdkQsV0FBVyxFQUFFLHNCQUFzQixDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7UUFDOUMsa0JBQWtCLEVBQUUsSUFBSTtRQUN4QixjQUFjLEVBQUU7WUFDZCxFQUFFLEVBQUUsT0FBTztZQUNYLEdBQUcsRUFBRSxVQUFVO1lBQ2YsQ0FBQyxFQUFFLFlBQVk7WUFDZixFQUFFLEVBQUUsY0FBYztZQUNsQixHQUFHLEVBQUUsMEJBQTBCO1lBQy9CLElBQUksRUFBRSwrQkFBK0I7U0FDdEM7UUFDRCxRQUFRLEVBQUU7WUFDUixPQUFPLEVBQUUsZ0JBQWdCO1lBQ3pCLE9BQU8sRUFBRSxtQkFBbUI7WUFDNUIsUUFBUSxFQUFFLGVBQWU7WUFDekIsT0FBTyxFQUFFLGdCQUFnQjtZQUN6QixRQUFRLEVBQUUseUJBQXlCO1lBQ25DLFFBQVEsRUFBRSxHQUFHO1NBQ2Q7UUFDRCxZQUFZLEVBQUU7WUFDWixNQUFNLEVBQUUsT0FBTztZQUNmLElBQUksRUFBRSxVQUFVO1lBQ2hCLENBQUMsRUFBRSxlQUFlO1lBQ2xCLEVBQUUsRUFBRSxhQUFhO1lBQ2pCLENBQUMsRUFBRSxZQUFZO1lBQ2YsRUFBRSxFQUFFLGFBQWE7WUFDakIsQ0FBQyxFQUFFLFNBQVM7WUFDWixFQUFFLEVBQUUsVUFBVTtZQUNkLENBQUMsRUFBRSxRQUFRO1lBQ1gsRUFBRSxFQUFFLFVBQVU7WUFDZCxDQUFDLEVBQUUsVUFBVTtZQUNiLEVBQUUsRUFBRSxZQUFZO1lBQ2hCLENBQUMsRUFBRSxRQUFRO1lBQ1gsRUFBRSxFQUFFLE9BQU87U0FDWjtRQUNELHNCQUFzQixFQUFFLFdBQVc7UUFDbkMsT0FBTyxFQUFFLEtBQUs7UUFDZCxJQUFJLEVBQUU7WUFDSixHQUFHLEVBQUUsQ0FBQzs7WUFDTixHQUFHLEVBQUUsQ0FBQztTQUNQO0tBQ0Y7Ozs7Ozs7Ozs7SUMxQ0QscUJBQUksbUJBQW1CLEdBQUcsNERBQTRELENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2xHLHFCQUFJLHNCQUFzQixHQUFHLGlEQUFpRCxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUUxRixxQkFBSUYsYUFBVyxHQUFHLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLGFBQWEsRUFBRSxhQUFhLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3JKLHFCQUFJQyxhQUFXLEdBQUcsMEtBQTBLLENBQUM7QUFFN0wseUJBQWEsVUFBVSxHQUFlO1FBQ3BDLElBQUksRUFBRSxPQUFPO1FBQ2IsTUFBTSxFQUFFLHlGQUF5RixDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7UUFDNUcsV0FBVzs7Ozs7WUFBWCxVQUFZLElBQVUsRUFBRSxNQUFjLEVBQUUsS0FBZTtZQUNyRCxJQUFJLENBQUMsSUFBSSxFQUFFO2dCQUNULE9BQU8sbUJBQW1CLENBQUM7YUFDNUI7aUJBQU0sSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFO2dCQUMvQixPQUFPLHNCQUFzQixDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQzthQUN0RDtpQkFBTTtnQkFDTCxPQUFPLG1CQUFtQixDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQzthQUNuRDtTQUNGO1FBRUQsV0FBVyxlQUFBO1FBQ1gsZ0JBQWdCLEVBQUVBLGFBQVc7UUFDN0IsaUJBQWlCLEVBQUUsMkZBQTJGO1FBQzlHLHNCQUFzQixFQUFFLGtGQUFrRjtRQUUxRyxXQUFXLGVBQUE7UUFDWCxlQUFlLEVBQUVELGFBQVc7UUFDNUIsZ0JBQWdCLEVBQUVBLGFBQVc7UUFFN0IsUUFBUSxFQUFFLDREQUE0RCxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7UUFDakYsYUFBYSxFQUFFLDZCQUE2QixDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7UUFDdkQsV0FBVyxFQUFFLHNCQUFzQixDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7UUFDOUMsa0JBQWtCLEVBQUUsSUFBSTtRQUN4QixjQUFjLEVBQUU7WUFDZCxFQUFFLEVBQUUsT0FBTztZQUNYLEdBQUcsRUFBRSxVQUFVO1lBQ2YsQ0FBQyxFQUFFLFlBQVk7WUFDZixFQUFFLEVBQUUsYUFBYTtZQUNqQixHQUFHLEVBQUUsbUJBQW1CO1lBQ3hCLElBQUksRUFBRSx3QkFBd0I7U0FDL0I7UUFDRCxRQUFRLEVBQUU7WUFDUixPQUFPLEVBQUUsaUJBQWlCO1lBQzFCLE9BQU8sRUFBRSxnQkFBZ0I7WUFDekIsUUFBUSxFQUFFLGNBQWM7WUFDeEIsT0FBTyxFQUFFLGtCQUFrQjtZQUMzQixRQUFRLEVBQUUsMEJBQTBCO1lBQ3BDLFFBQVEsRUFBRSxHQUFHO1NBQ2Q7UUFDRCxZQUFZLEVBQUU7WUFDWixNQUFNLEVBQUUsU0FBUztZQUNqQixJQUFJLEVBQUUsWUFBWTtZQUNsQixDQUFDLEVBQUUsbUJBQW1CO1lBQ3RCLEVBQUUsRUFBRSxhQUFhO1lBQ2pCLENBQUMsRUFBRSxZQUFZO1lBQ2YsRUFBRSxFQUFFLFlBQVk7WUFDaEIsQ0FBQyxFQUFFLFNBQVM7WUFDWixFQUFFLEVBQUUsUUFBUTtZQUNaLENBQUMsRUFBRSxTQUFTO1lBQ1osRUFBRSxFQUFFLFVBQVU7WUFDZCxDQUFDLEVBQUUsV0FBVztZQUNkLEVBQUUsRUFBRSxZQUFZO1lBQ2hCLENBQUMsRUFBRSxVQUFVO1lBQ2IsRUFBRSxFQUFFLFNBQVM7U0FDZDtRQUNELHNCQUFzQixFQUFFLGlCQUFpQjtRQUN6QyxPQUFPOzs7WUFBUCxVQUFRLElBQVk7WUFDbEIscUJBQU0sR0FBRyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN6QixPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsS0FBSyxDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSSxHQUFHLElBQUksRUFBRSxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQztTQUNyRTtRQUNELElBQUksRUFBRTtZQUNKLEdBQUcsRUFBRSxDQUFDOztZQUNOLEdBQUcsRUFBRSxDQUFDO1NBQ1A7S0FDRjs7Ozs7Ozs7OztJQ3pFRCxxQkFBSUsscUJBQW1CLEdBQUcsNERBQTRELENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxtQkFDL0ZDLHdCQUFzQixHQUFHLGlEQUFpRCxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUV4RixxQkFBSU4sYUFBVyxHQUFHLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLGFBQWEsRUFBRSxhQUFhLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3JKLHFCQUFJQyxhQUFXLEdBQUcsMEtBQTBLLENBQUM7QUFFN0wseUJBQWEsUUFBUSxHQUFlO1FBQ2xDLElBQUksRUFBRSxJQUFJO1FBQ1YsTUFBTSxFQUFHLHlGQUF5RixDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7UUFDN0csV0FBVzs7Ozs7WUFBWCxVQUFhLElBQVUsRUFBRSxNQUFjLEVBQUUsS0FBZTtZQUN0RCxJQUFJLENBQUMsSUFBSSxFQUFFO2dCQUNULE9BQU9JLHFCQUFtQixDQUFDO2FBQzVCO2lCQUFNLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRTtnQkFDL0IsT0FBT0Msd0JBQXNCLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO2FBQ3REO2lCQUFNO2dCQUNMLE9BQU9ELHFCQUFtQixDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQzthQUNuRDtTQUNGO1FBRUQsV0FBVyxlQUFBO1FBQ1gsZ0JBQWdCLEVBQUVKLGFBQVc7UUFDN0IsaUJBQWlCLEVBQUUsMkZBQTJGO1FBQzlHLHNCQUFzQixFQUFFLGtGQUFrRjtRQUUxRyxXQUFXLGVBQUE7UUFDWCxlQUFlLEVBQUdELGFBQVc7UUFDN0IsZ0JBQWdCLEVBQUdBLGFBQVc7UUFFOUIsUUFBUSxFQUFHLDREQUE0RCxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7UUFDbEYsYUFBYSxFQUFHLDZCQUE2QixDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7UUFDeEQsV0FBVyxFQUFHLHNCQUFzQixDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7UUFDL0Msa0JBQWtCLEVBQUcsSUFBSTtRQUN6QixjQUFjLEVBQUc7WUFDZixFQUFFLEVBQUcsT0FBTztZQUNaLEdBQUcsRUFBRyxVQUFVO1lBQ2hCLENBQUMsRUFBRyxZQUFZO1lBQ2hCLEVBQUUsRUFBRyxhQUFhO1lBQ2xCLEdBQUcsRUFBRyxtQkFBbUI7WUFDekIsSUFBSSxFQUFHLHdCQUF3QjtTQUNoQztRQUNELFFBQVEsRUFBRztZQUNULE9BQU8sRUFBRSxpQkFBaUI7WUFDMUIsT0FBTyxFQUFFLGdCQUFnQjtZQUN6QixRQUFRLEVBQUUsY0FBYztZQUN4QixPQUFPLEVBQUUsa0JBQWtCO1lBQzNCLFFBQVEsRUFBRSwwQkFBMEI7WUFDcEMsUUFBUSxFQUFFLEdBQUc7U0FDZDtRQUNELFlBQVksRUFBRztZQUNiLE1BQU0sRUFBRyxTQUFTO1lBQ2xCLElBQUksRUFBRyxZQUFZO1lBQ25CLENBQUMsRUFBRyxtQkFBbUI7WUFDdkIsRUFBRSxFQUFHLGFBQWE7WUFDbEIsQ0FBQyxFQUFHLFlBQVk7WUFDaEIsRUFBRSxFQUFHLFlBQVk7WUFDakIsQ0FBQyxFQUFHLFNBQVM7WUFDYixFQUFFLEVBQUcsUUFBUTtZQUNiLENBQUMsRUFBRyxTQUFTO1lBQ2IsRUFBRSxFQUFHLFVBQVU7WUFDZixDQUFDLEVBQUcsV0FBVztZQUNmLEVBQUUsRUFBRyxZQUFZO1lBQ2pCLENBQUMsRUFBRyxVQUFVO1lBQ2QsRUFBRSxFQUFHLFNBQVM7U0FDZjtRQUNELHNCQUFzQixFQUFFLGlCQUFpQjtRQUN6QyxPQUFPOzs7WUFBUCxVQUFTLElBQVk7WUFDbkIscUJBQU0sR0FBRyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN6QixPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsS0FBSyxDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSSxHQUFHLElBQUksRUFBRSxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQztTQUNyRTtRQUNELElBQUksRUFBRztZQUNMLEdBQUcsRUFBRyxDQUFDOztZQUNQLEdBQUcsRUFBRyxDQUFDO1NBQ1I7S0FDRjs7Ozs7Ozs7O0lDekVELHFCQUFJLGdCQUFnQixHQUFHLGtHQUFrRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNySSxxQkFBSSxnQkFBZ0IsR0FBRyxvR0FBb0csQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7Ozs7O0lBRXZJLGtCQUFnQixHQUFXO1FBQ3pCLE9BQU8sQ0FBQyxHQUFHLEdBQUcsRUFBRSxHQUFHLENBQUMsTUFBTSxHQUFHLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEdBQUcsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7S0FDeEU7Ozs7Ozs7SUFFRCxxQkFBbUIsR0FBVyxFQUFFLGFBQXNCLEVBQUUsR0FBVztRQUNqRSxxQkFBSSxNQUFNLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUN2QixRQUFRLEdBQUc7WUFDVCxLQUFLLElBQUk7Z0JBQ1AsT0FBTyxNQUFNLElBQUlPLFFBQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxTQUFTLEdBQUcsUUFBUSxDQUFDLENBQUM7WUFDdkQsS0FBSyxHQUFHO2dCQUNOLE9BQU8sYUFBYSxHQUFHLFFBQVEsR0FBRyxRQUFRLENBQUM7WUFDN0MsS0FBSyxJQUFJO2dCQUNQLE9BQU8sTUFBTSxJQUFJQSxRQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsUUFBUSxHQUFHLE9BQU8sQ0FBQyxDQUFDO1lBQ3JELEtBQUssR0FBRztnQkFDTixPQUFPLGFBQWEsR0FBRyxTQUFTLEdBQUcsU0FBUyxDQUFDO1lBQy9DLEtBQUssSUFBSTtnQkFDUCxPQUFPLE1BQU0sSUFBSUEsUUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLFNBQVMsR0FBRyxRQUFRLENBQUMsQ0FBQztZQUN2RCxLQUFLLElBQUk7Z0JBQ1AsT0FBTyxNQUFNLElBQUlBLFFBQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxVQUFVLEdBQUcsVUFBVSxDQUFDLENBQUM7WUFDMUQsS0FBSyxJQUFJO2dCQUNQLE9BQU8sTUFBTSxJQUFJQSxRQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsTUFBTSxHQUFHLEtBQUssQ0FBQyxDQUFDO1NBQ2xEO0tBQ0Y7QUFFRCx5QkFBYSxRQUFRLEdBQWU7UUFDbEMsSUFBSSxFQUFFLElBQUk7UUFDVixNQUFNOzs7OztZQUFOLFVBQU8sSUFBVSxFQUFFLE1BQWMsRUFBRSxLQUFlO1lBQ2hELElBQUksQ0FBQyxJQUFJLEVBQUU7Z0JBQ1QsT0FBTyxnQkFBZ0IsQ0FBQzthQUN6QjtpQkFBTSxJQUFJLE1BQU0sS0FBSyxFQUFFLEVBQUU7Ozs7Z0JBSXhCLE9BQU8sR0FBRyxHQUFHLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQzthQUM1RztpQkFBTSxJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUU7Z0JBQ2hDLE9BQU8sZ0JBQWdCLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO2FBQ2hEO2lCQUFNO2dCQUNMLE9BQU8sZ0JBQWdCLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO2FBQ2hEO1NBQ0Y7UUFDRCxXQUFXLEVBQUUsaURBQWlELENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztRQUN6RSxRQUFRLEVBQUUsNERBQTRELENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztRQUNqRixhQUFhLEVBQUUsMEJBQTBCLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztRQUNwRCxXQUFXLEVBQUUsc0JBQXNCLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztRQUM5QyxjQUFjLEVBQUU7WUFDZCxFQUFFLEVBQUUsT0FBTztZQUNYLEdBQUcsRUFBRSxVQUFVO1lBQ2YsQ0FBQyxFQUFFLFlBQVk7WUFDZixFQUFFLEVBQUUsYUFBYTtZQUNqQixHQUFHLEVBQUUsbUJBQW1CO1lBQ3hCLElBQUksRUFBRSx5QkFBeUI7U0FDaEM7UUFDRCxRQUFRLEVBQUU7WUFDUixPQUFPLEVBQUUsYUFBYTtZQUN0QixPQUFPLEVBQUUsY0FBYztZQUN2QixRQUFROzs7Z0JBQVIsVUFBUyxJQUFVO2dCQUNqQixRQUFRLFlBQVksQ0FBQyxJQUFJLENBQUM7b0JBQ3hCLEtBQUssQ0FBQzt3QkFDSixPQUFPLG9CQUFvQixDQUFDO29CQUU5QixLQUFLLENBQUM7d0JBQ0osT0FBTyxrQkFBa0IsQ0FBQztvQkFFNUIsS0FBSyxDQUFDO3dCQUNKLE9BQU8sZ0JBQWdCLENBQUM7b0JBRTFCLEtBQUssQ0FBQzt3QkFDSixPQUFPLGlCQUFpQixDQUFDO29CQUUzQixLQUFLLENBQUM7d0JBQ0osT0FBTyxpQkFBaUIsQ0FBQztvQkFFM0I7d0JBQ0UsT0FBTyxpQkFBaUIsQ0FBQztpQkFDNUI7YUFDRjtZQUNELE9BQU8sRUFBRSxnQkFBZ0I7WUFDekIsUUFBUTs7O2dCQUFSLFVBQVMsSUFBVTtnQkFDakIsUUFBUSxZQUFZLENBQUMsSUFBSSxDQUFDO29CQUN4QixLQUFLLENBQUM7d0JBQ0osT0FBTywyQkFBMkIsQ0FBQztvQkFDckMsS0FBSyxDQUFDO3dCQUNKLE9BQU8sdUJBQXVCLENBQUM7b0JBQ2pDLEtBQUssQ0FBQzt3QkFDSixPQUFPLDBCQUEwQixDQUFDO29CQUNwQyxLQUFLLENBQUM7d0JBQ0osT0FBTyx3QkFBd0IsQ0FBQztvQkFDbEMsS0FBSyxDQUFDO3dCQUNKLE9BQU8sd0JBQXdCLENBQUM7b0JBQ2xDO3dCQUNFLE9BQU8sd0JBQXdCLENBQUM7aUJBQ25DO2FBQ0Y7WUFDRCxRQUFRLEVBQUUsR0FBRztTQUNkO1FBQ0QsWUFBWSxFQUFFO1lBQ1osTUFBTSxFQUFFLE9BQU87WUFDZixJQUFJLEVBQUUsU0FBUztZQUNmLENBQUMsRUFBRSxjQUFjO1lBQ2pCLEVBQUUsRUFBRUwsV0FBUztZQUNiLENBQUMsRUFBRUEsV0FBUztZQUNaLEVBQUUsRUFBRUEsV0FBUztZQUNiLENBQUMsRUFBRUEsV0FBUztZQUNaLEVBQUUsRUFBRUEsV0FBUztZQUNiLENBQUMsRUFBRSxTQUFTO1lBQ1osRUFBRSxFQUFFLFFBQVE7WUFDWixDQUFDLEVBQUUsU0FBUztZQUNaLEVBQUUsRUFBRUEsV0FBUztZQUNiLENBQUMsRUFBRSxLQUFLO1lBQ1IsRUFBRSxFQUFFQSxXQUFTO1NBQ2Q7UUFDRCxzQkFBc0IsRUFBRSxXQUFXO1FBQ25DLE9BQU8sRUFBRSxLQUFLO1FBQ2QsSUFBSSxFQUFFO1lBQ0osR0FBRyxFQUFFLENBQUM7O1lBQ04sR0FBRyxFQUFFLENBQUM7U0FDUDtLQUNGOzs7Ozs7Ozs7QUN6SEQseUJBQWEsVUFBVSxHQUFlO1FBQ3BDLElBQUksRUFBRSxPQUFPO1FBQ2IsTUFBTSxFQUFFLDBGQUEwRixDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7UUFDN0csV0FBVyxFQUFFLGlEQUFpRCxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7UUFDekUsUUFBUSxFQUFFLGdGQUFnRixDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7UUFDckcsYUFBYSxFQUFFLDZCQUE2QixDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7UUFDdkQsV0FBVyxFQUFFLHNCQUFzQixDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7UUFDOUMsa0JBQWtCLEVBQUUsSUFBSTtRQUN4QixjQUFjLEVBQUU7WUFDZCxFQUFFLEVBQUUsT0FBTztZQUNYLEdBQUcsRUFBRSxVQUFVO1lBQ2YsQ0FBQyxFQUFFLFlBQVk7WUFDZixFQUFFLEVBQUUsdUJBQXVCO1lBQzNCLEdBQUcsRUFBRSxrQ0FBa0M7WUFDdkMsSUFBSSxFQUFFLHdDQUF3QztTQUMvQztRQUNELFFBQVEsRUFBRTtZQUNSLE9BQU8sRUFBRSxjQUFjO1lBQ3ZCLE9BQU8sRUFBRSxnQkFBZ0I7WUFDekIsUUFBUSxFQUFFLGNBQWM7WUFDeEIsT0FBTyxFQUFFLGVBQWU7WUFDeEIsUUFBUTs7OzBCQUFDLElBQVU7Z0JBQ2pCLE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO29CQUMxRCx1QkFBdUI7b0JBQ3ZCLHVCQUF1QixDQUFDO2FBQzNCO1lBQ0QsUUFBUSxFQUFFLEdBQUc7U0FDZDtRQUNELFlBQVksRUFBRTtZQUNaLE1BQU0sRUFBRSxPQUFPO1lBQ2YsSUFBSSxFQUFFLFVBQVU7WUFDaEIsQ0FBQyxFQUFFLGlCQUFpQjtZQUNwQixFQUFFLEVBQUUsYUFBYTtZQUNqQixDQUFDLEVBQUUsV0FBVztZQUNkLEVBQUUsRUFBRSxZQUFZO1lBQ2hCLENBQUMsRUFBRSxVQUFVO1lBQ2IsRUFBRSxFQUFFLFVBQVU7WUFDZCxDQUFDLEVBQUUsUUFBUTtZQUNYLEVBQUUsRUFBRSxTQUFTO1lBQ2IsQ0FBQyxFQUFFLFFBQVE7WUFDWCxFQUFFLEVBQUUsVUFBVTtZQUNkLENBQUMsRUFBRSxRQUFRO1lBQ1gsRUFBRSxFQUFFLFNBQVM7U0FDZDtRQUNELHNCQUFzQixFQUFFLFVBQVU7UUFDbEMsT0FBTyxFQUFFLEtBQUs7S0FDZjs7Ozs7Ozs7Ozs7O0lDOUNELGdDQUFnQyxHQUFXLEVBQUUsYUFBc0IsRUFBRSxHQUFXO1FBQzlFLHFCQUFJLE1BQU0sR0FBMkI7WUFDbkMsRUFBRSxFQUFFLFNBQVM7WUFDYixFQUFFLEVBQUUsUUFBUTtZQUNaLEVBQUUsRUFBRSxLQUFLO1lBQ1QsRUFBRSxFQUFFLE1BQU07WUFDVixFQUFFLEVBQUUsTUFBTTtZQUNWLEVBQUUsRUFBRSxLQUFLO1NBQ1YsQ0FBQztRQUVGLHFCQUFJLFNBQVMsR0FBRyxHQUFHLENBQUM7UUFDcEIsSUFBSSxHQUFHLEdBQUcsR0FBRyxJQUFJLEVBQUUsS0FBSyxHQUFHLElBQUksR0FBRyxJQUFJLEdBQUcsR0FBRyxHQUFHLEtBQUssQ0FBQyxDQUFDLEVBQUU7WUFDdEQsU0FBUyxHQUFHLE1BQU0sQ0FBQztTQUNwQjtRQUNELE9BQU8sR0FBRyxHQUFHLFNBQVMsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDdEM7QUFHRCx5QkFBYSxRQUFRLEdBQWU7UUFDbEMsSUFBSSxFQUFFLElBQUk7UUFDVixNQUFNLEVBQUUsbUdBQW1HLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztRQUN0SCxXQUFXLEVBQUUsK0RBQStELENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztRQUN2RixnQkFBZ0IsRUFBRSxJQUFJO1FBQ3RCLFFBQVEsRUFBRSxpREFBaUQsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO1FBQ3RFLGFBQWEsRUFBRSw2QkFBNkIsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO1FBQ3ZELFdBQVcsRUFBRSxzQkFBc0IsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO1FBQzlDLGNBQWMsRUFBRTtZQUNkLEVBQUUsRUFBRSxNQUFNO1lBQ1YsR0FBRyxFQUFFLFNBQVM7WUFDZCxDQUFDLEVBQUUsWUFBWTtZQUNmLEVBQUUsRUFBRSxhQUFhO1lBQ2pCLEdBQUcsRUFBRSxrQkFBa0I7WUFDdkIsSUFBSSxFQUFFLHdCQUF3QjtTQUMvQjtRQUNELFFBQVEsRUFBRTtZQUNSLE9BQU8sRUFBRSxhQUFhO1lBQ3RCLE9BQU8sRUFBRSxlQUFlO1lBQ3hCLFFBQVEsRUFBRSxjQUFjO1lBQ3hCLE9BQU8sRUFBRSxjQUFjO1lBQ3ZCLFFBQVEsRUFBRSxzQkFBc0I7WUFDaEMsUUFBUSxFQUFFLEdBQUc7U0FDZDtRQUNELFlBQVksRUFBRTtZQUNaLE1BQU0sRUFBRSxVQUFVO1lBQ2xCLElBQUksRUFBRSxZQUFZO1lBQ2xCLENBQUMsRUFBRSxnQkFBZ0I7WUFDbkIsRUFBRSxFQUFFLHNCQUFzQjtZQUMxQixDQUFDLEVBQUUsVUFBVTtZQUNiLEVBQUUsRUFBRSxzQkFBc0I7WUFDMUIsQ0FBQyxFQUFFLE9BQU87WUFDVixFQUFFLEVBQUUsc0JBQXNCO1lBQzFCLENBQUMsRUFBRSxNQUFNO1lBQ1QsRUFBRSxFQUFFLHNCQUFzQjtZQUMxQixDQUFDLEVBQUUsUUFBUTtZQUNYLEVBQUUsRUFBRSxzQkFBc0I7WUFDMUIsQ0FBQyxFQUFFLE9BQU87WUFDVixFQUFFLEVBQUUsc0JBQXNCO1NBQzNCO1FBQ0QsSUFBSSxFQUFFO1lBQ0osR0FBRyxFQUFFLENBQUM7O1lBQ04sR0FBRyxFQUFFLENBQUM7U0FDUDtLQUNGOzs7Ozs7Ozs7OztJQzNERCxrQkFBZ0IsSUFBWSxFQUFFLEdBQVc7UUFDdkMscUJBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDNUIsT0FBTyxHQUFHLEdBQUcsRUFBRSxLQUFLLENBQUMsSUFBSSxHQUFHLEdBQUcsR0FBRyxLQUFLLEVBQUUsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxHQUFHLEVBQUUsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLEVBQUUsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLEdBQUcsR0FBRyxFQUFFLElBQUksR0FBRyxHQUFHLEdBQUcsSUFBSSxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDdEo7Ozs7Ozs7SUFFRCxrQ0FBZ0MsR0FBVyxFQUFFLGFBQXNCLEVBQUUsR0FBVztRQUM5RSxxQkFBSSxNQUFNLEdBQTRCO1lBQ3BDLEVBQUUsRUFBRSxhQUFhLEdBQUcsd0JBQXdCLEdBQUcsd0JBQXdCO1lBQ3ZFLEVBQUUsRUFBRSxhQUFhLEdBQUcscUJBQXFCLEdBQUcscUJBQXFCO1lBQ2pFLEVBQUUsRUFBRSxnQkFBZ0I7WUFDcEIsRUFBRSxFQUFFLGVBQWU7WUFDbkIsRUFBRSxFQUFFLHNCQUFzQjtZQUMxQixFQUFFLEVBQUUsY0FBYztTQUNuQixDQUFDO1FBQ0YsSUFBSSxHQUFHLEtBQUssR0FBRyxFQUFFO1lBQ2YsT0FBTyxhQUFhLEdBQUcsUUFBUSxHQUFHLFFBQVEsQ0FBQztTQUM1QztRQUNELE9BQU8sR0FBRyxHQUFHLEdBQUcsR0FBR0ssUUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQzlDO0lBRUQscUJBQUlQLGFBQVcsR0FBRyxDQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7Ozs7QUFLbEkseUJBQWEsUUFBUSxHQUFlO1FBQ2xDLElBQUksRUFBRSxJQUFJO1FBQ1YsTUFBTSxFQUFFO1lBQ04sTUFBTSxFQUFFLG1GQUFtRixDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7WUFDdEcsVUFBVSxFQUFFLGlGQUFpRixDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7U0FDekc7UUFDRCxXQUFXLEVBQUU7O1lBRVgsTUFBTSxFQUFFLCtEQUErRCxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7WUFDbEYsVUFBVSxFQUFFLCtEQUErRCxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7U0FDdkY7UUFDRCxRQUFRLEVBQUU7WUFDUixVQUFVLEVBQUUsK0RBQStELENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztZQUN0RixNQUFNLEVBQUUsK0RBQStELENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztZQUNsRixRQUFRLEVBQUUsZ0RBQWdEO1NBQzNEO1FBQ0QsYUFBYSxFQUFFLHNCQUFzQixDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7UUFDaEQsV0FBVyxFQUFFLHNCQUFzQixDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7UUFDOUMsV0FBVyxlQUFBO1FBQ1gsZUFBZSxFQUFFQSxhQUFXO1FBQzVCLGdCQUFnQixFQUFFQSxhQUFXOztRQUc3QixXQUFXLEVBQUUsME1BQTBNOztRQUd2TixnQkFBZ0IsRUFBRSwwTUFBME07O1FBRzVOLGlCQUFpQixFQUFFLHVIQUF1SDs7UUFHMUksc0JBQXNCLEVBQUUsNEZBQTRGO1FBQ3BILGNBQWMsRUFBRTtZQUNkLEVBQUUsRUFBRSxNQUFNO1lBQ1YsR0FBRyxFQUFFLFNBQVM7WUFDZCxDQUFDLEVBQUUsWUFBWTtZQUNmLEVBQUUsRUFBRSxnQkFBZ0I7WUFDcEIsR0FBRyxFQUFFLHNCQUFzQjtZQUMzQixJQUFJLEVBQUUsNEJBQTRCO1NBQ25DO1FBQ0QsUUFBUSxFQUFFO1lBQ1IsT0FBTyxFQUFFLGdCQUFnQjtZQUN6QixPQUFPLEVBQUUsZUFBZTtZQUN4QixPQUFPLEVBQUUsY0FBYztZQUN2QixRQUFROzs7OzBCQUFDLElBQVUsRUFBRSxHQUFTO2dCQUM1QixJQUFJLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7b0JBQ2xDLFFBQVEsWUFBWSxDQUFDLElBQUksQ0FBQzt3QkFDeEIsS0FBSyxDQUFDOzRCQUNKLE9BQU8sMkJBQTJCLENBQUM7d0JBQ3JDLEtBQUssQ0FBQyxDQUFDO3dCQUNQLEtBQUssQ0FBQyxDQUFDO3dCQUNQLEtBQUssQ0FBQzs0QkFDSixPQUFPLDJCQUEyQixDQUFDO3dCQUNyQyxLQUFLLENBQUMsQ0FBQzt3QkFDUCxLQUFLLENBQUMsQ0FBQzt3QkFDUCxLQUFLLENBQUM7NEJBQ0osT0FBTywyQkFBMkIsQ0FBQztxQkFDdEM7aUJBQ0Y7cUJBQU07b0JBQ0wsSUFBSSxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFO3dCQUM1QixPQUFPLGtCQUFrQixDQUFDO3FCQUMzQjt5QkFBTTt3QkFDTCxPQUFPLGlCQUFpQixDQUFDO3FCQUMxQjtpQkFDRjthQUNGO1lBQ0QsUUFBUTs7OzswQkFBQyxJQUFVLEVBQUUsR0FBUztnQkFDNUIsSUFBSSxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO29CQUNsQyxRQUFRLFlBQVksQ0FBQyxJQUFJLENBQUM7d0JBQ3hCLEtBQUssQ0FBQzs0QkFDSixPQUFPLHlCQUF5QixDQUFDO3dCQUNuQyxLQUFLLENBQUMsQ0FBQzt3QkFDUCxLQUFLLENBQUMsQ0FBQzt3QkFDUCxLQUFLLENBQUM7NEJBQ0osT0FBTyx5QkFBeUIsQ0FBQzt3QkFDbkMsS0FBSyxDQUFDLENBQUM7d0JBQ1AsS0FBSyxDQUFDLENBQUM7d0JBQ1AsS0FBSyxDQUFDOzRCQUNKLE9BQU8seUJBQXlCLENBQUM7cUJBQ3BDO2lCQUNGO3FCQUFNO29CQUNMLElBQUksWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRTt3QkFDNUIsT0FBTyxrQkFBa0IsQ0FBQztxQkFDM0I7eUJBQU07d0JBQ0wsT0FBTyxpQkFBaUIsQ0FBQztxQkFDMUI7aUJBQ0Y7YUFDRjtZQUNELFFBQVEsRUFBRSxHQUFHO1NBQ2Q7UUFDRCxZQUFZLEVBQUU7WUFDWixNQUFNLEVBQUUsVUFBVTtZQUNsQixJQUFJLEVBQUUsVUFBVTtZQUNoQixDQUFDLEVBQUUsa0JBQWtCO1lBQ3JCLEVBQUUsRUFBRVEsd0JBQXNCO1lBQzFCLENBQUMsRUFBRUEsd0JBQXNCO1lBQ3pCLEVBQUUsRUFBRUEsd0JBQXNCO1lBQzFCLENBQUMsRUFBRSxLQUFLO1lBQ1IsRUFBRSxFQUFFQSx3QkFBc0I7WUFDMUIsQ0FBQyxFQUFFLE1BQU07WUFDVCxFQUFFLEVBQUVBLHdCQUFzQjtZQUMxQixDQUFDLEVBQUUsT0FBTztZQUNWLEVBQUUsRUFBRUEsd0JBQXNCO1lBQzFCLENBQUMsRUFBRSxLQUFLO1lBQ1IsRUFBRSxFQUFFQSx3QkFBc0I7U0FDM0I7UUFDRCxhQUFhLEVBQUUsdUJBQXVCO1FBQ3RDLElBQUk7OztzQkFBQyxLQUFLO1lBQ1IsT0FBTyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDckM7UUFDRCxRQUFROzs7OztzQkFBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLE9BQU87WUFDNUIsSUFBSSxJQUFJLEdBQUcsQ0FBQyxFQUFFO2dCQUNaLE9BQU8sTUFBTSxDQUFDO2FBQ2Y7aUJBQU0sSUFBSSxJQUFJLEdBQUcsRUFBRSxFQUFFO2dCQUNwQixPQUFPLE1BQU0sQ0FBQzthQUNmO2lCQUFNLElBQUksSUFBSSxHQUFHLEVBQUUsRUFBRTtnQkFDcEIsT0FBTyxLQUFLLENBQUM7YUFDZDtpQkFBTTtnQkFDTCxPQUFPLFFBQVEsQ0FBQzthQUNqQjtTQUNGO1FBQ0Qsc0JBQXNCLEVBQUUsa0JBQWtCO1FBQzFDLE9BQU87Ozs7WUFBUCxVQUFRLElBQVksRUFBRSxNQUFjO1lBQ2xDLHFCQUFNLEdBQUcsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDekIsUUFBUSxNQUFNO2dCQUNaLEtBQUssR0FBRyxDQUFDO2dCQUNULEtBQUssR0FBRyxDQUFDO2dCQUNULEtBQUssS0FBSztvQkFDUixPQUFPLEdBQUcsR0FBRyxJQUFJLENBQUM7Z0JBQ3BCLEtBQUssR0FBRztvQkFDTixPQUFPLEdBQUcsR0FBRyxLQUFLLENBQUM7Z0JBQ3JCLEtBQUssR0FBRyxDQUFDO2dCQUNULEtBQUssR0FBRztvQkFDTixPQUFPLEdBQUcsR0FBRyxJQUFJLENBQUM7Z0JBQ3BCO29CQUNFLE9BQU8sR0FBRyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQzthQUMzQjtTQUNGO1FBQ0QsSUFBSSxFQUFFO1lBQ0osR0FBRyxFQUFFLENBQUM7O1lBQ04sR0FBRyxFQUFFLENBQUM7U0FDUDtLQUNGOzs7Ozs7Ozs7SUMzS0QscUJBQU1YLFFBQU0sR0FBRyxtRkFBbUYsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDOUcscUJBQU1DLGFBQVcsR0FBRyxpREFBaUQsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7Ozs7O0lBRWpGLGtCQUFnQixHQUFXO1FBQ3pCLE9BQU8sQ0FBQyxHQUFHLEdBQUcsQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsR0FBRyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0tBQ3ZEOzs7Ozs7OztJQUVELHFCQUFtQixHQUFXLEVBQUUsYUFBc0IsRUFBRSxHQUFXLEVBQUUsUUFBaUI7UUFDcEYscUJBQU0sTUFBTSxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFFekIsUUFBUSxHQUFHO1lBQ1QsS0FBSyxHQUFHOztnQkFDTixPQUFPLENBQUMsYUFBYSxJQUFJLFFBQVEsSUFBSSxZQUFZLEdBQUcsZUFBZSxDQUFDO1lBQ3RFLEtBQUssSUFBSTs7Z0JBQ1AsSUFBSSxhQUFhLElBQUksUUFBUSxFQUFFO29CQUM3QixPQUFPLE1BQU0sSUFBSVMsUUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLFNBQVMsR0FBRyxRQUFRLENBQUMsQ0FBQztpQkFDdEQ7cUJBQ0k7b0JBQ0gsT0FBTyxNQUFNLEdBQUcsV0FBVyxDQUFDO2lCQUM3Qjs7WUFFSCxLQUFLLEdBQUc7O2dCQUNOLE9BQU8sYUFBYSxHQUFHLFFBQVEsSUFBSSxRQUFRLEdBQUcsUUFBUSxHQUFHLFNBQVMsQ0FBQyxDQUFDO1lBQ3RFLEtBQUssSUFBSTs7Z0JBQ1AsSUFBSSxhQUFhLElBQUksUUFBUSxFQUFFO29CQUM3QixPQUFPLE1BQU0sSUFBSUEsUUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLFFBQVEsR0FBRyxPQUFPLENBQUMsQ0FBQztpQkFDcEQ7cUJBQ0k7b0JBQ0gsT0FBTyxNQUFNLEdBQUcsVUFBVSxDQUFDO2lCQUM1Qjs7WUFFSCxLQUFLLEdBQUc7O2dCQUNOLE9BQU8sYUFBYSxHQUFHLFFBQVEsSUFBSSxRQUFRLEdBQUcsUUFBUSxHQUFHLFNBQVMsQ0FBQyxDQUFDO1lBQ3RFLEtBQUssSUFBSTs7Z0JBQ1AsSUFBSSxhQUFhLElBQUksUUFBUSxFQUFFO29CQUM3QixPQUFPLE1BQU0sSUFBSUEsUUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLFFBQVEsR0FBRyxPQUFPLENBQUMsQ0FBQztpQkFDcEQ7cUJBQ0k7b0JBQ0gsT0FBTyxNQUFNLEdBQUcsVUFBVSxDQUFDO2lCQUM1Qjs7WUFFSCxLQUFLLEdBQUc7O2dCQUNOLE9BQU8sQ0FBQyxhQUFhLElBQUksUUFBUSxJQUFJLEtBQUssR0FBRyxNQUFNLENBQUM7WUFDdEQsS0FBSyxJQUFJOztnQkFDUCxJQUFJLGFBQWEsSUFBSSxRQUFRLEVBQUU7b0JBQzdCLE9BQU8sTUFBTSxJQUFJQSxRQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSyxHQUFHLEtBQUssQ0FBQyxDQUFDO2lCQUMvQztxQkFDSTtvQkFDSCxPQUFPLE1BQU0sR0FBRyxPQUFPLENBQUM7aUJBQ3pCOztZQUVILEtBQUssR0FBRzs7Z0JBQ04sT0FBTyxDQUFDLGFBQWEsSUFBSSxRQUFRLElBQUksUUFBUSxHQUFHLFVBQVUsQ0FBQztZQUM3RCxLQUFLLElBQUk7O2dCQUNQLElBQUksYUFBYSxJQUFJLFFBQVEsRUFBRTtvQkFDN0IsT0FBTyxNQUFNLElBQUlBLFFBQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxTQUFTLEdBQUcsVUFBVSxDQUFDLENBQUM7aUJBQ3hEO3FCQUNJO29CQUNILE9BQU8sTUFBTSxHQUFHLFVBQVUsQ0FBQztpQkFDNUI7O1lBRUgsS0FBSyxHQUFHOztnQkFDTixPQUFPLENBQUMsYUFBYSxJQUFJLFFBQVEsSUFBSSxLQUFLLEdBQUcsT0FBTyxDQUFDO1lBQ3ZELEtBQUssSUFBSTs7Z0JBQ1AsSUFBSSxhQUFhLElBQUksUUFBUSxFQUFFO29CQUM3QixPQUFPLE1BQU0sSUFBSUEsUUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLE1BQU0sR0FBRyxPQUFPLENBQUMsQ0FBQztpQkFDbEQ7cUJBQ0k7b0JBQ0gsT0FBTyxNQUFNLEdBQUcsT0FBTyxDQUFDO2lCQUN6QjtTQUVKO0tBQ0Y7QUFFRCx5QkFBYSxRQUFRLEdBQWU7UUFDbEMsSUFBSSxFQUFFLElBQUk7UUFDVixNQUFNLFVBQUE7UUFDTixXQUFXLGVBQUE7UUFDWCxRQUFRLEVBQUUscURBQXFELENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztRQUMxRSxhQUFhLEVBQUUsc0JBQXNCLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztRQUNoRCxXQUFXLEVBQUUsc0JBQXNCLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztRQUM5QyxjQUFjLEVBQUU7WUFDZCxFQUFFLEVBQUUsTUFBTTtZQUNWLEdBQUcsRUFBRSxTQUFTO1lBQ2QsQ0FBQyxFQUFFLFlBQVk7WUFDZixFQUFFLEVBQUUsY0FBYztZQUNsQixHQUFHLEVBQUUsbUJBQW1CO1lBQ3hCLElBQUksRUFBRSx3QkFBd0I7WUFDOUIsQ0FBQyxFQUFFLFlBQVk7U0FDaEI7UUFDRCxRQUFRLEVBQUU7WUFDUixPQUFPLEVBQUUsYUFBYTtZQUN0QixPQUFPLEVBQUUsZUFBZTtZQUN4QixRQUFROzs7Z0JBQVIsVUFBUyxJQUFVO2dCQUNqQixRQUFRLFlBQVksQ0FBQyxJQUFJLENBQUM7b0JBQ3hCLEtBQUssQ0FBQzt3QkFDSixPQUFPLGlCQUFpQixDQUFDO29CQUMzQixLQUFLLENBQUMsQ0FBQztvQkFDUCxLQUFLLENBQUM7d0JBQ0osT0FBTyxpQkFBaUIsQ0FBQztvQkFDM0IsS0FBSyxDQUFDO3dCQUNKLE9BQU8saUJBQWlCLENBQUM7b0JBQzNCLEtBQUssQ0FBQzt3QkFDSixPQUFPLG1CQUFtQixDQUFDO29CQUM3QixLQUFLLENBQUM7d0JBQ0osT0FBTyxpQkFBaUIsQ0FBQztvQkFDM0IsS0FBSyxDQUFDO3dCQUNKLE9BQU8saUJBQWlCLENBQUM7aUJBQzVCO2FBQ0Y7WUFDRCxPQUFPLEVBQUUsY0FBYztZQUN2QixRQUFROzs7Z0JBQVIsVUFBUyxJQUFVO2dCQUNqQixRQUFRLFlBQVksQ0FBQyxJQUFJLENBQUM7b0JBQ3hCLEtBQUssQ0FBQzt3QkFDSixPQUFPLHNCQUFzQixDQUFDO29CQUNoQyxLQUFLLENBQUMsQ0FBQztvQkFDUCxLQUFLLENBQUM7d0JBQ0osT0FBTyxzQkFBc0IsQ0FBQztvQkFDaEMsS0FBSyxDQUFDO3dCQUNKLE9BQU8sc0JBQXNCLENBQUM7b0JBQ2hDLEtBQUssQ0FBQyxDQUFDO29CQUNQLEtBQUssQ0FBQzt3QkFDSixPQUFPLHNCQUFzQixDQUFDO29CQUNoQyxLQUFLLENBQUM7d0JBQ0osT0FBTyxzQkFBc0IsQ0FBQztpQkFDakM7YUFDRjtZQUNELFFBQVEsRUFBRSxHQUFHO1NBQ2Q7UUFDRCxZQUFZLEVBQUU7WUFDWixNQUFNLEVBQUUsTUFBTTtZQUNkLElBQUksRUFBRSxTQUFTO1lBQ2YsQ0FBQyxFQUFFTCxXQUFTO1lBQ1osRUFBRSxFQUFFQSxXQUFTO1lBQ2IsQ0FBQyxFQUFFQSxXQUFTO1lBQ1osRUFBRSxFQUFFQSxXQUFTO1lBQ2IsQ0FBQyxFQUFFQSxXQUFTO1lBQ1osRUFBRSxFQUFFQSxXQUFTO1lBQ2IsQ0FBQyxFQUFFQSxXQUFTO1lBQ1osRUFBRSxFQUFFQSxXQUFTO1lBQ2IsQ0FBQyxFQUFFQSxXQUFTO1lBQ1osRUFBRSxFQUFFQSxXQUFTO1lBQ2IsQ0FBQyxFQUFFQSxXQUFTO1lBQ1osRUFBRSxFQUFFQSxXQUFTO1NBQ2Q7UUFDRCxzQkFBc0IsRUFBRSxXQUFXO1FBQ25DLE9BQU8sRUFBRSxLQUFLO1FBQ2QsSUFBSSxFQUFFO1lBQ0osR0FBRyxFQUFFLENBQUM7O1lBQ04sR0FBRyxFQUFFLENBQUM7U0FDUDtLQUNGOzs7Ozs7Ozs7Ozs7O0lDdEpELCtCQUE2QixNQUFjLEVBQUUsYUFBc0IsRUFBRSxHQUFXLEVBQUUsUUFBaUI7UUFDakcscUJBQUksTUFBTSxHQUFHLE1BQU0sR0FBRyxHQUFHLENBQUM7UUFDMUIsUUFBUSxHQUFHO1lBQ1QsS0FBSyxHQUFHO2dCQUNOLE9BQU8sYUFBYSxJQUFJLFFBQVEsR0FBRyxjQUFjLEdBQUcsaUJBQWlCLENBQUM7WUFDeEUsS0FBSyxJQUFJO2dCQUNQLElBQUksTUFBTSxLQUFLLENBQUMsRUFBRTtvQkFDaEIsTUFBTSxJQUFJLGFBQWEsR0FBRyxTQUFTLEdBQUcsU0FBUyxDQUFDO2lCQUNqRDtxQkFBTSxJQUFJLE1BQU0sS0FBSyxDQUFDLEVBQUU7b0JBQ3ZCLE1BQU0sSUFBSSxhQUFhLElBQUksUUFBUSxHQUFHLFNBQVMsR0FBRyxVQUFVLENBQUM7aUJBQzlEO3FCQUFNLElBQUksTUFBTSxHQUFHLENBQUMsRUFBRTtvQkFDckIsTUFBTSxJQUFJLGFBQWEsSUFBSSxRQUFRLEdBQUcsU0FBUyxHQUFHLFVBQVUsQ0FBQztpQkFDOUQ7cUJBQU07b0JBQ0wsTUFBTSxJQUFJLGFBQWEsSUFBSSxRQUFRLEdBQUcsUUFBUSxHQUFHLFFBQVEsQ0FBQztpQkFDM0Q7Z0JBQ0QsT0FBTyxNQUFNLENBQUM7WUFDaEIsS0FBSyxHQUFHO2dCQUNOLE9BQU8sYUFBYSxHQUFHLFlBQVksR0FBRyxZQUFZLENBQUM7WUFDckQsS0FBSyxJQUFJO2dCQUNQLElBQUksTUFBTSxLQUFLLENBQUMsRUFBRTtvQkFDaEIsTUFBTSxJQUFJLGFBQWEsR0FBRyxRQUFRLEdBQUcsUUFBUSxDQUFDO2lCQUMvQztxQkFBTSxJQUFJLE1BQU0sS0FBSyxDQUFDLEVBQUU7b0JBQ3ZCLE1BQU0sSUFBSSxhQUFhLElBQUksUUFBUSxHQUFHLFFBQVEsR0FBRyxVQUFVLENBQUM7aUJBQzdEO3FCQUFNLElBQUksTUFBTSxHQUFHLENBQUMsRUFBRTtvQkFDckIsTUFBTSxJQUFJLGFBQWEsSUFBSSxRQUFRLEdBQUcsUUFBUSxHQUFHLFVBQVUsQ0FBQztpQkFDN0Q7cUJBQU07b0JBQ0wsTUFBTSxJQUFJLGFBQWEsSUFBSSxRQUFRLEdBQUcsT0FBTyxHQUFHLFVBQVUsQ0FBQztpQkFDNUQ7Z0JBQ0QsT0FBTyxNQUFNLENBQUM7WUFDaEIsS0FBSyxHQUFHO2dCQUNOLE9BQU8sYUFBYSxHQUFHLFNBQVMsR0FBRyxTQUFTLENBQUM7WUFDL0MsS0FBSyxJQUFJO2dCQUNQLElBQUksTUFBTSxLQUFLLENBQUMsRUFBRTtvQkFDaEIsTUFBTSxJQUFJLGFBQWEsR0FBRyxLQUFLLEdBQUcsS0FBSyxDQUFDO2lCQUN6QztxQkFBTSxJQUFJLE1BQU0sS0FBSyxDQUFDLEVBQUU7b0JBQ3ZCLE1BQU0sSUFBSSxhQUFhLElBQUksUUFBUSxHQUFHLEtBQUssR0FBRyxPQUFPLENBQUM7aUJBQ3ZEO3FCQUFNLElBQUksTUFBTSxHQUFHLENBQUMsRUFBRTtvQkFDckIsTUFBTSxJQUFJLGFBQWEsSUFBSSxRQUFRLEdBQUcsS0FBSyxHQUFHLE9BQU8sQ0FBQztpQkFDdkQ7cUJBQU07b0JBQ0wsTUFBTSxJQUFJLGFBQWEsSUFBSSxRQUFRLEdBQUcsSUFBSSxHQUFHLE9BQU8sQ0FBQztpQkFDdEQ7Z0JBQ0QsT0FBTyxNQUFNLENBQUM7WUFDaEIsS0FBSyxHQUFHO2dCQUNOLE9BQU8sYUFBYSxJQUFJLFFBQVEsR0FBRyxRQUFRLEdBQUcsV0FBVyxDQUFDO1lBQzVELEtBQUssSUFBSTtnQkFDUCxJQUFJLE1BQU0sS0FBSyxDQUFDLEVBQUU7b0JBQ2hCLE1BQU0sSUFBSSxhQUFhLElBQUksUUFBUSxHQUFHLEtBQUssR0FBRyxNQUFNLENBQUM7aUJBQ3REO3FCQUFNLElBQUksTUFBTSxLQUFLLENBQUMsRUFBRTtvQkFDdkIsTUFBTSxJQUFJLGFBQWEsSUFBSSxRQUFRLEdBQUcsS0FBSyxHQUFHLFNBQVMsQ0FBQztpQkFDekQ7cUJBQU07b0JBQ0wsTUFBTSxJQUFJLGFBQWEsSUFBSSxRQUFRLEdBQUcsS0FBSyxHQUFHLE9BQU8sQ0FBQztpQkFDdkQ7Z0JBQ0QsT0FBTyxNQUFNLENBQUM7WUFDaEIsS0FBSyxHQUFHO2dCQUNOLE9BQU8sYUFBYSxJQUFJLFFBQVEsR0FBRyxVQUFVLEdBQUcsY0FBYyxDQUFDO1lBQ2pFLEtBQUssSUFBSTtnQkFDUCxJQUFJLE1BQU0sS0FBSyxDQUFDLEVBQUU7b0JBQ2hCLE1BQU0sSUFBSSxhQUFhLElBQUksUUFBUSxHQUFHLE9BQU8sR0FBRyxTQUFTLENBQUM7aUJBQzNEO3FCQUFNLElBQUksTUFBTSxLQUFLLENBQUMsRUFBRTtvQkFDdkIsTUFBTSxJQUFJLGFBQWEsSUFBSSxRQUFRLEdBQUcsUUFBUSxHQUFHLFVBQVUsQ0FBQztpQkFDN0Q7cUJBQU0sSUFBSSxNQUFNLEdBQUcsQ0FBQyxFQUFFO29CQUNyQixNQUFNLElBQUksYUFBYSxJQUFJLFFBQVEsR0FBRyxRQUFRLEdBQUcsUUFBUSxDQUFDO2lCQUMzRDtxQkFBTTtvQkFDTCxNQUFNLElBQUksYUFBYSxJQUFJLFFBQVEsR0FBRyxTQUFTLEdBQUcsUUFBUSxDQUFDO2lCQUM1RDtnQkFDRCxPQUFPLE1BQU0sQ0FBQztZQUNoQixLQUFLLEdBQUc7Z0JBQ04sT0FBTyxhQUFhLElBQUksUUFBUSxHQUFHLFVBQVUsR0FBRyxZQUFZLENBQUM7WUFDL0QsS0FBSyxJQUFJO2dCQUNQLElBQUksTUFBTSxLQUFLLENBQUMsRUFBRTtvQkFDaEIsTUFBTSxJQUFJLGFBQWEsSUFBSSxRQUFRLEdBQUcsTUFBTSxHQUFHLE9BQU8sQ0FBQztpQkFDeEQ7cUJBQU0sSUFBSSxNQUFNLEtBQUssQ0FBQyxFQUFFO29CQUN2QixNQUFNLElBQUksYUFBYSxJQUFJLFFBQVEsR0FBRyxNQUFNLEdBQUcsUUFBUSxDQUFDO2lCQUN6RDtxQkFBTSxJQUFJLE1BQU0sR0FBRyxDQUFDLEVBQUU7b0JBQ3JCLE1BQU0sSUFBSSxhQUFhLElBQUksUUFBUSxHQUFHLE1BQU0sR0FBRyxNQUFNLENBQUM7aUJBQ3ZEO3FCQUFNO29CQUNMLE1BQU0sSUFBSSxhQUFhLElBQUksUUFBUSxHQUFHLEtBQUssR0FBRyxNQUFNLENBQUM7aUJBQ3REO2dCQUNELE9BQU8sTUFBTSxDQUFDO1NBQ2pCO0tBQ0Y7QUFFRCx5QkFBYSxRQUFRLEdBQWU7UUFDbEMsSUFBSSxFQUFFLElBQUk7UUFDVixNQUFNLEVBQUUsdUZBQXVGLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztRQUMxRyxXQUFXLEVBQUUsNkRBQTZELENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztRQUNyRixnQkFBZ0IsRUFBRSxJQUFJO1FBQ3RCLFFBQVEsRUFBRSxxREFBcUQsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO1FBQzFFLGFBQWEsRUFBRSxvQ0FBb0MsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO1FBQzlELFdBQVcsRUFBRSxzQkFBc0IsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO1FBQzlDLGtCQUFrQixFQUFFLElBQUk7UUFDeEIsY0FBYyxFQUFFO1lBQ2QsRUFBRSxFQUFFLE1BQU07WUFDVixHQUFHLEVBQUUsU0FBUztZQUNkLENBQUMsRUFBRSxZQUFZO1lBQ2YsRUFBRSxFQUFFLGNBQWM7WUFDbEIsR0FBRyxFQUFFLG1CQUFtQjtZQUN4QixJQUFJLEVBQUUseUJBQXlCO1NBQ2hDO1FBQ0QsUUFBUSxFQUFFO1lBQ1IsT0FBTyxFQUFFLGVBQWU7WUFDeEIsT0FBTyxFQUFFLGVBQWU7WUFFeEIsUUFBUTs7OzBCQUFDLElBQVU7Z0JBQ2pCLFFBQVEsWUFBWSxDQUFDLElBQUksQ0FBQztvQkFDeEIsS0FBSyxDQUFDO3dCQUNKLE9BQU8sdUJBQXVCLENBQUM7b0JBQ2pDLEtBQUssQ0FBQzt3QkFDSixPQUFPLHFCQUFxQixDQUFDO29CQUMvQixLQUFLLENBQUM7d0JBQ0osT0FBTyxzQkFBc0IsQ0FBQztvQkFDaEMsS0FBSyxDQUFDLENBQUM7b0JBQ1AsS0FBSyxDQUFDLENBQUM7b0JBQ1AsS0FBSyxDQUFDLENBQUM7b0JBQ1AsS0FBSyxDQUFDO3dCQUNKLE9BQU8sa0JBQWtCLENBQUM7aUJBQzdCO2FBQ0Y7WUFDRCxPQUFPLEVBQUUsZ0JBQWdCO1lBQ3pCLFFBQVE7OzswQkFBQyxJQUFVO2dCQUNqQixRQUFRLFlBQVksQ0FBQyxJQUFJLENBQUM7b0JBQ3hCLEtBQUssQ0FBQzt3QkFDSixPQUFPLDhCQUE4QixDQUFDO29CQUN4QyxLQUFLLENBQUM7d0JBQ0osT0FBTyw0QkFBNEIsQ0FBQztvQkFDdEMsS0FBSyxDQUFDO3dCQUNKLE9BQU8sNkJBQTZCLENBQUM7b0JBQ3ZDLEtBQUssQ0FBQyxDQUFDO29CQUNQLEtBQUssQ0FBQyxDQUFDO29CQUNQLEtBQUssQ0FBQyxDQUFDO29CQUNQLEtBQUssQ0FBQzt3QkFDSixPQUFPLHlCQUF5QixDQUFDO2lCQUNwQzthQUNGO1lBQ0QsUUFBUSxFQUFFLEdBQUc7U0FDZDtRQUNELFlBQVksRUFBRTtZQUNaLE1BQU0sRUFBRSxRQUFRO1lBQ2hCLElBQUksRUFBRSxTQUFTO1lBQ2YsQ0FBQyxFQUFFTyxxQkFBbUI7WUFDdEIsRUFBRSxFQUFFQSxxQkFBbUI7WUFDdkIsQ0FBQyxFQUFFQSxxQkFBbUI7WUFDdEIsRUFBRSxFQUFFQSxxQkFBbUI7WUFDdkIsQ0FBQyxFQUFFQSxxQkFBbUI7WUFDdEIsRUFBRSxFQUFFQSxxQkFBbUI7WUFDdkIsQ0FBQyxFQUFFQSxxQkFBbUI7WUFDdEIsRUFBRSxFQUFFQSxxQkFBbUI7WUFDdkIsQ0FBQyxFQUFFQSxxQkFBbUI7WUFDdEIsRUFBRSxFQUFFQSxxQkFBbUI7WUFDdkIsQ0FBQyxFQUFFQSxxQkFBbUI7WUFDdEIsRUFBRSxFQUFFQSxxQkFBbUI7U0FDeEI7UUFDRCxzQkFBc0IsRUFBRSxXQUFXO1FBQ25DLE9BQU8sRUFBRSxLQUFLO1FBQ2QsSUFBSSxFQUFFO1lBQ0osR0FBRyxFQUFFLENBQUM7O1lBQ04sR0FBRyxFQUFFLENBQUM7U0FDUDtLQUNGOzs7Ozs7Ozs7Ozs7O0FDaEtELHlCQUFhLFFBQVEsR0FBZTtRQUNsQyxJQUFJLEVBQUUsSUFBSTtRQUNWLE1BQU0sRUFBRSx1RkFBdUYsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO1FBQzFHLFdBQVcsRUFBRSxpREFBaUQsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO1FBQ3pFLFFBQVEsRUFBRSxtREFBbUQsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO1FBQ3hFLGFBQWEsRUFBRSw2QkFBNkIsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO1FBQ3ZELFdBQVcsRUFBRSxzQkFBc0IsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO1FBQzlDLGNBQWMsRUFBRTtZQUNkLEVBQUUsRUFBRSxPQUFPO1lBQ1gsR0FBRyxFQUFFLFVBQVU7WUFDZixDQUFDLEVBQUUsWUFBWTtZQUNmLEVBQUUsRUFBRSxhQUFhO1lBQ2pCLEdBQUcsRUFBRSx5QkFBeUI7WUFDOUIsSUFBSSxFQUFFLDhCQUE4QjtZQUNwQyxHQUFHLEVBQUUsa0JBQWtCO1lBQ3ZCLElBQUksRUFBRSxzQkFBc0I7U0FDN0I7UUFDRCxRQUFRLEVBQUU7WUFDUixPQUFPLEVBQUUsV0FBVztZQUNwQixPQUFPLEVBQUUsY0FBYztZQUN2QixPQUFPLEVBQUUsV0FBVztZQUNwQixRQUFRLEVBQUUsY0FBYztZQUN4QixRQUFRLEVBQUUsZ0JBQWdCO1lBQzFCLFFBQVEsRUFBRSxHQUFHO1NBQ2Q7UUFDRCxZQUFZLEVBQUU7WUFDWixNQUFNLEVBQUUsT0FBTztZQUNmLElBQUksRUFBRSxjQUFjO1lBQ3BCLENBQUMsRUFBRSxnQkFBZ0I7WUFDbkIsRUFBRSxFQUFFLGFBQWE7WUFDakIsQ0FBQyxFQUFFLFVBQVU7WUFDYixFQUFFLEVBQUUsWUFBWTtZQUNoQixDQUFDLEVBQUUsVUFBVTtZQUNiLEVBQUUsRUFBRSxXQUFXO1lBQ2YsQ0FBQyxFQUFFLFFBQVE7WUFDWCxFQUFFLEVBQUUsVUFBVTtZQUNkLENBQUMsRUFBRSxVQUFVO1lBQ2IsRUFBRSxFQUFFLFlBQVk7WUFDaEIsQ0FBQyxFQUFFLFFBQVE7WUFDWCxFQUFFLEVBQUUsT0FBTztTQUNaO1FBQ0Qsc0JBQXNCLEVBQUUsY0FBYztRQUN0QyxPQUFPOzs7WUFBUCxVQUFRLElBQVk7WUFDbEIscUJBQU0sR0FBRyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN6QixxQkFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLEVBQUUsbUJBQ2QsTUFBTSxHQUFHLENBQUMsQ0FBQyxFQUFFLEdBQUcsR0FBRyxHQUFHLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUc7Z0JBQ3ZDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHO29CQUNiLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHO3dCQUNiLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLEdBQUcsR0FBRyxDQUFDO1lBQzlCLE9BQU8sR0FBRyxHQUFHLE1BQU0sQ0FBQztTQUNyQjtRQUNELElBQUksRUFBRTtZQUNKLEdBQUcsRUFBRSxDQUFDOztZQUNOLEdBQUcsRUFBRSxDQUFDO1NBQ1A7S0FDRjs7Ozs7Ozs7OztBQ3ZERCx5QkFBYSxRQUFRLEdBQWU7UUFDbEMsSUFBSSxFQUFFLElBQUk7UUFDVixNQUFNLEVBQUUsbUdBQW1HLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztRQUN0SCxXQUFXLEVBQUUsZ0VBQWdFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztRQUN4RixnQkFBZ0IsRUFBRSxJQUFJO1FBQ3RCLFFBQVEsRUFBRSxnREFBZ0QsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO1FBQ3JFLGFBQWEsRUFBRSw2Q0FBNkMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDOztRQUN2RSxXQUFXLEVBQUUsd0JBQXdCLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztRQUNoRCxrQkFBa0IsRUFBRSxJQUFJO1FBQ3hCLGNBQWMsRUFBRTtZQUNkLEVBQUUsRUFBRSxNQUFNO1lBQ1YsR0FBRyxFQUFFLFNBQVM7WUFDZCxDQUFDLEVBQUUsWUFBWTtZQUNmLEVBQUUsRUFBRSxhQUFhO1lBQ2pCLEdBQUcsRUFBRSx1QkFBdUI7WUFDNUIsSUFBSSxFQUFFLGtDQUFrQztTQUN6QztRQUNELGFBQWEsRUFBRSx1QkFBdUI7UUFDdEMsSUFBSTs7O3NCQUFDLEtBQUs7WUFDUixPQUFPLEtBQUssS0FBSyxZQUFZLENBQUM7U0FDL0I7UUFDRCxRQUFROzs7OztzQkFBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLE9BQU87WUFDNUIsSUFBSSxJQUFJLEdBQUcsRUFBRSxFQUFFO2dCQUNiLE9BQU8sWUFBWSxDQUFDO2FBQ3JCO2lCQUFNO2dCQUNMLE9BQU8sWUFBWSxDQUFDO2FBQ3JCO1NBQ0Y7UUFDRCxRQUFRLEVBQUU7WUFDUixPQUFPLEVBQUUsa0JBQWtCO1lBQzNCLE9BQU8sRUFBRSxvQkFBb0I7WUFDN0IsUUFBUSxFQUFFLG9CQUFvQjtZQUM5QixPQUFPLEVBQUUsdUJBQXVCO1lBQ2hDLFFBQVEsRUFBRSw0QkFBNEI7WUFDdEMsUUFBUSxFQUFFLEdBQUc7U0FDZDtRQUNELFlBQVksRUFBRTtZQUNaLE1BQU0sRUFBRSxRQUFRO1lBQ2hCLElBQUksRUFBRSxXQUFXO1lBQ2pCLENBQUMsRUFBRSxjQUFjO1lBQ2pCLEVBQUUsRUFBRSxXQUFXO1lBQ2YsQ0FBQyxFQUFFLFFBQVE7WUFDWCxFQUFFLEVBQUUsU0FBUztZQUNiLENBQUMsRUFBRSxXQUFXO1lBQ2QsRUFBRSxFQUFFLFlBQVk7WUFDaEIsQ0FBQyxFQUFFLE9BQU87WUFDVixFQUFFLEVBQUUsUUFBUTtZQUNaLENBQUMsRUFBRSxTQUFTO1lBQ1osRUFBRSxFQUFFLFVBQVU7WUFDZCxDQUFDLEVBQUUsTUFBTTtZQUNULEVBQUUsRUFBRSxPQUFPO1NBQ1o7S0FDRjs7Ozs7Ozs7Ozs7Ozs7SUNuREQscUJBQUksUUFBUSxHQUE4QjtRQUN4QyxDQUFDLEVBQUUsUUFBUTtRQUNYLENBQUMsRUFBRSxRQUFRO1FBQ1gsQ0FBQyxFQUFFLFFBQVE7UUFDWCxFQUFFLEVBQUUsUUFBUTtRQUNaLEVBQUUsRUFBRSxRQUFRO1FBQ1osQ0FBQyxFQUFFLE9BQU87UUFDVixDQUFDLEVBQUUsT0FBTztRQUNWLEVBQUUsRUFBRSxPQUFPO1FBQ1gsRUFBRSxFQUFFLE9BQU87UUFDWCxDQUFDLEVBQUUsUUFBUTtRQUNYLENBQUMsRUFBRSxRQUFRO1FBQ1gsR0FBRyxFQUFFLFFBQVE7UUFDYixDQUFDLEVBQUUsT0FBTztRQUNWLENBQUMsRUFBRSxRQUFRO1FBQ1gsRUFBRSxFQUFFLFFBQVE7UUFDWixFQUFFLEVBQUUsUUFBUTtRQUNaLEVBQUUsRUFBRSxRQUFRO1FBQ1osRUFBRSxFQUFFLFFBQVE7S0FDYixDQUFDO0FBRUYseUJBQWEsUUFBUSxHQUFlO1FBQ2xDLElBQUksRUFBRSxJQUFJO1FBQ1YsTUFBTSxFQUFFLDRFQUE0RSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7UUFDL0YsV0FBVyxFQUFFLGlEQUFpRCxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7UUFDekUsUUFBUSxFQUFFLHVEQUF1RCxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7UUFDNUUsYUFBYSxFQUFFLDZCQUE2QixDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7UUFDdkQsV0FBVyxFQUFFLHNCQUFzQixDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7UUFDOUMsY0FBYyxFQUFFO1lBQ2QsRUFBRSxFQUFFLE9BQU87WUFDWCxHQUFHLEVBQUUsVUFBVTtZQUNmLENBQUMsRUFBRSxZQUFZO1lBQ2YsRUFBRSxFQUFFLGFBQWE7WUFDakIsR0FBRyxFQUFFLG1CQUFtQjtZQUN4QixJQUFJLEVBQUUseUJBQXlCO1NBQ2hDO1FBQ0QsUUFBUSxFQUFFO1lBQ1IsT0FBTyxFQUFFLGlCQUFpQjtZQUMxQixPQUFPLEVBQUUsaUJBQWlCO1lBQzFCLFFBQVEsRUFBRSwwQkFBMEI7WUFDcEMsT0FBTyxFQUFFLFVBQVU7WUFDbkIsUUFBUSxFQUFFLHdCQUF3QjtZQUNsQyxRQUFRLEVBQUUsR0FBRztTQUNkO1FBQ0QsWUFBWSxFQUFFO1lBQ1osTUFBTSxFQUFFLFVBQVU7WUFDbEIsSUFBSSxFQUFFLFNBQVM7WUFDZixDQUFDLEVBQUUsZUFBZTtZQUNsQixFQUFFLEVBQUUsV0FBVztZQUNmLENBQUMsRUFBRSxZQUFZO1lBQ2YsRUFBRSxFQUFFLFdBQVc7WUFDZixDQUFDLEVBQUUsVUFBVTtZQUNiLEVBQUUsRUFBRSxTQUFTO1lBQ2IsQ0FBQyxFQUFFLFNBQVM7WUFDWixFQUFFLEVBQUUsUUFBUTtZQUNaLENBQUMsRUFBRSxRQUFRO1lBQ1gsRUFBRSxFQUFFLE9BQU87WUFDWCxDQUFDLEVBQUUsU0FBUztZQUNaLEVBQUUsRUFBRSxRQUFRO1NBQ2I7UUFDRCxzQkFBc0IsRUFBRSx1Q0FBdUM7UUFDL0QsT0FBTzs7O1lBQVAsVUFBUSxJQUFZO1lBQ2xCLHFCQUFNLEdBQUcsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDekIsSUFBSSxHQUFHLEtBQUssQ0FBQyxFQUFFOztnQkFDYixPQUFPLEdBQUcsR0FBRyxRQUFRLENBQUM7YUFDdkI7WUFDRCxxQkFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLEVBQUUsbUJBQ2QsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxtQkFDakIsQ0FBQyxHQUFHLEdBQUcsSUFBSSxHQUFHLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQztZQUM5QixPQUFPLEdBQUcsSUFBSSxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzFEO1FBQ0QsSUFBSSxFQUFFO1lBQ0osR0FBRyxFQUFFLENBQUM7O1lBQ04sR0FBRyxFQUFFLENBQUM7U0FDUDtLQUNGOzs7Ozs7Ozs7Ozs7Ozs7QUMxRUQseUJBQWEsVUFBVSxHQUFlO1FBQ3BDLElBQUksRUFBRSxPQUFPO1FBQ2IsTUFBTSxFQUFFLHVDQUF1QyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7UUFDMUQsV0FBVyxFQUFFLHdDQUF3QyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7UUFDaEUsUUFBUSxFQUFFLDZCQUE2QixDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7UUFDbEQsYUFBYSxFQUFFLHNCQUFzQixDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7UUFDaEQsV0FBVyxFQUFFLGVBQWUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO1FBQ3ZDLGNBQWMsRUFBRTtZQUNkLEVBQUUsRUFBRSxPQUFPO1lBQ1gsR0FBRyxFQUFFLFVBQVU7WUFDZixDQUFDLEVBQUUsWUFBWTtZQUNmLEVBQUUsRUFBRSxXQUFXO1lBQ2YsR0FBRyxFQUFFLGlCQUFpQjtZQUN0QixJQUFJLEVBQUUscUJBQXFCO1lBQzNCLENBQUMsRUFBRSxVQUFVO1lBQ2IsRUFBRSxFQUFFLFdBQVc7WUFDZixHQUFHLEVBQUUsaUJBQWlCO1lBQ3RCLElBQUksRUFBRSxxQkFBcUI7U0FDNUI7UUFDRCxhQUFhLEVBQUUsbUJBQW1CO1FBQ2xDLFlBQVk7Ozs7c0JBQUMsSUFBSSxFQUFFLFFBQVE7WUFDekIsSUFBSSxJQUFJLEtBQUssRUFBRSxFQUFFO2dCQUNmLElBQUksR0FBRyxDQUFDLENBQUM7YUFDVjtZQUNELElBQUksUUFBUSxLQUFLLElBQUksSUFBSSxRQUFRLEtBQUssSUFBSTtnQkFDeEMsUUFBUSxLQUFLLElBQUksRUFBRTtnQkFDbkIsT0FBTyxJQUFJLENBQUM7YUFDYjtpQkFBTSxJQUFJLFFBQVEsS0FBSyxJQUFJLElBQUksUUFBUSxLQUFLLElBQUksRUFBRTtnQkFDakQsT0FBTyxJQUFJLEdBQUcsRUFBRSxDQUFDO2FBQ2xCO2lCQUFNOztnQkFFTCxPQUFPLElBQUksSUFBSSxFQUFFLEdBQUcsSUFBSSxHQUFHLElBQUksR0FBRyxFQUFFLENBQUM7YUFDdEM7U0FDRjtRQUNELFFBQVE7Ozs7O3NCQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsT0FBTztZQUM1QixxQkFBSSxFQUFFLEdBQUcsSUFBSSxHQUFHLEdBQUcsR0FBRyxNQUFNLENBQUM7WUFDN0IsSUFBSSxFQUFFLEdBQUcsR0FBRyxFQUFFO2dCQUNaLE9BQU8sSUFBSSxDQUFDO2FBQ2I7aUJBQU0sSUFBSSxFQUFFLEdBQUcsR0FBRyxFQUFFO2dCQUNuQixPQUFPLElBQUksQ0FBQzthQUNiO2lCQUFNLElBQUksRUFBRSxHQUFHLElBQUksRUFBRTtnQkFDcEIsT0FBTyxJQUFJLENBQUM7YUFDYjtpQkFBTSxJQUFJLEVBQUUsR0FBRyxJQUFJLEVBQUU7Z0JBQ3BCLE9BQU8sSUFBSSxDQUFDO2FBQ2I7aUJBQU0sSUFBSSxFQUFFLEdBQUcsSUFBSSxFQUFFO2dCQUNwQixPQUFPLElBQUksQ0FBQzthQUNiO2lCQUFNO2dCQUNMLE9BQU8sSUFBSSxDQUFDO2FBQ2I7U0FDRjtRQUNELFFBQVEsRUFBRTtZQUNSLE9BQU8sRUFBRSxRQUFRO1lBQ2pCLE9BQU8sRUFBRSxRQUFRO1lBQ2pCLFFBQVEsRUFBRSxXQUFXO1lBQ3JCLE9BQU8sRUFBRSxRQUFRO1lBQ2pCLFFBQVEsRUFBRSxXQUFXO1lBQ3JCLFFBQVEsRUFBRSxHQUFHO1NBQ2Q7UUFDRCxzQkFBc0IsRUFBRSxnQkFBZ0I7UUFDeEMsT0FBTzs7OztzQkFBQyxJQUFZLEVBQUUsTUFBTTtZQUMxQixxQkFBTSxHQUFHLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3pCLFFBQVEsTUFBTTtnQkFDWixLQUFLLEdBQUcsQ0FBQztnQkFDVCxLQUFLLEdBQUcsQ0FBQztnQkFDVCxLQUFLLEtBQUs7b0JBQ1IsT0FBTyxHQUFHLEdBQUcsR0FBRyxDQUFDO2dCQUNuQixLQUFLLEdBQUc7b0JBQ04sT0FBTyxHQUFHLEdBQUcsR0FBRyxDQUFDO2dCQUNuQixLQUFLLEdBQUcsQ0FBQztnQkFDVCxLQUFLLEdBQUc7b0JBQ04sT0FBTyxHQUFHLEdBQUcsR0FBRyxDQUFDO2dCQUNuQjtvQkFDRSxPQUFPLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQzthQUN6QjtTQUNGO1FBQ0QsWUFBWSxFQUFFO1lBQ1osTUFBTSxFQUFFLEtBQUs7WUFDYixJQUFJLEVBQUUsS0FBSztZQUNYLENBQUMsRUFBRSxJQUFJO1lBQ1AsRUFBRSxFQUFFLE1BQU07WUFDVixDQUFDLEVBQUUsTUFBTTtZQUNULEVBQUUsRUFBRSxPQUFPO1lBQ1gsQ0FBQyxFQUFFLE1BQU07WUFDVCxFQUFFLEVBQUUsT0FBTztZQUNYLENBQUMsRUFBRSxLQUFLO1lBQ1IsRUFBRSxFQUFFLE1BQU07WUFDVixDQUFDLEVBQUUsTUFBTTtZQUNULEVBQUUsRUFBRSxPQUFPO1lBQ1gsQ0FBQyxFQUFFLEtBQUs7WUFDUixFQUFFLEVBQUUsTUFBTTtTQUNYO1FBQ0QsSUFBSSxFQUFFOztZQUVKLEdBQUcsRUFBRSxDQUFDOztZQUNOLEdBQUcsRUFBRSxDQUFDO1NBQ1A7S0FDRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9