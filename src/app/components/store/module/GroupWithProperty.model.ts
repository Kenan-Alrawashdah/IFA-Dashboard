export interface GroupModel {
    id:                  number;
    name:                string;
    description:         null;
    categorys:           null;
    categorysNames:      null;
    numberOfPropriety:   number;
    Property:number;
    propertysInsidGroup: PropertysInsidGroup[];
}

export interface PropertysInsidGroup {
    id:          number;
    name:        string;
    description: null;
    groupId:     null;
    group:       null;
}
