let constants = {};

constants.ITEMS_ON_PAGE = 20;
constants.GOOGLE_API_KEY = "AIzaSyA_V9TYNDKQPdebsUZT8uoy-bo6hbdtv58";
constants.TOKEN_SECRET = "3sOydNR2M4fwc1fRwcPg1RhqhBrGi8jiqclMLMyu";

/*// Models to delete
constants.DELETE = {
    ADMIN: 1,
    CONTRACTOR: 2,
    INSPECTOR: 3,
    SITE: 4,
    PROJECT: 5,
    MUNI: 6,
    MAIN_SITE: 7,
    QUESTIONNAIRE: 8,
    MUNI_TYPE: 101,
    MUNI_GLOBAL_GEO_POINT: 102,
    MUNI_LOCAL_GEO_POINT: 103,
    SITE_CATEGORY: 104,
    SITE_SUB_CATEGORY: 105,
    ADMIN_GROUP: 106
};

constants.MODEL = {
    ADMIN: 1,
    QUESTIONNAIRE: 2,
    MUNI: 3
};*/

constants.MODELS = {
    ADMIN: 1,
    QUESTIONNAIRE: 2,
    PROJECT: 3,
    MUNI: 4,
    MAIN_SITE: 5,
    SUB_SITE: 6,
    ADMIN_GROUP: 7,
    ADVISER_COMPANY: 8,

    MUNI_GLOBAL_GEO_POINT: 101,
    MUNI_LOCAL_GEO_POINT: 102,
    SITE_CATEGORY: 103,
    SITE_SUB_CATEGORY: 104
};

// Admin types
constants.USER = {
    ADMIN: 1,
    MANAGER_MASHKAL: 2,
    MANAGER_PROJECT: 3,
    MANAGER_MUNI: 4,
    MANAGER_CONTRACTOR: 5,
    ADVISER: 6,
    COORDINATOR: 7,
    INSPECTOR_MASHKAL: 8,
    INSPECTOR_ADVISER: 9,
    INSPECTOR_CONTRACTOR: 10,
    INSPECTOR_MUNI: 11,
    CONTACT: 12,
    CONTRACTOR: 13
};

constants.EN_ADMIN_TYPE_ARRAY = ["", "admin", "manager_mashkal", "manager_project", "manager_muni", "manager_contractor", "advisor", "coordinator", "inspector_maskal", "inspector_adviser", "inspector_contractor", "inspector_muni", "contact_person", "contractor"];
constants.HE_ADMIN_TYPE_ARRAY = ["", "אדמין", "מנהל משכל", "משכל - מנהל פרוייקט", "מנהל רשות", "מנהל קבלן", "יועץ", "רכז", "מפקח משקל", "מפקח יועץ", "מפקח קבלן", "מפקח רשות", "איש קשר", "קבלן"];
//constants.ADMIN_TYPE = {};

constants.SITE_SUB_CATEGORY = {
    KINDERGARTEN: 1,
    ELEMENTARY_SCHOOL: 2,
    SCHOOL_DIVISION: 3,
    HIGH_SCHOOL: 4
};

constants.TOKEN = {
    TWO_DAYS: "2 days"
};

constants.TOKEN_ACTION = {
    NEW_ADMIN: 1,
    RESTORE_PASSWORD: 2
};

module.exports = constants;