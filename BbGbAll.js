// ==UserScript==
// @name         Blackboard Grade Center Auto-Set Rows
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Automatically sets the Grade Center to show 35 rows
// @match        *://courses.cscc.edu/webapps/gradebook/do/instructor/enterGradeCenter*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Click the "Edit Rows Displayed" button
    let editButton = document.getElementById('openRowEditing');
    if (editButton) {
        editButton.click(); // Simulate the click to open the row editing panel

        // Add a short delay to ensure the panel has time to open before accessing the input field
        setTimeout(function() {
            let rowInput = document.getElementById('numRows');
            if (rowInput) {
                rowInput.value = 35; // Set the number of rows to 35

                // Now click the "Go" button to apply the changes
                let goButton = document.getElementById('submitRowEditing');
                if (goButton) {
                    goButton.click(); // Simulate a click on the "Go" button
                }
            }
        }, 500); // 0.5-second delay to allow the panel to appear
    }

})();


