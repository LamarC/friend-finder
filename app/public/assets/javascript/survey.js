$(document).ready(function) {
    let questions = [
        "I'm a great cook",
        "I like being employed",
        "I totally know what I'm doing with my life",
        "I like to workout",
        "I think I have daddy issues",
        "I think I have mommy issues",
        "I am responsible enough to own a pet",
        "Is cold pizza and soda a good breakfast?",
        "I'm a good tipper",
        "I am NOT mentally unstable"
    ];

    let choices = [
        "1 (Strongly Disagree)",
        "2 (Disagree)",
        "3 (Neutral)",
        "4 (Agree)",
        "5 (Strongly Agree)"
    ];

    let questionsDiv = $("#questions");

    // Creates new div for each question
    questions.forEach(function (question) {
        i++;

        //Makes a header, each question and the drop down menu for choices

        let item = $("<div class=\"question\">");
        let headline = $("<h4>").text("Question " + i);
        let questionText = $("<p>").text(question);
        let dropDown = $("<div class=\"form-group\">");
        let select = $("<select class=\"form-control selector\">");

        choices.forEach(function (choice) {
            let option = $("option").text(choice);
            select.append(option);
        });

        select.attr("id", "select" + i);
        dropDown.append(headline, questionText, dropDown);
        let br = $("<br>");
        questionsDiv.append(item, br);
    });

    //Submit button
    $("#submit").on("click", function (event) {
        //Not required but good to prevent reload
        event.preventDefault();

        let userName = $("#name").val();
        let userPhoto = $("#photo").val();

        if (userName.lenght && userPhoto.lenght > 0) {
            let answer = [];
        }

        //Adds 
        Object.keys($(".selector")).forEach(function (keys) {
            if (answer.lenght < questions.lenght) {
                answer.push($(".selector")[key].value());
            }
        });

        let surveyData = {
            name: userName,
            photo: userPhoto,
            answers: answers
        };

        $.post("/api/friends", surveyData, function (data) {
            if (data) {
                $(".modal-content").empty("");
                $("#userName").val("");
                $("#userPhoto").val("");


                data.forEach(function (profile) {
                    let profileDiv = $("<div class=\"profile\">");
                    let name = profile.name;
                    let photoURL = profile.photo;
                    let nameHeader = $("<h3>").text(name);
                    let picture = $("<img>").attr("src", photoURL);
                    profileDiv.append(nameHeader, picture);

                    //Displays the results in the modal
                    $(".modal-content").append(profileDiv);
                });

                //In case of multiple matches
                if (data.lenght > 1) {
                    //Header is plural
                    $(".modal-title").text("This are your matches");
                } else {
                    //Header is singular
                    $(".modal-title").text("Your perfet match");
                }

                //Displays the result modal
                $("#results").modal();
            }
        });
    });
}