Package.describe({
    summary: "Bootstrap switch icons (iOS style)"
});

Package.on_use(function (api) {
    api.use('jquery', 'client');
    api.add_files([
        'lib/jquery.switch.js'
	,'css/bootstrap-switch.js'
    ], 'client');
});
