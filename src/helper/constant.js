const Roles = [
  "Backend",
  "Frontend",
  "Fullstack",
  "IOS",
  "Flutter",
  "React Native",
  "Android",
  "Tech Lead",
  "DevOps",
];
const Experience = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
const Remote = ["Remote", "Onsite", "Hybrid"];
const TechStack = [
  "Python",
  "Java",
  "GoLang",
  "Ruby/Rails",
  "C++",
  "Kotlin",
  "C#",
  "Django",
  "GraphQL",
  "NodeJS",
  "ReactJS",
  "VueJS",
  "JavaScript",
  "TypeScript",
  "Flask",
  "AWS",
  "Rust",
];
const MinBaseSalary = [
  "10",
  "20",
  "30",
  "40",
  "50",
  "60",
  "70",
  "80",
  "90",
  "100",
  "110",
  "120",
  "130",
  "140",
  "150",
];

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 195,
    },
  },
};

export { Roles, Experience, Remote, TechStack, MinBaseSalary, MenuProps };
