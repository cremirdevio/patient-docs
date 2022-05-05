let availableFiles = [
  {
    title: "Accidental Bowel Leakage",
    filename: "ABL.pdf",
    isActive: true,
    description: "AUGS Fact Sheet for Accidental Bowel Leakage",
    updated: "2022-05-03T10:00:18 +05:00",
    author: "AUGS",
    source: "https://www.voicesforpfd.org/assets/2/6/ABL.pdf",
    category: ["Fecal Incontinence", "FI", "Bowel"],
  },
  {
    title: "Botox Injections to Improve Bladder Control",
    filename: "Botox.pdf",
    isActive: true,
    description: "AUGS Fact Sheet for BOTOX",
    updated: "2022-05-03T10:00:18 +05:00",
    author: "AUGS",
    source: "https://www.voicesforpfd.org/assets/2/6/Botox.pdf",
    category: ["OAB", "BOTOX", "Bladder"],
  },
  {
    title: "Colpoclesis/Vaginal Closure Surgery",
    filename: "Colpocleisis.pdf",
    isActive: true,
    description: "AUGS Fact Sheet for colpocleisis.",
    updated: "2022-05-03T10:00:18 +05:00",
    author: "AUGS",
    source: "https://www.voicesforpfd.org/assets/2/6/Colpocleisis.pdf",
    category: ["Prolapse", "Surgery", "POP"],
  },
  {
    title: "Constipation",
    filename: "Constipation.pdf",
    isActive: true,
    description: "AUGS Fact Sheet for constipation.",
    updated: "2022-05-03T10:00:18 +05:00",
    author: "AUGS",
    source: "https://www.voicesforpfd.org/assets/2/6/Constipation.pdf",
    category: ["Constipation", "Bowel"],
  },
];

let selectedFiles = [];

let addToSelection = (file) => {
  selectedFiles.push(file);
};

let removeFromSelection = (fileToBeRemoved) => {
  selectedFiles = selectedFiles.filter((file) => {
    return slugify(fileToBeRemoved.title) !== slugify(file);
  });
};

const toggleSelection = (event) => {
  let element = event.target;
  let title = element.dataset.title;

  // Check if its already added
  let isSelected = selectedFiles.find((file) => {
    return title === slugify(file.title);
  });

  let foundFile = availableFiles.find((file) => {
    return title === slugify(file.title);
  });

  if (!foundFile) {
    throw Error("File does not exist");
  }

  if (isSelected) {
    removeFromSelection(foundFile);
  } else addToSelection(foundFile);
};

// Display books
availableFiles.forEach((file) => {
  
});

let availableFileCards = document.querySelectorAll(".file-selector");

availableFileCards.forEach((fileCard) => {
  fileCard.addEventListener("click", toggleSelection);
});

// Utility functions
// Slugify a string
function slugify(str) {
  str = str.replace(/^\s+|\s+$/g, "");

  // Make the string lowercase
  str = str.toLowerCase();

  // Remove accents, swap ñ for n, etc
  var from =
    "ÁÄÂÀÃÅČÇĆĎÉĚËÈÊẼĔȆÍÌÎÏŇÑÓÖÒÔÕØŘŔŠŤÚŮÜÙÛÝŸŽáäâàãåčçćďéěëèêẽĕȇíìîïňñóöòôõøðřŕšťúůüùûýÿžþÞĐđßÆa·/_,:;";
  var to =
    "AAAAAACCCDEEEEEEEEIIIINNOOOOOORRSTUUUUUYYZaaaaaacccdeeeeeeeeiiiinnooooooorrstuuuuuyyzbBDdBAa------";
  for (var i = 0, l = from.length; i < l; i++) {
    str = str.replace(new RegExp(from.charAt(i), "g"), to.charAt(i));
  }

  // Remove invalid chars
  str = str
    .replace(/[^a-z0-9 -]/g, "")
    // Collapse whitespace and replace by -
    .replace(/\s+/g, "-")
    // Collapse dashes
    .replace(/-+/g, "-");

  return str;
}
