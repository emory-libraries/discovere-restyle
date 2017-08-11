


  //Populates element with specific HTML 
  function add_action(linkObj){
    $(linkObj.target_element).append(linkObj.html);
  }

// replace help link with Ask A Librarian link -->
$(document).ready(function(){
    //Remove Help link from main menu
    $('#exlidMainMenuRibbon li.EXLLastItem').remove();
    //Insert Ask A Librarian link
    $('#exlidMainMenuRibbon').append('<li id="ask-a-librarian" class="EXLMainMenuItem"><span> <a title="Ask A Librarian" href="http://emory.libanswers.com/" class="EULMainMenuITEMaskalibrarian" target="_blank">Ask a Librarian</a></span></li>')
});
//End replace help link

  $(document).ready(function(){
    //Create empty HTML and object to later populate.
    var html = '', action_linkObj = {
      html : '',
      target_element : ''
    };


    if($("#full_view_bg").length > 0){
      action_linkObj.html = '<li><a href="'+full_view_bg+'" target="_blank" id="full_view_agc" title="See all the information for this tile">Full View</a></li>';
      action_linkObj.target_element = '.EXLDetailsLinks ul';
      add_action(action_linkObj);
    }

    if($("#qrcode_bg").length > 0){
      action_linkObj.html = '<li class="EXLButtonSendToQRCode"><a href="'+qrcode_bg+'" title="Scan QR Code" target="_blank" id="qrcode_agc_02"></a></li>';
      action_linkObj.target_element = 'ol.EXLTabHeaderButtonSendToList';
      add_action(action_linkObj);
    }

    if($("#sendtophone_bg").length > 0){
      action_linkObj.html = '<li class="EXLButtonSendToPhone"><a href="'+sendtophone_bg+'" title="Send item information to your mobile device" target="_blank" id="sendtophone_agc_02"></a></li>';
      action_linkObj.target_element = 'ol.EXLTabHeaderButtonSendToList';
      add_action(action_linkObj);
    }

    if($("#marctext_bg").length > 0){
      action_linkObj.html = '<li><a href="'+marctext_bg+'" target="_blank" id="marctext_agc" title="Raw MARC data in MarcEdit format">Staff View</a></li>';
      action_linkObj.target_element = '.EXLDetailsLinks ul';
      add_action(action_linkObj);
    }

    if($("#worldcat_identity_bg").length > 0){
      action_linkObj.html = '<li><a href="'+worldcat_identity_bg+'" target="_blank" id="worldcat_identity_agc" title="Worldcat Identities">Information about the author</a></li>';
      action_linkObj.target_element = '.EXLDetailsLinks ul';
      add_action(action_linkObj);
    }

    if($("#cite_uri_agc").length > 0){
      $("<span class='EXLDetailsLinksBullet'></span>").insertBefore( $("#cite_uri_agc") );
    }

    if($("#full_view_agc").length > 0){
      $("<span class='EXLDetailsLinksBullet'></span>").insertBefore( $("#full_view_agc") );
    }

    if($("#qrcode_agc_02").length > 0){
      $("#qrcode_agc_02").append('<span class="EXLButtonSendToLabel">QR Code</span><span class="EXLButtonSendToIcon EXLButtonSendToIconQRCode"></span>');
    }

    if($("#sendtophone_agc_02").length > 0){
      $("#sendtophone_agc_02").append('<span class="EXLButtonSendToLabel">Send To Phone</span><span class="EXLButtonSendToIcon EXLButtonSendToIconPhone"></span>');
    }

    if($("#marctext_agc").length > 0){
      $("<span class='EXLDetailsLinksBullet'></span>").insertBefore( $("#marctext_agc") );
    }

    if($("#worldcat_identity_agc").length > 0){
      $("<span class='EXLDetailsLinksBullet'></span>").insertBefore( $("#worldcat_identity_agc") );
    }

    $('#cite_uri_bg, #full_view_bg, #qrcode_bg, #marctext_bg, #sendtophone_bg, #worldcat_identity_bg').hide();

/*    if($("#unique_marbl_bg").length > 0){
      $( "#exlidResult0-MoreTab, #exlidResult0-RequestTab, .EXLLocationTableActions, .EXLLocationTableHeaderActions" ).hide();
    }*/

    //$( "#marbl_bg" ).insertAfter( $("#exlidResult0-BrowseshelfTab") );

    /* ADD TABS TO ITEM RECORD */

    /* Use newTabs Object to add new tabs. Index # determines tab order. */
    var newTabs = {
      0 : {
        linkId : 'marbl_bg',
        listItemId: 'EULRoseRequestTab'
      },
      1 : {
        linkId : 'unique_marbl_bg',
        listItemId : 'EULRoseRequestTab'
      },
      2 : {
        linkId : 'docdelivery_view_bg',
        listItemId : 'EULDocDelivery'
      },
      3 : {
        linkId : 'openurl_bg',
        listItemId : 'EULReserveItem'
      }
    }


    // Loop through newTabs object
    $.each(newTabs,function(i, value){

      var listItemId = value.listItemId,
          listItemElement = '#'+listItemId,
          linkId = '#'+value.linkId,
          linkElement = $(linkId);

      // Check for link element presence
      if(linkElement.length > 0){

        // Create list item
        $("#exlidResult0-TabsList").append('<li id="'+listItemId+'" class="EXLResultTab"></li>');

        // Insert link into list item
        $(listItemElement).html(linkElement);
      }
    });

/*    $( "#unique_marbl_bg" ).insertBefore( $("#exlidResult0-LocationsTab") );

    $( ".outsider EXLFullDetailsOutboundLink" ).insertAfter( $("#exlidResult0-LocationsTab") );*/

    /*$( "#unique_marbl_bg" ).insertBefore( $("#exlidResult0-RequestTab") );

    $( ".outsider EXLFullDetailsOutboundLink" ).insertAfter( $("#exlidResult0-RequestTab") );*/

/*  $('iframe').load( function(){
    var $iFrameContents = $('iframe').contents(),
        $entryContent = $iFrameContents.find('div.holla');

    $iFrameContents.find('li.EXLTabHeaderButtonSendTo').replaceWith($entryContent);
  });
*/
    //Swap out renew all link with checkbox to select all

    /*$('#renewAllButton').remove();

    $('#LoansTable tr th.EXLMyAccountTable').append('<input type="checkbox" id="selectAllRenewals" title="Select all for renewal" />');
    
    //Select all items
    $('#selectAllRenewals').click(function(){
      if($(this).prop('checked') === false){
        $('td.MyAccount_Loans_select input[type=checkbox][title=Renewable]').prop('checked', false);
      } else {
        $('td.MyAccount_Loans_select input[type=checkbox][title=Renewable]').prop('checked', true);
      }
    });*/

    $('iframe').load( function(){
      var $iFrameContents = $('iframe').contents(),
      $entryContent = $iFrameContents.find('#unique_marbl_bg');

      $iFrameContents.find('#cite_uri_bg, #qrcode_bg, #marctext_bg, #worldcat_identity_bg, #sendtophone_bg, #full_view_bg, #unique_marbl_bg, #marbl_bg, #openurl_bg').hide();
    });

    $( "body" ).click(function () {
      $(".EXLTabHeaderButtonSendToList").slideUp(100);
      $(".EXLTabHeaderButtonSendToList").removeClass(".EXLTabHeaderButtonSendToList");
    });

//Added as part of Ares integration
    $( "#openurl_bg" ).insertAfter( $("#exlidResult0-MoreTab") );
    $( "#openurl_bg" ).insertAfter( $("#exlidResult0-RecommendTab") );

//end of Ares integration

// add title to new facet
    $('.EXLFacet a:contains("Newly Acquired")').attr('title', "Titles added within the last 60 days");

  });
