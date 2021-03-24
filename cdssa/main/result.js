function result() {
    var students = {
        DAVID : {
            Math: "98",
            Physics: "100",
            Chemistry: "56"
        },
        ISAAC : {
            Math: "97",
            Physics: "34",
            Chemistry: "78"
        },
        JOHN : {
            Math: "70",
            Physics: "80",
            Chemistry: "78"
        }
    }

    var studentname = document.getElementById('studentname').value;
    var input = studentname.toUpperCase();
    var definition = students[input];
    var output = document.getElementById("output");

    if (definition==undefined) {
        output.innerHTML=`<hr>There is no information about this student. <hr>`;
    }else {
        output.innerHTML=`<hr> Math Score is ${definition.Math}. <hr> Physics Score is ${definition.Physics}. <hr> Chemistry Score is ${definition.Chemistry}.<hr>`;
    };
};