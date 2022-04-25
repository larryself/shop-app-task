export interface Rating {
  count: number
  rate: number
}

export interface Product {
  id: number
  category: string
  description: string
  image: string
  title: string
  price: number
  rating: Rating
  piece: number
}
