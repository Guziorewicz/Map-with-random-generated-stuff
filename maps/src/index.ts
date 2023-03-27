// Starts with importing class models from other .ts files
import { User} from "./User";
import { Company} from "./Company";
import { CustomMap } from "./CustomMap";

// Add reference for google types
/// <reference types="@types/google.maps" />

// Init object from class
const user = new User();
const company = new Company();
const customMap = new CustomMap('map');

// Init markers for User and Company
customMap.addMarker(user);
customMap.addMarker(company);




