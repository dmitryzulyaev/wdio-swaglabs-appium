async function scrollDown() {
    await  browser.execute('mobile: scroll', {direction: 'down'});

}

module.exports = {
    scrollDown
};
