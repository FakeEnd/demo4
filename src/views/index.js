import Loadable from 'react-loadable'

import { Loading } from '../components'

const Comment = Loadable({
     loader:()=>import('./Comment'),
     loading:Loading
})
const CommentStart = Loadable({
     loader:()=>import('./Comment/CommentStart'),
     loading:Loading
})
const CommentDone = Loadable({
     loader:()=>import('./Comment/CommentDone'),
     loading:Loading
})

const DashBoard = Loadable({
     loader:()=>import('./DashBoard'),
     loading:Loading
})
const Recommend = Loadable({
     loader:()=>import('./Recommend'),
     loading:Loading
})
const Settings = Loadable({
     loader:()=>import('./Settings'),
     loading:Loading
})
const Detail = Loadable({
     loader:()=>import('./DashBoard/Detail'),
     loading:Loading
})
const Login= Loadable({
     loader:()=>import('./Login'),
     loading:Loading
})
const NotFound= Loadable({
     loader:()=>import('./NotFound'),
     loading:Loading
})
const Search= Loadable({
     loader:()=>import('./DashBoard/Search'),
     loading:Loading
})
const SearchButton= Loadable({
     loader:()=>import('./DashBoard/SearchButton'),
     loading:Loading
})
const DetailComment= Loadable({
     loader:()=>import('./DashBoard/DetailComment'),
     loading:Loading
})
const Add= Loadable({
     loader:()=>import('./Recommend/Add'),
     loading:Loading
})


export { 
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
} 
