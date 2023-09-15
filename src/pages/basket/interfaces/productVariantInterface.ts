import { Asset, Attribute, Image, Price, ScopedPrice } from '@commercetools/platform-sdk';

interface ProductVariantAvailability {
    isOnStock: boolean;
    availableQuantity: number;
    version: number;
    id: string;
}

export interface ProductVariant {
    /**
     *	A unique, sequential identifier of the Product Variant within the Product.
     *
     *
     */
    readonly id: number;
    /**
     *	User-defined unique SKU of the Product Variant.
     *
     *
     */
    readonly sku?: string;
    /**
     *	User-defined unique identifier of the ProductVariant.
     *
     *	This is different from [Product](ctp:api:type:Product) `key`.
     *
     *
     */
    readonly key?: string;
    /**
     *	The Embedded Prices of the Product Variant.
     *	Cannot contain two Prices of the same Price scope (with same currency, country, Customer Group, Channel, `validFrom` and `validUntil`).
     *
     *
     */
    readonly prices?: Price[];
    /**
     *	Attributes of the Product Variant.
     *
     *
     */
    readonly attributes?: Attribute[];
    /**
     *	Only available when [Price selection](#price-selection) is used.
     *	Cannot be used in a [Query Predicate](ctp:api:type:QueryPredicate).
     *
     *
     */
    readonly price?: Price;
    /**
     *	Images of the Product Variant.
     *
     *
     */
    readonly images?: Image[];
    /**
     *	Media assets of the Product Variant.
     *
     *
     */
    readonly assets?: Asset[];
    /**
     *	Set if the Product Variant is tracked by [Inventory](ctp:api:type:InventoryEntry).
     *	Can be used as an optimization to reduce calls to the Inventory service.
     *	May not contain the latest Inventory State (it is [eventually consistent](/general-concepts#eventual-consistency)).
     *
     *
     */
    readonly availability?: ProductVariantAvailability;
    /**
     *	`true` if the Product Variant matches the search query.
     *	Only available in response to a [Product Projection Search](ctp:api:type:ProductProjectionSearch) request.
     *
     *
     */
    readonly isMatchingVariant?: boolean;
    /**
     *	Only available in response to a [Product Projection Search](ctp:api:type:ProductProjectionSearch) request
     *	with [price selection](ctp:api:type:ProductPriceSelection).
     *	Can be used to sort, [filter](ctp:api:type:ProductProjectionSearchFilterScopedPrice), and facet.
     *
     *
     */
    readonly scopedPrice?: ScopedPrice;
    /**
     *	Only available in response to a [Product Projection Search](ctp:api:type:ProductProjectionSearchFilterScopedPrice) request
     *	with [price selection](ctp:api:type:ProductPriceSelection).
     *
     *
     */
    readonly scopedPriceDiscounted?: boolean;
}
