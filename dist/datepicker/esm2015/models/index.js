/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * **************
 * @record
 */
export function NavigationViewModel() { }
function NavigationViewModel_tsickle_Closure_declarations() {
    /** @type {?} */
    NavigationViewModel.prototype.monthTitle;
    /** @type {?} */
    NavigationViewModel.prototype.yearTitle;
    /** @type {?|undefined} */
    NavigationViewModel.prototype.hideLeftArrow;
    /** @type {?|undefined} */
    NavigationViewModel.prototype.hideRightArrow;
    /** @type {?|undefined} */
    NavigationViewModel.prototype.disableLeftArrow;
    /** @type {?|undefined} */
    NavigationViewModel.prototype.disableRightArrow;
}
/**
 * @record
 */
export function CalendarCellViewModel() { }
function CalendarCellViewModel_tsickle_Closure_declarations() {
    /** @type {?} */
    CalendarCellViewModel.prototype.date;
    /** @type {?} */
    CalendarCellViewModel.prototype.label;
    /** @type {?|undefined} */
    CalendarCellViewModel.prototype.isDisabled;
    /** @type {?|undefined} */
    CalendarCellViewModel.prototype.isHovered;
}
/**
 * **************
 * @record
 */
export function DayViewModel() { }
function DayViewModel_tsickle_Closure_declarations() {
    /** @type {?|undefined} */
    DayViewModel.prototype.isOtherMonthHovered;
    /** @type {?|undefined} */
    DayViewModel.prototype.isOtherMonth;
    /** @type {?|undefined} */
    DayViewModel.prototype.isInRange;
    /** @type {?|undefined} */
    DayViewModel.prototype.isSelectionStart;
    /** @type {?|undefined} */
    DayViewModel.prototype.isSelectionEnd;
    /** @type {?|undefined} */
    DayViewModel.prototype.isSelected;
    /** @type {?|undefined} */
    DayViewModel.prototype.isToday;
    /** @type {?|undefined} */
    DayViewModel.prototype.monthIndex;
    /** @type {?|undefined} */
    DayViewModel.prototype.weekIndex;
    /** @type {?|undefined} */
    DayViewModel.prototype.dayIndex;
}
/**
 * @record
 */
export function WeekViewModel() { }
function WeekViewModel_tsickle_Closure_declarations() {
    /** @type {?} */
    WeekViewModel.prototype.days;
    /** @type {?|undefined} */
    WeekViewModel.prototype.isHovered;
}
/**
 * @record
 */
export function DaysCalendarViewModel() { }
function DaysCalendarViewModel_tsickle_Closure_declarations() {
    /** @type {?} */
    DaysCalendarViewModel.prototype.weeks;
    /** @type {?} */
    DaysCalendarViewModel.prototype.month;
    /** @type {?} */
    DaysCalendarViewModel.prototype.weekNumbers;
    /** @type {?} */
    DaysCalendarViewModel.prototype.weekdays;
}
/**
 * **************
 * @record
 */
export function MonthsCalendarViewModel() { }
function MonthsCalendarViewModel_tsickle_Closure_declarations() {
    /** @type {?} */
    MonthsCalendarViewModel.prototype.months;
}
/**
 * **************
 * @record
 */
export function YearsCalendarViewModel() { }
function YearsCalendarViewModel_tsickle_Closure_declarations() {
    /** @type {?} */
    YearsCalendarViewModel.prototype.years;
}
/**
 * **************
 * @record
 */
export function DaysCalendarModel() { }
function DaysCalendarModel_tsickle_Closure_declarations() {
    /** @type {?} */
    DaysCalendarModel.prototype.daysMatrix;
    /** @type {?} */
    DaysCalendarModel.prototype.month;
}
/**
 * **************
 * @record
 */
export function MonthViewOptions() { }
function MonthViewOptions_tsickle_Closure_declarations() {
    /** @type {?|undefined} */
    MonthViewOptions.prototype.width;
    /** @type {?|undefined} */
    MonthViewOptions.prototype.height;
    /** @type {?|undefined} */
    MonthViewOptions.prototype.firstDayOfWeek;
}
/**
 * **************
 * @record
 */
export function DatepickerFormatOptions() { }
function DatepickerFormatOptions_tsickle_Closure_declarations() {
    /** @type {?} */
    DatepickerFormatOptions.prototype.locale;
    /** @type {?} */
    DatepickerFormatOptions.prototype.monthTitle;
    /** @type {?} */
    DatepickerFormatOptions.prototype.yearTitle;
    /** @type {?} */
    DatepickerFormatOptions.prototype.dayLabel;
    /** @type {?} */
    DatepickerFormatOptions.prototype.monthLabel;
    /** @type {?} */
    DatepickerFormatOptions.prototype.yearLabel;
    /** @type {?} */
    DatepickerFormatOptions.prototype.weekNumbers;
}
/**
 * @record
 */
export function DatepickerRenderOptions() { }
function DatepickerRenderOptions_tsickle_Closure_declarations() {
    /** @type {?|undefined} */
    DatepickerRenderOptions.prototype.showWeekNumbers;
    /** @type {?|undefined} */
    DatepickerRenderOptions.prototype.displayMonths;
}
/** @enum {number} */
const BsNavigationDirection = {
    UP: 0,
    DOWN: 1,
};
export { BsNavigationDirection };
BsNavigationDirection[BsNavigationDirection.UP] = "UP";
BsNavigationDirection[BsNavigationDirection.DOWN] = "DOWN";
/**
 * @record
 */
export function BsNavigationEvent() { }
function BsNavigationEvent_tsickle_Closure_declarations() {
    /** @type {?|undefined} */
    BsNavigationEvent.prototype.direction;
    /** @type {?|undefined} */
    BsNavigationEvent.prototype.step;
}
/**
 * @record
 */
export function BsViewNavigationEvent() { }
function BsViewNavigationEvent_tsickle_Closure_declarations() {
    /** @type {?|undefined} */
    BsViewNavigationEvent.prototype.unit;
    /** @type {?} */
    BsViewNavigationEvent.prototype.viewMode;
}
/**
 * @record
 */
export function CellHoverEvent() { }
function CellHoverEvent_tsickle_Closure_declarations() {
    /** @type {?} */
    CellHoverEvent.prototype.cell;
    /** @type {?} */
    CellHoverEvent.prototype.isHovered;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2RhdGVwaWNrZXIvIiwic291cmNlcyI6WyJtb2RlbHMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRpbWVVbml0IH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9jaHJvbm9zJztcblxuZXhwb3J0IHR5cGUgQnNEYXRlcGlja2VyVmlld01vZGUgPSAnZGF5JyB8ICdtb250aCcgfCAneWVhcic7XG5cbi8qKiAqKioqKioqKioqKioqKiogKi9cbi8vIG5hdmlnYXRpb24gYmFyIHNldHRpbmdzXG5leHBvcnQgaW50ZXJmYWNlIE5hdmlnYXRpb25WaWV3TW9kZWwge1xuICBtb250aFRpdGxlOiBzdHJpbmc7XG4gIHllYXJUaXRsZTogc3RyaW5nO1xuICBoaWRlTGVmdEFycm93PzogYm9vbGVhbjtcbiAgaGlkZVJpZ2h0QXJyb3c/OiBib29sZWFuO1xuICBkaXNhYmxlTGVmdEFycm93PzogYm9vbGVhbjtcbiAgZGlzYWJsZVJpZ2h0QXJyb3c/OiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENhbGVuZGFyQ2VsbFZpZXdNb2RlbCB7XG4gIGRhdGU6IERhdGU7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIGlzRGlzYWJsZWQ/OiBib29sZWFuO1xuICBpc0hvdmVyZWQ/OiBib29sZWFuO1xufVxuXG4vKiogKioqKioqKioqKioqKioqICovXG4vLyBkYXlzIG1hdHJpeDogZGF5IGNlbGwgdmlldyBtb2RlbFxuZXhwb3J0IGludGVyZmFjZSBEYXlWaWV3TW9kZWwgZXh0ZW5kcyBDYWxlbmRhckNlbGxWaWV3TW9kZWwge1xuICBpc090aGVyTW9udGhIb3ZlcmVkPzogYm9vbGVhbjtcbiAgaXNPdGhlck1vbnRoPzogYm9vbGVhbjtcbiAgaXNJblJhbmdlPzogYm9vbGVhbjtcbiAgaXNTZWxlY3Rpb25TdGFydD86IGJvb2xlYW47XG4gIGlzU2VsZWN0aW9uRW5kPzogYm9vbGVhbjtcbiAgaXNTZWxlY3RlZD86IGJvb2xlYW47XG4gIGlzVG9kYXk/OiBib29sZWFuO1xuICAvLyBkYXkgaW5kZXhcbiAgbW9udGhJbmRleD86IG51bWJlcjtcbiAgd2Vla0luZGV4PzogbnVtYmVyO1xuICBkYXlJbmRleD86IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBXZWVrVmlld01vZGVsIHtcbiAgZGF5czogRGF5Vmlld01vZGVsW107XG4gIGlzSG92ZXJlZD86IGJvb2xlYW47XG59XG5cbi8vIHRvZG86IHNwbGl0IG5hdmlnYXRpb24gc2V0dGluZ3NcbmV4cG9ydCBpbnRlcmZhY2UgRGF5c0NhbGVuZGFyVmlld01vZGVsIGV4dGVuZHMgTmF2aWdhdGlvblZpZXdNb2RlbCB7XG4gIHdlZWtzOiBXZWVrVmlld01vZGVsW107XG4gIC8vIGFkZGl0aW9uYWwgaW5mb3JtYXRpb25cbiAgbW9udGg6IERhdGU7XG4gIHdlZWtOdW1iZXJzOiBzdHJpbmdbXTtcbiAgd2Vla2RheXM6IHN0cmluZ1tdO1xufVxuXG4vKiogKioqKioqKioqKioqKioqICovXG4vLyBtb250aHMgY2FsZW5kYXJcbmV4cG9ydCBpbnRlcmZhY2UgTW9udGhzQ2FsZW5kYXJWaWV3TW9kZWwgZXh0ZW5kcyBOYXZpZ2F0aW9uVmlld01vZGVsIHtcbiAgbW9udGhzOiBDYWxlbmRhckNlbGxWaWV3TW9kZWxbXVtdO1xufVxuXG4vKiogKioqKioqKioqKioqKioqICovXG4vLyB5ZWFycyBjYWxlbmRhclxuZXhwb3J0IGludGVyZmFjZSBZZWFyc0NhbGVuZGFyVmlld01vZGVsIGV4dGVuZHMgTmF2aWdhdGlvblZpZXdNb2RlbCB7XG4gIHllYXJzOiBDYWxlbmRhckNlbGxWaWV3TW9kZWxbXVtdO1xufVxuXG4vKiogKioqKioqKioqKioqKioqICovXG5cbi8vIG1hdGggbW9kZWxcbi8qKiAqKioqKioqKioqKioqKiogKi9cblxuLy8gZGF5cyBEYXRlJ3MgYXJyYXlcbmV4cG9ydCBpbnRlcmZhY2UgRGF5c0NhbGVuZGFyTW9kZWwge1xuICBkYXlzTWF0cml4OiBEYXRlW11bXTtcbiAgbW9udGg6IERhdGU7XG59XG5cbi8qKiAqKioqKioqKioqKioqKiogKi9cbi8vIHNvbWUgZnVuYyBvcHRpb25zXG5leHBvcnQgaW50ZXJmYWNlIE1vbnRoVmlld09wdGlvbnMge1xuICB3aWR0aD86IG51bWJlcjtcbiAgaGVpZ2h0PzogbnVtYmVyO1xuICBmaXJzdERheU9mV2Vlaz86IG51bWJlcjtcbn1cblxuLyoqICoqKioqKioqKioqKioqKiAqL1xuLy8gcmVuZGVyaW5nIG9wdGlvbnNcbmV4cG9ydCBpbnRlcmZhY2UgRGF0ZXBpY2tlckZvcm1hdE9wdGlvbnMge1xuICBsb2NhbGU6IHN0cmluZztcblxuICBtb250aFRpdGxlOiBzdHJpbmc7XG4gIHllYXJUaXRsZTogc3RyaW5nO1xuXG4gIGRheUxhYmVsOiBzdHJpbmc7XG4gIG1vbnRoTGFiZWw6IHN0cmluZztcbiAgeWVhckxhYmVsOiBzdHJpbmc7XG5cbiAgd2Vla051bWJlcnM6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEYXRlcGlja2VyUmVuZGVyT3B0aW9ucyB7XG4gIHNob3dXZWVrTnVtYmVycz86IGJvb2xlYW47XG4gIGRpc3BsYXlNb250aHM/OiBudW1iZXI7XG59XG5cbi8qKiAqKioqKioqKioqKioqKiogKi9cbi8vIGV2ZW50c1xuLyoqICoqKioqKioqKioqKioqKiAqL1xuZXhwb3J0IGVudW0gQnNOYXZpZ2F0aW9uRGlyZWN0aW9uIHtcbiAgVVAsXG4gIERPV05cbn1cblxuLy8gdXNlZCBmb3IgbmF2aWdhdGlvbiBldmVudHMsIHRvIGNoYW5nZSB2aWV3IGRhdGUgaW4gc3RhdGVcbmV4cG9ydCBpbnRlcmZhY2UgQnNOYXZpZ2F0aW9uRXZlbnQge1xuICBkaXJlY3Rpb24/OiBCc05hdmlnYXRpb25EaXJlY3Rpb247XG4gIHN0ZXA/OiBUaW1lVW5pdDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBCc1ZpZXdOYXZpZ2F0aW9uRXZlbnQge1xuICB1bml0PzogVGltZVVuaXQ7XG4gIHZpZXdNb2RlOiBCc0RhdGVwaWNrZXJWaWV3TW9kZTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDZWxsSG92ZXJFdmVudCB7XG4gIGNlbGw6IENhbGVuZGFyQ2VsbFZpZXdNb2RlbDtcbiAgaXNIb3ZlcmVkOiBib29sZWFuO1xufVxuIl19