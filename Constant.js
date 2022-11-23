export const HOME = "Home";
export const ROOM = "Room";
export const SETTING = "Setting";
export const CONFIG = "Configuration";
export const CATEGORIES = "Categories";
export const ROOMS = "Rooms";
export const SMART_HOME = "SmartHome";
export const SHUTTER = "Shutter";
export const LIGHT = "Light";
export const CAMERA = "Camera";
export const LOGIN = "Login";
export const CONNECT = "Connect";
export const FORGOT_PASSWORD = "Forgot";
export const ACTION_BUTTONS = "Buttons";
export const LOGO_TITLE = "HYPERVISU";
export const LOGO_SUB_TITLE = "BY ELAUSYS";
export const CANCEL = "Cancel";
export const USER_LABEL = "User";
export const PASSWORD_LABEL = "Password";
export const PLACEHOLDER_USERNAME = "Cahome";
export const PLACEFOLDER_PASSWORD = "********";
export const PLACEFOLDER_USEREMAIL = "Capicreative@gmail.com";
export const SINGIN_LABEL = "Sign In";
export const SINGIN_DESCIPTION = "Sign in by your ID to access the application.";
export const PASSWORD_FORGOTTEN = "Password Forgotten ?";
export const FORGOT_PASSWORD_LABEL = "Forgot Password";
export const TALK_LABEL = "Talk";
export const FORGOT_PASSWORD_DESCRIPTION = "Please enter your information to receive your password by email.";
export const SEND_EMAIL = "Send by email";
export const EMAIL = "Email";
export const DONE = "Done";
export const OPEN_CONFIGURATION = "Open Configuration";
export const SERVER = "Server";
export const CONFIGURATION = "Configuration";

export const ACTION_TURN_ON = "TurnOn";
export const ACTION_TURN_OFF = "TurnOff";
export const ACTION_ARROW_DOWN = "ArrowDown";
export const ACTION_ARROW_UP = "ArrowUp";
export const ACTION_MINUS = "Minus";
export const ACTION_PLUS = "Plus";
export const ACTION_ARROW_LEFT = "ArrowLeft";
export const ACTION_HEART = "Heart";
export const ACTION_CLOCK = "Clock";
export const ACTION_MENU_LIST = "MenuList";
export const ACTION_MORE_DETAIL = "MoreDetail";
export const ACTION_EDIT_BUTTON = "EditButton";
export const ACTION_CIRECLE_PLUS = "CireclePlus";
export const ACTION_SOUND_VOLUME = "SoundVolume";
export const ACTION_PAUSE_BUTTON = "PauseButton";
export const ACTION_LOGOUT_BUTTON = "LogoutButton";
export const ACTION_TALK_BUTTON = "TalkButton";
export const ACTION_OPTION_BUTTON = "OptionButton";
export const ACTION_REC_SWITCH_BUTTON = "RecSwithButton";
export const ACTION_CIR_SWITCH_BUTTON = "CirSwithButton";

// Temp data

export const SETTING_DATA = [
    { name: 'Notifications' },
    { name: 'Background Color' },
    { name: 'Widget Background' },
    { name: 'Text Color' },
    { name: 'Icons Color' },
    { name: 'Active Color' },
];

export const CONFIG_DATA = [
    {
        name: 'Server S/N',
        info: 'XXXXXXXXXX'
    },
    {
        name: 'Server Ver.',
        info: '1.3.1'
    },
    {
        name: 'Min. App. Ver.',
        info: '1.0.0'
    },
    {
        name: 'API Ver.',
        info: '1.0.0'
    }
];

export const ACCESS = "Access";
export const AUDIO = "Audio";
export const CONTROL = "Control";
export const ENERGY = "Energy";
export const LIGHTING = "Lighting";
export const CLIMATE = "Climate";
export const CAMERA_MONITORING = "Camera/Monitoring";
export const ALARM_CLOCK = "Alarm Clock";
export const SAFETY_SECURITY = "Safety&Security";
export const NEWS = "News";

export const CATEGORY_DATA = [
    {
        title: 'Access',
        imgUrl: require('./assets/images/categories/access.png'),
        category: SHUTTER
    },
    {
        title: 'Audio',
        imgUrl: require('./assets/images/categories/audio.png'),
        path: SHUTTER
    },
    {
        title: 'Control',
        imgUrl: require('./assets/images/categories/control.png'),
        path: SHUTTER
    },
    {
        title: 'Energy',
        imgUrl: require('./assets/images/categories/energy.png'),
        path: SHUTTER
    },
    {
        title: 'lightning',
        imgUrl: require('./assets/images/categories/lightning.png'),
        path: LIGHT
    },
    {
        title: 'Shutter',
        imgUrl: require('./assets/images/categories/shutter.png'),
        path: SHUTTER
    },
    {
        title: 'Climate',
        imgUrl: require('./assets/images/categories/climate.png'),
        path: SHUTTER
    },
    {
        title: 'Camera/Monitoring',
        imgUrl: require('./assets/images/categories/camera-monitoring.png'),
        path: CAMERA
    },
    {
        title: 'Alarm Clock',
        imgUrl: require('./assets/images/categories/alarm-clock.png'),
        path: SHUTTER
    },
    {
        title: 'Safety & Security',
        imgUrl: require('./assets/images/categories/alert.png'),
        path: SHUTTER
    },
    {
        title: 'News',
        imgUrl: require('./assets/images/categories/news.png'),
        path: SHUTTER
    },
];

export const BEDROOM = "Bedroom";
export const BATHROOM = "Bathroom";
export const GARAGE = "Garage";
export const KITCHEN = "Kitchen";
export const STUDY = "Study";
export const BASEMENT = "Basement";
export const OUTSIDE = "Outside";
export const HALLWAY = "Hallway";
export const LIVING_ROOM = "Living Room";
export const SARAH_DEDROOM = "Sarah Redroom";

export const ROOMS_DATA = [
    {
        room: 'Bedroom',
        imgUrl: require('./assets/images/rooms/bedroom.png')
    },
    {
        room: 'Bathroom',
        imgUrl: require('./assets/images/rooms/bathroom.png')
    },
    {
        room: 'Garage',
        imgUrl: require('./assets/images/rooms/garage.png')
    },
    {
        room: 'Kitchen',
        imgUrl: require('./assets/images/rooms/kitchen.png')
    },
    {
        room: 'Study',
        imgUrl: require('./assets/images/rooms/study.png')
    },
    {
        room: 'Basement',
        imgUrl: require('./assets/images/rooms/basement.png')
    },
    {
        room: 'Outside',
        imgUrl: require('./assets/images/rooms/outside.png')
    },
    {
        room: 'Hallway',
        imgUrl: require('./assets/images/rooms/hallway.png')
    },
    {
        room: 'Living Room',
        imgUrl: require('./assets/images/rooms/living-room.png')
    },
    {
        room: 'Sarah Bedroom',
        imgUrl: require('./assets/images/rooms/sarah-bedroom.png')
    },
];

export const FAVORITE_ROOMS_DATA = [
    {
        room: 'Laundry',
        imgUrl: require('./assets/images/laundry.png'),
        bgColor: '#2F2F31',
        textColor: '#FFFFFF'
    },
    {
        room: 'Kitchen',
        imgUrl: require('./assets/images/kitchen.png'),
        bgColor: '#2F2F31',
        textColor: '#FFFFFF'
    },
    {
        room: 'Main Bedroom',
        imgUrl: require('./assets/images/bed.png'),
        bgColor: '#FFFFFF',
        textColor: '#000000'
    }
];

export const FAVORITE_CATEGORY_DATA = [
    {
        title: 'Lightning',
        imgMainUrl: require('./assets/images/favorite_category/lamp.png'),
        bgColor: '#FFFFFF',
        textColor: '#000000',
        imgUpUrl: '',
    },
    {
        title: 'Climate',
        imgMainUrl: require('./assets/images/favorite_category/thermometer.png'),
        bgColor: '#2F2F31',
        textColor: '#FFFFFF',
        imgUpUrl: require('./assets/images/favorite_category/timer.png'),
    },
    {
        title: 'Shutter',
        imgMainUrl: require('./assets/images/favorite_category/blinds.png'),
        bgColor: '#2F2F31',
        textColor: '#FFFFFF',
        imgUpUrl: require('./assets/images/favorite_category/uparrow.png'),
        imgDownUrl: require('./assets/images/favorite_category/downarrow.png')
    }
];

export const UPARROW = require('./assets/images/favorite_category/uparrow.png');
export const DOWNARROW = require('./assets/images/favorite_category/downarrow.png');
export const ELLIPSE = require('./assets/images/favorite_category/ellipse.png');
export const RECT = require('./assets/images/favorite_category/rect.png');
export const NUMBER08 = require('./assets/images/favorite_category/08.png');
export const NUMBER69 = require('./assets/images/favorite_category/69.png');
export const LAMP = require('./assets/images/favorite_category/lamp-white.png');
export const BLINDS_WHITE = require('./assets/images/favorite_category/blinds-white.png');
export const TIMER = require('./assets/images/favorite_category/timer.png');
export const LAMP_WHITE = require('./assets/images/favorite_category/lamp-white.png');
export const STAIRE = require('./assets/images/favorite_category/staire.png');
export const DIMMER = require('./assets/images/room/dimmer.png');

export const SHUTTER_AMAND = [
    {
        title: 'Shutter/Blind',
        bottomTitle: '60',
        imgMainUrl: require('./assets/images/room/shutter.png'),
        imgLeftUrl: require('./assets/images/room/uparrow.png'),
        imgCenterUrl: require('./assets/images/room/checkbox.png'),
        imgRightUrl: require('./assets/images/room/downarrow.png')
    },
    {
        title: 'Shutter/Blind',
        bottomTitle: '60',
        imgMainUrl: require('./assets/images/room/shutter.png'),
        imgLeftUrl: require('./assets/images/room/uparrow.png'),
        imgCenterUrl: require('./assets/images/room/checkbox.png'),
        imgRightUrl: require('./assets/images/room/downarrow.png')
    }
];

export const SHUTTER_DAMON = [
    {
        title: 'Shutter/Blind',
        bottomTitle: '60',
        imgMainUrl: require('./assets/images/room/shutter.png'),
        imgLeftUrl: require('./assets/images/room/uparrow.png'),
        imgCenterUrl: require('./assets/images/room/checkbox.png'),
        imgRightUrl: require('./assets/images/room/downarrow.png')
    },
    {
        title: 'Shutter/Blind',
        bottomTitle: '60',
        imgMainUrl: require('./assets/images/room/shutter.png'),
        imgLeftUrl: require('./assets/images/room/uparrow.png'),
        imgCenterUrl: require('./assets/images/room/checkbox.png'),
        imgRightUrl: require('./assets/images/room/downarrow.png')
    },
    {
        title: 'Shutter/Blind',
        bottomTitle: '60',
        imgMainUrl: require('./assets/images/room/shutter.png'),
        imgLeftUrl: require('./assets/images/room/uparrow.png'),
        imgCenterUrl: require('./assets/images/room/checkbox.png'),
        imgRightUrl: require('./assets/images/room/downarrow.png')
    },
    {
        title: 'Shutter/Blind',
        bottomTitle: '60',
        imgMainUrl: require('./assets/images/room/shutter.png'),
        imgLeftUrl: require('./assets/images/room/uparrow.png'),
        imgCenterUrl: require('./assets/images/room/checkbox.png'),
        imgRightUrl: require('./assets/images/room/downarrow.png')
    }
];

export const LIGHT_DAMONROOM = [
    {
        title: 'On/Off Switch',
        imgMainUrl: require('./assets/images/room/lamp.png'),
        flagButton: 'on/off',
        flagSlider: false
    },
    {
        title: 'On/Off Switch',
        imgMainUrl: require('./assets/images/room/lamp.png'),
        flagButton: 'on/off',
        flagSlider: false
    },
    {
        title: 'On/Off Switch',
        bottomTitle: '70',
        imgMainUrl: require('./assets/images/room/dimmer.png'),
        flagButton: 'on/off',
        flagSlider: true
    }
];

export const LIGHT_BATHROOM = [
    {
        title: 'Push Button',
        imgMainUrl: require('./assets/images/room/dimmer.png'),
        flagButton: 'push',
        flagSlider: false
    },
    {
        title: 'Push Button',
        imgMainUrl: require('./assets/images/room/dimmer.png'),
        flagButton: 'push',
        flagSlider: false
    },
    {
        title: 'RGB Dimmer01',
        bottomTitle: '70',
        imgMainUrl: require('./assets/images/room/dimmer.png'),
        flagButton: 'on/off',
        flagSlider: true
    }
];

export const CAMERA_IMAGE = require('./assets/images/camera/camera-bitmap.png');
export const CAMERA_RED = require('./assets/images/camera/red.png');
export const CAMERA_GREEN = require('./assets/images/camera/green.png');

export const FAVORITE_DATA = [
    {
        title: 'Music',
        imgMainUrl: require('./assets/images/room/music.png'),
        bgColor: '#2F2F31',
        textColor: '#FFFFFF',
        imgUpUrl: require('./assets/images/room/plus.png'),
        imgDownUrl: require('./assets/images/room/minus.png')
    },
    {
        title: 'Climate',
        imgMainUrl: require('./assets/images/room/climate.png'),
        bgColor: '#2F2F31',
        textColor: '#FFFFFF',
        imgUpUrl: require('./assets/images/room/timer.png'),
    },
    {
        title: 'Shutter',
        imgMainUrl: require('./assets/images/room/shutter.png'),
        bgColor: '#2F2F31',
        textColor: '#FFFFFF',
        imgUpUrl: require('./assets/images/room/uparrow.png'),
        imgDownUrl: require('./assets/images/room/downarrow.png')
    }
];

export const SHUTTER_BLINDS_DATA = [
    {
        title: 'Shutter/Blind',
        percentValue: '60',
        imgMainUrl: require('./assets/images/room/shutter.png'),
        imgLeftUrl: require('./assets/images/room/uparrow.png'),
        imgRightUrl: require('./assets/images/room/downarrow.png'),
        imgCenterUrl: require('./assets/images/room/checkbox.png')
    }
];

// Screen Names for unavailable Footer
export const HIDE_FOOTER_SCREENS = [CONNECT, LOGIN];

export const FOOTER_NAV_BAR = {
    [HOME]: {
        icon: "home",
        tab: HOME
    },
    [ROOMS]: {
        icon: "cube",
        tab: ROOMS
    },
    [CATEGORIES]: {
        icon: "th-large",
        tab: CATEGORIES
    },
    [SETTING]: {
        icon: "cog",
        tab: SETTING
    },
}