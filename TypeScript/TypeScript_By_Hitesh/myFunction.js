function addTwo(num) {
    num.toUpperCase(); // This will throw an error if num is not a string
    return num + 2;
}
addTwo(3); // 5
