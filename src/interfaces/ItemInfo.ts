import { ImageUrl } from "./ImageUrl";
import { Variant } from "./Variant";

export interface ItemInfo {
    id: string,
    name: string,
    description: string,
    variants: [Variant],
    imageUrls: [ImageUrl],
  };