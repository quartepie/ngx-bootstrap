/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { createInvalid, isValid } from './valid';
import { getParsingFlags } from './parsing-flags';
import { configFromStringAndFormat } from './from-string-and-format';
/**
 * @param {?} config
 * @return {?}
 */
export function configFromStringAndArray(config) {
    let /** @type {?} */ tempConfig;
    let /** @type {?} */ bestMoment;
    let /** @type {?} */ scoreToBeat;
    let /** @type {?} */ currentScore;
    if (!config._f || config._f.length === 0) {
        getParsingFlags(config).invalidFormat = true;
        return createInvalid(config);
    }
    let /** @type {?} */ i;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJvbS1zdHJpbmctYW5kLWFycmF5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zLyIsInNvdXJjZXMiOlsiY3JlYXRlL2Zyb20tc3RyaW5nLWFuZC1hcnJheS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLGFBQWEsRUFBRSxPQUFPLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFDakQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2xELE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDOzs7OztBQUdyRSxNQUFNLG1DQUFtQyxNQUF5QjtJQUNoRSxxQkFBSSxVQUFVLENBQUM7SUFDZixxQkFBSSxVQUFVLENBQUM7SUFDZixxQkFBSSxXQUFXLENBQUM7SUFDaEIscUJBQUksWUFBWSxDQUFDO0lBRWpCLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsSUFBSSxNQUFNLENBQUMsRUFBRSxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3pDLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1FBRTdDLE1BQU0sQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7S0FDOUI7SUFFRCxxQkFBSSxDQUFDLENBQUM7SUFDTixHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUMsRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1FBQ3RDLFlBQVksR0FBRyxDQUFDLENBQUM7UUFDakIsVUFBVSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ3ZDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQztZQUMzQixVQUFVLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUM7U0FDckM7UUFDRCxVQUFVLENBQUMsRUFBRSxHQUFHLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDN0IseUJBQXlCLENBQUMsVUFBVSxDQUFDLENBQUM7UUFFdEMsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3pCLFFBQVEsQ0FBQztTQUNWOztRQUdELFlBQVksSUFBSSxlQUFlLENBQUMsVUFBVSxDQUFDLENBQUMsYUFBYSxDQUFDOztRQUcxRCxZQUFZLElBQUksZUFBZSxDQUFDLFVBQVUsQ0FBQyxDQUFDLFlBQVksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBRXJFLGVBQWUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxLQUFLLEdBQUcsWUFBWSxDQUFDO1FBRWpELEVBQUUsQ0FBQyxDQUFDLFdBQVcsSUFBSSxJQUFJLElBQUksWUFBWSxHQUFHLFdBQVcsQ0FBQyxDQUFDLENBQUM7WUFDdEQsV0FBVyxHQUFHLFlBQVksQ0FBQztZQUMzQixVQUFVLEdBQUcsVUFBVSxDQUFDO1NBQ3pCO0tBQ0Y7SUFFRCxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsVUFBVSxJQUFJLFVBQVUsQ0FBQyxDQUFDO0NBQ3hEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0ZVBhcnNpbmdDb25maWcgfSBmcm9tICcuL3BhcnNpbmcudHlwZXMnO1xuaW1wb3J0IHsgY3JlYXRlSW52YWxpZCwgaXNWYWxpZCB9IGZyb20gJy4vdmFsaWQnO1xuaW1wb3J0IHsgZ2V0UGFyc2luZ0ZsYWdzIH0gZnJvbSAnLi9wYXJzaW5nLWZsYWdzJztcbmltcG9ydCB7IGNvbmZpZ0Zyb21TdHJpbmdBbmRGb3JtYXQgfSBmcm9tICcuL2Zyb20tc3RyaW5nLWFuZC1mb3JtYXQnO1xuXG4vLyBkYXRlIGZyb20gc3RyaW5nIGFuZCBhcnJheSBvZiBmb3JtYXQgc3RyaW5nc1xuZXhwb3J0IGZ1bmN0aW9uIGNvbmZpZ0Zyb21TdHJpbmdBbmRBcnJheShjb25maWc6IERhdGVQYXJzaW5nQ29uZmlnKTogRGF0ZVBhcnNpbmdDb25maWcge1xuICBsZXQgdGVtcENvbmZpZztcbiAgbGV0IGJlc3RNb21lbnQ7XG4gIGxldCBzY29yZVRvQmVhdDtcbiAgbGV0IGN1cnJlbnRTY29yZTtcblxuICBpZiAoIWNvbmZpZy5fZiB8fCBjb25maWcuX2YubGVuZ3RoID09PSAwKSB7XG4gICAgZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZykuaW52YWxpZEZvcm1hdCA9IHRydWU7XG5cbiAgICByZXR1cm4gY3JlYXRlSW52YWxpZChjb25maWcpO1xuICB9XG5cbiAgbGV0IGk7XG4gIGZvciAoaSA9IDA7IGkgPCBjb25maWcuX2YubGVuZ3RoOyBpKyspIHtcbiAgICBjdXJyZW50U2NvcmUgPSAwO1xuICAgIHRlbXBDb25maWcgPSBPYmplY3QuYXNzaWduKHt9LCBjb25maWcpO1xuICAgIGlmIChjb25maWcuX3VzZVVUQyAhPSBudWxsKSB7XG4gICAgICB0ZW1wQ29uZmlnLl91c2VVVEMgPSBjb25maWcuX3VzZVVUQztcbiAgICB9XG4gICAgdGVtcENvbmZpZy5fZiA9IGNvbmZpZy5fZltpXTtcbiAgICBjb25maWdGcm9tU3RyaW5nQW5kRm9ybWF0KHRlbXBDb25maWcpO1xuXG4gICAgaWYgKCFpc1ZhbGlkKHRlbXBDb25maWcpKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICAvLyBpZiB0aGVyZSBpcyBhbnkgaW5wdXQgdGhhdCB3YXMgbm90IHBhcnNlZCBhZGQgYSBwZW5hbHR5IGZvciB0aGF0IGZvcm1hdFxuICAgIGN1cnJlbnRTY29yZSArPSBnZXRQYXJzaW5nRmxhZ3ModGVtcENvbmZpZykuY2hhcnNMZWZ0T3ZlcjtcblxuICAgIC8vIG9yIHRva2Vuc1xuICAgIGN1cnJlbnRTY29yZSArPSBnZXRQYXJzaW5nRmxhZ3ModGVtcENvbmZpZykudW51c2VkVG9rZW5zLmxlbmd0aCAqIDEwO1xuXG4gICAgZ2V0UGFyc2luZ0ZsYWdzKHRlbXBDb25maWcpLnNjb3JlID0gY3VycmVudFNjb3JlO1xuXG4gICAgaWYgKHNjb3JlVG9CZWF0ID09IG51bGwgfHwgY3VycmVudFNjb3JlIDwgc2NvcmVUb0JlYXQpIHtcbiAgICAgIHNjb3JlVG9CZWF0ID0gY3VycmVudFNjb3JlO1xuICAgICAgYmVzdE1vbWVudCA9IHRlbXBDb25maWc7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24oY29uZmlnLCBiZXN0TW9tZW50IHx8IHRlbXBDb25maWcpO1xufVxuIl19