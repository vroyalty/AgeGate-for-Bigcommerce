//2013 © Rotesource, Inc. http://rotesource.com/bigcommerce-agegate (Goke Pelemo - http://goke.me)
 function ageCheck() { 
//Minimum age allowed
     var min_age = 18;
//Minimum age allowed - END
     var year = parseInt(document.getElementById('byear').value);
     var month = parseInt(document.getElementById('bmonth').value);
     var day = parseInt(document.getElementById('bday').value);
     var theirDate = new Date((year + min_age), month, day);
     var today = new Date;
     
     if ((today.getTime() - theirDate.getTime()) < 0) {
//Page underage visitors will be redirected to
        window.location = 'https://www.google.com/search?q=baby+kittens&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjJtpTZoYrNAhVDK1IKHRiNBA4Q_AUIBygB&biw=1034&bih=472';
//Page underage visitors will be redirected to - END
     } else {
         var days = 4; //Number of days before age validation expires on the computer used
         var date = new Date();
    	 date.setTime(date.getTime()+(days*24*60*60*1000));
		 var expires = "; expires="+date.toGMTString();
         document.cookie = 'Bouncer=true;'+expires+"; path=/";
         location.reload();
     };
};
