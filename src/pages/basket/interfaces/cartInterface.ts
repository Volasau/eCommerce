import {
    Address,
    BaseResource,
    BusinessUnitKeyReference,
    CartDiscountReference,
    CartOrigin,
    CartState,
    CentPrecisionMoney,
    ClientLogging,
    CustomFields,
    CustomLineItem,
    CustomerGroupReference,
    CustomerReference,
    DirectDiscount,
    DiscountCodeInfo,
    InventoryMode,
    PaymentInfo,
    RoundingMode,
    Shipping,
    ShippingInfo,
    ShippingMode,
    ShippingRateInput,
    StoreKeyReference,
    TaxCalculationMode,
    TaxMode,
    TaxedPrice,
} from '@commercetools/platform-sdk';
import { LineItem } from './lineItemInterface';

export interface LastModifiedBy extends ClientLogging {
    /**
     *	`id` of the [APIClient](ctp:api:type:ApiClient) which modified the resource.
     *
     *
     */
    readonly clientId?: string;
    /**
     *	[External user ID](/../api/client-logging#external-user-ids) provided by `X-External-User-ID` HTTP Header.
     *
     *
     */
    readonly isPlatformClient: boolean;
    readonly externalUserId?: string;
    /**
     *	Indicates the [Customer](ctp:api:type:Customer) who modified the resource using a token from the [password flow](/authorization#password-flow).
     *
     *
     */
    readonly customer?: CustomerReference;
    /**
     *	Indicates the [anonymous session](ctp:api:type:AnonymousSession) during which the resource was modified.
     *
     *
     */
    readonly anonymousId?: string;
}

export interface Cart extends BaseResource {
    /**
     *	Unique identifier of the Cart.
     *
     *
     */
    readonly type: string;
    readonly id: string;
    /**
     *	Current version of the Cart.
     *
     *
     */
    readonly version: number;
    readonly versionModifiedAt: string;
    readonly lastMessageSequenceNumber: number;
    /**
     *	User-defined unique identifier of the Cart.
     *
     *
     */
    readonly key?: string;
    /**
     *	`id` of the [Customer](ctp:api:type:Customer) that the Cart belongs to.
     *
     *
     */
    readonly customerId?: string;
    /**
     *	Email address of the Customer that the Cart belongs to.
     *
     *
     */
    readonly customerEmail?: string;
    /**
     *	[Reference](ctp:api:type:Reference) to the Customer Group of the Customer that the Cart belongs to. Used for [LineItem Price selection](ctp:api:type:LineItemPriceSelection).
     *
     *
     */
    readonly customerGroup?: CustomerGroupReference;
    /**
     *	[Anonymous session](ctp:api:type:AnonymousSession) associated with the Cart.
     *
     *
     */
    readonly anonymousId?: string;
    /**
     *	[Reference](ctp:api:type:Reference) to a Business Unit the Cart belongs to.
     *
     *
     */
    readonly businessUnit?: BusinessUnitKeyReference;
    /**
     *	[Reference](ctp:api:type:Reference) to a Store the Cart belongs to.
     *
     *
     */
    readonly store?: StoreKeyReference;
    /**
     *	[Line Items](ctp:api:type:LineItems) added to the Cart.
     *
     *
     */
    readonly lineItems: LineItem[];
    /**
     *	[Custom Line Items](ctp:api:type:CustomLineItems) added to the Cart.
     *
     *
     */
    readonly customLineItems: CustomLineItem[];
    /**
     *	Sum of all [LineItem](ctp:api:type:LineItem) quantities, excluding [CustomLineItems](ctp:api:type:CustomLineItem). Only present when the Cart has at least one LineItem.
     *
     *
     */
    readonly totalLineItemQuantity?: number;
    /**
     *	Sum of the `totalPrice` field of all [LineItems](ctp:api:type:LineItem) and [CustomLineItems](ctp:api:type:CustomLineItem), and if available, the `price` field of [ShippingInfo](ctp:api:type:ShippingInfo).
     *
     *	Taxes are included if [TaxRate](ctp:api:type:TaxRate) `includedInPrice` is `true` for each price.
     *
     *
     */
    readonly totalPrice: CentPrecisionMoney;
    /**
     *	- For a Cart with `Platform` [TaxMode](ctp:api:type:TaxMode), it is automatically set when a [shipping address is set](ctp:api:type:CartSetShippingAddressAction).
     *	- For a Cart with `External` [TaxMode](ctp:api:type:TaxMode), it is automatically set when the external Tax Rate for all Line Items, Custom Line Items, and Shipping Methods in the Cart are set.
     *
     *
     */
    readonly taxedPrice?: TaxedPrice;
    /**
     *	Sum of the `taxedPrice` field of [ShippingInfo](ctp:api:type:ShippingInfo) across all Shipping Methods.
     *
     */
    readonly taxedShippingPrice?: TaxedPrice;
    /**
     *	Indicates how Tax Rates are set.
     *
     *
     */
    readonly taxMode: TaxMode;
    /**
     *	Indicates how monetary values are rounded when calculating taxes for `taxedPrice`.
     *
     *
     */
    readonly taxRoundingMode: RoundingMode;
    /**
     *	Indicates how taxes are calculated when calculating taxes for `taxedPrice`.
     *
     *
     */
    readonly taxCalculationMode: TaxCalculationMode;
    /**
     *	Indicates how stock quantities are tracked for Line Items in the Cart.
     *
     *
     */
    readonly inventoryMode: InventoryMode;
    /**
     *	Current status of the Cart.
     *
     *
     */
    readonly cartState: CartState;
    /**
     *	Billing address associated with the Cart.
     *
     *
     */
    readonly billingAddress?: Address;
    /**
     *	Shipping address associated with the Cart. Determines eligible [ShippingMethod](ctp:api:type:ShippingMethod) rates and Tax Rates of Line Items.
     *
     *
     */
    readonly shippingAddress?: Address;
    /**
     *	Indicates whether the Cart has one or multiple Shipping Methods.
     *
     */
    readonly shippingMode: ShippingMode;
    /**
     *	User-defined unique identifier of the Shipping Method in a Cart with `Single` [ShippingMode](ctp:api:type:ShippingMode).
     *
     *
     */
    readonly shippingKey?: string;
    /**
     *	Shipping-related information of a Cart with `Single` [ShippingMode](ctp:api:type:ShippingMode). Automatically set when a [Shipping Method is set](ctp:api:type:CartSetShippingMethodAction).
     *
     *
     */
    readonly shippingInfo?: ShippingInfo;
    /**
     *	Input used to select a [ShippingRatePriceTier](ctp:api:type:ShippingRatePriceTier).
     *	The data type of this field depends on the `shippingRateInputType.type` configured in the [Project](ctp:api:type:Project):
     *
     *	- If `CartClassification`, it is [ClassificationShippingRateInput](ctp:api:type:ClassificationShippingRateInput).
     *	- If `CartScore`, it is [ScoreShippingRateInput](ctp:api:type:ScoreShippingRateInput).
     *	- If `CartValue`, it cannot be used.
     *
     *
     */
    readonly shippingRateInput?: ShippingRateInput;
    /**
     *	Custom Fields of the Shipping Method in a Cart with `Single` [ShippingMode](ctp:api:type:ShippingMode).
     *
     *
     */
    readonly shippingCustomFields?: CustomFields;
    /**
     *	Shipping-related information of a Cart with `Multiple` [ShippingMode](ctp:api:type:ShippingMode). Updated automatically each time a new [Shipping Method is added](ctp:api:type:CartAddShippingMethodAction).
     *
     */
    readonly shipping: Shipping[];
    /**
     *	Additional shipping addresses of the Cart as specified by [LineItems](ctp:api:type:LineItem) using the `shippingDetails` field.
     *
     *	Eligible Shipping Methods or applicable Tax Rates are determined by the address in `shippingAddress`, and not `itemShippingAddresses`.
     *
     *
     */
    readonly itemShippingAddresses: Address[];
    /**
     *	Discount Codes applied to the Cart. A Cart that has `directDiscounts` cannot have `discountCodes`.
     *
     *
     */
    readonly discountCodes: DiscountCodeInfo[];
    /**
     *	Direct Discounts added to the Cart. A Cart that has `discountCodes` cannot have `directDiscounts`.
     *
     *
     */
    readonly directDiscounts: DirectDiscount[];
    /**
     *	Automatically set when a Line Item with `GiftLineItem` [LineItemMode](ctp:api:type:LineItemMode) is [removed](ctp:api:type:CartRemoveLineItemAction) from the Cart.
     *
     *
     */
    readonly refusedGifts: CartDiscountReference[];
    /**
     *	Payment information related to the Cart.
     *
     *
     */
    readonly paymentInfo?: PaymentInfo;
    /**
     *	Used for [LineItem Price selection](ctp:api:type:LineItemPriceSelection).
     *
     *
     */
    readonly country?: string;
    /**
     *	Languages of the Cart. Can only contain languages supported by the [Project](ctp:api:type:Project).
     *
     *
     */
    readonly locale?: string;
    /**
     *	Indicates how the Cart was created.
     *
     *
     */
    readonly origin: CartOrigin;
    /**
     *	Custom Fields of the Cart.
     *
     *
     */
    readonly custom?: CustomFields;
    /**
     *	Number of days after which an active Cart is deleted since its last modification. Configured in [Project settings](ctp:api:type:CartsConfiguration).
     *
     *
     */
    readonly deleteDaysAfterLastModification?: number;
    /**
     *	Date and time (UTC) the Cart was initially created.
     *
     *
     */
    readonly createdAt: string;
    /**
     *	Date and time (UTC) the Cart was last updated.
     *
     *
     */
    readonly lastModifiedAt: string;
    /**
     *	Present on resources updated after 1 February 2019 except for [events not tracked](/../api/client-logging#events-tracked).
     *
     *
     */
    readonly lastModifiedBy?: LastModifiedBy;
    /**
     *	Present on resources created after 1 February 2019 except for [events not tracked](/../api/client-logging#events-tracked).
     *
     *
     */
    readonly createdBy?: LastModifiedBy;
}
