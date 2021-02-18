import page from './page';
class searchpage extends page{

    open ()
    {
        super.open('https://www.westwingnow.de/')
    }

    getsearch(){
        return $('//*[@id="wwOneHeader"]/div/div[1]/header/div[6]/div[1]/form/input');
        browser.keys("\uE007");
    }

}

export default new searchpage();
