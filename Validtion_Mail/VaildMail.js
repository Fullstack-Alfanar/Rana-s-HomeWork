function Vaild_email(mail) {
    let test = {                       //-- אובייקט  משתנים "מערכים" מכילים התוויות האפשריות לדוא"ל
   smallalpha: ["a", "b", "c", "d", "e", "f", "g", "h", "i", " g", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", " u", "v", "w", "x", "y", "z"],

   capitalalpha: ["A", " B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],

   number: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    
   charact: ["!", "#", "$", "%", "&", "'", "*", "+", "-", "/", "=", "?", "^", "_", "`", "{", "|", "}", "~"],

   Specialcharact: ["#", "*", "+", "&", "'", "!", "%", "?", "{", "^", "}", "”", "$", "-", "/", "=", "_", "~", "|", "`", "'", "."]}
   var  localpart = 0; domainpart = 0; globalpart = 0;
   
for (let i = 0; mail[i] != "@"; i++)
   localpart += 1;                                          //-- מחזיר לנו את אורך החלק המקומי
for (var t = 0; t < mail.length; t++) 
   globalpart += 1;                                                     //-- אורך תוויות הדו"ל

   domainpart = (globalpart - localpart+1);//-- מחזיר לנו אורך החלק                       DOMAIN

   while (localpart <= 64) { // --הגודל המקסימלי לחלק המקומי הוא עד 64 תוויות
                for (var j = 0; j <= localpart; j++)  //-- לולאה עוברת על החלק המקומי ומשווה אותו עם האובייטים המותרים
                    for (let k in  test)
                        if (mail[j] = test[k]) {
                           if (mail[j] = ".") {//-- הנקודה אסור להיות התווית הראשונה ואחרונה בחלק המקומי וגם אסור להיות שתי נקודות ברצף
                       j != 0 || j != localpart || mail[j + 1] != ".";
      
                        }
                       }
                   }
                  
   function ChekDomin(mail) { //-- פונקציה שבודקת חלק ה- DOMAIN
       var lendomin=domainpart;
   
   while (domailpart <= 255) { //-- האורך המקסימלי הוא 255 תוויות
       for (var a = lendomin; mail[a] != "."; a++){
           for (let k in test)
       if (mail[a] = test[k]) {
           var len=0;
           len+=1;
       }
       
       }

       lendomin=domailpart+a;//-- קורא לפונקציה הקודמת עוד פעם אם לא סיימנו אורך המערך של הדוא"ל
       if (lendomin<globalpart){
           ChekDomin();3
           
           return true;
   }
   return false;
}
   }

   }
   
   
                   Email = prompt("Enter Your Email");
                   Vaild_email(Email);
