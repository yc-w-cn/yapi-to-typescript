/* eslint-disable */
// @ts-ignore
import {
  AxiosPromise as RequestPromise,
  AxiosRequestConfig as RequestConfig,
} from "axios";
import * as defs from "src/utils/http";
interface IResponseWrapper<T> {
  code: string;
  message: string;
  data: T;
}

const MockUrl = "https://yapi.wosai-inc.com//mock/3883";
//#region interface:20918
/**
 * 根据品牌id查询品牌详细信息
 */
export function postRpcBrandgetBrandDetailInfoByBrandId(
  body: BrandBusinessService.Request.IPostRpcBrandgetBrandDetailInfoByBrandIdRequest,
  configs?: RequestConfig,
  isMock?: boolean,
): RequestPromise<
  IResponseWrapper<BrandBusinessService.Response.IPostRpcBrandgetBrandDetailInfoByBrandIdResponse>
> {
  return defs.brandBusinessSservice.post(
    `${isMock && MockUrl ? MockUrl : ""}/rpc/brand#getBrandDetailInfoByBrandId`,
    body,
    {
      ...configs,
    },
  );
}
/**
 * 根据商户id查询品牌信息
 */
export function postRpcBrandgetBrandInfoListByMerchantId(
  body: BrandBusinessService.Request.IPostRpcBrandgetBrandInfoListByMerchantIdRequest,
  configs?: RequestConfig,
  isMock?: boolean,
): RequestPromise<
  IResponseWrapper<BrandBusinessService.Response.IPostRpcBrandgetBrandInfoListByMerchantIdResponse>
> {
  return defs.brandBusinessSservice.post(
    `${
      isMock && MockUrl ? MockUrl : ""
    }/rpc/brand#getBrandInfoListByMerchantId`,
    body,
    {
      ...configs,
    },
  );
}
/**
 * 分页查询品牌简易信息
 */
export function postRpcBrandpageBrandInfoList(
  body: BrandBusinessService.Request.IPostRpcBrandpageBrandInfoListRequest,
  configs?: RequestConfig,
  isMock?: boolean,
): RequestPromise<
  IResponseWrapper<BrandBusinessService.Response.IPostRpcBrandpageBrandInfoListResponse>
> {
  return defs.brandBusinessSservice.post(
    `${isMock && MockUrl ? MockUrl : ""}/rpc/brand#pageBrandInfoList`,
    body,
    {
      ...configs,
    },
  );
}
/**
 * 批量添加品牌下商户
 */
export function postRpcBrandbatchCreateBrandMerchant(
  body: BrandBusinessService.Request.IPostRpcBrandbatchCreateBrandMerchantRequest,
  configs?: RequestConfig,
  isMock?: boolean,
): RequestPromise<
  IResponseWrapper<BrandBusinessService.Response.IPostRpcBrandbatchCreateBrandMerchantResponse>
> {
  return defs.brandBusinessSservice.post(
    `${isMock && MockUrl ? MockUrl : ""}/rpc/brand#batchCreateBrandMerchant`,
    body,
    {
      ...configs,
    },
  );
}
/**
 * 添加品牌下商户
 */
export function postRpcBrandcreateBrandMerchant(
  body: BrandBusinessService.Request.IPostRpcBrandcreateBrandMerchantRequest,
  configs?: RequestConfig,
  isMock?: boolean,
): RequestPromise<
  IResponseWrapper<BrandBusinessService.Response.IPostRpcBrandcreateBrandMerchantResponse>
> {
  return defs.brandBusinessSservice.post(
    `${isMock && MockUrl ? MockUrl : ""}/rpc/brand#createBrandMerchant`,
    body,
    {
      ...configs,
    },
  );
}
/**
 * 删除品牌下商户
 */
export function postRpcBranddeleteBrandMerchant(
  body: BrandBusinessService.Request.IPostRpcBranddeleteBrandMerchantRequest,
  configs?: RequestConfig,
  isMock?: boolean,
): RequestPromise<
  IResponseWrapper<BrandBusinessService.Response.IPostRpcBranddeleteBrandMerchantResponse>
> {
  return defs.brandBusinessSservice.post(
    `${isMock && MockUrl ? MockUrl : ""}/rpc/brand#deleteBrandMerchant`,
    body,
    {
      ...configs,
    },
  );
}
/**
 * 分页查询品牌下商户
 */
export function postRpcBrandpageQueryBrandMerchants(
  body: BrandBusinessService.Request.IPostRpcBrandpageQueryBrandMerchantsRequest,
  configs?: RequestConfig,
  isMock?: boolean,
): RequestPromise<
  IResponseWrapper<BrandBusinessService.Response.IPostRpcBrandpageQueryBrandMerchantsResponse>
> {
  return defs.brandBusinessSservice.post(
    `${isMock && MockUrl ? MockUrl : ""}/rpc/brand#pageQueryBrandMerchants`,
    body,
    {
      ...configs,
    },
  );
}
/**
 * 编辑品牌信息
 */
export function postRpcBrandmodifyBrand(
  body: BrandBusinessService.Request.IPostRpcBrandmodifyBrandRequest,
  configs?: RequestConfig,
  isMock?: boolean,
): RequestPromise<
  IResponseWrapper<BrandBusinessService.Response.IPostRpcBrandmodifyBrandResponse>
> {
  return defs.brandBusinessSservice.post(
    `${isMock && MockUrl ? MockUrl : ""}/rpc/brand#modifyBrand`,
    body,
    {
      ...configs,
    },
  );
}
/**
 * 根据商户编号或者门店id查询商户信息
 */
export function postRpcBrandgetBrandMerchantInfoByStoreIdOrMerchantSn(
  body: BrandBusinessService.Request.IPostRpcBrandgetBrandMerchantInfoByStoreIdOrMerchantSnRequest,
  configs?: RequestConfig,
  isMock?: boolean,
): RequestPromise<
  IResponseWrapper<BrandBusinessService.Response.IPostRpcBrandgetBrandMerchantInfoByStoreIdOrMerchantSnResponse>
> {
  return defs.brandBusinessSservice.post(
    `${
      isMock && MockUrl ? MockUrl : ""
    }/rpc/brand#getBrandMerchantInfoByStoreIdOrMerchantSn`,
    body,
    {
      ...configs,
    },
  );
}
//#endregion interface:20918

//#region interface:20974
/**
 * 添加银行卡
 */
export function postRpcBankAccount(
  body: BrandBusinessService.Request.IPostRpcBankAccountRequest,
  configs?: RequestConfig,
  isMock?: boolean,
): RequestPromise<
  IResponseWrapper<BrandBusinessService.Response.IPostRpcBankAccountResponse>
> {
  return defs.brandBusinessSservice.post(
    `${isMock && MockUrl ? MockUrl : ""}/rpc/bank/account`,
    body,
    {
      ...configs,
    },
  );
}
//#endregion interface:20974
