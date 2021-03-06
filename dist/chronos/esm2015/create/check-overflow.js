/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { getParsingFlags } from './parsing-flags';
import { DATE, HOUR, MILLISECOND, MINUTE, MONTH, SECOND, WEEK, WEEKDAY, YEAR } from '../units/constants';
import { daysInMonth } from '../units/month';
/**
 * @param {?} config
 * @return {?}
 */
export function checkOverflow(config) {
    let /** @type {?} */ overflow;
    const /** @type {?} */ a = config._a;
    if (a && getParsingFlags(config).overflow === -2) {
        // todo: fix this sh*t
        overflow =
            a[MONTH] < 0 || a[MONTH] > 11 ? MONTH :
                a[DATE] < 1 || a[DATE] > daysInMonth(a[YEAR], a[MONTH]) ? DATE :
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2stb3ZlcmZsb3cuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvIiwic291cmNlcyI6WyJjcmVhdGUvY2hlY2stb3ZlcmZsb3cudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNsRCxPQUFPLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN6RyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7O0FBRzdDLE1BQU0sd0JBQXdCLE1BQXlCO0lBQ3JELHFCQUFJLFFBQVEsQ0FBQztJQUNiLHVCQUFNLENBQUMsR0FBRyxNQUFNLENBQUMsRUFBRSxDQUFDO0lBRXBCLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUMsUUFBUSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7UUFFakQsUUFBUTtZQUNOLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3JDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUM5RCxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQzt3QkFDdEgsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQzs0QkFDeEMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQ0FDeEMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsV0FBVyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQztvQ0FDeEQsQ0FBQyxDQUFDLENBQUM7UUFFakIsRUFBRSxDQUFDLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDLGtCQUFrQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3ZGLFFBQVEsR0FBRyxJQUFJLENBQUM7U0FDakI7UUFDRCxFQUFFLENBQUMsQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUMsY0FBYyxJQUFJLFFBQVEsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDOUQsUUFBUSxHQUFHLElBQUksQ0FBQztTQUNqQjtRQUNELEVBQUUsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxnQkFBZ0IsSUFBSSxRQUFRLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2hFLFFBQVEsR0FBRyxPQUFPLENBQUM7U0FDcEI7UUFFRCxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztLQUM3QztJQUVELE1BQU0sQ0FBQyxNQUFNLENBQUM7Q0FDZiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldFBhcnNpbmdGbGFncyB9IGZyb20gJy4vcGFyc2luZy1mbGFncyc7XG5pbXBvcnQgeyBEQVRFLCBIT1VSLCBNSUxMSVNFQ09ORCwgTUlOVVRFLCBNT05USCwgU0VDT05ELCBXRUVLLCBXRUVLREFZLCBZRUFSIH0gZnJvbSAnLi4vdW5pdHMvY29uc3RhbnRzJztcbmltcG9ydCB7IGRheXNJbk1vbnRoIH0gZnJvbSAnLi4vdW5pdHMvbW9udGgnO1xuaW1wb3J0IHsgRGF0ZVBhcnNpbmdDb25maWcgfSBmcm9tICcuL3BhcnNpbmcudHlwZXMnO1xuXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tPdmVyZmxvdyhjb25maWc6IERhdGVQYXJzaW5nQ29uZmlnKTogRGF0ZVBhcnNpbmdDb25maWcge1xuICBsZXQgb3ZlcmZsb3c7XG4gIGNvbnN0IGEgPSBjb25maWcuX2E7XG5cbiAgaWYgKGEgJiYgZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZykub3ZlcmZsb3cgPT09IC0yKSB7XG4gICAgLy8gdG9kbzogZml4IHRoaXMgc2gqdFxuICAgIG92ZXJmbG93ID1cbiAgICAgIGFbTU9OVEhdIDwgMCB8fCBhW01PTlRIXSA+IDExID8gTU9OVEggOlxuICAgICAgICBhW0RBVEVdIDwgMSB8fCBhW0RBVEVdID4gZGF5c0luTW9udGgoYVtZRUFSXSwgYVtNT05USF0pID8gREFURSA6XG4gICAgICAgICAgYVtIT1VSXSA8IDAgfHwgYVtIT1VSXSA+IDI0IHx8IChhW0hPVVJdID09PSAyNCAmJiAoYVtNSU5VVEVdICE9PSAwIHx8IGFbU0VDT05EXSAhPT0gMCB8fCBhW01JTExJU0VDT05EXSAhPT0gMCkpID8gSE9VUiA6XG4gICAgICAgICAgICBhW01JTlVURV0gPCAwIHx8IGFbTUlOVVRFXSA+IDU5ID8gTUlOVVRFIDpcbiAgICAgICAgICAgICAgYVtTRUNPTkRdIDwgMCB8fCBhW1NFQ09ORF0gPiA1OSA/IFNFQ09ORCA6XG4gICAgICAgICAgICAgICAgYVtNSUxMSVNFQ09ORF0gPCAwIHx8IGFbTUlMTElTRUNPTkRdID4gOTk5ID8gTUlMTElTRUNPTkQgOlxuICAgICAgICAgICAgICAgICAgLTE7XG5cbiAgICBpZiAoZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZykuX292ZXJmbG93RGF5T2ZZZWFyICYmIChvdmVyZmxvdyA8IFlFQVIgfHwgb3ZlcmZsb3cgPiBEQVRFKSkge1xuICAgICAgb3ZlcmZsb3cgPSBEQVRFO1xuICAgIH1cbiAgICBpZiAoZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZykuX292ZXJmbG93V2Vla3MgJiYgb3ZlcmZsb3cgPT09IC0xKSB7XG4gICAgICBvdmVyZmxvdyA9IFdFRUs7XG4gICAgfVxuICAgIGlmIChnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS5fb3ZlcmZsb3dXZWVrZGF5ICYmIG92ZXJmbG93ID09PSAtMSkge1xuICAgICAgb3ZlcmZsb3cgPSBXRUVLREFZO1xuICAgIH1cblxuICAgIGdldFBhcnNpbmdGbGFncyhjb25maWcpLm92ZXJmbG93ID0gb3ZlcmZsb3c7XG4gIH1cblxuICByZXR1cm4gY29uZmlnO1xufVxuXG4iXX0=