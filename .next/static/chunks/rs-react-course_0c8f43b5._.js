(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/rs-react-course/messages/en.json (json)": ((__turbopack_context__) => {

__turbopack_context__.v(JSON.parse("{\"notFound\":{\"title\":\"Page Not Found\",\"description\":\"Oops! The page you're looking for does not exist.\",\"goHome\":\"Go back to Home\"},\"header\":{\"home\":\"Home\",\"about\":\"About\",\"appName\":\"GlobalCampus\"},\"footer\":{\"team\":\"Developed with ❤️ by\",\"poweredBy\":\"Powered by Open APIs. Data may not be accurate for all universities.\",\"copyright\":\"All rights reserved.\"},\"search\":{\"placeholder\":\"Search...\",\"button\":\"Search\"},\"results\":{\"next\":\"Next\",\"previous\":\"Previous\",\"downloadCsv\":\"Download CSV\",\"noData\":\"No data available\",\"unselectAll\":\"Unselect all\",\"page\":\"Page\",\"noWebSite\":\"No Web Site\",\"of\":\"of\",\"selectedItems\":\"Selected Items\",\"loading\":\"Loading universities...Please wait.\"},\"detailsPage\":{\"close\":\"Close\",\"country\":\"Country\",\"domains\":\"Domains\",\"webSite\":\"Web Site\"},\"mainPage\":{\"description\":\"Discover universities around the world! Enter the full name of a country and browse through the list of universities. Get detailed information about each university, including programs offered, admission requirements, and more.\"},\"about\":{\"name\":\"Asya Danilova\",\"role\":\"Frontend Developer\",\"bio\":\"Passionate about building user-friendly web applications.\",\"contributions\":[\"Developed the user interface for the university search feature.\",\"Implemented responsive design for mobile and tablet devices.\",\"Collaborated with backend developers to integrate APIs.\"],\"contributionHeader\":\"Contributions:\"}}"));}),
"[project]/rs-react-course/messages/ru.json (json)": ((__turbopack_context__) => {

__turbopack_context__.v(JSON.parse("{\"notFound\":{\"title\":\"Страница не найдена\",\"description\":\"Упс! Страница, которую вы ищете, не существует.\",\"goHome\":\"Вернуться на главную\"},\"header\":{\"home\":\"Главная\",\"about\":\"О нас\",\"appName\":\"GlobalCampus\"},\"footer\":{\"team\":\"Разработано с ❤️ командой\",\"poweredBy\":\"Работает на открытых API. Данные могут быть неточными для всех университетов.\",\"copyright\":\"Все права защищены.\"},\"search\":{\"placeholder\":\"Поиск...\",\"button\":\"Найти\"},\"results\":{\"next\":\"Следующая\",\"previous\":\"Предыдущая\",\"downloadCsv\":\"Скачать CSV\",\"noData\":\"Данные отсутствуют\",\"unselectAll\":\"Снять выбор со всех\",\"page\":\"Страница\",\"of\":\"из\",\"noResults\":\"Нет результатов\",\"selectedItems\":\"Выбранный(ые) элементы\",\"loading\":\"Загрузка университетов... Пожалуйста, подождите.\"},\"detailsPage\":{\"close\":\"Закрыть\",\"country\":\"Страна\",\"domains\":\"Домены\",\"webSite\":\"Веб-сайт\"},\"mainPage\":{\"description\":\"Откройте для себя университеты со всего мира! Введите полное название страны и изучите список университетов. Получайте подробную информацию о каждом университете, включая предлагаемые программы, требования к поступлению и многое другое.\"},\"about\":{\"name\":\"Ася Данилова\",\"role\":\"Frontend Developer\",\"bio\":\"Страстно увлечена созданием удобных веб-приложений.\",\"contributions\":[\"Разработала пользовательский интерфейс для функции поиска университетов.\",\"Реализовала адаптивный дизайн для мобильных и планшетных устройств.\",\"Сотрудничала с бэкенд-разработчиками для интеграции API.\"],\"contributionHeader\":\"Вклад:\"}}"));}),
"[project]/rs-react-course/src/utils/consts.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "ITEM_PER_PAGE": ()=>ITEM_PER_PAGE,
    "MESSAGES": ()=>MESSAGES,
    "SUPPORTED_LOCALES": ()=>SUPPORTED_LOCALES,
    "ThemeContext": ()=>ThemeContext
});
var __TURBOPACK__imported__module__$5b$project$5d2f$rs$2d$react$2d$course$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rs-react-course/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rs$2d$react$2d$course$2f$messages$2f$en$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/rs-react-course/messages/en.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rs$2d$react$2d$course$2f$messages$2f$ru$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/rs-react-course/messages/ru.json (json)");
;
;
;
const ITEM_PER_PAGE = 15;
const MESSAGES = {
    en: __TURBOPACK__imported__module__$5b$project$5d2f$rs$2d$react$2d$course$2f$messages$2f$en$2e$json__$28$json$29$__["default"],
    ru: __TURBOPACK__imported__module__$5b$project$5d2f$rs$2d$react$2d$course$2f$messages$2f$ru$2e$json__$28$json$29$__["default"]
};
const SUPPORTED_LOCALES = [
    'en',
    'ru'
];
const ThemeContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rs$2d$react$2d$course$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])({
    theme: 'light',
    toggleTheme: ()=>{}
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/rs-react-course/src/context/ThemeContext.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "ThemeProvider": ()=>ThemeProvider
});
var __TURBOPACK__imported__module__$5b$project$5d2f$rs$2d$react$2d$course$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rs-react-course/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rs$2d$react$2d$course$2f$src$2f$utils$2f$consts$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rs-react-course/src/utils/consts.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rs$2d$react$2d$course$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rs-react-course/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const ThemeProvider = (param)=>{
    let { children } = param;
    _s();
    const [theme, setTheme] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rs$2d$react$2d$course$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('light');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$rs$2d$react$2d$course$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ThemeProvider.useEffect": ()=>{
            document.body.setAttribute('data-theme', theme);
        }
    }["ThemeProvider.useEffect"], [
        theme
    ]);
    const toggleTheme = ()=>setTheme((prev)=>prev === 'light' ? 'dark' : 'light');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rs$2d$react$2d$course$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rs$2d$react$2d$course$2f$src$2f$utils$2f$consts$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeContext"].Provider, {
        value: {
            theme,
            toggleTheme
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/rs-react-course/src/context/ThemeContext.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ThemeProvider, "Z8UCD9KudyQA62DCQ9e5cf9+m5k=");
_c = ThemeProvider;
var _c;
__turbopack_context__.k.register(_c, "ThemeProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/rs-react-course/src/lib/selectedItemsSlice.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__,
    "selectItem": ()=>selectItem,
    "unselectAll": ()=>unselectAll,
    "unselectItem": ()=>unselectItem
});
var __TURBOPACK__imported__module__$5b$project$5d2f$rs$2d$react$2d$course$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/rs-react-course/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
;
const initialState = {
    items: []
};
const selectedItemsSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rs$2d$react$2d$course$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: 'selectedItems',
    initialState,
    reducers: {
        selectItem (state, action) {
            state.items.push(action.payload);
        },
        unselectItem (state, action) {
            state.items = state.items.filter((item)=>item.domains[0] !== action.payload);
        },
        unselectAll (state) {
            state.items = [];
        }
    }
});
const { selectItem, unselectItem, unselectAll } = selectedItemsSlice.actions;
const __TURBOPACK__default__export__ = selectedItemsSlice.reducer;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/rs-react-course/src/lib/searchSlice.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__,
    "setCurrentPage": ()=>setCurrentPage,
    "setSearchTerm": ()=>setSearchTerm,
    "setUniversities": ()=>setUniversities
});
var __TURBOPACK__imported__module__$5b$project$5d2f$rs$2d$react$2d$course$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/rs-react-course/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
;
const initialState = {
    searchTerm: '',
    universities: [],
    currentPage: 1
};
const searchSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rs$2d$react$2d$course$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: 'search',
    initialState,
    reducers: {
        setSearchTerm (state, action) {
            state.searchTerm = action.payload;
        },
        setUniversities (state, action) {
            state.universities = action.payload;
        },
        setCurrentPage (state, action) {
            state.currentPage = action.payload;
        }
    }
});
const { setSearchTerm, setUniversities, setCurrentPage } = searchSlice.actions;
const __TURBOPACK__default__export__ = searchSlice.reducer;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/rs-react-course/src/lib/store.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "makeStore": ()=>makeStore,
    "store": ()=>store
});
var __TURBOPACK__imported__module__$5b$project$5d2f$rs$2d$react$2d$course$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/rs-react-course/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$rs$2d$react$2d$course$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$rtk$2d$query$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rs-react-course/node_modules/@reduxjs/toolkit/dist/query/rtk-query.modern.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rs$2d$react$2d$course$2f$src$2f$lib$2f$selectedItemsSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rs-react-course/src/lib/selectedItemsSlice.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rs$2d$react$2d$course$2f$src$2f$lib$2f$searchSlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rs-react-course/src/lib/searchSlice.tsx [app-client] (ecmascript)");
;
;
;
;
const makeStore = ()=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$rs$2d$react$2d$course$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["configureStore"])({
        reducer: {
            selectedItems: __TURBOPACK__imported__module__$5b$project$5d2f$rs$2d$react$2d$course$2f$src$2f$lib$2f$selectedItemsSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
            search: __TURBOPACK__imported__module__$5b$project$5d2f$rs$2d$react$2d$course$2f$src$2f$lib$2f$searchSlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
        }
    });
};
const store = makeStore();
(0, __TURBOPACK__imported__module__$5b$project$5d2f$rs$2d$react$2d$course$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$rtk$2d$query$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setupListeners"])(store.dispatch);
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/rs-react-course/src/app/StoreProvider.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>StoreProvider
});
var __TURBOPACK__imported__module__$5b$project$5d2f$rs$2d$react$2d$course$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rs-react-course/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rs$2d$react$2d$course$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rs-react-course/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rs$2d$react$2d$course$2f$src$2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rs-react-course/src/lib/store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rs$2d$react$2d$course$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rs-react-course/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function StoreProvider(param) {
    let { children } = param;
    _s();
    const store = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rs$2d$react$2d$course$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "StoreProvider.useMemo[store]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$rs$2d$react$2d$course$2f$src$2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["makeStore"])()
    }["StoreProvider.useMemo[store]"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rs$2d$react$2d$course$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rs$2d$react$2d$course$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Provider"], {
        store: store,
        children: children
    }, void 0, false, {
        fileName: "[project]/rs-react-course/src/app/StoreProvider.tsx",
        lineNumber: 13,
        columnNumber: 10
    }, this);
}
_s(StoreProvider, "K8ucUnUnAgJZGJWAL9Ze8IHCmoQ=");
_c = StoreProvider;
var _c;
__turbopack_context__.k.register(_c, "StoreProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=rs-react-course_0c8f43b5._.js.map