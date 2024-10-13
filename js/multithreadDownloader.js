/**
 * @description Handler for download multiple BLOBS and merge them into a big file
 * @author M7 - Miguel Moreno Pastor
 */

/**
 * @description Method to create the final blob with all the content
 * @param {string} endpoint Endpoint to the file with the display parts
 * @return A Blob with all the content merged
 */
function blobDowloaderAndBuilder (endpoint)
{
    var result = '[-] Error, the blobs item is not an object';
    
    // Check the type of blobs
    if (typeof(endpoint) === 'string')
    {
        // Get the amount of files to download
        var xhr = new XMLHttpRequest();

        xhr.withCredentials = true;

        // Sync resquest to the endpoint
        xhr.open("GET", `${endpoint}/downloadIndex`, false);
        xhr.send(null);

        let totalOfParts = xhr.response;

        console.info(`[i] Total of parts to merge: ${totalOfParts}`);

        result = new Array();
        for (let i = 0; i < totalOfParts; i++)
        {
            try
            {
                console.group(`[i] Starting process for part ${i}`);
                console.info(`[i] Downloading part ${i}...`);
                
                xhrPart = new XMLHttpRequest();
                xhrPart.withCredentials = true;
    
                xhrPart.open("GET", `${endpoint}/${i}`);
                xhrPart.send(null);
    
                let partToAdd = xhrPart.response;

                if (partToAdd.length == 0)
                {
                    console.error(`[-] The part ${i} has triggered and error`);
                    throw Error();
                }
    
                console.info(`[+] Part ${i} Downloaded!`);
                
                // Add the content of the blob to the result
                let indexPart = result.push(partToAdd);
    
                console.info(`[+] Part ${i} appended to the final Blob!`);
    
                console.log(`[i] Part ${indexPart} appended and dowloaded`)
    
                console.groupEnd();
            }
            catch
            {
                console.groupEnd();
                alert("An error happend while download, refresh the page and start the download again!");
            }
        }

        // When ends create the final Blob
        if (result.length > 0)
        {
            result = new Blob(result, { type: "octet/stream" });
            return result;           
        }
        else
        {
            console.error("[-] The final result is empty, download will not be triggered");
        }
    }

    return result;
}

/**
 * @description Triggers the download of a stored blob in memory
 * @param {*} blob The stored blob in memory
 */
function downloadBlobContent (blob)
{
    const blobURL = URL.createObjectURL(blob),
        link = document.createElement('a');

    // Point to blob file
    link.href = blobURL;
    link.download = "PandoraBox.iso";

    document.body.appendChild(link);

    // Trigger download buttton
    link.dispatchEvent( new MouseEvent( 'click', {
            bubbles: true,
            cancelable: true,
            view: window
        }
    ));

    document.body.removeChild(link);
}

/**
 * @description Checks if the devtools are openned
 */
function checkF12Pressed ()
{

    document.onkeydown = event => {
        
        var evtobj = window.event? event : e

        if (event.key == "F12")
        {
            killSession ();
        }
        else
        {
            
            if (evtobj.ctrlKey)
            {
                switch (evtobj.keyCode)
                {
                    case 83:
                        // s
                        killSession ();
                        break;
                    case 85:
                        // u
                        killSession ();
                        break;
                    default:
                        break;
                }   
            }
        }
    }
}

/**
 * @description Kills the web session and prevents user for access
 */
function killSession ()
{
    alert ("A debugger has been detected, if you are trying to view the web content, you will need to bypass this protection, in the meantime the web content will not be displayed.")

    localStorage.setItem("sessionCokie", `<_$hB@sLC[@sLCd=][Ir@PTWMA4KZWA4&[<@kq)#8Oua&8Ou0n>$+sE@W#%UA4L<L8P!B.=\`-uRA4KX4A4JUl@RiFl>!kVq>%p<=>$"<N=u'W)@qe8K@sLCV>$+[==Yirl>!kSt8OlB18OY<h8ORK9`);
    
    document.body.innerHTML = "";
    window.location = 'about:blank';
    window.location = "https://www.youtube.com/watch?v=KEkrWRHCDQU";
}

/**
 * @description This function will enable the debugger of JS, this will prevent the web to execute if F12 is pressed
 */
function initAntiDebugger ()
{
    this.DebuggerTime1 = Date.now();
}

/**
 * @description Checks if the anti-debugger had detected a debugger on the web
 */
function checkAntiDebugger ()
{
    // Now compare the date if not equal debugger is online
    this.DebuggerTime2 = Date.now();

    if (this.DebuggerTime1 !== this.DebuggerTime2)
    {
        killSession ();
    }
}

