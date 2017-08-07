 // main document ready function to check if dom is loaded fully or not
  $( document ).ready(function() {

    $('.loader').hide();
    
    var myFacebookToken = 'EAACEdEose0cBAFZAB2PJeZAv6phl3SlZCunRPClZCNerNFPtEjBYaEHRdOs47V79ZCFzplz2ZARX5XnuESvkCdvvdLYX4dMjCocIoZBPPlwRScasKh4ZCttwOD6U24fJRSODraTzwdfAzguNw6tQ9JCaPO6yVttnZCTjZBDWk6RuZBC2jXZAZBz9ozKMSqvx2nxcIxEsZD';

    function getFacebookInfo(){

        $.ajax('https://graph.facebook.com/me?fields=id,name,education,about,feed,email,birthday&access_token='+myFacebookToken,{

                success : function(response){
                    console.log(response);
                    console.log(typeof(response));
                     $("#profilepic").append('<img src="http://graph.facebook.com/' + response.id + '/picture" />');
                    $("#name").text(response.name);
                    $("#profile").html('<a target="blank" href="https://facebook.com/'+response.id+'">https://facebook.com/'+response.id+'</a>');
                    $("#dob").text(response.birthday);
                    $("#school").html(response.education[0].school.name);
                    $("#college").text(response.education[2].school.name);
                    $("#university").text(response.education[1].school.name);
                    $("#email").text(response.email);
                   


                },
                 error : function(request,errorType,errorMessage){

                    console.log(request);
                    console.log(errorType);
                    alert(errorMessage);
                },

                timeout:1000, // in ms

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