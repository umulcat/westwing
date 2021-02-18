//const { default: saveRecordingScreen } = require("webdriverio/build/commands/browser/saveRecordingScreen");
import searchpage from '../test/pages/search.page';
const { default: $ } = require("webdriverio/build/commands/browser/$");

describe("launch westwing",function()
{
    it("Open the url",function()
    {
        browser.url('/');
    }
    ); 
        //const firstresult =$('*=lennon');
        //console.log(firstresult.getText);
        //const wishlist =$('//*[@id="app-root"]/div/div[1]/div[7]/div/div/main/div/div[2]/div[1]/a/div/div[2]/div[2]/div');
       // const isOpen = browser.isAlertOpen();

       // if (isOpen) {
        //    console.log("===========>" + isOpen);
          //  browser.acceptAlert();
            //browser.pause(5000);}
it("accepts the cookies",function()
{
            const alert = $('button=Cookies akzeptieren');
            alert.click();
        });
            it("should search for mobel", function()
            {

                searchpage.getsearch.addValue('Mobel');
             //const search = $('//*[@id="wwOneHeader"]/div/div[1]/header/div[6]/div[1]/form/input');
        //search.setValue ('Mobel');
        browser.keys("\uE007");
});
        //const email = $('input*=email');
        //email.setValue('ummul.kkadri@gmail.com');
        //browser.setValue('input[name="email"]','ummul.kkadri@gmail.com');

        it("should login using the the user credentials",function()
        {
        $('[name="email"]').addValue('ummul.kkadri@gmail.com');
        browser.keys("\uE004");
        $('[name="password"]').addValue('Password#123');
        //const pwd = $('input*=Password');
        //pwd.setValue('Password#123');
       //browser.setvalue('input[name="password"]','Password#123');
        const checkbox =$('input=checkbox');
        checkbox.click();
        const submit = $('input=Jetzt kostenlos registrieren');
        browser.pause(10000);
    });

        it("should select the first element and add to wish list", function()
        {
       const firstelement =$('*=lennon');
       firstelement.click();
       const wishlist = $('*=WishlistIcon__StyledWishlistIconWrapper-sc-75dklq-0 jujCBZ');
       wishlist.click();
        }
        );

        it("should remove the added product from the wishlist", function()
        {
       const iconsbuttontray = $('*=IconsButtonTray__MenuIconWrapper-sc-1k6jcrl-1 ktRzWe');
       iconsbuttontray.click();
       const removewishlist = $('*=blockListProduct__delete qaBlockListProduct__delete');
       removewishlist.click();

        });
    
    
});