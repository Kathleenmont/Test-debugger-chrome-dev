/*
 |--------------------------------------------------------------------------
 | Browser-sync config file
 |--------------------------------------------------------------------------
 |
 | For up-to-date information about the options:
 |   http://www.browsersync.io/docs/options/
 |
 | There are more options than you see here, these are just the ones that are
 | set internally. See the website for more info.
 |
 |
 */

// ==========================================================================
// Normal Configuration
// ==========================================================================
module.exports = {
    server: {
        baseDir: './dist'
    },
    files: ['dist/**'],
    watch: true,
    watchEvents: [
        'change'
    ],
    logFileChanges: true
};
