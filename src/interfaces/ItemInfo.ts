export interface ItemInfo {
    id: string,
    name: string,
    description: string,
    variants: [
      id: string,
      name: string,
      description: string,
      price: number,
    ],
    imageUrls: [
      {
        url: string,
      },
    ],
  };