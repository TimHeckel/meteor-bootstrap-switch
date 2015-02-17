Package.describe({
    summary: "Bootstrap switch icons (iOS style)"
    , name: "mrt:bootstrap-switch"
    , version: "1.9.0"
});

Package.on_use(function (api) {
    api.use('jquery@1.0.1', 'client');
    api.add_files([
        'lib/jquery.switch.js'
		,'css/bootstrap-switch.css'
    ], 'client');
});
