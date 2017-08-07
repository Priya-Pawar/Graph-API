 // main document ready function to check if dom is loaded fully or not
  $( document ).ready(function() {
    $('.loader').hide();
    

    var myFacebookToken = 'EAACEdEose0cBAFZAB2PJeZAv6phl3SlZCunRPClZCNerNFPtEjBYaEHRdOs47V79ZCFzplz2ZARX5XnuESvkCdvvdLYX4dMjCocIoZBPPlwRScasKh4ZCttwOD6U24fJRSODraTzwdfAzguNw6tQ9JCaPO6yVttnZCTjZBDWk6RuZBC2jXZAZBz9ozKMSqvx2nxcIxEsZD';

    function getFacebookInfo(){

        $.ajax('https://graph.facebook.com/me/feed?fields=admin_creator,created_time,permalink_url&limit=5&access_token='+myFacebookToken,{

                success : function(response){
                    console.log(response);
                    console.log(typeof(response));

                    var myFbFeed={
                          "data": [
                            {
                              "created_time": "2017-07-18T03:42:44+0000",
                              "permalink_url": "https://www.facebook.com/1187925997970365/posts/1336589583104005",
                              "id": "1069362789828228_1301317349966103"
                            },
                            {
                              "created_time": "2017-07-09T16:31:54+0000",
                              "permalink_url": "https://www.facebook.com/1069362789828228/posts/1293212244109947:0",
                              "id": "1069362789828228_1293212244109947"
                            },
                            {
                              "created_time": "2017-06-30T14:07:34+0000",
                              "permalink_url": "https://www.facebook.com/1069362789828228/posts/1284732098291295",
                              "id": "1069362789828228_1284732098291295"
                            },
                            {
                              "created_time": "2017-06-25T13:51:21+0000",
                              "permalink_url": "https://www.facebook.com/1587147321540810/posts/1903085473280325",
                              "id": "1069362789828228_1279471712150667"
                            },
                            {
                              "created_time": "2017-05-08T01:11:30+0000",
                              "permalink_url": "https://www.facebook.com/1069362789828228/posts/1236503103114195",
                              "id": "1069362789828228_1236503103114195"
                            }
                          ]
                    }

                   function showValue(i,val){

                    $("#feed1").html(' ID : '+val.id+"<br>"+'Created_time :  '+val.created_time+"<br>"+'<a href="'+val.permalink_url+'">Facebook Post Link</a>'+"<br>");
                    $("#feed2").html(' ID : '+val.id+"<br>"+'Created_time :  '+val.created_time+"<br>"+'<a href="'+val.permalink_url+'">Facebook Post Link</a>'+"<br>");
                    $("#feed3").html(' ID : '+val.id+"<br>"+'Created_time :  '+val.created_time+"<br>"+'<a href="'+val.permalink_url+'">Facebook Post Link</a>'+"<br>");
                    $("#feed4").html(' ID : '+val.id+"<br>"+'Created_time :  '+val.created_time+"<br>"+'<a href="'+val.permalink_url+'">Facebook Post Link</a>'+"<br>");
                    $("#feed5").html(' ID : '+val.id+"<br>"+'Created_time :  '+val.created_time+"<br>"+'<a href="'+val.permalink_url+'">Facebook Post Link</a>'+"<br>");
                  
                    }
                    jQuery.each(myFbFeed.data,showValue);
                   // end loop


                },

                error : function(request,errorType,errorMessage){

                    console.log(request);
                    console.log(errorType);
                    alert(errorMessage);
                },

                timeout:3000, // in ms

                beforeSend : function(){

                    $('.loader').show();

                },

                complete : function(){

                   $('.loader').hide();

                }


            }//end argument list 



        );// end ajax call 


    }// end get facebook info

    $("#facebookBtn").on('click',getFacebookInfo);



  });