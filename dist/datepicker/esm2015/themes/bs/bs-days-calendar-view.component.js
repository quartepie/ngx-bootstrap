/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BsNavigationDirection } from '../../models';
import { BsDatepickerConfig } from '../../bs-datepicker.config';
export class BsDaysCalendarViewComponent {
    /**
     * @param {?} _config
     */
    constructor(_config) {
        this._config = _config;
        this.onNavigate = new EventEmitter();
        this.onViewMode = new EventEmitter();
        this.onSelect = new EventEmitter();
        this.onHover = new EventEmitter();
        this.onHoverWeek = new EventEmitter();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    navigateTo(event) {
        const /** @type {?} */ step = BsNavigationDirection.DOWN === event ? -1 : 1;
        this.onNavigate.emit({ step: { month: step } });
    }
    /**
     * @param {?} event
     * @return {?}
     */
    changeViewMode(event) {
        this.onViewMode.emit(event);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    selectDay(event) {
        this.onSelect.emit(event);
    }
    /**
     * @param {?} week
     * @return {?}
     */
    selectWeek(week) {
        if (!this._config.selectWeek) {
            return;
        }
        if (week.days
            && week.days[0]
            && !week.days[0].isDisabled
            && this._config.selectFromOtherMonth) {
            this.onSelect.emit(week.days[0]);
            return;
        }
        if (week.days.length === 0) {
            return;
        }
        const /** @type {?} */ selectedDay = week.days.find((day) => {
            return this._config.selectFromOtherMonth
                ? !day.isDisabled
                : !day.isOtherMonth && !day.isDisabled;
        });
        this.onSelect.emit(selectedDay);
    }
    /**
     * @param {?} cell
     * @param {?} isHovered
     * @return {?}
     */
    weekHoverHandler(cell, isHovered) {
        if (!this._config.selectWeek) {
            return;
        }
        const /** @type {?} */ hasActiveDays = cell.days.find((day) => {
            return this._config.selectFromOtherMonth
                ? !day.isDisabled
                : !day.isOtherMonth && !day.isDisabled;
        });
        if (hasActiveDays) {
            cell.isHovered = isHovered;
            this.isWeekHovered = isHovered;
            this.onHoverWeek.emit(cell);
        }
    }
    /**
     * @param {?} cell
     * @param {?} isHovered
     * @return {?}
     */
    hoverDay(cell, isHovered) {
        if (this._config.selectFromOtherMonth && cell.isOtherMonth) {
            cell.isOtherMonthHovered = isHovered;
        }
        this.onHover.emit({ cell, isHovered });
    }
}
BsDaysCalendarViewComponent.decorators = [
    { type: Component, args: [{
                selector: 'bs-days-calendar-view',
                // changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <bs-calendar-layout>
      <bs-datepicker-navigation-view
        [calendar]="calendar"
        (onNavigate)="navigateTo($event)"
        (onViewMode)="changeViewMode($event)"
      ></bs-datepicker-navigation-view>

      <!--days matrix-->
      <table role="grid" class="days weeks">
        <thead>
        <tr>
          <!--if show weeks-->
          <th *ngIf="options.showWeekNumbers"></th>
          <th *ngFor="let weekday of calendar.weekdays; let i = index"
              aria-label="weekday">{{ calendar.weekdays[i] }}
          </th>
        </tr>
        </thead>
        <tbody>
        <tr *ngFor="let week of calendar.weeks; let i = index">
          <td class="week" [class.active-week]="isWeekHovered"  *ngIf="options.showWeekNumbers">
            <span
                (click)="selectWeek(week)"
                (mouseenter)="weekHoverHandler(week, true)"
                (mouseleave)="weekHoverHandler(week, false)">{{ calendar.weekNumbers[i] }}</span>
          </td>
          <td *ngFor="let day of week.days" role="gridcell">
          <span bsDatepickerDayDecorator
                [day]="day"
                (click)="selectDay(day)"
                (mouseenter)="hoverDay(day, true)"
                (mouseleave)="hoverDay(day, false)">{{ day.label }}</span>
          </td>
        </tr>
        </tbody>
      </table>

    </bs-calendar-layout>
  `
            }] }
];
/** @nocollapse */
BsDaysCalendarViewComponent.ctorParameters = () => [
    { type: BsDatepickerConfig, },
];
BsDaysCalendarViewComponent.propDecorators = {
    "calendar": [{ type: Input },],
    "options": [{ type: Input },],
    "onNavigate": [{ type: Output },],
    "onViewMode": [{ type: Output },],
    "onSelect": [{ type: Output },],
    "onHover": [{ type: Output },],
    "onHoverWeek": [{ type: Output },],
};
function BsDaysCalendarViewComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    BsDaysCalendarViewComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    BsDaysCalendarViewComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    BsDaysCalendarViewComponent.propDecorators;
    /** @type {?} */
    BsDaysCalendarViewComponent.prototype.calendar;
    /** @type {?} */
    BsDaysCalendarViewComponent.prototype.options;
    /** @type {?} */
    BsDaysCalendarViewComponent.prototype.onNavigate;
    /** @type {?} */
    BsDaysCalendarViewComponent.prototype.onViewMode;
    /** @type {?} */
    BsDaysCalendarViewComponent.prototype.onSelect;
    /** @type {?} */
    BsDaysCalendarViewComponent.prototype.onHover;
    /** @type {?} */
    BsDaysCalendarViewComponent.prototype.onHoverWeek;
    /** @type {?} */
    BsDaysCalendarViewComponent.prototype.isWeekHovered;
    /** @type {?} */
    BsDaysCalendarViewComponent.prototype._config;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnMtZGF5cy1jYWxlbmRhci12aWV3LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvZGF0ZXBpY2tlci8iLCJzb3VyY2VzIjpbInRoZW1lcy9icy9icy1kYXlzLWNhbGVuZGFyLXZpZXcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxFQUNQLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFFTCxxQkFBcUIsRUFNdEIsTUFBTSxjQUFjLENBQUM7QUFDdEIsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUE4Q2hFLE1BQU07Ozs7SUFhSixZQUFvQixPQUEyQjtRQUEzQixZQUFPLEdBQVAsT0FBTyxDQUFvQjswQkFUeEIsSUFBSSxZQUFZLEVBQXFCOzBCQUNyQyxJQUFJLFlBQVksRUFBd0I7d0JBRTFDLElBQUksWUFBWSxFQUFnQjt1QkFDakMsSUFBSSxZQUFZLEVBQWtCOzJCQUM5QixJQUFJLFlBQVksRUFBaUI7S0FJTDs7Ozs7SUFFcEQsVUFBVSxDQUFDLEtBQTRCO1FBQ3JDLHVCQUFNLElBQUksR0FBRyxxQkFBcUIsQ0FBQyxJQUFJLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzNELElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQztLQUNqRDs7Ozs7SUFFRCxjQUFjLENBQUMsS0FBMkI7UUFDeEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDN0I7Ozs7O0lBRUQsU0FBUyxDQUFDLEtBQW1CO1FBQzNCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FB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ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE91dHB1dFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEJzRGF0ZXBpY2tlclZpZXdNb2RlLFxuICBCc05hdmlnYXRpb25EaXJlY3Rpb24sXG4gIEJzTmF2aWdhdGlvbkV2ZW50LFxuICBDZWxsSG92ZXJFdmVudCxcbiAgRGF0ZXBpY2tlclJlbmRlck9wdGlvbnMsXG4gIERheXNDYWxlbmRhclZpZXdNb2RlbCxcbiAgRGF5Vmlld01vZGVsLCBXZWVrVmlld01vZGVsXG59IGZyb20gJy4uLy4uL21vZGVscyc7XG5pbXBvcnQgeyBCc0RhdGVwaWNrZXJDb25maWcgfSBmcm9tICcuLi8uLi9icy1kYXRlcGlja2VyLmNvbmZpZyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2JzLWRheXMtY2FsZW5kYXItdmlldycsXG4gIC8vIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxicy1jYWxlbmRhci1sYXlvdXQ+XG4gICAgICA8YnMtZGF0ZXBpY2tlci1uYXZpZ2F0aW9uLXZpZXdcbiAgICAgICAgW2NhbGVuZGFyXT1cImNhbGVuZGFyXCJcbiAgICAgICAgKG9uTmF2aWdhdGUpPVwibmF2aWdhdGVUbygkZXZlbnQpXCJcbiAgICAgICAgKG9uVmlld01vZGUpPVwiY2hhbmdlVmlld01vZGUoJGV2ZW50KVwiXG4gICAgICA+PC9icy1kYXRlcGlja2VyLW5hdmlnYXRpb24tdmlldz5cblxuICAgICAgPCEtLWRheXMgbWF0cml4LS0+XG4gICAgICA8dGFibGUgcm9sZT1cImdyaWRcIiBjbGFzcz1cImRheXMgd2Vla3NcIj5cbiAgICAgICAgPHRoZWFkPlxuICAgICAgICA8dHI+XG4gICAgICAgICAgPCEtLWlmIHNob3cgd2Vla3MtLT5cbiAgICAgICAgICA8dGggKm5nSWY9XCJvcHRpb25zLnNob3dXZWVrTnVtYmVyc1wiPjwvdGg+XG4gICAgICAgICAgPHRoICpuZ0Zvcj1cImxldCB3ZWVrZGF5IG9mIGNhbGVuZGFyLndlZWtkYXlzOyBsZXQgaSA9IGluZGV4XCJcbiAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIndlZWtkYXlcIj57eyBjYWxlbmRhci53ZWVrZGF5c1tpXSB9fVxuICAgICAgICAgIDwvdGg+XG4gICAgICAgIDwvdHI+XG4gICAgICAgIDwvdGhlYWQ+XG4gICAgICAgIDx0Ym9keT5cbiAgICAgICAgPHRyICpuZ0Zvcj1cImxldCB3ZWVrIG9mIGNhbGVuZGFyLndlZWtzOyBsZXQgaSA9IGluZGV4XCI+XG4gICAgICAgICAgPHRkIGNsYXNzPVwid2Vla1wiIFtjbGFzcy5hY3RpdmUtd2Vla109XCJpc1dlZWtIb3ZlcmVkXCIgICpuZ0lmPVwib3B0aW9ucy5zaG93V2Vla051bWJlcnNcIj5cbiAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgKGNsaWNrKT1cInNlbGVjdFdlZWsod2VlaylcIlxuICAgICAgICAgICAgICAgIChtb3VzZWVudGVyKT1cIndlZWtIb3ZlckhhbmRsZXIod2VlaywgdHJ1ZSlcIlxuICAgICAgICAgICAgICAgIChtb3VzZWxlYXZlKT1cIndlZWtIb3ZlckhhbmRsZXIod2VlaywgZmFsc2UpXCI+e3sgY2FsZW5kYXIud2Vla051bWJlcnNbaV0gfX08L3NwYW4+XG4gICAgICAgICAgPC90ZD5cbiAgICAgICAgICA8dGQgKm5nRm9yPVwibGV0IGRheSBvZiB3ZWVrLmRheXNcIiByb2xlPVwiZ3JpZGNlbGxcIj5cbiAgICAgICAgICA8c3BhbiBic0RhdGVwaWNrZXJEYXlEZWNvcmF0b3JcbiAgICAgICAgICAgICAgICBbZGF5XT1cImRheVwiXG4gICAgICAgICAgICAgICAgKGNsaWNrKT1cInNlbGVjdERheShkYXkpXCJcbiAgICAgICAgICAgICAgICAobW91c2VlbnRlcik9XCJob3ZlckRheShkYXksIHRydWUpXCJcbiAgICAgICAgICAgICAgICAobW91c2VsZWF2ZSk9XCJob3ZlckRheShkYXksIGZhbHNlKVwiPnt7IGRheS5sYWJlbCB9fTwvc3Bhbj5cbiAgICAgICAgICA8L3RkPlxuICAgICAgICA8L3RyPlxuICAgICAgICA8L3Rib2R5PlxuICAgICAgPC90YWJsZT5cblxuICAgIDwvYnMtY2FsZW5kYXItbGF5b3V0PlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIEJzRGF5c0NhbGVuZGFyVmlld0NvbXBvbmVudCAge1xuICBASW5wdXQoKSBjYWxlbmRhcjogRGF5c0NhbGVuZGFyVmlld01vZGVsO1xuICBASW5wdXQoKSBvcHRpb25zOiBEYXRlcGlja2VyUmVuZGVyT3B0aW9ucztcblxuICBAT3V0cHV0KCkgb25OYXZpZ2F0ZSA9IG5ldyBFdmVudEVtaXR0ZXI8QnNOYXZpZ2F0aW9uRXZlbnQ+KCk7XG4gIEBPdXRwdXQoKSBvblZpZXdNb2RlID0gbmV3IEV2ZW50RW1pdHRlcjxCc0RhdGVwaWNrZXJWaWV3TW9kZT4oKTtcblxuICBAT3V0cHV0KCkgb25TZWxlY3QgPSBuZXcgRXZlbnRFbWl0dGVyPERheVZpZXdNb2RlbD4oKTtcbiAgQE91dHB1dCgpIG9uSG92ZXIgPSBuZXcgRXZlbnRFbWl0dGVyPENlbGxIb3ZlckV2ZW50PigpO1xuICBAT3V0cHV0KCkgb25Ib3ZlcldlZWsgPSBuZXcgRXZlbnRFbWl0dGVyPFdlZWtWaWV3TW9kZWw+KCk7XG5cbiAgaXNXZWVrSG92ZXJlZDogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9jb25maWc6IEJzRGF0ZXBpY2tlckNvbmZpZykgeyB9XG5cbiAgbmF2aWdhdGVUbyhldmVudDogQnNOYXZpZ2F0aW9uRGlyZWN0aW9uKTogdm9pZCB7XG4gICAgY29uc3Qgc3RlcCA9IEJzTmF2aWdhdGlvbkRpcmVjdGlvbi5ET1dOID09PSBldmVudCA/IC0xIDogMTtcbiAgICB0aGlzLm9uTmF2aWdhdGUuZW1pdCh7IHN0ZXA6IHsgbW9udGg6IHN0ZXAgfSB9KTtcbiAgfVxuXG4gIGNoYW5nZVZpZXdNb2RlKGV2ZW50OiBCc0RhdGVwaWNrZXJWaWV3TW9kZSk6IHZvaWQge1xuICAgIHRoaXMub25WaWV3TW9kZS5lbWl0KGV2ZW50KTtcbiAgfVxuXG4gIHNlbGVjdERheShldmVudDogRGF5Vmlld01vZGVsKTogdm9pZCB7XG4gICAgdGhpcy5vblNlbGVjdC5lbWl0KGV2ZW50KTtcbiAgfVxuXG4gIHNlbGVjdFdlZWsod2VlazogV2Vla1ZpZXdNb2RlbCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5fY29uZmlnLnNlbGVjdFdlZWspIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAod2Vlay5kYXlzXG4gICAgICAmJiB3ZWVrLmRheXNbMF1cbiAgICAgICYmICF3ZWVrLmRheXNbMF0uaXNEaXNhYmxlZFxuICAgICAgJiYgdGhpcy5fY29uZmlnLnNlbGVjdEZyb21PdGhlck1vbnRoKSB7XG5cbiAgICAgIHRoaXMub25TZWxlY3QuZW1pdCh3ZWVrLmRheXNbMF0pO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHdlZWsuZGF5cy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBzZWxlY3RlZERheSA9IHdlZWsuZGF5cy5maW5kKChkYXk6IERheVZpZXdNb2RlbCkgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuX2NvbmZpZy5zZWxlY3RGcm9tT3RoZXJNb250aFxuICAgICAgICA/ICFkYXkuaXNEaXNhYmxlZFxuICAgICAgICA6ICFkYXkuaXNPdGhlck1vbnRoICYmICFkYXkuaXNEaXNhYmxlZDtcbiAgICB9KTtcblxuICAgIHRoaXMub25TZWxlY3QuZW1pdChzZWxlY3RlZERheSk7XG4gIH1cblxuICB3ZWVrSG92ZXJIYW5kbGVyKGNlbGw6IFdlZWtWaWV3TW9kZWwsIGlzSG92ZXJlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIGlmICghdGhpcy5fY29uZmlnLnNlbGVjdFdlZWspIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBoYXNBY3RpdmVEYXlzID0gY2VsbC5kYXlzLmZpbmQoKGRheTogRGF5Vmlld01vZGVsKSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5fY29uZmlnLnNlbGVjdEZyb21PdGhlck1vbnRoXG4gICAgICAgID8gIWRheS5pc0Rpc2FibGVkXG4gICAgICAgIDogIWRheS5pc090aGVyTW9udGggJiYgIWRheS5pc0Rpc2FibGVkO1xuICAgIH0pO1xuXG4gICAgaWYgKGhhc0FjdGl2ZURheXMpIHtcbiAgICAgIGNlbGwuaXNIb3ZlcmVkID0gaXNIb3ZlcmVkO1xuICAgICAgdGhpcy5pc1dlZWtIb3ZlcmVkID0gaXNIb3ZlcmVkO1xuICAgICAgdGhpcy5vbkhvdmVyV2Vlay5lbWl0KGNlbGwpO1xuICAgIH1cbiAgfVxuXG4gIGhvdmVyRGF5KGNlbGw6IERheVZpZXdNb2RlbCwgaXNIb3ZlcmVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX2NvbmZpZy5zZWxlY3RGcm9tT3RoZXJNb250aCAmJiBjZWxsLmlzT3RoZXJNb250aCkge1xuICAgICAgY2VsbC5pc090aGVyTW9udGhIb3ZlcmVkID0gaXNIb3ZlcmVkO1xuICAgIH1cblxuICAgIHRoaXMub25Ib3Zlci5lbWl0KHsgY2VsbCwgaXNIb3ZlcmVkIH0pO1xuICB9XG59XG4iXX0=