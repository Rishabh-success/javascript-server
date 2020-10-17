function createequilateral(n){
    let s = "";
    let j = n;
    for(let i = 1; i<=n; i++){
        s=" ".repeat(j);
        console.log(s,"* ".repeat(i));
        s="";
        j--;
    }
    for(let i = n; i>=1; i--){
        s=" ".repeat(j);
        console.log(s," *".repeat(i));
        s="";
        j++;
    }
}

n = process.argv[2]
createequilateral(n);