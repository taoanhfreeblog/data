window.addEventListener('load',function(){
  var q=$('.question'),
  w=["Bạn là thần đồng","Bạn rất xuất sắc","Bạn làm khá tốt","Bạn có thể làm tốt hơn thế"]
  $(q).each(function(n){
    var ul=$(q[n]).find('ul'),mes=$(q[n]).parent().find('.message')
    console.log(mes)
    $(ul).each(function(i,v){
      var li=$(ul[i]).find('li'),p=$(ul[i]).next('p'),cor=$(ul[i]).find('li.codetienich_blogspot_com')
      $(li).one('click',function(){
        $(this).parent().addClass('answered')
        $(this).addClass('selected')
        $(p).appendTo($(cor)).addClass('explaination')
        if(i==ul.length-1){
          var corr=$(ul).find('li.codetienich_blogspot_com.selected').length,
          s=corr*100/ul.length-1
          v='<span class="codetienich_blogspot_com">'+corr+'</span><span class="total">'+ul.length+'</span>',
          $(v).insertAfter($(mes))
          w.forEach(function(){
            if(s==100)$(mes).html(w[0])
            else if(s>=80)$(mes).html(w[1])
            else if(s>=50)$(mes).html(w[2])
            else $(mes).html(w[3])
          })
        }
      })
    })
  })
})