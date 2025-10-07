export interface Entity {
    id?: number;
}

export interface PathTables {
    section: string;
    title: string;
    columns: string[];
};

export interface PathCards {
    name: string;
    content: string | RegExp;
};

export interface Paths {
    cards?: PathCards[];
    folderName?: string;
    url?: string;
    permissions?: string[];
    tables?: PathTables[];
    images?: Record<string, string>;
    sidebarTitle?: string;
    [key: string]: Paths | string | string[] | undefined | PathTables[] | PathCards[] | Record<string, string>;
};
