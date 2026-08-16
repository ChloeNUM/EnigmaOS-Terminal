const filesystem = {
  "home": {
    type: "dir",
    children: {
      "readme.txt": { type: "file", content: "Test text file" },
      "documents": {
        type: "dir",
        children: {
          "nya.txt": { type: "file", content: "meow" }
        }
      }
    }
  }
};

function getcwd(){
    let dir = filesystem;
    for (const folder of currentPath) {
        dir = dir[folder] ? dir[folder] : dir.children[folder]
    }
    return dir;
}

function processcmd(cmd, arg) {
    const current = getcwd();

    if (cmd === 'ls')
        const items = Object.keys(current.children).join('  ');
        




}