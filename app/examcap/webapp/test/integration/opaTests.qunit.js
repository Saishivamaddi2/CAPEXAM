sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'saishivaexamcap/examcap/test/integration/FirstJourney',
		'saishivaexamcap/examcap/test/integration/pages/POsList',
		'saishivaexamcap/examcap/test/integration/pages/POsObjectPage',
		'saishivaexamcap/examcap/test/integration/pages/PoItemsObjectPage'
    ],
    function(JourneyRunner, opaJourney, POsList, POsObjectPage, PoItemsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('saishivaexamcap/examcap') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onThePOsList: POsList,
					onThePOsObjectPage: POsObjectPage,
					onThePoItemsObjectPage: PoItemsObjectPage
                }
            },
            opaJourney.run
        );
    }
);