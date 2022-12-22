var myObj = new Vue({
    el:'#app',
    data:{
        itemList:[
            {
              name:'優質短袖白T',
              imgUrl:'https://images.unsplash.com/photo-1534961880437-ce5ae2033053?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
              price:'500',
              amonut:'100'
            },
            {
              name:'骷髏手短黑T',
              imgUrl:'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
              price:'790',
              amonut:'54'
            },
            {
              name:'超時尚牛仔褲',
              imgUrl:'https://images.unsplash.com/photo-1529391409740-59f2cea08bc6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1124&q=80',
              price:'1200',
              amonut:'164'
            },
            {
              name:'質感褐色系大衣服',
              imgUrl:'https://images.unsplash.com/photo-1491998664548-0063bef7856c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
              price:'2300',
              amonut:'64'
            }
        ]
    },
    methods:{
        // 加
        handlePlus: function(item){
            console.log(item);
            item.count++;
        },
        // 減
        handleSub: function(item){
            console.log(item);
            if(item.count>1){
                item.count--;
            }
        },
        // 刪除
        handleDelete:function(index){
            this.itemList.splice(index,1);
        }
    },
    computed:{

    }
})

//Page slide
$("#home").click(function(){
  $(".page-frame").css("left","0");
});
$("#cart").click(function(){
  $(".page-frame").css("left","0");
});
// $("#follow").click(function(){
//   $(".page-frame").css("left","0");
// });

