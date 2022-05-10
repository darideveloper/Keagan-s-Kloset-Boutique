function sleep(s) {
    // Wait specific time in seconds
    return new Promise(resolve => setTimeout(resolve, s*1000));
}