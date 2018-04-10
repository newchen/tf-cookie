export default {
    /**
     * 设置Cookie
     * @param {string} key Cookie名
     * @param {string} val Cookie值
     * @param {number} expires 隐含参数，表示过期时间，单位为秒
     * @param {string} domain  隐含参数，域
     */
    setItem(key, val /*,expires,domain*/ ) {
        var expires = arguments[2],
            domain = arguments[3],
            date = new Date();

        if (!expires) { //默认1小时过期
            date.setTime(date.getTime() + 1000 * 60 * 60);
        } else {
            date.setTime(date.getTime() + expires * 1000);
        }

        if (null == domain) domain = document.domain;

        key = key + '=' + (val === null ? '; ' : encodeURIComponent(val) + '; ')
        document.cookie = key + 'expires=' + date.toUTCString() + '; path=/; domain=' + domain;
    },
    /**
     * 取得Cookie名对应的Cookie值
     * @param {string} key Cookie名
     * @return {string|object}
     */
    getItem(key) {
        if (document.cookie.length === 0) {
            return key ? null : {};
        }

        var obj = {},
            cookies = document.cookie.split("; "); //一个分号加一个空格

        for (var i = 0, c; i < cookies.length; i++) {
            c = cookies[i].split("="); //以赋值号分隔,第一位是Cookie名,第二位是Cookie值

            if (key && (c[0] == key)) {
                return decodeURIComponent(c[1]);
            } else {
                obj[c[0]] = decodeURIComponent(c[1])
            }
        }

        return key ? null : obj;
    },
    /**
     * 取得所有的Cookie
     * @return {object}
     */
    getAll() {
        return this.getItem();
    },
    /**
     * 移除Cookie名对应的Cookie
     * @param {string} key Cookie名
     * @param {string} domain  隐含参数，域
     */
    removeItem(key /*, domain*/ ) {
        this.setItem(key, null, -1, arguments[1]);
    },
    /**
     * 移除所有的Cookie
     */
    clear( /*domain*/ ) {
        if (document.cookie.length === 0) return;
        var cookies = document.cookie.split("; "); //一个分号加一个空格

        for (var i = 0, c; i < cookies.length; i++) {
            c = cookies[i].split("=");
            this.setItem(c[0], null, -1, arguments[0]);
        }
    }
};