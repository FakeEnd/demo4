import axios from 'axios'

const userid = window.sessionStorage.getItem('auToken')

const service = axios.create({
    baseURL: 'http://106.15.192.117:8080/canteen'
})

//菜品排序（包括随机默认排序、时间排序、热度排序）
export const dishSort = (page, flag) => {
    return service.post(`dishSort?page=${page}&flag=${flag}`)
}

//关键字查找
export const dishSelectByKeyWord = (keyword) => {
    return service.post(`dishSelectByKeyWord?keyword=${keyword}`)
}

//显示菜品详细信息
export const dishShow = (dish_name) => {
    return service.post(`/dishShow?dish_name=${dish_name}`)
}

//显示评论
export const opinionDefaultSort = (dishId, page) => {
    return service.post(`opinionDefaultSort?dishId=${dishId}&page=${page}`)
}

//我要评论
export const opinionInsert = (dishId, msg) => {
    return service.post(`opinionInsert?dishId=${dishId}&msg=${msg}&userId=${userid}`)
        .then(response => {
            if (response.data.message === 'Success！！') {
                alert('提交成功')
            }
        })
        .finally(() => window.history.back())
}

//推荐菜品排序
export const jianSort = (flag, page) => {
    return service.post(`/jianSort?page=${page}&flag=${flag}`)
}

//点赞与差评
export const dishChangeNum = (flag, dishName) => {
    const userid = window.sessionStorage.getItem('auToken')
    return service.post(`/dishChangeNum?dishName=${dishName}&userId=${userid}&flag=${flag}`)
}

//我推荐的菜谱
export const jianOfUser= () => {
    const userid = window.sessionStorage.getItem('auToken')
    return service.post(`/jianOfUser?userId=${userid}`)
}

//给食堂打分
export const judgeCanteen = (newScore) => {
    const userid = window.sessionStorage.getItem('auToken')
    return service.post(`/judgeCanteen?newScore=${newScore}&userId=${userid}`)
}
