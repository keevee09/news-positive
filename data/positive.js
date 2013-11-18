// Credits:
// https://github.com/panicsteve/cloud-to-butt
// https://github.com/DaveRandom/cloud-to-butt-mozilla

$(document).ready(function() {
    var count = 0;
    walk(document.body);
    
    function walk(node) 
    {
        // I stole this function from here:
        // http://is.gd/mwZp7E
    
        var child, next;
    
        switch ( node.nodeType )  
        {
            case 1:  // Element
               // alert("Case 1");
            case 9:  // Document
               // alert("Case 2");
            case 11: // Document fragment
                //alert("Case 11");
                child = node.firstChild;
                while ( child ) 
                {
                    next = child.nextSibling;
                    walk(child);
                    child = next;
                }
                break;
            case 3: // Text node
                //alert("Case 3 (text) with node content "+node.nodeValue);
                handleText(node);
                break;
        }

    } 
    
    
    function handleText(textNode)
    {
        // Try using Regexp's for this:
        //if (textNode.nodeValue == "the cloud" || textNode.nodeValue == "The Cloud" || textNode.nodeValue == "The cloud") {
        //    count = count+1;
       // }
       // var rules = {"witnesses": "these dudes I know", "allegedly": "kinda probably", "very": "like totally", "researchers": "nerds"}
        var v = textNode.nodeValue;
        v = v.replace(/\bmurder\b/gi, "firm hugging");
        v = v.replace(/\bmurdered\b/gi, "slightly frightened");
        v = v.replace(/\bmurdering\b/gi, "frightening");
        v = v.replace(/\bmurderer\b/gi, "naughty prankster");
        v = v.replace(/\brape\b/gi, "thorough complimenting");
        v = v.replace(/\bfire\b/gi, "candy explosion");
        v = v.replace(/\bbeating\b/gi, "playful rough-housing");
        v = v.replace(/\bprotest\b/gi, "singing circle");
        v = v.replace(/\bprotests\b/gi, "singing circles");
        v = v.replace(/\bkilled\b/gi, "given a fright");
        v = v.replace(/\battack\b/gi, "prank");
        v = v.replace(/\battacks\b/gi, "pranks");
        v = v.replace(/\bgun\b/gi, "water balloon");
        v = v.replace(/\bguns\b/gi, "water balloons");
        v = v.replace(/\bdrugs\b/gi, "cake");
        v = v.replace(/\bgunman\b/gi, "prankster");
        v = v.replace(/\bgunmen\b/gi, "pranksters");
        v = v.replace(/\binjured\b/gi, "mildly surprised");
        v = v.replace(/\bblood\b/gi, "cranberry juice");
        v = v.replace(/\bappalling\b/gi, "not so nice");
        v = v.replace(/\bappalled\b/gi, "disappointed");
        v = v.replace(/\bdisgusting\b/gi, "gross");
        v = v.replace(/\bdisgusted\b/gi, "grossed out");
        v = v.replace(/\bcritically\b/gi, "a little bit");
        v = v.replace(/\bbodies\b/gi, "lost shoes");
        v = v.replace(/\bdeath\b/gi, "long sleep");
        v = v.replace(/\bdied\b/gi, "overslept");
        v = v.replace(/\bfatality\b/gi, "mishap");

        textNode.nodeValue = v;
    
    }

//alert("final count = "+count);
});
