function result() {
    
    var students= {
        DAVID : {
            math: "95",
            pythics: "80",
            literature: "75"
        },
        SHAWN : {
            math: "100",
            pythics: "100",
            literature: "45"
        },
        JOHN : {
            math: "65",
            pythics: "89",
            literature: "011"
        },
        YAN : {
            math: "59",
            pythics: "80",
            literature: "75"
        }
    }

    var studentname=document.getElementById('studentname').value;
    var input=studentname.toUpperCase();
    var definition=students[input];
    var output=document.getElementById("output");

    if (definition==undefined) {
        output.innerHTML='<hr> There is no information about this student. <hr>';
    } else {
        output.innerHTML='<hr> Math score 65. <hr> pythics score is 100. <hr> literature score is 80. <hr>';
    };
};