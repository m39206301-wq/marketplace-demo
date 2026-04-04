import { T } from './tokens';

export const FORMATS = [
  { id: "flyer", label: "Flyer",  aspect: "4/5",  tagColor: T.green[700], tagBg: T.green[50] },
  { id: "image", label: "Image",  aspect: "1/1",  tagColor: "#4D8A6E",    tagBg: "#EDF6F1" },
  { id: "h5",    label: "H5",     aspect: "9/16", tagColor: T.blue[600],  tagBg: T.blue[50] },
  { id: "video", label: "Video",  aspect: "16/9", tagColor: T.warm[600],  tagBg: T.warm[100] },
];

export const FORMAT_PALETTES = {
  flyer: [
    ["#F6F0E8","#C9AE8E"],["#EBE5DC","#AB9279"],["#F1E9DE","#BFA27C"],
    ["#ECE6DF","#B49A82"],["#F3ECE3","#C4A984"],["#E9E3DB","#A6896E"],
    ["#F5EDE4","#D4B896"],["#EDE5DA","#C2A07A"],["#F0E8DF","#B8986C"],
    ["#F4EEE6","#CBAA88"],["#E8E2DA","#A48B72"],["#F2EBE2","#BEA280"],
  ],
  image: [
    ["#E6EFE9","#82B59A"],["#DCE9E2","#6AA384"],["#E2EBE7","#78AE92"],
    ["#DFEAE4","#5E9D7A"],["#E8F1EB","#8CBDA5"],["#DAE7DF","#62A074"],
    ["#E4EDE8","#74A88C"],["#DDE8E1","#68A07E"],["#E0ECE6","#70AC8E"],
    ["#E6F0EA","#88BA9E"],["#D8E6DE","#5C9C76"],["#E2EEE8","#7EB298"],
  ],
  h5: [
    ["#E4EEF6","#6A9CC8"],["#DCE8F2","#5A8CB8"],["#E0EAF4","#628EB0"],
    ["#DEE9F3","#5688B4"],["#E6F0F7","#72A4CE"],["#DAE6F0","#5284AA"],
    ["#E2ECF5","#6694BC"],["#DDE7F1","#5C8AB2"],["#E1EBF4","#6490B6"],
    ["#E5EFF7","#6E9EC6"],["#D9E5EF","#5080A8"],["#E3EDF5","#6898C0"],
  ],
  video: [
    ["#EAE6EE","#9A80B2"],["#E3DEE9","#8670A4"],["#E7E2EC","#9078B4"],
    ["#E0DCEA","#7C66A6"],["#EDEAEF","#A68EBC"],["#E5E0EB","#8A72AE"],
    ["#E8E4ED","#9680B0"],["#E2DDE8","#8268A2"],["#E6E1EB","#8C74B2"],
    ["#E1DCE9","#7E68A4"],["#EBE8EF","#A28AB8"],["#E4DFE9","#886EAA"],
  ],
};

export const PRICES = ["$0.99", "$1.49", "$0.99", "Free", "$1.99", "$0.99", "$1.49", "Free", "$0.99", "$1.99", "$1.49", "$0.99"];
