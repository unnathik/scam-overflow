import {useState, useEffect} from 'react';
import {BsSearch, BsChatRight, BsArrowLeftShort} from "react-icons/bs";
import {BiLogOut} from "react-icons/bi"
import { Button } from 'bootstrap';
import {signInWithGoogle} from './signInWithGoogle'
import { FirebaseError } from 'firebase/app';
import { auth } from './firebase'
import Dropdown from "./Dropdown"

const Scam = () => {
  const [open, setOpen] = useState(true);
  const [func, setFunc] = useState(0);
  const [industry, setIndustry] = useState(0);
  const [education, setEducation] = useState(0);
  const [experience, setExperience] = useState(0);
  const [employment, setEmployment] = useState(0);
  const [questions, setQuestions] = useState(0);
  const [logo, setLogo] = useState(0);
  const [telecommuting, setTelecommuting] = useState(0);

  const [result, setResult] = useState("")
  const [resultStatus, setResultStatus] = useState(false)

  const Menus = [
    {title: "Scam or Not?", icon: <BsSearch />, route: '/'},
    {title: "Report Jobs", icon: <BsChatRight />, route: '/forum'},
    //{title: "Log Out",  spacing: true, icon: <BiLogOut />}
  ]

  const [authStatus, setAuthStatus] = useState(false);
  useEffect(() => {auth.onAuthStateChanged(user => 
    {if (user == null) {
      //console.log(user)
      setAuthStatus(false)
      //console.log(authStatus)
    } else {
      //console.log(user)
      setAuthStatus(true)
      //console.log(authStatus)
    }});
  }, [])

  const options_function = [
    {label: 'Accounting/Auditing', value: 0},
    {label: 'Administrative', value: 1},
    {label: 'Advertising', value: 2},
    {label: 'Art/Creative', value: 3},
    {label: 'Business Analyst', value: 4},
    {label: 'Business Development', value: 5},
    {label: 'Consulting', value: 6},
    {label: 'Customer Service', value: 7},
    {label: 'Data Analyst', value: 8},
    {label: 'Design', value: 9},
    {label: 'Distribution', value: 10},
    {label: 'Education', value: 11},
    {label: 'Engineering', value: 12},
    {label: 'Finance', value: 13},
    {label: 'Financial Analyst', value: 14},
    {label: 'General Business', value: 15},
    {label: 'Health Care Provider', value: 16},
    {label: 'Human Resources', value: 17},
    {label: 'Information Technology', value: 18},
    {label: 'Legal', value: 19},
    {label: 'Management', value: 20},
    {label: 'Manufacturing', value: 21},
    {label: 'Marketing', value: 22},
    {label: 'Other', value: 23},
    {label: 'Product Management', value: 24},
    {label: 'Production', value: 25},
    {label: 'Project Management', value: 26},
    {label: 'Public Relations', value: 27},
    {label: 'Purchasing', value: 28},
    {label: 'Quality Assurance', value: 29},
    {label: 'Research', value: 30},
    {label: 'Sales', value: 31},
    {label: 'Science', value: 32},
    {label: 'Strategy/Planning', value: 33},
    {label: 'Supply Chain', value: 34},
    {label: 'Training', value: 35},
    {label: 'Writing/Editing', value: 36}
  ];

  const options_industry = [
    {label: 'Accounting', value: 0},
    {label: 'Airlines/Aviation', value: 1},
    {label: 'Alternative Dispute Resolution', value: 2},
    {label: 'Animation', value: 3},
    {label: 'Apparel & Fashion', value: 4},
    {label: 'Architecture & Planning', value: 5},
    {label: 'Automotive', value: 6},
    {label: 'Aviation & Aerospace', value: 7},
    {label: 'Banking', value: 8},
    {label: 'Biotechnology', value: 9},
    {label: 'Broadcast Media', value: 10},
    {label: 'Building Materials', value: 11},
    {label: 'Business Supplies and Equipment', value: 12},
    {label: 'Capital Markets', value: 13},
    {label: 'Chemicals', value: 14},
    {label: 'Civic & Social Organization', value: 15},
    {label: 'Civil Engineering', value: 16},
    {label: 'Commercial Real Estate', value: 17},
    {label: 'Computer & Network Security', value: 18},
    {label: 'Computer Games', value: 19},
    {label: 'Computer Hardware', value: 20},
    {label: 'Computer Networking', value: 21},
    {label: 'Computer Software', value: 22},
    {label: 'Construction', value: 23},
    {label: 'Consumer Electronics', value: 24},
    {label: 'Consumer Goods', value: 25},
    {label: 'Consumer Services', value: 26},
    {label: 'Cosmetics', value: 27},
    {label: 'Defense & Space', value: 28},
    {label: 'Design', value: 29},
    {label: 'E-Learning', value: 30},
    {label: 'Education Management', value: 31},
    {label: 'Electrical/Electronic Manufacturing', value: 32},
    {label: 'Entertainment', value: 33},
    {label: 'Environmental Services', value: 34},
    {label: 'Events Services', value: 35},
    {label: 'Executive Office', value: 36},
    {label: 'Facilities Services', value: 37},
    {label: 'Farming', value: 38},
    {label: 'Financial Services', value: 39},
    {label: 'Fishery', value: 40},
    {label: 'Food & Beverages', value: 41},
    {label: 'Food Production', value: 42},
    {label: 'Fund-Raising', value: 43},
    {label: 'Furniture', value: 44},
    {label: 'Gambling & Casinos', value: 45},
    {label: 'Government Administration', value: 46},
    {label: 'Government Relations', value: 47},
    {label: 'Graphic Design', value: 48},
    {label: 'Health, Wellness and Fitness', value: 49},
    {label: 'Higher Education', value: 50},
    {label: 'Hospital & Health Care', value: 51},
    {label: 'Hospitality', value: 52},
    {label: 'Human Resources', value: 53},
    {label: 'Import and Export', value: 54},
    {label: 'Individual & Family Services', value: 55},
    {label: 'Industrial Automation', value: 56},
    {label: 'Information Services', value: 57},
    {label: 'Information Technology and Services', value: 58},
    {label: 'Insurance', value: 59},
    {label: 'International Trade and Development', value: 60},
    {label: 'Internet', value: 61},
    {label: 'Investment Banking', value: 62},
    {label: 'Investment Management', value: 63},
    {label: 'Law Enforcement', value: 64},
    {label: 'Law Practice', value: 65},
    {label: 'Legal Services', value: 66},
    {label: 'Leisure, Travel & Tourism', value: 67},
    {label: 'Libraries', value: 68},
    {label: 'Logistics and Supply Chain', value: 69},
    {label: 'Luxury Goods & Jewelry', value: 70},
    {label: 'Machinery', value: 71},
    {label: 'Management Consulting', value: 72},
    {label: 'Maritime', value: 73},
    {label: 'Market Research', value: 74},
    {label: 'Marketing and Advertising', value: 75},
    {label: 'Mechanical or Industrial Engineering', value: 76},
    {label: 'Media Production', value: 77},
    {label: 'Medical Devices', value: 78},
    {label: 'Medical Practice', value: 79},
    {label: 'Mental Health Care', value: 80},
    {label: 'Military', value: 81},
    {label: 'Mining & Metals', value: 82},
    {label: 'Motion Pictures and Film', value: 83},
    {label: 'Museums and Institutions', value: 84},
    {label: 'Music', value: 85},
    {label: 'Nanotechnology', value: 86},
    {label: 'Nonprofit Organization Management', value: 87},
    {label: 'Oil & Energy', value: 88},
    {label: 'Online Media', value: 89},
    {label: 'Outsourcing/Offshoring', value: 90},
    {label: 'Package/Freight Delivery', value: 91},
    {label: 'Packaging and Containers', value: 92},
    {label: 'Performing Arts', value: 93},
    {label: 'Pharmaceuticals', value: 94},
    {label: 'Philanthropy', value: 95},
    {label: 'Photography', value: 96},
    {label: 'Plastics', value: 97},
    {label: 'Primary/Secondary Education', value: 98},
    {label: 'Printing', value: 99},
    {label: 'Professional Training & Coaching', value: 100},
    {label: 'Program Development', value: 101},
    {label: 'Public Policy', value: 102},
    {label: 'Public Relations and Communications', value: 103},
    {label: 'Public Safety', value: 104},
    {label: 'Publishing', value: 105},
    {label: 'Ranching', value: 106},
    {label: 'Real Estate', value: 107},
    {label: 'Religious Institutions', value: 108},
    {label: 'Renewables & Environment', value: 109},
    {label: 'Research', value: 110},
    {label: 'Restaurants', value: 111},
    {label: 'Retail', value: 112},
    {label: 'Security and Investigations', value: 113},
    {label: 'Semiconductors', value: 114},
    {label: 'Shipbuilding', value: 115},
    {label: 'Sporting Goods', value: 116},
    {label: 'Sports', value: 117},
    {label: 'Staffing and Recruiting', value: 118},
    {label: 'Telecommunications', value: 119},
    {label: 'Textiles', value: 120},
    {label: 'Translation and Localization', value: 121},
    {label: 'Transportation/Trucking/Railroad', value: 122},
    {label: 'Utilities', value: 123},
    {label: 'Venture Capital & Private Equity', value: 124},
    {label: 'Veterinary', value: 125},
    {label: 'Warehousing', value: 126},
    {label: 'Wholesale', value: 127},
    {label: 'Wine and Spirits', value: 128},
    {label: 'Wireless', value: 129},
    {label: 'Writing and Editing', value: 130}
  ];

  const options_education = [
    {label: 'Associate Degree', value: 0},
    {label: 'Bachelor\'s Degree', value: 1},
    {label: 'Certification', value: 2},
    {label: 'Doctorate', value: 3},
    {label: 'High School or equivalent', value: 4},
    {label: 'Master\'s Degree', value: 5},
    {label: 'Professional', value: 6},
    {label: 'Some College Coursework Completed', value: 7},
    {label: 'Some High School Coursework', value: 8},
    {label: 'Unspecified', value: 9},
    {label: 'Vocational', value: 10},
    {label: 'Vocational - Degree', value: 11},
    {label: 'Vocational - HS Diploma', value: 12}
  ];

  const options_experience = [
    {label: 'Associate', value: 0},
    {label: 'Director', value: 1},
    {label: 'Entry level', value: 2},
    {label: 'Executive', value: 3},
    {label: 'Internship', value: 4},
    {label: 'Mid-Senior level', value: 5},
    {label: 'Not Applicable', value: 6}
  ];

  const options_employment = [
    {label: 'Contract', value: 0},
    {label: 'Full-time', value: 1},
    {label: 'Other', value: 2},
    {label: 'Part-time', value: 3},
    {label: 'Temporary', value: 4}
  ];

  const options_questions = [
    {label: 'Yes', value: 1},
    {label: 'No', value: 0},
  ];

  const options_logo = [
    {label: 'Yes', value: 1},
    {label: 'No', value: 0},
  ];

  const options_telecommuting = [
    {label: 'Yes', value: 1},
    {label: 'No', value: 0},
  ];

  function validate(x) {
    console.log(x === "[0]")
    if (x == "[0]") {
      setResult("NOT SCAM")
    } else {
      setResult("SCAM")
    }
  }

  const handleSubmit = () => {
    var xhr = new XMLHttpRequest();
    var url = "https://codewithfun.pythonanywhere.com/getOutput"
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onload = () => validate(xhr.responseText);
    var x = xhr.responseText;

  var data = JSON.stringify({
    "telecommuting": telecommuting,
    "has_company_logo": logo,
    "has_questions": questions,
    "employment_type": employment,
    "required_experience": experience,
    "required_education": education,
    "industry": industry,
    "function": func
  })

  xhr.send(data);

  

  //console.log(result)
}


  return (
    <div className="flex">
    <div className={`bg-blue-900 h-screen p-5 pt-8 ${open ? "w-72" : "w-20"} duration-300 relative`}>
    <BsArrowLeftShort className={`bg-white text-blue-900 text-3xl rounded-full
    absolute -right-3 top-9 border border-blue-900 cursor-pointer ${!open && "rotate-180"}`} onClick={() => setOpen(!open)}/>
    <div>
      <h1 className={`text-white font-medium text-2xl ${!open && "scale-0"} duration-300`}>Scam Overflow</h1>
    </div>
    <ul className="pt-2">
      {Menus.map((menu, index) => <>
      <li key={index} className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2
      hover:text-white ${menu.spacing ? "mt-9" : "mt-2"}`}>
        <span className="text-2xl block float-left">
          {menu.icon}
        </span>
        <a href={menu.route}>
        <span className={`text-base font-medium flex-1 ${!open && "hidden"} duration-200`} >
          {menu.title}
        </span>
        </a>
      </li>
      </>)}
    </ul>
    <button className={`text-gray-300 text-base flex items-center gap-x-4 cursor-pointer p-2
      hover:text-white ${authStatus && "hidden"} `} onClick={signInWithGoogle}>Sign In</button>
    <button className={`text-gray-300 text-base flex items-center gap-x-4 cursor-pointer p-2
      hover:text-white ${!authStatus && "hidden"}`} onClick={() => auth.signOut()}>Sign Out</button>
    </div>
    
    <div className="p-7 w-full">
      <h1 className="text-2xl font-bold">
        Scam or not?
      </h1>
      <div className="flex w-full py-3">
          <div className="flex items-center w-1/4">Job Function</div>
          <div className="w-full px-7"><Dropdown isSearchable placeHolder="Select..." options={options_function} onChange={(event) => setFunc(event.value)}/></div>
        </div>
        <div className="flex w-full py-3">
          <div className="flex items-center w-1/4">Industry</div>
          <div className="w-full px-7"><Dropdown isSearchable placeHolder="Select..." options={options_industry} onChange={(event) => setIndustry(event.value)}/></div>
        </div>
        <div className="flex w-full py-3">
          <div className="flex items-center w-1/4">Required Education</div>
          <div className="w-full px-7"><Dropdown isSearchable placeHolder="Select..." options={options_education} onChange={(event) => setEducation(event.value)}/></div>
        </div>
        <div className="flex w-full py-3">
          <div className="flex items-center w-1/4">Required Experience</div>
          <div className="w-full px-7"><Dropdown isSearchable placeHolder="Select..." options={options_experience} onChange={(event) => setExperience(event.value)}/></div>
        </div>
        <div className="flex w-full py-3">
          <div className="flex items-center w-1/4">Employment Type</div>
          <div className="w-full px-7"><Dropdown isSearchable placeHolder="Select..." options={options_employment} onChange={(event) => setEmployment(event.value)}/></div>
        </div>
        <div className="flex w-full py-3">
          <div className="flex items-center w-1/4">Has Questions?</div>
          <div className="w-full px-7"><Dropdown isSearchable placeHolder="Select..." options={options_questions} onChange={(event) => setQuestions(event.value)}/></div>
        </div>
        <div className="flex w-full py-3">
          <div className="flex items-center w-1/4">Has Logo?</div>
          <div className="w-full px-7"><Dropdown isSearchable placeHolder="Select..." options={options_logo} onChange={(event) => setLogo(event.value)}/></div>
        </div>
        <div className="flex w-full py-3">
          <div className="flex items-center w-1/4">Telecommuting</div>
          <div className="w-full px-7"><Dropdown isSearchable placeHolder="Select..." options={options_telecommuting} onChange={(event) => setTelecommuting(event.value)}/></div>
        </div>
        <div><button className="rounded  pt-15 bg-white text-blue-900 text-medium" onClick={handleSubmit}>Submit →</button></div>
        <div>
          <p className={`text-center text-red-500 font-semibold`}>
            {result}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Scam;