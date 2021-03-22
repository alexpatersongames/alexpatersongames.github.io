// This is the Digger example from the JS-DOS website but with the paths changed

    Dos(document.getElementById("jsdos"), {
        wdosboxUrl: "https://js-dos.com/6.22/current/wdosbox.js",
        cycles: 10000,
        autolock: true,
    }).ready(function (fs, main) {
      fs.extract("dosbox/boom.zip").then(function () {
        main(["-c", "PLAYBOOM.BAT"]).then(function (ci) {
            window.ci = ci;
        });
      });
    });