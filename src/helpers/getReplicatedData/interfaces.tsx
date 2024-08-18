export interface Data {
   Time: string;
   Capacity: number;
   OriginalCapacity: number;
}

export interface DataDateISO extends Data {
   DateISO: string;
}

export interface PaginatedData {
   date: string; // Změna z 'page' na 'date'
   data: DataDateISO[]; // Ujisti se, že pole 'data' odpovídá typu 'MockDataDateISO[]'
}
