chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    // const tracks = document.getElementsByClassName('segment__track');
    const tracks = document.getElementsByClassName(request.data);


    console.log(request.data);

    let csvfile = "";

    function rowToCsvLine(row) {

        let csvRow = "";
        let j = 0;
        for (j = 0; j < row.length; j++) {
            csvRow += '"' + row[j] + '"' + ",";


        }

        return csvRow.slice(0, -1) + "\n"


    }


    for (i = 0; i < tracks.length; i++) {



        let row = tracks[i].innerText.split("\n");
        console.log(row);

        csvfile += rowToCsvLine(row);



    }
    if (csvfile.length > 0) {

                var textFileAsBlob = new Blob([csvfile], {
        type: 'text/plain'
    });
    var fileNameToSaveAs = document.title + ".csv";
    var downloadLink = document.createElement("a");
    downloadLink.download = fileNameToSaveAs;
    downloadLink.innerHTML = "Download File";

    downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);

    downloadLink.click();

    }





});











