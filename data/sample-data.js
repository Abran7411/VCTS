import Category from "../models/Category";
import List from '../models/List'
export const CATEGORIES = [
    new Category('c1',
        'Import',
        'https://images.pexels.com/photos/3057963/pexels-photo-3057963.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        'Import'),
    new Category('c2',
        'Export',
        'https://images.pexels.com/photos/105377/pexels-photo-105377.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        'Export'),
    new Category('c3',
        'Vehicle Management',
        'https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        'Vehicle'),
];

export const LIST = [

    new List('ECCT TRANSPORT', 'TN04AY2061', 'INTERASIA CATALYST', 'TCLU75896300'),
    new List('KERRY TRASNPORT', 'TN04AY2078', 'EVERGREEN CHANT', 'WHSU75896300'),
    new List('MURUGAN TRANSPORT', 'TN04AY2538', 'HYUNDAI ASIA', 'TGBU75896300'),
    new List('ANSAR TRANSPORT PVT.LTD', 'TN04M4512', 'EVERGREEN PRISE', 'SBGU75896300')
];