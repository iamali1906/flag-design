import { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
    faFlag,
    faHourglassStart,
    faTriangleExclamation,
    faFireFlameCurved,
    faAngleDown,
} from "@fortawesome/free-solid-svg-icons";

export interface Flag {
    id: number,
    name: string;
    date: Date;
    icon: IconProp;
    color: string;
}
export const flagsList: Flag[] = [
    {
        id: 1,
        name: 'Flag Level 1',
        date: new Date(new Date().setHours(6, 56, 0, 0)),
        icon: faFlag,
        color: "#37b405"
    },
    {
        id: 2,
        name: 'Flag Level 2',
        date: new Date('2024-07-24T14:00:00'),
        icon: faHourglassStart,
        color: "#05a0d7"
    },
    {
        id: 3,
        name: 'Flag Level 3',
        date: new Date('2024-07-25T16:00:00'),
        icon: faTriangleExclamation,
        color: "#ff8c00"
    },
    {
        id: 4,
        name: 'Flag Level 4',
        date: new Date('2024-07-28T14:00:00'),
        icon: faFireFlameCurved,
        color: "#e11e1e"
    },
];

export const flagsHistoryList: Flag[] = [
    {
        id: 1,
        name: 'Flag Level 5',
        date: new Date(new Date().setHours(7, 34, 0, 0)),
        icon: faFlag,
        color: "#37b405"
    },
    {
        id: 2,
        name: 'Flag Level 6',
        date: new Date('2023-04-28T14:00:00'),
        icon: faHourglassStart,
        color: "#05a0d7"
    },
    {
        id: 3,
        name: 'Flag Level 7',
        date: new Date('2023-05-18T16:00:00'),
        icon: faTriangleExclamation,
        color: "#ff8c00"
    },
    {
        id: 4,
        name: 'Flag Level 8',
        date: new Date('2023-06-12T14:00:00'),
        icon: faFireFlameCurved,
        color: "#e11e1e"
    },
];

