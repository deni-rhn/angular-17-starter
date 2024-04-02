import { IPageable } from "./ipageable"

export interface IProduct extends IPageable {
  course: ICourse[]
}

export interface ICourse {
  courseId: number
  courseName: string
  basicPrice: number
  discount: any
  discountType: any
  finalPrice: number
  priceCrossedOut: number
  promoText: any
  price: IPrice
  nextAction: INextAction
  label: any
  categoriesId: number
  categoriesName: string
  reviews: any
  isSupportPrakerja: boolean
  icon: Icon
  partner: IPartner
  isBnspSupport: boolean
  courseType: string
  pinPoint: IPinPoint
  iosPrice: any
  tags: any[]
  thumbnails: IThumbnail[]
}

export interface IPrice {
  old: string
  new: string
}

export interface INextAction {
  deeplink: string
}

export interface Icon {
  large: string
  small: string
  thumbnail: string
  square: string
}

export interface IPartner {
  partnerId: number
  partnerName: string
  partnerLogo: IPartnerLogo
  partnerAddress: any
  partnerCode: any
  partnerDescription: string
  orderNumber: number
  flagActive: string
  courseCategories: any
  paymentLink: string
  partnerType: string
  isLivePaymentReport: boolean
  contactLink: IContactLink
  isB2b: string
  adminPartnerMultilangList: any[]
}

export interface IPartnerLogo {
  large: string
  small: string
  thumbnail: string
  square: string
}

export interface IContactLink {
  email: string
  facebook: string
  instagram: string
  twitter: string
  whatsapp: string
}

export interface IPinPoint {
  offlineLocationName: any
  offlineLatitude: any
  offlineLongitude: any
  offlineAddress: any
  masterLocationId: any
}

export interface IThumbnail {
  type: string
  url: string
}
