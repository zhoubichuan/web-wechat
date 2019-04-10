function ajax({url=new Error('url without'),type='get',data='xxx'}){
    console.log(url,type,data)
}
ajax({
    url:'/test',
    type:'get',
    data:{}
})