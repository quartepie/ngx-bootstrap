/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Duration, isDuration } from './constructor';
import { isDateValid, isNumber, isObject, isString, toInt } from '../utils/type-checks';
import { DATE, HOUR, MILLISECOND, MINUTE, SECOND } from '../units/constants';
import { parseDate } from '../create/local';
import { absRound } from '../utils/abs-round';
import { cloneWithOffset } from '../units/offset';
import { isAfter, isBefore } from '../utils/date-compare';
import { getFullYear, getMonth } from '../utils/date-getters';
import { add } from '../moment/add-subtract';
import { cloneDate } from '../create/clone';
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
export function createDuration(input, key, config) {
    if (config === void 0) { config = {}; }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zLyIsInNvdXJjZXMiOlsiZHVyYXRpb24vY3JlYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNyRCxPQUFPLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hGLE9BQU8sRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDN0UsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzVDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUc5QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDbEQsT0FBTyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzlELE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFNUMscUJBQU0sV0FBVyxHQUFHLDBEQUEwRCxDQUFDOzs7OztBQU0vRSxxQkFBTSxRQUFRLEdBQUcscUtBQXFLLENBQUM7Ozs7Ozs7QUFJdkwsTUFBTSx5QkFBeUIsS0FBcUIsRUFBRSxHQUFZLEVBQUUsTUFBOEI7SUFBOUIsdUJBQUEsRUFBQSxXQUE4QjtJQUNoRyxxQkFBTSxRQUFRLEdBQUcsZUFBZSxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQzs7SUFHN0MsTUFBTSxDQUFDLElBQUksUUFB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Q0FBQztRQUM5QyxHQUFHLENBQUMsWUFBWSxHQUFHLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQztRQUNyQyxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQztLQUMxQjtJQUVELE1BQU0sQ0FBQyxHQUFHLENBQUM7Q0FDWiIsInNvdXJjZXNDb250ZW50IjpbIi8vIEFTUC5ORVQganNvbiBkYXRlIGZvcm1hdCByZWdleFxuaW1wb3J0IHsgRHVyYXRpb24sIGlzRHVyYXRpb24gfSBmcm9tICcuL2NvbnN0cnVjdG9yJztcbmltcG9ydCB7IGlzRGF0ZVZhbGlkLCBpc051bWJlciwgaXNPYmplY3QsIGlzU3RyaW5nLCB0b0ludCB9IGZyb20gJy4uL3V0aWxzL3R5cGUtY2hlY2tzJztcbmltcG9ydCB7IERBVEUsIEhPVVIsIE1JTExJU0VDT05ELCBNSU5VVEUsIFNFQ09ORCB9IGZyb20gJy4uL3VuaXRzL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBwYXJzZURhdGUgfSBmcm9tICcuLi9jcmVhdGUvbG9jYWwnO1xuaW1wb3J0IHsgYWJzUm91bmQgfSBmcm9tICcuLi91dGlscy9hYnMtcm91bmQnO1xuaW1wb3J0IHsgRGF0ZU9iamVjdCB9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7IERhdGVQYXJzaW5nQ29uZmlnIH0gZnJvbSAnLi4vY3JlYXRlL3BhcnNpbmcudHlwZXMnO1xuaW1wb3J0IHsgY2xvbmVXaXRoT2Zmc2V0IH0gZnJvbSAnLi4vdW5pdHMvb2Zmc2V0JztcbmltcG9ydCB7IGlzQWZ0ZXIsIGlzQmVmb3JlIH0gZnJvbSAnLi4vdXRpbHMvZGF0ZS1jb21wYXJlJztcbmltcG9ydCB7IGdldEZ1bGxZZWFyLCBnZXRNb250aCB9IGZyb20gJy4uL3V0aWxzL2RhdGUtZ2V0dGVycyc7XG5pbXBvcnQgeyBhZGQgfSBmcm9tICcuLi9tb21lbnQvYWRkLXN1YnRyYWN0JztcbmltcG9ydCB7IGNsb25lRGF0ZSB9IGZyb20gJy4uL2NyZWF0ZS9jbG9uZSc7XG5cbmNvbnN0IGFzcE5ldFJlZ2V4ID0gL14oXFwtfFxcKyk/KD86KFxcZCopWy4gXSk/KFxcZCspXFw6KFxcZCspKD86XFw6KFxcZCspKFxcLlxcZCopPyk/JC87XG5cbi8vIGZyb20gaHR0cDovL2RvY3MuY2xvc3VyZS1saWJyYXJ5Lmdvb2dsZWNvZGUuY29tL2dpdC9jbG9zdXJlX2dvb2dfZGF0ZV9kYXRlLmpzLnNvdXJjZS5odG1sXG4vLyBzb21ld2hhdCBtb3JlIGluIGxpbmUgd2l0aCA0LjQuMy4yIDIwMDQgc3BlYywgYnV0IGFsbG93cyBkZWNpbWFsIGFueXdoZXJlXG4vLyBhbmQgZnVydGhlciBtb2RpZmllZCB0byBhbGxvdyBmb3Igc3RyaW5ncyBjb250YWluaW5nIGJvdGggd2VlayBhbmQgZGF5XG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbmNvbnN0IGlzb1JlZ2V4ID0gL14oLXxcXCspP1AoPzooWy0rXT9bMC05LC5dKilZKT8oPzooWy0rXT9bMC05LC5dKilNKT8oPzooWy0rXT9bMC05LC5dKilXKT8oPzooWy0rXT9bMC05LC5dKilEKT8oPzpUKD86KFstK10/WzAtOSwuXSopSCk/KD86KFstK10/WzAtOSwuXSopTSk/KD86KFstK10/WzAtOSwuXSopUyk/KT8kLztcblxuZXhwb3J0IHR5cGUgRHVyYXRpb25JbnB1dCA9IHN0cmluZyB8IG51bWJlciB8IER1cmF0aW9uIHwgUGFydGlhbDxEYXRlT2JqZWN0PiB8IHsgZnJvbTogRGF0ZTsgdG86IERhdGUgfTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUR1cmF0aW9uKGlucHV0PzogRHVyYXRpb25JbnB1dCwga2V5Pzogc3RyaW5nLCBjb25maWc6IERhdGVQYXJzaW5nQ29uZmlnID0ge30pIHtcbiAgY29uc3QgZHVyYXRpb24gPSBjb252ZXJ0RHVyYXRpb24oaW5wdXQsIGtleSk7XG4gIC8vIG1hdGNoaW5nIGFnYWluc3QgcmVnZXhwIGlzIGV4cGVuc2l2ZSwgZG8gaXQgb24gZGVtYW5kXG5cbiAgcmV0dXJuIG5ldyBEdXJhdGlvbihkdXJhdGlvbiwgY29uZmlnKTtcbn1cblxuZnVuY3Rpb24gY29udmVydER1cmF0aW9uKGlucHV0OiBhbnksIGtleTogc3RyaW5nKTogUGFydGlhbDxEYXRlT2JqZWN0PiB7XG4gIC8vIGNoZWNrcyBmb3IgbnVsbCBvciB1bmRlZmluZWRcbiAgaWYgKGlucHV0ID09IG51bGwpIHtcbiAgICByZXR1cm4ge307XG4gIH1cblxuICBpZiAoaXNEdXJhdGlvbihpbnB1dCkpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbWlsbGlzZWNvbmRzOiBpbnB1dC5fbWlsbGlzZWNvbmRzLFxuICAgICAgZGF5OiBpbnB1dC5fZGF5cyxcbiAgICAgIG1vbnRoOiBpbnB1dC5fbW9udGhzXG4gICAgfTtcbiAgfVxuICBpZiAoaXNOdW1iZXIoaW5wdXQpKSB7XG4gICAgLy8gZHVyYXRpb24gPSB7fTtcbiAgICByZXR1cm4ga2V5ID8geyBba2V5XTogaW5wdXQgfSA6IHsgbWlsbGlzZWNvbmRzOiBpbnB1dCB9O1xuICB9XG5cbiAgaWYgKGlzU3RyaW5nKGlucHV0KSkge1xuICAgIGxldCBtYXRjaCA9IGFzcE5ldFJlZ2V4LmV4ZWMoaW5wdXQpO1xuXG4gICAgaWYgKG1hdGNoKSB7XG4gICAgICBjb25zdCBzaWduID0gKG1hdGNoWzFdID09PSAnLScpID8gLTEgOiAxO1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICB5ZWFyOiAwLFxuICAgICAgICBkYXk6IHRvSW50KG1hdGNoW0RBVEVdKSAqIHNpZ24sXG4gICAgICAgIGhvdXJzOiB0b0ludChtYXRjaFtIT1VSXSkgKiBzaWduLFxuICAgICAgICBtaW51dGVzOiB0b0ludChtYXRjaFtNSU5VVEVdKSAqIHNpZ24sXG4gICAgICAgIHNlY29uZHM6IHRvSW50KG1hdGNoW1NFQ09ORF0pICogc2lnbixcbiAgICAgICAgLy8gdGhlIG1pbGxpc2Vjb25kIGRlY2ltYWwgcG9pbnQgaXMgaW5jbHVkZWQgaW4gdGhlIG1hdGNoXG4gICAgICAgIG1pbGxpc2Vjb25kczogdG9JbnQoYWJzUm91bmQodG9JbnQobWF0Y2hbTUlMTElTRUNPTkRdKSAqIDEwMDApKSAqIHNpZ25cbiAgICAgIH07XG4gICAgfVxuXG4gICAgbWF0Y2ggPSBpc29SZWdleC5leGVjKGlucHV0KTtcbiAgICBpZiAobWF0Y2gpIHtcbiAgICAgIGNvbnN0IHNpZ24gPSAobWF0Y2hbMV0gPT09ICctJykgPyAtMSA6IChtYXRjaFsxXSA9PT0gJysnKSA/IDEgOiAxO1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICB5ZWFyOiBwYXJzZUlzbyhtYXRjaFsyXSwgc2lnbiksXG4gICAgICAgIG1vbnRoOiBwYXJzZUlzbyhtYXRjaFszXSwgc2lnbiksXG4gICAgICAgIHdlZWs6IHBhcnNlSXNvKG1hdGNoWzRdLCBzaWduKSxcbiAgICAgICAgZGF5OiBwYXJzZUlzbyhtYXRjaFs1XSwgc2lnbiksXG4gICAgICAgIGhvdXJzOiBwYXJzZUlzbyhtYXRjaFs2XSwgc2lnbiksXG4gICAgICAgIG1pbnV0ZXM6IHBhcnNlSXNvKG1hdGNoWzddLCBzaWduKSxcbiAgICAgICAgc2Vjb25kczogcGFyc2VJc28obWF0Y2hbOF0sIHNpZ24pXG4gICAgICB9O1xuICAgIH1cblxuICB9XG5cbiAgaWYgKGlzT2JqZWN0PHtmcm9tOiBhbnk7IHRvOiBhbnl9PihpbnB1dCkgJiYgKCdmcm9tJyBpbiBpbnB1dCB8fCAndG8nIGluIGlucHV0KSkge1xuICAgIGNvbnN0IGRpZmZSZXMgPSBtb21lbnRzRGlmZmVyZW5jZShwYXJzZURhdGUoaW5wdXQuZnJvbSksIHBhcnNlRGF0ZShpbnB1dC50bykpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIG1pbGxpc2Vjb25kczogZGlmZlJlcy5taWxsaXNlY29uZHMsXG4gICAgICBtb250aDogZGlmZlJlcy5tb250aHNcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIGlucHV0O1xufVxuXG4vLyBjcmVhdGVEdXJhdGlvbi5mbiA9IER1cmF0aW9uLnByb3RvdHlwZTtcbi8vIGNyZWF0ZUR1cmF0aW9uLmludmFsaWQgPSBpbnZhbGlkO1xuXG5mdW5jdGlvbiBwYXJzZUlzbyhpbnA6IHN0cmluZywgc2lnbjogbnVtYmVyKTogbnVtYmVyIHtcbiAgLy8gV2UnZCBub3JtYWxseSB1c2Ugfn5pbnAgZm9yIHRoaXMsIGJ1dCB1bmZvcnR1bmF0ZWx5IGl0IGFsc29cbiAgLy8gY29udmVydHMgZmxvYXRzIHRvIGludHMuXG4gIC8vIGlucCBtYXkgYmUgdW5kZWZpbmVkLCBzbyBjYXJlZnVsIGNhbGxpbmcgcmVwbGFjZSBvbiBpdC5cbiAgY29uc3QgcmVzID0gaW5wICYmIHBhcnNlRmxvYXQoaW5wLnJlcGxhY2UoJywnLCAnLicpKTtcbiAgLy8gYXBwbHkgc2lnbiB3aGlsZSB3ZSdyZSBhdCBpdFxuXG4gIHJldHVybiAoaXNOYU4ocmVzKSA/IDAgOiByZXMpICogc2lnbjtcbn1cblxuZnVuY3Rpb24gcG9zaXRpdmVNb21lbnRzRGlmZmVyZW5jZShiYXNlOiBEYXRlLCBvdGhlcjogRGF0ZSk6IHsgbWlsbGlzZWNvbmRzOiBudW1iZXI7IG1vbnRoczogbnVtYmVyIH0ge1xuICBjb25zdCByZXMgPSB7IG1pbGxpc2Vjb25kczogMCwgbW9udGhzOiAwIH07XG5cbiAgcmVzLm1vbnRocyA9IGdldE1vbnRoKG90aGVyKSAtIGdldE1vbnRoKGJhc2UpICtcbiAgICAoZ2V0RnVsbFllYXIob3RoZXIpIC0gZ2V0RnVsbFllYXIoYmFzZSkpICogMTI7XG4gIGNvbnN0IF9iYXNlUGx1cyA9IGFkZChjbG9uZURhdGUoYmFzZSksIHJlcy5tb250aHMsICdtb250aCcpO1xuICBpZiAoaXNBZnRlcihfYmFzZVBsdXMsIG90aGVyKSkge1xuICAgIC0tcmVzLm1vbnRocztcbiAgfVxuXG4gIHJlcy5taWxsaXNlY29uZHMgPSArb3RoZXIgLSArKGFkZChjbG9uZURhdGUoYmFzZSksIHJlcy5tb250aHMsICdtb250aCcpKTtcblxuICByZXR1cm4gcmVzO1xufVxuXG5mdW5jdGlvbiBtb21lbnRzRGlmZmVyZW5jZShiYXNlOiBEYXRlLCBvdGhlcjogRGF0ZSk6IHsgbWlsbGlzZWNvbmRzOiBudW1iZXI7IG1vbnRoczogbnVtYmVyIH0ge1xuICBpZiAoIShpc0RhdGVWYWxpZChiYXNlKSAmJiBpc0RhdGVWYWxpZChvdGhlcikpKSB7XG4gICAgcmV0dXJuIHsgbWlsbGlzZWNvbmRzOiAwLCBtb250aHM6IDAgfTtcbiAgfVxuXG4gIGxldCByZXM7XG4gIGNvbnN0IF9vdGhlciA9IGNsb25lV2l0aE9mZnNldChvdGhlciwgYmFzZSwge19vZmZzZXQ6IGJhc2UuZ2V0VGltZXpvbmVPZmZzZXQoKX0pO1xuICBpZiAoaXNCZWZvcmUoYmFzZSwgX290aGVyKSkge1xuICAgIHJlcyA9IHBvc2l0aXZlTW9tZW50c0RpZmZlcmVuY2UoYmFzZSwgX290aGVyKTtcbiAgfSBlbHNlIHtcbiAgICByZXMgPSBwb3NpdGl2ZU1vbWVudHNEaWZmZXJlbmNlKF9vdGhlciwgYmFzZSk7XG4gICAgcmVzLm1pbGxpc2Vjb25kcyA9IC1yZXMubWlsbGlzZWNvbmRzO1xuICAgIHJlcy5tb250aHMgPSAtcmVzLm1vbnRocztcbiAgfVxuXG4gIHJldHVybiByZXM7XG59XG4iXX0=