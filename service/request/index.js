//封装成函数
export function hyRequest(options){
    return new Promise((resolve,reject)=>{
        wx.request({
            ...options,
            success: (result) => {
                resolve(result)
            },
            fail: (err)=>{
                reject
            },
            complete: (res) => {},
          })
    })
}

// exports.modules={
//     request:request
// }

//封装成类
class HYRequest{
    constructor(baseUrl){
        this.baseUrl=baseUrl
    }
    request(options){
        const {url}=options

        return new Promise((resolve,reject)=>{
            wx.request({
                ...options,
                url:this.baseUrl+url,
                success: (result) => {
                    resolve(result)
                },
                fail: (err)=>{
                    reject
                },
                complete: (res) => {},
              })
        })
    }
    get(options){
        return this.request({...options,method:"get"})
    }
    post(options){
        return this.request({...options,method:"post"})
    }
}

export const hyReqInstance=new HYRequest("http://123.207.32.32:1888/api")