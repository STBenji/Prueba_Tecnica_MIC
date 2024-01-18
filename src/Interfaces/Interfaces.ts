export interface IProduct {
  data: {
    product: {
      title: string
      brand: string
      referenceID: string
      priceNow: number
      priceBefore: number
      sizes: {
        size: string
        availableUnit: number
      }[]
      description: string
      specifications: {
        country: string
        sic: string
        specification: string
        color: string
      }
      composition: string
      care: string
      explore: string
      images: []
    }
    products: {
      interest: []
      forYou: []
    }
  }
}

export interface IDataProduct {
  dataProduct: {
    product: {
      title: string
      brand: string
      referenceID: string
      priceNow: number
      priceBefore: number
      sizes: Array<{ size: string; availableUnit: number }>
      description: string
      specifications: {
        country: string
        sic: string
        specification: string
        color: string
      }
      composition: string
      care: string
      explore: string
    }
  }
}

export interface IDataAcordeon {
  data: {
    product: {
      specifications: {
        country: string
        sic: string
        specification: string
        color: string
      }
      description: string
      composition: string
      care: string
      explore: string
    }
  }
}

export interface IImage {
  idImage: number
  urlImage: string
}

export interface IImageArray {
  imageArray: IImage[]
}

export interface IMenu {
  onClose: () => void
  className?: string
}

export interface Size {
  size: string
}

export interface Item {
  id: number
  brand: string
  title: string
  priceBefore: number
  priceNow: number
  sizes: Size[]
  images: []
}

export interface CardProductProps {
  data: Item[]
}
