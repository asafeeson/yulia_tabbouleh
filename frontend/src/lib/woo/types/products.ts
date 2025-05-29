export interface ProductCategory {
	id: number;
	name: string;
	slug: string;
}

export interface ProductImage {
	id: number;
	date_created: string;
	date_created_gmt: string;
	date_modified: string;
	date_modified_gmt: string;
	src: string;
	name: string;
	alt: string;
}

export interface ProductAttribute {
	id: number;
	name: string;
	slug: string;
	position: number;
	visible: boolean;
	variation: boolean;
	options: string[];
}

export interface WooLinkTargetHints {
	allow: string[];
}

export interface WooLink {
	href: string;
	targetHints?: WooLinkTargetHints;
}

export interface WooLinks {
	self: WooLink[];
	collection: WooLink[];
}

export interface ProductDownloads {
	id: string;
	name: string;
	file: string;
}

export interface ProductDimensions {
	length: string;
	width: string;
	height: string;
}

export interface Tags {
    id: number;
    readonly name: string;
    readonly slug: string;
}

export interface ProductAttributesProperties {
	id: number;
	name: string;
	position: number;
	visible: boolean;
	variation: boolean;
	options: any[];
}

export interface ProductDefaultAtributesProperties {
	id: number;
	name: string;
	option: string;
}

export interface ProductMetaData {
	id: number;
	key: string;
	value: string;
}

export interface WooProduct {
	id: number;
	name: string;
	slug: string;
	permalink: string;
	date_created: string;
	date_created_gmt: string;
	date_modified: string;
	date_modified_gmt: string;
	type: string;
	status: string;
	featured: boolean;
	catalog_visibility: string;
	description: string;
	short_description: string;
	sku: string;
	price: string;
	regular_price: string;
	sale_price: string;
	date_on_sale_from: string | null;
	date_on_sale_from_gmt: string | null;
	date_on_sale_to: string | null;
	date_on_sale_to_gmt: string | null;
	on_sale: boolean;
	purchasable: boolean;
	total_sales: number;
	virtual: boolean;
	downloadable: boolean;
	downloads: ProductDownloads[];
	download_limit: number;
	download_expiry: number;
	external_url: string;
	button_text: string;
	tax_status: string;
	tax_class: string;
	manage_stock: boolean;
	stock_quantity: number | null;
	backorders: string;
	backorders_allowed: boolean;
	backordered: boolean;
	low_stock_amount: number | null;
	sold_individually: boolean;
	weight: string;
	dimensions: ProductDimensions;
	shipping_required: boolean;
	shipping_taxable: boolean;
	shipping_class: string;
	shipping_class_id: number;
	reviews_allowed: boolean;
	average_rating: string;
	rating_count: number;
	upsell_ids: number[];
	cross_sell_ids: number[];
	parent_id: number;
	purchase_note: string;
	categories: ProductCategory[];
	tags: Tags[];
	images: ProductImage[];
	attributes: ProductAttribute[];
	default_attributes: ProductDefaultAtributesProperties[];
	variations: number[];
	grouped_products: number[];
	menu_order: number;
	price_html: string;
	related_ids: number[];
	meta_data: ProductMetaData[];
	stock_status: string;
	has_options: boolean;
	post_password: string;
	global_unique_id: string;
	brands: any[];
	_links: WooLinks;
}
