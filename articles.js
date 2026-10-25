class Article {
  constructor(title, codename, imagePath, description, fullText) {
    this.title = title;
    this.codename = codename;
    this.imagePath = imagePath;
    this.description = description;
    this.fullText = fullText;
  }

  get previewHTML() {
    let prevText = "<div class=\"article-preview-div\">\n" +
      "\t<h3 class=\"article-preview-title\">" + this.title + "</h3>\n" +
      "\t<p class=\"article-preview-description\">\n" +
      "\t\t" + this.description + "\n" +
      "\t</p>\n" +
      "\t<button class=\"article-preview-button\" onclick=\"putFullscreenArticleOnId('articles', '" +
        this.codename + "')\">Read More</button>\n" +
      "</div>\n";
    return prevText;
  }

  get fullHTML() {
    let text = "<div class=\"article-div\">\n" + 
      "\t<h2 class=\"article-title\">" + this.title + "</h2>\n" +
      "\t<img class=\"article-picture\" src=\"" + this.imagePath + "\">\n" +
      "\t<p class=\"article-text\">" + this.fullText + "<\p>\n" +
      "</div>\n";
    return text;
  }
}

const limitedArticle = new Article(
  "New Limited Menu Items",
  "limiteditems",
  "Images/steak-nuggets.jpg",
  "Arby's releases new items to their limited menu. You would never guess the things they're adding!",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent iaculis" +
    "eros id blandit pharetra. Fusce sit amet orci orci. Curabitur leo tortor," +
    "fringilla sed urna id, tincidunt accumsan risus. Vivamus laoreet augue quam," +
    "id bibendum enim dictum a. Cras augue sapien, aliquam ac porttitor at," +
    "venenatis quis ipsum. Donec cursus, turpis in vulputate mollis, elit eros" +
    "malesuada quam, in elementum enim erat sit amet massa. Mauris rutrum eros" +
    "neque, eget consequat ipsum tristique at. Proin sed dapibus turpis. Nullam" +
    "mattis ornare eros. Praesent nec volutpat libero." +

    "Nulla vitae purus ultrices, fringilla erat at, elementum erat. Ut malesuada" +
    "elementum metus, nec euismod ante ultricies vel. Duis molestie justo eget" +
    "ligula dapibus, vitae vestibulum justo tincidunt. Vestibulum justo enim," +
    "vestibulum eleifend neque dignissim, auctor pulvinar risus. Mauris in iaculis" +
    "enim. Cras consectetur lobortis dictum. Duis lacinia metus ac nisl tincidunt" +
    "fringilla. Maecenas vestibulum ornare varius. Vivamus vel viverra urna. Vivamus" +
    "vel ultrices sapien. Vestibulum venenatis leo ac pellentesque euismod." +

    "Phasellus vulputate, erat vitae interdum finibus, eros risus volutpat odio," +
    "ut maximus quam turpis at quam. Integer a turpis suscipit, condimentum magna" +
    "id, tempor ligula. Suspendisse posuere facilisis enim, consectetur molestie" +
    "sapien pretium non. Vivamus ut sapien eu augue fringilla molestie. Vivamus" +
    "eget placerat mauris, in tempor nibh. Pellentesque in luctus eros, non" +
    "sagittis nisi. Pellentesque neque lorem, egestas eget mi a, dignissim commodo" +
    "diam. Aliquam fringilla justo quis neque laoreet euismod. Proin iaculis ut" +
    "neque sit amet commodo. Praesent efficitur orci urna, sit amet efficitur nisl" +
    "sollicitudin eu. Nulla vitae lobortis nisl. Ut nec quam a est eleifend imperdiet" +
    "id sit amet elit. Sed tristique sed ante a sagittis. Proin finibus ex justo," +
    "sit amet tristique nibh laoreet et. Sed gravida justo luctus gravida sagittis." +

    "Phasellus eu mollis urna. Morbi a magna ut ex scelerisque ultrices nec sit" +
    "amet nibh. Donec ut quam vitae justo ultrices cursus. Aliquam lectus erat," +
    "faucibus vitae viverra at, dapibus ut enim. Praesent ut justo sit amet lectus" +
    "lacinia hendrerit. Donec interdum libero rhoncus enim sagittis dictum. Sed" +
    "tristique auctor ex, eget porttitor nunc malesuada eget." +

    "Ut iaculis orci sem, vitae aliquet nisl interdum at. Nullam finibus lacus vitae" +
    "nulla tincidunt tincidunt. Vestibulum ut lorem ipsum. Morbi mauris lectus," +
    "mattis quis rhoncus eu, fringilla vitae libero. Praesent facilisis purus" +
    "et sem elementum laoreet. Ut ullamcorper a velit sit amet convallis. Cras" +
    "tincidunt feugiat quam. Vivamus velit ex, euismod in ultricies sit amet," +
    "venenatis ut enim. Nulla ex nisi, aliquet sagittis justo in, ultrices pretium" +
    "libero. Nam faucibus feugiat blandit." 
);

const arbysProtest = new Article(
  "People Protest New Arby's",
  "arbysprotest",
  "Images/arbys-protest.jpg",
  "Arby's is being protested against, because they destroyed 10 acres of forest to build it.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent iaculis" +
    "eros id blandit pharetra. Fusce sit amet orci orci. Curabitur leo tortor," +
    "fringilla sed urna id, tincidunt accumsan risus. Vivamus laoreet augue quam," +
    "id bibendum enim dictum a. Cras augue sapien, aliquam ac porttitor at," +
    "venenatis quis ipsum. Donec cursus, turpis in vulputate mollis, elit eros" +
    "malesuada quam, in elementum enim erat sit amet massa. Mauris rutrum eros" +
    "neque, eget consequat ipsum tristique at. Proin sed dapibus turpis. Nullam" +
    "mattis ornare eros. Praesent nec volutpat libero." +

    "Nulla vitae purus ultrices, fringilla erat at, elementum erat. Ut malesuada" +
    "elementum metus, nec euismod ante ultricies vel. Duis molestie justo eget" +
    "ligula dapibus, vitae vestibulum justo tincidunt. Vestibulum justo enim," +
    "vestibulum eleifend neque dignissim, auctor pulvinar risus. Mauris in iaculis" +
    "enim. Cras consectetur lobortis dictum. Duis lacinia metus ac nisl tincidunt" +
    "fringilla. Maecenas vestibulum ornare varius. Vivamus vel viverra urna. Vivamus" +
    "vel ultrices sapien. Vestibulum venenatis leo ac pellentesque euismod." +

    "Phasellus vulputate, erat vitae interdum finibus, eros risus volutpat odio," +
    "ut maximus quam turpis at quam. Integer a turpis suscipit, condimentum magna" +
    "id, tempor ligula. Suspendisse posuere facilisis enim, consectetur molestie" +
    "sapien pretium non. Vivamus ut sapien eu augue fringilla molestie. Vivamus" +
    "eget placerat mauris, in tempor nibh. Pellentesque in luctus eros, non" +
    "sagittis nisi. Pellentesque neque lorem, egestas eget mi a, dignissim commodo" +
    "diam. Aliquam fringilla justo quis neque laoreet euismod. Proin iaculis ut" +
    "neque sit amet commodo. Praesent efficitur orci urna, sit amet efficitur nisl" +
    "sollicitudin eu. Nulla vitae lobortis nisl. Ut nec quam a est eleifend imperdiet" +
    "id sit amet elit. Sed tristique sed ante a sagittis. Proin finibus ex justo," +
    "sit amet tristique nibh laoreet et. Sed gravida justo luctus gravida sagittis." +

    "Phasellus eu mollis urna. Morbi a magna ut ex scelerisque ultrices nec sit" +
    "amet nibh. Donec ut quam vitae justo ultrices cursus. Aliquam lectus erat," +
    "faucibus vitae viverra at, dapibus ut enim. Praesent ut justo sit amet lectus" +
    "lacinia hendrerit. Donec interdum libero rhoncus enim sagittis dictum. Sed" +
    "tristique auctor ex, eget porttitor nunc malesuada eget." +

    "Ut iaculis orci sem, vitae aliquet nisl interdum at. Nullam finibus lacus vitae" +
    "nulla tincidunt tincidunt. Vestibulum ut lorem ipsum. Morbi mauris lectus," +
    "mattis quis rhoncus eu, fringilla vitae libero. Praesent facilisis purus" +
    "et sem elementum laoreet. Ut ullamcorper a velit sit amet convallis. Cras" +
    "tincidunt feugiat quam. Vivamus velit ex, euismod in ultricies sit amet," +
    "venenatis ut enim. Nulla ex nisi, aliquet sagittis justo in, ultrices pretium" +
    "libero. Nam faucibus feugiat blandit." 

);


function addArticlePreviewToDivId(id_name, article) {
  document.getElementById(id_name).innerHTML += article.previewHTML;
}

function putArticlesOnId(id_name) {
  document.getElementById(id_name).innerHTML = "";
  addArticlePreviewToDivId(id_name, limitedArticle);
  addArticlePreviewToDivId(id_name, arbysProtest);
}

function putFullscreenArticleOnId(id_name, article_name) {
  let article = null;
  switch(article_name) {
    case "limiteditems":
      article = limitedArticle;
      break;
    case "arbysprotest":
      article = arbysProtest;
      break;
    default:
      alert("didn't work");
      article = limitedArticle;
      break;
  }
  document.getElementById(id_name).innerHTML = article.fullHTML; 
}

