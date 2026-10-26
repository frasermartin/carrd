/*upate footer date*/
/*copyright*/
const siteTitle = document.title;
const currentYear = new Date().getFullYear();
document.getElementById('copyright').innerHTML =
'&copy; ' + currentYear + '&nbsp;'+ siteTitle;