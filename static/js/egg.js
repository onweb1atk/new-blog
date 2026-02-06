document.addEventListener('keyup', function(e) {
    // 1. 定位 Hugo Book 的搜索框
    const searchInput = document.querySelector('.book-search input');
    
    if (searchInput) {
        // 2. 获取当前输入内容并去除前后空格
        const val = searchInput.value.trim();
        
        // 3. 校验暗号
        if (val === '1atkwithimouto') {
            // 4. 清空输入框防止残留，并执行跳转
            searchInput.value = '';
            window.location.href = '/new-blog/daily/'; 
        }
    }
});
