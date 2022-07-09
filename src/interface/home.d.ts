declare namespace HOME {
  type carouSelsType = {
    carouselUrl: string;
    redirectUrl: string;
  };
  type hotGoodsesType = {
    goodsCoverImg: string;
    goodsId: number;
    goodsIntro: string;
    goodsName: string;
    sellingPrice: number;
    tag: string;
  };
  type newGoodsesType = {
    goodsCoverImg: string;
    goodsId: number;
    goodsIntro: string;
    goodsName: string;
    sellingPrice: number;
    tag: string;
  };
  type recommendGoodsesType = {
    goodsCoverImg: string;
    goodsId: number;
    goodsIntro: string;
    goodsName: string;
    sellingPrice: number;
    tag: string;
  };
  interface RootStackTypeParamsList {
    home: string;
  }
  interface ICarousel {
    id: string;
    imageUrl: string;
    colors: [string, string];
  }
  interface TotalDataType {
    carousels: Array<carouSelsType>;
    hotGoodses: Array<hotGoodsesType>;
    newGoodses: Array<newGoodsesType>;
    recommendGoodsesResult: Array<recommendGoodsesType>;
  }
}
