import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';

const publicRoutes = [
    { path: '/', Comment: Home },
    { path: '/following', Comment: Following },
    { path: '/profile', Comment: Profile },
    { path: '/upload', Comment: Upload, layout: null },
    { path: '/search', Comment: Search, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
