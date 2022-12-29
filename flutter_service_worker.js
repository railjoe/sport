'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "9465048c51d5c92a7274efef112e221f",
"index.html": "282cd8916343e05a4da71251a8aa3b04",
"/": "282cd8916343e05a4da71251a8aa3b04",
"main.dart.js": "6b5cd47131abf421b9d668d4f3a36a22",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "d154b84339eee2451b8fb71f4ed49ffd",
"assets/AssetManifest.json": "3e61b0339eaec52241a506c82f41fd2d",
"assets/NOTICES": "2477f3f4c388911880e6a5b21dc2e6dd",
"assets/FontManifest.json": "5c8cde8e878a96f5a3d624c316f5acde",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/images/cancel/icon.png": "b122061df16904927c7a672835d527fd",
"assets/assets/images/cancel/1.5x/icon.png": "12953057ee95460650d78e9a845bbc56",
"assets/assets/images/cancel/2.0x/icon.png": "eef443aef6950059700101fdd8dbb5f7",
"assets/assets/images/cancel/3.0x/icon.png": "6d7fe8330b0b1d9a6d9e46fdfa3c8d5e",
"assets/assets/images/cancel/4.0x/icon.png": "4f7ce1b4b14c23a295b4cd9f0ea7da9e",
"assets/assets/images/home/icon.png": "2b63d5cd5cc39a5c844aa779d972185a",
"assets/assets/images/home/1.5x/icon.png": "e41198aa1f3462d88e71af54c1f3cb72",
"assets/assets/images/home/2.0x/icon.png": "c561034f3e2528666dc2d1e080acb25c",
"assets/assets/images/home/3.0x/icon.png": "f56f363ea13db1c9aab3a0365c000ee2",
"assets/assets/images/home/4.0x/icon.png": "459e59ef1490eb92e7e2067e33f61a9e",
"assets/assets/images/panorama_off/icon.png": "0076ba5225f0de206c4e85e0283eb9b1",
"assets/assets/images/panorama_off/1.5x/icon.png": "f8cd245cebcbd870af05597c9735fa8f",
"assets/assets/images/panorama_off/2.0x/icon.png": "6cc1859c3f8f893af7cc36bf26ef4c54",
"assets/assets/images/panorama_off/3.0x/icon.png": "03533f8e8d11f14615a15bbe129d498d",
"assets/assets/images/panorama_off/4.0x/icon.png": "8ea5d6668cad7549ee7f99b25387224a",
"assets/assets/images/splash/icon.png": "2cfe138fc6ae3ad423639c7ffb48e208",
"assets/assets/images/splash/1.5x/icon.png": "d18ab71655471b32e174cdb10506896b",
"assets/assets/images/splash/2.0x/icon.png": "e0fecfedebe70433e3002b90f21fc23a",
"assets/assets/images/splash/3.0x/icon.png": "003e318d9b569fed365479bdf9c70427",
"assets/assets/images/splash/4.0x/icon.png": "e6ba90f3a5dc206013c4369d305b2cb7",
"assets/assets/images/remove/icon.png": "5fa4af389e1cb8e5cff6353c8ed911a2",
"assets/assets/images/remove/1.5x/icon.png": "47bb21b474036e350a0858306d2e18a4",
"assets/assets/images/remove/2.0x/icon.png": "63102850dcd62fb0b2bc98309ed9a749",
"assets/assets/images/remove/3.0x/icon.png": "43723735a1f55dae70c95807b47c8e78",
"assets/assets/images/remove/4.0x/icon.png": "6626d31fde08dc69ba4590bd270c2059",
"assets/assets/images/user_64/icon.png": "f4c4f64f767e627ad574b01c8ce306e3",
"assets/assets/images/user_64/1.5x/icon.png": "166fd7c809eb250ffd6db91ecf2a9b10",
"assets/assets/images/user_64/2.0x/icon.png": "8318d2fb7c47e3a19ada38a6ea090118",
"assets/assets/images/user_64/3.0x/icon.png": "47502c6daced40ddd6c57f068113b8e3",
"assets/assets/images/user_64/4.0x/icon.png": "e40b3cf89c11d944a4ab1cb11a0b4f20",
"assets/assets/images/unhide/icon.png": "62784be1d7e3f63b9ba201a43ef783f5",
"assets/assets/images/unhide/1.5x/icon.png": "9db63727e4b76aa949fd267e9306a852",
"assets/assets/images/unhide/2.0x/icon.png": "d1f1fcd98f0443d021807ba1efbe10db",
"assets/assets/images/unhide/3.0x/icon.png": "6bfb36a3e485577a760afe50f21fc1ba",
"assets/assets/images/unhide/4.0x/icon.png": "bfbcbd87ddcfeec56a65869ad443a215",
"assets/assets/images/back/icon.png": "f947cb0a28fc39306d3b4379063a7803",
"assets/assets/images/back/1.5x/icon.png": "d48bad4f4cb1f044bca45f9d8461e47b",
"assets/assets/images/back/2.0x/icon.png": "b28d96aa704a9dec593a8a2412cd3e07",
"assets/assets/images/back/3.0x/icon.png": "13a11ea2533d6549a96e03ba9bf9091a",
"assets/assets/images/back/4.0x/icon.png": "bc78013bf09046a35f112be161df8884",
"assets/assets/images/replay_player/icon.png": "d16ca6ce7d0a0b8a5d1fa5fd571d123a",
"assets/assets/images/replay_player/1.5x/icon.png": "ad94071b21fe616d5379d39e514b01ea",
"assets/assets/images/replay_player/2.0x/icon.png": "ecf7fc59bf1791b47073fdb0e74578a2",
"assets/assets/images/replay_player/3.0x/icon.png": "8673f337da0710fc2b892d0a823b15a7",
"assets/assets/images/replay_player/4.0x/icon.png": "0eb21a3727f5a19fbe40bb9af1cc94ad",
"assets/assets/images/reminder_on_48x48/icon.png": "0bd28e4288d4d8a86198494840666e69",
"assets/assets/images/reminder_on_48x48/1.5x/icon.png": "77e72bf2a035d8bfaa547f215ba3cf9c",
"assets/assets/images/reminder_on_48x48/2.0x/icon.png": "b2721f42c5c33d0db95b77a5fee10129",
"assets/assets/images/reminder_on_48x48/3.0x/icon.png": "3842bc10f96c77d8922bba862776aef4",
"assets/assets/images/reminder_on_48x48/4.0x/icon.png": "caab9eeb68d6608da74b48e9317db2cd",
"assets/assets/images/cast/icon.png": "327b76c6ebf57e8ae646317d2c559146",
"assets/assets/images/cast/1.5x/icon.png": "53e716de3b148daae4e14cb2c779803d",
"assets/assets/images/cast/2.0x/icon.png": "e73134946e8df10871ff77c519149ca6",
"assets/assets/images/cast/3.0x/icon.png": "c85e3cb276ccecd9e4dd74dd32d611bf",
"assets/assets/images/cast/4.0x/icon.png": "975f7c0950bc20bfad77e8fe7019a978",
"assets/assets/images/live_badge/icon.png": "def36eaa74fefe86ee35dfc4e7d05d2d",
"assets/assets/images/live_badge/1.5x/icon.png": "55243c42d67673a9a6ac8c9bd8634128",
"assets/assets/images/live_badge/2.0x/icon.png": "7a44e17d31944d32b6ffc2de3e0434ce",
"assets/assets/images/live_badge/3.0x/icon.png": "1e65db5a96f98fe50e597d796903d40a",
"assets/assets/images/live_badge/4.0x/icon.png": "26da05ac53a0dcef032c734559018013",
"assets/assets/images/expand_more/icon.png": "efd8965aa4f80303fadc4845ff78a1b5",
"assets/assets/images/expand_more/1.5x/icon.png": "65308919d52f09176b0ba8a3a98e9911",
"assets/assets/images/expand_more/2.0x/icon.png": "c29fa11ff7ee618d8d4bf1ba7e3a1393",
"assets/assets/images/expand_more/3.0x/icon.png": "59cb87e52b7244a4a319d7eeb08253a0",
"assets/assets/images/expand_more/4.0x/icon.png": "57cfc414d228e3b364ed4da506da7350",
"assets/assets/images/lock/icon.png": "85b73af015a39fadb8df1b638ccd9ef4",
"assets/assets/images/lock/1.5x/icon.png": "ee5e63f57c903bed141eabcc1eb1a2c9",
"assets/assets/images/lock/2.0x/icon.png": "b75bbce7516277ed15e98233738c54be",
"assets/assets/images/lock/3.0x/icon.png": "da14ed1e56dd47c0a688f2e1b94776f8",
"assets/assets/images/lock/4.0x/icon.png": "ce3c1c50dec5bcb86a0ebb69b66e3827",
"assets/assets/images/soccer/icon.png": "e61f1252da5eb7944110088ca8b3a012",
"assets/assets/images/soccer/1.5x/icon.png": "bf7c01f220d85c3b82f3c2bfece89dec",
"assets/assets/images/soccer/2.0x/icon.png": "ee06e15f7896e71bd0ea1481b1da4439",
"assets/assets/images/soccer/3.0x/icon.png": "6ebe56dc3739ac2cd95251a3465a9b60",
"assets/assets/images/soccer/4.0x/icon.png": "1bce2830a61a7b3900cbe9a650c1284e",
"assets/assets/images/user/icon.png": "5c58bee79e168929547ac2edd225d409",
"assets/assets/images/user/1.5x/icon.png": "6c6d860276c705fa156005b926bc02fa",
"assets/assets/images/user/2.0x/icon.png": "cd3fc87d7d7c3cb85b20434f392d0a6f",
"assets/assets/images/user/3.0x/icon.png": "65be85a5f7700bfa6b4c1fdbab646d33",
"assets/assets/images/user/4.0x/icon.png": "037584166a3280a9eed79166f9e75d99",
"assets/assets/images/image/icon.png": "edd0e12b018d5b8157ca5146b5e3d9a8",
"assets/assets/images/image/1.5x/icon.png": "267b71a88a6301c51974c975fc58ae50",
"assets/assets/images/image/2.0x/icon.png": "2942068ed8019e5b515800f770e112cb",
"assets/assets/images/image/3.0x/icon.png": "49e6fd1b8ea225ef2753a7a74c3313b4",
"assets/assets/images/image/4.0x/icon.png": "4203d16b4bf079a12ba2cf14f79625ce",
"assets/assets/images/logo_squared/icon.png": "742762b03caeb0382d7afec8f4e7ad7d",
"assets/assets/images/logo_squared/1.5x/icon.png": "10c1ced280793b27d902c627151b4036",
"assets/assets/images/logo_squared/2.0x/icon.png": "707778d96ceade92e687f03784e6c271",
"assets/assets/images/logo_squared/3.0x/icon.png": "13dc17aff721f1b37c34cf232bed8dd5",
"assets/assets/images/logo_squared/4.0x/icon.png": "c90916b25c6f596ddc2ce33a82774088",
"assets/assets/images/hide/icon.png": "3ffa77c1d4b4e02a2b75b159bb6e9503",
"assets/assets/images/hide/1.5x/icon.png": "f0bde0e79b303653921faed2aefc6524",
"assets/assets/images/hide/2.0x/icon.png": "f10454b3fc94e77defa0883a21c31d66",
"assets/assets/images/hide/3.0x/icon.png": "a6cb7535c3354bdeca9332f246673091",
"assets/assets/images/hide/4.0x/icon.png": "51421131ab94cee8d6d4602c55b08044",
"assets/assets/images/search/icon.png": "00582322d30441e686b3cc4c981da8a6",
"assets/assets/images/search/1.5x/icon.png": "67d911269cfd8caa1656cfa48b38275c",
"assets/assets/images/search/2.0x/icon.png": "2aeb4dcc6b70866e79bef15356aa7080",
"assets/assets/images/search/3.0x/icon.png": "50f72cb67f59f98e1724a3e18d144200",
"assets/assets/images/search/4.0x/icon.png": "dbe7577e811e8f3d3d51b988406bbd7c",
"assets/assets/images/clear/icon.png": "398b1ace1c363f43f9e7887ebac77efa",
"assets/assets/images/clear/1.5x/icon.png": "9be958ef576bcccc0d7e93df7a1048bc",
"assets/assets/images/clear/2.0x/icon.png": "f44218f5e2d4acc8b4f7d8d4152ca49a",
"assets/assets/images/clear/3.0x/icon.png": "c5f267738680fce88806965a0f610e68",
"assets/assets/images/clear/4.0x/icon.png": "042adff3934478a933d61c0ccfa57e11",
"assets/assets/images/pause_player/icon.png": "8194eb8c6bc545ad3a4e7dfc16e037ad",
"assets/assets/images/pause_player/1.5x/icon.png": "076c6537ec00fc94dbc6c89aab48eee7",
"assets/assets/images/pause_player/2.0x/icon.png": "c66574d8c58f44b80a97d1c674238a06",
"assets/assets/images/pause_player/3.0x/icon.png": "bad13d63784c8a5df96907caf60fc800",
"assets/assets/images/pause_player/4.0x/icon.png": "27835c6bdbd08ca5b406bdedc45c9e71",
"assets/assets/images/double_arrow/icon.png": "a110b3927fefdd47a199b6dbe052e8f8",
"assets/assets/images/double_arrow/1.5x/icon.png": "7196d143eac591d76566f13e2a6d171e",
"assets/assets/images/double_arrow/2.0x/icon.png": "df9bb7c600c2d0190170617ae4b7b795",
"assets/assets/images/double_arrow/3.0x/icon.png": "cd963007e3184abab22229d1ef273d65",
"assets/assets/images/double_arrow/4.0x/icon.png": "3a4170fe0e4c5b8d0a181a419c3a5af7",
"assets/assets/images/video_placeholder_small/icon.png": "097c4c93697afcb05dfa4f11e930dfc9",
"assets/assets/images/video_placeholder_small/1.5x/icon.png": "6990e8dca7de06513e4adf551e8ab0d4",
"assets/assets/images/video_placeholder_small/2.0x/icon.png": "732c5cd43c9dae058ceb716cad0ab89e",
"assets/assets/images/video_placeholder_small/3.0x/icon.png": "262be18e467c1bc58dcdc3c19f1a5c2c",
"assets/assets/images/video_placeholder_small/4.0x/icon.png": "e893411a74cd459c5f5c5c1d76146665",
"assets/assets/images/small_player/icon.png": "d295c5783407327bbb1eb739cd0bb483",
"assets/assets/images/small_player/1.5x/icon.png": "8b3015a70d463ba0656b8b95f40e47c7",
"assets/assets/images/small_player/2.0x/icon.png": "c83c8b52912e83e61b3be0f38599559e",
"assets/assets/images/small_player/3.0x/icon.png": "da6f54ad7ffd007e0425a2a8dc142d91",
"assets/assets/images/small_player/4.0x/icon.png": "49929dfd08be4090ae65cd1fcaacb0a5",
"assets/assets/images/live/icon.png": "f7530cf899436e5f21560cf330e1b507",
"assets/assets/images/live/1.5x/icon.png": "8094e12e35564464ac4e6624daa7dbe3",
"assets/assets/images/live/2.0x/icon.png": "e439954326440222b482fba91b22085e",
"assets/assets/images/live/3.0x/icon.png": "08c0bd58cd4577bc1a881e7918bdccb0",
"assets/assets/images/live/4.0x/icon.png": "ed69eee96ff207128a2b0e5a66ac26a0",
"assets/assets/images/no_events/icon.png": "29784abc6e67b125f17c0b808f0ed767",
"assets/assets/images/no_events/1.5x/icon.png": "7567951beff636f7568f6c7c435cb980",
"assets/assets/images/no_events/2.0x/icon.png": "02ae28adb513624c6d746541591c6a55",
"assets/assets/images/no_events/3.0x/icon.png": "d44e4d1fb14ca2cba46ee45ca3824518",
"assets/assets/images/no_events/4.0x/icon.png": "347eeb80f84eb319821c493b4148f04e",
"assets/assets/images/panorama_on/icon.png": "366fccf780bb3cf93dcf1e9cb1626273",
"assets/assets/images/panorama_on/1.5x/icon.png": "e9af87ab0146975f0a0fd98fbd5cb1d9",
"assets/assets/images/panorama_on/2.0x/icon.png": "962630960c1792283caf9e3ce1d52b8c",
"assets/assets/images/panorama_on/3.0x/icon.png": "983dedff75c8caeea37e2508f265580b",
"assets/assets/images/panorama_on/4.0x/icon.png": "da063bd1041c5f1d97d61bdf98d80966",
"assets/assets/images/replay_10_player/icon.png": "d99bbb1f9d7efe13ecf3be43955bacd9",
"assets/assets/images/replay_10_player/1.5x/icon.png": "61cf3a7d88058cb6e9685cb5bfbc4ec5",
"assets/assets/images/replay_10_player/2.0x/icon.png": "a0727fb46f3361fbdf4cbcd7fe4bfa1d",
"assets/assets/images/replay_10_player/3.0x/icon.png": "606b04f18c1f10341addda9d2af7fd32",
"assets/assets/images/replay_10_player/4.0x/icon.png": "78ad01b7a8bd02325c4128eca482458c",
"assets/assets/images/play_player/icon.png": "d49bb9d23cea749e5980fcee5cf5d4b5",
"assets/assets/images/play_player/1.5x/icon.png": "7ddac71fe337c05d65082e8596a6202e",
"assets/assets/images/play_player/2.0x/icon.png": "c56855dadb8c763bbb5646edf508aec1",
"assets/assets/images/play_player/3.0x/icon.png": "857f4ca4a7998d3b3208a996e9f22b88",
"assets/assets/images/play_player/4.0x/icon.png": "384c06106b290ce2c3175fd558a9904d",
"assets/assets/images/replay_badge/icon.png": "83ad3a900bd55882292b6213103cc975",
"assets/assets/images/replay_badge/1.5x/icon.png": "f6c7d099467433467a4487bda3a415b3",
"assets/assets/images/replay_badge/2.0x/icon.png": "e7561c7724fd0eecac5077ce423157c6",
"assets/assets/images/replay_badge/3.0x/icon.png": "bf712236009b10f5f010c0becbed4852",
"assets/assets/images/replay_badge/4.0x/icon.png": "ebcb3ccbd8158e5ca427dead50438fea",
"assets/assets/images/replay/icon.png": "932740b6e303337407b986922079ae7c",
"assets/assets/images/replay/1.5x/icon.png": "77ca4578357134dfb6bc0a7fce74684e",
"assets/assets/images/replay/2.0x/icon.png": "713c673a5c70ce7956960f4b70b853b0",
"assets/assets/images/replay/3.0x/icon.png": "46314d2f1672d2cde154e6acbd476267",
"assets/assets/images/replay/4.0x/icon.png": "0d8c72f297ed49baf8b897713ea8278a",
"assets/assets/images/fullscreen/icon.png": "74f0d86cf16068cace5ccd725a13a47b",
"assets/assets/images/fullscreen/1.5x/icon.png": "f3389c8427bb3ea7ebb70ea567684e79",
"assets/assets/images/fullscreen/2.0x/icon.png": "c5f975337fd6c9afba40a76e13ff29ff",
"assets/assets/images/fullscreen/3.0x/icon.png": "3facfffc078892ad9e296fac915710e4",
"assets/assets/images/fullscreen/4.0x/icon.png": "19cf9997b4ce8f483ce8dc0aa6e72cec",
"assets/assets/images/play_outlined/icon.png": "42cad3ad2dabd06c61d8a596f72ab649",
"assets/assets/images/play_outlined/1.5x/icon.png": "a607506efc5de55d67ef85cee84645ac",
"assets/assets/images/play_outlined/2.0x/icon.png": "4a2a26cb1cf7c52bc1d8bb17048bee7f",
"assets/assets/images/play_outlined/3.0x/icon.png": "e589bdb04b3532147b70a86f2577e75e",
"assets/assets/images/play_outlined/4.0x/icon.png": "a12e161b891a7b039f15f4a4d398fc48",
"assets/assets/images/categories/icon.png": "c2f5f4c63cf10e18a6994cbdee440368",
"assets/assets/images/categories/1.5x/icon.png": "60097eac6c022b9062caf713565fc103",
"assets/assets/images/categories/2.0x/icon.png": "d422a1207aaa7697dd6a1e456b8ac0a7",
"assets/assets/images/categories/3.0x/icon.png": "6f58bf640edd5b99d3dffe6ba0cdc679",
"assets/assets/images/categories/4.0x/icon.png": "8923eeb9145942e0918f7e047479fb05",
"assets/assets/images/event/icon.png": "a30128ddc93c6a7b4a8b64eb916a3327",
"assets/assets/images/event/1.5x/icon.png": "623f55b6fbd2fe00128298ab81bce5f2",
"assets/assets/images/event/2.0x/icon.png": "3f219bfbf1c70ee424ef1c80bbc58ed3",
"assets/assets/images/event/3.0x/icon.png": "f82ed74e3f177b2270ecc9e28454a5b9",
"assets/assets/images/event/4.0x/icon.png": "0d90c74b594b30416fe6fac7ff91d442",
"assets/assets/images/forward_chevron/icon.png": "b56142494088970396f4ddec698ea247",
"assets/assets/images/forward_chevron/1.5x/icon.png": "059102bdec9bc42b1959152db8d93a15",
"assets/assets/images/forward_chevron/2.0x/icon.png": "e0954e6bc3d229050e6edd959fafb5bc",
"assets/assets/images/forward_chevron/3.0x/icon.png": "be8df22105879943d9323679e24bab4a",
"assets/assets/images/forward_chevron/4.0x/icon.png": "01dd40e2d250cdf669073670a14c4ab5",
"assets/assets/images/reminder_off_48x48/icon.png": "aec66c4882f220811412985a1ac055bc",
"assets/assets/images/reminder_off_48x48/1.5x/icon.png": "bd99039057c6d90ca45f8a111ccbd05e",
"assets/assets/images/reminder_off_48x48/2.0x/icon.png": "91722516ed24bfe04b097e5c2f2259ca",
"assets/assets/images/reminder_off_48x48/3.0x/icon.png": "d6ba715778444052caa90ddcb2c91fe0",
"assets/assets/images/reminder_off_48x48/4.0x/icon.png": "ede28f2db48d537c99ca738973330ce4",
"assets/assets/images/forward_10_player/icon.png": "5ce06769d76c6ea97bb0727e7e31a43b",
"assets/assets/images/forward_10_player/1.5x/icon.png": "c20c9423e79f6740c4014ab61234f86d",
"assets/assets/images/forward_10_player/2.0x/icon.png": "2f53d18a980573ecd0c3a17ca85da95b",
"assets/assets/images/forward_10_player/3.0x/icon.png": "2b058541ab91d1a4ad7935b697144201",
"assets/assets/images/forward_10_player/4.0x/icon.png": "5c1170d8638305b693150bea2804c9c2",
"assets/assets/images/forward_arrow/icon.png": "c83b3578b939a8f80558292be3088cd9",
"assets/assets/images/forward_arrow/1.5x/icon.png": "b0dd11c81552c41f9050d0f2e11848a6",
"assets/assets/images/forward_arrow/2.0x/icon.png": "269b3d75bf8d840ab9cd89605e7320aa",
"assets/assets/images/forward_arrow/3.0x/icon.png": "edce256d1f8d49795d0122b476d13ab0",
"assets/assets/images/forward_arrow/4.0x/icon.png": "e435216d81483f948866710fe0e2ffd1",
"assets/assets/fonts/antenna_wgl_light.ttf": "dd0b82d04e63dae57a9f837c2050c3df",
"assets/assets/fonts/antenna_wgl_medium.ttf": "feb2175638b6ff0020f2aa845c7fbb24",
"assets/assets/promo/1/icon.png": "28dc6d2342b921e1093d7b36f55485bd",
"assets/assets/promo/1/1.5x/icon.png": "98ce5261f701eb5fa1feb2f03d9917a3",
"assets/assets/promo/1/2.0x/icon.png": "246066aa0cff473aa51ab734b24ee6f4",
"assets/assets/promo/1/3.0x/icon.png": "7e9b4e2217228867ebfe65f17a75985e",
"assets/assets/promo/1/4.0x/icon.png": "d0dc9d877051d2ce043a2fb0be06e844",
"assets/assets/promo/ekran1.png": "b65a7ad03d8f8f351f20c4acc82b8847",
"assets/assets/promo/ekran3.png": "29356163ec72c81e91b2bc78594f19a0",
"assets/assets/promo/ekran2.png": "d87574fab2f1ca7cefdc3ba66849ec4e",
"assets/assets/promo/4/icon.png": "06862e31beb9d2ffff64d7c58dd88528",
"assets/assets/promo/4/1.5x/icon.png": "2d0267df14b4e4b3049b0e154bb55f92",
"assets/assets/promo/4/2.0x/icon.png": "018ea500ab7f5cd951e951bf62d063e0",
"assets/assets/promo/4/3.0x/icon.png": "d1f16eda1f7cc62e4852a78b65aad24d",
"assets/assets/promo/4/4.0x/icon.png": "27e712af1380078a8bd23d4611bb73d1",
"assets/assets/promo/3/icon.png": "9ef83095a0c31a0b2fbe0d0669c15fea",
"assets/assets/promo/3/1.5x/icon.png": "fb2c2ce3e391db053899ff96bbbfeb21",
"assets/assets/promo/3/2.0x/icon.png": "1945dd4adb66936949fc9d225cd85e00",
"assets/assets/promo/3/3.0x/icon.png": "8035f7f12d84af6f552e215aab28b52c",
"assets/assets/promo/3/4.0x/icon.png": "91a1fbb37a50e76495d5808b0951d3e2",
"assets/assets/promo/2/icon.png": "c76c5be001ec1e60c2fc7abaedab1c08",
"assets/assets/promo/2/1.5x/icon.png": "dbcbf5451ed3893d423843443b864f8d",
"assets/assets/promo/2/2.0x/icon.png": "c9812623fcaca5b7f1576048a6c843eb",
"assets/assets/promo/2/3.0x/icon.png": "1689a495b712e835491cbbf75c2e3005",
"assets/assets/promo/2/4.0x/icon.png": "7284ae5a927616427c34dfa5e8ff0b7f"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
