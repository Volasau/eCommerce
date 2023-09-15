import {
    CentPrecisionMoney,
    ChannelReference,
    CustomFields,
    DiscountedLineItemPriceForQuantity,
    InventoryMode,
    ItemShippingDetails,
    ItemState,
    LineItemMode,
    LineItemPriceMode,
    LocalizedString,
    MethodTaxRate,
    MethodTaxedPrice,
    Price,
    TaxRate,
    TaxedItemPrice,
} from '@commercetools/platform-sdk';
import { ProductVariant } from './productVariantInterface';

interface ProductType {
    readonly typeId: 'product-type';
    /**
     *	Unique identifier of the referenced [ProductType](ctp:api:type:ProductType).
     *
     *
     */
    readonly id: string;
    /**
     *	Contains the representation of the expanded ProductType. Only present in responses to requests with [Reference Expansion](/../api/general-concepts#reference-expansion) for ProductTypes.
     *
     *
     */
    readonly version: number;
}

export interface LineItem {
    /**
     *	Unique identifier of the LineItem.
     *
     *
     */
    readonly id: string;
    /**
     *	User-defined unique identifier of the LineItem.
     *
     *
     */
    readonly key?: string;
    /**
     *	`id` of the [Product](ctp:api:type:Product) the Line Item is based on.
     *
     *
     */
    readonly productId: string;
    /**
     *	`key` of the [Product](ctp:api:type:Product).
     *
     *	This field is only present on:
     *
     *	- Line Items in a [Cart](ctp:api:type:Cart) when the `key` is available on that specific Product at the time the Line Item was created or updated on the Cart.
     *	- [Orders](ctp:api:type:Order) when the `key` is available on the specific Product at the time the Order was created from the Cart.
     *
     *	Present on resources created or updated after 3 December 2021.
     *
     *
     */
    readonly productKey?: string;
    /**
     *	Name of the Product.
     *
     *
     */
    readonly name: LocalizedString;
    /**
     *	`slug` of the current version of the Product. Updated automatically if the `slug` changes. Empty if the Product has been deleted.
     *	The `productSlug` field of LineItem is not expanded when using [Reference Expansion](/../api/general-concepts#reference-expansion).
     *
     *
     */
    readonly productSlug?: LocalizedString;
    /**
     *	Product Type of the Product.
     *
     *
     */
    readonly productType: ProductType;
    /**
     *	Holds the data of the Product Variant added to the Cart.
     *
     *	The data is saved at the time the Product Variant is added to the Cart and is not updated automatically when Product Variant data changes.
     *	Must be updated using the [Recalculate](ctp:api:type:CartRecalculateAction) update action.
     *
     *
     */
    readonly variant: ProductVariant;
    /**
     *	Price of a Line Item selected from the Product Variant according to the [Product](ctp:api:type:Product) `priceMode`. If the `priceMode` is `Embedded` [ProductPriceMode](ctp:api:type:ProductPriceModeEnum) and the `variant` field hasn't been updated, the price may not correspond to a price in `variant.prices`.
     *
     *
     */
    readonly price: Price;
    /**
     *	Number of Line Items of the given Product Variant present in the Cart.
     *
     *
     */
    readonly quantity: number;
    /**
     *	Total price of this Line Item equalling `price` multiplied by `quantity`. If the Line Item is discounted, the total price is the `discountedPricePerQuantity` multiplied by `quantity`.
     *	Includes taxes if the [TaxRate](ctp:api:type:TaxRate) `includedInPrice` is `true`.
     *
     *
     */
    readonly totalPrice: CentPrecisionMoney;
    /**
     *	Discounted price of a single quantity of the Line Item.
     *
     *
     */
    readonly discountedPricePerQuantity: DiscountedLineItemPriceForQuantity[];
    /**
     *	Automatically set after `taxRate` is set.
     *
     *
     */
    readonly taxedPrice?: TaxedItemPrice;
    /**
     *	Taxed price of the Shipping Method that is automatically set after `perMethodTaxRate` is set.
     *
     */
    readonly taxedPricePortions: MethodTaxedPrice[];
    /**
     *	State of the Line Item in the Cart.
     *
     *
     */
    readonly state: ItemState[];
    /**
     *	- For a Cart with `Platform` [TaxMode](ctp:api:type:TaxMode), the `taxRate` of Line Items is set automatically once a shipping address is set. The rate is based on the [TaxCategory](ctp:api:type:TaxCategory) that applies for the shipping address.
     *	- For a Cart with `External` TaxMode, the `taxRate` of Line Items can be set using [ExternalTaxRateDraft](ctp:api:type:ExternalTaxRateDraft).
     *
     *
     */
    readonly taxRate?: TaxRate;
    /**
     *	Tax Rate per Shipping Method for a Cart with `Multiple` [ShippingMode](ctp:api:type:ShippingMode). For a Cart with `Platform` [TaxMode](ctp:api:type:TaxMode) it is automatically set after the [Shipping Method is added](ctp:api:type:CartAddShippingMethodAction).
     *	For a Cart with `External` [TaxMode](ctp:api:type:TaxMode), the Tax Rate must be set with [ExternalTaxRateDraft](ctp:api:type:ExternalTaxRateDraft).
     *
     */
    readonly perMethodTaxRate: MethodTaxRate[];
    /**
     *	Identifies [Inventory entries](/../api/projects/inventory) that are reserved. The referenced Channel has the `InventorySupply` [ChannelRoleEnum](ctp:api:type:ChannelRoleEnum).
     *
     *
     */
    readonly supplyChannel?: ChannelReference;
    /**
     *	Used to [select](ctp:api:type:LineItemPriceSelection) a Product Price. The referenced Channel has the `ProductDistribution` [ChannelRoleEnum](ctp:api:type:ChannelRoleEnum).
     *
     *
     */
    readonly distributionChannel?: ChannelReference;
    /**
     *	Indicates how the Price for the Line Item is set.
     *
     *
     */
    readonly priceMode: LineItemPriceMode;
    /**
     *	Indicates how the Line Item is added to the Cart.
     *
     *
     */
    readonly lineItemMode: LineItemMode;
    /**
     *	Inventory mode specific to this Line Item only, and valid for the entire `quantity` of the Line Item.
     *	Only present if the inventory mode is different from the `inventoryMode` specified on the [Cart](ctp:api:type:Cart).
     *
     *
     */
    readonly inventoryMode?: InventoryMode;
    /**
     *	Container for Line Item-specific addresses.
     *
     *
     */
    readonly shippingDetails?: ItemShippingDetails;
    /**
     *	Custom Fields of the Line Item.
     *
     *
     */
    readonly custom?: CustomFields;
    /**
     *	Date and time (UTC) the Line Item was added to the Cart.
     *
     *
     */
    readonly addedAt?: string;
    /**
     *	Date and time (UTC) the Line Item was last updated.
     *
     *
     */
    readonly lastModifiedAt?: string;
}
