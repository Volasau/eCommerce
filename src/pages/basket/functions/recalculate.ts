import { recalculatePromo } from '../listeners/changeQuantity/recalculatePromo';
import { recalculateValues } from '../listeners/changeQuantity/recalculateValues';
import { isPromoLap } from './isPromoLap';

export function recalculate(id: string, totalSum: number | undefined) {
    if (isPromoLap()) {
        recalculatePromo(id);
        recalculateValues(id, totalSum);
    } else {
        recalculateValues(id, totalSum);
    }
}
