/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { isArray, isDate, isNumber, isObject, isObjectEmpty, isString, isUndefined } from '../utils/type-checks';
import { getLocale } from '../locale/locales';
import { createInvalid, isValid } from './valid';
import { configFromStringAndArray } from './from-string-and-array';
import { configFromStringAndFormat } from './from-string-and-format';
import { cloneDate } from './clone';
import { configFromString } from './from-string';
import { configFromArray } from './from-array';
import { configFromObject } from './from-object';
import { checkOverflow } from './check-overflow';
/**
 * @param {?} config
 * @return {?}
 */
function createFromConfig(config) {
    const /** @type {?} */ res = checkOverflow(prepareConfig(config));
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
export function prepareConfig(config) {
    let /** @type {?} */ input = config._i;
    const /** @type {?} */ format = config._f;
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
    const /** @type {?} */ input = config._i;
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
        const /** @type {?} */ _arr = input.slice(0);
        config._a = _arr.map(obj => isString(obj) ? parseInt(obj, 10) : obj);
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
export function createLocalOrUTC(input, format, localeKey, strict, isUTC) {
    const /** @type {?} */ config = {};
    let /** @type {?} */ _input = input;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJvbS1hbnl0aGluZy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy8iLCJzb3VyY2VzIjpbImNyZWF0ZS9mcm9tLWFueXRoaW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLGFBQWEsRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFakgsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxhQUFhLEVBQUUsT0FBTyxFQUFFLE1BQU0sU0FBUyxDQUFDO0FBQ2pELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ25FLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3JFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFDcEMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDL0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7Ozs7QUFHakQsMEJBQTBCLE1BQXlCO0lBQ2pELHVCQUFNLEdBQUcsR0FBRyxhQUFhLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7O0lBRWpELEdBQUcsQ0FBQyxFQUFFLEdBQUcsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzNELEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FB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RyxTQUFTLENBQUM7SUFDdEIsTUFBTSxDQUFDLEVBQUUsR0FBRyxNQUFNLENBQUM7SUFDbkIsTUFBTSxDQUFDLEVBQUUsR0FBRyxNQUFNLENBQUM7SUFDbkIsTUFBTSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7SUFFeEIsTUFBTSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxDQUFDO0NBQ2pDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gdHNsaW50OmRpc2FibGU6bWF4LWxpbmUtbGVuZ3RoXG5pbXBvcnQgeyBpc0FycmF5LCBpc0RhdGUsIGlzTnVtYmVyLCBpc09iamVjdCwgaXNPYmplY3RFbXB0eSwgaXNTdHJpbmcsIGlzVW5kZWZpbmVkIH0gZnJvbSAnLi4vdXRpbHMvdHlwZS1jaGVja3MnO1xuaW1wb3J0IHsgRGF0ZVBhcnNpbmdDb25maWcgfSBmcm9tICcuL3BhcnNpbmcudHlwZXMnO1xuaW1wb3J0IHsgZ2V0TG9jYWxlIH0gZnJvbSAnLi4vbG9jYWxlL2xvY2FsZXMnO1xuaW1wb3J0IHsgY3JlYXRlSW52YWxpZCwgaXNWYWxpZCB9IGZyb20gJy4vdmFsaWQnO1xuaW1wb3J0IHsgY29uZmlnRnJvbVN0cmluZ0FuZEFycmF5IH0gZnJvbSAnLi9mcm9tLXN0cmluZy1hbmQtYXJyYXknO1xuaW1wb3J0IHsgY29uZmlnRnJvbVN0cmluZ0FuZEZvcm1hdCB9IGZyb20gJy4vZnJvbS1zdHJpbmctYW5kLWZvcm1hdCc7XG5pbXBvcnQgeyBjbG9uZURhdGUgfSBmcm9tICcuL2Nsb25lJztcbmltcG9ydCB7IGNvbmZpZ0Zyb21TdHJpbmcgfSBmcm9tICcuL2Zyb20tc3RyaW5nJztcbmltcG9ydCB7IGNvbmZpZ0Zyb21BcnJheSB9IGZyb20gJy4vZnJvbS1hcnJheSc7XG5pbXBvcnQgeyBjb25maWdGcm9tT2JqZWN0IH0gZnJvbSAnLi9mcm9tLW9iamVjdCc7XG5pbXBvcnQgeyBjaGVja092ZXJmbG93IH0gZnJvbSAnLi9jaGVjay1vdmVyZmxvdyc7XG5pbXBvcnQgeyBEYXRlSW5wdXQgfSBmcm9tICcuLi90ZXN0L2NoYWluJztcblxuZnVuY3Rpb24gY3JlYXRlRnJvbUNvbmZpZyhjb25maWc6IERhdGVQYXJzaW5nQ29uZmlnKTogRGF0ZVBhcnNpbmdDb25maWcge1xuICBjb25zdCByZXMgPSBjaGVja092ZXJmbG93KHByZXBhcmVDb25maWcoY29uZmlnKSk7XG4gIC8vIHRvZG86IHJlbW92ZSwgaW4gbW9tZW50LmpzIGl0J3MgbmV2ZXIgY2FsbGVkIGN1eiBvZiBtb21lbnQgY29uc3RydWN0b3JcbiAgcmVzLl9kID0gbmV3IERhdGUocmVzLl9kICE9IG51bGwgPyByZXMuX2QuZ2V0VGltZSgpIDogTmFOKTtcbiAgaWYgKCFpc1ZhbGlkKE9iamVjdC5hc3NpZ24oe30sIHJlcywge19pc1ZhbGlkOiBudWxsfSkpKSB7XG4gICAgcmVzLl9kID0gbmV3IERhdGUoTmFOKTtcbiAgfVxuICAvLyB0b2RvOiB1cGRhdGUgb2Zmc2V0XG4gIC8qaWYgKHJlcy5fbmV4dERheSkge1xuICAgIC8vIEFkZGluZyBpcyBzbWFydCBlbm91Z2ggYXJvdW5kIERTVFxuICAgIHJlcy5fZCA9IGFkZChyZXMuX2QsIDEsICdkYXknKTtcbiAgICByZXMuX25leHREYXkgPSB1bmRlZmluZWQ7XG4gIH0qL1xuXG4gIHJldHVybiByZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcmVwYXJlQ29uZmlnKGNvbmZpZzogRGF0ZVBhcnNpbmdDb25maWcpOiBEYXRlUGFyc2luZ0NvbmZpZyB7XG4gIGxldCBpbnB1dCA9IGNvbmZpZy5faTtcbiAgY29uc3QgZm9ybWF0ID0gY29uZmlnLl9mO1xuXG4gIGNvbmZpZy5fbG9jYWxlID0gY29uZmlnLl9sb2NhbGUgfHwgZ2V0TG9jYWxlKGNvbmZpZy5fbCk7XG5cbiAgaWYgKGlucHV0ID09PSBudWxsIHx8IChmb3JtYXQgPT09IHVuZGVmaW5lZCAmJiBpbnB1dCA9PT0gJycpKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUludmFsaWQoY29uZmlnLCB7IG51bGxJbnB1dDogdHJ1ZSB9KTtcbiAgfVxuXG4gIGlmIChpc1N0cmluZyhpbnB1dCkpIHtcbiAgICBjb25maWcuX2kgPSBpbnB1dCA9IGNvbmZpZy5fbG9jYWxlLnByZXBhcnNlKGlucHV0KTtcbiAgfVxuXG4gIGlmIChpc0RhdGUoaW5wdXQpKSB7XG4gICAgY29uZmlnLl9kID0gY2xvbmVEYXRlKGlucHV0KTtcblxuICAgIHJldHVybiBjb25maWc7XG4gIH1cblxuICAvLyB0b2RvOiBhZGQgY2hlY2sgZm9yIHJlY3Vyc2lvblxuXG4gIGlmIChpc0FycmF5KGZvcm1hdCkpIHtcbiAgICBjb25maWdGcm9tU3RyaW5nQW5kQXJyYXkoY29uZmlnKTtcbiAgfSBlbHNlIGlmIChmb3JtYXQpIHtcbiAgICBjb25maWdGcm9tU3RyaW5nQW5kRm9ybWF0KGNvbmZpZyk7XG4gIH0gZWxzZSB7XG4gICAgY29uZmlnRnJvbUlucHV0KGNvbmZpZyk7XG4gIH1cblxuICBpZiAoIWlzVmFsaWQoY29uZmlnKSkge1xuICAgIGNvbmZpZy5fZCA9IG51bGw7XG4gIH1cblxuICByZXR1cm4gY29uZmlnO1xufVxuXG5mdW5jdGlvbiBjb25maWdGcm9tSW5wdXQoY29uZmlnOiBEYXRlUGFyc2luZ0NvbmZpZyk6IERhdGVQYXJzaW5nQ29uZmlnIHtcbiAgY29uc3QgaW5wdXQgPSBjb25maWcuX2k7XG4gIGlmIChpc1VuZGVmaW5lZChpbnB1dCkpIHtcbiAgICBjb25maWcuX2QgPSBuZXcgRGF0ZSgpO1xuICB9IGVsc2UgaWYgKGlzRGF0ZShpbnB1dCkpIHtcbiAgICBjb25maWcuX2QgPSBjbG9uZURhdGUoaW5wdXQpO1xuICB9IGVsc2UgaWYgKGlzU3RyaW5nKGlucHV0KSkge1xuICAgIGNvbmZpZ0Zyb21TdHJpbmcoY29uZmlnKTtcbiAgfSBlbHNlIGlmIChpc0FycmF5PHN0cmluZyB8IG51bWJlcj4oaW5wdXQpICYmIGlucHV0Lmxlbmd0aCkge1xuICAgIGNvbnN0IF9hcnI6IChzdHJpbmcgfCBudW1iZXIpW10gPSBpbnB1dC5zbGljZSgwKTtcbiAgICBjb25maWcuX2EgPSBfYXJyLm1hcChvYmogPT4gaXNTdHJpbmcob2JqKSA/IHBhcnNlSW50KG9iaiwgMTApIDogb2JqKTtcbiAgICBjb25maWdGcm9tQXJyYXkoY29uZmlnKTtcbiAgfSBlbHNlIGlmIChpc09iamVjdChpbnB1dCkpIHtcbiAgICBjb25maWdGcm9tT2JqZWN0KGNvbmZpZyk7XG4gIH0gZWxzZSBpZiAoaXNOdW1iZXIoaW5wdXQpKSB7XG4gICAgLy8gZnJvbSBtaWxsaXNlY29uZHNcbiAgICBjb25maWcuX2QgPSBuZXcgRGF0ZShpbnB1dCk7XG4gIH0gZWxzZSB7XG4gICAgLy8gICBob29rcy5jcmVhdGVGcm9tSW5wdXRGYWxsYmFjayhjb25maWcpO1xuICAgIHJldHVybiBjcmVhdGVJbnZhbGlkKGNvbmZpZyk7XG4gIH1cblxuICByZXR1cm4gY29uZmlnO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTG9jYWxPclVUQyhpbnB1dDogRGF0ZUlucHV0LCBmb3JtYXQ/OiBzdHJpbmcgfCBzdHJpbmdbXSwgbG9jYWxlS2V5Pzogc3RyaW5nLCBzdHJpY3Q/OiBib29sZWFuLCBpc1VUQz86IGJvb2xlYW4pOiBEYXRlUGFyc2luZ0NvbmZpZyB7XG4gIGNvbnN0IGNvbmZpZzogRGF0ZVBhcnNpbmdDb25maWcgPSB7fTtcbiAgbGV0IF9pbnB1dCA9IGlucHV0O1xuXG4gIC8vIHBhcmFtcyBzd2l0Y2ggLT4gc2tpcDsgdGVzdCBpdCB3ZWxsXG4gIC8vIGlmIChsb2NhbGVLZXkgPT09IHRydWUgfHwgbG9jYWxlS2V5ID09PSBmYWxzZSkge1xuICAvLyAgICAgc3RyaWN0ID0gbG9jYWxlS2V5O1xuICAvLyAgICAgbG9jYWxlS2V5ID0gdW5kZWZpbmVkO1xuICAvLyB9XG5cbiAgLy8gdG9kbzogZmFpbCBmYXN0IGFuZCByZXR1cm4gbm90IHZhbGlkIGRhdGVcbiAgaWYgKChpc09iamVjdChfaW5wdXQpICYmIGlzT2JqZWN0RW1wdHkoX2lucHV0KSkgfHwgKGlzQXJyYXkoX2lucHV0KSAmJiBfaW5wdXQubGVuZ3RoID09PSAwKSkge1xuICAgIF9pbnB1dCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBvYmplY3QgY29uc3RydWN0aW9uIG11c3QgYmUgZG9uZSB0aGlzIHdheS5cbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL21vbWVudC9tb21lbnQvaXNzdWVzLzE0MjNcbiAgLy8gY29uZmlnLl9pc0FNb21lbnRPYmplY3QgPSB0cnVlO1xuICBjb25maWcuX3VzZVVUQyA9IGNvbmZpZy5faXNVVEMgPSBpc1VUQztcbiAgY29uZmlnLl9sID0gbG9jYWxlS2V5O1xuICBjb25maWcuX2kgPSBfaW5wdXQ7XG4gIGNvbmZpZy5fZiA9IGZvcm1hdDtcbiAgY29uZmlnLl9zdHJpY3QgPSBzdHJpY3Q7XG5cbiAgcmV0dXJuIGNyZWF0ZUZyb21Db25maWcoY29uZmlnKTtcbn1cbiJdfQ==