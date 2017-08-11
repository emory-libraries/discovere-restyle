# discoverE Unstyle/Restyle

## Instructions for Submitting Changes

1.  You should develop all changes in a separate branch.
2.  Test your changes in discoveretest.emory.edu before submitting the pull request (PR).
3.  When submitting your PR, incude a URL to `discoveretest.emory.edu`, where reviewers can observe and test the change as well as the code submitted in the PR.

## About the Files

## CSS

The file `discovere.css` contains the rewritten CSS for Primo. It consists of CSS overrides for creating a responsive layout wherever possible.

This file resides at `template.library.emory.edu/systems/ex-libris/primo/discovere/css/`.

## JavaScript Files

Some of the JavaScript used in our restyle Primo UI is written in external files. These files live under `template.library.emory.edu/systems/ex-libris/primo/discovere/js/`.

### Primo Alerts

The file `primo-alert.v2.json` contains a JSON object for notifications in Primo.

## Static HTML Files

When updating the HTML files, upload them through the File Uploader in Primo Backoffice. This process distributes the files to both servers at once.

### Emory Libraries Footer

The file `emory-libraries-footer.html` contains javascript needed for specific functionality that must be delivered with the rendered page.
