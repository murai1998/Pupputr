<!doctype html>
<html>

<head>
    <title>npm and jQuery demo</title>
    <link rel="stylesheet" href="node_modules/tipso/src/tipso.css" />
</head>

<body>
    <span class="title-tipso tipso_style" title="This is a loaded TIPSO!"></span>

    <script src="https://code.jquery.com/jquery-2.1.3.min.js"></script>
    <script src="node_modules/tipso/src/tipso.js"></script>
    <script src="script.js"></script>
    <script>

        $("document").ready(function () {
            $("body").append("<h1>Welcome</h1>");
        });
    </script>
</body>

</html>
