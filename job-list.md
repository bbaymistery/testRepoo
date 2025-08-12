# 08-04-2025
```js
let quotation = {
  "price": "92.00",
  "currencyId": 3,
  "exchangedPrice": "92.00",
  "exchangedCurrencyId": 3,
  "normalPrice": 92,
  "normalExchangedPrice": 92
}
```
- at transfer details page we need to show the passenger there are an exra fee for early transfer date
- normalPrice  is the price WITHOUT  the extra fee and it the price on later date and time ( curentTime + 3 hours or later)
- price        is the price WITH     the extra fee and it is the price on earlier date and time ( curentTime to curentTime+3 hours )
- Example
- current time is 12:00 at UK time
- 1.if the transfer date after 15:00 then the price is equal to normalPrice
- 1.1. if the transfer date is after 3 hours from now, then show the price only because the normalPrice is equal to price

- 2if the transfer date between 12:00 to 15:00 then the price is not equal to normalPrice
- 2.1 if the transfer date is before 3 hours from now, then show the price and normalPrice because the normalPrice is not equal to price
```js
let price = null; 
let normalPrice = null; 
if(  quotation.normalPrice === quotation.price ){
	price = quotation.price;
  normalPrice = quotation.normalPrice;
} else {
  if( quotation.currencyId !== quotation.exchangedCurrencyId ){
    price = quotation.exchangedPrice;
    normalPrice = quotation.normalExchangedPrice;
  } else {
    price = quotation.price;
    normalPrice = quotation.normalPrice;
  }
}
```
- * at quotation page we need to show the passenger the normalPrice only
- at transfer details page :
<!-- DONE -->
- at payment page :
  - 1. creater event listener on focus event.
  - 2. if the event fired, 
    - * 2.1 if the transfer datetime is before now then forward the passenger to the home page
    - 2.2. if the transfer datetime is after now then you have to send fetch requsest to the server to get the price and normalPrice
      - 2.2.1 IF THE price is not equal to old pirce then show the newest price and newest normalPrice
 
- check configurstion of next js on the serrver cache side disable 
<!-- END -->


# 10-04-2025

    <!-- DONE -->
    - normal price details and extra fee details
    <!-- END -->

    <!-- DONE -->
    - focus on payment page
    <!-- END -->

    <!-- DONE -->
    - optimising top header in APL website that requested by Mr. Mustafa
    <!-- END -->
  
    - add more sessions details to server, check https://documents.london-tech.com/api/v1/sessions/add for more details later, Laith with include 5 moure session stages
   
    <!-- DONE -->
    - disable cache on server side within NextJs configuration
    <!-- END -->
 
    - create error logger to monitor whats the accurate reason of the error
    - during add a booking dont redirect the website visitor to the home page if there is an error, just show pax the alert of an error message LIKE 'pls contact with support'.


# APL website issue Log

  -✅ navigating issue from quotation page backing to home page is not working
    *helpers/readyToCollectQuotationOptions by mistake i used replace instead of push method While i was optimizing the codes

  - css issue on home page that lead to shown covered background image and hidding every thing on  there
  
  - after including points on home page, getQuottion action is not working
   ✅helpers/readyToCollectQuotationOptions now added router.push it works now

  - on airport category field at transfer details page, the --select-- option should be come as default value and keep zero on point object at reservation
   ✅SET_QUOTATION action when we click to quotation we assign flight waiting time '' . In this way The select component and reservation schema validation it is easy to check if the flight waiting time is empty or not
   Because by default flight waitingtime comes 0 .I assign empty string and on the reservation schema validator i check if it is empty or not .
   So if it is empty string directly on the select component
   And while customer comes select any waiting time i assign what he selects
   The same logic we used for post code details

 - ✅total number of custom routes exceeds 1000, this can reduce performance. Route counts: headers: 1 rewrites: 12 , redirects: 3145 
   *i moved next js config redirections file inside server.js

 - ✅countinue reloading for the home page when it is fully landed, by another meaing the page is refrushing every 3 seconds 
   *Based on documenation of next js https://nextjs.org/docs/messages/fast-refresh-reload  The component name is in camelCase and not PascalCase,  (check widget/SeaportTransfers component)
   *Updated CODE ON LAYOUT JS IN ORDER TO PREVENT  RELOADING considering https://nextjs.org/docs/messages/fast-refresh-reload  this

  - change all port in website app from 3500 to 
   *✅ getEnvConfig package 
  - transfer date time issue on quotation details page check video '20251418 - transfer-date-issue-for-return-journey.mp4'
   *✅done
  - date time picker for return journey is + 3 hours by default from the date time of first journey
   *✅done
  - accurate seach value to me the value of suggestions resposne
   *✅done
   

  - if there is a payment url then we cannt updating the quotation object with the reservation details
  *✅done
  - after pax clicking over one of payment method, we need to check the price update before collecting the payment session url
  *✅done
  - alert on focus checking for quotation price without updaing the quoation object >>  
  *✅done

  *✅done
  -Add back up >https://cdn.london-tech.com/app/tr.json
  *✅done

  *✅done
  -Sort iamge issue on home page
  *✅done

  *✅done
  -sort left side margin on website
  *✅done


# 2025-05-26
## REview Wigets
 - tripadvisor reviews
```html
<div id="TA_cdsratingsonlywide720" class="TA_cdsratingsonlywide"><ul id="QkfHERLgglWI" class="TA_links yyoKkfzc"><li id="JHbaAY5K9sa" class="LMwRbKJo"><a target="_blank" href="https://www.tripadvisor.co.uk/Attraction_Review-g186338-d11966434-Reviews-Airport_Pickups_London-London_England.html"><img src="https://www.tripadvisor.co.uk/img/cdsi/img2/branding/v2/Tripadvisor_lockup_horizontal_secondary_registered-18034-2.svg" alt="TripAdvisor"/></a></li></ul></div><script async src="https://www.jscache.com/wejs?wtype=cdsratingsonlywide&amp;uniq=720&amp;locationId=11966434&amp;lang=en_UK&amp;border=true&amp;display_version=2" data-loadtrk onload="this.loadtrk=true"></script>
```
```html
<div id="TA_cdsratingsonlynarrow154" class="TA_cdsratingsonlynarrow"><ul id="C10cHJ" class="TA_links 2Bo9i9O"><li id="EoF1w9" class="MeYjagZU"><a target="_blank" href="https://www.tripadvisor.co.uk/Attraction_Review-g186338-d11966434-Reviews-Airport_Pickups_London-London_England.html"><img src="https://www.tripadvisor.co.uk/img/cdsi/img2/branding/v2/Tripadvisor_lockup_horizontal_secondary_registered-18034-2.svg" alt="TripAdvisor"/></a></li></ul></div><script async src="https://www.jscache.com/wejs?wtype=cdsratingsonlynarrow&amp;uniq=154&amp;locationId=11966434&amp;lang=en_UK&amp;border=true&amp;display_version=2" data-loadtrk onload="this.loadtrk=true"></script>
```
  - review io widget
```html
<script src="https://widget.reviews.io/badge-ribbon/dist.js"></script>
<div id="badge-ribbon"></div>
<script>
    reviewsBadgeRibbon("badge-ribbon", {
        store: "airport-pickups-london-com",
        size: "small",
        
        
    });
</script>
```
```html
<script src="https://widget.reviews.co.uk/badge-modern/dist.js"></script>
<div id="badge-230" style="max-width:230px;"></div>
<script>
    reviewsBadgeModern('badge-230', {
    store: 'airport-pickups-london-com',
    primaryClr: '#2259C9',
    starsClr: '#FFAC00'
    });
</script>

```


# 2025-05-30
  *✅done
- on transfer details page for taxideals (qtype=3) and tourdetails (qtype=4) you have to check the quoation details via api with early date time

  *✅done
- on payment details you have to checl all qtype base on relative end-point for each qtype

  *✅done
- check the data type for the price of quoation details may it affect on is the price updated or not

  *✅done
- if the price is string change it into float