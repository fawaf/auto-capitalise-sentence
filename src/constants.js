import { names } from './name-constants'

const days = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
]

const months = [
  'January',
  'February',
  'April',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

const common_tech_words = [
  'API',
  'APIs',
  'CLI',
  'CSS',
  'CosmosDB',
  'DevOps',
  'DynamoDB',
  'ECMAScript',
  'GitHub',
  'Google',
  'HBase',
  'Instagram',
  'JavaScript',
  'MVC',
  'MariaDB',
  'Microsoft',
  'MongoDB',
  'Motorola',
  'Mozilla',
  'MySQL',
  'MySpace',
  'NuGet',
  'Ocaml',
  'OpenOffice',
  'PHP',
  'PR',
  'PRs',
  'PayPal',
  'Perl',
  'PostgreSQL',
  'PowerPC',
  'PowerPoint',
  'PyTorch',
  'Qualcomm',
  'Redis',
  'Redshift',
  'S3',
  'SQLite',
  'SUSE',
  'SVN',
  'Scala',
  'Sega',
  'UI',
  'Ubuntu',
  'VoIP',
  'eBay',
  'iOS',
  'iPad',
  'iPhone',
  'iPod',
  'iTunes',
]

const abbreviations = [
  'AFR',
  'AMD',
  'AOL',
  'APM',
  'ATM',
  'AWS',
  'BBB',
  'BMW',
  'BP',
  'BRB',
  'BSD',
  'BTW',
  'CRE',
  'CVS',
  'DIY',
  'FAQ',
  'FDR',
  'FNMA',
  'FSF',
  'FTW',
  'FYI',
  'GE',
  'GNU',
  'GTE',
  'GTG',
  'HBO',
  'HSBC',
  'IBM',
  'ICYMI',
  'IDK',
  'IKEA',
  'IMO',
  'IOW',
  'ISO',
  'ITT',
  'JFK',
  'KFC',
  'LGTM',
  'LOL',
  'MCI',
  'MGM',
  'MIT',
  'MMW',
  'MSDN',
  'NASCAR',
  'NORAD',
  'NP',
  'NSA',
  'NVIDIA',
  'NW',
  'OMG',
  'OTOH',
  'POV',
  'RCA',
  'RDS',
  'ROTFL',
  'RSVP',
  'SARS',
  'SMH',
  'TBA',
  'TBC',
  'TBH',
  'TC',
  'TGIF',
  'THX',
  'TIA',
  'TTYL',
  'TWA',
  'UBS',
  'UCLA',
  'UPS',
  'USB',
  'WFH',
  'WSL',
  'WTF',
  'WTH',
]

let words_with_apostrophe = {
  arent: "aren't",
  doesnt: "doesn't",
  cant: "can't",
  wont: "won't",
  dont: "don't",
  shes: "she's",
  hes: "he's",
  theres: "there's",
  theyre: "they're",
  youve: "you've",
  youre: "you're",
  couldnt: "couldn't",
  shouldnt: "shouldn't",
  wouldnt: "wouldn't",
}

let constants = days.concat(months, abbreviations, common_tech_words)

let constants_map = constants.reduce((obj, val) => {
  obj[val.toLowerCase()] = val
  return obj
}, {})

//convert array to key-value pairs
export let constants_key_val = { ...constants_map, ...words_with_apostrophe }

export let names_key_val = names.reduce((obj, val) => {
  obj[val.toLowerCase()] = val
  return obj
}, {})
