import { IApiInfoResponse } from '../typing/yapi'
import { http } from './http'

/**
 * @description 下划线转驼峰
 * @author Wynne
 * @date 2021-06-25
 * @export
 * @param name
 * @param [isBigHump=false] 是否大驼峰
 * @return {*}
 */
export function underlineToHump (name: string, isBigHump = false): string {
  let hump = name.replace(/[_|\-|\s](\w)/g, function (all, letter) {
    return letter.toUpperCase()
  })
  hump = (isBigHump ? hump.charAt(0).toLocaleUpperCase() : hump.charAt(0).toLocaleLowerCase()) + hump.substr(1)
  return hump
}

/**
 * @description 下划线转短横线
 * @author Yuchen Wang
 * @date 2023-11-22
 * @param inputString {string}
 * @return {string}
 */
function underlineToHyphen(inputString: string): string {
  // 将下划线替换为连字符，并将结果转换为小写
  return inputString.replace(/_/g, '-').toLowerCase();
}

/**
 * @description 中文转英文
 * @author Wynne
 * @date 2021-06-25
 * @export
 * @param text 翻译的文本
 * @return {*}
 */
export function zhCN2EN (text: string): Promise<string> {
  return new Promise((resolve) => {
    if (/[\u4e00-\u9fa5]/.test(text)) {
      const url = `http://fanyi.youdao.com/translate?&doctype=json&type=AUTO&i=${encodeURIComponent(
        text
      )}`
      http
        .get(url)
        .then((res) => {
          const text = res.data.translateResult[0][0].tgt.replace(/\s+/g, '')
          resolve(underlineToHump(text, true))
        })
        .catch(() => {
          throw new Error('有道翻译接口请求失败')
        })
    } else {
      resolve(underlineToHump(text, true))
    }
  })
}

/**
 * @description 接口path路径变为驼峰
 * @author Wynne
 * @date 2021-07-01
 * @export
 * @param api
 * @param [isBigHump=true]
 * @return {*}
 */
export function pathToHump (api: IApiInfoResponse, isBigHump = true): string {
  let name = api.path.replace(/[{|}#?]/g, '').replace(/\//g, '_')
  name = underlineToHump(name, isBigHump)
  return name
}

/**
 * @description 获取接口的Response名字
 * @author Wynne
 * @date 2021-07-01
 * @export
 * @param api
 * @return {*}
 */
export function getResponseName (api: IApiInfoResponse): string {
  const name = pathToHump(api)
  const method = api.method.slice(0, 1).toUpperCase() + api.method.slice(1).toLocaleLowerCase()
  return `I${method}${name}Response`
}

/**
 * @description 获取接口的Params名字
 * @author Wynne
 * @date 2021-07-01
 * @export
 * @param api
 * @return {*}
 */
export function getRequestName (api: IApiInfoResponse): string {
  const name = pathToHump(api)
  const method = api.method.slice(0, 1).toUpperCase() + api.method.slice(1).toLocaleLowerCase()
  return `I${method}${name}Request`
}

/**
 * @description 获取接口的Query名字
 * @author Wynne
 * @date 2021-07-01
 * @export
 * @param api
 * @return {*}
 */
export function getQueryName (api: IApiInfoResponse): string {
  const name = pathToHump(api)
  const method = api.method.slice(0, 1).toUpperCase() + api.method.slice(1).toLocaleLowerCase()
  return `I${method}${name}Query`
}

/**
 * @description 获取命名空间
 * @author Wynne
 * @date 2021-07-01
 * @export
 * @return {*}
 */
export function getNamespace (projectName: string): string {
  return underlineToHump(projectName, true)
}

/**
 * @description 获取接口Query声明文件地址
 * @author Wynne
 * @date 2021-07-01
 * @export
 * @return {*}
 */
export function getQueryPath (namespace: string, api: IApiInfoResponse): string {
  return `${namespace}.Request.${getQueryName(api)}`
}

/**
 * @description 获取Body声明文件路径
 * @author Wynne
 * @date 2021-07-01
 * @export
 * @param namespace
 * @param api
 * @return {*}
 */
export function getBodyPath (namespace: string, api: IApiInfoResponse): string {
  return `${namespace}.Request.${getRequestName(api)}`
}

/**
 * @description 获取Respones声明文件路径
 * @author Wynne
 * @date 2021-07-01
 * @export
 * @param namespace
 * @param api
 * @return {*}
 */
export function getResponesPath (namespace: string, api: IApiInfoResponse): string {
  return `${namespace}.Response.${getResponseName(api)}`
}

/**
 * @description 通过path生成接口名字
 * @author Wynne
 * @date 2021-07-01
 * @export
 * @param api
 * @return {*}
 */
export function getInterfaceName (api: IApiInfoResponse): string {
  const name = pathToHump(api)
  return `${api.method.toLocaleLowerCase()}${name}`
}
