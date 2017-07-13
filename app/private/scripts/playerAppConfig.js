angular.module("playerApp.config", [])
.constant("config", {"SITE":{"DEFAULT_LANGUAGE":"en"},"URL":{"BASE_PREFIX":"service/","LEARNER_PREFIX":"v1/learner/","CONTENT_PREFIX":"v1/content/","CONFIG_BASE":"http://localhost:4000/api/sb/v1/","PAGE_PREFIX":"page/assemble","USER":{"RESOURCE_BUNDLE":"resourcebundle","SIGNUP":"user/create","UPDATE_USER_PROFILE":"user/update","GET_PROFILE":"user/getprofile"},"COURSE":{"SEARCH":"course/search","CREATE":"course/create","UPDATE":"course/update","REVIEW":"course/review","PUBLISH":"course/publish","GET":"course/get","GET_MY_COURSE":"course/get/mycourse","HIERARCHY":"course/hierarchy","UPLOAD_MEDIA":"upload/media","USER_COURSE_SCHEDULE":"user/courses","USER_CONTENT_STATE":"user/content/state","GET_ENROLLED_COURSES":"user/courses","GET_LEARN_OTHER_SECTION":"Course","ENROLL_USER_COURSE":"user/courses/enroll","RECOMMENDED_COURSE":"course/recommended/courses"},"CONTENT":{"SEARCH":"content/search","CREATE":"content/create","UPDATE":"content/update","REVIEW":"content/review","PUBLISH":"content/publish","GET":"content/read","GET_MY_COURSE":"content/get/mycontent","UPLOAD":"content/upload","UPLOAD_MEDIA":"upload/media","RETIRE":"content/retire"},"AUTH":{"LOGIN":"user/login","LOGOUT":"user/logout"},"NOTES":{"SEARCH":"note/search","CREATE":"note/create","UPDATE":"note/update","GET":"note/read","DELETE":"note/delete"},"RESOURCE":{"GET":"Resource"},"ROLES":{"READ":"role/read"}},"FILTER":{"RESOURCES":{"languages":["Bengali","English","Gujarati","Hindi","Kannada","Marathi","Punjabi","Tamil","Telugu"],"contentTypes":["Story","Worksheet"],"subjects":["Maths","English","Hindi","Assamese","Bengali","Gujarati","Kannada","Malayalam","Marathi","Nepali","Oriya","Punjabi","Tamil","Telugu","Urdu"],"boards":["NCERT","CBSE","ICSE","MSCERT"]}},"MESSAGES":{"AUTH":{"LOGIN":{"FAILED":"invalid username and password"},"LOGOUT":{"FAILED":"Logout failed"}},"NOTES":{"CREATE":{"START":"We are creating note...","FAILED":"Creating note is failed, please try again later...","SUCCESS":"Note created successfully..."},"GET":{"START":"Fetching note detail, please wait...","FAILED":"Fetching note detail is failed, please try again later...","SUCCESS":"Note detail fetched successfully..."},"REMOVE":{"START":"We are removing note...","FAILED":"Removing note is failed, please try again later...","SUCCESS":"Note deleted successfully..."},"SEARCH":{"START":"We are fetching notes...","FAILED":"Fetching note is failed, please try again later...","SUCCESS":"Note detail fetched successfully...","NO_RESULT":"You don't have any note, please create note..."},"UPDATE":{"START":"We are updating note...","FAILED":"Updating note is failed, please try again later...","SUCCESS":"Note updated successfully..."}},"COMMON":{"ERROR":"error","INFO":"info","WARNING":"warning","SUCCESS":"success"},"RESOURCE":{"PAGE":{"START":"We are fetching content...","FAILED":"Fetching content failed, please try again later..."}},"COURSE":{"ENROLLED":{"START":"We are fetching enrolled courses...","FAILED":"Fetching enrolled courses failed, please try again later..."},"PAGE_API":{"START":"We are fetching data...","FAILED":"Fetching other courses failed, please try again later..."},"TOC":{"START":"We are fetching course details...","ERROR":"Unable to get course schedule details."},"ENROLL":{"START":"Enrolling....","ERROR":"Cannot enroll now.Try again later"}},"HOME":{"ENROLLED":{"START":"We are fetching enrolled courses...","FAILED":"Fetching enrolled courses failed, please try again later..."},"PAGE_API":{"START":"We are fetching data...","FAILED":"Fetching other courses failed, please try again later..."}},"PROFILE":{"HEADER":{"START":"We are fetching profile...","FAILED":"Fetching profile failed, please try again later...","UPDATE":"Updating user profile failed,please try again later..."}},"SEARCH":{"COURSE":{"START":"We are fetching profile...","FAILED":"Fetching courses failed, please try again later...","NO_RESULT":"No result found "},"RESOURCE":{"START":"We are fetching profile...","FAILED":"Fetching resources failed, please try again later...","NO_RESULT":"No result found "}},"WORKSPACE":{"DRAFT":{"START":"We are fetching draft content...","FAILED":"Fetching draft content failed, please try again later...","NO_CONTENT":"You have 0 content in draft..."},"CREATE_LESSON":{"START":"We are creating lesson...","FAILED":"Creating lesson failed, please try again later..."},"REVIEW":{"START":"We are fetching review content...","FAILED":"Fetching review content failed, please try again later...","NO_CONTENT":"You have 0 content in review..."},"PUBLISHED":{"START":"We are fetching published content...","FAILED":"Fetching published content failed, please try again later...","NO_CONTENT":"You have 0 published content..."},"ALL_UPLOADED":{"START":"We are fetching uploaded content...","FAILED":"Fetching uploaded content failed, please try again later...","NO_CONTENT":"You have 0 all uploaded content..."},"GET":{"START":"We are fetching content detail...","FAILED":"Fetching content detail failed, please try again later..."},"UPLOAD_ICON":{"START":"We are updating icon...","FAILED":"Updating icon failed, please try again later..."},"UPDATE":{"START":"We are updating content detail...","FAILED":"Updating content detail failed, please try again later..."},"REVIEW_CONTENT":{"START":"We are sending content for review...","FAILED":"Sending content for review failed, please try again later..."},"PUBLISH_CONTENT":{"START":"We are sending content for publish...","FAILED":"Sending content for publish failed, please try again later..."},"RETIRE_CONTENT":{"START":"We are sending content for retire...","FAILED":"Sending content for retire failed, please try again later..."}}},"ekstep_CE_config":{"context":{"content_id":"","sid":"sunbird_sid","baseURL":"","editMetaLink":"","uid":"sunbird_uid","channel":"sunbird_channel","dimension":"sunbird_dims","etags":"etags","user":{"id":"","name":"","email":""}},"config":{"baseURL":"","pluginRepo":"/content-plugins","plugins":[{"id":"org.ekstep.telemetry","ver":"1.0","type":"plugin"},{"id":"org.sunbird.header","ver":"1.0","type":"plugin"},{"id":"org.ekstep.config","ver":"1.0","type":"plugin"},{"id":"org.ekstep.stage","ver":"1.0","type":"plugin"},{"id":"org.ekstep.text","ver":"1.0","type":"plugin"},{"id":"org.ekstep.shape","ver":"1.0","type":"plugin"},{"id":"org.ekstep.image","ver":"1.0","type":"plugin"},{"id":"org.ekstep.audio","ver":"1.0","type":"plugin"},{"id":"org.ekstep.hotspot","ver":"1.0","type":"plugin"},{"id":"org.ekstep.scribblepad","ver":"1.0","type":"plugin"},{"id":"org.ekstep.assessmentbrowser","ver":"1.0","type":"plugin"},{"id":"org.ekstep.quiz","ver":"1.0","type":"plugin"},{"id":"org.ekstep.preview","ver":"1.0","type":"plugin"},{"id":"org.ekstep.assetbrowser","ver":"1.0","type":"plugin"},{"id":"org.ekstep.colorpicker","ver":"1.0","type":"plugin"},{"id":"org.ekstep.stageconfig","ver":"1.0","type":"plugin"},{"id":"org.ekstep.unsupported","ver":"1.0","type":"plugin"},{"id":"org.ekstep.viewecml","ver":"1.0","type":"plugin"},{"id":"org.ekstep.activitybrowser","ver":"1.0","type":"plugin"},{"id":"org.ekstep.download","ver":"1.0","type":"plugin"},{"id":"org.ekstep.collaborator","ver":"1.0","type":"plugin"},{"id":"org.ekstep.readalongbrowser","ver":"1.0","type":"plugin"},{"id":"org.ekstep.wordinfobrowser","ver":"1.0","type":"plugin"},{"id":"org.ekstep.utils","ver":"1.0","type":"plugin"},{"id":"org.ekstep.help","ver":"1.0","type":"plugin"}],"enableCorePlugin":false}},"ekstep_CP_config":{"context":{"authToken":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiI2MzExMTYwNTMzOGY0Zjc5YTgwZTM3YjcyZjVjMmUwZiJ9.azmj_AHmndeJz0h6yIkOJz1XjeZR6Gzd-OrZzR66I0A","mode":"play"},"config":{"showEndPage":true,"showStartPage":true,"host":"https://qa.ekstep.in","apislug":"/api","repos":["/content-plugins/renderer"],"plugins":[{"id":"org.sunbird.iframeEvent","ver":1,"type":"plugin"}]},"baseURL":"/content/preview/preview.html?webview=true"},"DROPDOWN":{"COMMON":{"languages":["Bengali","English","Gujarati","Hindi","Kannada","Marathi","Punjabi","Tamil","Telugu"],"lessonTypes":["Story","Worksheet","Game","Plugin","Template"],"subjects":["Maths","English","Hindi","Assamese","Bengali","Gujarati","Kannada","Malayalam","Marathi","Nepali","Oriya","Punjabi","Tamil","Telugu","Urdu"],"grades":["Kindergarten","Grade 1","Grade 2","Grade 3","Grade 4","Grade 5","Grade 6","Grade 7","Grade 8","Grade 9","Grade 10","Grade 11","Grade 12","Other"],"audiences":["Learner","Instructor"],"ageGroup":["<5","5-6","6-7","7-8","9-10",">10","Other"],"medium":["English","Hindi","Assamese","Bengali","Gujarati","Kannada","Malayalam","Marathi","Nepali","Oriya","Punjabi","Tamil","Telugu","Urdu","Other"],"boards":["NCERT","CBSE","ICSE","MSCERT"]}},"collection_Editor_Config":{"TextBook":{"context":{"uid":"","contentId":"","sid":"0d5b94c87052869b58e47ec692f467cd","channel":"ntp/ap","pdata":{"id":"SunbirdPortal","ver":"1.0"},"dims":["b27e743b51a22b4eed737c6a72cd4266"]},"mode":"Edit","rules":{"levels":3,"objectTypes":[{"type":"TextBook","label":"Textbook","isRoot":true,"editable":true,"childrenTypes":["TextBookUnit"],"addType":"Editor","iconClass":"fa fa-book fa-2"},{"type":"TextBookUnit","label":"Textbook Unit","isRoot":false,"editable":true,"childrenTypes":["TextBookUnit","Collection","Story","Game","Worksheet"],"addType":"Editor","iconClass":"fa fa-folder fa-2"},{"type":"Collection","label":"Collection","isRoot":false,"editable":false,"childrenTypes":[],"addType":"Browser","iconClass":"fa fa-file fa-2"},{"type":"Story","label":"Story","isRoot":false,"editable":false,"childrenTypes":[],"addType":"Browser","iconClass":"fa fa-file fa-2"},{"type":"Worksheet","label":"Worksheet","isRoot":false,"editable":false,"childrenTypes":[],"addType":"Browser","iconClass":"fa fa-file fa-2"},{"type":"Game","label":"Game","isRoot":false,"editable":false,"childrenTypes":[],"addType":"Browser","iconClass":"fa fa-file fa-2"}]},"defaultTemplate":{}},"Collection":{"context":{"uid":"","contentId":"","sid":"0d5b94c87052869b58e47ec692f467cd","channel":"ntp/ap","pdata":{"id":"SunbirdPortal","ver":"1.0"},"dims":["b27e743b51a22b4eed737c6a72cd4266"]},"mode":"Edit","rules":{"levels":3,"objectTypes":[{"type":"Collection","label":"Collection","isRoot":true,"editable":false,"childrenTypes":["Collection","Story","Game","Worksheet"],"addType":"Browser","iconClass":"fa fa-file fa-2"},{"type":"Story","label":"Story","isRoot":false,"editable":false,"childrenTypes":[],"addType":"Browser","iconClass":"fa fa-file fa-2"},{"type":"Worksheet","label":"Worksheet","isRoot":false,"editable":false,"childrenTypes":[],"addType":"Browser","iconClass":"fa fa-file fa-2"},{"type":"Game","label":"Game","isRoot":false,"editable":false,"childrenTypes":[],"addType":"Browser","iconClass":"fa fa-file fa-2"}]},"defaultTemplate":{}}}});
