/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { createDate } from '../create/date-from-array';
/**
 * @param {?} date
 * @param {?=} isUTC
 * @return {?}
 */
export function getHours(date, isUTC) {
    if (isUTC === void 0) { isUTC = false; }
    return isUTC ? date.getUTCHours() : date.getHours();
}
/**
 * @param {?} date
 * @param {?=} isUTC
 * @return {?}
 */
export function getMinutes(date, isUTC) {
    if (isUTC === void 0) { isUTC = false; }
    return isUTC ? date.getUTCMinutes() : date.getMinutes();
}
/**
 * @param {?} date
 * @param {?=} isUTC
 * @return {?}
 */
export function getSeconds(date, isUTC) {
    if (isUTC === void 0) { isUTC = false; }
    return isUTC ? date.getUTCSeconds() : date.getSeconds();
}
/**
 * @param {?} date
 * @param {?=} isUTC
 * @return {?}
 */
export function getMilliseconds(date, isUTC) {
    if (isUTC === void 0) { isUTC = false; }
    return isUTC ? date.getUTCMilliseconds() : date.getMilliseconds();
}
/**
 * @param {?} date
 * @return {?}
 */
export function getTime(date) {
    return date.getTime();
}
/**
 * @param {?} date
 * @param {?=} isUTC
 * @return {?}
 */
export function getDay(date, isUTC) {
    if (isUTC === void 0) { isUTC = false; }
    return isUTC ? date.getUTCDay() : date.getDay();
}
/**
 * @param {?} date
 * @param {?=} isUTC
 * @return {?}
 */
export function getDate(date, isUTC) {
    if (isUTC === void 0) { isUTC = false; }
    return isUTC ? date.getUTCDate() : date.getDate();
}
/**
 * @param {?} date
 * @param {?=} isUTC
 * @return {?}
 */
export function getMonth(date, isUTC) {
    if (isUTC === void 0) { isUTC = false; }
    return isUTC ? date.getUTCMonth() : date.getMonth();
}
/**
 * @param {?} date
 * @param {?=} isUTC
 * @return {?}
 */
export function getFullYear(date, isUTC) {
    if (isUTC === void 0) { isUTC = false; }
    return isUTC ? date.getUTCFullYear() : date.getFullYear();
}
/**
 * @param {?} date
 * @return {?}
 */
export function getUnixTime(date) {
    return Math.floor(date.valueOf() / 1000);
}
/**
 * @param {?} date
 * @return {?}
 */
export function unix(date) {
    return Math.floor(date.valueOf() / 1000);
}
/**
 * @param {?} date
 * @return {?}
 */
export function getFirstDayOfMonth(date) {
    return createDate(date.getFullYear(), date.getMonth(), 1, date.getHours(), date.getMinutes(), date.getSeconds());
}
/**
 * @param {?} date
 * @return {?}
 */
export function daysInMonth(date) {
    return _daysInMonth(date.getFullYear(), date.getMonth());
}
/**
 * @param {?} year
 * @param {?} month
 * @return {?}
 */
export function _daysInMonth(year, month) {
    return new Date(Date.UTC(year, month + 1, 0)).getUTCDate();
}
/**
 * @param {?} date
 * @param {?} firstDayOfWeek
 * @return {?}
 */
export function isFirstDayOfWeek(date, firstDayOfWeek) {
    return date.getDay() === firstDayOfWeek;
}
/**
 * @param {?} date1
 * @param {?} date2
 * @return {?}
 */
export function isSameMonth(date1, date2) {
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
export function isSameYear(date1, date2) {
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
export function isSameDay(date1, date2) {
    if (!date1 || !date2) {
        return false;
    }
    return (isSameYear(date1, date2) &&
        isSameMonth(date1, date2) &&
        getDate(date1) === getDate(date2));
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1nZXR0ZXJzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zLyIsInNvdXJjZXMiOlsidXRpbHMvZGF0ZS1nZXR0ZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7Ozs7OztBQUV2RCxNQUFNLG1CQUFtQixJQUFVLEVBQUUsS0FBYTtJQUFiLHNCQUFBLEVBQUEsYUFBYTtJQUNoRCxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztDQUNyRDs7Ozs7O0FBRUQsTUFBTSxxQkFBcUIsSUFBVSxFQUFFLEtBQWE7SUFBYixzQkFBQSxFQUFBLGFBQWE7SUFDbEQsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7Q0FDekQ7Ozs7OztBQUVELE1BQU0scUJBQXFCLElBQVUsRUFBRSxLQUFhO0lBQWIsc0JBQUEsRUFBQSxhQUFhO0lBQ2xELE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0NBQ3pEOzs7Ozs7QUFFRCxNQUFNLDBCQUEwQixJQUFVLEVBQUUsS0FBYTtJQUFiLHNCQUFBLEVBQUEsYUFBYTtJQUN2RCxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0NBQ25FOzs7OztBQUNELE1BQU0sa0JBQWtCLElBQVU7SUFDaEMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztDQUN2Qjs7Ozs7O0FBRUQsTUFBTSxpQkFBaUIsSUFBVSxFQUFFLEtBQWE7SUFBYixzQkFBQSxFQUFBLGFBQWE7SUFDOUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7Q0FDakQ7Ozs7OztBQUVELE1BQU0sa0JBQWtCLElBQVUsRUFBRSxLQUFhO0lBQWIsc0JBQUEsRUFBQSxhQUFhO0lBQy9DLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0NBQ25EOzs7Ozs7QUFFRCxNQUFNLG1CQUFtQixJQUFVLEVBQUUsS0FBYTtJQUFiLHNCQUFBLEVBQUEsYUFBYTtJQUNoRCxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztDQUNyRDs7Ozs7O0FBRUQsTUFBTSxzQkFBc0IsSUFBVSxFQUFFLEtBQWE7SUFBYixzQkFBQSxFQUFBLGFBQWE7SUFDbkQsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7Q0FDM0Q7Ozs7O0FBRUQsTUFBTSxzQkFBc0IsSUFBVTtJQUNwQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUM7Q0FDMUM7Ozs7O0FBRUQsTUFBTSxlQUFlLElBQVU7SUFDN0IsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDO0NBQzFDOzs7OztBQUVELE1BQU0sNkJBQTZCLElBQVU7SUFDM0MsTUFBTSxDQUFDLFVBQVUsQ0FDZixJQUFJLENBQUMsV0FBVyxFQUFFLEVBQ2xCLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFDZixDQUFDLEVBQ0QsSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUNmLElBQUksQ0FBQyxVQUFVLEVBQUUsRUFDakIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUNsQixDQUFDO0NBQ0g7Ozs7O0FBRUQsTUFBTSxzQkFBc0IsSUFBVTtJQUNwQyxNQUFNLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztDQUMxRDs7Ozs7O0FBRUQsTUFBTSx1QkFBdUIsSUFBWSxFQUFFLEtBQWE7SUFDdEQsTUFBTSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLEtBQUssR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQztDQUM1RDs7Ozs7O0FBRUQsTUFBTSwyQkFBMkIsSUFBVSxFQUFFLGNBQXNCO0lBQ2pFLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEtBQUssY0FBYyxDQUFDO0NBQ3pDOzs7Ozs7QUFFRCxNQUFNLHNCQUFzQixLQUFXLEVBQUUsS0FBVztJQUNsRCxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDckIsTUFBTSxDQUFDLEtBQUssQ0FBQztLQUNkO0lBRUQsTUFBTSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLElBQUksUUFBUSxDQUFDLEtBQUssQ0FBQyxLQUFLLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztDQUN4RTs7Ozs7O0FBRUQsTUFBTSxxQkFBcUIsS0FBVyxFQUFFLEtBQVc7SUFDakQsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ3JCLE1BQU0sQ0FBQyxLQUFLLENBQUM7S0FDZDtJQUVELE1BQU0sQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEtBQUssV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO0NBQ2xEOzs7Ozs7QUFFRCxNQUFNLG9CQUFvQixLQUFXLEVBQUUsS0FBVztJQUNoRCxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDckIsTUFBTSxDQUFDLEtBQUssQ0FBQztLQUNkO0lBRUQsTUFBTSxDQUFDLENBQ0wsVUFBVSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUM7UUFDeEIsV0FBVyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUM7UUFDekIsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FDbEMsQ0FBQztDQUNIIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlRGF0ZSB9IGZyb20gJy4uL2NyZWF0ZS9kYXRlLWZyb20tYXJyYXknO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0SG91cnMoZGF0ZTogRGF0ZSwgaXNVVEMgPSBmYWxzZSk6IG51bWJlciB7XG4gIHJldHVybiBpc1VUQyA/IGRhdGUuZ2V0VVRDSG91cnMoKSA6IGRhdGUuZ2V0SG91cnMoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldE1pbnV0ZXMoZGF0ZTogRGF0ZSwgaXNVVEMgPSBmYWxzZSk6IG51bWJlciB7XG4gIHJldHVybiBpc1VUQyA/IGRhdGUuZ2V0VVRDTWludXRlcygpIDogZGF0ZS5nZXRNaW51dGVzKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTZWNvbmRzKGRhdGU6IERhdGUsIGlzVVRDID0gZmFsc2UpOiBudW1iZXIge1xuICByZXR1cm4gaXNVVEMgPyBkYXRlLmdldFVUQ1NlY29uZHMoKSA6IGRhdGUuZ2V0U2Vjb25kcygpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TWlsbGlzZWNvbmRzKGRhdGU6IERhdGUsIGlzVVRDID0gZmFsc2UpOiBudW1iZXIge1xuICByZXR1cm4gaXNVVEMgPyBkYXRlLmdldFVUQ01pbGxpc2Vjb25kcygpIDogZGF0ZS5nZXRNaWxsaXNlY29uZHMoKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRUaW1lKGRhdGU6IERhdGUpOiBudW1iZXIge1xuICByZXR1cm4gZGF0ZS5nZXRUaW1lKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREYXkoZGF0ZTogRGF0ZSwgaXNVVEMgPSBmYWxzZSk6IG51bWJlciB7XG4gIHJldHVybiBpc1VUQyA/IGRhdGUuZ2V0VVRDRGF5KCkgOiBkYXRlLmdldERheSgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGF0ZShkYXRlOiBEYXRlLCBpc1VUQyA9IGZhbHNlKTogbnVtYmVyIHtcbiAgcmV0dXJuIGlzVVRDID8gZGF0ZS5nZXRVVENEYXRlKCkgOiBkYXRlLmdldERhdGUoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldE1vbnRoKGRhdGU6IERhdGUsIGlzVVRDID0gZmFsc2UpOiBudW1iZXIge1xuICByZXR1cm4gaXNVVEMgPyBkYXRlLmdldFVUQ01vbnRoKCkgOiBkYXRlLmdldE1vbnRoKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRGdWxsWWVhcihkYXRlOiBEYXRlLCBpc1VUQyA9IGZhbHNlKTogbnVtYmVyIHtcbiAgcmV0dXJuIGlzVVRDID8gZGF0ZS5nZXRVVENGdWxsWWVhcigpIDogZGF0ZS5nZXRGdWxsWWVhcigpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VW5peFRpbWUoZGF0ZTogRGF0ZSk6IG51bWJlciB7XG4gIHJldHVybiBNYXRoLmZsb29yKGRhdGUudmFsdWVPZigpIC8gMTAwMCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1bml4KGRhdGU6IERhdGUpOiBudW1iZXIge1xuICByZXR1cm4gTWF0aC5mbG9vcihkYXRlLnZhbHVlT2YoKSAvIDEwMDApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Rmlyc3REYXlPZk1vbnRoKGRhdGU6IERhdGUpOiBEYXRlIHtcbiAgcmV0dXJuIGNyZWF0ZURhdGUoXG4gICAgZGF0ZS5nZXRGdWxsWWVhcigpLFxuICAgIGRhdGUuZ2V0TW9udGgoKSxcbiAgICAxLFxuICAgIGRhdGUuZ2V0SG91cnMoKSxcbiAgICBkYXRlLmdldE1pbnV0ZXMoKSxcbiAgICBkYXRlLmdldFNlY29uZHMoKVxuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF5c0luTW9udGgoZGF0ZTogRGF0ZSk6IG51bWJlciB7XG4gIHJldHVybiBfZGF5c0luTW9udGgoZGF0ZS5nZXRGdWxsWWVhcigpLCBkYXRlLmdldE1vbnRoKCkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX2RheXNJbk1vbnRoKHllYXI6IG51bWJlciwgbW9udGg6IG51bWJlcik6IG51bWJlciB7XG4gIHJldHVybiBuZXcgRGF0ZShEYXRlLlVUQyh5ZWFyLCBtb250aCArIDEsIDApKS5nZXRVVENEYXRlKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0ZpcnN0RGF5T2ZXZWVrKGRhdGU6IERhdGUsIGZpcnN0RGF5T2ZXZWVrOiBudW1iZXIpOiBib29sZWFuIHtcbiAgcmV0dXJuIGRhdGUuZ2V0RGF5KCkgPT09IGZpcnN0RGF5T2ZXZWVrO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNTYW1lTW9udGgoZGF0ZTE6IERhdGUsIGRhdGUyOiBEYXRlKSB7XG4gIGlmICghZGF0ZTEgfHwgIWRhdGUyKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIGlzU2FtZVllYXIoZGF0ZTEsIGRhdGUyKSAmJiBnZXRNb250aChkYXRlMSkgPT09IGdldE1vbnRoKGRhdGUyKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzU2FtZVllYXIoZGF0ZTE6IERhdGUsIGRhdGUyOiBEYXRlKSB7XG4gIGlmICghZGF0ZTEgfHwgIWRhdGUyKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIGdldEZ1bGxZZWFyKGRhdGUxKSA9PT0gZ2V0RnVsbFllYXIoZGF0ZTIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNTYW1lRGF5KGRhdGUxOiBEYXRlLCBkYXRlMjogRGF0ZSk6IGJvb2xlYW4ge1xuICBpZiAoIWRhdGUxIHx8ICFkYXRlMikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgaXNTYW1lWWVhcihkYXRlMSwgZGF0ZTIpICYmXG4gICAgaXNTYW1lTW9udGgoZGF0ZTEsIGRhdGUyKSAmJlxuICAgIGdldERhdGUoZGF0ZTEpID09PSBnZXREYXRlKGRhdGUyKVxuICApO1xufVxuIl19