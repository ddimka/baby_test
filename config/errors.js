var errors = {};

errors.NOT_FOUND =                               {code: 0, message: "Page not found"};
errors.VALIDATION_ERROR =                        {code: 1, message: "Validation error"};
errors.REQUEST_HEADERS_MISSING =                 {code: 2, message: "Headers missing"};
errors.WRONG_TOKEN =                             {code: 3, message: "Wrong token"};
errors.ERROR_UPLOADING_IMAGE_TO_SERVER =         {code: 4, message: "Error uploading file to server"};
errors.ERROR_UPLOADING_IMAGE_TO_AMAZON =         {code: 5, message: "Error uploading file to Amazon S3"};
errors.ERROR_PASSWORD_CRYPT =                    {code: 6, message: "Error crypt password"};
errors.ADMIN_GROUP_NOT_EMPTY =                   {code: 7, message: "There are users in admin group"};
errors.ERROR_SENDING_EMAIL =                     {code: 8, message: "Error sending email"};
errors.ERROR_GETTING_COORDINATES =               {code: 9, message: "Error getting coordinates"};
errors.ERROR_DELETING_TEMP_FILE =                {code: 10, message: "Error deleting temporary file"};


//Server errors
errors.SERVER_ERROR_READING_FROM_DATABASE =      {code: 100, message: "Server reading error"};
errors.SERVER_ERROR_SAVING_TO_DATABASE =         {code: 101, message: "Server saving error"};
errors.SERVER_ERROR_UPDATING =                   {code: 102, message: "Server updating error"};
errors.SERVER_ERROR_DELETING =                   {code: 103, message: "Server deleting error"};

//Required
errors.IMAGE_REQUIRED =                          {code: 200, message: "Image file required"};
errors.DOCUMENT_REQUIRED =                       {code: 201, message: "Document file required"};
errors.SEARCH_GROUP_BY_PARAM_REQUIRED =          {code: 202, message: "Search field required"};
errors.QUESTIONNAIRE_UPDATE_STATUS =             {code: 203, message: "Questionnaire update status required"};
errors.EMAIL_REQUIRED =                          {code: 204, message: "Email required"};

// Already exists
errors.ADMIN_ALREADY_EXISTS =                    {code: 300, message: "Admin already exists"};
errors.SITE_ALREADY_EXISTS =                     {code: 301, message: "Site already exists"};
errors.PROJECT_ALREADY_EXISTS =                  {code: 302, message: "Project already exists"};
errors.MUNI_ALREADY_EXISTS =                     {code: 303, message: "Municipality already exists"};
errors.QUESTIONNAIRE_ALREADY_EXISTS =            {code: 304, message: "Questionnaire already exists"};
errors.ADMIN_GROUP_ALREADY_EXISTS =              {code: 305, message: "Admin group already exists"};
errors.ENTERPRISE_ALREADY_EXISTS =               {code: 306, message: "Enterprise already exists"};
errors.MUNI_GLOBAL_GEO_POINT_ALREADY_EXISTS =    {code: 307, message: "Municipality global geo point already exists"};
errors.MUNI_LOCAL_GEO_POINT_ALREADY_EXISTS =     {code: 308, message: "Municipality local geo point already exists"};
errors.ADVISER_COMPANY_ALREADY_EXISTS =          {code: 309, message: "Adviser company already exists"};

// Not exists
errors.ADMIN_NOT_EXISTS =                        {code: 400, message: "Admin not exists"};
errors.SITE_NOT_EXISTS =                         {code: 401, message: "Site not exists"};
errors.PROJECT_NOT_EXISTS =                      {code: 402, message: "Project not exists"};
errors.MUNI_NOT_EXISTS =                         {code: 403, message: "Municipality not exists"};
errors.QUESTIONNAIRE_NOT_EXISTS =                {code: 404, message: "Questionnaire not exists"};
errors.ADMIN_GROUP_NOT_EXISTS =                  {code: 405, message: "Admin group not exists"};
errors.ENTERPRISE_NOT_EXISTS =                   {code: 406, message: "Enterprise group not exists"};
errors.MUNI_GLOBAL_GEO_POINT_NOT_EXISTS =        {code: 407, message: "Municipality global geo point not exists"};
errors.MUNI_LOCAL_GEO_POINT_NOT_EXISTS =         {code: 408, message: "Municipality local geo point not exists"};
errors.NO_SETTINGS =                             {code: 409, message: "No settings"};
errors.NO_LOGS =                                 {code: 410, message: "No logs"};
errors.NO_TOKEN =                                {code: 411, message: "No token"};
errors.NO_ADVISER_COMPANY =                      {code: 412, message: "No adviser company"};


// Password
errors.PASSWORD_ERROR_CHECKING =                 {code: 500, message: "Can't check password"};
errors.PASSWORD_IS_WRONG =                       {code: 501, message: "Wrong password"};
errors.PASSWORD_EMPTY_FIRST_TIME =               {code: 502, message: "No password. First login. Please create password"};
errors.PASSWORD_ALREADY_SET =                    {code: 503, message: "Password already set. Use change password api"};

// Permissions
errors.NO_PERMISSION =                           {code: 600, message: "Wrong permission object"};
errors.NO_PERMISSION_TO_USE_WEB =                {code: 601, message: "No permissions to use dashboard"};
errors.NO_PERMISSION_TO_USE_MOBILE =             {code: 602, message: "No permissions to use mobile app"};
errors.NO_PERMISSION_TO_IMPORT =                 {code: 603, message: "No permissions to import"};

//Admin permissions
errors.NO_PERMISSION_TO_CREATE_ADMIN =           {code: 610, message: "No permission to create admin"};
errors.NO_PERMISSION_TO_UPDATE_ADMIN =           {code: 611, message: "No permission to update admin"};
errors.NO_PERMISSION_TO_READ_ADMIN =             {code: 612, message: "No permission to get admin"};
errors.NO_PERMISSION_TO_DELETE_ADMIN =           {code: 613, message: "No permission to delete admin"};

//Enterprise permissions
errors.NO_PERMISSION_TO_CREATE_ENTERPRISE =      {code: 620, message: "No permission to create enterprise"};
errors.NO_PERMISSION_TO_UPDATE_ENTERPRISE =      {code: 621, message: "No permission to update enterprise"};
errors.NO_PERMISSION_TO_READ_ENTERPRISE =        {code: 622, message: "No permission to get enterprise"};
errors.NO_PERMISSION_TO_DELETE_ENTERPRISE =      {code: 623, message: "No permission to delete enterprise"};

//Project permissions
errors.NO_PERMISSION_TO_CREATE_PROJECT =         {code: 630, message: "No permission to create project"};
errors.NO_PERMISSION_TO_UPDATE_PROJECT =         {code: 631, message: "No permission to update project"};
errors.NO_PERMISSION_TO_READ_PROJECT =           {code: 632, message: "No permission to get project"};
errors.NO_PERMISSION_TO_DELETE_PROJECT =         {code: 633, message: "No permission to delete project"};

//Muni permissions
errors.NO_PERMISSION_TO_CREATE_MUNI =            {code: 640, message: "No permission to create municipality"};
errors.NO_PERMISSION_TO_UPDATE_MUNI =            {code: 641, message: "No permission to update municipality"};
errors.NO_PERMISSION_TO_READ_MUNI =              {code: 642, message: "No permission to get municipality"};
errors.NO_PERMISSION_TO_DELETE_MUNI =            {code: 643, message: "No permission to delete municipality"};

//Questionnaire permissions
errors.NO_PERMISSION_TO_CREATE_QUESTIONNAIRE =   {code: 650, message: "No permission to create questionnaire"};
errors.NO_PERMISSION_TO_UPDATE_QUESTIONNAIRE =   {code: 651, message: "No permission to update questionnaire"};
errors.NO_PERMISSION_TO_READ_QUESTIONNAIRE =     {code: 652, message: "No permission to get questionnaire"};
errors.NO_PERMISSION_TO_DELETE_QUESTIONNAIRE =   {code: 653, message: "No permission to delete questionnaire"};

//Site permissions
errors.NO_PERMISSION_TO_CREATE_SITE =            {code: 660, message: "No permission to create site"};
errors.NO_PERMISSION_TO_UPDATE_SITE =            {code: 661, message: "No permission to update site"};
errors.NO_PERMISSION_TO_READ_SITE =              {code: 662, message: "No permission to get site"};
errors.NO_PERMISSION_TO_DELETE_SITE =            {code: 663, message: "No permission to delete site"};

//Adviser company permissions
errors.NO_PERMISSION_TO_CREATE_ADVISER_COMPANY = {code: 670, message: "No permission to create adviser company"};
errors.NO_PERMISSION_TO_UPDATE_ADVISER_COMPANY = {code: 671, message: "No permission to update adviser company"};
errors.NO_PERMISSION_TO_READ_ADVISER_COMPANY =   {code: 672, message: "No permission to get adviser company"};
errors.NO_PERMISSION_TO_DELETE_ADVISER_COMPANY = {code: 673, message: "No permission to delete adviser company"};

module.exports = errors;