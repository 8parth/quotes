$(document).ready(function() {
  $.ajax({
        url: 'https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous',
        type: 'post',
        data: {
            
        },
        headers: {
            'X-Mashape-Key': 'Se2VeL2UGzmshkBimsVtTuQEB0wfp1NTWhrjsn6XfbFuRnDrhJ',
            'Content-Type' : 'application/x-www-form-urlencoded',
            'Accept' : 'application/json'
        },
        dataType: 'json',
        success: function (data) {
            var temp = data;
            $(".quote").html(temp['quote']);
            $(".author").html(temp['author']);
            $('.tb').prop('href', "https://twitter.com/intent/tweet?text=" + temp['quote'] +" - " +temp['author']);
        }
    });
  
  $(".get_quote").on("click", function(){
    console.log("json");
      // $.getJSON("http://quotes.rest/quote.json", function(json){
      //   console.log("on");
      //   $(".quote").html(json);
      // });
    $.ajax({
        url: 'https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous',
        type: 'post',
        data: {
            
        },
        headers: {
            'X-Mashape-Key': 'Se2VeL2UGzmshkBimsVtTuQEB0wfp1NTWhrjsn6XfbFuRnDrhJ',
            'Content-Type' : 'application/x-www-form-urlencoded',
            'Accept' : 'application/json'
        },
        dataType: 'json',
        success: function (data) {
            var temp = data;
            $(".quote").html(temp['quote']);
            $(".author").html(temp['author']);
            $('.tb').prop('href', "https://twitter.com/intent/tweet?text=" + temp['quote'] +" - " +temp['author']);
        }
    });
  });
});