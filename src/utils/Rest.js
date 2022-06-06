import Config from 'react-native-config'

class Rest {
    constructor() {
        this.API_URL = Config.API_URL
        this.ReqData = {}
    }

    withQuery(url, params) {
        let query = Object.keys(params)
            .filter(k => !!params[k])
            .map(k => `${encodeURIComponent(k)}=${encodeURIComponent(params[k])}`)
            .join('&')
        url += (url.indexOf('?') === -1 ? '?' : '&') + query
        return url
    }

    async send(path, method, body, params, file, extraHeaders) {
        const headers = {}
        headers['Accept'] = 'application/json'
        headers['Content-Type'] = 'application/json'
        headers['Access-Control-Allow-Origin'] = '*'
        if (UserStore.getHSToken) {
            headers['HsToken'] = UserStore.getHSToken
        }
        if (extraHeaders) {
            Object.keys(extraHeaders).map(k => headers[k] = extraHeaders[k])
        }
        let url = `${this.API_URL}${path ? path : ''}`
        if (params) {
            url = this.withQuery(url, params)
        }
        try {
            let response = await fetch(this.ReqData.url, this.ReqData.init)

            if (response.status == 401) {
                try {
                    throw response
                } catch (e) {
                    console.log("401 Rest -> send -> error", e)
                    throw e
                }
            }
            if (response.status == 400) {
                return Promise.reject(await response.json())
            }
            if (response.status == 403) {
                return Promise.reject(await response.json())
            }
            if (response.status == 404) {
                try {
                    let res = await response.json()
                    return Promise.reject({ code: 404, error_message: res.error_message, url: response.url })
                } catch (e) {
                    return Promise.reject({ code: 404, error_message: i18n.t('ec_500'), url: response.url })
                }
            }
            if (response.status == 500) {
                return Promise.reject(await response.json())
            }
            if (response.status == 502) {
                return Promise.reject(response)
            }
            if (response.status == 503) {
                return Promise.reject(await response.json())
            }
            if (response.status == 520) {
                return Promise.reject(await response.json())
            }

            let responseJson = response.headers.map['content-type'].includes('application/json') ? await response.json() : response.statusText
            let token = response.headers.map.hstoken
            if (token) {
                // UserStore.setHSToken(token)
            }
            return responseJson
        } catch (error) {
            throw error
        }
    }
}

const rest = new Rest()


export default rest
