import { 
    Comment,
    CommentDone,
    CommentStart,
    Recommend,
    Settings,
    DashBoard,
    Detail,
    Login,
    NotFound,
    Search,
    SearchButton,
    DetailComment,
    Add
}  from '../views'


export const  mainRouter = [{
    pathname : '/login',
    component : Login
},{
    pathname : '/404',
    component : NotFound
}]

export const  adminRouter = [{
    pathname : '/admin/dashBoard',
    component : DashBoard,
    exact:true,
    title:"发现美味",
    isNav:true,
    Tab:"blueTab",
    Type:"antdiconcanyincanju"
},{
    pathname : '/admin/recommend',
    component : Recommend,
    title:"推荐菜品",
    isNav:true,
    exact:true,
    Tab:"yellowTab",
    Type:"antdiconactivity"
},{
    pathname : '/admin/comment',
    component : Comment,
    title:"评论反馈",
    exact:true,
    isNav:true,
    Tab:"RedTab",
    Type:"antdiconi-message"
},{
    pathname : '/admin/setting',
    component : Settings,
    title:"我的",
    isNav:true,
    Tab:"GreenTab",
    Type:"antdiconwode"
},{
    pathname : '/admin/dashBoard/detail/:id/:dishId',
    component : Detail
},{
    pathname : '/admin/dashBoard/search/:id',
    component : Search
},{
    pathname : '/admin/dashBoard/searchButton/:id',
    component : SearchButton
},{
    pathname : '/admin/dashBoard/detailComment/:id',
    component : DetailComment
},{
    pathname : '/admin/recommend/add',
    component : Add
},{
    pathname : '/admin/comment/start',
    component : CommentStart
},{
    pathname : '/admin/comment/done',
    component : CommentDone
}]
