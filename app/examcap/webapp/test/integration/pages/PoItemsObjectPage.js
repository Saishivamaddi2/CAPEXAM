sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'saishivaexamcap.examcap',
            componentId: 'PoItemsObjectPage',
            contextPath: '/POs/Items'
        },
        CustomPageDefinitions
    );
});