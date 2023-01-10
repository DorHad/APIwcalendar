
//https;//newsapi.com/s/israel-news-api
const apiKey = "87daad0fb59446e0a2605fa2328c599c";
const newsURL = "https://newsapi.org/v2/top-headlines?country=il&apiKey="+apiKey;

const dateURL = "https://www.hebcal.com/converter?cfg=json&g2h=1&strict=1&date=";

////to make things simpler for date, 
//the & above at the link means it changes to the name g2h
//we remove &g2h=1&strict=1 from the end and paste it after the word json
//and we remove the date numbers at the end 

//on the above const dateURL we access Public API Github
//CTRL + F , for Calendar link > Hebrew Calendar > 
//> Hebrew Date Converter REST API >
//https://www.hebcal.com/converter?cfg=json&date=2011-06-02&g2h=1&strict=1


//at the ajax here is in an arrow function/document ready, 
//because we want to inject the information
//after the page has loaded. Otherwise not possible.

$(()=>{
$("#hebrewDate").hide();
$.ajax({
    type: "GET", //type of request, GET or POST 
    url: newsURL,
    success: response=>handleNews(response), //calling the function in the correct way
    //we must get a reponse, and transfer it into the function handlenews
    error: err=>console.log(err),
    /*ALT ERROR w/o arrow function
    function printError(err) {
        console.log(Err);
    }*/

});
})

const handleNews = news => { //receives to itself the news 
//we want to see the object so we know how to handle it.
console.log(news.articles); 
//const article = news.articles[0];
//the regular-apostrophe below, mentions variable names.
//append means adding .append in other languages &
//we use item instead of article. 
news.articles.map(item=>
$("#content").append(`
    <div class="Box">
    <img src="${item.urlToImage}" width=100/}/><br/>
    ${item.title}<hr/>
    ${item.description}<br/>
    </div>

        `)
    );
}

const convertDate = myDate => {
    //console.log($("#thiersDate").val()); //first check what we get then proceed with the code below 
    //we paste the ajax function from above and modify its 
    //contents
    $.ajax({
        type: "GET", //type of request, GET or POST 
        url: dateURL+$("#thiersDate").val(),
        success: response=>{
            //$("#hebrewDate").html(response.hebrew); //inserting into {}, a block of commands
            //$("#hebrewDate").show(); //showing the hebcal date on the page
            //or alternatively better option than the above 2 lines:
            $("#hebrewDate").html(response.hebrew).show();
        },
        //success: response=>console.log(response),
        //success: response=>handleNews(response), //calling the function in the correct way
        //we must get a reponse, and transfer it into the function handlenews
        error: err=>console.log(err),
        /*ALT ERROR w/o arrow function
        function printError(err) {
            console.log(Err);
        }*/
    
    });
}
