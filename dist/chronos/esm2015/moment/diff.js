/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { cloneWithOffset, getDateOffset, getUTCOffset } from '../units/offset';
import { absFloor } from '../utils';
import { isDateValid, isNumber } from '../utils/type-checks';
import { getFullYear, getMonth } from '../utils/date-getters';
import { add } from './add-subtract';
import { cloneDate } from '../create/clone';
/**
 * @param {?} date
 * @param {?} input
 * @param {?} units
 * @param {?} asFloat
 * @param {?=} config
 * @return {?}
 */
export function diff(date, input, units, asFloat, config = {}) {
    if (!isDateValid(date)) {
        return NaN;
    }
    const /** @type {?} */ that = cloneWithOffset(input, date, config);
    if (!isDateValid(that)) {
        return NaN;
    }
    const /** @type {?} */ zoneOffset = (getDateOffset(input) - getDateOffset(date)) * 6e4;
    const /** @type {?} */ zoneDelta = isNumber(config._zoneDelta)
        ? config._zoneDelta * 6e4
        : (getUTCOffset(input, config) - getUTCOffset(date, config)) * 6e4;
    let /** @type {?} */ output;
    switch (units) {
        case 'year':
            output = monthDiff(date, that) / 12;
            break;
        case 'month':
            output = monthDiff(date, that);
            break;
        case 'quarter':
            output = monthDiff(date, that) / 3;
            break;
        case 'seconds':
            output = (date.valueOf() - that.valueOf()) / 1e3;
            break; // 1000
        case 'minutes':
            output = (date.valueOf() - that.valueOf()) / 6e4;
            break; // 1000 * 60
        case 'hours':
            output = (date.valueOf() - that.valueOf()) / 36e5;
            break; // 1000 * 60 * 60
        case 'day':
            output = (date.valueOf() - that.valueOf() - (zoneDelta === 0 ? zoneOffset : zoneDelta)) / 864e5;
            break; // 1000 * 60 * 60 * 24, negate dst
        case 'week':
            output = (date.valueOf() - that.valueOf() - zoneDelta) / 6048e5;
            break; // 1000 * 60 * 60 * 24 * 7, negate dst
        default:
            output = date.valueOf() - that.valueOf();
    }
    return asFloat ? output : absFloor(output);
}
/**
 * @param {?} a
 * @param {?} b
 * @return {?}
 */
function monthDiff(a, b) {
    // difference in months
    const /** @type {?} */ wholeMonthDiff = ((getFullYear(b) - getFullYear(a)) * 12) + (getMonth(b) - getMonth(a));
    // b is in (anchor - 1 month, anchor + 1 month)
    const /** @type {?} */ anchor = add(cloneDate(a), wholeMonthDiff, 'month');
    let /** @type {?} */ anchor2;
    let /** @type {?} */ adjust;
    if (b.valueOf() - anchor.valueOf() < 0) {
        anchor2 = add(cloneDate(a), wholeMonthDiff - 1, 'month');
        // linear across the month
        adjust = (b.valueOf() - anchor.valueOf()) / (anchor.valueOf() - anchor2.valueOf());
    }
    else {
        anchor2 = add(cloneDate(a), wholeMonthDiff + 1, 'month');
        // linear across the month
        adjust = (b.valueOf() - anchor.valueOf()) / (anchor2.valueOf() - anchor.valueOf());
    }
    // check for negative zero, return zero if negative zero
    return -(wholeMonthDiff + adjust) || 0;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlmZi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy8iLCJzb3VyY2VzIjpbIm1vbWVudC9kaWZmLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsZUFBZSxFQUFFLGFBQWEsRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUcvRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBQ3BDLE9BQU8sRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDN0QsT0FBTyxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckMsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGlCQUFpQixDQUFDOzs7Ozs7Ozs7QUFFNUMsTUFBTSxlQUFlLElBQVUsRUFBRSxLQUFXLEVBQ3ZCLEtBQWlCLEVBQUUsT0FBZ0IsRUFDbkMsU0FBNEIsRUFBRTtJQUVqRCxFQUFFLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdkIsTUFBTSxDQUFDLEdBQUcsQ0FBQztLQUNaO0lBRUQsdUJBQU0sSUFBSSxHQUFHLGVBQWUsQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBRWxELEVBQUUsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN2QixNQUFNLENBQUMsR0FBRyxDQUFDO0tBQ1o7SUFFRCx1QkFBTSxVQUFVLEdBQUcsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLEdBQUcsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO0lBQ3RFLHVCQUFNLFNBQVMsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQztRQUMz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QUFHLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxHQUFHLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxHQUFHLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO0tBQ3BGO0lBQUMsSUFBSSxDQUFDLENBQUM7UUFDTixPQUFPLEdBQUcsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxjQUFjLEdBQUcsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDOztRQUV6RCxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLEdBQUcsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLEdBQUcsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7S0FDcEY7O0lBR0QsTUFBTSxDQUFDLENBQUMsQ0FBQyxjQUFjLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0NBQ3hDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY2xvbmVXaXRoT2Zmc2V0LCBnZXREYXRlT2Zmc2V0LCBnZXRVVENPZmZzZXQgfSBmcm9tICcuLi91bml0cy9vZmZzZXQnO1xuaW1wb3J0IHsgRGF0ZVBhcnNpbmdDb25maWcgfSBmcm9tICcuLi9jcmVhdGUvcGFyc2luZy50eXBlcyc7XG5pbXBvcnQgeyBVbml0T2ZUaW1lIH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgYWJzRmxvb3IgfSBmcm9tICcuLi91dGlscyc7XG5pbXBvcnQgeyBpc0RhdGVWYWxpZCwgaXNOdW1iZXIgfSBmcm9tICcuLi91dGlscy90eXBlLWNoZWNrcyc7XG5pbXBvcnQgeyBnZXRGdWxsWWVhciwgZ2V0TW9udGggfSBmcm9tICcuLi91dGlscy9kYXRlLWdldHRlcnMnO1xuaW1wb3J0IHsgYWRkIH0gZnJvbSAnLi9hZGQtc3VidHJhY3QnO1xuaW1wb3J0IHsgY2xvbmVEYXRlIH0gZnJvbSAnLi4vY3JlYXRlL2Nsb25lJztcblxuZXhwb3J0IGZ1bmN0aW9uIGRpZmYoZGF0ZTogRGF0ZSwgaW5wdXQ6IERhdGUsXG4gICAgICAgICAgICAgICAgICAgICB1bml0czogVW5pdE9mVGltZSwgYXNGbG9hdDogYm9vbGVhbixcbiAgICAgICAgICAgICAgICAgICAgIGNvbmZpZzogRGF0ZVBhcnNpbmdDb25maWcgPSB7fVxuICAgICAgICAgICAgICAgICAgICAgKTogbnVtYmVyIHtcbiAgaWYgKCFpc0RhdGVWYWxpZChkYXRlKSkge1xuICAgIHJldHVybiBOYU47XG4gIH1cblxuICBjb25zdCB0aGF0ID0gY2xvbmVXaXRoT2Zmc2V0KGlucHV0LCBkYXRlLCBjb25maWcpO1xuXG4gIGlmICghaXNEYXRlVmFsaWQodGhhdCkpIHtcbiAgICByZXR1cm4gTmFOO1xuICB9XG5cbiAgY29uc3Qgem9uZU9mZnNldCA9IChnZXREYXRlT2Zmc2V0KGlucHV0KSAtIGdldERhdGVPZmZzZXQoZGF0ZSkpICogNmU0O1xuICBjb25zdCB6b25lRGVsdGEgPSBpc051bWJlcihjb25maWcuX3pvbmVEZWx0YSlcbiAgICA/IGNvbmZpZy5fem9uZURlbHRhICogNmU0XG4gICAgOiAoZ2V0VVRDT2Zmc2V0KGlucHV0LCBjb25maWcpIC0gZ2V0VVRDT2Zmc2V0KGRhdGUsIGNvbmZpZykpICogNmU0O1xuXG4gIGxldCBvdXRwdXQ7XG4gIHN3aXRjaCAodW5pdHMpIHtcbiAgICBjYXNlICd5ZWFyJzpcbiAgICAgIG91dHB1dCA9IG1vbnRoRGlmZihkYXRlLCB0aGF0KSAvIDEyO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnbW9udGgnOlxuICAgICAgb3V0cHV0ID0gbW9udGhEaWZmKGRhdGUsIHRoYXQpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAncXVhcnRlcic6XG4gICAgICBvdXRwdXQgPSBtb250aERpZmYoZGF0ZSwgdGhhdCkgLyAzO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnc2Vjb25kcyc6XG4gICAgICBvdXRwdXQgPSAoZGF0ZS52YWx1ZU9mKCkgLSB0aGF0LnZhbHVlT2YoKSkgLyAxZTM7XG4gICAgICBicmVhazsgLy8gMTAwMFxuICAgIGNhc2UgJ21pbnV0ZXMnOlxuICAgICAgb3V0cHV0ID0gKGRhdGUudmFsdWVPZigpIC0gdGhhdC52YWx1ZU9mKCkpIC8gNmU0O1xuICAgICAgYnJlYWs7IC8vIDEwMDAgKiA2MFxuICAgIGNhc2UgJ2hvdXJzJzpcbiAgICAgIG91dHB1dCA9IChkYXRlLnZhbHVlT2YoKSAtIHRoYXQudmFsdWVPZigpKSAvIDM2ZTU7XG4gICAgICBicmVhazsgLy8gMTAwMCAqIDYwICogNjBcbiAgICBjYXNlICdkYXknOlxuICAgICAgb3V0cHV0ID0gKGRhdGUudmFsdWVPZigpIC0gdGhhdC52YWx1ZU9mKCkgLSAoem9uZURlbHRhID09PSAwID8gem9uZU9mZnNldCA6IHpvbmVEZWx0YSkpIC8gODY0ZTU7XG4gICAgICBicmVhazsgLy8gMTAwMCAqIDYwICogNjAgKiAyNCwgbmVnYXRlIGRzdFxuICAgIGNhc2UgJ3dlZWsnOlxuICAgICAgb3V0cHV0ID0gKGRhdGUudmFsdWVPZigpIC0gdGhhdC52YWx1ZU9mKCkgLSB6b25lRGVsdGEpIC8gNjA0OGU1O1xuICAgICAgYnJlYWs7IC8vIDEwMDAgKiA2MCAqIDYwICogMjQgKiA3LCBuZWdhdGUgZHN0XG4gICAgZGVmYXVsdDpcbiAgICAgIG91dHB1dCA9IGRhdGUudmFsdWVPZigpIC0gdGhhdC52YWx1ZU9mKCk7XG4gIH1cblxuICByZXR1cm4gYXNGbG9hdCA/IG91dHB1dCA6IGFic0Zsb29yKG91dHB1dCk7XG59XG5cbmZ1bmN0aW9uIG1vbnRoRGlmZihhOiBEYXRlLCBiOiBEYXRlKTogbnVtYmVyIHtcbiAgLy8gZGlmZmVyZW5jZSBpbiBtb250aHNcbiAgY29uc3Qgd2hvbGVNb250aERpZmYgPSAoKGdldEZ1bGxZZWFyKGIpIC0gZ2V0RnVsbFllYXIoYSkpICogMTIpICsgKGdldE1vbnRoKGIpIC0gZ2V0TW9udGgoYSkpO1xuLy8gYiBpcyBpbiAoYW5jaG9yIC0gMSBtb250aCwgYW5jaG9yICsgMSBtb250aClcbiAgY29uc3QgYW5jaG9yID0gYWRkKGNsb25lRGF0ZShhKSwgd2hvbGVNb250aERpZmYsICdtb250aCcpO1xuICBsZXQgYW5jaG9yMjtcbiAgbGV0IGFkanVzdDtcblxuXG4gIGlmIChiLnZhbHVlT2YoKSAtIGFuY2hvci52YWx1ZU9mKCkgPCAwKSB7XG4gICAgYW5jaG9yMiA9IGFkZChjbG9uZURhdGUoYSksIHdob2xlTW9udGhEaWZmIC0gMSwgJ21vbnRoJyk7XG4gICAgLy8gbGluZWFyIGFjcm9zcyB0aGUgbW9udGhcbiAgICBhZGp1c3QgPSAoYi52YWx1ZU9mKCkgLSBhbmNob3IudmFsdWVPZigpKSAvIChhbmNob3IudmFsdWVPZigpIC0gYW5jaG9yMi52YWx1ZU9mKCkpO1xuICB9IGVsc2Uge1xuICAgIGFuY2hvcjIgPSBhZGQoY2xvbmVEYXRlKGEpLCB3aG9sZU1vbnRoRGlmZiArIDEsICdtb250aCcpO1xuICAgIC8vIGxpbmVhciBhY3Jvc3MgdGhlIG1vbnRoXG4gICAgYWRqdXN0ID0gKGIudmFsdWVPZigpIC0gYW5jaG9yLnZhbHVlT2YoKSkgLyAoYW5jaG9yMi52YWx1ZU9mKCkgLSBhbmNob3IudmFsdWVPZigpKTtcbiAgfVxuXG4gIC8vIGNoZWNrIGZvciBuZWdhdGl2ZSB6ZXJvLCByZXR1cm4gemVybyBpZiBuZWdhdGl2ZSB6ZXJvXG4gIHJldHVybiAtKHdob2xlTW9udGhEaWZmICsgYWRqdXN0KSB8fCAwO1xufVxuIl19