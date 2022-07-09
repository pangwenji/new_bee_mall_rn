declare namespace CATEGORY {
  type thirdLevelCategoryVOSType = {
    categoryId: number;
    categoryLevel: number;
    categoryName: String;
  };
  type secondLevelCategoryVOSType = {
    categoryId: number;
    categoryLevel: number;
    categoryName: String;
    parentId: number;
    thirdLevelCategoryVOS: Array<thirdLevelCategoryVOSType>;
  };
  type categoryListType = {
    categoryId: number;
    categoryLevel: number;
    categoryName: String;
    secondLevelCategoryVOS: Array<secondLevelCategoryVOSType>;
  };
  interface CategoryDataType {
    categoryList: Array<categoryListType>;
    categoryRight: Array<secondLevelCategoryVOSType>;
  }
}
