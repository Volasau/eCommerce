import { IName } from '../../../server/products/queryProductProjections';

interface ICartType {
    typeId: string;
    id: string;
}

interface ICartPriceDiscountValue {
    value: ICartPriceValue;
    discount: ICartType;
}

interface ICartPriceValue {
    type: string;
    currencyCode: string;
    centAmount: number;
    fractionDigits: number;
}

interface ICartPrice {
    id: string;
    value: ICartPriceValue;
    discounted: ICartPriceDiscountValue;
}

interface ICartImage {
    url: string;
    dimensions: {
        w: number;
        h: number;
    };
}

interface ICartAttribute {
    name: string;
    value: { key: string; label: string }[];
}

interface ICartAvailability {
    isOnStock: boolean;
    availableQuantity: number;
    version: number;
    id: string;
}

interface ICartProductVariant {
    id: number;
    sku: string;
    key: string;
    prices: ICartPrice[];
    images: ICartImage[];
    attributes: ICartAttribute[];
    assets: [];
    availability: ICartAvailability;
}

interface ICartProductType {
    typeId: string;
    id: string;
    version: number;
}

interface ICartState {
    quantity: number;
    state: ICartType;
}

interface ICartProduct {
    id: string;
    productId: string;
    productKey: string;
    name: IName;
    productType: ICartProductType;
    productSlug: IName;
    variant: ICartProductVariant;
    price: ICartPrice;
    quantity: number;
    discountedPricePerQuantity: [];
    perMethodTaxRate: [];
    addedAt: string;
    lastModifiedAt: string;
    state: ICartState[];
    priceMode: string;
    lineItemMode: string;
    totalPrice: ICartPriceValue;
    taxedPricePortions: [];
}

interface IMadeBy {
    clientId: string;
    isPlatformClient: boolean;
    anonymousId: string;
}

export interface ICart {
    type: string;
    id: string;
    version: number;
    versionModifiedAt: string;
    lastMessageSequenceNumber: number;
    createdAt: string;
    lastModifiedAt: string;
    lastModifiedBy: IMadeBy;
    createdBy: IMadeBy;
    anonymousId: string;
    lineItems: ICartProduct[];
    cartState: string;
    totalPrice: ICartPriceValue;
    shippingMode: string;
    shipping: [];
    customLineItems: [];
    discountCodes: [];
    directDiscounts: [];
    inventoryMode: string;
    taxMode: string;
    taxRoundingMode: string;
    taxCalculationMode: string;
    deleteDaysAfterLastModification: number;
    refusedGifts: [];
    origin: string;
    itemShippingAddresses: [];
    totalLineItemQuantity: number;
}
