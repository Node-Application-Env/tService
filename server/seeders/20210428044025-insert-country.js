"use strict";

export async function up(queryInterface, Sequelize) {
  return queryInterface.bulkInsert('countryMasters', 
    [
      { 'shortName' : 'AF', 'name' : 'Afghanistan', 'countrycode' : 93, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'AL', 'name' : 'Albania', 'countrycode' : 355, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'DZ', 'name' : 'Algeria', 'countrycode' : 213, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'AS', 'name' : 'American Samoa', 'countrycode' : 1684, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'AD', 'name' : 'Andorra', 'countrycode' : 376, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'AO', 'name' : 'Angola', 'countrycode' : 244, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'AI', 'name' : 'Anguilla', 'countrycode' : 1264, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'AQ', 'name' : 'Antarctica', 'countrycode' : 0, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'AG', 'name' : 'Antigua And Barbuda', 'countrycode' : 1268, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'AR', 'name' : 'Argentina', 'countrycode' : 54, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'AM', 'name' : 'Armenia', 'countrycode' : 374, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'AW', 'name' : 'Aruba', 'countrycode' : 297, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'AU', 'name' : 'Australia', 'countrycode' : 61, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'AT', 'name' : 'Austria', 'countrycode' : 43, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'AZ', 'name' : 'Azerbaijan', 'countrycode' : 994, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'BS', 'name' : 'Bahamas The', 'countrycode' : 1242, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'BH', 'name' : 'Bahrain', 'countrycode' : 973, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'BD', 'name' : 'Bangladesh', 'countrycode' : 880, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'BB', 'name' : 'Barbados', 'countrycode' : 1246, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'BY', 'name' : 'Belarus', 'countrycode' : 375, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'BE', 'name' : 'Belgium', 'countrycode' : 32, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'BZ', 'name' : 'Belize', 'countrycode' : 501, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'BJ', 'name' : 'Benin', 'countrycode' : 229, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'BM', 'name' : 'Bermuda', 'countrycode' : 1441, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'BT', 'name' : 'Bhutan', 'countrycode' : 975, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'BO', 'name' : 'Bolivia', 'countrycode' : 591, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'BA', 'name' : 'Bosnia and Herzegovina', 'countrycode' : 387, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'BW', 'name' : 'Botswana', 'countrycode' : 267, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'BV', 'name' : 'Bouvet Island', 'countrycode' : 0, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'BR', 'name' : 'Brazil', 'countrycode' : 55, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'IO', 'name' : 'British Indian Ocean Territory', 'countrycode' : 246, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'BN', 'name' : 'Brunei', 'countrycode' : 673, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'BG', 'name' : 'Bulgaria', 'countrycode' : 359, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'BF', 'name' : 'Burkina Faso', 'countrycode' : 226, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'BI', 'name' : 'Burundi', 'countrycode' : 257, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'KH', 'name' : 'Cambodia', 'countrycode' : 855, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'CM', 'name' : 'Cameroon', 'countrycode' : 237, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'CA', 'name' : 'Canada', 'countrycode' : 1, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'CV', 'name' : 'Cape Verde', 'countrycode' : 238, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'KY', 'name' : 'Cayman Islands', 'countrycode' : 1345, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'CF', 'name' : 'Central African Republic', 'countrycode' : 236, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'TD', 'name' : 'Chad', 'countrycode' : 235, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'CL', 'name' : 'Chile', 'countrycode' : 56, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'CN', 'name' : 'China', 'countrycode' : 86, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'CX', 'name' : 'Christmas Island', 'countrycode' : 61, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'CC', 'name' : 'Cocos (Keeling) Islands', 'countrycode' : 672, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'CO', 'name' : 'Colombia', 'countrycode' : 57, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'KM', 'name' : 'Comoros', 'countrycode' : 269, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'CG', 'name' : 'Republic Of The Congo', 'countrycode' : 242, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'CD', 'name' : 'Democratic Republic Of The Congo', 'countrycode' : 242, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'CK', 'name' : 'Cook Islands', 'countrycode' : 682, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'CR', 'name' : 'Costa Rica', 'countrycode' : 506, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'CI', 'name' : "Cote D''Ivoire (Ivory Coast)", 'countrycode' : 225, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'HR', 'name' : 'Croatia (Hrvatska)', 'countrycode' : 385, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'CU', 'name' : 'Cuba', 'countrycode' : 53, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'CY', 'name' : 'Cyprus', 'countrycode' : 357, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'CZ', 'name' : 'Czech Republic', 'countrycode' : 420, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'DK', 'name' : 'Denmark', 'countrycode' : 45, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'DJ', 'name' : 'Djibouti', 'countrycode' : 253, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'DM', 'name' : 'Dominica', 'countrycode' : 1767, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'DO', 'name' : 'Dominican Republic', 'countrycode' : 1809, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'TP', 'name' : 'East Timor', 'countrycode' : 670, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'EC', 'name' : 'Ecuador', 'countrycode' : 593, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'EG', 'name' : 'Egypt', 'countrycode' : 20, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'SV', 'name' : 'El Salvador', 'countrycode' : 503, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'GQ', 'name' : 'Equatorial Guinea', 'countrycode' : 240, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'ER', 'name' : 'Eritrea', 'countrycode' : 291, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'EE', 'name' : 'Estonia', 'countrycode' : 372, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'ET', 'name' : 'Ethiopia', 'countrycode' : 251, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'XA', 'name' : 'External Territories of Australia', 'countrycode' : 61, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'FK', 'name' : 'Falkland Islands', 'countrycode' : 500, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'FO', 'name' : 'Faroe Islands', 'countrycode' : 298, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'FJ', 'name' : 'Fiji Islands', 'countrycode' : 679, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'FI', 'name' : 'Finland', 'countrycode' : 358, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'FR', 'name' : 'France', 'countrycode' : 33, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'GF', 'name' : 'French Guiana', 'countrycode' : 594, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'PF', 'name' : 'French Polynesia', 'countrycode' : 689, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'TF', 'name' : 'French Southern Territories', 'countrycode' : 0, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'GA', 'name' : 'Gabon', 'countrycode' : 241, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'GM', 'name' : 'Gambia The', 'countrycode' : 220, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'GE', 'name' : 'Georgia', 'countrycode' : 995, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'DE', 'name' : 'Germany', 'countrycode' : 49, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'GH', 'name' : 'Ghana', 'countrycode' : 233, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'GI', 'name' : 'Gibraltar', 'countrycode' : 350, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'GR', 'name' : 'Greece', 'countrycode' : 30, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'GL', 'name' : 'Greenland', 'countrycode' : 299, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'GD', 'name' : 'Grenada', 'countrycode' : 1473, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'GP', 'name' : 'Guadeloupe', 'countrycode' : 590, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'GU', 'name' : 'Guam', 'countrycode' : 1671, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'GT', 'name' : 'Guatemala', 'countrycode' : 502, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'XU', 'name' : 'Guernsey and Alderney', 'countrycode' : 44, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'GN', 'name' : 'Guinea', 'countrycode' : 224, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'GW', 'name' : 'Guinea-Bissau', 'countrycode' : 245, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'GY', 'name' : 'Guyana', 'countrycode' : 592, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'HT', 'name' : 'Haiti', 'countrycode' : 509, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'HM', 'name' : 'Heard and McDonald Islands', 'countrycode' : 0, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'HN', 'name' : 'Honduras', 'countrycode' : 504, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'HK', 'name' : 'Hong Kong S.A.R.', 'countrycode' : 852, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'HU', 'name' : 'Hungary', 'countrycode' : 36, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'IS', 'name' : 'Iceland', 'countrycode' : 354, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'IN', 'name' : 'India', 'countrycode' : 91, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'ID', 'name' : 'Indonesia', 'countrycode' : 62, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'IR', 'name' : 'Iran', 'countrycode' : 98, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'IQ', 'name' : 'Iraq', 'countrycode' : 964, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'IE', 'name' : 'Ireland', 'countrycode' : 353, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'IL', 'name' : 'Israel', 'countrycode' : 972, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'IT', 'name' : 'Italy', 'countrycode' : 39, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'JM', 'name' : 'Jamaica', 'countrycode' : 1876, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'JP', 'name' : 'Japan', 'countrycode' : 81, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'XJ', 'name' : 'Jersey', 'countrycode' : 44, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'JO', 'name' : 'Jordan', 'countrycode' : 962, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'KZ', 'name' : 'Kazakhstan', 'countrycode' : 7, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'KE', 'name' : 'Kenya', 'countrycode' : 254, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'KI', 'name' : 'Kiribati', 'countrycode' : 686, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'KP', 'name' : 'Korea North', 'countrycode' : 850, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'KR', 'name' : 'Korea South', 'countrycode' : 82, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'KW', 'name' : 'Kuwait', 'countrycode' : 965, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'KG', 'name' : 'Kyrgyzstan', 'countrycode' : 996, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'LA', 'name' : 'Laos', 'countrycode' : 856, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'LV', 'name' : 'Latvia', 'countrycode' : 371, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'LB', 'name' : 'Lebanon', 'countrycode' : 961, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'LS', 'name' : 'Lesotho', 'countrycode' : 266, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'LR', 'name' : 'Liberia', 'countrycode' : 231, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'LY', 'name' : 'Libya', 'countrycode' : 218, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'LI', 'name' : 'Liechtenstein', 'countrycode' : 423, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'LT', 'name' : 'Lithuania', 'countrycode' : 370, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'LU', 'name' : 'Luxembourg', 'countrycode' : 352, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'MO', 'name' : 'Macau S.A.R.', 'countrycode' : 853, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'MK', 'name' : 'Macedonia', 'countrycode' : 389, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'MG', 'name' : 'Madagascar', 'countrycode' : 261, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'MW', 'name' : 'Malawi', 'countrycode' : 265, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'MY', 'name' : 'Malaysia', 'countrycode' : 60, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'MV', 'name' : 'Maldives', 'countrycode' : 960, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'ML', 'name' : 'Mali', 'countrycode' : 223, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'MT', 'name' : 'Malta', 'countrycode' : 356, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'XM', 'name' : 'Man (Isle of)', 'countrycode' : 44, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'MH', 'name' : 'Marshall Islands', 'countrycode' : 692, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'MQ', 'name' : 'Martinique', 'countrycode' : 596, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'MR', 'name' : 'Mauritania', 'countrycode' : 222, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'MU', 'name' : 'Mauritius', 'countrycode' : 230, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'YT', 'name' : 'Mayotte', 'countrycode' : 269, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'MX', 'name' : 'Mexico', 'countrycode' : 52, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'FM', 'name' : 'Micronesia', 'countrycode' : 691, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'MD', 'name' : 'Moldova', 'countrycode' : 373, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'MC', 'name' : 'Monaco', 'countrycode' : 377, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'MN', 'name' : 'Mongolia', 'countrycode' : 976, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'MS', 'name' : 'Montserrat', 'countrycode' : 1664, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'MA', 'name' : 'Morocco', 'countrycode' : 212, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'MZ', 'name' : 'Mozambique', 'countrycode' : 258, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'MM', 'name' : 'Myanmar', 'countrycode' : 95, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'NA', 'name' : 'Namibia', 'countrycode' : 264, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'NR', 'name' : 'Nauru', 'countrycode' : 674, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'NP', 'name' : 'Nepal', 'countrycode' : 977, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'AN', 'name' : 'Netherlands Antilles', 'countrycode' : 599, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'NL', 'name' : 'Netherlands The', 'countrycode' : 31, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'NC', 'name' : 'New Caledonia', 'countrycode' : 687, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'NZ', 'name' : 'New Zealand', 'countrycode' : 64, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'NI', 'name' : 'Nicaragua', 'countrycode' : 505, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'NE', 'name' : 'Niger', 'countrycode' : 227, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'NG', 'name' : 'Nigeria', 'countrycode' : 234, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'NU', 'name' : 'Niue', 'countrycode' : 683, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'NF', 'name' : 'Norfolk Island', 'countrycode' : 672, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'MP', 'name' : 'Northern Mariana Islands', 'countrycode' : 1670, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'NO', 'name' : 'Norway', 'countrycode' : 47, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'OM', 'name' : 'Oman', 'countrycode' : 968, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'PK', 'name' : 'Pakistan', 'countrycode' : 92, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'PW', 'name' : 'Palau', 'countrycode' : 680, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'PS', 'name' : 'Palestinian Territory Occupied', 'countrycode' : 970, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'PA', 'name' : 'Panama', 'countrycode' : 507, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'PG', 'name' : 'Papua new Guinea', 'countrycode' : 675, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'PY', 'name' : 'Paraguay', 'countrycode' : 595, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'PE', 'name' : 'Peru', 'countrycode' : 51, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'PH', 'name' : 'Philippines', 'countrycode' : 63, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'PN', 'name' : 'Pitcairn Island', 'countrycode' : 0, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'PL', 'name' : 'Poland', 'countrycode' : 48, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'PT', 'name' : 'Portugal', 'countrycode' : 351, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'PR', 'name' : 'Puerto Rico', 'countrycode' : 1787, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'QA', 'name' : 'Qatar', 'countrycode' : 974, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'RE', 'name' : 'Reunion', 'countrycode' : 262, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'RO', 'name' : 'Romania', 'countrycode' : 40, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'RU', 'name' : 'Russia', 'countrycode' : 70, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'RW', 'name' : 'Rwanda', 'countrycode' : 250, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'SH', 'name' : 'Saint Helena', 'countrycode' : 290, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'KN', 'name' : 'Saint Kitts And Nevis', 'countrycode' : 1869, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'LC', 'name' : 'Saint Lucia', 'countrycode' : 1758, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'PM', 'name' : 'Saint Pierre and Miquelon', 'countrycode' : 508, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'VC', 'name' : 'Saint Vincent And The Grenadines', 'countrycode' : 1784, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'WS', 'name' : 'Samoa', 'countrycode' : 684, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'SM', 'name' : 'San Marino', 'countrycode' : 378, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'ST', 'name' : 'Sao Tome and Principe', 'countrycode' : 239, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'SA', 'name' : 'Saudi Arabia', 'countrycode' : 966, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'SN', 'name' : 'Senegal', 'countrycode' : 221, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'RS', 'name' : 'Serbia', 'countrycode' : 381, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'SC', 'name' : 'Seychelles', 'countrycode' : 248, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'SL', 'name' : 'Sierra Leone', 'countrycode' : 232, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'SG', 'name' : 'Singapore', 'countrycode' : 65, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'SK', 'name' : 'Slovakia', 'countrycode' : 421, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'SI', 'name' : 'Slovenia', 'countrycode' : 386, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'XG', 'name' : 'Smaller Territories of the UK', 'countrycode' : 44, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'SB', 'name' : 'Solomon Islands', 'countrycode' : 677, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'SO', 'name' : 'Somalia', 'countrycode' : 252, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'ZA', 'name' : 'South Africa', 'countrycode' : 27, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'GS', 'name' : 'South Georgia', 'countrycode' : 0, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'SS', 'name' : 'South Sudan', 'countrycode' : 211, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'ES', 'name' : 'Spain', 'countrycode' : 34, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'LK', 'name' : 'Sri Lanka', 'countrycode' : 94, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'SD', 'name' : 'Sudan', 'countrycode' : 249, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'SR', 'name' : 'Suriname', 'countrycode' : 597, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'SJ', 'name' : 'Svalbard And Jan Mayen Islands', 'countrycode' : 47, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'SZ', 'name' : 'Swaziland', 'countrycode' : 268, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'SE', 'name' : 'Sweden', 'countrycode' : 46, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'CH', 'name' : 'Switzerland', 'countrycode' : 41, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'SY', 'name' : 'Syria', 'countrycode' : 963, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'TW', 'name' : 'Taiwan', 'countrycode' : 886, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'TJ', 'name' : 'Tajikistan', 'countrycode' : 992, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'TZ', 'name' : 'Tanzania', 'countrycode' : 255, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'TH', 'name' : 'Thailand', 'countrycode' : 66, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'TG', 'name' : 'Togo', 'countrycode' : 228, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'TK', 'name' : 'Tokelau', 'countrycode' : 690, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'TO', 'name' : 'Tonga', 'countrycode' : 676, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'TT', 'name' : 'Trinidad And Tobago', 'countrycode' : 1868, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'TN', 'name' : 'Tunisia', 'countrycode' : 216, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'TR', 'name' : 'Turkey', 'countrycode' : 90, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'TM', 'name' : 'Turkmenistan', 'countrycode' : 7370, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'TC', 'name' : 'Turks And Caicos Islands', 'countrycode' : 1649, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'TV', 'name' : 'Tuvalu', 'countrycode' : 688, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'UG', 'name' : 'Uganda', 'countrycode' : 256, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'UA', 'name' : 'Ukraine', 'countrycode' : 380, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'AE', 'name' : 'United Arab Emirates', 'countrycode' : 971, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'GB', 'name' : 'United Kingdom', 'countrycode' : 44, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'US', 'name' : 'United States', 'countrycode' : 1, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'UM', 'name' : 'United States Minor Outlying Islands', 'countrycode' : 1, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'UY', 'name' : 'Uruguay', 'countrycode' : 598, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'UZ', 'name' : 'Uzbekistan', 'countrycode' : 998, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'VU', 'name' : 'Vanuatu', 'countrycode' : 678, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'VA', 'name' : 'Vatican City State (Holy See)', 'countrycode' : 39, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'VE', 'name' : 'Venezuela', 'countrycode' : 58, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'VN', 'name' : 'Vietnam', 'countrycode' : 84, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'VG', 'name' : 'Virgin Islands (British)', 'countrycode' : 1284, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'VI', 'name' : 'Virgin Islands (US)', 'countrycode' : 1340, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'WF', 'name' : 'Wallis And Futuna Islands', 'countrycode' : 681, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'EH', 'name' : 'Western Sahara', 'countrycode' : 212, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'YE', 'name' : 'Yemen', 'countrycode' : 967, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'YU', 'name' : 'Yugoslavia', 'countrycode' : 38, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'ZM', 'name' : 'Zambia', 'countrycode' : 260, 'createdAt' :  new Date(), 'updatedAt' : new Date() },
      { 'shortName' : 'ZW', 'name' : 'Zimbabwe', 'countrycode' : 26, 'createdAt' :  new Date(), 'updatedAt' : new Date() }
    ]
   );
}
export async function down(queryInterface, Sequelize) {
  return await queryInterface.bulkDelete('countryMasters', [], {});
}
